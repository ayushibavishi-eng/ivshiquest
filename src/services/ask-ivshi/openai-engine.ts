import OpenAI, {
  APIConnectionTimeoutError,
  APIError,
  APIUserAbortError,
} from "openai";
import type { AskIvshiRequest, AskIvshiResponse } from "@/domain/ask-ivshi";
import {
  ASK_IVSHI_TIMEOUT_MS,
  AskIvshiEngineError,
  FRIENDLY_ERROR,
  buildInstructions,
  parseModelOutput,
  toGeminiContents,
} from "@/services/ask-ivshi/engine-shared";

export const ASK_IVSHI_OPENAI_MODEL = "gpt-5.6-luna";

function readApiKey(): string {
  const apiKey = process.env.OPENAI_API_KEY?.trim();

  if (!apiKey) {
    const developerMessage =
      "OPENAI_API_KEY is missing on the server. Add it to the server environment. Never use NEXT_PUBLIC_OPENAI_API_KEY.";
    console.error(`[ask-ivshi] ${developerMessage}`);
    throw new AskIvshiEngineError(
      "missing_api_key",
      FRIENDLY_ERROR,
      developerMessage,
    );
  }

  return apiKey;
}

/**
 * OpenAI engine kept for a later switch-back.
 * The live Ask Ivshi route currently uses Gemini.
 */
export async function createOpenAiAskIvshiReply(
  input: AskIvshiRequest,
): Promise<AskIvshiResponse> {
  const apiKey = readApiKey();
  const client = new OpenAI({
    apiKey,
    timeout: ASK_IVSHI_TIMEOUT_MS,
    maxRetries: 0,
  });

  try {
    const turns = toGeminiContents(input.history, input.message);
    const response = await client.responses.create(
      {
        model: ASK_IVSHI_OPENAI_MODEL,
        instructions: buildInstructions(input.context),
        input: turns.map((turn) => ({
          type: "message" as const,
          role: turn.role === "model" ? ("assistant" as const) : ("user" as const),
          content: turn.parts[0]?.text ?? "",
        })),
        max_output_tokens: 700,
        store: false,
      },
      { timeout: ASK_IVSHI_TIMEOUT_MS },
    );

    return parseModelOutput(response.output_text);
  } catch (error) {
    if (error instanceof AskIvshiEngineError) {
      throw error;
    }

    if (
      error instanceof APIConnectionTimeoutError ||
      error instanceof APIUserAbortError
    ) {
      console.error("[ask-ivshi] OpenAI request timed out.");
      throw new AskIvshiEngineError("timeout", FRIENDLY_ERROR);
    }

    if (error instanceof APIError) {
      console.error(
        `[ask-ivshi] OpenAI API error status=${String(error.status)} type=${error.name}`,
      );
      throw new AskIvshiEngineError("openai_error", FRIENDLY_ERROR);
    }

    console.error("[ask-ivshi] Unexpected OpenAI failure.");
    throw new AskIvshiEngineError("openai_error", FRIENDLY_ERROR);
  }
}

export { AskIvshiEngineError, parseModelOutput };
