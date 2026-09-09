import { cache } from "react";
import { cookies } from "next/headers";
import type { AskLearnerContext } from "@/domain/ask-ivshi";
import { SUBJECT_LABELS } from "@/domain/types";
import { getStudentHome } from "@/services/home";
import { getCurrentStudent } from "@/services/student";
import {
  ACTIVE_CURRICULUM_COOKIE,
  getCurriculumNode,
} from "@/services/curriculum";

export const getAskContext = cache(async (): Promise<AskLearnerContext> => {
  const [student, home, cookieStore] = await Promise.all([
    getCurrentStudent(),
    getStudentHome(),
    cookies(),
  ]);

  const rawActiveId = cookieStore.get(ACTIVE_CURRICULUM_COOKIE)?.value;
  const activeId = rawActiveId ? decodeURIComponent(rawActiveId) : undefined;
  const currentFromCatalog = activeId ? getCurriculumNode(activeId) : undefined;

  return {
    grade: student.grade,
    subjects: student.subjects.map((subject) => SUBJECT_LABELS[subject]),
    currentSubject: currentFromCatalog
      ? SUBJECT_LABELS[currentFromCatalog.subjectId]
      : (home.continueLearning?.subjectLabel ?? null),
    currentTopic: currentFromCatalog
      ? currentFromCatalog.title
      : (home.continueLearning?.topic ?? null),
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
