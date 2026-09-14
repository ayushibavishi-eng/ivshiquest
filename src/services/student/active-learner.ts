import {
  fallbackLearnerId,
  readLearnerProfile,
} from "./learner-profile";

/**
 * Active V1 learner id from the profile cookie.
 * Client components should import this module directly (not the student barrel).
 */
export function getActiveLearnerId(): string {
  return readLearnerProfile()?.learnerId ?? fallbackLearnerId();
}
