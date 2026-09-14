import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_6_MATH_CONCEPT_IDS = [
  "ncert-g6-ganita-prakash-patterns-in-mathematics-core",
  "ncert-g6-ganita-prakash-lines-and-angles-core",
  "ncert-g6-ganita-prakash-number-play-core",
  "ncert-g6-ganita-prakash-data-handling-core",
  "ncert-g6-ganita-prakash-prime-time-core",
  "ncert-g6-ganita-prakash-perimeter-and-area-core",
  "ncert-g6-ganita-prakash-fractions-core",
  "ncert-g6-ganita-prakash-playing-with-constructions-core",
  "ncert-g6-ganita-prakash-symmetry-core",
  "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
] as const;

export type Grade6MathConceptId = (typeof GRADE_6_MATH_CONCEPT_IDS)[number];

export function grade6MathLesson(input: {
  conceptId: Grade6MathConceptId;
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
    grades: [6],
    prerequisites: input.prerequisites ?? [],
    nextConceptIds: input.nextConceptIds ?? [],
    byGrade: {
      6: input.content,
    },
  };
}
