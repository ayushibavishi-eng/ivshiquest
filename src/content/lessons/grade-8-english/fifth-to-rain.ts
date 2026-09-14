import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade8EnglishLesson } from "@/content/lessons/grade-8-english/format";

export const caseOfTheFifthWordLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-case-of-the-fifth-word-core",
  title: "The Case of the Fifth Word",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-verghese-kurien-core"],
  nextConceptIds: ["ncert-g8-poorvi-magic-brush-of-dreams-core"],
  content: {
    objective:
      "Infer a hidden meaning from word clues with evidence, and keep subject–verb agreement across phrases and indefinite pronouns.",
    wonder: {
      prompt:
        "When a puzzle hides meaning in a fifth word, what separates a wild guess from an inference you can prove?",
    },
    explore: {
      text: "Mystery reading thrives on inference with evidence: a clue word points, and you name what it suggests. NOTICE agreement across intervening phrases: The list of clues is complete — not are. Indefinite pronouns such as each, everybody, and nobody usually take singular verbs in careful school English: Everybody is ready.",
      activity: {
        prompt: "What should careful detectives practise in this chapter?",
        choices: [
          {
            id: "infer-agree",
            label: "Infer with evidence, and keep agreement across phrases and indefinite pronouns",
            note: "Inference plus agreement craft is the skill pair.",
          },
          {
            id: "guess-only",
            label: "Guess wildly with no clue to point to",
            note: "Evidence anchors inference.",
          },
          {
            id: "break-sva",
            label: "Ignore intervening phrases and let verbs drift from their subjects",
            note: "Agreement keeps clues readable.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The Case of the Fifth Word turns reading into detective work: words hide and reveal meaning.",
        "Inference means naming a hidden idea and pointing to the clue that supports it.",
        "Intervening phrases can distract the ear: The box of letters sits on the desk — subject box, not letters.",
        "Indefinite pronouns like each, everybody, and nobody usually pair with singular verbs in careful school English.",
        "A strong detective sentence both agrees and proves its claim with evidence.",
      ],
    },
    examples: [
      {
        caption: "Inference with evidence",
        body: "The fifth word hints at a meeting place; the clock clue supports that reading.",
      },
      {
        caption: "Agreement across a phrase",
        body: "The set of five words is the key — not are.",
      },
      {
        caption: "Indefinite pronoun",
        body: "Everybody needs one clear clue before shouting a theory.",
      },
    ],
    connection:
      "Riddles, science mysteries, and news headlines all reward evidence-based inference and careful agreement.",
    try: {
      prompt:
        "Write one inference with a pointed clue, one sentence with an intervening phrase that still agrees, and one everybody/each line.",
      reveal:
        "Inference + evidence; subject not the nearest noun; singular verb with everybody/each when school English asks for it.",
    },
    practice: [
      q(
        "g8e-fifth-p1",
        "Which statement best matches this chapter’s skill?",
        "Infer hidden meaning from clues with evidence; keep agreement across phrases and indefinite pronouns",
        "Guess with no evidence and ignore verb agreement",
        "Skip all word clues and invent an ending",
        "a",
        "Inference with proof and careful agreement are the paired skills.",
        "Clue plus agreement.",
        "Guess-only or skip-clue moves miss detective reading.",
        {
          a: "You matched inference with agreement craft.",
          b: "Evidence and agreement both matter.",
          c: "Clues carry the mystery’s meaning.",
        },
      ),
      q(
        "g8e-fifth-p2",
        "Which sentence keeps agreement across an intervening phrase?",
        "The packet of clues is sealed until morning",
        "The packet of clues are sealed until morning",
        "Packet clues sealed of the are until",
        "a",
        "Packet is the subject; is matches it despite of clues.",
        "Find the true subject before the phrase.",
        "Matching the nearest noun can create a mismatch.",
        {
          a: "You agreed with the true subject.",
          b: "Of clues is a phrase, not the subject.",
          c: "Clear order supports agreement.",
        },
      ),
      q(
        "g8e-fifth-p3",
        "Which line best matches careful school English with an indefinite pronoun?",
        "Everybody is waiting for the fifth word",
        "Everybody are waiting for the fifth word",
        "Waiting everybody fifth word are",
        "a",
        "Everybody usually takes a singular verb in careful school English.",
        "Treat everybody as singular here.",
        "Plural drift is a common trap with indefinite pronouns.",
        {
          a: "You matched everybody with is.",
          b: "Are creates a mismatch with everybody here.",
          c: "Clear order keeps the verb choice readable.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-fifth-r1",
        "Explain the difference between a wild guess and an inference with evidence. Use a mystery-reading example.",
        "A wild guess has no clue; an inference names a hidden idea and points to a word or detail that supports it, such as a clock clue suggesting a meeting time.",
        "Contrast plus example.",
        "Calling every guess an inference is incomplete.",
        ["inference", "evidence", "clue"],
      ),
      q(
        "g8e-fifth-r2",
        "A classmate claims: “Nobody care about agreement in mysteries.” What is the better reply?",
        "Careful agreement keeps clues clear; nobody usually takes a singular verb in school English — Nobody cares about muddy clues",
        "Agree that muddy verbs never confuse readers",
        "Say inference never needs readable sentences",
        "a",
        "Agreement supports clear detective writing; nobody pairs with singular care/cares patterns in careful school English.",
        "Clarity serves inference.",
        "Muddy verbs and unreadability weaken mystery talk.",
        {
          a: "You defended agreement and indefinite-pronoun craft.",
          b: "Muddy verbs can confuse clue-reading.",
          c: "Inference needs clear sentences.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-fifth-t1",
        "Without looking back, which idea is closest to the chapter’s heart?",
        "Infer with evidence; keep agreement across phrases and with indefinite pronouns",
        "Ignore clues and verb agreement entirely",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps inference and agreement craft.",
        "Recall clue proof and SVA care.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap skips detective craft.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-fifth-t2",
        "Write one evidenced inference and one agreeing sentence that uses everybody or each.",
        ["because", "clue", "everybody", "each", "is"],
        "A short recall should show proof-based inference and indefinite-pronoun agreement.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["inference", "agreement", "everybody"],
      ),
    ],
    mastery: explainQ(
      "g8e-fifth-m1",
      "Teach a younger detective how to infer with evidence and how to keep agreement across a phrase. Give one example of each.",
      "Point to a clue, then name what it suggests. Keep the true subject in charge: The list of words is complete. Everybody is ready.",
      "Inference example plus agreement example.",
      "Teaching guesses without proof leaves craft unfinished.",
      ["evidence", "subject", "everybody"],
    ),
    misconceptions: [
      {
        idea: "Any dramatic guess counts as inference.",
        correction: "Inference needs a clue you can point to as evidence.",
      },
      {
        idea: "The noun closest to the verb is always the subject.",
        correction: "An intervening phrase can sit between subject and verb; agree with the true subject.",
      },
    ],
    reflect: {
      prompt: "When have you changed a theory after finding one solid clue?",
      keyIdeas: ["inference", "evidence", "agreement"],
    },
    teach: {
      prompt: "Teach inference-with-evidence and one intervening-phrase agreement example.",
      keyIdeas: ["clue", "agreement", "indefinite pronoun"],
    },
    masteryCriteria:
      "You can infer with evidence and keep subject–verb agreement across phrases and indefinite pronouns.",
  },
});

export const magicBrushOfDreamsLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-magic-brush-of-dreams-core",
  title: "The Magic Brush of Dreams",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-case-of-the-fifth-word-core"],
  nextConceptIds: ["ncert-g8-poorvi-spectacular-wonders-core"],
  content: {
    objective:
      "Keep dream and action clear in compound-complex sentences, transform lines without losing meaning, and sort confusable words.",
    wonder: {
      prompt:
        "If a brush could paint wishes into the world, how would you keep the dream clear — and which look-alike words might blur it?",
    },
    explore: {
      text: "Dream stories ask for precise sentence craft. A compound-complex sentence joins clauses so dream and action both stay clear. Sentence transformation changes form without changing core meaning. Confusable words — affect/effect, paint/pant, dream/dreamt patterns in context — can blur art descriptions if mixed up.",
      activity: {
        prompt: "What should readers practise with this dream-brush tale?",
        choices: [
          {
            id: "sentence-craft",
            label: "Write compound-complex lines, transform meaning-safely, and sort confusable words",
            note: "Sentence craft plus word care is the skill set.",
          },
          {
            id: "blur",
            label: "Mix look-alike words so the dream description stays foggy",
            note: "Confusables need sorting, not celebrating.",
          },
          {
            id: "lose-meaning",
            label: "Transform sentences until the core dream meaning disappears",
            note: "Transformation must keep the core idea.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The Magic Brush of Dreams links imagination, wish, and consequence through vivid action.",
        "A compound-complex sentence has at least two independent clauses and one dependent clause — useful when dream, condition, and action travel together.",
        "Transformation might turn active to passive or combine clauses while protecting the same core meaning.",
        "Confusable words need context checks: the effect of the painting; colours that affect mood.",
        "Clear dream-story writing keeps wish, tool, and outcome readable.",
      ],
    },
    examples: [
      {
        caption: "Compound-complex",
        body: "When night fell, she lifted the brush, and the river she painted began to gleam.",
      },
      {
        caption: "Safe transformation",
        body: "She painted a bridge. → A bridge was painted (same core event).",
      },
      {
        caption: "Confusable pair",
        body: "Effect = result. Affect = influence. The painting’s effect affected the village’s hope.",
      },
    ],
    connection:
      "Art reviews, fantasy writing, and editing workshops all need clear multi-clause sentences and careful word choice.",
    try: {
      prompt:
        "Write one compound-complex dream sentence, transform it once without losing meaning, and use affect or effect accurately.",
      reveal:
        "Multi-clause clarity + same-core transform + confusable sorted by meaning.",
    },
    practice: [
      q(
        "g8e-brush-p1",
        "Which statement best matches this chapter’s skill?",
        "Keep dream and action clear in compound-complex sentences; transform safely; sort confusable words",
        "Blur look-alike words and change meaning during transforms",
        "Use only one short clause forever",
        "a",
        "Sentence complexity, safe transforms, and confusable care are the skills.",
        "Clarity is the goal.",
        "Blurring meaning or freezing at one clause misses craft.",
        {
          a: "You matched the chapter’s sentence craft.",
          b: "Blur and meaning-loss are traps.",
          c: "Multi-clause craft matters in dream tales.",
        },
      ),
      q(
        "g8e-brush-p2",
        "Which sentence is compound-complex while keeping dream and action clear?",
        "Although she was tired, she painted a path, and travellers found their way",
        "Painted tired path travellers",
        "Although and she path",
        "a",
        "Although introduces a dependent clause; two independent clauses follow the dream action.",
        "Look for dependent + at least two independents.",
        "Fragments are not compound-complex craft.",
        {
          a: "You built a clear compound-complex line.",
          b: "Fragments lose clause relationships.",
          c: "Full clauses keep dream and action clear.",
        },
      ),
      q(
        "g8e-brush-p3",
        "Which choice sorts the confusable pair for this line: “The painting’s ___ lifted hope”?",
        "effect (the result)",
        "affect as a noun for result in careful school use here",
        "Any random look-alike word",
        "a",
        "Effect names the result that lifted hope.",
        "Result → effect.",
        "Random look-alikes blur the dream description.",
        {
          a: "You chose effect for result.",
          b: "Affect usually means influence as a verb.",
          c: "Sorting confusables protects meaning.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-brush-r1",
        "Explain how to transform a sentence without changing its core dream-story meaning. Give one before/after pattern.",
        "Keep the same actors and event while changing form. Example: She painted a river. → A river was painted by her.",
        "Rule plus pattern.",
        "Changing the event itself is not a faithful transform.",
        ["transform", "meaning", "same"],
      ),
      q(
        "g8e-brush-r2",
        "A classmate claims: “Longer sentences are automatically clearer.” What is the better reply?",
        "Compound-complex lines help only when clauses stay ordered and dream/action remain clear",
        "Agree that length alone equals clarity",
        "Say confusable words never matter in art descriptions",
        "a",
        "Clarity depends on clause control, not length alone.",
        "Order beats bulk.",
        "Confusables and clause craft both matter.",
        {
          a: "You judged clarity by control, not length.",
          b: "Length alone is not clarity.",
          c: "Word care matters in art talk.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-brush-t1",
        "Without looking back, which idea is closest to the chapter’s heart?",
        "Use compound-complex clarity, meaning-safe transforms, and sorted confusable words",
        "Blur meaning and celebrate look-alike mix-ups",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps sentence craft and word care.",
        "Recall clarity, transform, confusables.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap blurs craft.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-brush-t2",
        "Write one compound-complex dream sentence and one meaning-safe transform of a short line. Use affect or effect once.",
        ["although", "and", "effect", "affect", "painted"],
        "A short recall should show multi-clause craft, a transform, and a sorted confusable.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["compound-complex", "transform", "effect"],
      ),
    ],
    mastery: explainQ(
      "g8e-brush-m1",
      "Teach a younger writer compound-complex clarity, one safe transform, and one confusable pair (affect/effect).",
      "Join clauses so dream and action stay clear. Transform form, keep meaning. Effect = result; affect = influence.",
      "Three mini-lessons in one.",
      "Skipping confusables or transforms leaves craft half-taught.",
      ["clause", "transform", "effect"],
    ),
    misconceptions: [
      {
        idea: "Any long sentence with and is compound-complex.",
        correction: "Compound-complex needs at least two independents and one dependent clause.",
      },
      {
        idea: "Affect and effect are free to swap.",
        correction: "In careful school English, effect often names a result; affect often means influence.",
      },
    ],
    reflect: {
      prompt: "If you had a magic brush for one day, what would you paint — and which words would keep that wish clear?",
      keyIdeas: ["dream", "clarity", "words"],
    },
    teach: {
      prompt: "Teach one compound-complex model, one transform, and affect vs effect.",
      keyIdeas: ["compound-complex", "transformation", "confusable"],
    },
    masteryCriteria:
      "You can write a clear compound-complex dream sentence, transform meaning-safely, and sort confusable words.",
  },
});

export const spectacularWondersLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-spectacular-wonders-core",
  title: "Spectacular Wonders",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-magic-brush-of-dreams-core"],
  nextConceptIds: ["ncert-g8-poorvi-the-cherry-tree-core"],
  content: {
    objective:
      "Choose future forms for plans and wonders, notice natural collocations, and write a compact notice or factual report line.",
    wonder: {
      prompt:
        "Standing before a natural wonder, how do you talk about what will happen next — a firm plan, a prediction, or a fixed arrangement?",
    },
    explore: {
      text: "Wonder writing mixes awe with clear future talk. Will often marks prediction; going to marks intention based on evidence; present continuous can mark a fixed arrangement. NOTICE collocations — natural word partnerships like take a journey, natural wonder, make a plan. Notices and reports stay compact and factual.",
      activity: {
        prompt: "What should readers practise in Spectacular Wonders?",
        choices: [
          {
            id: "future-notice",
            label: "Choose future forms, notice collocations, and write a compact notice or report line",
            note: "Future craft plus public writing is the skill set.",
          },
          {
            id: "one-future",
            label: "Use only one future form for every situation forever",
            note: "Purpose guides will / going to / present continuous.",
          },
          {
            id: "fluffy",
            label: "Write notices full of fluff with no factual core",
            note: "Notices and reports need compact facts.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Spectacular Wonders invites awe at places and phenomena while practising precise future language.",
        "Will often fits predictions; going to fits intentions with present evidence; present continuous fits fixed arrangements (We are visiting the canyon tomorrow).",
        "Collocations are natural partnerships: breathtaking view, take photographs, natural wonder.",
        "A notice states who/what/when/where briefly; a report line sticks to observable facts.",
        "Wonder plus clarity lets readers both feel and follow the plan.",
      ],
    },
    examples: [
      {
        caption: "Future forms",
        body: "It will rain on the plateau. We are going to start at dawn. We are meeting the guide at six.",
      },
      {
        caption: "Collocation",
        body: "take a journey / make arrangements / natural wonder",
      },
      {
        caption: "Notice line",
        body: "Notice: Trek briefing at 7 a.m., main gate. Bring water.",
      },
    ],
    connection:
      "Travel blogs, school trip notices, and geography reports all blend future plans with factual compactness.",
    try: {
      prompt:
        "Write one will line, one going to line, one present-continuous arrangement, plus a two-line notice about a wonder visit.",
      reveal:
        "Match form to purpose; keep notice factual; use one natural collocation if you can.",
    },
    practice: [
      q(
        "g8e-won-p1",
        "Which statement best matches this chapter’s skill?",
        "Choose will / going to / present continuous for purpose; notice collocations; write a compact notice or report line",
        "Use one future form for every purpose and write fluffy notices",
        "Ignore word partnerships entirely",
        "a",
        "Future purpose, collocation, and compact public writing are the skills.",
        "Purpose guides form.",
        "One-form-forever and fluff miss craft.",
        {
          a: "You matched future craft with notices.",
          b: "Purpose and facts matter.",
          c: "Collocations support natural wonder language.",
        },
      ),
      q(
        "g8e-won-p2",
        "Which line best shows a fixed arrangement with present continuous?",
        "We are meeting the ranger at sunrise tomorrow",
        "We will meeting the ranger at sunrise tomorrow",
        "Meeting we ranger sunrise are",
        "a",
        "Present continuous can mark a fixed future arrangement.",
        "Be + -ing for arranged future.",
        "Broken forms lose the arrangement sense.",
        {
          a: "You marked a fixed arrangement clearly.",
          b: "Will meeting is not the arrangement pattern.",
          c: "Clear order keeps the plan readable.",
        },
      ),
      q(
        "g8e-won-p3",
        "Which notice line best fits compact factual writing?",
        "Canyon walk: Saturday 6 a.m., south gate. Carry water.",
        "Come somehow whenever for amazing stuff maybe",
        "A long speech with no time or place",
        "a",
        "Notices need clear what/when/where and a useful detail.",
        "Compact facts win.",
        "Vague or endless lines miss notice craft.",
        {
          a: "You wrote a compact factual notice.",
          b: "Vague timing fails notice purpose.",
          c: "Time and place belong in notices.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-won-r1",
        "Explain when you might choose will, going to, or present continuous for a wonder trip. Give one example each.",
        "Will for a prediction (It will be cold). Going to for intention with evidence (Clouds are gathering; it is going to storm). Present continuous for a fixed plan (We are leaving at five).",
        "Three purposes, three examples.",
        "Using one form for every purpose is incomplete.",
        ["will", "going to", "arrangement"],
      ),
      q(
        "g8e-won-r2",
        "A classmate claims: “Collocations are random word piles.” What is the better reply?",
        "Collocations are natural partnerships speakers expect, like natural wonder or take a journey",
        "Agree that any word pair is equally natural",
        "Say notices never use factual partnerships",
        "a",
        "Natural partnerships make wonder language sound fluent.",
        "Notice expected partners.",
        "Random piles and ignoring facts miss craft.",
        {
          a: "You explained collocation as natural partnership.",
          b: "Not every pair sounds natural.",
          c: "Factual notices still use clear wording.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-won-t1",
        "Without looking back, which idea is closest to the chapter’s heart?",
        "Match future forms to purpose, notice collocations, and write compact notices or report lines",
        "Ignore future purpose and write only fluff",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps future forms, collocation, and compact writing.",
        "Recall purpose matching and notices.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap skips craft.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-won-t2",
        "Write one going-to intention, one will prediction, and one compact notice line about a wonder visit.",
        ["going to", "will", "notice", "a.m.", "wonder"],
        "A short recall should show two future purposes and a factual notice.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["future", "collocation", "notice"],
      ),
    ],
    mastery: explainQ(
      "g8e-won-m1",
      "Teach a younger traveller future-form purpose, one collocation, and how to write a two-fact notice.",
      "Will predicts; going to shows evidence-based intention; present continuous marks arrangements. Collocation: natural wonder. Notice: time + place.",
      "Three mini-crafts.",
      "Teaching awe without clear future or notice craft leaves readers lost.",
      ["will", "collocation", "notice"],
    ),
    misconceptions: [
      {
        idea: "Will is the only future form English needs.",
        correction: "Going to and present continuous also mark intention and arrangements.",
      },
      {
        idea: "Notices should sound like long essays.",
        correction: "Notices stay compact: who/what/when/where and a useful detail.",
      },
    ],
    reflect: {
      prompt: "Which natural wonder would you announce in a school notice — and which future form fits your plan?",
      keyIdeas: ["wonder", "future", "notice"],
    },
    teach: {
      prompt: "Teach three future purposes, one collocation, and a model notice.",
      keyIdeas: ["future forms", "collocation", "notice"],
    },
    masteryCriteria:
      "You can choose future forms by purpose, use a natural collocation, and write a compact notice or report line.",
  },
});

export const theCherryTreeLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-the-cherry-tree-core",
  title: "The Cherry Tree",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-spectacular-wonders-core"],
  nextConceptIds: ["ncert-g8-poorvi-harvest-hymn-core"],
  content: {
    objective:
      "Report questions and gentle commands without quotation marks, and keep pronouns clear when retelling growth.",
    wonder: {
      prompt:
        "When a small seed becomes a tree over years, how do you retell the questions and patient requests that shaped its care?",
    },
    explore: {
      text: "Growth stories lean on reported speech. Report a yes/no or wh- question without quotes: He asked whether the seed would grow. She asked where to plant it. Report a gentle command with ask/tell + to: He asked her to water it. Keep pronouns clear so readers know who planted, who waited, and what thrived.",
      activity: {
        prompt: "What should readers practise in The Cherry Tree?",
        choices: [
          {
            id: "report-clear",
            label: "Report questions and requests clearly, and keep pronouns unambiguous",
            note: "Reported speech plus clear reference is the skill pair.",
          },
          {
            id: "fuzzy-who",
            label: "Use they/it so freely that nobody knows who cared for the tree",
            note: "Clear reference protects the growth story.",
          },
          {
            id: "keep-quotes-only",
            label: "Never practise reported questions or ask/tell + to",
            note: "Reporting craft is part of the chapter’s skill.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The Cherry Tree follows patient growth from seed to living presence.",
        "Reported questions drop quotation marks and adjust word order: He asked if it needed sun. She asked when blossoms would come.",
        "Reported commands or requests often use ask/tell + to: Grandfather told him to protect the sapling.",
        "Clear reference means each pronoun points to an obvious noun: the boy, the tree, the season — not a fog of they.",
        "Retelling growth needs both speech craft and pronoun clarity.",
      ],
    },
    examples: [
      {
        caption: "Reported question",
        body: "Direct: “Will it live?” → He asked whether it would live.",
      },
      {
        caption: "Reported request",
        body: "Direct: “Please water it.” → She asked him to water it.",
      },
      {
        caption: "Clear reference",
        body: "Rakesh watched the sapling; he watered it each evening.",
      },
    ],
    connection:
      "Garden journals, science growth logs, and family stories all use reported talk and clear who/what links.",
    try: {
      prompt:
        "Report one yes/no question and one gentle request about caring for a plant. Check that every pronoun has a clear owner.",
      reveal:
        "Whether/if or wh- for questions; ask/tell + to for requests; pronouns point clearly.",
    },
    practice: [
      q(
        "g8e-cherry-p1",
        "Which statement best matches this chapter’s skill?",
        "Report questions and gentle commands clearly; keep pronouns unambiguous in a growth retelling",
        "Leave pronouns foggy and never report speech",
        "Only copy quotation marks forever with no reporting practice",
        "a",
        "Reported speech and clear reference are the paired skills.",
        "Report and clarify.",
        "Foggy pronouns or never reporting miss craft.",
        {
          a: "You matched reporting with clear reference.",
          b: "Clarity protects the growth story.",
          c: "Reporting questions and requests is part of the skill.",
        },
      ),
      q(
        "g8e-cherry-p2",
        "Which line best reports a wh- question without quotation marks?",
        "She asked where the sapling should be planted",
        "She asked “where the sapling should be planted?”",
        "Asked she where planted sapling the",
        "a",
        "Reported wh- questions keep the wh- word and drop quote marks.",
        "Wh- word + statement order in reporting.",
        "Quotes or scrambled order miss the pattern.",
        {
          a: "You reported the wh- question clearly.",
          b: "Reporting typically drops the quote marks.",
          c: "Clear order keeps the question readable.",
        },
      ),
      q(
        "g8e-cherry-p3",
        "Which line best reports a gentle request with ask + to?",
        "He asked her to shield the young tree from goats",
        "He asked her shield the young tree from goats",
        "Asked shield to he her tree",
        "a",
        "Ask + object + to-infinitive reports a request.",
        "Ask someone to do something.",
        "Missing to or scrambling order breaks the pattern.",
        {
          a: "You used ask + to for the request.",
          b: "The to before the verb belongs in this pattern.",
          c: "Clear order keeps the request craft.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-cherry-r1",
        "Explain why clear pronouns matter when retelling a growth story. Give one foggy vs clear pair.",
        "Readers must know who acted and what grew. Foggy: They watered it. Clear: Rakesh watered the sapling.",
        "Reason plus contrast.",
        "Assuming readers guess the referent is incomplete.",
        ["pronoun", "clear", "who"],
      ),
      q(
        "g8e-cherry-r2",
        "A classmate claims: “Reporting questions always keeps the exact quote marks.” What is the better reply?",
        "Reported questions usually drop quotation marks and adjust order, as in She asked whether it would grow",
        "Agree that reporting never changes form",
        "Say growth stories never include questions",
        "a",
        "Reporting changes form while keeping the question’s meaning.",
        "Form shifts; meaning stays.",
        "Growth stories often include questions about care.",
        {
          a: "You explained reported-question craft.",
          b: "Reporting adjusts form.",
          c: "Questions appear in care and growth talk.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-cherry-t1",
        "Without looking back, which idea is closest to the chapter’s heart?",
        "Report questions and requests without quotes; keep pronouns clear in growth retellings",
        "Leave speakers and pronouns forever unclear",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps reported speech and clear reference.",
        "Recall ask/whether and clear who/what.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap skips clarity.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-cherry-t2",
        "Report one question and one request about a growing plant. Use clear names before pronouns.",
        ["asked", "whether", "to", "water", "sapling"],
        "A short recall should show reported question, reported request, and clear reference.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["report", "ask", "pronoun"],
      ),
    ],
    mastery: explainQ(
      "g8e-cherry-m1",
      "Teach a younger gardener how to report a question and a gentle command, and how to keep pronouns clear.",
      "She asked whether the seed would grow. He asked her to water it. Name the person before using he/she/it.",
      "Two report patterns plus reference tip.",
      "Teaching without examples leaves reporting foggy.",
      ["whether", "to", "clear"],
    ),
    misconceptions: [
      {
        idea: "Reported speech must keep every quotation mark.",
        correction: "Reporting usually drops quotes and adjusts word order or uses ask/tell + to.",
      },
      {
        idea: "Pronouns can point to anyone; readers will guess.",
        correction: "Clear reference means each pronoun has an obvious owner in the retelling.",
      },
    ],
    reflect: {
      prompt: "What have you cared for over time — a plant, a skill, a friendship — and what questions shaped that care?",
      keyIdeas: ["growth", "patience", "care"],
    },
    teach: {
      prompt: "Teach reported questions and ask/tell + to with one clear-pronoun retelling.",
      keyIdeas: ["reported question", "reported request", "clear reference"],
    },
    masteryCriteria:
      "You can report questions and gentle commands and keep pronouns clear when retelling growth.",
  },
});

export const harvestHymnLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-harvest-hymn-core",
  title: "Harvest Hymn",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-the-cherry-tree-core"],
  nextConceptIds: ["ncert-g8-poorvi-waiting-for-the-rain-core"],
  content: {
    objective:
      "Read the hymn’s praise of harvest forces with feeling, and drop a needless the with general harvest ideas or plural kinds.",
    wonder: {
      prompt:
        "When a hymn thanks sun, rain, and earth together, which words need the — and which general ideas shine brighter without it?",
    },
    explore: {
      text: "Harvest hymns praise forces larger than one field. NOTICE the zero article: general ideas and plural kinds often need no the — Farmers thank rain and sun; Gratitude grows with harvest songs. Keep the when you mean a specific known thing: the grain in this barn. Read with feeling so praise lands for a listener.",
      activity: {
        prompt: "What should readers practise in Harvest Hymn?",
        choices: [
          {
            id: "zero-praise",
            label: "Feel the hymn’s praise and use the zero article with general harvest ideas",
            note: "Praise voice plus zero article is the skill pair.",
          },
          {
            id: "the-everything",
            label: "Put the before every general idea and plural kind",
            note: "General harvest ideas often drop the.",
          },
          {
            id: "flat-read",
            label: "Read praise in a flat rush with no feeling",
            note: "Hymns ask for paced, sincere reading.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Harvest Hymn gathers gratitude for the powers that ripen grain and sustain life.",
        "The zero article means no article: general Sun and rain as forces, or plural kinds like crops and songs, often appear without the.",
        "Use the when pointing to something specific and known in context.",
        "Reading with feeling means stress on praise words, steady pace, and sincere tone — not shout or mumble.",
        "Grammar discovery and voice together let the hymn’s thanks sound clear.",
      ],
    },
    examples: [
      {
        caption: "Zero article (general)",
        body: "Gratitude rises with rain, sun, and soil.",
      },
      {
        caption: "Specific the",
        body: "The wheat in our field turned gold last week.",
      },
      {
        caption: "Feeling",
        body: "Slow on the praise words; let thanks sound full.",
      },
    ],
    connection:
      "Festival songs, farm journals, and assembly readings all balance general praise language with specific details.",
    try: {
      prompt:
        "Write two praise lines: one with zero article for general forces, one with the for a specific harvest detail. Read both aloud with feeling.",
      reveal:
        "General forces often drop the; specific known items keep the; voice carries thanks.",
    },
    practice: [
      q(
        "g8e-harv-p1",
        "Which statement best matches this chapter’s skill?",
        "Read the hymn’s praise with feeling; drop needless the with general harvest ideas or plural kinds",
        "Put the before every general plural and rush the reading",
        "Ignore whether praise needs voice or article craft",
        "a",
        "Feeling and zero-article awareness are the paired skills.",
        "Praise plus article discovery.",
        "Overusing the or flat reading misses craft.",
        {
          a: "You matched hymn voice with zero article.",
          b: "General ideas often need no the.",
          c: "Voice and articles both matter here.",
        },
      ),
      q(
        "g8e-harv-p2",
        "Which line best shows the zero article with general harvest ideas?",
        "Farmers honour sun, rain, and earth in season",
        "Farmers honour the sun, the rain, and the earth as vague generics every time without purpose",
        "Honour farmers sun the the the",
        "a",
        "General forces can appear without the in hymn-like praise.",
        "General kinds often drop the.",
        "Automatic the-before-everything is not zero-article craft.",
        {
          a: "You used zero article for general forces.",
          b: "Stacking the is not always needed for generics.",
          c: "Clear praise lines need readable order.",
        },
      ),
      q(
        "g8e-harv-p3",
        "Which reading move best fits a harvest hymn?",
        "Pace the praise words so gratitude sounds sincere",
        "Race so fast that thanks become noise",
        "Mumble until no listener hears the idea",
        "a",
        "Feeling needs paced, sincere delivery.",
        "Let praise land.",
        "Racing or mumbling hides the hymn’s thanks.",
        {
          a: "You chose paced sincere reading.",
          b: "Speed can erase meaning.",
          c: "Listeners need to hear the praise.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-harv-r1",
        "Explain when to drop the with harvest language and when to keep it. Give one example of each.",
        "Drop the with general ideas or plural kinds (Gratitude needs rain). Keep the for a specific known item (the grain in this barn).",
        "Rule plus two examples.",
        "Treating every noun the same is incomplete.",
        ["zero", "general", "specific"],
      ),
      q(
        "g8e-harv-r2",
        "A classmate claims: “Hymns do not need article craft.” What is the better reply?",
        "Article choices change whether praise sounds general or specific; zero article often fits general harvest forces",
        "Agree that wording never shapes praise",
        "Say feeling means ignoring all grammar discoveries",
        "a",
        "Zero article is a meaning choice, not decoration.",
        "Meaning guides the.",
        "Feeling and grammar discovery can travel together.",
        {
          a: "You linked articles to praise meaning.",
          b: "Wording shapes how praise lands.",
          c: "Discovery supports expressive reading.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-harv-t1",
        "Without looking back, which idea is closest to the hymn’s craft heart?",
        "Praise with feeling; use zero article for general harvest ideas and keep the for specifics",
        "Always force the before every plural kind",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps hymn feeling and zero-article craft.",
        "Recall general vs specific.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap overuses the.",
          c: "The hymn builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-harv-t2",
        "Write one general zero-article praise line and one specific the line about harvest.",
        ["rain", "sun", "the", "grain", "gratitude"],
        "A short recall should contrast general and specific article use.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["zero article", "specific", "praise"],
      ),
    ],
    mastery: explainQ(
      "g8e-harv-m1",
      "Teach a younger reader zero article for general harvest praise and when to keep the. Model one sincere reading tip.",
      "General forces often need no the: rain and sun. Specific known items keep the: the wheat in our field. Pace praise words sincerely.",
      "Article contrast plus voice tip.",
      "Teaching without examples leaves the discovery foggy.",
      ["zero", "the", "feeling"],
    ),
    misconceptions: [
      {
        idea: "Every noun in English must carry the.",
        correction: "General ideas and many plural kinds can take the zero article.",
      },
      {
        idea: "Feeling means ignoring how articles shape meaning.",
        correction: "Article choices help praise sound general or specific while feeling carries the voice.",
      },
    ],
    reflect: {
      prompt: "What forces — sun, rain, soil, hands — would you thank in a short harvest praise of your own?",
      keyIdeas: ["gratitude", "harvest", "general"],
    },
    teach: {
      prompt: "Teach zero article vs specific the, then model two lines read with feeling.",
      keyIdeas: ["zero article", "specific the", "praise"],
    },
    masteryCriteria:
      "You can use the zero article with general harvest ideas and read praise with feeling.",
  },
});

export const waitingForTheRainLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-waiting-for-the-rain-core",
  title: "Waiting for the Rain",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-harvest-hymn-core"],
  nextConceptIds: ["ncert-g8-poorvi-feathered-friend-core"],
  content: {
    objective:
      "Choose quantifiers for rain, crops, and waiting, and catch a specific weather or farm detail from careful listening or reading.",
    wonder: {
      prompt:
        "When fields wait for rain, how much is enough — a little hope, few clouds, much worry — and which single detail proves the season’s mood?",
    },
    explore: {
      text: "Waiting stories live in amounts and details. NOTICE quantifiers: few/little for small amounts (few clouds, little rain); many/much for larger amounts (many cracks in the soil, much dust). Listening or reading for detail means catching one specific weather or farm fact that anchors the mood.",
      activity: {
        prompt: "What should readers practise in Waiting for the Rain?",
        choices: [
          {
            id: "quant-detail",
            label: "Choose few/little or many/much carefully, and catch a specific weather or farm detail",
            note: "Quantifiers plus detail listening is the skill pair.",
          },
          {
            id: "swap-quant",
            label: "Swap few/little and many/much with no attention to countable sense",
            note: "Quantifier choice follows meaning.",
          },
          {
            id: "no-detail",
            label: "Ignore specific weather or farm details entirely",
            note: "Details prove the waiting mood.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Waiting for the Rain follows hope, worry, and patience around dry fields and longed-for water.",
        "Few and many pair with countable ideas (few clouds, many days); little and much pair with uncountable ideas (little rain, much heat).",
        "A specific detail — cracked earth, a silent well, one dark cloud — turns waiting from abstract to pictured.",
        "Listening for detail means holding that fact long enough to explain the mood it creates.",
        "Quantifiers and details together make the season’s tension readable.",
      ],
    },
    examples: [
      {
        caption: "Few / little",
        body: "Few clouds crossed the sky; little rain reached the roots.",
      },
      {
        caption: "Many / much",
        body: "Many farmers watched the horizon; much dust rose from the path.",
      },
      {
        caption: "Detail",
        body: "The well’s rope hung dry against stone — a detail of thirst.",
      },
    ],
    connection:
      "Farm news, climate talks, and family weather chats all lean on amounts and sharp sensory details.",
    try: {
      prompt:
        "Write two quantifier lines (few/little and many/much) about waiting weather, then name one specific farm or sky detail.",
      reveal:
        "Match quantifier to countable/uncountable sense; one concrete detail anchors mood.",
    },
    practice: [
      q(
        "g8e-rain-p1",
        "Which statement best matches this chapter’s skill?",
        "Choose few/little or many/much with care; catch a specific weather or farm detail",
        "Ignore amounts and skip all concrete details",
        "Use only abstract waiting talk with no pictured fact",
        "a",
        "Quantifiers and detail-catching are the paired skills.",
        "Amounts plus one fact.",
        "Skipping amounts or details misses the chapter craft.",
        {
          a: "You matched quantifiers with detail listening.",
          b: "Amounts and details both matter.",
          c: "Pictured facts carry waiting mood.",
        },
      ),
      q(
        "g8e-rain-p2",
        "Which line best matches little with an uncountable weather idea?",
        "There was little rain on the cracked fields",
        "There was little clouds on the cracked fields",
        "Little were rain clouds fields the",
        "a",
        "Rain as an uncountable idea pairs with little.",
        "Little + uncountable.",
        "Clouds are countable; few fits better than little.",
        {
          a: "You paired little with rain.",
          b: "Clouds usually take few/many.",
          c: "Clear order keeps the quantifier readable.",
        },
      ),
      q(
        "g8e-rain-p3",
        "Which move best shows listening for detail?",
        "Name one specific farm or weather fact that proves the waiting mood",
        "Ignore every concrete fact and keep only a vague feeling word",
        "Invent details that never appear in the lines",
        "a",
        "Detail listening catches a fact that supports the mood.",
        "Hold one pictured fact.",
        "Vague-only or invented-only moves miss faithful detail work.",
        {
          a: "You caught a supporting detail.",
          b: "Feeling needs a pictured anchor.",
          c: "Stay with facts the lines offer.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-rain-r1",
        "Explain how to choose between few and little when talking about waiting for rain. Give one example of each.",
        "Few pairs with countable ideas (few clouds). Little pairs with uncountable ideas (little rain).",
        "Rule plus two examples.",
        "Swapping freely without countable sense is incomplete.",
        ["few", "little", "countable"],
      ),
      q(
        "g8e-rain-r2",
        "A classmate claims: “Any detail is fine, even one you invent.” What is the better reply?",
        "Listening for detail means catching a fact from the lines, then linking it to the waiting mood",
        "Agree that invented facts are the same as textual details",
        "Say quantifiers never connect to mood",
        "a",
        "Faithful detail work points to evidence in the text or spoken lines.",
        "Evidence first.",
        "Quantifiers and details both shape mood talk.",
        {
          a: "You defended evidence-based detail catching.",
          b: "Invented facts are not listening for detail.",
          c: "Amounts help explain waiting mood.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-rain-t1",
        "Without looking back, which idea is closest to the chapter’s heart?",
        "Choose quantifiers carefully; catch a specific weather or farm detail that proves waiting mood",
        "Ignore amounts and details entirely",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps quantifiers and detail catching.",
        "Recall few/little/many/much and one fact.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap skips craft.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-rain-t2",
        "Write one few/little line, one many/much line, and one specific waiting detail.",
        ["few", "little", "many", "much", "rain", "dust"],
        "A short recall should show quantifier care and one concrete detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["quantifier", "detail", "waiting"],
      ),
    ],
    mastery: explainQ(
      "g8e-rain-m1",
      "Teach a younger reader few/little vs many/much for weather talk, and show how one farm detail proves waiting mood.",
      "Few clouds, little rain; many cracks, much heat. Detail: a dry well rope proves thirst and waiting.",
      "Quantifier pairs plus one detail.",
      "Teaching amounts without a pictured detail leaves mood abstract.",
      ["few", "little", "detail"],
    ),
    misconceptions: [
      {
        idea: "Few and little are free to swap in every sentence.",
        correction: "Few fits countable ideas; little fits many uncountable ideas like rain or heat.",
      },
      {
        idea: "Listening for detail means ignoring the main waiting mood.",
        correction: "A specific detail supports and proves the mood.",
      },
    ],
    reflect: {
      prompt: "When have you waited for weather to change — and which single detail made the wait feel real?",
      keyIdeas: ["waiting", "quantifier", "detail"],
    },
    teach: {
      prompt: "Teach quantifier pairs with weather examples, then model catching one farm detail.",
      keyIdeas: ["few/little", "many/much", "listening for detail"],
    },
    masteryCriteria:
      "You can choose quantifiers for rain and crops and catch a specific weather or farm detail.",
  },
});
