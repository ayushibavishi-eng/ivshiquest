import type { CurriculumProgressState } from "@/domain/curriculum";
import type { KnowledgeTreeNodeState } from "@/domain/knowledge-tree";

/** Child-facing journey status (maps from existing tree/progress states). */
export const JOURNEY_STATUSES = [
  "not_discovered",
  "available",
  "exploring",
  "growing",
  "mastered",
  "coming_soon",
] as const;

export type JourneyStatus = (typeof JOURNEY_STATUSES)[number];

export const JOURNEY_STATUS_LABELS: Record<JourneyStatus, string> = {
  not_discovered: "Not discovered",
  available: "Available",
  exploring: "Exploring",
  growing: "Growing",
  mastered: "Mastered",
  coming_soon: "Coming soon",
};

export const JOURNEY_BANDS = [
  "past",
  "current",
  "next",
  "future",
] as const;

export type JourneyBand = (typeof JOURNEY_BANDS)[number];

export const JOURNEY_BAND_LABELS: Record<JourneyBand, string> = {
  past: "Past discoveries",
  current: "Current learning",
  next: "Next discoveries",
  future: "Future possibilities",
};

export function toJourneyStatus(
  state: KnowledgeTreeNodeState,
  progress: CurriculumProgressState,
): JourneyStatus {
  if (progress === "mastered" || state === "mastered") {
    return "mastered";
  }
  if (progress === "practiced") {
    return "growing";
  }
  if (progress === "started" || state === "in_progress") {
    return "exploring";
  }
  if (state === "available") {
    return "available";
  }
  if (state === "content_not_ready") {
    return "coming_soon";
  }
  return "not_discovered";
}

export function journeyBandForStatus(status: JourneyStatus): JourneyBand {
  switch (status) {
    case "mastered":
      return "past";
    case "exploring":
    case "growing":
      return "current";
    case "available":
      return "next";
    case "not_discovered":
    case "coming_soon":
      return "future";
  }
}
