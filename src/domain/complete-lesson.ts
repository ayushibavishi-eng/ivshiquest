import { isCurriculumGrade, type CurriculumGrade } from "./curriculum";
import type { LessonVideoExplanation } from "./lesson-video";
import type { Subject } from "./types";

export const COMPLETE_LESSON_PHASES = [
  "wonder",
  "explore",
  "understand",
  "practice",
  "reasoning",
  "retrieve",
  "reflect",
  "mastery",
  "grow",
  "teach",
] as const;

export type CompleteLessonPhase = (typeof COMPLETE_LESSON_PHASES)[number];

export const COMPLETE_LESSON_PHASE_LABELS: Record<CompleteLessonPhase, string> =
  {
    wonder: "Wonder",
    explore: "Explore",
    understand: "Understand",
    practice: "Practice",
    reasoning: "Reason",
    retrieve: "Retrieve",
    reflect: "Reflect",
    mastery: "Mastery",
    grow: "Grow",
    teach: "Teach It",
  };

export const LESSON_LOOP_STAGES = [
  "wonder",
  "explore",
  "understand",
  "practice",
  "master",
  "grow",
  "teach",
] as const;

export type LessonLoopStage = (typeof LESSON_LOOP_STAGES)[number];

export const LESSON_LOOP_LABELS: Record<LessonLoopStage, string> = {
  wonder: "Wonder",
  explore: "Explore",
  understand: "Understand",
  practice: "Practice",
  master: "Master",
  grow: "Grow",
  teach: "Teach It",
};

export const LESSON_LOOP_HINTS: Record<LessonLoopStage, string> = {
  wonder: "A question to sit with.",
  explore: "Try, observe, and predict.",
  understand: "Ivshi explains — sometimes with a short video.",
  practice: "Reasoning challenges.",
  master: "Can you explain it?",
  grow: "This idea changes on your Learning Journey.",
  teach: "Explain it to someone else.",
};

export function lessonLoopStage(phase: CompleteLessonPhase): LessonLoopStage {
  if (phase === "reasoning") {
    return "practice";
  }
  if (phase === "retrieve" || phase === "reflect" || phase === "mastery") {
    return "master";
  }
  if (phase === "grow" || phase === "teach") {
    return phase;
  }
  return phase;
}

export type LessonChoice = {
  id: string;
  letter: string;
  text: string;
};

export type LessonQuestionFormat = "choice" | "write";

export type LessonQuestion = {
  id: string;
  prompt: string;
  format: LessonQuestionFormat;
  choices: LessonChoice[];
  correctChoiceId: string;
  acceptedAnswers: string[];
  keyIdeas: string[];
  placeholder?: string;
  explanation: string;
  hint: string;
  misconception: string;
  feedbackByChoice: Record<string, string>;
};

export type LessonExploreModel = {
  caption: string;
  diagram: string;
};

export type LessonExploreActivity = {
  prompt: string;
  models?: LessonExploreModel[];
  choices: {
    id: string;
    label: string;
    note: string;
  }[];
  investigation?: LessonExploreInvestigation;
};

export type LessonExploreInvestigation = {
  kind: "plant-kitchen";
  predictPrompt: string;
  predictChoices: Array<{ id: string; label: string }>;
  investigateLabel: string;
};

export type LessonExample = {
  caption: string;
  body: string;
};

export type LessonMisconception = {
  idea: string;
  correction: string;
};

export type LessonPrompt = {
  prompt: string;
  keyIdeas: string[];
};

/**
 * Canonical complete-lesson body. Every proof lesson uses this shape.
 * Mapping: explanation → understand.paragraphs; activities → explore + try;
 * retrieval → retrieve; feedback → each question's hint/misconception/explanation.
 */
export type GradeLessonContent = {
  objective: string;
  wonder: { prompt: string };
  explore: {
    text: string;
    activity: LessonExploreActivity;
  };
  understand: {
    paragraphs: string[];
    /**
     * Optional Video Explanation inside Understand.
     * Omit when no approved video exists yet — Wonder → Explore → Practice stay unchanged.
     */
    video?: LessonVideoExplanation;
  };
  examples: LessonExample[];
  connection: string;
  try: { prompt: string; reveal: string };
  practice: LessonQuestion[];
  reasoning: LessonQuestion[];
  retrieve: LessonQuestion[];
  misconceptions: LessonMisconception[];
  reflect: LessonPrompt;
  mastery: LessonQuestion;
  masteryCriteria: string;
  teach: LessonPrompt;
};

