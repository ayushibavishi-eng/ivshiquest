"use client";

import { Bell } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { greetingForHour } from "@/features/student-home/greeting";
import { ROUTES } from "@/lib/constants";

type HomeHeaderProps = {
  displayName: string;
};

export function HomeHeader({ displayName }: HomeHeaderProps) {
  const initial = displayName.trim().charAt(0).toUpperCase() || "S";

  return (
    <header className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <h1
          suppressHydrationWarning
          className="text-[1.65rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl"
        >
          {`${greetingForHour(new Date().getHours())}, ${displayName} `}
          <span aria-hidden="true">👋</span>
        </h1>
        <p className="mt-1 text-base text-ink-muted sm:text-lg">
          Ready for today&apos;s adventure?
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <ButtonLink
          href={ROUTES.student.notifications}
          variant="ghost"
          size="icon"
          aria-label="Notifications"
        >
          <Bell aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
        </ButtonLink>
        <ButtonLink
          href={ROUTES.student.me}
          variant="ghost"
          size="icon"
          aria-label={`${displayName}'s profile`}
          className="bg-teal text-canvas hover:bg-teal-deep hover:text-canvas"
        >
          <span aria-hidden="true" className="text-sm font-semibold">
            {initial}
          </span>
        </ButtonLink>
      </div>
    </header>
  );
}
