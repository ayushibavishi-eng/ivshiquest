import { IvshiMark } from "@/components/companion";
import type { AskMessage, AskResponseChoice } from "@/domain/ask-ivshi";
import { AskChallengeCard } from "@/features/ask-ivshi/ask-challenge-card";
import { ResponseChoice } from "@/features/ask-ivshi/response-choice";

type IvshiMessageProps = {
  message: AskMessage;
  showActions: boolean;
  onChoice: (choice: AskResponseChoice) => void;
};

export function IvshiMessage({
  message,
  showActions,
  onChoice,
}: IvshiMessageProps) {
  const paragraphs = message.text.split("\n\n");

  return (
    <article className="flex items-start gap-3">
      <IvshiMark
        state="curious"
        size={22}
        decorative
        className="mt-1 shrink-0 text-teal"
      />
      <div className="max-w-[min(100%,24rem)] flex-1 rounded-2xl bg-surface-elevated px-4 py-4 shadow-card ring-1 ring-line">
        <h3 className="sr-only">Ivshi</h3>
        <div className="flex flex-col gap-3">
          {paragraphs.map((paragraph, index) => (
            <p
              key={`${message.id}-p-${String(index)}`}
              className="text-base leading-7 text-ink"
            >
              {paragraph}
            </p>
          ))}
          {showActions && message.challenge ? (
            <AskChallengeCard challenge={message.challenge} />
          ) : null}
          {showActions && message.choices && message.choices.length > 0 ? (
            <div className="flex flex-col gap-2">
              {message.choices.map((choice) => (
                <ResponseChoice
                  key={choice.id}
                  choice={choice}
                  onSelect={onChoice}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
