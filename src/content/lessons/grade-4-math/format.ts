import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_4_MATH_MELA_CONCEPT_IDS = [
  "ncert-g4-maths-mela-shapes-around-us-core",
  "ncert-g4-maths-mela-hide-and-seek-core",
  "ncert-g4-maths-mela-patterns-around-us-core",
  "ncert-g4-maths-mela-thousands-around-us-core",
  "ncert-g4-maths-mela-sharing-and-measuring-core",
  "ncert-g4-maths-mela-measuring-length-core",
  "ncert-g4-maths-mela-the-cleanest-village-core",
  "ncert-g4-maths-mela-weigh-it-pour-it-core",
  "ncert-g4-maths-mela-equal-groups-core",
  "ncert-g4-maths-mela-elephants-tigers-leopards-core",
  "ncert-g4-maths-mela-fun-with-symmetry-core",
  "ncert-g4-maths-mela-ticking-clocks-core",
  "ncert-g4-maths-mela-the-transport-museum-core",
  "ncert-g4-maths-mela-data-handling-core",
] as const;

export type Grade4MathMelaConceptId =
  (typeof GRADE_4_MATH_MELA_CONCEPT_IDS)[number];

export function grade4MathLesson(input: {
  conceptId: Grade4MathMelaConceptId;
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
    grades: [4],
    prerequisites: input.prerequisites ?? [],
    nextConceptIds: input.nextConceptIds ?? [],
    byGrade: {
      4: input.content,
    },
  };
}
