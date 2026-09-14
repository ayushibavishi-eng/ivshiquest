import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_7_ENGLISH_CONCEPT_IDS = [
  "ncert-g7-poorvi-the-day-the-river-spoke-core",
  "ncert-g7-poorvi-try-again-core",
  "ncert-g7-poorvi-three-days-to-see-core",
  "ncert-g7-poorvi-animals-birds-dolittle-core",
  "ncert-g7-poorvi-a-funny-man-core",
  "ncert-g7-poorvi-say-the-right-thing-core",
  "ncert-g7-poorvi-brothers-great-invention-core",
  "ncert-g7-poorvi-paper-boats-core",
  "ncert-g7-poorvi-north-south-east-west-core",
  "ncert-g7-poorvi-the-tunnel-core",
  "ncert-g7-poorvi-travel-core",
  "ncert-g7-poorvi-conquering-the-summit-core",
  "ncert-g7-poorvi-homage-brave-soldiers-core",
  "ncert-g7-poorvi-my-dear-soldiers-core",
  "ncert-g7-poorvi-rani-abbakka-core",
] as const;

export type Grade7EnglishConceptId =
  (typeof GRADE_7_ENGLISH_CONCEPT_IDS)[number];

export function grade7EnglishLesson(input: {
  conceptId: Grade7EnglishConceptId;
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
    grades: [7],
    prerequisites: input.prerequisites ?? [],
    nextConceptIds: input.nextConceptIds ?? [],
    byGrade: {
      7: input.content,
    },
  };
}
