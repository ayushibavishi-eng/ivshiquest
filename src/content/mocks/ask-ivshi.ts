import type {
  AskChallenge,
  AskCompanionContext,
  AskIvshiReply,
  AskResponseChoice,
  AskSuggestedPrompt,
} from "@/domain/ask-ivshi";

export const MOCK_ASK_CONTEXT: AskCompanionContext = {
  topicTitle: "Equivalent Fractions",
};

export const MOCK_SUGGESTED_PROMPTS: AskSuggestedPrompt[] = [
  {
    id: "fractions",
    emoji: "💡",
    text: "I don't understand fractions.",
  },
  {
    id: "sky",
    emoji: "🌌",
    text: "Why is the sky blue?",
  },
  {
    id: "harder",
    emoji: "🧩",
    text: "Give me a harder question.",
  },
  {
    id: "story",
    emoji: "📖",
    text: "Explain this like a story.",
  },
];

const FRACTION_CHOICES: AskResponseChoice[] = [
  { id: "fractions-story", label: "📖 Explain it as a story" },
  { id: "fractions-example", label: "🎨 Show me an example" },
  { id: "fractions-hint", label: "💡 Give me a hint" },
  { id: "fractions-harder", label: "🚀 Give me a harder one" },
];

const SKY_CHOICES: AskResponseChoice[] = [
  { id: "sky-example", label: "🌈 Show me with an example" },
  { id: "sky-science", label: "🔬 Tell me the science" },
  { id: "sky-wonder", label: "🤔 Give me a related wonder" },
];

const SEASON_CHOICES: AskResponseChoice[] = [
  { id: "seasons-example", label: "☀️ Show me with an example" },
  { id: "seasons-tilt", label: "🌍 Explain Earth's tilt" },
  { id: "seasons-question", label: "🧠 Give me a quick question" },
];

export const HARDER_FRACTIONS_CHALLENGE: AskChallenge = {
  id: "eq-harder-20",
  prompt:
    "If 3/4 = 12/16, what would the numerator be if the denominator were 20?",
  choices: [
    { id: "harder-a", letter: "A", text: "12" },
    { id: "harder-b", letter: "B", text: "15" },
    { id: "harder-c", letter: "C", text: "16" },
  ],
  correctChoiceId: "harder-b",
  explanation:
    "3/4 is the same amount as 15/20. The denominator went from 4 to 20 by multiplying by 5, so the numerator does the same: 3 × 5 = 15.",
  hint: "3/4 became 12/16 when both numbers were multiplied by 4. What do you multiply 4 by to get 20?",
};

export const SEASONS_CHALLENGE: AskChallenge = {
  id: "seasons-quick-question",
  prompt: "What mainly causes seasons on Earth?",
  choices: [
    { id: "seasons-q-a", letter: "A", text: "Earth is closer to the Sun in summer" },
    { id: "seasons-q-b", letter: "B", text: "Earth's tilt as it travels around the Sun" },
    { id: "seasons-q-c", letter: "C", text: "The Moon blocking sunlight" },
  ],
  correctChoiceId: "seasons-q-b",
  explanation:
    "Earth stays about the same distance from the Sun all year. Seasons happen because Earth is tilted as it travels around the Sun, so different places take turns getting more direct sunlight.",
  hint: "Think of a flashlight shining on a slightly tipped ball. Distance to the Sun is not the main reason.",
};

export const EQUIVALENT_FRACTIONS_STORY = `Maya had one cake to share with a friend. She cut it into 2 equal pieces, so each of them got 1/2.

Then two more friends arrived. Maya imagined the same whole cake cut into 4 equal pieces instead. To keep each original share the same amount, she gave two of those smaller pieces to each of the first two friends.

Two small pieces were the same as one big half. Equivalent fractions work like that: the pieces can look different, but the amount stays the same.`;

