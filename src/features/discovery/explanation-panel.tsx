import type { DiscoveryExplanation } from "@/domain";

type ExplanationPanelProps = {
  explanation: DiscoveryExplanation;
};

export function ExplanationPanel({ explanation }: ExplanationPanelProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {explanation.heading}
        </h2>
        <p className="mt-4 max-w-prose text-lg leading-8 text-ink">
          {explanation.main}
        </p>
      </div>
      <div>
        <p className="text-sm font-semibold tracking-wide text-teal">
          {explanation.simpleHeading}
        </p>
        <p className="mt-2 max-w-prose text-base leading-7 text-ink-muted">
          {explanation.simple}
        </p>
      </div>
    </div>
  );
}
