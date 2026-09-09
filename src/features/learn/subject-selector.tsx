import { SUBJECT_LABELS, type Subject } from "@/domain";
import { cn } from "@/lib/cn";

type SubjectSelectorProps = {
  subjects: Subject[];
  selected: Subject;
  onSelect: (subject: Subject) => void;
};

export function SubjectSelector({
  subjects,
  selected,
  onSelect,
}: SubjectSelectorProps) {
  return (
    <div
      role="group"
      aria-label="Choose a subject"
      className="flex flex-wrap gap-2"
    >
      {subjects.map((subject) => {
        const isSelected = subject === selected;

        return (
          <button
            key={subject}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(subject)}
            className={cn(
              "min-h-11 rounded-full px-5 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
              isSelected
                ? "bg-teal text-canvas ring-2 ring-teal-deep"
                : "bg-surface-elevated text-ink-muted ring-1 ring-line hover:text-ink",
            )}
          >
            {SUBJECT_LABELS[subject]}
            {isSelected ? (
              <span className="sr-only">, selected</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
