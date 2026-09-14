import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_5_MATH_MELA_CONCEPT_IDS = [
  "ncert-g5-maths-mela-we-the-travellers-1-core",
  "ncert-g5-maths-mela-fractions-core",
  "ncert-g5-maths-mela-angles-as-turns-core",
  "ncert-g5-maths-mela-we-the-travellers-2-core",
  "ncert-g5-maths-mela-far-and-near-core",
  "ncert-g5-maths-mela-the-dairy-farm-core",
  "ncert-g5-maths-mela-shapes-and-patterns-core",
  "ncert-g5-maths-mela-weight-and-capacity-core",
  "ncert-g5-maths-mela-coconut-farm-core",
  "ncert-g5-maths-mela-symmetrical-designs-core",
  "ncert-g5-maths-mela-grandmothers-quilt-core",
  "ncert-g5-maths-mela-racing-seconds-core",
  "ncert-g5-maths-mela-animal-jumps-core",
  "ncert-g5-maths-mela-maps-and-locations-core",
  "ncert-g5-maths-mela-data-through-pictures-core",
] as const;

export type Grade5MathMelaConceptId =
  (typeof GRADE_5_MATH_MELA_CONCEPT_IDS)[number];

export function grade5MathLesson(input: {
  conceptId: Grade5MathMelaConceptId;
  title: string;
  domainTitle: string;
  prerequisites?: string[];
  nextConceptIds?: string[];
  content: GradeLessonContent;
}): CompleteLessonDefinition {
  return {
    conceptId: input.conceptId,
    subject: "math",
    title: input.title,
    domainTitle: input.domainTitle,
    grades: [5],
    prerequisites: input.prerequisites ?? [],
    nextConceptIds: input.nextConceptIds ?? [],
    byGrade: {
      5: input.content,
    },
  };
}
