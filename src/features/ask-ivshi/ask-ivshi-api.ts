import type {
  AskIvshiErrorBody,
  AskIvshiErrorCode,
  AskIvshiRequest,
  AskIvshiResponse,
  AskResponseChoice,
} from "@/domain/ask-ivshi";
import { parseModelOutput } from "@/services/ask-ivshi/engine-shared";
import { ROUTES } from "@/lib/constants";

const FRIENDLY_ERROR =
  "I'm having a little trouble thinking right now. Please try again.";

export type AskIvshiClientResult =
  | { ok: true; reply: AskIvshiResponse }
  | {
      ok: false;
      code: AskIvshiErrorCode;
      message: string;
      developerMessage?: string;
    };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function parseChoices(value: unknown): AskResponseChoice[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }

  const choices: AskResponseChoice[] = [];

  for (const item of value) {
    if (
      isRecord(item) &&
      typeof item.id === "string" &&
      typeof item.label === "string" &&
      item.label.trim()
    ) {
      choices.push({ id: item.id, label: item.label.trim() });
    }
  }

  return choices.length > 0 ? choices : undefined;
}

function parseSuccess(value: unknown): AskIvshiResponse | null {
  if (!isRecord(value) || typeof value.text !== "string" || !value.text.trim()) {
    return null;
  }

  try {
    const normalized = parseModelOutput(value.text);
    const choices = parseChoices(value.choices) ?? normalized.choices;

    return {
      text: normalized.text,
      ...(choices ? { choices } : {}),
    };
  } catch {
    return null;
  }
}

function parseErrorBody(value: unknown): AskIvshiErrorBody | null {
  if (!isRecord(value) || !isRecord(value.error)) {
    return null;
  }

  const { code, message, developerMessage } = value.error;
  const allowed: AskIvshiErrorCode[] = [
    "missing_api_key",
    "invalid_request",
    "empty_message",
    "openai_error",
    "timeout",
  ];

  if (typeof code !== "string" || !allowed.includes(code as AskIvshiErrorCode)) {
    return null;
  }

  return {
    code: code as AskIvshiErrorCode,
    message: typeof message === "string" && message.trim() ? message : FRIENDLY_ERROR,
    ...(typeof developerMessage === "string"
      ? { developerMessage }
      : {}),
  };
}

export async function sendAskIvshiMessage(
  request: AskIvshiRequest,
): Promise<AskIvshiClientResult> {
  try {
    const response = await fetch(ROUTES.api.askIvshi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
      signal: AbortSignal.timeout(30_000),
    });

    const payload: unknown = await response.json().catch(() => null);

    if (!response.ok) {
      const error = parseErrorBody(payload);

      if (error?.developerMessage) {
        console.error(`[ask-ivshi] ${error.developerMessage}`);
      }

      return {
        ok: false,
        code: error?.code ?? "openai_error",
        message: error?.message ?? FRIENDLY_ERROR,
        ...(error?.developerMessage
          ? { developerMessage: error.developerMessage }
          : {}),
      };
    }

    const reply = parseSuccess(payload);

    if (!reply) {
      return { ok: false, code: "openai_error", message: FRIENDLY_ERROR };
    }

    return { ok: true, reply };
  } catch (error) {
    const timedOut =
      error instanceof DOMException &&
      (error.name === "TimeoutError" || error.name === "AbortError");

    return {
      ok: false,
      code: timedOut ? "timeout" : "openai_error",
      message: FRIENDLY_ERROR,
    };
  }
}
