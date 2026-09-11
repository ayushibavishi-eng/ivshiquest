import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  findDuplicateCurriculumIds,
  getCurriculumCatalogueAudit,
  getCurriculumConcept,
  getCurriculumWorldsForSubject,
  GOLD_STANDARD_CONCEPT_IDS,
} from "@/content/curriculum";
import { CURRICULUM_GRADES } from "@/domain/curriculum";
import { SUBJECTS } from "@/domain/types";

describe("V1 curriculum catalogue", () => {
  it("has unique world, topic, concept, and skill ids", () => {
    assert.deepEqual(findDuplicateCurriculumIds(), []);
  });

  it("covers grades 4–8 for math, science/EVS, and English", () => {
    for (const grade of CURRICULUM_GRADES) {
      for (const subject of SUBJECTS) {
        const worlds = getCurriculumWorldsForSubject(subject, grade);
        assert.ok(
          worlds.length > 0,
          `expected worlds for ${subject} grade ${grade}`,
        );
      }
    }
  });

  it("keeps the three gold-standard proof concepts", () => {
    const audit = getCurriculumCatalogueAudit();
    for (const id of GOLD_STANDARD_CONCEPT_IDS) {
      assert.ok(
        audit.conceptsWithCompleteLesson.includes(id),
        `missing gold-standard complete lesson ${id}`,
      );
    }
  });

  it("includes EVS as a science domain for grades 4 and 5", () => {
    const audit = getCurriculumCatalogueAudit();
    const grade4 = audit.byGrade.find((row) => row.grade === 4);
    const grade5 = audit.byGrade.find((row) => row.grade === 5);
    assert.ok(grade4?.domains.science.includes("EVS / The World Around Us"));
    assert.ok(grade5?.domains.science.includes("EVS / The World Around Us"));
  });

  it("represents official Grade 6 Poorvi texts, not only unit titles", () => {
    for (const id of [
      "ncert-g6-poorvi-bottle-of-dew",
      "ncert-g6-poorvi-raven-and-fox",
      "ncert-g6-poorvi-rama-to-the-rescue",
      "ncert-g6-poorvi-unlikely-best-friends",
      "ncert-g6-poorvi-friends-prayer",
      "ncert-g6-poorvi-the-chair",
      "ncert-g6-poorvi-neem-baba",
      "ncert-g6-poorvi-what-a-bird-thought",
      "ncert-g6-poorvi-spices-that-heal-us",
      "ncert-g6-poorvi-change-of-heart",
      "ncert-g6-poorvi-the-winner",
      "ncert-g6-poorvi-yoga-way-of-life",
      "ncert-g6-poorvi-hamara-bharat",
      "ncert-g6-poorvi-the-kites",
      "ncert-g6-poorvi-ila-sachani",
      "ncert-g6-poorvi-national-war-memorial",
    ]) {
      assert.ok(getCurriculumConcept(id), `missing Poorvi text ${id}`);
    }
  });

  it("uses the official Grade 7 Number Play chapter title", () => {
    const concept = getCurriculumConcept("ncert-g7-ganita-prakash-1-number-play-core");
    assert.equal(concept?.title, "Number Play");
  });

  it("includes English skill domains beyond textbook chapters", () => {
    const audit = getCurriculumCatalogueAudit();
    for (const row of audit.byGrade) {
      for (const needed of [
        "Grammar",
        "Vocabulary",
        "Reading",
        "Reading comprehension",
        "Writing",
        "Speaking",
        "Listening",
        "Language usage",
      ]) {
        assert.ok(
          row.domains.english.includes(needed),
          `grade ${row.grade} missing English domain ${needed}`,
        );
      }
    }
  });
});
