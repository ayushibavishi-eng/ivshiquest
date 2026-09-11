import assert from "node:assert/strict";
import { test } from "node:test";
import { getCompleteLesson } from "../content/lessons";
import {
  evaluateOpenResponse,
  writeAnswerSucceeds,
} from "./complete-lesson";

function photosynthesisCloudQuestion() {
  const lesson = getCompleteLesson("science-plants-photosynthesis", 6);
  assert.ok(lesson, "Grade 6 Photosynthesis lesson should exist");
  const question = lesson.content.reasoning.find((item) => item.id === "ph6-r2");
  assert.ok(question, "ph6-r2 cloud-and-light reasoning prompt should exist");
  return question;
}

test("no sunlight is a successful discovery for the heavy-cloud photosynthesis prompt", () => {
  const question = photosynthesisCloudQuestion();
  assert.equal(writeAnswerSucceeds("no sunlight", question), true);
  assert.equal(
    evaluateOpenResponse("no sunlight", question.keyIdeas).state,
    "likely_understanding",
  );
});

test("equivalent sunlight phrasing also succeeds for that prompt", () => {
  const question = photosynthesisCloudQuestion();
  for (const answer of [
    "less sunlight",
    "not enough sunlight",
    "lack of sunlight",
    "less light",
  ]) {
    assert.equal(
      writeAnswerSucceeds(answer, question),
      true,
      `${answer} should count as the light idea`,
    );
  }
});

test("an unrelated answer does not succeed for that prompt", () => {
  const question = photosynthesisCloudQuestion();
  assert.equal(
    writeAnswerSucceeds("the plants started eating insects instead", question),
    false,
  );
  assert.notEqual(
    evaluateOpenResponse(
      "the plants started eating insects instead",
      question.keyIdeas,
    ).state,
    "likely_understanding",
  );
});
