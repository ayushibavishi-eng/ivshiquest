import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_5_ENGLISH_CONCEPT_IDS } from "@/content/lessons/grade-5-english/format";
import {
  goneWithTheScooterLesson,
  papasSpectaclesLesson,
  theFrogLesson,
  theRainbowLesson,
  theWiseParrotLesson,
} from "@/content/lessons/grade-5-english/stories-poems-a";
import {
  decisionOfThePanchayatLesson,
  gilliDandaLesson,
  glassBanglesLesson,
  vocationLesson,
  whatATankLesson,
} from "@/content/lessons/grade-5-english/stories-poems-b";

export { GRADE_5_ENGLISH_CONCEPT_IDS } from "@/content/lessons/grade-5-english/format";
export {
  GRADE_5_ENGLISH_SPINE_COVERAGE,
  grade5EnglishSpineCoverageAudit,
  getGrade5EnglishHostConceptId,
  getGrade5EnglishSpineCoverage,
  skillsHostedByGrade5English,
} from "@/content/lessons/grade-5-english/skill-coverage";

export const GRADE_5_ENGLISH_LESSONS: CompleteLessonDefinition[] = [
  papasSpectaclesLesson,
  goneWithTheScooterLesson,
  theRainbowLesson,
  theWiseParrotLesson,
  theFrogLesson,
  whatATankLesson,
  gilliDandaLesson,
  decisionOfThePanchayatLesson,
  vocationLesson,
  glassBanglesLesson,
];

const byConceptId = new Map(
  GRADE_5_ENGLISH_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade5EnglishLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade5EnglishConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_5_ENGLISH_CONCEPT_IDS)[number] {
  return (GRADE_5_ENGLISH_CONCEPT_IDS as readonly string[]).includes(conceptId);
}
