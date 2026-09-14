import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import {
  __replaceCurriculumProgressEntriesForTests,
  __resetCurriculumProgressCacheForTests,
  curriculumProgressKey,
  getAllCurriculumProgress,
  getCurriculumProgress,
  migrateLegacyProgressEntries,
  raiseCurriculumProgress,
} from "@/services/curriculum/progress";
import { getActiveLearnerId } from "@/services/student/active-learner";
import { fallbackLearnerId } from "@/services/student/learner-profile";

const learnerId = getActiveLearnerId();

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

describe("curriculum progress namespacing", () => {
  afterEach(() => {
    __replaceCurriculumProgressEntriesForTests({});
    __resetCurriculumProgressCacheForTests();
    // @ts-expect-error test cleanup
    delete globalThis.window;
  });

  it("does not leak Grade 4 progress into Grade 5", () => {
    // @ts-expect-error jsdom-less test harness
    globalThis.window = { localStorage: memoryStorage() };

    const sharedConcept = "math-ns-read-write";
    raiseCurriculumProgress(sharedConcept, "mastered", {
      learnerId,
      grade: 4,
      subject: "math",
      curriculumId: "india-current",
    });

    assert.equal(
      getCurriculumProgress(sharedConcept, {
        learnerId,
        grade: 4,
        subject: "math",
      }),
      "mastered",
    );
    assert.equal(
      getCurriculumProgress(sharedConcept, {
        learnerId,
        grade: 5,
        subject: "math",
      }),
      "unvisited",
    );
    assert.deepEqual(
      getAllCurriculumProgress({ learnerId, grade: 5, subject: "math" }),
      {},
    );
  });

  it("does not leak India Grade 5 Math into USA Grade 5 Math", () => {
    // @ts-expect-error jsdom-less test harness
    globalThis.window = { localStorage: memoryStorage() };

    raiseCurriculumProgress("math-ns-read-write", "practiced", {
      learnerId,
      grade: 5,
      subject: "math",
      curriculumId: "india-current",
    });

    assert.equal(
      getCurriculumProgress("math-ns-read-write", {
        learnerId,
        grade: 5,
        subject: "math",
        curriculumId: "us",
      }),
      "unvisited",
    );
  });

  it("does not leak Grade 5 progress into Grade 8", () => {
    // @ts-expect-error jsdom-less test harness
    globalThis.window = { localStorage: memoryStorage() };

    raiseCurriculumProgress("english-sva-simple", "practiced", {
      learnerId,
      grade: 5,
      subject: "english",
    });

    assert.equal(
      getCurriculumProgress("english-sva-simple", {
        learnerId,
        grade: 5,
        subject: "english",
      }),
      "practiced",
    );
    assert.equal(
      getCurriculumProgress("english-sva-simple", {
        learnerId,
        grade: 8,
        subject: "english",
      }),
      "unvisited",
    );
  });

  it("keeps subject scopes separate for the same concept id", () => {
    // @ts-expect-error jsdom-less test harness
    globalThis.window = { localStorage: memoryStorage() };

    // Synthetic isolation: same concept key string under different subjects.
    const conceptId = "cross-subject-probe";
    raiseCurriculumProgress(conceptId, "started", {
      learnerId,
      grade: 6,
      subject: "math",
    });
    assert.equal(
      getCurriculumProgress(conceptId, {
        learnerId,
        grade: 6,
        subject: "science",
      }),
      "unvisited",
    );
  });

  it("migrates legacy flat keys into one preferred grade without copying all grades", () => {
    const legacy = { "math-ns-read-write": "mastered" as const };
    const migrated = migrateLegacyProgressEntries(legacy, learnerId, 5);
    const g5Key = curriculumProgressKey(
      {
        learnerId,
        grade: 5,
        subject: "math",
        curriculumId: "india-current",
      },
      "math-ns-read-write",
    );
    const g4Key = curriculumProgressKey(
      {
        learnerId,
        grade: 4,
        subject: "math",
        curriculumId: "india-current",
      },
      "math-ns-read-write",
    );
    assert.equal(migrated[g5Key], "mastered");
    assert.equal(migrated[g4Key], undefined);
  });

  it("does not attach legacy flat progress to a newly onboarded learner on read", () => {
    const storage = memoryStorage();
    // @ts-expect-error jsdom-less test harness
    globalThis.window = { localStorage: storage };

    storage.setItem(
      "ivshi-curriculum-progress",
      JSON.stringify({ "equivalent-fractions": "practiced" }),
    );

    const freshLearner = "learner-riva-newiso";
    assert.equal(
      getCurriculumProgress("equivalent-fractions", {
        learnerId: freshLearner,
        grade: 6,
        subject: "math",
      }),
      "unvisited",
    );

    // Legacy migration parks under the demo fallback identity only.
    assert.equal(
      getCurriculumProgress("equivalent-fractions", {
        learnerId: fallbackLearnerId(),
        grade: 6,
        subject: "math",
      }),
      "practiced",
    );
  });
});
