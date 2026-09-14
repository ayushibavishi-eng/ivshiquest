import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_8_ENGLISH_CONCEPT_IDS = [
  "ncert-g8-poorvi-wit-that-won-hearts-core",
  "ncert-g8-poorvi-a-concrete-example-core",
  "ncert-g8-poorvi-wisdom-paves-the-way-core",
  "ncert-g8-poorvi-tale-of-valour-core",
  "ncert-g8-poorvi-somebodys-mother-core",
  "ncert-g8-poorvi-verghese-kurien-core",
  "ncert-g8-poorvi-case-of-the-fifth-word-core",
  "ncert-g8-poorvi-magic-brush-of-dreams-core",
  "ncert-g8-poorvi-spectacular-wonders-core",
  "ncert-g8-poorvi-the-cherry-tree-core",
  "ncert-g8-poorvi-harvest-hymn-core",
  "ncert-g8-poorvi-waiting-for-the-rain-core",
  "ncert-g8-poorvi-feathered-friend-core",
  "ncert-g8-poorvi-magnifying-glass-core",
  "ncert-g8-poorvi-bibha-chowdhuri-core",
] as const;

export type Grade8EnglishConceptId =
  (typeof GRADE_8_ENGLISH_CONCEPT_IDS)[number];

export function grade8EnglishLesson(input: {
  conceptId: Grade8EnglishConceptId;
  title: string;
  domainTitle: string;
  prerequisites?: string[];
  nextConceptIds?: string[];
  content: GradeLessonContent;
}): CompleteLessonDefinition {
  return {
    conceptId: input.conceptId,
    subject: "english",
    title: input.title,
    domainTitle: input.domainTitle,
    grades: [8],
    prerequisites: input.prerequisites ?? [],
    nextConceptIds: input.nextConceptIds ?? [],
    byGrade: {
      8: input.content,
    },
  };
}
