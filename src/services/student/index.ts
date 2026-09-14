export {
  getActiveLearnerId,
} from "./active-learner";
export { getCurrentStudent } from "./get-current-student";
export {
  LEARNER_GRADE_COOKIE,
  parseLearnerGrade,
  readLearnerGrade,
  writeLearnerGrade,
} from "./learner-grade";
export {
  LEARNER_PROFILE_COOKIE,
  completeLearnerOnboarding,
  createLearnerId,
  fallbackLearnerId,
  hasCompletedLearnerOnboarding,
  isOnboardedLearnerId,
  normalizeLearnerDisplayName,
  parseLearnerProfile,
  readLearnerCurriculumId,
  readLearnerProfile,
  resolveLearnerCurriculumId,
  writeLearnerProfile,
  type LearnerProfile,
} from "./learner-profile";
export {
  mockStudentRepository,
  studentRepository,
  type StudentRepository,
} from "./student-repository";

// Client components must import getActiveLearnerId from
// `@/services/student/active-learner` (not this barrel) so they do not
// pull in the server-only getCurrentStudent module.
