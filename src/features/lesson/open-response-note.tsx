import { IvshiCompanion } from "@/components/companion";
import { companionFeedbackPhrase } from "@/domain/companion-feedback";
import type { OpenResponseEvaluation } from "@/domain/complete-lesson";

export function OpenResponseNote({
  evaluation,
  grade = 6,
}: {
  evaluation: OpenResponseEvaluation;
  grade?: number;
}) {
  if (evaluation.state === "not_answered") {
    return (
      <p
        className="text-sm text-ink-muted"
        data-open-response-state={evaluation.state}
      >
        Write the idea in your own words first.
      </p>
    );
  }

  if (evaluation.state === "likely_understanding") {
    return (
      <div data-open-response-state={evaluation.state}>
        <IvshiCompanion
          state="celebrating"
          size={20}
          label="Those are the ideas I was listening for."
          className="text-sm text-ink-muted"
        />
      </div>
    );
  }

  const label = companionFeedbackPhrase(
    evaluation.state === "needs_clarification" ? "close" : "look-again",
    grade,
    `open:${evaluation.state}:${evaluation.matchedIdeas.join(",")}`,
  );

  return (
    <div data-open-response-state={evaluation.state}>
      <IvshiCompanion
        state="helping"
        size={20}
        label={label}
        className="text-sm leading-6 text-ink"
      />
    </div>
  );
}
