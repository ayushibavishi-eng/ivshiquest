import {
  C,
  G7,
  G78,
  G8,
  T,
  compileWorlds,
  type WorldSpec,
} from "@/content/curriculum/build";

const ENGLISH_MIDDLE: WorldSpec[] = [
  {
    id: "english-grammar-middle",
    title: "Grammar Craft",
    subject: "english",
    category: "Grammar",
    grades: G78,
    hook: "Grade 7–8 grammar is about control: clauses, voice, speech, and agreement in longer sentences.",
    topics: [
      T("english-g78-nouns", "Nouns & Noun Phrases", G78, "Can a whole group of words act as a noun?", "Build precise noun phrases and name gerunds.", "Head nouns still name. Phrases add detail. A gerund (Swimming is fun) names an activity.", [
        C("english-g78-noun-phrases", "Expanding Noun Phrases", G7, "How do you pack information before the noun tree?", "Expand noun phrases with determiners and modifiers.", "The tall coconut tree on the bank — tree is the head. Extra words specify which tree.", ["Find the head noun", "Expand a noun phrase"]),
        C("english-g78-gerunds", "Gerunds as Nouns", G8, "Is running a verb in 'Running helps you'?", "Recognise gerunds that name activities.", "An -ing form can name a thing (a gerund) or build a verb (is running). The job in the sentence decides.", ["Spot a gerund", "Contrast with a verb"]),
      ]),
      T("english-g78-pronouns", "Pronouns & Reference", G78, "Does everyone take a singular or plural verb in careful English?", "Keep pronoun reference and agreement clear.", "A pronoun must point to a clear noun. Indefinite words like everyone often take singular verbs in standard school English.", [
        C("english-g78-pronoun-agree", "Pronoun Agreement", G7, "Why might 'Everyone brought their book' be marked in a test?", "Match pronouns carefully in standard written English.", "School English often wants Everyone brought his or her book, or rewrite: All the students brought their books.", ["Find the antecedent", "Rewrite for agreement"]),
        C("english-g78-relative", "Relative Pronouns", G78, "Who, whom, which, whose, that — which joins people?", "Join clauses with relative pronouns.", "Who/whom/whose for people. Which for things. That often defines. The clause hangs on a noun.", ["Join with who", "Join with which"]),
      ]),
      T("english-g78-verbs-tenses", "Verbs & Tenses", G78, "When is have eaten better than ate?", "Control present perfect, past perfect, and continuous forms.", "Present perfect links past to now. Past perfect is the earlier of two pasts. Choose the form that matches the time relation.", [
        C("english-g78-present-perfect", "Present Perfect", G7, "Why say I have finished, not I finished, if the result is now?", "Use present perfect for past with present result.", "Have/has + past participle. I have lost my key (and still don’t have it).", ["Form have/has + participle", "Choose when it fits"]),
        C("english-g78-past-perfect", "Past Perfect", G8, "Which action happened first: had left or arrived?", "Use past perfect for the earlier of two pasts.", "She had left before we arrived. Had + participle marks the earlier past.", ["Mark the earlier past", "Form had + participle"]),
        C("english-g78-future-forms", "Talking About the Future", G78, "Is will the only future?", "Choose will, going to, and present continuous for future meaning.", "Will for decisions/promises. Going to for plans and evidence. Present continuous for fixed arrangements.", ["Write a plan", "Write a promise"]),
      ]),
      T("english-g78-sva", "Subject-Verb Agreement", G78, "Does 'The bouquet of roses' take is or are?", "Agree with the head noun across extra phrases.", "Bouquet is singular. Of roses is extra. Intervening phrases do not change the head.", [
        C("english-g78-sva-phrases", "Agreement Across Phrases", G78, "What is the real subject in 'The list of names …'?", "Make the verb agree with the head, not a nearby noun.", "Find the head. A pair of shoes is… The shoes in the box are…", ["Find the head", "Choose is/are"]),
        C("english-g78-sva-indefinite", "Indefinite Pronouns", G8, "Does each take a singular verb?", "Agree verbs with each, every, nobody, and similar words.", "Each, everybody, nobody typically take singular verbs in standard school English: Everybody is ready.", ["Choose a singular verb", "Rewrite a mismatch"]),
      ]),
      T("english-g78-determiners", "Articles & Determiners", G78, "When do we drop the article altogether?", "Use a/an/the and the zero article with more control.", "Generic plurals often take no article: Tigers are cats. The tigers in this zoo are specific.", [
        C("english-g78-zero-article", "The Zero Article", G8, "Why is 'The honesty is important' often marked wrong?", "Use no article with generic uncountables and plural kinds.", "Honesty is important. Water boils. The honesty she showed yesterday is specific.", ["Drop a wrong the", "Keep the for specific"]),
        C("english-g78-quantifiers", "Quantifiers", G78, "Is it few friends or little friends?", "Choose few/little, many/much, each/every.", "Few/many with countables. Little/much with uncountables. Each and every are singular in agreement.", ["Choose few or little", "Choose many or much"]),
      ]),
      T("english-g78-modifiers", "Adjectives, Adverbs & Prepositions", G78, "Why does 'She ran quick' sound off?", "Place modifiers and choose dependent prepositions.", "Adverbs often modify verbs: She ran quickly. Some verbs want a particular preposition: depend on, interested in.", [
        C("english-g78-adv-vs-adj", "Adjective or Adverb", G7, "After feel, do we say bad or badly in 'I feel ___'?", "Choose adjective after linking verbs and adverb for manner.", "I feel bad (state). She sings badly (manner). Linking verbs take adjectives.", ["Modify a verb", "Modify a noun"]),
        C("english-g78-dep-prep", "Dependent Prepositions", G8, "Why is it interested in, not interested on?", "Use common verb/adjective + preposition pairs.", "Listen to, belong to, famous for, afraid of. The pair is learned as a chunk.", ["Choose the preposition", "Use it in a sentence"]),
      ]),
      T("english-g78-sentences", "Sentence Structure", G78, "Can one sentence hold two independents and a dependent?", "Build compound, complex, and compound-complex sentences.", "Compound joins equals. Complex hangs a dependent clause. Compound-complex does both.", [
        C("english-g78-compound-complex", "Compound-Complex Sentences", G8, "How do you keep a long sentence from becoming a tangle?", "Write a compound-complex sentence with clear joins.", "When the bell rang, we stood, and the teacher smiled. One dependent + two independents.", ["Write one example", "Punctuate the joins"]),
        C("english-g78-transformation", "Sentence Transformation", G8, "Can you say the same idea as a question, a negative, or a complex sentence?", "Transform sentences without changing the core meaning.", "Change voice, speech, or clause type while keeping the facts. Meaning first, form second.", ["Rewrite as complex", "Rewrite as negative"]),
      ]),
      T("english-g78-clauses", "Clauses", G78, "Which clause can stand alone, and which is a passenger?", "Use relative, noun, and adverbial clauses.", "A relative clause describes a noun. A noun clause can be a subject or object. An adverbial clause tells when, why, or if.", [
        C("english-g78-rel-define", "Defining & Non-defining Relative Clauses", G8, "When do commas hug the extra information?", "Distinguish defining and extra relative clauses.", "The book that I borrowed is here (defines which book). My father, who loves cricket, cheered (extra, commas).", ["Write a defining clause", "Write an extra clause with commas"]),
        C("english-g78-noun-clause", "Noun Clauses", G8, "What is the object in 'I know that she is ready'?", "Use that/what/whether clauses as nouns.", "That she is ready is a noun clause, object of know. It can also be a subject: What she said surprised us.", ["Find a noun clause", "Use that/what"]),
        C("english-g78-adv-clause", "Adverbial Clauses", G7, "Which word makes 'the rain stopped' unfinished: because?", "Use adverbial clauses of time, reason, and condition.", "Because, when, if, although open dependent clauses. They need a main clause partner.", ["Write a because clause", "Write an if clause"]),
      ]),
      T("english-g78-voice", "Active & Passive Voice", G78, "When is the doer unknown or less important?", "Form and choose active and passive voice.", "Passive uses be + past participle. Keep tense: is cleaned, was cleaned, has been cleaned. Use passive when the receiver matters more.", [
        C("english-g78-voice-form", "Forming the Passive", G7, "How do you turn 'They built the bridge' into a passive?", "Form a passive with be + past participle.", "The bridge was built. Add by them only if the doer matters.", ["Form a past passive", "Keep the meaning"]),
        C("english-g78-voice-choose", "Choosing Voice", G8, "Why might a science sentence hide the doer?", "Choose active for clarity and passive for process or unknown doer.", "The mixture was heated. We do not need who held the burner. News and lab writing often use this.", ["Choose active", "Choose passive"]),
      ]),
      T("english-g78-speech", "Reported Speech", G78, "What happens to today and here when we report tomorrow?", "Report statements, questions, and commands.", "Tense often shifts back after a past reporting verb. Questions become statement order. Commands use to + verb. Time/place words may shift.", [
        C("english-g78-speech-statements", "Reporting Statements", G7, "How does am become was after she said?", "Report statements with pronoun and tense shifts.", "She said, \"I am ready.\" → She said she was ready.", ["Change the pronoun", "Shift the tense"]),
        C("english-g78-speech-questions", "Reporting Questions", G8, "Why does the reported question lose do and the question mark?", "Report yes/no and wh- questions.", "She asked if I was ready. He asked where I lived. Use if/whether or the wh-word; use statement order.", ["Report a yes/no question", "Report a wh-question"]),
        C("english-g78-speech-commands", "Reporting Commands", G8, "How do you report 'Please sit down'?", "Report commands with tell/ask + to.", "She asked me to sit down. She told us not to run.", ["Report a positive command", "Report a negative command"]),
      ]),
      T("english-g78-punctuation", "Punctuation & Sentences", G78, "When is a semicolon stronger than a comma?", "Use commas, semicolons, colons, and quotation marks in longer writing.", "Semicolons join related independents. Colons introduce a list or explanation. Commas cannot glue two sentences alone.", [
        C("english-g78-semi-colon", "Semicolons & Colons", G8, "Can you join two sentences without and?", "Use a semicolon between related independents and a colon to introduce.", "The sky darkened; the birds went quiet. Bring three things: a pencil, a scale, and an eraser.", ["Join with a semicolon", "Introduce with a colon"]),
        C("english-g78-speech-punct", "Punctuating Quotations", G7, "Where do the comma and the capital go in direct speech?", "Punctuate direct speech accurately.", "Riya said, \"We are ready.\" Comma before the quote. Capital inside. Marks around the spoken words.", ["Place quotation marks", "Place the comma"]),
      ]),
    ],
  },
  {
    id: "english-vocab-middle",
    title: "Vocabulary Craft",
    subject: "english",
    category: "Vocabulary",
    grades: G78,
    hook: "Words grow through roots, context, collocation, and register.",
    concepts: [
      C("english-g78-collocation", "Collocation", G78, "Why do we say make a mistake, not do a mistake?", "Notice words that habitually go together.", "Collocations are partnerships: heavy rain, strong tea, make a decision. Guessing word-by-word can sound odd.", ["Spot a collocation", "Replace a wrong partner"]),
      C("english-g78-register", "Formal & Informal Words", G78, "Would you write kids in a school notice?", "Choose vocabulary for audience and purpose.", "Kids is informal; children is safer in a notice. Academic writing prefers precise verbs: examine, suggest, report.", ["Choose a formal word", "Choose an informal word"]),
      C("english-g78-confusables", "Confusable Words", G78, "Affect or effect? Accept or except?", "Choose commonly confused academic words.", "Affect is often a verb; effect is often a noun. Context decides. Keep a personal list of mix-ups.", ["Choose affect/effect", "Choose accept/except"]),
      C("english-g78-academic-affixes", "Roots & Affixes in Academic Words", G8, "What does bio- help you guess in biography?", "Use roots and affixes to unlock new words.", "bio = life, graph = write, un- = not. Guess, then check in context.", ["Guess from a root", "Check in the sentence"]),
    ],
  },
  {
    id: "english-reading-middle",
    title: "Reading",
    subject: "english",
    category: "Reading",
    grades: G78,
    hook: "Older readers track argument, tone, and how a text is built.",
    concepts: [
      C("english-g78-structure", "How a Text Is Built", G78, "Is this paragraph a claim, an example, or a turn?", "Identify introduction, development, and conclusion moves.", "Expository texts often claim, explain, then conclude. Stories still have beginning, middle, end — with more subplot.", ["Name a paragraph’s job", "Find the conclusion"]),
      C("english-g78-tone", "Tone & Viewpoint", G8, "Is the writer amused, angry, or calmly explaining?", "Describe tone and a writer’s viewpoint.", "Word choice and detail create tone. Viewpoint is where the writer stands. They are not always the same as the topic.", ["Name a tone", "State a viewpoint"]),
    ],
  },
  {
    id: "english-comprehension-middle",
    title: "Reading Comprehension",
    subject: "english",
    category: "Reading comprehension",
    grades: G78,
    hook: "Comprehension is proving you understood — with the text as evidence.",
    concepts: [
      C("english-g78-literal", "Literal Meaning", G7, "What did the text actually say, not what you guess?", "Retrieve stated information accurately.", "Literal questions can be pointed to on the page. Quote or paraphrase without adding extra plot.", ["Find a stated fact", "Paraphrase a sentence"]),
      C("english-g78-infer", "Inference with Evidence", G78, "What clue lets you say that, even if the line never says it?", "Make an inference and point to evidence.", "An inference is a careful because. I think she is worried because she checks the sky three times.", ["Make an inference", "Point to a clue"]),
      C("english-g78-evaluate", "Evaluate a Claim", G8, "Does the writer give enough reason, or only a strong feeling?", "Judge whether a claim is supported.", "Look for examples, facts, or reasons. A slogan is not evidence. You can agree and still ask for more proof.", ["Find a claim", "Say if it is supported"]),
    ],
  },
  {
    id: "english-writing-middle",
    title: "Writing",
    subject: "english",
    category: "Writing",
    grades: G78,
    hook: "Writing at this stage has a job: inform, argue, narrate, or request — clearly.",
    concepts: [
      C("english-g78-paragraph-unity", "Paragraph Unity", G7, "Does every sentence still serve the first sentence?", "Write a paragraph with a topic sentence and support.", "One idea per paragraph. Examples and reasons follow. A last sentence can close or lead on.", ["Write a topic sentence", "Add two supporting sentences"]),
      C("english-g78-formal-letter", "Formal Letters & Emails", G78, "How is a principal’s letter different from a message to a friend?", "Write a short formal letter or email with purpose and polite close.", "State the purpose early. Use a respectful greeting and closing. Keep facts complete: what, when, why.", ["State the purpose", "Close politely"]),
      C("english-g78-essay", "Short Essays", G8, "Can a reader see your plan without you saying first, second, third every time?", "Plan a short essay with introduction, body, and close.", "Introduce the idea, develop it with reasons or examples, then close. Avoid a new idea in the last line.", ["Plan three parts", "Write a closing sentence"]),
      C("english-g78-notice-report", "Notices & Reports", G8, "What must a notice say in the fewest clear words?", "Write a notice or a factual report.", "A notice needs event, time, place, who. A report answers what happened, when, and what was seen — without extra drama.", ["Write a notice skeleton", "Write a factual report line"]),
    ],
  },
  {
    id: "english-speaking-middle",
    title: "Speaking",
    subject: "english",
    category: "Speaking",
    grades: G78,
    hook: "Speaking well is organised thought plus a listener who feels included.",
    concepts: [
      C("english-g78-present", "Short Presentations", G7, "Can a listener retell your three points afterwards?", "Give a short talk with opening, two points, and a close.", "Tell them what you will say, say it, then close. Look up. Pause. Do not read every word.", ["Open with a purpose", "Close with a takeaway"]),
      C("english-g78-discuss", "Discussion Moves", G78, "How do you disagree without flattening the other person?", "Use discussion phrases: add, ask, disagree politely.", "I see it differently because… Could you say more about… Building on that… Invite someone who has not spoken.", ["Disagree politely", "Invite another speaker"]),
      C("english-g78-debate", "Debate Structure", G8, "What is a rebuttal, not an insult?", "Give a claim, a reason, and a short rebuttal.", "Claim + because. Steelman the other side: They might say… however… Listen while they speak.", ["State a claim", "Rebut a point"]),
    ],
  },
  {
    id: "english-listening-middle",
    title: "Listening",
    subject: "english",
    category: "Listening",
    grades: G78,
    hook: "Listening is a skill with a purpose: gist, detail, or a task to do next.",
    concepts: [
      C("english-g78-listen-gist", "Listening for Gist", G7, "What was that announcement mainly about?", "Catch the overall topic of a short spoken text.", "Gist is the aboutness. You can miss a word and still know it was a weather warning, not a sports score.", ["Name the topic", "Ignore extra detail"]),
      C("english-g78-listen-detail", "Listening for Detail", G78, "Which platform, which time?", "Catch specific facts from speech.", "Listen with a purpose: number, name, time. Note it. Ask to repeat if you missed a critical fact.", ["Catch a time or number", "Note it"]),
      C("english-g78-listen-notes", "Notes While Listening", G8, "Can you listen and jot without writing every word?", "Take brief notes from a talk.", "Write key words, not sentences. Leave space. Expand the notes just after, while memory is warm.", ["Jot key words", "Turn notes into a sentence"]),
    ],
  },
  {
    id: "english-usage-middle",
    title: "Language Usage",
    subject: "english",
    category: "Language usage",
    grades: G78,
    hook: "Usage is choosing the form that fits the job, the listener, and the situation.",
    concepts: [
      C("english-g78-register-use", "Register in Use", G78, "Would this sentence belong in a diary, a notice, or a debate?", "Match language to situation.", "Diary can be informal. A notice is compact and public. A debate needs reasons. Mixing them confuses the job.", ["Choose a register", "Rewrite a line for a notice"]),
      C("english-g78-clarity", "Clear Reference", G8, "Who is they in this paragraph?", "Keep pronouns and connections clear.", "If they could be two groups, name the group again. Link sentences with this, these, however, so the reader does not guess.", ["Fix an unclear they", "Add a linking word"]),
      C("english-g78-editing", "Editing for Usage", G8, "Can you catch agreement, tense, and punctuation in a second pass?", "Edit a short paragraph for usage, not only spelling.", "Read once for meaning, once for verbs, once for punctuation. Changing everything at once hides the errors.", ["Fix an agreement slip", "Fix a tense slip"]),
    ],
  },
];

export const ENGLISH_MIDDLE_WORLDS = compileWorlds(ENGLISH_MIDDLE);
