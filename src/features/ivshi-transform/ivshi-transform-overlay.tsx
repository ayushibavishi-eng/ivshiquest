"use client";

import { useEffect, useState } from "react";
import {
  IVSHI_BUTTERFLY_HEIGHT,
  IVSHI_BUTTERFLY_SRC,
  IVSHI_BUTTERFLY_WIDTH,
} from "@/components/ivshi/IvshiButterfly";
import "./ivshi-transform.css";

/** Cinematic story with read-pauses at each beat (~52s). */
const FULL_DURATION_MS = 52_000;
const REDUCED_DURATION_MS = 5_200;

const IVSHI_W = 140;
const IVSHI_H = (IVSHI_W * IVSHI_BUTTERFLY_HEIGHT) / IVSHI_BUTTERFLY_WIDTH;

const NARRATIVE = [
  { id: "n1", text: "Every learner starts somewhere.", className: "ivshi-narrate--1" },
  {
    id: "n2",
    text: "Ivshi began just like you — curious about the world.",
    className: "ivshi-narrate--2",
  },
  {
    id: "n3",
    text: "Every question she explored became a little knowledge.",
    className: "ivshi-narrate--3",
  },
  {
    id: "n4",
    text: "The more she discovered, the stronger she became.",
    className: "ivshi-narrate--4",
  },
  {
    id: "n5",
    text: "Growing isn't always about moving forward.",
    className: "ivshi-narrate--5",
  },
  {
    id: "n6",
    text: "Sometimes, you need time to think.",
    className: "ivshi-narrate--6",
  },
  {
    id: "n7",
    text: "Inside, something wonderful was changing.",
    className: "ivshi-narrate--7",
  },
  { id: "n8", text: "Learning takes time.", className: "ivshi-narrate--8" },
  {
    id: "n9",
    text: "And that's how Ivshi came to be.",
    className: "ivshi-narrate--9",
  },
  { id: "n10", text: "A curious mind.", className: "ivshi-narrate--10" },
  { id: "n11", text: "A growing learner.", className: "ivshi-narrate--11" },
  {
    id: "n12",
    text: "A world waiting to be discovered.",
    className: "ivshi-narrate--12",
  },
  { id: "n13", text: "Welcome to IvshiQuest.", className: "ivshi-narrate--13" },
] as const;

type IvshiTransformOverlayProps = {
  mode: "first" | "replay";
  onComplete: () => void;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return reduced;
}

