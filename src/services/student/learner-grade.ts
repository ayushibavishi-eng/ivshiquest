import { GRADES, type Grade } from "@/domain/types";

export const LEARNER_GRADE_COOKIE = "ivshi-learner-grade";

export function parseLearnerGrade(
  value: string | undefined,
): Grade | undefined {
  if (!value) {
    return undefined;
  }
  const grade = Number(value);
  return GRADES.includes(grade as Grade) ? (grade as Grade) : undefined;
}

export function readLearnerGrade(fallback: Grade = 6): Grade {
  if (typeof document === "undefined") {
    return fallback;
  }

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${LEARNER_GRADE_COOKIE}=`));

  return (
    parseLearnerGrade(match?.slice(LEARNER_GRADE_COOKIE.length + 1)) ?? fallback
  );
}

export function writeLearnerGrade(grade: Grade) {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${LEARNER_GRADE_COOKIE}=${String(grade)}; path=/; max-age=2592000; samesite=lax`;
}
