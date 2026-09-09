import { DEFAULT_STUDENT_THEME_ID, type StudentThemePreference } from "@/domain/theme";
import { MOCK_CURRENT_STUDENT } from "./current-student";

export const MOCK_STUDENT_THEME_PREFERENCE: StudentThemePreference = {
  studentId: MOCK_CURRENT_STUDENT.id,
  selectedThemeId: DEFAULT_STUDENT_THEME_ID,
};
