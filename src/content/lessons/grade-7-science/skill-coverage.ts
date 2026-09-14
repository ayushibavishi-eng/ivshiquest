import type { Grade7ScienceConceptId } from "@/content/lessons/grade-7-science/format";

export const GRADE_7_SCIENCE_SPINE_KINDS = ["taught", "overlap"] as const;
export type Grade7ScienceSpineKind = (typeof GRADE_7_SCIENCE_SPINE_KINDS)[number];

export type Grade7ScienceLessonHostId = Grade7ScienceConceptId;

export type Grade7ScienceSpineCoverage = {
  id: string;
  title: string;
  kind: Grade7ScienceSpineKind;
  hostConceptId: Grade7ScienceLessonHostId;
  objective: string;
};

/**
 * Audit of every Grade 7-visible science skill-spine concept except
 * official Curiosity chapter cores. Photosynthesis gold remains Grade 4–6 only.
 */
export const GRADE_7_SCIENCE_SPINE_COVERAGE: Grade7ScienceSpineCoverage[] = [
  {
    id: "science-inq-investigate",
    title: "Investigative Questions",
    kind: "taught",
    hostConceptId: "ncert-g7-curiosity-ever-evolving-core",
    objective: "Ask an investigative question you can check with evidence, not only with opinion.",
  },
  {
    id: "science-ab-classify",
    title: "Acidic, Basic, Neutral",
    kind: "overlap",
    hostConceptId: "ncert-g7-curiosity-acidic-basic-neutral-core",
    objective: "Classify everyday substances as acidic, basic, or neutral using indicator ideas.",
  },
  {
    id: "science-ab-neutralisation",
    title: "Neutralisation Intro",
    kind: "taught",
    hostConceptId: "ncert-g7-curiosity-acidic-basic-neutral-core",
    objective: "Explain neutralisation as acid and base meeting to form a milder mixture.",
  },
  {
    id: "science-el-circuits",
    title: "Circuits & Components",
    kind: "overlap",
    hostConceptId: "ncert-g7-curiosity-electricity-circuits-core",
    objective: "Name circuit parts and explain why a closed path is needed for current.",
  },
  {
    id: "science-mn-properties",
    title: "Properties of Metals & Non-metals",
    kind: "overlap",
    hostConceptId: "ncert-g7-curiosity-metals-non-metals-core",
    objective: "Compare metal and non-metal properties with everyday examples.",
  },
  {
    id: "science-pc-tell-apart",
    title: "Telling Changes Apart",
    kind: "overlap",
    hostConceptId: "ncert-g7-curiosity-physical-chemical-core",
    objective: "Tell physical changes from chemical changes using clear evidence clues.",
  },
  {
    id: "science-ado-changes",
    title: "Growth & Change",
    kind: "overlap",
    hostConceptId: "ncert-g7-curiosity-adolescence-core",
    objective: "Name an adolescence change and link it to a healthy habit of care.",
  },
  {
    id: "science-heat-ways",
    title: "Conduction, Convection, Radiation",
    kind: "overlap",
    hostConceptId: "ncert-g7-curiosity-heat-transfer-core",
    objective: "Name conduction, convection, or radiation and give a nature example.",
  },
  {
    id: "science-lp-animals",
    title: "Life Processes in Animals",
    kind: "overlap",
    hostConceptId: "ncert-g7-curiosity-life-processes-animals-core",
    objective: "Name an animal life process and link it to an organ that supports it.",
  },
  {
    id: "science-lp-plants",
    title: "Life Processes in Plants",
    kind: "overlap",
    hostConceptId: "ncert-g7-curiosity-life-processes-plants-core",
    objective: "Name a plant life process and link it to a plant part that supports it.",
  },
  {
    id: "science-light-shadows",
    title: "Shadows & Reflection",
    kind: "overlap",
    hostConceptId: "ncert-g7-curiosity-light-shadows-core",
    objective: "Explain how shadows form and describe reflection of light.",
  },
  {
    id: "science-ems-system",
    title: "Earth, Moon, and the Sun",
    kind: "overlap",
    hostConceptId: "ncert-g7-curiosity-earth-moon-sun-core",
    objective: "Explain day and night and describe an Earth–Moon–Sun relationship.",
  },
];

const coverageById = new Map(
  GRADE_7_SCIENCE_SPINE_COVERAGE.map((row) => [row.id, row]),
);

export function getGrade7ScienceSpineCoverage(conceptId: string) {
  return coverageById.get(conceptId);
}

export function getGrade7ScienceHostConceptId(conceptId: string) {
  return coverageById.get(conceptId)?.hostConceptId;
}

export function skillsHostedByGrade7Science(hostConceptId: string): string[] {
  return GRADE_7_SCIENCE_SPINE_COVERAGE.filter(
    (row) => row.hostConceptId === hostConceptId,
  ).map((row) => row.id);
}

export function grade7ScienceSpineCoverageAudit() {
  const taught = GRADE_7_SCIENCE_SPINE_COVERAGE.filter((row) => row.kind === "taught");
  const overlap = GRADE_7_SCIENCE_SPINE_COVERAGE.filter(
    (row) => row.kind === "overlap",
  );
  return {
    spineItems: GRADE_7_SCIENCE_SPINE_COVERAGE.length,
    taughtCount: taught.length,
    overlapCount: overlap.length,
    taughtIds: taught.map((row) => row.id),
    overlapIds: overlap.map((row) => row.id),
    connectedIds: GRADE_7_SCIENCE_SPINE_COVERAGE.map((row) => row.id),
  };
}
