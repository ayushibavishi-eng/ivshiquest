"use client";

import { useEffect } from "react";
import {
  DISCOVERY_COMPLETED_COOKIE,
  DISCOVERY_RECENT_COOKIE,
  DISCOVERY_TODAY_COOKIE,
  nextCompletedCookieValue,
  nextRecentCookieValue,
  parseIdList,
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

export function lockTodaysDiscovery(date: string, id: string) {
  if (typeof document === "undefined") {
    return;
  }
  writeCookie(DISCOVERY_TODAY_COOKIE, `${date}|${id}`);
  writeCookie(
    DISCOVERY_RECENT_COOKIE,
    nextRecentCookieValue(readCookie(DISCOVERY_RECENT_COOKIE), id),
  );
}

export function recordDiscoveryCompleted(id: string) {
  if (typeof document === "undefined") {
    return;
  }
  writeCookie(
    DISCOVERY_COMPLETED_COOKIE,
    nextCompletedCookieValue(readCookie(DISCOVERY_COMPLETED_COOKIE), id),
  );
  writeCookie(
    DISCOVERY_RECENT_COOKIE,
    nextRecentCookieValue(readCookie(DISCOVERY_RECENT_COOKIE), id),
  );
}

export function readCompletedDiscoveryIds(): string[] {
  return parseIdList(readCookie(DISCOVERY_COMPLETED_COOKIE));
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
