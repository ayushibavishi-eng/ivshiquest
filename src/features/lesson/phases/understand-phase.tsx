"use client";

export function UnderstandPhase({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-[1.05rem] leading-7 text-ink">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
