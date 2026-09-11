import { cache } from "react";
import { cookies } from "next/headers";
import type { AskLearnerContext, AskLessonContext } from "@/domain/ask-ivshi";
import { SUBJECT_LABELS, type Subject } from "@/domain/types";
import { getCompleteLesson } from "@/content/lessons";
import { buildLessonTutorContext } from "@/domain/complete-lesson";
import { getStudentHome } from "@/services/home";
import { getCurrentStudent } from "@/services/student";
import {
  ACTIVE_CURRICULUM_COOKIE,
  getCurriculumNode,
} from "@/services/curriculum";
import {
  ACTIVE_LESSON_COOKIE,
  parseActiveLessonPointer,
} from "@/services/lessons";

function lessonFromCookie(raw: string | undefined): {
  subject: Subject;
  context: AskLessonContext;
} | null {
  const pointer = parseActiveLessonPointer(raw);
  if (!pointer) {
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

  const rawActiveId = cookieStore.get(ACTIVE_CURRICULUM_COOKIE)?.value;
  const activeId = rawActiveId ? decodeURIComponent(rawActiveId) : undefined;
  const currentFromCatalog = activeId ? getCurriculumNode(activeId) : undefined;
  const activeLesson = lessonFromCookie(
    cookieStore.get(ACTIVE_LESSON_COOKIE)?.value,
  );

  return {
    grade: student.grade,
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
