import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import type { GrowingConcept } from "@/domain";
import { studentLearnTopicHref } from "@/lib/constants";
import { LearnSection } from "@/features/learn/learn-section";

type KeepGrowingProps = {
  concepts: GrowingConcept[];
};

export function KeepGrowing({ concepts }: KeepGrowingProps) {
  return (
    <LearnSection
      headingId="keep-growing-heading"
      title="Keep Growing"
      className="border-t border-line pt-8"
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {concepts.map((concept) => {
          const href = studentLearnTopicHref(concept.topicId);

          return (
            <li
              key={concept.topicId}
              className="flex flex-col rounded-2xl bg-surface-elevated px-4 py-4 shadow-card ring-1 ring-line/80"
            >
              <h3 className="text-lg font-semibold tracking-tight text-ink">
                <Link
                  href={href}
                  className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                >
                  {concept.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm leading-6 text-ink-muted">
                {concept.connection}
              </p>
              <p className="mt-3 text-sm text-ink-muted">{concept.statusLabel}</p>
              <ButtonLink
                href={href}
                variant="quiet"
                size="inline"
                className="mt-2 self-start"
              >
                Explore →
              </ButtonLink>
            </li>
          );
        })}
      </ul>
    </LearnSection>
  );
}
