import type { CurriculumGrade } from "@/domain/curriculum";
import type {
  CompleteLessonDefinition,
  ResolvedCompleteLesson,
} from "@/domain/complete-lesson";
import { equivalentFractionsLesson } from "@/content/lessons/equivalent-fractions";
import { photosynthesisLesson } from "@/content/lessons/photosynthesis";
import { subjectVerbAgreementLesson } from "@/content/lessons/subject-verb-agreement";

const LESSONS: CompleteLessonDefinition[] = [
  equivalentFractionsLesson,
  photosynthesisLesson,
  subjectVerbAgreementLesson,
];

const byConceptId = new Map(
  LESSONS.map((lesson) => [lesson.conceptId, lesson]),
);

export function getCompleteLessonDefinition(
  conceptId: string,
): CompleteLessonDefinition | undefined {
  return byConceptId.get(conceptId);
}

export function getCompleteLesson(
  conceptId: string,
  grade: number,
): ResolvedCompleteLesson | undefined {
  const definition = byConceptId.get(conceptId);
  if (!definition) {
    return undefined;
  }

  if (grade !== 4 && grade !== 5 && grade !== 6) {
    return undefined;
  }
  const lessonGrade = grade as CurriculumGrade;
  const content = definition.byGrade[lessonGrade];
  if (!content) {
    return undefined;
  }

  return {
    conceptId: definition.conceptId,
    subject: definition.subject,
    title: definition.title,
    domainTitle: definition.domainTitle,
    grade: lessonGrade,
    objective: content.objective,
    prerequisites: definition.prerequisites,
    nextConceptIds: definition.nextConceptIds,
    content,
  };
}

export function isCompleteLessonConcept(conceptId: string): boolean {
  return byConceptId.has(conceptId);
}
