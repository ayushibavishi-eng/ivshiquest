import type { Subject } from "./types";
import type { CurriculumId } from "./curriculum-identity";

export type { CurriculumCountry, CurriculumId } from "./curriculum-identity";
export {
  CURRICULUM_COUNTRIES,
  CURRICULUM_IDS,
  CURRICULUM_META,
  DEFAULT_CURRICULUM_ID,
  curriculumCountry,
  curriculumLabel,
  isCurriculumId,
  parseCurriculumId,
  resolveCurriculumId,
} from "./curriculum-identity";

export const CURRICULUM_GRADES = [4, 5, 6, 7, 8] as const;
export type CurriculumGrade = (typeof CURRICULUM_GRADES)[number];

export const NCERT_SOURCE_STATUSES = ["official", "needs-verification"] as const;
export type NcertSourceStatus = (typeof NCERT_SOURCE_STATUSES)[number];

export type CurriculumNcertRef = {
  book: string;
  class: CurriculumGrade;
  chapter?: string;
  status: NcertSourceStatus;
  note?: string;
};

export function isCurriculumGrade(value: unknown): value is CurriculumGrade {
  return (
    typeof value === "number" &&
    (CURRICULUM_GRADES as readonly number[]).includes(value)
  );
}

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
  objectives: string[];
  prerequisites?: string[];
  experience?: CurriculumExperience;
  ncert?: CurriculumNcertRef;
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
  ncert?: CurriculumNcertRef;
};

export type CurriculumWorld = {
  id: string;
  title: string;
  subjectId: Subject;
  parentId: null;
  grades: CurriculumGrade[];
  kind: "world";
  /** Which national curriculum system this world belongs to. */
  curriculumId: CurriculumId;
  category?: string;
  hook: string;
  path: string[];
  topics: CurriculumTopic[];
  concepts: CurriculumConcept[];
  ncert?: CurriculumNcertRef;
};

export type CurriculumNode =
  | CurriculumWorld
  | CurriculumTopic
  | CurriculumConcept
  | CurriculumSkill;
