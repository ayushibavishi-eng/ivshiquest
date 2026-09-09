import { cache } from "react";
import type { AskLearnerContext } from "@/domain/ask-ivshi";
import { SUBJECT_LABELS } from "@/domain/types";
import { getStudentHome } from "@/services/home";
import { getCurrentStudent } from "@/services/student";

export const getAskContext = cache(async (): Promise<AskLearnerContext> => {
  const [student, home] = await Promise.all([
    getCurrentStudent(),
    getStudentHome(),
  ]);

  return {
    grade: student.grade,
    subjects: student.subjects.map((subject) => SUBJECT_LABELS[subject]),
    currentSubject: home.continueLearning?.subjectLabel ?? null,
    currentTopic: home.continueLearning?.topic ?? null,
    learningDNA: null,
    previousMistakes: null,
    learnerPreferences: null,
    progress: home.knowledgeTree
      ? {
          growing: home.knowledgeTree.growing,
          learned: home.knowledgeTree.learned,
          mastered: home.knowledgeTree.mastered,
        }
      : null,
    parentApprovedContext: null,
  };
});
