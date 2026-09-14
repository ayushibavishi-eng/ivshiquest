import { fallbackLearnerId } from "@/services/student/learner-profile";

export const DISCOVERY_TODAY_COOKIE = "ivshi-discovery-today";
export const DISCOVERY_COMPLETED_COOKIE = "ivshi-discovery-completed";
export const DISCOVERY_RECENT_COOKIE = "ivshi-discovery-recent";

export const MAX_COMPLETED_DISCOVERY_IDS = 150;
export const MAX_RECENT_DISCOVERY_IDS = 40;

/** Cookie name scoped to one learner so discovery history never crosses identities. */
export function discoveryHistoryCookieName(
  base:
    | typeof DISCOVERY_TODAY_COOKIE
    | typeof DISCOVERY_COMPLETED_COOKIE
    | typeof DISCOVERY_RECENT_COOKIE,
  learnerId: string,
): string {
  const safe = learnerId.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 80);
  return `${base}.${safe}`;
}

export function parseTodayLock(
  value: string | undefined,
  today: string,
): string | undefined {
  if (!value) {
    return undefined;
  }
  const [date, id] = value.split("|");
  if (date !== today || !id) {
    return undefined;
  }
  return id;
}

export function parseIdList(value: string | undefined): string[] {
  if (!value) {
    return [];
  }
  return value
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
}

export function encodeIdList(ids: readonly string[], max: number): string {
  return [...new Set(ids)].slice(-max).join(",");
}

export function nextCompletedCookieValue(
  current: string | undefined,
  id: string,
): string {
  const ids = parseIdList(current);
  if (!ids.includes(id)) {
    ids.push(id);
  }
  return encodeIdList(ids, MAX_COMPLETED_DISCOVERY_IDS);
}

export function nextRecentCookieValue(
  current: string | undefined,
  id: string,
): string {
  const ids = parseIdList(current).filter((item) => item !== id);
  ids.push(id);
  return encodeIdList(ids, MAX_RECENT_DISCOVERY_IDS);
}

/**
 * Read a discovery cookie for this learner.
 * Legacy unscoped cookies are only visible to the demo fallback identity —
 * newly onboarded learners start with empty discovery history.
 */
export function readLearnerDiscoveryCookieValue(
  learnerId: string,
  scopedValue: string | undefined,
  legacyUnscopedValue: string | undefined,
): string | undefined {
  if (scopedValue !== undefined && scopedValue.length > 0) {
    return scopedValue;
  }
  if (learnerId === fallbackLearnerId() && legacyUnscopedValue) {
    return legacyUnscopedValue;
  }
  return undefined;
}
