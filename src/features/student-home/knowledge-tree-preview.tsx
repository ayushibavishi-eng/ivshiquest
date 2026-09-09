import { ButtonLink } from "@/components/ui/button";
import type { KnowledgeTreeSummary } from "@/domain";
import { ROUTES } from "@/lib/constants";

type KnowledgeTreePreviewProps = {
  summary: KnowledgeTreeSummary;
};

export function KnowledgeTreePreview({ summary }: KnowledgeTreePreviewProps) {
  const max = Math.max(summary.growing, summary.learned, summary.mastered, 1);
  const stats = [
    { label: "Growing", value: summary.growing, tone: "bg-teal/35" },
    { label: "Learned", value: summary.learned, tone: "bg-teal/60" },
    { label: "Mastered", value: summary.mastered, tone: "bg-teal" },
  ];

  return (
    <section
      aria-labelledby="tree-heading"
      className="flex flex-col gap-3 border-t border-line pt-8"
    >
      <h2
        id="tree-heading"
        className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted"
      >
        Your Knowledge Tree
      </h2>
      <div className="flex items-end justify-between gap-6">
        <ul className="flex flex-1 gap-6">
          {stats.map((stat) => (
            <li key={stat.label} className="flex flex-col gap-2">
              <p className="text-2xl font-semibold tabular-nums tracking-tight text-ink">
                {stat.value}
              </p>
              <p className="text-sm text-ink-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
        <div
          className="flex h-16 items-end gap-1.5"
          aria-hidden="true"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`w-2 rounded-full ${stat.tone}`}
              style={{ height: `${Math.max((stat.value / max) * 100, 12)}%` }}
            />
          ))}
        </div>
      </div>
      <ButtonLink
        href={ROUTES.student.tree}
        variant="quiet"
        size="inline"
        className="self-start"
      >
        Explore my tree →
      </ButtonLink>
    </section>
  );
}
