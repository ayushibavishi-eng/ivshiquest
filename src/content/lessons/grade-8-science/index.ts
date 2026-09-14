import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_8_SCIENCE_CONCEPT_IDS } from "@/content/lessons/grade-8-science/format";
import {
  electricityMagneticHeatingLesson,
  exploringForcesLesson,
  healthTreasureLesson,
  invisibleLivingLesson,
  investigativeWorldLesson,
  particulateNatureLesson,
  pressureWindsStormsLesson,
} from "@/content/lessons/grade-8-science/inquiry-to-matter";
import {
  earthUniquePlanetLesson,
  elementsCompoundsMixturesLesson,
  keepingTimeSkiesLesson,
  lightMirrorsLensesLesson,
  natureHarmonyLesson,
  solutesSolventsLesson,
} from "@/content/lessons/grade-8-science/materials-to-earth";

export { GRADE_8_SCIENCE_CONCEPT_IDS } from "@/content/lessons/grade-8-science/format";
export {
  GRADE_8_SCIENCE_SPINE_COVERAGE,
  grade8ScienceSpineCoverageAudit,
  getGrade8ScienceHostConceptId,
  getGrade8ScienceSpineCoverage,
  skillsHostedByGrade8Science,
} from "@/content/lessons/grade-8-science/skill-coverage";

export const GRADE_8_SCIENCE_LESSONS: CompleteLessonDefinition[] = [
  investigativeWorldLesson,
  invisibleLivingLesson,
  healthTreasureLesson,
  electricityMagneticHeatingLesson,
  exploringForcesLesson,
  pressureWindsStormsLesson,
  particulateNatureLesson,
  elementsCompoundsMixturesLesson,
  solutesSolventsLesson,
  lightMirrorsLensesLesson,
  keepingTimeSkiesLesson,
  natureHarmonyLesson,
  earthUniquePlanetLesson,
];

const byConceptId = new Map(
  GRADE_8_SCIENCE_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade8ScienceLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade8ScienceConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_8_SCIENCE_CONCEPT_IDS)[number] {
  return (GRADE_8_SCIENCE_CONCEPT_IDS as readonly string[]).includes(conceptId);
}
