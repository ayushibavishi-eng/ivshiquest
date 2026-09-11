import { Button } from "@/components/ui/button";
import { ExplorationVisual } from "@/features/discovery/exploration-visual";
import type { DiscoveryExplorationVisual } from "@/domain";

type ExploreStepProps = {
  prompt: string;
  lookPrompt: string;
  captionAfterReveal: string;
  visual: DiscoveryExplorationVisual;
  revealed: boolean;
  onReveal: () => void;
  onContinue: () => void;
};

export function ExploreStep({
  prompt,
  lookPrompt,
  captionAfterReveal,
  visual,
  revealed,
  onReveal,
  onContinue,
}: ExploreStepProps) {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          Let&apos;s look closely
        </h2>
        <p className="mt-2 max-w-prose text-base leading-7 text-ink-muted">
          {lookPrompt}
        </p>
      </div>
      <ExplorationVisual
        prompt={prompt}
        captionAfterReveal={captionAfterReveal}
        visual={visual}
        revealed={revealed}
        onReveal={onReveal}
      />
      <Button onClick={onContinue} disabled={!revealed} className="self-start">
        Now explain it to me →
      </Button>
    </section>
  );
}
