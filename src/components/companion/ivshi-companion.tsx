import { IvshiMark, type IvshiState } from "@/components/companion/ivshi-mark";
import { cn } from "@/lib/cn";

type IvshiCompanionProps = {
  state?: IvshiState;
  size?: number;
  label?: string;
  className?: string;
};

export function IvshiCompanion({
  state = "welcoming",
  size = 20,
  label,
  className,
}: IvshiCompanionProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <IvshiMark state={state} size={size} decorative={Boolean(label)} />
      {label ? <span>{label}</span> : null}
    </span>
  );
}
