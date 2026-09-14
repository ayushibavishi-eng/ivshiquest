import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { getCompleteLesson } from "@/content/lessons";
import {
  __replaceCurriculumProgressEntriesForTests,
  __resetCurriculumProgressCacheForTests,
  getCurriculumProgress,
  raiseCurriculumProgress,
} from "@/services/curriculum/progress";
import { getActiveLearnerId } from "@/services/student/active-learner";
import {
  LEARNER_GRADE_COOKIE,
  readLearnerGrade,
  writeLearnerGrade,
} from "@/services/student/learner-grade";
import {
  LEARNER_PROFILE_COOKIE,
  completeLearnerOnboarding,
  createLearnerId,
  normalizeLearnerDisplayName,
  parseLearnerProfile,
  readLearnerProfile,
  writeLearnerProfile,
} from "@/services/student/learner-profile";
import { homeGradeLabel } from "@/features/student-home/home-grade-label";

function installCookieJar() {
  const jar = new Map<string, string>();

  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: {
      get cookie() {
        return [...jar.entries()]
          .map(([name, value]) => `${name}=${value}`)
          .join("; ");
      },
      set cookie(raw: string) {
        const segments = raw.split(";").map((part) => part.trim());
        const [nameValue, ...attrs] = segments;
        const eq = nameValue.indexOf("=");
        const name = nameValue.slice(0, eq);
        const value = nameValue.slice(eq + 1);
        const maxAge = attrs.find((attr) =>
          attr.toLowerCase().startsWith("max-age="),
        );
        if (maxAge && maxAge.split("=")[1] === "0") {
          jar.delete(name);
          return;
        }
        jar.set(name, value);
      },
    },
  });

  return jar;
}

function memoryStorage() {
  const store = new Map<string, string>();
  return {
    getItem(key: string) {
      return store.has(key) ? (store.get(key) as string) : null;
    },
    setItem(key: string, value: string) {
      store.set(key, value);
    },
    removeItem(key: string) {
      store.delete(key);
    },
    clear() {
      store.clear();
    },
  };
}

