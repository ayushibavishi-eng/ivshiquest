import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  GRADE_8_ENGLISH_CONCEPT_IDS,
  GRADE_8_ENGLISH_LESSONS,
  GRADE_8_ENGLISH_SPINE_COVERAGE,
  grade8EnglishSpineCoverageAudit,
} from "@/content/lessons/grade-8-english";
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
import {
  getGrammarConceptForCatalogueId,
  listCatalogueGrammarConceptIds,
  resolveGrammarLessonHost,
} from "@/content/grammar";

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

describe("Grade 8 Poorvi English lesson batch", () => {
  it("authors one complete Grade 8 lesson for each official Poorvi text", () => {
    const world = getCurriculumWorld("ncert-g8-poorvi");
    assert.ok(world, "Poorvi Grade 8 world should exist");
    assert.equal(world.concepts.length, 15);
    assert.equal(GRADE_8_ENGLISH_CONCEPT_IDS.length, 15);
    assert.equal(GRADE_8_ENGLISH_LESSONS.length, 15);

    for (const concept of world.concepts) {
      assert.ok(
        GRADE_8_ENGLISH_CONCEPT_IDS.includes(
          concept.id as (typeof GRADE_8_ENGLISH_CONCEPT_IDS)[number],
        ),
        `unexpected Poorvi concept ${concept.id}`,
      );
      const lesson = getCompleteLesson(concept.id, 8);
      assert.ok(lesson, `missing Grade 8 lesson for ${concept.id}`);
      assert.equal(lesson.title, concept.title);
      assert.equal(lesson.subject, "english");
      assert.equal(lesson.grade, 8);
      assert.equal(getCompleteLesson(concept.id, 7), undefined);
      assert.equal(lesson.content.understand.video, undefined);
    }
  });

  it("preserves Subject-Verb Agreement gold and prior English batches", () => {
    for (const grade of [4, 5, 6] as const) {
      const sva = getCompleteLesson("english-sva-simple", grade);
      assert.ok(sva, `SVA gold missing at grade ${grade}`);
      assert.equal(sva.conceptId, "english-sva-simple");
      assert.equal(sva.title, "Subject-Verb Agreement");
    }
    assert.equal(getCompleteLesson("english-sva-simple", 7), undefined);
    assert.equal(getCompleteLesson("english-sva-simple", 8), undefined);

    assert.ok(
      getCompleteLesson("ncert-g7-poorvi-the-day-the-river-spoke-core", 7),
    );
    assert.ok(getCompleteLesson("ncert-g6-poorvi-bottle-of-dew", 6));
    assert.ok(
      getCompleteLesson("ncert-g8-curiosity-investigative-world-core", 8),
    );

    for (const id of GOLD_STANDARD_CONCEPT_IDS) {
      assert.ok(getCurriculumConcept(id), `catalogue missing gold concept ${id}`);
    }
  });

  it("gives every Grade 8 English lesson the complete-lesson shape", () => {
    const seenQuestionIds = new Set<string>();

    for (const definition of GRADE_8_ENGLISH_LESSONS) {
      assert.deepEqual(definition.grades, [8]);
      const content = definition.byGrade[8];
      assert.ok(content, `${definition.conceptId} needs Grade 8 content`);
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

  it("chains the 15 texts in Poorvi order", () => {
    for (let index = 0; index < GRADE_8_ENGLISH_LESSONS.length; index += 1) {
      const lesson = GRADE_8_ENGLISH_LESSONS[index];
      const expectedId = GRADE_8_ENGLISH_CONCEPT_IDS[index];
      assert.equal(lesson.conceptId, expectedId);

      if (index === 0) {
        assert.deepEqual(lesson.prerequisites, []);
      } else {
        assert.ok(
          lesson.prerequisites.includes(GRADE_8_ENGLISH_CONCEPT_IDS[index - 1]),
        );
      }

      if (index === GRADE_8_ENGLISH_LESSONS.length - 1) {
        assert.deepEqual(lesson.nextConceptIds, []);
      } else {
        assert.deepEqual(lesson.nextConceptIds, [
          GRADE_8_ENGLISH_CONCEPT_IDS[index + 1],
        ]);
      }
    }
  });

  it("accepts reasonable written answers on sample Grade 8 English prompts", () => {
    const wit = getCompleteLesson(
      "ncert-g8-poorvi-wit-that-won-hearts-core",
      8,
    );
    assert.ok(wit);
    const write =
      wit.content.practice.find((item) => item.format === "write") ??
      wit.content.reasoning.find((item) => item.format === "write") ??
      wit.content.retrieve.find((item) => item.format === "write");
    assert.ok(write);
    if (write.acceptedAnswers.length > 0) {
      assert.equal(writeAnswerSucceeds(write.acceptedAnswers[0], write), true);
    } else {
      assert.ok(write.keyIdeas.length > 0);
    }
  });

  it("maps every Grade 8 English skill-spine concept onto a host lesson", () => {
    const audit = grade8EnglishSpineCoverageAudit();
    assert.equal(audit.spineItems, 35);
    assert.equal(audit.taughtCount + audit.overlapCount, 35);
    assert.equal(new Set(audit.connectedIds).size, 35);
    assert.equal(
      GRADE_8_ENGLISH_SPINE_COVERAGE.some(
        (row) => row.id === "english-sva-simple",
      ),
      false,
    );

    for (const row of GRADE_8_ENGLISH_SPINE_COVERAGE) {
      const concept = getCurriculumConcept(row.id);
      assert.ok(concept, `catalogue missing spine concept ${row.id}`);
      assert.ok(concept.grades.includes(8), `${row.id} should apply to Grade 8`);
      assert.ok(row.objective.length > 20, `${row.id} needs a learning objective`);

      const hosted = getCompleteLesson(row.id, 8);
      const host = getCompleteLesson(row.hostConceptId, 8);
      assert.ok(hosted, `${row.id} should resolve to a Grade 8 lesson`);
      assert.ok(host, `host ${row.hostConceptId} should have a Grade 8 lesson`);
      assert.equal(hosted.conceptId, row.hostConceptId);
      assert.equal(hosted.title, host.title);
      assert.ok(hosted.coveredSkillIds.includes(row.id));
    }
  });

  it("connects Grade 8 Grammar Spine catalogue ids through English hosts", () => {
    const grammarIds = listCatalogueGrammarConceptIds(8);
    assert.equal(grammarIds.length, 17);

    for (const catalogueId of grammarIds) {
      const spine = getGrammarConceptForCatalogueId(catalogueId, 8);
      assert.ok(spine, `Grammar Spine missing owner for ${catalogueId}@8`);
      const resolved = resolveGrammarLessonHost(catalogueId, 8);
      assert.ok(resolved);
      assert.equal(resolved.source, "skill-coverage");
      assert.equal(resolved.status, "ready");
      assert.ok(getCompleteLesson(catalogueId, 8));
    }
  });

  it("makes the full Grade 8 English catalogue learnable without extra lessons", () => {
    const englishWorlds = getCurriculumWorldsForSubject("english", 8);
    const conceptIds: string[] = [];
    for (const world of englishWorlds) {
      for (const concept of getWorldPathForGrade(world, 8)) {
        conceptIds.push(concept.id);
        assert.ok(
          getCompleteLesson(concept.id, 8),
          `Grade 8 English concept ${concept.id} still has no learning content`,
        );
      }
    }
    assert.equal(conceptIds.length, 50);

    const tree = getKnowledgeTreeGraph("english", 8);
    const missing = tree.concepts.filter(
      (concept) => !concept.hasReadyExperience,
    );
    assert.deepEqual(
      missing.map((concept) => concept.id),
      [],
    );
    assert.equal(GRADE_8_ENGLISH_LESSONS.length, 15);
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
