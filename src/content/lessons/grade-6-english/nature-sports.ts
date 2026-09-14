import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade6EnglishLesson } from "@/content/lessons/grade-6-english/format";

export const neemBabaLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-neem-baba",
  title: "Neem Baba",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-the-chair"],
  nextConceptIds: ["ncert-g6-poorvi-what-a-bird-thought"],
  coveredSkillIds: [
    "ncert-g6-poorvi-neem-baba-sk-1-name-a-neem-use",
    "ncert-g6-poorvi-neem-baba-sk-2-show-respect-for-a-tree",
  ],
  content: {
    objective: "Name a use of the neem tree from the text and show respect for trees as living helpers.",
    wonder: {
      prompt: "Which everyday tree near you feels like a helper? What gifts does it offer?",
    },
    explore: {
      text: "Nature texts teach care through facts and feeling. Naming a neem use is knowledge. Respect is an attitude shown in words and choices.",
      activity: {
        prompt: "What should readers take from Neem Baba?",
        choices: [
          {
            id: "use-respect",
            label: "A real use of neem plus respect for the living tree",
            note: "Knowledge and respect travel together.",
          },
          {
            id: "cut",
            label: "Cut every neem for fun because trees do not matter",
            note: "The text invites care, not harm.",
          },
          {
            id: "ignore-use",
            label: "Ignore uses and treat the text as only a fantasy name",
            note: "Neem Baba shares real gifts of the tree.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Neem Baba introduces the neem tree as a living helper in Indian life.",
        "Naming a use means picking a gift the text shares — medicine, shade, care for soil, or home knowledge.",
        "Respect for a tree is shown in how we speak and act toward living nature.",
        "The text links knowledge to gratitude, not only to lists.",
        "When you show respect, you treat the tree as more than furniture for the sky.",
      ],
    },
    examples: [
      {
        caption: "Use example",
        body: "Neem leaves or oil used for care is a concrete gift from the text.",
      },
      {
        caption: "Respect line",
        body: "Speaking of the tree as a helper shows care beyond chopping talk.",
      },
      {
        caption: "Home link",
        body: "Many families already know a neem habit — connect text to life.",
      },
    ],
    connection: "School gardens, street trees, and kitchen remedies all invite the same respect.",
    try: {
      prompt: "Name one neem use from the text. Then write one respectful sentence about a tree you know.",
      reveal: "Use: a gift named in the chapter. Respect: gratitude without harm.",
    },
    practice: [
      q(
        "g6en-nb-p1",
        "Which line best matches name a neem use?",
        "The neem tree is a living helper whose gifts deserve respect",
        "Trees are only decoration and never help people",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: The neem tree is a living helper whose gifts deserve respect",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-nb-p2",
        "What best supports show respect for a tree?",
        "A healing or practical use of neem named in the text",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — A healing or practical use of neem named in the text — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-nb-p3",
        "Which move shows careful Grade 6 reading?",
        "Retell key events or images in order, then name the idea they build",
        "Copy one fancy word and stop thinking",
        "Change the ending so the characters never struggle",
        "a",
        "Careful reading keeps order and then states the idea the details build.",
        "Order first, then idea.",
        "Fancy words alone or erased struggle do not equal understanding.",
        {
          a: "You linked order to meaning.",
          b: "One word is not a full reading.",
          c: "Struggle often carries the lesson.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g6en-nb-r1",
        "In your own words, explain why this idea matters in the text: The neem tree is a living helper whose gifts deserve respect",
        "The text points toward The neem tree is a living helper whose gifts deserve respect. Details such as A healing or practical use of neem named in the text help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["the neem tree is", "detail", "idea"],
      ),
      q(
        "g6en-nb-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: A healing or practical use of neem named in the text",
        "Agree quickly so the discussion ends",
        "Say the text has no meaning at all",
        "a",
        "Reasoning returns to evidence instead of shutting down thinking.",
        "Evidence beats a rushed agreement.",
        "Ending talk early or denying meaning skips reasoning.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Texts carry ideas worth naming.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6en-nb-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "The neem tree is a living helper whose gifts deserve respect",
        "Trees are only decoration and never help people",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: The neem tree is a living helper whose gifts deserve respect",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-nb-t2",
        "Write one or two sentences that name a neem use and a respect idea.",
        ["The neem tree is a living helper whose gifts deserve respect", "A healing or practical use of neem named in the text", "name a neem"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-nb-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The chapter’s idea is that The neem tree is a living helper whose gifts deserve respect. One proof is A healing or practical use of neem named in the text. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Listing uses while joking about destroying trees",
        correction: "Pair every use with care for the living tree.",
      },
      {
        idea: "Inventing uses the text never suggests",
        correction: "Stay with gifts the chapter actually shares.",
      },
    ],
    reflect: {
      prompt: "How can you show respect for a tree this week in a small real action?",
      keyIdeas: ["respect", "tree", "action"],
    },
    teach: {
      prompt: "Teach one neem use and why respect for trees matters.",
      keyIdeas: ["neem use", "respect", "living helper"],
    },
    masteryCriteria: "You can name a neem use from the text and show respect for trees as living helpers.",
  },
});

export const whatABirdThoughtLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-what-a-bird-thought",
  title: "What a Bird Thought",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-neem-baba"],
  nextConceptIds: ["ncert-g6-poorvi-spices-that-heal-us"],
  coveredSkillIds: [
    "ncert-g6-poorvi-what-a-bird-thought-sk-1-find-an-image",
    "ncert-g6-poorvi-what-a-bird-thought-sk-2-describe-the-change-in-view",
  ],
  content: {
    objective: "Find a vivid image in the poem and describe how the bird’s view of the world changes.",
    wonder: {
      prompt: "Have you ever thought your world was small — then discovered it was larger? What changed your view?",
    },
    explore: {
      text: "Poems often grow through images. Finding an image means spotting a picture made of words. A change in view is how understanding widens.",
      activity: {
        prompt: "What should readers track in What a Bird Thought?",
        choices: [
          {
            id: "view",
            label: "Images that show the bird’s world growing larger",
            note: "Image plus change of view is the skill pair.",
          },
          {
            id: "facts-only",
            label: "Only bird-biology facts with no images",
            note: "This is a poem of seeing, not a science report alone.",
          },
          {
            id: "shrink",
            label: "Assume the bird’s world never changes at all",
            note: "The poem follows a widening sense of the world.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "What a Bird Thought follows a bird’s widening sense of the world.",
        "An image is a picture in words — nest, sky, tree, or farther land.",
        "The change in view moves from a small known space toward a larger world.",
        "Describing that change means saying what the bird first thought, then what it came to see.",
        "Curiosity and growth sit inside the poem’s images.",
      ],
    },
    examples: [
      {
        caption: "Image find",
        body: "A nest, a branch, or the open sky can be the picture you name.",
      },
      {
        caption: "View shift",
        body: "From ‘this is all’ to ‘there is more’ is the change to describe.",
      },
      {
        caption: "Feeling link",
        body: "Wonder grows as the bird’s map of the world expands.",
      },
    ],
    connection: "Starting a new school, city, or book can widen a view the same way.",
    try: {
      prompt: "Name one image from the poem. Then write two lines: first view → later view.",
      reveal: "Image: a clear picture. Change: smaller world → larger world.",
    },
    practice: [
      q(
        "g6en-wb-p1",
        "Which line best matches find an image?",
        "The bird’s sense of the world grows from small to larger",
        "The bird’s view never changes from beginning to end",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: The bird’s sense of the world grows from small to larger",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-wb-p2",
        "What best supports describe the change in view?",
        "An image of nest, sky, or farther world in the poem",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — An image of nest, sky, or farther world in the poem — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-wb-p3",
        "Which move shows careful Grade 6 reading?",
        "Retell key events or images in order, then name the idea they build",
        "Copy one fancy word and stop thinking",
        "Change the ending so the characters never struggle",
        "a",
        "Careful reading keeps order and then states the idea the details build.",
        "Order first, then idea.",
        "Fancy words alone or erased struggle do not equal understanding.",
        {
          a: "You linked order to meaning.",
          b: "One word is not a full reading.",
          c: "Struggle often carries the lesson.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g6en-wb-r1",
        "In your own words, explain why this idea matters in the text: The bird’s sense of the world grows from small to larger",
        "The text points toward The bird’s sense of the world grows from small to larger. Details such as An image of nest, sky, or farther world in the poem help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["the bird’s sense of", "detail", "idea"],
      ),
      q(
        "g6en-wb-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: An image of nest, sky, or farther world in the poem",
        "Agree quickly so the discussion ends",
        "Say the text has no meaning at all",
        "a",
        "Reasoning returns to evidence instead of shutting down thinking.",
        "Evidence beats a rushed agreement.",
        "Ending talk early or denying meaning skips reasoning.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Texts carry ideas worth naming.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6en-wb-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "The bird’s sense of the world grows from small to larger",
        "The bird’s view never changes from beginning to end",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: The bird’s sense of the world grows from small to larger",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-wb-t2",
        "Write one or two sentences that describe how the bird’s view changes.",
        ["The bird’s sense of the world grows from small to larger", "An image of nest, sky, or farther world in the poem", "describe how the"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-wb-m1",
        "Teach a younger reader what this poem or text is really saying. Use the idea and one image or line feeling.",
        "The chapter’s idea is that The bird’s sense of the world grows from small to larger. One proof is An image of nest, sky, or farther world in the poem. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Naming a feeling with no image",
        correction: "Point to a picture the words paint.",
      },
      {
        idea: "Saying the view changes without saying how",
        correction: "Compare before and after.",
      },
    ],
    reflect: {
      prompt: "When did your own view of a place grow larger? What image marks that change?",
      keyIdeas: ["view", "grow", "image"],
    },
    teach: {
      prompt: "Teach the poem’s change in view using one strong image.",
      keyIdeas: ["image", "small to large", "view"],
    },
    masteryCriteria: "You can find an image and describe how the bird’s view of the world changes.",
  },
});

export const spicesThatHealUsLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-spices-that-heal-us",
  title: "Spices that Heal Us",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-what-a-bird-thought"],
  nextConceptIds: ["ncert-g6-poorvi-change-of-heart"],
  coveredSkillIds: [
    "ncert-g6-poorvi-spices-that-heal-us-sk-1-name-a-healing-spice",
    "ncert-g6-poorvi-spices-that-heal-us-sk-2-connect-to-home-use",
  ],
  content: {
    objective: "Name a healing spice from the text and connect it to a home use you know or learn.",
    wonder: {
      prompt: "Which kitchen spice in your home is also used for care? What story does your family tell about it?",
    },
    explore: {
      text: "This text links kitchen knowledge to healing care. Naming a spice is recall. Connecting to home use makes learning personal and useful.",
      activity: {
        prompt: "What should readers do with Spices that Heal Us?",
        choices: [
          {
            id: "name-link",
            label: "Name a healing spice and link it to a real home use",
            note: "Text knowledge meets family knowledge.",
          },
          {
            id: "taste-only",
            label: "Treat spices as only flavour with no care ideas",
            note: "The chapter also talks about healing care.",
          },
          {
            id: "unsafe",
            label: "Try any wild amount of spice as medicine without guidance",
            note: "Home knowledge is careful, not reckless.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Spices that Heal Us links everyday spices to care and Indian knowledge.",
        "Naming a healing spice means choosing one the text highlights.",
        "Connecting to home use means recalling how families use that spice carefully.",
        "The text values lived knowledge — kitchens as places of care.",
        "Respect and caution belong with curiosity: learn, ask elders, stay safe.",
      ],
    },
    examples: [
      {
        caption: "Spice name",
        body: "Turmeric, ginger, or another spice named in the chapter.",
      },
      {
        caption: "Home link",
        body: "A warm drink, a paste, or a cooking habit used for comfort.",
      },
      {
        caption: "Care note",
        body: "Home remedies are shared knowledge — ask before experimenting.",
      },
    ],
    connection: "Grandparents’ kitchen tips and school health talks can meet in this chapter.",
    try: {
      prompt: "Name one healing spice from the text. Then write how it connects to a home use.",
      reveal: "Spice + careful home use = the chapter’s bridge.",
    },
    practice: [
      q(
        "g6en-sp-p1",
        "Which line best matches name a healing spice?",
        "Everyday spices can be part of careful healing knowledge at home",
        "Spices never connect to care — only to restaurant menus",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: Everyday spices can be part of careful healing knowledge at home",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-sp-p2",
        "What best supports connect to home use?",
        "A spice the text names for healing or care",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — A spice the text names for healing or care — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-sp-p3",
        "Which move shows careful Grade 6 reading?",
        "Retell key events or images in order, then name the idea they build",
        "Copy one fancy word and stop thinking",
        "Change the ending so the characters never struggle",
        "a",
        "Careful reading keeps order and then states the idea the details build.",
        "Order first, then idea.",
        "Fancy words alone or erased struggle do not equal understanding.",
        {
          a: "You linked order to meaning.",
          b: "One word is not a full reading.",
          c: "Struggle often carries the lesson.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g6en-sp-r1",
        "In your own words, explain why this idea matters in the text: Everyday spices can be part of careful healing knowledge at home",
        "The text points toward Everyday spices can be part of careful healing knowledge at home. Details such as A spice the text names for healing or care help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["everyday spices can be", "detail", "idea"],
      ),
      q(
        "g6en-sp-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: A spice the text names for healing or care",
        "Agree quickly so the discussion ends",
        "Say the text has no meaning at all",
        "a",
        "Reasoning returns to evidence instead of shutting down thinking.",
        "Evidence beats a rushed agreement.",
        "Ending talk early or denying meaning skips reasoning.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Texts carry ideas worth naming.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6en-sp-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Everyday spices can be part of careful healing knowledge at home",
        "Spices never connect to care — only to restaurant menus",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Everyday spices can be part of careful healing knowledge at home",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-sp-t2",
        "Write one or two sentences that name a spice and a careful home use.",
        ["Everyday spices can be part of careful healing knowledge at home", "A spice the text names for healing or care", "name a spice"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-sp-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The chapter’s idea is that Everyday spices can be part of careful healing knowledge at home. One proof is A spice the text names for healing or care. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Confusing any strong smell with safe medicine",
        correction: "Stay with uses the text and trusted elders support.",
      },
      {
        idea: "Skipping the home connection",
        correction: "Add one real family or community use.",
      },
    ],
    reflect: {
      prompt: "Which spice story from home will you remember after this chapter?",
      keyIdeas: ["spice", "home", "care"],
    },
    teach: {
      prompt: "Teach one spice’s healing idea and one careful home link.",
      keyIdeas: ["spice", "heal", "home use"],
    },
    masteryCriteria: "You can name a healing spice from the text and connect it to a careful home use.",
  },
});

export const changeOfHeartLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-change-of-heart",
  title: "Change of Heart",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-spices-that-heal-us"],
  nextConceptIds: ["ncert-g6-poorvi-the-winner"],
  coveredSkillIds: [
    "ncert-g6-poorvi-change-of-heart-sk-1-retell-the-turning-point",
    "ncert-g6-poorvi-change-of-heart-sk-2-talk-about-fair-play",
  ],
  content: {
    objective: "Retell the turning point in the sports story and talk about fair play beyond the score.",
    wonder: {
      prompt: "Have you ever changed your mind mid-game about what winning should mean? What shifted?",
    },
    explore: {
      text: "Sports stories often turn on attitude as much as score. A turning point is the moment feeling or choice changes. Fair play is respect in competition.",
      activity: {
        prompt: "What matters most in Change of Heart?",
        choices: [
          {
            id: "turn-fair",
            label: "The turning point in attitude and what fair play looks like",
            note: "Turning point plus fair play is the skill pair.",
          },
          {
            id: "score-only",
            label: "Only the final score, with no feeling or fairness",
            note: "The chapter cares about heart as well as result.",
          },
          {
            id: "cheat",
            label: "Winning by any means, including unfair tricks",
            note: "Fair play rejects empty victory.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Change of Heart is a sports story about attitude as well as the game.",
        "A turning point is the moment a player’s feeling or choice shifts.",
        "Retelling that point means saying what happened just before and after.",
        "Fair play means respect for rules, opponents, and yourself.",
        "When heart changes, the meaning of winning can change too.",
      ],
    },
    examples: [
      {
        caption: "Turning point",
        body: "A moment when anger softens, or respect replaces only-score thinking.",
      },
      {
        caption: "Fair play",
        body: "Honest effort, respect for the other side, and grace in result.",
      },
      {
        caption: "Talk prompt",
        body: "Ask: What would fair look like if the score went either way?",
      },
    ],
    connection: "House matches, video games, and classroom contests all test fair play.",
    try: {
      prompt: "Retell the turning point in three sentences. Then write one line about fair play.",
      reveal: "Before → turn → after. Fair play: respect beyond the score.",
    },
    practice: [
      q(
        "g6en-coh-p1",
        "Which line best matches retell the turning point?",
        "A change of heart can make fair play matter as much as the score",
        "Only the final score matters; attitude never changes",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: A change of heart can make fair play matter as much as the score",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-coh-p2",
        "What best supports talk about fair play?",
        "The moment the player’s attitude toward the game shifts",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — The moment the player’s attitude toward the game shifts — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-coh-p3",
        "Which move shows careful Grade 6 reading?",
        "Retell key events or images in order, then name the idea they build",
        "Copy one fancy word and stop thinking",
        "Change the ending so the characters never struggle",
        "a",
        "Careful reading keeps order and then states the idea the details build.",
        "Order first, then idea.",
        "Fancy words alone or erased struggle do not equal understanding.",
        {
          a: "You linked order to meaning.",
          b: "One word is not a full reading.",
          c: "Struggle often carries the lesson.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g6en-coh-r1",
        "In your own words, explain why this idea matters in the text: A change of heart can make fair play matter as much as the score",
        "The text points toward A change of heart can make fair play matter as much as the score. Details such as The moment the player’s attitude toward the game shifts help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["a change of heart", "detail", "idea"],
      ),
      q(
        "g6en-coh-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: The moment the player’s attitude toward the game shifts",
        "Agree quickly so the discussion ends",
        "Say the text has no meaning at all",
        "a",
        "Reasoning returns to evidence instead of shutting down thinking.",
        "Evidence beats a rushed agreement.",
        "Ending talk early or denying meaning skips reasoning.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Texts carry ideas worth naming.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6en-coh-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "A change of heart can make fair play matter as much as the score",
        "Only the final score matters; attitude never changes",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: A change of heart can make fair play matter as much as the score",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-coh-t2",
        "Write one or two sentences that retell the turning point and fair play.",
        ["A change of heart can make fair play matter as much as the score", "The moment the player’s attitude toward the game shifts", "retell the turning"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-coh-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The chapter’s idea is that A change of heart can make fair play matter as much as the score. One proof is The moment the player’s attitude toward the game shifts. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Calling every mood swing a turning point",
        correction: "A turning point changes choice or understanding.",
      },
      {
        idea: "Fair play means never trying hard",
        correction: "Fair play is honest effort with respect.",
      },
    ],
    reflect: {
      prompt: "When have you needed a change of heart in a game or contest?",
      keyIdeas: ["heart", "fair", "game"],
    },
    teach: {
      prompt: "Teach the turning point and why fair play matters.",
      keyIdeas: ["turning point", "fair play", "respect"],
    },
    masteryCriteria: "You can retell the turning point and talk about fair play beyond the score.",
  },
});

export const theWinnerLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-the-winner",
  title: "The Winner",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-change-of-heart"],
  nextConceptIds: ["ncert-g6-poorvi-yoga-way-of-life"],
  coveredSkillIds: [
    "ncert-g6-poorvi-the-winner-sk-1-find-the-poem-s-idea-of-winn",
    "ncert-g6-poorvi-the-winner-sk-2-read-a-stanza-aloud",
  ],
  content: {
    objective: "Find the poem’s idea of winning and read a stanza aloud with energy and care.",
    wonder: {
      prompt: "Is a winner only the person who finishes first — or can winning mean something deeper?",
    },
    explore: {
      text: "Poems can redefine everyday words. Finding the idea of winning means saying what the poem values. Reading aloud carries that idea in sound.",
      activity: {
        prompt: "What should readers seek in The Winner?",
        choices: [
          {
            id: "idea-voice",
            label: "The poem’s idea of winning, heard clearly in a stanza",
            note: "Idea plus aloud reading is the skill pair.",
          },
          {
            id: "medal-only",
            label: "Only medals, with no thought about effort or spirit",
            note: "The poem looks beyond a simple trophy view.",
          },
          {
            id: "mumble",
            label: "Mumble the lines so the idea never reaches a listener",
            note: "Reading aloud is part of the learning.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The Winner looks at competition through verse.",
        "The poem’s idea of winning may include effort, spirit, or fair striving — not only first place.",
        "Finding that idea means putting it in your own careful words.",
        "Reading a stanza aloud lets rhythm and feeling support the idea.",
        "When idea and voice meet, winning becomes something you can discuss, not only shout.",
      ],
    },
    examples: [
      {
        caption: "Idea of winning",
        body: "Name what the poem values — courage, effort, joy, or fair try.",
      },
      {
        caption: "Aloud tip",
        body: "Let strong verbs land; do not rush past the poem’s heart.",
      },
      {
        caption: "Compare",
        body: "Trophy winning vs poem winning — say the difference.",
      },
    ],
    connection: "Sports days, music exams, and group projects all invite a richer idea of winning.",
    try: {
      prompt: "Write the poem’s idea of winning in one sentence. Read one stanza aloud twice.",
      reveal: "Idea in your words. Aloud: clear, felt, not raced.",
    },
    practice: [
      q(
        "g6en-tw-p1",
        "Which line best matches find the poem’s idea of winning?",
        "Winning in the poem includes effort and spirit, not only first place",
        "Winning means only the trophy and never effort",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: Winning in the poem includes effort and spirit, not only first place",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-tw-p2",
        "What best supports read a stanza aloud?",
        "Lines that value trying, spirit, or fair striving",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — Lines that value trying, spirit, or fair striving — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-tw-p3",
        "Which move shows careful Grade 6 reading?",
        "Retell key events or images in order, then name the idea they build",
        "Copy one fancy word and stop thinking",
        "Change the ending so the characters never struggle",
        "a",
        "Careful reading keeps order and then states the idea the details build.",
        "Order first, then idea.",
        "Fancy words alone or erased struggle do not equal understanding.",
        {
          a: "You linked order to meaning.",
          b: "One word is not a full reading.",
          c: "Struggle often carries the lesson.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g6en-tw-r1",
        "In your own words, explain why this idea matters in the text: Winning in the poem includes effort and spirit, not only first place",
        "The text points toward Winning in the poem includes effort and spirit, not only first place. Details such as Lines that value trying, spirit, or fair striving help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["winning in the poem", "detail", "idea"],
      ),
      q(
        "g6en-tw-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: Lines that value trying, spirit, or fair striving",
        "Agree quickly so the discussion ends",
        "Say the text has no meaning at all",
        "a",
        "Reasoning returns to evidence instead of shutting down thinking.",
        "Evidence beats a rushed agreement.",
        "Ending talk early or denying meaning skips reasoning.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Texts carry ideas worth naming.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6en-tw-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Winning in the poem includes effort and spirit, not only first place",
        "Winning means only the trophy and never effort",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Winning in the poem includes effort and spirit, not only first place",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-tw-t2",
        "Write one or two sentences that state the poem’s idea of winning.",
        ["Winning in the poem includes effort and spirit, not only first place", "Lines that value trying, spirit, or fair striving", "state the poem’s"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-tw-m1",
        "Teach a younger reader what this poem or text is really saying. Use the idea and one image or line feeling.",
        "The chapter’s idea is that Winning in the poem includes effort and spirit, not only first place. One proof is Lines that value trying, spirit, or fair striving. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Forcing the poem to mean only medals",
        correction: "Listen for effort and spirit in the lines.",
      },
      {
        idea: "Reading aloud without understanding",
        correction: "Find the idea first, then voice it.",
      },
    ],
    reflect: {
      prompt: "When have you felt like a winner without finishing first?",
      keyIdeas: ["effort", "spirit", "winner"],
    },
    teach: {
      prompt: "Teach the poem’s idea of winning and demonstrate one stanza aloud.",
      keyIdeas: ["idea of winning", "aloud", "effort"],
    },
    masteryCriteria: "You can state the poem’s idea of winning and read a stanza aloud with care.",
  },
});

export const yogaWayOfLifeLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-yoga-way-of-life",
  title: "Yoga—A Way of Life",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-the-winner"],
  nextConceptIds: ["ncert-g6-poorvi-hamara-bharat"],
  coveredSkillIds: [
    "ncert-g6-poorvi-yoga-way-of-life-sk-1-name-a-yoga-idea-from-the-te",
    "ncert-g6-poorvi-yoga-way-of-life-sk-2-connect-to-a-healthy-habit",
  ],
  content: {
    objective: "Name a yoga idea from the text and connect it to a healthy daily habit.",
    wonder: {
      prompt: "What helps your body and mind feel steady on an ordinary school day?",
    },
    explore: {
      text: "This text presents yoga as a way of living well, not only poses. Naming an idea shows understanding. Connecting to a habit makes it real.",
      activity: {
        prompt: "How should readers meet Yoga—A Way of Life?",
        choices: [
          {
            id: "idea-habit",
            label: "Take an idea from the text and link it to a healthy habit",
            note: "Idea plus habit is the skill pair.",
          },
          {
            id: "poses-only",
            label: "Treat yoga as only flashy poses for photos",
            note: "The text speaks of a wider way of life.",
          },
          {
            id: "skip",
            label: "Skip health habits entirely after reading",
            note: "Connection to habit is part of the learning.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Yoga—A Way of Life presents yoga as wellness, not only exercise poses.",
        "A yoga idea from the text might be balance, breath, discipline, or calm attention.",
        "Connecting to a healthy habit means naming something you can practise — sleep, stretch, breath, or screen limits.",
        "The text invites living well, not performing for show.",
        "Small daily habits carry the idea into ordinary time.",
      ],
    },
    examples: [
      {
        caption: "Yoga idea",
        body: "Breath awareness, steady practice, or balance of body and mind.",
      },
      {
        caption: "Habit link",
        body: "A short morning stretch or a calm breath before homework.",
      },
      {
        caption: "Way of life",
        body: "Ideas that guide choices across the day, not only one class period.",
      },
    ],
    connection: "PE periods, quiet corners at home, and mindful breaks all can host these habits.",
    try: {
      prompt: "Name one yoga idea from the text. Then write one healthy habit it could support.",
      reveal: "Idea from text + small daily habit = living the chapter.",
    },
    practice: [
      q(
        "g6en-yg-p1",
        "Which line best matches name a yoga idea from the text?",
        "Yoga is a way of living well — balance and practice, not poses alone",
        "Yoga is only for showy poses with no daily habit",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: Yoga is a way of living well — balance and practice, not poses alone",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-yg-p2",
        "What best supports connect to a healthy habit?",
        "An idea such as breath, balance, or steady practice from the text",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — An idea such as breath, balance, or steady practice from the text — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-yg-p3",
        "Which move shows careful Grade 6 reading?",
        "Retell key events or images in order, then name the idea they build",
        "Copy one fancy word and stop thinking",
        "Change the ending so the characters never struggle",
        "a",
        "Careful reading keeps order and then states the idea the details build.",
        "Order first, then idea.",
        "Fancy words alone or erased struggle do not equal understanding.",
        {
          a: "You linked order to meaning.",
          b: "One word is not a full reading.",
          c: "Struggle often carries the lesson.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g6en-yg-r1",
        "In your own words, explain why this idea matters in the text: Yoga is a way of living well — balance and practice, not poses alone",
        "The text points toward Yoga is a way of living well — balance and practice, not poses alone. Details such as An idea such as breath, balance, or steady practice from the text help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["yoga is a way", "detail", "idea"],
      ),
      q(
        "g6en-yg-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: An idea such as breath, balance, or steady practice from the text",
        "Agree quickly so the discussion ends",
        "Say the text has no meaning at all",
        "a",
        "Reasoning returns to evidence instead of shutting down thinking.",
        "Evidence beats a rushed agreement.",
        "Ending talk early or denying meaning skips reasoning.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Texts carry ideas worth naming.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6en-yg-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Yoga is a way of living well — balance and practice, not poses alone",
        "Yoga is only for showy poses with no daily habit",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Yoga is a way of living well — balance and practice, not poses alone",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-yg-t2",
        "Write one or two sentences that name a yoga idea and a healthy habit link.",
        ["Yoga is a way of living well — balance and practice, not poses alone", "An idea such as breath, balance, or steady practice from the text", "name a yoga"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-yg-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The chapter’s idea is that Yoga is a way of living well — balance and practice, not poses alone. One proof is An idea such as breath, balance, or steady practice from the text. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Copying unsafe poses without guidance",
        correction: "Focus on ideas and safe habits the text supports.",
      },
      {
        idea: "Naming an idea with no habit link",
        correction: "Add one small daily action.",
      },
    ],
    reflect: {
      prompt: "Which healthy habit will you try for three days after this lesson?",
      keyIdeas: ["habit", "yoga idea", "daily"],
    },
    teach: {
      prompt: "Teach one yoga idea from the text and one habit it supports.",
      keyIdeas: ["yoga idea", "habit", "way of life"],
    },
    masteryCriteria: "You can name a yoga idea from the text and connect it to a healthy habit.",
  },
});
