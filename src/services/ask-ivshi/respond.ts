import { mockAskIvshiEngine } from "@/services/ask-ivshi/mock-engine";
import type { AskIvshiReply, AskRespondInput } from "@/domain/ask-ivshi";

export async function respondToAsk(
  input: AskRespondInput,
): Promise<AskIvshiReply> {
  return mockAskIvshiEngine.respond(input);
}
