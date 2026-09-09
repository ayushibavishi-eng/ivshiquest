"use client";

import { useEffect, useMemo, useState } from "react";
import { IvshiCompanion } from "@/components/companion";
import { Button, ButtonLink } from "@/components/ui/button";
import type { ResolvedCompleteLesson } from "@/domain/complete-lesson";
import {
  COMPLETE_LESSON_PHASE_LABELS,
  COMPLETE_LESSON_PHASES,
} from "@/domain/complete-lesson";
import { ExamplesPhase } from "@/features/lesson/phases/examples-phase";
import { ExplorePhase } from "@/features/lesson/phases/explore-phase";
import { QuestionPhase } from "@/features/lesson/phases/question-phase";
import { TryPhase } from "@/features/lesson/phases/try-phase";
import { UnderstandPhase } from "@/features/lesson/phases/understand-phase";
import { WonderPhase } from "@/features/lesson/phases/wonder-phase";
import { WritePhase } from "@/features/lesson/phases/write-phase";
import { islandClassForId } from "@/features/learning-world/world-path-map";
import { studentLearnTopicHref } from "@/lib/constants";
import { cn } from "@/lib/cn";
import {
  raiseCurriculumProgress,
  writeActiveCurriculumTopic,
} from "@/services/curriculum";

type LessonExperienceProps = {
  lesson: ResolvedCompleteLesson;
  worldTitle: string;
  worldId: string;
  nextConcept?: { id: string; title: string };
};

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

  const phase = COMPLETE_LESSON_PHASES[phaseIndex] ?? "wonder";
  const content = lesson.content;
  const practiceQuestion = content.practice[itemIndex];
  const reasoningQuestion = content.reasoning[itemIndex];
  const mark = lesson.title
    .replace(/[^A-Za-z0-9]/g, "")
    .slice(0, 2)
    .toUpperCase();

  useEffect(() => {
    writeActiveCurriculumTopic(lesson.conceptId);
    raiseCurriculumProgress(lesson.conceptId, "started");
  }, [lesson.conceptId]);

  const canContinue = useMemo(() => {
    if (phase === "explore") {
      return Boolean(exploreId);
    }
    if (phase === "try") {
      return tryRevealed;
    }
    if (phase === "practice" || phase === "reasoning" || phase === "mastery") {
      return checked;
    }
    if (phase === "reflect") {
      return writeValue.trim().length >= 8;
    }
    if (phase === "teach") {
      return writeValue.trim().length >= 12;
    }
    return true;
  }, [checked, exploreId, phase, tryRevealed, writeValue]);

  function resetQuestionState() {
    setSelectedId(null);
    setChecked(false);
    setHintOpen(false);
  }

  function goNext() {
    if (phase === "practice") {
      raiseCurriculumProgress(lesson.conceptId, "practiced");
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
    } else if (
      phase === "mastery" &&
      selectedId === content.mastery.correctChoiceId
    ) {
      raiseCurriculumProgress(lesson.conceptId, "mastered");
    }

    if (phase === "teach") {
      setFinished(true);
      return;
    }

    resetQuestionState();
    setTryRevealed(false);
    setExploreId(null);
    setWriteValue("");
    setItemIndex(0);
    setPhaseIndex((current) =>
      Math.min(current + 1, COMPLETE_LESSON_PHASES.length - 1),
    );
  }

  function checkCurrent() {
    if (!selectedId) {
      return;
    }
    setChecked(true);
    if (phase === "practice") {
      raiseCurriculumProgress(lesson.conceptId, "practiced");
    }
  }

  const question =
    phase === "practice"
      ? practiceQuestion
      : phase === "reasoning"
        ? reasoningQuestion
        : phase === "mastery"
          ? content.mastery
          : undefined;

  return (
    <div className="flex flex-1 flex-col gap-6 pb-8">
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
          <h1 className="mt-1 text-[1.7rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
            {lesson.title}
          </h1>
        </div>
      </header>

      <p className="text-sm leading-6 text-ink-muted">{content.objective}</p>

      <div className="flex items-center gap-3" aria-label="Learning path">
        <p className="text-sm font-semibold text-teal">
          {COMPLETE_LESSON_PHASE_LABELS[phase]}
        </p>
        <ol className="flex flex-wrap gap-1.5">
          {COMPLETE_LESSON_PHASES.map((item, index) => (
            <li key={item}>
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-all",
                  index === phaseIndex
                    ? "w-5 bg-teal"
                    : index < phaseIndex
                      ? "w-1.5 bg-teal/40"
                      : "w-1.5 bg-ink/15",
                )}
              >
                <span className="sr-only">
                  {COMPLETE_LESSON_PHASE_LABELS[item]}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      {finished ? (
        <section className="overflow-hidden rounded-[1.8rem] bg-[linear-gradient(180deg,#cfeaf3_0%,#f7fbfd_100%)] px-5 py-7">
          <IvshiCompanion
            state="celebrating"
            size={22}
            label={`${lesson.title} is connecting. ${content.masteryCriteria}`}
            className="text-base text-ink"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {nextConcept ? (
              <ButtonLink href={studentLearnTopicHref(nextConcept.id)}>
                Next: {nextConcept.title} →
              </ButtonLink>
            ) : (
              <ButtonLink href={studentLearnTopicHref(worldId)}>
                Back to {worldTitle}
              </ButtonLink>
            )}
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
            <ExplorePhase
              text={content.explore.text}
              activity={content.explore.activity}
              selectedId={exploreId}
              onSelect={setExploreId}
            />
          ) : null}
          {phase === "understand" ? (
            <UnderstandPhase paragraphs={content.understand.paragraphs} />
          ) : null}
          {phase === "examples" ? (
            <ExamplesPhase
              examples={content.examples}
              connection={content.connection}
            />
          ) : null}
          {phase === "try" ? (
            <TryPhase
              prompt={content.try.prompt}
              reveal={content.try.reveal}
              revealed={tryRevealed}
              onReveal={() => {
                setTryRevealed(true);
              }}
            />
          ) : null}
          {question &&
          (phase === "practice" ||
            phase === "reasoning" ||
            phase === "mastery") ? (
            <QuestionPhase
              question={question}
              selectedId={selectedId}
              checked={checked}
              hintOpen={hintOpen}
              onSelect={setSelectedId}
              onCheck={checkCurrent}
              onHint={() => {
                setHintOpen(true);
              }}
            />
          ) : null}
          {phase === "reflect" ? (
            <WritePhase
              prompt={content.reflect.prompt}
              value={writeValue}
              onChange={setWriteValue}
              placeholder="A few honest sentences are enough."
            />
          ) : null}
          {phase === "teach" ? (
            <WritePhase
              prompt={content.teach.prompt}
              value={writeValue}
              onChange={setWriteValue}
              placeholder="Teach it as if Ivshi is a little younger than you."
            />
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
            {phase === "mastery" && checked ? (
              <Button onClick={goNext}>Continue</Button>
            ) : null}
            {phase === "try" && tryRevealed ? (
              <Button onClick={goNext}>Continue</Button>
            ) : null}
            {phase === "explore" && exploreId ? (
              <Button onClick={goNext}>Continue</Button>
            ) : null}
            {phase === "wonder" ||
            phase === "understand" ||
            phase === "examples" ? (
              <Button onClick={goNext}>Continue</Button>
            ) : null}
            {phase === "reflect" || phase === "teach" ? (
              <Button onClick={goNext} disabled={!canContinue}>
                {phase === "teach" ? "Finish this idea" : "Continue"}
              </Button>
            ) : null}
          </div>
        </section>
      )}

      <ButtonLink
        href={studentLearnTopicHref(worldId)}
        variant="quiet"
        size="inline"
        className="self-start"
      >
        Back to {worldTitle}
      </ButtonLink>
    </div>
  );
}
