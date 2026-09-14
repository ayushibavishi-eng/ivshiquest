import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade8MathLesson } from "@/content/lessons/grade-8-math/format";

export const aSquareAndACubeLesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-a-square-and-a-cube-core",
  title: "A Square and a Cube",
  domainTitle: "Number",
  prerequisites: [],
  nextConceptIds: ["ncert-g8-ganita-prakash-power-play-core"],
  content: {
    objective: "Recognise square and cube numbers and connect them to powers and square-root thinking.",
    wonder: {
      prompt: "A square courtyard tiles perfectly with 64 unit squares — why is 64 a square number, and what would a cube number look like in a stack of layers?",
    },
    explore: {
      text: "Square numbers come from n×n; cube numbers from n×n×n. Patterns in endings and growth help you recognise them. Square roots undo squaring when the result is a perfect square.",
      activity: {
        prompt: "Which number is a perfect square?",
        choices: [
          {
            id: "thirtysix",
            label: "36, because 6 × 6 = 36",
            note: "A whole-number side length makes a perfect square.",
          },
          {
            id: "twelve",
            label: "12, because it is even",
            note: "Evenness alone does not make a square number.",
          },
          {
            id: "any",
            label: "Any number you like is a square number",
            note: "Only special products n×n qualify.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A square number is the product of a whole number with itself: 1, 4, 9, 16, 25…",
        "A cube number is a whole number multiplied by itself twice more: 1, 8, 27, 64…",
        "Powers write these compactly: 6² = 36 and 4³ = 64.",
        "The square root of a perfect square returns the side length: √36 = 6.",
        "Recognising patterns — odd gaps between squares, growing cubes — builds number sense beyond memorising lists.",
      ],
    },
    examples: [
      {
        caption: "Square",
        body: "9 = 3²; a 3-by-3 grid of unit squares.",
      },
      {
        caption: "Cube",
        body: "27 = 3³; a 3-by-3-by-3 cube of unit cubes.",
      },
      {
        caption: "Root",
        body: "√49 = 7 because 7² = 49.",
      },
    ],
    connection: "Floor tiles, packing boxes, and digital pixels all whisper square and cube structure.",
    try: {
      prompt: "Name one square number and one cube number between 20 and 100. Explain each.",
      reveal: "Example: 49 = 7²; 64 = 4³ (also 8², which is square). Reasons name the factors.",
    },
    practice: [
      q(
        "g8m-sc-p1",
        "Which statement best matches squares and cubes?",
        "Square numbers are n² and cube numbers are n³; roots undo perfect squares",
        "Every even number is automatically a perfect square",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Square numbers are n² and cube numbers are n³; roots undo perfect squares",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-sc-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "36 = 6² is a perfect square; √36 = 6",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “36 = 6² is a perfect square; √36 = 6” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-sc-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-sc-r1",
        "In your own words, explain why this matters: Square numbers are n² and cube numbers are n³; roots undo perfect squares",
        "It matters because Square numbers are n² and cube numbers are n³; roots undo perfect squares. A supporting detail is: 36 = 6² is a perfect square; √36 = 6.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-sc-r2",
        "A classmate claims: “Every even number is automatically a perfect square.” What is the better reply?",
        "Point to evidence: 36 = 6² is a perfect square; √36 = 6",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-sc-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Square numbers are n² and cube numbers are n³; roots undo perfect squares",
        "Every even number is automatically a perfect square",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Square numbers are n² and cube numbers are n³; roots undo perfect squares",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-sc-t2",
        "Write one or two sentences that explain what makes a number a perfect square.",
        ["Square numbers are", "36 = 6²", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-sc-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Square numbers are n² and cube numbers are n³; roots undo perfect squares. One proof is 36 = 6² is a perfect square; √36 = 6.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "8 is a square number because it is even.",
        correction: "8 is 2³, a cube, not a square of a whole number.",
      },
      {
        idea: "Square roots only exist for perfect squares in all of mathematics.",
        correction: "In this chapter, focus on perfect squares; later you meet other roots carefully.",
      },
    ],
    reflect: {
      prompt: "Where do you see square or cube packing in daily life?",
      keyIdeas: ["square", "cube", "power"],
    },
    teach: {
      prompt: "Teach square vs cube with one grid and one stack example.",
      keyIdeas: ["n²", "n³", "example"],
    },
    masteryCriteria: "You can recognise square and cube numbers and connect them to powers and roots.",
  },
});

export const powerPlayLesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-power-play-core",
  title: "Power Play",
  domainTitle: "Number",
  prerequisites: ["ncert-g8-ganita-prakash-a-square-and-a-cube-core"],
  nextConceptIds: ["ncert-g8-ganita-prakash-a-story-of-numbers-core"],
  content: {
    objective: "Read powers clearly and multiply same-base powers using exponent laws, including powers of ten.",
    wonder: {
      prompt: "Why is 2⁵ × 2³ equal to 2⁸, not 2¹⁵ — and how does that law tame huge place-value numbers?",
    },
    explore: {
      text: "A power aⁿ is a multiplied n times. Same-base multiplication adds exponents. Powers of ten rename large and small numbers with compact exponents.",
      activity: {
        prompt: "What is 5² × 5⁴?",
        choices: [
          {
            id: "six",
            label: "5⁶, because exponents add when bases match",
            note: "aᵐ × aⁿ = aᵐ⁺ⁿ.",
          },
          {
            id: "eight",
            label: "5⁸, because you multiply the exponents",
            note: "Multiplying exponents is a different law (power of a power).",
          },
          {
            id: "twenty",
            label: "25 × 54 with no exponent sense",
            note: "Keep the shared base and add exponents.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Reading a power means naming the base and the exponent: 10³ is ten to the power three.",
        "When bases match, multiply powers by adding exponents: aᵐ × aⁿ = aᵐ⁺ⁿ.",
        "Dividing same-base powers subtracts exponents when the result stays a power.",
        "Powers of ten write large numbers compactly: 3 × 10⁴ = 30,000.",
        "Laws are not magic slogans — they count how many factors of the base you have.",
      ],
    },
    examples: [
      {
        caption: "Multiply",
        body: "3² × 3⁵ = 3⁷.",
      },
      {
        caption: "Read",
        body: "2⁶ means six factors of 2.",
      },
      {
        caption: "Ten",
        body: "7 × 10³ = 7000.",
      },
    ],
    connection: "Scientific news, computer storage sizes, and astronomy distances lean on powers of ten.",
    try: {
      prompt: "Simplify 2³ × 2⁴ and write 50,000 using a power of ten.",
      reveal: "2⁷. 5 × 10⁴.",
    },
    practice: [
      q(
        "g8m-pp-p1",
        "Which statement best matches power play?",
        "Read powers by base and exponent; multiply same-base powers by adding exponents",
        "Always multiply the exponents when multiplying powers",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Read powers by base and exponent; multiply same-base powers by adding exponents",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-pp-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "5² × 5⁴ = 5⁶ because 2 + 4 = 6",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “5² × 5⁴ = 5⁶ because 2 + 4 = 6” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-pp-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-pp-r1",
        "In your own words, explain why this matters: Read powers by base and exponent; multiply same-base powers by adding exponents",
        "It matters because Read powers by base and exponent; multiply same-base powers by adding exponents. A supporting detail is: 5² × 5⁴ = 5⁶ because 2 + 4 = 6.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-pp-r2",
        "A classmate claims: “Always multiply the exponents when multiplying powers.” What is the better reply?",
        "Point to evidence: 5² × 5⁴ = 5⁶ because 2 + 4 = 6",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-pp-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Read powers by base and exponent; multiply same-base powers by adding exponents",
        "Always multiply the exponents when multiplying powers",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Read powers by base and exponent; multiply same-base powers by adding exponents",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-pp-t2",
        "Write one or two sentences that explain why same-base powers add exponents when multiplied.",
        ["Read powers by", "5² × 5⁴", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-pp-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Read powers by base and exponent; multiply same-base powers by adding exponents. One proof is 5² × 5⁴ = 5⁶ because 2 + 4 = 6.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "aᵐ × aⁿ = aᵐⁿ always.",
        correction: "Multiply powers with the same base by adding exponents.",
      },
      {
        idea: "Powers of ten are only for tiny decimals.",
        correction: "They also write large numbers compactly.",
      },
    ],
    reflect: {
      prompt: "Where have you seen a number written with ×10ⁿ?",
      keyIdeas: ["exponent", "same base", "powers of ten"],
    },
    teach: {
      prompt: "Teach aᵐ × aⁿ = aᵐ⁺ⁿ with one numerical example.",
      keyIdeas: ["add exponents", "same base", "example"],
    },
    masteryCriteria: "You can read powers and multiply same-base powers using exponent laws.",
  },
});

export const aStoryOfNumbersLesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-a-story-of-numbers-core",
  title: "A Story of Numbers",
  domainTitle: "Number",
  prerequisites: ["ncert-g8-ganita-prakash-power-play-core"],
  nextConceptIds: ["ncert-g8-ganita-prakash-quadrilaterals-core"],
  content: {
    objective: "Explain place value in number systems and compare number ideas, including rational-number meaning.",
    wonder: {
      prompt: "Why does the digit 2 mean two hundred in 245 but two tenths in 0.2 — and what story of place value makes both true?",
    },
    explore: {
      text: "Number systems grew with place value: a digit’s value depends on its place. Rational numbers can be written as fractions of integers. Comparing ideas means seeing how different writings name related quantities.",
      activity: {
        prompt: "What gives the digit 5 different values in 50 and 0.5?",
        choices: [
          {
            id: "place",
            label: "Place value: tens versus tenths",
            note: "Same digit, different places, different values.",
          },
          {
            id: "luck",
            label: "Random luck with no system",
            note: "Place value is a designed system.",
          },
          {
            id: "size",
            label: "Only the ink size of the digit",
            note: "Value comes from place, not handwriting size.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Place value assigns value by position — ones, tens, tenths, and beyond.",
        "Historical number stories show why grouping by tens (or other bases) made counting scalable.",
        "A rational number can be expressed as a ratio of integers (denominator not zero).",
        "Operations with rationals respect place value and equivalent forms.",
        "Comparing number ideas means translating between names: 0.5, 1/2, and 50% can tell one story.",
      ],
    },
    examples: [
      {
        caption: "Place",
        body: "In 308, the 3 means 3 hundreds.",
      },
      {
        caption: "Rational",
        body: "3/4 and 0.75 name the same rational.",
      },
      {
        caption: "Compare",
        body: "0.2 is two tenths; 2 is two ones.",
      },
    ],
    connection: "Money, measurement, and digital displays all depend on place-value agreements.",
    try: {
      prompt: "Explain the place of 7 in 70 and in 0.07. Name one rational in two forms.",
      reveal: "70: tens. 0.07: hundredths. Example: 1/5 = 0.2.",
    },
    practice: [
      q(
        "g8m-sn-p1",
        "Which statement best matches the story of numbers?",
        "Place value gives digits meaning; rationals can be written as integer ratios",
        "A digit always has the same value wherever it sits",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Place value gives digits meaning; rationals can be written as integer ratios",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-sn-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "In 245 the 2 means two hundreds; in 0.2 it means two tenths",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “In 245 the 2 means two hundreds; in 0.2 it means two tenths” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-sn-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-sn-r1",
        "In your own words, explain why this matters: Place value gives digits meaning; rationals can be written as integer ratios",
        "It matters because Place value gives digits meaning; rationals can be written as integer ratios. A supporting detail is: In 245 the 2 means two hundreds; in 0.2 it means two tenths.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-sn-r2",
        "A classmate claims: “A digit always has the same value wherever it sits.” What is the better reply?",
        "Point to evidence: In 245 the 2 means two hundreds; in 0.2 it means two tenths",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-sn-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Place value gives digits meaning; rationals can be written as integer ratios",
        "A digit always has the same value wherever it sits",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Place value gives digits meaning; rationals can be written as integer ratios",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-sn-t2",
        "Write one or two sentences that explain place value with one digit in two places.",
        ["Place value gives", "In 245 the", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-sn-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Place value gives digits meaning; rationals can be written as integer ratios. One proof is In 245 the 2 means two hundreds; in 0.2 it means two tenths.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Longer decimals are always larger.",
        correction: "Compare place by place from the left of the fractional part.",
      },
      {
        idea: "Rationals are only fractions less than 1.",
        correction: "Any integer ratio (nonzero denominator) can be rational.",
      },
    ],
    reflect: {
      prompt: "When has place value helped you avoid a money or measure mix-up?",
      keyIdeas: ["place value", "rational", "compare"],
    },
    teach: {
      prompt: "Teach place value with 5 in 50 vs 0.5.",
      keyIdeas: ["place", "value", "rational"],
    },
    masteryCriteria: "You can explain place value and talk about rational number ideas clearly.",
  },
});

export const quadrilateralsLesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-quadrilaterals-core",
  title: "Quadrilaterals",
  domainTitle: "Geometry",
  prerequisites: ["ncert-g8-ganita-prakash-a-story-of-numbers-core"],
  nextConceptIds: ["ncert-g8-ganita-prakash-number-play-core"],
  content: {
    objective: "Name common quadrilaterals and use a property of sides or angles to reason.",
    wonder: {
      prompt: "A kite, a rectangle, and a parallelogram all have four sides — what property family separates them?",
    },
    explore: {
      text: "Quadrilaterals are four-sided polygons. Names (square, rectangle, parallelogram, rhombus, trapezium/kite) come with property packages: parallel sides, equal sides, right angles.",
      activity: {
        prompt: "Which property best fits a rectangle that is not a square?",
        choices: [
          {
            id: "right",
            label: "Four right angles, with opposite sides equal and parallel",
            note: "Rectangle properties without forcing all sides equal.",
          },
          {
            id: "all-equal",
            label: "All four sides must be equal",
            note: "That pushes toward square/rhombus territory.",
          },
          {
            id: "none",
            label: "No special properties at all",
            note: "Named quadrilaterals carry properties.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A quadrilateral has four sides and four angles.",
        "Special names signal properties: parallel pairs, equal sides, right angles.",
        "A parallelogram has opposite sides parallel (and typically opposite sides equal).",
        "Rectangles add right angles; squares add equal sides to the rectangle package.",
        "Using a property means applying it to find an unknown side or angle with reason.",
      ],
    },
    examples: [
      {
        caption: "Name",
        body: "A four-sided figure with opposite sides parallel is a parallelogram.",
      },
      {
        caption: "Property",
        body: "In a rectangle, each corner is 90°.",
      },
      {
        caption: "Reason",
        body: "If one angle of a parallelogram is 70°, the adjacent angle is 110° (consecutive angles supplementary in many school treatments).",
      },
    ],
    connection: "Windows, notebooks, fields, and tiles are full of quadrilateral properties.",
    try: {
      prompt: "Name two quadrilaterals and one property for each.",
      reveal: "Rectangle: four right angles. Rhombus: all sides equal.",
    },
    practice: [
      q(
        "g8m-qd-p1",
        "Which statement best matches quadrilaterals?",
        "Name a quadrilateral and use a side or angle property to reason",
        "All quadrilaterals have identical properties",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Name a quadrilateral and use a side or angle property to reason",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-qd-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "A rectangle has four right angles; a square also has equal sides",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “A rectangle has four right angles; a square also has equal sides” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-qd-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-qd-r1",
        "In your own words, explain why this matters: Name a quadrilateral and use a side or angle property to reason",
        "It matters because Name a quadrilateral and use a side or angle property to reason. A supporting detail is: A rectangle has four right angles; a square also has equal sides.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-qd-r2",
        "A classmate claims: “All quadrilaterals have identical properties.” What is the better reply?",
        "Point to evidence: A rectangle has four right angles; a square also has equal sides",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-qd-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Name a quadrilateral and use a side or angle property to reason",
        "All quadrilaterals have identical properties",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Name a quadrilateral and use a side or angle property to reason",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-qd-t2",
        "Write one or two sentences that name a quadrilateral and state one property.",
        ["Name a quadrilateral", "A rectangle has", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-qd-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Name a quadrilateral and use a side or angle property to reason. One proof is A rectangle has four right angles; a square also has equal sides.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Every parallelogram is a rectangle.",
        correction: "Rectangles need right angles; parallelograms need parallel opposites.",
      },
      {
        idea: "Quadrilateral only means square.",
        correction: "Many four-sided families exist.",
      },
    ],
    reflect: {
      prompt: "Which quadrilateral do you sit on or write on most days?",
      keyIdeas: ["quadrilateral", "property", "name"],
    },
    teach: {
      prompt: "Teach parallelogram vs rectangle with one property each.",
      keyIdeas: ["name", "property", "contrast"],
    },
    masteryCriteria: "You can name quadrilaterals and use a property with reason.",
  },
});

export const numberPlayLesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-number-play-core",
  title: "Number Play",
  domainTitle: "Number",
  prerequisites: ["ncert-g8-ganita-prakash-quadrilaterals-core"],
  nextConceptIds: ["ncert-g8-ganita-prakash-we-distribute-yet-things-multiply-core"],
  content: {
    objective: "Use a number property in a puzzle and justify steps; express a simple probability as a fraction.",
    wonder: {
      prompt: "A spinner has 4 equal sectors, one marked win — why is the probability 1/4, and how is that like justifying a number puzzle step?",
    },
    explore: {
      text: "Number play at Grade 8 depth asks for properties with reasons. Probability as a fraction counts favourable over equally likely outcomes. Justification turns a lucky answer into mathematics.",
      activity: {
        prompt: "A fair coin is flipped. What is P(heads) as a fraction?",
        choices: [
          {
            id: "half",
            label: "1/2, one favourable out of two equally likely faces",
            note: "Probability as a fraction of equally likely outcomes.",
          },
          {
            id: "two",
            label: "2, because heads feels lucky",
            note: "Probability is not a feeling score.",
          },
          {
            id: "zero",
            label: "0, because tomorrow is uncertain",
            note: "Uncertainty still has a model fraction here.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Number properties (parity, divisibility, digital patterns) power puzzles.",
        "Explaining a puzzle means stating the property and why it forces the result.",
        "Justifying a step beats “it looks right.”",
        "Probability as a fraction: favourable outcomes ÷ equally likely outcomes.",
        "Fair models assume equally likely cases unless told otherwise.",
      ],
    },
    examples: [
      {
        caption: "Property",
        body: "Even + odd = odd — justify by 2k + (2m+1).",
      },
      {
        caption: "Probability",
        body: "P(rolling a 5 on a fair die) = 1/6.",
      },
      {
        caption: "Justify",
        body: "Say the rule, then the arithmetic.",
      },
    ],
    connection: "Board games, raffles, and divisibility tricks all mix property and probability talk.",
    try: {
      prompt: "Justify why odd+odd is even. Then write P(even) on a fair die as a fraction.",
      reveal: "Two odds are each even-plus-one; extras make an even. P(even)=3/6=1/2.",
    },
    practice: [
      q(
        "g8m-np-p1",
        "Which statement best matches number play?",
        "Use number properties with justification; write simple probabilities as fractions",
        "Probability is just a guessy feeling with no fraction",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Use number properties with justification; write simple probabilities as fractions",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-np-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "On a fair die, P(6) = 1/6",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “On a fair die, P(6) = 1/6” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-np-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-np-r1",
        "In your own words, explain why this matters: Use number properties with justification; write simple probabilities as fractions",
        "It matters because Use number properties with justification; write simple probabilities as fractions. A supporting detail is: On a fair die, P(6) = 1/6.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-np-r2",
        "A classmate claims: “Probability is just a guessy feeling with no fraction.” What is the better reply?",
        "Point to evidence: On a fair die, P(6) = 1/6",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-np-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Use number properties with justification; write simple probabilities as fractions",
        "Probability is just a guessy feeling with no fraction",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Use number properties with justification; write simple probabilities as fractions",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-np-t2",
        "Write one or two sentences that justify a number property and write one probability fraction.",
        ["Use number properties", "On a fair", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-np-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Use number properties with justification; write simple probabilities as fractions. One proof is On a fair die, P(6) = 1/6.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "A single example proves a property for all numbers.",
        correction: "Examples support; a general reason justifies.",
      },
      {
        idea: "Probability fractions can ignore equally likely assumptions.",
        correction: "State the fair model you are using.",
      },
    ],
    reflect: {
      prompt: "Which number puzzle have you solved by naming a property?",
      keyIdeas: ["property", "justify", "probability"],
    },
    teach: {
      prompt: "Teach probability as a fraction with a spinner or die.",
      keyIdeas: ["favourable", "total", "justify"],
    },
    masteryCriteria: "You can justify a number property and write a simple probability fraction.",
  },
});

export const weDistributeYetThingsMultiplyLesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-we-distribute-yet-things-multiply-core",
  title: "We Distribute, Yet Things Multiply",
  domainTitle: "Algebra",
  prerequisites: ["ncert-g8-ganita-prakash-number-play-core"],
  nextConceptIds: ["ncert-g8-ganita-prakash-proportional-reasoning-1-core"],
  content: {
    objective: "Expand with the distributive property and factor simple expressions; handle brackets in equations.",
    wonder: {
      prompt: "Why does 3(x + 4) become 3x + 12 — and how does distribution both expand and help factor later?",
    },
    explore: {
      text: "Distribution multiplies a factor across a sum: a(b+c)=ab+ac. Factoring reverses that. Brackets in equations often need distribution before isolating the unknown.",
      activity: {
        prompt: "Expand 4(x + 5).",
        choices: [
          {
            id: "fourx",
            label: "4x + 20",
            note: "4 hits both x and 5.",
          },
          {
            id: "fourx5",
            label: "4x + 5",
            note: "The 5 must be multiplied too.",
          },
          {
            id: "nine",
            label: "9x",
            note: "You cannot add x and 5 inside before distributing unless they are like terms.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The distributive property links multiplication and addition.",
        "Expanding removes brackets by multiplying through.",
        "Factoring pulls out a common factor to rebuild brackets.",
        "Simplifying combines like terms after distribution.",
        "Equations with brackets: distribute, then undo operations on both sides.",
      ],
    },
    examples: [
      {
        caption: "Expand",
        body: "2(3x − 1) = 6x − 2.",
      },
      {
        caption: "Factor",
        body: "6x + 9 = 3(2x + 3).",
      },
      {
        caption: "Equation",
        body: "2(x + 3) = 10 → 2x + 6 = 10 → 2x = 4 → x = 2.",
      },
    ],
    connection: "Pricing (cost per item times a sum of items) and area models both show distribution.",
    try: {
      prompt: "Expand 5(2y − 3). Factor 4a + 12. Solve 3(x − 1) = 12.",
      reveal: "10y − 15. 4(a + 3). x − 1 = 4 → x = 5.",
    },
    practice: [
      q(
        "g8m-wd-p1",
        "Which statement best matches distribution?",
        "Distribute to expand; factor to reverse; use distribution to clear brackets in equations",
        "Only multiply the first term inside brackets and ignore the rest",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Distribute to expand; factor to reverse; use distribution to clear brackets in equations",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-wd-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "4(x + 5) = 4x + 20",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “4(x + 5) = 4x + 20” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-wd-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-wd-r1",
        "In your own words, explain why this matters: Distribute to expand; factor to reverse; use distribution to clear brackets in equations",
        "It matters because Distribute to expand; factor to reverse; use distribution to clear brackets in equations. A supporting detail is: 4(x + 5) = 4x + 20.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-wd-r2",
        "A classmate claims: “Only multiply the first term inside brackets and ignore the rest.” What is the better reply?",
        "Point to evidence: 4(x + 5) = 4x + 20",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-wd-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Distribute to expand; factor to reverse; use distribution to clear brackets in equations",
        "Only multiply the first term inside brackets and ignore the rest",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Distribute to expand; factor to reverse; use distribution to clear brackets in equations",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-wd-t2",
        "Write one or two sentences that expand one expression and factor another.",
        ["Distribute to expand;", "4(x + 5)", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-wd-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Distribute to expand; factor to reverse; use distribution to clear brackets in equations. One proof is 4(x + 5) = 4x + 20.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "a(b+c)=ab+c.",
        correction: "a multiplies every term in the bracket.",
      },
      {
        idea: "Factoring invents any numbers you like.",
        correction: "Pull a true common factor.",
      },
    ],
    reflect: {
      prompt: "Where do you already distribute without calling it algebra?",
      keyIdeas: ["distribute", "factor", "brackets"],
    },
    teach: {
      prompt: "Teach expand and factor with one matching pair.",
      keyIdeas: ["expand", "factor", "equation"],
    },
    masteryCriteria: "You can expand, factor simply, and handle brackets via distribution.",
  },
});

export const proportionalReasoning1Lesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-proportional-reasoning-1-core",
  title: "Proportional Reasoning-1",
  domainTitle: "Ratio",
  prerequisites: ["ncert-g8-ganita-prakash-we-distribute-yet-things-multiply-core"],
  nextConceptIds: ["ncert-g8-ganita-prakash-fractions-in-disguise-core"],
  content: {
    objective: "Write a proportion and find a missing term using equivalent ratios.",
    wonder: {
      prompt: "If 2 pens cost ₹30, how do you find the cost of 5 pens without guessing — and why does a proportion lock the answer?",
    },
    explore: {
      text: "A proportion says two ratios are equal. Missing terms follow from equivalent fractions or scale factors. Direct proportion grows together at a constant rate.",
      activity: {
        prompt: "2/3 = x/12. What is x?",
        choices: [
          {
            id: "eight",
            label: "8, because 3×4=12 so 2×4=8",
            note: "Scale both parts of the ratio by 4.",
          },
          {
            id: "six",
            label: "6, by adding 3 and 3",
            note: "Proportions scale; they do not add like that.",
          },
          {
            id: "twelve",
            label: "12, copying the denominator",
            note: "The numerator must scale too.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A ratio compares two quantities in order.",
        "A proportion states that two ratios are equal: a/b = c/d.",
        "Finding a missing term uses a scale factor or cross-link reasoning taught carefully.",
        "Direct proportion: as one quantity multiplies, the other multiplies by the same factor.",
        "Tables of equivalent ratios make the pattern visible.",
      ],
    },
    examples: [
      {
        caption: "Proportion",
        body: "3/5 = 6/10.",
      },
      {
        caption: "Missing",
        body: "4/x = 2/5 → x = 10.",
      },
      {
        caption: "Story",
        body: "2 kg rice : ₹80 = 5 kg : ₹200.",
      },
    ],
    connection: "Recipes, maps, and unit prices are daily proportions.",
    try: {
      prompt: "Write a proportion for 3 notebooks costing ₹90 and find the cost of 7 at the same rate.",
      reveal: "3/90 = 7/x → x = 210.",
    },
    practice: [
      q(
        "g8m-p1-p1",
        "Which statement best matches proportional reasoning-1?",
        "Write equal ratios as a proportion and scale to find a missing term",
        "Any two fractions form a proportion even when unequal",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Write equal ratios as a proportion and scale to find a missing term",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-p1-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "2/3 = 8/12 is a proportion because both equal the same scale",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “2/3 = 8/12 is a proportion because both equal the same scale” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-p1-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-p1-r1",
        "In your own words, explain why this matters: Write equal ratios as a proportion and scale to find a missing term",
        "It matters because Write equal ratios as a proportion and scale to find a missing term. A supporting detail is: 2/3 = 8/12 is a proportion because both equal the same scale.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-p1-r2",
        "A classmate claims: “Any two fractions form a proportion even when unequal.” What is the better reply?",
        "Point to evidence: 2/3 = 8/12 is a proportion because both equal the same scale",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-p1-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Write equal ratios as a proportion and scale to find a missing term",
        "Any two fractions form a proportion even when unequal",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Write equal ratios as a proportion and scale to find a missing term",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-p1-t2",
        "Write one or two sentences that write a proportion and find one missing term.",
        ["Write equal ratios", "2/3 = 8/12", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-p1-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Write equal ratios as a proportion and scale to find a missing term. One proof is 2/3 = 8/12 is a proportion because both equal the same scale.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Cross numbers randomly until something looks nice.",
        correction: "Use a consistent scale factor or equivalent-ratio reasoning.",
      },
      {
        idea: "Order in a ratio never matters.",
        correction: "a:b is not the same as b:a.",
      },
    ],
    reflect: {
      prompt: "Where do you already compare rates with equal ratios?",
      keyIdeas: ["proportion", "missing term", "scale"],
    },
    teach: {
      prompt: "Teach finding a missing term with a scale-factor story.",
      keyIdeas: ["equal ratios", "scale factor", "example"],
    },
    masteryCriteria: "You can write a proportion and find a missing term.",
  },
});
