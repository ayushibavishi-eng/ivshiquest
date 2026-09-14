import type { Grade8MathConceptId } from "@/content/lessons/grade-8-math/format";

export const GRADE_8_MATH_SPINE_KINDS = ["taught", "overlap"] as const;
export type Grade8MathSpineKind = (typeof GRADE_8_MATH_SPINE_KINDS)[number];

export type Grade8MathLessonHostId = Grade8MathConceptId;

export type Grade8MathSpineCoverage = {
  id: string;
  title: string;
  kind: Grade8MathSpineKind;
  hostConceptId: Grade8MathLessonHostId;
  objective: string;
};

/**
 * Audit of every Grade 8-visible math skill-spine concept except
 * official Ganita Prakash chapter cores. Equivalent Fractions gold remains Grades 4–6.
 */
export const GRADE_8_MATH_SPINE_COVERAGE: Grade8MathSpineCoverage[] = [
  {
    id: "math-sq-perfect",
    title: "Perfect Squares",
    kind: "overlap",
    hostConceptId: "ncert-g8-ganita-prakash-a-square-and-a-cube-core",
    objective: "Recognise perfect squares and explain why a number is or is not one.",
  },
  {
    id: "math-sq-root",
    title: "Square Roots",
    kind: "taught",
    hostConceptId: "ncert-g8-ganita-prakash-a-square-and-a-cube-core",
    objective: "Find or estimate a square root linked to square numbers.",
  },
  {
    id: "math-exp-powers",
    title: "Squares, Cubes & Powers",
    kind: "overlap",
    hostConceptId: "ncert-g8-ganita-prakash-a-square-and-a-cube-core",
    objective: "Connect squares and cubes to powers with whole-number exponents.",
  },
  {
    id: "math-exp-laws",
    title: "Laws of Exponents",
    kind: "taught",
    hostConceptId: "ncert-g8-ganita-prakash-power-play-core",
    objective: "Use laws of exponents when multiplying same-base powers.",
  },
  {
    id: "math-exp-standard",
    title: "Large & Small with Powers of 10",
    kind: "taught",
    hostConceptId: "ncert-g8-ganita-prakash-power-play-core",
    objective: "Express large or small numbers using powers of ten.",
  },
  {
    id: "math-rat-meaning",
    title: "What a Rational Number Is",
    kind: "overlap",
    hostConceptId: "ncert-g8-ganita-prakash-a-story-of-numbers-core",
    objective: "Explain what a rational number is using place value and fraction ideas.",
  },
  {
    id: "math-rat-ops",
    title: "Operations with Rationals",
    kind: "taught",
    hostConceptId: "ncert-g8-ganita-prakash-a-story-of-numbers-core",
    objective: "Operate with rational numbers carefully using place-value sense.",
  },
  {
    id: "math-quad-properties",
    title: "Properties of Quadrilaterals",
    kind: "overlap",
    hostConceptId: "ncert-g8-ganita-prakash-quadrilaterals-core",
    objective: "Use a property of a quadrilateral to reason about sides or angles.",
  },
  {
    id: "math-rea-justify",
    title: "Justifying a Step",
    kind: "overlap",
    hostConceptId: "ncert-g8-ganita-prakash-number-play-core",
    objective: "Justify a number-property step with a clear reason in a puzzle.",
  },
  {
    id: "math-prob-fraction",
    title: "Probability as a Fraction",
    kind: "taught",
    hostConceptId: "ncert-g8-ganita-prakash-number-play-core",
    objective: "Express a simple probability as a fraction of equally likely outcomes.",
  },
  {
    id: "math-alg-simplify",
    title: "Simplifying Expressions",
    kind: "overlap",
    hostConceptId: "ncert-g8-ganita-prakash-we-distribute-yet-things-multiply-core",
    objective: "Simplify expressions by distributing and combining carefully.",
  },
  {
    id: "math-eq-brackets",
    title: "Equations with Brackets",
    kind: "taught",
    hostConceptId: "ncert-g8-ganita-prakash-we-distribute-yet-things-multiply-core",
    objective: "Solve or rewrite an equation that uses brackets via distribution.",
  },
  {
    id: "math-ratio-direct",
    title: "Direct Proportion",
    kind: "overlap",
    hostConceptId: "ncert-g8-ganita-prakash-proportional-reasoning-1-core",
    objective: "Write a direct proportion and find a missing term.",
  },
  {
    id: "math-frac-disguise",
    title: "Fractions in Disguise",
    kind: "overlap",
    hostConceptId: "ncert-g8-ganita-prakash-fractions-in-disguise-core",
    objective: "Rewrite a fraction in disguise as an equivalent form or percent.",
  },
  {
    id: "math-pct-increase",
    title: "Increase & Decrease",
    kind: "taught",
    hostConceptId: "ncert-g8-ganita-prakash-fractions-in-disguise-core",
    objective: "Find a percent increase or decrease from a rational comparison.",
  },
  {
    id: "math-pct-profit",
    title: "Profit, Loss & Simple Interest Intro",
    kind: "taught",
    hostConceptId: "ncert-g8-ganita-prakash-fractions-in-disguise-core",
    objective: "Use percent ideas in a simple profit, loss, or interest intro story.",
  },
  {
    id: "math-tri-pythagoras",
    title: "Baudhāyana–Pythagoras",
    kind: "overlap",
    hostConceptId: "ncert-g8-ganita-prakash-baudhayana-pythagoras-core",
    objective: "Use the Baudhāyana–Pythagoras relation to find a missing side.",
  },
  {
    id: "math-ratio-inverse",
    title: "Inverse Proportion",
    kind: "taught",
    hostConceptId: "ncert-g8-ganita-prakash-proportional-reasoning-2-core",
    objective: "Spot inverse proportion and explain how one quantity falls as another rises.",
  },
  {
    id: "math-men-circle-intro",
    title: "Circumference Ideas",
    kind: "taught",
    hostConceptId: "ncert-g8-ganita-prakash-exploring-geometric-themes-core",
    objective: "Use circumference ideas when exploring geometric themes.",
  },
  {
    id: "math-alg-identities",
    title: "Simple Identities",
    kind: "taught",
    hostConceptId: "ncert-g8-ganita-prakash-algebra-play-core",
    objective: "Use a simple algebraic identity to expand or simplify.",
  },
  {
    id: "math-men-triangle-area",
    title: "Area of a Triangle",
    kind: "overlap",
    hostConceptId: "ncert-g8-ganita-prakash-area-core",
    objective: "Find the area of a triangle using base and height.",
  },
  {
    id: "math-men-para-area",
    title: "Area of a Parallelogram",
    kind: "overlap",
    hostConceptId: "ncert-g8-ganita-prakash-area-core",
    objective: "Find the area of a parallelogram using base and height.",
  },
  {
    id: "math-stat-range",
    title: "Range & Reading Graphs",
    kind: "overlap",
    hostConceptId: "ncert-g8-ganita-prakash-area-core",
    objective: "Read range or graph spread when comparing measured lengths or areas.",
  },
];

const coverageById = new Map(
  GRADE_8_MATH_SPINE_COVERAGE.map((row) => [row.id, row]),
);

export function getGrade8MathSpineCoverage(conceptId: string) {
  return coverageById.get(conceptId);
}

export function getGrade8MathHostConceptId(conceptId: string) {
  return coverageById.get(conceptId)?.hostConceptId;
}

export function skillsHostedByGrade8(hostConceptId: string): string[] {
  return GRADE_8_MATH_SPINE_COVERAGE.filter(
    (row) => row.hostConceptId === hostConceptId,
  ).map((row) => row.id);
}

export function grade8MathSpineCoverageAudit() {
  const taught = GRADE_8_MATH_SPINE_COVERAGE.filter((row) => row.kind === "taught");
  const overlap = GRADE_8_MATH_SPINE_COVERAGE.filter(
    (row) => row.kind === "overlap",
  );
  return {
    spineItems: GRADE_8_MATH_SPINE_COVERAGE.length,
    taughtCount: taught.length,
    overlapCount: overlap.length,
    taughtIds: taught.map((row) => row.id),
    overlapIds: overlap.map((row) => row.id),
    connectedIds: GRADE_8_MATH_SPINE_COVERAGE.map((row) => row.id),
  };
}
