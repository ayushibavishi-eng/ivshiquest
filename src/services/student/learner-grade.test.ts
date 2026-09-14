import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { GRADES, type Grade } from "@/domain/types";
import {
  __replaceCurriculumProgressEntriesForTests,
  __resetCurriculumProgressCacheForTests,
  getCurriculumProgress,
  raiseCurriculumProgress,
} from "@/services/curriculum/progress";
import { getActiveLearnerId } from "@/services/student/active-learner";
import {
  LEARNER_GRADE_COOKIE,
  parseLearnerGrade,
  readLearnerGrade,
  writeLearnerGrade,
} from "@/services/student/learner-grade";
import { MOCK_CURRENT_STUDENT } from "@/content/mocks/current-student";
import { homeGradeLabel } from "@/features/student-home/home-grade-label";

const learnerId = getActiveLearnerId();

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

describe("V1 learner grade switching", () => {
  afterEach(() => {
    __replaceCurriculumProgressEntriesForTests({});
    __resetCurriculumProgressCacheForTests();
    // @ts-expect-error test cleanup
    delete globalThis.document;
    // @ts-expect-error test cleanup
    delete globalThis.window;
  });

  it("can change grade 4 → 5 → 6 → 7 → 8", () => {
    installCookieJar();

    for (const grade of GRADES) {
      writeLearnerGrade(grade);
      assert.equal(readLearnerGrade(), grade);
      assert.equal(parseLearnerGrade(String(grade)), grade);
    }

    assert.deepEqual([...GRADES], [4, 5, 6, 7, 8]);
  });

  it("persists the selected grade after refresh", () => {
    const jar = installCookieJar();
    writeLearnerGrade(7);

    // Simulate a refreshed page reading the same cookie jar.
    assert.equal(jar.get(LEARNER_GRADE_COOKIE), "7");
    assert.equal(readLearnerGrade(), 7);

    // Re-install document with the same jar contents (refresh).
    const saved = jar.get(LEARNER_GRADE_COOKIE);
    installCookieJar().set(LEARNER_GRADE_COOKIE, saved ?? "");
    assert.equal(readLearnerGrade(6), 7);
  });

  it("does not leak lesson progress when the grade changes", () => {
    installCookieJar();
    // @ts-expect-error jsdom-less test harness
    globalThis.window = { localStorage: memoryStorage() };

    const conceptId = "math-ns-read-write";
    writeLearnerGrade(4);
    raiseCurriculumProgress(conceptId, "mastered", {
      learnerId,
      grade: 4,
      subject: "math",
    });

    writeLearnerGrade(5);

    assert.equal(
      getCurriculumProgress(conceptId, {
        learnerId,
        grade: 4,
        subject: "math",
      }),
      "mastered",
    );
    assert.equal(
      getCurriculumProgress(conceptId, {
        learnerId,
        grade: 5,
        subject: "math",
      }),
      "unvisited",
    );
  });

  it("Home reflects the newly selected grade", () => {
    installCookieJar();
    writeLearnerGrade(8);

    const student = {
      ...MOCK_CURRENT_STUDENT,
      grade: readLearnerGrade(MOCK_CURRENT_STUDENT.grade) as Grade,
    };

    assert.equal(student.grade, 8);
    assert.equal(homeGradeLabel(student.grade), "Grade 8");

    writeLearnerGrade(4);
    assert.equal(homeGradeLabel(readLearnerGrade()), "Grade 4");
  });
});
