import type { LessonVideoExplanation } from "@/domain/lesson-video";

/**
 * Authoring helper for optional Understand-phase Video Explanation assets.
 * Lessons omit this field until an approved video is ready.
 */
export function lessonVideo(
  video: LessonVideoExplanation,
): LessonVideoExplanation {
  return video;
}
