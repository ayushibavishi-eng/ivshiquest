import { Button, ButtonLink } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";

type PracticeCompleteProps = {
  topicTitle: string;
  summary: string;
  onReview: () => void;
};

export function PracticeComplete({
  topicTitle,
  summary,
  onReview,
}: PracticeCompleteProps) {
  return (
    <section className="flex flex-col gap-6 py-2" data-ivshi-anchor="success">
      <h2 className="text-[1.65rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
        Practice complete <span aria-hidden="true">🎉</span>
      </h2>
      <p className="text-lg leading-8 text-ink">
        You practised {topicTitle}.
      </p>
      <p className="max-w-prose text-base leading-7 text-ink-muted">{summary}</p>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button onClick={onReview} className="self-start">
          Review answers
        </Button>
        <ButtonLink
          href={ROUTES.student.learn}
          variant="ghost"
          className="self-start ring-1 ring-line"
        >
          Continue learning
        </ButtonLink>
      </div>
    </section>
  );
}
