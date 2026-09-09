"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { AskChallenge } from "@/domain/ask-ivshi";
import { AnswerChoice } from "@/features/discovery/answer-choice";

import { useIvshiPresence } from "@/components/ivshi/ivshi-presence";

type ChallengeStatus = "idle" | "incorrect" | "correct";

type AskChallengeCardProps = {
  challenge: AskChallenge;
};

export function AskChallengeCard({ challenge }: AskChallengeCardProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [status, setStatus] = useState<ChallengeStatus>("idle");
  const ivshiPresence = useIvshiPresence();

  function check() {
    if (!selectedId) {
      return;
    }

    if (selectedId === challenge.correctChoiceId) {
      setStatus("correct");
      ivshiPresence.noteSuccess();
      return;
    }

    setStatus("incorrect");
    ivshiPresence.noteMistake();
  }

  function retry() {
    setSelectedId(null);
    setStatus("idle");
  }

  return (
    <div className="flex flex-col gap-3" data-ivshi-anchor="task">
      <p className="text-base font-medium leading-7 text-ink">
        {challenge.prompt}
      </p>
      <fieldset className="flex flex-col gap-2" disabled={status === "correct"}>
        <legend className="sr-only">{challenge.prompt}</legend>
        {challenge.choices.map((choice) => (
          <AnswerChoice
            key={choice.id}
            name={`ask-challenge-${challenge.id}`}
            value={choice.id}
            letter={choice.letter}
            text={choice.text}
            checked={selectedId === choice.id}
            onChange={setSelectedId}
          />
        ))}
      </fieldset>
      {status === "correct" ? (
        <div aria-live="polite" className="flex flex-col gap-2">
          <p className="text-base font-medium text-ink">
            Yes — you kept the amount the same.
          </p>
          <p className="text-base leading-7 text-ink">{challenge.explanation}</p>
        </div>
      ) : null}
      {status === "incorrect" ? (
        <div aria-live="polite" className="flex flex-col gap-2">
          <p className="text-base font-medium text-ink">
            Not quite — let&apos;s look at it.
          </p>
          <p className="text-base leading-7 text-ink-muted">{challenge.hint}</p>
        </div>
      ) : null}
      {status === "correct" ? null : status === "incorrect" ? (
        <Button
          variant="ghost"
          onClick={retry}
          className="self-start ring-1 ring-line"
        >
          Try again
        </Button>
      ) : (
        <Button onClick={check} disabled={!selectedId} className="self-start">
          Check
        </Button>
      )}
    </div>
  );
}
