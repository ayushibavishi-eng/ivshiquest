/**
 * Core learning loop. Keep this as data, not UI labels in screens.
 * Feature screens should import these values instead of hard-coding stages.
 */
export const LEARNING_STAGES = [
  "wonder",
  "explore",
  "understand",
  "practice",
  "master",
  "teach",
  "discover",
] as const;

export type LearningStage = (typeof LEARNING_STAGES)[number];

export const LEARNING_STAGE_LABELS: Record<LearningStage, string> = {
  wonder: "Wonder",
  explore: "Explore",
  understand: "Understand",
  practice: "Practice",
  master: "Master",
  teach: "Teach",
  discover: "Discover Again",
};
