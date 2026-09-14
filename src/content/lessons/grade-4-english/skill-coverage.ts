/**
 * Honest Grade 4 English grammar skill-coverage.
 *
 * Grade 4 Santoor chapters are literature / comprehension experiences.
 * They do not teach formal grammar, so they are NOT used as grammar hosts.
 *
 * The only playable Grade 4 grammar complete lesson today is the Subject–Verb
 * Agreement gold lesson. Coverage rows below map only catalogue skills that
 * that gold lesson genuinely teaches.
 *
 * Other Grade 4 Grammar catalogue nodes remain Coming Soon until dedicated
 * grammar content exists (or a chapter is enriched with real grammar practice).
 * `english-nouns-common-proper` stays ready via its legacy curriculum experience.
 */

export const GRADE_4_ENGLISH_SPINE_KINDS = ["taught", "overlap"] as const;
export type Grade4EnglishSpineKind = (typeof GRADE_4_ENGLISH_SPINE_KINDS)[number];

export type Grade4EnglishLessonHostId = "english-sva-simple";

export type Grade4EnglishSpineCoverage = {
  id: string;
  title: string;
  kind: Grade4EnglishSpineKind;
  hostConceptId: Grade4EnglishLessonHostId;
  objective: string;
};

/**
 * Grade 4 grammar catalogue concepts hosted on existing playable content.
 * Does not include `english-sva-simple` itself (gold lesson) or chapter cores.
 */
export const GRADE_4_ENGLISH_SPINE_COVERAGE: Grade4EnglishSpineCoverage[] = [
  {
    id: "english-sp-s-form",
    title: "The -s Form",
    kind: "taught",
    hostConceptId: "english-sva-simple",
    objective:
      "Add -s or -es so a singular third-person subject matches the verb in simple present.",
  },
  {
    id: "english-sub-who",
    title: "Finding the Subject",
    kind: "overlap",
    hostConceptId: "english-sva-simple",
    objective:
      "Find who or what the sentence is about before choosing the matching verb form.",
  },
];

const coverageById = new Map(
  GRADE_4_ENGLISH_SPINE_COVERAGE.map((row) => [row.id, row]),
);

export function getGrade4EnglishSpineCoverage(conceptId: string) {
  return coverageById.get(conceptId);
}

export function getGrade4EnglishHostConceptId(conceptId: string) {
  return coverageById.get(conceptId)?.hostConceptId;
}

export function skillsHostedByGrade4English(hostConceptId: string): string[] {
  return GRADE_4_ENGLISH_SPINE_COVERAGE.filter(
    (row) => row.hostConceptId === hostConceptId,
  ).map((row) => row.id);
}

export function grade4EnglishSpineCoverageAudit() {
  const taught = GRADE_4_ENGLISH_SPINE_COVERAGE.filter(
    (row) => row.kind === "taught",
  );
  const overlap = GRADE_4_ENGLISH_SPINE_COVERAGE.filter(
    (row) => row.kind === "overlap",
  );
  return {
    spineItems: GRADE_4_ENGLISH_SPINE_COVERAGE.length,
    taughtCount: taught.length,
    overlapCount: overlap.length,
    taughtIds: taught.map((row) => row.id),
    overlapIds: overlap.map((row) => row.id),
    connectedIds: GRADE_4_ENGLISH_SPINE_COVERAGE.map((row) => row.id),
  };
}

/** Grammar catalogue IDs that are ready at Grade 4 without skill-coverage remaps. */
export const GRADE_4_GRAMMAR_READY_WITHOUT_COVERAGE = [
  "english-sva-simple",
  "english-nouns-common-proper",
] as const;