export type CompleteLessonDefinition = {
  conceptId: string;
  subject: Subject;
  title: string;
  domainTitle: string;
  grades: CurriculumGrade[];
  prerequisites: string[];
  nextConceptIds: string[];
  coveredSkillIds?: string[];
  byGrade: Partial<Record<CurriculumGrade, GradeLessonContent>>;
};

export type LessonTutorContext = {
  grade: CurriculumGrade;
  subject: Subject;
  lessonId: string;
  conceptId: string;
  lessonTitle: string;
  learningObjective: string;
  explanation: string;
  examples: LessonExample[];
  misconceptions: LessonMisconception[];
  currentLearningStage: CompleteLessonPhase;
};

export type ResolvedCompleteLesson = {
  lessonId: string;
  conceptId: string;
  subject: Subject;
  title: string;
  domainTitle: string;
  grade: CurriculumGrade;
  objective: string;
  explanation: string;
  examples: LessonExample[];
  activities: {
    explore: LessonExploreActivity;
    try: { prompt: string; reveal: string };
  };
  practice: LessonQuestion[];
  reasoning: LessonQuestion[];
  retrieval: LessonQuestion[];
  misconceptions: LessonMisconception[];
  reflection: LessonPrompt;
  masteryCriteria: string;
  teach: LessonPrompt;
  prerequisites: string[];
  nextConceptIds: string[];
  coveredSkillIds: string[];
  content: GradeLessonContent;
};

export const OPEN_RESPONSE_STATES = [
  "not_answered",
  "attempted",
  "needs_clarification",
  "likely_understanding",
] as const;

export type OpenResponseState = (typeof OPEN_RESPONSE_STATES)[number];

export type OpenResponseEvaluation = {
  state: OpenResponseState;
  matchedIdeas: string[];
  missingIdeas: string[];
};

export function isWriteQuestion(question: LessonQuestion) {
  return question.format === "write";
}

export const SAFE_WRITE_PLACEHOLDER = "Type your answer...";

export function writeQuestionPlaceholder(question: LessonQuestion) {
  const requested = question.placeholder?.trim() ?? "";
  if (!requested) {
    return SAFE_WRITE_PLACEHOLDER;
  }

  const requestedNorm = normalizeLessonAnswer(requested);
  const leaksAnswer = question.acceptedAnswers.some((accepted) => {
    const needle = normalizeLessonAnswer(accepted);
    return needle.length > 0 && requestedNorm.includes(needle);
  });

  if (leaksAnswer) {
    return SAFE_WRITE_PLACEHOLDER;
  }

  return requested;
}

export function normalizeLessonAnswer(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/½/g, "1/2")
    .replace(/¼/g, "1/4")
    .replace(/¾/g, "3/4")
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, "")
    .replace(/['’]/g, "");
}

export function writeAnswerMatches(
  value: string,
  acceptedAnswers: string[],
) {
  if (acceptedAnswers.length === 0) {
    return false;
  }
  const actual = normalizeLessonAnswer(value);
  return acceptedAnswers.some(
    (accepted) => normalizeLessonAnswer(accepted) === actual,
  );
}

export function writeAnswerSucceeds(value: string, question: LessonQuestion) {
  if (!isWriteQuestion(question)) {
    return false;
  }

  if (writeAnswerMatches(value, question.acceptedAnswers)) {
    return true;
  }

  if (question.keyIdeas.length === 0) {
    return false;
  }

  return (
    evaluateOpenResponse(value, question.keyIdeas).state ===
    "likely_understanding"
  );
}

const WRITE_SKIP_TOKENS = new Set([
  "and",
  "the",
  "for",
  "with",
  "that",
  "this",
  "from",
  "into",
  "your",
  "you",
  "are",
  "was",
]);

function writeContentTokens(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/½/g, "1/2")
    .replace(/¼/g, "1/4")
    .replace(/¾/g, "3/4")
    .replace(/co₂/g, "co2")
    .split(/[^a-z0-9/]+/)
    .filter((token) => token.length >= 3 && !WRITE_SKIP_TOKENS.has(token));
}

