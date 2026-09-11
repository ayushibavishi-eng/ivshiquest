import type { Grade } from "./types";

export type CompanionFeedbackKind = "found" | "close" | "look-again";
export type CompanionGradeBand = "early" | "middle" | "later";

const FOUND_BY_BAND: Record<CompanionGradeBand, string[]> = {
  early: [
    "You found it!",
    "Nice thinking!",
    "You figured that out.",
    "You discovered it!",
    "Beautiful thinking!",
  ],
  middle: [
    "You spotted the connection.",
    "That was clever reasoning.",
    "Your reasoning worked!",
    "Nice connection!",
    "You figured that out.",
  ],
  later: [
    "Excellent reasoning.",
    "You connected the clues.",
    "That's a strong explanation.",
    "That was a clever observation.",
    "Your reasoning worked.",
  ],
};

const LOOK_AGAIN_BY_BAND: Record<CompanionGradeBand, string[]> = {
  early: [
    "Hmm… let's look again.",
    "Let's try another way.",
    "Look at this clue.",
    "You're close.",
  ],
  middle: [
    "Interesting idea. Something doesn't fit yet.",
    "Not quite there yet — keep exploring.",
    "Let's look again.",
    "Look at this clue.",
  ],
  later: [
    "Interesting idea. Something doesn't fit yet.",
    "Let's try another way.",
    "Look at this clue.",
    "Not quite there yet — keep exploring.",
  ],
};

const CLOSE_BY_BAND: Record<CompanionGradeBand, string[]> = {
  early: [
    "You're onto something.",
    "That's part of the idea.",
    "Good start — one piece is still missing.",
  ],
  middle: [
    "You're onto something.",
    "That's part of the idea.",
    "Good start — one piece is still missing.",
  ],
  later: [
    "You're onto something.",
    "That's part of the idea.",
    "Good start — one piece is still missing.",
  ],
};

const LOOK_TOGETHER_BY_BAND: Record<CompanionGradeBand, string> = {
  early: "Let's look at this idea together.",
  middle: "Let's look at this idea together.",
  later: "Let's look at this idea together.",
};

export function companionGradeBand(grade: number): CompanionGradeBand {
  if (grade <= 5) {
    return "early";
  }
  if (grade === 6) {
    return "middle";
  }
  return "later";
}

export function companionFeedbackPhrase(
  kind: CompanionFeedbackKind,
  grade: Grade | number,
  seed: string,
) {
  const band = companionGradeBand(grade);
  const pool =
    kind === "found"
      ? FOUND_BY_BAND[band]
      : kind === "close"
        ? CLOSE_BY_BAND[band]
        : LOOK_AGAIN_BY_BAND[band];
  return pool[stableIndex(seed, pool.length)] ?? pool[0];
}

export function lookTogetherPhrase(grade: Grade | number) {
  return LOOK_TOGETHER_BY_BAND[companionGradeBand(grade)];
}

function stableIndex(seed: string, length: number) {
  if (length <= 0) {
    return 0;
  }
  let hash = 0;
  for (const char of seed) {
    hash = (hash * 33 + char.charCodeAt(0)) % 2147483647;
  }
  return Math.abs(hash) % length;
}
