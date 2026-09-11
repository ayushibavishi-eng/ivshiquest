import {
  getAllCurriculumTopicIds,
  getCurriculumConcept,
  getCurriculumNodeTitle,
  getCurriculumWorld,
  getCurriculumWorldsForSubject,
  WEATHER_WORLD,
} from "@/content/curriculum";
import type { StudentLearn, SubjectLearnPath } from "@/domain/learn";
import type { Subject } from "@/domain/types";
import { MOCK_CURRENT_STUDENT } from "./current-student";

function titleOf(id: string, fallback: string) {
  return getCurriculumNodeTitle(id) ?? fallback;
}

function areasFor(subject: Subject) {
  return getCurriculumWorldsForSubject(subject, MOCK_CURRENT_STUDENT.grade).map(
    (world) => ({
      areaId: world.id,
      title: world.title,
      group: world.category,
    }),
  );
}

const equivalentFractions = getCurriculumConcept("equivalent-fractions");
const weatherTemperature = getCurriculumConcept("weather-temperature");
const weatherClouds = getCurriculumConcept("weather-clouds");
const weatherVsClimate = getCurriculumConcept("weather-vs-climate");
const nouns = getCurriculumConcept("english-nouns-common-proper");
const integersIntro = getCurriculumConcept("math-ns-integers-intro");
const decimalsWorld = getCurriculumWorld("math-decimals");
const ratioWorld = getCurriculumWorld("math-ratio");
const paragraphConcept = getCurriculumConcept("english-para-topic");
const synonymsWorld = getCurriculumWorld("english-synonyms");
const themeConcept = getCurriculumConcept("english-theme-idea");

const weatherSkyPath = [
  "weather-temperature",
  "weather-wind",
  "weather-clouds",
  "weather-rain",
  "weather-storms",
  "weather-patterns",
  "weather-vs-climate",
]
  .map((id) => getCurriculumConcept(id)?.title)
  .filter((title): title is string => Boolean(title));

const mathPath: SubjectLearnPath = {
  subject: "math",
  recommended: {
    topicId: equivalentFractions?.id ?? "equivalent-fractions",
    title: equivalentFractions?.title ?? "Equivalent Fractions",
    headline: "You're almost there.",
    supportingText:
      equivalentFractions?.hook ??
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
      topicId: decimalsWorld?.id ?? "math-decimals",
      title: decimalsWorld?.title ?? "Decimals",
      connection: decimalsWorld?.hook ?? "Build on your fraction knowledge",
      status: "not-started",
      statusLabel: "Not started",
    },
    {
      topicId: ratioWorld?.id ?? "math-ratio",
      title: ratioWorld?.title ?? "Ratio & Proportion",
      connection: ratioWorld?.hook ?? "A new connection to discover",
      status: "ready",
      statusLabel: "Ready to explore",
    },
  ],
  strengthen: {
    areaId: "fractions",
    title: titleOf("math-fractions", "Fractions"),
    message: "A little more practice could make this stronger.",
    attentionLabel: "3 concepts need attention",
  },
  exploreNew: {
    topicId: integersIntro?.id ?? "math-ns-integers-intro",
    question: integersIntro?.hook ?? "Why do negative numbers exist?",
    durationLabel: "A Number Sense idea",
  },
  subjectAreas: areasFor("math"),
  connections: [
    {
      id: "fractions-decimals-percentages",
      nodes: [
        titleOf("equivalent-fractions", "Equivalent Fractions"),
        titleOf("math-decimals", "Decimals"),
        titleOf("math-percentages", "Percentages"),
      ],
    },
  ],
};

