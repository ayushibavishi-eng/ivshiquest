"use client";

import { useEffect, useState, type ReactNode } from "react";
import { IvshiIntroduction } from "@/components/ivshi/IvshiIntroduction";
import { ThemeEnvironment } from "@/components/theme";
import type { StudentThemeId } from "@/domain/theme";
import {
  hasCompletedIvshiIntroduction,
  markIvshiIntroductionComplete,
} from "@/lib/ivshi-introduction";

type FirstLaunchGateProps = {
  themeId: StudentThemeId;
  children: ReactNode;
};

type LaunchPhase = "checking" | "intro" | "app";

export function FirstLaunchGate({ themeId, children }: FirstLaunchGateProps) {
  const [phase, setPhase] = useState<LaunchPhase>("checking");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setPhase(hasCompletedIvshiIntroduction() ? "app" : "intro");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (phase === "app") {
    return children;
  }

  return (
    <div className="relative min-h-dvh">
      <ThemeEnvironment themeId={themeId} />
      {phase === "intro" ? (
        <IvshiIntroduction
          onComplete={() => {
            markIvshiIntroductionComplete();
            setPhase("app");
          }}
        />
      ) : null}
    </div>
  );
}
