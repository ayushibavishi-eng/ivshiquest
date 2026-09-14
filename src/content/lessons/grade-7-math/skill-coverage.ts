import type { Grade7MathConceptId } from "@/content/lessons/grade-7-math/format";

export const GRADE_7_MATH_SPINE_KINDS = ["taught", "overlap"] as const;
export type Grade7MathSpineKind = (typeof GRADE_7_MATH_SPINE_KINDS)[number];

export type Grade7MathLessonHostId = Grade7MathConceptId;

export type Grade7MathSpineCoverage = {
  id: string;
  title: string;
  kind: Grade7MathSpineKind;
  hostConceptId: Grade7MathLessonHostId;
  objective: string;
};

/**
 * Audit of every Grade 7-visible math skill-spine concept except
 * official Ganita Prakash Part 1 and Part 2 chapter cores.
 */
export const GRADE_7_MATH_SPINE_COVERAGE: Grade7MathSpineCoverage[] = [
  {
    id: "math-alg-terms",
    title: "Terms, Coefficients, Like Terms",
    kind: "taught",
    hostConceptId: "ncert-g7-ganita-prakash-1-arithmetic-expressions-core",
    objective: "Name terms, coefficients, and like terms in an arithmetic expression.",
  },
  {
    id: "math-alg-simplify",
    title: "Simplifying Expressions",
    kind: "taught",
    hostConceptId: "ncert-g7-ganita-prakash-1-arithmetic-expressions-core",
    objective: "Simplify an expression by combining like terms carefully.",
  },
  {
    id: "math-geo-parallel-angles",
    title: "Angles with Parallel Lines",
    kind: "taught",
    hostConceptId: "ncert-g7-ganita-prakash-1-parallel-intersecting-core",
    objective: "Reason about angles formed when a transversal meets parallel lines.",
  },
  {
    id: "math-rea-justify",
    title: "Justifying a Step",
    kind: "taught",
    hostConceptId: "ncert-g7-ganita-prakash-1-number-play-core",
    objective: "Justify a number-property step with a clear reason, not only an answer.",
  },
  {
    id: "math-frac-mul-div",
    title: "Multiplying & Dividing Fractions",
    kind: "taught",
    hostConceptId: "ncert-g7-ganita-prakash-1-working-with-fractions-core",
    objective: "Multiply and divide simple fractions and explain what the operation means.",
  },
  {
    id: "math-tri-congruence",
    title: "Congruent Triangles",
    kind: "taught",
    hostConceptId: "ncert-g7-ganita-prakash-2-geometric-twins-core",
    objective: "Explain when triangles are congruent and match corresponding parts.",
  },
  {
    id: "math-int-number-line",
    title: "Integers on a Line",
    kind: "taught",
    hostConceptId: "ncert-g7-ganita-prakash-2-operations-with-integers-core",
    objective: "Place integers on a number line and talk about direction and distance.",
  },
  {
    id: "math-int-add-sub",
    title: "Adding & Subtracting Integers",
    kind: "taught",
    hostConceptId: "ncert-g7-ganita-prakash-2-operations-with-integers-core",
    objective: "Add and subtract integers using direction on the number line.",
  },
  {
    id: "math-int-mul-div",
    title: "Multiplying & Dividing Integers",
    kind: "overlap",
    hostConceptId: "ncert-g7-ganita-prakash-2-operations-with-integers-core",
    objective: "Multiply and divide integers and explain the sign of the result.",
  },
  {
    id: "math-hcf-lcm-apply",
    title: "Choosing HCF or LCM",
    kind: "taught",
    hostConceptId: "ncert-g7-ganita-prakash-2-finding-common-ground-core",
    objective: "Choose HCF or LCM for a sharing or repeating problem and find it.",
  },
  {
    id: "math-dec-mul",
    title: "Multiplying Decimals",
    kind: "overlap",
    hostConceptId: "ncert-g7-ganita-prakash-2-another-peek-beyond-the-point-core",
    objective: "Multiply decimals by tracking place value through the point.",
  },
  {
    id: "math-dec-div",
    title: "Dividing Decimals",
    kind: "overlap",
    hostConceptId: "ncert-g7-ganita-prakash-2-another-peek-beyond-the-point-core",
    objective: "Divide decimals carefully and place the decimal point with reason.",
  },
  {
    id: "math-stat-mean-median-mode",
    title: "Mean, Median, Mode",
    kind: "overlap",
    hostConceptId: "ncert-g7-ganita-prakash-2-connecting-the-dots-core",
    objective: "Find mean, median, and mode and say what each summary highlights.",
  },
  {
    id: "math-stat-range",
    title: "Range & Reading Graphs",
    kind: "taught",
    hostConceptId: "ncert-g7-ganita-prakash-2-connecting-the-dots-core",
    objective: "Find the range of a data set and read a simple graph for spread.",
  },
  {
    id: "math-con-ruler-compass",
    title: "Ruler & Compass Constructions",
    kind: "overlap",
    hostConceptId: "ncert-g7-ganita-prakash-2-constructions-and-tilings-core",
    objective: "Carry out a ruler-and-compass construction with clear steps.",
  },
  {
    id: "math-con-tilings",
    title: "Tilings",
    kind: "overlap",
    hostConceptId: "ncert-g7-ganita-prakash-2-constructions-and-tilings-core",
    objective: "Describe how a tiling covers a surface without gaps or overlaps.",
  },
  {
    id: "math-eq-two-step",
    title: "Two-Step Equations",
    kind: "taught",
    hostConceptId: "ncert-g7-ganita-prakash-2-finding-the-unknown-core",
    objective: "Solve a two-step equation and check the solution in the original equation.",
  },
  {
    id: "math-ratio-direct",
    title: "Direct Proportion",
    kind: "taught",
    hostConceptId: "ncert-g7-ganita-prakash-2-finding-the-unknown-core",
    objective: "Use direct proportion to find an unknown when quantities scale together.",
  },
  {
    id: "math-rat-meaning",
    title: "What a Rational Number Is",
    kind: "taught",
    hostConceptId: "ncert-g7-ganita-prakash-2-finding-the-unknown-core",
    objective: "Explain what a rational number is using a fraction or decimal example.",
  },
];

const coverageById = new Map(
  GRADE_7_MATH_SPINE_COVERAGE.map((row) => [row.id, row]),
);

export function getGrade7MathSpineCoverage(conceptId: string) {
  return coverageById.get(conceptId);
}

export function getGrade7MathHostConceptId(conceptId: string) {
  return coverageById.get(conceptId)?.hostConceptId;
}

export function skillsHostedByGrade7(hostConceptId: string): string[] {
  return GRADE_7_MATH_SPINE_COVERAGE.filter(
    (row) => row.hostConceptId === hostConceptId,
  ).map((row) => row.id);
}

export function grade7MathSpineCoverageAudit() {
  const taught = GRADE_7_MATH_SPINE_COVERAGE.filter((row) => row.kind === "taught");
  const overlap = GRADE_7_MATH_SPINE_COVERAGE.filter(
    (row) => row.kind === "overlap",
  );
  return {
    spineItems: GRADE_7_MATH_SPINE_COVERAGE.length,
    taughtCount: taught.length,
    overlapCount: overlap.length,
    taughtIds: taught.map((row) => row.id),
    overlapIds: overlap.map((row) => row.id),
    connectedIds: GRADE_7_MATH_SPINE_COVERAGE.map((row) => row.id),
  };
}
