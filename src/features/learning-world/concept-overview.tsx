"use client";

import { useEffect } from "react";
import { IvshiCompanion } from "@/components/companion";
import { ButtonLink } from "@/components/ui/button";
import type { CurriculumConcept, CurriculumSkill } from "@/domain/curriculum";
import { islandClassForId } from "@/features/learning-world/world-path-map";
import { studentLearnTopicHref } from "@/lib/constants";
import { cn } from "@/lib/cn";
import {
  raiseCurriculumProgress,
  writeActiveCurriculumTopic,
} from "@/services/curriculum";

type ConceptOverviewProps = {
  concept: CurriculumConcept;
  worldTitle: string;
  worldId: string;
  nextConcept?: { id: string; title: string };
};

export function ConceptOverview({
  concept,
  worldTitle,
  worldId,
  nextConcept,
}: ConceptOverviewProps) {
  useEffect(() => {
    writeActiveCurriculumTopic(concept.id);
    raiseCurriculumProgress(concept.id, "started");
  }, [concept.id]);

  const mark = concept.title
    .replace(/[^A-Za-z0-9]/g, "")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-1 flex-col gap-6 pb-8">
      <header className="flex items-center gap-4">
        <span
          aria-hidden="true"
          className={cn(
            "flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-semibold shadow-[0_12px_24px_rgb(14_68_80_/_0.14)]",
            islandClassForId(concept.id),
          )}
        >
          {mark}
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {worldTitle}
          </p>
          <h1 className="mt-1 text-[1.7rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
            {concept.title}
          </h1>
        </div>
      </header>

      <section className="rounded-[1.6rem] bg-[linear-gradient(160deg,#e7f4f8_0%,#fffaf2_100%)] px-4 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
          Wonder
        </p>
        <p className="mt-2 text-[1.35rem] font-semibold leading-snug text-ink">
          {concept.hook}
        </p>
      </section>

      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
          Understand
        </p>
        <p className="mt-2 text-base leading-7 text-ink">{concept.explainer}</p>
        <p className="mt-3 text-base leading-7 text-ink-muted">{concept.goal}</p>
      </section>

      <SkillList skills={concept.skills} />

      <p className="text-sm text-ink-muted">
        For grades {concept.grades.join(", ")}.
      </p>

      <IvshiCompanion
        state="curious"
        size={22}
        label="A fuller journey with try, practice, and mastery will grow here. The idea above is already real learning, not a placeholder."
        className="text-base text-ink"
      />

      <div className="flex flex-wrap gap-3">
        {nextConcept ? (
          <ButtonLink href={studentLearnTopicHref(nextConcept.id)}>
            Next: {nextConcept.title} →
          </ButtonLink>
        ) : null}
        <ButtonLink href={studentLearnTopicHref(worldId)} variant="quiet">
          Back to {worldTitle}
        </ButtonLink>
      </div>
    </div>
  );
}

function SkillList({ skills }: { skills: CurriculumSkill[] }) {
  if (skills.length === 0) {
    return null;
  }

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
        Skills
      </p>
      <ul className="mt-2 flex flex-col gap-2">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="rounded-2xl bg-surface-elevated px-4 py-3 text-base font-medium text-ink shadow-card ring-1 ring-line"
          >
            {skill.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
