import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_6_ENGLISH_CONCEPT_IDS = [
  "ncert-g6-poorvi-bottle-of-dew",
  "ncert-g6-poorvi-raven-and-fox",
  "ncert-g6-poorvi-rama-to-the-rescue",
  "ncert-g6-poorvi-unlikely-best-friends",
  "ncert-g6-poorvi-friends-prayer",
  "ncert-g6-poorvi-the-chair",
  "ncert-g6-poorvi-neem-baba",
  "ncert-g6-poorvi-what-a-bird-thought",
  "ncert-g6-poorvi-spices-that-heal-us",
  "ncert-g6-poorvi-change-of-heart",
  "ncert-g6-poorvi-the-winner",
  "ncert-g6-poorvi-yoga-way-of-life",
  "ncert-g6-poorvi-hamara-bharat",
  "ncert-g6-poorvi-the-kites",
  "ncert-g6-poorvi-ila-sachani",
  "ncert-g6-poorvi-national-war-memorial",
] as const;

export type Grade6EnglishConceptId =
  (typeof GRADE_6_ENGLISH_CONCEPT_IDS)[number];

export function grade6EnglishLesson(input: {
  conceptId: Grade6EnglishConceptId;
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
    grades: [6],
    prerequisites: input.prerequisites ?? [],
    nextConceptIds: input.nextConceptIds ?? [],
    coveredSkillIds: input.coveredSkillIds,
    byGrade: {
      6: input.content,
    },
  };
}
