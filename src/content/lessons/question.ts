import type { LessonQuestion } from "@/domain/complete-lesson";

export function q(
  id: string,
  prompt: string,
  a: string,
  b: string,
  c: string,
  correct: "a" | "b" | "c",
  explanation: string,
  hint: string,
  misconception: string,
  feedback: { a: string; b: string; c: string },
): LessonQuestion {
  const choices = [
    { id: `${id}-a`, letter: "A", text: a },
    { id: `${id}-b`, letter: "B", text: b },
    { id: `${id}-c`, letter: "C", text: c },
  ];

  return {
    id,
    prompt,
    format: "choice",
    choices,
    correctChoiceId: `${id}-${correct}`,
    acceptedAnswers: [],
    keyIdeas: [],
    explanation,
    hint,
    misconception,
    feedbackByChoice: {
      [`${id}-a`]: feedback.a,
      [`${id}-b`]: feedback.b,
      [`${id}-c`]: feedback.c,
    },
  };
}

export function writeQ(
  id: string,
  prompt: string,
  acceptedAnswers: string[],
  explanation: string,
  hint: string,
  misconception: string,
  keyIdeas: string[] = [],
): LessonQuestion {
  return {
    id,
    prompt,
    format: "write",
    choices: [],
    correctChoiceId: "",
    acceptedAnswers,
    keyIdeas,
    explanation,
    hint,
    misconception,
    feedbackByChoice: {},
  };
}

export function explainQ(
  id: string,
  prompt: string,
  modelAnswer: string,
  hint: string,
  misconception: string,
  keyIdeas: string[],
  placeholder = "Write why, in your own words.",
): LessonQuestion {
  return {
    id,
    prompt,
    format: "write",
    choices: [],
    correctChoiceId: "",
    acceptedAnswers: [],
    keyIdeas,
    placeholder,
    explanation: modelAnswer,
    hint,
    misconception,
    feedbackByChoice: {},
  };
}
