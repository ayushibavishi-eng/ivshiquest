import { getActiveLearnerId } from "@/services/student/active-learner";

export const TRANSFORM_SEEN_COOKIE = "ivshi-transform-seen";

const MAX_AGE = 60 * 60 * 24 * 400;
const SEEN_VALUE = "1";

/** Cookie name scoped to one learner so first-time transform never crosses identities. */
export function transformSeenCookieName(learnerId: string): string {
  const safe = learnerId.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 80);
  return `${TRANSFORM_SEEN_COOKIE}.${safe}`;
}

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") {
    return undefined;
  }
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match?.slice(name.length + 1);
}

function writeCookie(name: string, value: string) {
  if (typeof document === "undefined") {
    return;
  }
  document.cookie = `${name}=${value}; path=/; max-age=${MAX_AGE}; samesite=lax`;
}

export function hasSeenIvshiTransform(learnerId?: string): boolean {
  const id = learnerId ?? getActiveLearnerId();
  return readCookie(transformSeenCookieName(id)) === SEEN_VALUE;
}

export function markIvshiTransformSeen(learnerId?: string): void {
  const id = learnerId ?? getActiveLearnerId();
  writeCookie(transformSeenCookieName(id), SEEN_VALUE);
}
