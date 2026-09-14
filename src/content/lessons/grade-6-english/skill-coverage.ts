import type { Grade6EnglishConceptId } from "@/content/lessons/grade-6-english/format";

export const GRADE_6_ENGLISH_SPINE_KINDS = ["taught", "overlap"] as const;
export type Grade6EnglishSpineKind = (typeof GRADE_6_ENGLISH_SPINE_KINDS)[number];

export type Grade6EnglishLessonHostId =
  | Grade6EnglishConceptId
  | "english-sva-simple";

export type Grade6EnglishSpineCoverage = {
  id: string;
  title: string;
  kind: Grade6EnglishSpineKind;
  hostConceptId: Grade6EnglishLessonHostId;
  objective: string;
};

/**
 * Audit of every Grade 6-visible English skill-spine concept except
 * Match Singular & Plural (gold lesson) and official Poorvi texts.
 */
export const GRADE_6_ENGLISH_SPINE_COVERAGE: Grade6EnglishSpineCoverage[] = [
  {
    id: "english-sva-tricky",
    title: "Tricky Subjects",
    kind: "taught",
    hostConceptId: "english-sva-simple",
    objective: "Match tricky subjects with the right verb form.",
  },
  {
    id: "english-err-agree",
    title: "Agreement Slip-ups",
    kind: "taught",
    hostConceptId: "english-sva-simple",
    objective: "Catch agreement slip-ups between subject and verb.",
  },
  {
    id: "english-sub-complete",
    title: "Complete Subject & Predicate",
    kind: "taught",
    hostConceptId: "english-sva-simple",
    objective: "Name a complete subject and predicate in a full sentence.",
  },
  {
    id: "english-tag-match",
    title: "Matching the Helper",
    kind: "taught",
    hostConceptId: "english-sva-simple",
    objective: "Match a tag question helper to the main clause.",
  },
  {
    id: "english-theme-idea",
    title: "A Lesson Without Preaching",
    kind: "overlap",
    hostConceptId: "ncert-g6-poorvi-bottle-of-dew",
    objective: "State the story’s idea about diligence without preaching.",
  },
  {
    id: "english-prov-lesson",
    title: "A Lesson in a Line",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-bottle-of-dew",
    objective: "Connect a proverb-like lesson to hard work in the story.",
  },
  {
    id: "english-main-vs-topic",
    title: "Topic vs Main Idea",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-bottle-of-dew",
    objective: "Tell the topic from the main idea of A Bottle of Dew.",
  },
  {
    id: "english-sum-short",
    title: "Short & Faithful",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-bottle-of-dew",
    objective: "Write a short, faithful summary of Rama Natha’s learning.",
  },
  {
    id: "english-inf-prove",
    title: "Checking an Inference",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-bottle-of-dew",
    objective: "Check an inference about diligence against story evidence.",
  },
  {
    id: "english-plot-turn",
    title: "Turning Point",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-raven-and-fox",
    objective: "Find the turning point when the raven loses the morsel.",
  },
  {
    id: "english-ch-change",
    title: "How Characters Change",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-raven-and-fox",
    objective: "Describe how pride changes the raven’s outcome.",
  },
  {
    id: "english-idiom-meaning",
    title: "Not Word-by-Word",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-raven-and-fox",
    objective: "Explain an idiom by sense, not word-by-word.",
  },
  {
    id: "english-cre-image",
    title: "Fresh Images",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-raven-and-fox",
    objective: "Create a fresh image that captures flattery’s trap.",
  },
  {
    id: "english-speech-direct",
    title: "Direct Speech",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-raven-and-fox",
    objective: "Write direct speech for the fox’s flattering lines.",
  },
  {
    id: "english-list-detail",
    title: "Important Details",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-rama-to-the-rescue",
    objective: "Pick details that matter when sequencing Rama’s rescue.",
  },
  {
    id: "english-notice-facts",
    title: "Who, What, When, Where",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-rama-to-the-rescue",
    objective: "Note who, what, when, and where in the graphic tale.",
  },
  {
    id: "english-story-dialogue",
    title: "Dialogue That Moves the Story",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-rama-to-the-rescue",
    objective: "Write dialogue that moves the rescue scene forward.",
  },
  {
    id: "english-pres-plan",
    title: "Opening, Points, Close",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-rama-to-the-rescue",
    objective: "Plan an opening, points, and close for a rescue retell.",
  },
  {
    id: "english-comm-clarity",
    title: "Say It So They Can Do It",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-rama-to-the-rescue",
    objective: "Give clear directions so a listener can follow a clever plan.",
  },
  {
    id: "english-para-unity",
    title: "Sticking to One Idea",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-unlikely-best-friends",
    objective: "Keep one friendship idea in a paragraph.",
  },
  {
    id: "english-disc-build",
    title: "Building on Ideas",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-unlikely-best-friends",
    objective: "Build on a classmate’s idea about loyalty.",
  },
  {
    id: "english-use-clear",
    title: "Say What You Mean",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-unlikely-best-friends",
    objective: "Say clearly what makes the friendship unlikely.",
  },
  {
    id: "english-conj-although",
    title: "Although & If",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-unlikely-best-friends",
    objective: "Use although or if to show an unexpected friendship.",
  },
  {
    id: "english-cpx-when",
    title: "When, Because, If, Although",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-unlikely-best-friends",
    objective: "Build a complex sentence with when, because, if, or although.",
  },
  {
    id: "english-syn-shade",
    title: "Shades of Meaning",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-friends-prayer",
    objective: "Pick a synonym with the right shade for a friendship wish.",
  },
  {
    id: "english-adj-order",
    title: "Adjective Order",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-friends-prayer",
    objective: "Order adjectives naturally in a descriptive prayer line.",
  },
  {
    id: "english-adv-degree",
    title: "Very, Too, Enough",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-friends-prayer",
    objective: "Use very, too, or enough carefully in a wish.",
  },
  {
    id: "english-deg-more-most",
    title: "More & Most",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-friends-prayer",
    objective: "Use more and most when comparing qualities of friendship.",
  },
  {
    id: "english-homonym-bat",
    title: "Same Word, Different Meaning",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-the-chair",
    objective: "Tell two meanings of the same word from the chair story context.",
  },
  {
    id: "english-ctx-check",
    title: "Checking a Guess",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-the-chair",
    objective: "Check a meaning guess against the next lines of the story.",
  },
  {
    id: "english-nouns-abstract",
    title: "Abstract Nouns",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-the-chair",
    objective: "Spot abstract nouns such as belonging or care in the story.",
  },
  {
    id: "english-obj-direct",
    title: "Direct Objects",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-the-chair",
    objective: "Find the direct object of a key verb in a friendship sentence.",
  },
  {
    id: "english-obj-indirect",
    title: "Indirect Objects",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-the-chair",
    objective: "Find an indirect object when someone gives care or a gift.",
  },
  {
    id: "english-rep-facts",
    title: "Facts Before Flourishes",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-neem-baba",
    objective: "Report neem facts from the text before adding flourishes.",
  },
  {
    id: "english-nouns-common-proper",
    title: "Common & Proper Nouns",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-neem-baba",
    objective: "Tell common nouns from proper names in a nature text.",
  },
  {
    id: "english-nouns-possessive",
    title: "Possessive Nouns",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-neem-baba",
    objective: "Form possessive nouns for a tree’s gifts or a village’s trees.",
  },
  {
    id: "english-art-zero",
    title: "When to Skip an Article",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-neem-baba",
    objective: "Know when to skip an article in nature notes.",
  },
  {
    id: "english-det-quant",
    title: "Some, Any, Many, Much",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-neem-baba",
    objective: "Choose some, any, many, or much for nature amounts.",
  },
  {
    id: "english-pre-pre-mis",
    title: "Pre-, Mis-, Over-",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-what-a-bird-thought",
    objective: "Use pre-, mis-, or over- carefully in a widening-view poem.",
  },
  {
    id: "english-suf-tion-er",
    title: "-tion, -er, -ness",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-what-a-bird-thought",
    objective: "Use -tion, -er, or -ness for nouns about seeing and growing.",
  },
  {
    id: "english-root-family",
    title: "Finding the Root",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-what-a-bird-thought",
    objective: "Find the root in words about a bird’s changing world.",
  },
  {
    id: "english-phr-prep",
    title: "Prepositional Phrases",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-what-a-bird-thought",
    objective: "Read a prepositional phrase that places the bird’s view.",
  },
  {
    id: "english-phr-noun",
    title: "Noun Phrases",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-what-a-bird-thought",
    objective: "Expand a noun phrase to sharpen a poem image.",
  },
  {
    id: "english-let-formal",
    title: "Formal Letters",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-spices-that-heal-us",
    objective: "Draft a short formal line about a healing spice.",
  },
  {
    id: "english-email-clear",
    title: "Subject & Purpose",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-spices-that-heal-us",
    objective: "Write a clear subject and purpose for a spice note.",
  },
  {
    id: "english-edit-checklist",
    title: "A Writer's Checklist",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-spices-that-heal-us",
    objective: "Use a writer’s checklist before sharing a home-knowledge note.",
  },
  {
    id: "english-use-edit",
    title: "A Usage Pass",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-spices-that-heal-us",
    objective: "Make a usage pass that clarifies a spice explanation.",
  },
  {
    id: "english-spell-tricky",
    title: "Tricky High-Frequency Words",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-spices-that-heal-us",
    objective: "Spell tricky high-frequency words in a kitchen-care note.",
  },
  {
    id: "english-arg-claim",
    title: "Claim, Reason, Counter",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-change-of-heart",
    objective: "State a claim about fair play with a reason and a counter.",
  },
  {
    id: "english-deb-side",
    title: "Claim and Rebuttal",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-change-of-heart",
    objective: "Give a claim and a rebuttal about attitude in sport.",
  },
  {
    id: "english-mod-must-should",
    title: "Must, Should, May",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-change-of-heart",
    objective: "Use must, should, or may when judging a fair choice.",
  },
  {
    id: "english-cond-zero-first",
    title: "Real Conditions",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-change-of-heart",
    objective: "Talk about a real condition a player faces.",
  },
  {
    id: "english-cond-unreal",
    title: "Unreal or Imaginary",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-change-of-heart",
    objective: "Imagine an unreal condition to explore a better choice.",
  },
  {
    id: "english-voice-active",
    title: "Active Voice",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-the-winner",
    objective: "Write an active-voice line about effort and winning.",
  },
  {
    id: "english-voice-passive",
    title: "Passive Voice",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-the-winner",
    objective: "Rewrite a race idea in passive voice when the doer is less important.",
  },
  {
    id: "english-neg-double",
    title: "One Negative Is Enough",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-the-winner",
    objective: "Keep one clear negative when explaining what winning is not.",
  },
  {
    id: "english-cl-independent",
    title: "Independent Clauses",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-the-winner",
    objective: "Write an independent clause that states the poem’s idea.",
  },
  {
    id: "english-cl-dependent",
    title: "Dependent Clauses",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-the-winner",
    objective: "Add a dependent clause that softens or explains winning.",
  },
  {
    id: "english-verb-irregular",
    title: "Regular & Irregular Verbs",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-yoga-way-of-life",
    objective: "Use regular and irregular verbs when describing a yoga habit.",
  },
  {
    id: "english-verb-state",
    title: "Being & Sensing Verbs",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-yoga-way-of-life",
    objective: "Notice being and sensing verbs in wellness language.",
  },
  {
    id: "english-pp-link",
    title: "Past With a Present Effect",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-yoga-way-of-life",
    objective: "Link a past practice to a present effect on well-being.",
  },
  {
    id: "english-pp-time",
    title: "For, Since, Already, Yet",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-yoga-way-of-life",
    objective: "Use for, since, already, or yet with practice time.",
  },
  {
    id: "english-pastc-scene",
    title: "Background Action",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-yoga-way-of-life",
    objective: "Describe background action while a wellness habit unfolds.",
  },
  {
    id: "english-pastp-order",
    title: "Earlier Past",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-yoga-way-of-life",
    objective: "Order earlier past actions when telling a wellness story.",
  },
  {
    id: "english-fut-will",
    title: "Will & Going To",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-hamara-bharat",
    objective: "Use will or going to for a future belonging wish.",
  },
  {
    id: "english-fut-arrange",
    title: "Plans Already Set",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-hamara-bharat",
    objective: "Talk about plans already set for celebrating diversity.",
  },
  {
    id: "english-prep-other",
    title: "For, With, From, About",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-hamara-bharat",
    objective: "Use for, with, from, or about in belonging talk.",
  },
  {
    id: "english-comp-comma",
    title: "Avoiding Run-ons",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-hamara-bharat",
    objective: "Avoid run-ons when listing India’s diversity details.",
  },
  {
    id: "english-punct-apostrophe",
    title: "Apostrophes",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-hamara-bharat",
    objective: "Use apostrophes for possession in names and places.",
  },
  {
    id: "english-pro-reflexive",
    title: "Reflexive Pronouns",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-the-kites",
    objective: "Use a reflexive pronoun when a flyer acts on themselves.",
  },
  {
    id: "english-pro-relative",
    title: "Relative Pronouns",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-the-kites",
    objective: "Use a relative pronoun to add a kite detail.",
  },
  {
    id: "english-err-its",
    title: "Its & It's",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-the-kites",
    objective: "Choose its or it’s for the meaning you need.",
  },
  {
    id: "english-essay-plan",
    title: "Plan Then Write",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-ila-sachani",
    objective: "Plan then write a paragraph about Ila’s determination.",
  },
  {
    id: "english-speech-indirect",
    title: "Indirect Speech",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-ila-sachani",
    objective: "Report what someone said about Ila’s craft in indirect speech.",
  },
  {
    id: "english-ant-grade",
    title: "Not Always Perfect Opposites",
    kind: "taught",
    hostConceptId: "ncert-g6-poorvi-national-war-memorial",
    objective: "Choose graded opposites carefully when writing about remembrance.",
  },
];

