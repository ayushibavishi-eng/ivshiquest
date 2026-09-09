import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import type { CuriosityExploration } from "@/domain";
import { studentLearnTopicHref } from "@/lib/constants";
import { LearnSection } from "@/features/learn/learn-section";

type ExploreSomethingNewProps = {
  exploration: CuriosityExploration;
};

export function ExploreSomethingNew({
  exploration,
}: ExploreSomethingNewProps) {
  const href = studentLearnTopicHref(exploration.topicId);

  return (
    <LearnSection
      headingId="explore-new-heading"
      title="Explore Something New"
      className="border-t border-line pt-8"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-ink">
            <Link
              href={href}
              className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              {exploration.question}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-ink-muted">
            {exploration.durationLabel}
          </p>
        </div>
        <ButtonLink
          href={href}
          variant="quiet"
          size="inline"
          className="self-start sm:self-auto"
        >
          Explore →
        </ButtonLink>
      </div>
    </LearnSection>
  );
}
