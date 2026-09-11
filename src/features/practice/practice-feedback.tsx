import { Button } from "@/components/ui/button";
import { companionFeedbackPhrase } from "@/domain/companion-feedback";
import { QuestionResult } from "@/features/lesson/feedback/question-result";
import type { PracticeCheckStatus } from "@/features/practice/practice-ivshi";

type PracticeFeedbackProps = {
  status: PracticeCheckStatus;
  grade: number;
  questionId: string;
  explanation: string;
  hint: string;
  onNext: () => void;
  onRetry: () => void;
};

export function PracticeFeedback({
  status,
  grade,
  questionId,
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
      <div className="flex flex-col gap-4">
        <QuestionResult
          kind="found"
          phrase={companionFeedbackPhrase("found", grade, questionId)}
          detail={explanation}
        />
        <Button onClick={onNext} className="self-start">
          Next →
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <QuestionResult
        kind="look-again"
        phrase={companionFeedbackPhrase(
          "look-again",
          grade,
          `${questionId}:look-again`,
        )}
        clue={hint}
      />
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
