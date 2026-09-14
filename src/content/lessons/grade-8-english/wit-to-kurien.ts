import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade8EnglishLesson } from "@/content/lessons/grade-8-english/format";

export const witThatWonHeartsLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-wit-that-won-hearts-core",
  title: "The Wit that Won Hearts",
  domainTitle: "Literature",
  prerequisites: [],
  nextConceptIds: ["ncert-g8-poorvi-a-concrete-example-core"],
  content: {
    objective:
      "Trace how clever, kind speech softens conflict, and notice -ing forms that name activities in witty talk.",
    wonder: {
      prompt:
        "When a sharp tongue could wound, what kind of wit actually opens a heart instead of closing a door?",
    },
    explore: {
      text: "Wit that wins hearts is not cruelty dressed as cleverness. Careful readers watch how a speaker turns tension into kindness. NOTICE an -ing form that names an activity — smiling, listening, teasing gently — because those gerunds often carry the scene’s soft power. In discussion, build on a classmate’s idea rather than racing past it. Choose formal courtly wording or informal playful wording to match the moment.",
      activity: {
        prompt: "What should a careful reader practise most in this chapter?",
        choices: [
          {
            id: "wit-kind",
            label: "How witty speech softens conflict, including -ing activities that name the kindness",
            note: "Wit plus kindness is the chapter’s spine.",
          },
          {
            id: "mock",
            label: "Only mocking others so the sharpest line always wins",
            note: "Mockery that wounds is not heart-winning wit.",
          },
          {
            id: "skip-talk",
            label: "Skip how people speak and only list settings",
            note: "Speech choices carry the meaning here.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The Wit that Won Hearts invites readers into scenes where clever talk and kindness work together.",
        "A gerund is an -ing form used as a noun: Listening cooled the quarrel. Teasing lightly opened a smile.",
        "Discussion moves such as “I build on your point…” keep talk thoughtful instead of competitive.",
        "Register shifts matter: a courtly apology may sound formal, while playful banter among friends may sound informal — both can show wit when the tone fits.",
        "Evidence of heart-winning wit is a speech moment that eases tension without erasing truth.",
      ],
    },
    examples: [
      {
        caption: "Gerund as activity",
        body: "Smiling after a sharp joke turned the room from frost to warmth.",
      },
      {
        caption: "Discussion move",
        body: "I build on your idea that kindness, not cruelty, made the wit land.",
      },
      {
        caption: "Register",
        body: "Formal: I beg your pardon. Informal: Oops — that came out sharper than I meant.",
      },
    ],
    connection:
      "Family disagreements, classroom debates, and stage comedies all show how wording can heal or harm.",
    try: {
      prompt:
        "Write one witty line that softens conflict, and circle or name any -ing activity word you used.",
      reveal:
        "A soft witty line plus an -ing activity (listening, joking gently) shows heart-winning wit.",
    },
    practice: [
      q(
        "g8e-wit-p1",
        "Which statement best matches this chapter’s reading skill?",
        "Trace how clever, kind speech softens conflict, noticing -ing forms that name activities",
        "Wit always means wounding someone with the cleverest insult",
        "Skip speech and only memorise the chapter title",
        "a",
        "The strongest choice matches the chapter’s idea: clever kindness and gerunds that name activities.",
        "Stay with wit that opens hearts.",
        "A trap idea treats wit as cruelty or skips speech entirely.",
        {
          a: "You stayed with heart-winning wit and careful noticing.",
          b: "That trap turns wit into wounding.",
          c: "Titles alone are not literary reading.",
        },
      ),
      q(
        "g8e-wit-p2",
        "In “Listening cooled the quarrel,” what job does Listening do?",
        "It names an activity and works like a noun (a gerund)",
        "It only marks ongoing tense with no noun sense",
        "It must be deleted because -ing forms never matter in stories",
        "a",
        "Listening names the activity that cooled the quarrel — a gerund used as a noun.",
        "Ask what the -ing word is naming.",
        "Ignoring gerunds misses a grammar discovery in witty talk.",
        {
          a: "You spotted the gerund naming an activity.",
          b: "Here the -ing form names the activity itself.",
          c: "Gerunds often carry scene meaning.",
        },
      ),
      q(
        "g8e-wit-p3",
        "Which discussion move best fits Grade 8 talk about this text?",
        "I build on your idea that kindness made the joke land gently",
        "I erase your idea so only my joke remains",
        "I refuse to give any reason for my claim",
        "a",
        "Building on a classmate’s idea is a strong discussion move.",
        "Discussion grows when ideas connect.",
        "Erasing others or refusing reasons stalls thinking.",
        {
          a: "You used a constructive discussion move.",
          b: "Erasing ideas shrinks the talk.",
          c: "Claims need reasons in Grade 8 talk.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-wit-r1",
        "Explain why heart-winning wit needs kindness as well as cleverness. Use one detail.",
        "Wit that wins hearts softens conflict; a detail might be a gentle joke or an -ing activity like listening that cools a quarrel.",
        "Idea plus one detail.",
        "Cleverness without kindness misses the chapter’s heart.",
        ["wit", "kindness", "because"],
      ),
      q(
        "g8e-wit-r2",
        "A classmate claims: “Formal words are always colder than informal ones.” What is the better reply?",
        "Register depends on the moment; formal apology can be warm, informal banter can be kind",
        "Agree that formal language can never show care",
        "Say literature never notices wording choices",
        "a",
        "Formal and informal wording both can show wit when they fit the situation.",
        "Match wording to purpose.",
        "Blanket rules about register miss the scene.",
        {
          a: "You judged register by purpose and tone.",
          b: "Formal lines can still be caring.",
          c: "Literature thrives on wording choices.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-wit-t1",
        "Without looking back, which idea is closest to the chapter’s heart?",
        "Clever, kind speech can soften conflict; -ing activity words often name that kindness",
        "Wit means never caring how others feel",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core: heart-winning wit and noticing gerunds in talk.",
        "Recall wit plus kindness.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap misses kindness.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-wit-t2",
        "Write one or two sentences naming one witty kindness moment and one -ing activity word that fits it.",
        ["wit", "listening", "kindness", "because", "ing"],
        "A short recall should name kindness in speech and an -ing activity.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["wit", "gerund", "kindness"],
      ),
    ],
    mastery: explainQ(
      "g8e-wit-m1",
      "Teach a younger reader how wit can win a heart. Use one speech detail and one -ing activity word as proof.",
      "Heart-winning wit softens conflict with clever kindness. Proof might be a gentle joke after listening cooled the quarrel.",
      "Idea plus proof.",
      "Teaching without a speech detail leaves the listener guessing.",
      ["wit", "kindness", "gerund"],
    ),
    misconceptions: [
      {
        idea: "The sharpest insult is always the best wit.",
        correction: "Wit that wins hearts eases tension; cruelty closes hearts.",
      },
      {
        idea: "Every -ing word is only a tense marker, never a noun.",
        correction: "When -ing names an activity, it can work as a gerund (a noun).",
      },
    ],
    reflect: {
      prompt: "When has a kind joke or careful wording helped you after a tense moment?",
      keyIdeas: ["wit", "kindness", "register"],
    },
    teach: {
      prompt: "Teach heart-winning wit with one speech moment and one gerund example.",
      keyIdeas: ["clever kindness", "gerund", "discussion move"],
    },
    masteryCriteria:
      "You can explain how witty kindness softens conflict and spot an -ing form that names an activity.",
  },
});

export const aConcreteExampleLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-a-concrete-example-core",
  title: "A Concrete Example",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-wit-that-won-hearts-core"],
  nextConceptIds: ["ncert-g8-poorvi-wisdom-paves-the-way-core"],
  content: {
    objective:
      "See how a concrete example builds a claim, and use punctuation and editing to keep the explanation clear.",
    wonder: {
      prompt:
        "Why does one solid example often persuade more than a pile of vague adjectives — and how is that paragraph built?",
    },
    explore: {
      text: "A concrete example turns a claim into something a reader can picture. NOTICE how a strong paragraph often moves claim → detail → close. A semicolon can join two closely related ideas; a colon can introduce a clear example. Editing for agreement, tense, or punctuation keeps the explanation trustworthy.",
      activity: {
        prompt: "What should readers practise in A Concrete Example?",
        choices: [
          {
            id: "claim-detail",
            label: "How claim, concrete detail, and close build a clear explanation",
            note: "Structure plus example is the skill pair.",
          },
          {
            id: "vague",
            label: "Only stacking vague praise with no picture for the reader",
            note: "Concrete detail carries the persuasion.",
          },
          {
            id: "no-edit",
            label: "Never edit punctuation or agreement once words appear",
            note: "Editing keeps meaning clear.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A Concrete Example shows how one clear instance can carry an idea farther than foggy general talk.",
        "Text structure often looks like this: open with a claim, support with a pictured detail, then close the point.",
        "A semicolon joins related independent ideas; a colon can introduce the example you promised.",
        "Editing checks that subject and verb agree, tense stays steady, and marks help the eye.",
        "Readers trust writing that is both concrete and carefully finished.",
      ],
    },
    examples: [
      {
        caption: "Claim → detail → close",
        body: "Claim: Kind words matter. Detail: One apology ended a week of silence. Close: That moment rebuilt trust.",
      },
      {
        caption: "Colon for an example",
        body: "She offered one clear fix: a concrete example the class could see.",
      },
      {
        caption: "Edited line",
        body: "Draft: The examples was strong. Edited: The examples were strong.",
      },
    ],
    connection:
      "Science labs, news features, and persuasive speeches all lean on concrete examples and clean structure.",
    try: {
      prompt:
        "Write a three-part mini-paragraph: claim, one concrete detail, and a short close. Add one colon or semicolon if it helps.",
      reveal:
        "Claim + pictured detail + close; colon or semicolon only when ideas truly join or introduce.",
    },
    practice: [
      q(
        "g8e-conc-p1",
        "Which statement best matches this chapter’s idea?",
        "Build explanation from claim, concrete detail, and close; edit for clear usage",
        "Vague adjectives always beat a pictured example",
        "Skip structure and never revisit punctuation",
        "a",
        "The strongest choice matches claim–detail–close thinking plus careful editing.",
        "Stay with concrete structure.",
        "A trap idea praises fog or skips editing.",
        {
          a: "You stayed with concrete explanation.",
          b: "Vague praise is weaker than a pictured example.",
          c: "Structure and editing support clarity.",
        },
      ),
      q(
        "g8e-conc-p2",
        "Which punctuation move best introduces a promised example?",
        "Use a colon before the clear example you are about to give",
        "Scatter marks randomly so the line looks busy",
        "Never join related ideas with a semicolon even when they belong together",
        "a",
        "A colon can introduce the example the sentence prepares.",
        "Think of colon as a doorway to the example.",
        "Random marks or refusing useful joins blur meaning.",
        {
          a: "You used the colon to open the example.",
          b: "Busy marks do not equal clear structure.",
          c: "Semicolons can join related ideas when needed.",
        },
      ),
      q(
        "g8e-conc-p3",
        "Which edit best improves usage?",
        "Change “The examples was clear” to “The examples were clear”",
        "Leave agreement mismatches so the draft feels “raw”",
        "Delete every concrete detail to shorten the paragraph",
        "a",
        "Editing for agreement keeps the explanation trustworthy.",
        "Match plural subject with plural verb.",
        "Leaving mismatches or deleting detail weakens the text.",
        {
          a: "You edited for agreement.",
          b: "Raw mismatches confuse readers.",
          c: "Concrete detail is the paragraph’s strength.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-conc-r1",
        "Explain why a concrete example persuades more than vague praise. Use the claim–detail–close idea.",
        "A concrete example lets readers picture the claim; claim, detail, and close keep the paragraph built and clear.",
        "Idea plus structure.",
        "Vague praise without a pictured instance is incomplete.",
        ["example", "claim", "detail"],
      ),
      q(
        "g8e-conc-r2",
        "A classmate claims: “Editing kills creativity.” What is the better reply?",
        "Editing for agreement and punctuation helps the creative idea reach the reader clearly",
        "Agree that unclear lines are always more artistic",
        "Say structure never matters in explanations",
        "a",
        "Careful editing serves the idea; it does not erase it.",
        "Clarity is part of craft.",
        "Unclear art still needs a readable path.",
        {
          a: "You defended editing as clarity craft.",
          b: "Fog is not automatic artistry.",
          c: "Structure guides the reader.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-conc-t1",
        "Without looking back, which idea is closest to the chapter’s heart?",
        "A concrete example builds a claim through detail and close; punctuation and editing keep it clear",
        "Examples are decoration and never carry meaning",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps claim–detail–close and careful finishing.",
        "Recall concrete structure.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap dismisses examples.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-conc-t2",
        "Write one claim and one concrete detail that supports it. Mention colon or semicolon only if you use one.",
        ["claim", "example", "detail", "colon", "semicolon"],
        "A short recall should show claim plus pictured support.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["claim", "detail", "example"],
      ),
    ],
    mastery: explainQ(
      "g8e-conc-m1",
      "Teach a younger writer how to build a concrete-example paragraph. Name claim, detail, and close.",
      "Start with a claim, give one pictured detail, then close the point. Use a colon to introduce an example when it helps; edit agreement and marks.",
      "Structure plus proof.",
      "Teaching without naming the three parts leaves the listener guessing.",
      ["claim", "detail", "close"],
    ),
    misconceptions: [
      {
        idea: "Any long paragraph is automatically well built.",
        correction: "Length is not structure; claim, detail, and close build clarity.",
      },
      {
        idea: "Semicolons and colons are interchangeable decoration.",
        correction: "A semicolon joins related ideas; a colon often introduces what follows.",
      },
    ],
    reflect: {
      prompt: "When did one solid example change someone’s mind more than a vague speech?",
      keyIdeas: ["example", "structure", "editing"],
    },
    teach: {
      prompt: "Teach claim–detail–close with one colon or semicolon demonstration.",
      keyIdeas: ["concrete example", "punctuation", "editing"],
    },
    masteryCriteria:
      "You can build a claim with a concrete example and edit a short line for clear usage.",
  },
});

export const wisdomPavesTheWayLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-wisdom-paves-the-way-core",
  title: "Wisdom Paves the Way",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-a-concrete-example-core"],
  nextConceptIds: ["ncert-g8-poorvi-tale-of-valour-core"],
  content: {
    objective:
      "Judge whether a wise claim rests on reasons, and join wisdom details with who, which, or that.",
    wonder: {
      prompt:
        "What separates true wisdom from a confident-sounding slogan — and how do reasons pave the path?",
    },
    explore: {
      text: "Wisdom in literature often looks like guidance that can be tested. Evaluate a claim: does evidence support it, or is it only a warm feeling? NOTICE relative pronouns — who, which, that — joining a detail to a noun: the guide who listened, the choice that opened a path.",
      activity: {
        prompt: "What should careful readers do with a “wise” claim?",
        choices: [
          {
            id: "evaluate",
            label: "Judge whether reasons support the claim, and notice who/which/that links",
            note: "Evaluation plus relative links is the skill pair.",
          },
          {
            id: "feel-only",
            label: "Accept every solemn line because it feels deep",
            note: "Feeling alone is not evaluation.",
          },
          {
            id: "no-join",
            label: "Never join a detail to a noun with who, which, or that",
            note: "Relative pronouns clarify wisdom details.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Wisdom Paves the Way asks readers to walk with guidance that can be examined, not blindly worshipped.",
        "Evaluating a claim means asking for reasons: what evidence or experience supports this advice?",
        "A relative pronoun links extra information: the elder who waited, the path that stayed open.",
        "Who usually points to people; which and that often point to things or ideas — always check sense in context.",
        "Wisdom that can be explained with reasons travels farther than a slogan without proof.",
      ],
    },
    examples: [
      {
        caption: "Supported claim",
        body: "Patience helps: the traveller who waited found a safer ford.",
      },
      {
        caption: "Feeling-only claim",
        body: "“Always rush” sounds bold but offers no reason when danger rises.",
      },
      {
        caption: "Relative link",
        body: "The choice that spared the stranger paved a kinder way.",
      },
    ],
    connection:
      "Advice from elders, coaches, and news columns all deserve the same test: reasons or only feeling?",
    try: {
      prompt:
        "Write one wise-sounding claim and one reason that supports it. Add a who/which/that clause.",
      reveal:
        "Claim + reason + relative detail (who/which/that) shows evaluated wisdom.",
    },
    practice: [
      q(
        "g8e-wis-p1",
        "Which statement best matches this chapter’s skill?",
        "Evaluate whether a wise claim has reasons; join details with who, which, or that",
        "Accept every solemn sentence without asking for support",
        "Delete all relative clauses from every sentence",
        "a",
        "Evaluation and relative linking are the chapter’s paired skills.",
        "Test claims; clarify with relatives.",
        "Blind acceptance or deleting useful links misses the craft.",
        {
          a: "You matched evaluation with relative clarity.",
          b: "Solemn tone is not proof.",
          c: "Relative clauses can sharpen meaning.",
        },
      ),
      q(
        "g8e-wis-p2",
        "Which sentence best uses a relative pronoun to add a wisdom detail?",
        "The guide who listened carefully chose a safer path",
        "The guide listened carefully chose a safer path who",
        "Who the guide path safer carefully",
        "a",
        "Who links the listening detail to the guide.",
        "Place who after the noun it describes.",
        "Scrambled word order breaks the relative link.",
        {
          a: "You joined the detail with who.",
          b: "Who belongs after the noun it describes.",
          c: "Clear order keeps the relative working.",
        },
      ),
      q(
        "g8e-wis-p3",
        "A claim says “Haste always wins.” What evaluation move fits Grade 8?",
        "Ask what reasons or outcomes support or challenge the claim",
        "Applaud the claim because it sounds confident",
        "Refuse to think about reasons at all",
        "a",
        "Evaluating means testing support, not cheering volume.",
        "Reasons pave wisdom.",
        "Confidence without support is a trap idea.",
        {
          a: "You tested the claim with reasons.",
          b: "Confidence is not evidence.",
          c: "Evaluation needs thinking about support.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-wis-r1",
        "Explain the difference between a supported wise claim and a feeling-only slogan. Give one example pattern.",
        "A supported claim offers reasons or outcomes; a slogan may only sound deep. Example: patience helps because waiting found a safer ford.",
        "Contrast plus example.",
        "Treating every solemn line as proven wisdom is incomplete.",
        ["reason", "claim", "evaluate"],
      ),
      q(
        "g8e-wis-r2",
        "A classmate claims: “Relative pronouns are optional decoration.” What is the better reply?",
        "Who, which, or that can join a needed detail to a noun so the wisdom stays clear",
        "Agree that details never need linking",
        "Say evaluation never uses sentences",
        "a",
        "Relative pronouns clarify which person or idea the wisdom describes.",
        "Clarity serves evaluation.",
        "Decoration talk undersells useful grammar.",
        {
          a: "You defended relative clarity.",
          b: "Details often need clear links.",
          c: "Evaluation uses clear sentences.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-wis-t1",
        "Without looking back, which idea is closest to the chapter’s heart?",
        "Judge wise claims by reasons; use who/which/that to attach clear details",
        "Wisdom means never asking for evidence",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps evaluation and relative links.",
        "Recall reasons plus who/which/that.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap skips evaluation.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-wis-t2",
        "Write one supported wise claim using who, which, or that in a short sentence.",
        ["who", "which", "that", "because", "reason"],
        "A short recall should show a claim with a relative detail and a reason sense.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["who", "reason", "wisdom"],
      ),
    ],
    mastery: explainQ(
      "g8e-wis-m1",
      "Teach a younger reader how to test a wise claim and how who/which/that can clarify a detail.",
      "Ask for reasons behind a claim. Then show a relative link: the guide who listened chose safety.",
      "Evaluation plus relative example.",
      "Teaching slogans without reasons leaves listeners unprepared.",
      ["evaluate", "who", "reason"],
    ),
    misconceptions: [
      {
        idea: "If advice sounds ancient, it must be proven.",
        correction: "Age of tone is not evidence; reasons still matter.",
      },
      {
        idea: "Who, which, and that are interchangeable in every sentence.",
        correction: "Choose the relative that fits the noun and the sense of the sentence.",
      },
    ],
    reflect: {
      prompt: "What advice have you tested with real reasons — and what changed?",
      keyIdeas: ["wisdom", "reasons", "relative"],
    },
    teach: {
      prompt: "Teach claim evaluation with one who/which/that demonstration.",
      keyIdeas: ["evaluate", "relative pronoun", "reason"],
    },
    masteryCriteria:
      "You can evaluate a wise claim with reasons and join a detail using who, which, or that.",
  },
});

export const taleOfValourLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-tale-of-valour-core",
  title: "A Tale of Valour: Major Somnath Sharma",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-wisdom-paves-the-way-core"],
  nextConceptIds: ["ncert-g8-poorvi-somebodys-mother-core"],
  content: {
    objective:
      "Honour a deed of courage by choosing active or passive voice wisely, and draft a short formal note of respect.",
    wonder: {
      prompt:
        "When telling a story of courage, when should the doer stay in the spotlight — and when should the deed itself lead the sentence?",
    },
    explore: {
      text: "A tale of valour asks for clear respect. Active voice keeps the doer vivid: Major Sharma held the position. Passive voice can honour the deed when the action matters most: The position was held against heavy odds. A short formal note of respect needs purpose and a polite close.",
      activity: {
        prompt: "What should readers practise with this account of courage?",
        choices: [
          {
            id: "voice-note",
            label: "Choose voice to honour deed or doer, and draft a respectful formal note",
            note: "Voice choice plus formal respect is the skill pair.",
          },
          {
            id: "casual-mock",
            label: "Treat courage as a casual joke with no respectful wording",
            note: "Valour accounts call for dignity.",
          },
          {
            id: "one-voice",
            label: "Use only one voice forever, never matching purpose",
            note: "Purpose guides active or passive choice.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A Tale of Valour: Major Somnath Sharma remembers courage under extreme pressure.",
        "Active voice highlights the person acting; passive voice can foreground the deed or the situation.",
        "Choosing voice is a craft decision: keep the doer clear when identity matters; lead with the deed when the action itself carries honour.",
        "A formal note of respect states purpose briefly, uses polite wording, and closes with courtesy.",
        "Evidence of valour is specific action under risk, not empty praise.",
      ],
    },
    examples: [
      {
        caption: "Active for the doer",
        body: "Major Sharma inspired his men through decisive action.",
      },
      {
        caption: "Passive for the deed",
        body: "The post was defended until reinforcements could arrive.",
      },
      {
        caption: "Formal note close",
        body: "With deep respect, we honour this service. Yours sincerely,",
      },
    ],
    connection:
      "Memorials, school assemblies, and letters of thanks all balance clear doers with respectful tone.",
    try: {
      prompt:
        "Rewrite one courage fact once in active voice and once in passive. Then draft two formal closing lines of respect.",
      reveal:
        "Active keeps the doer; passive can honour the deed; formal close stays polite and purposeful.",
    },
    practice: [
      q(
        "g8e-val-p1",
        "Which statement best matches this chapter’s skill?",
        "Choose active or passive voice to honour doer or deed; draft a short formal note of respect",
        "Never name the person who acted in a valour account",
        "Write only slang when remembering sacrifice",
        "a",
        "Voice choice and formal respect are the paired skills.",
        "Match voice to purpose; keep dignity.",
        "Erasing the doer always, or slang-only tone, misses the craft.",
        {
          a: "You matched voice craft with respectful form.",
          b: "Doers often matter in valour tales.",
          c: "Respectful register fits remembrance.",
        },
      ),
      q(
        "g8e-val-p2",
        "Which sentence best uses passive voice to honour the deed?",
        "The ridge was held through the night against heavy odds",
        "Held the ridge through the night against heavy odds they",
        "Ridge night held odds heavy was the through",
        "a",
        "Passive can place the deed (the ridge was held) in the lead.",
        "Lead with the action when the deed is the focus.",
        "Scrambled order loses voice clarity.",
        {
          a: "You led with the deed in passive form.",
          b: "Clear passive needs a readable order.",
          c: "Sense depends on clear structure.",
        },
      ),
      q(
        "g8e-val-p3",
        "Which formal note feature best fits a short note of respect?",
        "Clear purpose, polite wording, and a courteous close",
        "No purpose stated and a rude sign-off",
        "Only emojis with no written purpose",
        "a",
        "Formal respect needs purpose and polite close.",
        "Purpose plus courtesy.",
        "Rude or empty notes miss formal craft.",
        {
          a: "You named the formal note essentials.",
          b: "Purpose and courtesy matter.",
          c: "Written purpose belongs in a formal note.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-val-r1",
        "Explain when you might prefer active voice and when passive voice in a valour account. Give one example of each.",
        "Use active when the doer must stay clear (Major Sharma led). Use passive when the deed leads (The post was defended).",
        "Two purposes, two examples.",
        "Saying one voice is always better without purpose is incomplete.",
        ["active", "passive", "deed"],
      ),
      q(
        "g8e-val-r2",
        "A classmate claims: “Formal notes are fake; slang shows more respect.” What is the better reply?",
        "Formal notes can show genuine respect through clear purpose and polite close",
        "Agree that courtesy always equals emptiness",
        "Say remembrance never needs careful wording",
        "a",
        "Formal wording can carry sincere honour.",
        "Respect has many registers; formal is one fitted tool.",
        "Dismissing formality misses remembrance craft.",
        {
          a: "You defended sincere formal respect.",
          b: "Courtesy can be genuine.",
          c: "Wording choices matter in remembrance.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-val-t1",
        "Without looking back, which idea is closest to the chapter’s heart?",
        "Choose voice to honour doer or deed; write a short formal note with purpose and polite close",
        "Valour stories need no clear doers or respectful tone",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps voice choice and formal respect.",
        "Recall active/passive purpose and formal notes.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap erases honour craft.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-val-t2",
        "Write one active sentence and one passive sentence about a courageous deed, then one polite closing line.",
        ["active", "passive", "respect", "sincerely", "held"],
        "A short recall should show both voices and a respectful close.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["active", "passive", "respect"],
      ),
    ],
    mastery: explainQ(
      "g8e-val-m1",
      "Teach a younger reader how voice choice and a formal note can honour courage. Give one active and one passive example.",
      "Active keeps the doer clear; passive can honour the deed. A formal note states purpose and closes politely.",
      "Voice examples plus note craft.",
      "Teaching praise without craft leaves the listener guessing.",
      ["active", "passive", "formal"],
    ),
    misconceptions: [
      {
        idea: "Passive voice is always weaker and should never appear.",
        correction: "Passive can honour a deed when the action itself should lead.",
      },
      {
        idea: "Formal notes cannot feel sincere.",
        correction: "Clear purpose and polite close can carry genuine respect.",
      },
    ],
    reflect: {
      prompt: "Whose act of courage would you honour in a short formal note — and why?",
      keyIdeas: ["valour", "voice", "respect"],
    },
    teach: {
      prompt: "Teach active vs passive for honour, then model a two-line formal note.",
      keyIdeas: ["active voice", "passive voice", "formal note"],
    },
    masteryCriteria:
      "You can choose active or passive voice to honour courage and draft a short formal note of respect.",
  },
});

export const somebodysMotherLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-somebodys-mother-core",
  title: "Somebody’s Mother",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-tale-of-valour-core"],
  nextConceptIds: ["ncert-g8-poorvi-verghese-kurien-core"],
  content: {
    objective:
      "Name the poem’s compassionate tone and viewpoint, and use relative and noun clauses when reflecting on care.",
    wonder: {
      prompt:
        "Whose eyes does the poem ask us to borrow when an elderly stranger needs help — and how does tone shape that compassion?",
    },
    explore: {
      text: "Somebody’s Mother invites a compassionate viewpoint: see the stranger as someone’s mother. NOTICE defining relative clauses that identify (the boy who stopped) and non-defining extras set off with care. A noun clause can hold a whole idea: What he chose mattered. That she was helped restored dignity. Match register to a respectful, poem-like or everyday situation.",
      activity: {
        prompt: "What should readers practise with this poem?",
        choices: [
          {
            id: "tone-clause",
            label: "Name tone and viewpoint, and use relative or noun clauses in reflective lines",
            note: "Compassion craft plus clause craft is the skill set.",
          },
          {
            id: "mock-elder",
            label: "Treat the elderly figure as a joke with a mocking tone",
            note: "The poem centres dignity and care.",
          },
          {
            id: "no-clause",
            label: "Never add who/that clauses or that/what noun clauses when reflecting",
            note: "Clauses help precise reflection.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Somebody’s Mother asks readers to feel compassion through a clear viewpoint: the stranger belongs to someone.",
        "Tone here leans tender and respectful; viewpoint shapes who we care about and why.",
        "A defining relative clause identifies which person; a non-defining clause adds an extra detail without narrowing identity.",
        "A noun clause can act as subject or object: That she crossed safely mattered. He noticed what others ignored.",
        "Register should fit the moment — poem-like dignity or everyday kindness — without slipping into mockery.",
      ],
    },
    examples: [
      {
        caption: "Defining relative",
        body: "The boy who offered his arm changed the street’s mood.",
      },
      {
        caption: "Noun clause",
        body: "What he chose showed that compassion can be simple and brave.",
      },
      {
        caption: "Tone",
        body: "A respectful, gentle tone keeps the elderly figure’s dignity intact.",
      },
    ],
    connection:
      "Busy crossings, family stories, and community care all ask us to see strangers as somebody’s someone.",
    try: {
      prompt:
        "Write two reflective sentences: one with a relative clause about a helper, one with a that/what noun clause about why care mattered.",
      reveal:
        "Relative clause identifies or adds; noun clause holds the idea of care; tone stays respectful.",
    },
    practice: [
      q(
        "g8e-mom-p1",
        "Which statement best matches this poem’s reading skill?",
        "Name compassionate tone and viewpoint; use relative and noun clauses in reflection",
        "Mock the elderly figure to sound modern",
        "Ignore viewpoint and never use clauses",
        "a",
        "Tone, viewpoint, and clause craft support compassionate reading.",
        "Stay with dignity and precise reflection.",
        "Mockery or clause-avoidance misses the poem.",
        {
          a: "You matched compassion with clause craft.",
          b: "Mockery clashes with the poem’s tone.",
          c: "Viewpoint and clauses deepen reading.",
        },
      ),
      q(
        "g8e-mom-p2",
        "Which line best uses a noun clause as an object?",
        "He noticed that she needed a steady arm",
        "He noticed she needed a steady arm that",
        "That noticed he arm steady needed she",
        "a",
        "That she needed a steady arm works as the object of noticed.",
        "A that-clause can hold the whole idea noticed.",
        "Scrambled order breaks the noun clause.",
        {
          a: "You used a that-clause as object.",
          b: "Keep that with the clause it introduces.",
          c: "Clear order keeps the clause working.",
        },
      ),
      q(
        "g8e-mom-p3",
        "Which register best fits a respectful retelling of the poem’s kindness?",
        "Calm, dignified wording that protects the elderly figure’s humanity",
        "Harsh slang that turns the scene into a joke",
        "No wording choices at all because tone never matters",
        "a",
        "Respectful register matches the poem’s compassion.",
        "Match language to dignity.",
        "Joke slang or ignoring tone mismatches the poem.",
        {
          a: "You matched register to compassion.",
          b: "Joke slang clashes with dignity.",
          c: "Tone and register always matter in poetry.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-mom-r1",
        "Explain how viewpoint shapes compassion in this poem. Mention tone in your answer.",
        "The poem asks us to see the stranger as somebody’s mother; a tender, respectful tone guides that compassion.",
        "Viewpoint plus tone.",
        "Skipping viewpoint leaves compassion unexplained.",
        ["viewpoint", "tone", "compassion"],
      ),
      q(
        "g8e-mom-r2",
        "A classmate claims: “Defining and non-defining relative clauses are the same.” What is the better reply?",
        "Defining identifies which person; non-defining adds an extra detail without narrowing identity",
        "Agree they never differ in purpose",
        "Say poetry never uses relative clauses",
        "a",
        "Purpose differs: identify versus add extra information.",
        "Purpose guides the clause type.",
        "Poetry often uses relatives for precise people and extras.",
        {
          a: "You distinguished defining from non-defining.",
          b: "Purpose differs between the two.",
          c: "Relative clauses appear in reflective poetry talk.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-mom-t1",
        "Without looking back, which idea is closest to the poem’s heart?",
        "Compassionate tone and viewpoint; relative and noun clauses help reflect on care",
        "The poem celebrates mocking strangers",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps compassion craft and clause craft.",
        "Recall tone, viewpoint, clauses.",
        "The trap idea is not the poem’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap clashes with compassion.",
          c: "The poem builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-mom-t2",
        "Write one sentence with a relative clause and one with a that/what noun clause about kindness in the poem.",
        ["who", "that", "what", "compassion", "mother"],
        "A short recall should show both clause types in a kindness reflection.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["relative", "noun clause", "tone"],
      ),
    ],
    mastery: explainQ(
      "g8e-mom-m1",
      "Teach a younger reader the poem’s compassionate viewpoint and show one relative clause and one noun clause example.",
      "See the stranger as somebody’s mother; keep a respectful tone. Example: the boy who helped; What he chose mattered.",
      "Viewpoint plus two clause examples.",
      "Teaching without clause examples leaves craft invisible.",
      ["tone", "who", "that"],
    ),
    misconceptions: [
      {
        idea: "Tone is only about volume, not attitude toward people.",
        correction: "Tone includes the respectful or mocking attitude the words carry.",
      },
      {
        idea: "Noun clauses are only for grammar drills, never for reflection.",
        correction: "That/what clauses can hold whole ideas about why care mattered.",
      },
    ],
    reflect: {
      prompt: "When have you seen — or been — somebody’s someone who needed a steady arm?",
      keyIdeas: ["compassion", "viewpoint", "dignity"],
    },
    teach: {
      prompt: "Teach tone and viewpoint, then model one relative and one noun clause.",
      keyIdeas: ["tone", "relative clause", "noun clause"],
    },
    masteryCriteria:
      "You can name the poem’s compassionate tone and viewpoint and use relative and noun clauses in reflection.",
  },
});

export const vergheseKurienLesson = grade8EnglishLesson({
  conceptId: "ncert-g8-poorvi-verghese-kurien-core",
  title: "Verghese Kurien—I Too Had A Dream",
  domainTitle: "Literature",
  prerequisites: ["ncert-g8-poorvi-somebodys-mother-core"],
  nextConceptIds: ["ncert-g8-poorvi-case-of-the-fifth-word-core"],
  content: {
    objective:
      "Mark earlier and later past events with past perfect in a life story, and plan a short essay about a dream or change.",
    wonder: {
      prompt:
        "How does a personal dream become a public change — and how do earlier choices prepare later breakthroughs?",
    },
    explore: {
      text: "Verghese Kurien—I Too Had A Dream links personal conviction to a larger cooperative story. NOTICE past perfect for the earlier of two pasts: He had trained abroad before he returned to serve. A short essay needs introduction, body, and close when you write about a dream or change.",
      activity: {
        prompt: "What should readers practise with this life-story chapter?",
        choices: [
          {
            id: "timeline-essay",
            label: "Order earlier/later past events and plan a short essay on dream or change",
            note: "Past perfect plus essay shape is the skill pair.",
          },
          {
            id: "no-time",
            label: "Mix all past events with no sense of what came first",
            note: "Timeline clarity matters in life stories.",
          },
          {
            id: "no-plan",
            label: "Write an essay with no introduction, body, or close",
            note: "Short essays need a clear plan.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "This chapter follows a dream that grew into cooperative change in dairy and community work.",
        "Past perfect (had + past participle) marks the earlier event when two pasts appear in one timeline.",
        "Simple past often carries the later event: He had studied engineering before he chose a different path of service.",
        "A short essay plan: introduce the dream or change, develop reasons or steps in the body, then close with what it meant.",
        "Life-story reading asks for both timeline honesty and reflective writing craft.",
      ],
    },
    examples: [
      {
        caption: "Past perfect earlier event",
        body: "He had already imagined a fairer system before the first big success arrived.",
      },
      {
        caption: "Essay skeleton",
        body: "Intro: the dream. Body: one challenge and one step. Close: why the change mattered.",
      },
      {
        caption: "Later past",
        body: "Farmers organised; the dream became shared work.",
      },
    ],
    connection:
      "Biographies, start-up stories, and personal statements all need clear earlier/later timing and essay shape.",
    try: {
      prompt:
        "Write two timeline sentences using had + past participle for the earlier event. Then jot a three-line essay plan about a dream.",
      reveal:
        "Past perfect for earlier; simple past for later; essay = intro, body, close.",
    },
    practice: [
      q(
        "g8e-kur-p1",
        "Which statement best matches this chapter’s skill?",
        "Mark earlier past events with past perfect; plan a short essay on dream or change",
        "Never show which past event came first",
        "Essays need no introduction or close",
        "a",
        "Timeline grammar and essay planning are the paired skills.",
        "Earlier/later plus essay shape.",
        "Fuzzy time or shapeless essays miss the craft.",
        {
          a: "You matched past perfect with essay craft.",
          b: "Order matters in life stories.",
          c: "Short essays need clear parts.",
        },
      ),
      q(
        "g8e-kur-p2",
        "Which sentence best marks the earlier of two past events?",
        "She had trained as an engineer before she joined the cooperative dream",
        "She trains as an engineer before she had joined the cooperative dream",
        "She join had before train cooperative",
        "a",
        "Had trained marks the earlier past before the later joining.",
        "Use had + past participle for the earlier event.",
        "Scrambled tense order confuses the timeline.",
        {
          a: "You marked the earlier event with past perfect.",
          b: "Keep past perfect on the earlier event.",
          c: "Clear order keeps the timeline honest.",
        },
      ),
      q(
        "g8e-kur-p3",
        "Which plan best fits a short Grade 8 essay about a dream?",
        "Introduction of the dream, body with steps or reasons, then a close on meaning",
        "Only a title and no developed body",
        "Random facts with no opening or ending",
        "a",
        "Intro, body, and close give the essay a path.",
        "Plan before you polish.",
        "Title-only or random piles are not short-essay craft.",
        {
          a: "You named a clear essay plan.",
          b: "A body develops the dream.",
          c: "Opening and close guide the reader.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8e-kur-r1",
        "Explain why past perfect helps a life-story timeline. Give one example sentence pattern.",
        "Past perfect marks what happened earlier so the later past stays clear. Example: He had prepared before the first breakthrough came.",
        "Reason plus pattern.",
        "Listing pasts with no earlier mark leaves the timeline foggy.",
        ["had", "earlier", "timeline"],
      ),
      q(
        "g8e-kur-r2",
        "A classmate claims: “Dreams do not need essay structure.” What is the better reply?",
        "A short essay’s intro, body, and close help a dream or change reach readers clearly",
        "Agree that shapeless writing always feels more honest",
        "Say life stories never use timelines",
        "a",
        "Structure helps sincerity travel; it does not erase it.",
        "Plan serves the dream.",
        "Life stories use both timeline and shape.",
        {
          a: "You defended essay shape for dream writing.",
          b: "Shape can carry honesty.",
          c: "Timelines matter in life stories.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8e-kur-t1",
        "Without looking back, which idea is closest to the chapter’s heart?",
        "Use past perfect for earlier pasts; plan a short essay about dream or change",
        "Ignore time order and essay parts entirely",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps past perfect and essay planning.",
        "Recall earlier/later and intro–body–close.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap skips craft.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8e-kur-t2",
        "Write one past-perfect timeline sentence and a three-part essay outline (intro/body/close) about a dream.",
        ["had", "before", "intro", "body", "close", "dream"],
        "A short recall should show earlier past marking and essay shape.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["past perfect", "essay", "dream"],
      ),
    ],
    mastery: explainQ(
      "g8e-kur-m1",
      "Teach a younger reader how past perfect orders a life story and how to plan a short dream essay.",
      "Use had + past participle for the earlier event. Plan intro, body, and close when writing about a dream or change.",
      "Timeline plus essay plan.",
      "Teaching without examples leaves both crafts foggy.",
      ["had", "intro", "dream"],
    ),
    misconceptions: [
      {
        idea: "Past perfect is only a fancy decoration.",
        correction: "It marks the earlier of two past events so the timeline stays honest.",
      },
      {
        idea: "A short essay is just one long paragraph with no parts.",
        correction: "Introduction, body, and close give readers a path through the idea.",
      },
    ],
    reflect: {
      prompt: "What dream of yours has an earlier preparation step that came before a later change?",
      keyIdeas: ["dream", "timeline", "change"],
    },
    teach: {
      prompt: "Teach past perfect with one timeline pair, then sketch a three-part dream essay.",
      keyIdeas: ["past perfect", "essay plan", "change"],
    },
    masteryCriteria:
      "You can mark earlier past events with past perfect and plan a short essay about a dream or change.",
  },
});
