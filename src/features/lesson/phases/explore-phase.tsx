"use client";

import { Button } from "@/components/ui/button";
import type { LessonExploreActivity } from "@/domain/complete-lesson";
import { cn } from "@/lib/cn";

type ExplorePhaseProps = {
  text: string;
  activity: LessonExploreActivity;
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function ExplorePhase({
  text,
  activity,
  selectedId,
  onSelect,
}: ExplorePhaseProps) {
  const selected = activity.choices.find((choice) => choice.id === selectedId);

  return (
    <div className="flex flex-col gap-4">
      {text.split(/(?<=\.)\s+/).filter(Boolean).map((part) => (
        <p key={part} className="text-[1.05rem] leading-7 text-ink">
          {part}
        </p>
      ))}
      <p className="text-[1.2rem] font-semibold leading-snug text-ink">
        {activity.prompt}
      </p>
      <div className="flex flex-col gap-2">
        {activity.choices.map((choice) => (
          <Button
            key={choice.id}
            type="button"
            variant={selectedId === choice.id ? "brand" : "quiet"}
            className={cn(
              "h-auto min-h-12 w-full justify-start whitespace-normal py-3 text-left",
            )}
            onClick={() => {
              onSelect(choice.id);
            }}
          >
            {choice.label}
          </Button>
        ))}
      </div>
      {selected ? (
        <p className="rounded-2xl bg-surface-elevated px-4 py-3 text-base leading-7 text-ink shadow-card ring-1 ring-line">
          {selected.note}
        </p>
      ) : (
        <p className="text-sm text-ink-muted">Tap one idea to look closer.</p>
      )}
    </div>
  );
}
