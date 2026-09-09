import {
  DEFAULT_STUDENT_THEME_ID,
  type StudentThemeDefinition,
  type StudentThemeId,
} from "@/domain/theme";

export const STUDENT_THEME_CATALOG: StudentThemeDefinition[] = [
  {
    id: "ocean",
    name: "Ocean",
    tagline: "Sky, water, and a quiet shore.",
    available: true,
  },
  {
    id: "forest",
    name: "Forest",
    tagline: "Coming next.",
    available: false,
  },
  {
    id: "cosmos",
    name: "Cosmos",
    tagline: "Coming next.",
    available: false,
  },
  {
    id: "blossom",
    name: "Blossom",
    tagline: "Coming next.",
    available: false,
  },
  {
    id: "sunshine",
    name: "Sunshine",
    tagline: "Coming next.",
    available: false,
  },
  {
    id: "meadow",
    name: "Meadow",
    tagline: "Coming next.",
    available: false,
  },
];

export function getThemeDefinition(
  id: StudentThemeId,
): StudentThemeDefinition | undefined {
  return STUDENT_THEME_CATALOG.find((theme) => theme.id === id);
}

export function resolveStudentThemeId(id: StudentThemeId): StudentThemeId {
  const theme = getThemeDefinition(id);
  return theme?.available ? theme.id : DEFAULT_STUDENT_THEME_ID;
}
