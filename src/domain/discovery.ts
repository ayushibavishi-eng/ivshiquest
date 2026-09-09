import type { Grade, Subject } from "./types";

export const DISCOVERY_PHASES = [
  "wonder",
  "explore",
  "understand",
  "connect",
] as const;

export type DiscoveryPhase = (typeof DISCOVERY_PHASES)[number];

export const DISCOVERY_PHASE_LABELS: Record<DiscoveryPhase, string> = {
  wonder: "Wonder",
  explore: "Explore",
  understand: "Understand",
  connect: "Connect",
};

export type ConceptGrowth = "explored" | "learning" | "learned" | "mastered";

export type DiscoveryChoice = {
  id: string;
  letter: string;
  text: string;
};

export type DiscoveryExplanation = {
  heading: string;
  main: string;
  simpleHeading: string;
  simple: string;
};

export type DiscoveryContent = {
  id: string;
  subject: Subject;
  subjectLabel: string;
  topic: string;
  conceptId: string;
  gradeRange: Grade[];
  durationMinutes: number;
  question: string;
  wonderPrompt: string;
  predictionChoices: DiscoveryChoice[];
  predictResponse: string;
  predictEncouragement: string;
  exploration: {
    prompt: string;
    captionAfterReveal: string;
  };
  explanations: Partial<Record<Grade, DiscoveryExplanation>> & {
    default: DiscoveryExplanation;
  };
  retrieval: {
    question: string;
    choices: DiscoveryChoice[];
    correctChoiceId: string;
    correctFeedback: string;
    incorrectFeedback: string;
    hint: string;
  };
  connection: {
    heading: string;
    hook: string;
    explanation: string;
  };
  discoverMore: {
    prompt: string;
    question: string;
  };
  completion: {
    title: string;
    summary: string;
    treeMessage: string;
  };
};

export function getExplanationForGrade(
  discovery: DiscoveryContent,
  grade: Grade,
): DiscoveryExplanation {
  return discovery.explanations[grade] ?? discovery.explanations.default;
}
