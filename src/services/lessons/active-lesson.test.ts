import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  activeLessonMatchesContext,
  parseActiveLessonPointer,
  resumePhaseIndexForLesson,
} from "@/services/lessons/active-lesson";
import { getActiveLearnerId } from "@/services/student/active-learner";
import { studentLearnTopicHref } from "@/lib/constants";
import { getCompleteLesson } from "@/content/lessons";
import { getKnowledgeTreeGraph } from "@/services/knowledge-tree/get-knowledge-tree";

const learnerId = getActiveLearnerId();

describe("lesson resume isolation", () => {
  it("does not resume an unrelated lesson after a grade change", () => {
    const pointer = parseActiveLessonPointer(
      encodeURIComponent(
        JSON.stringify({
          learnerId,
          conceptId: "equivalent-fractions",
          lessonId: "equivalent-fractions-g4",
          grade: 4,
          subject: "math",
          stage: "practice",
        }),
      ),
    );

    assert.ok(pointer);
    assert.equal(
      activeLessonMatchesContext(pointer, { learnerId, grade: 8 }),
      false,
    );
    assert.equal(
      resumePhaseIndexForLesson(pointer, {
        lessonId: "equivalent-fractions-g8",
        grade: 8,
        subject: "math",
      }),
      0,
    );
  });

  it("resumes only the matching lesson's phase on refresh", () => {
    const fractions = getCompleteLesson("equivalent-fractions", 5);
    const photosynthesis = getCompleteLesson(
      "science-plants-photosynthesis",
      6,
    );
    assert.ok(fractions);
    assert.ok(photosynthesis);

    const pointer = parseActiveLessonPointer(
      encodeURIComponent(
        JSON.stringify({
          learnerId,
          conceptId: fractions.conceptId,
          lessonId: fractions.lessonId,
          grade: fractions.grade,
          subject: fractions.subject,
          stage: "understand",
        }),
      ),
    );

    assert.equal(
      resumePhaseIndexForLesson(pointer, fractions),
      2, // understand
    );
    assert.equal(
      resumePhaseIndexForLesson(pointer, photosynthesis),
      0,
    );
  });

  it("Home Continue targets the active lesson concept for the current grade", () => {
    const lesson = getCompleteLesson("english-sva-simple", 6);
    assert.ok(lesson);
    const pointer = parseActiveLessonPointer(
      encodeURIComponent(
        JSON.stringify({
          learnerId,
          conceptId: lesson.conceptId,
          lessonId: lesson.lessonId,
          grade: 6,
          subject: "english",
          stage: "explore",
        }),
      ),
    );
    assert.ok(
      activeLessonMatchesContext(pointer, { learnerId, grade: 6 }),
    );
    assert.equal(
      studentLearnTopicHref(pointer.conceptId),
      "/student/learn/topics/english-sva-simple",
    );
    assert.equal(
      activeLessonMatchesContext(pointer, { learnerId, grade: 4 }),
      false,
    );
  });

  it("rejects legacy active-lesson cookies that omit learnerId", () => {
    const legacy = parseActiveLessonPointer(
      encodeURIComponent(
        JSON.stringify({
          conceptId: "equivalent-fractions",
          lessonId: "equivalent-fractions-g6",
          grade: 6,
          subject: "math",
          stage: "practice",
        }),
      ),
    );
    assert.equal(legacy, undefined);
  });

  it("does not match another learner's active lesson", () => {
    const pointer = parseActiveLessonPointer(
      encodeURIComponent(
        JSON.stringify({
          learnerId: "learner-riva-abc",
          conceptId: "equivalent-fractions",
          lessonId: "equivalent-fractions-g5",
          grade: 5,
          subject: "math",
          stage: "practice",
        }),
      ),
    );
    assert.ok(pointer);
    assert.equal(
      activeLessonMatchesContext(pointer, {
        learnerId: "learner-testchildb-xyz",
        grade: 5,
      }),
      false,
    );
  });

  it("Knowledge Tree lesson links resolve the correct grade lesson", () => {
    const g6 = getKnowledgeTreeGraph("english", 6);
    const sva = g6.concepts.find((node) => node.id === "english-sva-simple");
    assert.ok(sva?.hasReadyExperience);
    const lesson = getCompleteLesson(sva.id, 6);
    assert.ok(lesson);
    assert.equal(lesson.grade, 6);
    assert.equal(lesson.subject, "english");
    assert.equal(lesson.conceptId, "english-sva-simple");

    const g4Tree = getKnowledgeTreeGraph("science", 4);
    const photo = g4Tree.concepts.find(
      (node) => node.id === "science-plants-photosynthesis",
    );
    assert.ok(photo?.hasReadyExperience);
    const photoLesson = getCompleteLesson(photo.id, 4);
    assert.ok(photoLesson);
    assert.equal(photoLesson.grade, 4);
    assert.equal(photoLesson.subject, "science");
  });
});