const sciencePath: SubjectLearnPath = {
  subject: "science",
  recommended: {
    topicId: WEATHER_WORLD.id,
    title: WEATHER_WORLD.title,
    headline: "A whole sky is waiting.",
    supportingText: WEATHER_WORLD.hook,
    ivshiNote: "Ivshi thinks Weather World is a beautiful next step.",
    signals: ["knowledge-tree", "curriculum", "interests", "recent-activity"],
  },
  keepGrowing: [
    {
      topicId: weatherTemperature?.id ?? "weather-temperature",
      title: weatherTemperature?.title ?? "Temperature",
      connection: weatherTemperature?.hook ?? WEATHER_WORLD.hook,
      status: "ready",
      statusLabel: "Ready to explore",
    },
    {
      topicId: weatherClouds?.id ?? "weather-clouds",
      title: weatherClouds?.title ?? "Clouds",
      connection: weatherClouds?.hook ?? WEATHER_WORLD.hook,
      status: "ready",
      statusLabel: "Ready to explore",
    },
  ],
  strengthen: {
    areaId: WEATHER_WORLD.id,
    title: WEATHER_WORLD.title,
    message: "A little sky practice can help the weather ideas stick.",
    attentionLabel: "Practice from Weather World",
  },
  exploreNew: {
    topicId: weatherVsClimate?.id ?? "weather-vs-climate",
    question: weatherVsClimate?.hook ?? WEATHER_WORLD.hook,
    durationLabel: "A Weather World idea",
  },
  subjectAreas: areasFor("science"),
  connections: [
    {
      id: "weather-sky-path",
      nodes: weatherSkyPath,
    },
    {
      id: "plants-photosynthesis-food-chains",
      nodes: [
        titleOf("science-plants", "Plants"),
        titleOf("science-plants-photosynthesis", "Photosynthesis"),
        titleOf("science-food-chains", "Food Chains"),
      ],
    },
  ],
};

const englishPath: SubjectLearnPath = {
  subject: "english",
  recommended: {
    topicId: nouns?.id ?? "english-nouns-common-proper",
    title: nouns?.title ?? "Common & Proper Nouns",
    headline: "Names hold the sentence together.",
    supportingText: nouns?.hook ?? "Nouns are the naming words stories hang on.",
    ivshiNote: "Ivshi thinks this is your next best step.",
    signals: [
      "previous-performance",
      "curriculum",
      "recent-activity",
      "knowledge-tree",
    ],
  },
  keepGrowing: [
    {
      topicId: paragraphConcept?.id ?? "english-para-topic",
      title: paragraphConcept?.title ?? "Topic Sentence & Details",
      connection: paragraphConcept?.hook ?? "Build on strong sentences",
      status: "not-started",
      statusLabel: "Not started",
    },
    {
      topicId: synonymsWorld?.id ?? "english-synonyms",
      title: synonymsWorld?.title ?? "Synonyms",
      connection: synonymsWorld?.hook ?? "A new connection to discover",
      status: "ready",
      statusLabel: "Ready to explore",
    },
  ],
  strengthen: {
    areaId: "english-sentence-structure",
    title: titleOf("english-sentence-structure", "Sentence Structure"),
    message: "A little more practice could make this stronger.",
    attentionLabel: "Grammar ideas to strengthen",
  },
  exploreNew: {
    topicId: themeConcept?.id ?? "english-theme-idea",
    question: themeConcept?.hook ?? "What bigger idea does a story leave behind?",
    durationLabel: "A Reading idea",
  },
  subjectAreas: areasFor("english"),
  connections: [
    {
      id: "words-sentences-paragraphs",
      nodes: [
        titleOf("english-nouns", "Nouns"),
        titleOf("english-sentence-structure", "Sentence Structure"),
        titleOf("english-paragraphs", "Paragraph Writing"),
      ],
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
  const catalogTitle = getCurriculumNodeTitle(topicId);
  if (catalogTitle) {
    return { topicId, title: catalogTitle, kind: "topic-start" };
  }

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
  const catalogTitle = getCurriculumNodeTitle(areaId);
  if (catalogTitle) {
    return catalogTitle;
  }

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
  const world = getCurriculumWorld(areaId);
  if (world && world.subjectId === subject) {
    return world.title;
  }

  return MOCK_STUDENT_LEARN.paths[subject].subjectAreas.find(
    (area) => area.areaId === areaId,
  )?.title;
}

export function getLearnTopicIds(): string[] {
  const ids = new Set<string>(getAllCurriculumTopicIds());

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
  const fromCatalog = (["math", "science", "english"] as const).flatMap(
    (subject) =>
      getCurriculumWorldsForSubject(subject).map((world) => ({
        subject,
        areaId: world.id,
      })),
  );

  return fromCatalog;
}
