import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_8_SCIENCE_CONCEPT_IDS = [
  "ncert-g8-curiosity-investigative-world-core",
  "ncert-g8-curiosity-invisible-living-core",
  "ncert-g8-curiosity-health-treasure-core",
  "ncert-g8-curiosity-electricity-magnetic-heating-core",
  "ncert-g8-curiosity-exploring-forces-core",
  "ncert-g8-curiosity-pressure-winds-storms-core",
  "ncert-g8-curiosity-particulate-nature-core",
  "ncert-g8-curiosity-elements-compounds-mixtures-core",
  "ncert-g8-curiosity-solutes-solvents-core",
  "ncert-g8-curiosity-light-mirrors-lenses-core",
  "ncert-g8-curiosity-keeping-time-skies-core",
  "ncert-g8-curiosity-nature-harmony-core",
  "ncert-g8-curiosity-earth-unique-planet-core",
] as const;

export type Grade8ScienceConceptId =
  (typeof GRADE_8_SCIENCE_CONCEPT_IDS)[number];

export function grade8ScienceLesson(input: {
  conceptId: Grade8ScienceConceptId;
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
    grades: [8],
    prerequisites: input.prerequisites ?? [],
    nextConceptIds: input.nextConceptIds ?? [],
    byGrade: {
      8: input.content,
    },
  };
}
