export type AskMessageRole = "user" | "ivshi";

export type AskResponseChoice = {
  id: string;
  label: string;
};

export type AskChallengeChoice = {
  id: string;
  letter: string;
  text: string;
};

export type AskChallenge = {
  id: string;
  prompt: string;
  choices: AskChallengeChoice[];
  correctChoiceId: string;
  explanation: string;
  hint: string;
};

export type AskSuggestedPrompt = {
  id: string;
  emoji: string;
  text: string;
};

export type AskCompanionContext = {
  topicTitle: string;
};

export type AskMessage = {
  id: string;
  role: AskMessageRole;
  text: string;
  choices?: AskResponseChoice[];
  challenge?: AskChallenge;
};

export type AskRespondInput = {
  text: string;
  choiceId?: string;
  history: AskMessage[];
  context: AskCompanionContext;
};

export type AskIvshiReply = {
  text: string;
  choices?: AskResponseChoice[];
  challenge?: AskChallenge;
};

/**
 * Companion reply port. Swap the mock engine for a real AI service later
 * without changing the conversation UI.
 */
export type AskIvshiEngine = {
  respond: (input: AskRespondInput) => Promise<AskIvshiReply>;
};
