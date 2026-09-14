import { getCurriculumNode } from "@/content/curriculum";
import type { CurriculumProgressState } from "@/domain/curriculum";
import {
  DEFAULT_CURRICULUM_ID,
  isCurriculumGrade,
  type CurriculumGrade,
} from "@/domain/curriculum";
import { readLearnerGrade } from "@/services/student/learner-grade";
import { fallbackLearnerId } from "@/services/student/learner-profile";
import {
  curriculumProgressKey,
  migrateProgressKeysToCurriculumScoped,
  parseCurriculumProgressKey,
  progressKeyMatchesQuery,
  type CurriculumProgressQuery,
  type CurriculumProgressScope,
  isSubject,
} from "./progress-scope";

export type {
  CurriculumProgressQuery,
  CurriculumProgressScope,
} from "./progress-scope";
export {
  curriculumProgressKey,
  migrateProgressKeysToCurriculumScoped,
  parseCurriculumProgressKey,
  resolveProgressCurriculumId,
} from "./progress-scope";

const STORAGE_KEY = "ivshi-curriculum-progress";
const STORAGE_VERSION = 3;
const listeners = new Set<() => void>();

export type CurriculumProgressMap = Record<string, CurriculumProgressState>;

type StoredProgressDocument = {
  version: typeof STORAGE_VERSION;
  entries: CurriculumProgressMap;
};

function isState(value: unknown): value is CurriculumProgressState {
  return (
    value === "unvisited" ||
    value === "started" ||
    value === "practiced" ||
    value === "mastered"
  );
}

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

export const EMPTY_CURRICULUM_PROGRESS: CurriculumProgressMap = {};
let cachedEntries: CurriculumProgressMap | null = null;
let filteredCache: {
  queryKey: string;
  source: CurriculumProgressMap;
  map: CurriculumProgressMap;
} | null = null;

export function subscribeCurriculumProgress(listener: () => void) {
  listeners.add(listener);

  function onStorage() {
    cachedEntries = null;
    filteredCache = null;
    cachedEntries = readEntriesFromStorage();
    listener();
  }

  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }

  return () => {
    listeners.delete(listener);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

function nodeGrades(node: NonNullable<ReturnType<typeof getCurriculumNode>>): CurriculumGrade[] {
  if ("grades" in node && Array.isArray(node.grades)) {
    return node.grades.filter(isCurriculumGrade);
  }
  return [];
}

/**
 * Legacy flat keys (bare concept ids) migrate into one scoped slot so existing
 * progress is kept without copying the same state into every grade the concept
 * spans (which would recreate cross-grade leakage).
 */
export function migrateLegacyProgressEntries(
  legacy: CurriculumProgressMap,
  learnerId: string,
  preferredGrade: CurriculumGrade,
): CurriculumProgressMap {
  const next: CurriculumProgressMap = {};

  for (const [key, state] of Object.entries(legacy)) {
    if (!isState(state) || state === "unvisited") {
      continue;
    }

    const alreadyScoped = parseCurriculumProgressKey(key);
    if (alreadyScoped) {
      next[key] = state;
      continue;
    }

    const node = getCurriculumNode(key);
    if (!node || !isSubject(node.subjectId)) {
      continue;
    }

    const grades = nodeGrades(node);
    const grade = grades.includes(preferredGrade)
      ? preferredGrade
      : (grades[0] ?? preferredGrade);

    next[
      curriculumProgressKey(
        {
          learnerId,
          grade,
          subject: node.subjectId,
          curriculumId: DEFAULT_CURRICULUM_ID,
        },
        key,
      )
    ] = state;
  }

  return next;
}

function parseStoredDocument(raw: string): CurriculumProgressMap {
  const parsed: unknown = JSON.parse(raw);
  if (!parsed || typeof parsed !== "object") {
    return EMPTY_CURRICULUM_PROGRESS;
  }

  const record = parsed as Record<string, unknown>;

  if (
    (record.version === STORAGE_VERSION || record.version === 2) &&
    record.entries &&
    typeof record.entries === "object"
  ) {
    const rawEntries: CurriculumProgressMap = {};
    for (const [key, value] of Object.entries(
      record.entries as Record<string, unknown>,
    )) {
      if (isState(value) && value !== "unvisited") {
        rawEntries[key] = value;
      }
    }
    const migrated = migrateProgressKeysToCurriculumScoped(
      rawEntries,
    ) as CurriculumProgressMap;
    const entries: CurriculumProgressMap = {};
    for (const [key, value] of Object.entries(migrated)) {
      if (isState(value) && value !== "unvisited") {
        entries[key] = value;
      }
    }
    return Object.keys(entries).length > 0 ? entries : EMPTY_CURRICULUM_PROGRESS;
  }

  // Legacy v1: flat conceptId → state
  const legacy: CurriculumProgressMap = {};
  for (const [key, value] of Object.entries(record)) {
    if (key === "version" || key === "entries") {
      continue;
    }
    if (isState(value) && value !== "unvisited") {
      legacy[key] = value;
    }
  }

  if (Object.keys(legacy).length === 0) {
    return EMPTY_CURRICULUM_PROGRESS;
  }

  // Legacy flat keys predate learner identity. Park them under the demo
  // fallback bucket so a newly onboarded learner never inherits them.
  const preferredGrade = readLearnerGrade(6);
  const migrated = migrateLegacyProgressEntries(
    legacy,
    fallbackLearnerId(),
    isCurriculumGrade(preferredGrade) ? preferredGrade : 6,
  );

  return Object.keys(migrated).length > 0
    ? migrated
    : EMPTY_CURRICULUM_PROGRESS;
}

function readEntriesFromStorage(): CurriculumProgressMap {
  if (typeof window === "undefined") {
    return EMPTY_CURRICULUM_PROGRESS;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return EMPTY_CURRICULUM_PROGRESS;
    }

    const peek = JSON.parse(raw) as { version?: number };
    const entries = parseStoredDocument(raw);
    if (peek.version !== STORAGE_VERSION) {
      writeEntries(entries, false);
    }
    return entries;
  } catch {
    return EMPTY_CURRICULUM_PROGRESS;
  }
}

