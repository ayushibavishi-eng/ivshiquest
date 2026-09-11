import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { selectTodaysDiscovery } from "@/domain/curiosity-select";
import type { DiscoveryLearnerContext } from "@/domain/curiosity";
import { getCuriosityLibrary } from "@/content/curiosity/library";
import type { Grade } from "@/domain/types";

function context(
  partial: Partial<DiscoveryLearnerContext> &
    Pick<DiscoveryLearnerContext, "learnerId" | "grade">,
): DiscoveryLearnerContext {
  return {
    completedDiscoveryIds: [],
    ...partial,
  };
}

describe("Today's Discovery selector", () => {
  const library = getCuriosityLibrary();

  it("is deterministic for the same learner and date", () => {
    const learner = context({ learnerId: "student-mock-1", grade: 6 });
    const first = selectTodaysDiscovery(library, learner, "2026-09-11");
    const second = selectTodaysDiscovery(library, learner, "2026-09-11");
    assert.equal(first.id, second.id);
  });

  it("normally changes when the date changes", () => {
    const learner = context({ learnerId: "student-mock-1", grade: 6 });
    const monday = selectTodaysDiscovery(library, learner, "2026-09-11");
    const tuesday = selectTodaysDiscovery(library, learner, "2026-09-12");
    assert.notEqual(monday.id, tuesday.id);
  });

  it("keeps the locked discovery for that learner-day", () => {
    const locked = library.find((item) => item.gradeRange.includes(6));
    assert.ok(locked);
    const learner = context({
      learnerId: "student-mock-1",
      grade: 6,
      lockedDiscoveryId: locked.id,
      completedDiscoveryIds: [locked.id],
    });
    const selected = selectTodaysDiscovery(library, learner, "2026-09-11");
    assert.equal(selected.id, locked.id);
  });

  it("filters by grade", () => {
    const grade4 = context({ learnerId: "aria", grade: 4 });
    const selected = selectTodaysDiscovery(library, grade4, "2026-01-02");
    assert.ok(selected.gradeRange.includes(4));
  });

  it("does not give grade 8 explanations to grade 4", () => {
    const grade4 = context({ learnerId: "aria", grade: 4 as Grade });
    const selected = selectTodaysDiscovery(library, grade4, "2026-03-04");
    const explanation = selected.explanations[4] ?? selected.explanations.default;
    const late = selected.explanations[8];
    if (late) {
      assert.notEqual(explanation.main, late.main);
    }
    assert.ok(explanation.main.length > 0);
  });

  it("deprioritizes completed discoveries while unseen ones remain", () => {
    const suitable = library.filter((item) => item.gradeRange.includes(6));
    const completed = suitable.slice(0, Math.min(40, suitable.length - 5)).map(
      (item) => item.id,
    );
    const learner = context({
      learnerId: "student-mock-1",
      grade: 6,
      completedDiscoveryIds: completed,
    });
    const selected = selectTodaysDiscovery(library, learner, "2026-04-15");
    assert.ok(!completed.includes(selected.id));
  });

  it("falls back to the suitable pool after it is exhausted", () => {
    const suitable = library.filter((item) => item.gradeRange.includes(6));
    const learner = context({
      learnerId: "student-mock-1",
      grade: 6,
      completedDiscoveryIds: suitable.map((item) => item.id),
    });
    const selected = selectTodaysDiscovery(library, learner, "2026-05-20");
    assert.ok(selected.gradeRange.includes(6));
  });

  it("does not immediately repeat the last category when alternatives exist", () => {
    const lastCategory = "everyday-physics";
    const learner = context({
      learnerId: "student-mock-1",
      grade: 6,
      recentCategoryIds: [lastCategory, lastCategory],
    });
    const selected = selectTodaysDiscovery(library, learner, "2026-06-01");
    assert.notEqual(selected.category, lastCategory);
  });
});
