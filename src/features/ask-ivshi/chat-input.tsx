"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type ChatInputProps = {
  disabled?: boolean;
  onSend: (text: string) => void;
};

export function ChatInput({ disabled = false, onSend }: ChatInputProps) {
  const [value, setValue] = useState("");
  const trimmed = value.trim();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!trimmed || disabled) {
      return;
    }

    onSend(trimmed);
    setValue("");
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl bg-surface-elevated/95 p-3 shadow-card ring-1 ring-line backdrop-blur-md"
    >
      <label htmlFor="ask-ivshi-input" className="sr-only">
        Ask Ivshi anything
      </label>
      <div className="flex items-end gap-2">
        <textarea
          id="ask-ivshi-input"
          name="ask"
          rows={1}
          value={value}
          disabled={disabled}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              event.currentTarget.form?.requestSubmit();
            }
          }}
          placeholder="Ask Ivshi anything..."
          className="max-h-32 min-h-12 flex-1 resize-none rounded-2xl bg-surface px-4 py-3 text-base leading-6 text-ink placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        />
        <Button type="submit" disabled={disabled || !trimmed} className="shrink-0">
          Send
        </Button>
      </div>
    </form>
  );
}
