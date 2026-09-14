import type {
  CompleteLessonDefinition,
  GradeLessonContent,
} from "@/domain/complete-lesson";

export const GRADE_6_SCIENCE_CONCEPT_IDS = [
  "ncert-g6-curiosity-wonderful-world-core",
  "ncert-g6-curiosity-diversity-living-core",
  "ncert-g6-curiosity-mindful-eating-core",
  "ncert-g6-curiosity-exploring-magnets-core",
  "ncert-g6-curiosity-measurement-length-motion-core",
  "ncert-g6-curiosity-materials-around-us-core",
  "ncert-g6-curiosity-temperature-measurement-core",
  "ncert-g6-curiosity-states-of-water-core",
  "ncert-g6-curiosity-methods-of-separation-core",
  "ncert-g6-curiosity-living-creatures-core",
  "ncert-g6-curiosity-natures-treasures-core",
  "ncert-g6-curiosity-beyond-earth-core",
] as const;

export type Grade6ScienceConceptId =
  (typeof GRADE_6_SCIENCE_CONCEPT_IDS)[number];

export function grade6ScienceLesson(input: {
  conceptId: Grade6ScienceConceptId;
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
    grades: [6],
    prerequisites: input.prerequisites ?? [],
    nextConceptIds: input.nextConceptIds ?? [],
    coveredSkillIds: input.coveredSkillIds,
    byGrade: {
      6: input.content,
    },
  };
}
