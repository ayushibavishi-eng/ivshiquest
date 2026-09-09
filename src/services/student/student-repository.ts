import { MOCK_CURRENT_STUDENT } from "@/content/mocks/current-student";
import type { Student } from "@/domain";

/**
 * Port for student profile access.
 * Swap this mock for a Supabase adapter later without changing screens.
 */
export type StudentRepository = {
  getCurrentStudent: () => Promise<Student>;
};

export const mockStudentRepository: StudentRepository = {
  async getCurrentStudent() {
    return MOCK_CURRENT_STUDENT;
  },
};

export const studentRepository: StudentRepository = mockStudentRepository;
