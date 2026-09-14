import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_4_ENGLISH_CONCEPT_IDS } from "@/content/lessons/grade-4-english/format";
import {
  beSmartBeSafeLesson,
  tinklingBellsLesson,
  togetherWeCanLesson,
} from "@/content/lessons/grade-4-english/stories-a";
import {
  brailleLesson,
  oneThingAtATimeLesson,
  theOldStagLesson,
} from "@/content/lessons/grade-4-english/stories-b";
import {
  fitBodyMindNationLesson,
  hekkoLesson,
  lagoriChampionsLesson,
} from "@/content/lessons/grade-4-english/games-health";
import {
  magicalMountainsLesson,
  maheshwarLesson,
  theSwingLesson,
} from "@/content/lessons/grade-4-english/poems-places";

export { GRADE_4_ENGLISH_CONCEPT_IDS } from "@/content/lessons/grade-4-english/format";
export {
  GRADE_4_ENGLISH_SPINE_COVERAGE,
  GRADE_4_GRAMMAR_READY_WITHOUT_COVERAGE,
  getGrade4EnglishHostConceptId,
  getGrade4EnglishSpineCoverage,
  grade4EnglishSpineCoverageAudit,
  skillsHostedByGrade4English,
} from "@/content/lessons/grade-4-english/skill-coverage";

export const GRADE_4_ENGLISH_LESSONS: CompleteLessonDefinition[] = [
  togetherWeCanLesson,
  tinklingBellsLesson,
  beSmartBeSafeLesson,
  oneThingAtATimeLesson,
  theOldStagLesson,
  brailleLesson,
  fitBodyMindNationLesson,
  lagoriChampionsLesson,
  hekkoLesson,
  theSwingLesson,
  magicalMountainsLesson,
  maheshwarLesson,
];

const byConceptId = new Map(
  GRADE_4_ENGLISH_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade4EnglishLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade4EnglishConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_4_ENGLISH_CONCEPT_IDS)[number] {
  return (GRADE_4_ENGLISH_CONCEPT_IDS as readonly string[]).includes(conceptId);
}