export function IvshiTransformOverlay({
  mode,
  onComplete,
}: IvshiTransformOverlayProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [reducedStep, setReducedStep] = useState(0);

  useEffect(() => {
    const duration = reducedMotion ? REDUCED_DURATION_MS : FULL_DURATION_MS;
    const timer = window.setTimeout(onComplete, duration);
    return () => window.clearTimeout(timer);
  }, [onComplete, reducedMotion]);

  useEffect(() => {
    if (!reducedMotion) {
      return;
    }
    const timers = [1, 2, 3].map((step, index) =>
      window.setTimeout(() => setReducedStep(step), (index + 1) * 1100),
    );
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [reducedMotion]);

  return (
    <div
      className={
        reducedMotion
          ? "ivshi-transform ivshi-transform--reduced"
          : "ivshi-transform"
      }
      role="dialog"
      aria-modal="true"
      aria-labelledby="ivshi-transform-title"
      data-mode={mode}
      data-reduced-step={reducedMotion ? reducedStep : undefined}
    >
      <h2 id="ivshi-transform-title" className="sr-only">
        Ivshi&apos;s journey — from curious caterpillar to butterfly
      </h2>

      <div className="ivshi-transform-world" aria-hidden="true">
        <div className="ivshi-transform-sky" />
        <div className="ivshi-transform-sun" />
        <div className="ivshi-transform-moon" />
        <div className="ivshi-transform-haze ivshi-transform-haze--far" />
        <div className="ivshi-transform-haze ivshi-transform-haze--near" />
        <div className="ivshi-transform-light-beam" />
      </div>

      <svg
        className="ivshi-transform-scene"
        viewBox="0 0 1000 700"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="itx-leaf-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b4d69a" />
            <stop offset="42%" stopColor="#6fa063" />
            <stop offset="100%" stopColor="#3a5c36" />
          </linearGradient>
          <linearGradient id="itx-leaf-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8e0a8" />
            <stop offset="55%" stopColor="#7eab7c" />
            <stop offset="100%" stopColor="#4a6e45" />
          </linearGradient>
          <linearGradient id="itx-leaf-meal" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#c5dfa8" />
            <stop offset="50%" stopColor="#7eab7c" />
            <stop offset="100%" stopColor="#4f7a48" />
          </linearGradient>
          <linearGradient id="itx-ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eadcc8" stopOpacity="0" />
            <stop offset="35%" stopColor="#e2d0b4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c4ad84" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="itx-branch" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5c4634" />
            <stop offset="45%" stopColor="#8a6a4a" />
            <stop offset="100%" stopColor="#4a3828" />
          </linearGradient>
          {/* Natural hanging chrysalis — jade with gold crown, silk pad on branch */}
          <linearGradient id="itx-chrysalis" x1="0.2" y1="0" x2="0.85" y2="1">
            <stop offset="0%" stopColor="#d4e8c4" />
            <stop offset="18%" stopColor="#9ec48a" />
            <stop offset="45%" stopColor="#6fad72" />
            <stop offset="72%" stopColor="#4f8f68" />
            <stop offset="100%" stopColor="#3d6e58" />
          </linearGradient>
          <linearGradient id="itx-chrysalis-late" x1="0.2" y1="0" x2="0.85" y2="1">
            <stop offset="0%" stopColor="#6a7a5a" />
            <stop offset="35%" stopColor="#4a5542" />
            <stop offset="68%" stopColor="#353a34" />
            <stop offset="100%" stopColor="#252420" />
          </linearGradient>
          <radialGradient id="itx-chrysalis-mottle" cx="38%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#e8f5dc" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#6fa86a" stopOpacity="0" />
            <stop offset="100%" stopColor="#2a4030" stopOpacity="0.18" />
          </radialGradient>
          <filter id="itx-chrysalis-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.35" />
          </filter>
          <radialGradient id="itx-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2a1c12" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#2a1c12" stopOpacity="0" />
          </radialGradient>
          <filter id="itx-soft-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="itx-wow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff8e8" stopOpacity="0.5" />
            <stop offset="55%" stopColor="#ffe7b0" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffe7b0" stopOpacity="0" />
          </radialGradient>
          <clipPath id="itx-emerge-clip">
            <ellipse
              className="ivshi-emerge-clip-shape"
              cx="648"
              cy="368"
              rx="30"
              ry="46"
            />
          </clipPath>
          {/* Carve bites from one continuous leaf — never fade the leaf itself */}
          <mask
            id="itx-main-eat-mask"
            maskUnits="userSpaceOnUse"
            x="60"
            y="230"
            width="640"
            height="310"
          >
            <rect x="60" y="230" width="640" height="310" fill="black" />
            <path
              d="M80 420 C160 280 360 250 560 310 C640 340 670 400 610 445 C520 500 280 515 140 480 C90 460 70 440 80 420Z"
              fill="white"
            />
            <ellipse
              className="ivshi-leaf-bite ivshi-leaf-bite--1"
              cx="545"
              cy="328"
              rx="0"
              ry="0"
              fill="black"
            >
              {/* Meals after intro hold (~9–20% of 52s) */}
              <animate
                attributeName="rx"
                values="0;0;46;46"
                keyTimes="0;0.09;0.12;1"
                dur="52s"
                fill="freeze"
              />
              <animate
                attributeName="ry"
                values="0;0;38;38"
                keyTimes="0;0.09;0.12;1"
                dur="52s"
                fill="freeze"
              />
            </ellipse>
            <ellipse
              className="ivshi-leaf-bite ivshi-leaf-bite--2"
              cx="468"
              cy="316"
              rx="0"
              ry="0"
              fill="black"
            >
              <animate
                attributeName="rx"
                values="0;0;50;50"
                keyTimes="0;0.13;0.16;1"
                dur="52s"
                fill="freeze"
              />
              <animate
                attributeName="ry"
                values="0;0;42;42"
                keyTimes="0;0.13;0.16;1"
                dur="52s"
                fill="freeze"
              />
            </ellipse>
            <ellipse
              className="ivshi-leaf-bite ivshi-leaf-bite--3"
              cx="402"
              cy="308"
              rx="0"
              ry="0"
              fill="black"
            >
              <animate
                attributeName="rx"
                values="0;0;54;54"
                keyTimes="0;0.17;0.20;1"
                dur="52s"
                fill="freeze"
              />
              <animate
                attributeName="ry"
                values="0;0;44;44"
                keyTimes="0;0.17;0.20;1"
                dur="52s"
                fill="freeze"
              />
            </ellipse>
          </mask>
        </defs>

        <g className="ivshi-layer-far">
          <ellipse cx="-40" cy="580" rx="320" ry="160" fill="#557a52" opacity="0.35" />
          <ellipse cx="1040" cy="560" rx="360" ry="170" fill="#4a6e45" opacity="0.32" />
          <ellipse cx="500" cy="640" rx="480" ry="140" fill="#6fa063" opacity="0.28" />
          <ellipse cx="200" cy="-30" rx="280" ry="120" fill="#7eab7c" opacity="0.22" />
          <ellipse cx="820" cy="-20" rx="260" ry="110" fill="#6fa063" opacity="0.2" />
        </g>

        <rect x="-20" y="500" width="1040" height="240" fill="url(#itx-ground)" />

        <g className="ivshi-layer-mid">
          <path
            className="ivshi-plant ivshi-plant--1"
            d="M-60 720 C20 520 80 440 30 280 C120 360 160 520 140 720Z"
            fill="#4f7a48"
            opacity="0.62"
          />
          <path
            className="ivshi-plant ivshi-plant--2"
            d="M1060 720 C980 500 920 420 980 250 C880 340 840 520 860 720Z"
            fill="#3f5f3a"
            opacity="0.58"
          />
          <path
            className="ivshi-plant ivshi-plant--3"
            d="M120 740 C180 560 240 500 200 360 C280 440 300 580 280 740Z"
            fill="#5f8a55"
            opacity="0.45"
          />
          <path
            className="ivshi-plant ivshi-plant--1"
            d="M880 740 C840 580 800 520 840 380 C760 460 740 600 760 740Z"
            fill="#557a52"
            opacity="0.4"
          />
        </g>

        <g className="ivshi-layer-branch">
          <path
            d="M-80 410 C80 350 240 365 400 380 C560 396 700 370 840 330 C940 300 1040 270 1100 250"
            fill="none"
            stroke="url(#itx-branch)"
            strokeWidth="22"
            strokeLinecap="round"
          />
          <path
            d="M-80 410 C80 350 240 365 400 380 C560 396 700 370 840 330 C940 300 1040 270 1100 250"
            fill="none"
            stroke="#2e2118"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.28"
            transform="translate(0 5)"
          />
          {/* Thin living stem for chrysalis */}
          <path
            d="M615 368 C628 348 640 328 646 302"
            fill="none"
            stroke="#6b5340"
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          <path
            d="M615 368 C628 348 640 328 646 302"
            fill="none"
            stroke="#3f2e22"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.35"
            transform="translate(1 1)"
          />
        </g>

        <g className="ivshi-main-leaf-group">
          <ellipse
            className="ivshi-leaf-shadow"
            cx="380"
            cy="455"
            rx="260"
            ry="48"
            fill="url(#itx-shadow)"
          />
          {/* One continuous leaf — eaten edge carved by mask bites, never opacity-swapped */}
          <g className="ivshi-main-leaf">
            <path
              d="M80 420 C160 280 360 250 560 310 C640 340 670 400 610 445 C520 500 280 515 140 480 C90 460 70 440 80 420Z"
              fill="url(#itx-leaf-a)"
              stroke="#3f5f3a"
              strokeWidth="1.8"
              mask="url(#itx-main-eat-mask)"
            />
            <path
              className="ivshi-main-leaf-vein"
              d="M150 475 C280 400 380 350 460 340"
              fill="none"
              stroke="#4d6f45"
              strokeWidth="2.4"
              strokeLinecap="round"
              opacity="0.4"
              mask="url(#itx-main-eat-mask)"
            />
          </g>

          {/* Soft chewed crumbs near the edge during meals — subtle, not cartoon chomps */}
          <ellipse
            className="ivshi-chew-crumb ivshi-chew-crumb--1"
            cx="530"
            cy="330"
            rx="5"
            ry="3.5"
            fill="#6fa063"
            opacity="0"
          />
          <ellipse
            className="ivshi-chew-crumb ivshi-chew-crumb--2"
            cx="450"
            cy="320"
            rx="4.5"
            ry="3"
            fill="#7eab7c"
            opacity="0"
          />
          <ellipse
            className="ivshi-chew-crumb ivshi-chew-crumb--3"
            cx="400"
            cy="315"
            rx="4"
            ry="2.8"
            fill="#6fa063"
            opacity="0"
          />

          <path
            className="ivshi-side-leaf ivshi-side-leaf--1"
            d="M560 250 C640 180 780 175 860 230 C900 255 890 300 830 320 C740 350 620 340 570 300 C550 285 548 265 560 250Z"
            fill="url(#itx-leaf-b)"
            stroke="#3f5f3a"
            strokeWidth="1.5"
          />
          <path
            className="ivshi-side-leaf ivshi-side-leaf--2"
            d="M-40 300 C40 220 160 210 230 270 C180 340 60 360 -10 340 C-40 330 -50 315 -40 300Z"
            fill="#4a6e45"
            stroke="#2f4a2c"
            strokeWidth="1.3"
            opacity="0.9"
          />
          <path
            d="M300 680 C340 600 420 580 480 620 C440 680 360 710 300 700Z"
            fill="#6fa063"
            opacity="0.5"
          />
          <path
            d="M600 700 C640 610 720 590 780 640 C740 700 660 720 600 710Z"
            fill="#557a52"
            opacity="0.45"
          />
        </g>

        {/* Caterpillar */}
        <g className="ivshi-caterpillar">
          <g className="ivshi-caterpillar-grow">
            <g className="ivshi-caterpillar-body">
              <ellipse cx="-2" cy="5" rx="11" ry="9" fill="#e8b85a" />
              <ellipse cx="12" cy="4" rx="12" ry="9.5" fill="#f0c56a" />
              <ellipse cx="27" cy="2.5" rx="12.5" ry="10" fill="#f4cf78" />
              <ellipse cx="42" cy="1" rx="13" ry="10.5" fill="#f7d68a" />
              <ellipse cx="60" cy="0" rx="16" ry="14.5" fill="#ffe7a8" />
              <circle cx="55" cy="-2.5" r="4.2" fill="#3a2418" />
              <circle cx="66" cy="-2.5" r="4.2" fill="#3a2418" />
              <circle cx="54" cy="-3.8" r="1.35" fill="#fff" />
              <circle cx="65" cy="-3.8" r="1.35" fill="#fff" />
              <ellipse cx="50" cy="4.5" rx="2.8" ry="1.7" fill="#f0a8b8" opacity="0.75" />
              <ellipse cx="71" cy="4.5" rx="2.8" ry="1.7" fill="#f0a8b8" opacity="0.75" />
              <path
                d="M56 6.5 C59 8.6 63 8.6 66 6.5"
                fill="none"
                stroke="#8a5a3c"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <path
                d="M55 -12 C52 -22 47 -24 44 -21"
                fill="none"
                stroke="#c9a36a"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <path
                d="M65 -12 C68 -22 73 -24 76 -21"
                fill="none"
                stroke="#c9a36a"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <circle cx="44" cy="-21" r="2.2" fill="#e8c996" />
              <circle cx="76" cy="-21" r="2.2" fill="#e8c996" />
            </g>
          </g>
        </g>

        {/* Natural hanging chrysalis — silk pad under branch, irregular jade shell */}
        <g className="ivshi-chrysalis">
          <ellipse cx="648" cy="301" rx="11" ry="5.5" fill="#ebe2c8" opacity="0.95" />
          <ellipse cx="648" cy="301" rx="6.5" ry="3.2" fill="#c8b898" opacity="0.8" />
          <path
            d="M640 299 C644 294 652 294 656 300"
            fill="none"
            stroke="#d4c8a8"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M648 305 C647 312 645.5 320 644 328"
            fill="none"
            stroke="#cfc4a8"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <g className="ivshi-chrysalis-body">
            <path
              className="ivshi-chrysalis-shell ivshi-chrysalis-shell--jade"
              d="M644 328
                 C654 329 663 336 668 350
                 C674 368 675 390 671 412
                 C666 434 656 448 646 450
                 C636 451 627 442 622 422
                 C616 396 617 368 624 348
                 C628 336 635 329 644 328Z"
              fill="url(#itx-chrysalis)"
              stroke="#4f7a60"
              strokeWidth="0.85"
            />
            <path
              className="ivshi-chrysalis-shell ivshi-chrysalis-shell--jade"
              d="M644 328
                 C654 329 663 336 668 350
                 C674 368 675 390 671 412
                 C666 434 656 448 646 450
                 C636 451 627 442 622 422
                 C616 396 617 368 624 348
                 C628 336 635 329 644 328Z"
              fill="url(#itx-chrysalis-mottle)"
              opacity="0.85"
            />
            <path
              className="ivshi-chrysalis-shell ivshi-chrysalis-shell--late"
              d="M644 328
                 C654 329 663 336 668 350
                 C674 368 675 390 671 412
                 C666 434 656 448 646 450
                 C636 451 627 442 622 422
                 C616 396 617 368 624 348
                 C628 336 635 329 644 328Z"
              fill="url(#itx-chrysalis-late)"
              stroke="#3a4038"
              strokeWidth="0.85"
              opacity="0"
            />
            <path
              d="M634 346 C642 352 646 370 644 398"
              fill="none"
              stroke="#eef8e4"
              strokeWidth="2.6"
              strokeLinecap="round"
              opacity="0.28"
              filter="url(#itx-chrysalis-soft)"
            />
            <path
              d="M624 344 C636 334 656 334 668 346"
              fill="none"
              stroke="#b8923a"
              strokeWidth="3.2"
              strokeLinecap="round"
              opacity="0.9"
            />
            <path
              d="M626 347 C638 338 654 338 666 348"
              fill="none"
              stroke="#e8d078"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.65"
            />
            <circle cx="630" cy="356" r="1.8" fill="#d4b45a" opacity="0.92" />
            <circle cx="642" cy="353" r="1.35" fill="#e8d078" opacity="0.8" />
            <circle cx="656" cy="358" r="1.7" fill="#c9a84a" opacity="0.88" />
            <circle cx="636" cy="366" r="1.1" fill="#c9a84a" opacity="0.65" />
            <circle cx="650" cy="368" r="1.3" fill="#e8d078" opacity="0.58" />
            <circle cx="644" cy="378" r="0.95" fill="#b8923a" opacity="0.4" />
            <path
              d="M628 376 C636 392 638 414 632 434"
              fill="none"
              stroke="#3f6a52"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.3"
            />
            <path
              d="M654 374 C658 394 656 416 648 436"
              fill="none"
              stroke="#3f6a52"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.22"
            />
            <path
              d="M640 360 C642 390 641 420 640 442"
              fill="none"
              stroke="#5a8a68"
              strokeWidth="0.7"
              strokeLinecap="round"
              opacity="0.18"
            />
            <ellipse cx="646" cy="448" rx="4.2" ry="5" fill="#4a6848" opacity="0.55" />
          </g>
          <g className="ivshi-chrysalis-split">
            <path
              className="ivshi-chrysalis-half ivshi-chrysalis-half--l"
              d="M644 328 C636 336 620 356 622 400 C623 430 634 448 646 450 C632 430 614 388 622 348 C626 336 636 330 644 328Z"
              fill="#6fa86a"
              stroke="#4a7a5c"
              strokeWidth="0.85"
            />
            <path
              className="ivshi-chrysalis-half ivshi-chrysalis-half--r"
              d="M644 328 C656 332 666 348 670 376 C674 408 664 438 646 450 C662 430 674 388 668 346 C662 334 654 330 644 328Z"
              fill="#8fbf7a"
              stroke="#4a7a5c"
              strokeWidth="0.85"
            />
          </g>
          <g
            className="ivshi-chrysalis-cracks"
            fill="none"
            stroke="#2f4438"
            strokeWidth="1.35"
            strokeLinecap="round"
          >
            <path className="ivshi-crack ivshi-crack--1" d="M634 362 C638 386 640 412 636 436" />
            <path className="ivshi-crack ivshi-crack--2" d="M658 358 C654 384 652 412 650 438" />
            <path className="ivshi-crack ivshi-crack--3" d="M644 342 C645 378 645 412 645 442" />
          </g>
        </g>

        <g className="ivshi-emerge">
          <ellipse
            className="ivshi-wow-glow"
            cx="648"
            cy="360"
            rx="72"
            ry="58"
            fill="url(#itx-wow)"
          />
          <g className="ivshi-emerge-wings">
            <image
              href={IVSHI_BUTTERFLY_SRC}
              x={648 - IVSHI_W / 2}
              y={340 - IVSHI_H * 0.28}
              width={IVSHI_W}
              height={IVSHI_H}
              preserveAspectRatio="xMidYMid meet"
              clipPath="url(#itx-emerge-clip)"
            />
          </g>
        </g>

        <g className="ivshi-flight">
          <g className="ivshi-flight-wings">
            <image
              href={IVSHI_BUTTERFLY_SRC}
              x={-IVSHI_W / 2}
              y={-IVSHI_H / 2}
              width={IVSHI_W}
              height={IVSHI_H}
              preserveAspectRatio="xMidYMid meet"
              filter="url(#itx-soft-glow)"
            />
          </g>
        </g>

        {/* Soft foreground leaf for depth during flight */}
        <g className="ivshi-fg-leaf" opacity="0.55">
          <path
            d="M720 620 C780 560 880 560 940 620 C880 700 780 710 720 660Z"
            fill="#4f7a48"
          />
        </g>
      </svg>

      <div className="ivshi-transform-narrative" aria-live="polite">
        {NARRATIVE.map((line) => (
          <p key={line.id} className={`ivshi-narrate ${line.className}`}>
            {line.text}
          </p>
        ))}
      </div>

      <button
        type="button"
        className="ivshi-transform-skip"
        autoFocus
        onClick={onComplete}
      >
        Skip
      </button>
    </div>
  );
}
