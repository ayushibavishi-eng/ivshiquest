"use client";

import { useMemo, useSyncExternalStore } from "react";
import { ButtonLink } from "@/components/ui/button";
import type { CurriculumWorld } from "@/domain/curriculum";
import { SUBJECT_LABELS, type Subject } from "@/domain/types";
import { studentLearnTopicHref } from "@/lib/constants";
import {
  EMPTY_CURRICULUM_PROGRESS,
  getAllCurriculumProgress,
  getWorldPathForGrade,
  subscribeCurriculumProgress,
} from "@/services/curriculum";

type CurriculumTreePanelProps = {
  worlds: CurriculumWorld[];
  grade: number;
};

const LABEL = {
  unvisited: "Waiting",
  started: "Growing",
  practiced: "Learned",
  mastered: "Mastered",
} as const;

function getEmptyProgress() {
  return EMPTY_CURRICULUM_PROGRESS;
}

const SUBJECT_ORDER: Subject[] = ["math", "science", "english"];

export function CurriculumTreePanel({
  worlds,
  grade,
}: CurriculumTreePanelProps) {
  const progress = useSyncExternalStore(
    subscribeCurriculumProgress,
    getAllCurriculumProgress,
    getEmptyProgress,
  );

  const bySubject = useMemo(() => {
    return SUBJECT_ORDER.map((subject) => ({
      subject,
      categories: groupByCategory(
        worlds.filter((world) => world.subjectId === subject),
      ),
    })).filter((group) => group.categories.length > 0);
  }, [worlds]);

  return (
    <div className="flex flex-col gap-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Knowledge Tree · Grade {grade}
        </p>
        <h1 className="mt-2 text-[1.85rem] font-semibold tracking-tight text-ink">
          Your learning worlds
        </h1>
        <p className="mt-2 max-w-prose text-base leading-7 text-ink-muted">
          Every place here uses the same curriculum IDs as Learn. Open a world,
          then follow its ideas.
        </p>
      </header>

      {bySubject.map((group) => (
        <section key={group.subject} className="flex flex-col gap-6">
          <h2 className="text-lg font-semibold tracking-tight text-ink">
            {SUBJECT_LABELS[group.subject]}
          </h2>
          {group.categories.map((category) => (
            <div key={`${group.subject}-${category.label}`} className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                {category.label}
              </h3>
              <ul className="flex flex-col gap-4">
                {category.worlds.map((world) => {
                  const concepts = getWorldPathForGrade(world, grade);
                  return (
                    <li
                      key={world.id}
                      className="rounded-[1.4rem] bg-surface-elevated px-4 py-4 shadow-card ring-1 ring-line"
                    >
                      <ButtonLink
                        href={studentLearnTopicHref(world.id)}
                        variant="quiet"
                        size="inline"
                        className="text-left font-semibold text-ink"
                      >
                        {world.title}
                      </ButtonLink>
                      <p className="mt-1 text-sm leading-6 text-ink-muted">
                        {world.hook}
                      </p>
                      {concepts.length > 0 ? (
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {concepts.map((concept) => {
                            const state = progress[concept.id] ?? "unvisited";
                            return (
                              <li key={concept.id}>
                                <ButtonLink
                                  href={studentLearnTopicHref(concept.id)}
                                  variant="quiet"
                                  size="inline"
                                  className="rounded-full px-3 py-1 text-xs font-medium text-ink"
                                >
                                  {concept.title}
                                  <span className="ml-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-teal">
                                    {LABEL[state]}
                                  </span>
                                </ButtonLink>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

function groupByCategory(worlds: CurriculumWorld[]) {
  const grouped = new Map<string, CurriculumWorld[]>();
  for (const world of worlds) {
    const label = world.category ?? "Worlds";
    const current = grouped.get(label) ?? [];
    current.push(world);
    grouped.set(label, current);
  }
  return [...grouped.entries()].map(([label, groupedWorlds]) => ({
    label,
    worlds: groupedWorlds,
  }));
}
