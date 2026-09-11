import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  CURIOSITY_CATEGORIES,
  type CuriosityCategory,
} from "@/domain/curiosity";
import { GRADES } from "@/domain/types";
import {
  findDuplicateDiscoveryQuestions,
  getCuriosityById,
  getCuriosityLibrary,
  getCuriosityLibraryAudit,
} from "@/content/curiosity/library";

describe("Curiosity Library", () => {
  const library = getCuriosityLibrary();
  const audit = getCuriosityLibraryAudit(library);

  it("keeps the birds-on-wires discovery", () => {
    const birds = getCuriosityById("discovery-birds-wires");
    assert.ok(birds);
    assert.match(
      birds.question,
      /birds get electrocuted when they sit on electric wires/i,
    );
    assert.equal(birds.exploration.visual, "wires");
    assert.deepEqual(birds.gradeRange, [4, 5, 6, 7, 8]);
  });

  it("gives every discovery required fields and a valid grade range", () => {
    assert.deepEqual(audit.missingRequired, []);
    for (const item of library) {
      assert.ok(item.id.length > 0, "id");
      assert.ok(item.question.length > 0, item.id);
      assert.ok(item.wonderPrompt.length > 0, item.id);
      assert.equal(item.predictionChoices.length, 3, item.id);
      assert.ok(item.exploration.prompt.length > 0, item.id);
      assert.ok(item.exploration.lookPrompt.length > 0, item.id);
      assert.ok(item.explanations.default.main.length > 0, item.id);
      assert.ok(item.retrieval.question.length > 0, item.id);
      assert.ok(item.retrieval.correctChoiceId, item.id);
      assert.ok(item.gradeRange.length > 0, item.id);
      for (const grade of item.gradeRange) {
        assert.ok(GRADES.includes(grade), `${item.id} has invalid grade ${grade}`);
      }
    }
  });

  it("has unique ids", () => {
    assert.deepEqual(audit.duplicateIds, []);
    const ids = library.map((item) => item.id);
    assert.equal(new Set(ids).size, ids.length);
  });

  it("does not reuse the same question as a duplicate discovery", () => {
    assert.deepEqual(audit.duplicateQuestions, []);
    assert.deepEqual(findDuplicateDiscoveryQuestions(library), []);
  });

  it("gives every grade at least 365 grade-specific discoveries", () => {
    for (const grade of GRADES) {
      assert.ok(
        audit.gradeSpecific[grade] >= 365,
        `grade ${grade} has ${audit.gradeSpecific[grade]} grade-specific discoveries (pool ${audit.byGrade[grade]})`,
      );
    }
  });

  it("covers every curiosity category", () => {
    for (const category of CURIOSITY_CATEGORIES) {
      assert.ok(
        audit.byCategory[category as CuriosityCategory] > 0,
        `missing category ${category}`,
      );
    }
  });

  it("includes math, science, and english discoveries", () => {
    assert.ok(audit.bySubject.math > 0);
    assert.ok(audit.bySubject.science > 0);
    assert.ok(audit.bySubject.english > 0);
  });

  it("includes both curriculum-linked and pure curiosity discoveries", () => {
    assert.ok(audit.curriculumLinked > 0);
    assert.ok(audit.pureCuriosity > 0);
    assert.equal(audit.curriculumLinked + audit.pureCuriosity, audit.total);
  });
});
