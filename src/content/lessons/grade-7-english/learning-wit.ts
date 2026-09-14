import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade7EnglishLesson } from "@/content/lessons/grade-7-english/format";

export const theDayTheRiverSpokeLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-the-day-the-river-spoke-core",
  title: "The Day the River Spoke",
  domainTitle: "Literature",
  prerequisites: [],
  nextConceptIds: ["ncert-g7-poorvi-try-again-core"],
  content: {
    objective: "Track the character’s wish to learn and discuss a barrier and a choice the story presents.",
    wonder: {
      prompt: "If a river could speak, what wish about learning might it answer — and what barrier would still need a human choice?",
    },
    explore: {
      text: "Stories of learning often pair a strong wish with a barrier. Tracking the wish means naming what the character wants. Discussing barrier and choice means seeing how courage or help opens a path.",
      activity: {
        prompt: "What should a careful reader track most in this story?",
        choices: [
          {
            id: "wish",
            label: "The character’s wish to learn, then the barrier and the choice that follows",
            note: "Wish, barrier, and choice build the story’s spine.",
          },
          {
            id: "only-river",
            label: "Only river facts, with no attention to human wishes",
            note: "The river scene serves the learning wish.",
          },
          {
            id: "skip",
            label: "Skip the barrier and invent an easy ending",
            note: "The barrier gives the choice meaning.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The Day the River Spoke links nature, courage, and the wish to learn.",
        "Tracking the wish means saying what the character longs for in clear words.",
        "A barrier may be fear, rule, distance, or doubt — something that blocks the wish.",
        "A choice shows how the character responds: asking, trying, listening, or risking.",
        "Inference grows when you use story evidence to explain why the choice matters.",
      ],
    },
    examples: [
      {
        caption: "Wish",
        body: "A longing to learn or to be heard by the river’s wisdom.",
      },
      {
        caption: "Barrier",
        body: "A rule, fear, or circumstance that stands in the way.",
      },
      {
        caption: "Choice",
        body: "An action that faces the barrier instead of freezing.",
      },
    ],
    connection: "School wishes, family rules, and nature walks can hold the same wish–barrier–choice pattern.",
    try: {
      prompt: "Name the character’s wish, one barrier, and one choice in three short lines.",
      reveal: "Wish: to learn. Barrier: what blocks learning. Choice: the brave or clever step taken.",
    },
    practice: [
      q(
        "g7en-rs-p1",
        "Which statement best matches this story’s reading skill?",
        "Track the wish to learn, then discuss the barrier and the choice that responds to it",
        "The story is only about river geography with no human wish",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Track the wish to learn, then discuss the barrier and the choice that responds to it",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-rs-p2",
        "Which detail best supports careful Grade 7 reading?",
        "The character’s wish meets a barrier that forces a meaningful choice",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “The character’s wish meets a barrier that forces a meaningful choice” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-rs-p3",
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
        "g7en-rs-r1",
        "In your own words, explain why this matters: Track the wish to learn, then discuss the barrier and the choice that responds to it",
        "It matters because Track the wish to learn, then discuss the barrier and the choice that responds to it. A supporting detail is: The character’s wish meets a barrier that forces a meaningful choice.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-rs-r2",
        "A classmate claims: “The story is only about river geography with no human wish.” What is the better reply?",
        "Point to evidence: The character’s wish meets a barrier that forces a meaningful choice",
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
        "g7en-rs-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Track the wish to learn, then discuss the barrier and the choice that responds to it",
        "The story is only about river geography with no human wish",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Track the wish to learn, then discuss the barrier and the choice that responds to it",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-rs-t2",
        "Write one or two sentences that name the wish, a barrier, and a choice from the story.",
        ["Track the wish", "The character’s wish", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-rs-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Track the wish to learn, then discuss the barrier and the choice that responds to it. One proof is The character’s wish meets a barrier that forces a meaningful choice.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "A wish without a barrier is the whole story.",
        correction: "Barrier and choice give the wish drama and meaning.",
      },
      {
        idea: "Any guess about the character is an inference.",
        correction: "Inference needs story evidence.",
      },
    ],
    reflect: {
      prompt: "What learning wish of yours has met a barrier — and what choice helped?",
      keyIdeas: ["wish", "barrier", "choice"],
    },
    teach: {
      prompt: "Teach the wish–barrier–choice spine using one story moment.",
      keyIdeas: ["wish", "barrier", "choice"],
    },
    masteryCriteria: "You can track the character’s wish and discuss a barrier and a choice with evidence.",
  },
});

export const tryAgainLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-try-again-core",
  title: "Try Again",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-the-day-the-river-spoke-core"],
  nextConceptIds: ["ncert-g7-poorvi-three-days-to-see-core"],
  content: {
    objective: "Find the poem’s advice about perseverance and read a stanza with feeling.",
    wonder: {
      prompt: "After a fall — on a field, in a test, or in a friendship — what words actually help you stand up again?",
    },
    explore: {
      text: "Perseverance poems turn advice into rhythm. Finding the advice means naming what the poem urges after failure. Reading with feeling lets the advice land for a listener.",
      activity: {
        prompt: "What should readers take from Try Again?",
        choices: [
          {
            id: "advice",
            label: "The poem’s advice to rise after a fall, carried in the stanza’s voice",
            note: "Advice plus feeling is the skill pair.",
          },
          {
            id: "quit",
            label: "A message that quitting is always wiser than trying",
            note: "The poem centres trying again.",
          },
          {
            id: "speed",
            label: "Only racing through lines without hearing the advice",
            note: "Feeling needs paced reading.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Try Again is a poem about perseverance after a fall.",
        "The advice is usually simple and strong: rise, attempt once more, do not let one failure finish you.",
        "Reading a stanza with feeling means pacing, stress, and sincere tone — not shout or mumble.",
        "Collocations like try again or rise again sound natural because the words partner often.",
        "Gist listening or reading catches the heart of the advice before every decorative word.",
      ],
    },
    examples: [
      {
        caption: "Advice",
        body: "After a fall, stand and try once more.",
      },
      {
        caption: "Feeling",
        body: "Slow on the advice words; let courage sound clear.",
      },
      {
        caption: "Gist",
        body: "The poem’s heart is perseverance, not perfection.",
      },
    ],
    connection: "Sports drills, music practice, and revision schedules all need try-again energy.",
    try: {
      prompt: "Write the poem’s advice in one sentence. Read one stanza aloud twice — second time with more feeling.",
      reveal: "Advice: rise and try again after a fall. Aloud: stress the courage words.",
    },
    practice: [
      q(
        "g7en-ta-p1",
        "Which statement best matches Try Again?",
        "The poem advises rising after a fall; reading with feeling carries that advice",
        "The poem celebrates quitting at the first difficulty",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: The poem advises rising after a fall; reading with feeling carries that advice",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-ta-p2",
        "Which detail best supports careful Grade 7 reading?",
        "Lines that urge another attempt after failure hold the advice",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “Lines that urge another attempt after failure hold the advice” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-ta-p3",
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
        "g7en-ta-r1",
        "In your own words, explain why this matters: The poem advises rising after a fall; reading with feeling carries that advice",
        "It matters because The poem advises rising after a fall; reading with feeling carries that advice. A supporting detail is: Lines that urge another attempt after failure hold the advice.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-ta-r2",
        "A classmate claims: “The poem celebrates quitting at the first difficulty.” What is the better reply?",
        "Point to evidence: Lines that urge another attempt after failure hold the advice",
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
        "g7en-ta-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "The poem advises rising after a fall; reading with feeling carries that advice",
        "The poem celebrates quitting at the first difficulty",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: The poem advises rising after a fall; reading with feeling carries that advice",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-ta-t2",
        "Write one or two sentences that state the poem’s advice and how you would read it aloud.",
        ["The poem advises", "Lines that urge", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-ta-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that The poem advises rising after a fall; reading with feeling carries that advice. One proof is Lines that urge another attempt after failure hold the advice.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Reading aloud only means speed.",
        correction: "Feeling needs pace and stress on key words.",
      },
      {
        idea: "Advice poems never connect to real life.",
        correction: "Perseverance is practised in daily attempts.",
      },
    ],
    reflect: {
      prompt: "When did trying again change an outcome for you?",
      keyIdeas: ["advice", "perseverance", "aloud"],
    },
    teach: {
      prompt: "Teach the poem’s advice and demonstrate one stanza with feeling.",
      keyIdeas: ["try again", "feeling", "gist"],
    },
    masteryCriteria: "You can state the poem’s advice and read a stanza with feeling.",
  },
});

export const threeDaysToSeeLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-three-days-to-see-core",
  title: "Three Days to See",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-try-again-core"],
  nextConceptIds: ["ncert-g7-poorvi-animals-birds-dolittle-core"],
  content: {
    objective: "Find a sensory detail in Helen Keller’s reflection and write what you would notice if sight were a short gift.",
    wonder: {
      prompt: "If you had only three days of sight, what would you choose to see first — and why that, not something flashy?",
    },
    explore: {
      text: "Sensory writing notices sight, sound, touch, smell, or taste with precision. Literal details come first; then personal noticing. Expanding noun phrases can sharpen what you would see.",
      activity: {
        prompt: "What should readers practise with Three Days to See?",
        choices: [
          {
            id: "sense",
            label: "Find a sensory detail, then write a careful noticing of your own",
            note: "Detail plus personal noticing is the skill pair.",
          },
          {
            id: "vague",
            label: "Say only “everything is beautiful” with no concrete detail",
            note: "Sensory reading needs specifics.",
          },
          {
            id: "skip",
            label: "Skip senses and list only famous names",
            note: "The text invites sensory attention.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Three Days to See reflects on the gift of the senses, especially sight.",
        "A sensory detail is something seen, heard, touched, smelled, or tasted in the text.",
        "Literal meaning states what is there before adding big interpretations.",
        "Writing what you would notice makes the reflection personal and concrete.",
        "Expanded noun phrases — the bright classroom window, the rough tree bark — sharpen noticing.",
      ],
    },
    examples: [
      {
        caption: "Sensory detail",
        body: "A colour, texture, or face carefully named.",
      },
      {
        caption: "Literal first",
        body: "Name what is seen before claiming what it “means forever.”",
      },
      {
        caption: "Your notice",
        body: "I would notice my family’s faces in morning light.",
      },
    ],
    connection: "Mindful walks, art class, and gratitude notes all practise sensory noticing.",
    try: {
      prompt: "Copy one sensory detail idea from the text’s spirit. Then write two things you would notice in three days of sight.",
      reveal: "Detail: a concrete sense image. Personal: faces, sky, a familiar street — named precisely.",
    },
    practice: [
      q(
        "g7en-td-p1",
        "Which statement best matches Three Days to See?",
        "Find a sensory detail, then write concrete things you would notice",
        "Vague praise without any sensory detail is enough",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Find a sensory detail, then write concrete things you would notice",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-td-p2",
        "Which detail best supports careful Grade 7 reading?",
        "A specific colour, face, or texture counts as a sensory detail",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “A specific colour, face, or texture counts as a sensory detail” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-td-p3",
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
        "g7en-td-r1",
        "In your own words, explain why this matters: Find a sensory detail, then write concrete things you would notice",
        "It matters because Find a sensory detail, then write concrete things you would notice. A supporting detail is: A specific colour, face, or texture counts as a sensory detail.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-td-r2",
        "A classmate claims: “Vague praise without any sensory detail is enough.” What is the better reply?",
        "Point to evidence: A specific colour, face, or texture counts as a sensory detail",
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
        "g7en-td-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Find a sensory detail, then write concrete things you would notice",
        "Vague praise without any sensory detail is enough",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Find a sensory detail, then write concrete things you would notice",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-td-t2",
        "Write one or two sentences that write what you would notice if you had three days to see.",
        ["Find a sensory", "A specific colour,", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-td-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Find a sensory detail, then write concrete things you would notice. One proof is A specific colour, face, or texture counts as a sensory detail.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Sensory detail means only emotion words.",
        correction: "Name what the senses take in.",
      },
      {
        idea: "Literal meaning is useless.",
        correction: "Literal details anchor honest response.",
      },
    ],
    reflect: {
      prompt: "What ordinary sight would you miss most if it vanished?",
      keyIdeas: ["sensory", "notice", "literal"],
    },
    teach: {
      prompt: "Teach sensory detail with one text clue and one personal noticing.",
      keyIdeas: ["sensory detail", "write noticing", "precise"],
    },
    masteryCriteria: "You can find a sensory detail and write concrete things you would notice.",
  },
});

export const animalsBirdsDolittleLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-animals-birds-dolittle-core",
  title: "Animals, Birds, and Dr. Dolittle",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-three-days-to-see-core"],
  nextConceptIds: ["ncert-g7-poorvi-a-funny-man-core"],
  content: {
    objective: "Notice humour in the animal text and describe a character with precise words.",
    wonder: {
      prompt: "What makes talking with animals funny — the surprise, the manners, or the gap between human rules and animal sense?",
    },
    explore: {
      text: "Humour often lives in witty talk and unexpected behaviour. Noticing humour means naming the gap that makes you smile. Character description needs traits proved by actions or speech.",
      activity: {
        prompt: "What should readers notice most?",
        choices: [
          {
            id: "humour",
            label: "A humorous gap in talk or behaviour, plus a character trait with proof",
            note: "Humour plus character is the skill pair.",
          },
          {
            id: "list",
            label: "Only a list of animal names with no wit",
            note: "The chapter invites humour and character.",
          },
          {
            id: "mean",
            label: "Humour that only mocks without wit",
            note: "Gentle wit differs from unkind mockery.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Animals, Birds, and Dr. Dolittle plays with humour in character and talk.",
        "Noticing humour means pointing to the unexpected line or situation that creates the smile.",
        "Describing a character means naming a trait — curious, kind, odd, determined — with proof.",
        "Adjective versus adverb care keeps description precise: a funny scene vs speaking oddly.",
        "Discussion moves let classmates build on each other’s humour finds.",
      ],
    },
    examples: [
      {
        caption: "Humour",
        body: "An animal reply that breaks human expectation.",
      },
      {
        caption: "Character",
        body: "Dolittle’s curiosity shows in how he listens to creatures.",
      },
      {
        caption: "Word choice",
        body: "He speaks kindly (adverb) and is a kind listener (adjective).",
      },
    ],
    connection: "Comics, class plays, and pet stories all practise humour and character talk.",
    try: {
      prompt: "Name one humorous moment and one character trait with a proving action.",
      reveal: "Humour: an unexpected animal line. Trait: curious — shown by listening carefully.",
    },
    practice: [
      q(
        "g7en-dd-p1",
        "Which statement best matches this humorous text?",
        "Notice humour in talk or behaviour and describe a character with proof",
        "Character description needs no proof from the text",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Notice humour in talk or behaviour and describe a character with proof",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-dd-p2",
        "Which detail best supports careful Grade 7 reading?",
        "A witty line or odd animal reply can create the humour",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “A witty line or odd animal reply can create the humour” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-dd-p3",
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
        "g7en-dd-r1",
        "In your own words, explain why this matters: Notice humour in talk or behaviour and describe a character with proof",
        "It matters because Notice humour in talk or behaviour and describe a character with proof. A supporting detail is: A witty line or odd animal reply can create the humour.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-dd-r2",
        "A classmate claims: “Character description needs no proof from the text.” What is the better reply?",
        "Point to evidence: A witty line or odd animal reply can create the humour",
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
        "g7en-dd-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Notice humour in talk or behaviour and describe a character with proof",
        "Character description needs no proof from the text",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Notice humour in talk or behaviour and describe a character with proof",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-dd-t2",
        "Write one or two sentences that describe a character and one humorous moment.",
        ["Notice humour in", "A witty line", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-dd-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Notice humour in talk or behaviour and describe a character with proof. One proof is A witty line or odd animal reply can create the humour.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Any insult counts as humour.",
        correction: "Wit can be playful without cruelty.",
      },
      {
        idea: "Adjectives and adverbs are interchangeable.",
        correction: "They modify different kinds of words.",
      },
    ],
    reflect: {
      prompt: "Which humorous character from any story do you remember — and why?",
      keyIdeas: ["humour", "character", "proof"],
    },
    teach: {
      prompt: "Teach noticing humour and proving a character trait.",
      keyIdeas: ["humour gap", "trait", "proof"],
    },
    masteryCriteria: "You can notice humour and describe a character with textual proof.",
  },
});

export const aFunnyManLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-a-funny-man-core",
  title: "A Funny Man",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-animals-birds-dolittle-core"],
  nextConceptIds: ["ncert-g7-poorvi-say-the-right-thing-core"],
  content: {
    objective: "Find a funny image in the poem and read aloud for playful fun.",
    wonder: {
      prompt: "Have you met a person — or a poem character — whose contradictions make you laugh and think at once?",
    },
    explore: {
      text: "Funny poems often paint contradictory images. Finding the image means picturing the odd detail. Reading aloud for fun means sharing the smile without rushing the punch.",
      activity: {
        prompt: "What should readers seek in A Funny Man?",
        choices: [
          {
            id: "image",
            label: "A funny contradictory image, voiced aloud with playful timing",
            note: "Image plus playful reading is the skill pair.",
          },
          {
            id: "lecture",
            label: "Only a serious lecture with no smile",
            note: "The poem invites playful contradiction.",
          },
          {
            id: "mumble",
            label: "Mumble so fast the funny image never lands",
            note: "Fun needs clear timing.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A Funny Man plays with playful contradiction in verse.",
        "A funny image is a picture in words that surprises — odd clothes, odd habits, odd claims.",
        "Reading aloud for fun keeps rhythm light and clear so listeners catch the joke.",
        "Confusable words can spoil a line if mixed — choose the word that fits the image.",
        "Humour here invites shared laughter, not unkind targeting.",
      ],
    },
    examples: [
      {
        caption: "Funny image",
        body: "A detail that should not fit — and that is why it amuses.",
      },
      {
        caption: "Aloud",
        body: "Pause before the surprising word; let the laugh arrive.",
      },
      {
        caption: "Care",
        body: "Playful tone, not mocking a real classmate.",
      },
    ],
    connection: "Nonsense verse, class recitation, and comic strips practise funny images aloud.",
    try: {
      prompt: "Name one funny image from the poem’s spirit. Read four lines aloud for fun.",
      reveal: "Image: a contradictory picture. Aloud: clear, playful, timed.",
    },
    practice: [
      q(
        "g7en-fm-p1",
        "Which statement best matches A Funny Man?",
        "Find a funny contradictory image and read aloud so the humour lands",
        "Funny poems should never be read aloud",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Find a funny contradictory image and read aloud so the humour lands",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-fm-p2",
        "Which detail best supports careful Grade 7 reading?",
        "An odd, contradictory picture in the lines creates the humour",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “An odd, contradictory picture in the lines creates the humour” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-fm-p3",
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
        "g7en-fm-r1",
        "In your own words, explain why this matters: Find a funny contradictory image and read aloud so the humour lands",
        "It matters because Find a funny contradictory image and read aloud so the humour lands. A supporting detail is: An odd, contradictory picture in the lines creates the humour.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-fm-r2",
        "A classmate claims: “Funny poems should never be read aloud.” What is the better reply?",
        "Point to evidence: An odd, contradictory picture in the lines creates the humour",
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
        "g7en-fm-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Find a funny contradictory image and read aloud so the humour lands",
        "Funny poems should never be read aloud",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Find a funny contradictory image and read aloud so the humour lands",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-fm-t2",
        "Write one or two sentences that name a funny image and how you would read it aloud.",
        ["Find a funny", "An odd, contradictory", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-fm-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Find a funny contradictory image and read aloud so the humour lands. One proof is An odd, contradictory picture in the lines creates the humour.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Faster reading is always funnier.",
        correction: "Timing and clarity make humour land.",
      },
      {
        idea: "Confusable words never matter in poems.",
        correction: "The precise word paints the image.",
      },
    ],
    reflect: {
      prompt: "What funny image from a poem or comic stays in your mind?",
      keyIdeas: ["funny image", "aloud", "play"],
    },
    teach: {
      prompt: "Teach one funny image and demonstrate playful reading.",
      keyIdeas: ["image", "timing", "fun"],
    },
    masteryCriteria: "You can find a funny image and read aloud for playful fun.",
  },
});

export const sayTheRightThingLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-say-the-right-thing-core",
  title: "Say the Right Thing",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-a-funny-man-core"],
  nextConceptIds: ["ncert-g7-poorvi-brothers-great-invention-core"],
  content: {
    objective: "Spot a speech choice in the text and role-play a polite line with fitting register.",
    wonder: {
      prompt: "When has a single sentence healed a moment — or made it worse — because of how it was said?",
    },
    explore: {
      text: "Speech choices show kindness, honesty, or haste. Spotting them means naming what was said and why it fits. Polite lines need register: formal or informal words matched to the situation, with careful quotation punctuation when written.",
      activity: {
        prompt: "What should readers practise?",
        choices: [
          {
            id: "speech",
            label: "Spot a speech choice, then craft a polite line with fitting register",
            note: "Speech choice plus polite practice is the skill pair.",
          },
          {
            id: "rude",
            label: "Practise the rudest line possible for laughs only",
            note: "The chapter centres saying the right thing kindly.",
          },
          {
            id: "ignore",
            label: "Ignore how words sound and only count word length",
            note: "Tone and register matter.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Say the Right Thing explores choosing words wisely and kindly.",
        "A speech choice is a line that reveals care, wit, honesty, or mistake.",
        "Role-playing a polite line practises register — formal for elders or strangers, warmer informality for close friends when appropriate.",
        "Written dialogue needs speech punctuation so the quoted words are clear.",
        "Register in use means the polite idea actually sounds right in the moment.",
      ],
    },
    examples: [
      {
        caption: "Speech choice",
        body: "A character softens a hard truth with respect.",
      },
      {
        caption: "Polite line",
        body: "Could you help me understand? instead of a sharp demand.",
      },
      {
        caption: "Punctuation",
        body: "“Please wait,” she said, “and I will explain.”",
      },
    ],
    connection: "Classroom debates, family apologies, and guest conversations all need the right thing said well.",
    try: {
      prompt: "Spot one speech choice from the text’s idea. Write and punctuate one polite line you could use this week.",
      reveal: "Choice: a kind or wise line. Your line: quoted or spoken with fitting register.",
    },
    practice: [
      q(
        "g7en-sr-p1",
        "Which statement best matches Say the Right Thing?",
        "Spot a speech choice and practise a polite line with fitting register",
        "Any loud sentence is automatically the right thing",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Spot a speech choice and practise a polite line with fitting register",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-sr-p2",
        "Which detail best supports careful Grade 7 reading?",
        "A polite question or softened truth can be the wiser speech choice",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “A polite question or softened truth can be the wiser speech choice” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-sr-p3",
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
        "g7en-sr-r1",
        "In your own words, explain why this matters: Spot a speech choice and practise a polite line with fitting register",
        "It matters because Spot a speech choice and practise a polite line with fitting register. A supporting detail is: A polite question or softened truth can be the wiser speech choice.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-sr-r2",
        "A classmate claims: “Any loud sentence is automatically the right thing.” What is the better reply?",
        "Point to evidence: A polite question or softened truth can be the wiser speech choice",
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
        "g7en-sr-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Spot a speech choice and practise a polite line with fitting register",
        "Any loud sentence is automatically the right thing",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Spot a speech choice and practise a polite line with fitting register",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-sr-t2",
        "Write one or two sentences that write a polite line with clear register for a real situation.",
        ["Spot a speech", "A polite question", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-sr-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Spot a speech choice and practise a polite line with fitting register. One proof is A polite question or softened truth can be the wiser speech choice.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Polite always means dishonest.",
        correction: "Polite can still be truthful and clear.",
      },
      {
        idea: "Register never changes with audience.",
        correction: "Formal and informal words fit different moments.",
      },
    ],
    reflect: {
      prompt: "Which polite line do you want ready for a hard conversation?",
      keyIdeas: ["speech choice", "polite", "register"],
    },
    teach: {
      prompt: "Teach spotting a speech choice and model one polite line.",
      keyIdeas: ["choice", "register", "punctuation"],
    },
    masteryCriteria: "You can spot a speech choice and role-play a polite line with fitting register.",
  },
});
