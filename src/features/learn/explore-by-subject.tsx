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
  return (
    <LearnSection
      headingId="explore-subject-heading"
      title="Explore by subject"
      className="border-t border-line pt-8"
    >
      <p className="text-sm font-medium text-teal">{SUBJECT_LABELS[subject]}</p>
      <ul className="mt-1 divide-y divide-line">
        {areas.map((area) => (
          <li key={area.areaId}>
            <Link
              href={studentLearnBrowseHref(subject, area.areaId)}
              className="flex min-h-12 items-center justify-between gap-3 py-2 text-base font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              {area.title}
              <span aria-hidden="true" className="text-ink-muted">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </LearnSection>
  );
}
