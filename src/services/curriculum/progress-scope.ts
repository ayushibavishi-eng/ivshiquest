import {
  DEFAULT_CURRICULUM_ID,
  isCurriculumGrade,
  resolveCurriculumId,
  type CurriculumGrade,
  type CurriculumId,
} from "@/domain/curriculum";
import type { Subject } from "@/domain/types";

export type CurriculumProgressScope = {
  learnerId: string;
  grade: CurriculumGrade;
  subject: Subject;
  /** Defaults to India when omitted (backward compatible). */
  curriculumId?: CurriculumId;
};

export type CurriculumProgressQuery = {
  learnerId: string;
  grade: CurriculumGrade;
  subject?: Subject;
  curriculumId?: CurriculumId;
};

/** v3: learner|c{curriculum}|g{grade}|subject|conceptId */
const KEY_PATTERN =
  /^([^|]+)\|c([^|]+)\|g([4-8])\|(math|science|english)\|(.+)$/;

/** v2 (pre-curriculum): learner|g{grade}|subject|conceptId */
const LEGACY_KEY_PATTERN =
  /^([^|]+)\|g([4-8])\|(math|science|english)\|(.+)$/;

export function isSubject(value: unknown): value is Subject {
  return value === "math" || value === "science" || value === "english";
}

export function resolveProgressCurriculumId(
  scope: Pick<CurriculumProgressScope, "curriculumId">,
): CurriculumId {
  return resolveCurriculumId(scope.curriculumId, DEFAULT_CURRICULUM_ID);
}

export function curriculumProgressKey(
  scope: CurriculumProgressScope,
  conceptId: string,
): string {
  const curriculumId = resolveProgressCurriculumId(scope);
  return `${scope.learnerId}|c${curriculumId}|g${scope.grade}|${scope.subject}|${conceptId}`;
}

export function parseCurriculumProgressKey(key: string):
  | (Required<CurriculumProgressScope> & { conceptId: string })
  | undefined {
  const match = KEY_PATTERN.exec(key);
  if (match) {
    const grade = Number(match[3]);
    if (
      !isCurriculumGrade(grade) ||
      !isSubject(match[4]) ||
      !match[2]
    ) {
      return undefined;
    }
    const curriculumId = resolveCurriculumId(match[2]);
    return {
      learnerId: match[1],
      curriculumId,
      grade,
      subject: match[4],
      conceptId: match[5],
    };
  }

  const legacy = LEGACY_KEY_PATTERN.exec(key);
  if (!legacy) {
    return undefined;
  }
  const grade = Number(legacy[2]);
  if (!isCurriculumGrade(grade) || !isSubject(legacy[3])) {
    return undefined;
  }
  return {
    learnerId: legacy[1],
    curriculumId: DEFAULT_CURRICULUM_ID,
    grade,
    subject: legacy[3],
    conceptId: legacy[4],
  };
}

/**
 * Rewrites pre-curriculum (v2) scoped keys to include India curriculum id.
 * Already-v3 keys and bare legacy concept ids are left for other migrators.
 */
export function migrateProgressKeysToCurriculumScoped(
  entries: Record<string, string>,
): Record<string, string> {
  const next: Record<string, string> = {};
  for (const [key, state] of Object.entries(entries)) {
    if (KEY_PATTERN.test(key)) {
      next[key] = state;
      continue;
    }
    const legacy = LEGACY_KEY_PATTERN.exec(key);
    if (legacy) {
      const grade = Number(legacy[2]);
      if (!isCurriculumGrade(grade) || !isSubject(legacy[3])) {
        continue;
      }
      next[
        curriculumProgressKey(
          {
            learnerId: legacy[1],
            curriculumId: DEFAULT_CURRICULUM_ID,
            grade,
            subject: legacy[3],
          },
          legacy[4],
        )
      ] = state;
      continue;
    }
    // Bare concept ids / unknown — keep for flat migrator
    next[key] = state;
  }
  return next;
}

export function progressKeyMatchesQuery(
  key: string,
  query: CurriculumProgressQuery,
): { conceptId: string } | undefined {
  const parsed = parseCurriculumProgressKey(key);
  if (!parsed) {
    return undefined;
  }
  const curriculumId = resolveProgressCurriculumId(query);
  if (
    parsed.learnerId !== query.learnerId ||
    parsed.grade !== query.grade ||
    parsed.curriculumId !== curriculumId
  ) {
    return undefined;
  }
  if (query.subject && parsed.subject !== query.subject) {
    return undefined;
  }
  return { conceptId: parsed.conceptId };
}
