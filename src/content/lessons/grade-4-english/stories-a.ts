import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade4EnglishLesson } from "@/content/lessons/grade-4-english/format";

export const togetherWeCanLesson = grade4EnglishLesson({
  conceptId: "ncert-g4-santoor-together-we-can-core",
  title: "Together We Can",
  domainTitle: "Literature",
  nextConceptIds: ["ncert-g4-santoor-the-tinkling-bells-core"],
  coveredSkillIds: [
    "ncert-g4-santoor-together-we-can-core-sk-1-retell-a-key-event",
    "ncert-g4-santoor-together-we-can-core-sk-2-share-a-message",
  ],
  content: {
    objective:
      "Retell a key moment from a togetherness story and share the message it leaves for real life.",
    wonder: {
      prompt:
        "When a heavy school bag, a stuck gate, or a spilled paint tray needs more than one pair of hands, what changes the moment — muscle, manners, or both?",
    },
    explore: {
      text: "Stories about working together often show a sticky problem, a plan, and helpers. Retelling means naming what happened in order. The message is the idea the story wants you to carry into your day.",
      activity: {
        prompt:
          "In a playground story, children cannot lift a fallen bench alone. They call friends, lift together, and clear the path. What is the strongest message?",
        choices: [
          {
            id: "team",
            label: "When we share the work, hard jobs become possible",
            note: "You caught the togetherness message — effort shared changes the outcome.",
          },
          {
            id: "blame",
            label: "Only the strongest child matters; others should watch",
            note: "Watching leaves the weight on one person. Together stories value many hands.",
          },
          {
            id: "magic",
            label: "Benches fix themselves if you wait long enough",
            note: "Waiting is not the story's plan. People choosing to help is.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A key event is a turning point: the moment the problem appears, the plan begins, or the helpers succeed.",
        "Retelling keeps order: first… then… finally… You do not need every tiny detail — you need the spine of what happened.",
        "A message is not only a slogan. It answers: what does this story want us to notice about people?",
        "Together We Can stories often show that kindness and teamwork are skills, not accidents.",
        "When you share a message in your own words, you prove you understood the heart of the text, not only the plot.",
      ],
    },
    examples: [
      {
        caption: "Key event",
        body: "The children notice the fallen bench blocks the path — that spotting is a key event.",
      },
      {
        caption: "Retell spine",
        body: "First the bench falls. Then friends gather. Finally they lift it aside.",
      },
      {
        caption: "Message",
        body: "Many hands make a hard job kinder and faster — that is a shareable message.",
      },
    ],
    connection:
      "Classroom clean-ups, family chores, and team games all echo the same togetherness idea.",
    try: {
      prompt:
        "Retell one key event from a time you worked with someone. Then write one sentence message about what you learned.",
      reveal:
        "Example: Key event — we carried water cans in a chain. Message — taking turns kept everyone from getting tired.",
    },
    practice: [
      q(
        "g4en-tw-p1",
        "Which line best retells a key event?",
        "The friends gathered and lifted the heavy bench together",
        "Someone once owned a red pencil somewhere",
        "The sky is sometimes blue",
        "a",
        "A key-event retell names what people did that changed the situation.",
        "Which sentence shows the turning action?",
        "Random facts are not the story's key moment.",
        {
          a: "You named the turning action.",
          b: "A pencil fact is not this story's key event.",
          c: "Weather is not the teamwork moment.",
        },
      ),
      q(
        "g4en-tw-p2",
        "Which sentence shares a message from a togetherness story?",
        "Helping one another can turn a hard job into a possible one",
        "Benches are always made of metal",
        "Never speak to friends again",
        "a",
        "A message carries an idea about people and choices.",
        "What idea would you take home?",
        "Object facts and unkind rules are not the message.",
        {
          a: "You shared a human idea from the story.",
          b: "Material facts are not the message.",
          c: "Cutting off friends fights the story's spirit.",
        },
      ),
      explainQ(
        "g4en-tw-p3",
        "Why does retelling events in order help a listener understand the story?",
        "Order shows cause and change: what went awry, what people tried, and what happened next. Without order, the listener gets a jumble.",
        "Think of first → then → finally.",
        "A pile of mixed details hides the turning points.",
        ["order|first|then|finally|sequence|cause"],
      ),
    ],
    reasoning: [
      q(
        "g4en-tw-r1",
        "A child retells only the colours of clothes and skips the lifting. What is missing?",
        "the key event that shows how the problem was solved",
        "more colour names for socks",
        "a list of unrelated animals",
        "a",
        "Clothes colours can decorate a retell, but the key action carries the story.",
        "What changed because of the characters?",
        "Extra colours and animals do not replace the turning point.",
        {
          a: "You spotted the missing key event.",
          b: "More colours still skip the action.",
          c: "Animals are not the togetherness moment.",
        },
      ),
      explainQ(
        "g4en-tw-r2",
        "How can two children share the same message with different words?",
        "Messages are ideas, not fixed sentences. One child might say 'teamwork helps' and another 'many hands make work lighter' — both carry the same idea.",
        "Can an idea wear different clothes of words?",
        "Copying one exact line is not the only way to share meaning.",
        ["idea|same|words|message|team|help"],
      ),
    ],
    retrieve: [
      q(
        "g4en-tw-t1",
        "Sharing a message mainly means...",
        "saying the story's big idea in your own words",
        "listing every comma in the book",
        "hiding what the story was about",
        "a",
        "A message is the idea you carry out of the text.",
        "What do you want a friend to remember?",
        "Commas and secrecy are not messages.",
        {
          a: "You defined message sharing.",
          b: "Punctuation lists are not messages.",
          c: "Hiding the idea skips the skill.",
        },
      ),
      writeQ(
        "g4en-tw-t2",
        "Retell one key togetherness event and write one short message.",
        [
          "together",
          "help",
          "lift",
          "share",
          "team",
          "friends",
          "work",
          "message",
        ],
        "Example: Friends lifted the bench together. Message — shared work makes hard jobs possible.",
        "Name an action people did together, then the idea it teaches.",
        "A message with no event is incomplete for this chapter.",
        ["help|lift|together|team|share|friend", "message|idea|can|possible|lighter"],
      ),
    ],
    misconceptions: [
      {
        idea: "Retelling means copying the whole page.",
        correction:
          "Retelling keeps the spine of events. You can leave out tiny decorations.",
      },
      {
        idea: "A message must be one official sentence from the book.",
        correction:
          "A message is the idea in your words, as long as it stays true to the story.",
      },
    ],
    reflect: {
      prompt:
        "Where will you use a 'together we can' message this week — home, class, or play?",
      keyIdeas: ["together|help|team|share"],
    },
    mastery: q(
      "g4en-tw-m1",
      "This chapter asks you to...",
      "retell a key event and share a togetherness message",
      "only memorise furniture names",
      "ignore how people help one another",
      "a",
      "Event retell plus message are the chapter skills.",
      "Which pair matches the learning goals?",
      "Furniture lists skip the human idea.",
      {
        a: "You joined both skills.",
        b: "Furniture names are not the goal.",
        c: "Helping is the heart of the text.",
      },
    ),
    masteryCriteria:
      "You can retell a key togetherness event in order and share its message in your own words.",
    teach: {
      prompt:
        "Teach Ivshi a mini togetherness story: one key event and one message.",
      keyIdeas: ["event|retell|first", "message|together|help"],
    },
  },
});

export const tinklingBellsLesson = grade4EnglishLesson({
  conceptId: "ncert-g4-santoor-the-tinkling-bells-core",
  title: "The Tinkling Bells",
  domainTitle: "Literature",
  prerequisites: ["ncert-g4-santoor-together-we-can-core"],
  nextConceptIds: ["ncert-g4-santoor-be-smart-be-safe-core"],
  coveredSkillIds: [
    "ncert-g4-santoor-the-tinkling-bells-core-sk-1-notice-a-sound-word",
    "ncert-g4-santoor-the-tinkling-bells-core-sk-2-say-how-it-feels",
  ],
  content: {
    objective:
      "Notice sound words in a literary piece and say how those sounds make a scene feel.",
    wonder: {
      prompt:
        "Close your eyes and imagine temple bells, bicycle bells, or wind chimes. Which feeling arrives first — calm, hurry, joy, or something else — and why?",
    },
    explore: {
      text: "Writers choose sound words — tinkle, clang, whisper, roar — so your ear joins the page. Noticing a sound word is step one. Saying how it feels connects sound to mood.",
      activity: {
        prompt:
          "Which response notices sound and feeling together?",
        choices: [
          {
            id: "sound-feel",
            label:
              "'Tinkling' is a light, bright sound; it makes the scene feel gentle and playful",
            note: "You joined the sound word to a feeling. That is the chapter's twin skill.",
          },
          {
            id: "ignore",
            label: "Sounds never matter in reading; only pictures count",
            note: "Sound words paint pictures for the ear. They matter a lot.",
          },
          {
            id: "volume-only",
            label: "Any loud noise feels the same as a soft tinkle",
            note: "Loud and soft create different moods. Tinkle is not a roar.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A sound word names or suggests a noise: tinkle, buzz, splash, hush.",
        "Some sound words imitate the noise (onomatopoeia). Others describe it.",
        "Feeling comes next: soft tinkling may feel delicate or happy; a clang may feel sudden or heavy.",
        "When you read aloud, stretching or softening a sound word helps a listener feel the mood.",
        "Good readers ask: what do I hear on this page, and what does that sound do to the atmosphere?",
      ],
    },
    examples: [
      {
        caption: "Sound word",
        body: "Tinkling bells — light, high, repeated little sounds.",
      },
      {
        caption: "Feeling",
        body: "That sound can feel festive, peaceful, or magical depending on the scene around it.",
      },
      {
        caption: "Contrast",
        body: "A roar feels powerful; a whisper feels secret. Different sounds, different moods.",
      },
    ],
    connection:
      "Poems, festival scenes, and rainy-day stories all lean on sound words to set mood.",
    try: {
      prompt:
        "Pick one sound around you for thirty seconds. Name a sound word for it and one feeling it gives you.",
      reveal:
        "Example: Sound word — drip. Feeling — sleepy and slow, like waiting for rain to finish.",
    },
    practice: [
      q(
        "g4en-tb-p1",
        "Which is a sound word?",
        "tinkling",
        "Tuesday",
        "triangle (the shape only, with no sound)",
        "a",
        "Tinkling names a sound. Tuesday is a day. A silent shape name is not a sound word here.",
        "Which word makes your ear wake up?",
        "Days and silent shapes are not sound words.",
        {
          a: "You noticed a sound word.",
          b: "A weekday is not a sound.",
          c: "A shape without noise is not the skill.",
        },
      ),
      q(
        "g4en-tb-p2",
        "If bells 'tinkle' in a quiet courtyard, how might it feel?",
        "gentle, bright, and calm",
        "exactly like a thunderstorm crash",
        "like no sound exists at all",
        "a",
        "Tinkling is light; it usually softens a scene rather than exploding it.",
        "Match the size of the sound to a mood.",
        "Crashes and silence do not match a tinkle.",
        {
          a: "You matched sound to feeling.",
          b: "A crash is a different sound family.",
          c: "Tinkling is still a sound.",
        },
      ),
      explainQ(
        "g4en-tb-p3",
        "Why might a writer choose 'tinkle' instead of 'bang' for temple or bicycle bells?",
        "'Tinkle' suggests small, clear, repeated sounds. 'Bang' suggests a sudden heavy hit. The choice paints a different ear-picture and mood.",
        "Compare soft repeating sounds with one heavy hit.",
        "Any loud word is not automatically the right mood word.",
        ["soft|light|small|clear|mood|feel|bang"],
      ),
    ],
    reasoning: [
      q(
        "g4en-tb-r1",
        "A friend says every sound word feels scary. What would you reply?",
        "Sound words can feel many ways — soft ones can feel calm or joyful",
        "Agree that tinkling is always terrifying",
        "Say feelings never connect to reading",
        "a",
        "Mood depends on the sound and the scene. Soft sounds often soothe.",
        "Can a soft sound feel kind?",
        "Fear is not the only feeling available.",
        {
          a: "You opened the feeling range.",
          b: "Tinkling is rarely a horror word.",
          c: "Feeling is part of literary reading.",
        },
      ),
      explainQ(
        "g4en-tb-r2",
        "How does saying a sound word aloud help you notice its feeling?",
        "Your voice tries the sound — soft, sharp, slow, quick — and your body notices the mood. Hearing yourself is a clue the silent page alone may hide.",
        "What changes when your ear joins your eye?",
        "Silent staring can miss the music of the word.",
        ["aloud|voice|hear|soft|feel|mood"],
      ),
    ],
    retrieve: [
      q(
        "g4en-tb-t1",
        "Noticing a sound word means...",
        "spotting a word that names or suggests a noise",
        "counting only the adjectives of colour",
        "skipping every noisy line on purpose",
        "a",
        "Sound words are the ear-clues on the page.",
        "What should your ear catch?",
        "Skipping noise skips the skill.",
        {
          a: "You defined the noticing skill.",
          b: "Colour words are a different hunt.",
          c: "Skipping sound words misses the point.",
        },
      ),
      writeQ(
        "g4en-tb-t2",
        "Name one sound word and say how it feels.",
        [
          "tinkle",
          "tinkling",
          "bell",
          "clang",
          "whisper",
          "buzz",
          "soft",
          "calm",
          "bright",
          "gentle",
        ],
        "Example: tinkling — feels gentle and bright.",
        "Pick a sound word, then a feeling word.",
        "A feeling with no sound word is incomplete here.",
        ["tinkle|bell|clang|whisper|buzz|sound", "feel|soft|calm|bright|gentle|happy|peace"],
      ),
    ],
    misconceptions: [
      {
        idea: "Only poems have sound words.",
        correction:
          "Stories and information texts use sound words too whenever scenes need an ear.",
      },
      {
        idea: "Feeling is guessing with no link to the word.",
        correction:
          "Feeling should grow from the kind of sound — soft, sharp, heavy, quick.",
      },
    ],
    reflect: {
      prompt:
        "Which sound word from today will you listen for in the real world this evening?",
      keyIdeas: ["sound|tinkle|feel"],
    },
    mastery: q(
      "g4en-tb-m1",
      "The Tinkling Bells asks you to...",
      "notice sound words and say how they feel",
      "ignore every noisy detail",
      "only count the letters in the title",
      "a",
      "Sound plus feeling are the chapter skills.",
      "Which pair matches the goals?",
      "Ignoring sound skips the literary ear.",
      {
        a: "You held both skills.",
        b: "Sound details matter here.",
        c: "Letter counts are not the goal.",
      },
    ),
    masteryCriteria:
      "You can name a sound word from a text or scene and say one clear feeling it creates.",
    teach: {
      prompt:
        "Teach Ivshi two sound words and the feeling each one creates.",
      keyIdeas: ["sound", "feel|mood"],
    },
  },
});

export const beSmartBeSafeLesson = grade4EnglishLesson({
  conceptId: "ncert-g4-santoor-be-smart-be-safe-core",
  title: "Be Smart, Be Safe",
  domainTitle: "Literature",
  prerequisites: ["ncert-g4-santoor-the-tinkling-bells-core"],
  nextConceptIds: ["ncert-g4-santoor-one-thing-at-a-time-core"],
  coveredSkillIds: [
    "ncert-g4-santoor-be-smart-be-safe-core-sk-1-find-a-safety-idea",
    "ncert-g4-santoor-be-smart-be-safe-core-sk-2-retell-in-your-own-words",
  ],
  content: {
    objective:
      "Find a clear safety idea in an information text and retell it in your own words.",
    wonder: {
      prompt:
        "If a younger child asked you how to cross a busy road, what one safety idea would you put in the simplest words — and what would you refuse to leave out?",
    },
    explore: {
      text: "Safety texts hide useful ideas inside stories or tips: look both ways, wear a helmet, tell a trusted adult. Finding the idea is step one. Retelling in your own words proves you understood, not only copied.",
      activity: {
        prompt:
          "A text says: wait for the green signal, hold an adult's hand, and keep phones in your pocket while crossing. Which is the best own-words retell of a safety idea?",
        choices: [
          {
            id: "own-words",
            label:
              "Cross only when the signal says go, stay with a grown-up, and watch the road — not a screen",
            note: "You kept the ideas but used fresh words. That is smart retelling.",
          },
          {
            id: "copy",
            label: "Copy every sentence exactly, including commas, without thinking",
            note: "Exact copying is not the same as understanding in your words.",
          },
          {
            id: "unsafe",
            label: "Run between cars whenever you feel bored",
            note: "That fights the safety ideas instead of retelling them.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A safety idea is advice that protects bodies and choices: how to travel, play, or speak online carefully.",
        "Finding the idea means asking: what does this text want me to do or notice to stay safer?",
        "Retelling in your own words keeps the meaning and drops the exact textbook music.",
        "Good retells stay true — you do not invent opposite advice.",
        "Speaking a safety idea simply helps younger listeners and helps you remember it under pressure.",
      ],
    },
    examples: [
      {
        caption: "Find the idea",
        body: "Wear a helmet on a bicycle — the idea is protect your head.",
      },
      {
        caption: "Own-words retell",
        body: "Text: 'Do not talk to unknown adults offering sweets alone.' Retell: 'Stay with people you trust; do not go with strangers.'",
      },
      {
        caption: "Not a retell",
        body: "Changing 'look both ways' into 'never look' reverses the idea.",
      },
    ],
    connection:
      "Road sense, playground rules, and fire drills are all safety texts living outside the book.",
    try: {
      prompt:
        "Write one safety idea from home or school in your own words — no copying a poster letter by letter.",
      reveal:
        "Example: If the fire alarm rings, walk calmly to the assembly point with your class — do not hide under a desk.",
    },
    practice: [
      q(
        "g4en-bs-p1",
        "Which line is a safety idea?",
        "Hold the railing while climbing wet stairs",
        "Stairs are sometimes made of stone",
        "Never learn anyone's name",
        "a",
        "Holding a railing protects you on wet stairs. Material facts and unkind rules are not safety advice.",
        "Which tip protects a body?",
        "Facts about stone are not advice.",
        {
          a: "You found protective advice.",
          b: "Stone facts are not the tip.",
          c: "Avoiding names is not this safety skill.",
        },
      ),
      q(
        "g4en-bs-p2",
        "Which is a retell in your own words?",
        "Keep your eyes on the road, not on a game screen, when you cross",
        "keep-your-eyes-on-the-road-not-on-a-game-screen-when-you-cross (copied with dashes)",
        "Screens are made of glass only",
        "a",
        "Own words reshape the idea. Dashed copying is still copying. Glass facts skip the advice.",
        "Which version shows understanding?",
        "Copying and object facts are not retells.",
        {
          a: "You retold the idea freshly.",
          b: "Dashed copying is still copying.",
          c: "Glass facts skip the safety meaning.",
        },
      ),
      explainQ(
        "g4en-bs-p3",
        "Why is retelling a safety tip in your own words useful in an emergency?",
        "In a hurry you need meaning, not memorised textbook music. Own words prove you know what to do and help you explain it to someone else quickly.",
        "What do you need when there is no book in your hand?",
        "Copying only helps if the poster is still in front of you.",
        ["own|understand|hurry|explain|remember|meaning"],
      ),
    ],
    reasoning: [
      q(
        "g4en-bs-r1",
        "A poster says 'Stop, look, listen.' A child retells 'Stop forever and never move.' What happened?",
        "The retell changed the meaning instead of keeping the safety idea",
        "The retell improved the idea perfectly",
        "Posters never contain ideas",
        "a",
        "Own words must stay faithful. 'Never move' is not what 'stop, look, listen' asks.",
        "Did the meaning stay kind to the original tip?",
        "Faithful retells keep the protective intent.",
        {
          a: "You caught a meaning twist.",
          b: "The twist was not an improvement.",
          c: "Posters are full of ideas.",
        },
      ),
      explainQ(
        "g4en-bs-r2",
        "How can you check that your retell is still true to a safety text?",
        "Ask: would following my sentence keep someone safer in the same way? If yes, you kept the idea. If your sentence creates danger, rewrite.",
        "Compare your version to the protective goal.",
        "Pretty wording cannot save a reversed tip.",
        ["safer|same|idea|true|check|meaning"],
      ),
    ],
    retrieve: [
      q(
        "g4en-bs-t1",
        "Finding a safety idea means...",
        "spotting advice that helps protect people",
        "listing every adjective in the paragraph",
        "ignoring tips about roads and play",
        "a",
        "Safety ideas are protective advice.",
        "What kind of idea are you hunting?",
        "Adjective lists are a different skill.",
        {
          a: "You defined the hunt.",
          b: "Adjective lists miss the tip.",
          c: "Ignoring tips skips the chapter.",
        },
      ),
      writeQ(
        "g4en-bs-t2",
        "Write one safety idea in your own words.",
        [
          "look",
          "cross",
          "helmet",
          "adult",
          "road",
          "careful",
          "safe",
          "listen",
          "hand",
          "stop",
        ],
        "Example: Look both ways and cross with a trusted adult when the road is clear.",
        "Give protective advice in fresh words.",
        "A joke that encourages danger is not a safety idea.",
        ["look|cross|helmet|adult|road|safe|stop|listen|careful"],
      ),
    ],
    misconceptions: [
      {
        idea: "Safety texts are only for little kids.",
        correction:
          "Everyone uses safety ideas — riders, walkers, and online users of every age.",
      },
      {
        idea: "Own words means changing the advice to whatever you like.",
        correction:
          "Own words keep the same protective meaning with a new sentence shape.",
      },
    ],
    reflect: {
      prompt:
        "Which safety idea will you retell to a younger child this week?",
      keyIdeas: ["safe|retell|idea"],
    },
    mastery: q(
      "g4en-bs-m1",
      "Be Smart, Be Safe asks you to...",
      "find a safety idea and retell it in your own words",
      "only decorate a notebook with stickers",
      "forget every protective tip",
      "a",
      "Find + retell are the skills.",
      "Which pair matches the chapter?",
      "Stickers and forgetting tip skip the goals.",
      {
        a: "You named both skills.",
        b: "Stickers are not the reading skill.",
        c: "Tips are meant to be remembered and shared.",
      },
    ),
    masteryCriteria:
      "You can point to a safety idea in a text or tip and retell it faithfully in your own words.",
    teach: {
      prompt:
        "Teach Ivshi one safety idea from daily life in your own words.",
      keyIdeas: ["safe|idea", "own|words|retell"],
    },
  },
});
