"use client";

import { useEffect } from "react";
import { getActiveLearnerId } from "@/services/student/active-learner";
import {
  DISCOVERY_COMPLETED_COOKIE,
  DISCOVERY_RECENT_COOKIE,
  DISCOVERY_TODAY_COOKIE,
  discoveryHistoryCookieName,
  nextCompletedCookieValue,
  nextRecentCookieValue,
  parseIdList,
  readLearnerDiscoveryCookieValue,
} from "./history-codec";

const MAX_AGE = 60 * 60 * 24 * 400;

function writeCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=${MAX_AGE}; samesite=lax`;
}

function readCookie(name: string): string | undefined {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match?.slice(name.length + 1);
}

function readScopedOrLegacy(
  base:
    | typeof DISCOVERY_TODAY_COOKIE
    | typeof DISCOVERY_COMPLETED_COOKIE
    | typeof DISCOVERY_RECENT_COOKIE,
  learnerId: string,
): string | undefined {
  return readLearnerDiscoveryCookieValue(
    learnerId,
    readCookie(discoveryHistoryCookieName(base, learnerId)),
    readCookie(base),
  );
}

export function lockTodaysDiscovery(date: string, id: string) {
  if (typeof document === "undefined") {
    return;
  }
  const learnerId = getActiveLearnerId();
  writeCookie(
    discoveryHistoryCookieName(DISCOVERY_TODAY_COOKIE, learnerId),
    `${date}|${id}`,
  );
  writeCookie(
    discoveryHistoryCookieName(DISCOVERY_RECENT_COOKIE, learnerId),
    nextRecentCookieValue(
      readScopedOrLegacy(DISCOVERY_RECENT_COOKIE, learnerId),
      id,
    ),
  );
}

export function recordDiscoveryCompleted(id: string) {
  if (typeof document === "undefined") {
    return;
  }
  const learnerId = getActiveLearnerId();
  writeCookie(
    discoveryHistoryCookieName(DISCOVERY_COMPLETED_COOKIE, learnerId),
    nextCompletedCookieValue(
      readScopedOrLegacy(DISCOVERY_COMPLETED_COOKIE, learnerId),
      id,
    ),
  );
  writeCookie(
    discoveryHistoryCookieName(DISCOVERY_RECENT_COOKIE, learnerId),
    nextRecentCookieValue(
      readScopedOrLegacy(DISCOVERY_RECENT_COOKIE, learnerId),
      id,
    ),
  );
}

export function readCompletedDiscoveryIds(): string[] {
  const learnerId = getActiveLearnerId();
  return parseIdList(
    readScopedOrLegacy(DISCOVERY_COMPLETED_COOKIE, learnerId),
  );
}

export function DiscoveryDayLock({
  date,
  discoveryId,
}: {
  date: string;
  discoveryId: string;
}) {
  useEffect(() => {
    lockTodaysDiscovery(date, discoveryId);
  }, [date, discoveryId]);

  return null;
}
