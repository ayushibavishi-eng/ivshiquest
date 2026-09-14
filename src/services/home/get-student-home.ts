import { cache } from "react";
import { cookies } from "next/headers";
import { calendarDateISO } from "@/domain/curiosity";
import type {
  ContinueLearning,
  KnowledgeTreeSummary,
  StudentHome,
  TeachItPrompt,
} from "@/domain/student-home";
import { SUBJECT_LABELS } from "@/domain/types";
import { isCurriculumGrade } from "@/domain/curriculum";
import { getCompleteLesson } from "@/content/lessons";
import { getTodaysDiscovery } from "@/services/discovery";
import { getCurrentStudent } from "@/services/student";
import {
  isOnboardedLearnerId,
} from "@/services/student/learner-profile";
import {
  ACTIVE_LESSON_COOKIE,
  activeLessonMatchesContext,
  parseActiveLessonPointer,
} from "@/services/lessons";
import { homeRepository } from "./home-repository";

/** V1 Home has no server-side Quest/KT progress store — start empty per learner. */
export const EMPTY_HOME_KNOWLEDGE_TREE: KnowledgeTreeSummary = {
  growing: 0,
  learned: 0,
  mastered: 0,
};

function continueFromActiveLesson(
  rawCookie: string | undefined,
  grade: number,
  learnerId: string,
): ContinueLearning | null {
  // Demo/fallback identity never inherits a prior session's Continue card.
  if (!isOnboardedLearnerId(learnerId)) {
    return null;
  }

  const pointer = parseActiveLessonPointer(rawCookie);
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

  return {
    id: `continue-${lesson.conceptId}`,
    conceptId: lesson.conceptId,
    subject: lesson.subject,
    subjectLabel: SUBJECT_LABELS[lesson.subject],
    topic: lesson.title,
    lastExploredLabel: "Pick up where you left off",
  };
}

/**
 * Overlay identity-scoped Home fields so a new learner never inherits the
 * repository template's Quest / Knowledge Tree / Teach It / continue demo state.
 * Quest and Teach It stay null until real learner-scoped stores exist —
 * never reintroduce global completedChallenges or demo Teach It topics.
 */
export function applyLearnerHomeIsolation(
  template: StudentHome,
  fields: {
    student: StudentHome["student"];
    continueLearning: ContinueLearning | null;
    todayDiscovery: StudentHome["todayDiscovery"];
    /** Only pass when derived from this learner's mastered content. */
    teachIt?: TeachItPrompt | null;
  },
): StudentHome {
  return {
    ...template,
    student: fields.student,
    todayDiscovery: fields.todayDiscovery,
    continueLearning: fields.continueLearning,
    // Bound to active learner only via explicit null for V1 (no demo Quest).
    activeQuest: null,
    knowledgeTree: EMPTY_HOME_KNOWLEDGE_TREE,
    // Never inherit mock "The Water Cycle" Teach It for a real child.
    teachIt: fields.teachIt ?? null,
  };
}

export const getStudentHome = cache(async (): Promise<StudentHome> => {
  const [home, student, cookieStore] = await Promise.all([
    homeRepository.getStudentHome(),
    getCurrentStudent(),
    cookies(),
  ]);
  const date = calendarDateISO();
  const discovery = await getTodaysDiscovery(student, date);
  const continueLearning = continueFromActiveLesson(
    cookieStore.get(ACTIVE_LESSON_COOKIE)?.value,
    student.grade,
    student.id,
  );

  return applyLearnerHomeIsolation(home, {
    student,
    continueLearning,
    todayDiscovery: {
      id: discovery.id,
      title: discovery.question,
      durationLabel: `${discovery.durationMinutes}-minute discovery`,
      subject: discovery.subject,
      date,
    },
  });
});
