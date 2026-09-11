import Link from "next/link";
import type {
  CurriculumConcept,
  CurriculumProgressState,
  CurriculumTopic,
} from "@/domain/curriculum";
import { studentLearnTopicHref } from "@/lib/constants";
import { cn } from "@/lib/cn";
import type { CurriculumProgressMap } from "@/services/curriculum";

const ISLAND_CLASSES = [
  "bg-[linear-gradient(160deg,#fffaf2_0%,#cfe8f2_100%)] text-ink",
  "bg-[linear-gradient(160deg,#e7f7fb_0%,#7eb8c9_100%)] text-ink",
  "bg-[linear-gradient(160deg,#fff4d6_0%,#f3b184_100%)] text-ink",
  "bg-[linear-gradient(160deg,#d9f0ea_0%,#7eb8a8_100%)] text-ink",
  "bg-[linear-gradient(160deg,#f6efe3_0%,#c4a882_100%)] text-ink",
  "bg-[linear-gradient(160deg,#d7eef6_0%,#4f8fa3_100%)] text-canvas",
] as const;

type PathItem = {
  id: string;
  title: string;
  hook: string;
};

type WorldPathMapProps = {
  items: PathItem[];
  progress: CurriculumProgressMap;
};

export function islandClassForId(id: string) {
  let hash = 0;
  for (const char of id) {
    hash = (hash + char.charCodeAt(0)) % ISLAND_CLASSES.length;
  }
  return ISLAND_CLASSES[hash] ?? ISLAND_CLASSES[0];
}

export function WorldPathMap({ items, progress }: WorldPathMapProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      {items.length > 2 ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 100 640"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-y-6 left-1/2 h-[78%] w-24 -translate-x-1/2"
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
      ) : null}

      <ol className="relative flex flex-col gap-2 sm:gap-3">
        {items.map((item, index) => {
          const state = progress[item.id] ?? "unvisited";
          return (
            <li
              key={item.id}
              className={cn(
                "flex",
                index % 2 === 0 ? "justify-start pr-[18%]" : "justify-end pl-[18%]",
              )}
            >
              <PathIsland item={item} state={state} featured={index === 0} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function PathIsland({
  item,
  state,
  featured,
}: {
  item: PathItem;
  state: CurriculumProgressState;
  featured: boolean;
}) {
  const size = featured
    ? "h-[5.35rem] w-[5.35rem] text-lg"
    : "h-[4.7rem] w-[4.7rem] text-base";
  const mark = item.title
    .replace(/[^A-Za-z0-9]/g, "")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Link
      href={studentLearnTopicHref(item.id)}
      aria-label={`${item.title}. ${item.hook}`}
      className="group flex w-[7.6rem] flex-col items-center gap-2 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:w-[8.4rem]"
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex items-center justify-center rounded-full font-semibold shadow-[0_16px_30px_rgb(14_68_80_/_0.16)] transition-transform duration-300 group-hover:-translate-y-1",
          size,
          islandClassForId(item.id),
          state === "mastered"
            ? "ring-2 ring-teal ring-offset-2 ring-offset-transparent"
            : state === "started" || state === "practiced"
              ? "ring-2 ring-teal/35"
              : "ring-1 ring-white/50",
        )}
      >
        {mark}
      </span>
      <span className="text-center text-sm font-semibold leading-snug tracking-tight text-ink">
        {item.title}
      </span>
    </Link>
  );
}

export function conceptsToPathItems(concepts: CurriculumConcept[]): PathItem[] {
  return concepts.map((concept) => ({
    id: concept.id,
    title: concept.title,
    hook: concept.hook,
  }));
}

export function topicsToPathItems(topics: CurriculumTopic[]): PathItem[] {
  return topics.map((topic) => ({
    id: topic.id,
    title: topic.title,
    hook: topic.hook,
  }));
}
