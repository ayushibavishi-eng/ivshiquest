"use client";

import "./learning-journey.css";

import { useEffect, useMemo, useState } from "react";
import type { Subject } from "@/domain/types";
import { SUBJECT_LABELS, SUBJECTS } from "@/domain/types";
import {
  blockingPrerequisiteIds,
  resolveKnowledgeTreeNodeState,
  type KnowledgeTreeConceptNode,
  type KnowledgeTreeNodeState,
} from "@/domain/knowledge-tree";
import { Button } from "@/components/ui/button";
import { IvshiCompanion } from "@/components/companion";
import { NodeDetail } from "@/features/knowledge-tree/node-detail";
import { cn } from "@/lib/cn";
import {
  EMPTY_CURRICULUM_PROGRESS,
  getAllCurriculumProgress,
  getCurriculumNodeTitle,
  subscribeCurriculumProgress,
} from "@/services/curriculum";
import { getKnowledgeTreeGraph } from "@/services/knowledge-tree";
import { getActiveLearnerId } from "@/services/student/active-learner";
import { readLearnerCurriculumId } from "@/services/student/learner-profile";
import { isCurriculumGrade } from "@/domain/curriculum";
import {
  JOURNEY_BANDS,
  JOURNEY_BAND_LABELS,
  JOURNEY_STATUS_LABELS,
  journeyBandForStatus,
  toJourneyStatus,
  type JourneyBand,
  type JourneyStatus,
} from "./journey-status";

type LearningJourneyScreenProps = {
  grade: number;
  subjects: Subject[];
};

type JourneyDestination = {
  concept: KnowledgeTreeConceptNode;
  state: KnowledgeTreeNodeState;
  status: JourneyStatus;
  band: JourneyBand;
};

