import type { AskMessage, AskResponseChoice } from "@/domain/ask-ivshi";
import { ChatMessage } from "@/features/ask-ivshi/chat-message";

type ConversationProps = {
  messages: AskMessage[];
  disabled?: boolean;
  onChoice: (choice: AskResponseChoice) => void;
};

export function Conversation({
  messages,
  disabled = false,
  onChoice,
}: ConversationProps) {
  const lastIvshiId = [...messages]
    .reverse()
    .find((message) => message.role === "ivshi")?.id;

  return (
    <ol className="flex flex-col gap-4" aria-live="polite" aria-label="Conversation">
      {messages.map((message) => (
        <li key={message.id}>
          <ChatMessage
            message={message}
            showActions={
              !disabled && message.role === "ivshi" && message.id === lastIvshiId
            }
            onChoice={onChoice}
          />
        </li>
      ))}
    </ol>
  );
}
