"use client";

import { useState } from "react";
import { IvshiCompanion } from "@/components/companion";
import { useIvshiPresence } from "@/components/ivshi/ivshi-presence";
import { Button } from "@/components/ui/button";
import {
  companionFeedbackPhrase,
  lookTogetherPhrase,
  type CompanionFeedbackKind,
} from "@/domain/companion-feedback";
import {
  evaluateOpenResponse,
  isWriteQuestion,
  writeAnswerIsClose,
  writeAnswerSucceeds,
  writeQuestionPlaceholder,
  type LessonQuestion,
} from "@/domain/complete-lesson";
import { AnswerChoice } from "@/features/discovery/answer-choice";
import { QuestionResult } from "@/features/lesson/feedback/question-result";
import { OpenResponseNote } from "@/features/lesson/open-response-note";

type QuestionPhaseProps = {
  question: LessonQuestion;
  grade: number;
  breakthrough?: boolean;
  selectedId: string | null;
  writeValue: string;
  checked: boolean;
  hintOpen: boolean;
  onSelect: (id: string) => void;
  onWrite: (value: string) => void;
  onCheck: () => void;
  onHint: () => void;
};

type LocalResult = {
  kind: CompanionFeedbackKind;
  phrase: string;
  clue?: string;
};

export function QuestionPhase({
  question,
  grade,
  breakthrough = false,
  selectedId,
  writeValue,
  checked,
  hintOpen,
  onSelect,
  onWrite,
  onCheck,
  onHint,
}: QuestionPhaseProps) {
  const ivshiPresence = useIvshiPresence();
  const [lookCount, setLookCount] = useState(0);
  const [localResult, setLocalResult] = useState<LocalResult | null>(null);
  const writeMode = isWriteQuestion(question);
  const openWrite = writeMode && question.acceptedAnswers.length === 0;
  const evaluation = evaluateOpenResponse(writeValue, question.keyIdeas);
  const writeFound = writeMode
    ? writeAnswerSucceeds(writeValue, question)
    : false;
  const writeClose = writeMode
    ? openWrite
      ? evaluation.state === "needs_clarification"
      : writeAnswerIsClose(writeValue, question.acceptedAnswers)
    : false;
  const ideaWorked = writeMode
    ? writeFound
    : selectedId === question.correctChoiceId;
  const lookingTogether = checked && !ideaWorked;
  const canCheck = writeMode
    ? openWrite
      ? evaluation.state !== "not_answered"
      : writeValue.trim().length >= 1
    : Boolean(selectedId);
  const choiceClue =
    !writeMode && selectedId && !ideaWorked
      ? question.feedbackByChoice[selectedId]
      : undefined;
  const showLiveClose =
    writeMode && openWrite && !checked && lookCount === 0 && writeClose;
  const lockInput = checked;

  function handleCheck() {
    if (ideaWorked) {
      if (breakthrough) {
        ivshiPresence.noteBreakthrough();
      } else {
        ivshiPresence.noteSuccess();
      }
      setLocalResult(null);
      onCheck();
      return;
    }

    ivshiPresence.noteMistake();
    if (!hintOpen) {
      onHint();
    }
    const kind: CompanionFeedbackKind = writeClose ? "close" : "look-again";
    const nextLooks = lookCount + 1;
    setLookCount(nextLooks);
    setLocalResult({
      kind,
      phrase: companionFeedbackPhrase(
        kind,
        grade,
        `${question.id}:${kind}:${nextLooks}`,
      ),
      clue: choiceClue ?? question.hint,
    });
    if (nextLooks >= 3) {
      onCheck();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[1.35rem] font-semibold leading-snug text-ink">
        {question.prompt}
      </h2>
      {writeMode ? (
        <label className="flex flex-col gap-2">
          <span className="sr-only">{question.prompt}</span>
          <textarea
            value={writeValue}
            onChange={(event) => {
              onWrite(event.target.value);
            }}
            placeholder={writeQuestionPlaceholder(question)}
            autoComplete="off"
            rows={openWrite ? 5 : 3}
            disabled={lockInput}
            className="w-full resize-y rounded-[1.2rem] bg-surface-elevated px-4 py-3 text-base leading-7 text-ink shadow-card ring-1 ring-line outline-none placeholder:text-ink-muted focus-visible:ring-2 focus-visible:ring-teal disabled:opacity-80"
          />
        </label>
      ) : (
        <fieldset className="flex flex-col gap-2" disabled={lockInput}>
          <legend className="sr-only">{question.prompt}</legend>
          {question.choices.map((choice) => (
            <AnswerChoice
              key={choice.id}
              name={`lesson-${question.id}`}
              value={choice.id}
              letter={choice.letter}
              text={choice.text}
              checked={selectedId === choice.id}
              onChange={onSelect}
            />
          ))}
        </fieldset>
      )}
      {showLiveClose ? (
        <OpenResponseNote evaluation={evaluation} grade={grade} />
      ) : null}
      {!lockInput ? (
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={handleCheck}
            disabled={!canCheck}
            className="self-start"
          >
            Check
          </Button>
          <Button
            onClick={onHint}
            variant="quiet"
            className="self-start"
            type="button"
          >
            {hintOpen ? "Hint is showing" : "Hint"}
          </Button>
        </div>
      ) : null}
      {checked && ideaWorked ? (
        <QuestionResult
          kind="found"
          phrase={companionFeedbackPhrase("found", grade, question.id)}
          detail={question.explanation}
          showMark={!breakthrough}
        />
      ) : null}
      {lookingTogether ? (
        <QuestionResult
          kind="look-together"
          phrase={lookTogetherPhrase(grade)}
          clue={choiceClue ?? question.hint}
          detail={question.explanation}
        />
      ) : null}
      {!checked && localResult ? (
        <QuestionResult
          kind={localResult.kind}
          phrase={localResult.phrase}
          clue={localResult.clue}
        />
      ) : null}
      {hintOpen && !lockInput && !localResult ? (
        <IvshiCompanion
          state="thinking"
          size={20}
          label={question.hint}
          className="text-sm leading-6 text-ink-muted"
        />
      ) : null}
    </div>
  );
}
