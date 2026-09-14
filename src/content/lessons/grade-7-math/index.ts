import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_7_MATH_CONCEPT_IDS } from "@/content/lessons/grade-7-math/format";
import {
  arithmeticExpressionsLesson,
  largeNumbersLesson,
  letterNumbersLesson,
  numberPlayLesson,
  parallelIntersectingLesson,
  peekBeyondThePointLesson,
  threeIntersectingLinesLesson,
  workingWithFractionsLesson,
} from "@/content/lessons/grade-7-math/part1";
import {
  anotherPeekBeyondThePointLesson,
  connectingTheDotsLesson,
  constructionsAndTilingsLesson,
  findingCommonGroundLesson,
  findingTheUnknownLesson,
  geometricTwinsLesson,
  operationsWithIntegersLesson,
} from "@/content/lessons/grade-7-math/part2";

export { GRADE_7_MATH_CONCEPT_IDS } from "@/content/lessons/grade-7-math/format";
export {
  GRADE_7_MATH_SPINE_COVERAGE,
  grade7MathSpineCoverageAudit,
  getGrade7MathHostConceptId,
  getGrade7MathSpineCoverage,
  skillsHostedByGrade7,
} from "@/content/lessons/grade-7-math/skill-coverage";

export const GRADE_7_MATH_LESSONS: CompleteLessonDefinition[] = [
  largeNumbersLesson,
  arithmeticExpressionsLesson,
  peekBeyondThePointLesson,
  letterNumbersLesson,
  parallelIntersectingLesson,
  numberPlayLesson,
  threeIntersectingLinesLesson,
  workingWithFractionsLesson,
  geometricTwinsLesson,
  operationsWithIntegersLesson,
  findingCommonGroundLesson,
  anotherPeekBeyondThePointLesson,
  connectingTheDotsLesson,
  constructionsAndTilingsLesson,
  findingTheUnknownLesson,
];

const byConceptId = new Map(
  GRADE_7_MATH_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade7MathLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade7MathConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_7_MATH_CONCEPT_IDS)[number] {
  return (GRADE_7_MATH_CONCEPT_IDS as readonly string[]).includes(conceptId);
}
