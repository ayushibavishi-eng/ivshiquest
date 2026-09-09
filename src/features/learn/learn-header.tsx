import { IvshiMark } from "@/components/companion";

type LearnHeaderProps = {
  displayName: string;
};

export function LearnHeader({ displayName }: LearnHeaderProps) {
  return (
    <header>
      <h1 className="text-[1.65rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
        Your Learning Journey, {displayName}{" "}
        <IvshiMark
          state="curious"
          size={28}
          decorative
          className="mb-0.5 inline-block align-middle text-teal"
        />
      </h1>
      <p className="mt-1 text-base text-ink-muted sm:text-lg">
        Let&apos;s see where your curiosity takes you today.
      </p>
    </header>
  );
}
