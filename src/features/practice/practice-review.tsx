import { Button, ButtonLink } from "@/components/ui/button";
import type { PracticeChoice, PracticeQuestion } from "@/domain/practice";
import { ROUTES } from "@/lib/constants";

export type PracticeReviewItem = {
  question: PracticeQuestion;
  selectedChoice: PracticeChoice | null;
};

type PracticeReviewProps = {
  items: PracticeReviewItem[];
  onBack: () => void;
};

function choiceLabel(choice: PracticeChoice | null) {
  if (!choice) {
    return "You skipped this one.";
  }

  return `${choice.letter}. ${choice.text}`;
}

export function PracticeReview({ items, onBack }: PracticeReviewProps) {
  return (
    <section className="flex flex-col gap-8 py-2">
      <div>
        <h2 className="text-[1.65rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
          Review answers
        </h2>
        <p className="mt-2 max-w-prose text-base leading-7 text-ink-muted">
          Look back at what you chose and what matches.
        </p>
      </div>
      <ol className="flex flex-col gap-5">
        {items.map((item, index) => {
          const correctChoice = item.question.choices.find(
            (choice) => choice.id === item.question.correctChoiceId,
          );

          return (
            <li
              key={item.question.id}
              className="rounded-2xl bg-surface-elevated p-5 shadow-card"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                Question {index + 1}
              </p>
              <p className="mt-2 text-lg font-semibold leading-snug text-ink">
                {item.question.prompt}
              </p>
              <dl className="mt-4 flex flex-col gap-2 text-base leading-7">
                <div>
                  <dt className="font-semibold text-ink">Your answer</dt>
                  <dd className="text-ink-muted">
                    {choiceLabel(item.selectedChoice)}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">What matches</dt>
                  <dd className="text-ink-muted">
                    {choiceLabel(correctChoice ?? null)}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 max-w-prose text-base leading-7 text-ink">
                {item.question.explanation}
              </p>
            </li>
          );
        })}
      </ol>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          variant="ghost"
          onClick={onBack}
          className="self-start ring-1 ring-line"
        >
          Back
        </Button>
        <ButtonLink href={ROUTES.student.learn} className="self-start">
          Continue learning
        </ButtonLink>
      </div>
    </section>
  );
}
