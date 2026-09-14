import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_7_SCIENCE_CONCEPT_IDS = [
  "ncert-g7-curiosity-ever-evolving-core",
  "ncert-g7-curiosity-acidic-basic-neutral-core",
  "ncert-g7-curiosity-electricity-circuits-core",
  "ncert-g7-curiosity-metals-non-metals-core",
  "ncert-g7-curiosity-physical-chemical-core",
  "ncert-g7-curiosity-adolescence-core",
  "ncert-g7-curiosity-heat-transfer-core",
  "ncert-g7-curiosity-time-and-motion-core",
  "ncert-g7-curiosity-life-processes-animals-core",
  "ncert-g7-curiosity-life-processes-plants-core",
  "ncert-g7-curiosity-light-shadows-core",
  "ncert-g7-curiosity-earth-moon-sun-core",
] as const;

export type Grade7ScienceConceptId =
  (typeof GRADE_7_SCIENCE_CONCEPT_IDS)[number];

export function grade7ScienceLesson(input: {
  conceptId: Grade7ScienceConceptId;
  title: string;
  domainTitle: string;
  prerequisites?: string[];
  nextConceptIds?: string[];
  content: GradeLessonContent;
}): CompleteLessonDefinition {
  return {
    conceptId: input.conceptId,
    subject: "science",
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
