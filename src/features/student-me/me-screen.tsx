"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Button, ButtonLink } from "@/components/ui/button";
import { GRADES, type Grade, type Student } from "@/domain/types";
import { useIvshiTransform } from "@/features/ivshi-transform";
import { ROUTES } from "@/lib/constants";
import { writeLearnerGrade } from "@/services/student/learner-grade";
import {
  normalizeLearnerDisplayName,
  readLearnerProfile,
  writeLearnerProfile,
} from "@/services/student/learner-profile";

type MeScreenProps = {
  student: Student;
};

export function MeScreen({ student }: MeScreenProps) {
  const router = useRouter();
  const { replayIvshiTransform, isPlaying } = useIvshiTransform();
  const [nameDraft, setNameDraft] = useState(student.displayName);
  const [nameMessage, setNameMessage] = useState<string | null>(null);
  const [pendingGrade, setPendingGrade] = useState<Grade | null>(null);
  const [isPending, startTransition] = useTransition();

  function saveName() {
    const displayName = normalizeLearnerDisplayName(nameDraft);
    if (!displayName) {
      setNameMessage("Type a name Ivshi can use.");
      return;
    }
    const existing = readLearnerProfile();
    if (!existing) {
      setNameMessage("Finish welcome first, then come back here.");
      return;
    }
    // Rename keeps the same learnerId so progress stays with this child.
    writeLearnerProfile({
      learnerId: existing.learnerId,
      displayName,
    });
    setNameMessage("Saved — Ivshi will use that name.");
    startTransition(() => {
      router.refresh();
    });
  }

  function selectGrade(grade: Grade) {
    if (isPending) {
      return;
    }
    setPendingGrade(grade);
    writeLearnerGrade(grade);
    startTransition(() => {
      router.push(ROUTES.student.home);
      router.refresh();
    });
  }

  return (
    <section className="flex flex-1 flex-col gap-8 py-6 pb-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Me
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
          {student.displayName}
        </h1>
        <p className="mt-2 text-lg leading-7 text-ink-muted">
          Current grade:{" "}
          <span className="font-semibold text-ink">Grade {student.grade}</span>
        </p>
      </header>

      <section aria-labelledby="name-heading" className="flex flex-col gap-3">
        <h2
          id="name-heading"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted"
        >
          What Ivshi calls you
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <label className="flex min-w-0 flex-1 flex-col gap-2">
            <span className="sr-only">Your first name</span>
            <input
              type="text"
              name="learner-name"
              autoComplete="nickname"
              maxLength={24}
              value={nameDraft}
              onChange={(event) => {
                setNameDraft(event.target.value);
                setNameMessage(null);
              }}
              className="min-h-12 rounded-2xl border border-line bg-canvas px-4 text-lg text-ink outline-none ring-focus focus:ring-2"
            />
          </label>
          <Button
            type="button"
            variant="quiet"
            size="inline"
            disabled={isPending}
            onClick={saveName}
            className="self-start sm:mb-2"
          >
            Save name
          </Button>
        </div>
        {nameMessage ? (
          <p className="text-sm text-ink-muted" role="status">
            {nameMessage}
          </p>
        ) : null}
      </section>

      <section aria-labelledby="grade-switch-heading" className="flex flex-col gap-3">
        <h2
          id="grade-switch-heading"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted"
        >
          Switch grade
        </h2>
        <p className="max-w-prose text-base leading-7 text-ink-muted">
          Choose the grade you want to explore. Your progress in each grade stays
          saved on its own.
        </p>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Select grade"
        >
          {GRADES.map((grade) => {
            const selected = grade === student.grade;
            const loading = isPending && pendingGrade === grade;
            return (
              <Button
                key={grade}
                type="button"
                variant={selected ? "brand" : "ghost"}
                size="md"
                aria-pressed={selected}
                disabled={isPending}
                onClick={() => selectGrade(grade)}
                className={
                  selected
                    ? undefined
                    : "ring-1 ring-line hover:ring-teal/40"
                }
              >
                {loading ? `Grade ${grade}…` : `Grade ${grade}`}
              </Button>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="ivshi-story-heading" className="flex flex-col gap-3">
        <h2
          id="ivshi-story-heading"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted"
        >
          Ivshi
        </h2>
        <p className="max-w-prose text-base leading-7 text-ink-muted">
          Watch the quiet beginning again — curious, growing, becoming Ivshi.
        </p>
        <Button
          type="button"
          variant="ghost"
          size="md"
          disabled={isPlaying || isPending}
          onClick={replayIvshiTransform}
          className="self-start ring-1 ring-line hover:ring-teal/40"
        >
          Watch Ivshi&apos;s beginning
        </Button>
      </section>

      <ButtonLink
        href={ROUTES.student.home}
        variant="quiet"
        size="inline"
        className="self-start"
      >
        Back home
      </ButtonLink>
    </section>
  );
}
