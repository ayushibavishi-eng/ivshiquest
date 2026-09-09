import type { Student, Subject } from "./types";

/**
 * Signals a future recommender will use. V1 stores the codes only —
 * there is no scoring, ranking, or simulated AI.
 *
 * Later this can grow with grade, board, concept, mastery, confidence,
 * prerequisites, learningHistory, learningPreferences, and interestTags.
 */
export const RECOMMENDATION_SIGNALS = [
  "learning-dna",
  "knowledge-tree",
  "previous-performance",
  "curriculum",
  "interests",
  "prerequisites",
  "recent-activity",
] as const;

export type RecommendationSignal = (typeof RECOMMENDATION_SIGNALS)[number];

export type ConceptStatus = "not-started" | "ready" | "growing";

export type LearnRecommendation = {
  topicId: string;
  title: string;
  headline: string;
  supportingText: string;
  ivshiNote: string;
  /** Why this would be chosen later — not displayed as a score. */
  signals: RecommendationSignal[];
};

export type GrowingConcept = {
  topicId: string;
  title: string;
  connection: string;
  status: ConceptStatus;
  statusLabel: string;
};

export type StrengthenArea = {
  areaId: string;
  title: string;
  message: string;
  attentionLabel: string;
};

export type CuriosityExploration = {
  topicId: string;
  question: string;
  durationLabel: string;
};

export type SubjectArea = {
  areaId: string;
  title: string;
};

export type LearningConnection = {
  id: string;
  nodes: string[];
};

export type SubjectLearnPath = {
  subject: Subject;
  recommended: LearnRecommendation;
  keepGrowing: GrowingConcept[];
  strengthen: StrengthenArea;
  exploreNew: CuriosityExploration;
  subjectAreas: SubjectArea[];
  connections: LearningConnection[];
};

export type StudentLearn = {
  student: Student;
  defaultSubject: Subject;
  paths: Record<Subject, SubjectLearnPath>;
};
