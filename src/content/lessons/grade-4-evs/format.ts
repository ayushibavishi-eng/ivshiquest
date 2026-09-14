import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_4_EVS_CONCEPT_IDS = [
  "ncert-g4-wondrous-world-living-together-core",
  "ncert-g4-wondrous-world-exploring-neighbourhood-core",
  "ncert-g4-wondrous-world-nature-trail-core",
  "ncert-g4-wondrous-world-growing-up-with-nature-core",
  "ncert-g4-wondrous-world-food-for-health-core",
  "ncert-g4-wondrous-world-happy-healthy-living-core",
  "ncert-g4-wondrous-world-how-things-work-core",
  "ncert-g4-wondrous-world-how-things-are-made-core",
  "ncert-g4-wondrous-world-different-lands-core",
  "ncert-g4-wondrous-world-our-sky-core",
] as const;

export type Grade4EvsConceptId = (typeof GRADE_4_EVS_CONCEPT_IDS)[number];

export function grade4EvsLesson(input: {
  conceptId: Grade4EvsConceptId;
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
    grades: [4],
    prerequisites: input.prerequisites ?? [],
    nextConceptIds: input.nextConceptIds ?? [],
    coveredSkillIds: input.coveredSkillIds,
    byGrade: {
      4: input.content,
    },
  };
}
