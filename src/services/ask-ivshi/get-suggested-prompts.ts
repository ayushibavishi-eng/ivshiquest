import { cache } from "react";
import { MOCK_SUGGESTED_PROMPTS } from "@/content/mocks/ask-ivshi";

export const getSuggestedPrompts = cache(async () => MOCK_SUGGESTED_PROMPTS);
