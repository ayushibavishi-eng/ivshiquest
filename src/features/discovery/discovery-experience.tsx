"use client";

import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import type { DiscoveryContent, DiscoveryPhase, Grade } from "@/domain";
import { getExplanationForGrade } from "@/domain";
import { DiscoveryProgress } from "@/features/discovery/discovery-progress";
import { CompleteStep } from "@/features/discovery/steps/complete-step";
import { ConnectStep } from "@/features/discovery/steps/connect-step";
import { DiscoverMoreStep } from "@/features/discovery/steps/discover-more-step";
import { ExplainStep } from "@/features/discovery/steps/explain-step";
import { ExploreStep } from "@/features/discovery/steps/explore-step";
import { PredictStep } from "@/features/discovery/steps/predict-step";
import { RetrieveStep } from "@/features/discovery/steps/retrieve-step";
import { WonderStep } from "@/features/discovery/steps/wonder-step";
import { ROUTES } from "@/lib/constants";
import { markConceptLearned } from "@/services/knowledge-tree";
import { recordDiscoveryCompleted } from "@/services/discovery/client-history";
import { DiscoveryDayLock } from "@/services/discovery/client-history";
import { calendarDateISO } from "@/domain/curiosity";
import { useIvshiPresence } from "@/components/ivshi/ivshi-presence";

type DiscoveryStep =
  | "wonder"
  | "predict"
  | "explore"
  | "explain"
  | "retrieve"
  | "connect"
  | "discover-more"
  | "complete";

const STEP_PHASE: Record<DiscoveryStep, DiscoveryPhase> = {
  wonder: "wonder",
  predict: "wonder",
  explore: "explore",
  explain: "understand",
  retrieve: "understand",
  connect: "connect",
  "discover-more": "connect",
  complete: "connect",
};

type DiscoveryExperienceProps = {
  discovery: DiscoveryContent;
  grade: Grade;
};

export function DiscoveryExperience({
  discovery,
  grade,
}: DiscoveryExperienceProps) {
  const [step, setStep] = useState<DiscoveryStep>("wonder");
  const [guessId, setGuessId] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [retrieveId, setRetrieveId] = useState<string | null>(null);
  const [retrieveStatus, setRetrieveStatus] = useState<
    "idle" | "incorrect" | "correct"
  >("idle");
  const [showHint, setShowHint] = useState(false);
  const ivshiPresence = useIvshiPresence();

  const explanation = useMemo(
    () => getExplanationForGrade(discovery, grade),
    [discovery, grade],
  );
  const selectedGuess = discovery.predictionChoices.find(
    (choice) => choice.id === guessId,
  );
  const category = `${discovery.subjectLabel} · ${discovery.durationMinutes} minutes`;

  function checkRetrieve() {
    if (!retrieveId) {
      return;
    }

    if (retrieveId === discovery.retrieval.correctChoiceId) {
      setRetrieveStatus("correct");
      setShowHint(false);
      ivshiPresence.noteSuccess();
      return;
    }

    setRetrieveStatus("incorrect");
    ivshiPresence.noteMistake();
  }

  function retryRetrieve() {
    setRetrieveId(null);
    setRetrieveStatus("idle");
  }

  function finishDiscovery() {
    recordDiscoveryCompleted(discovery.id);
    if (discovery.conceptId) {
      markConceptLearned(discovery.conceptId);
    }
    ivshiPresence.noteSuccess();
    setStep("complete");
  }

  return (
    <div className="flex flex-1 flex-col gap-8">
      <DiscoveryDayLock date={calendarDateISO()} discoveryId={discovery.id} />
      <header className="flex items-start justify-between gap-4">
        <DiscoveryProgress current={STEP_PHASE[step]} />
        <ButtonLink
          href={ROUTES.student.home}
          variant="quiet"
          size="inline"
          className="shrink-0 text-sm"
        >
          Home
        </ButtonLink>
      </header>
      <div key={step} className="animate-rise">
        {step === "wonder" ? (
          <WonderStep
            question={discovery.question}
            category={category}
            prompt={discovery.wonderPrompt}
            choices={discovery.predictionChoices}
            selectedId={guessId}
            onSelect={setGuessId}
            onContinue={() => setStep("predict")}
          />
        ) : null}
        {step === "predict" && selectedGuess ? (
          <PredictStep
            response={discovery.predictResponse}
            encouragement={discovery.predictEncouragement}
            selected={selectedGuess}
            onContinue={() => setStep("explore")}
          />
        ) : null}
        {step === "explore" ? (
          <ExploreStep
            prompt={discovery.exploration.prompt}
            lookPrompt={discovery.exploration.lookPrompt}
            captionAfterReveal={discovery.exploration.captionAfterReveal}
            visual={discovery.exploration.visual}
            revealed={revealed}
            onReveal={() => setRevealed(true)}
            onContinue={() => setStep("explain")}
          />
        ) : null}
        {step === "explain" ? (
          <ExplainStep
            explanation={explanation}
            onContinue={() => setStep("retrieve")}
          />
        ) : null}
        {step === "retrieve" ? (
          <RetrieveStep
            question={discovery.retrieval.question}
            questionId={discovery.id}
            grade={grade}
            choices={discovery.retrieval.choices}
            selectedId={retrieveId}
            status={retrieveStatus}
            showHint={showHint}
            incorrectFeedback={discovery.retrieval.incorrectFeedback}
            hint={discovery.retrieval.hint}
            onSelect={setRetrieveId}
            onCheck={checkRetrieve}
            onRetry={retryRetrieve}
            onHint={() => setShowHint(true)}
            onContinue={() => setStep("connect")}
          />
        ) : null}
        {step === "connect" ? (
          <ConnectStep
            heading={discovery.connection.heading}
            hook={discovery.connection.hook}
            explanation={discovery.connection.explanation}
            onContinue={() => setStep("discover-more")}
          />
        ) : null}
        {step === "discover-more" ? (
          <DiscoverMoreStep
            prompt={discovery.discoverMore.prompt}
            question={discovery.discoverMore.question}
            onContinue={finishDiscovery}
          />
        ) : null}
        {step === "complete" ? (
          <CompleteStep
            title={discovery.completion.title}
            summary={discovery.completion.summary}
            treeMessage={discovery.completion.treeMessage}
          />
        ) : null}
      </div>
    </div>
  );
}
