import type { StudentHome } from "@/domain/student-home";
import { MOCK_CURRENT_STUDENT } from "./current-student";

export const MOCK_STUDENT_HOME: StudentHome = {
  student: MOCK_CURRENT_STUDENT,
  todayDiscovery: {
    id: "discovery-birds-wires",
    title:
      "Why don't birds get electrocuted when they sit on electric wires?",
    durationLabel: "3-minute discovery",
    subject: "science",
  },
  activeQuest: {
    id: "quest-equivalent-fractions",
    title: "Master Equivalent Fractions",
    completedChallenges: 2,
    totalChallenges: 5,
  },
  continueLearning: {
    id: "continue-equivalent-fractions",
    subject: "math",
    subjectLabel: "Mathematics",
    topic: "Equivalent Fractions",
    lastExploredLabel: "Last explored yesterday",
  },
  knowledgeTree: {
    growing: 12,
    learned: 18,
    mastered: 7,
  },
  teachIt: {
    topic: "The Water Cycle",
  },
  askIvshiPrompts: [
    "I don't understand fractions.",
    "Why is the sky blue?",
    "Give me a harder question.",
    "Explain this like a story.",
  ],
};
