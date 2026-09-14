import type { Grade6MathConceptId } from "@/content/lessons/grade-6-math/format";

export const GRADE_6_MATH_SPINE_KINDS = ["taught", "overlap"] as const;
export type Grade6MathSpineKind = (typeof GRADE_6_MATH_SPINE_KINDS)[number];

export type Grade6MathLessonHostId =
  | Grade6MathConceptId
  | "equivalent-fractions";

export type Grade6MathSpineCoverage = {
  id: string;
  title: string;
  kind: Grade6MathSpineKind;
  hostConceptId: Grade6MathLessonHostId;
  objective: string;
};

/**
 * Audit of every Grade 6-visible math skill-spine concept except
 * Equivalent Fractions (gold lesson) and official Ganita Prakash chapter cores.
 */
export const GRADE_6_MATH_SPINE_COVERAGE: Grade6MathSpineCoverage[] = [
  {
    id: "math-pat-input-output",
    title: "Input–Output Rules",
    kind: "overlap",
    hostConceptId: "ncert-g6-ganita-prakash-patterns-in-mathematics-core",
    objective: "Name an input–output rule and predict the next term in a pattern.",
  },
  {
    id: "math-shp-growing",
    title: "Growing Shape Patterns",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-patterns-in-mathematics-core",
    objective: "Continue a growing shape pattern and explain the jump.",
  },
  {
    id: "math-alg-unknown",
    title: "Unknowns",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-patterns-in-mathematics-core",
    objective: "Find an unknown number that fits a pattern rule.",
  },
  {
    id: "math-alg-letter",
    title: "Using a Letter",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-patterns-in-mathematics-core",
    objective: "Use a letter to stand for an unknown in a pattern story.",
  },
  {
    id: "math-exp-write",
    title: "Writing Expressions",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-patterns-in-mathematics-core",
    objective: "Write a simple expression that captures a pattern rule.",
  },
  {
    id: "math-exp-evaluate",
    title: "Evaluating Expressions",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-patterns-in-mathematics-core",
    objective: "Evaluate an expression when a letter is given a value.",
  },
  {
    id: "math-rea-counter",
    title: "Counter-examples",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-patterns-in-mathematics-core",
    objective: "Give a counter-example that shows a pattern claim is not always true.",
  },
  {
    id: "math-rea-steps",
    title: "Logical Steps",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-patterns-in-mathematics-core",
    objective: "Explain a pattern prediction in clear logical steps.",
  },
  {
    id: "math-ang-measure",
    title: "Measuring Angles",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-lines-and-angles-core",
    objective: "Compare and talk about angle openness using a right angle as a guide.",
  },
  {
    id: "math-lin-intersect",
    title: "Intersecting Lines",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-lines-and-angles-core",
    objective: "Describe where lines meet and name the crossing.",
  },
  {
    id: "math-tri-angles",
    title: "By Angles",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-lines-and-angles-core",
    objective: "Sort a triangle’s corners as right, acute, or obtuse.",
  },
  {
    id: "math-tri-sum",
    title: "Angle Sum",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-lines-and-angles-core",
    objective: "Use the idea that a triangle’s three angles add to a straight turn.",
  },
  {
    id: "math-pv-lakhs",
    title: "Indian Place Value",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-number-play-core",
    objective: "Read Indian place grouping such as lakhs in a large number.",
  },
  {
    id: "math-pv-rounding-place",
    title: "Rounding by Place",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-number-play-core",
    objective: "Round a large number using a named place.",
  },
  {
    id: "math-co-large",
    title: "Comparing Large Numbers",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-number-play-core",
    objective: "Compare multi-digit numbers from the leftmost place.",
  },
  {
    id: "math-est-front",
    title: "Front-End Estimation",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-number-play-core",
    objective: "Estimate a product or sum with friendly front digits.",
  },
  {
    id: "math-est-reason",
    title: "Sensible Estimates",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-number-play-core",
    objective: "Judge whether an estimate fits the number story.",
  },
  {
    id: "math-add-large",
    title: "Larger Sums",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-number-play-core",
    objective: "Add multi-digit numbers with places lined up.",
  },
  {
    id: "math-add-properties",
    title: "Properties of Addition",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-number-play-core",
    objective: "Use order and grouping of addends without changing the sum.",
  },
  {
    id: "math-sub-large",
    title: "Larger Differences",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-number-play-core",
    objective: "Subtract multi-digit numbers, including across zeros.",
  },
  {
    id: "math-mul-algorithm",
    title: "Multi-digit Multiplication",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-number-play-core",
    objective: "Multiply multi-digit numbers using partial products or a standard method.",
  },
  {
    id: "math-mul-properties",
    title: "Properties of Multiplication",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-number-play-core",
    objective: "Use ×0, ×1, and splitting a factor in number play.",
  },
  {
    id: "math-div-long",
    title: "Longer Division",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-number-play-core",
    objective: "Divide larger numbers and check with multiplication.",
  },
  {
    id: "math-data-bar",
    title: "Bar Graphs",
    kind: "overlap",
    hostConceptId: "ncert-g6-ganita-prakash-data-handling-core",
    objective: "Read bar heights to compare categories in a graph.",
  },
  {
    id: "math-grp-bar",
    title: "Drawing Bar Graphs",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-data-handling-core",
    objective: "Choose a scale and sketch bars for category counts.",
  },
  {
    id: "math-grp-line",
    title: "Line Graphs Intro",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-data-handling-core",
    objective: "Read a simple line graph as change across ordered points.",
  },
  {
    id: "math-avg-mean",
    title: "Mean as Fair Share",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-data-handling-core",
    objective: "See a mean as a fair share of a total.",
  },
  {
    id: "math-avg-story",
    title: "Average Stories",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-data-handling-core",
    objective: "Explain what an average means in a short data story.",
  },
  {
    id: "math-prob-language",
    title: "Certain, Likely, Impossible",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-data-handling-core",
    objective: "Use certain, likely, and impossible for everyday chance talk.",
  },
  {
    id: "math-prob-simple",
    title: "Simple Chance",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-data-handling-core",
    objective: "Describe a simple chance situation with fair outcomes.",
  },
  {
    id: "math-fac-factors",
    title: "Finding Factors",
    kind: "overlap",
    hostConceptId: "ncert-g6-ganita-prakash-prime-time-core",
    objective: "List factors of a number that divide it with no leftover.",
  },
  {
    id: "math-fac-pairs",
    title: "Factor Pairs",
    kind: "overlap",
    hostConceptId: "ncert-g6-ganita-prakash-prime-time-core",
    objective: "Write factor pairs that rebuild a total.",
  },
  {
    id: "math-fac-prime",
    title: "Prime & Composite",
    kind: "overlap",
    hostConceptId: "ncert-g6-ganita-prakash-prime-time-core",
    objective: "Spot a prime number and explain why it is prime.",
  },
  {
    id: "math-fac-one",
    title: "Why 1 Is Special",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-prime-time-core",
    objective: "Explain why 1 is special and not called prime.",
  },
  {
    id: "math-fac-divisibility",
    title: "Tests for 2, 5, and 10",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-prime-time-core",
    objective: "Use last-digit tests for divisibility by 2, 5, and 10.",
  },
  {
    id: "math-fac-div-three",
    title: "Tests for 3 and 9",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-prime-time-core",
    objective: "Use digit sums to test divisibility by 3 or 9.",
  },
  {
    id: "math-fac-hcf",
    title: "Highest Common Factor",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-prime-time-core",
    objective: "Find the highest common factor of two numbers.",
  },
  {
    id: "math-fac-lcm",
    title: "Least Common Multiple",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-prime-time-core",
    objective: "Find the least common multiple of two numbers.",
  },
  {
    id: "math-per-composite",
    title: "Around Composite Shapes",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-perimeter-and-area-core",
    objective: "Find the distance around a shape made of joined rectangles.",
  },
  {
    id: "math-area-composite",
    title: "Composite Area",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-perimeter-and-area-core",
    objective: "Add or subtract regions to find a composite area.",
  },
  {
    id: "math-vol-cubes",
    title: "Counting Cubes",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-perimeter-and-area-core",
    objective: "Count unit cubes that fill a rectangular block.",
  },
  {
    id: "math-vol-cuboid",
    title: "Volume of a Cuboid",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-perimeter-and-area-core",
    objective: "Find the volume of a cuboid using length, width, and height.",
  },
  {
    id: "math-geo-nets",
    title: "Nets Intro",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-perimeter-and-area-core",
    objective: "Match a net to the solid it can fold into.",
  },
  {
    id: "math-3d-prisms",
    title: "Prisms & Pyramids",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-perimeter-and-area-core",
    objective: "Tell a prism from a pyramid by looking at faces and edges.",
  },
  {
    id: "math-frac-mixed",
    title: "Mixed Numbers",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-fractions-core",
    objective: "Read a mixed number as wholes plus a leftover fraction.",
  },
  {
    id: "math-frac-operations",
    title: "Fraction Operations",
    kind: "overlap",
    hostConceptId: "ncert-g6-ganita-prakash-fractions-core",
    objective: "Choose a sensible fraction operation for a share story.",
  },
  {
    id: "math-frac-word",
    title: "Fraction Word Problems",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-fractions-core",
    objective: "Solve a short word problem that needs fractions.",
  },
  {
    id: "math-frac-links",
    title: "Fractions, Decimals & Percent",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-fractions-core",
    objective: "Connect a fraction to a related decimal or percent idea.",
  },
  {
    id: "math-dec-hundredths",
    title: "Hundredths",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-fractions-core",
    objective: "Read hundredths as finer equal parts after tenths.",
  },
  {
    id: "math-dec-add",
    title: "Adding Decimals",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-fractions-core",
    objective: "Add decimals with places lined up.",
  },
  {
    id: "math-dec-money",
    title: "Decimals in Money",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-fractions-core",
    objective: "Read money amounts as rupees and hundredths.",
  },
  {
    id: "math-pct-meaning",
    title: "What Percent Means",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-fractions-core",
    objective: "See percent as parts of a hundred.",
  },
  {
    id: "math-pct-links",
    title: "Percent, Fractions, Decimals",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-fractions-core",
    objective: "Rewrite among percent, fraction, and decimal forms.",
  },
  {
    id: "math-pct-problems",
    title: "Percent Problems",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-fractions-core",
    objective: "Solve a simple percent-of-a-number problem.",
  },
  {
    id: "math-cir-compass",
    title: "Drawing Circles",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-playing-with-constructions-core",
    objective: "Describe drawing a circle with a fixed distance from a centre.",
  },
  {
    id: "math-poly-names",
    title: "Naming Polygons",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-playing-with-constructions-core",
    objective: "Name a polygon by counting its sides.",
  },
  {
    id: "math-poly-regular",
    title: "Regular Polygons",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-playing-with-constructions-core",
    objective: "Recognise a regular polygon with equal sides and equal angles.",
  },
  {
    id: "math-quad-para-rhombus",
    title: "Parallelogram & Rhombus",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-playing-with-constructions-core",
    objective: "Spot parallel opposite sides in a parallelogram or rhombus.",
  },
  {
    id: "math-quad-trapezium",
    title: "Trapezium",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-playing-with-constructions-core",
    objective: "Notice a trapezium with exactly one pair of parallel sides.",
  },
  {
    id: "math-sym-reflection",
    title: "Reflection",
    kind: "overlap",
    hostConceptId: "ncert-g6-ganita-prakash-symmetry-core",
    objective: "Complete a reflection across a line of symmetry.",
  },
  {
    id: "math-ns-integers-intro",
    title: "Negative Numbers Intro",
    kind: "overlap",
    hostConceptId: "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
    objective: "Place a negative number on the other side of zero.",
  },
  {
    id: "math-eq-balance",
    title: "Keeping Balance",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
    objective: "Keep both sides of an equation in balance when solving.",
  },
  {
    id: "math-eq-one-step",
    title: "One-Step Equations",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
    objective: "Solve a one-step equation for an unknown.",
  },
  {
    id: "math-ratio-meaning",
    title: "What a Ratio Is",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
    objective: "Explain a ratio as a comparison of two quantities.",
  },
  {
    id: "math-ratio-equivalent",
    title: "Equivalent Ratios",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
    objective: "Find an equivalent ratio by scaling both parts.",
  },
  {
    id: "math-ratio-proportion",
    title: "Proportion",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
    objective: "Write a proportion and find a missing term.",
  },
  {
    id: "math-money-bills",
    title: "Bills & Change",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
    objective: "Find change from a note after paying a bill.",
  },
  {
    id: "math-time-24h",
    title: "24-Hour Clock",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
    objective: "Read afternoon times on a 24-hour clock.",
  },
  {
    id: "math-wp-two-step",
    title: "Two-Step Stories",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
    objective: "Plan two linked steps to finish a number story.",
  },
  {
    id: "math-wp-units",
    title: "Units in Stories",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
    objective: "Keep track of units across steps in a story.",
  },
  {
    id: "math-ps-strategies",
    title: "Strategies",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
    objective: "Choose a strategy such as draw, estimate, or work backwards.",
  },
  {
    id: "math-ps-check",
    title: "Check the Answer",
    kind: "taught",
    hostConceptId: "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
    objective: "Check an answer with a second method or estimate.",
  },
];

const coverageById = new Map(
  GRADE_6_MATH_SPINE_COVERAGE.map((row) => [row.id, row]),
);

export function getGrade6MathSpineCoverage(conceptId: string) {
  return coverageById.get(conceptId);
}

export function getGrade6MathHostConceptId(conceptId: string) {
  return coverageById.get(conceptId)?.hostConceptId;
}

export function skillsHostedByGrade6(hostConceptId: string): string[] {
  return GRADE_6_MATH_SPINE_COVERAGE.filter(
    (row) => row.hostConceptId === hostConceptId,
  ).map((row) => row.id);
}

export function grade6MathSpineCoverageAudit() {
  const taught = GRADE_6_MATH_SPINE_COVERAGE.filter((row) => row.kind === "taught");
  const overlap = GRADE_6_MATH_SPINE_COVERAGE.filter(
    (row) => row.kind === "overlap",
  );
  return {
    spineItems: GRADE_6_MATH_SPINE_COVERAGE.length,
    taughtCount: taught.length,
    overlapCount: overlap.length,
    taughtIds: taught.map((row) => row.id),
    overlapIds: overlap.map((row) => row.id),
    connectedIds: GRADE_6_MATH_SPINE_COVERAGE.map((row) => row.id),
  };
}
