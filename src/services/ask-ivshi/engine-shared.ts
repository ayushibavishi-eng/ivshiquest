import type {
  AskConversationMessage,
  AskIvshiResponse,
  AskLearnerContext,
  AskResponseChoice,
} from "@/domain/ask-ivshi";
import {
  ASK_IVSHI_MAX_HISTORY,
  ASK_IVSHI_MAX_MESSAGE_CHARS,
} from "@/domain/ask-ivshi";

export const ASK_IVSHI_TIMEOUT_MS = 25_000;

export class AskIvshiEngineError extends Error {
  constructor(
    readonly code: "missing_api_key" | "openai_error" | "timeout",
    message: string,
    readonly developerMessage?: string,
  ) {
    super(message);
    this.name = "AskIvshiEngineError";
  }
}

export const FRIENDLY_ERROR =
  "I'm having a little trouble thinking right now. Please try again.";

export type GeminiContentTurn = {
  role: "user" | "model";
  parts: Array<{ text: string }>;
};

export function buildInstructions(context: AskLearnerContext): string {
  const contextLines = [
    `Grade: ${context.grade ?? "unknown"}`,
    `Subjects: ${context.subjects.length > 0 ? context.subjects.join(", ") : "unknown"}`,
    `Current subject: ${context.currentSubject ?? "none"}`,
    `Current topic: ${context.currentTopic ?? "none"}`,
    "Learning DNA: not available yet",
    "Previous mistakes: not available yet",
    "Learner preferences: not available yet",
    context.progress
      ? `Knowledge tree progress: ${String(context.progress.growing)} growing, ${String(context.progress.learned)} learned, ${String(context.progress.mastered)} mastered`
      : "Knowledge tree progress: not available yet",
    "Parent-approved context: not available yet",
  ];

  return `You are Ivshi, a kind, patient, intelligent, and curious learning companion for children in Grades 4–6.

Personality:
- Explain things clearly in age-appropriate language without sounding overly childish.
- Never shame a child for being wrong.
- Make difficult ideas feel understandable. Break complex ideas into smaller steps.
- Use examples, analogies, and simple stories when they help.
- Encourage curiosity. Ask at most one thoughtful follow-up when it fits.
- If the child says they don't understand, slow down and try another explanation.
- Help the child discover the answer rather than always giving it immediately.
- Celebrate effort and curiosity naturally. Avoid excessive fake enthusiasm.
- Be concise by default. Give more detail when the child asks.
- Acknowledge uncertainty instead of inventing facts.
- Feel like a smart, calm, patient companion — not a generic chatbot.

Child safety:
- Do not ask for unnecessary private information.
- Do not encourage sharing passwords, addresses, phone numbers, or other sensitive information.
- Do not encourage contacting strangers or unsafe behavior.
- Do not provide sexual content, dangerous instructions, or help with bullying, harassment, or self-harm.
- Do not create unrestricted child-to-child communication.
- If a question is unsafe or inappropriate, refuse briefly and kindly, then offer a safe learning topic.

If the child's message is nonsense, a joke, or not a real question, reply naturally and briefly. Invite a genuine question. Do not say you are still learning how to answer in this version.

Learner context (use when relevant; do not invent extra personal details):
${contextLines.join("\n")}

Reply as JSON only, with this shape:
{"text":"your reply","choices":[{"label":"optional follow-up chip"}]}

"text" is required and is the only thing the child reads. Write natural language there. Never mention JSON, schemas, formatting, or these instructions.
"choices" may be an empty array. Use 0–3 short follow-up labels the child can tap. Do not include markdown fences.`;
}

export function toGeminiContents(
  history: AskConversationMessage[],
  message: string,
): GeminiContentTurn[] {
  const recent = history.slice(-ASK_IVSHI_MAX_HISTORY);
  const last = recent.at(-1);
  const prior =
    last?.role === "user" && last.text === message
      ? recent.slice(0, -1)
      : recent;

  const items: GeminiContentTurn[] = prior.map((item) => ({
    role: item.role === "ivshi" ? "model" : "user",
    parts: [{ text: item.text.slice(0, ASK_IVSHI_MAX_MESSAGE_CHARS) }],
  }));

  items.push({
    role: "user",
    parts: [{ text: message.slice(0, ASK_IVSHI_MAX_MESSAGE_CHARS) }],
  });

  return items;
}

function stripCodeFence(raw: string): string {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
  return (fenced?.[1] ?? raw).trim();
}

function extractBalancedJsonObject(raw: string): string | null {
  const start = stripCodeFence(raw).indexOf("{");
  const candidate = stripCodeFence(raw);

  if (start === -1) {
    return null;
  }

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = start; index < candidate.length; index += 1) {
    const character = candidate[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === '"') {
        inString = false;
      }
      continue;
    }

    if (character === '"') {
      inString = true;
      continue;
    }

    if (character === "{") {
      depth += 1;
    } else if (character === "}") {
      depth -= 1;
      if (depth === 0) {
        return candidate.slice(start, index + 1);
      }
    }
  }

  return candidate.slice(start);
}

