"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { GRADES, type Grade } from "@/domain/types";
import { ROUTES } from "@/lib/constants";
import { writeLearnerGrade } from "@/services/student/learner-grade";
import {
  completeLearnerOnboarding,
  normalizeLearnerDisplayName,
} from "@/services/student/learner-profile";

export function OnboardingScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [grade, setGrade] = useState<Grade | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function continueIntoQuest() {
    const displayName = normalizeLearnerDisplayName(name);
    if (!displayName) {
      setError("Type the name Ivshi should use for you.");
      return;
    }
    if (!grade) {
      setError("Pick the grade you are exploring.");
      return;
    }

    setError(null);
    const profile = completeLearnerOnboarding({ displayName });
    if (!profile) {
      setError("Type the name Ivshi should use for you.");
      return;
    }
    writeLearnerGrade(grade);

    startTransition(() => {
      router.push(ROUTES.student.home);
      router.refresh();
    });
  }

  return (
    <section className="flex flex-1 flex-col justify-center gap-8 py-8 pb-12">
      <header className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Welcome
        </p>
        <h1 className="text-[1.85rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
          Hi — I&apos;m Ivshi.
        </h1>
        <p className="max-w-prose text-lg leading-7 text-ink-muted">
          Before we explore, tell me a little about you.
        </p>
      </header>

      <div className="flex flex-col gap-6 rounded-[1.8rem] bg-[linear-gradient(160deg,#e7f4f8_0%,#fffaf2_100%)] px-5 py-6 ring-1 ring-line/70">
        <label className="flex flex-col gap-2">
          <span className="text-base font-semibold text-ink">
            What should Ivshi call you?
          </span>
          <input
            type="text"
            name="learner-name"
            autoComplete="nickname"
            maxLength={24}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              if (error) {
                setError(null);
              }
            }}
            placeholder="Your first name"
            className="min-h-12 rounded-2xl border border-line bg-canvas px-4 text-lg text-ink outline-none ring-focus placeholder:text-ink-muted/70 focus:ring-2"
          />
        </label>

        <fieldset className="flex flex-col gap-3">
          <legend className="text-base font-semibold text-ink">
            What grade are you exploring?
          </legend>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Select grade"
          >
            {GRADES.map((option) => {
              const selected = grade === option;
              return (
                <Button
                  key={option}
                  type="button"
                  variant={selected ? "brand" : "ghost"}
                  size="md"
                  aria-pressed={selected}
                  disabled={isPending}
                  onClick={() => {
                    setGrade(option);
                    if (error) {
                      setError(null);
                    }
                  }}
                  className={
                    selected ? undefined : "ring-1 ring-line hover:ring-teal/40"
                  }
                >
                  Grade {option}
                </Button>
              );
            })}
          </div>
        </fieldset>

        {error ? (
          <p className="text-sm font-medium text-ink" role="alert">
            {error}
          </p>
        ) : null}

        <Button
          type="button"
          variant="primary"
          disabled={isPending}
          onClick={continueIntoQuest}
          className="self-start"
        >
          {isPending ? "Opening your quest…" : "Let's explore"}
        </Button>
      </div>
    </section>
  );
}