export function LearningJourneyScreen({
  grade,
  subjects,
}: LearningJourneyScreenProps) {
  const availableSubjects = useMemo(
    () => SUBJECTS.filter((subject) => subjects.includes(subject)),
    [subjects],
  );
  const learnerId = getActiveLearnerId();
  const [subjectChoice, setSubjectChoice] = useState<Subject | null>(null);
  const activeSubject =
    subjectChoice && availableSubjects.includes(subjectChoice)
      ? subjectChoice
      : (availableSubjects[0] ?? "math");
  const [progress, setProgress] = useState(() => EMPTY_CURRICULUM_PROGRESS);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const onChange = () => {
      if (!isCurriculumGrade(grade)) {
        setProgress(EMPTY_CURRICULUM_PROGRESS);
        return;
      }
      setProgress(
        getAllCurriculumProgress({
          learnerId,
          grade,
          curriculumId: readLearnerCurriculumId(),
        }),
      );
    };
    const unsubscribe = subscribeCurriculumProgress(onChange);
    const frameId = window.requestAnimationFrame(onChange);
    return () => {
      window.cancelAnimationFrame(frameId);
      unsubscribe();
    };
  }, [grade, learnerId]);

  const graph = useMemo(
    () =>
      getKnowledgeTreeGraph(
        activeSubject,
        grade,
        readLearnerCurriculumId(),
      ),
    [activeSubject, grade],
  );

  const visibleIds = useMemo(
    () => new Set(graph.concepts.map((concept) => concept.id)),
    [graph.concepts],
  );

  const destinations = useMemo(() => {
    const next: JourneyDestination[] = [];
    for (const concept of graph.concepts) {
      const conceptProgress = progress[concept.id] ?? "unvisited";
      const state = resolveKnowledgeTreeNodeState({
        progress: conceptProgress,
        hasReadyExperience: concept.hasReadyExperience,
        blockingPrerequisiteIds: blockingPrerequisiteIds(
          concept.prerequisiteIds,
          visibleIds,
          progress,
        ),
      });
      const status = toJourneyStatus(state, conceptProgress);
      next.push({
        concept,
        state,
        status,
        band: journeyBandForStatus(status),
      });
    }
    return next;
  }, [graph.concepts, progress, visibleIds]);

  const bands = useMemo(() => {
    const byBand: Record<JourneyBand, JourneyDestination[]> = {
      past: [],
      current: [],
      next: [],
      future: [],
    };
    for (const destination of destinations) {
      byBand[destination.band].push(destination);
    }
    // Stable, calm order: domain then title.
    for (const band of JOURNEY_BANDS) {
      byBand[band].sort((a, b) => {
        const domain = a.concept.domainLabel.localeCompare(b.concept.domainLabel);
        if (domain !== 0) {
          return domain;
        }
        return a.concept.title.localeCompare(b.concept.title);
      });
    }
    return byBand;
  }, [destinations]);

  const companionDestination =
    bands.current[0] ?? bands.next.find((item) => item.concept.hasReadyExperience) ?? null;

  const selected = destinations.find((item) => item.concept.id === selectedId);

  useEffect(() => {
    if (!selectedId) {
      return;
    }
    const detail = document.querySelector("[data-journey-detail]");
    detail?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [selectedId]);
  const titlesById = useMemo(() => {
    const titles: Record<string, string> = {};
    for (const concept of graph.concepts) {
      titles[concept.id] = concept.title;
    }
    for (const concept of graph.concepts) {
      for (const id of [...concept.prerequisiteIds, ...concept.relatedIds]) {
        if (!titles[id]) {
          titles[id] = getCurriculumNodeTitle(id) ?? id;
        }
      }
    }
    return titles;
  }, [graph.concepts]);

  return (
    <div className="flex flex-1 flex-col gap-5 pb-28">
      <header className="flex flex-col gap-2">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-teal">
          Grade {grade}
        </p>
        <h1 className="text-[1.7rem] font-semibold tracking-tight text-ink sm:text-[1.85rem]">
          My Learning Journey
        </h1>
        <p className="max-w-prose text-base leading-7 text-ink-muted">
          Every discovery takes you somewhere new.
        </p>
      </header>

      <div
        role="tablist"
        aria-label="Journey subject"
        className="flex flex-wrap gap-2"
      >
        {availableSubjects.map((subject) => {
          const selectedSubject = activeSubject === subject;
          return (
            <Button
              key={subject}
              type="button"
              role="tab"
              aria-selected={selectedSubject}
              variant={selectedSubject ? "brand" : "ghost"}
              onClick={() => {
                setSelectedId(null);
                setSubjectChoice(subject);
              }}
              className={cn(
                "min-h-11 rounded-full px-4",
                selectedSubject ? undefined : "ring-1 ring-line",
              )}
            >
              {SUBJECT_LABELS[subject]}
            </Button>
          );
        })}
      </div>

      <JourneyLegend />

      <div className="journey-landscape relative overflow-hidden rounded-[1.8rem] ring-1 ring-line shadow-hero">
        <div className="journey-sky" aria-hidden="true" />
        <div className="journey-horizon" aria-hidden="true" />
        <div className="journey-water" aria-hidden="true" />

        <div className="relative z-10 flex flex-col gap-0 px-4 py-6 sm:px-6 sm:py-8">
          {JOURNEY_BANDS.map((band, bandIndex) => {
            const items = bands[band];
            const showCompanion =
              Boolean(companionDestination) &&
              band === companionDestination?.band;
            return (
              <section
                key={band}
                aria-labelledby={`journey-band-${band}`}
                className="relative"
              >
                {bandIndex > 0 ? (
                  <div className="journey-path" aria-hidden="true" />
                ) : null}

                <div className="mb-3 flex items-end justify-between gap-3">
                  <h2
                    id={`journey-band-${band}`}
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted"
                  >
                    {JOURNEY_BAND_LABELS[band]}
                  </h2>
                  {showCompanion ? (
                    <IvshiCompanion
                      state="curious"
                      size={28}
                      className="text-sm text-ink-muted"
                      label="Ivshi is here"
                    />
                  ) : null}
                </div>

                {items.length === 0 ? (
                  <p className="mb-8 rounded-[1.25rem] bg-canvas/55 px-4 py-5 text-sm leading-6 text-ink-muted ring-1 ring-line/60 backdrop-blur-[2px]">
                    {band === "past"
                      ? "Your discoveries will gather here."
                      : band === "current"
                        ? "Nothing in progress yet — pick a next discovery."
                        : band === "next"
                          ? "New destinations will open as you explore."
                          : "More of this landscape is still ahead."}
                  </p>
                ) : (
                  <ul className="mb-8 grid list-none gap-3 sm:grid-cols-2">
                    {items.map((item) => {
                      const isSelected = selectedId === item.concept.id;
                      const isCompanion =
                        companionDestination?.concept.id === item.concept.id;
                      return (
                        <li key={item.concept.id}>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedId(item.concept.id);
                            }}
                            aria-pressed={isSelected}
                            className={cn(
                              "journey-destination group flex min-h-[4.5rem] w-full flex-col gap-1 rounded-[1.25rem] px-4 py-3.5 text-left transition-[box-shadow,transform,background-color] duration-200",
                              "bg-canvas/70 ring-1 ring-line/70 backdrop-blur-[2px]",
                              "hover:bg-canvas/90 hover:ring-teal/35",
                              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
                              isSelected &&
                                "bg-canvas ring-2 ring-teal/50 shadow-[0_12px_28px_rgb(14_68_80_/_0.12)]",
                              isCompanion && "journey-destination-current",
                            )}
                          >
                            <span className="flex items-center justify-between gap-2">
                              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-teal">
                                {item.concept.domainLabel}
                              </span>
                              <span
                                className={cn(
                                  "inline-flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink-muted",
                                )}
                              >
                                <StatusDot status={item.status} />
                                {JOURNEY_STATUS_LABELS[item.status]}
                              </span>
                            </span>
                            <span className="text-base font-semibold tracking-tight text-ink">
                              {item.concept.title}
                            </span>
                            <span className="line-clamp-2 text-sm leading-5 text-ink-muted">
                              {item.concept.hook}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      </div>

      {selected ? (
        <section
          className="rounded-[1.35rem] bg-surface-elevated px-4 py-4 shadow-card ring-1 ring-line sm:px-5"
          data-journey-detail=""
        >
          <NodeDetail
            concept={selected.concept}
            state={selected.state}
            progress={progress[selected.concept.id] ?? "unvisited"}
            blockingPrerequisiteIds={blockingPrerequisiteIds(
              selected.concept.prerequisiteIds,
              visibleIds,
              progress,
            )}
            titlesById={titlesById}
            onClose={() => {
              setSelectedId(null);
            }}
            onSelectConnected={(id) => {
              if (visibleIds.has(id)) {
                setSelectedId(id);
              }
            }}
          />
        </section>
      ) : null}
    </div>
  );
}

function JourneyLegend() {
  const items: JourneyStatus[] = [
    "not_discovered",
    "available",
    "exploring",
    "growing",
    "mastered",
  ];
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
      {items.map((status) => (
        <li key={status} className="flex items-center gap-1.5">
          <StatusDot status={status} />
          {JOURNEY_STATUS_LABELS[status]}
        </li>
      ))}
    </ul>
  );
}

function StatusDot({ status }: { status: JourneyStatus }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-2.5 rounded-full ring-1 ring-ink/15",
        status === "not_discovered" && "bg-[#9aa8ae]",
        status === "available" && "bg-teal",
        status === "exploring" && "bg-[#5a9eae]",
        status === "growing" && "bg-[#c05632]/80",
        status === "mastered" && "bg-[#c05632]",
        status === "coming_soon" && "bg-[#d5cbb8]",
      )}
    />
  );
}
