export const STUDENT_THEME_IDS = [
  "ocean",
  "forest",
  "cosmos",
  "blossom",
  "sunshine",
  "meadow",
] as const;

export type StudentThemeId = (typeof STUDENT_THEME_IDS)[number];

export const DEFAULT_STUDENT_THEME_ID: StudentThemeId = "ocean";

/**
 * Catalog entry for the future My Theme picker.
 * Only available themes have a visual implementation.
 */
export type StudentThemeDefinition = {
  id: StudentThemeId;
  name: string;
  tagline: string;
  available: boolean;
};

/**
 * Preference stored on the student profile later.
 * V1 is mock-only and defaults to Ocean.
 */
export type StudentThemePreference = {
  studentId: string;
  selectedThemeId: StudentThemeId;
};

/**
 * Semantic paint a theme must provide. Values live in CSS so screens
 * keep using token classes instead of hardcoded colors.
 */
export type ThemeTokenName =
  | "background"
  | "surface"
  | "surface-elevated"
  | "primary"
  | "primary-foreground"
  | "secondary"
  | "accent"
  | "text"
  | "text-muted"
  | "border"
  | "success"
  | "focus";
