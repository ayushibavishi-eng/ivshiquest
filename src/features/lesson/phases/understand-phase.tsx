"use client";

export function UnderstandPhase({
  paragraphs,
  examples,
  connection,
}: {
  paragraphs: string[];
  examples: Array<{ caption: string; body: string }>;
  connection: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-[1.05rem] leading-7 text-ink">
          {paragraph}
        </p>
      ))}
      <ul className="flex flex-col gap-3">
        {examples.map((example) => (
          <li
            key={example.caption}
            className="rounded-[1.4rem] bg-surface-elevated px-4 py-4 shadow-card ring-1 ring-line"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
              {example.caption}
            </p>
            <p className="mt-2 whitespace-pre-wrap text-base leading-7 text-ink">
              {example.body}
            </p>
          </li>
        ))}
      </ul>
      <p className="text-base leading-7 text-ink-muted">{connection}</p>
    </div>
  );
}
