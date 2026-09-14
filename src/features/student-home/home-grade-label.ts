import type { Grade } from "@/domain/types";

/** Home header label for the learner's selected grade. */
export function homeGradeLabel(grade: Grade | number): string {
  return `Grade ${grade}`;
}