function readEntries(): CurriculumProgressMap {
  if (typeof window === "undefined") {
    return EMPTY_CURRICULUM_PROGRESS;
  }

  if (cachedEntries === null) {
    cachedEntries = readEntriesFromStorage();
  }

  return cachedEntries;
}

function writeEntries(entries: CurriculumProgressMap, shouldEmit = true) {
  cachedEntries = entries;
  filteredCache = null;
  if (typeof window !== "undefined") {
    const document: StoredProgressDocument = {
      version: STORAGE_VERSION,
      entries,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(document));
  }
  if (shouldEmit) {
    emit();
  }
}

function queryKey(query: CurriculumProgressQuery): string {
  const curriculumId = query.curriculumId ?? DEFAULT_CURRICULUM_ID;
  return `${query.learnerId}|c${curriculumId}|g${query.grade}|${query.subject ?? "*"}`;
}

function filterEntriesToConceptMap(
  entries: CurriculumProgressMap,
  query: CurriculumProgressQuery,
): CurriculumProgressMap {
  const map: CurriculumProgressMap = {};
  for (const [key, state] of Object.entries(entries)) {
    const match = progressKeyMatchesQuery(key, query);
    if (match) {
      map[match.conceptId] = state;
    }
  }
  return Object.keys(map).length > 0 ? map : EMPTY_CURRICULUM_PROGRESS;
}

const RANK: Record<CurriculumProgressState, number> = {
  unvisited: 0,
  started: 1,
  practiced: 2,
  mastered: 3,
};

export function getCurriculumProgress(
  conceptId: string,
  scope: CurriculumProgressScope,
): CurriculumProgressState {
  const key = curriculumProgressKey(scope, conceptId);
  return readEntries()[key] ?? "unvisited";
}

export function getAllCurriculumProgress(
  query: CurriculumProgressQuery,
): CurriculumProgressMap {
  const entries = readEntries();
  const key = queryKey(query);
  if (
    filteredCache &&
    filteredCache.queryKey === key &&
    filteredCache.source === entries
  ) {
    return filteredCache.map;
  }

  const map = filterEntriesToConceptMap(entries, query);
  filteredCache = { queryKey: key, source: entries, map };
  return map;
}

export function raiseCurriculumProgress(
  conceptId: string,
  state: CurriculumProgressState,
  scope: CurriculumProgressScope,
): CurriculumProgressState {
  const current = getCurriculumProgress(conceptId, scope);
  if (RANK[state] <= RANK[current]) {
    return current;
  }

  const key = curriculumProgressKey(scope, conceptId);
  const next = { ...readEntries(), [key]: state };
  writeEntries(next);
  return state;
}

export function countWeatherProgress(
  conceptIds: string[],
  query: CurriculumProgressQuery,
) {
  const map = getAllCurriculumProgress(query);
  let growing = 0;
  let learned = 0;
  let mastered = 0;

  for (const id of conceptIds) {
    const state = map[id] ?? "unvisited";
    if (state === "mastered") {
      mastered += 1;
    } else if (state === "practiced") {
      learned += 1;
    } else if (state === "started") {
      growing += 1;
    }
  }

  return { growing, learned, mastered };
}

/** Test/helper: replace in-memory + storage entries. */
export function __replaceCurriculumProgressEntriesForTests(
  entries: CurriculumProgressMap,
) {
  writeEntries(entries);
}

/** Test/helper: clear cached state without touching unrelated modules. */
export function __resetCurriculumProgressCacheForTests() {
  cachedEntries = null;
  filteredCache = null;
}
