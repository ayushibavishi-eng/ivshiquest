import type { AskIvshiErrorBody, AskIvshiErrorCode } from "@/domain/ask-ivshi";
import {
  AskIvshiEngineError,
  createAskIvshiReply,
} from "@/services/ask-ivshi/gemini-engine";
import { getAskContext } from "@/services/ask-ivshi/get-ask-context";
import { parseAskIvshiRequest } from "@/services/ask-ivshi/parse-request";

export const runtime = "nodejs";
export const maxDuration = 30;

const FRIENDLY_ERROR =
  "I'm having a little trouble thinking right now. Please try again.";

function errorResponse(
  status: number,
  code: AskIvshiErrorCode,
  developerMessage?: string,
) {
  const isDev = process.env.NODE_ENV === "development";
  const body: { error: AskIvshiErrorBody } = {
    error: {
      code,
      message: FRIENDLY_ERROR,
      ...(isDev && developerMessage ? { developerMessage } : {}),
    },
  };

  return Response.json(body, { status });
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return errorResponse(
      400,
      "invalid_request",
      "Ask Ivshi expected a JSON body.",
    );
  }

  const parsed = parseAskIvshiRequest(payload);

  if (!parsed.ok) {
    if (parsed.reason === "empty_message") {
      return errorResponse(
        400,
        "empty_message",
        "The message field was empty.",
      );
    }

    return errorResponse(
      400,
      "invalid_request",
      "The Ask Ivshi request body was invalid.",
    );
  }

  try {
    const serverContext = await getAskContext();
    const reply = await createAskIvshiReply({
      ...parsed.request,
      context: {
        ...parsed.request.context,
        grade: serverContext.grade ?? parsed.request.context.grade,
        currentSubject:
          serverContext.currentSubject ?? parsed.request.context.currentSubject,
        currentTopic:
          serverContext.currentTopic ?? parsed.request.context.currentTopic,
        lesson: serverContext.lesson ?? parsed.request.context.lesson,
      },
    });
    return Response.json(reply);
  } catch (error) {
    if (error instanceof AskIvshiEngineError) {
      const status =
        error.code === "missing_api_key"
          ? 503
          : error.code === "timeout"
            ? 504
            : 502;

      return errorResponse(status, error.code, error.developerMessage);
    }

    console.error("[ask-ivshi] Unexpected route failure.");
    return errorResponse(502, "openai_error");
  }
}
