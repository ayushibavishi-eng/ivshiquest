export const ACTIVE_CURRICULUM_COOKIE = "ivshi-active-topic";

export function writeActiveCurriculumTopic(id: string) {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${ACTIVE_CURRICULUM_COOKIE}=${encodeURIComponent(id)}; path=/; max-age=2592000; samesite=lax`;
}
