import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { GradeLessonContent } from "@/domain/complete-lesson";
import {
  formatLessonVideoDuration,
  lessonHasVideoExplanation,
  resolveLessonVideoPlayback,
  type LessonVideoExplanation,
} from "@/domain/lesson-video";
import { lessonVideo } from "@/content/lessons/video";

const sampleVideo: LessonVideoExplanation = lessonVideo({
  id: "demo-community-helpers",
  title: "Helpers who keep a street going",
  description:
    "A short walk through everyday community helpers and how they share work.",
  durationSeconds: 125,
  posterUrl: "/images/ivshi/Ivshi_butterfly_exact_crop.png",
  source: {
    kind: "ivshi",
    mediaUrl: "/videos/demo-community-helpers.mp4",
  },
  accessibility: {
    transcript:
      "Ivshi names helpers on a street and shows how sharing work keeps a community going.",
    captionsUrl: "/videos/demo-community-helpers.vtt",
    notes: "Captions available. Key ideas are also in the Understand text.",
  },
  reflection: {
    prompt: "Name one helper from the video and one way people share work.",
    keyIdeas: ["helper|teacher|doctor|nurse", "share|turn|care|work"],
    companionLabel: "What did the video help you notice?",
  },
});

describe("Lesson Video Explanation domain", () => {
  it("formats duration for children-friendly labels", () => {
    assert.equal(formatLessonVideoDuration(45), "45s");
    assert.equal(formatLessonVideoDuration(125), "2:05");
    assert.equal(formatLessonVideoDuration(60), "1:00");
  });

  it("resolves first-party media as native playback", () => {
    assert.deepEqual(resolveLessonVideoPlayback(sampleVideo), {
      mode: "native",
      src: "/videos/demo-community-helpers.mp4",
    });
  });

  it("resolves approved YouTube ids as in-app nocookie embeds", () => {
    const external = lessonVideo({
      ...sampleVideo,
      id: "demo-external",
      source: {
        kind: "external",
        provider: "youtube",
        providerVideoId: "abc_123-XY",
      },
    });
    assert.deepEqual(resolveLessonVideoPlayback(external), {
      mode: "embed",
      provider: "youtube",
      src: "https://www.youtube-nocookie.com/embed/abc_123-XY?rel=0&modestbranding=1",
    });
  });

  it("resolves approved Vimeo ids as in-app embeds", () => {
    const external = lessonVideo({
      ...sampleVideo,
      source: {
        kind: "external",
        provider: "vimeo",
        providerVideoId: "987654321",
      },
    });
    assert.deepEqual(resolveLessonVideoPlayback(external), {
      mode: "embed",
      provider: "vimeo",
      src: "https://player.vimeo.com/video/987654321",
    });
  });

  it("stays pending when no media or provider is ready yet", () => {
    const pending = lessonVideo({
      ...sampleVideo,
      source: { kind: "ivshi" },
    });
    assert.deepEqual(resolveLessonVideoPlayback(pending), { mode: "pending" });
  });

  it("keeps understand.video optional so existing lessons need no change", () => {
    const withoutVideo: GradeLessonContent["understand"] = {
      paragraphs: ["An idea grows when we look carefully."],
    };
    const withVideo: GradeLessonContent["understand"] = {
      paragraphs: ["An idea grows when we look carefully."],
      video: sampleVideo,
    };
    assert.equal(lessonHasVideoExplanation(withoutVideo), false);
    assert.equal(lessonHasVideoExplanation(withVideo), true);
    assert.equal(withVideo.video?.title, sampleVideo.title);
    assert.ok(withVideo.video?.reflection.keyIdeas.length);
  });
});
