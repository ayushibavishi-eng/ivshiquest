export const DISCOVERY_TODAY_COOKIE = "ivshi-discovery-today";
export const DISCOVERY_COMPLETED_COOKIE = "ivshi-discovery-completed";
export const DISCOVERY_RECENT_COOKIE = "ivshi-discovery-recent";

export const MAX_COMPLETED_DISCOVERY_IDS = 150;
export const MAX_RECENT_DISCOVERY_IDS = 40;

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
