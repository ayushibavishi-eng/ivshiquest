"use client";

import { useEffect, useState } from "react";
import { IvshiCompanion, IvshiMark } from "@/components/companion";
import { useIvshiPresence } from "@/components/ivshi/ivshi-presence";
import { Button, ButtonLink } from "@/components/ui/button";
import { companionFeedbackPhrase, lookTogetherPhrase } from "@/domain/companion-feedback";
import type {
  CurriculumConcept,
  CurriculumQuestion,
  LearningExperiencePhase,
} from "@/domain/curriculum";
import { LEARNING_EXPERIENCE_PHASE_LABELS } from "@/domain/curriculum";
import type { Grade } from "@/domain/types";
import { AnswerChoice } from "@/features/discovery/answer-choice";
import { QuestionResult } from "@/features/lesson/feedback/question-result";
import {
  ConceptExploreScene,
  ConceptTryScene,
  ShortChunks,
} from "@/features/learning-world/concept-scenes";
import { islandClassForId } from "@/features/learning-world/world-path-map";
import {
  RICH_WEATHER_CONCEPTS,
  weatherIslandClass,
  weatherMark,
} from "@/features/learning-world/weather-marks";
import { studentLearnTopicHref } from "@/lib/constants";
import { cn } from "@/lib/cn";
import {
  raiseCurriculumProgress,
  writeActiveCurriculumTopic,
} from "@/services/curriculum";

const PHASES: LearningExperiencePhase[] = [
  "wonder",
  "explore",
  "understand",
  "try",
  "practice",
  "reflect",
  "mastery",
];

type ConceptJourneyProps = {
  concept: CurriculumConcept;
  worldTitle: string;
  worldId: string;
  grade: Grade;
  nextConcept?: { id: string; title: string };
};

