"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { IvshiCompanionState } from "@/domain/ivshi-companion";

type IvshiPresenceValue = {
  state: IvshiCompanionState;
  consecutiveMistakes: number;
  noteActivity: () => void;
  noteMistake: () => void;
  noteSuccess: () => void;
  setState: (state: IvshiCompanionState) => void;
};

const IvshiPresenceContext = createContext<IvshiPresenceValue | null>(null);

const idleApi: IvshiPresenceValue = {
  state: "idle",
  consecutiveMistakes: 0,
  noteActivity: () => undefined,
  noteMistake: () => undefined,
  noteSuccess: () => undefined,
  setState: () => undefined,
};

export function IvshiPresenceProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return <IvshiPresenceSession key={pathname}>{children}</IvshiPresenceSession>;
}

function IvshiPresenceSession({ children }: { children: ReactNode }) {
  const [state, setState] = useState<IvshiCompanionState>("idle");
  const [consecutiveMistakes, setConsecutiveMistakes] = useState(0);

  const noteActivity = useCallback(() => {
    setState((current) =>
      current === "success" || current === "helping" ? current : "idle",
    );
  }, []);

  const noteMistake = useCallback(() => {
    setConsecutiveMistakes((count) => {
      const next = count + 1;
      setState(next >= 2 ? "helping" : "hover");
      return next;
    });
  }, []);

  const noteSuccess = useCallback(() => {
    setConsecutiveMistakes(0);
    setState("success");
  }, []);

  const value = useMemo(
    () => ({
      state,
      consecutiveMistakes,
      noteActivity,
      noteMistake,
      noteSuccess,
      setState,
    }),
    [consecutiveMistakes, noteActivity, noteMistake, noteSuccess, state],
  );

  return (
    <IvshiPresenceContext.Provider value={value}>
      {children}
    </IvshiPresenceContext.Provider>
  );
}

export function useIvshiPresence() {
  return useContext(IvshiPresenceContext) ?? idleApi;
}
