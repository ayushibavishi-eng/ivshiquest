import type { CurriculumProgressState } from "@/domain/curriculum";

const STORAGE_KEY = "ivshi-curriculum-progress";
const listeners = new Set<() => void>();

export type CurriculumProgressMap = Record<string, CurriculumProgressState>;

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
let cachedProgress: CurriculumProgressMap | null = null;

export function subscribeCurriculumProgress(listener: () => void) {
  listeners.add(listener);

  function onStorage() {
    cachedProgress = readMapFromStorage();
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

function readMapFromStorage(): CurriculumProgressMap {
  if (typeof window === "undefined") {
    return EMPTY_CURRICULUM_PROGRESS;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return EMPTY_CURRICULUM_PROGRESS;
    }

    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return EMPTY_CURRICULUM_PROGRESS;
    }

    const next: CurriculumProgressMap = {};
    for (const [key, value] of Object.entries(parsed)) {
      if (isState(value)) {
        next[key] = value;
      }
    }
    return Object.keys(next).length > 0 ? next : EMPTY_CURRICULUM_PROGRESS;
  } catch {
    return EMPTY_CURRICULUM_PROGRESS;
  }
}

function readMap(): CurriculumProgressMap {
  if (typeof window === "undefined") {
    return EMPTY_CURRICULUM_PROGRESS;
  }

  if (cachedProgress === null) {
    cachedProgress = readMapFromStorage();
  }

  return cachedProgress;
}

function writeMap(map: CurriculumProgressMap) {
  cachedProgress = map;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  emit();
}

const RANK: Record<CurriculumProgressState, number> = {
  unvisited: 0,
  started: 1,
  practiced: 2,
  mastered: 3,
};

export function getCurriculumProgress(id: string): CurriculumProgressState {
  return readMap()[id] ?? "unvisited";
}

export function getAllCurriculumProgress(): CurriculumProgressMap {
  return readMap();
}

export function raiseCurriculumProgress(
  id: string,
  state: CurriculumProgressState,
): CurriculumProgressState {
  const current = getCurriculumProgress(id);
  if (RANK[state] <= RANK[current]) {
    return current;
  }

  const next = { ...readMap(), [id]: state };
  writeMap(next);
  return state;
}

export function countWeatherProgress(conceptIds: string[]) {
  const map = readMap();
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
