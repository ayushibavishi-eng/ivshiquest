import assert from "node:assert/strict";
import { test } from "node:test";
import { getCompleteLesson } from "../content/lessons";
import { PHOTOSYNTHESIS_G6_DEV_VIDEO_PROOF } from "../content/lessons/photosynthesis";
import {
  evaluateOpenResponse,
  writeAnswerSucceeds,
} from "./complete-lesson";
import {
  lessonHasVideoExplanation,
  resolveLessonVideoPlayback,
} from "./lesson-video";

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

test("Grade 6 Photosynthesis carries the DEV video proof only on grade 6", () => {
  const grade6 = getCompleteLesson("science-plants-photosynthesis", 6);
  const grade4 = getCompleteLesson("science-plants-photosynthesis", 4);
  const grade5 = getCompleteLesson("science-plants-photosynthesis", 5);
  assert.ok(grade6);
  assert.ok(grade4);
  assert.ok(grade5);

  assert.equal(lessonHasVideoExplanation(grade6.content.understand), true);
  assert.equal(lessonHasVideoExplanation(grade4.content.understand), false);
  assert.equal(lessonHasVideoExplanation(grade5.content.understand), false);

  assert.equal(
    grade6.content.understand.video?.id,
    PHOTOSYNTHESIS_G6_DEV_VIDEO_PROOF.id,
  );
  assert.match(grade6.content.understand.video?.title ?? "", /\[DEV\]/);
  assert.equal(
    grade6.content.understand.video?.source.mediaUrl,
    "/videos/dev/dev-proof-photosynthesis-test.mp4",
  );
  assert.deepEqual(
    resolveLessonVideoPlayback(grade6.content.understand.video!),
    {
      mode: "native",
      src: "/videos/dev/dev-proof-photosynthesis-test.mp4",
    },
  );

  // Learning paragraphs stay present — video is additive only.
  assert.ok(grade6.content.understand.paragraphs.length >= 4);
  assert.ok(
    grade6.content.understand.paragraphs[0]?.includes("sunlight, water"),
  );
});

test("a Grade 4 Math lesson without video still has a normal Understand shape", () => {
  const shapes = getCompleteLesson(
    "ncert-g4-maths-mela-shapes-around-us-core",
    4,
  );
  assert.ok(shapes);
  assert.equal(lessonHasVideoExplanation(shapes.content.understand), false);
  assert.ok(shapes.content.understand.paragraphs.length >= 3);
  assert.equal(shapes.content.understand.video, undefined);
});
