import { MOCK_CURRENT_STUDENT } from "@/content/mocks/current-student";
import {
  DEFAULT_CURRICULUM_ID,
  parseCurriculumId,
  resolveCurriculumId,
  type CurriculumId,
} from "@/domain/curriculum";

export const LEARNER_PROFILE_COOKIE = "ivshi-learner-profile";

export type LearnerProfile = {
  learnerId: string;
  displayName: string;
  /** Absent on older cookies → treated as India. */
  curriculumId?: CurriculumId;
};

const MAX_NAME_LENGTH = 24;
const COOKIE_MAX_AGE = 60 * 60 * 24 * 400;

export function normalizeLearnerDisplayName(raw: string): string | undefined {
  const cleaned = raw
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_NAME_LENGTH)
    .trim();
  if (cleaned.length < 1) {
    return undefined;
  }
  // Soft child-friendly polish: keep their spelling, capitalize first letter.
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

/** True for onboarded child ids — never the static demo mock student. */
export function isOnboardedLearnerId(learnerId: string): boolean {
  return (
    learnerId.startsWith("learner-") &&
    learnerId !== MOCK_CURRENT_STUDENT.id &&
    !learnerId.includes("mock")
  );
}

export function createLearnerId(displayName: string): string {
  const slug = displayName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 16);
  const suffix =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID().slice(0, 8)
      : `${Date.now().toString(36)}`;
  const id = `learner-${slug || "friend"}-${suffix}`;
  // Belt-and-suspenders: never mint the demo mock id for a real child.
  if (!isOnboardedLearnerId(id)) {
    return `learner-${slug || "friend"}-${Date.now().toString(36)}`;
  }
  return id;
}

export function resolveLearnerCurriculumId(
  profile: Pick<LearnerProfile, "curriculumId"> | undefined,
): CurriculumId {
  return resolveCurriculumId(profile?.curriculumId, DEFAULT_CURRICULUM_ID);
}

export function parseLearnerProfile(
  raw: string | undefined,
): LearnerProfile | undefined {
  if (!raw) {
    return undefined;
  }

  try {
    const decoded = decodeURIComponent(raw);
    const parsed: unknown = JSON.parse(decoded);
    if (!parsed || typeof parsed !== "object") {
      return undefined;
    }
    const record = parsed as Record<string, unknown>;
    if (
      typeof record.learnerId !== "string" ||
      record.learnerId.length < 3 ||
      typeof record.displayName !== "string"
    ) {
      return undefined;
    }
    const displayName = normalizeLearnerDisplayName(record.displayName);
    if (!displayName) {
      return undefined;
    }
    const curriculumId = parseCurriculumId(record.curriculumId);
    return {
      learnerId: record.learnerId,
      displayName,
      ...(curriculumId ? { curriculumId } : {}),
    };
  } catch {
    return undefined;
  }
}

function readProfileCookieRaw(): string | undefined {
  if (typeof document === "undefined") {
    return undefined;
  }
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${LEARNER_PROFILE_COOKIE}=`));
  return match?.slice(LEARNER_PROFILE_COOKIE.length + 1);
}

export function readLearnerProfile(): LearnerProfile | undefined {
  return parseLearnerProfile(readProfileCookieRaw());
}

export function readLearnerCurriculumId(
  fallback: CurriculumId = DEFAULT_CURRICULUM_ID,
): CurriculumId {
  return resolveCurriculumId(
    resolveLearnerCurriculumId(readLearnerProfile()),
    fallback,
  );
}

export function hasCompletedLearnerOnboarding(
  profile: LearnerProfile | undefined = readLearnerProfile(),
): boolean {
  return Boolean(profile?.learnerId && profile.displayName);
}

export function writeLearnerProfile(profile: LearnerProfile) {
  if (typeof document === "undefined") {
    return;
  }
  const displayName = normalizeLearnerDisplayName(profile.displayName);
  if (!displayName) {
    return;
  }
  const curriculumId = resolveLearnerCurriculumId(profile);
  const payload: LearnerProfile = {
    learnerId: profile.learnerId,
    displayName,
    curriculumId,
  };
  document.cookie = `${LEARNER_PROFILE_COOKIE}=${encodeURIComponent(JSON.stringify(payload))}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

export function completeLearnerOnboarding(input: {
  displayName: string;
  learnerId?: string;
  curriculumId?: CurriculumId;
}): LearnerProfile | undefined {
  const displayName = normalizeLearnerDisplayName(input.displayName);
  if (!displayName) {
    return undefined;
  }
  // Always mint a real onboarded id unless a valid learner-* id is supplied
  // (tests). Never persist Avery / student-mock-1 as an onboarded child.
  const requested = input.learnerId;
  const learnerId =
    requested && isOnboardedLearnerId(requested)
      ? requested
      : createLearnerId(displayName);
  const profile: LearnerProfile = {
    learnerId,
    displayName,
    curriculumId: resolveCurriculumId(
      input.curriculumId,
      DEFAULT_CURRICULUM_ID,
    ),
  };
  writeLearnerProfile(profile);
  return profile;
}

/** Fallback id only when no profile cookie exists (pre-onboarding / tests). */
export function fallbackLearnerId(): string {
  return MOCK_CURRENT_STUDENT.id;
}
