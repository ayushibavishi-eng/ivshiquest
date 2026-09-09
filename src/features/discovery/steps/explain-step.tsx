import { Button } from "@/components/ui/button";
import type { DiscoveryExplanation } from "@/domain";
import { ExplanationPanel } from "@/features/discovery/explanation-panel";

type ExplainStepProps = {
  explanation: DiscoveryExplanation;
  onContinue: () => void;
};

export function ExplainStep({ explanation, onContinue }: ExplainStepProps) {
  return (
    <section className="flex flex-col gap-8">
      <ExplanationPanel explanation={explanation} />
      <Button onClick={onContinue} className="self-start">
        Got it →
      </Button>
    </section>
  );
}
