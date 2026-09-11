"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type ExploreSceneProps = {
  conceptId: string;
  text: string;
  interacted: boolean;
  onInteract: () => void;
};

type TrySceneProps = {
  conceptId: string;
  prompt: string;
  note: string;
  revealed: boolean;
  onReveal: () => void;
};

export function ConceptExploreScene({
  conceptId,
  text,
  interacted,
  onInteract,
}: ExploreSceneProps) {
  if (conceptId === "weather-temperature") {
    return (
      <TemperatureExplore
        text={text}
        interacted={interacted}
        onInteract={onInteract}
      />
    );
  }

  if (conceptId === "weather-wind") {
    return (
      <WindExplore text={text} interacted={interacted} onInteract={onInteract} />
    );
  }

  if (conceptId === "weather-clouds") {
    return (
      <CloudsExplore
        text={text}
        interacted={interacted}
        onInteract={onInteract}
      />
    );
  }

  return <SimpleExplore text={text} />;
}

export function ConceptTryScene({
  conceptId,
  prompt,
  note,
  revealed,
  onReveal,
}: TrySceneProps) {
  if (conceptId === "weather-temperature") {
    return (
      <TwoChoiceTry
        prompt={prompt}
        note={note}
        revealed={revealed}
        onReveal={onReveal}
        left={{ label: "Dark pavement", hint: "hard and dark" }}
        right={{ label: "Cool grass", hint: "soft and green" }}
        better="left"
      />
    );
  }

  if (conceptId === "weather-wind") {
    return (
      <TwoChoiceTry
        prompt={prompt}
        note={note}
        revealed={revealed}
        onReveal={onReveal}
        left={{ label: "Air started moving", hint: "a breeze" }}
        right={{ label: "The sun vanished", hint: "night fell" }}
        better="left"
      />
    );
  }

  if (conceptId === "weather-clouds") {
    return (
      <TwoChoiceTry
        prompt={prompt}
        note={note}
        revealed={revealed}
        onReveal={onReveal}
        left={{ label: "Air is rising", hint: "heaped and bright" }}
        right={{ label: "A solid rock", hint: "too heavy to float" }}
        better="left"
      />
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[1.35rem] font-semibold leading-snug text-ink">{prompt}</p>
      {revealed ? (
        <p className="text-base leading-7 text-ink-muted">{note}</p>
      ) : (
        <Button onClick={onReveal} className="self-start">
          Compare with Ivshi
        </Button>
      )}
    </div>
  );
}

function TemperatureExplore({
  text,
  interacted,
  onInteract,
}: Omit<ExploreSceneProps, "conceptId">) {
  const [heat, setHeat] = useState(0);

  function shine() {
    setHeat((current) => Math.min(current + 1, 3));
    onInteract();
  }

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={shine}
        className="relative overflow-hidden rounded-[1.6rem] px-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#9fd0e0_0%,#f7e7c3_55%,#eadcc8_100%)]" />
        <span className="weather-sun-glow absolute right-6 top-3 h-16 w-16 rounded-full bg-[#fff3c4]" />
        <span className="relative flex justify-end">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffe08a] text-2xl shadow-[0_0_24px_#ffe08a]">
            ☀️
          </span>
        </span>
        <span className="relative mt-6 grid grid-cols-2 gap-3">
          <HeatSurface
            label="Metal slide"
            warmth={heat}
            tone="metal"
          />
          <HeatSurface
            label="Grass"
            warmth={Math.max(0, heat - 1)}
            tone="grass"
          />
        </span>
        <span className="relative mt-3 block text-sm font-medium text-ink/80">
          {interacted ? "Tap the sun again. Metal keeps warming faster." : "Tap the sun."}
        </span>
      </button>
      {interacted ? <ShortChunks text={text} /> : null}
    </div>
  );
}

function HeatSurface({
  label,
  warmth,
  tone,
}: {
  label: string;
  warmth: number;
  tone: "metal" | "grass";
}) {
  const metal = ["#c5d0d4", "#d8b49a", "#e0895a", "#c05632"];
  const grass = ["#7fa36a", "#8aab72", "#9bb56f", "#b7c46a"];
  const fill = tone === "metal" ? metal[warmth] : grass[warmth];

  return (
    <span className="block rounded-2xl px-3 py-4 text-center text-sm font-semibold text-ink shadow-card"
      style={{ background: fill }}
    >
      {label}
    </span>
  );
}

