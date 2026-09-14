import type { Grade, Subject } from "./types";
import type { CurriculumId } from "./curriculum-identity";

export const CURIOSITY_CATEGORIES = [
  "science-nature",
  "earth-space",
  "plants",
  "animals",
  "human-body",
  "weather-climate",
  "oceans",
  "everyday-physics",
  "chemistry-materials",
  "mathematical-mysteries",
  "numbers-patterns",
  "geometry",
  "logic-puzzles",
  "language-words",
  "english-usage",
  "reading-language",
  "history",
  "india-culture",
  "world-cultures",
  "geography",
  "inventions",
  "technology",
  "computing-ai",
  "environment",
  "food",
  "money-economics",
  "art",
  "music",
  "creativity",
  "engineering",
  "everyday-things",
  "human-behaviour",
  "society",
  "problem-solving",
  "surprising-phenomena",
  "cross-subject",
] as const;

export type CuriosityCategory = (typeof CURIOSITY_CATEGORIES)[number];

export const CURIOSITY_CATEGORY_LABELS: Record<CuriosityCategory, string> = {
  "science-nature": "Science & nature",
  "earth-space": "Earth & space",
  plants: "Plants",
  animals: "Animals",
  "human-body": "Human body",
  "weather-climate": "Weather & climate",
  oceans: "Oceans",
  "everyday-physics": "Everyday physics",
  "chemistry-materials": "Chemistry & materials",
  "mathematical-mysteries": "Mathematical mysteries",
  "numbers-patterns": "Numbers & patterns",
  geometry: "Geometry",
  "logic-puzzles": "Logic & puzzles",
  "language-words": "Language & words",
  "english-usage": "English usage",
  "reading-language": "Reading & language",
  history: "History",
  "india-culture": "India & culture",
  "world-cultures": "World cultures",
  geography: "Geography",
  inventions: "Inventions",
  technology: "Technology",
  "computing-ai": "Computing & AI",
  environment: "Environment",
  food: "Food",
  "money-economics": "Money & everyday economics",
  art: "Art",
  music: "Music",
  creativity: "Creativity",
  engineering: "Engineering",
  "everyday-things": "How everyday things work",
  "human-behaviour": "Human behaviour",
  society: "Society",
  "problem-solving": "Problem solving",
  "surprising-phenomena": "Surprising phenomena",
  "cross-subject": "Cross-subject connections",
};

export const RELATED_CURIOSITY_CATEGORIES: Record<
  CuriosityCategory,
  CuriosityCategory[]
> = {
  "science-nature": ["plants", "animals", "environment", "surprising-phenomena"],
  "earth-space": ["weather-climate", "oceans", "geography", "everyday-physics"],
  plants: ["science-nature", "environment", "food", "cross-subject"],
  animals: ["science-nature", "human-body", "environment", "surprising-phenomena"],
  "human-body": ["human-behaviour", "food", "animals", "science-nature"],
  "weather-climate": ["earth-space", "oceans", "environment", "everyday-physics"],
  oceans: ["weather-climate", "earth-space", "environment", "animals"],
  "everyday-physics": [
    "engineering",
    "everyday-things",
    "surprising-phenomena",
    "chemistry-materials",
  ],
  "chemistry-materials": ["everyday-physics", "food", "everyday-things", "environment"],
  "mathematical-mysteries": [
    "numbers-patterns",
    "geometry",
    "logic-puzzles",
    "problem-solving",
  ],
  "numbers-patterns": [
    "mathematical-mysteries",
    "logic-puzzles",
    "geometry",
    "cross-subject",
  ],
  geometry: ["mathematical-mysteries", "art", "engineering", "numbers-patterns"],
  "logic-puzzles": [
    "problem-solving",
    "mathematical-mysteries",
    "numbers-patterns",
    "computing-ai",
  ],
  "language-words": ["english-usage", "reading-language", "creativity", "cross-subject"],
  "english-usage": ["language-words", "reading-language", "society"],
  "reading-language": ["language-words", "english-usage", "history", "creativity"],
  history: ["india-culture", "world-cultures", "society", "inventions"],
  "india-culture": ["history", "world-cultures", "geography", "food"],
  "world-cultures": ["india-culture", "geography", "history", "art"],
  geography: ["earth-space", "world-cultures", "environment", "india-culture"],
  inventions: ["technology", "engineering", "history", "everyday-things"],
  technology: ["computing-ai", "inventions", "engineering", "everyday-things"],
  "computing-ai": ["technology", "logic-puzzles", "inventions", "society"],
  environment: ["plants", "oceans", "weather-climate", "science-nature"],
  food: ["chemistry-materials", "plants", "india-culture", "human-body"],
  "money-economics": ["society", "problem-solving", "numbers-patterns", "everyday-things"],
  art: ["creativity", "geometry", "music", "world-cultures"],
  music: ["art", "creativity", "everyday-physics", "human-behaviour"],
  creativity: ["art", "music", "problem-solving", "language-words"],
  engineering: ["everyday-things", "everyday-physics", "inventions", "geometry"],
  "everyday-things": ["engineering", "everyday-physics", "technology", "inventions"],
  "human-behaviour": ["human-body", "society", "music", "problem-solving"],
  society: ["human-behaviour", "history", "money-economics", "computing-ai"],
  "problem-solving": [
    "logic-puzzles",
    "mathematical-mysteries",
    "engineering",
    "creativity",
  ],
  "surprising-phenomena": [
    "everyday-physics",
    "science-nature",
    "earth-space",
    "cross-subject",
  ],
  "cross-subject": [
    "science-nature",
    "mathematical-mysteries",
    "language-words",
    "art",
  ],
};

export type DiscoveryDifficulty = "early" | "core" | "stretch";

export type DiscoveryLearnerContext = {
  learnerId: string;
  grade: Grade;
  /** Defaults to India in selectors when omitted. */
  curriculumId?: CurriculumId;
  completedDiscoveryIds: readonly string[];
  recentDiscoveryIds?: readonly string[];
  recentCategoryIds?: readonly string[];
  recentConceptIds?: readonly string[];
  lockedDiscoveryId?: string;
};

export function calendarDateISO(
  now: Date = new Date(),
  timeZone = "Asia/Kolkata",
): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function hashString(input: string): number {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function subjectForCuriosityCategory(
  category: CuriosityCategory,
): Subject {
  if (
    category === "mathematical-mysteries" ||
    category === "numbers-patterns" ||
    category === "geometry" ||
    category === "logic-puzzles" ||
    category === "money-economics" ||
    category === "problem-solving"
  ) {
    return "math";
  }

  if (
    category === "language-words" ||
    category === "english-usage" ||
    category === "reading-language" ||
    category === "history" ||
    category === "india-culture" ||
    category === "world-cultures" ||
    category === "art" ||
    category === "music" ||
    category === "creativity" ||
    category === "human-behaviour" ||
    category === "society"
  ) {
    return "english";
  }

  return "science";
}
