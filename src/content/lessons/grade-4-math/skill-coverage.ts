import type { Grade4MathMelaConceptId } from "@/content/lessons/grade-4-math/format";

export const GRADE_4_MATH_SPINE_KINDS = ["taught", "overlap"] as const;
export type Grade4MathSpineKind = (typeof GRADE_4_MATH_SPINE_KINDS)[number];

export type Grade4MathLessonHostId =
  | Grade4MathMelaConceptId
  | "equivalent-fractions";

export type Grade4MathSpineCoverage = {
  id: string;
  title: string;
  kind: Grade4MathSpineKind;
  hostConceptId: Grade4MathLessonHostId;
  objective: string;
};

/**
 * Audit of every Grade 4-visible math skill-spine *concept* (the 70 catalogue
 * items that are not Maths Mela chapter-cores and not Equivalent Fractions).
 *
 * taught: a genuine G4 skill the child should practise; hosted by a chapter.
 * overlap: the same idea as the host chapter core; keep the catalogue node,
 * but do not treat it as a missing lesson.
 */
export const GRADE_4_MATH_SPINE_COVERAGE: Grade4MathSpineCoverage[] = [
  {
    id: "math-3d-names",
    title: "Cubes, Cuboids, Spheres",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-shapes-around-us-core",
    objective: "Name a cube, cuboid, and sphere from everyday objects.",
  },
  {
    id: "math-2d-sort",
    title: "Sorting 2D Shapes",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-shapes-around-us-core",
    objective: "Sort flat shapes by how many sides and corners they have.",
  },
  {
    id: "math-geo-plane",
    title: "Shapes on a Plane",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-shapes-around-us-core",
    objective: "Tell a flat 2D shape from a solid 3D object.",
  },
  {
    id: "math-3d-faces",
    title: "Faces, Edges, Vertices",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-shapes-around-us-core",
    objective: "Count faces, edges, and corners on a cube or cuboid.",
  },
  {
    id: "math-2d-properties",
    title: "Properties",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-shapes-around-us-core",
    objective: "Use sides and square corners to name a square or rectangle.",
  },
  {
    id: "math-geo-point-line",
    title: "Points & Lines",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-shapes-around-us-core",
    objective: "Point to a point, a line segment, and a corner on a drawing.",
  },
  {
    id: "math-quad-square-rect",
    title: "Squares & Rectangles",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-shapes-around-us-core",
    objective: "Tell a square from a long rectangle and say why.",
  },
  {
    id: "math-tri-sides",
    title: "By Sides",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-shapes-around-us-core",
    objective: "Notice whether a triangle’s sides look equal or different.",
  },
  {
    id: "math-ang-meaning",
    title: "What an Angle Is",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-shapes-around-us-core",
    objective: "Spot a corner as a turn where two sides meet.",
  },
  {
    id: "math-ang-types",
    title: "Right, Acute, Obtuse",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-shapes-around-us-core",
    objective: "Find a square corner and a corner that is smaller or more open.",
  },
  {
    id: "math-lin-parallel",
    title: "Parallel Lines",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-shapes-around-us-core",
    objective: "Spot opposite edges that stay the same distance and do not meet.",
  },
  {
    id: "math-lin-perpendicular",
    title: "Perpendicular Lines",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-shapes-around-us-core",
    objective: "Spot a plus-sign meeting — a square corner where two lines meet.",
  },
  {
    id: "math-cir-parts",
    title: "Centre, Radius, Diameter",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-shapes-around-us-core",
    objective: "Find the middle of a circle and a line through the middle.",
  },
  {
    id: "math-shp-pat",
    title: "Shape Patterns",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-patterns-around-us-core",
    objective: "Name the repeating unit in a shape pattern and continue it.",
  },
  {
    id: "math-pat-skip",
    title: "Skip Counting Patterns",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-patterns-around-us-core",
    objective: "Continue a skip-counting sequence and say the jump.",
  },
  {
    id: "math-pat-growing",
    title: "Growing Patterns",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-patterns-around-us-core",
    objective: "Tell a growing pattern from a repeating one and predict the next term.",
  },
  {
    id: "math-fac-multiples",
    title: "Naming Multiples",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-patterns-around-us-core",
    objective: "Name a multiple as a number you land on when you skip-count.",
  },
  {
    id: "math-fac-common-multiples",
    title: "Common Multiples",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-patterns-around-us-core",
    objective: "Find a number that sits on two skip-count paths, such as 2s and 5s.",
  },
  {
    id: "math-pv-thousands",
    title: "Thousands",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-thousands-around-us-core",
    objective: "Read a 4-digit number and say what the thousands digit is worth.",
  },
  {
    id: "math-ns-read-write",
    title: "Reading & Writing Numbers",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-thousands-around-us-core",
    objective: "Read and write numbers into the thousands in digits and words.",
  },
  {
    id: "math-co-symbols",
    title: "Greater & Less",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-thousands-around-us-core",
    objective: "Compare two whole numbers from the largest place.",
  },
  {
    id: "math-ns-compare-sense",
    title: "Number Magnitude",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-thousands-around-us-core",
    objective: "Judge whether a number is close to a thousand or far from it.",
  },
  {
    id: "math-ns-count",
    title: "Counting & Quantity",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-thousands-around-us-core",
    objective: "Say how many, and know the last number counted is the quantity.",
  },
  {
    id: "math-ns-compose",
    title: "Composing Numbers",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-thousands-around-us-core",
    objective: "Build a number from thousands, hundreds, tens, and ones.",
  },
  {
    id: "math-pv-ones-tens",
    title: "Ones & Tens",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-thousands-around-us-core",
    objective: "Explain why a digit in tens is worth ten times the same digit in ones.",
  },
  {
    id: "math-pv-hundreds",
    title: "Hundreds",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-thousands-around-us-core",
    objective: "Use hundreds, tens, and ones, including ten tens make one hundred.",
  },
  {
    id: "math-pv-expanded",
    title: "Expanded Form",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-thousands-around-us-core",
    objective: "Stretch a number to show the value of each digit.",
  },
  {
    id: "math-co-between",
    title: "Between & Around",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-thousands-around-us-core",
    objective: "Name whole numbers that sit between two given numbers.",
  },
  {
    id: "math-est-round-ten",
    title: "Rounding to Ten",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-thousands-around-us-core",
    objective: "Round a number to the nearest ten by looking at the ones.",
  },
  {
    id: "math-est-round-hundred",
    title: "Rounding to Hundred",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-thousands-around-us-core",
    objective: "Round a number to the nearest hundred by looking at the tens.",
  },
  {
    id: "math-div-share",
    title: "Sharing Equally",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-sharing-and-measuring-core",
    objective: "Share a collection into equal groups and write the division.",
  },
  {
    id: "math-ns-even-odd",
    title: "Even & Odd",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-sharing-and-measuring-core",
    objective: "Tell even from odd by pairing, and name a leftover one.",
  },
  {
    id: "math-div-remainder",
    title: "Remainders",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-sharing-and-measuring-core",
    objective: "Name what is left after equal whole-number shares.",
  },
  {
    id: "math-frac-meaning",
    title: "Understanding Fractions",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-sharing-and-measuring-core",
    objective: "Explain a fraction as equal parts of a whole or a collection.",
  },
  {
    id: "math-frac-identify",
    title: "Identifying Fractions",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-sharing-and-measuring-core",
    objective: "Name halves, quarters, and three-quarters of a fair whole.",
  },
  {
    id: "math-frac-add-like",
    title: "Adding & Subtracting Like Fractions",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-sharing-and-measuring-core",
    objective: "Join equal-size pieces: 1/4 + 1/4 = 1/2 of the same whole.",
  },
  {
    id: "math-dec-tenths",
    title: "Tenths",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-sharing-and-measuring-core",
    objective: "See one of ten equal parts as a tenth of the same whole.",
  },
  {
    id: "math-mea-length",
    title: "Length",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-measuring-length-core",
    objective: "Measure and compare length in centimetres and metres.",
  },
  {
    id: "math-mea-tools",
    title: "Choosing Tools",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-measuring-length-core",
    objective: "Choose a ruler or metre and a unit that fits the object.",
  },
  {
    id: "math-per-meaning",
    title: "What Perimeter Is",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-measuring-length-core",
    objective: "See perimeter as the distance around an edge.",
  },
  {
    id: "math-per-rect",
    title: "Perimeter of Rectangles",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-measuring-length-core",
    objective: "Find the distance around a rectangle by adding all four sides.",
  },
  {
    id: "math-add-meaning",
    title: "What Addition Means",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-the-cleanest-village-core",
    objective: "Use addition to join amounts in a story.",
  },
  {
    id: "math-add-facts",
    title: "Addition Facts",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-the-cleanest-village-core",
    objective: "Use make-10 and facts within 20 to add more quickly.",
  },
  {
    id: "math-add-regroup",
    title: "Regrouping in Addition",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-the-cleanest-village-core",
    objective: "Regroup 10 ones as 1 ten when adding.",
  },
  {
    id: "math-sub-meaning",
    title: "What Subtraction Means",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-the-cleanest-village-core",
    objective: "Use subtraction to take away or to ask how many more.",
  },
  {
    id: "math-sub-facts",
    title: "Subtraction Facts",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-the-cleanest-village-core",
    objective: "Use an addition family to subtract within 20.",
  },
  {
    id: "math-sub-regroup",
    title: "Regrouping in Subtraction",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-the-cleanest-village-core",
    objective: "Ungroup a ten into 10 ones when subtracting.",
  },
  {
    id: "math-rea-because",
    title: "Explain Why",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-the-cleanest-village-core",
    objective: "Give a because that uses a number idea, not only a guess.",
  },
  {
    id: "math-mea-mass",
    title: "Mass",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-weigh-it-pour-it-core",
    objective: "Compare mass and choose grams or kilograms.",
  },
  {
    id: "math-mea-capacity",
    title: "Capacity",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-weigh-it-pour-it-core",
    objective: "Compare how much a container holds using millilitres or litres.",
  },
  {
    id: "math-mul-groups",
    title: "Equal Groups",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-equal-groups-core",
    objective: "See multiplication as equal groups.",
  },
  {
    id: "math-mul-tables",
    title: "Multiplication Tables",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-equal-groups-core",
    objective: "Use known 2, 5, and 10 facts, then build other small facts.",
  },
  {
    id: "math-mul-array",
    title: "Arrays",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-equal-groups-core",
    objective: "Read rows and columns as a multiplication.",
  },
  {
    id: "math-div-measure",
    title: "How Many Groups",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-equal-groups-core",
    objective: "Ask how many equal groups fit into a total.",
  },
  {
    id: "math-area-squares",
    title: "Counting Squares",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-equal-groups-core",
    objective: "Count unit squares that cover a rectangle.",
  },
  {
    id: "math-area-rect",
    title: "Area of a Rectangle",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-equal-groups-core",
    objective: "See why rows times columns totals the covering squares.",
  },
  {
    id: "math-co-order",
    title: "Ordering Numbers",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-elephants-tigers-leopards-core",
    objective: "Line up three counts from smallest to largest.",
  },
  {
    id: "math-sym-line",
    title: "Line Symmetry",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-fun-with-symmetry-core",
    objective: "Find a fold line that matches two halves.",
  },
  {
    id: "math-time-clock",
    title: "Reading a Clock",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-ticking-clocks-core",
    objective: "Read o’clock and half past from the two hands.",
  },
  {
    id: "math-time-calendar",
    title: "Calendar",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-ticking-clocks-core",
    objective: "Use days, weeks, and months on a calendar.",
  },
  {
    id: "math-time-elapsed",
    title: "Elapsed Time",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-ticking-clocks-core",
    objective: "Find how long something lasts between two clock times.",
  },
  {
    id: "math-wp-choose",
    title: "Choosing an Operation",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-the-transport-museum-core",
    objective: "Choose add, subtract, multiply, or divide from a story.",
  },
  {
    id: "math-money-count",
    title: "Counting Money",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-the-transport-museum-core",
    objective: "Make an amount with rupees and know 100 paise make ₹1.",
  },
  {
    id: "math-money-add",
    title: "Money Calculations",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-the-transport-museum-core",
    objective: "Add prices and find change from a note.",
  },
  {
    id: "math-ps-understand",
    title: "Understand the Problem",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-the-transport-museum-core",
    objective: "Restate what is asked and what numbers actually matter.",
  },
  {
    id: "math-data-collect",
    title: "Collecting Data",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-data-handling-core",
    objective: "Collect votes with a tally of fives.",
  },
  {
    id: "math-tab-read",
    title: "Reading Tables",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-data-handling-core",
    objective: "Read a cell where a row and a column meet.",
  },
  {
    id: "math-data-pictograph",
    title: "Pictographs",
    kind: "overlap",
    hostConceptId: "ncert-g4-maths-mela-data-handling-core",
    objective: "Use a pictograph key to find how many.",
  },
  {
    id: "math-tab-make",
    title: "Making Tables",
    kind: "taught",
    hostConceptId: "ncert-g4-maths-mela-data-handling-core",
    objective: "Organise categories and counts into a simple table.",
  },
  {
    id: "math-frac-compare",
    title: "Comparing Simple Fractions",
    kind: "taught",
    hostConceptId: "equivalent-fractions",
    objective: "Compare unit fractions of the same whole, such as 1/2 and 1/3.",
  },
];

const coverageById = new Map(
  GRADE_4_MATH_SPINE_COVERAGE.map((row) => [row.id, row]),
);

export function getGrade4MathSpineCoverage(conceptId: string) {
  return coverageById.get(conceptId);
}

export function getGrade4MathHostConceptId(conceptId: string) {
  return coverageById.get(conceptId)?.hostConceptId;
}

export function skillsHostedBy(hostConceptId: string): string[] {
  return GRADE_4_MATH_SPINE_COVERAGE.filter(
    (row) => row.hostConceptId === hostConceptId,
  ).map((row) => row.id);
}

export function grade4MathSpineCoverageAudit() {
  const taught = GRADE_4_MATH_SPINE_COVERAGE.filter((row) => row.kind === "taught");
  const overlap = GRADE_4_MATH_SPINE_COVERAGE.filter(
    (row) => row.kind === "overlap",
  );
  return {
    spineItems: GRADE_4_MATH_SPINE_COVERAGE.length,
    taughtCount: taught.length,
    overlapCount: overlap.length,
    taughtIds: taught.map((row) => row.id),
    overlapIds: overlap.map((row) => row.id),
    connectedIds: GRADE_4_MATH_SPINE_COVERAGE.map((row) => row.id),
  };
}
