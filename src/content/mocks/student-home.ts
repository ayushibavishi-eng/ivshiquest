import type { StudentHome } from "@/domain/student-home";
import { MOCK_CURRENT_STUDENT } from "./current-student";

/**
 * Template shell for Student Home.
 * Quest / Knowledge Tree / continue learning must never ship demo progress —
 * getStudentHome overlays the active learner's real (or empty) state.
 */
export const MOCK_STUDENT_HOME: StudentHome = {
  student: MOCK_CURRENT_STUDENT,
  todayDiscovery: {
    id: "discovery-birds-wires",
    title:
      "Why don't birds get electrocuted when they sit on electric wires?",
    durationLabel: "3-minute discovery",
    subject: "science",
    date: "2026-09-11",
  },
  activeQuest: null,
  continueLearning: null,
  knowledgeTree: {
    growing: 0,
    learned: 0,
    mastered: 0,
  },
  /** Never ship a demo Teach It topic — only real learner-scoped mastery. */
  teachIt: null,
  askIvshiPrompts: [
    "I don't understand fractions.",
    "Why is the sky blue?",
    "Give me a harder question.",
    "Explain this like a story.",
  ],
};
