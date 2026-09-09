"use client";

import { useEffect, useRef, useState } from "react";
import type {
  AskCompanionContext,
  AskMessage,
  AskResponseChoice,
  AskSuggestedPrompt,
} from "@/domain/ask-ivshi";
import { AskIvshiHeader } from "@/features/ask-ivshi/ask-ivshi-header";
import { ChatInput } from "@/features/ask-ivshi/chat-input";
import { Conversation } from "@/features/ask-ivshi/conversation";
import { SuggestedPrompt } from "@/features/ask-ivshi/suggested-prompt";
import { respondToAsk } from "@/services/ask-ivshi";

type AskIvshiExperienceProps = {
  context: AskCompanionContext;
  prompts: AskSuggestedPrompt[];
};

export function AskIvshiExperience({
  context,
  prompts,
}: AskIvshiExperienceProps) {
  const [messages, setMessages] = useState<AskMessage[]>([]);
  const [pending, setPending] = useState(false);
  const pendingRef = useRef(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  async function send(text: string, choiceId?: string) {
    if (pendingRef.current) {
      return;
    }

    pendingRef.current = true;
    const userMessage: AskMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text,
    };
    const history = [...messages, userMessage];
    setMessages(history);
    setPending(true);

    try {
      const reply = await respondToAsk({
        text,
        choiceId,
        history,
        context,
      });

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "ivshi",
          text: reply.text,
          choices: reply.choices,
          challenge: reply.challenge,
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
      <p className="self-start rounded-full bg-surface-elevated px-3 py-1.5 text-sm text-ink-muted shadow-card ring-1 ring-line">
        You&apos;re exploring {context.topicTitle}
      </p>
      {messages.length === 0 ? (
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
        <Conversation
          messages={messages}
          disabled={pending}
          onChoice={(choice: AskResponseChoice) => {
            void send(choice.label, choice.id);
          }}
        />
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
