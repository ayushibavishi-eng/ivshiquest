import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  GRADE_4_ENGLISH_CONCEPT_IDS,
  GRADE_4_ENGLISH_LESSONS,
  grade4EnglishSpineCoverageAudit,
} from "@/content/lessons/grade-4-english";
import { getCompleteLesson } from "@/content/lessons";
import {
  getCurriculumConcept,
  getCurriculumWorld,
  GOLD_STANDARD_CONCEPT_IDS,
} from "@/content/curriculum";
import { writeAnswerSucceeds } from "@/domain/complete-lesson";
import type { GradeLessonContent, LessonQuestion } from "@/domain/complete-lesson";
import { lessonHasVideoExplanation } from "@/domain/lesson-video";

const FORBIDDEN_LEARNER_PHRASES = [
  /\bcorrect\b/i,
  /\bwrong\b/i,
  /\bincorrect\b/i,
  /\byou failed\b/i,
];

function questionsIn(content: GradeLessonContent): LessonQuestion[] {
  return [
    ...content.practice,
    ...content.reasoning,
    ...content.retrieve,
    content.mastery,
  ];
}

function learnerFacingText(content: GradeLessonContent): string[] {
  const lines: string[] = [
    content.objective,
    content.wonder.prompt,
    content.explore.text,
    content.explore.activity.prompt,
    ...content.understand.paragraphs,
    ...content.examples.flatMap((example) => [example.caption, example.body]),
    content.connection,
    content.try.prompt,
    content.try.reveal,
    content.masteryCriteria,
    content.reflect.prompt,
    content.teach.prompt,
  ];

  for (const choice of content.explore.activity.choices) {
    lines.push(choice.label, choice.note);
  }

  for (const question of questionsIn(content)) {
    lines.push(
      question.prompt,
      question.explanation,
      question.hint,
      ...question.choices.map((choice) => choice.text),
      ...Object.values(question.feedbackByChoice),
    );
  }

  return lines.filter((line) => line.trim().length > 0);
}

