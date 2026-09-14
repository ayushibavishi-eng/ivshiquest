import {
  ASK_IVSHI_MAX_HISTORY,
  ASK_IVSHI_MAX_MESSAGE_CHARS,
  type AskConversationMessage,
  type AskIvshiRequest,
  type AskLearnerContext,
  type AskLessonContext,
  type AskLearnerProgress,
  type AskMessageRole,
} from "@/domain/ask-ivshi";

const EMPTY_LEARNER_CONTEXT: AskLearnerContext = {
  grade: null,
  country: null,
  curriculumId: null,
  subjects: [],
  currentSubject: null,
  currentTopic: null,
  lesson: null,
  learningDNA: null,
  previousMistakes: null,
  learnerPreferences: null,
  progress: null,
  parentApprovedContext: null,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readTrimmedString(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

function parseRole(value: unknown): AskMessageRole | null {
  return value === "user" || value === "ivshi" ? value : null;
}

function parseHistory(value: unknown): AskConversationMessage[] | null {
  if (!Array.isArray(value)) {
    return null;
  }

  const history: AskConversationMessage[] = [];

  for (const item of value.slice(-ASK_IVSHI_MAX_HISTORY)) {
    if (!isRecord(item)) {
      return null;
    }

    const role = parseRole(item.role);
    const text = readTrimmedString(item.text);

    if (!role || !text) {
      return null;
    }

    history.push({
      role,
      text: text.slice(0, ASK_IVSHI_MAX_MESSAGE_CHARS),
    });
  }

  return history;
}

function parseProgress(value: unknown): AskLearnerProgress | null {
  if (!isRecord(value)) {
    return null;
  }

  const growing = value.growing;
  const learned = value.learned;
  const mastered = value.mastered;

  if (
    typeof growing !== "number" ||
    typeof learned !== "number" ||
    typeof mastered !== "number" ||
    !Number.isFinite(growing) ||
    !Number.isFinite(learned) ||
    !Number.isFinite(mastered)
  ) {
    return null;
  }

  return { growing, learned, mastered };
}

function parseSubjects(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .slice(0, 8);
}

function parseExamples(value: unknown): AskLessonContext["examples"] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(isRecord)
    .map((item) => ({
      caption: readTrimmedString(item.caption) ?? "",
      body: readTrimmedString(item.body) ?? "",
    }))
    .filter((item) => item.caption || item.body)
    .slice(0, 8);
}

function parseMisconceptions(
  value: unknown,
): AskLessonContext["misconceptions"] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(isRecord)
    .map((item) => ({
      idea: readTrimmedString(item.idea) ?? "",
      correction: readTrimmedString(item.correction) ?? "",
    }))
    .filter((item) => item.idea || item.correction)
    .slice(0, 8);
}

function parseLesson(value: unknown): AskLessonContext | null {
  if (!isRecord(value)) {
    return null;
  }

  const lessonId = readTrimmedString(value.lessonId);
  const conceptId = readTrimmedString(value.conceptId);
  const lessonTitle = readTrimmedString(value.lessonTitle);
  const learningObjective = readTrimmedString(value.learningObjective);
  const currentLearningStage = readTrimmedString(value.currentLearningStage);
  const explanation = readTrimmedString(value.explanation) ?? "";
  const subject = readTrimmedString(value.subject);
  const gradeValue = value.grade;
  const grade =
    typeof gradeValue === "number" && Number.isFinite(gradeValue)
      ? gradeValue
      : null;

  if (
    grade === null ||
    !subject ||
    !lessonId ||
    !conceptId ||
    !lessonTitle ||
    !learningObjective ||
    !currentLearningStage
  ) {
    return null;
  }

  return {
    grade,
    subject,
    lessonId,
    conceptId,
    lessonTitle,
    learningObjective,
    currentLearningStage,
    explanation,
    examples: parseExamples(value.examples),
    misconceptions: parseMisconceptions(value.misconceptions),
  };
}

function parseContext(value: unknown): AskLearnerContext {
  if (!isRecord(value)) {
    return EMPTY_LEARNER_CONTEXT;
  }

  const grade = value.grade;
  const parsedGrade =
    typeof grade === "number" && Number.isFinite(grade) ? grade : null;

  return {
    grade: parsedGrade,
    country: readTrimmedString(value.country),
    curriculumId: readTrimmedString(value.curriculumId),
    subjects: parseSubjects(value.subjects),
    currentSubject: readTrimmedString(value.currentSubject),
    currentTopic: readTrimmedString(value.currentTopic),
    lesson: parseLesson(value.lesson),
    learningDNA: null,
    previousMistakes: null,
    learnerPreferences: null,
    progress: parseProgress(value.progress),
    parentApprovedContext: null,
  };
}

export function parseAskIvshiRequest(
  value: unknown,
):
  | { ok: true; request: AskIvshiRequest }
  | { ok: false; reason: "invalid_request" | "empty_message" } {
  if (!isRecord(value)) {
    return { ok: false, reason: "invalid_request" };
  }

  const message = readTrimmedString(value.message);

  if (!message) {
    return { ok: false, reason: "empty_message" };
  }

  const history = parseHistory(value.history);

  if (!history) {
    return { ok: false, reason: "invalid_request" };
  }

  return {
    ok: true,
    request: {
      message: message.slice(0, ASK_IVSHI_MAX_MESSAGE_CHARS),
      history,
      context: parseContext(value.context),
    },
  };
}
