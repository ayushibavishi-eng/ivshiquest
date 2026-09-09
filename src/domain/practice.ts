export const PRACTICE_DIFFICULTIES = [
  "easy",
  "easy-medium",
  "medium",
  "medium-harder",
  "challenge",
] as const;

export type PracticeDifficulty = (typeof PRACTICE_DIFFICULTIES)[number];

export const PRACTICE_FORMATS = [
  "multiple-choice",
  "yes-no",
  "pair",
  "missing-number",
  "odd-one-out",
] as const;

export type PracticeFormat = (typeof PRACTICE_FORMATS)[number];

export type PracticeChoice = {
  id: string;
  letter: string;
  text: string;
};

export type PracticeQuestion = {
  id: string;
  prompt: string;
  format: PracticeFormat;
  difficulty: PracticeDifficulty;
  concept: string;
  choices: PracticeChoice[];
  correctChoiceId: string;
  explanation: string;
  hint: string;
};

export type PracticeSet = {
  id: string;
  areaId: string;
  subjectLabel: string;
  topicTitle: string;
  concept: string;
  questions: PracticeQuestion[];
};

/**
 * Quiet session signals for a future recommender.
 * Not shown to the child.
 */
export type PracticeAttemptSignal = {
  questionId: string;
  concept: string;
  difficulty: PracticeDifficulty;
  correct: boolean;
  incorrect: boolean;
  retryUsed: boolean;
  hintUsed: boolean;
};

export type PracticeSessionRecord = {
  sessionId: string;
  practiceSetId: string;
  topicTitle: string;
  concept: string;
  signals: PracticeAttemptSignal[];
};

export function buildPracticeSummary(signals: PracticeAttemptSignal[]): string {
  const firstTryCorrect = signals.filter(
    (signal) => signal.correct && !signal.incorrect,
  ).length;
  const lookedAgain = signals.filter(
    (signal) => signal.retryUsed || signal.hintUsed,
  ).length;

  if (firstTryCorrect === signals.length) {
    return "You noticed equivalent amounts all the way through. That kind of careful looking is growing.";
  }

  if (lookedAgain > 0 && firstTryCorrect >= 2) {
    return "You took another look when you needed it — and you kept going. That's how understanding grows.";
  }

  if (lookedAgain > 0) {
    return "You used a second look and kept practising. Coming back to ideas like this makes them stronger.";
  }

  return "You practised seeing the same amount in different forms. That's a useful connection.";
}
