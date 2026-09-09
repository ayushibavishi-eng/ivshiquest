import { Button } from "@/components/ui/button";
import type { PracticeCheckStatus } from "@/features/practice/practice-ivshi";

type PracticeFeedbackProps = {
  status: PracticeCheckStatus;
  explanation: string;
  hint: string;
  onNext: () => void;
  onRetry: () => void;
};

export function PracticeFeedback({
  status,
  explanation,
  hint,
  onNext,
  onRetry,
}: PracticeFeedbackProps) {
  if (status === "idle") {
    return null;
  }

  if (status === "correct") {
    return (
      <div className="flex flex-col gap-4" aria-live="polite">
        <p className="text-lg font-medium text-ink">
          Yes! You got it. <span aria-hidden="true">🎉</span>
        </p>
        <p className="max-w-prose text-base leading-7 text-ink">{explanation}</p>
        <Button onClick={onNext} className="self-start">
          Next →
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4" aria-live="polite">
      <p className="text-lg font-medium text-ink">
        Not quite — let&apos;s look at it.
      </p>
      <p className="max-w-prose text-base leading-7 text-ink-muted">{hint}</p>
      <Button
        variant="ghost"
        onClick={onRetry}
        className="self-start ring-1 ring-line"
      >
        Try again
      </Button>
    </div>
  );
}
