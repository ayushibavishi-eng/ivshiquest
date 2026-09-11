import type { CuriosityCategory, DiscoveryDifficulty } from "./curiosity";
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

export type DiscoveryExplorationVisual = "wires" | "reveal";

export type DiscoveryContent = {
  id: string;
  subject: Subject;
  subjectLabel: string;
  topic: string;
  category: CuriosityCategory;
  tags: string[];
  difficulty: DiscoveryDifficulty;
  conceptId?: string;
  relatedConceptIds: string[];
  curriculumLinked: boolean;
  trackIndex: number;
  gradeRange: Grade[];
  durationMinutes: number;
  question: string;
  questionByGrade?: Partial<Record<Grade, string>>;
  wonderPrompt: string;
  predictionChoices: DiscoveryChoice[];
  predictResponse: string;
  predictEncouragement: string;
  exploration: {
    prompt: string;
    lookPrompt: string;
    captionAfterReveal: string;
    visual: DiscoveryExplorationVisual;
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

export function resolveDiscoveryForGrade(
  discovery: DiscoveryContent,
  grade: Grade,
): DiscoveryContent {
  const question = discovery.questionByGrade?.[grade] ?? discovery.question;
  if (question === discovery.question) {
    return discovery;
  }
  return { ...discovery, question };
}
