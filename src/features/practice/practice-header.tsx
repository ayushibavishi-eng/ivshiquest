type PracticeHeaderProps = {
  subjectLabel: string;
  topicTitle: string;
};

export function PracticeHeader({
  subjectLabel,
  topicTitle,
}: PracticeHeaderProps) {
  return (
    <header>
      <h1 className="text-[1.65rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
        Let&apos;s practise
      </h1>
      <p className="mt-2 max-w-prose text-base leading-7 text-ink-muted sm:text-lg">
        Take your time. Mistakes help Ivshi understand how to help you.
      </p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
        {subjectLabel}
      </p>
      <p className="mt-1 text-lg font-semibold tracking-tight text-ink sm:text-xl">
        {topicTitle}
      </p>
    </header>
  );
}
