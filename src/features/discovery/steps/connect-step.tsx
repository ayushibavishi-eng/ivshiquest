import { Button } from "@/components/ui/button";

type ConnectStepProps = {
  heading: string;
  hook: string;
  explanation: string;
  onContinue: () => void;
};

export function ConnectStep({
  heading,
  hook,
  explanation,
  onContinue,
}: ConnectStepProps) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {heading}
      </h2>
      <p className="text-xl font-medium leading-8 text-ink">{hook}</p>
      <p className="max-w-prose text-base leading-7 text-ink-muted">
        {explanation}
      </p>
      <Button onClick={onContinue} className="mt-2 self-start">
        Explore this →
      </Button>
    </section>
  );
}
