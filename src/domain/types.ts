export type Role = "student" | "parent" | "teacher";

export const GRADES = [4, 5, 6, 7, 8] as const;
export type Grade = (typeof GRADES)[number];

export const SUBJECTS = ["math", "science", "english"] as const;
export type Subject = (typeof SUBJECTS)[number];

export const SUBJECT_LABELS: Record<Subject, string> = {
  math: "Math",
  science: "Science",
  english: "English",
};

/**
 * Student identity for V1. No email or other PII — parent accounts will
 * own contact details when authentication is added later.
 */
export type Student = {
  id: string;
  role: "student";
  displayName: string;
  grade: Grade;
  subjects: Subject[];
};
