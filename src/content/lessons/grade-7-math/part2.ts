import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade7MathLesson } from "@/content/lessons/grade-7-math/format";

export const geometricTwinsLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-2-geometric-twins-core",
  title: "Geometric Twins",
  domainTitle: "Geometry",
  prerequisites: ["ncert-g7-ganita-prakash-1-working-with-fractions-core"],
  nextConceptIds: ["ncert-g7-ganita-prakash-2-operations-with-integers-core"],
  content: {
    objective: "Explain congruence as an exact match and identify corresponding parts of twin shapes.",
    wonder: {
      prompt: "Two triangles look like twins. What would convince you they match exactly — flip, turn, and all — not just “almost”?",
    },
    explore: {
      text: "Congruent shapes are geometric twins: same size and shape. Corresponding sides and angles match under a fitting transformation.",
      activity: {
        prompt: "What does congruence mean?",
        choices: [
          {
            id: "exact",
            label: "The shapes match exactly in size and shape",
            note: "Twins that fit on top of each other.",
          },
          {
            id: "similar-ish",
            label: "They have the same shape but one can be much larger",
            note: "That is similarity talk, not congruence.",
          },
          {
            id: "color",
            label: "They only need the same colour",
            note: "Colour is not a congruence condition.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Congruence means an exact match: one shape can fit on the other by sliding, turning, or flipping.",
        "Corresponding parts are matching sides and angles under that fit.",
        "Naming correspondence carefully (A to D, B to E, …) keeps twin talk precise.",
        "Equal corresponding sides and equal corresponding angles come with congruence.",
        "“Looks alike” is a start; corresponding parts make the twin claim checkable.",
      ],
    },
    examples: [
      {
        caption: "Twins",
        body: "Two identical set squares are congruent.",
      },
      {
        caption: "Correspondence",
        body: "If △ABC ≅ △DEF, then AB matches DE, angle A matches angle D.",
      },
      {
        caption: "Not enough",
        body: "Same shape but scaled up is not congruent.",
      },
    ],
    connection: "Tile patterns, cut-out crafts, and matching machine parts rely on congruence.",
    try: {
      prompt: "Explain congruence in one sentence. Then name two corresponding parts for twin triangles you imagine.",
      reveal: "Congruent shapes match exactly. Example: side AB corresponds to side DE; angle A to angle D.",
    },
    practice: [
      q(
        "g7m-gt-p1",
        "Which statement best matches geometric twins?",
        "Congruent shapes match exactly; corresponding sides and angles pair under that match",
        "Same shape at different sizes still counts as congruent",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Congruent shapes match exactly; corresponding sides and angles pair under that match",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-gt-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "If △ABC ≅ △DEF, then AB corresponds to DE",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “If △ABC ≅ △DEF, then AB corresponds to DE” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-gt-p3",
        "Which move shows conceptual Grade 7 maths?",
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
        "g7m-gt-r1",
        "In your own words, explain why this matters: Congruent shapes match exactly; corresponding sides and angles pair under that match",
        "It matters because Congruent shapes match exactly; corresponding sides and angles pair under that match. A supporting detail is: If △ABC ≅ △DEF, then AB corresponds to DE.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-gt-r2",
        "A classmate claims: “Same shape at different sizes still counts as congruent.” What is the better reply?",
        "Point to evidence: If △ABC ≅ △DEF, then AB corresponds to DE",
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
        "g7m-gt-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Congruent shapes match exactly; corresponding sides and angles pair under that match",
        "Same shape at different sizes still counts as congruent",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Congruent shapes match exactly; corresponding sides and angles pair under that match",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-gt-t2",
        "Write one or two sentences that explain congruence and name corresponding parts.",
        ["Congruent shapes match", "If △ABC ≅", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-gt-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Congruent shapes match exactly; corresponding sides and angles pair under that match. One proof is If △ABC ≅ △DEF, then AB corresponds to DE.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Similar shapes are automatically congruent.",
        correction: "Congruence needs the same size as well as the same shape.",
      },
      {
        idea: "Correspondence does not matter if lengths look close.",
        correction: "Name which vertex maps to which vertex.",
      },
    ],
    reflect: {
      prompt: "Where do you rely on matching parts fitting exactly in daily life?",
      keyIdeas: ["congruence", "corresponding", "match"],
    },
    teach: {
      prompt: "Teach congruence versus “same shape but bigger” with one pair of sketches in words.",
      keyIdeas: ["exact match", "corresponding parts", "size"],
    },
    masteryCriteria: "You can explain congruence and match corresponding parts of twin shapes.",
  },
});

export const operationsWithIntegersLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-2-operations-with-integers-core",
  title: "Operations with Integers",
  domainTitle: "Number",
  prerequisites: ["ncert-g7-ganita-prakash-2-geometric-twins-core"],
  nextConceptIds: ["ncert-g7-ganita-prakash-2-finding-common-ground-core"],
  content: {
    objective: "Multiply and divide integers with attention to signs, building on number-line direction for addition and subtraction.",
    wonder: {
      prompt: "A submarine changes depth by −4 m three times. Is the combined change −12 m or +12 m — and how do signs decide?",
    },
    explore: {
      text: "Integers live on a number line with direction. Adding and subtracting move left or right. Multiplying and dividing combine sizes and signs: same signs give positive products; different signs give negative products.",
      activity: {
        prompt: "What is (−3) × (−4)?",
        choices: [
          {
            id: "pos",
            label: "+12, because same signs make a positive product",
            note: "Negative times negative is positive.",
          },
          {
            id: "neg",
            label: "−12, because any negative factor forces a negative answer",
            note: "Two negatives flip twice.",
          },
          {
            id: "zero",
            label: "0, because negatives cancel everything",
            note: "Cancellation talk needs care; the product is not zero here.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Integers include negatives, zero, and positives on a directed number line.",
        "Addition and subtraction can be seen as moves: positive right, negative left.",
        "Multiplication of integers multiplies absolute values, then applies a sign rule.",
        "Same signs → positive product; different signs → negative product.",
        "Division follows the same sign story: the quotient’s sign matches the multiplication rule in reverse.",
      ],
    },
    examples: [
      {
        caption: "Multiply",
        body: "(−5) × 3 = −15; (−5) × (−3) = 15.",
      },
      {
        caption: "Divide",
        body: "(−12) ÷ 4 = −3; (−12) ÷ (−4) = 3.",
      },
      {
        caption: "Line",
        body: "From 0, three steps of −2 land at −6.",
      },
    ],
    connection: "Bank debits, temperature drops, and elevator floors all speak integer language.",
    try: {
      prompt: "Compute (−6) × 3 and (−6) ÷ (−2). State the sign rule you used.",
      reveal: "−18 (different signs). +3 (same signs).",
    },
    practice: [
      q(
        "g7m-oi-p1",
        "Which statement best matches integer operations?",
        "Multiply and divide absolute values, then apply sign rules: same signs positive, different signs negative",
        "Any negative factor always forces a negative product, even with two negatives",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Multiply and divide absolute values, then apply sign rules: same signs positive, different signs negative",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-oi-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "(−3) × (−4) = +12 because two negatives make a positive product",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “(−3) × (−4) = +12 because two negatives make a positive product” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-oi-p3",
        "Which move shows conceptual Grade 7 maths?",
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
        "g7m-oi-r1",
        "In your own words, explain why this matters: Multiply and divide absolute values, then apply sign rules: same signs positive, different signs negative",
        "It matters because Multiply and divide absolute values, then apply sign rules: same signs positive, different signs negative. A supporting detail is: (−3) × (−4) = +12 because two negatives make a positive product.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-oi-r2",
        "A classmate claims: “Any negative factor always forces a negative product, even with two negatives.” What is the better reply?",
        "Point to evidence: (−3) × (−4) = +12 because two negatives make a positive product",
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
        "g7m-oi-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Multiply and divide absolute values, then apply sign rules: same signs positive, different signs negative",
        "Any negative factor always forces a negative product, even with two negatives",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Multiply and divide absolute values, then apply sign rules: same signs positive, different signs negative",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-oi-t2",
        "Write one or two sentences that explain the sign rule for multiplying integers.",
        ["Multiply and divide", "(−3) × (−4)", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-oi-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Multiply and divide absolute values, then apply sign rules: same signs positive, different signs negative. One proof is (−3) × (−4) = +12 because two negatives make a positive product.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "A negative times a negative is negative.",
        correction: "Same signs give a positive product.",
      },
      {
        idea: "Integer multiplication ignores the number line entirely.",
        correction: "Repeated addition on the line still builds intuition for signs.",
      },
    ],
    reflect: {
      prompt: "Where do negative quantities appear in weather or money stories you know?",
      keyIdeas: ["integer", "sign", "multiply"],
    },
    teach: {
      prompt: "Teach the sign rules for multiplying and dividing integers with two examples.",
      keyIdeas: ["same signs", "different signs", "examples"],
    },
    masteryCriteria: "You can multiply and divide integers and explain the sign of the result.",
  },
});

export const findingCommonGroundLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-2-finding-common-ground-core",
  title: "Finding Common Ground",
  domainTitle: "Number",
  prerequisites: ["ncert-g7-ganita-prakash-2-operations-with-integers-core"],
  nextConceptIds: ["ncert-g7-ganita-prakash-2-another-peek-beyond-the-point-core"],
  content: {
    objective: "Find HCF and LCM and choose which one fits a sharing or repeating problem.",
    wonder: {
      prompt: "You have 18 red beads and 24 blue beads to make identical bracelets with none left over. Do you need HCF or LCM — and why?",
    },
    explore: {
      text: "HCF is the greatest shared factor — useful for splitting into identical groups. LCM is the least shared multiple — useful for repeating events that must meet again.",
      activity: {
        prompt: "Identical bracelets with no beads left over points to…",
        choices: [
          {
            id: "hcf",
            label: "HCF: the greatest number of identical groups you can make",
            note: "Sharing into identical sets uses HCF.",
          },
          {
            id: "lcm",
            label: "LCM only, because multiples always mean sharing",
            note: "LCM fits repeating meetings more than leftover-free sharing.",
          },
          {
            id: "add",
            label: "Just add 18 + 24 and stop",
            note: "Sum alone does not answer the grouping question.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Common ground between numbers can mean shared factors or shared multiples.",
        "HCF (highest common factor) is the greatest number that divides both.",
        "LCM (least common multiple) is the smallest positive number that both divide into.",
        "Choose HCF for splitting into identical groups without remainder.",
        "Choose LCM for the next time repeating cycles meet.",
      ],
    },
    examples: [
      {
        caption: "HCF",
        body: "HCF(12, 18) = 6.",
      },
      {
        caption: "LCM",
        body: "LCM(4, 6) = 12.",
      },
      {
        caption: "Choose",
        body: "Buses every 4 and 6 minutes meet every 12 minutes — LCM.",
      },
    ],
    connection: "Packing identical gift bags and aligning bus or bell schedules are classic HCF/LCM stories.",
    try: {
      prompt: "Find HCF(16, 24) and LCM(16, 24). Say which helps split 16 and 24 into identical teams.",
      reveal: "HCF = 8, LCM = 48. Splitting identical teams uses HCF = 8.",
    },
    practice: [
      q(
        "g7m-cg-p1",
        "Which statement best matches HCF and LCM thinking?",
        "Use HCF for identical grouping without remainder; use LCM for the next shared meeting of repeats",
        "HCF and LCM are interchangeable labels for the same number",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Use HCF for identical grouping without remainder; use LCM for the next shared meeting of repeats",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-cg-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "HCF(12, 18) = 6 while LCM(12, 18) = 36",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “HCF(12, 18) = 6 while LCM(12, 18) = 36” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-cg-p3",
        "Which move shows conceptual Grade 7 maths?",
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
        "g7m-cg-r1",
        "In your own words, explain why this matters: Use HCF for identical grouping without remainder; use LCM for the next shared meeting of repeats",
        "It matters because Use HCF for identical grouping without remainder; use LCM for the next shared meeting of repeats. A supporting detail is: HCF(12, 18) = 6 while LCM(12, 18) = 36.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-cg-r2",
        "A classmate claims: “HCF and LCM are interchangeable labels for the same number.” What is the better reply?",
        "Point to evidence: HCF(12, 18) = 6 while LCM(12, 18) = 36",
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
        "g7m-cg-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Use HCF for identical grouping without remainder; use LCM for the next shared meeting of repeats",
        "HCF and LCM are interchangeable labels for the same number",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Use HCF for identical grouping without remainder; use LCM for the next shared meeting of repeats",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-cg-t2",
        "Write one or two sentences that explain when to choose HCF versus LCM.",
        ["Use HCF for", "HCF(12, 18) =", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-cg-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Use HCF for identical grouping without remainder; use LCM for the next shared meeting of repeats. One proof is HCF(12, 18) = 6 while LCM(12, 18) = 36.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "LCM is always smaller than HCF.",
        correction: "For positive integers greater than 1, LCM is at least as large as each number; HCF is at most each number.",
      },
      {
        idea: "Any common factor is the HCF.",
        correction: "HCF is the greatest common factor.",
      },
    ],
    reflect: {
      prompt: "Invent one sharing problem and one meeting-time problem for two numbers you choose.",
      keyIdeas: ["HCF", "LCM", "choose"],
    },
    teach: {
      prompt: "Teach the difference between HCF and LCM with one story each.",
      keyIdeas: ["grouping", "meeting", "examples"],
    },
    masteryCriteria: "You can find HCF and LCM and choose the right tool for a problem.",
  },
});

export const anotherPeekBeyondThePointLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-2-another-peek-beyond-the-point-core",
  title: "Another Peek Beyond the Point",
  domainTitle: "Number",
  prerequisites: ["ncert-g7-ganita-prakash-2-finding-common-ground-core"],
  nextConceptIds: ["ncert-g7-ganita-prakash-2-connecting-the-dots-core"],
  content: {
    objective: "Multiply and divide decimals by tracking place value through the point.",
    wonder: {
      prompt: "If 1.2 × 0.4 feels smaller than 1.2, is something broken — or is “part of a part” working as it should?",
    },
    explore: {
      text: "Multiplying decimals multiplies as whole numbers, then places the point by counting decimal digits. Dividing decimals often means rewriting with related whole numbers while keeping value.",
      activity: {
        prompt: "What is 1.2 × 0.4?",
        choices: [
          {
            id: "pt48",
            label: "0.48, after multiplying 12 × 4 and placing two decimal digits",
            note: "1 + 1 decimal places → two places in the product.",
          },
          {
            id: "fortyeight",
            label: "48, ignoring the points",
            note: "Place value still matters after multiplying digits.",
          },
          {
            id: "bigger",
            label: "Something larger than 1.2 because multiplication always grows",
            note: "A factor less than 1 shrinks the other factor.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Decimal multiplication extends whole-number multiplication with place-value accounting.",
        "Count the total decimal digits in the factors; the product needs that many digits after the point.",
        "A factor between 0 and 1 shrinks the other factor — the product can be smaller.",
        "Decimal division can be rewritten by multiplying numerator and denominator by the same power of ten.",
        "Estimating first (1.2 × 0.4 is a bit less than half of 1.2) catches point-placement slips.",
      ],
    },
    examples: [
      {
        caption: "Multiply",
        body: "0.3 × 0.2 = 0.06.",
      },
      {
        caption: "Divide",
        body: "1.8 ÷ 0.3 = 18 ÷ 3 = 6.",
      },
      {
        caption: "Estimate",
        body: "2.9 × 1.1 is a little more than 3.",
      },
    ],
    connection: "Unit prices, map scales, and medicine measures need decimal multiply and divide.",
    try: {
      prompt: "Compute 0.6 × 0.5 and 1.2 ÷ 0.4. Estimate before you finalise.",
      reveal: "0.30 (or 0.3). 3.",
    },
    practice: [
      q(
        "g7m-ap-p1",
        "Which statement best matches decimal multiply and divide?",
        "Multiply decimals by placing the point from total decimal digits; divide by relating to whole-number division",
        "Multiplication always makes a larger number, even by 0.4",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Multiply decimals by placing the point from total decimal digits; divide by relating to whole-number division",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-ap-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "1.2 × 0.4 = 0.48 because two decimal places appear in the product",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “1.2 × 0.4 = 0.48 because two decimal places appear in the product” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-ap-p3",
        "Which move shows conceptual Grade 7 maths?",
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
        "g7m-ap-r1",
        "In your own words, explain why this matters: Multiply decimals by placing the point from total decimal digits; divide by relating to whole-number division",
        "It matters because Multiply decimals by placing the point from total decimal digits; divide by relating to whole-number division. A supporting detail is: 1.2 × 0.4 = 0.48 because two decimal places appear in the product.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-ap-r2",
        "A classmate claims: “Multiplication always makes a larger number, even by 0.4.” What is the better reply?",
        "Point to evidence: 1.2 × 0.4 = 0.48 because two decimal places appear in the product",
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
        "g7m-ap-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Multiply decimals by placing the point from total decimal digits; divide by relating to whole-number division",
        "Multiplication always makes a larger number, even by 0.4",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Multiply decimals by placing the point from total decimal digits; divide by relating to whole-number division",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-ap-t2",
        "Write one or two sentences that explain how to place the point when multiplying decimals.",
        ["Multiply decimals by", "1.2 × 0.4", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-ap-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Multiply decimals by placing the point from total decimal digits; divide by relating to whole-number division. One proof is 1.2 × 0.4 = 0.48 because two decimal places appear in the product.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Ignore decimal points, multiply, and leave the answer as a whole number.",
        correction: "Count decimal digits to place the point.",
      },
      {
        idea: "Dividing by a decimal less than 1 always shrinks the answer.",
        correction: "Dividing by 0.5 doubles; think “how many fit.”",
      },
    ],
    reflect: {
      prompt: "When has a decimal product surprised you by being smaller than a factor?",
      keyIdeas: ["decimal", "multiply", "divide"],
    },
    teach: {
      prompt: "Teach 1.2 × 0.4 with digit multiply plus point placement.",
      keyIdeas: ["count places", "estimate", "example"],
    },
    masteryCriteria: "You can multiply and divide decimals with reasoned point placement.",
  },
});

export const connectingTheDotsLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-2-connecting-the-dots-core",
  title: "Connecting the Dots",
  domainTitle: "Data",
  prerequisites: ["ncert-g7-ganita-prakash-2-another-peek-beyond-the-point-core"],
  nextConceptIds: ["ncert-g7-ganita-prakash-2-constructions-and-tilings-core"],
  content: {
    objective: "Find mean, median, and mode, and use range to talk about spread in a data set.",
    wonder: {
      prompt: "Five friends scored 2, 8, 8, 9, 10 in a game. Which single number best “represents” the group — and what does each choice hide?",
    },
    explore: {
      text: "Mean balances the total. Median is the middle after ordering. Mode is the most frequent value. Range is largest minus smallest — a quick spread story.",
      activity: {
        prompt: "For 2, 8, 8, 9, 10, what is the mode?",
        choices: [
          {
            id: "eight",
            label: "8, because it appears most often",
            note: "Mode tracks frequency.",
          },
          {
            id: "meanish",
            label: "7.4 only, and refuse to name mode",
            note: "Mean and mode answer different questions.",
          },
          {
            id: "ten",
            label: "10, because it is largest",
            note: "Largest is about range extremes, not mode.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Data summaries squeeze a list into a few telling numbers.",
        "Mean = sum ÷ count — fair when every value shares the total equally.",
        "Median is the middle value after sorting — sturdy when one extreme is huge.",
        "Mode highlights what appears most — useful for favourites and peaks.",
        "Range = max − min — a first glance at how spread out the values are.",
      ],
    },
    examples: [
      {
        caption: "Mean",
        body: "For 3, 5, 7, mean = 15/3 = 5.",
      },
      {
        caption: "Median",
        body: "For 3, 5, 7, median = 5.",
      },
      {
        caption: "Range",
        body: "For 3, 5, 7, range = 4.",
      },
    ],
    connection: "Class heights, rainfall tables, and game scores all invite mean, median, mode, and range.",
    try: {
      prompt: "For 4, 6, 6, 10, find mean, median, mode, and range.",
      reveal: "Mean 6.5; median 6; mode 6; range 6.",
    },
    practice: [
      q(
        "g7m-cd-p1",
        "Which statement best matches data summaries?",
        "Mean, median, and mode summarise differently; range measures spread as max minus min",
        "Mean, median, and mode always give the exact same number",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Mean, median, and mode summarise differently; range measures spread as max minus min",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-cd-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "In 2, 8, 8, 9, 10 the mode is 8 while the mean is 7.4",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “In 2, 8, 8, 9, 10 the mode is 8 while the mean is 7.4” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-cd-p3",
        "Which move shows conceptual Grade 7 maths?",
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
        "g7m-cd-r1",
        "In your own words, explain why this matters: Mean, median, and mode summarise differently; range measures spread as max minus min",
        "It matters because Mean, median, and mode summarise differently; range measures spread as max minus min. A supporting detail is: In 2, 8, 8, 9, 10 the mode is 8 while the mean is 7.4.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-cd-r2",
        "A classmate claims: “Mean, median, and mode always give the exact same number.” What is the better reply?",
        "Point to evidence: In 2, 8, 8, 9, 10 the mode is 8 while the mean is 7.4",
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
        "g7m-cd-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Mean, median, and mode summarise differently; range measures spread as max minus min",
        "Mean, median, and mode always give the exact same number",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Mean, median, and mode summarise differently; range measures spread as max minus min",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-cd-t2",
        "Write one or two sentences that explain the difference between mean and median.",
        ["Mean, median, and", "In 2, 8,", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-cd-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Mean, median, and mode summarise differently; range measures spread as max minus min. One proof is In 2, 8, 8, 9, 10 the mode is 8 while the mean is 7.4.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "The mean is always the best summary.",
        correction: "Choose the summary that answers your question; extremes can pull the mean.",
      },
      {
        idea: "Range is the middle value.",
        correction: "Range is largest minus smallest.",
      },
    ],
    reflect: {
      prompt: "When would median tell a fairer story than mean in a class data set?",
      keyIdeas: ["mean", "median", "range"],
    },
    teach: {
      prompt: "Teach mean versus mode using the scores 2, 8, 8, 9, 10.",
      keyIdeas: ["mean", "mode", "different questions"],
    },
    masteryCriteria: "You can find mean, median, mode, and range and say what each highlights.",
  },
});

export const constructionsAndTilingsLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-2-constructions-and-tilings-core",
  title: "Constructions and Tilings",
  domainTitle: "Geometry",
  prerequisites: ["ncert-g7-ganita-prakash-2-connecting-the-dots-core"],
  nextConceptIds: ["ncert-g7-ganita-prakash-2-finding-the-unknown-core"],
  content: {
    objective: "Follow a ruler-and-compass construction idea and describe how a tiling covers a surface without gaps or overlaps.",
    wonder: {
      prompt: "How can a compass and straight edge build a perfect perpendicular — and how do bathroom tiles cover a wall without gaps?",
    },
    explore: {
      text: "Constructions are step-by-step drawings with ruler and compass. Tilings cover a plane region with shapes that fit without gaps or overlaps.",
      activity: {
        prompt: "What makes a tiling successful?",
        choices: [
          {
            id: "cover",
            label: "Shapes cover the surface with no gaps and no overlaps",
            note: "That is the tiling idea.",
          },
          {
            id: "gaps",
            label: "Leaving decorative gaps is required",
            note: "Gaps mean the surface is not fully tiled.",
          },
          {
            id: "one",
            label: "Using only one tile anywhere, never repeating",
            note: "Tilings usually repeat shapes to cover.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A construction is a precise drawing built from allowed tools and clear steps.",
        "Ruler-and-compass moves include drawing segments, arcs, and equal lengths.",
        "Following order matters: each mark depends on earlier marks.",
        "A tiling (tessellation) covers a surface without gaps or overlaps.",
        "Describing a tiling names the shape(s) and how edges meet.",
      ],
    },
    examples: [
      {
        caption: "Construction",
        body: "Copying a segment with compass width kept equal.",
      },
      {
        caption: "Tiling",
        body: "Squares on a chessboard tile the board.",
      },
      {
        caption: "Fail",
        body: "Circles alone leave curved gaps — not a mono-circle tiling of the plane.",
      },
    ],
    connection: "Kolam patterns, floor tiles, and technical drawings mix construction care with tiling ideas.",
    try: {
      prompt: "Describe one construction step that copies a length. Then name a shape that tiles a floor and why.",
      reveal: "Set compass to the segment, swing an arc elsewhere. Squares tile because edges match without gaps.",
    },
    practice: [
      q(
        "g7m-ct-p1",
        "Which statement best matches constructions and tilings?",
        "Constructions follow precise ruler-compass steps; tilings cover without gaps or overlaps",
        "A tiling can leave gaps as long as the shapes look pretty",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Constructions follow precise ruler-compass steps; tilings cover without gaps or overlaps",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-ct-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "Squares tile a rectangle when edges meet flush with no overlaps",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “Squares tile a rectangle when edges meet flush with no overlaps” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-ct-p3",
        "Which move shows conceptual Grade 7 maths?",
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
        "g7m-ct-r1",
        "In your own words, explain why this matters: Constructions follow precise ruler-compass steps; tilings cover without gaps or overlaps",
        "It matters because Constructions follow precise ruler-compass steps; tilings cover without gaps or overlaps. A supporting detail is: Squares tile a rectangle when edges meet flush with no overlaps.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-ct-r2",
        "A classmate claims: “A tiling can leave gaps as long as the shapes look pretty.” What is the better reply?",
        "Point to evidence: Squares tile a rectangle when edges meet flush with no overlaps",
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
        "g7m-ct-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Constructions follow precise ruler-compass steps; tilings cover without gaps or overlaps",
        "A tiling can leave gaps as long as the shapes look pretty",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Constructions follow precise ruler-compass steps; tilings cover without gaps or overlaps",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-ct-t2",
        "Write one or two sentences that describe what makes a tiling valid.",
        ["Constructions follow precise", "Squares tile a", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-ct-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Constructions follow precise ruler-compass steps; tilings cover without gaps or overlaps. One proof is Squares tile a rectangle when edges meet flush with no overlaps.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Construction means freehand sketching without tools.",
        correction: "Use the allowed tools and ordered steps.",
      },
      {
        idea: "Any repeated sticker pattern is a tiling even with gaps.",
        correction: "No gaps and no overlaps define a tiling cover.",
      },
    ],
    reflect: {
      prompt: "What tiled surface do you walk on daily? Which shape repeats?",
      keyIdeas: ["construction", "tiling", "no gaps"],
    },
    teach: {
      prompt: "Teach the no-gaps-no-overlaps rule with squares versus circles.",
      keyIdeas: ["steps", "cover", "fit"],
    },
    masteryCriteria: "You can describe a construction step and explain a valid tiling.",
  },
});

export const findingTheUnknownLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-2-finding-the-unknown-core",
  title: "Finding the Unknown",
  domainTitle: "Algebra",
  prerequisites: ["ncert-g7-ganita-prakash-2-constructions-and-tilings-core"],
  nextConceptIds: [],
  content: {
    objective: "Solve a one-step equation, check the solution, and connect unknowns to simple direct-proportion and rational-number ideas.",
    wonder: {
      prompt: "If 3 bags hold the same total as 24 apples, how many apples per bag — and how do you check you are not guessing?",
    },
    explore: {
      text: "An equation balances two expressions. Solving undoes operations to isolate the unknown. Checking substitutes back. Direct proportion and rational numbers often hide in the same stories.",
      activity: {
        prompt: "To solve x + 7 = 20, what is the clean move?",
        choices: [
          {
            id: "sub",
            label: "Subtract 7 from both sides to get x = 13, then check",
            note: "Undo addition; verify in the original equation.",
          },
          {
            id: "guess",
            label: "Guess numbers until one feels lucky, with no check",
            note: "Checking is part of finding the unknown.",
          },
          {
            id: "add",
            label: "Add 7 to both sides again",
            note: "That moves farther from isolating x.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Finding the unknown means solving an equation for the letter.",
        "One-step equations undo a single operation with balance: do the same to both sides.",
        "Always check by substituting the solution into the original equation.",
        "Two-step equations undo operations in a sensible order — often reverse of how the expression was built.",
        "Direct proportion links unknowns that scale together; rational numbers appear as fraction or decimal answers.",
      ],
    },
    examples: [
      {
        caption: "One-step",
        body: "x − 4 = 9 → x = 13; check 13 − 4 = 9.",
      },
      {
        caption: "Two-step flavour",
        body: "2x + 3 = 11 → 2x = 8 → x = 4.",
      },
      {
        caption: "Proportion",
        body: "If 2 pens cost ₹10, 5 pens cost ₹25 at the same rate.",
      },
    ],
    connection: "Fair shares, unit prices, and balance-scale puzzles are equation stories in disguise.",
    try: {
      prompt: "Solve 5x = 35 and check. Then say one rational number that could appear as an answer in a similar problem.",
      reveal: "x = 7 because 5 × 7 = 35. A rational example: 7/2 or 0.5 in another equation.",
    },
    practice: [
      q(
        "g7m-fu-p1",
        "Which statement best matches finding the unknown?",
        "Solve by balancing both sides, then check by substituting; unknowns often link to proportion and rationals",
        "A solution never needs checking once it looks neat",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Solve by balancing both sides, then check by substituting; unknowns often link to proportion and rationals",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-fu-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "For x + 7 = 20, x = 13 checks because 13 + 7 = 20",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “For x + 7 = 20, x = 13 checks because 13 + 7 = 20” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-fu-p3",
        "Which move shows conceptual Grade 7 maths?",
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
        "g7m-fu-r1",
        "In your own words, explain why this matters: Solve by balancing both sides, then check by substituting; unknowns often link to proportion and rationals",
        "It matters because Solve by balancing both sides, then check by substituting; unknowns often link to proportion and rationals. A supporting detail is: For x + 7 = 20, x = 13 checks because 13 + 7 = 20.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-fu-r2",
        "A classmate claims: “A solution never needs checking once it looks neat.” What is the better reply?",
        "Point to evidence: For x + 7 = 20, x = 13 checks because 13 + 7 = 20",
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
        "g7m-fu-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Solve by balancing both sides, then check by substituting; unknowns often link to proportion and rationals",
        "A solution never needs checking once it looks neat",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Solve by balancing both sides, then check by substituting; unknowns often link to proportion and rationals",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-fu-t2",
        "Write one or two sentences that solve a one-step equation and show a check.",
        ["Solve by balancing", "For x +", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-fu-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Solve by balancing both sides, then check by substituting; unknowns often link to proportion and rationals. One proof is For x + 7 = 20, x = 13 checks because 13 + 7 = 20.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "You may change only one side of an equation.",
        correction: "Keep the balance — same operation on both sides.",
      },
      {
        idea: "Checking is optional busywork.",
        correction: "Substitution confirms the unknown really works.",
      },
    ],
    reflect: {
      prompt: "When do you already “solve for an unknown” without calling it algebra?",
      keyIdeas: ["equation", "check", "unknown"],
    },
    teach: {
      prompt: "Teach solving x + 7 = 20 with a balance story and a check.",
      keyIdeas: ["both sides", "undo", "check"],
    },
    masteryCriteria: "You can solve a one-step equation, check it, and talk about unknowns with proportion or rational ideas.",
  },
});
