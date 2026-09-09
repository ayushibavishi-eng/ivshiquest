import { ButtonLink } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";

type CompleteStepProps = {
  title: string;
  summary: string;
  treeMessage: string;
};

export function CompleteStep({
  title,
  summary,
  treeMessage,
}: CompleteStepProps) {
  return (
    <section className="flex flex-col gap-6 py-4">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">
        {title}{" "}
        <span aria-hidden="true">🎉</span>
      </h1>
      <p className="max-w-prose text-lg leading-8 text-ink">{summary}</p>
      <p className="text-base leading-7 text-ink-muted">
        <span aria-hidden="true">🌱 </span>
        {treeMessage}
      </p>
      <ButtonLink href={ROUTES.student.home} className="mt-2 self-start">
        Back to Home
      </ButtonLink>
    </section>
  );
}
