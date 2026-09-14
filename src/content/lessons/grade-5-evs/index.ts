import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_5_EVS_CONCEPT_IDS } from "@/content/lessons/grade-5-evs/format";
import {
  journeyOfARiverLesson,
  mysteryOfFoodLesson,
  ourSchoolLesson,
  ourVibrantCountryLesson,
  waterEssenceLesson,
} from "@/content/lessons/grade-5-evs/water-food-school";
import {
  clothesHowMadeLesson,
  earthSharedHomeLesson,
  energyHowThingsWorkLesson,
  rhythmsOfNatureLesson,
  someUniquePlacesLesson,
} from "@/content/lessons/grade-5-evs/places-energy-earth";

export { GRADE_5_EVS_CONCEPT_IDS } from "@/content/lessons/grade-5-evs/format";
export {
  GRADE_5_SCIENCE_SPINE_COVERAGE,
  grade5ScienceSpineCoverageAudit,
  getGrade5ScienceHostConceptId,
  getGrade5ScienceSpineCoverage,
  skillsHostedByGrade5Science,
} from "@/content/lessons/grade-5-evs/skill-coverage";

export const GRADE_5_EVS_LESSONS: CompleteLessonDefinition[] = [
  waterEssenceLesson,
  journeyOfARiverLesson,
  mysteryOfFoodLesson,
  ourSchoolLesson,
  ourVibrantCountryLesson,
  someUniquePlacesLesson,
  energyHowThingsWorkLesson,
  clothesHowMadeLesson,
  rhythmsOfNatureLesson,
  earthSharedHomeLesson,
];

const byConceptId = new Map(
  GRADE_5_EVS_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade5EvsLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade5EvsConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_5_EVS_CONCEPT_IDS)[number] {
  return (GRADE_5_EVS_CONCEPT_IDS as readonly string[]).includes(conceptId);
}
