"use client";

import { useMemo, useState } from "react";
import { IvshiCompanion } from "@/components/companion";
import { Button } from "@/components/ui/button";
import type { LessonExploreActivity } from "@/domain/complete-lesson";
import {
  PlantKitchenModel,
  PLANT_KITCHEN_RECIPE,
} from "@/features/lesson/phases/plant-kitchen-model";
import { cn } from "@/lib/cn";

type InvestigationStep = "predict" | "observe" | "discover";

type ExploreInvestigationProps = {
  activity: LessonExploreActivity;
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function ExploreInvestigation({
  activity,
  selectedId,
  onSelect,
}: ExploreInvestigationProps) {
  const investigation = activity.investigation;
  const [step, setStep] = useState<InvestigationStep>("predict");
  const [predicted, setPredicted] = useState<string[]>([]);
  const [added, setAdded] = useState<string[]>([]);
  const cooking = PLANT_KITCHEN_RECIPE.every((id) => added.includes(id));

  const companion = useMemo(() => {
    if (step === "predict") {
      return { state: "curious" as const, label: "Make a prediction." };
    }
    if (step === "observe" && added.length === 0) {
      return { state: "thinking" as const, label: "Let's test your idea." };
    }
    if (step === "observe" && !cooking) {
      return { state: "curious" as const, label: "Look closely..." };
    }
    if (step === "observe" && cooking) {
      return {
        state: "helping" as const,
        label: "You noticed something important.",
      };
    }
    return null;
  }, [added.length, cooking, step]);

  if (!investigation || investigation.kind !== "plant-kitchen") {
    return null;
  }

  const selected = activity.choices.find((choice) => choice.id === selectedId);
  const predictedLabels = investigation.predictChoices
    .filter((choice) => predicted.includes(choice.id))
    .map((choice) => choice.label);

  function togglePrediction(id: string) {
    setPredicted((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function sendToLeaf(id: string) {
    setAdded((current) => (current.includes(id) ? current : [...current, id]));
  }

  return (
    <div className="flex flex-col gap-4">
      {companion ? (
        <IvshiCompanion
          state={companion.state}
          size={20}
          label={companion.label}
          className="text-sm leading-6 text-ink-muted"
        />
      ) : null}

      <div className="rounded-[1.6rem] bg-surface-elevated p-3 shadow-card ring-1 ring-line">
        <PlantKitchenModel
          added={added}
          highlightStore={step === "discover"}
        />
      </div>

      {step === "predict" ? (
        <div className="flex flex-col gap-3 rounded-[1.6rem] bg-[linear-gradient(160deg,#e7f4f8_0%,#fffaf2_100%)] px-4 py-4 ring-1 ring-line">
          <p className="text-[1.2rem] font-semibold leading-snug text-ink">
            {investigation.predictPrompt}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {investigation.predictChoices.map((choice) => (
              <Button
                key={choice.id}
                type="button"
                variant={predicted.includes(choice.id) ? "brand" : "quiet"}
                className={chipClass(predicted.includes(choice.id))}
                onClick={() => {
                  togglePrediction(choice.id);
                }}
              >
                {choice.label}
              </Button>
            ))}
          </div>
          <Button
            type="button"
            className="self-start"
            disabled={predicted.length === 0}
            onClick={() => {
              setStep("observe");
            }}
          >
            {investigation.investigateLabel}
          </Button>
        </div>
      ) : null}

      {step === "observe" ? (
        <div className="flex flex-col gap-3 rounded-[1.6rem] bg-[linear-gradient(160deg,#e7f4f8_0%,#fffaf2_100%)] px-4 py-4 ring-1 ring-line">
          <p className="text-sm leading-6 text-ink-muted">
            {predictedLabels.length > 0
              ? `You predicted ${joinList(predictedLabels)}. Tap what to send toward the leaf.`
              : "Tap what to send toward the leaf."}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {investigation.predictChoices.map((choice) => (
              <Button
                key={choice.id}
                type="button"
                variant={added.includes(choice.id) ? "brand" : "quiet"}
                className={chipClass(added.includes(choice.id))}
                onClick={() => {
                  sendToLeaf(choice.id);
                }}
              >
                {choice.label}
              </Button>
            ))}
          </div>
          {added.length > 0 ? (
            <p className="rounded-2xl bg-surface-elevated px-4 py-3 text-base leading-7 text-ink shadow-card ring-1 ring-line">
              {observeCaption(added, cooking)}
            </p>
          ) : null}
          {cooking ? (
            <Button
              type="button"
              className="self-start"
              onClick={() => {
                setStep("discover");
              }}
            >
              Think about the potato
            </Button>
          ) : null}
        </div>
      ) : null}

      {step === "discover" ? (
        <div className="flex flex-col gap-3 rounded-[1.6rem] bg-[linear-gradient(160deg,#e7f4f8_0%,#fffaf2_100%)] px-4 py-4 ring-1 ring-line">
          <p className="text-[1.2rem] font-semibold leading-snug text-ink">
            {activity.prompt}
          </p>
          <p className="text-sm leading-6 text-ink-muted">
            Use what you just saw in the leaf and the store.
          </p>
          <div className="flex flex-col gap-2">
            {activity.choices.map((choice) => (
              <Button
                key={choice.id}
                type="button"
                variant={selectedId === choice.id ? "brand" : "quiet"}
                className={cn(
                  chipClass(selectedId === choice.id),
                  "justify-start text-left",
                )}
                onClick={() => {
                  onSelect(choice.id);
                }}
              >
                {choice.label}
              </Button>
            ))}
          </div>
          {selected ? (
            <p className="rounded-2xl bg-surface-elevated px-4 py-3 text-base leading-7 text-ink shadow-card ring-1 ring-line">
              {selected.note}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function chipClass(active: boolean) {
  return cn(
    "h-auto min-h-12 w-full whitespace-normal py-3",
    !active && "bg-surface-elevated ring-1 ring-line",
  );
}

function joinList(items: string[]) {
  if (items.length === 1) {
    return items[0];
  }
  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function observeCaption(added: readonly string[], cooking: boolean) {
  if (cooking) {
    return "Chlorophyll in the leaf catches sunlight. The leaf is the kitchen. Sugar is made there, then it can be stored as starch.";
  }

  const arriving = [
    added.includes("light") ? "Light reaches the leaf." : null,
    added.includes("water") ? "Water reaches the leaf." : null,
    added.includes("carbon-dioxide")
      ? "Carbon dioxide reaches the leaf."
      : null,
    added.includes("soil")
      ? "Soil stays with the roots. It is not a sandwich for the leaf."
      : null,
  ].filter((line): line is string => Boolean(line));

  if (arriving.length === 0) {
    return "Nothing has reached the leaf yet.";
  }

  const recipeStarted = PLANT_KITCHEN_RECIPE.some((id) => added.includes(id));
  if (recipeStarted) {
    return `${arriving.join(" ")} The kitchen is not cooking yet.`;
  }

  return arriving.join(" ");
}
