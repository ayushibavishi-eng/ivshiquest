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
  improved: boolean;
}): PracticeIvshiMoment | null {
  const { view, status, questionIndex, difficulty, improved } = options;

  if (view === "complete") {
    return { message: "You worked through it!", state: "celebrating" };
  }

  if (view !== "question") {
    return null;
  }

  if (status === "correct" && improved) {
    return { message: "You're getting stronger.", state: "celebrating" };
  }

  if (status === "idle" && questionIndex === 0) {
    return { message: "Let's see what you can figure out.", state: "curious" };
  }

  if (status === "idle" && HARD_DIFFICULTIES.includes(difficulty)) {
    return { message: "Take your time.", state: "thinking" };
  }

  return null;
}