export function ConceptJourney({
  concept,
  worldTitle,
  worldId,
  grade,
  nextConcept,
}: ConceptJourneyProps) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [tryRevealed, setTryRevealed] = useState(false);
  const [exploreTouched, setExploreTouched] = useState(false);
  const [finished, setFinished] = useState(false);

  const phase = PHASES[phaseIndex] ?? "wonder";
  const experience = concept.experience;
  const practiceQuestion = experience?.practice[practiceIndex];
  const isWeather = worldId === "weather";
  const rich = isWeather && RICH_WEATHER_CONCEPTS.has(concept.id);
  const exploreReady = !rich || exploreTouched;
  const mark = concept.title
    .replace(/[^A-Za-z0-9]/g, "")
    .slice(0, 2)
    .toUpperCase();

  useEffect(() => {
    writeActiveCurriculumTopic(concept.id);
    raiseCurriculumProgress(concept.id, "started");
  }, [concept.id]);

  function goNext() {
    if (phase === "practice") {
      raiseCurriculumProgress(concept.id, "practiced");
    }

    if (phase === "mastery") {
      raiseCurriculumProgress(concept.id, "mastered");
      setFinished(true);
      return;
    }

    setSelectedId(null);
    setChecked(false);
    setTryRevealed(false);
    setPhaseIndex((current) => Math.min(current + 1, PHASES.length - 1));
  }

  function checkQuestion(question: CurriculumQuestion) {
    if (!selectedId) {
      return;
    }
    setChecked(true);
    if (phase === "practice") {
      raiseCurriculumProgress(concept.id, "practiced");
    }
    if (phase === "mastery" && selectedId === question.correctChoiceId) {
      raiseCurriculumProgress(concept.id, "mastered");
    }
  }

  if (!experience) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col gap-6 pb-8">
      <header className="flex items-center gap-4">
        <span
          aria-hidden="true"
          className={cn(
            "flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-[0_12px_24px_rgb(14_68_80_/_0.14)]",
            isWeather ? "text-2xl" : "text-lg font-semibold",
            isWeather
              ? weatherIslandClass(concept.id)
              : islandClassForId(concept.id),
          )}
        >
          {isWeather ? weatherMark(concept.id) : mark}
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {worldTitle}
          </p>
          <h1 className="mt-1 text-[1.7rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
            {concept.title}
          </h1>
        </div>
      </header>

      <div className="flex items-center gap-3" aria-label="Learning path">
        <p className="text-sm font-semibold text-teal">
          {LEARNING_EXPERIENCE_PHASE_LABELS[phase]}
        </p>
        <ol className="flex gap-1.5">
          {PHASES.map((item, index) => (
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
                  {LEARNING_EXPERIENCE_PHASE_LABELS[item]}
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
            label={
              isWeather
                ? "This part of the sky is connecting. Another island is waiting."
                : "This idea is connecting. Another place in the world is waiting."
            }
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
              Wander {isWeather ? "the sky" : worldTitle}
            </ButtonLink>
          </div>
        </section>
      ) : (
        <section className="animate-rise">
          {phase === "wonder" ? (
            <WonderBlock text={experience.wonder.prompt} />
          ) : null}
          {phase === "explore" ? (
            <ConceptExploreScene
              conceptId={concept.id}
              text={experience.explore.text}
              interacted={exploreTouched}
              onInteract={() => {
                setExploreTouched(true);
              }}
            />
          ) : null}
          {phase === "understand" ? (
            <ShortChunks text={experience.understand.text} />
          ) : null}
          {phase === "try" ? (
            <ConceptTryScene
              conceptId={concept.id}
              prompt={experience.try.prompt}
              note={experience.try.note}
              revealed={tryRevealed}
              onReveal={() => {
                setTryRevealed(true);
              }}
            />
          ) : null}
          {phase === "practice" && practiceQuestion ? (
            <QuestionBlock
              key={practiceQuestion.id}
              question={practiceQuestion}
              grade={grade}
              selectedId={selectedId}
              checked={checked}
              onSelect={setSelectedId}
              onCheck={() => {
                checkQuestion(practiceQuestion);
              }}
            />
          ) : null}
          {phase === "reflect" ? (
            <WonderBlock text={experience.reflect.prompt} />
          ) : null}
          {phase === "mastery" ? (
            <QuestionBlock
              key={experience.mastery.id}
              question={experience.mastery}
              grade={grade}
              breakthrough
              selectedId={selectedId}
              checked={checked}
              onSelect={setSelectedId}
              onCheck={() => {
                checkQuestion(experience.mastery);
              }}
            />
          ) : null}

          <div className="mt-8">
            {phase === "practice" && checked ? (
              <Button
                onClick={() => {
                  if (practiceIndex < experience.practice.length - 1) {
                    setPracticeIndex((current) => current + 1);
                    setSelectedId(null);
                    setChecked(false);
                    return;
                  }
                  goNext();
                }}
              >
                {practiceIndex < experience.practice.length - 1
                  ? "Next question"
                  : "Continue"}
              </Button>
            ) : null}
            {phase === "try" && tryRevealed ? (
              <Button onClick={goNext}>Continue</Button>
            ) : null}
            {phase === "explore" && exploreReady ? (
              <Button onClick={goNext}>Continue</Button>
            ) : null}
            {phase === "wonder" ||
            phase === "understand" ||
            phase === "reflect" ? (
              <Button onClick={goNext}>Continue</Button>
            ) : null}
            {phase === "mastery" && checked ? (
              <Button onClick={goNext}>Finish this idea</Button>
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

function WonderBlock({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-[1.6rem] bg-[linear-gradient(160deg,#e7f4f8_0%,#fffaf2_100%)] px-4 py-5">
      <IvshiMark
        state="curious"
        size={26}
        decorative
        className="mt-1 shrink-0 text-teal"
      />
      <p className="text-[1.45rem] font-semibold leading-snug text-ink">{text}</p>
    </div>
  );
}

function QuestionBlock({
  question,
  grade,
  breakthrough = false,
  selectedId,
  checked,
  onSelect,
  onCheck,
}: {
  question: CurriculumQuestion;
  grade: Grade;
  breakthrough?: boolean;
  selectedId: string | null;
  checked: boolean;
  onSelect: (id: string) => void;
  onCheck: () => void;
}) {
  const ivshiPresence = useIvshiPresence();
  const [lookCount, setLookCount] = useState(0);
  const ideaWorked = selectedId === question.correctChoiceId;
  const lookingTogether = checked && !ideaWorked;

  function handleCheck() {
    if (ideaWorked) {
      if (breakthrough) {
        ivshiPresence.noteBreakthrough();
      } else {
        ivshiPresence.noteSuccess();
      }
      onCheck();
      return;
    }

    ivshiPresence.noteMistake();
    const nextLooks = lookCount + 1;
    setLookCount(nextLooks);
    if (nextLooks >= 3) {
      onCheck();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[1.35rem] font-semibold leading-snug text-ink">
        {question.prompt}
      </h2>
      <fieldset className="flex flex-col gap-2" disabled={checked}>
        <legend className="sr-only">{question.prompt}</legend>
        {question.choices.map((choice) => (
          <AnswerChoice
            key={choice.id}
            name={`journey-${question.id}`}
            value={choice.id}
            letter={choice.letter}
            text={choice.text}
            checked={selectedId === choice.id}
            onChange={onSelect}
          />
        ))}
      </fieldset>
      {!checked ? (
        <Button onClick={handleCheck} disabled={!selectedId} className="self-start">
          Check
        </Button>
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
          detail={question.explanation}
        />
      ) : null}
      {!checked && lookCount > 0 ? (
        <QuestionResult
          kind="look-again"
          phrase={companionFeedbackPhrase(
            "look-again",
            grade,
            `${question.id}:look-again:${String(lookCount)}`,
          )}
        />
      ) : null}
    </div>
  );
}
