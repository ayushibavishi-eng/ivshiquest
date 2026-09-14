import {
  anglesAsTurnsLesson,
  farAndNearLesson,
  fractionsLesson,
  weTheTravellers1Lesson,
  weTheTravellers2Lesson,
} from "@/content/lessons/grade-5-math/travel-and-fractions";
import {
  coconutFarmLesson,
  dairyFarmLesson,
  shapesAndPatternsLesson,
  symmetricalDesignsLesson,
  weightAndCapacityLesson,
} from "@/content/lessons/grade-5-math/farm-and-shapes";
import {
  animalJumpsLesson,
  dataThroughPicturesLesson,
  grandmothersQuiltLesson,
  mapsAndLocationsLesson,
  racingSecondsLesson,
} from "@/content/lessons/grade-5-math/quilt-maps-data";
import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_5_MATH_MELA_CONCEPT_IDS } from "@/content/lessons/grade-5-math/format";

export { GRADE_5_MATH_MELA_CONCEPT_IDS } from "@/content/lessons/grade-5-math/format";
export {
  GRADE_5_MATH_SPINE_COVERAGE,
  grade5MathSpineCoverageAudit,
  getGrade5MathHostConceptId,
  getGrade5MathSpineCoverage,
  skillsHostedByGrade5,
} from "@/content/lessons/grade-5-math/skill-coverage";

export const GRADE_5_MATH_LESSONS: CompleteLessonDefinition[] = [
  weTheTravellers1Lesson,
  fractionsLesson,
  anglesAsTurnsLesson,
  weTheTravellers2Lesson,
  farAndNearLesson,
  dairyFarmLesson,
  shapesAndPatternsLesson,
  weightAndCapacityLesson,
  coconutFarmLesson,
  symmetricalDesignsLesson,
  grandmothersQuiltLesson,
  racingSecondsLesson,
  animalJumpsLesson,
  mapsAndLocationsLesson,
  dataThroughPicturesLesson,
];

const byConceptId = new Map(
  GRADE_5_MATH_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade5MathLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade5MathMelaConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_5_MATH_MELA_CONCEPT_IDS)[number] {
  return (GRADE_5_MATH_MELA_CONCEPT_IDS as readonly string[]).includes(
    conceptId,
  );
}
