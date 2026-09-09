import { MOCK_STUDENT_HOME } from "@/content/mocks/student-home";
import type { StudentHome } from "@/domain/student-home";

/**
 * Port for Student Home data.
 * Swap this mock for a real adapter later without changing the screen.
 */
export type HomeRepository = {
  getStudentHome: () => Promise<StudentHome>;
};

export const mockHomeRepository: HomeRepository = {
  async getStudentHome() {
    return MOCK_STUDENT_HOME;
  },
};

export const homeRepository: HomeRepository = mockHomeRepository;
