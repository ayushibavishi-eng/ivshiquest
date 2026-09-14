import type { CompleteLessonDefinition } from "@/domain/complete-lesson";
import { GRADE_8_ENGLISH_CONCEPT_IDS } from "@/content/lessons/grade-8-english/format";
import {
  aConcreteExampleLesson,
  somebodysMotherLesson,
  taleOfValourLesson,
  vergheseKurienLesson,
  wisdomPavesTheWayLesson,
  witThatWonHeartsLesson,
} from "@/content/lessons/grade-8-english/wit-to-kurien";
import {
  caseOfTheFifthWordLesson,
  harvestHymnLesson,
  magicBrushOfDreamsLesson,
  spectacularWondersLesson,
  theCherryTreeLesson,
  waitingForTheRainLesson,
} from "@/content/lessons/grade-8-english/fifth-to-rain";
import {
  bibhaChowdhuriLesson,
  featheredFriendLesson,
  magnifyingGlassLesson,
} from "@/content/lessons/grade-8-english/friends-to-bibha";

export { GRADE_8_ENGLISH_CONCEPT_IDS } from "@/content/lessons/grade-8-english/format";
export {
  GRADE_8_ENGLISH_SPINE_COVERAGE,
  grade8EnglishSpineCoverageAudit,
  getGrade8EnglishHostConceptId,
  getGrade8EnglishSpineCoverage,
  skillsHostedByGrade8English,
} from "@/content/lessons/grade-8-english/skill-coverage";

export const GRADE_8_ENGLISH_LESSONS: CompleteLessonDefinition[] = [
  witThatWonHeartsLesson,
  aConcreteExampleLesson,
  wisdomPavesTheWayLesson,
  taleOfValourLesson,
  somebodysMotherLesson,
  vergheseKurienLesson,
  caseOfTheFifthWordLesson,
  magicBrushOfDreamsLesson,
  spectacularWondersLesson,
  theCherryTreeLesson,
  harvestHymnLesson,
  waitingForTheRainLesson,
  featheredFriendLesson,
  magnifyingGlassLesson,
  bibhaChowdhuriLesson,
];

const byConceptId = new Map(
  GRADE_8_ENGLISH_LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getGrade8EnglishLesson(conceptId: string) {
  return byConceptId.get(conceptId);
}

export function isGrade8EnglishConceptId(
  conceptId: string,
): conceptId is (typeof GRADE_8_ENGLISH_CONCEPT_IDS)[number] {
  return (GRADE_8_ENGLISH_CONCEPT_IDS as readonly string[]).includes(conceptId);
}
