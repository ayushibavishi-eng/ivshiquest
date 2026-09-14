"use client";

import { useId, useState } from "react";
import { IvshiCompanion, IvshiMark } from "@/components/companion";
import { Button } from "@/components/ui/button";
import type { OpenResponseEvaluation } from "@/domain/complete-lesson";
import type { LessonVideoExplanation } from "@/domain/lesson-video";
import {
  formatLessonVideoDuration,
  resolveLessonVideoPlayback,
} from "@/domain/lesson-video";
import { OpenResponseNote } from "@/features/lesson/open-response-note";
import { WritePhase } from "@/features/lesson/phases/write-phase";
import { cn } from "@/lib/cn";

type VideoExplanationProps = {
  video: LessonVideoExplanation;
  grade: number;
  reflectionValue: string;
  reflectionEvaluation: OpenResponseEvaluation;
  onReflectionChange: (value: string) => void;
};

export function VideoExplanation({
  video,
  grade,
  reflectionValue,
  reflectionEvaluation,
  onReflectionChange,
}: VideoExplanationProps) {
  const titleId = useId();
  const playback = resolveLessonVideoPlayback(video);
  const [started, setStarted] = useState(false);
  const [showReflection, setShowReflection] = useState(false);
  const durationLabel = formatLessonVideoDuration(video.durationSeconds);
  const sourceLabel =
    video.source.kind === "ivshi"
      ? "IvshiQuest video"
      : video.source.kind === "hosted"
        ? "IvshiQuest hosted video"
        : "Approved learning video";

  function openPlayer() {
    setStarted(true);
  }

  function revealReflection() {
    setShowReflection(true);
  }

  return (
    <section
      className="flex flex-col gap-4 rounded-[1.6rem] bg-[linear-gradient(165deg,#e7f4f8_0%,#fffaf2_55%,#f7fbfd_100%)] px-4 py-5 shadow-card ring-1 ring-line"
      aria-labelledby={titleId}
      data-video-explanation={video.id}
      data-video-source-kind={video.source.kind}
      data-video-playback={playback.mode}
    >
      <div className="flex items-start gap-3">
        <IvshiMark
          state="curious"
          size={24}
          decorative
          className="mt-0.5 shrink-0 text-teal"
        />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
            Video explanation
          </p>
          <h2
            id={titleId}
            className="mt-1 text-[1.2rem] font-semibold leading-snug text-ink"
          >
            {video.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-ink-muted">
            {video.description}
          </p>
          <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-ink-muted">
            <span>{durationLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{sourceLabel}</span>
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.25rem] bg-ink/90 ring-1 ring-ink/10">
        {!started ? (
          <button
            type="button"
            onClick={openPlayer}
            className="group relative flex aspect-video w-full items-center justify-center overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            aria-label={`Play video explanation: ${video.title}`}
          >
            {video.posterUrl ? (
              // Poster may be first-party or approved external; keep native img for arbitrary hosts.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={video.posterUrl}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
              />
            ) : (
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#5aa7b8_0%,#0e4450_70%)]"
              />
            )}
            <span className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-canvas/95 text-teal shadow-[0_10px_24px_rgb(14_68_80_/_0.28)] transition-transform group-hover:scale-105">
                <PlayIcon />
              </span>
              <span className="rounded-full bg-canvas/90 px-3 py-1 text-sm font-semibold text-ink">
                Watch with Ivshi · {durationLabel}
              </span>
            </span>
          </button>
        ) : null}

        {started && playback.mode === "native" ? (
          <video
            className="aspect-video w-full bg-ink"
            controls
            playsInline
            poster={video.posterUrl}
            aria-label={video.title}
            onPlay={revealReflection}
            onEnded={revealReflection}
          >
            <source src={playback.src} />
            {video.accessibility.captionsUrl ? (
              <track
                kind="captions"
                src={video.accessibility.captionsUrl}
                srcLang="en"
                label="Captions"
                default
              />
            ) : null}
          </video>
        ) : null}

        {started && playback.mode === "embed" ? (
          <div className="relative aspect-video w-full">
            <iframe
              title={video.title}
              src={playback.src}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={revealReflection}
            />
          </div>
        ) : null}

        {started && playback.mode === "pending" ? (
          <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_30%,#5aa7b8_0%,#0e4450_70%)] px-6 text-center">
            <IvshiCompanion
              state="helping"
              size={22}
              label="This IvshiQuest video is reserved for this idea. The explanation text above still counts while the clip is prepared."
              className="max-w-md text-sm leading-6 text-canvas"
            />
            <Button type="button" variant="quiet" onClick={revealReflection}>
              Check with Ivshi
            </Button>
          </div>
        ) : null}
      </div>

      {started && playback.mode !== "pending" && !showReflection ? (
        <Button type="button" variant="quiet" onClick={revealReflection}>
          I watched this — check with Ivshi
        </Button>
      ) : null}

      {(video.accessibility.transcript || video.accessibility.notes) && (
        <details className="rounded-[1.1rem] bg-canvas/70 px-4 py-3 ring-1 ring-line">
          <summary className="cursor-pointer text-sm font-semibold text-teal">
            Accessibility · transcript and notes
          </summary>
          {video.accessibility.notes ? (
            <p className="mt-2 text-sm leading-6 text-ink-muted">
              {video.accessibility.notes}
            </p>
          ) : null}
          {video.accessibility.transcript ? (
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-ink">
              {video.accessibility.transcript}
            </p>
          ) : null}
        </details>
      )}

      {showReflection ? (
        <div
          className={cn("flex flex-col gap-4 border-t border-line/70 pt-4")}
          data-video-reflection="open"
        >
          <IvshiCompanion
            state="curious"
            size={20}
            label={
              video.reflection.companionLabel ??
              "Quick check — what stuck from the video?"
            }
            className="text-sm leading-6 text-ink-muted"
          />
          <WritePhase
            prompt={video.reflection.prompt}
            value={reflectionValue}
            onChange={onReflectionChange}
            placeholder="A sentence or two is enough."
          />
          <OpenResponseNote evaluation={reflectionEvaluation} grade={grade} />
        </div>
      ) : null}
    </section>
  );
}

function PlayIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8.5 6.8v10.4c0 .7.8 1.1 1.4.7l8.1-5.2c.5-.4.5-1.1 0-1.4L9.9 6.1c-.6-.4-1.4 0-1.4.7Z" />
    </svg>
  );
}
