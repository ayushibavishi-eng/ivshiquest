"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import type { Subject } from "@/domain/types";
import { SUBJECT_LABELS, SUBJECTS } from "@/domain/types";
import {
  blockingPrerequisiteIds,
  nearestConceptInDirection,
  resolveKnowledgeTreeNodeState,
  type KnowledgeTreeFocus,
  type KnowledgeTreeNodeState,
} from "@/domain/knowledge-tree";
import {
  layoutMagicalKnowledgeTree,
  magicalTreeLabelMode,
} from "@/domain/living-tree-layout";
import { Button } from "@/components/ui/button";
import { LivingTree } from "@/features/knowledge-tree/living-tree";
import { NodeDetail } from "@/features/knowledge-tree/node-detail";
import { useTreeViewport } from "@/features/knowledge-tree/use-tree-viewport";
import "./living-tree.css";
import { cn } from "@/lib/cn";
import {
  EMPTY_CURRICULUM_PROGRESS,
  getAllCurriculumProgress,
  getCurriculumNodeTitle,
  subscribeCurriculumProgress,
} from "@/services/curriculum";
import { getKnowledgeTreeGraph } from "@/services/knowledge-tree";

type KnowledgeTreeScreenProps = {
  grade: number;
  subjects: Subject[];
};

function getEmptyProgress() {
  return EMPTY_CURRICULUM_PROGRESS;
}

