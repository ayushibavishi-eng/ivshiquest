import { cleanestVillageLesson, dataHandlingLesson } from "@/content/lessons/grade-4-math/stories";
import {
  equalGroupsLesson,
  elephantsTigersLeopardsLesson,
  sharingAndMeasuringLesson,
  thousandsAroundUsLesson,
} from "@/content/lessons/grade-4-math/numbers";
import {
  measuringLengthLesson,
  tickingClocksLesson,
  transportMuseumLesson,
  weighItPourItLesson,
} from "@/content/lessons/grade-4-math/measure";
import {
  funWithSymmetryLesson,
  patternsAroundUsLesson,
} from "@/content/lessons/grade-4-math/patterns";
import {
  hideAndSeekLesson,
  shapesAroundUsLesson,
} from "@/content/lessons/grade-4-math/space";
import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_4_MATH_MELA_CONCEPT_IDS } from "@/content/lessons/grade-4-math/format";

export { GRADE_4_MATH_MELA_CONCEPT_IDS } from "@/content/lessons/grade-4-math/format";
export {
  GRADE_4_MATH_SPINE_COVERAGE,
  grade4MathSpineCoverageAudit,
  getGrade4MathHostConceptId,
  getGrade4MathSpineCoverage,
  skillsHostedBy,
} from "@/content/lessons/grade-4-math/skill-coverage";

export const GRADE_4_MATH_LESSONS: CompleteLessonDefinition[] = [
  shapesAroundUsLesson,
  hideAndSeekLesson,
  patternsAroundUsLesson,
  thousandsAroundUsLesson,
  sharingAndMeasuringLesson,
  measuringLengthLesson,
  cleanestVillageLesson,
  weighItPourItLesson,
  equalGroupsLesson,
  elephantsTigersLeopardsLesson,
  funWithSymmetryLesson,
  tickingClocksLesson,
  transportMuseumLesson,
  dataHandlingLesson,
];

const byConceptId = new Map(
  GRADE_4_MATH_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade4MathLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade4MathMelaConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_4_MATH_MELA_CONCEPT_IDS)[number] {
  return (GRADE_4_MATH_MELA_CONCEPT_IDS as readonly string[]).includes(
    conceptId,
  );
}
