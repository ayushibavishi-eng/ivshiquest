export type AskMessageRole = "user" | "ivshi";

export type AskResponseChoice = {
  id: string;
  label: string;
};

export type AskChallengeChoice = {
  id: string;
  letter: string;
  text: string;
};

export type AskChallenge = {
  id: string;
  prompt: string;
  choices: AskChallengeChoice[];
  correctChoiceId: string;
  explanation: string;
  hint: string;
};

export type AskSuggestedPrompt = {
  id: string;
  emoji: string;
  text: string;
};

/** Kept for unused mock content. The live Ask Ivshi flow uses AskLearnerContext. */
export type AskCompanionContext = {
  topicTitle: string;
};

export type AskConversationMessage = {
  role: AskMessageRole;
  text: string;
};

export type AskLearnerProgress = {
  growing: number;
  learned: number;
  mastered: number;
};

export type AskLessonExample = {
  caption: string;
  body: string;
};

export type AskLessonMisconception = {
  idea: string;
  correction: string;
};

/** Lesson the child is currently inside, when Ask Ivshi is opened from a lesson. */
export type AskLessonContext = {
  grade: number;
  subject: string;
  lessonId: string;
  conceptId: string;
  lessonTitle: string;
  learningObjective: string;
  currentLearningStage: string;
  explanation: string;
  examples: AskLessonExample[];
  misconceptions: AskLessonMisconception[];
};

/**
 * Structured learner context for Ask Ivshi.
 * Fields that the product does not yet track are null.
 */
export type AskLearnerContext = {
  grade: number | null;
  /** ISO-style country code when known (e.g. IN, US). */
  country: string | null;
  /** Curriculum system id (e.g. india-current, us). */
  curriculumId: string | null;
  subjects: string[];
  currentSubject: string | null;
  currentTopic: string | null;
  lesson: AskLessonContext | null;
  learningDNA: null;
  previousMistakes: null;
  learnerPreferences: null;
  progress: AskLearnerProgress | null;
  parentApprovedContext: null;
};

export type AskMessage = {
  id: string;
  role: AskMessageRole;
  text: string;
  choices?: AskResponseChoice[];
  challenge?: AskChallenge;
};

export type AskIvshiRequest = {
  message: string;
  history: AskConversationMessage[];
  context: AskLearnerContext;
};

export type AskIvshiResponse = {
  text: string;
  choices?: AskResponseChoice[];
};

export type AskIvshiErrorCode =
  | "missing_api_key"
  | "invalid_request"
  | "empty_message"
  | "openai_error"
  | "timeout";

export type AskIvshiErrorBody = {
  code: AskIvshiErrorCode;
  message: string;
  developerMessage?: string;
};

/** Kept so unused mock engine files still typecheck. */
export type AskRespondInput = {
  text: string;
  choiceId?: string;
  history: AskMessage[];
  context: AskCompanionContext;
};

export type AskIvshiReply = {
  text: string;
  choices?: AskResponseChoice[];
  challenge?: AskChallenge;
};

export type AskIvshiEngine = {
  respond: (input: AskRespondInput) => Promise<AskIvshiReply>;
};

export const ASK_IVSHI_MAX_MESSAGE_CHARS = 2000;
export const ASK_IVSHI_MAX_HISTORY = 16;
