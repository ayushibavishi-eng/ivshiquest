import { IvshiCompanion } from "@/components/companion";
import { Button } from "@/components/ui/button";
import type { DiscoveryChoice } from "@/domain";
import { AnswerChoice } from "@/features/discovery/answer-choice";

type RetrieveStepProps = {
  question: string;
  choices: DiscoveryChoice[];
  selectedId: string | null;
  status: "idle" | "incorrect" | "correct";
  showHint: boolean;
  incorrectFeedback: string;
  correctFeedback: string;
  hint: string;
  onSelect: (id: string) => void;
  onCheck: () => void;
  onRetry: () => void;
  onHint: () => void;
  onContinue: () => void;
};

export function RetrieveStep({
  question,
  choices,
  selectedId,
  status,
  showHint,
  incorrectFeedback,
  correctFeedback,
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
        <div className="flex flex-col gap-3" aria-live="polite">
          <p className="max-w-prose text-base leading-7 text-ink">
            {incorrectFeedback}
          </p>
          {showHint ? (
            <IvshiCompanion
              state="helping"
              size={18}
              label={hint}
              className="text-base leading-7 text-ink-muted"
            />
          ) : (
            <Button variant="quiet" size="inline" onClick={onHint} className="self-start">
              Want a hint?
            </Button>
          )}
        </div>
      ) : null}
      {status === "correct" ? (
        <IvshiCompanion
          state="celebrating"
          size={18}
          label={correctFeedback}
          className="text-lg font-medium text-ink"
        />
      ) : null}
      {status === "correct" ? (
        <Button onClick={onContinue} className="self-start">
          Continue →
        </Button>
      ) : status === "incorrect" ? (
        <Button variant="ghost" onClick={onRetry} className="self-start ring-1 ring-line">
          Try again
        </Button>
      ) : (
        <Button onClick={onCheck} disabled={!selectedId} className="self-start">
          Check my answer
        </Button>
      )}
    </section>
  );
}
