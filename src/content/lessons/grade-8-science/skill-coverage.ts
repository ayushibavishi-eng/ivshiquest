import type { Grade8ScienceConceptId } from "@/content/lessons/grade-8-science/format";

export const GRADE_8_SCIENCE_SPINE_KINDS = ["taught", "overlap"] as const;
export type Grade8ScienceSpineKind = (typeof GRADE_8_SCIENCE_SPINE_KINDS)[number];

export type Grade8ScienceLessonHostId = Grade8ScienceConceptId;

export type Grade8ScienceSpineCoverage = {
  id: string;
  title: string;
  kind: Grade8ScienceSpineKind;
  hostConceptId: Grade8ScienceLessonHostId;
  objective: string;
};

/**
 * Audit of every Grade 8-visible science skill-spine concept except
 * official Curiosity chapter cores. Photosynthesis gold remains Grade 4–6 only.
 */
export const GRADE_8_SCIENCE_SPINE_COVERAGE: Grade8ScienceSpineCoverage[] = [
  {
    id: "science-inq-investigate",
    title: "Investigative Questions",
    kind: "taught",
    hostConceptId: "ncert-g8-curiosity-investigative-world-core",
    objective: "Ask an investigative question you can check with evidence, not only with opinion.",
  },
  {
    id: "science-cell-unit",
    title: "Cell as a Unit of Life",
    kind: "overlap",
    hostConceptId: "ncert-g8-curiosity-invisible-living-core",
    objective: "Explain why the cell is treated as a basic unit of living things.",
  },
  {
    id: "science-microbes",
    title: "Microorganisms",
    kind: "taught",
    hostConceptId: "ncert-g8-curiosity-invisible-living-core",
    objective: "Describe microorganisms as living things too small to see with the naked eye and give an example role.",
  },
  {
    id: "science-health-meaning",
    title: "What Health Includes",
    kind: "overlap",
    hostConceptId: "ncert-g8-curiosity-health-treasure-core",
    objective: "Explain that health includes body, mind, and social wellbeing — not only the absence of illness.",
  },
  {
    id: "science-health-disease",
    title: "Causes of Disease",
    kind: "taught",
    hostConceptId: "ncert-g8-curiosity-health-treasure-core",
    objective: "Link a disease idea to a cause pathway such as microbes, lifestyle, or environment.",
  },
  {
    id: "science-el-effects",
    title: "Heating & Magnetic Effects",
    kind: "overlap",
    hostConceptId: "ncert-g8-curiosity-electricity-magnetic-heating-core",
    objective: "Describe heating and magnetic effects of electric current with everyday examples.",
  },
  {
    id: "science-force-explore",
    title: "Exploring Forces",
    kind: "overlap",
    hostConceptId: "ncert-g8-curiosity-exploring-forces-core",
    objective: "Describe a force as a push or pull and name an effect it can have on motion or shape.",
  },
  {
    id: "science-pressure",
    title: "Pressure",
    kind: "taught",
    hostConceptId: "ncert-g8-curiosity-exploring-forces-core",
    objective: "Explain pressure as force spread over area and use it in a simple everyday example.",
  },
  {
    id: "science-storms-pressure",
    title: "Pressure, Winds, and Storms",
    kind: "overlap",
    hostConceptId: "ncert-g8-curiosity-pressure-winds-storms-core",
    objective: "Connect air pressure differences to wind and storm behaviour.",
  },
  {
    id: "science-part-states",
    title: "Particles and States",
    kind: "overlap",
    hostConceptId: "ncert-g8-curiosity-particulate-nature-core",
    objective: "Use particle ideas to explain solid, liquid, and gas behaviour.",
  },
  {
    id: "science-part-pure",
    title: "Elements, Compounds, Mixtures",
    kind: "overlap",
    hostConceptId: "ncert-g8-curiosity-elements-compounds-mixtures-core",
    objective: "Tell elements, compounds, and mixtures apart with clear examples.",
  },
  {
    id: "science-part-solutions",
    title: "Solutions",
    kind: "overlap",
    hostConceptId: "ncert-g8-curiosity-solutes-solvents-core",
    objective: "Name solute and solvent and describe a solution as a uniform mixture.",
  },
  {
    id: "science-light-lenses",
    title: "Mirrors & Lenses",
    kind: "overlap",
    hostConceptId: "ncert-g8-curiosity-light-mirrors-lenses-core",
    objective: "Describe how mirrors and lenses change the path or appearance of light.",
  },
  {
    id: "science-sky-time",
    title: "Keeping Time with the Skies",
    kind: "overlap",
    hostConceptId: "ncert-g8-curiosity-keeping-time-skies-core",
    objective: "Link sky patterns to how people keep track of days and seasons.",
  },
  {
    id: "science-eco-harmony",
    title: "How Nature Works in Harmony",
    kind: "overlap",
    hostConceptId: "ncert-g8-curiosity-nature-harmony-core",
    objective: "Explain a way living and non-living parts of nature interact in balance.",
  },
  {
    id: "science-earth-home",
    title: "Earth, a Life-Sustaining Planet",
    kind: "overlap",
    hostConceptId: "ncert-g8-curiosity-earth-unique-planet-core",
    objective: "Name features that make Earth able to support life.",
  },
];

const coverageById = new Map(
  GRADE_8_SCIENCE_SPINE_COVERAGE.map((row) => [row.id, row]),
);

export function getGrade8ScienceSpineCoverage(conceptId: string) {
  return coverageById.get(conceptId);
}

export function getGrade8ScienceHostConceptId(conceptId: string) {
  return coverageById.get(conceptId)?.hostConceptId;
}

export function skillsHostedByGrade8Science(hostConceptId: string): string[] {
  return GRADE_8_SCIENCE_SPINE_COVERAGE.filter(
    (row) => row.hostConceptId === hostConceptId,
  ).map((row) => row.id);
}

export function grade8ScienceSpineCoverageAudit() {
  const taught = GRADE_8_SCIENCE_SPINE_COVERAGE.filter((row) => row.kind === "taught");
  const overlap = GRADE_8_SCIENCE_SPINE_COVERAGE.filter(
    (row) => row.kind === "overlap",
  );
  return {
    spineItems: GRADE_8_SCIENCE_SPINE_COVERAGE.length,
    taughtCount: taught.length,
    overlapCount: overlap.length,
    taughtIds: taught.map((row) => row.id),
    overlapIds: overlap.map((row) => row.id),
    connectedIds: GRADE_8_SCIENCE_SPINE_COVERAGE.map((row) => row.id),
  };
}
