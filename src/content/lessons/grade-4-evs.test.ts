import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  GRADE_4_EVS_CONCEPT_IDS,
  GRADE_4_EVS_LESSONS,
} from "@/content/lessons/grade-4-evs";
import { getCompleteLesson } from "@/content/lessons";
import {
  getCurriculumConcept,
  getCurriculumWorld,
  GOLD_STANDARD_CONCEPT_IDS,
} from "@/content/curriculum";
import { writeAnswerSucceeds } from "@/domain/complete-lesson";
import type { GradeLessonContent, LessonQuestion } from "@/domain/complete-lesson";

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

describe("Grade 4 Our Wondrous World EVS lesson batch", () => {
  it("authors one complete Grade 4 lesson for each official EVS chapter", () => {
    const world = getCurriculumWorld("ncert-g4-wondrous-world");
    assert.ok(world, "Our Wondrous World Grade 4 world should exist");
    assert.equal(world.topics.length, 10);
    assert.equal(world.concepts.length, 10);
    assert.equal(GRADE_4_EVS_CONCEPT_IDS.length, 10);
    assert.equal(GRADE_4_EVS_LESSONS.length, 10);

    for (const concept of world.concepts) {
      assert.ok(
        GRADE_4_EVS_CONCEPT_IDS.includes(
          concept.id as (typeof GRADE_4_EVS_CONCEPT_IDS)[number],
        ),
        `unexpected EVS concept ${concept.id}`,
      );
      const lesson = getCompleteLesson(concept.id, 4);
      assert.ok(lesson, `missing Grade 4 lesson for ${concept.id}`);
      assert.equal(lesson.title, concept.title);
      assert.equal(lesson.subject, "science");
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

  it("keeps gold-standard and Grade 4 Math lessons available", () => {
    assert.ok(getCompleteLesson("equivalent-fractions", 4));
    assert.ok(getCompleteLesson("science-plants-photosynthesis", 6));
    assert.ok(getCompleteLesson("english-sva-simple", 6));
    assert.ok(
      getCompleteLesson("ncert-g4-maths-mela-shapes-around-us-core", 4),
    );
    for (const id of GOLD_STANDARD_CONCEPT_IDS) {
      assert.ok(getCurriculumConcept(id), `catalogue missing gold concept ${id}`);
    }
  });

  it("gives every Grade 4 EVS lesson the complete-lesson shape", () => {
    const seenQuestionIds = new Set<string>();

    for (const definition of GRADE_4_EVS_LESSONS) {
      assert.deepEqual(definition.grades, [4]);
      assert.equal(definition.subject, "science");
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

  it("chains the 10 chapters in Our Wondrous World order", () => {
    for (let index = 0; index < GRADE_4_EVS_LESSONS.length; index += 1) {
      const lesson = GRADE_4_EVS_LESSONS[index];
      const expectedId = GRADE_4_EVS_CONCEPT_IDS[index];
      assert.equal(lesson.conceptId, expectedId);

      if (index === 0) {
        assert.deepEqual(lesson.prerequisites, []);
      } else {
        assert.ok(
          lesson.prerequisites.includes(GRADE_4_EVS_CONCEPT_IDS[index - 1]),
        );
      }

      if (index === GRADE_4_EVS_LESSONS.length - 1) {
        assert.deepEqual(lesson.nextConceptIds, []);
      } else {
        assert.deepEqual(lesson.nextConceptIds, [
          GRADE_4_EVS_CONCEPT_IDS[index + 1],
        ]);
      }
    }
  });

  it("accepts reasonable written answers on sample Grade 4 EVS prompts", () => {
    const living = getCompleteLesson(
      "ncert-g4-wondrous-world-living-together-core",
      4,
    );
    assert.ok(living);
    const helper = living.content.retrieve.find((item) => item.id === "g4e-lt-t2");
    assert.ok(helper);
    assert.equal(
      writeAnswerSucceeds("A teacher helps, and friends take turns sharing", helper),
      true,
    );

    const food = getCompleteLesson(
      "ncert-g4-wondrous-world-food-for-health-core",
      4,
    );
    assert.ok(food);
    const origin = food.content.retrieve.find((item) => item.id === "g4e-fh-t2");
    assert.ok(origin);
    assert.equal(
      writeAnswerSucceeds("Milk is healthy and comes from a cow", origin),
      true,
    );

    const sky = getCompleteLesson("ncert-g4-wondrous-world-our-sky-core", 4);
    assert.ok(sky);
    const dayNight = sky.content.retrieve.find((item) => item.id === "g4e-os-t2");
    assert.ok(dayNight);
    assert.equal(
      writeAnswerSucceeds(
        "Day is light from the sun; night is dark. Look at the moon safely and never stare at the sun.",
        dayNight,
      ),
      true,
    );
  });
});