describe("Grade 4 Santoor English lesson batch", () => {
  it("authors one complete Grade 4 lesson for each official Santoor chapter", () => {
    const world = getCurriculumWorld("ncert-g4-santoor");
    assert.ok(world, "Santoor Grade 4 world should exist");
    assert.equal(world.topics.length, 12);
    assert.equal(world.concepts.length, 12);
    assert.equal(GRADE_4_ENGLISH_CONCEPT_IDS.length, 12);
    assert.equal(GRADE_4_ENGLISH_LESSONS.length, 12);

    for (const concept of world.concepts) {
      assert.ok(
        GRADE_4_ENGLISH_CONCEPT_IDS.includes(
          concept.id as (typeof GRADE_4_ENGLISH_CONCEPT_IDS)[number],
        ),
        `unexpected Santoor concept ${concept.id}`,
      );
      const lesson = getCompleteLesson(concept.id, 4);
      assert.ok(lesson, `missing Grade 4 lesson for ${concept.id}`);
      assert.equal(lesson.title, concept.title);
      assert.equal(lesson.subject, "english");
      assert.equal(lesson.grade, 4);
      assert.equal(getCompleteLesson(concept.id, 5), undefined);

      const catalogueSkills = concept.skills.map((skill) => skill.id).sort();
      assert.deepEqual(
        [...lesson.coveredSkillIds].sort(),
        catalogueSkills,
        `${concept.id} should cover its catalogue skills`,
      );
    }
  });

  it("keeps gold-standard English and other subject lessons available", () => {
    assert.ok(getCompleteLesson("english-sva-simple", 4));
    assert.ok(getCompleteLesson("english-sva-simple", 6));
    assert.ok(getCompleteLesson("equivalent-fractions", 4));
    assert.ok(getCompleteLesson("science-plants-photosynthesis", 6));
    for (const id of GOLD_STANDARD_CONCEPT_IDS) {
      assert.ok(getCurriculumConcept(id), `catalogue missing gold concept ${id}`);
    }
  });

  it("gives every Grade 4 English lesson the complete-lesson shape", () => {
    const seenQuestionIds = new Set<string>();

    for (const definition of GRADE_4_ENGLISH_LESSONS) {
      assert.deepEqual(definition.grades, [4]);
      assert.equal(definition.subject, "english");
      const content = definition.byGrade[4];
      assert.ok(content, `${definition.conceptId} needs Grade 4 content`);
      assert.ok(content.wonder.prompt.length > 20);
      assert.ok(content.understand.paragraphs.length >= 3);
      assert.ok(content.examples.length >= 2);
      assert.ok(content.practice.length >= 3);
      assert.ok(content.reasoning.length >= 2);
      assert.ok(content.retrieve.length >= 2);
      assert.ok(content.teach.prompt.length > 10);
      assert.ok(content.explore.activity.choices.length === 3);
      assert.ok(
        (definition.coveredSkillIds?.length ?? 0) >= 2,
        `${definition.conceptId} should declare covered skills`,
      );
      assert.equal(
        lessonHasVideoExplanation(content.understand),
        false,
        `${definition.conceptId} should not force a video without a real asset`,
      );

      const questions = questionsIn(content);
      const writeQuestions = questions.filter(
        (question) => question.format === "write",
      );
      assert.ok(
        writeQuestions.length >= 2,
        `${definition.conceptId} should include write/explain prompts`,
      );

      for (const question of questions) {
        assert.equal(
          seenQuestionIds.has(question.id),
          false,
          `duplicate id ${question.id}`,
        );
        seenQuestionIds.add(question.id);

        if (question.format === "choice") {
          assert.equal(question.choices.length, 3);
          assert.ok(question.correctChoiceId);
          for (const choice of question.choices) {
            assert.ok(question.feedbackByChoice[choice.id]);
          }
        } else {
          assert.ok(
            question.acceptedAnswers.length > 0 || question.keyIdeas.length > 0,
            `${question.id} needs accepted answers or key ideas`,
          );
        }
      }

      for (const line of learnerFacingText(content)) {
        for (const pattern of FORBIDDEN_LEARNER_PHRASES) {
          assert.equal(
            pattern.test(line),
            false,
            `forbidden learner language in ${definition.conceptId}: ${line}`,
          );
        }
      }
    }
  });

  it("chains the 12 chapters in Santoor order", () => {
    for (let index = 0; index < GRADE_4_ENGLISH_LESSONS.length; index += 1) {
      const lesson = GRADE_4_ENGLISH_LESSONS[index];
      const expectedId = GRADE_4_ENGLISH_CONCEPT_IDS[index];
      assert.equal(lesson.conceptId, expectedId);

      if (index === 0) {
        assert.deepEqual(lesson.prerequisites, []);
      } else {
        assert.ok(
          lesson.prerequisites.includes(GRADE_4_ENGLISH_CONCEPT_IDS[index - 1]),
        );
      }

      if (index === GRADE_4_ENGLISH_LESSONS.length - 1) {
        assert.deepEqual(lesson.nextConceptIds, []);
      } else {
        assert.deepEqual(lesson.nextConceptIds, [
          GRADE_4_ENGLISH_CONCEPT_IDS[index + 1],
        ]);
      }
    }
  });

  it("accepts reasonable written answers on sample Grade 4 English prompts", () => {
    const together = getCompleteLesson(
      "ncert-g4-santoor-together-we-can-core",
      4,
    );
    assert.ok(together);
    const retell = together.content.retrieve.find(
      (item) => item.id === "g4en-tw-t2",
    );
    assert.ok(retell);
    assert.equal(
      writeAnswerSucceeds(
        "Friends helped lift together. The message is shared work helps.",
        retell,
      ),
      true,
    );

    const braille = getCompleteLesson("ncert-g4-santoor-braille-core", 4);
    assert.ok(braille);
    const explain = braille.content.retrieve.find(
      (item) => item.id === "g4en-br-t2",
    );
    assert.ok(explain);
    assert.equal(
      writeAnswerSucceeds(
        "Braille is raised dots you read by touch. Access matters so everyone can learn from books.",
        explain,
      ),
      true,
    );
  });

  it("keeps the reusable Video Explanation proof on Grade 6 Photosynthesis intact", () => {
    const photo = getCompleteLesson("science-plants-photosynthesis", 6);
    assert.ok(photo);
    assert.equal(lessonHasVideoExplanation(photo.content.understand), true);
    assert.equal(
      photo.content.understand.video?.source.mediaUrl,
      "/videos/dev/dev-proof-photosynthesis-test.mp4",
    );
  });

  it("honestly hosts only Grade 4 grammar skills the SVA gold lesson teaches", () => {
    const audit = grade4EnglishSpineCoverageAudit();
    assert.equal(audit.spineItems, 2);
    assert.deepEqual(audit.connectedIds.sort(), [
      "english-sp-s-form",
      "english-sub-who",
    ]);

    for (const id of audit.connectedIds) {
      const lesson = getCompleteLesson(id, 4);
      assert.ok(lesson, `${id} should resolve at Grade 4`);
      assert.equal(lesson.conceptId, "english-sva-simple");
      assert.equal(lesson.title, "Subject-Verb Agreement");
      assert.ok(lesson.coveredSkillIds.includes(id));
    }

    // Santoor chapters remain literature — not fake grammar hosts.
    assert.equal(
      getCompleteLesson("english-nouns-count", 4),
      undefined,
      "countable nouns should stay Coming Soon without filler hosting",
    );
    assert.equal(getCompleteLesson("english-art-a-an", 4), undefined);
    assert.equal(getCompleteLesson("english-prep-place", 4), undefined);
  });

  it("preserves Grade 6 SVA gold and does not claim Grade 7 SVA gold", () => {
    assert.ok(getCompleteLesson("english-sva-simple", 6));
    assert.equal(getCompleteLesson("english-sva-simple", 7), undefined);
  });
});
