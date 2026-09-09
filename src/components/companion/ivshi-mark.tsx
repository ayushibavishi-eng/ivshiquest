import { IvshiButterfly } from "@/components/ivshi/IvshiButterfly";
import type { IvshiCompanionState } from "@/domain/ivshi-companion";
import { cn } from "@/lib/cn";

export const IVSHI_STATES = [
  "welcoming",
  "curious",
  "thinking",
  "helping",
  "celebrating",
] as const;

export type IvshiState = (typeof IVSHI_STATES)[number];

const MARK_TO_COMPANION: Record<IvshiState, IvshiCompanionState> = {
  welcoming: "idle",
  curious: "hover",
  thinking: "hover",
  helping: "helping",
  celebrating: "success",
};

type IvshiMarkProps = {
  state?: IvshiState;
  size?: number;
  className?: string;
  decorative?: boolean;
};

export function IvshiMark({
  state = "welcoming",
  size = 20,
  className,
  decorative = true,
}: IvshiMarkProps) {
  return (
    <IvshiButterfly
      state={MARK_TO_COMPANION[state]}
      size={size}
      decorative={decorative}
      className={cn("inline-block align-middle", className)}
    />
  );
}
