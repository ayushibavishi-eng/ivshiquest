import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_7_SCIENCE_CONCEPT_IDS } from "@/content/lessons/grade-7-science/format";
import {
  acidicBasicNeutralLesson,
  adolescenceLesson,
  electricityCircuitsLesson,
  everEvolvingWorldLesson,
  metalsNonMetalsLesson,
  physicalChemicalLesson,
} from "@/content/lessons/grade-7-science/inquiry-to-changes";
import {
  earthMoonSunLesson,
  heatTransferLesson,
  lifeProcessesAnimalsLesson,
  lifeProcessesPlantsLesson,
  lightShadowsLesson,
  timeAndMotionLesson,
} from "@/content/lessons/grade-7-science/motion-to-sky";

export { GRADE_7_SCIENCE_CONCEPT_IDS } from "@/content/lessons/grade-7-science/format";
export {
  GRADE_7_SCIENCE_SPINE_COVERAGE,
  grade7ScienceSpineCoverageAudit,
  getGrade7ScienceHostConceptId,
  getGrade7ScienceSpineCoverage,
  skillsHostedByGrade7Science,
} from "@/content/lessons/grade-7-science/skill-coverage";

export const GRADE_7_SCIENCE_LESSONS: CompleteLessonDefinition[] = [
  everEvolvingWorldLesson,
  acidicBasicNeutralLesson,
  electricityCircuitsLesson,
  metalsNonMetalsLesson,
  physicalChemicalLesson,
  adolescenceLesson,
  heatTransferLesson,
  timeAndMotionLesson,
  lifeProcessesAnimalsLesson,
  lifeProcessesPlantsLesson,
  lightShadowsLesson,
  earthMoonSunLesson,
];

const byConceptId = new Map(
  GRADE_7_SCIENCE_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade7ScienceLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade7ScienceConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_7_SCIENCE_CONCEPT_IDS)[number] {
  return (GRADE_7_SCIENCE_CONCEPT_IDS as readonly string[]).includes(conceptId);
}
