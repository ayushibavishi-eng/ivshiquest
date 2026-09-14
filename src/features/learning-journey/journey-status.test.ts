import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  journeyBandForStatus,
  toJourneyStatus,
} from "@/features/learning-journey/journey-status";

describe("learning journey status mapping", () => {
  it("maps tree/progress states into journey bands", () => {
    assert.equal(toJourneyStatus("mastered", "mastered"), "mastered");
    assert.equal(journeyBandForStatus("mastered"), "past");

    assert.equal(toJourneyStatus("in_progress", "started"), "exploring");
    assert.equal(journeyBandForStatus("exploring"), "current");

    assert.equal(toJourneyStatus("in_progress", "practiced"), "growing");
    assert.equal(journeyBandForStatus("growing"), "current");

    assert.equal(toJourneyStatus("available", "unvisited"), "available");
    assert.equal(journeyBandForStatus("available"), "next");

    assert.equal(toJourneyStatus("locked", "unvisited"), "not_discovered");
    assert.equal(journeyBandForStatus("not_discovered"), "future");

    assert.equal(
      toJourneyStatus("content_not_ready", "unvisited"),
      "coming_soon",
    );
    assert.equal(journeyBandForStatus("coming_soon"), "future");
  });
});
