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
import { GRADE_5_MATH_LESSONS } from "@/content/lessons/grade-5-math";
import {
  getGrade5MathHostConceptId,
  skillsHostedByGrade5,
} from "@/content/lessons/grade-5-math/skill-coverage";
import { GRADE_6_MATH_LESSONS } from "@/content/lessons/grade-6-math";
import {
  getGrade6MathHostConceptId,
  skillsHostedByGrade6,
} from "@/content/lessons/grade-6-math/skill-coverage";
import { GRADE_7_MATH_LESSONS } from "@/content/lessons/grade-7-math";
import {
  getGrade7MathHostConceptId,
  skillsHostedByGrade7,
} from "@/content/lessons/grade-7-math/skill-coverage";
import { GRADE_8_MATH_LESSONS } from "@/content/lessons/grade-8-math";
import {
  getGrade8MathHostConceptId,
  skillsHostedByGrade8,
} from "@/content/lessons/grade-8-math/skill-coverage";
import { GRADE_4_EVS_LESSONS } from "@/content/lessons/grade-4-evs";
import { GRADE_5_EVS_LESSONS } from "@/content/lessons/grade-5-evs";
import {
  getGrade5ScienceHostConceptId,
  skillsHostedByGrade5Science,
} from "@/content/lessons/grade-5-evs/skill-coverage";
import { GRADE_6_SCIENCE_LESSONS } from "@/content/lessons/grade-6-science";
import {
  getGrade6ScienceHostConceptId,
  skillsHostedByGrade6Science,
} from "@/content/lessons/grade-6-science/skill-coverage";
import { GRADE_7_SCIENCE_LESSONS } from "@/content/lessons/grade-7-science";
import {
  getGrade7ScienceHostConceptId,
  skillsHostedByGrade7Science,
} from "@/content/lessons/grade-7-science/skill-coverage";
import { GRADE_8_SCIENCE_LESSONS } from "@/content/lessons/grade-8-science";
import {
  getGrade8ScienceHostConceptId,
  skillsHostedByGrade8Science,
} from "@/content/lessons/grade-8-science/skill-coverage";
import { GRADE_4_ENGLISH_LESSONS } from "@/content/lessons/grade-4-english";
import {
  getGrade4EnglishHostConceptId,
  skillsHostedByGrade4English,
} from "@/content/lessons/grade-4-english/skill-coverage";
import { GRADE_5_ENGLISH_LESSONS } from "@/content/lessons/grade-5-english";
import {
  getGrade5EnglishHostConceptId,
  skillsHostedByGrade5English,
} from "@/content/lessons/grade-5-english/skill-coverage";
import { GRADE_6_ENGLISH_LESSONS } from "@/content/lessons/grade-6-english";
import {
  getGrade6EnglishHostConceptId,
  skillsHostedByGrade6English,
} from "@/content/lessons/grade-6-english/skill-coverage";
import { GRADE_7_ENGLISH_LESSONS } from "@/content/lessons/grade-7-english";
import {
  getGrade7EnglishHostConceptId,
  skillsHostedByGrade7English,
} from "@/content/lessons/grade-7-english/skill-coverage";
import { GRADE_8_ENGLISH_LESSONS } from "@/content/lessons/grade-8-english";
import {
  getGrade8EnglishHostConceptId,
  skillsHostedByGrade8English,
} from "@/content/lessons/grade-8-english/skill-coverage";
import { equivalentFractionsLesson } from "@/content/lessons/equivalent-fractions";
import { photosynthesisLesson } from "@/content/lessons/photosynthesis";
import { subjectVerbAgreementLesson } from "@/content/lessons/subject-verb-agreement";

const LESSONS: CompleteLessonDefinition[] = [
  equivalentFractionsLesson,
  photosynthesisLesson,
  subjectVerbAgreementLesson,
  ...GRADE_4_MATH_LESSONS,
  ...GRADE_5_MATH_LESSONS,
  ...GRADE_6_MATH_LESSONS,
  ...GRADE_7_MATH_LESSONS,
  ...GRADE_8_MATH_LESSONS,
  ...GRADE_4_EVS_LESSONS,
  ...GRADE_5_EVS_LESSONS,
  ...GRADE_6_SCIENCE_LESSONS,
  ...GRADE_7_SCIENCE_LESSONS,
  ...GRADE_8_SCIENCE_LESSONS,
  ...GRADE_4_ENGLISH_LESSONS,
  ...GRADE_5_ENGLISH_LESSONS,
  ...GRADE_6_ENGLISH_LESSONS,
  ...GRADE_7_ENGLISH_LESSONS,
  ...GRADE_8_ENGLISH_LESSONS,
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
    grade === 4
      ? (getGrade4MathHostConceptId(conceptId) ??
        getGrade4EnglishHostConceptId(conceptId) ??
        conceptId)
      : grade === 5
        ? (getGrade5MathHostConceptId(conceptId) ??
          getGrade5ScienceHostConceptId(conceptId) ??
          getGrade5EnglishHostConceptId(conceptId) ??
          conceptId)
        : grade === 6
          ? (getGrade6MathHostConceptId(conceptId) ??
            getGrade6ScienceHostConceptId(conceptId) ??
            getGrade6EnglishHostConceptId(conceptId) ??
            conceptId)
          : grade === 7
            ? (getGrade7MathHostConceptId(conceptId) ??
              getGrade7ScienceHostConceptId(conceptId) ??
              getGrade7EnglishHostConceptId(conceptId) ??
              conceptId)
            : grade === 8
              ? (getGrade8MathHostConceptId(conceptId) ??
                getGrade8ScienceHostConceptId(conceptId) ??
                getGrade8EnglishHostConceptId(conceptId) ??
                conceptId)
              : conceptId;
  const definition = byConceptId.get(lookupId);
  if (!definition) {
    return undefined;
  }

  const lessonGrade = grade;
  const content = definition.byGrade[lessonGrade];
  if (!content) {
    return undefined;
  }

  const hostedSkills =
    lessonGrade === 4
      ? [
          ...skillsHostedBy(definition.conceptId),
          ...skillsHostedByGrade4English(definition.conceptId),
        ]
      : lessonGrade === 5
        ? [
            ...skillsHostedByGrade5(definition.conceptId),
            ...skillsHostedByGrade5Science(definition.conceptId),
            ...skillsHostedByGrade5English(definition.conceptId),
          ]
        : lessonGrade === 6
          ? [
              ...skillsHostedByGrade6(definition.conceptId),
              ...skillsHostedByGrade6Science(definition.conceptId),
              ...skillsHostedByGrade6English(definition.conceptId),
            ]
          : lessonGrade === 7
            ? [
                ...skillsHostedByGrade7(definition.conceptId),
                ...skillsHostedByGrade7Science(definition.conceptId),
                ...skillsHostedByGrade7English(definition.conceptId),
              ]
            : lessonGrade === 8
              ? [
                  ...skillsHostedByGrade8(definition.conceptId),
                  ...skillsHostedByGrade8Science(definition.conceptId),
                  ...skillsHostedByGrade8English(definition.conceptId),
                ]
              : [];

  const coveredSkillIds = Array.from(
    new Set([...(definition.coveredSkillIds ?? []), ...hostedSkills]),
  );

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
    coveredSkillIds,
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
