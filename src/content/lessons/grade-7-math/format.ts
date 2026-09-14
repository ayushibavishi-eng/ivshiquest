import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_7_MATH_CONCEPT_IDS = [
  "ncert-g7-ganita-prakash-1-large-numbers-core",
  "ncert-g7-ganita-prakash-1-arithmetic-expressions-core",
  "ncert-g7-ganita-prakash-1-peek-beyond-the-point-core",
  "ncert-g7-ganita-prakash-1-letter-numbers-core",
  "ncert-g7-ganita-prakash-1-parallel-intersecting-core",
  "ncert-g7-ganita-prakash-1-number-play-core",
  "ncert-g7-ganita-prakash-1-three-intersecting-lines-core",
  "ncert-g7-ganita-prakash-1-working-with-fractions-core",
  "ncert-g7-ganita-prakash-2-geometric-twins-core",
  "ncert-g7-ganita-prakash-2-operations-with-integers-core",
  "ncert-g7-ganita-prakash-2-finding-common-ground-core",
  "ncert-g7-ganita-prakash-2-another-peek-beyond-the-point-core",
  "ncert-g7-ganita-prakash-2-connecting-the-dots-core",
  "ncert-g7-ganita-prakash-2-constructions-and-tilings-core",
  "ncert-g7-ganita-prakash-2-finding-the-unknown-core",
] as const;

export type Grade7MathConceptId = (typeof GRADE_7_MATH_CONCEPT_IDS)[number];

export function grade7MathLesson(input: {
  conceptId: Grade7MathConceptId;
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
    grades: [7],
    prerequisites: input.prerequisites ?? [],
    nextConceptIds: input.nextConceptIds ?? [],
    byGrade: {
      7: input.content,
    },
  };
}
