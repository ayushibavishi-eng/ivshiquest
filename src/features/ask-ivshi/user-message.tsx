type UserMessageProps = {
  text: string;
};

export function UserMessage({ text }: UserMessageProps) {
  return (
    <article className="flex justify-end">
      <h3 className="sr-only">You</h3>
      <p className="max-w-[min(100%,20.5rem)] rounded-2xl bg-surface-muted px-4 py-3 text-base leading-7 text-ink">
        {text}
      </p>
    </article>
  );
}
