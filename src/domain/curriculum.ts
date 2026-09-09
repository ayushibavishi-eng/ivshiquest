import type { Subject } from "./types";

export const CURRICULUM_GRADES = [4, 5, 6] as const;
export type CurriculumGrade = (typeof CURRICULUM_GRADES)[number];

export const CURRICULUM_NODE_KINDS = ["world", "topic", "concept", "skill"] as const;
export type CurriculumNodeKind = (typeof CURRICULUM_NODE_KINDS)[number];

export const LEARNING_EXPERIENCE_PHASES = [
  "wonder",
  "explore",
  "understand",
  "try",
  "practice",
  "reflect",
  "mastery",
] as const;

export type LearningExperiencePhase =
  (typeof LEARNING_EXPERIENCE_PHASES)[number];

export const LEARNING_EXPERIENCE_PHASE_LABELS: Record<
  LearningExperiencePhase,
  string
> = {
  wonder: "Wonder",
  explore: "Explore",
  understand: "Understand",
  try: "Try",
  practice: "Practice",
  reflect: "Reflect",
  mastery: "Mastery",
};

export type CurriculumProgressState =
  | "unvisited"
  | "started"
  | "practiced"
  | "mastered";

export type CurriculumSkill = {
  id: string;
  title: string;
  subjectId: Subject;
  parentId: string;
  grades: CurriculumGrade[];
  kind: "skill";
  prerequisites?: string[];
};

export type CurriculumChoice = {
  id: string;
  letter: string;
  text: string;
};

export type CurriculumQuestion = {
  id: string;
  prompt: string;
  choices: CurriculumChoice[];
  correctChoiceId: string;
  explanation: string;
};

export type CurriculumExperience = {
  wonder: { prompt: string };
  explore: { text: string };
  understand: { text: string };
  try: { prompt: string; note: string };
  practice: CurriculumQuestion[];
  reflect: { prompt: string };
  mastery: CurriculumQuestion;
  examples?: string[];
  connection?: string;
  teach?: { prompt: string };
  goDeeper?: string;
};

export type CurriculumConcept = {
  id: string;
  title: string;
  subjectId: Subject;
  parentId: string;
  grades: CurriculumGrade[];
  kind: "concept";
  category?: string;
  hook: string;
  goal: string;
  explainer: string;
  skills: CurriculumSkill[];
  prerequisites?: string[];
  experience?: CurriculumExperience;
};

export type CurriculumTopic = {
  id: string;
  title: string;
  subjectId: Subject;
  parentId: string;
  grades: CurriculumGrade[];
  kind: "topic";
  category?: string;
  hook: string;
  goal: string;
  explainer: string;
  prerequisites?: string[];
  concepts: CurriculumConcept[];
};

export type CurriculumWorld = {
  id: string;
  title: string;
  subjectId: Subject;
  parentId: null;
  grades: CurriculumGrade[];
  kind: "world";
  category?: string;
  hook: string;
  path: string[];
  topics: CurriculumTopic[];
  concepts: CurriculumConcept[];
};

export type CurriculumNode =
  | CurriculumWorld
  | CurriculumTopic
  | CurriculumConcept
  | CurriculumSkill;
