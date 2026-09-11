"use client";

import { useEffect, useMemo, useState } from "react";
import { IvshiCompanion } from "@/components/companion";
import { useIvshiPresence } from "@/components/ivshi/ivshi-presence";
import type { PracticeAttemptSignal, PracticeSet } from "@/domain/practice";
import { buildPracticeSummary } from "@/domain/practice";
import { PracticeComplete } from "@/features/practice/practice-complete";
import { PracticeFeedback } from "@/features/practice/practice-feedback";
import { PracticeHeader } from "@/features/practice/practice-header";
import {
  getPracticeIvshiMoment,
  type PracticeCheckStatus,
  type PracticeView,
} from "@/features/practice/practice-ivshi";
import { PracticeQuestionCard } from "@/features/practice/practice-question-card";
import { PracticeReview } from "@/features/practice/practice-review";
import { recordPracticeSession } from "@/services/practice/practice-repository";
import { writeActiveCurriculumTopic } from "@/services/curriculum";
import type { Grade } from "@/domain/types";

type QuestionAttempt = {
  selectedChoiceId: string | null;
  firstSubmittedId: string | null;
  correct: boolean;
  incorrect: boolean;
  retryUsed: boolean;
  hintUsed: boolean;
};

function emptyAttempt(): QuestionAttempt {
  return {
    selectedChoiceId: null,
    firstSubmittedId: null,
    correct: false,
    incorrect: false,
    retryUsed: false,
    hintUsed: false,
  };
}

type PracticeExperienceProps = {
  practice: PracticeSet;
  grade: Grade;
};

export function PracticeExperience({
  practice,
  grade,
}: PracticeExperienceProps) {
  const [view, setView] = useState<PracticeView>("question");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [status, setStatus] = useState<PracticeCheckStatus>("idle");
  const [attempts, setAttempts] = useState<QuestionAttempt[]>(() =>
    practice.questions.map(() => emptyAttempt()),
  );
  const ivshiPresence = useIvshiPresence();

  useEffect(() => {
    writeActiveCurriculumTopic(practice.areaId);
  }, [practice.areaId]);

  const question = practice.questions[questionIndex];
  const attempt = attempts[questionIndex];
  const questionCount = practice.questions.length;

  const signals = useMemo<PracticeAttemptSignal[]>(
    () =>
      practice.questions.map((item, index) => ({
        questionId: item.id,
        concept: item.concept,
        difficulty: item.difficulty,
        correct: attempts[index]?.correct ?? false,
        incorrect: attempts[index]?.incorrect ?? false,
        retryUsed: attempts[index]?.retryUsed ?? false,
        hintUsed: attempts[index]?.hintUsed ?? false,
      })),
    [attempts, practice.questions],
  );

  const summary = useMemo(() => buildPracticeSummary(signals), [signals]);
  const ivshi = getPracticeIvshiMoment({
    view,
    status,
    questionIndex,
    difficulty: question?.difficulty ?? "easy",
  });

  const reviewItems = practice.questions.map((item, index) => {
    const reviewChoiceId = attempts[index]?.firstSubmittedId;
    return {
      question: item,
      selectedChoice:
        item.choices.find((choice) => choice.id === reviewChoiceId) ?? null,
    };
  });

  function updateAttempt(patch: Partial<QuestionAttempt>) {
    setAttempts((current) =>
      current.map((item, index) =>
        index === questionIndex ? { ...item, ...patch } : item,
      ),
    );
  }

  function checkAnswer() {
    if (!question || !attempt?.selectedChoiceId) {
      return;
    }

    const firstSubmittedId =
      attempt.firstSubmittedId ?? attempt.selectedChoiceId;
    const isCorrect = attempt.selectedChoiceId === question.correctChoiceId;

    if (isCorrect) {
      updateAttempt({
        firstSubmittedId,
        correct: true,
      });
      setStatus("correct");
      ivshiPresence.noteSuccess();
      return;
    }

    updateAttempt({
      firstSubmittedId,
      incorrect: true,
      hintUsed: true,
    });
    setStatus("incorrect");
    ivshiPresence.noteMistake();
  }

  function retry() {
    updateAttempt({
      selectedChoiceId: null,
      retryUsed: true,
    });
    setStatus("idle");
  }

  function goNext() {
    if (questionIndex + 1 >= questionCount) {
      recordPracticeSession({
        sessionId: crypto.randomUUID(),
        practiceSetId: practice.id,
        topicTitle: practice.topicTitle,
        concept: practice.concept,
        signals,
      });
      ivshiPresence.noteSuccess();
      setView("complete");
      return;
    }

    setQuestionIndex((current) => current + 1);
    setStatus("idle");
  }

  return (
    <div className="flex flex-1 flex-col gap-8 pb-4">
      <PracticeHeader
        subjectLabel={practice.subjectLabel}
        topicTitle={practice.topicTitle}
      />
      {ivshi ? (
        <IvshiCompanion
          state={ivshi.state}
          size={18}
          label={ivshi.message}
          className="text-base leading-7 text-ink-muted"
        />
      ) : null}
      {view === "question" && question && attempt ? (
        <div key={question.id} className="flex flex-col gap-6 animate-rise">
          <PracticeQuestionCard
            question={question}
            questionNumber={questionIndex + 1}
            questionCount={questionCount}
            selectedId={attempt.selectedChoiceId}
            status={status}
            onSelect={(id) => updateAttempt({ selectedChoiceId: id })}
            onCheck={checkAnswer}
          />
          <PracticeFeedback
            status={status}
            grade={grade}
            questionId={question.id}
            explanation={question.explanation}
            hint={question.hint}
            onNext={goNext}
            onRetry={retry}
          />
        </div>
      ) : null}
      {view === "complete" ? (
        <div className="animate-rise">
          <PracticeComplete
            topicTitle={practice.topicTitle}
            summary={summary}
            onReview={() => setView("review")}
          />
        </div>
      ) : null}
      {view === "review" ? (
        <div className="animate-rise">
          <PracticeReview
            items={reviewItems}
            onBack={() => setView("complete")}
          />
        </div>
      ) : null}
    </div>
  );
}
