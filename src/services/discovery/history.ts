import { cookies } from "next/headers";
import { calendarDateISO } from "@/domain/curiosity";
import type { DiscoveryLearnerContext } from "@/domain/curiosity";
import type { Grade } from "@/domain/types";
import {
  DISCOVERY_COMPLETED_COOKIE,
  DISCOVERY_RECENT_COOKIE,
  DISCOVERY_TODAY_COOKIE,
  discoveryHistoryCookieName,
  parseIdList,
  parseTodayLock,
  readLearnerDiscoveryCookieValue,
} from "./history-codec";

export async function readDiscoveryLearnerContext(
  learnerId: string,
  grade: Grade,
  date: string = calendarDateISO(),
): Promise<DiscoveryLearnerContext> {
  let completedDiscoveryIds: string[] = [];
  let recentDiscoveryIds: string[] = [];
  let lockedDiscoveryId: string | undefined;

  try {
    const jar = await cookies();
    const completedRaw = readLearnerDiscoveryCookieValue(
      learnerId,
      jar.get(discoveryHistoryCookieName(DISCOVERY_COMPLETED_COOKIE, learnerId))
        ?.value,
      jar.get(DISCOVERY_COMPLETED_COOKIE)?.value,
    );
    const recentRaw = readLearnerDiscoveryCookieValue(
      learnerId,
      jar.get(discoveryHistoryCookieName(DISCOVERY_RECENT_COOKIE, learnerId))
        ?.value,
      jar.get(DISCOVERY_RECENT_COOKIE)?.value,
    );
    const todayRaw = readLearnerDiscoveryCookieValue(
      learnerId,
      jar.get(discoveryHistoryCookieName(DISCOVERY_TODAY_COOKIE, learnerId))
        ?.value,
      jar.get(DISCOVERY_TODAY_COOKIE)?.value,
    );

    completedDiscoveryIds = parseIdList(completedRaw);
    recentDiscoveryIds = parseIdList(recentRaw);
    lockedDiscoveryId = parseTodayLock(todayRaw, date);
  } catch {
    // Cookies are unavailable in some non-request test contexts.
  }

  return {
    learnerId,
    grade,
    completedDiscoveryIds,
    recentDiscoveryIds,
    recentCategoryIds: [],
    lockedDiscoveryId,
  };
}
