import { cache } from "react";
import { MOCK_ASK_CONTEXT } from "@/content/mocks/ask-ivshi";

export const getAskContext = cache(async () => MOCK_ASK_CONTEXT);