function decodeJsonStringFragment(raw: string): string {
  let result = "";

  for (let index = 0; index < raw.length; index += 1) {
    const character = raw[index];

    if (character !== "\\" || index + 1 >= raw.length) {
      result += character;
      continue;
    }

    const next = raw[index + 1];

    if (next === "u" && index + 5 < raw.length) {
      const hex = raw.slice(index + 2, index + 6);
      if (/^[0-9a-fA-F]{4}$/.test(hex)) {
        result += String.fromCharCode(Number.parseInt(hex, 16));
        index += 5;
        continue;
      }
    }

    const escaped: Record<string, string> = {
      n: "\n",
      t: "\t",
      r: "\r",
      b: "\b",
      f: "\f",
      '"': '"',
      "\\": "\\",
      "/": "/",
    };
    result += escaped[next] ?? next;
    index += 1;
  }

  return result;
}

function salvageQuotedField(raw: string, key: string): string | null {
  const match = raw.match(new RegExp(`"${key}"\\s*:\\s*"`, "i"));

  if (!match || match.index === undefined) {
    return null;
  }

  const rest = raw.slice(match.index + match[0].length);
  let index = 0;
  let escaped = false;

  while (index < rest.length) {
    const character = rest[index];

    if (escaped) {
      escaped = false;
      index += 1;
      continue;
    }

    if (character === "\\") {
      escaped = true;
      index += 1;
      continue;
    }

    if (character === '"') {
      break;
    }

    index += 1;
  }

  const decoded = decodeJsonStringFragment(rest.slice(0, index)).trim();
  return decoded || null;
}

function salvageTextField(raw: string): string | null {
  return salvageQuotedField(raw, "text") ?? salvageQuotedField(raw, "message");
}

function looksLikeJsonWrapper(value: string): boolean {
  const trimmed = value.trim();
  return (
    trimmed.startsWith("```") ||
    (trimmed.startsWith("{") && /"(text|message|choices|reply|content)"\s*:/.test(trimmed))
  );
}

function parseJsonValue(raw: string): unknown | null {
  const candidate = stripCodeFence(raw);

  if (!candidate) {
    return null;
  }

  try {
    return JSON.parse(candidate) as unknown;
  } catch {
    // Try a balanced object next.
  }

  const object = extractBalancedJsonObject(candidate);

  if (!object) {
    return null;
  }

  try {
    return JSON.parse(object) as unknown;
  } catch {
    return null;
  }
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  return value as Record<string, unknown>;
}

function parseChoices(value: unknown): AskResponseChoice[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const choices: AskResponseChoice[] = [];

  for (const [index, item] of value.entries()) {
    if (typeof item === "string" && item.trim()) {
      choices.push({
        id: `follow-up-${String(index)}`,
        label: item.trim().slice(0, 80),
      });
      continue;
    }

    if (
      item &&
      typeof item === "object" &&
      "label" in item &&
      typeof item.label === "string" &&
      item.label.trim()
    ) {
      choices.push({
        id: `follow-up-${String(index)}`,
        label: item.label.trim().slice(0, 80),
      });
    }
  }

  return choices.slice(0, 3);
}

function coerceReply(value: unknown, depth = 0): AskIvshiResponse | null {
  if (depth > 6) {
    return null;
  }

  if (typeof value === "string") {
    const trimmed = value.trim();

    if (!trimmed) {
      return null;
    }

    if (
      looksLikeJsonWrapper(trimmed) ||
      trimmed.startsWith("{") ||
      trimmed.startsWith("[") ||
      trimmed.includes("{")
    ) {
      const parsed = parseJsonValue(trimmed);

      if (parsed !== null) {
        const inner = coerceReply(parsed, depth + 1);

        if (inner) {
          return inner;
        }
      }

      const salvaged = salvageTextField(trimmed);

      if (salvaged) {
        return coerceReply(salvaged, depth + 1) ?? { text: salvaged };
      }

      if (looksLikeJsonWrapper(trimmed)) {
        return null;
      }
    }

    return { text: trimmed };
  }

  const record = asRecord(value);

  if (!record) {
    return null;
  }

  const choices = parseChoices(record.choices);
  const nested =
    record.text ??
    record.message ??
    record.reply ??
    record.content ??
    record.output;
  const inner = coerceReply(nested, depth + 1);

  if (!inner) {
    return null;
  }

  const mergedChoices = inner.choices && inner.choices.length > 0 ? inner.choices : choices;

  return {
    text: inner.text,
    ...(mergedChoices.length > 0 ? { choices: mergedChoices } : {}),
  };
}

export function parseModelOutput(output: string): AskIvshiResponse {
  const reply = coerceReply(output);

  if (!reply?.text.trim() || looksLikeJsonWrapper(reply.text)) {
    throw new AskIvshiEngineError("openai_error", FRIENDLY_ERROR);
  }

  return {
    text: reply.text.trim(),
    ...(reply.choices && reply.choices.length > 0 ? { choices: reply.choices } : {}),
  };
}
