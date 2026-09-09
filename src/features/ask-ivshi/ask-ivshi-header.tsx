import { IvshiMark } from "@/components/companion";

export function AskIvshiHeader() {
  return (
    <header className="flex flex-col gap-3" data-ivshi-anchor="ask">
      <IvshiMark
        state="welcoming"
        size={40}
        decorative
      />
      <div>
        <h1 className="text-[1.65rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
          Hi! I&apos;m Ivshi.
        </h1>
        <p className="mt-2 text-lg font-medium text-ink sm:text-xl">
          What are you curious about?
        </p>
        <p className="mt-2 max-w-prose text-base leading-7 text-ink-muted">
          You can ask me about something you&apos;re learning, something you
          don&apos;t understand, or simply something you&apos;ve wondered about.
        </p>
      </div>
    </header>
  );
}
