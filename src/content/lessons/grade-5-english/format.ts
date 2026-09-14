import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_5_ENGLISH_CONCEPT_IDS = [
  "ncert-g5-santoor-papas-spectacles-core",
  "ncert-g5-santoor-gone-with-the-scooter-core",
  "ncert-g5-santoor-the-rainbow-core",
  "ncert-g5-santoor-the-wise-parrot-core",
  "ncert-g5-santoor-the-frog-core",
  "ncert-g5-santoor-what-a-tank-core",
  "ncert-g5-santoor-gilli-danda-core",
  "ncert-g5-santoor-decision-of-the-panchayat-core",
  "ncert-g5-santoor-vocation-core",
  "ncert-g5-santoor-glass-bangles-core",
] as const;

export type Grade5EnglishConceptId =
  (typeof GRADE_5_ENGLISH_CONCEPT_IDS)[number];

export function grade5EnglishLesson(input: {
  conceptId: Grade5EnglishConceptId;
  title: string;
  domainTitle: string;
  prerequisites?: string[];
  nextConceptIds?: string[];
  coveredSkillIds?: string[];
  content: GradeLessonContent;
}): CompleteLessonDefinition {
  return {
    conceptId: input.conceptId,
    subject: "english",
    title: input.title,
    domainTitle: input.domainTitle,
    grades: [5],
    prerequisites: input.prerequisites ?? [],
    nextConceptIds: input.nextConceptIds ?? [],
    coveredSkillIds: input.coveredSkillIds,
    byGrade: {
      5: input.content,
    },
  };
}
