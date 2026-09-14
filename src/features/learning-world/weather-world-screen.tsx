"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";
import { ButtonLink } from "@/components/ui/button";
import type { CurriculumWorld } from "@/domain/curriculum";
import { WeatherHero } from "@/features/learning-world/weather-hero";
import { WeatherPathMap } from "@/features/learning-world/weather-path-map";
import { ROUTES, studentLearnPracticeHref, studentLearnTopicHref } from "@/lib/constants";
import {
  EMPTY_CURRICULUM_PROGRESS,
  getAllCurriculumProgress,
  getWorldPathForGrade,
  subscribeCurriculumProgress,
  writeActiveCurriculumTopic,
} from "@/services/curriculum";
import { getActiveLearnerId } from "@/services/student/active-learner";
import { readLearnerCurriculumId } from "@/services/student/learner-profile";
import { isCurriculumGrade } from "@/domain/curriculum";

type WeatherWorldScreenProps = {
  world: CurriculumWorld;
  grade: number;
};

function getEmptyProgress() {
  return EMPTY_CURRICULUM_PROGRESS;
}

export function WeatherWorldScreen({ world, grade }: WeatherWorldScreenProps) {
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

  const concepts = useMemo(
    () => getWorldPathForGrade(world, grade),
    [grade, world],
  );

  useEffect(() => {
    if (!isCurriculumGrade(grade)) {
      return;
    }
    writeActiveCurriculumTopic(world.id, { learnerId, grade });
  }, [world.id, grade, learnerId]);

  const nextConcept = useMemo(() => {
    return (
      concepts.find((concept) => {
        const state = progress[concept.id] ?? "unvisited";
        return state === "unvisited" || state === "started";
      }) ?? concepts[0]
    );
  }, [concepts, progress]);

  return (
    <div className="flex flex-1 flex-col gap-10 pb-8">
      {nextConcept ? (
        <WeatherHero
          title={world.title}
          href={studentLearnTopicHref(nextConcept.id)}
          continuing={Boolean(progress[nextConcept.id])}
        />
      ) : null}

      <section aria-labelledby="weather-path-heading" className="px-1">
        <h2 id="weather-path-heading" className="sr-only">
          Weather ideas to explore
        </h2>
        <p className="mb-6 max-w-[18rem] text-base leading-7 text-ink-muted">
          Tap an island. Temperature, wind, and clouds live next to each other.
        </p>
        <WeatherPathMap concepts={concepts} progress={progress} />
      </section>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <ButtonLink
          href={studentLearnPracticeHref(world.id)}
          variant="quiet"
          size="inline"
        >
          Practice the sky
        </ButtonLink>
        <ButtonLink
          href={ROUTES.student.learn}
          variant="quiet"
          size="inline"
        >
          Back to Learn
        </ButtonLink>
      </div>
    </div>
  );
}
