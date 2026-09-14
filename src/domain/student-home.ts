import type { Student, Subject } from "./types";

export type TodayDiscovery = {
  id: string;
  title: string;
  durationLabel: string;
  subject: Subject;
  date: string;
};

export type ActiveQuest = {
  id: string;
  title: string;
  completedChallenges: number;
  totalChallenges: number;
};

export type ContinueLearning = {
  id: string;
  conceptId: string;
  subject: Subject;
  subjectLabel: string;
  topic: string;
  lastExploredLabel: string;
};

export type KnowledgeTreeSummary = {
  growing: number;
  learned: number;
  mastered: number;
};

export type TeachItPrompt = {
  topic: string;
};

export type StudentHome = {
  student: Student;
  todayDiscovery: TodayDiscovery;
  activeQuest: ActiveQuest | null;
  continueLearning: ContinueLearning | null;
  knowledgeTree: KnowledgeTreeSummary;
  teachIt: TeachItPrompt | null;
  askIvshiPrompts: string[];
};
