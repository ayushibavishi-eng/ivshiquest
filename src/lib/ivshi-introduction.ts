export const IVSHI_INTRODUCTION_STORAGE_KEY = "ivshi-introduction-completed";

export function hasCompletedIvshiIntroduction() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    return window.localStorage.getItem(IVSHI_INTRODUCTION_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export function markIvshiIntroductionComplete() {
  try {
    window.localStorage.setItem(IVSHI_INTRODUCTION_STORAGE_KEY, "true");
  } catch {
    // Private mode can block storage; the child can still continue this session.
  }
}
