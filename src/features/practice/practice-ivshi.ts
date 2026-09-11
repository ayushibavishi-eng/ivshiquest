import type { IvshiState } from "@/components/companion/ivshi-mark";
import type { PracticeDifficulty } from "@/domain/practice";

export type PracticeView = "question" | "complete" | "review";
export type PracticeCheckStatus = "idle" | "incorrect" | "correct";

export type PracticeIvshiMoment = {
  message: string;
  state: IvshiState;
};

const HARD_DIFFICULTIES: PracticeDifficulty[] = [
  "medium-harder",
  "challenge",
];

export function getPracticeIvshiMoment(options: {
  view: PracticeView;
  status: PracticeCheckStatus;
  questionIndex: number;
  difficulty: PracticeDifficulty;
}): PracticeIvshiMoment | null {
  const { view, status, questionIndex, difficulty } = options;

  if (view === "complete") {
    return { message: "You worked through it!", state: "celebrating" };
  }

  if (view !== "question" || status !== "idle") {
    return null;
  }

  if (questionIndex === 0) {
    return { message: "Let's see what you can figure out.", state: "curious" };
  }

  if (HARD_DIFFICULTIES.includes(difficulty)) {
    return { message: "Take your time.", state: "thinking" };
  }

  return null;
}
