import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade7MathLesson } from "@/content/lessons/grade-7-math/format";

export const largeNumbersLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-1-large-numbers-core",
  title: "Large Numbers",
  domainTitle: "Number",
  prerequisites: [],
  nextConceptIds: ["ncert-g7-ganita-prakash-1-arithmetic-expressions-core"],
  content: {
    objective: "Read large numbers in Indian place-value language and compare which is greater with clear reasoning.",
    wonder: {
      prompt: "A stadium claims 1,25,000 fans and a news site writes 125000. Are they the same crowd — and how would you compare 2,05,000 with 1,98,500 quickly?",
    },
    explore: {
      text: "Large numbers use place value through thousands and lakhs. Reading means saying the number in groups. Comparing starts from the left: digit count first, then place by place.",
      activity: {
        prompt: "Which strategy best compares 3,45,678 and 3,54,678?",
        choices: [
          {
            id: "left",
            label: "Compare from the left after matching the lakh digit",
            note: "The first differing higher place decides.",
          },
          {
            id: "sum",
            label: "Add the digits and compare the sums only",
            note: "Digit sums do not decide size. Place value does.",
          },
          {
            id: "ones",
            label: "Only look at the ones digit",
            note: "Ones are tiny next to lakhs and ten thousands.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Large numbers are clearer when you chunk them by Indian place-value groups: thousands and lakhs.",
        "Reading 2,05,000 as two lakh five thousand makes the size feel real.",
        "To compare, first check digit count. More digits mean a larger whole number.",
        "If digit counts match, compare place by place from the left until one digit is greater.",
        "Commas help reading; the value lives in the digits and their places.",
      ],
    },
    examples: [
      {
        caption: "Read",
        body: "4,50,000 reads as four lakh fifty thousand.",
      },
      {
        caption: "Compare",
        body: "1,99,999 < 2,00,000 because two lakh beats one lakh ninety-nine thousand.",
      },
      {
        caption: "Same value",
        body: "205000 and 2,05,000 name the same number.",
      },
    ],
    connection: "Population counts, stadium crowds, and school enrolment tallies all use large-number reading and comparison.",
    try: {
      prompt: "Write 7,05,020 in words. Then say which is greater: 6,99,999 or 7,00,000, and why.",
      reveal: "Seven lakh five thousand twenty. 7,00,000 is greater because it reaches seven lakh.",
    },
    practice: [
      q(
        "g7m-ln-p1",
        "Which statement best matches careful large-number thinking?",
        "Compare large numbers from the left using place value, not digit sums",
        "More commas always mean a larger number",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Compare large numbers from the left using place value, not digit sums",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-ln-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "2 lakh beats 1 lakh even if the smaller side has many 9s",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “2 lakh beats 1 lakh even if the smaller side has many 9s” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-ln-p3",
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
        "g7m-ln-r1",
        "In your own words, explain why this matters: Compare large numbers from the left using place value, not digit sums",
        "It matters because Compare large numbers from the left using place value, not digit sums. A supporting detail is: 2 lakh beats 1 lakh even if the smaller side has many 9s.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-ln-r2",
        "A classmate claims: “More commas always mean a larger number.” What is the better reply?",
        "Point to evidence: 2 lakh beats 1 lakh even if the smaller side has many 9s",
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
        "g7m-ln-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Compare large numbers from the left using place value, not digit sums",
        "More commas always mean a larger number",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Compare large numbers from the left using place value, not digit sums",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-ln-t2",
        "Write one or two sentences that explain how to compare two large numbers.",
        ["Compare large numbers", "2 lakh beats", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-ln-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Compare large numbers from the left using place value, not digit sums. One proof is 2 lakh beats 1 lakh even if the smaller side has many 9s.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "More commas always mean a larger number.",
        correction: "Commas group digits for reading; value comes from digits and places.",
      },
      {
        idea: "Comparing from the ones place is enough for large numbers.",
        correction: "Start from the left — higher places decide first.",
      },
    ],
    reflect: {
      prompt: "Where do you meet large numbers in news or sport? How would place-value reading help you trust a claim?",
      keyIdeas: ["large number", "place value", "compare"],
    },
    teach: {
      prompt: "Teach how to compare two large numbers in under a minute with one clear example.",
      keyIdeas: ["digit count", "left to right", "example"],
    },
    masteryCriteria: "You can read a large number in lakh language and compare two large numbers with place-value reasons.",
  },
});

export const arithmeticExpressionsLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-1-arithmetic-expressions-core",
  title: "Arithmetic Expressions",
  domainTitle: "Number",
  prerequisites: ["ncert-g7-ganita-prakash-1-large-numbers-core"],
  nextConceptIds: ["ncert-g7-ganita-prakash-1-peek-beyond-the-point-core"],
  content: {
    objective: "Use brackets and order of operations so an arithmetic expression has one clear value.",
    wonder: {
      prompt: "Does 8 − 3 × 2 equal 10 or 2? Why might two careful people disagree without a shared order?",
    },
    explore: {
      text: "An expression combines numbers with operations. Brackets mean do this first. Then multiply and divide left to right; then add and subtract left to right.",
      activity: {
        prompt: "What is the value of 8 − 3 × 2 with standard order?",
        choices: [
          {
            id: "two",
            label: "2, because multiply before subtract",
            note: "Multiplication precedes subtraction here.",
          },
          {
            id: "ten",
            label: "10, because subtract first no matter what",
            note: "That ignores × priority.",
          },
          {
            id: "any",
            label: "Any answer is fine because expressions are guesses",
            note: "Shared order makes a shared value.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Arithmetic expressions combine numbers with +, −, ×, ÷ and brackets.",
        "Brackets are priority signs: evaluate inside them before outside operations.",
        "Without brackets, multiply and divide before you add and subtract.",
        "Terms and like terms appear as expressions grow — pieces you can name and combine carefully.",
        "Simplifying means rewriting toward a clear value without changing meaning.",
      ],
    },
    examples: [
      {
        caption: "Brackets first",
        body: "(8 − 3) × 2 = 10.",
      },
      {
        caption: "No brackets",
        body: "8 − 3 × 2 = 2.",
      },
      {
        caption: "Left to right",
        body: "24 ÷ 4 × 3 = 18.",
      },
    ],
    connection: "Billing with tax, recipe scaling, and puzzle scores all depend on shared order of operations.",
    try: {
      prompt: "Evaluate 5 + 2 × (7 − 4). Show the bracket step first.",
      reveal: "Bracket: 3. Then 2 × 3 = 6. Then 5 + 6 = 11.",
    },
    practice: [
      q(
        "g7m-ae-p1",
        "Which statement best captures order of operations?",
        "Brackets first, then × and ÷, then + and −, so an expression has one agreed value",
        "Always compute strictly left to right and ignore × priority",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Brackets first, then × and ÷, then + and −, so an expression has one agreed value",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-ae-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "8 − 3 × 2 equals 2, while (8 − 3) × 2 equals 10",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “8 − 3 × 2 equals 2, while (8 − 3) × 2 equals 10” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-ae-p3",
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
        "g7m-ae-r1",
        "In your own words, explain why this matters: Brackets first, then × and ÷, then + and −, so an expression has one agreed value",
        "It matters because Brackets first, then × and ÷, then + and −, so an expression has one agreed value. A supporting detail is: 8 − 3 × 2 equals 2, while (8 − 3) × 2 equals 10.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-ae-r2",
        "A classmate claims: “Always compute strictly left to right and ignore × priority.” What is the better reply?",
        "Point to evidence: 8 − 3 × 2 equals 2, while (8 − 3) × 2 equals 10",
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
        "g7m-ae-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Brackets first, then × and ÷, then + and −, so an expression has one agreed value",
        "Always compute strictly left to right and ignore × priority",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Brackets first, then × and ÷, then + and −, so an expression has one agreed value",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-ae-t2",
        "Write one or two sentences that explain why brackets can change an expression’s value.",
        ["Brackets first, then", "8 − 3", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-ae-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Brackets first, then × and ÷, then + and −, so an expression has one agreed value. One proof is 8 − 3 × 2 equals 2, while (8 − 3) × 2 equals 10.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Always compute strictly left to right, ignoring × and ÷ priority.",
        correction: "Without brackets, multiply and divide before add and subtract.",
      },
      {
        idea: "Brackets are optional decoration.",
        correction: "Brackets change which operation happens first.",
      },
    ],
    reflect: {
      prompt: "When have two people disagreed about a calculation because of order? What rule would settle it?",
      keyIdeas: ["order", "brackets", "agree"],
    },
    teach: {
      prompt: "Teach why brackets matter using (8−3)×2 versus 8−3×2.",
      keyIdeas: ["brackets first", "different values", "order"],
    },
    masteryCriteria: "You can evaluate expressions with brackets and explain order of operations clearly.",
  },
});

export const peekBeyondThePointLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-1-peek-beyond-the-point-core",
  title: "A Peek Beyond the Point",
  domainTitle: "Number",
  prerequisites: ["ncert-g7-ganita-prakash-1-arithmetic-expressions-core"],
  nextConceptIds: ["ncert-g7-ganita-prakash-1-letter-numbers-core"],
  content: {
    objective: "Read tenths and hundredths and compare decimals using place value beyond the point.",
    wonder: {
      prompt: "On a track, is 9.58 seconds faster than 9.6? How do digits after the point decide?",
    },
    explore: {
      text: "Decimals extend place value to tenths and hundredths. Comparing aligns the points and compares digit by digit from the left of the fractional part.",
      activity: {
        prompt: "Which is greater: 0.58 or 0.6?",
        choices: [
          {
            id: "six",
            label: "0.6, because 6 tenths beats 5 tenths",
            note: "Tenths decide before hundredths.",
          },
          {
            id: "more",
            label: "0.58, because it has more digits after the point",
            note: "Extra digits do not automatically mean larger.",
          },
          {
            id: "same",
            label: "They are equal because both start with 0",
            note: "Digits after the point still differ.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The decimal point separates whole ones from fractional parts of one.",
        "The first digit after the point is tenths; the next is hundredths.",
        "0.6 means six tenths; 0.60 is the same value with zero hundredths shown.",
        "To compare, line up the points and compare tenths first, then hundredths.",
        "Trailing zeros after the point do not change value, but they can help align places.",
      ],
    },
    examples: [
      {
        caption: "Read",
        body: "0.45 is four tenths and five hundredths.",
      },
      {
        caption: "Compare",
        body: "0.7 > 0.69 because 7 tenths beats 6 tenths.",
      },
      {
        caption: "Equal",
        body: "0.5 = 0.50.",
      },
    ],
    connection: "Race times, medicine doses, and money in rupees and paise all live in decimal places.",
    try: {
      prompt: "Order from least to greatest: 0.8, 0.75, 0.805. Name the first comparison you make.",
      reveal: "0.75 < 0.8 < 0.805. Tenths: 7 < 8, so 0.75 is smallest.",
    },
    practice: [
      q(
        "g7m-pk-p1",
        "Which statement best matches decimal place-value thinking?",
        "Compare decimals by aligning the point and reading tenths before hundredths",
        "The decimal with more digits after the point is always larger",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Compare decimals by aligning the point and reading tenths before hundredths",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-pk-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "0.6 equals 0.60, and both beat 0.58 on the tenths place",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “0.6 equals 0.60, and both beat 0.58 on the tenths place” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-pk-p3",
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
        "g7m-pk-r1",
        "In your own words, explain why this matters: Compare decimals by aligning the point and reading tenths before hundredths",
        "It matters because Compare decimals by aligning the point and reading tenths before hundredths. A supporting detail is: 0.6 equals 0.60, and both beat 0.58 on the tenths place.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-pk-r2",
        "A classmate claims: “The decimal with more digits after the point is always larger.” What is the better reply?",
        "Point to evidence: 0.6 equals 0.60, and both beat 0.58 on the tenths place",
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
        "g7m-pk-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Compare decimals by aligning the point and reading tenths before hundredths",
        "The decimal with more digits after the point is always larger",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Compare decimals by aligning the point and reading tenths before hundredths",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-pk-t2",
        "Write one or two sentences that explain how to compare two decimals.",
        ["Compare decimals by", "0.6 equals 0.60,", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-pk-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Compare decimals by aligning the point and reading tenths before hundredths. One proof is 0.6 equals 0.60, and both beat 0.58 on the tenths place.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "The decimal with more digits is always larger.",
        correction: "Compare place by place from the tenths.",
      },
      {
        idea: "0.6 is six hundredths.",
        correction: "0.6 is six tenths; 0.06 is six hundredths.",
      },
    ],
    reflect: {
      prompt: "Where do decimal comparisons matter in sport or shopping?",
      keyIdeas: ["decimal", "tenths", "compare"],
    },
    teach: {
      prompt: "Teach tenths versus hundredths with 0.4 and 0.04.",
      keyIdeas: ["tenths", "hundredths", "example"],
    },
    masteryCriteria: "You can read tenths and hundredths and compare decimals with place-value reasons.",
  },
});

export const letterNumbersLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-1-letter-numbers-core",
  title: "Expressions Using Letter-Numbers",
  domainTitle: "Algebra",
  prerequisites: ["ncert-g7-ganita-prakash-1-peek-beyond-the-point-core"],
  nextConceptIds: ["ncert-g7-ganita-prakash-1-parallel-intersecting-core"],
  content: {
    objective: "Write an expression with a letter for an unknown and substitute a value to evaluate it.",
    wonder: {
      prompt: "A packet costs ₹n and you buy 3 packets plus a ₹10 bag. How can one short expression describe many possible prices?",
    },
    explore: {
      text: "A letter is a polite placeholder for a number that can change. Writing an expression captures a story. Substituting replaces the letter with a value and evaluates.",
      activity: {
        prompt: "If a notebook costs ₹x and you buy 4, which expression fits?",
        choices: [
          {
            id: "fourx",
            label: "4x (or 4 × x)",
            note: "Four times the unknown price.",
          },
          {
            id: "x4",
            label: "x + 4 always, even when each notebook costs x",
            note: "Adding 4 is not four copies of the price.",
          },
          {
            id: "forty",
            label: "40, with no letter, for every possible price",
            note: "A fixed number cannot flex with x.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Letter-numbers let one expression stand for many situations.",
        "Writing an expression means translating words into operations with a letter.",
        "Substitution means replacing the letter with a known number, then evaluating with order of operations.",
        "Different letters can mark different unknowns, but one clear letter is enough for many Grade 7 stories.",
        "Checking by substituting builds trust: the expression should match the story for more than one value.",
      ],
    },
    examples: [
      {
        caption: "Write",
        body: "3 more than n is n + 3.",
      },
      {
        caption: "Substitute",
        body: "If n = 5, then n + 3 = 8.",
      },
      {
        caption: "Story",
        body: "Perimeter of a square side s is 4s.",
      },
    ],
    connection: "Mobile plans, recipe multipliers, and sports scores often hide letter-number stories.",
    try: {
      prompt: "Write an expression for “5 less than twice a number y.” Then evaluate when y = 6.",
      reveal: "2y − 5; when y = 6, 12 − 5 = 7.",
    },
    practice: [
      q(
        "g7m-le-p1",
        "Which statement best matches letter-number thinking?",
        "A letter stands for a number; substitute to evaluate an expression for a chosen value",
        "A letter is only a decoration and never takes a value",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: A letter stands for a number; substitute to evaluate an expression for a chosen value",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-le-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "If the expression is 4x and x = 7, then the value is 28",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “If the expression is 4x and x = 7, then the value is 28” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-le-p3",
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
        "g7m-le-r1",
        "In your own words, explain why this matters: A letter stands for a number; substitute to evaluate an expression for a chosen value",
        "It matters because A letter stands for a number; substitute to evaluate an expression for a chosen value. A supporting detail is: If the expression is 4x and x = 7, then the value is 28.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-le-r2",
        "A classmate claims: “A letter is only a decoration and never takes a value.” What is the better reply?",
        "Point to evidence: If the expression is 4x and x = 7, then the value is 28",
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
        "g7m-le-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "A letter stands for a number; substitute to evaluate an expression for a chosen value",
        "A letter is only a decoration and never takes a value",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: A letter stands for a number; substitute to evaluate an expression for a chosen value",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-le-t2",
        "Write one or two sentences that write an expression with a letter and substitute one value.",
        ["A letter stands", "If the expression", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-le-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that A letter stands for a number; substitute to evaluate an expression for a chosen value. One proof is If the expression is 4x and x = 7, then the value is 28.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "You cannot evaluate until the letter is erased forever.",
        correction: "Substitution temporarily gives the letter a value.",
      },
      {
        idea: "2x always means 2 + x.",
        correction: "2x means 2 times x.",
      },
    ],
    reflect: {
      prompt: "What everyday cost could you describe with a letter expression this week?",
      keyIdeas: ["letter", "expression", "substitute"],
    },
    teach: {
      prompt: "Teach writing and substituting with the story “3 packets at ₹n plus ₹10.”",
      keyIdeas: ["write", "substitute", "story"],
    },
    masteryCriteria: "You can write an expression with a letter and substitute a value to evaluate it.",
  },
});

export const parallelIntersectingLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-1-parallel-intersecting-core",
  title: "Parallel and Intersecting Lines",
  domainTitle: "Geometry",
  prerequisites: ["ncert-g7-ganita-prakash-1-letter-numbers-core"],
  nextConceptIds: ["ncert-g7-ganita-prakash-1-number-play-core"],
  content: {
    objective: "Spot parallel lines and name angle relationships formed when lines intersect or a transversal crosses parallels.",
    wonder: {
      prompt: "Railway tracks look parallel — they never meet on the ground. What angle stories appear when a road cuts across them?",
    },
    explore: {
      text: "Parallel lines never meet and stay the same distance apart. Intersecting lines cross and form angles. A transversal creates special angle pairs with parallels.",
      activity: {
        prompt: "Which pair of lines is parallel?",
        choices: [
          {
            id: "never",
            label: "Lines that never meet and stay equally apart",
            note: "That is the parallel idea.",
          },
          {
            id: "cross",
            label: "Lines that cross at one point",
            note: "Those intersect.",
          },
          {
            id: "curve",
            label: "Any two curved paths on a page",
            note: "This chapter focuses on straight lines.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Parallel lines run side by side without meeting.",
        "Intersecting lines meet at a point and form angles at the crossing.",
        "Vertically opposite angles at a crossing are equal; adjacent angles on a straight line add to 180°.",
        "When a transversal cuts parallel lines, corresponding and alternate angles form matching relationships.",
        "Naming the relationship is as important as measuring — it explains why an unknown angle must be a certain size.",
      ],
    },
    examples: [
      {
        caption: "Parallel",
        body: "Opposite edges of a ruled notebook page look parallel.",
      },
      {
        caption: "Intersect",
        body: "The letter X shows intersecting lines and vertically opposite angles.",
      },
      {
        caption: "Transversal",
        body: "A road crossing two parallel tracks creates matching angle pairs.",
      },
    ],
    connection: "Maps, window frames, and zebra crossings are full of parallel and intersecting stories.",
    try: {
      prompt: "Sketch two parallel lines cut by a transversal. Mark one pair of angles you believe are equal and say why.",
      reveal: "Corresponding or alternate interior angles are equal when lines are parallel.",
    },
    practice: [
      q(
        "g7m-pi-p1",
        "Which statement best matches parallel and intersecting thinking?",
        "Parallel lines never meet; intersecting lines form angles you can name and relate",
        "Parallel lines eventually meet if you draw them long enough on the page",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Parallel lines never meet; intersecting lines form angles you can name and relate",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-pi-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "A transversal across parallels creates equal corresponding angles",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “A transversal across parallels creates equal corresponding angles” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-pi-p3",
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
        "g7m-pi-r1",
        "In your own words, explain why this matters: Parallel lines never meet; intersecting lines form angles you can name and relate",
        "It matters because Parallel lines never meet; intersecting lines form angles you can name and relate. A supporting detail is: A transversal across parallels creates equal corresponding angles.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-pi-r2",
        "A classmate claims: “Parallel lines eventually meet if you draw them long enough on the page.” What is the better reply?",
        "Point to evidence: A transversal across parallels creates equal corresponding angles",
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
        "g7m-pi-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Parallel lines never meet; intersecting lines form angles you can name and relate",
        "Parallel lines eventually meet if you draw them long enough on the page",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Parallel lines never meet; intersecting lines form angles you can name and relate",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-pi-t2",
        "Write one or two sentences that explain the difference between parallel and intersecting lines.",
        ["Parallel lines never", "A transversal across", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-pi-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Parallel lines never meet; intersecting lines form angles you can name and relate. One proof is A transversal across parallels creates equal corresponding angles.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Parallel lines meet if extended far enough on paper.",
        correction: "In plane geometry, parallel lines never meet.",
      },
      {
        idea: "Any equal-looking angles prove lines are parallel without a reason.",
        correction: "Use a named relationship, such as corresponding angles with a transversal.",
      },
    ],
    reflect: {
      prompt: "Where do you see parallel lines in your school building? What cuts across them?",
      keyIdeas: ["parallel", "intersect", "angle"],
    },
    teach: {
      prompt: "Teach parallel versus intersecting using tracks and a crossing road.",
      keyIdeas: ["never meet", "crossing angles", "transversal"],
    },
    masteryCriteria: "You can spot parallel lines and name key intersecting or transversal angle relationships.",
  },
});

export const numberPlayLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-1-number-play-core",
  title: "Number Play",
  domainTitle: "Number",
  prerequisites: ["ncert-g7-ganita-prakash-1-parallel-intersecting-core"],
  nextConceptIds: ["ncert-g7-ganita-prakash-1-three-intersecting-lines-core"],
  content: {
    objective: "Describe a number pattern or property and justify why a step or claim works.",
    wonder: {
      prompt: "Odd + odd is even — is that luck, or can you justify it every time with a clear reason?",
    },
    explore: {
      text: "Number play invites patterns, parity, and properties. Describing a pattern names the rule. Justifying a step means giving a reason another mathematician can check.",
      activity: {
        prompt: "What best justifies “odd + odd = even”?",
        choices: [
          {
            id: "pair",
            label: "Each odd is even-plus-one; the two extras make an even pair",
            note: "A reason that works for every odd pair.",
          },
          {
            id: "once",
            label: "It worked once for 3 + 5, so it always works with no reason",
            note: "One example is not a general justification.",
          },
          {
            id: "never",
            label: "Number claims never need reasons",
            note: "Justification is the heart of number play.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Number play explores patterns and properties with curiosity and proof-minded talk.",
        "Describing a pattern means stating the rule in words or with a small example sequence.",
        "A property is a claim about numbers — even/odd, divisibility, or a digit habit.",
        "Justifying a step means saying why it must be true, not only showing one lucky case.",
        "Counter-thinking helps too: if a claim fails once, it is not always true.",
      ],
    },
    examples: [
      {
        caption: "Pattern",
        body: "2, 5, 8, 11… adds 3 each time.",
      },
      {
        caption: "Property",
        body: "Even + even = even.",
      },
      {
        caption: "Justify",
        body: "Even means 2×something; sum of two evens is 2×(sum of somethings).",
      },
    ],
    connection: "Calendar puzzles, cricket run rates, and divisibility tricks all reward justified number play.",
    try: {
      prompt: "Describe the pattern 1, 4, 9, 16… Then justify why the next term should be 25.",
      reveal: "Square numbers: 1², 2², 3², 4²… so next is 5² = 25.",
    },
    practice: [
      q(
        "g7m-np-p1",
        "Which statement best matches number-play thinking?",
        "Describe a number pattern or property and justify a step with a clear reason",
        "One lucky example is always enough justification for every case",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Describe a number pattern or property and justify a step with a clear reason",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-np-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "Odd + odd is even because two leftover ones make an even pair",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “Odd + odd is even because two leftover ones make an even pair” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-np-p3",
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
        "g7m-np-r1",
        "In your own words, explain why this matters: Describe a number pattern or property and justify a step with a clear reason",
        "It matters because Describe a number pattern or property and justify a step with a clear reason. A supporting detail is: Odd + odd is even because two leftover ones make an even pair.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-np-r2",
        "A classmate claims: “One lucky example is always enough justification for every case.” What is the better reply?",
        "Point to evidence: Odd + odd is even because two leftover ones make an even pair",
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
        "g7m-np-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Describe a number pattern or property and justify a step with a clear reason",
        "One lucky example is always enough justification for every case",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Describe a number pattern or property and justify a step with a clear reason",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-np-t2",
        "Write one or two sentences that justify a simple number property with a reason.",
        ["Describe a number", "Odd + odd", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-np-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Describe a number pattern or property and justify a step with a clear reason. One proof is Odd + odd is even because two leftover ones make an even pair.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "A single numerical example proves a property for all numbers.",
        correction: "Examples support; a general reason justifies.",
      },
      {
        idea: "Patterns never need words — only the next blank.",
        correction: "Naming the rule is part of describing the pattern.",
      },
    ],
    reflect: {
      prompt: "Which number claim have you believed without a reason? How would you justify it now?",
      keyIdeas: ["pattern", "property", "justify"],
    },
    teach: {
      prompt: "Teach a classmate how to justify odd + odd = even.",
      keyIdeas: ["odd", "even", "reason"],
    },
    masteryCriteria: "You can describe a number pattern or property and justify a step clearly.",
  },
});

export const threeIntersectingLinesLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-1-three-intersecting-lines-core",
  title: "A Tale of Three Intersecting Lines",
  domainTitle: "Geometry",
  prerequisites: ["ncert-g7-ganita-prakash-1-number-play-core"],
  nextConceptIds: ["ncert-g7-ganita-prakash-1-working-with-fractions-core"],
  content: {
    objective: "Spot a triangle formed by three lines and use angle facts inside a triangle.",
    wonder: {
      prompt: "Three straight roads cross a field. When do they enclose a triangular plot — and what must be true of its angles?",
    },
    explore: {
      text: "Three lines can form a triangle when they bound a three-sided region. Interior angles of a triangle add to 180°. That fact unlocks unknown angles.",
      activity: {
        prompt: "What must be true for three lines to form a triangle?",
        choices: [
          {
            id: "enclose",
            label: "They enclose a three-sided region with three vertices",
            note: "That is the triangle story.",
          },
          {
            id: "parallel",
            label: "All three are parallel so they never meet",
            note: "Parallel triples do not enclose a triangle.",
          },
          {
            id: "four",
            label: "They must form four sides",
            note: "A triangle has three sides.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A triangle is a closed shape with three straight sides and three angles.",
        "Three intersecting lines can create triangular regions when they meet in a way that closes three sides.",
        "The sum of interior angles in any triangle is 180°.",
        "If two angles are known, the third is 180° minus their sum.",
        "Angle facts turn a sketch into a calculation you can trust.",
      ],
    },
    examples: [
      {
        caption: "Spot",
        body: "Three sides meeting at three vertices mark a triangle.",
      },
      {
        caption: "Angle sum",
        body: "If two angles are 40° and 60°, the third is 80°.",
      },
      {
        caption: "Check",
        body: "40 + 60 + 80 = 180.",
      },
    ],
    connection: "Roof trusses, road islands, and set squares all rely on triangle angle facts.",
    try: {
      prompt: "A triangle has angles 55° and 70°. Find the third angle and show the sum check.",
      reveal: "Third angle = 180 − 125 = 55°. Check: 55 + 70 + 55 = 180.",
    },
    practice: [
      q(
        "g7m-ti-p1",
        "Which statement best matches triangle thinking in this chapter?",
        "Three lines can form a triangle whose interior angles add to 180°",
        "Triangle angles can add to any total you like",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Three lines can form a triangle whose interior angles add to 180°",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-ti-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "If two angles are 40° and 60°, the third must be 80°",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “If two angles are 40° and 60°, the third must be 80°” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-ti-p3",
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
        "g7m-ti-r1",
        "In your own words, explain why this matters: Three lines can form a triangle whose interior angles add to 180°",
        "It matters because Three lines can form a triangle whose interior angles add to 180°. A supporting detail is: If two angles are 40° and 60°, the third must be 80°.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-ti-r2",
        "A classmate claims: “Triangle angles can add to any total you like.” What is the better reply?",
        "Point to evidence: If two angles are 40° and 60°, the third must be 80°",
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
        "g7m-ti-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Three lines can form a triangle whose interior angles add to 180°",
        "Triangle angles can add to any total you like",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Three lines can form a triangle whose interior angles add to 180°",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-ti-t2",
        "Write one or two sentences that explain how to find a missing triangle angle.",
        ["Three lines can", "If two angles", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-ti-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Three lines can form a triangle whose interior angles add to 180°. One proof is If two angles are 40° and 60°, the third must be 80°.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Any three lines always form exactly one triangle.",
        correction: "Arrangement matters — parallels may form none.",
      },
      {
        idea: "Angle sum is 360° like a full turn around a point.",
        correction: "Interior angles of a triangle sum to 180°.",
      },
    ],
    reflect: {
      prompt: "Where do triangular shapes carry loads or mark spaces around you?",
      keyIdeas: ["triangle", "180", "angle"],
    },
    teach: {
      prompt: "Teach the triangle angle sum with one numerical example.",
      keyIdeas: ["three sides", "180°", "missing angle"],
    },
    masteryCriteria: "You can spot a triangle from three lines and find a missing angle using the 180° sum.",
  },
});

export const workingWithFractionsLesson = grade7MathLesson({
  conceptId: "ncert-g7-ganita-prakash-1-working-with-fractions-core",
  title: "Working with Fractions",
  domainTitle: "Number",
  prerequisites: ["ncert-g7-ganita-prakash-1-three-intersecting-lines-core"],
  nextConceptIds: ["ncert-g7-ganita-prakash-2-geometric-twins-core"],
  content: {
    objective: "Add unlike fractions with a common denominator and multiply simple fractions with meaning.",
    wonder: {
      prompt: "You bike 1/3 of a path in the morning and 1/4 in the evening. How much of the path is done — and why can’t you just add 1+1 over 3+4?",
    },
    explore: {
      text: "Unlike fractions need a shared whole-size (common denominator) before adding. Multiplying fractions means “a part of a part,” so numerators multiply and denominators multiply.",
      activity: {
        prompt: "What is the key idea when adding 1/3 + 1/4?",
        choices: [
          {
            id: "common",
            label: "Rewrite with a common denominator, then add numerators",
            note: "Twelfths make the wholes match.",
          },
          {
            id: "add-both",
            label: "Add numerators and denominators separately: 2/7",
            note: "That changes the size of the whole.",
          },
          {
            id: "ignore",
            label: "Ignore denominators because fractions are approximate",
            note: "Denominators name the equal parts.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Unlike fractions cut the whole into different-sized pieces.",
        "A common denominator rewrites both fractions with equal-sized pieces so addition makes sense.",
        "1/3 + 1/4 = 4/12 + 3/12 = 7/12.",
        "Multiplying fractions takes a part of a part: 1/2 × 1/3 = 1/6.",
        "Meaning first — then the multiply-across algorithm feels honest, not magical.",
      ],
    },
    examples: [
      {
        caption: "Add unlike",
        body: "1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3.",
      },
      {
        caption: "Multiply",
        body: "2/3 × 3/4 = 6/12 = 1/2.",
      },
      {
        caption: "Picture",
        body: "Half of a third of a bar is one-sixth of the bar.",
      },
    ],
    connection: "Recipes, shared chocolate bars, and cricket over fractions all need unlike addition and simple products.",
    try: {
      prompt: "Compute 1/3 + 1/6 and 1/2 × 2/5. Say what each answer means in words.",
      reveal: "1/3 + 1/6 = 1/2 of the whole. 1/2 × 2/5 = 1/5 of the whole.",
    },
    practice: [
      q(
        "g7m-fr-p1",
        "Which statement best matches working with fractions?",
        "Add unlike fractions with a common denominator; multiply as a part of a part",
        "Add unlike fractions by adding numerators and denominators separately",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Add unlike fractions with a common denominator; multiply as a part of a part",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g7m-fr-p2",
        "Which detail best supports careful Grade 7 reasoning here?",
        "1/3 + 1/4 becomes 4/12 + 3/12 = 7/12",
        "Ignore place value, signs, and structure",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “1/3 + 1/4 becomes 4/12 + 3/12 = 7/12” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and place value matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7m-fr-p3",
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
        "g7m-fr-r1",
        "In your own words, explain why this matters: Add unlike fractions with a common denominator; multiply as a part of a part",
        "It matters because Add unlike fractions with a common denominator; multiply as a part of a part. A supporting detail is: 1/3 + 1/4 becomes 4/12 + 3/12 = 7/12.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g7m-fr-r2",
        "A classmate claims: “Add unlike fractions by adding numerators and denominators separately.” What is the better reply?",
        "Point to evidence: 1/3 + 1/4 becomes 4/12 + 3/12 = 7/12",
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
        "g7m-fr-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Add unlike fractions with a common denominator; multiply as a part of a part",
        "Add unlike fractions by adding numerators and denominators separately",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Add unlike fractions with a common denominator; multiply as a part of a part",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7m-fr-t2",
        "Write one or two sentences that explain how to add two unlike fractions.",
        ["Add unlike fractions", "1/3 + 1/4", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7m-fr-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Add unlike fractions with a common denominator; multiply as a part of a part. One proof is 1/3 + 1/4 becomes 4/12 + 3/12 = 7/12.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Add numerators and denominators separately for unlike fractions.",
        correction: "Use a common denominator, then add numerators only.",
      },
      {
        idea: "Multiplying fractions always makes a larger answer.",
        correction: "A proper fraction times a proper fraction is smaller than either factor.",
      },
    ],
    reflect: {
      prompt: "When do you split something into thirds and fourths in real life?",
      keyIdeas: ["unlike", "common denominator", "multiply"],
    },
    teach: {
      prompt: "Teach adding 1/3 + 1/4 with twelfths drawn or described.",
      keyIdeas: ["common denominator", "add numerators", "meaning"],
    },
    masteryCriteria: "You can add unlike fractions with a common denominator and multiply simple fractions with meaning.",
  },
});
