import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_8_MATH_CONCEPT_IDS = [
  "ncert-g8-ganita-prakash-a-square-and-a-cube-core",
  "ncert-g8-ganita-prakash-power-play-core",
  "ncert-g8-ganita-prakash-a-story-of-numbers-core",
  "ncert-g8-ganita-prakash-quadrilaterals-core",
  "ncert-g8-ganita-prakash-number-play-core",
  "ncert-g8-ganita-prakash-we-distribute-yet-things-multiply-core",
  "ncert-g8-ganita-prakash-proportional-reasoning-1-core",
  "ncert-g8-ganita-prakash-fractions-in-disguise-core",
  "ncert-g8-ganita-prakash-baudhayana-pythagoras-core",
  "ncert-g8-ganita-prakash-proportional-reasoning-2-core",
  "ncert-g8-ganita-prakash-exploring-geometric-themes-core",
  "ncert-g8-ganita-prakash-tales-by-dots-and-lines-core",
  "ncert-g8-ganita-prakash-algebra-play-core",
  "ncert-g8-ganita-prakash-area-core",
] as const;

export type Grade8MathConceptId = (typeof GRADE_8_MATH_CONCEPT_IDS)[number];

export function grade8MathLesson(input: {
  conceptId: Grade8MathConceptId;
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
    grades: [8],
    prerequisites: input.prerequisites ?? [],
    nextConceptIds: input.nextConceptIds ?? [],
    byGrade: {
      8: input.content,
    },
  };
}
