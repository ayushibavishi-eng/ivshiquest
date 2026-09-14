import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  GRADE_4_MATH_LESSONS,
  GRADE_4_MATH_MELA_CONCEPT_IDS,
  GRADE_4_MATH_SPINE_COVERAGE,
  grade4MathSpineCoverageAudit,
} from "@/content/lessons/grade-4-math";
import { getCompleteLesson } from "@/content/lessons";
import {
  getCurriculumConcept,
  getCurriculumWorld,
  getCurriculumWorldsForSubject,
  getWorldPathForGrade,
  GOLD_STANDARD_CONCEPT_IDS,
} from "@/content/curriculum";
import { writeAnswerSucceeds } from "@/domain/complete-lesson";
import type { GradeLessonContent, LessonQuestion } from "@/domain/complete-lesson";
import { getKnowledgeTreeGraph } from "@/services/knowledge-tree/get-knowledge-tree";

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

describe("Grade 4 Maths Mela lesson batch", () => {
  it("authors one complete Grade 4 lesson for each Maths Mela chapter", () => {
    const world = getCurriculumWorld("ncert-g4-maths-mela");
    assert.ok(world, "Maths Mela Grade 4 world should exist");
    assert.equal(world.topics.length, 14);
    assert.equal(world.concepts.length, 14);
    assert.equal(GRADE_4_MATH_MELA_CONCEPT_IDS.length, 14);
    assert.equal(GRADE_4_MATH_LESSONS.length, 14);

    for (const concept of world.concepts) {
      assert.ok(
        GRADE_4_MATH_MELA_CONCEPT_IDS.includes(
          concept.id as (typeof GRADE_4_MATH_MELA_CONCEPT_IDS)[number],
        ),
        `unexpected Maths Mela concept ${concept.id}`,
      );
      const lesson = getCompleteLesson(concept.id, 4);
      assert.ok(lesson, `missing Grade 4 lesson for ${concept.id}`);
      assert.equal(lesson.title, concept.title);
      assert.equal(lesson.subject, "math");
      assert.equal(lesson.grade, 4);
      assert.equal(getCompleteLesson(concept.id, 5), undefined);
    }
  });

  it("keeps gold-standard lessons available", () => {
    assert.ok(getCompleteLesson("equivalent-fractions", 4));
    assert.ok(getCompleteLesson("equivalent-fractions", 6));
    assert.ok(getCompleteLesson("science-plants-photosynthesis", 6));
    assert.ok(getCompleteLesson("english-sva-simple", 6));
    for (const id of GOLD_STANDARD_CONCEPT_IDS) {
      assert.ok(getCurriculumConcept(id), `catalogue missing gold concept ${id}`);
    }
  });

  it("gives every Grade 4 Math lesson the complete-lesson shape", () => {
    const seenQuestionIds = new Set<string>();

    for (const definition of GRADE_4_MATH_LESSONS) {
      assert.deepEqual(definition.grades, [4]);
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

      const questions = questionsIn(content);
      const writeQuestions = questions.filter((question) => question.format === "write");
      assert.ok(
        writeQuestions.length >= 2,
        `${definition.conceptId} should include write/explain prompts`,
      );

      for (const question of questions) {
        assert.equal(seenQuestionIds.has(question.id), false, `duplicate id ${question.id}`);
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

  it("chains the 14 chapters in Maths Mela order", () => {
    for (let index = 0; index < GRADE_4_MATH_LESSONS.length; index += 1) {
      const lesson = GRADE_4_MATH_LESSONS[index];
      const expectedId = GRADE_4_MATH_MELA_CONCEPT_IDS[index];
      assert.equal(lesson.conceptId, expectedId);

      if (index === 0) {
        assert.deepEqual(lesson.prerequisites, []);
      } else {
        assert.ok(lesson.prerequisites.includes(GRADE_4_MATH_MELA_CONCEPT_IDS[index - 1]));
      }

      if (index === GRADE_4_MATH_LESSONS.length - 1) {
        assert.deepEqual(lesson.nextConceptIds, []);
      } else {
        assert.deepEqual(lesson.nextConceptIds, [
          GRADE_4_MATH_MELA_CONCEPT_IDS[index + 1],
        ]);
      }
    }
  });

  it("accepts reasonable written answers on sample Grade 4 prompts", () => {
    const thousands = getCompleteLesson(
      "ncert-g4-maths-mela-thousands-around-us-core",
      4,
    );
    assert.ok(thousands);
    const expanded = thousands.content.retrieve.find((item) => item.id === "g4m-th-t2");
    assert.ok(expanded);
    assert.equal(writeAnswerSucceeds("3,000 + 400 + 6", expanded), true);
    assert.equal(writeAnswerSucceeds("a balloon", expanded), false);

    const groups = getCompleteLesson("ncert-g4-maths-mela-equal-groups-core", 4);
    assert.ok(groups);
    const total = groups.content.reasoning.find((item) => item.id === "g4m-eg-r2");
    assert.ok(total);
    assert.equal(writeAnswerSucceeds("28", total), true);
    assert.equal(writeAnswerSucceeds("twenty-eight", total), true);

    const data = getCompleteLesson("ncert-g4-maths-mela-data-handling-core", 4);
    assert.ok(data);
    const votes = data.content.practice.find((item) => item.id === "g4m-dh-p3");
    assert.ok(votes);
    assert.equal(writeAnswerSucceeds("10 votes", votes), true);

    const shapes = getCompleteLesson("ncert-g4-maths-mela-shapes-around-us-core", 4);
    assert.ok(shapes);
    const ball = shapes.content.practice.find((item) => item.id === "g4m-sh-p3");
    assert.ok(ball);
    assert.equal(
      writeAnswerSucceeds(
        "A ball is a sphere. A circle is the flat round shape you draw.",
        ball,
      ),
      true,
    );
  });

  it("maps every Grade 4 math skill-spine concept onto a host lesson", () => {
    const audit = grade4MathSpineCoverageAudit();
    assert.equal(audit.spineItems, 70);
    assert.equal(audit.taughtCount + audit.overlapCount, 70);
    assert.equal(new Set(audit.connectedIds).size, 70);

    const world = getCurriculumWorld("ncert-g4-maths-mela");
    assert.ok(world);
    assert.equal(world.topics.length, 14);
    assert.equal(world.concepts.length, 14);

    for (const row of GRADE_4_MATH_SPINE_COVERAGE) {
      const concept = getCurriculumConcept(row.id);
      assert.ok(concept, `catalogue missing spine concept ${row.id}`);
      assert.ok(concept.grades.includes(4), `${row.id} should apply to Grade 4`);
      assert.ok(row.objective.length > 20, `${row.id} needs a learning objective`);

      const hosted = getCompleteLesson(row.id, 4);
      const host = getCompleteLesson(row.hostConceptId, 4);
      assert.ok(hosted, `${row.id} should resolve to a Grade 4 lesson`);
      assert.ok(host, `host ${row.hostConceptId} should have a Grade 4 lesson`);
      assert.equal(hosted.conceptId, row.hostConceptId);
      assert.equal(hosted.title, host.title);
      assert.ok(hosted.coveredSkillIds.includes(row.id));
      if (!concept.grades.includes(5)) {
        assert.equal(getCompleteLesson(row.id, 5), undefined);
      }
    }
  });

  it("makes the full Grade 4 math catalogue learnable without extra lessons", () => {
    const mathWorlds = getCurriculumWorldsForSubject("math", 4);
    const conceptIds: string[] = [];
    for (const world of mathWorlds) {
      for (const concept of getWorldPathForGrade(world, 4)) {
        conceptIds.push(concept.id);
        assert.ok(
          getCompleteLesson(concept.id, 4),
          `Grade 4 math concept ${concept.id} still has no learning content`,
        );
      }
    }
    assert.equal(conceptIds.length, 85);

    const tree = getKnowledgeTreeGraph("math", 4);
    const missing = tree.concepts.filter((concept) => !concept.hasReadyExperience);
    assert.deepEqual(
      missing.map((concept) => concept.id),
      [],
    );
    assert.equal(GRADE_4_MATH_LESSONS.length, 14);
  });
});
