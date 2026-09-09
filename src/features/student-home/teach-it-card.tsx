import { ButtonLink } from "@/components/ui/button";
import type { TeachItPrompt } from "@/domain";
import { ROUTES } from "@/lib/constants";

type TeachItCardProps = {
  teachIt: TeachItPrompt | null;
};

export function TeachItCard({ teachIt }: TeachItCardProps) {
  if (!teachIt) {
    return null;
  }

  return (
    <section
      aria-labelledby="teach-heading"
      className="flex flex-col gap-2 border-t border-line pt-8"
    >
      <h2 id="teach-heading" className="text-xl font-semibold tracking-tight text-ink">
        You really know this!{" "}
        <span aria-hidden="true">🎉</span>
      </h2>
      <p className="max-w-prose text-base leading-6 text-ink-muted">
        Want to teach another learner what you&apos;ve discovered about{" "}
        {teachIt.topic}?
      </p>
      <ButtonLink
        href={ROUTES.student.teach}
        variant="quiet"
        size="inline"
        className="self-start"
      >
        Teach It →
      </ButtonLink>
    </section>
  );
}
