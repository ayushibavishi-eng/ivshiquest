import Link from "next/link";
import { IvshiCompanion } from "@/components/companion";
import { ButtonLink } from "@/components/ui/button";
import type { LearnRecommendation } from "@/domain";
import { studentLearnTopicHref } from "@/lib/constants";

type RecommendedCardProps = {
  recommendation: LearnRecommendation;
};

export function RecommendedCard({ recommendation }: RecommendedCardProps) {
  const href = studentLearnTopicHref(recommendation.topicId);

  return (
    <article className="rounded-[1.75rem] bg-surface-elevated px-5 py-6 shadow-card ring-1 ring-line sm:px-7 sm:py-7">
      <h3 className="text-[1.7rem] font-semibold leading-snug tracking-tight text-ink sm:text-[2rem]">
        <Link
          href={href}
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          {recommendation.title}
        </Link>
      </h3>
      <p className="mt-3 text-lg font-medium text-teal">
        {recommendation.headline}
      </p>
      <p className="mt-2 max-w-prose text-base leading-7 text-ink-muted">
        {recommendation.supportingText}
      </p>
      <IvshiCompanion
        state="helping"
        size={18}
        label={recommendation.ivshiNote}
        className="mt-5 text-sm text-ink-muted"
      />
      <ButtonLink href={href} className="mt-6">
        Continue →
      </ButtonLink>
    </article>
  );
}
