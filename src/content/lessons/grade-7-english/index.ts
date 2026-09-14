import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_7_ENGLISH_CONCEPT_IDS } from "@/content/lessons/grade-7-english/format";
import {
  aFunnyManLesson,
  animalsBirdsDolittleLesson,
  sayTheRightThingLesson,
  theDayTheRiverSpokeLesson,
  threeDaysToSeeLesson,
  tryAgainLesson,
} from "@/content/lessons/grade-7-english/learning-wit";
import {
  brothersGreatInventionLesson,
  northSouthEastWestLesson,
  paperBoatsLesson,
  theTunnelLesson,
  travelLesson,
} from "@/content/lessons/grade-7-english/dreams-travel";
import {
  conqueringTheSummitLesson,
  homageBraveSoldiersLesson,
  myDearSoldiersLesson,
  raniAbbakkaLesson,
} from "@/content/lessons/grade-7-english/bravehearts";

export { GRADE_7_ENGLISH_CONCEPT_IDS } from "@/content/lessons/grade-7-english/format";
export {
  GRADE_7_ENGLISH_SPINE_COVERAGE,
  grade7EnglishSpineCoverageAudit,
  getGrade7EnglishHostConceptId,
  getGrade7EnglishSpineCoverage,
  skillsHostedByGrade7English,
} from "@/content/lessons/grade-7-english/skill-coverage";

export const GRADE_7_ENGLISH_LESSONS: CompleteLessonDefinition[] = [
  theDayTheRiverSpokeLesson,
  tryAgainLesson,
  threeDaysToSeeLesson,
  animalsBirdsDolittleLesson,
  aFunnyManLesson,
  sayTheRightThingLesson,
  brothersGreatInventionLesson,
  paperBoatsLesson,
  northSouthEastWestLesson,
  theTunnelLesson,
  travelLesson,
  conqueringTheSummitLesson,
  homageBraveSoldiersLesson,
  myDearSoldiersLesson,
  raniAbbakkaLesson,
];

const byConceptId = new Map(
  GRADE_7_ENGLISH_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade7EnglishLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade7EnglishConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_7_ENGLISH_CONCEPT_IDS)[number] {
  return (GRADE_7_ENGLISH_CONCEPT_IDS as readonly string[]).includes(conceptId);
}
