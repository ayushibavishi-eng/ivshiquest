import type { AskMessage, AskResponseChoice } from "@/domain/ask-ivshi";
import { IvshiMessage } from "@/features/ask-ivshi/ivshi-message";
import { UserMessage } from "@/features/ask-ivshi/user-message";

type ChatMessageProps = {
  message: AskMessage;
  showActions: boolean;
  onChoice: (choice: AskResponseChoice) => void;
};

export function ChatMessage({
  message,
  showActions,
  onChoice,
}: ChatMessageProps) {
  if (message.role === "user") {
    return <UserMessage text={message.text} />;
  }

  return (
    <IvshiMessage
      message={message}
      showActions={showActions}
      onChoice={onChoice}
    />
  );
}
