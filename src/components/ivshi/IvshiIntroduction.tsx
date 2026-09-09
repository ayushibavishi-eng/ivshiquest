"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";
import { IvshiButterfly } from "@/components/ivshi/IvshiButterfly";
import { Button } from "@/components/ui/button";
import "./ivshi-introduction.css";

type IvshiIntroductionProps = {
  onComplete: () => void;
};

type IntroScene = "hush" | "gather" | "open" | "emerge" | "greet";
type IntroLine = "waiting" | "hi" | "discover" | null;

const MOTES = [
  { x: "-4.4rem", y: "-0.9rem", delay: "0s" },
  { x: "3.8rem", y: "-2.1rem", delay: "0.12s" },
  { x: "-1.8rem", y: "2.8rem", delay: "0.22s" },
  { x: "3.1rem", y: "1.7rem", delay: "0.08s" },
  { x: "-3.4rem", y: "0.6rem", delay: "0.3s" },
  { x: "1.1rem", y: "-3rem", delay: "0.18s" },
] as const;

const SCENE_AT = {
  gather: 2000,
  open: 3500,
  emerge: 5500,
  greet: 7000,
  hi: 7000,
  discover: 8200,
  button: 9000,
} as const;

const REDUCED_AT = {
  gather: 1200,
  open: 2200,
  emerge: 3200,
  greet: 4000,
  hi: 4000,
  discover: 5000,
  button: 5600,
} as const;

export function IvshiIntroduction({ onComplete }: IvshiIntroductionProps) {
  const titleId = useId();
  const [scene, setScene] = useState<IntroScene>("hush");
  const [line, setLine] = useState<IntroLine>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const at = reduced ? REDUCED_AT : SCENE_AT;
    const timers = [
      window.setTimeout(() => setLine("waiting"), reduced ? 280 : 800),
      window.setTimeout(() => setScene("gather"), at.gather),
      window.setTimeout(() => {
        setScene("open");
        setLine(null);
      }, at.open),
      window.setTimeout(() => setScene("emerge"), at.emerge),
      window.setTimeout(() => {
        setScene("greet");
        setLine("hi");
      }, at.greet),
      window.setTimeout(() => setLine("discover"), at.discover),
      window.setTimeout(() => setShowButton(true), at.button),
    ];

    return () => {
      for (const timer of timers) {
        window.clearTimeout(timer);
      }
    };
  }, []);

  const title = titleForLine(line);
  const showButterfly = scene === "open" || scene === "emerge" || scene === "greet";

  return (
    <section
      className="ivshi-intro"
      data-scene={scene}
      aria-labelledby={titleId}
    >
      <div className="ivshi-intro-stage" aria-hidden="true">
        <div className="ivshi-intro-origin">
          {MOTES.map((mote) => (
            <span
              key={`${mote.x}-${mote.y}`}
              className="ivshi-intro-mote"
              style={
                {
                  "--x": mote.x,
                  "--y": mote.y,
                  "--delay": mote.delay,
                } as CSSProperties
              }
            />
          ))}
          <span className="ivshi-intro-seed-hold">
            <span className="ivshi-intro-seed" />
          </span>
          <span className="ivshi-intro-silk" />
          {showButterfly ? (
            <div className="ivshi-intro-butterfly">
              <span className="ivshi-intro-butterfly-live">
                <IvshiButterfly size={132} decorative />
              </span>
            </div>
          ) : null}
        </div>
      </div>

      <div className="ivshi-intro-copy">
        <div className="ivshi-intro-kicker" aria-live="polite">
          {title ? (
            <h1 key={title} id={titleId} className="ivshi-intro-title ivshi-intro-line">
              {title}
            </h1>
          ) : (
            <h1 id={titleId} className="sr-only">
              Ivshi
            </h1>
          )}
        </div>
        <div className="ivshi-intro-actions">
          {showButton ? (
            <Button
              variant="primary"
              className="min-w-[12.5rem]"
              autoFocus
              onClick={onComplete}
            >
              Begin exploring →
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function titleForLine(line: IntroLine) {
  switch (line) {
    case "waiting":
      return "Something is waiting to be discovered.";
    case "hi":
      return "Hi. I'm Ivshi.";
    case "discover":
      return "Let's discover something amazing.";
    default:
      return null;
  }
}
