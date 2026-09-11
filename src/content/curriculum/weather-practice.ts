import type {
  PracticeDifficulty,
  PracticeQuestion,
  PracticeSet,
} from "@/domain/practice";
import { SUBJECT_LABELS } from "@/domain/types";
import {
  WEATHER_CONCEPTS,
  WEATHER_WORLD,
  WEATHER_WORLD_ID,
} from "@/content/curriculum/weather";

const WEATHER_PRACTICE_PICKS: {
  conceptId: string;
  questionId: string;
  difficulty: PracticeDifficulty;
}[] = [
  { conceptId: "weather-temperature", questionId: "wt-q1", difficulty: "easy" },
  { conceptId: "weather-wind", questionId: "wn-q1", difficulty: "easy-medium" },
  { conceptId: "weather-clouds", questionId: "wc-q1", difficulty: "medium" },
  { conceptId: "weather-rain", questionId: "wr-q1", difficulty: "medium-harder" },
  { conceptId: "weather-vs-climate", questionId: "cl-q1", difficulty: "challenge" },
];

export function getWeatherPracticeSet(): PracticeSet {
  const questions: PracticeQuestion[] = [];

  for (const pick of WEATHER_PRACTICE_PICKS) {
    const concept = WEATHER_CONCEPTS.find((item) => item.id === pick.conceptId);
    const source = concept?.experience?.practice.find(
      (question) => question.id === pick.questionId,
    );

    if (!concept || !source) {
      continue;
    }

    questions.push({
      id: source.id,
      prompt: source.prompt,
      format: "multiple-choice",
      difficulty: pick.difficulty,
      concept: concept.id,
      choices: source.choices,
      correctChoiceId: source.correctChoiceId,
      explanation: source.explanation,
      hint: concept.hook,
    });
  }

  return {
    id: "weather-sky-practice",
    areaId: WEATHER_WORLD_ID,
    subjectLabel: SUBJECT_LABELS.science,
    topicTitle: WEATHER_WORLD.title,
    concept: WEATHER_WORLD_ID,
    questions,
  };
}
