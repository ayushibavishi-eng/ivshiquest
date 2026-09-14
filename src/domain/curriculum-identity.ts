/**
 * Minimal curriculum identity for V1 multi-country support.
 * India is the default; USA is reserved for future content (no US lessons yet).
 */

export const CURRICULUM_COUNTRIES = ["IN", "US"] as const;
export type CurriculumCountry = (typeof CURRICULUM_COUNTRIES)[number];

export const CURRICULUM_IDS = ["india-current", "us"] as const;
export type CurriculumId = (typeof CURRICULUM_IDS)[number];

/** Default for all existing learners and India catalogue content. */
export const DEFAULT_CURRICULUM_ID: CurriculumId = "india-current";

export const CURRICULUM_META: Record<
  CurriculumId,
  { country: CurriculumCountry; label: string; system: string }
> = {
  "india-current": {
    country: "IN",
    label: "India",
    system: "India (current / NCERT-aligned)",
  },
  us: {
    country: "US",
    label: "United States",
    system: "United States",
  },
};

export function isCurriculumId(value: unknown): value is CurriculumId {
  return (
    typeof value === "string" &&
    (CURRICULUM_IDS as readonly string[]).includes(value)
  );
}

export function parseCurriculumId(
  value: unknown,
): CurriculumId | undefined {
  return isCurriculumId(value) ? value : undefined;
}

export function resolveCurriculumId(
  value: unknown,
  fallback: CurriculumId = DEFAULT_CURRICULUM_ID,
): CurriculumId {
  return parseCurriculumId(value) ?? fallback;
}

export function curriculumCountry(id: CurriculumId): CurriculumCountry {
  return CURRICULUM_META[id].country;
}

export function curriculumLabel(id: CurriculumId): string {
  return CURRICULUM_META[id].label;
}
