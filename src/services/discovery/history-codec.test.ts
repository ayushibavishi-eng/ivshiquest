import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { MOCK_CURRENT_STUDENT } from "@/content/mocks/current-student";
import {
  discoveryHistoryCookieName,
  DISCOVERY_COMPLETED_COOKIE,
  DISCOVERY_RECENT_COOKIE,
  DISCOVERY_TODAY_COOKIE,
  nextCompletedCookieValue,
  parseIdList,
  parseTodayLock,
  readLearnerDiscoveryCookieValue,
} from "@/services/discovery/history-codec";

describe("discovery history learner isolation", () => {
  it("scopes cookie names per learner identity", () => {
    const a = discoveryHistoryCookieName(
      DISCOVERY_COMPLETED_COOKIE,
      "learner-riva-aaa",
    );
    const b = discoveryHistoryCookieName(
      DISCOVERY_COMPLETED_COOKIE,
      "learner-aarav-bbb",
    );
    assert.notEqual(a, b);
    assert.match(a, /learner-riva-aaa/);
    assert.match(b, /learner-aarav-bbb/);
  });

  it("does not let a new learner read another learner's legacy unscoped history", () => {
    const legacy = "discovery-birds-wires,discovery-old-demo";
    const forNewLearner = readLearnerDiscoveryCookieValue(
      "learner-riva-fresh1",
      undefined,
      legacy,
    );
    assert.equal(forNewLearner, undefined);

    const forDemoFallback = readLearnerDiscoveryCookieValue(
      MOCK_CURRENT_STUDENT.id,
      undefined,
      legacy,
    );
    assert.equal(forDemoFallback, legacy);
  });

  it("keeps scoped histories separate for two learners", () => {
    const rivaScoped = nextCompletedCookieValue(undefined, "discovery-a");
    const aaravScoped = nextCompletedCookieValue(undefined, "discovery-b");

    assert.deepEqual(
      parseIdList(
        readLearnerDiscoveryCookieValue(
          "learner-riva-a",
          rivaScoped,
          "discovery-legacy",
        ),
      ),
      ["discovery-a"],
    );
    assert.deepEqual(
      parseIdList(
        readLearnerDiscoveryCookieValue(
          "learner-aarav-b",
          aaravScoped,
          "discovery-legacy",
        ),
      ),
      ["discovery-b"],
    );
  });

  it("parses today lock only for the matching date", () => {
    assert.equal(
      parseTodayLock("2026-09-13|discovery-sky", "2026-09-13"),
      "discovery-sky",
    );
    assert.equal(
      parseTodayLock("2026-09-12|discovery-sky", "2026-09-13"),
      undefined,
    );
    assert.ok(
      discoveryHistoryCookieName(DISCOVERY_TODAY_COOKIE, "learner-x"),
    );
    assert.ok(
      discoveryHistoryCookieName(DISCOVERY_RECENT_COOKIE, "learner-x"),
    );
  });
});
