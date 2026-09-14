import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_8_MATH_CONCEPT_IDS } from "@/content/lessons/grade-8-math/format";
import {
  aSquareAndACubeLesson,
  aStoryOfNumbersLesson,
  numberPlayLesson,
  powerPlayLesson,
  proportionalReasoning1Lesson,
  quadrilateralsLesson,
  weDistributeYetThingsMultiplyLesson,
} from "@/content/lessons/grade-8-math/powers-to-proportion";
import {
  algebraPlayLesson,
  areaLesson,
  baudhayanaPythagorasLesson,
  exploringGeometricThemesLesson,
  fractionsInDisguiseLesson,
  proportionalReasoning2Lesson,
  talesByDotsAndLinesLesson,
} from "@/content/lessons/grade-8-math/geometry-to-area";

export { GRADE_8_MATH_CONCEPT_IDS } from "@/content/lessons/grade-8-math/format";
export {
  GRADE_8_MATH_SPINE_COVERAGE,
  grade8MathSpineCoverageAudit,
  getGrade8MathHostConceptId,
  getGrade8MathSpineCoverage,
  skillsHostedByGrade8,
} from "@/content/lessons/grade-8-math/skill-coverage";

export const GRADE_8_MATH_LESSONS: CompleteLessonDefinition[] = [
  aSquareAndACubeLesson,
  powerPlayLesson,
  aStoryOfNumbersLesson,
  quadrilateralsLesson,
  numberPlayLesson,
  weDistributeYetThingsMultiplyLesson,
  proportionalReasoning1Lesson,
  fractionsInDisguiseLesson,
  baudhayanaPythagorasLesson,
  proportionalReasoning2Lesson,
  exploringGeometricThemesLesson,
  talesByDotsAndLinesLesson,
  algebraPlayLesson,
  areaLesson,
];

const byConceptId = new Map(
  GRADE_8_MATH_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade8MathLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade8MathConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_8_MATH_CONCEPT_IDS)[number] {
  return (GRADE_8_MATH_CONCEPT_IDS as readonly string[]).includes(conceptId);
}
