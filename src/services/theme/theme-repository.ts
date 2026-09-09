import { MOCK_STUDENT_THEME_PREFERENCE } from "@/content/mocks/student-theme";
import type { StudentThemePreference } from "@/domain/theme";

export type ThemeRepository = {
  getStudentThemePreference: () => Promise<StudentThemePreference>;
};

export const mockThemeRepository: ThemeRepository = {
  async getStudentThemePreference() {
    return MOCK_STUDENT_THEME_PREFERENCE;
  },
};

export const themeRepository: ThemeRepository = mockThemeRepository;
