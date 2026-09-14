import {
  RELATED_CURIOSITY_CATEGORIES,
  hashString,
  type CuriosityCategory,
  type DiscoveryLearnerContext,
} from "./curiosity";
import {
  resolveDiscoveryForGrade,
  type DiscoveryContent,
} from "./discovery";
import {
  DEFAULT_CURRICULUM_ID,
  resolveCurriculumId,
  type CurriculumId,
} from "./curriculum-identity";

const AVOID_CATEGORY_MIN_POOL = 8;

/** Shared discoveries (no curriculumIds) apply to every curriculum. */
export function discoveryAppliesToCurriculum(
  item: Pick<DiscoveryContent, "curriculumIds">,
  curriculumId: CurriculumId,
): boolean {
  const ids = item.curriculumIds;
  if (!ids || ids.length === 0) {
    return true;
  }
  return ids.includes(curriculumId);
}

export function discoveriesForGrade(
  library: readonly DiscoveryContent[],
  grade: DiscoveryLearnerContext["grade"],
  curriculumId: CurriculumId = DEFAULT_CURRICULUM_ID,
): DiscoveryContent[] {
  return library.filter(
    (item) =>
      item.gradeRange.includes(grade) &&
      discoveryAppliesToCurriculum(item, curriculumId),
  );
}

export function selectTodaysDiscovery(
  library: readonly DiscoveryContent[],
  context: DiscoveryLearnerContext,
  date: string,
): DiscoveryContent {
  if (library.length === 0) {
    throw new Error("Curiosity Library is empty.");
  }

  const curriculumId = resolveCurriculumId(
    context.curriculumId,
    DEFAULT_CURRICULUM_ID,
  );
  const byId = new Map(library.map((item) => [item.id, item]));
  const locked = context.lockedDiscoveryId
    ? byId.get(context.lockedDiscoveryId)
    : undefined;

  if (
    locked &&
    locked.gradeRange.includes(context.grade) &&
    discoveryAppliesToCurriculum(locked, curriculumId)
  ) {
    return resolveDiscoveryForGrade(locked, context.grade);
  }

  const suitable = discoveriesForGrade(library, context.grade, curriculumId);
  const pool = suitable.length > 0 ? suitable : [...library];
  const completed = new Set(context.completedDiscoveryIds);
  const unseen = pool.filter((item) => !completed.has(item.id));
  const poolExhausted = unseen.length === 0;
  let candidates = poolExhausted ? [...pool] : unseen;

  if (poolExhausted) {
    const recent = new Set(context.recentDiscoveryIds ?? []);
    const notRecent = candidates.filter((item) => !recent.has(item.id));
    if (notRecent.length > 0) {
      candidates = notRecent;
    }
  }

  candidates = avoidImmediateCategoryRepeat(candidates, context);

  const boosted = boostRecentLearning(candidates, context, date);
  if (boosted) {
    candidates = boosted;
  }

  const sorted = [...candidates].sort((left, right) =>
    left.id.localeCompare(right.id),
  );
  const index =
    hashString(
      `${context.learnerId}|${date}|${context.grade}|${curriculumId}`,
    ) % sorted.length;
  const chosen = sorted[index];
  if (!chosen) {
    const fallback = pool[0] ?? library[0];
    return resolveDiscoveryForGrade(fallback, context.grade);
  }
  return resolveDiscoveryForGrade(chosen, context.grade);
}

function avoidImmediateCategoryRepeat(
  candidates: DiscoveryContent[],
  context: DiscoveryLearnerContext,
): DiscoveryContent[] {
  const recentCategories = context.recentCategoryIds ?? [];
  const lastCategory = recentCategories.at(-1);
  if (!lastCategory || candidates.length < AVOID_CATEGORY_MIN_POOL) {
    return candidates;
  }

  const others = candidates.filter((item) => item.category !== lastCategory);
  if (others.length >= AVOID_CATEGORY_MIN_POOL) {
    return others;
  }

  if (others.length > 0) {
    return others;
  }

  const related =
    RELATED_CURIOSITY_CATEGORIES[lastCategory as CuriosityCategory] ?? [];
  if (related.length === 0) {
    return candidates;
  }

  const relatedPool = candidates.filter((item) =>
    related.includes(item.category),
  );
  return relatedPool.length > 0 ? relatedPool : candidates;
}

function boostRecentLearning(
  candidates: DiscoveryContent[],
  context: DiscoveryLearnerContext,
  date: string,
): DiscoveryContent[] | null {
  const recentConcepts = new Set(context.recentConceptIds ?? []);
  if (recentConcepts.size === 0) {
    return null;
  }

  const matches = candidates.filter((item) => {
    if (item.conceptId && recentConcepts.has(item.conceptId)) {
      return true;
    }
    return item.relatedConceptIds.some((conceptId) =>
      recentConcepts.has(conceptId),
    );
  });

  if (matches.length === 0) {
    return null;
  }

  const seed = hashString(`${context.learnerId}|${date}|boost`);
  return seed % 4 === 0 ? matches : null;
}
