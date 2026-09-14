import type { CompleteLessonPhase } from "@/domain/complete-lesson";
import { COMPLETE_LESSON_PHASES } from "@/domain/complete-lesson";
import { isCurriculumGrade, type CurriculumGrade } from "@/domain/curriculum";
import type { Subject } from "@/domain/types";
import { getActiveLearnerId } from "@/services/student/active-learner";

export const ACTIVE_LESSON_COOKIE = "ivshi-active-lesson";

export type ActiveLessonPointer = {
  learnerId: string;
  conceptId: string;
  lessonId: string;
  grade: CurriculumGrade;
  subject: Subject;
  stage: CompleteLessonPhase;
};

export type ActiveLessonMatchContext = {
  learnerId: string;
  grade: CurriculumGrade;
  subject?: Subject;
  lessonId?: string;
  conceptId?: string;
};

function isSubject(value: unknown): value is Subject {
  return value === "math" || value === "science" || value === "english";
}

function isPhase(value: unknown): value is CompleteLessonPhase {
  return (
    typeof value === "string" &&
    (COMPLETE_LESSON_PHASES as readonly string[]).includes(value)
  );
}

export function parseActiveLessonPointer(
  raw: string | undefined,
): ActiveLessonPointer | undefined {
  if (!raw) {
    return undefined;
  }

  try {
    const parsed: unknown = JSON.parse(decodeURIComponent(raw));
    if (!parsed || typeof parsed !== "object") {
      return undefined;
    }
    const record = parsed as Record<string, unknown>;
    if (
      typeof record.conceptId !== "string" ||
      typeof record.lessonId !== "string" ||
      !isCurriculumGrade(record.grade) ||
      !isSubject(record.subject) ||
      !isPhase(record.stage)
    ) {
      return undefined;
    }

    // Require an explicit learnerId so legacy demo cookies cannot attach
    // to a newly onboarded child via getActiveLearnerId() fallback.
    if (
      typeof record.learnerId !== "string" ||
      record.learnerId.length < 3
    ) {
      return undefined;
    }

    return {
      learnerId: record.learnerId,
      conceptId: record.conceptId,
      lessonId: record.lessonId,
      grade: record.grade,
      subject: record.subject,
      stage: record.stage,
    };
  } catch {
    return undefined;
  }
}

export function activeLessonMatchesContext(
  pointer: ActiveLessonPointer | undefined,
  context: ActiveLessonMatchContext,
): pointer is ActiveLessonPointer {
  if (!pointer) {
    return false;
  }
  if (pointer.learnerId !== context.learnerId) {
    return false;
  }
  if (pointer.grade !== context.grade) {
    return false;
  }
  if (context.subject && pointer.subject !== context.subject) {
    return false;
  }
  if (context.lessonId && pointer.lessonId !== context.lessonId) {
    return false;
  }
  if (context.conceptId && pointer.conceptId !== context.conceptId) {
    return false;
  }
  return true;
}

export function resumePhaseIndexForLesson(
  pointer: ActiveLessonPointer | undefined,
  lesson: {
    learnerId?: string;
    lessonId: string;
    grade: CurriculumGrade;
    subject: Subject;
  },
): number {
  if (
    !activeLessonMatchesContext(pointer, {
      learnerId: lesson.learnerId ?? getActiveLearnerId(),
      grade: lesson.grade,
      subject: lesson.subject,
      lessonId: lesson.lessonId,
    })
  ) {
    return 0;
  }
  const index = COMPLETE_LESSON_PHASES.indexOf(pointer.stage);
  return index >= 0 ? index : 0;
}

function readCookieRaw(): string | undefined {
  if (typeof document === "undefined") {
    return undefined;
  }
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${ACTIVE_LESSON_COOKIE}=`));
  return match?.slice(ACTIVE_LESSON_COOKIE.length + 1);
}

export function readActiveLessonPointer(): ActiveLessonPointer | undefined {
  return parseActiveLessonPointer(readCookieRaw());
}

export function writeActiveLesson(pointer: ActiveLessonPointer) {
  if (typeof document === "undefined") {
    return;
  }

  const payload: ActiveLessonPointer = {
    ...pointer,
    learnerId: pointer.learnerId || getActiveLearnerId(),
  };

  document.cookie = `${ACTIVE_LESSON_COOKIE}=${encodeURIComponent(JSON.stringify(payload))}; path=/; max-age=2592000; samesite=lax`;
}

export function clearActiveLesson() {
  if (typeof document === "undefined") {
    return;
  }
  document.cookie = `${ACTIVE_LESSON_COOKIE}=; path=/; max-age=0; samesite=lax`;
}
