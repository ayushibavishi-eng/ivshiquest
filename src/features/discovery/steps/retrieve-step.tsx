import { Button } from "@/components/ui/button";
import { companionFeedbackPhrase } from "@/domain/companion-feedback";
import type { DiscoveryChoice } from "@/domain";
import { AnswerChoice } from "@/features/discovery/answer-choice";
import { QuestionResult } from "@/features/lesson/feedback/question-result";

type RetrieveStepProps = {
  question: string;
  questionId?: string;
  grade: number;
  choices: DiscoveryChoice[];
  selectedId: string | null;
  status: "idle" | "incorrect" | "correct";
  showHint: boolean;
  incorrectFeedback: string;
  hint: string;
  onSelect: (id: string) => void;
  onCheck: () => void;
  onRetry: () => void;
  onHint: () => void;
  onContinue: () => void;
};

export function RetrieveStep({
  question,
  questionId = "retrieve",
  grade,
  choices,
  selectedId,
  status,
  showHint,
  incorrectFeedback,
  hint,
  onSelect,
  onCheck,
  onRetry,
  onHint,
  onContinue,
}: RetrieveStepProps) {
  return (
    <section className="flex flex-col gap-8" data-ivshi-anchor="task">
      <h2 className="text-[1.55rem] font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
        {question}
      </h2>
      <fieldset className="flex flex-col gap-2" disabled={status === "correct"}>
        <legend className="sr-only">{question}</legend>
        {choices.map((choice) => (
          <AnswerChoice
            key={choice.id}
            name="retrieve-answer"
            value={choice.id}
            letter={choice.letter}
            text={choice.text}
            checked={selectedId === choice.id}
            onChange={onSelect}
          />
        ))}
      </fieldset>
      {status === "incorrect" ? (
        <div className="flex flex-col gap-3">
          <QuestionResult
            kind="look-again"
            phrase={companionFeedbackPhrase(
              "look-again",
              grade,
              `${questionId}:look-again`,
            )}
            clue={incorrectFeedback}
          />
          {showHint ? (
            <p className="max-w-prose text-base leading-7 text-ink-muted">
              {hint}
            </p>
          ) : (
            <Button
              variant="quiet"
              size="inline"
              onClick={onHint}
              className="self-start"
            >
              Want a hint?
            </Button>
          )}
        </div>
      ) : null}
      {status === "correct" ? (
        <QuestionResult
          kind="found"
          phrase={companionFeedbackPhrase("found", grade, questionId)}
        />
      ) : null}
      {status === "correct" ? (
        <Button onClick={onContinue} className="self-start">
          Continue →
        </Button>
      ) : status === "incorrect" ? (
        <Button
          variant="ghost"
          onClick={onRetry}
          className="self-start ring-1 ring-line"
        >
          Try again
        </Button>
      ) : (
        <Button onClick={onCheck} disabled={!selectedId} className="self-start">
          Check
        </Button>
      )}
    </section>
  );
}
