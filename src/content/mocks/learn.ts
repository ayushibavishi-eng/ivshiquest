import type { StudentLearn, SubjectLearnPath } from "@/domain/learn";
import { MOCK_CURRENT_STUDENT } from "./current-student";

const mathPath: SubjectLearnPath = {
  subject: "math",
  recommended: {
    topicId: "equivalent-fractions",
    title: "Equivalent Fractions",
    headline: "You're almost there.",
    supportingText:
      "You've explored this before. One more step could help you master it.",
    ivshiNote: "Ivshi thinks this is your next best step.",
    signals: [
      "knowledge-tree",
      "previous-performance",
      "recent-activity",
      "prerequisites",
    ],
  },
  keepGrowing: [
    {
      topicId: "decimals",
      title: "Decimals",
      connection: "Build on your fraction knowledge",
      status: "not-started",
      statusLabel: "Not started",
    },
    {
      topicId: "ratios",
      title: "Ratios",
      connection: "A new connection to discover",
      status: "ready",
      statusLabel: "Ready to explore",
    },
  ],
  strengthen: {
    areaId: "fractions",
    title: "Fractions",
    message: "A little more practice could make this stronger.",
    attentionLabel: "3 concepts need attention",
  },
  exploreNew: {
    topicId: "negative-numbers",
    question: "Why do negative numbers exist?",
    durationLabel: "5-minute exploration",
  },
  subjectAreas: [
    { areaId: "numbers", title: "Numbers" },
    { areaId: "fractions", title: "Fractions" },
    { areaId: "geometry", title: "Geometry" },
    { areaId: "algebra", title: "Algebra" },
  ],
  connections: [
    {
      id: "fractions-decimals-percentages",
      nodes: ["Fractions", "Decimals", "Percentages"],
    },
    {
      id: "plants-photosynthesis-food-chains",
      nodes: ["Plants", "Photosynthesis", "Food Chains"],
    },
  ],
};

const sciencePath: SubjectLearnPath = {
  subject: "science",
  recommended: {
    topicId: "water-cycle",
    title: "The Water Cycle",
    headline: "You're ready to go deeper.",
    supportingText:
      "You've already shown you know this. The next step is to connect it to weather and living things.",
    ivshiNote: "Ivshi thinks this is your next best step.",
    signals: ["knowledge-tree", "curriculum", "interests", "recent-activity"],
  },
  keepGrowing: [
    {
      topicId: "weather",
      title: "Weather",
      connection: "Build on the water cycle",
      status: "not-started",
      statusLabel: "Not started",
    },
    {
      topicId: "ecosystems",
      title: "Ecosystems",
      connection: "A new connection to discover",
      status: "ready",
      statusLabel: "Ready to explore",
    },
  ],
  strengthen: {
    areaId: "living-things",
    title: "Living Things",
    message: "A few ideas here could use another look.",
    attentionLabel: "2 concepts need attention",
  },
  exploreNew: {
    topicId: "sky-blue",
    question: "Why is the sky blue?",
    durationLabel: "5-minute exploration",
  },
  subjectAreas: [
    { areaId: "life", title: "Life" },
    { areaId: "matter", title: "Matter" },
    { areaId: "energy", title: "Energy" },
    { areaId: "earth-space", title: "Earth & Space" },
  ],
  connections: [
    {
      id: "plants-photosynthesis-food-chains",
      nodes: ["Plants", "Photosynthesis", "Food Chains"],
    },
  ],
};

const englishPath: SubjectLearnPath = {
  subject: "english",
  recommended: {
    topicId: "reading-for-meaning",
    title: "Reading for Meaning",
    headline: "You're almost there.",
    supportingText:
      "You've been growing as a reader. One more step could help ideas stay with you.",
    ivshiNote: "Ivshi thinks this is your next best step.",
    signals: [
      "previous-performance",
      "learning-dna",
      "curriculum",
      "recent-activity",
    ],
  },
  keepGrowing: [
    {
      topicId: "paragraphs",
      title: "Paragraphs",
      connection: "Build on strong sentences",
      status: "not-started",
      statusLabel: "Not started",
    },
    {
      topicId: "word-choice",
      title: "Word Choice",
      connection: "A new connection to discover",
      status: "ready",
      statusLabel: "Ready to explore",
    },
  ],
  strengthen: {
    areaId: "sentence-structure",
    title: "Sentence Structure",
    message: "A little more practice could make this stronger.",
    attentionLabel: "3 concepts need attention",
  },
  exploreNew: {
    topicId: "story-conflict",
    question: "Why do stories need conflict?",
    durationLabel: "5-minute exploration",
  },
  subjectAreas: [
    { areaId: "grammar", title: "Grammar" },
    { areaId: "vocabulary", title: "Vocabulary" },
    { areaId: "reading", title: "Reading" },
    { areaId: "writing", title: "Writing" },
  ],
  connections: [
    {
      id: "words-sentences-paragraphs",
      nodes: ["Words", "Sentences", "Paragraphs"],
    },
  ],
};

export const MOCK_STUDENT_LEARN: StudentLearn = {
  student: MOCK_CURRENT_STUDENT,
  defaultSubject: "math",
  paths: {
    math: mathPath,
    science: sciencePath,
    english: englishPath,
  },
};

export type LearnTopicKind = "topic-start" | "curiosity";

export type LearnTopicMeta = {
  topicId: string;
  title: string;
  kind: LearnTopicKind;
};

export function getLearnTopicMeta(topicId: string): LearnTopicMeta | undefined {
  for (const path of Object.values(MOCK_STUDENT_LEARN.paths)) {
    if (path.recommended.topicId === topicId) {
      return {
        topicId,
        title: path.recommended.title,
        kind: "topic-start",
      };
    }

    const growing = path.keepGrowing.find((item) => item.topicId === topicId);
    if (growing) {
      return { topicId, title: growing.title, kind: "topic-start" };
    }

    if (path.exploreNew.topicId === topicId) {
      return {
        topicId,
        title: path.exploreNew.question,
        kind: "curiosity",
      };
    }
  }

  return undefined;
}

export function getLearnPracticeTitle(areaId: string): string | undefined {
  for (const path of Object.values(MOCK_STUDENT_LEARN.paths)) {
    if (path.strengthen.areaId === areaId) {
      return path.strengthen.title;
    }
  }

  return undefined;
}

export function getLearnAreaTitle(
  subject: keyof typeof MOCK_STUDENT_LEARN.paths,
  areaId: string,
): string | undefined {
  return MOCK_STUDENT_LEARN.paths[subject].subjectAreas.find(
    (area) => area.areaId === areaId,
  )?.title;
}

export function getLearnTopicIds(): string[] {
  const ids = new Set<string>();

  for (const path of Object.values(MOCK_STUDENT_LEARN.paths)) {
    ids.add(path.recommended.topicId);
    for (const item of path.keepGrowing) {
      ids.add(item.topicId);
    }
    ids.add(path.exploreNew.topicId);
  }

  return [...ids];
}

export function getLearnPracticeIds(): string[] {
  return Object.values(MOCK_STUDENT_LEARN.paths).map(
    (path) => path.strengthen.areaId,
  );
}

export function getLearnBrowseParams() {
  return Object.values(MOCK_STUDENT_LEARN.paths).flatMap((path) =>
    path.subjectAreas.map((area) => ({
      subject: path.subject,
      areaId: area.areaId,
    })),
  );
}
