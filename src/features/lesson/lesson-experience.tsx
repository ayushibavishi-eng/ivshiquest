"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { IvshiCompanion } from "@/components/companion";
import { Button, ButtonLink } from "@/components/ui/button";
import type {
  LessonQuestion,
  OpenResponseEvaluation,
  ResolvedCompleteLesson,
} from "@/domain/complete-lesson";
import {
  COMPLETE_LESSON_PHASES,
  evaluateOpenResponse,
  isWriteQuestion,
  LESSON_LOOP_HINTS,
  LESSON_LOOP_LABELS,
  LESSON_LOOP_STAGES,
  lessonLoopStage,
  openResponseAllowsContinue,
  writeAnswerSucceeds,
} from "@/domain/complete-lesson";
import { OpenResponseNote } from "@/features/lesson/open-response-note";
import { ExplorePhase } from "@/features/lesson/phases/explore-phase";
import { GrowPhase } from "@/features/lesson/phases/grow-phase";
import { QuestionPhase } from "@/features/lesson/phases/question-phase";
import { TryPhase } from "@/features/lesson/phases/try-phase";
import { UnderstandPhase } from "@/features/lesson/phases/understand-phase";
import { WonderPhase } from "@/features/lesson/phases/wonder-phase";
import { WritePhase } from "@/features/lesson/phases/write-phase";
import { islandClassForId } from "@/features/learning-world/world-path-map";
import { ROUTES, studentLearnTopicHref } from "@/lib/constants";
import { cn } from "@/lib/cn";
import {
  getCurriculumProgress,
  raiseCurriculumProgress,
  subscribeCurriculumProgress,
  writeActiveCurriculumTopic,
} from "@/services/curriculum";
import { writeActiveLesson } from "@/services/lessons";

function raiseLessonFamilyProgress(
  lesson: ResolvedCompleteLesson,
  state: "started" | "practiced" | "mastered",
) {
  raiseCurriculumProgress(lesson.conceptId, state);
  for (const skillId of lesson.coveredSkillIds) {
    raiseCurriculumProgress(skillId, state);
  }
}

type LessonExperienceProps = {
  lesson: ResolvedCompleteLesson;
  worldTitle: string;
  worldId: string;
  nextConcept?: { id: string; title: string };
};

function questionIsCorrect(
  question: LessonQuestion,
  selectedId: string | null,
  writeValue: string,
) {
  if (isWriteQuestion(question)) {
    return writeAnswerSucceeds(writeValue, question);
  }
  return selectedId === question.correctChoiceId;
}

