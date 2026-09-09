"use client";

import { useSyncExternalStore } from "react";
import { ButtonLink } from "@/components/ui/button";
import type { CurriculumWorld } from "@/domain/curriculum";
import { studentLearnTopicHref } from "@/lib/constants";
import {
  EMPTY_CURRICULUM_PROGRESS,
  getAllCurriculumProgress,
  subscribeCurriculumProgress,
} from "@/services/curriculum";

type WeatherTreePanelProps = {
  world: CurriculumWorld;
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

export function WeatherTreePanel({ world }: WeatherTreePanelProps) {
  const progress = useSyncExternalStore(
    subscribeCurriculumProgress,
    getAllCurriculumProgress,
    getEmptyProgress,
  );

  return (
    <section className="flex flex-col gap-5">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Knowledge Tree · Science
        </p>
        <h1 className="mt-2 text-[1.85rem] font-semibold tracking-tight text-ink">
          {world.title}
        </h1>
        <p className="mt-2 max-w-prose text-base leading-7 text-ink-muted">
          {world.hook} Each node is a place you can visit in Weather World.
        </p>
      </header>
      <ul className="flex flex-col gap-2">
        {world.concepts.map((concept) => {
          const state = progress[concept.id] ?? "unvisited";
          return (
            <li key={concept.id}>
              <ButtonLink
                href={studentLearnTopicHref(concept.id)}
                variant="quiet"
                size="inline"
                className="flex w-full items-center justify-between gap-3 rounded-2xl bg-surface-elevated px-4 py-3 text-left font-medium text-ink shadow-card ring-1 ring-line hover:text-teal-deep"
              >
                <span>{concept.title}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                  {LABEL[state]}
                </span>
              </ButtonLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
