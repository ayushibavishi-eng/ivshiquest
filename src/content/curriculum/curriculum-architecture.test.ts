import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import {
  CURRICULUM_IDS,
  CURRICULUM_META,
  DEFAULT_CURRICULUM_ID,
  curriculumCountry,
  isCurriculumId,
  resolveCurriculumId,
} from "@/domain/curriculum";
import {
  discoveryAppliesToCurriculum,
  discoveriesForGrade,
} from "@/domain/curiosity-select";
import { getCuriosityLibrary } from "@/content/curiosity/library";
import {
  getCurriculumWorld,
  getCurriculumWorlds,
  getCurriculumWorldsForSubject,
} from "@/content/curriculum";
import { getCompleteLesson } from "@/content/lessons";
import {
  curriculumProgressKey,
  getCurriculumProgress,
  parseCurriculumProgressKey,
  raiseCurriculumProgress,
  __replaceCurriculumProgressEntriesForTests,
  __resetCurriculumProgressCacheForTests,
} from "@/services/curriculum/progress";
import { migrateProgressKeysToCurriculumScoped } from "@/services/curriculum/progress-scope";
import {
  completeLearnerOnboarding,
  parseLearnerProfile,
  resolveLearnerCurriculumId,
} from "@/services/student/learner-profile";
import { getActiveLearnerId } from "@/services/student/active-learner";

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

describe("curriculum identity architecture", () => {
  afterEach(() => {
    __replaceCurriculumProgressEntriesForTests({});
    __resetCurriculumProgressCacheForTests();
    // @ts-expect-error test cleanup
    delete globalThis.window;
  });

  it("defines India and USA curriculum identities", () => {
    assert.deepEqual([...CURRICULUM_IDS], ["india-current", "us"]);
    assert.equal(DEFAULT_CURRICULUM_ID, "india-current");
    assert.equal(curriculumCountry("india-current"), "IN");
    assert.equal(curriculumCountry("us"), "US");
    assert.equal(CURRICULUM_META.us.label, "United States");
    assert.equal(isCurriculumId("india-current"), true);
    assert.equal(isCurriculumId("us"), true);
    assert.equal(isCurriculumId("ncert"), false);
    assert.equal(resolveCurriculumId(undefined), "india-current");
  });

  it("tags every existing catalogue world as India", () => {
    const worlds = getCurriculumWorlds();
    assert.ok(worlds.length > 0);
    for (const world of worlds) {
      assert.equal(
        world.curriculumId,
        "india-current",
        `${world.id} should be India`,
      );
    }
    assert.equal(
      getCurriculumWorld("ncert-g5-wondrous-world")?.curriculumId,
      "india-current",
    );
    assert.equal(
      getCurriculumWorld("ncert-g5-maths-mela")?.curriculumId,
      "india-current",
    );
  });

  it("filters catalogue by curriculum so USA stays empty until authored", () => {
    for (const subject of ["math", "science", "english"] as const) {
      const india = getCurriculumWorldsForSubject(subject, 5, "india-current");
      const usa = getCurriculumWorldsForSubject(subject, 5, "us");
      assert.ok(india.length > 0, `India ${subject} grade 5 should have worlds`);
      assert.equal(usa.length, 0, `USA ${subject} should have no worlds yet`);
    }
  });

  it("keeps Grade 4/5 India lessons resolving", () => {
    assert.ok(
      getCompleteLesson("ncert-g4-maths-mela-shapes-around-us-core", 4),
    );
    assert.ok(
      getCompleteLesson("ncert-g5-maths-mela-fractions-core", 5),
    );
    assert.ok(
      getCompleteLesson("ncert-g5-wondrous-world-water-essence-core", 5),
    );
    assert.ok(getCompleteLesson("equivalent-fractions", 5));
    assert.ok(getCompleteLesson("science-plants-photosynthesis", 5));
  });

  it("isolates India vs USA progress keys for the same grade/subject/concept", () => {
    // @ts-expect-error jsdom-less test harness
    globalThis.window = { localStorage: memoryStorage() };
    const learnerId = getActiveLearnerId();
    const conceptId = "equivalent-fractions";

    raiseCurriculumProgress(conceptId, "mastered", {
      learnerId,
      grade: 5,
      subject: "math",
      curriculumId: "india-current",
    });

    assert.equal(
      getCurriculumProgress(conceptId, {
        learnerId,
        grade: 5,
        subject: "math",
        curriculumId: "india-current",
      }),
      "mastered",
    );
    assert.equal(
      getCurriculumProgress(conceptId, {
        learnerId,
        grade: 5,
        subject: "math",
        curriculumId: "us",
      }),
      "unvisited",
    );

    const indiaKey = curriculumProgressKey(
      {
        learnerId,
        grade: 5,
        subject: "math",
        curriculumId: "india-current",
      },
      conceptId,
    );
    const usKey = curriculumProgressKey(
      {
        learnerId,
        grade: 5,
        subject: "math",
        curriculumId: "us",
      },
      conceptId,
    );
    assert.notEqual(indiaKey, usKey);
    assert.match(indiaKey, /\|cindia-current\|/);
    assert.match(usKey, /\|cus\|/);
  });

  it("migrates legacy v2 progress keys to India curriculum scope", () => {
    const learnerId = "learner-migrate-c";
    const legacyKey = `${learnerId}|g5|math|equivalent-fractions`;
    const migrated = migrateProgressKeysToCurriculumScoped({
      [legacyKey]: "practiced",
    });
    const expected = curriculumProgressKey(
      {
        learnerId,
        grade: 5,
        subject: "math",
        curriculumId: DEFAULT_CURRICULUM_ID,
      },
      "equivalent-fractions",
    );
    assert.equal(migrated[expected], "practiced");
    assert.equal(migrated[legacyKey], undefined);

    const parsed = parseCurriculumProgressKey(legacyKey);
    assert.equal(parsed?.curriculumId, "india-current");
  });

  it("defaults learner profiles without curriculum to India", () => {
    const legacy = parseLearnerProfile(
      encodeURIComponent(
        JSON.stringify({
          learnerId: "learner-old-cookie",
          displayName: "Riya",
        }),
      ),
    );
    assert.ok(legacy);
    assert.equal(legacy.curriculumId, undefined);
    assert.equal(resolveLearnerCurriculumId(legacy), "india-current");

    const onboarded = completeLearnerOnboarding({
      displayName: "Sam",
      learnerId: "learner-sam-curr",
    });
    // completeLearnerOnboarding writes cookies only in document; return value includes id
    assert.ok(onboarded);
    assert.equal(onboarded.curriculumId, "india-current");
  });

  it("treats discoveries without curriculumIds as shared across curricula", () => {
    const library = getCuriosityLibrary();
    assert.ok(library.length > 0);
    const sample = library[0];
    assert.equal(sample.curriculumIds, undefined);
    assert.equal(discoveryAppliesToCurriculum(sample, "india-current"), true);
    assert.equal(discoveryAppliesToCurriculum(sample, "us"), true);

    const indiaPool = discoveriesForGrade(library, 5, "india-current");
    const usPool = discoveriesForGrade(library, 5, "us");
    assert.equal(indiaPool.length, usPool.length);
    assert.ok(indiaPool.length > 0);

    const indiaOnly = {
      ...sample,
      curriculumIds: ["india-current" as const],
    };
    assert.equal(discoveryAppliesToCurriculum(indiaOnly, "india-current"), true);
    assert.equal(discoveryAppliesToCurriculum(indiaOnly, "us"), false);
  });
});
