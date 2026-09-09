import { IvshiCompanion } from "@/components/companion";
import { Button } from "@/components/ui/button";
import type { DiscoveryChoice } from "@/domain";
import { AnswerChoice } from "@/features/discovery/answer-choice";

type WonderStepProps = {
  question: string;
  category: string;
  prompt: string;
  choices: DiscoveryChoice[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onContinue: () => void;
};

export function WonderStep({
  question,
  category,
  prompt,
  choices,
  selectedId,
  onSelect,
  onContinue,
}: WonderStepProps) {
  return (
    <section className="flex flex-col gap-8" data-ivshi-anchor="task">
      <div>
        <IvshiCompanion
          state="curious"
          size={18}
          label="Ivshi found something for you"
          className="text-sm text-ink-muted"
        />
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          {category}
        </p>
        <h1 className="mt-4 text-[1.7rem] font-semibold leading-snug tracking-tight text-ink sm:text-[2rem]">
          {question}
        </h1>
      </div>
      <div>
        <p className="mb-3 text-base font-medium text-ink">{prompt}</p>
        <fieldset className="flex flex-col gap-2">
          <legend className="sr-only">{prompt}</legend>
          {choices.map((choice) => (
            <AnswerChoice
              key={choice.id}
              name="wonder-guess"
              value={choice.id}
              letter={choice.letter}
              text={choice.text}
              checked={selectedId === choice.id}
              onChange={onSelect}
            />
          ))}
        </fieldset>
      </div>
      <Button onClick={onContinue} disabled={!selectedId} className="self-start">
        I&apos;m guessing…
      </Button>
    </section>
  );
}