export function LessonExperience({
  lesson,
  worldTitle,
  worldId,
  nextConcept,
}: LessonExperienceProps) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);
  const [exploreId, setExploreId] = useState<string | null>(null);
  const [tryRevealed, setTryRevealed] = useState(false);
  const [writeValue, setWriteValue] = useState("");
  const [finished, setFinished] = useState(false);
  const [teachEvaluation, setTeachEvaluation] =
    useState<OpenResponseEvaluation | null>(null);

  const phase = COMPLETE_LESSON_PHASES[phaseIndex] ?? "wonder";
  const loopStage = lessonLoopStage(phase);
  const loopIndex = LESSON_LOOP_STAGES.indexOf(loopStage);
  const content = lesson.content;
  const hasExploreInvestigation = Boolean(
    content.explore.activity.investigation,
  );
  const practiceQuestion = content.practice[itemIndex];
  const reasoningQuestion = content.reasoning[itemIndex];
  const retrieveQuestion = content.retrieve[itemIndex];
  const mark = lesson.title
    .replace(/[^A-Za-z0-9]/g, "")
    .slice(0, 2)
    .toUpperCase();

  const promptKeyIdeas =
    phase === "reflect"
      ? content.reflect.keyIdeas
      : phase === "teach"
        ? content.teach.keyIdeas
        : [];
  const promptEvaluation = evaluateOpenResponse(writeValue, promptKeyIdeas);
  const progressState = useSyncExternalStore(
    subscribeCurriculumProgress,
    () => getCurriculumProgress(lesson.conceptId),
    () => "unvisited",
  );

  useEffect(() => {
    writeActiveCurriculumTopic(lesson.conceptId);
    raiseLessonFamilyProgress(lesson, "started");
  }, [lesson]);

  useEffect(() => {
    writeActiveLesson({
      conceptId: lesson.conceptId,
      lessonId: lesson.lessonId,
      grade: lesson.grade,
      subject: lesson.subject,
      stage: phase,
    });
  }, [lesson.conceptId, lesson.grade, lesson.lessonId, lesson.subject, phase]);

  const canContinue = useMemo(() => {
    if (phase === "explore") {
      if (hasExploreInvestigation) {
        return Boolean(exploreId);
      }
      return Boolean(exploreId) && tryRevealed;
    }
    if (phase === "practice" || phase === "reasoning" || phase === "retrieve" || phase === "mastery") {
      return checked;
    }
    if (phase === "reflect" || phase === "teach") {
      return openResponseAllowsContinue(promptEvaluation);
    }
    return true;
  }, [
    checked,
    exploreId,
    hasExploreInvestigation,
    phase,
    promptEvaluation,
    tryRevealed,
  ]);

  function resetQuestionState() {
    setSelectedId(null);
    setChecked(false);
    setHintOpen(false);
    setWriteValue("");
  }

  function goNext() {
    if (phase === "practice") {
      raiseLessonFamilyProgress(lesson, "practiced");
      if (itemIndex < content.practice.length - 1) {
        setItemIndex((current) => current + 1);
        resetQuestionState();
        return;
      }
    } else if (phase === "reasoning") {
      if (itemIndex < content.reasoning.length - 1) {
        setItemIndex((current) => current + 1);
        resetQuestionState();
        return;
      }
    } else if (phase === "retrieve") {
      if (itemIndex < content.retrieve.length - 1) {
        setItemIndex((current) => current + 1);
        resetQuestionState();
        return;
      }
    } else if (phase === "mastery") {
      if (questionIsCorrect(content.mastery, selectedId, writeValue)) {
        raiseLessonFamilyProgress(lesson, "mastered");
      }
    }

    if (phase === "teach") {
      setTeachEvaluation(promptEvaluation);
      setFinished(true);
      return;
    }

    resetQuestionState();
    setTryRevealed(false);
    setExploreId(null);
    setItemIndex(0);
    setPhaseIndex((current) =>
      Math.min(current + 1, COMPLETE_LESSON_PHASES.length - 1),
    );
  }

  function checkCurrent() {
    const current =
      phase === "practice"
        ? practiceQuestion
        : phase === "reasoning"
          ? reasoningQuestion
          : phase === "retrieve"
            ? retrieveQuestion
            : phase === "mastery"
              ? content.mastery
              : undefined;
    if (!current) {
      return;
    }
    if (isWriteQuestion(current)) {
      if (current.acceptedAnswers.length === 0) {
        if (
          !openResponseAllowsContinue(
            evaluateOpenResponse(writeValue, current.keyIdeas),
          )
        ) {
          return;
        }
      } else if (writeValue.trim().length < 1) {
        return;
      }
      setChecked(true);
      if (phase === "practice") {
        raiseLessonFamilyProgress(lesson, "practiced");
      }
      return;
    }
    if (!selectedId) {
      return;
    }
    setChecked(true);
    if (phase === "practice") {
      raiseLessonFamilyProgress(lesson, "practiced");
    }
  }

  const question =
    phase === "practice"
      ? practiceQuestion
      : phase === "reasoning"
        ? reasoningQuestion
        : phase === "retrieve"
          ? retrieveQuestion
          : phase === "mastery"
            ? content.mastery
            : undefined;

  const questionPhase =
    phase === "practice" ||
    phase === "reasoning" ||
    phase === "retrieve" ||
    phase === "mastery";

  return (
    <div
      className="flex flex-1 flex-col gap-6 pb-8"
      data-lesson-id={lesson.lessonId}
      data-concept-id={lesson.conceptId}
      data-lesson-grade={lesson.grade}
      data-lesson-subject={lesson.subject}
      data-lesson-phase={finished ? "complete" : phase}
      data-curriculum-progress={progressState}
      data-teach-state={teachEvaluation?.state}
    >
      <header className="flex items-center gap-4">
        <span
          aria-hidden="true"
          className={cn(
            "flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-semibold shadow-[0_12px_24px_rgb(14_68_80_/_0.14)]",
            islandClassForId(lesson.conceptId),
          )}
        >
          {mark}
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {worldTitle} · Grade {lesson.grade}
          </p>
          <p className="sr-only">
            Lesson {lesson.lessonId} for concept {lesson.conceptId}, grade{" "}
            {lesson.grade}, subject {lesson.subject}
          </p>
          <h1 className="mt-1 text-[1.7rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
            {lesson.title}
          </h1>
        </div>
      </header>

      <p className="text-sm leading-6 text-ink-muted">{content.objective}</p>

      <div className="flex flex-col gap-1.5" aria-label="Learning path">
        <p className="text-sm font-semibold text-teal">
          {LESSON_LOOP_LABELS[loopStage]}
        </p>
        <p className="text-sm leading-6 text-ink-muted">
          {LESSON_LOOP_HINTS[loopStage]}
        </p>
        <ol className="mt-1 flex flex-wrap gap-1.5">
          {LESSON_LOOP_STAGES.map((item, index) => (
            <li key={item}>
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-all",
                  index === loopIndex
                    ? "w-5 bg-teal"
                    : index < loopIndex
                      ? "w-1.5 bg-teal/40"
                      : "w-1.5 bg-ink/15",
                )}
              >
                <span className="sr-only">{LESSON_LOOP_LABELS[item]}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      {finished ? (
        <section className="overflow-hidden rounded-[1.8rem] bg-[linear-gradient(180deg,#cfeaf3_0%,#f7fbfd_100%)] px-5 py-7">
          <IvshiCompanion
            state={
              teachEvaluation?.state === "likely_understanding"
                ? "celebrating"
                : "helping"
            }
            size={22}
            label={
              teachEvaluation?.state === "likely_understanding"
                ? `${lesson.title} is connecting. ${content.masteryCriteria}`
                : "You started teaching this idea. A long answer is not enough on its own — come back and include the key ideas when you are ready."
            }
            className="text-base text-ink"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {nextConcept ? (
              <ButtonLink href={studentLearnTopicHref(nextConcept.id)}>
                Next: {nextConcept.title} →
              </ButtonLink>
            ) : (
              <ButtonLink href={ROUTES.student.tree}>
                Back to the Knowledge Tree
              </ButtonLink>
            )}
            <ButtonLink href={ROUTES.student.tree} variant="quiet" size="inline">
              See it on the Knowledge Tree
            </ButtonLink>
            <ButtonLink
              href={studentLearnTopicHref(worldId)}
              variant="quiet"
              size="inline"
            >
              Back to {worldTitle}
            </ButtonLink>
          </div>
        </section>
      ) : (
        <section className="animate-rise">
          {phase === "wonder" ? (
            <WonderPhase text={content.wonder.prompt} />
          ) : null}
          {phase === "explore" ? (
            <div className="flex flex-col gap-8">
              <ExplorePhase
                text={content.explore.text}
                activity={content.explore.activity}
                selectedId={exploreId}
                onSelect={setExploreId}
              />
              {exploreId && !hasExploreInvestigation ? (
                <TryPhase
                  prompt={content.try.prompt}
                  reveal={content.try.reveal}
                  revealed={tryRevealed}
                  onReveal={() => {
                    setTryRevealed(true);
                  }}
                />
              ) : null}
            </div>
          ) : null}
          {phase === "understand" ? (
            <UnderstandPhase
              paragraphs={content.understand.paragraphs}
              examples={content.examples}
              connection={content.connection}
            />
          ) : null}
          {phase === "grow" ? (
            <GrowPhase
              title={lesson.title}
              progress={getCurriculumProgress(lesson.conceptId)}
            />
          ) : null}
          {question && questionPhase ? (
            <QuestionPhase
              key={question.id}
              question={question}
              grade={lesson.grade}
              breakthrough={phase === "mastery"}
              selectedId={selectedId}
              writeValue={writeValue}
              checked={checked}
              hintOpen={hintOpen}
              onSelect={setSelectedId}
              onWrite={setWriteValue}
              onCheck={checkCurrent}
              onHint={() => {
                setHintOpen(true);
              }}
            />
          ) : null}
          {phase === "reflect" ? (
            <div className="flex flex-col gap-4">
              <IvshiCompanion
                state="curious"
                size={20}
                label="What shifted in your mind — not just which answer you picked?"
                className="text-sm leading-6 text-ink-muted"
              />
              <WritePhase
                prompt={content.reflect.prompt}
                value={writeValue}
                onChange={setWriteValue}
                placeholder="A few honest sentences are enough."
              />
              <OpenResponseNote
                evaluation={promptEvaluation}
                grade={lesson.grade}
              />
            </div>
          ) : null}
          {phase === "teach" ? (
            <div className="flex flex-col gap-4">
              <IvshiCompanion
                state="curious"
                size={20}
                label="Teach me as if I am a little younger. I will listen."
                className="text-sm leading-6 text-ink-muted"
              />
              <WritePhase
                prompt={content.teach.prompt}
                value={writeValue}
                onChange={setWriteValue}
                placeholder="Teach it as if Ivshi is a little younger than you."
              />
              <OpenResponseNote
                evaluation={promptEvaluation}
                grade={lesson.grade}
              />
            </div>
          ) : null}

          <div className="mt-8">
            {phase === "practice" && checked ? (
              <Button onClick={goNext}>
                {itemIndex < content.practice.length - 1
                  ? "Next question"
                  : "Continue"}
              </Button>
            ) : null}
            {phase === "reasoning" && checked ? (
              <Button onClick={goNext}>
                {itemIndex < content.reasoning.length - 1
                  ? "Next question"
                  : "Continue"}
              </Button>
            ) : null}
            {phase === "retrieve" && checked ? (
              <Button onClick={goNext}>
                {itemIndex < content.retrieve.length - 1
                  ? "Next question"
                  : "Continue"}
              </Button>
            ) : null}
            {phase === "mastery" && checked ? (
              <Button onClick={goNext}>Continue</Button>
            ) : null}
            {phase === "explore" && canContinue ? (
              <Button onClick={goNext}>Continue</Button>
            ) : null}
            {phase === "wonder" || phase === "understand" || phase === "grow" ? (
              <Button onClick={goNext}>
                {phase === "grow" ? "Teach this idea" : "Continue"}
              </Button>
            ) : null}
            {phase === "reflect" || phase === "teach" ? (
              <Button onClick={goNext} disabled={!canContinue}>
                {phase === "teach" ? "Finish this idea" : "Continue"}
              </Button>
            ) : null}
          </div>
        </section>
      )}

      <div className="flex flex-wrap gap-4">
        <ButtonLink
          href={ROUTES.student.tree}
          variant="quiet"
          size="inline"
          className="self-start"
        >
          Back to the Knowledge Tree
        </ButtonLink>
        <ButtonLink
          href={studentLearnTopicHref(worldId)}
          variant="quiet"
          size="inline"
          className="self-start"
        >
          Back to {worldTitle}
        </ButtonLink>
      </div>
    </div>
  );
}
