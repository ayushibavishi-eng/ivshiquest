"use client";

import { IvshiMark } from "@/components/companion";

export function WonderPhase({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-[1.6rem] bg-[linear-gradient(160deg,#e7f4f8_0%,#fffaf2_100%)] px-4 py-5">
      <IvshiMark
        state="curious"
        size={26}
        decorative
        className="mt-1 shrink-0 text-teal"
      />
      <p className="text-[1.45rem] font-semibold leading-snug text-ink">{text}</p>
    </div>
  );
}
