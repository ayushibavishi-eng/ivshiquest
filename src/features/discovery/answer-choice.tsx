"use client";

import { cn } from "@/lib/cn";

type AnswerChoiceProps = {
  name: string;
  value: string;
  letter: string;
  text: string;
  checked: boolean;
  onChange: (value: string) => void;
};

export function AnswerChoice({
  name,
  value,
  letter,
  text,
  checked,
  onChange,
}: AnswerChoiceProps) {
  return (
    <label
      className={cn(
        "flex min-h-14 cursor-pointer items-start gap-3 rounded-2xl bg-surface-elevated px-4 py-3 shadow-card ring-1 ring-line transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-focus",
        checked ? "ring-2 ring-teal" : "hover:bg-surface-muted",
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span
        className={cn(
          "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
          checked
            ? "bg-teal text-canvas"
            : "bg-canvas text-ink-muted ring-1 ring-line",
        )}
        aria-hidden="true"
      >
        {letter}
      </span>
      <span className="pt-1 text-base leading-6 text-ink">{text}</span>
    </label>
  );
}
