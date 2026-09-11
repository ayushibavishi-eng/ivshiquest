"use client";

import { cn } from "@/lib/cn";
import type { DiscoveryExplorationVisual } from "@/domain";

type ExplorationVisualProps = {
  prompt: string;
  captionAfterReveal: string;
  visual?: DiscoveryExplorationVisual;
  revealed: boolean;
  onReveal: () => void;
};

export function ExplorationVisual({
  prompt,
  captionAfterReveal,
  visual = "reveal",
  revealed,
  onReveal,
}: ExplorationVisualProps) {
  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={onReveal}
        aria-pressed={revealed}
        aria-label={revealed ? captionAfterReveal : prompt}
        className="rounded-[1.5rem] bg-surface-elevated p-4 shadow-card ring-1 ring-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        {visual === "wires" ? <WireScene revealed={revealed} /> : <RevealScene revealed={revealed} />}
        <p
          className={cn(
            "mt-2 text-center text-sm",
            revealed ? "text-ink" : "text-ink-muted",
          )}
        >
          {revealed ? captionAfterReveal : prompt}
        </p>
      </button>
    </div>
  );
}

function WireScene({ revealed }: { revealed: boolean }) {
  return (
    <svg
      viewBox="0 0 320 168"
      className="h-auto w-full"
      role="img"
      aria-hidden="true"
    >
      <rect x="28" y="52" width="14" height="96" rx="3" fill="var(--surface-muted)" />
      <rect x="278" y="52" width="14" height="96" rx="3" fill="var(--surface-muted)" />
      <rect x="22" y="144" width="26" height="8" rx="2" fill="var(--line)" />
      <rect x="272" y="144" width="26" height="8" rx="2" fill="var(--line)" />
      <path
        d="M35 64H285"
        stroke="var(--teal)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {revealed ? (
        <path
          d="M35 64H285"
          className="animate-current"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="7 11"
          fill="none"
        />
      ) : null}
      <ellipse cx="162" cy="52" rx="13" ry="9" fill="var(--ink)" />
      <path
        d="M148 54C152 48 158 46 164 48C160 52 154 54 148 54Z"
        fill="var(--ink)"
      />
      <circle cx="168" cy="50" r="2.2" fill="var(--ink)" />
      <path d="M158 61V64" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <path d="M166 61V64" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      {revealed ? (
        <path
          d="M158 48C158 40 166 36 166 48"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          opacity="0.35"
        />
      ) : null}
    </svg>
  );
}

function RevealScene({ revealed }: { revealed: boolean }) {
  return (
    <svg
      viewBox="0 0 320 168"
      className="h-auto w-full"
      role="img"
      aria-hidden="true"
    >
      <rect x="24" y="28" width="272" height="112" rx="18" fill="var(--surface-muted)" />
      <circle
        cx="160"
        cy="84"
        r={revealed ? 46 : 28}
        fill="none"
        stroke="var(--teal)"
        strokeWidth="3"
      />
      <circle
        cx="160"
        cy="84"
        r={revealed ? 22 : 10}
        fill={revealed ? "var(--accent)" : "var(--teal)"}
        opacity={revealed ? 0.85 : 0.55}
      />
      {revealed ? (
        <path
          d="M96 84H224"
          className="animate-current"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 10"
          fill="none"
        />
      ) : (
        <path
          d="M148 84H172"
          stroke="var(--ink)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
