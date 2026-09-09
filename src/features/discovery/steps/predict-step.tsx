import { IvshiCompanion } from "@/components/companion";
import { Button } from "@/components/ui/button";
import type { DiscoveryChoice } from "@/domain";

type PredictStepProps = {
  response: string;
  encouragement: string;
  selected: DiscoveryChoice;
  onContinue: () => void;
};

export function PredictStep({
  response,
  encouragement,
  selected,
  onContinue,
}: PredictStepProps) {
  return (
    <section className="flex flex-col gap-8">
      <IvshiCompanion
        state="curious"
        size={18}
        label={response}
        className="text-lg font-medium leading-7 text-ink"
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
          Your guess
        </p>
        <p className="mt-2 text-xl font-semibold leading-7 text-ink">
          {selected.letter}. {selected.text}
        </p>
        <p className="mt-3 max-w-prose text-base leading-7 text-ink-muted">
          {encouragement}
        </p>
      </div>
      <Button onClick={onContinue} className="self-start">
        Let&apos;s investigate →
      </Button>
    </section>
  );
}
