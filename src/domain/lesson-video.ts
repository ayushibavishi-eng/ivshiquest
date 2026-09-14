/**
 * Optional Video Explanation asset for the Understand phase.
 * Grade-agnostic — attach to any concept/lesson that has a video ready.
 */
export type LessonVideoSourceKind = "ivshi" | "hosted" | "external";

export type LessonVideoProvider = "youtube" | "vimeo";

export type LessonVideoSource = {
  /** First-party IvshiQuest, hosted file, or approved external education video. */
  kind: LessonVideoSourceKind;
  /** HTML5 media URL for ivshi/hosted (and optional external file hosts). */
  mediaUrl?: string;
  /** Approved embed provider when using an external education video. */
  provider?: LessonVideoProvider;
  /** Opaque provider id — never a raw watch-page URL as the primary UX. */
  providerVideoId?: string;
};

export type LessonVideoAccessibility = {
  /** Spoken/on-screen transcript or text alternative for the explanation. */
  transcript?: string;
  /** WebVTT captions track for native video. */
  captionsUrl?: string;
  /** Extra access note (e.g. visual-only moments, audio description). */
  notes?: string;
};

export type LessonVideoReflection = {
  /** Short check-for-understanding after the video. */
  prompt: string;
  /** Ideas Ivshi listens for (same open-response rules as Reflect/Teach). */
  keyIdeas: string[];
  /** Optional Ivshi companion line above the check. */
  companionLabel?: string;
};

export type LessonVideoExplanation = {
  id: string;
  title: string;
  description: string;
  /** Wall-clock length of the explanation, in seconds. */
  durationSeconds: number;
  /** Poster / thumbnail shown before playback. */
  posterUrl?: string;
  source: LessonVideoSource;
  accessibility: LessonVideoAccessibility;
  reflection: LessonVideoReflection;
};

export type LessonVideoPlayback =
  | { mode: "native"; src: string }
  | { mode: "embed"; src: string; provider: LessonVideoProvider }
  | { mode: "pending" };

export function formatLessonVideoDuration(durationSeconds: number): string {
  const total = Math.max(0, Math.round(durationSeconds));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  if (minutes <= 0) {
    return `${seconds}s`;
  }
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function resolveLessonVideoPlayback(
  video: LessonVideoExplanation,
): LessonVideoPlayback {
  const mediaUrl = video.source.mediaUrl?.trim();
  if (mediaUrl) {
    return { mode: "native", src: mediaUrl };
  }

  const provider = video.source.provider;
  const id = video.source.providerVideoId?.trim();
  if (provider && id) {
    if (provider === "youtube") {
      return {
        mode: "embed",
        provider,
        src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?rel=0&modestbranding=1`,
      };
    }
    return {
      mode: "embed",
      provider,
      src: `https://player.vimeo.com/video/${encodeURIComponent(id)}`,
    };
  }

  return { mode: "pending" };
}

export function lessonHasVideoExplanation(understand: {
  video?: LessonVideoExplanation;
}): boolean {
  return Boolean(understand.video);
}
