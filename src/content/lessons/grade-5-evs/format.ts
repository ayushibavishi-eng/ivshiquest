import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_5_EVS_CONCEPT_IDS = [
  "ncert-g5-wondrous-world-water-essence-core",
  "ncert-g5-wondrous-world-journey-of-a-river-core",
  "ncert-g5-wondrous-world-mystery-of-food-core",
  "ncert-g5-wondrous-world-our-school-core",
  "ncert-g5-wondrous-world-our-vibrant-country-core",
  "ncert-g5-wondrous-world-some-unique-places-core",
  "ncert-g5-wondrous-world-energy-how-things-work-core",
  "ncert-g5-wondrous-world-clothes-how-made-core",
  "ncert-g5-wondrous-world-rhythms-of-nature-core",
  "ncert-g5-wondrous-world-earth-shared-home-core",
] as const;

export type Grade5EvsConceptId = (typeof GRADE_5_EVS_CONCEPT_IDS)[number];

export function grade5EvsLesson(input: {
  conceptId: Grade5EvsConceptId;
  title: string;
  domainTitle: string;
  prerequisites?: string[];
  nextConceptIds?: string[];
  coveredSkillIds?: string[];
  content: GradeLessonContent;
}): CompleteLessonDefinition {
  return {
    conceptId: input.conceptId,
    subject: "science",
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
