import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_6_SCIENCE_CONCEPT_IDS } from "@/content/lessons/grade-6-science/format";
import {
  diversityLivingLesson,
  exploringMagnetsLesson,
  materialsAroundUsLesson,
  measurementLengthMotionLesson,
  mindfulEatingLesson,
  wonderfulWorldLesson,
} from "@/content/lessons/grade-6-science/inquiry-to-materials";
import {
  beyondEarthLesson,
  livingCreaturesLesson,
  methodsOfSeparationLesson,
  naturesTreasuresLesson,
  statesOfWaterLesson,
  temperatureMeasurementLesson,
} from "@/content/lessons/grade-6-science/temperature-to-sky";

export { GRADE_6_SCIENCE_CONCEPT_IDS } from "@/content/lessons/grade-6-science/format";
export {
  GRADE_6_SCIENCE_SPINE_COVERAGE,
  grade6ScienceSpineCoverageAudit,
  getGrade6ScienceHostConceptId,
  getGrade6ScienceSpineCoverage,
  skillsHostedByGrade6Science,
} from "@/content/lessons/grade-6-science/skill-coverage";

export const GRADE_6_SCIENCE_LESSONS: CompleteLessonDefinition[] = [
  wonderfulWorldLesson,
  diversityLivingLesson,
  mindfulEatingLesson,
  exploringMagnetsLesson,
  measurementLengthMotionLesson,
  materialsAroundUsLesson,
  temperatureMeasurementLesson,
  statesOfWaterLesson,
  methodsOfSeparationLesson,
  livingCreaturesLesson,
  naturesTreasuresLesson,
  beyondEarthLesson,
];

const byConceptId = new Map(
  GRADE_6_SCIENCE_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade6ScienceLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade6ScienceConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_6_SCIENCE_CONCEPT_IDS)[number] {
  return (GRADE_6_SCIENCE_CONCEPT_IDS as readonly string[]).includes(conceptId);
}
