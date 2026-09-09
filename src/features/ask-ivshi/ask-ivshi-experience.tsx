"use client";

import { useEffect, useRef, useState } from "react";
import { IvshiMark } from "@/components/companion";
import type {
  AskLearnerContext,
  AskMessage,
  AskResponseChoice,
  AskSuggestedPrompt,
} from "@/domain/ask-ivshi";
import { sendAskIvshiMessage } from "@/features/ask-ivshi/ask-ivshi-api";
import { AskIvshiHeader } from "@/features/ask-ivshi/ask-ivshi-header";
import { ChatInput } from "@/features/ask-ivshi/chat-input";
import { Conversation } from "@/features/ask-ivshi/conversation";
import { SuggestedPrompt } from "@/features/ask-ivshi/suggested-prompt";

type AskIvshiExperienceProps = {
  context: AskLearnerContext;
  prompts: AskSuggestedPrompt[];
};

const FRIENDLY_ERROR =
  "I'm having a little trouble thinking right now. Please try again.";

export function AskIvshiExperience({
  context,
  prompts,
}: AskIvshiExperienceProps) {
  const [messages, setMessages] = useState<AskMessage[]>([]);
  const [pending, setPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const pendingRef = useRef(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, pending, errorMessage]);

  async function send(text: string) {
    if (pendingRef.current) {
      return;
    }

    pendingRef.current = true;
    const userMessage: AskMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text,
    };
    const history = messages.map((message) => ({
      role: message.role,
      text: message.text,
    }));
    setMessages((current) => [...current, userMessage]);
    setErrorMessage(null);
    setPending(true);

    try {
      const result = await sendAskIvshiMessage({
        message: text,
        history,
        context,
      });

      if (!result.ok) {
        setErrorMessage(result.message || FRIENDLY_ERROR);
        return;
      }

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "ivshi",
          text: result.reply.text,
          choices: result.reply.choices,
        },
      ]);
    } finally {
      pendingRef.current = false;
      setPending(false);
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-6 pb-24">
      <AskIvshiHeader />
      {context.currentTopic ? (
        <p className="self-start rounded-full bg-surface-elevated px-3 py-1.5 text-sm text-ink-muted shadow-card ring-1 ring-line">
          You&apos;re exploring {context.currentTopic}
        </p>
      ) : null}
      {messages.length === 0 && !pending && !errorMessage ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {prompts.map((prompt) => (
            <SuggestedPrompt
              key={prompt.id}
              prompt={prompt}
              onSelect={(item) => {
                void send(item.text);
              }}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {messages.length > 0 ? (
            <Conversation
              messages={messages}
              disabled={pending}
              onChoice={(choice: AskResponseChoice) => {
                void send(choice.label);
              }}
            />
          ) : null}
          {pending ? (
            <article className="flex items-start gap-3" aria-live="polite">
              <IvshiMark
                state="thinking"
                size={22}
                decorative
                className="mt-1 shrink-0 text-teal"
              />
              <div className="max-w-[min(100%,24rem)] flex-1 rounded-2xl bg-surface-elevated px-4 py-4 shadow-card ring-1 ring-line">
                <p className="text-base leading-7 text-ink-muted">
                  Ivshi is thinking…
                </p>
              </div>
            </article>
          ) : null}
          {errorMessage && !pending ? (
            <article className="flex items-start gap-3" aria-live="polite">
              <IvshiMark
                state="helping"
                size={22}
                decorative
                className="mt-1 shrink-0 text-teal"
              />
              <div className="max-w-[min(100%,24rem)] flex-1 rounded-2xl bg-surface-elevated px-4 py-4 shadow-card ring-1 ring-line">
                <p className="text-base leading-7 text-ink">{errorMessage}</p>
              </div>
            </article>
          ) : null}
        </div>
      )}
      <div ref={endRef} />
      <div className="pointer-events-none fixed inset-x-0 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-30">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <div className="pointer-events-auto">
            <ChatInput
              disabled={pending}
              onSend={(text) => {
                void send(text);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
