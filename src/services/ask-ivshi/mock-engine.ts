import { MOCK_ASK_REPLIES_WITH_ALIASES } from "@/content/mocks/ask-ivshi";
import type {
  AskIvshiEngine,
  AskIvshiReply,
  AskRespondInput,
} from "@/domain/ask-ivshi";

function normalize(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "'")
    .replace(/[^\p{L}\p{N}\s']/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const EXACT_FREE_TEXT_INTENTS: Record<string, string> = {
  "why do we have seasons": "seasons",
  "why is the sky blue": "sky",
  "i don't understand fractions": "fractions",
  "give me a harder question": "harder",
  "explain this like a story": "story",
};

function matchIntent(text: string, choiceId?: string): string {
  if (choiceId && MOCK_ASK_REPLIES_WITH_ALIASES[choiceId]) {
    return choiceId;
  }

  const value = normalize(text);
  const exact = EXACT_FREE_TEXT_INTENTS[value];

  if (exact) {
    return exact;
  }

  if (
    /(just tell me|give me the answer|what's the answer|whats the answer|solve this)/.test(
      value,
    )
  ) {
    return "encourage-reasoning";
  }

  if (/\bseasons?\b/.test(value)) {
    return "seasons";
  }

  if (/\bfractions?\b/.test(value)) {
    return "fractions";
  }

  if (/\bsky\b/.test(value) || /\bblue\b/.test(value)) {
    return "sky";
  }

  if (/\bharder\b/.test(value)) {
    return "harder";
  }

  if (/\bstory\b/.test(value)) {
    return "story";
  }

  if (/\bhelp\b/.test(value)) {
    return "help";
  }

  return "unknown";
}

export const mockAskIvshiEngine: AskIvshiEngine = {
  async respond(input: AskRespondInput): Promise<AskIvshiReply> {
    const intent = matchIntent(input.text, input.choiceId);
    const reply = MOCK_ASK_REPLIES_WITH_ALIASES[intent];

    if (!reply) {
      return MOCK_ASK_REPLIES_WITH_ALIASES.unknown;
    }

    return reply;
  },
};
