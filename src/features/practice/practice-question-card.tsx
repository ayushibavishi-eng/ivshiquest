import { Button } from "@/components/ui/button";
import type { PracticeQuestion } from "@/domain/practice";
import { AnswerChoice } from "@/features/discovery/answer-choice";
import type { PracticeCheckStatus } from "@/features/practice/practice-ivshi";

type PracticeQuestionCardProps = {
  question: PracticeQuestion;
  questionNumber: number;
  questionCount: number;
  selectedId: string | null;
  status: PracticeCheckStatus;
  onSelect: (id: string) => void;
  onCheck: () => void;
};

export function PracticeQuestionCard({
  question,
  questionNumber,
  questionCount,
  selectedId,
  status,
  onSelect,
  onCheck,
}: PracticeQuestionCardProps) {
  return (
    <section className="flex flex-col gap-6" data-ivshi-anchor="task">
      <p className="text-sm font-semibold tracking-wide text-ink-muted">
        Question {questionNumber} of {questionCount}
      </p>
      <h2 className="text-[1.45rem] font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
        {question.prompt}
      </h2>
      <fieldset className="flex flex-col gap-2" disabled={status === "correct"}>
        <legend className="sr-only">{question.prompt}</legend>
        {question.choices.map((choice) => (
          <AnswerChoice
            key={choice.id}
            name={`practice-answer-${question.id}`}
            value={choice.id}
            letter={choice.letter}
            text={choice.text}
            checked={selectedId === choice.id}
            onChange={onSelect}
          />
        ))}
      </fieldset>
      {status === "idle" ? (
        <Button onClick={onCheck} disabled={!selectedId} className="self-start">
          Check
        </Button>
      ) : null}
    </section>
  );
}
