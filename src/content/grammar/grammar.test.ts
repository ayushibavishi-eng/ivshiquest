import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  CURRICULUM_GRADES,
  type CurriculumGrade,
} from "@/domain/curriculum";
import {
  GOLD_STANDARD_CONCEPT_IDS,
  getCurriculumConcept,
} from "@/content/curriculum";
import {
  GRAMMAR_CONCEPTS,
  GRAMMAR_DOMAINS,
  GRAMMAR_LEARNING_PHASES,
  GRAMMAR_TOPICS,
  getGrammarConcept,
  getGrammarConceptForCatalogueId,
  getGrammarConceptsForGrade,
  grammarSpineAudit,
  listCatalogueGrammarConceptIds,
  resolveGrammarLessonHost,
  validateGrammarSpineStructure,
} from "@/content/grammar";
import { getCompleteLesson } from "@/content/lessons";
import {
  GRADE_4_ENGLISH_LESSONS,
} from "@/content/lessons/grade-4-english";
import {
  GRADE_5_ENGLISH_LESSONS,
} from "@/content/lessons/grade-5-english";
import {
  GRADE_6_ENGLISH_LESSONS,
} from "@/content/lessons/grade-6-english";
import {
  GRADE_7_ENGLISH_LESSONS,
} from "@/content/lessons/grade-7-english";
import { getKnowledgeTreeGraph } from "@/services/knowledge-tree/get-knowledge-tree";

