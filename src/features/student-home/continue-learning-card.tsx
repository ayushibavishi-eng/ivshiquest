import { ButtonLink } from "@/components/ui/button";
import type { ContinueLearning } from "@/domain";
import { studentLearnTopicHref } from "@/lib/constants";

type ContinueLearningCardProps = {
  item: ContinueLearning | null;
};

export function ContinueLearningCard({ item }: ContinueLearningCardProps) {
  if (!item) {
    return null;
  }

  return (
    <section
      aria-labelledby="continue-heading"
      className="flex flex-col gap-3 border-t border-line pt-8"
    >
      <h2
        id="continue-heading"
        className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted"
      >
        Continue Learning
      </h2>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-teal">{item.subjectLabel}</p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-ink">
            {item.topic}
          </h3>
          <p className="mt-1 text-sm text-ink-muted">{item.lastExploredLabel}</p>
        </div>
        <ButtonLink
          href={studentLearnTopicHref(item.conceptId)}
          variant="quiet"
          size="inline"
          className="self-start sm:self-auto"
        >
          Continue →
        </ButtonLink>
      </div>
    </section>
  );
}
