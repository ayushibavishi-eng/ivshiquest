import { ButtonLink } from "@/components/ui/button";
import type { ActiveQuest } from "@/domain";
import { ROUTES } from "@/lib/constants";

type QuestCardProps = {
  quest: ActiveQuest | null;
};

export function QuestCard({ quest }: QuestCardProps) {
  if (!quest) {
    return (
      <section aria-labelledby="quest-heading" className="flex flex-col gap-3">
        <h2
          id="quest-heading"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted"
        >
          Your Quest
        </h2>
        <div className="rounded-[1.5rem] bg-surface-elevated px-5 py-5 shadow-card ring-1 ring-line">
          <h3 className="text-xl font-semibold tracking-tight text-ink">
            Ready for a new challenge?
          </h3>
          <p className="mt-2 text-base leading-6 text-ink-muted">
            Let&apos;s find something worth discovering.
          </p>
          <ButtonLink href={ROUTES.student.quest} className="mt-5">
            Start a Quest
          </ButtonLink>
        </div>
      </section>
    );
  }

  const progressPercent = Math.round(
    (quest.completedChallenges / quest.totalChallenges) * 100,
  );

  return (
    <section aria-labelledby="quest-heading" className="flex flex-col gap-3">
      <h2
        id="quest-heading"
        className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted"
      >
        Your Quest
      </h2>
      <div className="rounded-[1.5rem] bg-surface-elevated px-5 py-5 shadow-card ring-1 ring-line">
        <h3 className="text-xl font-semibold tracking-tight text-ink">
          {quest.title}
        </h3>
        <p className="mt-2 text-base text-ink-muted">
          {quest.completedChallenges} of {quest.totalChallenges} challenges
          completed
        </p>
        <div
          className="mt-4 h-2 overflow-hidden rounded-full bg-surface-muted"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progressPercent}
          aria-label="Quest progress"
        >
          <div
            className="h-full rounded-full bg-teal"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <ButtonLink
          href={ROUTES.student.quest}
          variant="quiet"
          size="inline"
          className="mt-4"
        >
          Continue →
        </ButtonLink>
      </div>
    </section>
  );
}
