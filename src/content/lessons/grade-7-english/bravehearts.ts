import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade7EnglishLesson } from "@/content/lessons/grade-7-english/format";

export const conqueringTheSummitLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-conquering-the-summit-core",
  title: "Conquering the Summit",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-travel-core"],
  nextConceptIds: ["ncert-g7-poorvi-homage-brave-soldiers-core"],
  content: {
    objective: "Find a factual detail in the climbing account and explain a challenge the climbers face.",
    wonder: {
      prompt: "What does “summit” demand besides height — planning, teamwork, weather, or courage under thin air?",
    },
    explore: {
      text: "Non-fiction climbing accounts lean on facts. Finding a factual detail anchors the true story. Explaining a challenge means saying what made the climb hard and why. Formal notes and careful listening for detail support this reading.",
      activity: {
        prompt: "What should readers practise?",
        choices: [
          {
            id: "fact-challenge",
            label: "A factual detail that helps explain a real climbing challenge",
            note: "Fact plus challenge is the skill pair.",
          },
          {
            id: "fantasy",
            label: "Replace facts with pure fantasy dragons",
            note: "This chapter is a factual endurance account.",
          },
          {
            id: "ignore",
            label: "Ignore difficulty and only celebrate the photo at the top",
            note: "The challenge explains the achievement.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Conquering the Summit is a non-fiction climbing account of endurance.",
        "A factual detail might be height, weather, route, gear, or time.",
        "Explaining a challenge links the detail to difficulty: cold, thin air, steep ice.",
        "Listening or reading for detail catches the fact that proves the hardship.",
        "A short formal note can report the challenge with respect and clarity.",
      ],
    },
    examples: [
      {
        caption: "Fact",
        body: "A named peak, altitude, or weather condition.",
      },
      {
        caption: "Challenge",
        body: "Exhaustion at high altitude slowing each step.",
      },
      {
        caption: "Formal line",
        body: "We report that the team faced severe cold near the ridge.",
      },
    ],
    connection: "Trek clubs, news features, and PE endurance talks all use fact-and-challenge reading.",
    try: {
      prompt: "Write one factual detail and explain one challenge it creates.",
      reveal: "Fact: weather or height. Challenge: how that fact makes the climb harder.",
    },
    practice: [
      q(
        "g7en-cs-p1",
        "Which statement best matches Conquering the Summit?",
        "Find a factual detail and explain how it creates a climbing challenge",
        "Facts are optional decoration in non-fiction",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Find a factual detail and explain how it creates a climbing challenge",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-cs-p2",
        "Which detail best supports careful Grade 7 reading?",
        "Altitude, weather, or route facts can explain the difficulty",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “Altitude, weather, or route facts can explain the difficulty” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-cs-p3",
        "Which move shows Grade 7 literary reasoning?",
        "Track evidence, then name the idea it builds",
        "Memorise one fancy word and stop thinking",
        "Change the ending so struggle disappears",
        "a",
        "Evidence first keeps interpretation honest.",
        "Proof before claim.",
        "Fancy words alone are not understanding.",
        {
          a: "Evidence leads the idea.",
          b: "One word is not a full reading.",
          c: "Struggle often carries meaning.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7en-cs-r1",
        "In your own words, explain why this matters: Find a factual detail and explain how it creates a climbing challenge",
        "It matters because Find a factual detail and explain how it creates a climbing challenge. A supporting detail is: Altitude, weather, or route facts can explain the difficulty.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-cs-r2",
        "A classmate claims: “Facts are optional decoration in non-fiction.” What is the better reply?",
        "Point to evidence: Altitude, weather, or route facts can explain the difficulty",
        "Agree quickly so the discussion ends",
        "Say literature never needs reasons",
        "a",
        "Reasoning returns to textual evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Literature thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7en-cs-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Find a factual detail and explain how it creates a climbing challenge",
        "Facts are optional decoration in non-fiction",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Find a factual detail and explain how it creates a climbing challenge",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-cs-t2",
        "Write one or two sentences that explain a climbing challenge using one factual detail.",
        ["Find a factual", "Altitude, weather, or", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-cs-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Find a factual detail and explain how it creates a climbing challenge. One proof is Altitude, weather, or route facts can explain the difficulty.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Non-fiction has no challenges, only lists.",
        correction: "Facts reveal hardship and endurance.",
      },
      {
        idea: "Listening for detail means ignoring the main idea.",
        correction: "Details support the main endurance idea.",
      },
    ],
    reflect: {
      prompt: "What endurance challenge have you faced that needed facts and planning?",
      keyIdeas: ["fact", "challenge", "endurance"],
    },
    teach: {
      prompt: "Teach fact-to-challenge explanation with one summit detail.",
      keyIdeas: ["factual detail", "challenge", "endurance"],
    },
    masteryCriteria: "You can find a factual detail and explain a climbing challenge.",
  },
});

export const homageBraveSoldiersLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-homage-brave-soldiers-core",
  title: "A Homage to Our Brave Soldiers",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-conquering-the-summit-core"],
  nextConceptIds: ["ncert-g7-poorvi-my-dear-soldiers-core"],
  content: {
    objective: "Find a tribute idea in the homage and write a respectful line of gratitude.",
    wonder: {
      prompt: "What words are worthy of people who serve — and which tone keeps gratitude dignified?",
    },
    explore: {
      text: "Tribute texts honour service with dignity. Finding the tribute idea means naming what is praised. A respectful line uses calm, grateful language — sometimes in passive form for formal honour.",
      activity: {
        prompt: "How should readers respond?",
        choices: [
          {
            id: "tribute",
            label: "Find the tribute idea and write a respectful grateful line",
            note: "Tribute plus respectful writing is the skill pair.",
          },
          {
            id: "joke",
            label: "Turn homage into a joke",
            note: "The text asks for dignity.",
          },
          {
            id: "empty",
            label: "Shout empty slogans with no tribute idea",
            note: "A clear idea keeps respect honest.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A Homage to Our Brave Soldiers is a text of gratitude and respect.",
        "A tribute idea names courage, service, sacrifice, or protection.",
        "A respectful line is calm and grateful — fit to be spoken at a solemn moment.",
        "Passive forms can suit formal tribute: Their courage is remembered.",
        "Homage is attention with honour, not noise.",
      ],
    },
    examples: [
      {
        caption: "Tribute idea",
        body: "Soldiers protect with courage and duty.",
      },
      {
        caption: "Respectful line",
        body: "We remember their service with quiet thanks.",
      },
      {
        caption: "Passive tribute",
        body: "Their bravery is honoured in our homage.",
      },
    ],
    connection: "Remembrance days, school assemblies, and family stories of service ask for respectful words.",
    try: {
      prompt: "Write the tribute idea in one sentence. Add one respectful line of your own.",
      reveal: "Idea: gratitude for brave service. Line: calm thanks without jokes.",
    },
    practice: [
      q(
        "g7en-hb-p1",
        "Which statement best matches this homage?",
        "Find a tribute idea and write a respectful line of gratitude",
        "Homage works best as loud jokes",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Find a tribute idea and write a respectful line of gratitude",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-hb-p2",
        "Which detail best supports careful Grade 7 reading?",
        "A calm line of thanks can honour courage and service",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “A calm line of thanks can honour courage and service” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-hb-p3",
        "Which move shows Grade 7 literary reasoning?",
        "Track evidence, then name the idea it builds",
        "Memorise one fancy word and stop thinking",
        "Change the ending so struggle disappears",
        "a",
        "Evidence first keeps interpretation honest.",
        "Proof before claim.",
        "Fancy words alone are not understanding.",
        {
          a: "Evidence leads the idea.",
          b: "One word is not a full reading.",
          c: "Struggle often carries meaning.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7en-hb-r1",
        "In your own words, explain why this matters: Find a tribute idea and write a respectful line of gratitude",
        "It matters because Find a tribute idea and write a respectful line of gratitude. A supporting detail is: A calm line of thanks can honour courage and service.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-hb-r2",
        "A classmate claims: “Homage works best as loud jokes.” What is the better reply?",
        "Point to evidence: A calm line of thanks can honour courage and service",
        "Agree quickly so the discussion ends",
        "Say literature never needs reasons",
        "a",
        "Reasoning returns to textual evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Literature thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7en-hb-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Find a tribute idea and write a respectful line of gratitude",
        "Homage works best as loud jokes",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Find a tribute idea and write a respectful line of gratitude",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-hb-t2",
        "Write one or two sentences that write a respectful tribute line.",
        ["Find a tribute", "A calm line", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-hb-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Find a tribute idea and write a respectful line of gratitude. One proof is A calm line of thanks can honour courage and service.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Respectful writing must be long and fancy.",
        correction: "Short, sincere lines can honour deeply.",
      },
      {
        idea: "Passive voice is never useful.",
        correction: "Formal tribute can use it carefully.",
      },
    ],
    reflect: {
      prompt: "What respectful words would you choose at a remembrance moment?",
      keyIdeas: ["tribute", "respect", "gratitude"],
    },
    teach: {
      prompt: "Teach the tribute idea and share one respectful line.",
      keyIdeas: ["tribute idea", "respectful line", "dignity"],
    },
    masteryCriteria: "You can find a tribute idea and write a respectful line.",
  },
});

export const myDearSoldiersLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-my-dear-soldiers-core",
  title: "My Dear Soldiers",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-homage-brave-soldiers-core"],
  nextConceptIds: ["ncert-g7-poorvi-rani-abbakka-core"],
  content: {
    objective: "Describe the poem’s tone of gratitude and read a stanza aloud with fitting feeling.",
    wonder: {
      prompt: "How does a poem sound when it speaks to soldiers as “dear” — warm, proud, tender, or all three?",
    },
    explore: {
      text: "Tone is the feeling the voice carries. Describing tone means naming that feeling with evidence. Reading aloud matches voice to tone. Reporting a grateful statement practises indirect speech.",
      activity: {
        prompt: "What should readers practise?",
        choices: [
          {
            id: "tone",
            label: "Name the grateful tone and read a stanza aloud to match it",
            note: "Tone plus aloud reading is the skill pair.",
          },
          {
            id: "flat",
            label: "Read with a flat voice that erases feeling",
            note: "Tone needs voice.",
          },
          {
            id: "angry",
            label: "Force an angry tone the poem does not ask for",
            note: "Stay faithful to gratitude.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "My Dear Soldiers is a poem of gratitude to those who serve.",
        "Tone may be warm, respectful, loving, or proud — proved by word choice.",
        "Reading a stanza aloud should carry that gratitude without shouting.",
        "Indirect speech can report gratitude: The speaker said that soldiers were dearly remembered.",
        "Feeling and accuracy travel together in tribute poems.",
      ],
    },
    examples: [
      {
        caption: "Tone",
        body: "Warm respect in addressing soldiers as dear.",
      },
      {
        caption: "Aloud",
        body: "Steady, sincere voice on words of thanks.",
      },
      {
        caption: "Report",
        body: "She said that their courage would not be forgotten.",
      },
    ],
    connection: "Letters to soldiers, assembly poems, and family readings share this tone work.",
    try: {
      prompt: "Describe the tone in one phrase. Read one stanza aloud to match it.",
      reveal: "Tone: warm gratitude. Aloud: sincere, clear, not rushed.",
    },
    practice: [
      q(
        "g7en-md-p1",
        "Which statement best matches My Dear Soldiers?",
        "Describe the grateful tone and read a stanza aloud with matching feeling",
        "Tone never matters in tribute poems",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Describe the grateful tone and read a stanza aloud with matching feeling",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-md-p2",
        "Which detail best supports careful Grade 7 reading?",
        "Words like dear and thanks help prove a warm, respectful tone",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “Words like dear and thanks help prove a warm, respectful tone” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-md-p3",
        "Which move shows Grade 7 literary reasoning?",
        "Track evidence, then name the idea it builds",
        "Memorise one fancy word and stop thinking",
        "Change the ending so struggle disappears",
        "a",
        "Evidence first keeps interpretation honest.",
        "Proof before claim.",
        "Fancy words alone are not understanding.",
        {
          a: "Evidence leads the idea.",
          b: "One word is not a full reading.",
          c: "Struggle often carries meaning.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7en-md-r1",
        "In your own words, explain why this matters: Describe the grateful tone and read a stanza aloud with matching feeling",
        "It matters because Describe the grateful tone and read a stanza aloud with matching feeling. A supporting detail is: Words like dear and thanks help prove a warm, respectful tone.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-md-r2",
        "A classmate claims: “Tone never matters in tribute poems.” What is the better reply?",
        "Point to evidence: Words like dear and thanks help prove a warm, respectful tone",
        "Agree quickly so the discussion ends",
        "Say literature never needs reasons",
        "a",
        "Reasoning returns to textual evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Literature thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7en-md-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Describe the grateful tone and read a stanza aloud with matching feeling",
        "Tone never matters in tribute poems",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Describe the grateful tone and read a stanza aloud with matching feeling",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-md-t2",
        "Write one or two sentences that describe the poem’s tone with one evidence word.",
        ["Describe the grateful", "Words like dear", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-md-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Describe the grateful tone and read a stanza aloud with matching feeling. One proof is Words like dear and thanks help prove a warm, respectful tone.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Louder always means more respectful.",
        correction: "Sincere calm can honour more than noise.",
      },
      {
        idea: "Indirect speech erases gratitude.",
        correction: "It can report gratitude clearly.",
      },
    ],
    reflect: {
      prompt: "What tone do you want your thanks to carry?",
      keyIdeas: ["tone", "gratitude", "aloud"],
    },
    teach: {
      prompt: "Teach the poem’s tone and demonstrate one stanza aloud.",
      keyIdeas: ["tone", "aloud", "gratitude"],
    },
    masteryCriteria: "You can describe the tone and read a stanza aloud with fitting feeling.",
  },
});

export const raniAbbakkaLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-rani-abbakka-core",
  title: "Rani Abbakka",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-my-dear-soldiers-core"],
  nextConceptIds: [],
  content: {
    objective: "Retell a key episode from Rani Abbakka’s story and name a quality of courage she shows.",
    wonder: {
      prompt: "What does courage look like when it protects a people — strategy, defiance, endurance, or all three?",
    },
    explore: {
      text: "Historical and graphic stories ask for clear retelling and named qualities. Retelling keeps a key episode in order. A quality of courage must be proved by action. Short presentations organise opening, episode, and close.",
      activity: {
        prompt: "What should readers take away?",
        choices: [
          {
            id: "episode-quality",
            label: "A clear retell of a key episode plus a courage quality with proof",
            note: "Episode plus quality is the skill pair.",
          },
          {
            id: "vague",
            label: "Only say “she was brave” with no episode",
            note: "Proof needs a key episode.",
          },
          {
            id: "erase",
            label: "Erase resistance and invent a quiet unrelated ending",
            note: "The chapter centres courage and resistance.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Rani Abbakka is a graphic/historical story of courage and resistance.",
        "Retelling a key episode means naming who acted, what happened, and what followed.",
        "A quality of courage might be defiance, leadership, strategy, or endurance — proved by the episode.",
        "A short presentation can open with who she was, tell one episode, and close with the quality.",
        "Respectful tone keeps historical courage from becoming empty slogan.",
      ],
    },
    examples: [
      {
        caption: "Episode",
        body: "A stand against force that threatened her land and people.",
      },
      {
        caption: "Quality",
        body: "Leadership shown by organising resistance.",
      },
      {
        caption: "Present",
        body: "Opening → episode → quality proved.",
      },
    ],
    connection: "History class, graphic novels, and leadership talks all practise episode-and-quality retells.",
    try: {
      prompt: "Retell one key episode in four beats. Name one courage quality and the action that proves it.",
      reveal: "Beats of the episode. Quality + proving action.",
    },
    practice: [
      q(
        "g7en-ra-p1",
        "Which statement best matches Rani Abbakka?",
        "Retell a key episode and name a courage quality proved by action",
        "Courage needs no episode — only a slogan",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Retell a key episode and name a courage quality proved by action",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-ra-p2",
        "Which detail best supports careful Grade 7 reading?",
        "A resistance action in a key episode proves a courage quality",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “A resistance action in a key episode proves a courage quality” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-ra-p3",
        "Which move shows Grade 7 literary reasoning?",
        "Track evidence, then name the idea it builds",
        "Memorise one fancy word and stop thinking",
        "Change the ending so struggle disappears",
        "a",
        "Evidence first keeps interpretation honest.",
        "Proof before claim.",
        "Fancy words alone are not understanding.",
        {
          a: "Evidence leads the idea.",
          b: "One word is not a full reading.",
          c: "Struggle often carries meaning.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7en-ra-r1",
        "In your own words, explain why this matters: Retell a key episode and name a courage quality proved by action",
        "It matters because Retell a key episode and name a courage quality proved by action. A supporting detail is: A resistance action in a key episode proves a courage quality.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-ra-r2",
        "A classmate claims: “Courage needs no episode — only a slogan.” What is the better reply?",
        "Point to evidence: A resistance action in a key episode proves a courage quality",
        "Agree quickly so the discussion ends",
        "Say literature never needs reasons",
        "a",
        "Reasoning returns to textual evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Literature thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7en-ra-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Retell a key episode and name a courage quality proved by action",
        "Courage needs no episode — only a slogan",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Retell a key episode and name a courage quality proved by action",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-ra-t2",
        "Write one or two sentences that retell a key episode and name a quality of courage.",
        ["Retell a key", "A resistance action", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-ra-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Retell a key episode and name a courage quality proved by action. One proof is A resistance action in a key episode proves a courage quality.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Retelling means copying every panel word for word.",
        correction: "Keep the key beats that change the situation.",
      },
      {
        idea: "Any adjective is a proved quality.",
        correction: "Link the quality to an action.",
      },
    ],
    reflect: {
      prompt: "Which courage quality from this story do you want to practise in smaller daily ways?",
      keyIdeas: ["episode", "courage", "proof"],
    },
    teach: {
      prompt: "Teach one episode and one proved courage quality as a short presentation.",
      keyIdeas: ["retell", "quality", "presentation"],
    },
    masteryCriteria: "You can retell a key episode and name a courage quality with proof.",
  },
});
