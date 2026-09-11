import { IvshiCompanion } from "@/components/companion";
import type { IvshiState } from "@/components/companion";
import { cn } from "@/lib/cn";

type QuestionResultProps = {
  phrase: string;
  detail?: string;
  clue?: string;
  kind: "found" | "close" | "look-again" | "look-together";
  showMark?: boolean;
};

export function QuestionResult({
  phrase,
  detail,
  clue,
  kind,
  showMark = true,
}: QuestionResultProps) {
  const found = kind === "found";
  const state: IvshiState = found
    ? "celebrating"
    : kind === "close"
      ? "curious"
      : "helping";

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-[1.4rem] px-4 py-4 ring-1",
        found
          ? "bg-[linear-gradient(160deg,#e7f4f8_0%,#fffaf2_100%)] ring-teal/25"
          : "bg-surface-elevated ring-line",
      )}
      data-question-result={kind}
      aria-live="polite"
    >
      {showMark ? (
        <IvshiCompanion
          state={state}
          size={20}
          label={phrase}
          className="text-[1.05rem] font-medium leading-7 text-ink"
        />
      ) : (
        <p className="text-[1.05rem] font-medium leading-7 text-ink">{phrase}</p>
      )}
      {clue ? (
        <p className="text-base leading-7 text-ink-muted">{clue}</p>
      ) : null}
      {detail ? <p className="text-base leading-7 text-ink">{detail}</p> : null}
    </div>
  );
}
