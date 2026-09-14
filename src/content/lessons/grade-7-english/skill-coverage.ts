import type { Grade7EnglishConceptId } from "@/content/lessons/grade-7-english/format";

export const GRADE_7_ENGLISH_SPINE_KINDS = ["taught", "overlap"] as const;
export type Grade7EnglishSpineKind = (typeof GRADE_7_ENGLISH_SPINE_KINDS)[number];

export type Grade7EnglishLessonHostId = Grade7EnglishConceptId;

export type Grade7EnglishSpineCoverage = {
  id: string;
  title: string;
  kind: Grade7EnglishSpineKind;
  hostConceptId: Grade7EnglishLessonHostId;
  objective: string;
};

/**
 * Audit of every Grade 7-visible English skill-spine concept except
 * official Poorvi chapter cores. Subject-Verb Agreement gold remains Grades 4–6.
 */
export const GRADE_7_ENGLISH_SPINE_COVERAGE: Grade7EnglishSpineCoverage[] = [
  {
    id: "english-g78-infer",
    title: "Inference with Evidence",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-the-day-the-river-spoke-core",
    objective: "Make an inference about a character’s wish and support it with story evidence.",
  },
  {
    id: "english-g78-structure",
    title: "How a Text Is Built",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-the-day-the-river-spoke-core",
    objective: "Notice how a story is built from wish, barrier, and choice.",
  },
  {
    id: "english-g78-collocation",
    title: "Collocation",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-try-again-core",
    objective: "Notice natural word partnerships in perseverance language.",
  },
  {
    id: "english-g78-listen-gist",
    title: "Listening for Gist",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-try-again-core",
    objective: "Catch the gist of a poem’s advice when reading or hearing a stanza.",
  },
  {
    id: "english-g78-literal",
    title: "Literal Meaning",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-three-days-to-see-core",
    objective: "State a literal sensory detail before adding interpretation.",
  },
  {
    id: "english-g78-noun-phrases",
    title: "Expanding Noun Phrases",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-three-days-to-see-core",
    objective: "Expand a noun phrase to sharpen a sensory description.",
  },
  {
    id: "english-g78-adv-vs-adj",
    title: "Adjective or Adverb",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-animals-birds-dolittle-core",
    objective: "Choose adjective or adverb carefully when describing character and humour.",
  },
  {
    id: "english-g78-discuss",
    title: "Discussion Moves",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-animals-birds-dolittle-core",
    objective: "Use a discussion move to build on a classmate’s humour observation.",
  },
  {
    id: "english-g78-confusables",
    title: "Confusable Words",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-a-funny-man-core",
    objective: "Sort confusable words that can spoil a funny image or line.",
  },
  {
    id: "english-g78-register",
    title: "Formal & Informal Words",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-say-the-right-thing-core",
    objective: "Choose formal or informal words for a polite speech situation.",
  },
  {
    id: "english-g78-register-use",
    title: "Register in Use",
    kind: "overlap",
    hostConceptId: "ncert-g7-poorvi-say-the-right-thing-core",
    objective: "Put register into use when saying the right thing kindly.",
  },
  {
    id: "english-g78-speech-punct",
    title: "Punctuating Quotations",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-say-the-right-thing-core",
    objective: "Punctuate a quoted polite line accurately.",
  },
  {
    id: "english-g78-present-perfect",
    title: "Present Perfect",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-brothers-great-invention-core",
    objective: "Use present perfect to talk about invention attempts that still matter now.",
  },
  {
    id: "english-g78-paragraph-unity",
    title: "Paragraph Unity",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-brothers-great-invention-core",
    objective: "Keep one invention idea in a paragraph while sequencing attempts.",
  },
  {
    id: "english-g78-adv-clause",
    title: "Adverbial Clauses",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-paper-boats-core",
    objective: "Add an adverbial clause that deepens a memory or image.",
  },
  {
    id: "english-g78-future-forms",
    title: "Talking About the Future",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-north-south-east-west-core",
    objective: "Talk about travel plans with clear future forms.",
  },
  {
    id: "english-g78-quantifiers",
    title: "Quantifiers",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-north-south-east-west-core",
    objective: "Use quantifiers carefully when describing places and journeys.",
  },
  {
    id: "english-g78-sva-phrases",
    title: "Agreement Across Phrases",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-the-tunnel-core",
    objective: "Keep subject–verb agreement across phrases in a setting description.",
  },
  {
    id: "english-g78-pronoun-agree",
    title: "Pronoun Agreement",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-the-tunnel-core",
    objective: "Keep pronoun agreement clear in a courage scene.",
  },
  {
    id: "english-g78-relative",
    title: "Relative Pronouns",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-travel-core",
    objective: "Use a relative pronoun to add a travel detail.",
  },
  {
    id: "english-g78-formal-letter",
    title: "Formal Letters & Emails",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-conquering-the-summit-core",
    objective: "Draft a short formal note about a challenge or climb.",
  },
  {
    id: "english-g78-listen-detail",
    title: "Listening for Detail",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-conquering-the-summit-core",
    objective: "Catch a factual detail that explains a climbing challenge.",
  },
  {
    id: "english-g78-voice-form",
    title: "Forming the Passive",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-homage-brave-soldiers-core",
    objective: "Form a respectful passive line in a tribute context.",
  },
  {
    id: "english-g78-speech-statements",
    title: "Reporting Statements",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-my-dear-soldiers-core",
    objective: "Report a grateful statement in indirect speech.",
  },
  {
    id: "english-g78-present",
    title: "Short Presentations",
    kind: "taught",
    hostConceptId: "ncert-g7-poorvi-rani-abbakka-core",
    objective: "Plan a short presentation about a courage episode.",
  },
];

const coverageById = new Map(
  GRADE_7_ENGLISH_SPINE_COVERAGE.map((row) => [row.id, row]),
);

export function getGrade7EnglishSpineCoverage(conceptId: string) {
  return coverageById.get(conceptId);
}

export function getGrade7EnglishHostConceptId(conceptId: string) {
  return coverageById.get(conceptId)?.hostConceptId;
}

export function skillsHostedByGrade7English(hostConceptId: string): string[] {
  return GRADE_7_ENGLISH_SPINE_COVERAGE.filter(
    (row) => row.hostConceptId === hostConceptId,
  ).map((row) => row.id);
}

export function grade7EnglishSpineCoverageAudit() {
  const taught = GRADE_7_ENGLISH_SPINE_COVERAGE.filter((row) => row.kind === "taught");
  const overlap = GRADE_7_ENGLISH_SPINE_COVERAGE.filter(
    (row) => row.kind === "overlap",
  );
  return {
    spineItems: GRADE_7_ENGLISH_SPINE_COVERAGE.length,
    taughtCount: taught.length,
    overlapCount: overlap.length,
    taughtIds: taught.map((row) => row.id),
    overlapIds: overlap.map((row) => row.id),
    connectedIds: GRADE_7_ENGLISH_SPINE_COVERAGE.map((row) => row.id),
  };
}
