import type { Grade8EnglishConceptId } from "@/content/lessons/grade-8-english/format";

export const GRADE_8_ENGLISH_SPINE_KINDS = ["taught", "overlap"] as const;
export type Grade8EnglishSpineKind = (typeof GRADE_8_ENGLISH_SPINE_KINDS)[number];

export type Grade8EnglishLessonHostId = Grade8EnglishConceptId;

export type Grade8EnglishSpineCoverage = {
  id: string;
  title: string;
  kind: Grade8EnglishSpineKind;
  hostConceptId: Grade8EnglishLessonHostId;
  objective: string;
};

/**
 * Audit of every Grade 8-visible English skill-spine concept except
 * official Poorvi chapter cores. Subject-Verb Agreement gold remains Grades 4–6.
 * Grammar catalogue ids align with the IvshiQuest Grammar Spine G8 slices.
 */
export const GRADE_8_ENGLISH_SPINE_COVERAGE: Grade8EnglishSpineCoverage[] = [
  // Wit that Won Hearts
  {
    id: "english-g78-gerunds",
    title: "Gerunds as Nouns",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-wit-that-won-hearts-core",
    objective: "Spot an -ing form that names an activity in witty talk or storytelling.",
  },
  {
    id: "english-g78-discuss",
    title: "Discussion Moves",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-wit-that-won-hearts-core",
    objective: "Use a discussion move to build on a classmate’s idea about wit or kindness.",
  },
  {
    id: "english-g78-register",
    title: "Formal & Informal Words",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-wit-that-won-hearts-core",
    objective: "Choose formal or informal wording for a courtly or playful speech moment.",
  },
  // A Concrete Example
  {
    id: "english-g78-semi-colon",
    title: "Semicolons & Colons",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-a-concrete-example-core",
    objective: "Use a semicolon or colon to join related ideas in a clear explanation.",
  },
  {
    id: "english-g78-structure",
    title: "How a Text Is Built",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-a-concrete-example-core",
    objective: "Notice how an example paragraph is built from claim, detail, and close.",
  },
  {
    id: "english-g78-editing",
    title: "Editing for Usage",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-a-concrete-example-core",
    objective: "Edit a short explanatory line for agreement, tense, or punctuation.",
  },
  // Wisdom Paves the Way
  {
    id: "english-g78-relative",
    title: "Relative Pronouns",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-wisdom-paves-the-way-core",
    objective: "Join a wisdom detail to a noun with who, which, or that.",
  },
  {
    id: "english-g78-evaluate",
    title: "Evaluate a Claim",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-wisdom-paves-the-way-core",
    objective: "Judge whether a wise claim is supported by reasons or only by feeling.",
  },
  // Tale of Valour
  {
    id: "english-g78-voice-choose",
    title: "Choosing Voice",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-tale-of-valour-core",
    objective: "Choose active or passive voice to honour a deed or keep the doer clear.",
  },
  {
    id: "english-g78-formal-letter",
    title: "Formal Letters & Emails",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-tale-of-valour-core",
    objective: "Draft a short formal note of respect with purpose and polite close.",
  },
  // Somebody’s Mother
  {
    id: "english-g78-rel-define",
    title: "Defining & Non-defining Relative Clauses",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-somebodys-mother-core",
    objective: "Add a defining or extra relative clause when describing a person in a poem.",
  },
  {
    id: "english-g78-noun-clause",
    title: "Noun Clauses",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-somebodys-mother-core",
    objective: "Use a that/what clause as a subject or object in a reflective sentence.",
  },
  {
    id: "english-g78-tone",
    title: "Tone & Viewpoint",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-somebodys-mother-core",
    objective: "Name the poem’s tone and the viewpoint that shapes compassion.",
  },
  {
    id: "english-g78-register-use",
    title: "Register in Use",
    kind: "overlap",
    hostConceptId: "ncert-g8-poorvi-somebodys-mother-core",
    objective: "Match language to a respectful, poem-like or everyday situation.",
  },
  // Verghese Kurien
  {
    id: "english-g78-past-perfect",
    title: "Past Perfect",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-verghese-kurien-core",
    objective: "Mark the earlier of two past events in a life-story timeline.",
  },
  {
    id: "english-g78-essay",
    title: "Short Essays",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-verghese-kurien-core",
    objective: "Plan a short essay with introduction, body, and close about a dream or change.",
  },
  // Case of the Fifth Word
  {
    id: "english-g78-sva-phrases",
    title: "Agreement Across Phrases",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-case-of-the-fifth-word-core",
    objective: "Keep subject–verb agreement across intervening phrases in a puzzle clue.",
  },
  {
    id: "english-g78-sva-indefinite",
    title: "Indefinite Pronouns",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-case-of-the-fifth-word-core",
    objective: "Agree verbs with each, everybody, or nobody in careful school English.",
  },
  {
    id: "english-g78-infer",
    title: "Inference with Evidence",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-case-of-the-fifth-word-core",
    objective: "Infer a hidden meaning from word clues and point to evidence.",
  },
  // Magic Brush of Dreams
  {
    id: "english-g78-compound-complex",
    title: "Compound-Complex Sentences",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-magic-brush-of-dreams-core",
    objective: "Write a compound-complex sentence that keeps dream and action clear.",
  },
  {
    id: "english-g78-transformation",
    title: "Sentence Transformation",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-magic-brush-of-dreams-core",
    objective: "Transform a sentence without changing the core dream-story meaning.",
  },
  {
    id: "english-g78-confusables",
    title: "Confusable Words",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-magic-brush-of-dreams-core",
    objective: "Sort confusable words that can blur a dream or art description.",
  },
  // Spectacular Wonders
  {
    id: "english-g78-future-forms",
    title: "Talking About the Future",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-spectacular-wonders-core",
    objective: "Choose will, going to, or present continuous for a wonder or plan.",
  },
  {
    id: "english-g78-collocation",
    title: "Collocation",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-spectacular-wonders-core",
    objective: "Notice natural word partnerships in wonder and travel language.",
  },
  {
    id: "english-g78-notice-report",
    title: "Notices & Reports",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-spectacular-wonders-core",
    objective: "Write a compact notice or factual report line about an event or place.",
  },
  // The Cherry Tree
  {
    id: "english-g78-speech-questions",
    title: "Reporting Questions",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-the-cherry-tree-core",
    objective: "Report a yes/no or wh- question about growth without quotation marks.",
  },
  {
    id: "english-g78-speech-commands",
    title: "Reporting Commands",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-the-cherry-tree-core",
    objective: "Report a gentle command or request with ask/tell + to.",
  },
  {
    id: "english-g78-clarity",
    title: "Clear Reference",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-the-cherry-tree-core",
    objective: "Keep pronouns and connections clear when retelling a growth episode.",
  },
  // Harvest Hymn
  {
    id: "english-g78-zero-article",
    title: "The Zero Article",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-harvest-hymn-core",
    objective: "Drop a needless the with general harvest ideas or plural kinds.",
  },
  // Waiting for the Rain
  {
    id: "english-g78-quantifiers",
    title: "Quantifiers",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-waiting-for-the-rain-core",
    objective: "Choose few/little or many/much when talking about rain, crops, or waiting.",
  },
  {
    id: "english-g78-listen-detail",
    title: "Listening for Detail",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-waiting-for-the-rain-core",
    objective: "Catch a specific weather or farm detail from spoken or read lines.",
  },
  // Feathered Friend
  {
    id: "english-g78-debate",
    title: "Debate Structure",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-feathered-friend-core",
    objective: "Give a claim, a reason, and a short rebuttal about care or companionship.",
  },
  {
    id: "english-g78-listen-notes",
    title: "Notes While Listening",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-feathered-friend-core",
    objective: "Jot key words while following a bird-story episode, then expand one note.",
  },
  // Magnifying Glass
  {
    id: "english-g78-dep-prep",
    title: "Dependent Prepositions",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-magnifying-glass-core",
    objective: "Use a common verb/adjective + preposition pair when describing close looking.",
  },
  // Bibha Chowdhuri
  {
    id: "english-g78-academic-affixes",
    title: "Roots & Affixes in Academic Words",
    kind: "taught",
    hostConceptId: "ncert-g8-poorvi-bibha-chowdhuri-core",
    objective: "Use a root or affix clue to unlock a science or biography word.",
  },
];

