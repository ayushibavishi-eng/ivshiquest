import { MOCK_STUDENT_LEARN } from "@/content/mocks/learn";
import type { StudentLearn } from "@/domain/learn";

export type LearnRepository = {
  getStudentLearn: () => Promise<StudentLearn>;
};

export const mockLearnRepository: LearnRepository = {
  async getStudentLearn() {
    return MOCK_STUDENT_LEARN;
  },
};

export const learnRepository: LearnRepository = mockLearnRepository;
