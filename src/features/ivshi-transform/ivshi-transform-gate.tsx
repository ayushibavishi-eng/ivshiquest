"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/constants";
import { getActiveLearnerId } from "@/services/student/active-learner";
import { isOnboardedLearnerId } from "@/services/student/learner-profile";
import {
  hasSeenIvshiTransform,
  markIvshiTransformSeen,
} from "@/services/ivshi/transform-seen";
import { IvshiTransformOverlay } from "./ivshi-transform-overlay";

type IvshiTransformContextValue = {
  replayIvshiTransform: () => void;
  isPlaying: boolean;
};

const IvshiTransformContext = createContext<IvshiTransformContextValue | null>(
  null,
);

export function useIvshiTransform() {
  const value = useContext(IvshiTransformContext);
  if (!value) {
    throw new Error("useIvshiTransform must be used within IvshiTransformGate");
  }
  return value;
}

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

/**
 * Mounts the first-time Ivshi transformation on Home after onboarding,
 * and supports a quiet replay from Me.
 */
export function IvshiTransformGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isClient = useIsClient();
  const [sessionDismissed, setSessionDismissed] = useState(false);
  const [replayNonce, setReplayNonce] = useState<number | null>(null);

  const shouldAutoPlay =
    isClient &&
    !sessionDismissed &&
    replayNonce === null &&
    pathname === ROUTES.student.home &&
    (() => {
      const learnerId = getActiveLearnerId();
      return (
        isOnboardedLearnerId(learnerId) && !hasSeenIvshiTransform(learnerId)
      );
    })();

  const isPlaying = shouldAutoPlay || replayNonce !== null;

  useEffect(() => {
    if (isPlaying) {
      document.body.dataset.ivshiTransform = "open";
      return () => {
        delete document.body.dataset.ivshiTransform;
      };
    }
    delete document.body.dataset.ivshiTransform;
  }, [isPlaying]);

  const finish = useCallback(() => {
    markIvshiTransformSeen();
    setSessionDismissed(true);
    setReplayNonce(null);
  }, []);

  const replayIvshiTransform = useCallback(() => {
    setSessionDismissed(false);
    setReplayNonce(Date.now());
  }, []);

  const value = useMemo(
    () => ({
      replayIvshiTransform,
      isPlaying,
    }),
    [isPlaying, replayIvshiTransform],
  );

  return (
    <IvshiTransformContext.Provider value={value}>
      {children}
      {isPlaying ? (
        <IvshiTransformOverlay
          key={replayNonce ?? "first-ivshi-transform"}
          mode={replayNonce ? "replay" : "first"}
          onComplete={finish}
        />
      ) : null}
    </IvshiTransformContext.Provider>
  );
}
