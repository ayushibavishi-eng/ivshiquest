import { cache } from "react";
import { resolveStudentThemeId } from "@/content/themes/catalog";
import type { StudentThemeId } from "@/domain/theme";
import { themeRepository } from "./theme-repository";

export const getStudentThemePreference = cache(() =>
  themeRepository.getStudentThemePreference(),
);

export const getResolvedStudentThemeId = cache(
  async (): Promise<StudentThemeId> => {
    const preference = await getStudentThemePreference();
    return resolveStudentThemeId(preference.selectedThemeId);
  },
);
