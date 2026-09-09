import { Button } from "@/components/ui/button";

type DiscoverMoreStepProps = {
  prompt: string;
  question: string;
  onContinue: () => void;
};

export function DiscoverMoreStep({
  prompt,
  question,
  onContinue,
}: DiscoverMoreStepProps) {
  return (
    <section className="flex flex-col gap-6">
      <p className="text-base font-medium text-ink-muted">{prompt}</p>
      <h2 className="text-[1.55rem] font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
        {question}
      </h2>
      <Button onClick={onContinue} className="mt-2 self-start">
        Discover →
      </Button>
    </section>
  );
}
