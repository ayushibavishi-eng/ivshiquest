import { ButtonLink } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";

type ComingNextProps = {
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
};

export function ComingNext({
  title,
  description,
  backHref = ROUTES.student.home,
  backLabel = "Back home",
}: ComingNextProps) {
  return (
    <section className="flex flex-1 flex-col justify-center py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">{title}</h1>
      <p className="mt-3 max-w-prose text-lg leading-7 text-ink-muted">
        {description}
      </p>
      <ButtonLink
        href={backHref}
        variant="quiet"
        size="inline"
        className="mt-8 self-start"
      >
        {backLabel}
      </ButtonLink>
    </section>
  );
}