function WindExplore({
  text,
  interacted,
  onInteract,
}: Omit<ExploreSceneProps, "conceptId">) {
  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={onInteract}
        aria-pressed={interacted}
        className="overflow-hidden rounded-[1.6rem] bg-[linear-gradient(180deg,#b9dce8_0%,#e7f4f8_100%)] px-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        <svg viewBox="0 0 280 140" className="h-auto w-full" aria-hidden="true">
          <path
            d={interacted ? "M20 38 C 70 18, 120 48, 170 28" : "M20 42 C 70 42, 120 42, 170 42"}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="6 8"
            className={interacted ? "weather-breeze" : undefined}
            opacity="0.55"
          />
          <path
            d={interacted ? "M30 62 C 90 44, 140 72, 200 50" : "M30 62 C 90 62, 140 62, 200 62"}
            fill="none"
            stroke="var(--secondary)"
            strokeWidth="2"
            strokeDasharray="5 9"
            className={interacted ? "weather-breeze" : undefined}
            opacity="0.4"
          />
          <path
            d="M40 118 C 70 108, 110 122, 150 112 C 190 102, 230 118, 260 112 L 260 140 L 40 140 Z"
            fill="#7fa36a"
          />
          <g
            className={interacted ? "origin-[210px_70px] weather-kite" : undefined}
            style={interacted ? { transform: "translate(-8px,-18px)" } : undefined}
          >
            <path d="M210 70 L232 82 L210 108 L188 82 Z" fill="#c05632" />
            <path d="M210 108 L198 132" stroke="#14343d" strokeWidth="1.5" />
          </g>
        </svg>
        <span className="mt-2 block text-sm font-medium text-ink/80">
          {interacted ? "The kite climbs because air is pushing." : "Tap to stir the air."}
        </span>
      </button>
      {interacted ? <ShortChunks text={text} /> : null}
    </div>
  );
}

function CloudsExplore({
  text,
  interacted,
  onInteract,
}: Omit<ExploreSceneProps, "conceptId">) {
  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={onInteract}
        aria-pressed={interacted}
        className="overflow-hidden rounded-[1.6rem] bg-[linear-gradient(180deg,#8ec4d6_0%,#e7f4f8_70%,#eadcc8_100%)] px-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        <svg viewBox="0 0 280 150" className="h-auto w-full" aria-hidden="true">
          <circle cx="90" cy={interacted ? 58 : 118} r="4" fill="#fff" opacity="0.85" />
          <circle cx="108" cy={interacted ? 70 : 126} r="3" fill="#fff" opacity="0.7" />
          <circle cx="124" cy={interacted ? 52 : 120} r="3.5" fill="#fff" opacity="0.8" />
          <circle cx="140" cy={interacted ? 64 : 128} r="4" fill="#fff" opacity="0.75" />
          {interacted ? (
            <g fill="#f7fbfd">
              <ellipse cx="148" cy="46" rx="42" ry="20" />
              <ellipse cx="176" cy="42" rx="28" ry="16" />
              <ellipse cx="122" cy="48" rx="24" ry="14" />
            </g>
          ) : null}
        </svg>
        <span className="mt-2 block text-sm font-medium text-ink/80">
          {interacted
            ? "Tiny droplets gather. Together they look like a cloud."
            : "Tap to lift the humid air."}
        </span>
      </button>
      {interacted ? <ShortChunks text={text} /> : null}
    </div>
  );
}

function SimpleExplore({ text }: { text: string }) {
  return (
    <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,#cfeaf3_0%,#f7fbfd_100%)] px-4 py-5">
      <ShortChunks text={text} />
    </div>
  );
}

function TwoChoiceTry({
  prompt,
  note,
  revealed,
  onReveal,
  left,
  right,
  better,
}: {
  prompt: string;
  note: string;
  revealed: boolean;
  onReveal: () => void;
  left: { label: string; hint: string };
  right: { label: string; hint: string };
  better: "left" | "right";
}) {
  const [picked, setPicked] = useState<"left" | "right" | null>(null);

  function choose(side: "left" | "right") {
    setPicked(side);
    onReveal();
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[1.35rem] font-semibold leading-snug text-ink">{prompt}</p>
      <div className="grid grid-cols-2 gap-3">
        <GuessCard
          label={left.label}
          hint={left.hint}
          selected={picked === "left"}
          shown={revealed}
          matches={better === "left"}
          onChoose={() => choose("left")}
        />
        <GuessCard
          label={right.label}
          hint={right.hint}
          selected={picked === "right"}
          shown={revealed}
          matches={better === "right"}
          onChoose={() => choose("right")}
        />
      </div>
      {revealed ? (
        <p className="text-base leading-7 text-ink-muted">{note}</p>
      ) : null}
    </div>
  );
}

function GuessCard({
  label,
  hint,
  selected,
  shown,
  matches,
  onChoose,
}: {
  label: string;
  hint: string;
  selected: boolean;
  shown: boolean;
  matches: boolean;
  onChoose: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChoose}
      disabled={shown}
      className={cn(
        "min-h-28 rounded-[1.4rem] px-3 py-4 text-left shadow-card transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        selected ? "ring-2 ring-teal" : "ring-1 ring-white/60",
        shown && matches ? "bg-teal/15" : "bg-surface-elevated/80",
      )}
    >
      <span className="block text-base font-semibold text-ink">{label}</span>
      <span className="mt-1 block text-sm text-ink-muted">{hint}</span>
    </button>
  );
}

export function ShortChunks({ text }: { text: string }) {
  const parts = text.split(/(?<=\.)\s+/).filter(Boolean);

  return (
    <div className="flex flex-col gap-3">
      {parts.map((part) => (
        <p key={part} className="text-[1.05rem] leading-7 text-ink">
          {part}
        </p>
      ))}
    </div>
  );
}
