import Link from "next/link";
import type { CurriculumConcept, CurriculumProgressState } from "@/domain/curriculum";
import {
  weatherIslandClass,
  weatherMark,
} from "@/features/learning-world/weather-marks";
import { studentLearnTopicHref } from "@/lib/constants";
import { cn } from "@/lib/cn";
import type { CurriculumProgressMap } from "@/services/curriculum";

type WeatherPathMapProps = {
  concepts: CurriculumConcept[];
  progress: CurriculumProgressMap;
};

const SKY_PATH_IDS = [
  "weather-what-is-weather",
  "weather-temperature",
  "weather-wind",
  "weather-humidity",
  "weather-clouds",
  "weather-rain",
  "weather-storms",
  "weather-patterns",
  "weather-vs-climate",
] as const;

const FURTHER_IDS = [
  "weather-experiments",
  "weather-explain",
  "weather-mastery",
] as const;

function nodeById(concepts: CurriculumConcept[], id: string) {
  return concepts.find((concept) => concept.id === id);
}

export function WeatherPathMap({ concepts, progress }: WeatherPathMapProps) {
  const skyPath = SKY_PATH_IDS.map((id) => nodeById(concepts, id)).filter(
    (concept): concept is CurriculumConcept => Boolean(concept),
  );
  const further = FURTHER_IDS.map((id) => nodeById(concepts, id)).filter(
    (concept): concept is CurriculumConcept => Boolean(concept),
  );

  return (
    <div className="relative">
      <svg
        aria-hidden="true"
        viewBox="0 0 100 640"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-y-6 left-1/2 h-[72%] w-24 -translate-x-1/2"
      >
        <path
          d="M50 8 C 18 70, 82 110, 50 170 C 16 230, 84 280, 50 340 C 20 400, 80 450, 50 510 C 30 560, 70 600, 50 632"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.28"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>

      <ol className="relative flex flex-col gap-2 sm:gap-3">
        {skyPath.map((concept, index) => {
          const state = progress[concept.id] ?? "unvisited";
          return (
            <li
              key={concept.id}
              className={cn(
                "flex",
                index % 2 === 0 ? "justify-start pr-[18%]" : "justify-end pl-[18%]",
              )}
            >
              <WeatherIsland concept={concept} state={state} featured={index === 0} />
            </li>
          );
        })}
      </ol>

      {further.length > 0 ? (
        <ul className="relative mt-10 flex items-end justify-center gap-5 sm:gap-8">
          {further.map((concept, index) => {
            const state = progress[concept.id] ?? "unvisited";
            return (
              <li
                key={concept.id}
                className={cn(index === 1 ? "-translate-y-3" : "translate-y-2")}
              >
                <WeatherIsland concept={concept} state={state} compact />
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function WeatherIsland({
  concept,
  state,
  featured = false,
  compact = false,
}: {
  concept: CurriculumConcept;
  state: CurriculumProgressState;
  featured?: boolean;
  compact?: boolean;
}) {
  const size = featured
    ? "h-[5.35rem] w-[5.35rem] text-3xl"
    : compact
      ? "h-[4.1rem] w-[4.1rem] text-xl"
      : "h-[4.7rem] w-[4.7rem] text-2xl";

  return (
    <Link
      href={studentLearnTopicHref(concept.id)}
      aria-label={`${concept.title}. ${concept.hook}`}
      className="group flex w-[7.6rem] flex-col items-center gap-2 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:w-[8.4rem]"
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex items-center justify-center rounded-full shadow-[0_16px_30px_rgb(14_68_80_/_0.16)] transition-transform duration-300 group-hover:-translate-y-1",
          size,
          weatherIslandClass(concept.id),
          state === "mastered"
            ? "ring-2 ring-teal ring-offset-2 ring-offset-transparent"
            : state === "started" || state === "practiced"
              ? "ring-2 ring-teal/35"
              : "ring-1 ring-white/50",
        )}
      >
        {weatherMark(concept.id)}
      </span>
      <span className="text-center text-sm font-semibold leading-snug tracking-tight text-ink">
        {concept.title}
      </span>
    </Link>
  );
}
