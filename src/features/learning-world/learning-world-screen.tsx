"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";
import { ButtonLink } from "@/components/ui/button";
import type { CurriculumTopic, CurriculumWorld } from "@/domain/curriculum";
import {
  WorldPathMap,
  conceptsToPathItems,
  topicsToPathItems,
} from "@/features/learning-world/world-path-map";
import { ROUTES, studentLearnPracticeHref, studentLearnTopicHref } from "@/lib/constants";
import {
  EMPTY_CURRICULUM_PROGRESS,
  filterConceptsForGrade,
  filterTopicsForGrade,
  getAllCurriculumProgress,
  subscribeCurriculumProgress,
  writeActiveCurriculumTopic,
} from "@/services/curriculum";
import { getActiveLearnerId } from "@/services/student/active-learner";
import { readLearnerCurriculumId } from "@/services/student/learner-profile";
import { isCurriculumGrade } from "@/domain/curriculum";

type LearningWorldScreenProps = {
  world: CurriculumWorld;
  grade: number;
};

function getEmptyProgress() {
  return EMPTY_CURRICULUM_PROGRESS;
}

export function LearningWorldScreen({ world, grade }: LearningWorldScreenProps) {
  const learnerId = getActiveLearnerId();
  const progress = useSyncExternalStore(
    subscribeCurriculumProgress,
    () =>
      isCurriculumGrade(grade)
        ? getAllCurriculumProgress({
            learnerId,
            grade,
            subject: world.subjectId,
            curriculumId: readLearnerCurriculumId(),
          })
        : EMPTY_CURRICULUM_PROGRESS,
    getEmptyProgress,
  );

  const topics = useMemo(
    () => filterTopicsForGrade(world.topics, grade),
    [grade, world.topics],
  );
  const directConcepts = useMemo(
    () =>
      filterConceptsForGrade(
        world.concepts.filter((concept) => concept.parentId === world.id),
        grade,
      ),
    [grade, world.concepts, world.id],
  );

  const firstHref = topics[0]?.id ?? directConcepts[0]?.id;

  useEffect(() => {
    if (!isCurriculumGrade(grade)) {
      return;
    }
    writeActiveCurriculumTopic(world.id, {
      learnerId,
      grade,
    });
  }, [world.id, grade, learnerId]);

  return (
    <WorldJourney
      id={world.id}
      title={world.title}
      hook={world.hook}
      category={world.category}
      firstHref={firstHref}
      topics={topics}
      concepts={directConcepts}
      progress={progress}
      backHref={ROUTES.student.learn}
      backLabel="Back to Learn"
    />
  );
}

type TopicJourneyScreenProps = {
  topic: CurriculumTopic;
  worldTitle: string;
  worldId: string;
  grade: number;
};

export function TopicJourneyScreen({
  topic,
  worldTitle,
  worldId,
  grade,
}: TopicJourneyScreenProps) {
  const learnerId = getActiveLearnerId();
  const progress = useSyncExternalStore(
    subscribeCurriculumProgress,
    () =>
      isCurriculumGrade(grade)
        ? getAllCurriculumProgress({
            learnerId,
            grade,
            subject: topic.subjectId,
            curriculumId: readLearnerCurriculumId(),
          })
        : EMPTY_CURRICULUM_PROGRESS,
    getEmptyProgress,
  );

  const concepts = useMemo(
    () => filterConceptsForGrade(topic.concepts, grade),
    [grade, topic.concepts],
  );

  useEffect(() => {
    if (!isCurriculumGrade(grade)) {
      return;
    }
    writeActiveCurriculumTopic(topic.id, {
      learnerId,
      grade,
    });
  }, [topic.id, grade, learnerId]);

  return (
    <WorldJourney
      id={topic.id}
      title={topic.title}
      hook={topic.hook}
      category={topic.category}
      eyebrow={worldTitle}
      explainer={topic.explainer}
      firstHref={concepts[0]?.id}
      concepts={concepts}
      progress={progress}
      backHref={studentLearnTopicHref(worldId)}
      backLabel={`Back to ${worldTitle}`}
    />
  );
}

function WorldJourney({
  id,
  title,
  hook,
  category,
  eyebrow,
  explainer,
  firstHref,
  topics = [],
  concepts = [],
  progress,
  practiceId,
  backHref,
  backLabel,
}: {
  id: string;
  title: string;
  hook: string;
  category?: string;
  eyebrow?: string;
  explainer?: string;
  firstHref?: string;
  topics?: CurriculumTopic[];
  concepts?: import("@/domain/curriculum").CurriculumConcept[];
  progress: import("@/services/curriculum").CurriculumProgressMap;
  practiceId?: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-10 pb-8">
      <header className="overflow-hidden rounded-[1.9rem] bg-[linear-gradient(165deg,#d7eef6_0%,#fffaf2_58%,#e7f4f8_100%)] px-5 py-8 sm:px-7">
        {eyebrow || category ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {eyebrow ?? category}
          </p>
        ) : null}
        <h1 className="mt-2 text-[1.85rem] font-semibold tracking-tight text-ink sm:text-3xl">
          {title}
        </h1>
        <p className="mt-3 max-w-prose text-base leading-7 text-ink-muted">{hook}</p>
        {explainer ? (
          <p className="mt-3 max-w-prose text-base leading-7 text-ink">{explainer}</p>
        ) : null}
        {firstHref ? (
          <div className="mt-6">
            <ButtonLink href={studentLearnTopicHref(firstHref)}>
              Explore {title}
            </ButtonLink>
          </div>
        ) : (
          <p className="mt-4 text-sm text-ink-muted">
            This world opens more fully in another grade.
          </p>
        )}
      </header>

      {topics.length > 0 ? (
        <section aria-labelledby={`${id}-topics-heading`} className="px-1">
          <h2
            id={`${id}-topics-heading`}
            className="mb-6 text-base font-semibold tracking-tight text-ink"
          >
            Places inside this world
          </h2>
          <WorldPathMap items={topicsToPathItems(topics)} progress={progress} />
        </section>
      ) : null}

      {concepts.length > 0 ? (
        <section aria-labelledby={`${id}-ideas-heading`} className="px-1">
          <h2
            id={`${id}-ideas-heading`}
            className="mb-6 text-base font-semibold tracking-tight text-ink"
          >
            {topics.length > 0 ? "Ideas along the way" : "Ideas to explore"}
          </h2>
          <WorldPathMap items={conceptsToPathItems(concepts)} progress={progress} />
        </section>
      ) : null}

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {practiceId ? (
          <ButtonLink
            href={studentLearnPracticeHref(practiceId)}
            variant="quiet"
            size="inline"
          >
            Practice this world
          </ButtonLink>
        ) : null}
        <ButtonLink href={backHref} variant="quiet" size="inline">
          {backLabel}
        </ButtonLink>
      </div>
    </div>
  );
}
