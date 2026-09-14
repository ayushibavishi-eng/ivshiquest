import type { Student } from "@/domain";
import { DEFAULT_CURRICULUM_ID } from "@/domain/curriculum";

export const MOCK_CURRENT_STUDENT: Student = {
  id: "student-mock-1",
  role: "student",
  /** Placeholder only — real names come from learner onboarding. */
  displayName: "Friend",
  grade: 6,
  subjects: ["math", "science", "english"],
  curriculumId: DEFAULT_CURRICULUM_ID,
};