describe("IvshiQuest Grammar Spine (Grades 4–8)", () => {
  it("has unique domains, topics, concepts, and skills with valid structure", () => {
    assert.equal(GRAMMAR_DOMAINS.length > 0, true);
    assert.equal(GRAMMAR_TOPICS.length > 0, true);
    assert.equal(GRAMMAR_CONCEPTS.length > 0, true);
    assert.deepEqual(GRAMMAR_LEARNING_PHASES, [
      "wonder",
      "notice",
      "explore",
      "understand",
      "practice",
      "master",
      "use",
      "teach",
    ]);

    const errors = validateGrammarSpineStructure();
    assert.deepEqual(errors, [], errors.join("\n"));
  });

  it("places every concept on valid grades 4–8 with a progression slice", () => {
    for (const concept of GRAMMAR_CONCEPTS) {
      assert.ok(concept.grades.length >= 1, concept.id);
      for (const grade of concept.grades) {
        assert.ok(
          (CURRICULUM_GRADES as readonly number[]).includes(grade),
          `${concept.id} invalid grade ${grade}`,
        );
        const slice = concept.progression.find((row) => row.grade === grade);
        assert.ok(slice, `${concept.id} missing slice for grade ${grade}`);
        assert.ok(slice.understand.length > 10);
        assert.ok(slice.ableToDo.length > 10);
        assert.ok(slice.skills.length >= 1);
        assert.ok(slice.catalogueConceptIds.length >= 1);
        assert.ok(slice.lessonHost.hostConceptId.length > 0);
        assert.ok(concept.wrenMartin.section.length > 0);
        assert.ok(concept.wrenMartin.topic.length > 0);
        assert.ok(concept.grammarInUse.unitTheme.length > 0);
      }
    }
  });

  it("keeps prerequisites pointing at real Grammar Spine concepts", () => {
    for (const concept of GRAMMAR_CONCEPTS) {
      for (const prereq of concept.prerequisites) {
        assert.ok(
          getGrammarConcept(prereq),
          `${concept.id} → missing prereq ${prereq}`,
        );
      }
    }
  });

  it("covers every catalogue Grammar concept exactly once per grade", () => {
    const owners = new Map<string, string>();

    for (const grade of CURRICULUM_GRADES) {
      const catalogueIds = listCatalogueGrammarConceptIds(grade);
      assert.ok(catalogueIds.length > 0, `grade ${grade} should have grammar`);

      for (const catalogueId of catalogueIds) {
        const spine = getGrammarConceptForCatalogueId(catalogueId, grade);
        assert.ok(
          spine,
          `catalogue ${catalogueId}@${grade} has no Grammar Spine owner`,
        );
        const key = `${catalogueId}::${grade}`;
        assert.equal(
          owners.has(key),
          false,
          `duplicate owner for ${key}`,
        );
        owners.set(key, spine.id);

        const catalogue = getCurriculumConcept(catalogueId);
        assert.ok(catalogue);
        assert.ok(catalogue.grades.includes(grade));
      }
    }

    const audit = grammarSpineAudit();
    assert.deepEqual(audit.catalogueGrammarGaps, []);
  });

  it("does not invent broken curriculum host mappings", () => {
    for (const concept of GRAMMAR_CONCEPTS) {
      for (const slice of concept.progression) {
        for (const catalogueId of slice.catalogueConceptIds) {
          assert.ok(getCurriculumConcept(catalogueId));
        }
        assert.ok(
          getCurriculumConcept(slice.lessonHost.hostConceptId),
          `${concept.id}@${slice.grade} host missing: ${slice.lessonHost.hostConceptId}`,
        );
      }
    }
  });

  it("deepens multi-grade concepts without splitting Subject–Verb Agreement", () => {
    const sva = getGrammarConcept("grammar-sva");
    assert.ok(sva);
    assert.deepEqual(sva.grades, [4, 5, 6, 7, 8]);
    assert.equal(sva.lessonStrategy, "standalone");

    const g4 = sva.progression.find((row) => row.grade === 4);
    const g6 = sva.progression.find((row) => row.grade === 6);
    const g8 = sva.progression.find((row) => row.grade === 8);
    assert.ok(g4 && g6 && g8);
    assert.deepEqual(g4.catalogueConceptIds, ["english-sva-simple"]);
    assert.ok(g6.catalogueConceptIds.includes("english-sva-tricky"));
    assert.ok(g6.catalogueConceptIds.includes("english-err-agree"));
    assert.ok(g8.catalogueConceptIds.includes("english-g78-sva-indefinite"));
    assert.equal(g4.lessonHost.hostConceptId, "english-sva-simple");
    assert.equal(g4.lessonHost.kind, "standalone");
  });

  it("resolves lesson hosts through existing English coverage where available", () => {
    const svaHost = resolveGrammarLessonHost("english-sva-simple", 6);
    assert.ok(svaHost);
    assert.equal(svaHost.hostConceptId, "english-sva-simple");
    assert.equal(svaHost.status, "ready");

    const g5Noun = resolveGrammarLessonHost("english-nouns-common-proper", 5);
    assert.ok(g5Noun);
    assert.equal(g5Noun.status, "ready");
    assert.ok(getCompleteLesson(g5Noun.hostConceptId, 5));

    const g7Sva = resolveGrammarLessonHost("english-g78-sva-phrases", 7);
    assert.ok(g7Sva);
    assert.equal(g7Sva.status, "ready");

    const g8Sva = resolveGrammarLessonHost("english-g78-sva-indefinite", 8);
    assert.ok(g8Sva);
    assert.equal(g8Sva.status, "ready");
    assert.equal(g8Sva.source, "skill-coverage");
  });

  it("keeps existing English lessons registered and SVA gold intact", () => {
    assert.equal(GRADE_4_ENGLISH_LESSONS.length, 12);
    assert.equal(GRADE_5_ENGLISH_LESSONS.length, 10);
    assert.equal(GRADE_6_ENGLISH_LESSONS.length, 16);
    assert.equal(GRADE_7_ENGLISH_LESSONS.length, 15);

    for (const id of GOLD_STANDARD_CONCEPT_IDS) {
      assert.ok(getCurriculumConcept(id));
    }

    for (const grade of [4, 5, 6] as CurriculumGrade[]) {
      const lesson = getCompleteLesson("english-sva-simple", grade);
      assert.ok(lesson, `SVA gold missing at grade ${grade}`);
      assert.equal(lesson.conceptId, "english-sva-simple");
      assert.equal(lesson.title, "Subject-Verb Agreement");
      assert.ok(lesson.content.practice.length >= 3);
    }

    assert.equal(getCompleteLesson("english-sva-simple", 7), undefined);
  });

  it("keeps Knowledge Tree English mappings valid for authored grades", () => {
    for (const grade of [5, 6, 7] as CurriculumGrade[]) {
      const tree = getKnowledgeTreeGraph("english", grade);
      const grammarNodes = tree.concepts.filter(
        (node) => node.domainLabel === "Grammar",
      );
      assert.ok(grammarNodes.length > 0, `grade ${grade} grammar nodes`);
      const missing = grammarNodes.filter((node) => !node.hasReadyExperience);
      assert.deepEqual(
        missing.map((node) => node.id),
        [],
        `grade ${grade} grammar Coming Soon: ${missing.map((n) => n.id).join(", ")}`,
      );
    }

    const g4Tree = getKnowledgeTreeGraph("english", 4);
    const g4Grammar = g4Tree.concepts.filter(
      (node) => node.domainLabel === "Grammar",
    );
    assert.equal(g4Grammar.length, 40);
    const g4Ready = g4Grammar.filter((node) => node.hasReadyExperience);
    const g4Soon = g4Grammar.filter((node) => !node.hasReadyExperience);
    assert.deepEqual(
      g4Ready.map((node) => node.id).sort(),
      [
        "english-nouns-common-proper",
        "english-sp-s-form",
        "english-sub-who",
        "english-sva-simple",
      ],
    );
    assert.equal(g4Soon.length, 36);

    const g4SForm = g4Ready.find((node) => node.id === "english-sp-s-form");
    assert.ok(g4SForm?.relatedIds.includes("english-sva-simple"));

    const g6Sva = getKnowledgeTreeGraph("english", 6).concepts.find(
      (node) => node.id === "english-sva-simple",
    );
    assert.ok(g6Sva?.hasReadyExperience);

    const g6Tricky = getKnowledgeTreeGraph("english", 6).concepts.find(
      (node) => node.id === "english-sva-tricky",
    );
    assert.ok(g6Tricky?.hasReadyExperience);
    assert.ok(g6Tricky?.relatedIds.includes("english-sva-simple") || g6Tricky?.relatedIds.includes("english-err-agree"));
  });

  it("resolves Grade 4 SVA-hosted grammar skills through skill-coverage", () => {
    const sForm = resolveGrammarLessonHost("english-sp-s-form", 4);
    assert.ok(sForm);
    assert.equal(sForm.hostConceptId, "english-sva-simple");
    assert.equal(sForm.source, "skill-coverage");
    assert.equal(sForm.status, "ready");

    const subject = resolveGrammarLessonHost("english-sub-who", 4);
    assert.ok(subject);
    assert.equal(subject.hostConceptId, "english-sva-simple");
    assert.equal(subject.status, "ready");

    // Literature chapters are not used as fake grammar hosts.
    const articles = resolveGrammarLessonHost("english-art-a-an", 4);
    assert.ok(articles);
    assert.notEqual(articles.source, "skill-coverage");
    assert.equal(articles.status, "planned");
    assert.equal(getCompleteLesson("english-art-a-an", 4), undefined);

    const nouns = resolveGrammarLessonHost("english-nouns-common-proper", 4);
    assert.ok(nouns);
    assert.equal(nouns.status, "planned");
    assert.equal(nouns.source, "grammar-spine");
  });

  it("keeps Grade 4 grammar resolver aligned with Coming Soon Knowledge Tree", () => {
    const ids = listCatalogueGrammarConceptIds(4);
    let resolveReady = 0;
    for (const id of ids) {
      const host = resolveGrammarLessonHost(id, 4);
      if (host?.status === "ready") {
        resolveReady += 1;
        assert.ok(
          getCompleteLesson(id, 4) ||
            getCompleteLesson(host.hostConceptId, 4),
          `${id} ready without a live lesson host`,
        );
      }
    }
    // SVA gold + two skill-coverage remaps onto that gold (and self for sva).
    assert.equal(resolveReady, 3);
  });

  it("reports a complete audit snapshot for Grades 4–8", () => {
    const audit = grammarSpineAudit();
    assert.equal(audit.domains, GRAMMAR_DOMAINS.length);
    assert.equal(audit.topics, GRAMMAR_TOPICS.length);
    assert.equal(audit.concepts, GRAMMAR_CONCEPTS.length);
    assert.ok(audit.gradeSkillMappings >= GRAMMAR_CONCEPTS.length);
    assert.ok(audit.conceptsByGrade[4] > 0);
    assert.ok(audit.conceptsByGrade[5] > 0);
    assert.ok(audit.conceptsByGrade[6] > 0);
    assert.ok(audit.conceptsByGrade[7] > 0);
    assert.ok(audit.conceptsByGrade[8] > 0);
    assert.ok(audit.multiGradeConcepts > 0);
    assert.deepEqual(audit.catalogueGrammarGaps, []);

    for (const grade of CURRICULUM_GRADES) {
      assert.equal(
        getGrammarConceptsForGrade(grade).length,
        audit.conceptsByGrade[grade],
      );
    }
  });
});
