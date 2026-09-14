import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_4_EVS_CONCEPT_IDS } from "@/content/lessons/grade-4-evs/format";
import {
  exploringNeighbourhoodLesson,
  livingTogetherLesson,
} from "@/content/lessons/grade-4-evs/community";
import {
  growingUpWithNatureLesson,
  natureTrailLesson,
} from "@/content/lessons/grade-4-evs/nature";
import {
  foodForHealthLesson,
  happyHealthyLivingLesson,
  howThingsWorkLesson,
} from "@/content/lessons/grade-4-evs/health-making";
import {
  differentLandsLesson,
  howThingsAreMadeLesson,
  ourSkyLesson,
} from "@/content/lessons/grade-4-evs/lands-sky";

export { GRADE_4_EVS_CONCEPT_IDS } from "@/content/lessons/grade-4-evs/format";

export const GRADE_4_EVS_LESSONS: CompleteLessonDefinition[] = [
  livingTogetherLesson,
  exploringNeighbourhoodLesson,
  natureTrailLesson,
  growingUpWithNatureLesson,
  foodForHealthLesson,
  happyHealthyLivingLesson,
  howThingsWorkLesson,
  howThingsAreMadeLesson,
  differentLandsLesson,
  ourSkyLesson,
];

const byConceptId = new Map(
  GRADE_4_EVS_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade4EvsLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade4EvsConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_4_EVS_CONCEPT_IDS)[number] {
  return (GRADE_4_EVS_CONCEPT_IDS as readonly string[]).includes(conceptId);
}
