import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type LearnSectionProps = {
  headingId: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function LearnSection({
  headingId,
  title,
  children,
  className,
}: LearnSectionProps) {
  return (
    <section
      aria-labelledby={headingId}
      className={cn("flex flex-col gap-3", className)}
    >
      <h2
        id={headingId}
        className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
