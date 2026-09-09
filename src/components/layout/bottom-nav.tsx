"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { STUDENT_NAV_ICONS } from "@/components/layout/nav-icons";
import { cn } from "@/lib/cn";
import { ROUTES, STUDENT_NAV } from "@/lib/constants";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Student"
        className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface-elevated/95 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1 backdrop-blur-md"
    >
      <ul className="mx-auto flex max-w-2xl items-stretch justify-between px-2">
        {STUDENT_NAV.map((item) => {
          const isCurrent =
            item.id === "learn"
              ? pathname === item.href ||
                pathname.startsWith(`${item.href}/`) ||
                pathname === ROUTES.student.practice
              : pathname === item.href;
          const Icon = STUDENT_NAV_ICONS[item.id];

          return (
            <li key={item.id} className="flex-1">
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-2xl px-1 text-[0.7rem] font-semibold tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
                  isCurrent
                    ? "bg-surface-muted text-teal"
                    : "text-ink-muted hover:text-ink",
                )}
              >
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5"
                  strokeWidth={isCurrent ? 2.25 : 1.75}
                />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
