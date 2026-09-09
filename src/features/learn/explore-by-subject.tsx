import Link from "next/link";
import type { Subject, SubjectArea } from "@/domain";
import { SUBJECT_LABELS } from "@/domain";
import { studentLearnBrowseHref } from "@/lib/constants";
import { LearnSection } from "@/features/learn/learn-section";

type ExploreBySubjectProps = {
  subject: Subject;
  areas: SubjectArea[];
};

export function ExploreBySubject({ subject, areas }: ExploreBySubjectProps) {
  const groups = groupAreas(areas);

  return (
    <LearnSection
      headingId="explore-subject-heading"
      title="Explore by subject"
      className="border-t border-line pt-8"
    >
      <p className="text-sm font-medium text-teal">{SUBJECT_LABELS[subject]}</p>
      <p className="mt-1 text-sm leading-6 text-ink-muted">
        Every learning world for your grade lives here — tap one to walk its
        ideas.
      </p>
      <div className="mt-5 flex flex-col gap-7">
        {groups.map((group) => (
          <section key={group.label} className="flex flex-col gap-3">
            {group.label !== "Worlds" ? (
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                {group.label}
              </h3>
            ) : null}
            <ul className="flex flex-wrap gap-2">
              {group.areas.map((area) => (
                <li key={area.areaId}>
                  <Link
                    href={studentLearnBrowseHref(subject, area.areaId)}
                    className="inline-flex min-h-11 items-center rounded-full bg-surface-elevated px-4 py-2 text-sm font-semibold text-ink shadow-card ring-1 ring-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </LearnSection>
  );
}

function groupAreas(areas: SubjectArea[]) {
  const grouped = new Map<string, SubjectArea[]>();
  for (const area of areas) {
    const label = area.group ?? "Worlds";
    const current = grouped.get(label) ?? [];
    current.push(area);
    grouped.set(label, current);
  }
  return [...grouped.entries()].map(([label, groupedAreas]) => ({
    label,
    areas: groupedAreas,
  }));
}
