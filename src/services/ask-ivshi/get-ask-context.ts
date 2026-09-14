import { cache } from "react";
import { cookies } from "next/headers";
import type { AskLearnerContext, AskLessonContext } from "@/domain/ask-ivshi";
import { SUBJECT_LABELS, type Subject } from "@/domain/types";
import { getCompleteLesson } from "@/content/lessons";
import { buildLessonTutorContext } from "@/domain/complete-lesson";
import {
  curriculumCountry,
  isCurriculumGrade,
  resolveCurriculumId,
} from "@/domain/curriculum";
import { getStudentHome } from "@/services/home";
import { getCurrentStudent } from "@/services/student";
import {
  ACTIVE_CURRICULUM_COOKIE,
  getCurriculumNode,
  parseActiveCurriculumTopic,
} from "@/services/curriculum";
import {
  ACTIVE_LESSON_COOKIE,
  activeLessonMatchesContext,
  parseActiveLessonPointer,
} from "@/services/lessons";

function lessonFromCookie(
  raw: string | undefined,
  learnerId: string,
  grade: number,
): {
  subject: Subject;
  context: AskLessonContext;
} | null {
  const pointer = parseActiveLessonPointer(raw);
  if (
    !isCurriculumGrade(grade) ||
    !activeLessonMatchesContext(pointer, { learnerId, grade })
  ) {
    return null;
  }

  const lesson = getCompleteLesson(pointer.conceptId, pointer.grade);
  if (!lesson || lesson.lessonId !== pointer.lessonId) {
    return null;
  }

  const tutor = buildLessonTutorContext(lesson, pointer.stage);
  return {
    subject: lesson.subject,
    context: {
      grade: tutor.grade,
      subject: tutor.subject,
      lessonId: tutor.lessonId,
      conceptId: tutor.conceptId,
      lessonTitle: tutor.lessonTitle,
      learningObjective: tutor.learningObjective,
      currentLearningStage: tutor.currentLearningStage,
      explanation: tutor.explanation,
      examples: tutor.examples,
      misconceptions: tutor.misconceptions,
    },
  };
}

export const getAskContext = cache(async (): Promise<AskLearnerContext> => {
  const [student, home, cookieStore] = await Promise.all([
    getCurrentStudent(),
    getStudentHome(),
    cookies(),
  ]);

  const learnerId = student.id;
  const activeTopic = parseActiveCurriculumTopic(
    cookieStore.get(ACTIVE_CURRICULUM_COOKIE)?.value,
  );
  const topicMatchesGrade =
    activeTopic &&
    activeTopic.learnerId === learnerId &&
    isCurriculumGrade(student.grade) &&
    activeTopic.grade === student.grade
      ? activeTopic
      : undefined;
  const currentFromCatalog = topicMatchesGrade
    ? getCurriculumNode(topicMatchesGrade.topicId)
    : undefined;
  const activeLesson = lessonFromCookie(
    cookieStore.get(ACTIVE_LESSON_COOKIE)?.value,
    learnerId,
    student.grade,
  );

  const curriculumId = resolveCurriculumId(student.curriculumId);

  return {
    grade: student.grade,
    country: curriculumCountry(curriculumId),
    curriculumId,
    subjects: student.subjects.map((subject) => SUBJECT_LABELS[subject]),
    currentSubject: activeLesson
      ? SUBJECT_LABELS[activeLesson.subject]
      : currentFromCatalog
        ? SUBJECT_LABELS[currentFromCatalog.subjectId]
        : (home.continueLearning?.subjectLabel ?? null),
    currentTopic: activeLesson
      ? activeLesson.context.lessonTitle
      : currentFromCatalog
        ? currentFromCatalog.title
        : (home.continueLearning?.topic ?? null),
    lesson: activeLesson?.context ?? null,
    learningDNA: null,
    previousMistakes: null,
    learnerPreferences: null,
    progress: home.knowledgeTree
      ? {
          growing: home.knowledgeTree.growing,
          learned: home.knowledgeTree.learned,
          mastered: home.knowledgeTree.mastered,
        }
      : null,
    parentApprovedContext: null,
  };
});
