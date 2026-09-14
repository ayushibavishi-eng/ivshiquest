import { isCurriculumGrade, type CurriculumGrade } from "@/domain/curriculum";
import { getActiveLearnerId } from "@/services/student/active-learner";
import { fallbackLearnerId } from "@/services/student/learner-profile";

export const ACTIVE_CURRICULUM_COOKIE = "ivshi-active-topic";

export type ActiveCurriculumTopicPointer = {
  learnerId: string;
  grade: CurriculumGrade;
  topicId: string;
};

export function parseActiveCurriculumTopic(
  raw: string | undefined,
): ActiveCurriculumTopicPointer | undefined {
  if (!raw) {
    return undefined;
  }

  try {
    const decoded = decodeURIComponent(raw);
    // Legacy bare topic id belongs only to the demo fallback bucket —
    // never silently attach it to a newly onboarded learner.
    if (!decoded.startsWith("{")) {
      return {
        learnerId: fallbackLearnerId(),
        grade: 6,
        topicId: decoded,
      };
    }

    const parsed: unknown = JSON.parse(decoded);
    if (!parsed || typeof parsed !== "object") {
      return undefined;
    }
    const record = parsed as Record<string, unknown>;
    if (
      typeof record.topicId !== "string" ||
      !isCurriculumGrade(record.grade) ||
      typeof record.learnerId !== "string" ||
      record.learnerId.length < 3
    ) {
      return undefined;
    }
    return {
      learnerId: record.learnerId,
      grade: record.grade,
      topicId: record.topicId,
    };
  } catch {
    return undefined;
  }
}

export function writeActiveCurriculumTopic(
  topicId: string,
  scope: { learnerId?: string; grade: CurriculumGrade },
) {
  if (typeof document === "undefined") {
    return;
  }

  const pointer: ActiveCurriculumTopicPointer = {
    learnerId: scope.learnerId ?? getActiveLearnerId(),
    grade: scope.grade,
    topicId,
  };

  document.cookie = `${ACTIVE_CURRICULUM_COOKIE}=${encodeURIComponent(JSON.stringify(pointer))}; path=/; max-age=2592000; samesite=lax`;
}

export function clearActiveCurriculumTopic() {
  if (typeof document === "undefined") {
    return;
  }
  document.cookie = `${ACTIVE_CURRICULUM_COOKIE}=; path=/; max-age=0; samesite=lax`;
}