const coverageById = new Map(
  GRADE_6_ENGLISH_SPINE_COVERAGE.map((row) => [row.id, row]),
);

export function getGrade6EnglishSpineCoverage(conceptId: string) {
  return coverageById.get(conceptId);
}

export function getGrade6EnglishHostConceptId(conceptId: string) {
  return coverageById.get(conceptId)?.hostConceptId;
}

export function skillsHostedByGrade6English(hostConceptId: string): string[] {
  return GRADE_6_ENGLISH_SPINE_COVERAGE.filter(
    (row) => row.hostConceptId === hostConceptId,
  ).map((row) => row.id);
}

export function grade6EnglishSpineCoverageAudit() {
  const taught = GRADE_6_ENGLISH_SPINE_COVERAGE.filter((row) => row.kind === "taught");
  const overlap = GRADE_6_ENGLISH_SPINE_COVERAGE.filter(
    (row) => row.kind === "overlap",
  );
  return {
    spineItems: GRADE_6_ENGLISH_SPINE_COVERAGE.length,
    taughtCount: taught.length,
    overlapCount: overlap.length,
    taughtIds: taught.map((row) => row.id),
    overlapIds: overlap.map((row) => row.id),
    connectedIds: GRADE_6_ENGLISH_SPINE_COVERAGE.map((row) => row.id),
  };
}
