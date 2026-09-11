"use client";

import { ButtonLink } from "@/components/ui/button";
import type { CurriculumProgressState } from "@/domain/curriculum";
import { ROUTES } from "@/lib/constants";

export function GrowPhase({
  title,
  progress,
}: {
  title: string;
  progress: CurriculumProgressState;
}) {
  const mastered = progress === "mastered";

  return (
    <div className="flex flex-col gap-4 rounded-[1.6rem] bg-[linear-gradient(160deg,#e7f4f8_0%,#fff6e8_100%)] px-4 py-5 ring-1 ring-[#8a5a3c]/20">
      <div className="flex items-start gap-3">
        <GrowthGlyph mastered={mastered} />
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-teal">
            Grow
          </p>
          <p className="mt-1 text-[1.35rem] font-semibold leading-snug text-ink">
            {mastered
              ? `${title} has blossomed on your Knowledge Tree.`
              : `${title} is still growing on your Knowledge Tree.`}
          </p>
          <p className="mt-2 text-sm leading-6 text-ink-muted">
            {mastered
              ? "The concept changed state because you can explain it — not because a scoreboard said so."
              : "Keep going. Teaching it next will help this idea take root."}
          </p>
        </div>
      </div>
      <ButtonLink
        href={ROUTES.student.tree}
        variant="quiet"
        size="inline"
        className="self-start"
      >
        See it on the Knowledge Tree
      </ButtonLink>
    </div>
  );
}

function GrowthGlyph({ mastered }: { mastered: boolean }) {
  return (
    <svg
      width="36"
      height="40"
      viewBox="-8 -10 16 20"
      aria-hidden="true"
      className="mt-1 shrink-0"
    >
      {mastered ? (
        <g>
          <circle cx="0" cy="0" r="8.5" fill="#fff6e0" opacity="0.5" />
          <ellipse
            cx="0"
            cy="1.8"
            rx="4.6"
            ry="5.4"
            fill="#c05632"
            stroke="#3a2418"
            strokeWidth="0.8"
          />
          <ellipse cx="0" cy="1.2" rx="2.8" ry="3.4" fill="#db7a4e" />
        </g>
      ) : (
        <g>
          <path
            d="M-7 3 C-6 -2 -2 -6 0 -1 C2 -6 6 -2 7 3"
            fill="#7eab7c"
            stroke="#3a2418"
            strokeWidth="0.8"
          />
          <path d="M-3.5 -1 C-4 -6 0 -9 0 -2 Z" fill="#e7b7c8" />
          <path d="M3.5 -1 C4 -6 0 -9 0 -2 Z" fill="#f0c9d4" />
          <circle cx="0" cy="-0.4" r="1.5" fill="#f7e7c6" />
        </g>
      )}
    </svg>
  );
}
