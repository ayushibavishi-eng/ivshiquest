import { getMockPracticeSet } from "@/content/mocks/practice";
import type { PracticeSessionRecord, PracticeSet } from "@/domain/practice";

export type PracticeRepository = {
  getPracticeSet: (areaId?: string) => Promise<PracticeSet | null>;
};

export const mockPracticeRepository: PracticeRepository = {
  async getPracticeSet(areaId) {
    return getMockPracticeSet(areaId);
  },
};

export const practiceRepository: PracticeRepository = mockPracticeRepository;

const recordedSessions: PracticeSessionRecord[] = [];

export function recordPracticeSession(record: PracticeSessionRecord) {
  recordedSessions.push(record);
}

export function getRecordedPracticeSessions(): PracticeSessionRecord[] {
  return [...recordedSessions];
}
