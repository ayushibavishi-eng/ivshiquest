"use client";

import { Button } from "@/components/ui/button";
import type { LessonQuestion } from "@/domain/complete-lesson";
import { AnswerChoice } from "@/features/discovery/answer-choice";

type QuestionPhaseProps = {
  question: LessonQuestion;
  selectedId: string | null;
  checked: boolean;
  hintOpen: boolean;
  onSelect: (id: string) => void;
  onCheck: () => void;
  onHint: () => void;
};

export function QuestionPhase({
  question,
  selectedId,
  checked,
  hintOpen,
  onSelect,
  onCheck,
  onHint,
}: QuestionPhaseProps) {
  const isCorrect = selectedId === question.correctChoiceId;
  const wrongFeedback =
    selectedId && !isCorrect
      ? question.feedbackByChoice[selectedId]
      : undefined;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[1.35rem] font-semibold leading-snug text-ink">
        {question.prompt}
      </h2>
      <fieldset className="flex flex-col gap-2" disabled={checked}>
        <legend className="sr-only">{question.prompt}</legend>
        {question.choices.map((choice) => (
          <AnswerChoice
            key={choice.id}
            name={`lesson-${question.id}`}
            value={choice.id}
            letter={choice.letter}
            text={choice.text}
            checked={selectedId === choice.id}
            onChange={onSelect}
          />
        ))}
      </fieldset>
      {!checked ? (
        <div className="flex flex-wrap gap-3">
          <Button onClick={onCheck} disabled={!selectedId} className="self-start">
            Check
          </Button>
          <Button
            onClick={onHint}
            variant="quiet"
            className="self-start"
            type="button"
          >
            {hintOpen ? "Hint is showing" : "Hint"}
          </Button>
        </div>
      ) : isCorrect ? (
        <p className="text-base leading-7 text-ink">{question.explanation}</p>
      ) : (
        <div className="flex flex-col gap-2 text-base leading-7 text-ink">
          <p>{wrongFeedback ?? question.explanation}</p>
          <p className="text-ink-muted">{question.misconception}</p>
          <p>{question.explanation}</p>
        </div>
      )}
      {hintOpen && !checked ? (
        <p className="text-sm leading-6 text-ink-muted">{question.hint}</p>
      ) : null}
    </div>
  );
}
