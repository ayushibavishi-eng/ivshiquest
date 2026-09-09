import type { AskSuggestedPrompt } from "@/domain/ask-ivshi";

type SuggestedPromptProps = {
  prompt: AskSuggestedPrompt;
  onSelect: (prompt: AskSuggestedPrompt) => void;
};

export function SuggestedPrompt({ prompt, onSelect }: SuggestedPromptProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(prompt)}
      className="flex min-h-16 w-full items-start gap-3 rounded-2xl bg-surface-elevated px-4 py-4 text-left shadow-card ring-1 ring-line transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
    >
      <span aria-hidden="true" className="text-xl leading-none">
        {prompt.emoji}
      </span>
      <span className="text-base font-medium leading-6 text-ink">
        {prompt.text}
      </span>
    </button>
  );
}
