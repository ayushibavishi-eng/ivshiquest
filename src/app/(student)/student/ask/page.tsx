import type { Metadata } from "next";
import { AskIvshiExperience } from "@/features/ask-ivshi";
import { getAskContext, getSuggestedPrompts } from "@/services/ask-ivshi";

export const metadata: Metadata = {
  title: "Ask Ivshi",
};

export default async function AskIvshiPage() {
  const [context, prompts] = await Promise.all([
    getAskContext(),
    getSuggestedPrompts(),
  ]);

  return <AskIvshiExperience context={context} prompts={prompts} />;
}
