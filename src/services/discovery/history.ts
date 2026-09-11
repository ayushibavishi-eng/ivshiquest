import { cookies } from "next/headers";
import { calendarDateISO } from "@/domain/curiosity";
import type { DiscoveryLearnerContext } from "@/domain/curiosity";
import type { Grade } from "@/domain/types";
import {
  DISCOVERY_COMPLETED_COOKIE,
  DISCOVERY_RECENT_COOKIE,
  DISCOVERY_TODAY_COOKIE,
  parseIdList,
  parseTodayLock,
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
    completedDiscoveryIds = parseIdList(
      jar.get(DISCOVERY_COMPLETED_COOKIE)?.value,
    );
    recentDiscoveryIds = parseIdList(jar.get(DISCOVERY_RECENT_COOKIE)?.value);
    lockedDiscoveryId = parseTodayLock(
      jar.get(DISCOVERY_TODAY_COOKIE)?.value,
      date,
    );
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
