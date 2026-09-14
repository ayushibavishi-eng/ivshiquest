import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  GRADE_7_MATH_CONCEPT_IDS,
  GRADE_7_MATH_LESSONS,
  GRADE_7_MATH_SPINE_COVERAGE,
  grade7MathSpineCoverageAudit,
} from "@/content/lessons/grade-7-math";
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

describe("Grade 7 Ganita Prakash Math lesson batch", () => {
  it("authors one complete Grade 7 lesson for each official Ganita Prakash chapter", () => {
    const part1 = getCurriculumWorld("ncert-g7-ganita-prakash-1");
    const part2 = getCurriculumWorld("ncert-g7-ganita-prakash-2");
    assert.ok(part1, "Ganita Prakash Part 1 should exist");
    assert.ok(part2, "Ganita Prakash Part 2 should exist");
    assert.equal(part1.concepts.length, 8);
    assert.equal(part2.concepts.length, 7);
    assert.equal(GRADE_7_MATH_CONCEPT_IDS.length, 15);
    assert.equal(GRADE_7_MATH_LESSONS.length, 15);

    const official = [...part1.concepts, ...part2.concepts];
    for (const concept of official) {
      assert.ok(
        GRADE_7_MATH_CONCEPT_IDS.includes(
          concept.id as (typeof GRADE_7_MATH_CONCEPT_IDS)[number],
        ),
        `unexpected Grade 7 Math concept ${concept.id}`,
      );
      const lesson = getCompleteLesson(concept.id, 7);
      assert.ok(lesson, `missing Grade 7 lesson for ${concept.id}`);
      assert.equal(lesson.title, concept.title);
      assert.equal(lesson.subject, "math");
      assert.equal(lesson.grade, 7);
      assert.equal(getCompleteLesson(concept.id, 6), undefined);
    }
  });

  it("keeps gold-standard lessons and prior math batches available", () => {
    assert.ok(getCompleteLesson("equivalent-fractions", 6));
    assert.ok(getCompleteLesson("equivalent-fractions", 5));
    assert.ok(getCompleteLesson("science-plants-photosynthesis", 6));
    assert.ok(getCompleteLesson("english-sva-simple", 6));
    assert.ok(
      getCompleteLesson("ncert-g6-ganita-prakash-patterns-in-mathematics-core", 6),
    );
    for (const id of GOLD_STANDARD_CONCEPT_IDS) {
      assert.ok(getCurriculumConcept(id), `catalogue missing gold concept ${id}`);
    }
  });

  it("gives every Grade 7 Math lesson the complete-lesson shape", () => {
    const seenQuestionIds = new Set<string>();

    for (const definition of GRADE_7_MATH_LESSONS) {
      assert.deepEqual(definition.grades, [7]);
      const content = definition.byGrade[7];
      assert.ok(content, `${definition.conceptId} needs Grade 7 content`);
      assert.ok(content.wonder.prompt.length > 20);
      assert.ok(content.understand.paragraphs.length >= 3);
      assert.ok(content.examples.length >= 2);
      assert.ok(content.practice.length >= 3);
      assert.ok(content.reasoning.length >= 2);
      assert.ok(content.retrieve.length >= 2);
      assert.ok(content.teach.prompt.length > 10);
      assert.ok(content.explore.activity.choices.length === 3);
      assert.equal(content.understand.video, undefined);

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

  it("chains the 15 chapters across Part 1 then Part 2", () => {
    for (let index = 0; index < GRADE_7_MATH_LESSONS.length; index += 1) {
      const lesson = GRADE_7_MATH_LESSONS[index];
      const expectedId = GRADE_7_MATH_CONCEPT_IDS[index];
      assert.equal(lesson.conceptId, expectedId);

      if (index === 0) {
        assert.deepEqual(lesson.prerequisites, []);
      } else {
        assert.ok(
          lesson.prerequisites.includes(GRADE_7_MATH_CONCEPT_IDS[index - 1]),
        );
      }

      if (index === GRADE_7_MATH_LESSONS.length - 1) {
        assert.deepEqual(lesson.nextConceptIds, []);
      } else {
        assert.deepEqual(lesson.nextConceptIds, [
          GRADE_7_MATH_CONCEPT_IDS[index + 1],
        ]);
      }
    }
  });

  it("accepts reasonable written answers on sample Grade 7 Math prompts", () => {
    const large = getCompleteLesson(
      "ncert-g7-ganita-prakash-1-large-numbers-core",
      7,
    );
    assert.ok(large);
    const write =
      large.content.practice.find((item) => item.format === "write") ??
      large.content.reasoning.find((item) => item.format === "write") ??
      large.content.retrieve.find((item) => item.format === "write");
    assert.ok(write);
    if (write.acceptedAnswers.length > 0) {
      assert.equal(writeAnswerSucceeds(write.acceptedAnswers[0], write), true);
    } else {
      assert.ok(write.keyIdeas.length > 0);
    }
  });

  it("maps every Grade 7 math skill-spine concept onto a host lesson", () => {
    const audit = grade7MathSpineCoverageAudit();
    assert.equal(audit.spineItems, 19);
    assert.equal(audit.taughtCount + audit.overlapCount, 19);
    assert.equal(new Set(audit.connectedIds).size, 19);

    for (const row of GRADE_7_MATH_SPINE_COVERAGE) {
      const concept = getCurriculumConcept(row.id);
      assert.ok(concept, `catalogue missing spine concept ${row.id}`);
      assert.ok(concept.grades.includes(7), `${row.id} should apply to Grade 7`);
      assert.ok(row.objective.length > 20, `${row.id} needs a learning objective`);

      const hosted = getCompleteLesson(row.id, 7);
      const host = getCompleteLesson(row.hostConceptId, 7);
      assert.ok(hosted, `${row.id} should resolve to a Grade 7 lesson`);
      assert.ok(host, `host ${row.hostConceptId} should have a Grade 7 lesson`);
      assert.equal(hosted.conceptId, row.hostConceptId);
      assert.equal(hosted.title, host.title);
      assert.ok(hosted.coveredSkillIds.includes(row.id));
    }
  });

  it("makes the full Grade 7 math catalogue learnable without extra lessons", () => {
    const mathWorlds = getCurriculumWorldsForSubject("math", 7);
    const conceptIds: string[] = [];
    for (const world of mathWorlds) {
      for (const concept of getWorldPathForGrade(world, 7)) {
        conceptIds.push(concept.id);
        assert.ok(
          getCompleteLesson(concept.id, 7),
          `Grade 7 math concept ${concept.id} still has no learning content`,
        );
      }
    }
    assert.equal(conceptIds.length, 34);

    const tree = getKnowledgeTreeGraph("math", 7);
    const missing = tree.concepts.filter((concept) => !concept.hasReadyExperience);
    assert.deepEqual(
      missing.map((concept) => concept.id),
      [],
    );
    assert.equal(GRADE_7_MATH_LESSONS.length, 15);
  });

  it("keeps the Photosynthesis video explanation architecture intact", () => {
    const lesson = getCompleteLesson("science-plants-photosynthesis", 6);
    assert.ok(lesson);
    assert.ok(lesson.content.understand.video);
    assert.equal(lesson.content.understand.video?.source.kind, "ivshi");
    assert.equal(
      lesson.content.understand.video?.source.mediaUrl,
      "/videos/dev/dev-proof-photosynthesis-test.mp4",
    );
  });
});
