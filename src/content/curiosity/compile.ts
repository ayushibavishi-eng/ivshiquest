import { getCurriculumConcept } from "@/content/curriculum";
import type { CuriosityCategory, DiscoveryDifficulty } from "@/domain/curiosity";
import { CURIOSITY_CATEGORY_LABELS } from "@/domain/curiosity";
import type { DiscoveryContent, DiscoveryExplorationVisual } from "@/domain/discovery";
import type { Grade, Subject } from "@/domain/types";
import { SUBJECT_LABELS } from "@/domain/types";

export type CuriosityKernel = {
  id: string;
  category: CuriosityCategory;
  subject?: Subject;
  tags: string[];
  grades?: Grade[];
  difficulty?: DiscoveryDifficulty;
  conceptId?: string;
  relatedConceptIds?: string[];
  question: string;
  questionLate?: string;
  wonder?: string;
  predictions: [string, string, string];
  look: string;
  caption: string;
  lookPrompt?: string;
  visual?: DiscoveryExplorationVisual;
  explainEarly: string;
  explainMid: string;
  explainLate: string;
  simpleEarly?: string;
  simpleMid?: string;
  simpleLate?: string;
  retrieveQuestion: string;
  retrieveChoices: [string, string, string];
  retrieveCorrect: 0 | 1 | 2;
  retrieveHint: string;
  retrieveClue?: string;
  hook: string;
  connection: string;
  discoverMore?: string;
  durationMinutes?: number;
};

const LETTERS = ["A", "B", "C"] as const;

function choiceId(prefix: string, index: number, text: string): string {
  const slug = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 24);
  return `${prefix}-${index}-${slug || "choice"}`;
}

function explanation(
  main: string,
  simple: string,
): DiscoveryContent["explanations"]["default"] {
  return {
    heading: "Here's what's happening",
    main,
    simpleHeading: "In simple words",
    simple,
  };
}

export function compileCuriosityKernel(
  kernel: CuriosityKernel,
  trackIndex: number,
): DiscoveryContent {
  const grades = kernel.grades;
  if (!grades || grades.length === 0) {
    throw new Error(`Curiosity kernel ${kernel.id} needs a target grade`);
  }
  const subject = kernel.subject ?? inferSubject(kernel.category);
  const difficulty = kernel.difficulty ?? difficultyFromGrades(grades);
  const questionByGrade: Partial<Record<Grade, string>> = {};
  if (kernel.questionLate) {
    for (const grade of grades) {
      questionByGrade[grade] = grade >= 7 ? kernel.questionLate : kernel.question;
    }
  }

  const simpleEarly =
    kernel.simpleEarly ?? shortenExplanation(kernel.explainEarly);
  const simpleMid = kernel.simpleMid ?? shortenExplanation(kernel.explainMid);
  const simpleLate = kernel.simpleLate ?? shortenExplanation(kernel.explainLate);

  const early = explanation(kernel.explainEarly, simpleEarly);
  const mid = explanation(kernel.explainMid, simpleMid);
  const late = explanation(kernel.explainLate, simpleLate);

  const explanations: DiscoveryContent["explanations"] = {
    default: pickExplanation(grades, early, mid, late),
  };
  for (const grade of grades) {
    if (grade <= 5) {
      explanations[grade] = early;
    } else if (grade === 6) {
      explanations[grade] = mid;
    } else {
      explanations[grade] = late;
    }
  }

  const predictionChoices = kernel.predictions.map((text, index) => ({
    id: choiceId(`${kernel.id}-p`, index, text),
    letter: LETTERS[index],
    text,
  }));

  const retrieveChoices = kernel.retrieveChoices.map((text, index) => ({
    id: choiceId(`${kernel.id}-r`, index, text),
    letter: LETTERS[index],
    text,
  }));
  const correctChoice = retrieveChoices[kernel.retrieveCorrect];
  if (!correctChoice) {
    throw new Error(`Invalid retrieveCorrect for ${kernel.id}`);
  }

  const curriculumLinked = isCurriculumLinked(kernel.conceptId);

  return {
    id: kernel.id,
    subject,
    subjectLabel: SUBJECT_LABELS[subject],
    topic: CURIOSITY_CATEGORY_LABELS[kernel.category],
    category: kernel.category,
    tags: kernel.tags,
    difficulty,
    conceptId: kernel.conceptId,
    relatedConceptIds: kernel.relatedConceptIds ?? [],
    curriculumLinked,
    trackIndex,
    gradeRange: grades,
    durationMinutes: kernel.durationMinutes ?? 3,
    question: kernel.question,
    questionByGrade:
      Object.keys(questionByGrade).length > 0 ? questionByGrade : undefined,
    wonderPrompt: kernel.wonder ?? "What do you think?",
    predictionChoices,
    predictResponse: "Interesting guess. Let's investigate.",
    predictEncouragement: "Making a guess is part of learning.",
    exploration: {
      prompt: kernel.look,
      lookPrompt:
        kernel.lookPrompt ?? "Tap to look more closely. What changes?",
      captionAfterReveal: kernel.caption,
      visual: kernel.visual ?? "reveal",
    },
    explanations,
    retrieval: {
      question: kernel.retrieveQuestion,
      choices: retrieveChoices,
      correctChoiceId: correctChoice.id,
      correctFeedback: "You figured it out!",
      incorrectFeedback:
        kernel.retrieveClue ??
        "Look back at the idea you just uncovered, then try again.",
      hint: kernel.retrieveHint,
    },
    connection: {
      heading: "Where you'll see this in real life",
      hook: kernel.hook,
      explanation: kernel.connection,
    },
    discoverMore: {
      prompt: "Want to go one step further?",
      question:
        kernel.discoverMore ??
        `What else might this idea explain besides "${kernel.question}"?`,
    },
    completion: {
      title: "Discovery complete",
      summary: curriculumLinked
        ? `Ivshi helped you explore ${CURIOSITY_CATEGORY_LABELS[kernel.category]}.`
        : `Ivshi helped you follow a curiosity about ${CURIOSITY_CATEGORY_LABELS[kernel.category].toLowerCase()}.`,
      treeMessage: curriculumLinked
        ? "Your Knowledge Tree is growing."
        : "Your curiosity is growing — come back tomorrow for something new.",
    },
  };
}

function isCurriculumLinked(conceptId?: string): boolean {
  if (!conceptId) {
    return false;
  }
  if (conceptId === "electricity-circuits") {
    return true;
  }
  return Boolean(getCurriculumConcept(conceptId));
}

function pickExplanation(
  grades: Grade[],
  early: DiscoveryContent["explanations"]["default"],
  mid: DiscoveryContent["explanations"]["default"],
  late: DiscoveryContent["explanations"]["default"],
) {
  const focus = grades[0];
  if (focus && focus <= 5) {
    return early;
  }
  if (focus === 6) {
    return mid;
  }
  return late;
}

function inferSubject(category: CuriosityCategory): Subject {
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

function difficultyFromGrades(grades: Grade[]): DiscoveryDifficulty {
  const min = Math.min(...grades);
  const max = Math.max(...grades);
  if (max <= 5) {
    return "early";
  }
  if (min >= 7) {
    return "stretch";
  }
  return "core";
}

function shortenExplanation(text: string): string {
  const sentence = text.split(/(?<=\.)\s+/)[0] ?? text;
  return sentence.length > 180 ? `${sentence.slice(0, 177).trim()}...` : sentence;
}
