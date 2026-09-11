"use client";

import { Button } from "@/components/ui/button";

type TryPhaseProps = {
  prompt: string;
  reveal: string;
  revealed: boolean;
  onReveal: () => void;
};

export function TryPhase({
  prompt,
  reveal,
  revealed,
  onReveal,
}: TryPhaseProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[1.25rem] font-semibold leading-snug text-ink">
        {prompt}
      </p>
      {!revealed ? (
        <Button onClick={onReveal} className="self-start">
          Show me
        </Button>
      ) : (
        <p className="rounded-2xl bg-surface-elevated px-4 py-3 text-base leading-7 text-ink shadow-card ring-1 ring-line">
          {reveal}
        </p>
      )}
    </div>
  );
}
