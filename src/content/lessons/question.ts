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
    choices,
    correctChoiceId: `${id}-${correct}`,
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
