import { ApiError, GoogleGenAI, type GenerateContentResponse } from "@google/genai";
import type { AskIvshiRequest, AskIvshiResponse } from "@/domain/ask-ivshi";
import {
  ASK_IVSHI_TIMEOUT_MS,
  AskIvshiEngineError,
  FRIENDLY_ERROR,
  buildInstructions,
  parseModelOutput,
  toGeminiContents,
} from "@/services/ask-ivshi/engine-shared";

const ASK_IVSHI_RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    text: { type: "string" },
    choices: {
      type: "array",
      items: {
        type: "object",
        properties: {
          label: { type: "string" },
        },
        required: ["label"],
      },
    },
  },
  required: ["text"],
} as const;

function readGeminiOutputText(response: GenerateContentResponse): string {
  const fromAccessor = response.text?.trim() ?? "";

  if (fromAccessor) {
    return fromAccessor;
  }

  const parts = response.candidates?.[0]?.content?.parts ?? [];

  return parts
    .map((part) => {
      if (part.thought) {
        return "";
      }

      return typeof part.text === "string" ? part.text : "";
    })
    .join("")
    .trim();
}

/** Current Flash model for Gemini Developer API free-tier testing. */
export const ASK_IVSHI_MODEL = "gemini-3.5-flash";

const ASK_IVSHI_MAX_RETRIES = 2;
const ASK_IVSHI_RETRY_BACKOFF_MS = [1_000, 2_000] as const;

function isGeminiTransientError(error: unknown): error is ApiError {
  if (!(error instanceof ApiError)) {
    return false;
  }

  return error.status === 429 || error.status === 503 || error.status === 408;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function readApiKey(): string {
  const apiKey = process.env.GEMINI_API_KEY?.trim();

  if (!apiKey) {
    const developerMessage =
      "GEMINI_API_KEY is missing on the server. Add it to the server environment. Never use NEXT_PUBLIC_GEMINI_API_KEY.";
    console.error(`[ask-ivshi] ${developerMessage}`);
    throw new AskIvshiEngineError(
      "missing_api_key",
      FRIENDLY_ERROR,
      developerMessage,
    );
  }

  return apiKey;
}

async function generateAskIvshiContent(
  client: GoogleGenAI,
  input: AskIvshiRequest,
): Promise<AskIvshiResponse> {
  const response = await client.models.generateContent({
    model: ASK_IVSHI_MODEL,
    contents: toGeminiContents(input.history, input.message),
    config: {
      systemInstruction: buildInstructions(input.context),
      maxOutputTokens: 2048,
      abortSignal: AbortSignal.timeout(ASK_IVSHI_TIMEOUT_MS),
      responseMimeType: "application/json",
      responseJsonSchema: ASK_IVSHI_RESPONSE_SCHEMA,
      thinkingConfig: {
        thinkingBudget: 0,
        includeThoughts: false,
      },
    },
  });

  return parseModelOutput(readGeminiOutputText(response));
}

export async function createAskIvshiReply(
  input: AskIvshiRequest,
): Promise<AskIvshiResponse> {
  const apiKey = readApiKey();
  const client = new GoogleGenAI({ apiKey });

  try {
    for (let attempt = 0; attempt <= ASK_IVSHI_MAX_RETRIES; attempt += 1) {
      try {
        return await generateAskIvshiContent(client, input);
      } catch (error) {
        const shouldRetry =
          isGeminiTransientError(error) && attempt < ASK_IVSHI_MAX_RETRIES;

        if (!shouldRetry) {
          throw error;
        }

        console.error(
          `[ask-ivshi] Gemini API error status=${String(error.status)}; retrying (${String(attempt + 1)}/${String(ASK_IVSHI_MAX_RETRIES)}).`,
        );
        await sleep(ASK_IVSHI_RETRY_BACKOFF_MS[attempt] ?? 2_000);
      }
    }

    throw new AskIvshiEngineError("openai_error", FRIENDLY_ERROR);
  } catch (error) {
    if (error instanceof AskIvshiEngineError) {
      throw error;
    }

    if (error instanceof DOMException && error.name === "TimeoutError") {
      console.error("[ask-ivshi] Gemini request timed out.");
      throw new AskIvshiEngineError("timeout", FRIENDLY_ERROR);
    }

    if (error instanceof ApiError) {
      console.error(
        `[ask-ivshi] Gemini API error status=${String(error.status)}`,
      );
      throw new AskIvshiEngineError("openai_error", FRIENDLY_ERROR);
    }

    console.error("[ask-ivshi] Unexpected Gemini failure.");
    throw new AskIvshiEngineError("openai_error", FRIENDLY_ERROR);
  }
}

export { AskIvshiEngineError };
