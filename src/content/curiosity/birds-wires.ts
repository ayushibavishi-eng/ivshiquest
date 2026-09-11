import type { DiscoveryContent } from "@/domain/discovery";

const GRADE_4_5_EXPLAIN = {
  heading: "Here's what's happening",
  main: "Electricity likes to travel along a path. The bird is sitting on one wire, so the electricity keeps going along that wire instead of through the bird.",
  simpleHeading: "In simple words",
  simple:
    "The electricity has an easier path along the wire, so it doesn't need to travel through the bird.",
};

export const BIRDS_ON_WIRES_DISCOVERY: DiscoveryContent = {
  id: "discovery-birds-wires",
  subject: "science",
  subjectLabel: "Science",
  topic: "Electricity & Circuits",
  category: "everyday-physics",
  tags: ["electricity", "circuits", "birds", "current"],
  difficulty: "core",
  conceptId: "electricity-circuits",
  relatedConceptIds: ["science-electricity-middle"],
  curriculumLinked: true,
  trackIndex: 0,
  gradeRange: [4, 5, 6, 7, 8],
  durationMinutes: 3,
  question:
    "Why don't birds get electrocuted when they sit on electric wires?",
  wonderPrompt: "What do you think?",
  predictionChoices: [
    {
      id: "feathers",
      letter: "A",
      text: "Because birds have special feathers",
    },
    {
      id: "flow",
      letter: "B",
      text: "Because electricity doesn't flow through them that way",
    },
    {
      id: "light",
      letter: "C",
      text: "Because birds are too light",
    },
  ],
  predictResponse: "Interesting guess. Let's investigate.",
  predictEncouragement: "Making a guess is part of learning.",
  exploration: {
    prompt: "Tap the wire to explore",
    lookPrompt: "Watch where the electricity prefers to travel.",
    captionAfterReveal:
      "The current stays along the wire. It isn't crossing through the bird.",
    visual: "wires",
  },
  explanations: {
    default: {
      heading: "Here's what's happening",
      main: "Electricity needs a path to travel. When the bird sits on just one wire, there isn't a significant difference in electrical potential across its body, so current doesn't normally pass through the bird.",
      simpleHeading: "In simple words",
      simple:
        "The electricity has an easier path along the wire, so it doesn't need to travel through the bird.",
    },
    4: GRADE_4_5_EXPLAIN,
    5: GRADE_4_5_EXPLAIN,
    6: {
      heading: "Here's what's happening",
      main: "Electricity needs a path to travel. When the bird sits on just one wire, there isn't a significant difference in electrical potential across its body, so current doesn't normally pass through the bird.",
      simpleHeading: "In simple words",
      simple:
        "The electricity has an easier path along the wire, so it doesn't need to travel through the bird.",
    },
    7: {
      heading: "Here's what's happening",
      main: "Current flows when there is a difference in electrical potential. Both of the bird's feet are on the same wire, so they are at nearly the same voltage. With almost no potential difference across its body, current does not take a path through the bird.",
      simpleHeading: "In simple words",
      simple:
        "The electricity has an easier path along the wire, so it doesn't need to travel through the bird.",
    },
    8: {
      heading: "Here's what's happening",
      main: "Current flows when there is a difference in electrical potential. Both of the bird's feet are on the same wire, so they are at nearly the same voltage. With almost no potential difference across its body, current does not take a path through the bird.",
      simpleHeading: "In simple words",
      simple:
        "The electricity has an easier path along the wire, so it doesn't need to travel through the bird.",
    },
  },
  retrieval: {
    question:
      "What would happen if the bird touched TWO wires at the same time?",
    choices: [
      {
        id: "nothing",
        letter: "A",
        text: "Nothing would change",
      },
      {
        id: "through-bird",
        letter: "B",
        text: "Electricity could pass through the bird",
      },
      {
        id: "wires-stop",
        letter: "C",
        text: "The wires would stop working",
      },
    ],
    correctChoiceId: "through-bird",
    correctFeedback: "You figured it out!",
    incorrectFeedback:
      "Think about what happens when electricity has a difference in electrical potential to travel across.",
    hint: "Current needs a path between two different potentials. One wire is usually not enough for that path through the bird.",
  },
  connection: {
    heading: "Where you'll see this in real life",
    hook: "Ever wondered why electricians need special protective equipment?",
    explanation:
      "People can complete a path between a live wire and the ground — or between two different wires. Insulated gloves, tools, and boots help stop current from traveling through the body.",
  },
  discoverMore: {
    prompt: "Want to go one step further?",
    question:
      "Why can birds sit on power lines while people need special protection?",
  },
  completion: {
    title: "Discovery complete",
    summary: "Ivshi helped you explore Electricity & Circuits.",
    treeMessage: "Your Knowledge Tree is growing.",
  },
};
