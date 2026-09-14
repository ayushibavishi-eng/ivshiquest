import type { Grade5MathMelaConceptId } from "@/content/lessons/grade-5-math/format";

export const GRADE_5_MATH_SPINE_KINDS = ["taught", "overlap"] as const;
export type Grade5MathSpineKind = (typeof GRADE_5_MATH_SPINE_KINDS)[number];

export type Grade5MathLessonHostId =
  | Grade5MathMelaConceptId
  | "equivalent-fractions";

export type Grade5MathSpineCoverage = {
  id: string;
  title: string;
  kind: Grade5MathSpineKind;
  hostConceptId: Grade5MathLessonHostId;
  objective: string;
};

/**
 * Audit of every Grade 5-visible math skill-spine *concept* (the 91 catalogue
 * items that are not Maths Mela chapter-cores and not Equivalent Fractions).
 *
 * taught: a genuine G5 skill the child should practise; hosted by a chapter.
 * overlap: the same idea as the host chapter core; keep the catalogue node,
 * but do not treat it as a missing lesson.
 */
export const GRADE_5_MATH_SPINE_COVERAGE: Grade5MathSpineCoverage[] = [
  {
    id: "math-ns-read-write",
    title: "Reading & Writing Numbers",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
    objective: "Read and write travel distances and ticket counts in digits and words.",
  },
  {
    id: "math-ns-compose",
    title: "Composing Numbers",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
    objective: "Build a travel number from place parts such as thousands and hundreds.",
  },
  {
    id: "math-ns-compare-sense",
    title: "Number Magnitude",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
    objective: "Judge whether a distance or count is near a landmark number.",
  },
  {
    id: "math-pv-thousands",
    title: "Thousands",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
    objective: "Read thousands in journey totals and kilometre signs.",
  },
  {
    id: "math-pv-lakhs",
    title: "Indian Place Value",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
    objective: "Read Indian grouping such as 1,00,000 as one lakh on a travel board.",
  },
  {
    id: "math-pv-expanded",
    title: "Expanded Form",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
    objective: "Stretch a travel number to show the value of each digit.",
  },
  {
    id: "math-pv-rounding-place",
    title: "Rounding by Place",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
    objective: "Round a distance or fare using a named place.",
  },
  {
    id: "math-co-order",
    title: "Ordering Numbers",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
    objective: "Line up three journey distances from nearest to farthest.",
  },
  {
    id: "math-co-large",
    title: "Comparing Large Numbers",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
    objective: "Compare multi-digit travel numbers from the leftmost place.",
  },
  {
    id: "math-est-round-ten",
    title: "Rounding to Ten",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
    objective: "Round a short distance or minute count to the nearest ten.",
  },
  {
    id: "math-est-round-hundred",
    title: "Rounding to Hundred",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
    objective: "Round a longer distance to the nearest hundred.",
  },
  {
    id: "math-est-front",
    title: "Front-End Estimation",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
    objective: "Estimate a travel total with friendly front digits.",
  },
  {
    id: "math-est-reason",
    title: "Sensible Estimates",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
    objective: "Judge whether a distance estimate fits the journey story.",
  },
  {
    id: "math-frac-compare",
    title: "Comparing Simple Fractions",
    kind: "taught",
    hostConceptId: "equivalent-fractions",
    objective: "Compare unit fractions of the same whole, such as 1/2 and 1/3.",
  },
  {
    id: "math-frac-add-like",
    title: "Adding & Subtracting Like Fractions",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-fractions-core",
    objective: "Join or remove equal-size pieces of the same whole.",
  },
  {
    id: "math-frac-mixed",
    title: "Mixed Numbers",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-fractions-core",
    objective: "Read a mixed number as wholes plus a leftover fraction.",
  },
  {
    id: "math-frac-operations",
    title: "Fraction Operations",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-fractions-core",
    objective: "Choose a sensible fraction action for a share story.",
  },
  {
    id: "math-frac-word",
    title: "Fraction Word Problems",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-fractions-core",
    objective: "Solve a short story that needs naming or comparing fractions.",
  },
  {
    id: "math-dec-tenths",
    title: "Tenths",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-fractions-core",
    objective: "See one of ten equal parts as a tenth of the same whole.",
  },
  {
    id: "math-dec-hundredths",
    title: "Hundredths",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-fractions-core",
    objective: "See hundredths as finer equal pieces after tenths.",
  },
  {
    id: "math-ang-meaning",
    title: "What an Angle Is",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-angles-as-turns-core",
    objective: "See an angle as a turn where two rays meet.",
  },
  {
    id: "math-ang-types",
    title: "Right, Acute, Obtuse",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-angles-as-turns-core",
    objective: "Sort turns as right, smaller than right, or more open than right.",
  },
  {
    id: "math-ang-measure",
    title: "Measuring Angles",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-angles-as-turns-core",
    objective: "Compare turns with a square corner and talk about openness.",
  },
  {
    id: "math-add-regroup",
    title: "Regrouping in Addition",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-2-core",
    objective: "Regroup ones or tens when adding travel totals.",
  },
  {
    id: "math-add-large",
    title: "Larger Sums",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-2-core",
    objective: "Add multi-digit journey numbers with places lined up.",
  },
  {
    id: "math-add-properties",
    title: "Properties of Addition",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-2-core",
    objective: "Swap or group addends without changing a travel sum.",
  },
  {
    id: "math-sub-regroup",
    title: "Regrouping in Subtraction",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-2-core",
    objective: "Ungroup a place when subtracting kilometres or fares.",
  },
  {
    id: "math-sub-large",
    title: "Larger Differences",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-we-the-travellers-2-core",
    objective: "Subtract multi-digit travel numbers, including across zeros.",
  },
  {
    id: "math-mea-length",
    title: "Length",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-far-and-near-core",
    objective: "Measure and compare longer distances with metres or kilometres.",
  },
  {
    id: "math-per-rect",
    title: "Perimeter of Rectangles",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-far-and-near-core",
    objective: "Find the distance around a rectangular path or field.",
  },
  {
    id: "math-per-composite",
    title: "Around Composite Shapes",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-far-and-near-core",
    objective: "Add outer edges around a path made of joined rectangles.",
  },
  {
    id: "math-mul-tables",
    title: "Multiplication Tables",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Use known facts to count equal groups of milk cans or crates.",
  },
  {
    id: "math-mul-array",
    title: "Arrays",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Read rows and columns of bottles as a multiplication.",
  },
  {
    id: "math-mul-algorithm",
    title: "Multi-digit Multiplication",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Multiply a farm total by a 1-digit or small 2-digit factor.",
  },
  {
    id: "math-mul-properties",
    title: "Properties of Multiplication",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Use ×0, ×1, and splitting a factor in dairy stories.",
  },
  {
    id: "math-div-measure",
    title: "How Many Groups",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Ask how many equal crates or packs fit into a total.",
  },
  {
    id: "math-div-remainder",
    title: "Remainders",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Name leftover bottles after equal packs and decide what they mean.",
  },
  {
    id: "math-div-long",
    title: "Longer Division",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Divide larger farm totals using multiplication checks.",
  },
  {
    id: "math-fac-factors",
    title: "Finding Factors",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "List numbers that divide a crate count with no leftover.",
  },
  {
    id: "math-fac-pairs",
    title: "Factor Pairs",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Write factor pairs that rebuild a dairy total.",
  },
  {
    id: "math-fac-multiples",
    title: "Naming Multiples",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Name a multiple as a landing number when packing equal groups.",
  },
  {
    id: "math-fac-common-multiples",
    title: "Common Multiples",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Find a shared packing size that fits two skip-count paths.",
  },
  {
    id: "math-fac-prime",
    title: "Prime & Composite",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Tell whether a small pack size has only trivial factor pairs.",
  },
  {
    id: "math-fac-divisibility",
    title: "Tests for 2, 5, and 10",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Use last-digit clues to test sharing by 2, 5, or 10.",
  },
  {
    id: "math-fac-div-three",
    title: "Tests for 3 and 9",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Use digit sums to test sharing by 3 or 9.",
  },
  {
    id: "math-fac-hcf",
    title: "Highest Common Factor",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Find the largest pack size that shares two totals fairly.",
  },
  {
    id: "math-fac-lcm",
    title: "Least Common Multiple",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
    objective: "Find the soonest shared landing for two packing schedules.",
  },
  {
    id: "math-geo-plane",
    title: "Shapes on a Plane",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
    objective: "Tell flat pattern shapes from solid objects around them.",
  },
  {
    id: "math-poly-names",
    title: "Naming Polygons",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
    objective: "Name a polygon by counting its sides.",
  },
  {
    id: "math-2d-properties",
    title: "Properties",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
    objective: "Use sides and square corners to describe a tiled shape.",
  },
  {
    id: "math-tri-sides",
    title: "By Sides",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
    objective: "Notice whether a triangle’s sides look equal or different.",
  },
  {
    id: "math-tri-angles",
    title: "By Angles",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
    objective: "Spot a right, acute, or open corner inside a triangle tile.",
  },
  {
    id: "math-quad-square-rect",
    title: "Squares & Rectangles",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
    objective: "Tell a square tile from a long rectangle and say why.",
  },
  {
    id: "math-quad-para-rhombus",
    title: "Parallelogram & Rhombus",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
    objective: "Spot opposite sides that stay parallel in a pattern tile.",
  },
  {
    id: "math-quad-trapezium",
    title: "Trapezium",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
    objective: "Notice a four-sided tile with exactly one pair of parallel sides.",
  },
  {
    id: "math-cir-parts",
    title: "Centre, Radius, Diameter",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
    objective: "Find the middle of a circle motif and a line through it.",
  },
  {
    id: "math-cir-compass",
    title: "Drawing Circles",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
    objective: "Describe keeping a fixed distance from a centre to draw a circle.",
  },
  {
    id: "math-pat-growing",
    title: "Growing Patterns",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
    objective: "Continue a growing shape or number pattern and name the jump.",
  },
  {
    id: "math-shp-growing",
    title: "Growing Shape Patterns",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
    objective: "Predict the next figure when a shape pattern grows by a rule.",
  },
  {
    id: "math-pat-input-output",
    title: "Input–Output Rules",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
    objective: "Name a machine rule that turns one pattern term into the next.",
  },
  {
    id: "math-mea-mass",
    title: "Mass",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-weight-and-capacity-core",
    objective: "Use grams and kilograms to weigh farm or kitchen amounts.",
  },
  {
    id: "math-mea-capacity",
    title: "Capacity",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-weight-and-capacity-core",
    objective: "Use millilitres and litres to compare how much containers hold.",
  },
  {
    id: "math-wp-two-step",
    title: "Two-Step Stories",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-coconut-farm-core",
    objective: "Plan two linked steps to finish a coconut-farm story.",
  },
  {
    id: "math-wp-units",
    title: "Units in Stories",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-coconut-farm-core",
    objective: "Keep track of what each number measures across farm steps.",
  },
  {
    id: "math-ps-strategies",
    title: "Strategies",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-coconut-farm-core",
    objective: "Choose a plan such as draw, estimate, or work backwards.",
  },
  {
    id: "math-ps-check",
    title: "Check the Answer",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-coconut-farm-core",
    objective: "Check a farm total with a second method or estimate.",
  },
  {
    id: "math-money-add",
    title: "Money Calculations",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-coconut-farm-core",
    objective: "Add coconut prices and find a sensible total to pay.",
  },
  {
    id: "math-money-bills",
    title: "Bills & Change",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-coconut-farm-core",
    objective: "Find change from a note after buying farm goods.",
  },
  {
    id: "math-dec-add",
    title: "Adding Decimals",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-coconut-farm-core",
    objective: "Add rupee-and-paise style amounts with places lined up.",
  },
  {
    id: "math-dec-money",
    title: "Decimals in Money",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-coconut-farm-core",
    objective: "Read money as rupees and hundredths of a rupee.",
  },
  {
    id: "math-pct-meaning",
    title: "What Percent Means",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-coconut-farm-core",
    objective: "See percent as parts of a hundred in a simple farm offer.",
  },
  {
    id: "math-sym-line",
    title: "Line Symmetry",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-symmetrical-designs-core",
    objective: "Find a fold line that matches two halves of a design.",
  },
  {
    id: "math-sym-reflection",
    title: "Reflection",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-symmetrical-designs-core",
    objective: "Complete the mirror half of a design across a fold line.",
  },
  {
    id: "math-area-rect",
    title: "Area of a Rectangle",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-grandmothers-quilt-core",
    objective: "See rows times columns as the covering squares on a quilt.",
  },
  {
    id: "math-area-composite",
    title: "Composite Area",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-grandmothers-quilt-core",
    objective: "Add or subtract quilt regions made of joined rectangles.",
  },
  {
    id: "math-vol-cubes",
    title: "Counting Cubes",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-grandmothers-quilt-core",
    objective: "Count unit cubes that fill a small block beside the quilt idea.",
  },
  {
    id: "math-3d-faces",
    title: "Faces, Edges, Vertices",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-grandmothers-quilt-core",
    objective: "Count faces, edges, and corners on a cuboid cushion or box.",
  },
  {
    id: "math-3d-prisms",
    title: "Prisms & Pyramids",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-grandmothers-quilt-core",
    objective: "Tell a prism-like box from a pyramid-like pointy solid.",
  },
  {
    id: "math-time-elapsed",
    title: "Elapsed Time",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-racing-seconds-core",
    objective: "Find how long a race lasts between two clock times.",
  },
  {
    id: "math-time-24h",
    title: "24-Hour Clock",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-racing-seconds-core",
    objective: "Read afternoon race times on a 24-hour clock.",
  },
  {
    id: "math-alg-unknown",
    title: "Unknowns",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-animal-jumps-core",
    objective: "Find a missing jump length or count from a pattern clue.",
  },
  {
    id: "math-rea-because",
    title: "Explain Why",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-animal-jumps-core",
    objective: "Give a because that uses a length or pattern idea.",
  },
  {
    id: "math-rea-counter",
    title: "Counter-examples",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-animal-jumps-core",
    objective: "Show a case that proves a jump claim is not always true.",
  },
  {
    id: "math-lin-parallel",
    title: "Parallel Lines",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-maps-and-locations-core",
    objective: "Spot map paths that stay the same distance and do not meet.",
  },
  {
    id: "math-lin-perpendicular",
    title: "Perpendicular Lines",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-maps-and-locations-core",
    objective: "Spot a square-corner crossing on a street map.",
  },
  {
    id: "math-lin-intersect",
    title: "Intersecting Lines",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-maps-and-locations-core",
    objective: "Find where two map routes cross and name the meeting.",
  },
  {
    id: "math-data-pictograph",
    title: "Pictographs",
    kind: "overlap",
    hostConceptId: "ncert-g5-maths-mela-data-through-pictures-core",
    objective: "Use a pictograph key to find how many in a category.",
  },
  {
    id: "math-data-bar",
    title: "Bar Graphs",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-data-through-pictures-core",
    objective: "Read bar heights to compare categories.",
  },
  {
    id: "math-tab-make",
    title: "Making Tables",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-data-through-pictures-core",
    objective: "Organise picture counts into a simple table.",
  },
  {
    id: "math-grp-bar",
    title: "Drawing Bar Graphs",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-data-through-pictures-core",
    objective: "Choose a scale and sketch bars for category counts.",
  },
  {
    id: "math-prob-language",
    title: "Certain, Likely, Impossible",
    kind: "taught",
    hostConceptId: "ncert-g5-maths-mela-data-through-pictures-core",
    objective: "Use chance words that fit what a picture of data suggests.",
  },
];

const coverageById = new Map(
  GRADE_5_MATH_SPINE_COVERAGE.map((row) => [row.id, row]),
);

export function getGrade5MathSpineCoverage(conceptId: string) {
  return coverageById.get(conceptId);
}

export function getGrade5MathHostConceptId(conceptId: string) {
  return coverageById.get(conceptId)?.hostConceptId;
}

export function skillsHostedByGrade5(hostConceptId: string): string[] {
  return GRADE_5_MATH_SPINE_COVERAGE.filter(
    (row) => row.hostConceptId === hostConceptId,
  ).map((row) => row.id);
}

export function grade5MathSpineCoverageAudit() {
  const taught = GRADE_5_MATH_SPINE_COVERAGE.filter((row) => row.kind === "taught");
  const overlap = GRADE_5_MATH_SPINE_COVERAGE.filter(
    (row) => row.kind === "overlap",
  );
  return {
    spineItems: GRADE_5_MATH_SPINE_COVERAGE.length,
    taughtCount: taught.length,
    overlapCount: overlap.length,
    taughtIds: taught.map((row) => row.id),
    overlapIds: overlap.map((row) => row.id),
    connectedIds: GRADE_5_MATH_SPINE_COVERAGE.map((row) => row.id),
  };
}
