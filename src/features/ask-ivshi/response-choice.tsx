import type { AskResponseChoice } from "@/domain/ask-ivshi";

type ResponseChoiceProps = {
  choice: AskResponseChoice;
  onSelect: (choice: AskResponseChoice) => void;
};

export function ResponseChoice({ choice, onSelect }: ResponseChoiceProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(choice)}
      className="min-h-12 rounded-2xl bg-surface px-4 py-3 text-left text-base font-medium leading-6 text-ink ring-1 ring-line transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
    >
      {choice.label}
    </button>
  );
}
