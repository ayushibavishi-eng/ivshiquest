import type { CompleteLessonPhase } from "@/domain/complete-lesson";
import { isCurriculumGrade, type CurriculumGrade } from "@/domain/curriculum";
import type { Subject } from "@/domain/types";
import { COMPLETE_LESSON_PHASES } from "@/domain/complete-lesson";

export const ACTIVE_LESSON_COOKIE = "ivshi-active-lesson";

export type ActiveLessonPointer = {
  conceptId: string;
  lessonId: string;
  grade: CurriculumGrade;
  subject: Subject;
  stage: CompleteLessonPhase;
};

function isGrade(value: unknown): value is CurriculumGrade {
  return isCurriculumGrade(value);
}

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
      !isGrade(record.grade) ||
      !isSubject(record.subject) ||
      !isPhase(record.stage)
    ) {
      return undefined;
    }
    return {
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

export function writeActiveLesson(pointer: ActiveLessonPointer) {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${ACTIVE_LESSON_COOKIE}=${encodeURIComponent(JSON.stringify(pointer))}; path=/; max-age=2592000; samesite=lax`;
}
