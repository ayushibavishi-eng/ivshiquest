import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_6_ENGLISH_CONCEPT_IDS } from "@/content/lessons/grade-6-english/format";
import {
  bottleOfDewLesson,
  friendsPrayerLesson,
  ramaToTheRescueLesson,
  ravenAndFoxLesson,
  theChairLesson,
  unlikelyBestFriendsLesson,
} from "@/content/lessons/grade-6-english/fables-friendship";
import {
  changeOfHeartLesson,
  neemBabaLesson,
  spicesThatHealUsLesson,
  theWinnerLesson,
  whatABirdThoughtLesson,
  yogaWayOfLifeLesson,
} from "@/content/lessons/grade-6-english/nature-sports";
import {
  hamaraBharatLesson,
  ilaSachaniLesson,
  nationalWarMemorialLesson,
  theKitesLesson,
} from "@/content/lessons/grade-6-english/culture-tradition";

export { GRADE_6_ENGLISH_CONCEPT_IDS } from "@/content/lessons/grade-6-english/format";
export {
  GRADE_6_ENGLISH_SPINE_COVERAGE,
  grade6EnglishSpineCoverageAudit,
  getGrade6EnglishHostConceptId,
  getGrade6EnglishSpineCoverage,
  skillsHostedByGrade6English,
} from "@/content/lessons/grade-6-english/skill-coverage";

export const GRADE_6_ENGLISH_LESSONS: CompleteLessonDefinition[] = [
  bottleOfDewLesson,
  ravenAndFoxLesson,
  ramaToTheRescueLesson,
  unlikelyBestFriendsLesson,
  friendsPrayerLesson,
  theChairLesson,
  neemBabaLesson,
  whatABirdThoughtLesson,
  spicesThatHealUsLesson,
  changeOfHeartLesson,
  theWinnerLesson,
  yogaWayOfLifeLesson,
  hamaraBharatLesson,
  theKitesLesson,
  ilaSachaniLesson,
  nationalWarMemorialLesson,
];

const byConceptId = new Map(
  GRADE_6_ENGLISH_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade6EnglishLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade6EnglishConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_6_ENGLISH_CONCEPT_IDS)[number] {
  return (GRADE_6_ENGLISH_CONCEPT_IDS as readonly string[]).includes(conceptId);
}