const coverageById = new Map(
  GRADE_8_ENGLISH_SPINE_COVERAGE.map((row) => [row.id, row]),
);

export function getGrade8EnglishSpineCoverage(conceptId: string) {
  return coverageById.get(conceptId);
}

export function getGrade8EnglishHostConceptId(conceptId: string) {
  return coverageById.get(conceptId)?.hostConceptId;
}

export function skillsHostedByGrade8English(hostConceptId: string): string[] {
  return GRADE_8_ENGLISH_SPINE_COVERAGE.filter(
    (row) => row.hostConceptId === hostConceptId,
  ).map((row) => row.id);
}

export function grade8EnglishSpineCoverageAudit() {
  const taught = GRADE_8_ENGLISH_SPINE_COVERAGE.filter(
    (row) => row.kind === "taught",
  );
  const overlap = GRADE_8_ENGLISH_SPINE_COVERAGE.filter(
    (row) => row.kind === "overlap",
  );
  return {
    spineItems: GRADE_8_ENGLISH_SPINE_COVERAGE.length,
    taughtCount: taught.length,
    overlapCount: overlap.length,
    taughtIds: taught.map((row) => row.id),
    overlapIds: overlap.map((row) => row.id),
    connectedIds: GRADE_8_ENGLISH_SPINE_COVERAGE.map((row) => row.id),
  };
}
