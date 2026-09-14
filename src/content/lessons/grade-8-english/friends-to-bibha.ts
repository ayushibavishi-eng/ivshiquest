import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade8EnglishLesson } from "@/content/lessons/grade-8-english/format";

export const featheredFriendLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-feathered-friend-core",
  title: "Feathered Friend",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-waiting-for-the-rain-core"],
  nextConceptIds: ["ncert-g8-poorvi-magnifying-glass-core"],
  content: {
    objective:
      "Build a short debate turn about care or companionship, and expand one note taken while following a bird-story episode.",
    wonder: {
      prompt:
        "What does a feathered companion teach about responsibility — and how would you argue for care with a claim, a reason, and a calm reply to doubt?",
    },
    explore: {
      text: "Feathered Friend invites talk about companionship and duty. Debate structure needs a claim, a reason, and a short rebuttal to a challenge. While following an episode, jot key words — then expand one note into a full sentence so listening becomes usable memory.",
      activity: {
        prompt: "What should readers practise with this bird companionship chapter?",
        choices: [
          {
            id: "debate-notes",
            label: "Give claim–reason–rebuttal about care, and expand one listening note",
            note: "Debate moves plus note expansion is the skill pair.",
          },
          {
            id: "shout-only",
            label: "Shout opinions with no reason and no reply to another view",
            note: "Debate needs reason and rebuttal.",
          },
          {
            id: "no-notes",
            label: "Never jot key words while following the episode",
            note: "Notes help memory become sentences.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Feathered Friend explores companionship between humans and birds, including care, risk, and loyalty.",
        "A debate turn can be tiny yet complete: claim (Birds need steady care), reason (Hunger and fear rise without it), rebuttal (Even busy people can keep a short daily check).",
        "Notes while listening capture key words — food, perch, warning call — without writing every sentence.",
        "Expanding one note means turning a keyword into a full idea you can use in talk or writing.",
        "Care arguments stay stronger when reasons and replies stay calm and specific.",
      ],
    },
    examples: [
      {
        caption: "Debate turn",
        body: "Claim: Companionship needs duty. Reason: A bird depends on regular food and safety. Rebuttal: Fun alone is not enough care.",
      },
      {
        caption: "Listening note",
        body: "Keywords: whistle, cage latch, shared work.",
      },
      {
        caption: "Expanded note",
        body: "The latch detail shows how small safety habits protect a feathered friend.",
      },
    ],
    connection:
      "Pet-care talks, club debates, and science observations all use claim–reason–reply and quick notes that grow into sentences.",
    try: {
      prompt:
        "Write one claim, one reason, and one short rebuttal about caring for a bird. Jot three keywords, then expand one into a sentence.",
      reveal:
        "Claim + reason + rebuttal; keywords → one expanded sentence.",
    },
    practice: [
      q(
        "g8e-feath-p1",
        "Which statement best matches this chapter’s skill?",
        "Build claim–reason–rebuttal about care; jot keywords and expand one listening note",
        "Shout opinions with no reasons and take no notes",
        "Ignore companionship questions entirely",
        "a",
        "Debate structure and note expansion are the paired skills.",
        "Argue with reasons; grow notes into sentences.",
        "Shouting or note-free listening misses craft.",
        {
          a: "You matched debate craft with note expansion.",
          b: "Reasons and notes both matter.",
          c: "Companionship questions drive the chapter.",
        },
      ),
      q(
        "g8e-feath-p2",
        "Which set best shows a complete mini debate turn?",
        "Claim: Care is daily. Reason: Birds need food and safety. Rebuttal: Busy days still allow a short check",
        "Claim only, with no reason and no reply to doubt",
        "Rebuttal only, with no claim stated",
        "a",
        "Claim, reason, and rebuttal complete a small debate structure.",
        "Three parts, one turn.",
        "Missing parts leave the debate unfinished.",
        {
          a: "You built a full mini debate turn.",
          b: "A claim alone is not full structure.",
          c: "A rebuttal needs a claim to answer.",
        },
      ),
      q(
        "g8e-feath-p3",
        "Which move best shows notes-while-listening craft?",
        "Jot key words during the episode, then expand one note into a full sentence",
        "Write nothing and hope memory stays perfect",
        "Copy every word so densely that no keyword stands out",
        "a",
        "Keywords plus one expansion make listening usable.",
        "Capture, then expand.",
        "No notes or endless copy both weaken the craft.",
        {
          a: "You used keyword notes and expansion.",
          b: "Notes support memory.",
          c: "Keywords should stand out for later use.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-feath-r1",
        "Explain why a rebuttal matters in a care debate about a feathered companion. Give one calm reply pattern.",
        "A rebuttal answers doubt so the claim stays tested. Pattern: Even if time is short, a daily safety check still counts as care.",
        "Reason plus pattern.",
        "Claiming without facing doubt leaves the debate thin.",
        ["rebuttal", "care", "claim"],
      ),
      q(
        "g8e-feath-r2",
        "A classmate claims: “Notes are useless if you expand them later.” What is the better reply?",
        "Keywords catch the episode; expanding one note turns listening into a clear sentence you can use",
        "Agree that notes should never become sentences",
        "Say debate never needs remembered details",
        "a",
        "Notes are seeds; expansion grows them into usable ideas.",
        "Capture then grow.",
        "Debate thrives on remembered details.",
        {
          a: "You defended note expansion.",
          b: "Expansion is the point of useful notes.",
          c: "Details support care arguments.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-feath-t1",
        "Without looking back, which idea is closest to the chapter’s heart?",
        "Argue care with claim–reason–rebuttal; jot keywords and expand one listening note",
        "Avoid reasons, rebuttals, and notes entirely",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps debate structure and note craft.",
        "Recall claim–reason–rebuttal and expand-a-note.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap skips craft.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-feath-t2",
        "Write a three-part care debate turn and expand one keyword note into a sentence about a bird episode.",
        ["claim", "reason", "rebuttal", "note", "bird", "care"],
        "A short recall should show debate parts and one expanded note.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["debate", "notes", "companionship"],
      ),
    ],
    mastery: explainQ(
      "g8e-feath-m1",
      "Teach a younger classmate a mini care debate (claim, reason, rebuttal) and show how to expand one listening note.",
      "Claim: Birds need steady care. Reason: Food and safety. Rebuttal: Short daily checks still count. Note “latch” → The latch habit protects the bird.",
      "Debate model plus note expansion.",
      "Teaching opinions without structure leaves listeners unprepared.",
      ["claim", "rebuttal", "note"],
    ),
    misconceptions: [
      {
        idea: "A debate is only a loud claim.",
        correction: "A useful turn includes a reason and a short reply to doubt.",
      },
      {
        idea: "Listening notes must be full essays in the moment.",
        correction: "Keywords first; expand one note into a sentence afterward.",
      },
    ],
    reflect: {
      prompt: "What living companion — pet, plant, or person — has taught you a duty that goes with affection?",
      keyIdeas: ["care", "companionship", "duty"],
    },
    teach: {
      prompt: "Teach claim–reason–rebuttal, then model jotting and expanding one note.",
      keyIdeas: ["debate structure", "listening notes", "care"],
    },
    masteryCriteria:
      "You can build a claim–reason–rebuttal about care and expand one note from a bird-story episode.",
  },
});

export const magnifyingGlassLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-magnifying-glass-core",
  title: "Magnifying Glass",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-feathered-friend-core"],
  nextConceptIds: ["ncert-g8-poorvi-bibha-chowdhuri-core"],
  content: {
    objective:
      "Describe close looking with common verb/adjective + preposition pairs, and explain what magnification reveals about ordinary things.",
    wonder: {
      prompt:
        "What changes when you look closely at something ordinary — and which tiny word after a verb (at, on, of, for) keeps that looking precise?",
    },
    explore: {
      text: "A magnifying glass trains attention. NOTICE dependent prepositions that partner with verbs or adjectives: look at, focus on, aware of, interested in, suitable for. Close looking reveals texture, pattern, and surprise in ordinary objects. Poetry or prose about magnification asks you to name what appears when scale changes.",
      activity: {
        prompt: "What should readers practise in Magnifying Glass?",
        choices: [
          {
            id: "prep-look",
            label: "Use verb/adjective + preposition pairs while describing what close looking reveals",
            note: "Dependent prepositions plus close observation is the skill pair.",
          },
          {
            id: "any-prep",
            label: "Attach any preposition at random after every verb",
            note: "Common pairs are learned partnerships, not random glue.",
          },
          {
            id: "never-close",
            label: "Never describe what appears under closer attention",
            note: "Revelation under magnification is the literary idea.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Magnifying Glass celebrates the shift from glance to scrutiny.",
        "Dependent prepositions are expected partners: look at a leaf, focus on a vein, be curious about a speck, be aware of a crack.",
        "Choosing the usual pair keeps descriptions natural in school English.",
        "Literary close looking names what was hidden at normal scale: ridges, dust, colour flecks, tiny motion.",
        "Precision in small words supports precision in seeing.",
      ],
    },
    examples: [
      {
        caption: "Verb + preposition",
        body: "She looked at the stamp and focused on the tiny engraved lines.",
      },
      {
        caption: "Adjective + preposition",
        body: "He was interested in the insect’s wing and aware of its fragile veins.",
      },
      {
        caption: "Revelation",
        body: "Under magnification, ordinary cloth became a landscape of threads.",
      },
    ],
    connection:
      "Science labs, detective scenes, and art study all depend on close looking and natural preposition partners.",
    try: {
      prompt:
        "Write three close-looking sentences using look at, focus on, and interested in / aware of. Name one surprise the glass reveals.",
      reveal:
        "Keep common pairs; name a newly visible detail.",
    },
    practice: [
      q(
        "g8e-mag-p1",
        "Which statement best matches this chapter’s skill?",
        "Describe close looking with common verb/adjective + preposition pairs and name what magnification reveals",
        "Attach random prepositions and never name a revealed detail",
        "Skip all attention to small ordinary things",
        "a",
        "Dependent prepositions and revelation under close looking are the skills.",
        "Pairs plus what appears.",
        "Random glue or skipping revelation misses craft.",
        {
          a: "You matched preposition pairs with close looking.",
          b: "Common pairs are not random.",
          c: "Ordinary things matter under magnification.",
        },
      ),
      q(
        "g8e-mag-p2",
        "Which line best uses a natural dependent preposition pair?",
        "She focused on the grain of the wood",
        "She focused at the grain of the wood",
        "Focused she grain wood the on",
        "a",
        "Focus on is the natural partnership in careful school English.",
        "Remember focus on.",
        "Mismatched or scrambled pairs blur the description.",
        {
          a: "You used focus on.",
          b: "Focus at is a common mismatch.",
          c: "Clear order keeps the pair readable.",
        },
      ),
      q(
        "g8e-mag-p3",
        "Which idea best fits literary close looking?",
        "Name a detail that only appears when attention scales in",
        "Refuse to notice anything smaller than a mountain",
        "Claim ordinary objects never hide texture or pattern",
        "a",
        "Magnification writing names newly visible detail.",
        "Scale change reveals.",
        "Refusing smallness misses the poem/story idea.",
        {
          a: "You named revelation under close looking.",
          b: "Small details are the point.",
          c: "Ordinary objects hold hidden texture.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-mag-r1",
        "Explain why dependent prepositions matter when describing close looking. Give two natural pairs.",
        "Readers expect common partners, so meaning stays clear. Examples: look at, focus on, interested in, aware of.",
        "Reason plus pairs.",
        "Treating every preposition as random is incomplete.",
        ["look at", "focus on", "preposition"],
      ),
      q(
        "g8e-mag-r2",
        "A classmate claims: “Interested on is just as natural as interested in.” What is the better reply?",
        "Interested in is the common school-English partnership; interested on sounds like a mismatch",
        "Agree that every preposition pair is equally natural",
        "Say close looking never needs precise wording",
        "a",
        "Dependent prepositions are learned partnerships.",
        "Prefer the natural pair.",
        "Precision helps close-looking descriptions.",
        {
          a: "You defended the natural pair interested in.",
          b: "Not every pair sounds natural.",
          c: "Precise wording serves close looking.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-mag-t1",
        "Without looking back, which idea is closest to the chapter’s heart?",
        "Use common verb/adjective + preposition pairs to describe what close looking reveals",
        "Ignore preposition partners and skip revealed details",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps dependent prepositions and revelation.",
        "Recall look at / focus on and newly visible detail.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap skips craft.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-mag-t2",
        "Write two sentences using look at or focus on and aware of or interested in. Name one magnified surprise.",
        ["look at", "focus on", "aware of", "interested in", "detail"],
        "A short recall should show dependent preposition pairs and a revealed detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["preposition", "looking", "detail"],
      ),
    ],
    mastery: explainQ(
      "g8e-mag-m1",
      "Teach a younger observer two dependent preposition pairs and how magnification reveals an ordinary object’s hidden detail.",
      "Use look at and focus on. Under a glass, cloth becomes threads; name that newly visible detail.",
      "Pairs plus revelation.",
      "Teaching looking without partner words leaves descriptions shaky.",
      ["look at", "focus on", "reveal"],
    ),
    misconceptions: [
      {
        idea: "Any preposition can follow any verb.",
        correction: "Many verbs and adjectives have expected preposition partners in school English.",
      },
      {
        idea: "Close looking never changes what we think we see.",
        correction: "Magnification often reveals texture, pattern, or motion hidden at a glance.",
      },
    ],
    reflect: {
      prompt: "What ordinary object would you choose to study closely — and what might appear that you usually miss?",
      keyIdeas: ["attention", "detail", "scale"],
    },
    teach: {
      prompt: "Teach look at / focus on / interested in, then model one magnified revelation sentence.",
      keyIdeas: ["dependent preposition", "close looking", "reveal"],
    },
    masteryCriteria:
      "You can use common verb/adjective + preposition pairs to describe what close looking reveals.",
  },
});

export const bibhaChowdhuriLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-bibha-chowdhuri-core",
  title: "Bibha Chowdhuri: The Beam of Light",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-magnifying-glass-core"],
  nextConceptIds: [],
  content: {
    objective:
      "Use root and affix clues to unlock science or biography words, and explain how Bibha Chowdhuri’s work shines as a beam of light in research history.",
    wonder: {
      prompt:
        "How can a scientist’s life become a beam of light for others — and how do word parts help unlock the language of discovery?",
    },
    explore: {
      text: "Bibha Chowdhuri: The Beam of Light invites biography reading with science vocabulary. NOTICE roots and affixes: photo- (light), -ology (study), cosmic / cosmos, particle, research, pioneering. Affix clues unlock academic words so the life story stays readable. Track achievement, obstacle, and legacy with evidence.",
      activity: {
        prompt: "What should readers practise in this biography chapter?",
        choices: [
          {
            id: "affix-legacy",
            label: "Unlock science words with roots/affixes and explain how her work lights a path for others",
            note: "Academic word craft plus legacy reading is the skill pair.",
          },
          {
            id: "skip-words",
            label: "Skip every science word and never use affix clues",
            note: "Affixes open biography language.",
          },
          {
            id: "no-legacy",
            label: "Treat the life as random facts with no beam of influence",
            note: "Legacy is part of the chapter’s idea.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "This chapter remembers Bibha Chowdhuri as a pioneering researcher whose work and path illuminate others.",
        "Roots and affixes are meaning tools: bio- (life), -ist (person who), photo-/light imagery in “beam,” cosmic related to cosmos.",
        "Unlocking a word means using the clue, then checking sense in the biography sentence.",
        "A beam of light metaphor suggests guidance: her achievement helps later learners see a path in science.",
        "Biography reading joins word craft with evidence of work, challenge, and influence.",
      ],
    },
    examples: [
      {
        caption: "Affix unlock",
        body: "Cosmic links to cosmos — the wider universe her research touched.",
      },
      {
        caption: "Biography evidence",
        body: "A pioneering experiment or publication shows the work behind the metaphor of light.",
      },
      {
        caption: "Legacy line",
        body: "Her path encourages students who enter research rooms once closed to them.",
      },
    ],
    connection:
      "Museum panels, STEM biographies, and science news all ask readers to unlock academic words and name a lasting influence.",
    try: {
      prompt:
        "Unlock two science/biography words with root or affix clues. Then write one sentence explaining how her work acts as a beam of light for others.",
      reveal:
        "Affix clue → meaning in context; legacy sentence names influence with evidence sense.",
    },
    practice: [
      q(
        "g8e-bibha-p1",
        "Which statement best matches this chapter’s skill?",
        "Use roots and affixes to unlock science words; explain how her work lights a path for others",
        "Skip affix clues and ignore any idea of legacy",
        "Treat the biography as unrelated dictionary scraps",
        "a",
        "Academic affixes and legacy reading are the paired skills.",
        "Unlock words; name influence.",
        "Skipping craft or legacy misses the chapter.",
        {
          a: "You matched word craft with legacy reading.",
          b: "Affixes and influence both matter.",
          c: "The biography builds a coherent idea.",
        },
      ),
      q(
        "g8e-bibha-p2",
        "Which unlock best uses an affix/root clue?",
        "Photo- suggests light, so a “beam of light” metaphor fits discovery and guidance",
        "Photo- must mean noise, so ignore the metaphor",
        "Affixes never help with science biography words",
        "a",
        "Photo-/light clues support reading the beam metaphor.",
        "Use the clue, then check sense.",
        "Dismissing affixes blocks academic reading.",
        {
          a: "You used a light-related root clue.",
          b: "Photo- points toward light, not noise.",
          c: "Affixes help unlock biography science talk.",
        },
      ),
      q(
        "g8e-bibha-p3",
        "Which reading move best explains the “beam of light” idea?",
        "Link her pioneering work to how later learners find a path in science",
        "Say the title is only decoration with no meaning",
        "Ignore achievement, obstacle, and influence",
        "a",
        "The metaphor connects work to guidance for others.",
        "Legacy = path for others.",
        "Decoration-only or ignore-influence moves miss the idea.",
        {
          a: "You linked work to lasting guidance.",
          b: "Titles can carry meaning.",
          c: "Achievement and influence belong in biography reading.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-bibha-r1",
        "Explain how a root or affix clue can unlock a science or biography word. Give one worked example.",
        "Break the word, use the clue, check the sentence. Example: -ist suggests a person who does something; a physicist is a person who works in physics.",
        "Method plus example.",
        "Guessing without the clue is incomplete unlock craft.",
        ["root", "affix", "meaning"],
      ),
      q(
        "g8e-bibha-r2",
        "A classmate claims: “Legacy talk is soft; only lab facts matter.” What is the better reply?",
        "Lab facts matter, and legacy explains how those facts light a path for later scientists and students",
        "Agree that influence never belongs in a biography",
        "Say affixes are unrelated to science reading",
        "a",
        "Evidence of work and influence together complete the beam-of-light reading.",
        "Facts plus path.",
        "Influence and word craft both support biography reading.",
        {
          a: "You joined lab evidence with legacy meaning.",
          b: "Biographies include influence.",
          c: "Affixes help unlock science words.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-bibha-t1",
        "Without looking back, which idea is closest to the chapter’s heart?",
        "Unlock science words with roots/affixes; explain how her pioneering work lights a path for others",
        "Ignore word parts and deny any lasting influence",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps affix unlock and beam-of-light legacy.",
        "Recall roots/affixes and influence.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap skips craft and legacy.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-bibha-t2",
        "Unlock one academic word with a root/affix clue and write one sentence on how her work is a beam of light for others.",
        ["photo", "light", "ist", "cosmic", "path", "pioneer"],
        "A short recall should show affix unlock and a legacy sentence.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["affix", "legacy", "light"],
      ),
    ],
    mastery: explainQ(
      "g8e-bibha-m1",
      "Teach a younger reader how to unlock a science word with an affix clue and how Bibha Chowdhuri’s work acts as a beam of light.",
      "Use a clue like photo- (light) or -ist (person who). Her pioneering research lights a path for later learners in science.",
      "Unlock method plus legacy.",
      "Teaching names without word craft or influence leaves the beam dim.",
      ["affix", "light", "path"],
    ),
    misconceptions: [
      {
        idea: "Academic words can only be memorised whole, never unlocked.",
        correction: "Roots and affixes often reveal meaning that context then confirms.",
      },
      {
        idea: "A science biography is only dates, never influence.",
        correction: "Legacy — how work guides others — is part of reading a life as a beam of light.",
      },
    ],
    reflect: {
      prompt: "Whose work has been a beam of light for your curiosity — and which word about that field could you unlock with an affix?",
      keyIdeas: ["legacy", "discovery", "affix"],
    },
    teach: {
      prompt: "Teach one root/affix unlock, then explain the beam-of-light legacy with one evidence sense.",
      keyIdeas: ["roots and affixes", "biography", "legacy"],
    },
    masteryCriteria:
      "You can unlock a science or biography word with a root or affix clue and explain how her work lights a path for others.",
  },
});