export function KnowledgeTreeScreen({
  grade,
  subjects,
}: KnowledgeTreeScreenProps) {
  const availableSubjects = useMemo(
    () => SUBJECTS.filter((subject) => subjects.includes(subject)),
    [subjects],
  );
  const [progress, setProgress] = useState(getEmptyProgress);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [focus, setFocus] = useState<KnowledgeTreeFocus>({ kind: "tree" });
  const [frame, setFrame] = useState<"portrait" | "full">("portrait");
  const [smoothCamera, setSmoothCamera] = useState(false);
  const skipSmoothRef = useRef(true);
  const focusKey =
    focus.kind === "tree"
      ? "tree"
      : focus.kind === "subject"
        ? `subject:${focus.subject}`
        : focus.kind === "domain"
          ? `domain:${focus.subject}:${focus.label}`
          : focus.kind === "cluster"
            ? `cluster:${focus.id}`
            : `concept:${focus.id}`;

  useEffect(() => {
    if (skipSmoothRef.current) {
      skipSmoothRef.current = false;
      return;
    }
    setSmoothCamera(true);
    const timer = window.setTimeout(() => {
      setSmoothCamera(false);
    }, 450);
    return () => {
      window.clearTimeout(timer);
    };
  }, [focusKey, frame]);

  useEffect(() => {
    const onChange = () => {
      setProgress(getAllCurriculumProgress());
    };
    const unsubscribe = subscribeCurriculumProgress(onChange);
    const frameId = window.requestAnimationFrame(onChange);
    return () => {
      window.cancelAnimationFrame(frameId);
      unsubscribe();
    };
  }, []);

  const graphs = useMemo(
    () => availableSubjects.map((subject) => getKnowledgeTreeGraph(subject, grade)),
    [availableSubjects, grade],
  );
  const layout = useMemo(() => layoutMagicalKnowledgeTree(graphs), [graphs]);
  const concepts = useMemo(
    () => graphs.flatMap((graph) => graph.concepts),
    [graphs],
  );
  const visibleIds = useMemo(
    () => new Set(concepts.map((concept) => concept.id)),
    [concepts],
  );
  const {
    viewportRef,
    view,
    zoomBy,
    onPointerDown,
    onPointerMove,
    onPointerUp,
  } = useTreeViewport(layout, focus, frame);
  const [port, setPort] = useState({ width: 720, height: 520 });

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) {
      return;
    }
    const update = () => {
      setPort({ width: node.clientWidth, height: node.clientHeight });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [viewportRef]);

  const states = useMemo(() => {
    const next: Record<string, KnowledgeTreeNodeState> = {};
    for (const concept of concepts) {
      next[concept.id] = resolveKnowledgeTreeNodeState({
        progress: progress[concept.id] ?? "unvisited",
        hasReadyExperience: concept.hasReadyExperience,
        blockingPrerequisiteIds: blockingPrerequisiteIds(
          concept.prerequisiteIds,
          visibleIds,
          progress,
        ),
      });
    }
    return next;
  }, [concepts, progress, visibleIds]);

  const selected = concepts.find((concept) => concept.id === selectedId);
  const titlesById = useMemo(() => {
    const titles: Record<string, string> = {};
    for (const concept of concepts) {
      titles[concept.id] = concept.title;
    }
    for (const concept of concepts) {
      for (const id of [...concept.prerequisiteIds, ...concept.relatedIds]) {
        if (!titles[id]) {
          titles[id] = getCurriculumNodeTitle(id) ?? id;
        }
      }
    }
    return titles;
  }, [concepts]);

  const labelMode = magicalTreeLabelMode({
    scale: view.scale,
    focusKind: focus.kind,
  });
  const labelBounds = {
    left: (12 - view.x) / view.scale,
    top: (48 - view.y) / view.scale,
    right: (port.width - 12 - view.x) / view.scale,
    bottom: (port.height - 48 - view.y) / view.scale,
  };

  const currentSubject =
    focus.kind === "subject" || focus.kind === "domain"
      ? focus.subject
      : focus.kind === "cluster"
        ? layout.leaves.find((leaf) => leaf.clusterId === focus.id)?.subjectId
        : selected?.subjectId;
  const focusedCluster = focus.kind === "cluster"
    ? graphs.flatMap((graph) => graph.clusters).find((cluster) => cluster.id === focus.id)
    : undefined;
  const focusedClusterDomain =
    focus.kind === "cluster"
      ? layout.leaves.find((leaf) => leaf.clusterId === focus.id)?.domainLabel
      : focus.kind === "domain"
        ? focus.label
        : undefined;
  const trail = currentSubject
    ? [
        SUBJECT_LABELS[currentSubject],
        focus.kind === "domain" ? focus.label : focusedClusterDomain,
        focusedCluster?.title,
        selected && selected.title !== focusedCluster?.title
          ? selected.title
          : null,
      ].filter((part): part is string => Boolean(part))
    : ["Knowledge Tree"];
  const back =
    selected
      ? {
          label: focusedCluster?.title ?? focusedClusterDomain ?? (currentSubject ? SUBJECT_LABELS[currentSubject] : "Knowledge Tree"),
          run: () => {
            setSelectedId(null);
          },
        }
      : focus.kind === "cluster" && currentSubject && focusedClusterDomain
        ? {
            label: focusedClusterDomain,
            run: () => {
              setFocus({
                kind: "domain",
                subject: currentSubject,
                label: focusedClusterDomain,
              });
            },
          }
        : focus.kind === "cluster" && currentSubject
          ? {
              label: SUBJECT_LABELS[currentSubject],
              run: () => {
                setFocus({ kind: "subject", subject: currentSubject });
              },
            }
        : focus.kind === "domain"
          ? {
              label: SUBJECT_LABELS[focus.subject],
              run: () => {
                setFocus({ kind: "subject", subject: focus.subject });
              },
            }
          : focus.kind === "subject"
            ? {
                label: "Knowledge Tree",
                run: () => {
                  setFocus({ kind: "tree" });
                  setFrame("full");
                },
              }
            : null;

  function goBack() {
    back?.run();
  }

  function selectConcept(conceptId: string) {
    setSelectedId(conceptId);
  }

  function handleKeyNavigation(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      if (selectedId) {
        setSelectedId(null);
        event.preventDefault();
        return;
      }
      if (back) {
        goBack();
        event.preventDefault();
      }
      return;
    }
    if (
      event.key !== "ArrowUp" &&
      event.key !== "ArrowDown" &&
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight"
    ) {
      return;
    }
    if (labelMode !== "concepts") {
      return;
    }
    if (!selectedId) {
      const first = layout.leaves.find((leaf) =>
        focus.kind === "cluster" ? leaf.clusterId === focus.id : false,
      )?.id;
      if (first) {
        selectConcept(first);
      }
      event.preventDefault();
      return;
    }
    const nextId = nearestConceptInDirection(selectedId, event.key, layout);
    if (nextId) {
      selectConcept(nextId);
      event.preventDefault();
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-4 pb-6">
      <header>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-teal">
          Grade {grade}
        </p>
        <h1 className="mt-1 text-[1.7rem] font-semibold tracking-tight text-ink">
          MY KNOWLEDGE TREE
        </h1>
        <p className="mt-1 max-w-prose text-base leading-7 text-ink-muted">
          What you learn makes your tree grow.
        </p>
      </header>

      <div
        role="tablist"
        aria-label="Focus a subject branch"
        className="flex flex-wrap gap-2"
      >
        {availableSubjects.map((item) => (
          <Button
            key={item}
            variant={currentSubject === item ? "brand" : "ghost"}
            onClick={() => {
              setSelectedId(null);
              setFocus({ kind: "subject", subject: item });
              setFrame("portrait");
            }}
            role="tab"
            aria-selected={currentSubject === item}
            className={cn(
              "min-h-11 rounded-full px-4",
              currentSubject === item ? null : "ring-1 ring-line",
            )}
          >
            {SUBJECT_LABELS[item]}
          </Button>
        ))}
      </div>

      <StateLegend />

      <div className="relative" onKeyDown={handleKeyNavigation}>
        <div
          ref={viewportRef}
          className="relative h-[min(78dvh,46rem)] cursor-grab touch-none overflow-hidden rounded-[1.8rem] shadow-hero ring-1 ring-line active:cursor-grabbing"
          onPointerDown={(event) => {
            setSmoothCamera(false);
            onPointerDown(event);
          }}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div
            className={cn(
              "origin-top-left",
              smoothCamera &&
                "motion-safe:transition-transform motion-safe:duration-[400ms] motion-safe:ease-out",
            )}
            style={{
              width: layout.width,
              height: layout.height,
              transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
            }}
          >
            <LivingTree
              graphs={graphs}
              layout={layout}
              states={states}
              selectedId={selectedId}
              focus={focus}
              labelMode={labelMode}
              viewScale={view.scale}
              visible={labelBounds}
              onSelectConcept={selectConcept}
              onSelectSubject={(subject) => {
                setSelectedId(null);
                setFocus({ kind: "subject", subject });
                setFrame("portrait");
              }}
              onSelectDomain={(subject, label) => {
                setSelectedId(null);
                setFocus({ kind: "domain", subject, label });
                setFrame("portrait");
              }}
              onSelectCluster={(id) => {
                setSelectedId(null);
                setFocus({ kind: "cluster", id });
                setFrame("portrait");
              }}
            />
          </div>

          <div className="pointer-events-none absolute inset-x-3 top-3 z-10 flex flex-wrap items-start justify-between gap-2">
            <div className="pointer-events-auto flex max-w-[min(100%,24rem)] flex-wrap items-center gap-1.5 rounded-full bg-[#f6edd9]/90 px-2 py-1 shadow-[0_8px_18px_rgb(42_26_18_/_0.12)] ring-1 ring-[#8a5a3c]/30 backdrop-blur-sm">
              {back ? (
                <Button
                  variant="ghost"
                  size="inline"
                  className="min-h-9 rounded-full px-2.5 text-sm text-ink"
                  onClick={goBack}
                >
                  ← {back.label}
                </Button>
              ) : null}
              <p className="px-2 py-1 text-sm leading-5 text-ink">
                {trail.join(" → ")}
              </p>
            </div>
            <div className="pointer-events-auto flex flex-wrap justify-end gap-1">
              <Button
                variant="ghost"
                size="inline"
                className="rounded-full bg-surface/90 px-3 ring-1 ring-line"
                onClick={() => {
                  zoomBy(0.85);
                }}
              >
                −
              </Button>
              <Button
                variant="ghost"
                size="inline"
                className="rounded-full bg-surface/90 px-3 ring-1 ring-line"
                onClick={() => {
                  zoomBy(1.18);
                }}
              >
                +
              </Button>
              <Button
                variant="ghost"
                size="inline"
                className="rounded-full bg-surface/90 px-3 ring-1 ring-line"
                onClick={() => {
                  setSelectedId(null);
                  setFocus({ kind: "tree" });
                  setFrame("full");
                }}
              >
                Whole tree
              </Button>
            </div>
          </div>

          {selected ? (
            <section
              data-tree-interactive="true"
              className="tree-concept-card absolute right-3 bottom-3 z-20 w-[min(19.5rem,calc(100%-1.5rem))] max-h-[min(30dvh,15.25rem)] overflow-auto rounded-[1.15rem] bg-[#f6edd9]/92 px-3.5 py-3 shadow-[0_12px_28px_rgb(42_26_18_/_0.18)] ring-1 ring-[#8a5a3c]/32 backdrop-blur-md max-[420px]:inset-x-3 max-[420px]:w-auto max-[420px]:max-h-[min(32dvh,15.5rem)]"
            >
              <NodeDetail
                concept={selected}
                state={states[selected.id] ?? "content_not_ready"}
                progress={progress[selected.id] ?? "unvisited"}
                blockingPrerequisiteIds={blockingPrerequisiteIds(
                  selected.prerequisiteIds,
                  visibleIds,
                  progress,
                )}
                titlesById={titlesById}
                onClose={() => {
                  setSelectedId(null);
                }}
                onSelectConnected={(id) => {
                  if (visibleIds.has(id)) {
                    selectConcept(id);
                  }
                }}
              />
            </section>
          ) : (
            <p className="pointer-events-none absolute inset-x-4 bottom-4 z-10 text-center text-sm text-ink-muted">
              {focus.kind === "tree"
                ? "Tap a subject signpost to explore that living branch."
                : focus.kind === "subject"
                  ? "Tap a domain to look closer."
                  : focus.kind === "domain"
                    ? "Tap a topic to see its buds and blooms."
                    : "Tap a bud or bloom to look inside."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function StateLegend() {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
      <li className="flex items-center gap-1.5">
        <LegendBud fill="#8a7a6a" />
        Locked
      </li>
      <li className="flex items-center gap-1.5">
        <LegendBud fill="#2f8f7c" glow />
        Ready
      </li>
      <li className="flex items-center gap-1.5">
        <LegendFlower />
        Growing
      </li>
      <li className="flex items-center gap-1.5">
        <LegendFruit />
        Mastered
      </li>
      <li className="flex items-center gap-1.5">
        <LegendBud fill="#d5cbb8" />
        Coming soon
      </li>
    </ul>
  );
}

function LegendBud({ fill, glow = false }: { fill: string; glow?: boolean }) {
  return (
    <svg width="10" height="12" viewBox="-6 -8 12 16" aria-hidden="true">
      {glow ? (
        <circle cx="0" cy="-1" r="5" fill="#fff6e0" opacity="0.45" />
      ) : null}
      <ellipse
        cx="0"
        cy="-0.6"
        rx="2.8"
        ry="5"
        fill={fill}
        stroke="#3a2418"
        strokeWidth="0.8"
      />
    </svg>
  );
}

function LegendFlower() {
  return (
    <svg width="12" height="12" viewBox="-6 -7 12 14" aria-hidden="true">
      <path d="M-3 -1 C-4 -5 0 -7 0 -2 Z" fill="#e7b7c8" />
      <path d="M3 -1 C4 -5 0 -7 0 -2 Z" fill="#f0c9d4" />
      <circle cx="0" cy="0" r="1.4" fill="#f7e7c6" />
    </svg>
  );
}

function LegendFruit() {
  return (
    <svg width="11" height="12" viewBox="-6 -7 12 14" aria-hidden="true">
      <ellipse
        cx="0"
        cy="1"
        rx="3.4"
        ry="4.2"
        fill="#c05632"
        stroke="#3a2418"
        strokeWidth="0.8"
      />
    </svg>
  );
}
