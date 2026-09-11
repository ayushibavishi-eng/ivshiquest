"use client";

import type { LessonExample } from "@/domain/complete-lesson";

export function ExamplesPhase({
  examples,
  connection,
}: {
  examples: LessonExample[];
  connection: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-3">
        {examples.map((example) => (
          <li
            key={example.caption}
            className="rounded-[1.4rem] bg-surface-elevated px-4 py-4 shadow-card ring-1 ring-line"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
              {example.caption}
            </p>
            <p className="mt-2 text-base leading-7 text-ink">{example.body}</p>
          </li>
        ))}
      </ul>
      <p className="text-base leading-7 text-ink-muted">{connection}</p>
    </div>
  );
}
