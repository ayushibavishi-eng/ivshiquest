import type { DiscoveryPhase } from "@/domain";
import { DISCOVERY_PHASE_LABELS, DISCOVERY_PHASES } from "@/domain";
import { cn } from "@/lib/cn";

type DiscoveryProgressProps = {
  current: DiscoveryPhase;
};

export function DiscoveryProgress({ current }: DiscoveryProgressProps) {
  const currentIndex = DISCOVERY_PHASES.indexOf(current);

  return (
    <ol
      aria-label="Discovery journey"
      className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold tracking-wide"
    >
      {DISCOVERY_PHASES.map((phase, index) => {
        const isCurrent = phase === current;
        const isPast = index < currentIndex;

        return (
          <li key={phase} className="flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden="true" className="text-line">
                →
              </span>
            ) : null}
            <span
              className={cn(
                isCurrent && "text-teal",
                isPast && "text-ink",
                !isCurrent && !isPast && "text-ink-muted",
              )}
              aria-current={isCurrent ? "step" : undefined}
            >
              {DISCOVERY_PHASE_LABELS[phase]}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
