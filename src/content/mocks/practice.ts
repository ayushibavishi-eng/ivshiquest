import { getWeatherPracticeSet } from "@/content/curriculum/weather-practice";
import { WEATHER_WORLD_ID } from "@/content/curriculum/weather";
import type { PracticeSet } from "@/domain/practice";

export const EQUIVALENT_FRACTIONS_PRACTICE_ID = "equivalent-fractions";
export const EQUIVALENT_FRACTIONS_AREA_ID = "fractions";

export const MOCK_EQUIVALENT_FRACTIONS_PRACTICE: PracticeSet = {
  id: EQUIVALENT_FRACTIONS_PRACTICE_ID,
  areaId: EQUIVALENT_FRACTIONS_AREA_ID,
  subjectLabel: "Mathematics",
  topicTitle: "Equivalent Fractions",
  concept: "equivalent-fractions",
  questions: [
    {
      id: "eq-q1",
      prompt: "Which fraction is equivalent to 1/2?",
      format: "multiple-choice",
      difficulty: "easy",
      concept: "equivalent-fractions",
      choices: [
        { id: "eq-q1-a", letter: "A", text: "2/4" },
        { id: "eq-q1-b", letter: "B", text: "2/3" },
        { id: "eq-q1-c", letter: "C", text: "3/5" },
      ],
      correctChoiceId: "eq-q1-a",
      explanation: "2/4 represents the same amount as 1/2.",
      hint: "Imagine a sandwich cut in half. If you cut each half into two pieces, how many pieces make the same amount?",
    },
    {
      id: "eq-q2",
      prompt: "Is 3/6 equivalent to 1/2?",
      format: "yes-no",
      difficulty: "easy-medium",
      concept: "equivalent-fractions",
      choices: [
        { id: "eq-q2-a", letter: "A", text: "Yes" },
        { id: "eq-q2-b", letter: "B", text: "No" },
      ],
      correctChoiceId: "eq-q2-a",
      explanation:
        "3/6 is the same amount as 1/2. Dividing the top and bottom of 3/6 by 3 gives 1/2.",
      hint: "Think of a sandwich cut into 6 pieces. Are 3 pieces the same as half?",
    },
    {
      id: "eq-q3",
      prompt: "Which pair shows the same amount?",
      format: "pair",
      difficulty: "medium",
      concept: "equivalent-fractions",
      choices: [
        { id: "eq-q3-a", letter: "A", text: "2/5 and 4/10" },
        { id: "eq-q3-b", letter: "B", text: "2/5 and 3/10" },
        { id: "eq-q3-c", letter: "C", text: "1/2 and 2/5" },
      ],
      correctChoiceId: "eq-q3-a",
      explanation: "2/5 and 4/10 match because both the top and the bottom of 2/5 were multiplied by 2.",
      hint: "Equivalent fractions grow by the same multiplier on the top and the bottom.",
    },
    {
      id: "eq-q4",
      prompt: "Find the missing number: 5/10 = □/2",
      format: "missing-number",
      difficulty: "medium-harder",
      concept: "equivalent-fractions",
      choices: [
        { id: "eq-q4-a", letter: "A", text: "1" },
        { id: "eq-q4-b", letter: "B", text: "2" },
        { id: "eq-q4-c", letter: "C", text: "5" },
      ],
      correctChoiceId: "eq-q4-a",
      explanation: "10 divided by 5 is 2, and 5 divided by 5 is 1. So 5/10 is the same amount as 1/2.",
      hint: "What do you divide 10 by to get 2? Use that same idea on 5.",
    },
    {
      id: "eq-q5",
      prompt: "Which fraction is not equivalent to 3/4?",
      format: "odd-one-out",
      difficulty: "challenge",
      concept: "equivalent-fractions",
      choices: [
        { id: "eq-q5-a", letter: "A", text: "6/8" },
        { id: "eq-q5-b", letter: "B", text: "9/12" },
        { id: "eq-q5-c", letter: "C", text: "8/12" },
      ],
      correctChoiceId: "eq-q5-c",
      explanation: "8/12 simplifies to 2/3, which is a different amount from 3/4. 6/8 and 9/12 both equal 3/4.",
      hint: "Simplify each choice. The one that becomes something other than 3/4 is the odd one out.",
    },
  ],
};

export function getMockPracticeSet(areaId?: string): PracticeSet | null {
  if (!areaId || areaId === EQUIVALENT_FRACTIONS_AREA_ID) {
    return MOCK_EQUIVALENT_FRACTIONS_PRACTICE;
  }

  if (areaId === WEATHER_WORLD_ID) {
    return getWeatherPracticeSet();
  }

  return null;
}
