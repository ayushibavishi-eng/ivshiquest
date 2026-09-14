import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  GRADE_5_ENGLISH_CONCEPT_IDS,
  GRADE_5_ENGLISH_LESSONS,
  GRADE_5_ENGLISH_SPINE_COVERAGE,
  grade5EnglishSpineCoverageAudit,
} from "@/content/lessons/grade-5-english";
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

describe("Grade 5 Santoor English lesson batch", () => {
  it("authors one complete Grade 5 lesson for each official Santoor chapter", () => {
    const world = getCurriculumWorld("ncert-g5-santoor");
    assert.ok(world, "Santoor Grade 5 world should exist");
    assert.equal(world.curriculumId, "india-current");
    assert.equal(world.topics.length, 10);
    assert.equal(world.concepts.length, 10);
    assert.equal(GRADE_5_ENGLISH_CONCEPT_IDS.length, 10);
    assert.equal(GRADE_5_ENGLISH_LESSONS.length, 10);

    for (const concept of world.concepts) {
      assert.ok(
        GRADE_5_ENGLISH_CONCEPT_IDS.includes(
          concept.id as (typeof GRADE_5_ENGLISH_CONCEPT_IDS)[number],
        ),
        `unexpected Santoor concept ${concept.id}`,
      );
      const lesson = getCompleteLesson(concept.id, 5);
      assert.ok(lesson, `missing Grade 5 lesson for ${concept.id}`);
      assert.equal(lesson.title, concept.title);
      assert.equal(lesson.subject, "english");
      assert.equal(lesson.grade, 5);
      assert.equal(getCompleteLesson(concept.id, 4), undefined);

      for (const skill of concept.skills) {
        assert.ok(
          lesson.coveredSkillIds.includes(skill.id),
          `${concept.id} should cover catalogue skill ${skill.id}`,
        );
      }
    }
  });

  it("keeps Grade 5 India English catalogue filtered from empty USA English", () => {
    const india = getCurriculumWorldsForSubject("english", 5, "india-current");
    const usa = getCurriculumWorldsForSubject("english", 5, "us");
    assert.ok(india.some((world) => world.id === "ncert-g5-santoor"));
    assert.equal(usa.length, 0);
  });

  it("keeps gold-standard and prior batches available", () => {
    assert.ok(getCompleteLesson("english-sva-simple", 5));
    assert.ok(getCompleteLesson("english-sva-simple", 4));
    assert.ok(getCompleteLesson("english-sva-simple", 6));
    assert.ok(getCompleteLesson("equivalent-fractions", 5));
    assert.ok(getCompleteLesson("science-plants-photosynthesis", 6));
    assert.ok(
      getCompleteLesson("ncert-g4-santoor-together-we-can-core", 4),
    );
    assert.ok(
      getCompleteLesson("ncert-g5-maths-mela-fractions-core", 5),
    );
    for (const id of GOLD_STANDARD_CONCEPT_IDS) {
      assert.ok(getCurriculumConcept(id), `catalogue missing gold concept ${id}`);
    }
  });

  it("gives every Grade 5 English lesson the complete-lesson shape", () => {
    const seenQuestionIds = new Set<string>();

    for (const definition of GRADE_5_ENGLISH_LESSONS) {
      assert.deepEqual(definition.grades, [5]);
      const content = definition.byGrade[5];
      assert.ok(content, `${definition.conceptId} needs Grade 5 content`);
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

  it("chains the 10 chapters in Santoor order", () => {
    for (let index = 0; index < GRADE_5_ENGLISH_LESSONS.length; index += 1) {
      const lesson = GRADE_5_ENGLISH_LESSONS[index];
      const expectedId = GRADE_5_ENGLISH_CONCEPT_IDS[index];
      assert.equal(lesson.conceptId, expectedId);

      if (index === 0) {
        assert.deepEqual(lesson.prerequisites, []);
      } else {
        assert.ok(
          lesson.prerequisites.includes(GRADE_5_ENGLISH_CONCEPT_IDS[index - 1]),
        );
      }

      if (index === GRADE_5_ENGLISH_LESSONS.length - 1) {
        assert.deepEqual(lesson.nextConceptIds, []);
      } else {
        assert.deepEqual(lesson.nextConceptIds, [
          GRADE_5_ENGLISH_CONCEPT_IDS[index + 1],
        ]);
      }
    }
  });

  it("accepts reasonable written answers on sample Grade 5 English prompts", () => {
    const papa = getCompleteLesson(
      "ncert-g5-santoor-papas-spectacles-core",
      5,
    );
    assert.ok(papa);
    const write =
      papa.content.practice.find((item) => item.format === "write") ??
      papa.content.reasoning.find((item) => item.format === "write");
    assert.ok(write);
    if (write.acceptedAnswers.length > 0) {
      assert.equal(writeAnswerSucceeds(write.acceptedAnswers[0], write), true);
    } else {
      assert.ok(write.keyIdeas.length > 0);
    }
  });

  it("maps every Grade 5 English skill-spine concept onto a host lesson", () => {
    const audit = grade5EnglishSpineCoverageAudit();
    assert.equal(audit.spineItems, 106);
    assert.equal(audit.taughtCount + audit.overlapCount, 106);
    assert.equal(new Set(audit.connectedIds).size, 106);

    for (const row of GRADE_5_ENGLISH_SPINE_COVERAGE) {
      const concept = getCurriculumConcept(row.id);
      assert.ok(concept, `catalogue missing spine concept ${row.id}`);
      assert.ok(concept.grades.includes(5), `${row.id} should apply to Grade 5`);
      assert.ok(row.objective.length > 20, `${row.id} needs a learning objective`);

      const hosted = getCompleteLesson(row.id, 5);
      const host = getCompleteLesson(row.hostConceptId, 5);
      assert.ok(hosted, `${row.id} should resolve to a Grade 5 lesson`);
      assert.ok(host, `host ${row.hostConceptId} should have a Grade 5 lesson`);
      assert.equal(hosted.conceptId, row.hostConceptId);
      assert.equal(hosted.title, host.title);
      assert.ok(hosted.coveredSkillIds.includes(row.id));
    }
  });

  it("makes the full Grade 5 English catalogue learnable without extra lessons", () => {
    const englishWorlds = getCurriculumWorldsForSubject("english", 5);
    const conceptIds: string[] = [];
    for (const world of englishWorlds) {
      for (const concept of getWorldPathForGrade(world, 5)) {
        conceptIds.push(concept.id);
        assert.ok(
          getCompleteLesson(concept.id, 5),
          `Grade 5 English concept ${concept.id} still has no learning content`,
        );
      }
    }
    assert.equal(conceptIds.length, 117);

    const tree = getKnowledgeTreeGraph("english", 5);
    const missing = tree.concepts.filter((concept) => !concept.hasReadyExperience);
    assert.deepEqual(
      missing.map((concept) => concept.id),
      [],
    );
    assert.equal(GRADE_5_ENGLISH_LESSONS.length, 10);
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
