"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useIvshiPresence } from "@/components/ivshi/ivshi-presence";
import { companionFeedbackPhrase } from "@/domain/companion-feedback";
import type { AskChallenge } from "@/domain/ask-ivshi";
import { AnswerChoice } from "@/features/discovery/answer-choice";
import { QuestionResult } from "@/features/lesson/feedback/question-result";
import { readLearnerGrade } from "@/services/student/learner-grade";

type ChallengeStatus = "idle" | "incorrect" | "correct";

type AskChallengeCardProps = {
  challenge: AskChallenge;
};

export function AskChallengeCard({ challenge }: AskChallengeCardProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [status, setStatus] = useState<ChallengeStatus>("idle");
  const ivshiPresence = useIvshiPresence();
  const grade = readLearnerGrade();

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
        <QuestionResult
          kind="found"
          phrase={companionFeedbackPhrase("found", grade, challenge.id)}
          detail={challenge.explanation}
        />
      ) : null}
      {status === "incorrect" ? (
        <QuestionResult
          kind="look-again"
          phrase={companionFeedbackPhrase(
            "look-again",
            grade,
            `${challenge.id}:look-again`,
          )}
          clue={challenge.hint}
        />
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
