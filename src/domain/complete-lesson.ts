import type { CurriculumGrade } from "./curriculum";
import type { Subject } from "./types";

export const COMPLETE_LESSON_PHASES = [
  "wonder",
  "explore",
  "understand",
  "examples",
  "try",
  "practice",
  "reasoning",
  "reflect",
  "mastery",
  "teach",
] as const;

export type CompleteLessonPhase = (typeof COMPLETE_LESSON_PHASES)[number];

export const COMPLETE_LESSON_PHASE_LABELS: Record<CompleteLessonPhase, string> =
  {
    wonder: "Wonder",
    explore: "Explore",
    understand: "Understand",
    examples: "Examples",
    try: "Try it",
    practice: "Practice",
    reasoning: "Reasoning",
    reflect: "Reflect",
    mastery: "Mastery",
    teach: "Teach It",
  };

export type LessonChoice = {
  id: string;
  letter: string;
  text: string;
};

export type LessonQuestion = {
  id: string;
  prompt: string;
  choices: LessonChoice[];
  correctChoiceId: string;
  explanation: string;
  hint: string;
  misconception: string;
  feedbackByChoice: Record<string, string>;
};

export type LessonExploreActivity = {
  prompt: string;
  choices: {
    id: string;
    label: string;
    note: string;
  }[];
};

export type LessonExample = {
  caption: string;
  body: string;
};

export type GradeLessonContent = {
  objective: string;
  wonder: { prompt: string };
  explore: {
    text: string;
    activity: LessonExploreActivity;
  };
  understand: { paragraphs: string[] };
  examples: LessonExample[];
  connection: string;
  try: { prompt: string; reveal: string };
  practice: LessonQuestion[];
  reasoning: LessonQuestion[];
  reflect: { prompt: string };
  mastery: LessonQuestion;
  masteryCriteria: string;
  teach: { prompt: string };
};

export type CompleteLessonDefinition = {
  conceptId: string;
  subject: Subject;
  title: string;
  domainTitle: string;
  grades: CurriculumGrade[];
  prerequisites: string[];
  nextConceptIds: string[];
  byGrade: Partial<Record<CurriculumGrade, GradeLessonContent>>;
};

export type ResolvedCompleteLesson = {
  conceptId: string;
  subject: Subject;
  title: string;
  domainTitle: string;
  grade: CurriculumGrade;
  objective: string;
  prerequisites: string[];
  nextConceptIds: string[];
  content: GradeLessonContent;
};
