import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade6EnglishLesson } from "@/content/lessons/grade-6-english/format";

export const hamaraBharatLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-hamara-bharat",
  title: "Hamara Bharat—Incredible India!",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-yoga-way-of-life"],
  nextConceptIds: ["ncert-g6-poorvi-the-kites"],
  coveredSkillIds: [
    "ncert-g6-poorvi-hamara-bharat-sk-1-find-a-diversity-detail",
    "ncert-g6-poorvi-hamara-bharat-sk-2-share-a-belonging-idea",
  ],
  content: {
    objective: "Find a diversity detail about India and share a belonging idea in your own words.",
    wonder: {
      prompt: "What detail about India’s variety makes you feel the country is ‘incredible’ — and where do you belong in that picture?",
    },
    explore: {
      text: "This text celebrates India’s variety. A diversity detail is a concrete difference. A belonging idea says how people share a larger home.",
      activity: {
        prompt: "What should readers take from Hamara Bharat—Incredible India!?",
        choices: [
          {
            id: "div-belong",
            label: "A concrete diversity detail plus an idea of belonging",
            note: "Detail plus belonging is the skill pair.",
          },
          {
            id: "one-only",
            label: "Pretend India has only one language, food, and dress",
            note: "The text celebrates variety.",
          },
          {
            id: "exclude",
            label: "Belonging means shutting others out",
            note: "Belonging here includes sharing a wider home.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Hamara Bharat—Incredible India! celebrates the country’s variety.",
        "A diversity detail might be language, festival, craft, landscape, or food named in the text.",
        "A belonging idea says how many differences can still share one larger identity.",
        "Incredible here means rich in variety worth noticing with respect.",
        "When you share belonging, speak from care, not from shutting others out.",
      ],
    },
    examples: [
      {
        caption: "Diversity detail",
        body: "A specific region, craft, language, or festival from the text.",
      },
      {
        caption: "Belonging idea",
        body: "Many threads, one fabric — difference held with respect.",
      },
      {
        caption: "Personal link",
        body: "Your home detail can sit beside another region’s detail.",
      },
    ],
    connection: "School assemblies, maps, and food festivals all display diversity and belonging.",
    try: {
      prompt: "Write one diversity detail from the text. Then share one belonging idea in a sentence.",
      reveal: "Detail: concrete. Belonging: how variety can still feel like home together.",
    },
    practice: [
      q(
        "g6en-hb-p1",
        "Which line best matches find a diversity detail?",
        "India’s variety can still hold a shared sense of belonging",
        "Incredible India means only one culture with no variety",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: India’s variety can still hold a shared sense of belonging",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-hb-p2",
        "What best supports share a belonging idea?",
        "A concrete diversity detail from languages, places, or traditions in the text",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — A concrete diversity detail from languages, places, or traditions in the text — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-hb-p3",
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
        "g6en-hb-r1",
        "In your own words, explain why this idea matters in the text: India’s variety can still hold a shared sense of belonging",
        "The text points toward India’s variety can still hold a shared sense of belonging. Details such as A concrete diversity detail from languages, places, or traditions in the text help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["india’s variety can still", "detail", "idea"],
      ),
      q(
        "g6en-hb-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: A concrete diversity detail from languages, places, or traditions in the text",
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
        "g6en-hb-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "India’s variety can still hold a shared sense of belonging",
        "Incredible India means only one culture with no variety",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: India’s variety can still hold a shared sense of belonging",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-hb-t2",
        "Write one or two sentences that share a belonging idea with one diversity detail.",
        ["India’s variety can still hold a shared sense of belonging", "A concrete diversity detail from languages, places, or traditions in the text", "share a belonging"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-hb-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The chapter’s idea is that India’s variety can still hold a shared sense of belonging. One proof is A concrete diversity detail from languages, places, or traditions in the text. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Listing slogans with no concrete detail",
        correction: "Name one specific diversity detail first.",
      },
      {
        idea: "Belonging as exclusion",
        correction: "Belonging here makes room for many threads.",
      },
    ],
    reflect: {
      prompt: "Which diversity detail from your own place would you add to the text’s celebration?",
      keyIdeas: ["diversity", "belonging", "India"],
    },
    teach: {
      prompt: "Teach one diversity detail and one belonging idea from the chapter.",
      keyIdeas: ["diversity detail", "belonging", "respect"],
    },
    masteryCriteria: "You can find a diversity detail and share a belonging idea with respect.",
  },
});

export const theKitesLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-the-kites",
  title: "The Kites",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-hamara-bharat"],
  nextConceptIds: ["ncert-g6-poorvi-ila-sachani"],
  coveredSkillIds: [
    "ncert-g6-poorvi-the-kites-sk-1-find-a-kite-image",
    "ncert-g6-poorvi-the-kites-sk-2-connect-to-a-festival",
  ],
  content: {
    objective: "Find a kite image in the text and connect kite play to a festival or shared celebration.",
    wonder: {
      prompt: "What do kites carry into the sky besides colour — memory, festival, competition, joy?",
    },
    explore: {
      text: "Culture-and-play texts mix image and occasion. A kite image is a picture in words. A festival link places the play in shared time.",
      activity: {
        prompt: "What should readers notice in The Kites?",
        choices: [
          {
            id: "image-fest",
            label: "A vivid kite image and its link to festival or shared play",
            note: "Image plus festival is the skill pair.",
          },
          {
            id: "paper-only",
            label: "Only paper science, with no festival or feeling",
            note: "The text also carries culture and play.",
          },
          {
            id: "never-fest",
            label: "Kites never connect to any celebration",
            note: "Many communities fly kites in festival time.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The Kites is a culture-and-play piece from Poorvi Grade 6.",
        "A kite image might be colour, string, wind, rooftops, or sky filled with shapes.",
        "Connecting to a festival means naming a shared occasion when kites rise.",
        "Play and tradition can share the same sky.",
        "When image and festival meet, the text feels both personal and cultural.",
      ],
    },
    examples: [
      {
        caption: "Kite image",
        body: "Bright paper against blue sky, taut string, shouting rooftops.",
      },
      {
        caption: "Festival link",
        body: "A seasonal celebration when families fly kites together.",
      },
      {
        caption: "Feeling",
        body: "Joy, rivalry, and togetherness can ride the same wind.",
      },
    ],
    connection: "Makar Sankranti, local melas, and neighbourhood rooftops often host kite skies.",
    try: {
      prompt: "Write one kite image from the text. Then connect it to a festival or shared play time.",
      reveal: "Image first. Festival or shared occasion second.",
    },
    practice: [
      q(
        "g6en-ki-p1",
        "Which line best matches find a kite image?",
        "Kites carry colour, play, and festival feeling into the sky",
        "Kites are only toys with no cultural or festival link",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: Kites carry colour, play, and festival feeling into the sky",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-ki-p2",
        "What best supports connect to a festival?",
        "A vivid image of kites in the sky from the text",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — A vivid image of kites in the sky from the text — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-ki-p3",
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
        "g6en-ki-r1",
        "In your own words, explain why this idea matters in the text: Kites carry colour, play, and festival feeling into the sky",
        "The text points toward Kites carry colour, play, and festival feeling into the sky. Details such as A vivid image of kites in the sky from the text help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["kites carry colour, play,", "detail", "idea"],
      ),
      q(
        "g6en-ki-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: A vivid image of kites in the sky from the text",
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
        "g6en-ki-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Kites carry colour, play, and festival feeling into the sky",
        "Kites are only toys with no cultural or festival link",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Kites carry colour, play, and festival feeling into the sky",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-ki-t2",
        "Write one or two sentences that connect a kite image to a festival.",
        ["Kites carry colour, play, and festival feeling into the sky", "A vivid image of kites in the sky from the text", "connect a kite"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-ki-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The chapter’s idea is that Kites carry colour, play, and festival feeling into the sky. One proof is A vivid image of kites in the sky from the text. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Naming a festival with no image",
        correction: "Start with a picture the text paints.",
      },
      {
        idea: "Forcing an unrelated festival",
        correction: "Use a celebration that fits kite play.",
      },
    ],
    reflect: {
      prompt: "What sky memory — kite or otherwise — feels like celebration to you?",
      keyIdeas: ["kite", "festival", "sky"],
    },
    teach: {
      prompt: "Teach one kite image and one festival connection.",
      keyIdeas: ["image", "festival", "play"],
    },
    masteryCriteria: "You can find a kite image and connect kite play to a festival or shared celebration.",
  },
});

export const ilaSachaniLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-ila-sachani",
  title: "Ila Sachani: Embroidering Dreams with her Feet",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-the-kites"],
  nextConceptIds: ["ncert-g6-poorvi-national-war-memorial"],
  coveredSkillIds: [
    "ncert-g6-poorvi-ila-sachani-sk-1-retell-ila-s-story",
    "ncert-g6-poorvi-ila-sachani-sk-2-name-a-quality-she-shows",
  ],
  content: {
    objective: "Retell Ila Sachani’s story and name a quality she shows through her craft and courage.",
    wonder: {
      prompt: "What does it take to turn a barrier into a craft — skill, patience, courage, or all three?",
    },
    explore: {
      text: "Biographical texts ask for careful retelling and character qualities. Retelling keeps Ila’s journey clear. A quality is a trait proved by actions.",
      activity: {
        prompt: "What should readers take from Ila’s story?",
        choices: [
          {
            id: "story-quality",
            label: "A clear retell plus a quality proved by her actions",
            note: "Story plus quality is the skill pair.",
          },
          {
            id: "pity-only",
            label: "Only pity, with no attention to skill or determination",
            note: "The text honours craft and courage.",
          },
          {
            id: "skip-craft",
            label: "Skip the embroidery and invent a different life",
            note: "Her craft is central to the chapter.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Ila Sachani: Embroidering Dreams with her Feet is about creating with determination.",
        "Retelling names the challenge, the practice, and the craft she builds.",
        "A quality might be perseverance, creativity, courage, or focus — proved by what she does.",
        "The text invites respect for skill, not empty pity.",
        "When story and quality meet, readers see a person, not a label.",
      ],
    },
    examples: [
      {
        caption: "Retell spine",
        body: "Challenge → practice with feet → embroidery skill → dreams made visible.",
      },
      {
        caption: "Quality proof",
        body: "Determination shows in long practice that builds craft.",
      },
      {
        caption: "Respect tone",
        body: "Speak of ability and effort, not only of difficulty.",
      },
    ],
    connection: "Artists, athletes, and inventors often prove qualities through long practice.",
    try: {
      prompt: "Retell Ila’s story in four beats. Then name one quality and the action that proves it.",
      reveal: "Beats of the journey. Quality + proving action.",
    },
    practice: [
      q(
        "g6en-is-p1",
        "Which line best matches retell ila’s story?",
        "Ila shows determination by building embroidery skill with her feet",
        "The story is only about pity with no craft or courage",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: Ila shows determination by building embroidery skill with her feet",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-is-p2",
        "What best supports name a quality she shows?",
        "Ila practises embroidery with her feet and creates skilled work",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — Ila practises embroidery with her feet and creates skilled work — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-is-p3",
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
        "g6en-is-r1",
        "In your own words, explain why this idea matters in the text: Ila shows determination by building embroidery skill with her feet",
        "The text points toward Ila shows determination by building embroidery skill with her feet. Details such as Ila practises embroidery with her feet and creates skilled work help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["ila shows determination by", "detail", "idea"],
      ),
      q(
        "g6en-is-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: Ila practises embroidery with her feet and creates skilled work",
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
        "g6en-is-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Ila shows determination by building embroidery skill with her feet",
        "The story is only about pity with no craft or courage",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Ila shows determination by building embroidery skill with her feet",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-is-t2",
        "Write one or two sentences that retell Ila’s story and name a quality.",
        ["Ila shows determination by building embroidery skill with her feet", "Ila practises embroidery with her feet and creates skilled work", "retell Ila’s story"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-is-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The chapter’s idea is that Ila shows determination by building embroidery skill with her feet. One proof is Ila practises embroidery with her feet and creates skilled work. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Retelling only the challenge and skipping the craft",
        correction: "Include how skill is built.",
      },
      {
        idea: "Naming a quality with no proof",
        correction: "Link the quality to an action.",
      },
    ],
    reflect: {
      prompt: "Which quality from Ila’s story do you want to practise in your own learning?",
      keyIdeas: ["quality", "practice", "craft"],
    },
    teach: {
      prompt: "Teach Ila’s story briefly and name one quality with proof.",
      keyIdeas: ["retell", "quality", "proof"],
    },
    masteryCriteria: "You can retell Ila’s story and name a quality proved by her actions.",
  },
});

export const nationalWarMemorialLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-national-war-memorial",
  title: "National War Memorial",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-ila-sachani"],
  nextConceptIds: [],
  coveredSkillIds: [
    "ncert-g6-poorvi-national-war-memorial-sk-1-find-a-memorial-detail",
    "ncert-g6-poorvi-national-war-memorial-sk-2-write-a-respectful-line",
  ],
  content: {
    objective: "Find a memorial detail from the text and write a respectful line of remembrance.",
    wonder: {
      prompt: "What should a place of national memory make us feel — and what words are worthy of that place?",
    },
    explore: {
      text: "Memorial texts ask for careful noticing and respectful language. A detail anchors memory in something concrete. A respectful line is writing with dignity.",
      activity: {
        prompt: "How should readers respond to National War Memorial?",
        choices: [
          {
            id: "detail-respect",
            label: "Notice a memorial detail and write a respectful line",
            note: "Detail plus respectful writing is the skill pair.",
          },
          {
            id: "joke",
            label: "Turn remembrance into a joke",
            note: "The text asks for gratitude and dignity.",
          },
          {
            id: "no-detail",
            label: "Skip details and shout empty slogans only",
            note: "Concrete details keep memory honest.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "National War Memorial is a text of gratitude and national memory.",
        "A memorial detail might be a design element, a name wall, a flame, or a ceremony note from the text.",
        "A respectful line uses calm, grateful language — not noise or jokes.",
        "Remembrance is an act of attention: we notice, we thank, we keep dignity.",
        "When detail and respectful writing meet, memory becomes something you can share carefully.",
      ],
    },
    examples: [
      {
        caption: "Memorial detail",
        body: "A concrete feature the text describes at the memorial.",
      },
      {
        caption: "Respectful line",
        body: "We remember their courage with quiet thanks.",
      },
      {
        caption: "Tone check",
        body: "If a line could be said at a solemn place, it may be fit.",
      },
    ],
    connection: "School remembrance days, local plaques, and family stories of service all ask for respectful words.",
    try: {
      prompt: "Write one memorial detail from the text. Then write one respectful line of your own.",
      reveal: "Detail: concrete. Line: grateful, calm, worthy of the place.",
    },
    practice: [
      q(
        "g6en-nw-p1",
        "Which line best matches find a memorial detail?",
        "The memorial asks us to remember service with gratitude and dignity",
        "Remembrance is only noise, jokes, or empty slogans",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: The memorial asks us to remember service with gratitude and dignity",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-nw-p2",
        "What best supports write a respectful line?",
        "A concrete feature of the National War Memorial from the text",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — A concrete feature of the National War Memorial from the text — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-nw-p3",
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
        "g6en-nw-r1",
        "In your own words, explain why this idea matters in the text: The memorial asks us to remember service with gratitude and dignity",
        "The text points toward The memorial asks us to remember service with gratitude and dignity. Details such as A concrete feature of the National War Memorial from the text help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["the memorial asks us", "detail", "idea"],
      ),
      q(
        "g6en-nw-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: A concrete feature of the National War Memorial from the text",
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
        "g6en-nw-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "The memorial asks us to remember service with gratitude and dignity",
        "Remembrance is only noise, jokes, or empty slogans",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: The memorial asks us to remember service with gratitude and dignity",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-nw-t2",
        "Write one or two sentences that write a respectful line of remembrance.",
        ["The memorial asks us to remember service with gratitude and dignity", "A concrete feature of the National War Memorial from the text", "write a respectful"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-nw-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The chapter’s idea is that The memorial asks us to remember service with gratitude and dignity. One proof is A concrete feature of the National War Memorial from the text. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Writing a flashy line with no detail behind it",
        correction: "Anchor respect in something the memorial actually holds.",
      },
      {
        idea: "Using casual slang for solemn memory",
        correction: "Choose calm, grateful words.",
      },
    ],
    reflect: {
      prompt: "What respectful words would you choose if you stood at a place of national memory?",
      keyIdeas: ["respect", "memory", "gratitude"],
    },
    teach: {
      prompt: "Teach one memorial detail and share one respectful line.",
      keyIdeas: ["detail", "respectful line", "gratitude"],
    },
    masteryCriteria: "You can find a memorial detail and write a respectful line of remembrance.",
  },
});
