"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { IvshiButterfly } from "@/components/ivshi/IvshiButterfly";
import { ROUTES } from "@/lib/constants";

const FLYER_WIDTH = 96;
const FLYER_HEIGHT = 97;
const LEG_MS = 5200;
const PAUSE_MS = 2200;

type Point = { x: number; y: number };

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function easeInOut(t: number) {
  return t * t * (3 - 2 * t);
}

function lerp(from: number, to: number, t: number) {
  return from + (to - from) * t;
}

function safePoints(): Point[] {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const contentWidth = Math.min(672, vw);
  const columnLeft = (vw - contentWidth) / 2;
  const gutterRight = Math.max(16, columnLeft - FLYER_WIDTH - 24);
  const maxY = Math.max(24, vh - FLYER_HEIGHT - 176);
  const minY = 24;

  if (gutterRight >= 24) {
    const midX = Math.min(gutterRight, Math.max(24, gutterRight * 0.45));
    const farX = Math.min(gutterRight, Math.max(28, gutterRight * 0.85));
    return [
      { x: 24, y: Math.min(maxY, 96) },
      { x: farX, y: Math.min(maxY, Math.max(minY, vh * 0.28)) },
      { x: 28, y: Math.min(maxY, Math.max(minY, vh * 0.52)) },
      { x: midX, y: Math.min(maxY, Math.max(minY, vh * 0.38)) },
    ];
  }

  return [
    { x: 12, y: Math.min(maxY, 72) },
    { x: 12, y: Math.min(maxY, 140) },
    { x: 12, y: Math.min(maxY, 210) },
    { x: 12, y: Math.min(maxY, 110) },
  ];
}

export function IvshiCompanionLayer() {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) {
      return;
    }

    const points = safePoints();
    const start = points[0];
    wrap.style.left = `${Math.round(start.x)}px`;
    wrap.style.top = `${Math.round(start.y)}px`;

    if (prefersReducedMotion()) {
      return;
    }

    let fromIndex = 0;
    let toIndex = 1;
    let phase: "move" | "pause" = "move";
    let phaseStart = performance.now();
    let frame = 0;

    function apply(x: number, y: number) {
      if (!wrapRef.current) {
        return;
      }
      wrapRef.current.style.left = `${Math.round(x)}px`;
      wrapRef.current.style.top = `${Math.round(y)}px`;
    }

    function frameLoop(now: number) {
      const from = points[fromIndex];
      const to = points[toIndex];

      if (phase === "pause") {
        apply(from.x, from.y);
        if (now - phaseStart >= PAUSE_MS) {
          phase = "move";
          phaseStart = now;
        }
      } else {
        const t = easeInOut(Math.min(1, (now - phaseStart) / LEG_MS));
        apply(lerp(from.x, to.x, t), lerp(from.y, to.y, t));

        if (t >= 1) {
          fromIndex = toIndex;
          toIndex = (toIndex + 1) % points.length;
          if (fromIndex === points.length - 1) {
            phase = "pause";
          }
          phaseStart = now;
        }
      }

      frame = window.requestAnimationFrame(frameLoop);
    }

    frame = window.requestAnimationFrame(frameLoop);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  const href =
    pathname === ROUTES.student.ask
      ? `${ROUTES.student.ask}#ask-ivshi-input`
      : ROUTES.student.ask;

  return (
    <div className="pointer-events-none fixed inset-0 z-[25]">
      <div
        ref={wrapRef}
        className="absolute"
        style={{
          left: 24,
          top: 96,
          width: FLYER_WIDTH,
          transition: "none",
        }}
      >
        <Link
          href={href}
          aria-label="Talk with Ivshi"
          data-ivshi-flyer=""
          className="pointer-events-auto block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          <IvshiButterfly size={FLYER_WIDTH} decorative />
        </Link>
      </div>
    </div>
  );
}