export const MOCK_ASK_REPLIES: Record<string, AskIvshiReply> = {
  fractions: {
    text: `That's okay. Let's look at fractions a different way.

Imagine you have one chocolate bar and split it into 2 equal pieces. Each piece is 1/2.

If we split the same whole into 4 equal pieces, 2 pieces make the same amount.

So 1/2 = 2/4.

How would you like to explore it?`,
    choices: FRACTION_CHOICES,
  },
  sky: {
    text: `Sunlight looks white, but it is actually made of many colours.

When sunlight travels through Earth's atmosphere, tiny particles scatter the blue light more strongly than many of the other colours.

That's why the sky looks blue to us.

Want to go one step deeper?`,
    choices: SKY_CHOICES,
  },
  seasons: {
    text: `Earth is always moving in two important ways: it spins on its axis and travels around the Sun. Earth is also tilted slightly.

As Earth travels around the Sun, different parts of Earth tilt toward or away from the Sun.

When a place tilts toward the Sun, it gets more direct sunlight and longer days, so it is warmer. When it tilts away, it gets less direct sunlight and shorter days, so it is cooler.

That is why we have seasons.`,
    choices: SEASON_CHOICES,
  },
  harder: {
    text: `Here's a harder look at equivalent fractions.

If 3/4 = 12/16, what would the numerator be if the denominator were 20?

A. 12
B. 15
C. 16`,
    choices: [{ id: "try-harder", label: "Let me try →" }],
  },
  story: {
    text: EQUIVALENT_FRACTIONS_STORY,
    choices: [
      { id: "fractions-example", label: "🎨 Show me an example" },
      { id: "fractions-harder", label: "🚀 Give me a harder one" },
    ],
  },
  help: {
    text: `I can look at something you're learning, try a harder question, or explain an idea another way.

What would help right now?`,
    choices: MOCK_SUGGESTED_PROMPTS.map((prompt) => ({
      id: prompt.id,
      label: `${prompt.emoji} ${prompt.text}`,
    })),
  },
  "encourage-reasoning": {
    text: `I can help you think it through rather than handing you the last step.

What part of it feels unclear so far?`,
    choices: FRACTION_CHOICES,
  },
  unknown: {
    text: `That's an interesting question! I'm still learning how to answer that one in this version.

Try asking me about something you're learning, or choose one of the ideas above.`,
    choices: MOCK_SUGGESTED_PROMPTS.map((prompt) => ({
      id: prompt.id,
      label: `${prompt.emoji} ${prompt.text}`,
    })),
  },
  "fractions-story": {
    text: EQUIVALENT_FRACTIONS_STORY,
    choices: [
      { id: "fractions-example", label: "🎨 Show me an example" },
      { id: "fractions-hint", label: "💡 Give me a hint" },
      { id: "fractions-harder", label: "🚀 Give me a harder one" },
    ],
  },
  "fractions-example": {
    text: `Draw a rectangle. Shade 1 of 2 equal parts. That shaded amount is 1/2.

Now draw the same rectangle with 4 equal parts and shade 2 of them.

The shaded space matches. Different pieces, same amount — that's 1/2 = 2/4.`,
    choices: [
      { id: "fractions-story", label: "📖 Explain it as a story" },
      { id: "fractions-hint", label: "💡 Give me a hint" },
      { id: "fractions-harder", label: "🚀 Give me a harder one" },
    ],
  },
  "fractions-hint": {
    text: `Here's a hint to sit with, not the whole answer.

Equivalent fractions name the same amount with different-sized pieces.

Try multiplying the top and the bottom by the same number, then see if the amount still feels the same.`,
    choices: [
      { id: "fractions-example", label: "🎨 Show me an example" },
      { id: "fractions-story", label: "📖 Explain it as a story" },
      { id: "fractions-harder", label: "🚀 Give me a harder one" },
    ],
  },
  "sky-example": {
    text: `Think of a flashlight shining through mist. The mist bounces the light around, so it doesn't travel in one straight beam.

Earth's air does something like that to sunlight. Blue light gets bounced around more, so it reaches your eyes from all over the sky.`,
    choices: [
      { id: "sky-science", label: "🔬 Tell me the science" },
      { id: "sky-wonder", label: "🤔 Give me a related wonder" },
    ],
  },
  "sky-science": {
    text: `Sunlight is made of many colours of light. Those colours are waves of different lengths.

The bits of air are much smaller than those waves. Shorter blue waves get scattered more than longer red ones, so blue light arrives at your eyes from many directions.

That's a first look at why the daytime sky looks blue.`,
    choices: [
      { id: "sky-example", label: "🌈 Show me with an example" },
      { id: "sky-wonder", label: "🤔 Give me a related wonder" },
    ],
  },
  "sky-wonder": {
    text: `Here's a related wonder: if blue light scatters more easily, why do sunsets look orange and red?

Take a guess. Notice how sunlight travels farther through the air at the end of the day.`,
    choices: [
      { id: "sky-example", label: "🌈 Show me with an example" },
      { id: "sky-science", label: "🔬 Tell me the science" },
    ],
  },
  "try-harder": {
    text: `Take your time. Choose the numerator that keeps the same amount.`,
    challenge: HARDER_FRACTIONS_CHALLENGE,
  },
  "seasons-example": {
    text: `Think of a flashlight shining on a ball. If you tilt the ball, one half gets a more direct beam and the other half gets a slanted, weaker beam.

Earth is like that tilted ball. The half leaning toward the Sun has summer. The half leaning away has winter.`,
    choices: [
      { id: "seasons-tilt", label: "🌍 Explain Earth's tilt" },
      { id: "seasons-question", label: "🧠 Give me a quick question" },
    ],
  },
  "seasons-tilt": {
    text: `Earth's axis is the imaginary line it spins around, from the North Pole to the South Pole.

That line is not straight up and down. It leans a little, like a spinning top that is slightly tipped.

Because of that lean, the Northern Hemisphere and the Southern Hemisphere take turns leaning toward the Sun as Earth travels around it.`,
    choices: [
      { id: "seasons-example", label: "☀️ Show me with an example" },
      { id: "seasons-question", label: "🧠 Give me a quick question" },
    ],
  },
  "seasons-question": {
    text: `Take your time. Choose the idea that best explains seasons.`,
    challenge: SEASONS_CHALLENGE,
  },
};

export const MOCK_ASK_REPLIES_WITH_ALIASES: Record<string, AskIvshiReply> = {
  ...MOCK_ASK_REPLIES,
  "fractions-harder": MOCK_ASK_REPLIES.harder,
};
