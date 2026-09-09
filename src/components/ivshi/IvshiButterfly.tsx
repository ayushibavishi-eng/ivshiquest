"use client";

import type { IvshiCompanionState } from "@/domain/ivshi-companion";
import { cn } from "@/lib/cn";
import "./ivshi-butterfly.css";

export const IVSHI_BUTTERFLY_SRC = "/images/ivshi/Ivshi_butterfly_exact_crop.png";
export const IVSHI_BUTTERFLY_WIDTH = 1247;
export const IVSHI_BUTTERFLY_HEIGHT = 1261;

export type IvshiButterflyProps = {
  state?: IvshiCompanionState;
  size?: number;
  className?: string;
  decorative?: boolean;
};

export function IvshiButterfly({
  size = 48,
  className,
  decorative = true,
}: IvshiButterflyProps) {
  return (
    <img
      src={IVSHI_BUTTERFLY_SRC}
      alt={decorative ? "" : "Ivshi"}
      width={IVSHI_BUTTERFLY_WIDTH}
      height={IVSHI_BUTTERFLY_HEIGHT}
      draggable={false}
      className={cn("ivshi-butterfly-art", className)}
      style={{
        width: size,
        height: "auto",
        aspectRatio: `${IVSHI_BUTTERFLY_WIDTH} / ${IVSHI_BUTTERFLY_HEIGHT}`,
      }}
      aria-hidden={decorative ? true : undefined}
    />
  );
}
