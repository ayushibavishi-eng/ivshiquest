import { ButtonLink } from "@/components/ui/button";
import type { StrengthenArea } from "@/domain";
import { studentLearnPracticeHref } from "@/lib/constants";
import { LearnSection } from "@/features/learn/learn-section";

type StrengthenThisProps = {
  area: StrengthenArea;
};

export function StrengthenThis({ area }: StrengthenThisProps) {
  return (
    <LearnSection
      headingId="strengthen-heading"
      title="Strengthen This"
      className="border-t border-line pt-8"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-ink">
            {area.title}
          </h3>
          <p className="mt-1 max-w-prose text-base leading-6 text-ink-muted">
            {area.message}
          </p>
          <p className="mt-2 text-sm text-ink-muted">{area.attentionLabel}</p>
        </div>
        <ButtonLink
          href={studentLearnPracticeHref(area.areaId)}
          variant="quiet"
          size="inline"
          className="self-start sm:self-auto"
        >
          Practice →
        </ButtonLink>
      </div>
    </LearnSection>
  );
}
