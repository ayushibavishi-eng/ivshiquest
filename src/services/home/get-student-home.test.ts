import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { MOCK_STUDENT_HOME } from "@/content/mocks/student-home";
import { MOCK_CURRENT_STUDENT } from "@/content/mocks/current-student";
import {
  applyLearnerHomeIsolation,
  EMPTY_HOME_KNOWLEDGE_TREE,
} from "@/services/home/get-student-home";

describe("learner Home isolation", () => {
  it("does not inherit demo Quest or Knowledge Tree counts for a new learner", () => {
    const taintedTemplate = {
      ...MOCK_STUDENT_HOME,
      activeQuest: {
        id: "quest-equivalent-fractions",
        title: "Master Equivalent Fractions",
        completedChallenges: 2,
        totalChallenges: 5,
      },
      knowledgeTree: {
        growing: 12,
        learned: 18,
        mastered: 7,
      },
      continueLearning: {
        id: "continue-equivalent-fractions",
        conceptId: "equivalent-fractions",
        subject: "math" as const,
        subjectLabel: "Mathematics",
        topic: "Equivalent Fractions",
        lastExploredLabel: "Last explored yesterday",
      },
    };

    const student = {
      ...MOCK_CURRENT_STUDENT,
      id: "learner-riva-fresh1",
      displayName: "Riva",
      grade: 6 as const,
    };

    const home = applyLearnerHomeIsolation(taintedTemplate, {
      student,
      continueLearning: null,
      todayDiscovery: {
        id: "discovery-fresh",
        title: "A fresh discovery",
        durationLabel: "3-minute discovery",
        subject: "science",
        date: "2026-09-13",
      },
    });

    assert.equal(home.student.displayName, "Riva");
    assert.equal(home.student.id, "learner-riva-fresh1");
    assert.equal(home.activeQuest, null);
    assert.deepEqual(home.knowledgeTree, EMPTY_HOME_KNOWLEDGE_TREE);
    assert.equal(home.continueLearning, null);
    assert.equal(home.teachIt, null);
  });

  it("does not inherit demo Teach It for a learner with no mastery", () => {
    const taintedTemplate = {
      ...MOCK_STUDENT_HOME,
      teachIt: { topic: "The Water Cycle" },
    };
    const home = applyLearnerHomeIsolation(taintedTemplate, {
      student: {
        ...MOCK_CURRENT_STUDENT,
        id: "learner-riva-fresh1",
        displayName: "Riva",
        grade: 5 as const,
      },
      continueLearning: null,
      todayDiscovery: {
        id: "discovery-fresh",
        title: "A fresh discovery",
        durationLabel: "3-minute discovery",
        subject: "science",
        date: "2026-09-13",
      },
    });
    assert.equal(home.teachIt, null);
  });

  it("keeps an explicit learner-scoped Teach It when mastery is provided", () => {
    const home = applyLearnerHomeIsolation(MOCK_STUDENT_HOME, {
      student: {
        ...MOCK_CURRENT_STUDENT,
        id: "learner-riva-mastered",
        displayName: "Riva",
        grade: 5 as const,
      },
      continueLearning: null,
      todayDiscovery: {
        id: "discovery-fresh",
        title: "A fresh discovery",
        durationLabel: "3-minute discovery",
        subject: "science",
        date: "2026-09-13",
      },
      teachIt: { topic: "Equivalent Fractions" },
    });
    assert.deepEqual(home.teachIt, { topic: "Equivalent Fractions" });
  });

  it("ships an empty Quest/KT/Teach It template (no static demo progress)", () => {
    assert.equal(MOCK_STUDENT_HOME.activeQuest, null);
    assert.deepEqual(MOCK_STUDENT_HOME.knowledgeTree, {
      growing: 0,
      learned: 0,
      mastered: 0,
    });
    assert.equal(MOCK_STUDENT_HOME.continueLearning, null);
    assert.equal(MOCK_STUDENT_HOME.teachIt, null);
  });
});
