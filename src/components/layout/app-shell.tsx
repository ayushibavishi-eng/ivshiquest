import type { ReactNode } from "react";
import { AskIvshi } from "@/components/companion/ask-ivshi";
import { IvshiCompanionLayer } from "@/components/ivshi/IvshiCompanionLayer";
import { IvshiPresenceProvider } from "@/components/ivshi/ivshi-presence";
import { BottomNav } from "@/components/layout/bottom-nav";
import { ThemeEnvironment } from "@/components/theme";
import type { StudentThemeId } from "@/domain/theme";

type AppShellProps = {
  themeId: StudentThemeId;
  children: ReactNode;
};

export function AppShell({ themeId, children }: AppShellProps) {
  return (
    <IvshiPresenceProvider>
      <div className="relative min-h-dvh">
        <ThemeEnvironment themeId={themeId} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-ink focus:outline-2 focus:outline-offset-2 focus:outline-focus"
        >
          Skip to content
        </a>
        <div className="relative mx-auto w-full max-w-2xl">
          <main
            id="main"
            className="flex min-h-dvh flex-col px-5 pb-[calc(8.5rem+env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] md:px-8"
          >
            {children}
          </main>
        </div>
        <IvshiCompanionLayer />
        <AskIvshi />
        <BottomNav />
      </div>
    </IvshiPresenceProvider>
  );
}
