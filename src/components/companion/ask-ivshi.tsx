"use client";

import { usePathname } from "next/navigation";
import { IvshiCompanion } from "@/components/companion";
import { ButtonLink } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";

export function AskIvshi() {
  const pathname = usePathname();

  if (pathname === ROUTES.student.ask) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-30">
      <div className="mx-auto flex max-w-2xl justify-end px-5">
        <ButtonLink
          href={ROUTES.student.ask}
          variant="brand"
          data-ivshi-ask-fab=""
          className="pointer-events-auto shadow-[0_10px_24px_rgba(42,107,99,0.28)]"
          aria-label="Ask Ivshi"
        >
          <IvshiCompanion state="welcoming" size={18} label="Ask Ivshi" />
        </ButtonLink>
      </div>
    </div>
  );
}
