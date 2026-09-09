import type { ReactNode } from "react";
import { FirstLaunchGate } from "@/components/ivshi/FirstLaunchGate";
import { AppShell } from "@/components/layout/app-shell";
import { getResolvedStudentThemeId } from "@/services/theme";

export default async function StudentLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const themeId = await getResolvedStudentThemeId();

  return (
    <FirstLaunchGate themeId={themeId}>
      <AppShell themeId={themeId}>{children}</AppShell>
    </FirstLaunchGate>
  );
}
