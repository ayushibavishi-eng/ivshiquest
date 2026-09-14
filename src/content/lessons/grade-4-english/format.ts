import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_4_ENGLISH_CONCEPT_IDS = [
  "ncert-g4-santoor-together-we-can-core",
  "ncert-g4-santoor-the-tinkling-bells-core",
  "ncert-g4-santoor-be-smart-be-safe-core",
  "ncert-g4-santoor-one-thing-at-a-time-core",
  "ncert-g4-santoor-the-old-stag-core",
  "ncert-g4-santoor-braille-core",
  "ncert-g4-santoor-fit-body-mind-nation-core",
  "ncert-g4-santoor-the-lagori-champions-core",
  "ncert-g4-santoor-hekko-core",
  "ncert-g4-santoor-the-swing-core",
  "ncert-g4-santoor-magical-mountains-core",
  "ncert-g4-santoor-maheshwar-core",
] as const;

export type Grade4EnglishConceptId =
  (typeof GRADE_4_ENGLISH_CONCEPT_IDS)[number];

export function grade4EnglishLesson(input: {
  conceptId: Grade4EnglishConceptId;
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
    grades: [4],
    prerequisites: input.prerequisites ?? [],
    nextConceptIds: input.nextConceptIds ?? [],
    coveredSkillIds: input.coveredSkillIds,
    byGrade: {
      4: input.content,
    },
  };
}