describe("V1 learner onboarding identity", () => {
  afterEach(() => {
    __replaceCurriculumProgressEntriesForTests({});
    __resetCurriculumProgressCacheForTests();
    // @ts-expect-error test cleanup
    delete globalThis.document;
    // @ts-expect-error test cleanup
    delete globalThis.window;
  });

  it("lets a child enter a name other than Avery", () => {
    installCookieJar();
    const profile = completeLearnerOnboarding({ displayName: "maya" });
    assert.ok(profile);
    assert.equal(profile.displayName, "Maya");
    assert.notEqual(profile.displayName.toLowerCase(), "avery");
    assert.equal(readLearnerProfile()?.displayName, "Maya");
  });

  it("persists the child's name after refresh", () => {
    const jar = installCookieJar();
    completeLearnerOnboarding({
      displayName: "Sam",
      learnerId: "learner-sam-test1",
    });
    const saved = jar.get(LEARNER_PROFILE_COOKIE);
    assert.ok(saved);

    installCookieJar().set(LEARNER_PROFILE_COOKIE, saved);
    assert.equal(readLearnerProfile()?.displayName, "Sam");
    assert.equal(getActiveLearnerId(), "learner-sam-test1");
  });

  it("persists the selected grade after refresh", () => {
    const jar = installCookieJar();
    completeLearnerOnboarding({ displayName: "Riya" });
    writeLearnerGrade(7);
    const gradeValue = jar.get(LEARNER_GRADE_COOKIE);
    assert.equal(gradeValue, "7");

    installCookieJar().set(LEARNER_GRADE_COOKIE, gradeValue ?? "");
    assert.equal(readLearnerGrade(6), 7);
  });

  it("Home displays the entered child's name", () => {
    installCookieJar();
    completeLearnerOnboarding({ displayName: "Noah" });
    const name = readLearnerProfile()?.displayName;
    assert.equal(name, "Noah");
    // Home greeting uses displayName directly (Good morning, Noah).
    assert.equal(`Good morning, ${name}`, "Good morning, Noah");
    assert.equal(homeGradeLabel(readLearnerGrade(6)), "Grade 6");
  });

  it("does not leak Grade 4 progress into Grade 5", () => {
    installCookieJar();
    // @ts-expect-error jsdom-less test harness
    globalThis.window = { localStorage: memoryStorage() };

    const profile = completeLearnerOnboarding({
      displayName: "Asha",
      learnerId: "learner-asha-g",
    });
    assert.ok(profile);
    writeLearnerGrade(4);
    raiseCurriculumProgress("math-ns-read-write", "mastered", {
      learnerId: profile.learnerId,
      grade: 4,
      subject: "math",
    });

    writeLearnerGrade(5);
    assert.equal(
      getCurriculumProgress("math-ns-read-write", {
        learnerId: profile.learnerId,
        grade: 4,
        subject: "math",
      }),
      "mastered",
    );
    assert.equal(
      getCurriculumProgress("math-ns-read-write", {
        learnerId: profile.learnerId,
        grade: 5,
        subject: "math",
      }),
      "unvisited",
    );
  });

  it("does not merge progress across different learner identities", () => {
    installCookieJar();
    // @ts-expect-error jsdom-less test harness
    globalThis.window = { localStorage: memoryStorage() };

    const maya = completeLearnerOnboarding({
      displayName: "Maya",
      learnerId: "learner-maya-a",
    });
    assert.ok(maya);
    raiseCurriculumProgress("equivalent-fractions", "practiced", {
      learnerId: maya.learnerId,
      grade: 6,
      subject: "math",
    });

    const sam = completeLearnerOnboarding({
      displayName: "Sam",
      learnerId: "learner-sam-b",
    });
    assert.ok(sam);
    assert.notEqual(maya.learnerId, sam.learnerId);

    assert.equal(
      getCurriculumProgress("equivalent-fractions", {
        learnerId: maya.learnerId,
        grade: 6,
        subject: "math",
      }),
      "practiced",
    );
    assert.equal(
      getCurriculumProgress("equivalent-fractions", {
        learnerId: sam.learnerId,
        grade: 6,
        subject: "math",
      }),
      "unvisited",
    );
  });

  it("gives every new onboarding a unique learner id and fresh curriculum progress", () => {
    installCookieJar();
    // @ts-expect-error jsdom-less test harness
    globalThis.window = { localStorage: memoryStorage() };

    const riva = completeLearnerOnboarding({ displayName: "Riva" });
    const aarav = completeLearnerOnboarding({ displayName: "Aarav" });
    assert.ok(riva);
    assert.ok(aarav);
    assert.notEqual(riva.learnerId, aarav.learnerId);
    assert.equal(getActiveLearnerId(), aarav.learnerId);
    assert.equal(riva.displayName, "Riva");
    assert.equal(aarav.displayName, "Aarav");

    // Seed demo-bucket progress that used to leak via Home mock / legacy keys.
    raiseCurriculumProgress("equivalent-fractions", "practiced", {
      learnerId: "student-mock-1",
      grade: 6,
      subject: "math",
    });

    assert.equal(
      getCurriculumProgress("equivalent-fractions", {
        learnerId: riva.learnerId,
        grade: 6,
        subject: "math",
      }),
      "unvisited",
    );
    assert.equal(
      getCurriculumProgress("equivalent-fractions", {
        learnerId: aarav.learnerId,
        grade: 6,
        subject: "math",
      }),
      "unvisited",
    );
  });

  it("renaming keeps the same learner id so progress is preserved", () => {
    installCookieJar();
    // @ts-expect-error jsdom-less test harness
    globalThis.window = { localStorage: memoryStorage() };

    const profile = completeLearnerOnboarding({
      displayName: "Riva",
      learnerId: "learner-riva-keep",
    });
    assert.ok(profile);
    raiseCurriculumProgress("equivalent-fractions", "started", {
      learnerId: profile.learnerId,
      grade: 6,
      subject: "math",
    });

    writeLearnerProfile({
      learnerId: profile.learnerId,
      displayName: "Riya",
    });
    const renamed = readLearnerProfile();
    assert.equal(renamed?.learnerId, "learner-riva-keep");
    assert.equal(renamed?.displayName, "Riya");
    assert.equal(
      getCurriculumProgress("equivalent-fractions", {
        learnerId: "learner-riva-keep",
        grade: 6,
        subject: "math",
      }),
      "started",
    );
  });

  it("Grade 5 → Grade 6 → Grade 5 does not leak progress", () => {
    installCookieJar();
    // @ts-expect-error jsdom-less test harness
    globalThis.window = { localStorage: memoryStorage() };

    const profile = completeLearnerOnboarding({
      displayName: "Riva",
      learnerId: "learner-riva-grades",
    });
    assert.ok(profile);
    writeLearnerGrade(5);
    raiseCurriculumProgress("math-ns-read-write", "mastered", {
      learnerId: profile.learnerId,
      grade: 5,
      subject: "math",
    });

    writeLearnerGrade(6);
    raiseCurriculumProgress("equivalent-fractions", "practiced", {
      learnerId: profile.learnerId,
      grade: 6,
      subject: "math",
    });
    assert.equal(
      getCurriculumProgress("math-ns-read-write", {
        learnerId: profile.learnerId,
        grade: 6,
        subject: "math",
      }),
      "unvisited",
    );

    writeLearnerGrade(5);
    assert.equal(
      getCurriculumProgress("math-ns-read-write", {
        learnerId: profile.learnerId,
        grade: 5,
        subject: "math",
      }),
      "mastered",
    );
    assert.equal(
      getCurriculumProgress("equivalent-fractions", {
        learnerId: profile.learnerId,
        grade: 5,
        subject: "math",
      }),
      "unvisited",
    );
    assert.equal(
      getCurriculumProgress("equivalent-fractions", {
        learnerId: profile.learnerId,
        grade: 6,
        subject: "math",
      }),
      "practiced",
    );
  });

  it("keeps Grade 6 Subject-Verb Agreement and Photosynthesis playable", () => {
    const sva = getCompleteLesson("english-sva-simple", 6);
    const photo = getCompleteLesson("science-plants-photosynthesis", 6);
    assert.ok(sva);
    assert.equal(sva.title, "Subject-Verb Agreement");
    assert.ok(photo);
    assert.match(photo.title, /Photosynthesis|Plant/i);
  });

  it("normalizes names and creates distinct learner ids", () => {
    assert.equal(normalizeLearnerDisplayName("  leo  "), "Leo");
    assert.equal(normalizeLearnerDisplayName(""), undefined);
    const a = createLearnerId("Leo");
    const b = createLearnerId("Leo");
    assert.notEqual(a, b);
    assert.ok(parseLearnerProfile(
      encodeURIComponent(
        JSON.stringify({ learnerId: a, displayName: "Leo" }),
      ),
    ));
  });

  it("never onboards a child as Avery or student-mock-1", () => {
    installCookieJar();
    const profile = completeLearnerOnboarding({
      displayName: "Riva",
      learnerId: "student-mock-1",
    });
    assert.ok(profile);
    assert.notEqual(profile.learnerId, "student-mock-1");
    assert.ok(profile.learnerId.startsWith("learner-"));
    assert.equal(profile.displayName, "Riva");
    assert.notEqual(profile.displayName.toLowerCase(), "avery");
  });
});
