import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_6_MATH_CONCEPT_IDS } from "@/content/lessons/grade-6-math/format";
import {
  dataHandlingLesson,
  linesAndAnglesLesson,
  numberPlayLesson,
  patternsInMathematicsLesson,
  primeTimeLesson,
} from "@/content/lessons/grade-6-math/patterns-to-prime";
import {
  fractionsLesson,
  perimeterAndAreaLesson,
  playingWithConstructionsLesson,
  symmetryLesson,
  theOtherSideOfZeroLesson,
} from "@/content/lessons/grade-6-math/measure-to-integers";

export { GRADE_6_MATH_CONCEPT_IDS } from "@/content/lessons/grade-6-math/format";
export {
  GRADE_6_MATH_SPINE_COVERAGE,
  grade6MathSpineCoverageAudit,
  getGrade6MathHostConceptId,
  getGrade6MathSpineCoverage,
  skillsHostedByGrade6,
} from "@/content/lessons/grade-6-math/skill-coverage";

export const GRADE_6_MATH_LESSONS: CompleteLessonDefinition[] = [
  patternsInMathematicsLesson,
  linesAndAnglesLesson,
  numberPlayLesson,
  dataHandlingLesson,
  primeTimeLesson,
  perimeterAndAreaLesson,
  fractionsLesson,
  playingWithConstructionsLesson,
  symmetryLesson,
  theOtherSideOfZeroLesson,
];

const byConceptId = new Map(
  GRADE_6_MATH_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade6MathLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade6MathConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_6_MATH_CONCEPT_IDS)[number] {
  return (GRADE_6_MATH_CONCEPT_IDS as readonly string[]).includes(conceptId);
}
