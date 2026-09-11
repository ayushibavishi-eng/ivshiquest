import { isCurriculumGrade } from "@/domain/curriculum";
import type {
  CompleteLessonDefinition,
  ResolvedCompleteLesson,
} from "@/domain/complete-lesson";
import { lessonIdFor, parseLessonId } from "@/domain/complete-lesson";
import { GRADE_4_MATH_LESSONS } from "@/content/lessons/grade-4-math";
import {
  getGrade4MathHostConceptId,
  skillsHostedBy,
} from "@/content/lessons/grade-4-math/skill-coverage";
import { equivalentFractionsLesson } from "@/content/lessons/equivalent-fractions";
import { photosynthesisLesson } from "@/content/lessons/photosynthesis";
import { subjectVerbAgreementLesson } from "@/content/lessons/subject-verb-agreement";

const LESSONS: CompleteLessonDefinition[] = [
  equivalentFractionsLesson,
  photosynthesisLesson,
  subjectVerbAgreementLesson,
  ...GRADE_4_MATH_LESSONS,
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
  if (!isCurriculumGrade(grade)) {
    return undefined;
  }

  const lookupId =
    grade === 4 ? (getGrade4MathHostConceptId(conceptId) ?? conceptId) : conceptId;
  const definition = byConceptId.get(lookupId);
  if (!definition) {
    return undefined;
  }

  const lessonGrade = grade;
  const content = definition.byGrade[lessonGrade];
  if (!content) {
    return undefined;
  }

  return {
    lessonId: lessonIdFor(definition.conceptId, lessonGrade),
    conceptId: definition.conceptId,
    subject: definition.subject,
    title: definition.title,
    domainTitle: definition.domainTitle,
    grade: lessonGrade,
    objective: content.objective,
    explanation: content.understand.paragraphs.join("\n\n"),
    examples: content.examples,
    activities: {
      explore: content.explore.activity,
      try: content.try,
    },
    practice: content.practice,
    reasoning: content.reasoning,
    retrieval: content.retrieve,
    misconceptions: content.misconceptions,
    reflection: content.reflect,
    masteryCriteria: content.masteryCriteria,
    teach: content.teach,
    prerequisites: definition.prerequisites,
    nextConceptIds: definition.nextConceptIds,
    coveredSkillIds:
      definition.coveredSkillIds ??
      (lessonGrade === 4 ? skillsHostedBy(definition.conceptId) : []),
    content,
  };
}

export function getCompleteLessonByLessonId(
  lessonId: string,
): ResolvedCompleteLesson | undefined {
  const parsed = parseLessonId(lessonId);
  if (!parsed) {
    return undefined;
  }
  return getCompleteLesson(parsed.conceptId, parsed.grade);
}

export function isCompleteLessonConcept(conceptId: string): boolean {
  return byConceptId.has(conceptId);
}
