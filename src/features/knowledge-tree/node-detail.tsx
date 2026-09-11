"use client";

import { Button, ButtonLink } from "@/components/ui/button";
import type { CurriculumProgressState } from "@/domain/curriculum";
import type {
  KnowledgeTreeConceptNode,
  KnowledgeTreeNodeState,
} from "@/domain/knowledge-tree";
import {
  KNOWLEDGE_TREE_NODE_STATE_LABELS,
  KNOWLEDGE_TREE_PROGRESS_LABELS,
} from "@/domain/knowledge-tree";
import { SUBJECT_LABELS } from "@/domain/types";
import { studentLearnTopicHref } from "@/lib/constants";

type NodeDetailProps = {
  concept: KnowledgeTreeConceptNode;
  state: KnowledgeTreeNodeState;
  progress: CurriculumProgressState;
  blockingPrerequisiteIds: string[];
  titlesById: Record<string, string>;
  onClose: () => void;
  onSelectConnected: (conceptId: string) => void;
};

export function NodeDetail({
  concept,
  state,
  progress,
  blockingPrerequisiteIds,
  titlesById,
  onClose,
  onSelectConnected,
}: NodeDetailProps) {
  const canEnterLesson = concept.hasReadyExperience;
  const hasStarted =
    progress === "started" ||
    progress === "practiced" ||
    progress === "mastered";
  const enterLabel = hasStarted ? "Continue learning" : "Explore";
  const lessonHref = studentLearnTopicHref(concept.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`tree-leaf-${concept.id}-title`}
      className="flex flex-col gap-2"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-teal">
            {SUBJECT_LABELS[concept.subjectId]} · {concept.domainLabel}
          </p>
          <h2
            id={`tree-leaf-${concept.id}-title`}
            className="mt-0.5 text-lg font-semibold tracking-tight text-ink"
          >
            {concept.title}
          </h2>
        </div>
        <Button
          variant="ghost"
          size="inline"
          onClick={onClose}
          className="shrink-0 px-2 text-sm min-h-9"
        >
          Close
        </Button>
      </div>

      <p className="text-sm leading-6 text-ink">{concept.explainer}</p>
      <p className="text-sm leading-5 text-ink-muted">{concept.hook}</p>

      <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
        <div>
          <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-teal">
            Status
          </dt>
          <dd className="mt-0.5 text-ink">
            {KNOWLEDGE_TREE_NODE_STATE_LABELS[state]}
          </dd>
        </div>
        <div>
          <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-teal">
            Progress
          </dt>
          <dd className="mt-0.5 text-ink">
            {KNOWLEDGE_TREE_PROGRESS_LABELS[progress]}
          </dd>
        </div>
      </dl>

      {canEnterLesson ? (
        <ButtonLink
          href={lessonHref}
          className="mt-0.5 w-full touch-manipulation shadow-[0_10px_20px_rgb(14_68_80_/_0.14)]"
          data-enter-lesson=""
          data-concept-id={concept.id}
          data-tree-interactive="true"
          onPointerDown={(event) => {
            event.stopPropagation();
          }}
        >
          {enterLabel}
        </ButtonLink>
      ) : null}

      {concept.worldTitle ? (
        <p className="text-xs leading-5 text-ink-muted">
          {concept.topicTitle
            ? `${concept.worldTitle} · ${concept.topicTitle}`
            : concept.worldTitle}
        </p>
      ) : null}

      {concept.prerequisiteIds.length > 0 ? (
        <section>
          <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-teal">
            Prerequisites
          </h3>
          <ul className="mt-1 flex flex-col gap-0.5">
            {concept.prerequisiteIds.map((id) => (
              <li key={id}>
                <ConnectedLink
                  id={id}
                  title={titlesById[id] ?? id}
                  onSelect={onSelectConnected}
                />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {concept.relatedIds.length > 0 ? (
        <section>
          <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-teal">
            Connected ideas
          </h3>
          <ul className="mt-1 flex flex-col gap-0.5">
            {concept.relatedIds.map((id) => (
              <li key={id}>
                <ConnectedLink
                  id={id}
                  title={titlesById[id] ?? id}
                  onSelect={onSelectConnected}
                />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {state === "locked" ? (
        <p className="text-sm leading-5 text-ink-muted">
          This branch is still waiting on{" "}
          {blockingPrerequisiteIds
            .map((id) => titlesById[id] ?? id)
            .join(", ") || "its prerequisite ideas"}
          .
        </p>
      ) : null}

      {state === "content_not_ready" ||
      (!concept.hasReadyExperience && state !== "locked") ? (
        <div className="text-sm leading-5 text-ink-muted">
          <p>Part of your learning world.</p>
          <p>Full experience coming soon.</p>
        </div>
      ) : null}
    </div>
  );
}

function ConnectedLink({
  id,
  title,
  onSelect,
}: {
  id: string;
  title: string;
  onSelect: (conceptId: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        onSelect(id);
      }}
      className="text-left text-sm text-ink underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
    >
      {title}
    </button>
  );
}
