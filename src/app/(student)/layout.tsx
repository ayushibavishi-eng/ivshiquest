import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { getResolvedStudentThemeId } from "@/services/theme";

export default async function StudentLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const themeId = await getResolvedStudentThemeId();

  return <AppShell themeId={themeId}>{children}</AppShell>;
}