const IDEA_SYNONYMS: Record<string, readonly string[]> = {
  light: ["light", "sunlight", "sun", "daylight"],
  sunlight: ["sunlight", "light", "sun", "daylight"],
  sun: ["sun", "sunlight", "light", "daylight"],
  daylight: ["daylight", "light", "sunlight", "sun"],
  glucose: ["glucose", "sugar"],
  sugar: ["sugar", "glucose"],
};

function synonymSet(token: string) {
  const extra = IDEA_SYNONYMS[token];
  return extra ? new Set(extra) : new Set([token]);
}

export function writeAnswerIsClose(value: string, acceptedAnswers: string[]) {
  if (writeAnswerMatches(value, acceptedAnswers) || acceptedAnswers.length === 0) {
    return false;
  }
  const actual = writeContentTokens(value);
  if (actual.length === 0) {
    return false;
  }
  return acceptedAnswers.some((accepted) => {
    const expected = writeContentTokens(accepted);
    if (expected.length === 0) {
      return false;
    }
    const overlap = expected.filter((token) => actual.includes(token)).length;
    return overlap > 0 && overlap < expected.length;
  });
}

export function lessonIdFor(conceptId: string, grade: CurriculumGrade) {
  return `${conceptId}-g${grade}`;
}

export function parseLessonId(lessonId: string): {
  conceptId: string;
  grade: CurriculumGrade;
} | undefined {
  const match = lessonId.match(/^(.*)-g([4-8])$/);
  if (!match) {
    return undefined;
  }
  const grade = Number(match[2]);
  if (!isCurriculumGrade(grade)) {
    return undefined;
  }
  return { conceptId: match[1], grade };
}

function answerHasIdea(answer: string, idea: string): boolean {
  const alternatives = idea
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);
  if (alternatives.length > 1) {
    return alternatives.some((part) => answerHasIdea(answer, part));
  }

  const answerTokens = writeContentTokens(answer);
  const needed = writeContentTokens(idea);
  if (needed.length === 0) {
    const compact = normalizeLessonAnswer(idea);
    return compact.length > 0 && normalizeLessonAnswer(answer).includes(compact);
  }

  const answerMeanings = new Set(
    answerTokens.flatMap((token) => [...synonymSet(token)]),
  );

  return needed.every((term) => {
    for (const option of synonymSet(term)) {
      if (answerMeanings.has(option)) {
        return true;
      }
    }
    return false;
  });
}

function significantWordCount(value: string) {
  return value
    .trim()
    .toLowerCase()
    .split(/[^a-z0-9/]+/)
    .filter((word) => word.length >= 3).length;
}

export function evaluateOpenResponse(
  value: string,
  keyIdeas: string[],
): OpenResponseEvaluation {
  const words = significantWordCount(value);
  if (words === 0) {
    return {
      state: "not_answered",
      matchedIdeas: [],
      missingIdeas: keyIdeas,
    };
  }

  const matchedIdeas = keyIdeas.filter((idea) => answerHasIdea(value, idea));
  const missingIdeas = keyIdeas.filter((idea) => !matchedIdeas.includes(idea));

  if (keyIdeas.length === 0) {
    return {
      state: "attempted",
      matchedIdeas: [],
      missingIdeas: [],
    };
  }

  if (matchedIdeas.length === 0) {
    return {
      state: "attempted",
      matchedIdeas,
      missingIdeas,
    };
  }

  if (matchedIdeas.length * 2 < keyIdeas.length) {
    return {
      state: "needs_clarification",
      matchedIdeas,
      missingIdeas,
    };
  }

  return {
    state: "likely_understanding",
    matchedIdeas,
    missingIdeas,
  };
}

export function openResponseAllowsContinue(evaluation: OpenResponseEvaluation) {
  return evaluation.state !== "not_answered";
}

export function openResponseShowsUnderstanding(
  evaluation: OpenResponseEvaluation,
) {
  return evaluation.state === "likely_understanding";
}

export function buildLessonTutorContext(
  lesson: ResolvedCompleteLesson,
  currentLearningStage: CompleteLessonPhase,
): LessonTutorContext {
  return {
    grade: lesson.grade,
    subject: lesson.subject,
    lessonId: lesson.lessonId,
    conceptId: lesson.conceptId,
    lessonTitle: lesson.title,
    learningObjective: lesson.objective,
    explanation: lesson.explanation,
    examples: lesson.examples,
    misconceptions: lesson.misconceptions,
    currentLearningStage,
  };
}
