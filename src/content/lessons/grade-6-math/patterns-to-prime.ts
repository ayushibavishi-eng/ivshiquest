import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade6MathLesson } from "@/content/lessons/grade-6-math/format";

export const patternsInMathematicsLesson = grade6MathLesson({
  conceptId: "ncert-g6-ganita-prakash-patterns-in-mathematics-core",
  title: "Patterns in Mathematics",
  domainTitle: "Patterns",
  prerequisites: [],
  nextConceptIds: ["ncert-g6-ganita-prakash-lines-and-angles-core"],
  content: {
    objective:
      "Spot growing patterns, name a rule, and use a letter lightly so you can predict the next term and test a claim.",
    wonder: {
      prompt:
        "A rangoli border grows like this: 3 dots, then 5, then 7, then 9… What might the 10th border look like, and how can a short rule save you from drawing every step?",
    },
    explore: {
      text: "Patterns hide in bead strings, stair steps, and number tables. A rule says what jumps from one term to the next — add 2, double, or follow a shape count. A letter can stand for an unknown step number so the same rule works for many places in the line. A counter-example is a single case that shows a claim is not always true.",
      activity: {
        prompt: "The sequence 4, 7, 10, 13… follows which friendly rule?",
        choices: [
          {
            id: "add-three",
            label: "Add 3 each time",
            note: "Each term climbs by three: 4→7→10→13. The jump stays steady.",
          },
          {
            id: "double",
            label: "Double each time",
            note: "Doubling would jump much faster — 4 to 8, not 4 to 7.",
          },
          {
            id: "add-one",
            label: "Add 1 each time",
            note: "Adding one would inch along: 4, 5, 6… These jumps are larger.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A growing pattern changes in a steady way. Look at the jump between neighbours before you guess the far-away term. Shape patterns often grow by adding the same piece each time — an extra side, an extra bead, an extra square.",
        "An input–output rule pairs a step number with a value. If step 1 gives 5 and each step adds 4, then step n can be thought of as 5 + 4×(n−1), or a simpler letter story once you settle the starting point.",
        "A letter is a polite placeholder. If a bead row has 2n + 1 beads at step n, you can evaluate the expression when n is 3: 2×3 + 1 = 7. The letter waits; the rule does the work.",
        "Logical steps beat lucky guesses: name the jump, write the rule, check it on two known terms, then predict. If someone claims “every odd number is prime,” one counter-example (like 9) shows the claim does not always hold.",
        "Patterns invite curiosity more than speed. Predicting the 20th term with a rule is kinder than drawing twenty diagrams — and you can still sketch a few to feel the growth.",
      ],
    },
    examples: [
      {
        caption: "Steady jump",
        body: "2, 5, 8, 11… adds 3 each time. The fifth term is 14.",
      },
      {
        caption: "Letter for a step",
        body: "If a stair needs 3n sticks at step n, then at n = 4 it needs 12 sticks.",
      },
      {
        caption: "Counter-example",
        body: "“All multiples of 3 end with 3” fails at 6 — one clear counter-example.",
      },
    ],
    connection:
      "Rangoli borders, seating rows in an assembly, and tile borders around a classroom floor all grow by rules you can name.",
    try: {
      prompt:
        "A number machine turns 1 into 4, 2 into 7, and 3 into 10. Predict the output for 5 and say the rule in words or with a letter.",
      reveal:
        "The outputs climb by 3 each time, starting near 4 when the input is 1. A friendly rule is “3n + 1”: for n = 5 you get 16.",
    },
    practice: [
      q(
        "g6m-pat-p1",
        "What is the next term in 6, 11, 16, 21…?",
        "26",
        "22",
        "31",
        "a",
        "Each term adds 5. After 21 comes 26.",
        "What is the jump from 6 to 11?",
        "Adding 1 would inch along; this jump is five.",
        {
          a: "You kept the steady +5 jump.",
          b: "That would be nearly the same number — the jump is larger.",
          c: "Jumping by 10 skips the pattern’s actual step.",
        },
      ),
      q(
        "g6m-pat-p2",
        "A pattern uses the rule 2n + 3. What value do you get when n = 4?",
        "11",
        "8",
        "24",
        "a",
        "2×4 + 3 = 8 + 3 = 11.",
        "Replace n with 4, then multiply before you add.",
        "Multiplying 2 by 3 first mixes the rule’s order.",
        {
          a: "You evaluated the expression in order.",
          b: "That looks like 2×4 alone, without adding 3.",
          c: "2×4×3 would be a different story than 2n + 3.",
        },
      ),
      writeQ(
        "g6m-pat-p3",
        "Write the next two numbers in the pattern 5, 9, 13, 17… (comma between them).",
        ["21, 25", "21,25", "21 25"],
        "The jump is +4, so after 17 come 21 and 25.",
        "How much does each term grow?",
        "Adding 2 would grow too slowly for this line.",
      ),
    ],
    reasoning: [
      explainQ(
        "g6m-pat-r1",
        "A friend says the pattern 3, 6, 12, 24… always adds 3. Explain why that claim does not fit, and name a better rule.",
        "The jumps are 3, then 6, then 12 — they double, not stay at +3. A better rule is “each term is twice the one before,” or multiply by 2 each time.",
        "Compare the gaps between neighbours, not only the first gap.",
        "One early gap does not lock the whole pattern.",
        ["double|twice|multiply|×2|times 2", "gap|jump|add 3|not"],
      ),
      q(
        "g6m-pat-r2",
        "Which move best tests the claim “every even number greater than 2 is composite”?",
        "Try a few even numbers and see that each has a factor other than 1 and itself",
        "Ignore even numbers and only check odds",
        "Assume the claim is true because 4 works",
        "a",
        "Checking several even cases builds confidence; a single example is not enough to prove “every.”",
        "What would convince you the claim holds for more than one number?",
        "One friendly example does not settle an “every” claim alone.",
        {
          a: "You looked for a pattern of factors across cases.",
          b: "The claim is about even numbers, so odds sit outside the test.",
          c: "4 works, yet “every” asks for a wider check or a clear reason.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6m-pat-t1",
        "In the shape pattern “add 2 squares each step,” step 1 has 3 squares. How many squares at step 3?",
        "7",
        "5",
        "9",
        "a",
        "Step 1: 3. Step 2: 5. Step 3: 7.",
        "Add 2 twice after the starting 3.",
        "Stopping after one add leaves you at step 2.",
        {
          a: "You applied the +2 jump twice.",
          b: "That is only one jump from the start.",
          c: "Adding 2 three times from 3 would overshoot step 3.",
        },
      ),
      writeQ(
        "g6m-pat-t2",
        "A machine follows “output = n + 6.” What is the output when the input n is 9?",
        ["15"],
        "9 + 6 = 15.",
        "Replace n with 9 and add.",
        "Multiplying would change the rule.",
      ),
      explainQ(
        "g6m-pat-t3",
        "Why can a letter help when you want the 50th term of a +4 pattern without listing every term?",
        "A letter stands for the step number so one short expression captures the rule. You plug in 50 once instead of writing forty-nine jumps by hand.",
        "Think about what you would rather evaluate once than list fifty times.",
        "Listing every term works but grows slow for large steps.",
        ["letter|n|expression|rule", "50|plug|evaluate|without listing"],
      ),
    ],
    misconceptions: [
      {
        idea: "The first jump in a sequence is always the rule forever.",
        correction:
          "Check two or three gaps. Some patterns change the jump (like doubling) even if the first gap looks simple.",
      },
      {
        idea: "A letter in a pattern rule is a secret code you cannot evaluate.",
        correction:
          "A letter is a placeholder. When you know the step, replace the letter and compute.",
      },
    ],
    reflect: {
      prompt:
        "Where have you noticed a growing pattern this week — in art, games, seating, or numbers — and what jump did you spot?",
      keyIdeas: ["pattern|rule|jump|grow|letter|step"],
    },
    mastery: q(
      "g6m-pat-m1",
      "The rule is 4n − 1. Which statement fits best?",
      "When n = 5 the value is 19, because 4×5 − 1 = 19",
      "When n = 5 the value is 20, because you ignore the −1",
      "When n = 5 the value is 4, because letters cancel numbers",
      "a",
      "Replace n with 5: 20 − 1 = 19.",
      "Multiply first, then subtract.",
      "Skipping the −1 changes the rule.",
      {
        a: "You evaluated 4n − 1 carefully.",
        b: "The −1 is part of the rule’s story.",
        c: "Letters do not erase the numbers beside them.",
      },
    ),
    masteryCriteria:
      "You can name a pattern rule, predict a later term, evaluate a simple letter expression, and spot when a claim needs a counter-example.",
    teach: {
      prompt:
        "Teach Ivshi the pattern 1, 4, 7, 10… Say the jump, predict the sixth term, and show a letter rule that fits.",
      keyIdeas: [
        "add 3|+3|jump 3",
        "16|sixth",
        "3n|3n−2|n",
      ],
    },
  },
});

export const linesAndAnglesLesson = grade6MathLesson({
  conceptId: "ncert-g6-ganita-prakash-lines-and-angles-core",
  title: "Lines and Angles",
  domainTitle: "Geometry",
  prerequisites: ["ncert-g6-ganita-prakash-patterns-in-mathematics-core"],
  nextConceptIds: ["ncert-g6-ganita-prakash-number-play-core"],
  content: {
    objective:
      "Name lines, rays, and angles; compare openness with a right angle; and talk about crossings and triangle corners with clear language.",
    wonder: {
      prompt:
        "Two roads cross like an X on a map. How many angles appear at the meeting point, and which ones feel as open as a square’s corner?",
    },
    explore: {
      text: "A line runs both ways without end. A ray starts at a point and travels one way. An angle is the opening between two rays that share an endpoint. A right angle matches a square corner; acute is sharper, obtuse is more open. When lines intersect they create meeting angles you can compare by eye before you measure.",
      activity: {
        prompt: "Which picture idea matches a ray?",
        choices: [
          {
            id: "sunbeam",
            label: "A sunbeam starting at the sun and going outward",
            note: "A ray has a starting point and one direction — like light leaving the sun.",
          },
          {
            id: "both-ways",
            label: "A straight path that never begins and never ends either way",
            note: "That is a full line — arrows both ways, no starting point.",
          },
          {
            id: "segment-only",
            label: "A stick with two clear endpoints and nothing beyond",
            note: "That is a line segment — it stops at both ends.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Point, line, ray, and segment are different tools. Points mark places; segments connect two ends; rays keep going one way; lines keep going both ways. Naming them carefully stops mix-ups when you talk about drawings.",
        "An angle’s size is about openness, not how long you draw the arms. Stretching the rays does not change the angle. Compare to a right angle: smaller openings are acute; larger (but less than a straight turn) are obtuse.",
        "Intersecting lines meet at a point. Opposite angles at a crossing match in openness; neighbouring angles on a straight line can make a straight turn together.",
        "Triangle corners can be sorted by the same language: right, acute, or obtuse. The three angles of a triangle fit together like a straight turn — their openings add up to that flat half-turn story.",
        "Geometry talk grows precise when you point to the vertex (the shared endpoint) and the two arms. Measuring later becomes easier once the names feel natural.",
      ],
    },
    examples: [
      {
        caption: "Right guide",
        body: "A book corner is a handy right-angle guide. An angle that fits inside it is acute.",
      },
      {
        caption: "Crossing roads",
        body: "When two straight roads cross, four angles appear. Facing angles share the same openness.",
      },
      {
        caption: "Triangle sum idea",
        body: "If two corners of a triangle are 40° and 60°, the third opening is 80° because the three make a straight turn.",
      },
    ],
    connection:
      "Door swings, road junctions, kite frames, and the corners of a notebook all invite line-and-angle language.",
    try: {
      prompt:
        "Sketch (or imagine) a ray from your desk lamp across the room. Mark one acute angle and one obtuse angle near a table corner using the right-angle feel of the corner.",
      reveal:
        "The lamp beam is ray-like. Angles sharper than the table’s square corner are acute; more open ones (still less than a flat line) are obtuse.",
    },
    practice: [
      q(
        "g6m-la-p1",
        "Which figure has exactly one endpoint and goes on forever in one direction?",
        "A ray",
        "A line segment",
        "A full line",
        "a",
        "A ray starts and travels one way forever.",
        "Count endpoints and directions.",
        "A segment stops at both ends; a line has none.",
        {
          a: "You matched the ray definition.",
          b: "A segment has two endpoints.",
          c: "A line extends both ways with no endpoint.",
        },
      ),
      q(
        "g6m-la-p2",
        "An angle that is more open than a right angle but less open than a straight turn is…",
        "obtuse",
        "acute",
        "a full turn",
        "a",
        "Obtuse sits between right and straight.",
        "Compare the opening to a square corner and to a flat line.",
        "Acute is sharper than a right angle.",
        {
          a: "You placed obtuse between right and straight.",
          b: "Acute is the sharper family.",
          c: "A full turn is a complete spin, much larger.",
        },
      ),
      writeQ(
        "g6m-la-p3",
        "A triangle has angles 50° and 60°. What is the third angle in degrees? (number only)",
        ["70", "70°"],
        "50 + 60 = 110, and 180 − 110 = 70 because the three openings make a straight turn.",
        "The three angles add to 180°.",
        "Adding only two angles leaves the third untold.",
      ),
    ],
    reasoning: [
      explainQ(
        "g6m-la-r1",
        "Why does making the arms of an angle longer on paper not make the angle “bigger”?",
        "Angle size is the opening between the arms, not the length of the arms. Longer rays still show the same turn from one arm to the other.",
        "Think of a door opening: a wider swing matters, not a taller door.",
        "Drawing longer lines can look dramatic without changing openness.",
        ["opening|turn|openness", "length|arms|rays|not"],
      ),
      q(
        "g6m-la-r2",
        "Two straight lines cross. What is true about the angles that face each other across the crossing?",
        "They have the same openness",
        "One must be acute and the other obtuse always",
        "They must add to a right angle",
        "a",
        "Vertically opposite angles match. Neighbours on a straight line make a straight turn together.",
        "Picture an X and compare the facing corners.",
        "Facing angles match; they are not forced to be one acute and one obtuse.",
        {
          a: "You used the facing-angles idea.",
          b: "Both facing angles can be acute, or both obtuse, depending on the cross.",
          c: "Facing angles match; they do not have to sum to 90°.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6m-la-t1",
        "Which corner of a triangle is a right angle?",
        "One that matches a square’s corner",
        "Any corner that looks sharp",
        "Only a corner drawn with long sides",
        "a",
        "A right angle matches the openness of a square corner.",
        "Use a book corner as a guide.",
        "Sharpness alone does not name a right angle.",
        {
          a: "You compared to a square corner.",
          b: "Sharp can mean acute — smaller than right.",
          c: "Side length does not set the angle name.",
        },
      ),
      writeQ(
        "g6m-la-t2",
        "Name the figure: two rays sharing an endpoint. (one word)",
        ["angle", "an angle"],
        "Two rays from a common endpoint form an angle.",
        "What do we call that opening?",
        "A line would need to extend both ways through points.",
      ),
      explainQ(
        "g6m-la-t3",
        "How can you tell an acute triangle corner from an obtuse one without a protractor?",
        "Compare each corner to a square’s right angle. If it fits inside the right angle it is acute; if it opens wider than the right angle (but less than straight) it is obtuse.",
        "Borrow a book corner as a right-angle guide.",
        "Guessing from side length is less reliable than comparing openness.",
        ["right|square|book", "acute|smaller|inside", "obtuse|wider|open"],
      ),
    ],
    misconceptions: [
      {
        idea: "Longer rays mean a larger angle.",
        correction:
          "Angle size is openness at the vertex. Arm length is only drawing style.",
      },
      {
        idea: "A ray and a line are the same because both go forever.",
        correction:
          "A ray has a starting point and one direction. A line has no endpoint and two directions.",
      },
    ],
    reflect: {
      prompt:
        "Find one ray-like thing and one angle in your room. How did you decide which was which?",
      keyIdeas: ["ray|line|angle|right|acute|obtuse"],
    },
    mastery: q(
      "g6m-la-m1",
      "To sort a triangle’s corners you should…",
      "compare each corner’s openness to a right angle and remember the three make a straight turn",
      "rank corners by how long the opposite sides look",
      "call every corner acute because triangles look pointy",
      "a",
      "Openness vs a right angle names the type; the sum idea checks consistency.",
      "What guide do you use for right, acute, and obtuse?",
      "Side length and “pointy” looks can mislead.",
      {
        a: "You used openness and the straight-turn sum idea.",
        b: "Side length does not name the angle type by itself.",
        c: "Triangles can hold a right or obtuse corner too.",
      },
    ),
    masteryCriteria:
      "You can tell line, ray, and segment apart, compare angles to a right angle, talk about intersecting lines, and use the triangle angle-sum idea.",
    teach: {
      prompt:
        "Teach Ivshi the difference between a ray and a line, then show how to spot an obtuse angle using a book corner.",
      keyIdeas: [
        "ray|endpoint|one way",
        "line|both ways",
        "obtuse|wider|right",
      ],
    },
  },
});

export const numberPlayLesson = grade6MathLesson({
  conceptId: "ncert-g6-ganita-prakash-number-play-core",
  title: "Number Play",
  domainTitle: "Numbers",
  prerequisites: ["ncert-g6-ganita-prakash-lines-and-angles-core"],
  nextConceptIds: ["ncert-g6-ganita-prakash-data-handling-core"],
  content: {
    objective:
      "Read Indian place value through lakhs, compare and round large numbers, and play confidently with large sums, differences, products, and quotients.",
    wonder: {
      prompt:
        "A school fair collected ₹2,45,680 on Saturday and ₹1,98,450 on Sunday. About how much is that together, and how can place value help before you add every digit?",
    },
    explore: {
      text: "Indian grouping marks thousands and lakhs so large amounts stay readable: 1,00,000 is one lakh. Comparing starts from the left. Rounding and front-end estimation give friendly landmarks. Addition and subtraction keep places lined up; multiplication and division extend the same place discipline with checks.",
      activity: {
        prompt: "Which reading matches 3,07,500?",
        choices: [
          {
            id: "three-lakh",
            label: "Three lakh seven thousand five hundred",
            note: "Indian groups: 3 lakhs, then 07 thousands, then 500.",
          },
          {
            id: "thirty-seven",
            label: "Thirty-seven thousand five hundred",
            note: "That skips the lakh place sitting on the left.",
          },
          {
            id: "three-thousand",
            label: "Three thousand seven hundred fifty",
            note: "That shrinks every place — too small for this board.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Places grow by tens. After thousands come ten thousands and then lakhs in Indian reading. Commas help your eyes find groups on tickets, budgets, and population boards.",
        "Compare from the leftmost place. More digits often win; when lengths match, the first differing place decides. Rounding to a named place looks at the digit to its right.",
        "Front-end estimation keeps leading digits and softens the rest so a sum or product can be checked for sense. A fair crowd estimate should match the story — a classroom is not near a lakh.",
        "Large addition and subtraction need lined-up places, including careful work across zeros. Order and grouping of addends can change the path without changing the sum.",
        "Multiplication can use partial products or a standard method; ×0 and ×1 behave as friendly properties. Division of larger numbers is checked by multiplying quotient and divisor (plus remainder).",
      ],
    },
    examples: [
      {
        caption: "Read the amount",
        body: "4,20,050 is four lakh twenty thousand fifty.",
      },
      {
        caption: "Front-end sense check",
        body: "48,000 + 27,000 is roughly 50,000 + 30,000 = 80,000 — close enough to catch a slipped place.",
      },
      {
        caption: "Check a quotient",
        body: "If 7,245 ÷ 15 looks like 483, check 15 × 483 and see whether it rebuilds 7,245.",
      },
    ],
    connection:
      "School budgets, sports stadium crowds, and distance boards all speak in large Indian-grouped numbers.",
    try: {
      prompt:
        "Estimate 6,48,000 − 2,90,000 by rounding each to the nearest lakh, then say whether your estimate is a little high or low compared with a careful subtraction.",
      reveal:
        "6,48,000 is about 6 lakh; 2,90,000 is about 3 lakh; difference about 3 lakh. Careful work gives 3,58,000, so the estimate is a bit low because 6,48,000 rounded down and 2,90,000 rounded up.",
    },
    practice: [
      q(
        "g6m-np-p1",
        "Which number is greater?",
        "2,09,999",
        "1,99,999",
        "They match because both are packed with 9s",
        "a",
        "Both have 6 digits in Indian grouping, but 2 lakhs beats 1 lakh.",
        "Compare from the lakh place.",
        "Busy 9s do not beat a larger leading place.",
        {
          a: "You compared lakhs first.",
          b: "1,99,999 sits under two lakh.",
          c: "Digit busyness is not the comparison rule.",
        },
      ),
      q(
        "g6m-np-p2",
        "Round 3,46,280 to the nearest thousand.",
        "3,46,000",
        "3,47,000",
        "3,50,000",
        "a",
        "Hundreds digit is 2 (below 5), so 3,46,280 stays near 3,46,000.",
        "Look at the hundreds place to decide nearest thousand.",
        "Nearest ten thousand would look farther left.",
        {
          a: "You used the hundreds digit to stay.",
          b: "Climbing needs a hundreds digit of 5 or more.",
          c: "That looks closer to a ten-thousand landmark.",
        },
      ),
      writeQ(
        "g6m-np-p3",
        "Add: 1,25,600 + 2,40,150. Write the sum with Indian commas if you like.",
        ["365750", "3,65,750", "3 65 750"],
        "Line up places: 1,25,600 + 2,40,150 = 3,65,750.",
        "Add from ones toward lakhs, watching regrouping.",
        "Dropping a place zero changes the total.",
      ),
    ],
    reasoning: [
      explainQ(
        "g6m-np-r1",
        "Why might a front-end estimate of 39 × 21 as 40 × 20 = 800 be useful before multiplying carefully?",
        "It gives a nearby landmark so you can notice if a careful product lands near 800 or far away (a place slip). Friendly leading digits make a quick sense check.",
        "Think about catching a product that is ten times too big.",
        "Estimation is a landmark, not a claim that 800 is the exact product.",
        ["estimate|landmark|sense|check", "40|20|800|front"],
      ),
      q(
        "g6m-np-r2",
        "You compute 5,000 − 2,008. Which habit protects the places?",
        "Line up ones under ones and work carefully across the zeros",
        "Subtract digit-by-digit from the left only",
        "Ignore zeros because they mean nothing",
        "a",
        "Aligned places and care with zeros keep 2,992 as the difference.",
        "Where do the ones of each number sit?",
        "Zeros hold places that still matter in subtraction.",
        {
          a: "You respected place alignment and zeros.",
          b: "Left-only shortcuts can scramble regrouping.",
          c: "Zeros keep the thousands and hundreds in position.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6m-np-t1",
        "What is 2,00,000 + 5,000 + 40 in standard Indian form?",
        "2,05,040",
        "2,50,040",
        "25,040",
        "a",
        "Two lakh, five thousand, and forty compose 2,05,040.",
        "Put zeros in empty places.",
        "Moving the 5 into ten thousands changes the story.",
        {
          a: "You placed each part in its place.",
          b: "That reading shifts five into a higher place.",
          c: "That drops the lakh place.",
        },
      ),
      writeQ(
        "g6m-np-t2",
        "Multiply: 24 × 15. Write the product.",
        ["360"],
        "24 × 15 = 24 × 10 + 24 × 5 = 240 + 120 = 360.",
        "Split 15 into 10 and 5 if it helps.",
        "24 × 10 alone is only a partial product.",
      ),
      explainQ(
        "g6m-np-t3",
        "After dividing 1,248 by 8 you get 156. How can multiplication confirm that quotient?",
        "Multiply 8 × 156. If the product is 1,248 with no leftover, the quotient fits. Checking rebuilds the original total.",
        "Division and multiplication are reverse stories.",
        "A quotient without a check can hide a place slip.",
        ["8|156|multiply|product", "1248|1,248|check"],
      ),
    ],
    misconceptions: [
      {
        idea: "Indian commas can be skipped when comparing large numbers.",
        correction:
          "Grouping shows lakhs and thousands. Comparing from the left still needs clear places.",
      },
      {
        idea: "Zeros in the middle of a number can be dropped in subtraction.",
        correction:
          "Zeros hold places. Crossing them carefully keeps the difference true.",
      },
    ],
    reflect: {
      prompt:
        "Where did you see a number in lakhs or a large total this month, and how did place value help you read it?",
      keyIdeas: ["lakh|place|round|estimate|add|multiply"],
    },
    mastery: q(
      "g6m-np-m1",
      "To compare 4,08,500 and 4,80,050 you should…",
      "see that lakhs match, then compare ten thousands: 0 vs 8",
      "add the digits and pick the larger digit sum",
      "choose the number with more zeros",
      "a",
      "Same 4 lakhs, so ten thousands decide. 4,80,050 has 8 ten thousands.",
      "Walk places from the left after the lakh digit.",
      "Digit sums and zero counts are not the rule.",
      {
        a: "You walked place by place from the left.",
        b: "Digit sums can mislead when small places hold large digits.",
        c: "Zeros mark empty places; they do not automatically win.",
      },
    ),
    masteryCriteria:
      "You can read and compare numbers with lakhs, round or estimate for sense, and carry out large addition, subtraction, multiplication, or division with place care.",
    teach: {
      prompt:
        "Teach Ivshi the number 1,06,040. Say it in Indian words and show one estimate for 1,06,040 + 98,000.",
      keyIdeas: [
        "lakh|one lakh",
        "six thousand|thousand",
        "200000|2,00,000|about two lakh|estimate",
      ],
    },
  },
});

export const dataHandlingLesson = grade6MathLesson({
  conceptId: "ncert-g6-ganita-prakash-data-handling-core",
  title: "Data Handling and Presentation",
  domainTitle: "Data",
  prerequisites: ["ncert-g6-ganita-prakash-number-play-core"],
  nextConceptIds: ["ncert-g6-ganita-prakash-prime-time-core"],
  content: {
    objective:
      "Organise counts in tables and bar graphs, read simple averages as fair shares, and use careful chance language for everyday situations.",
    wonder: {
      prompt:
        "Your class votes on four club choices. The tallies are 8, 5, 12, and 3. How could a bar graph and a fair-share average each tell a different useful story about the same votes?",
    },
    explore: {
      text: "Data starts as raw counts, then finds a home in a table. Bar graphs compare categories by height once you choose a scale. A mean (average) is a fair share of a total. Chance talk uses words like certain, likely, and impossible — and simple fair games have equally likely outcomes.",
      activity: {
        prompt: "Which graph choice best compares favourite fruits in one class?",
        choices: [
          {
            id: "bars",
            label: "A bar graph with one bar per fruit and a clear scale",
            note: "Bars make category heights easy to compare at a glance.",
          },
          {
            id: "one-number",
            label: "Only the average of all fruit votes as a single number",
            note: "An average hides which fruit won; categories need separate bars or a table.",
          },
          {
            id: "no-scale",
            label: "Bars drawn freely with no scale on the side",
            note: "Without a scale, heights cannot be read as honest counts.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A table groups categories and counts so you can total, compare, and spot the mode (most frequent) if you need it. Clean labels stop mix-ups later on a graph.",
        "Bar graphs need a title, category labels, and a scale. Equal bar widths and a scale that fits the largest count keep the picture fair. Reading a bar means matching its height to the scale, not guessing from ink alone.",
        "A simple line graph can show change across ordered points — like temperature across days — where order matters as much as height.",
        "A mean is total ÷ number of values: a fair share if everyone got the same amount. An average story should say what was shared, not only print a number.",
        "Chance language stays honest: certain (must happen), impossible (cannot), likely or unlikely for in-between. In a fair spinner with equal sections, each section has the same simple chance.",
      ],
    },
    examples: [
      {
        caption: "Scale choice",
        body: "Counts up to 40 fit a scale of 5 or 10 per grid step so bars stay readable.",
      },
      {
        caption: "Fair share",
        body: "Scores 6, 8, and 10 total 24. The mean is 24 ÷ 3 = 8 — each would have 8 if shared evenly.",
      },
      {
        caption: "Chance words",
        body: "Drawing a red bead from a bag of only blue beads is impossible; sunrise tomorrow is treated as certain in everyday talk.",
      },
    ],
    connection:
      "Attendance charts, sports scoreboards, weather tables, and classroom votes all ask for clear data stories.",
    try: {
      prompt:
        "Three friends score 12, 15, and 9 points. Find the mean and say one sentence about what that average means for the group.",
      reveal:
        "Total 36; mean 12. If points were shared evenly, each friend would have 12.",
    },
    practice: [
      q(
        "g6m-dh-p1",
        "On a bar graph, a bar reaches the mark labelled 15. What does that usually mean?",
        "That category’s count is 15 on the chosen scale",
        "The bar was drawn 15 centimetres tall for decoration",
        "Every category must also be 15",
        "a",
        "Height is read against the scale to recover the count.",
        "Match the top of the bar to the number line on the side.",
        "Decoration length is not the data rule.",
        {
          a: "You read height with the scale.",
          b: "Centimetres on paper are not the count unless the scale says so.",
          c: "Other bars can show different counts.",
        },
      ),
      q(
        "g6m-dh-p2",
        "Which word fits: rolling a fair six-sided die and getting a number from 1 to 6?",
        "certain",
        "impossible",
        "as unlikely as never rolling",
        "a",
        "One of 1–6 must appear, so the event is certain.",
        "Must it happen, can it happen, or can it never happen?",
        "Impossible would mean no face could show a 1–6 result.",
        {
          a: "You used “certain” for a must-happen event.",
          b: "A number from 1 to 6 is exactly what the die shows.",
          c: "Fair dice are built to show one of those faces.",
        },
      ),
      writeQ(
        "g6m-dh-p3",
        "Find the mean of 4, 10, and 6. Write the number only.",
        ["20/3", "6.666...", "6.67", "6⅔", "6 2/3"],
        "Total 20; three values; mean 20 ÷ 3.",
        "Add first, then divide by how many numbers you have.",
        "The middle number alone is not always the mean.",
      ),
    ],
    reasoning: [
      explainQ(
        "g6m-dh-r1",
        "Why can two classes with the same average quiz score still have very different bar graphs of scores?",
        "An average is one fair-share number. Bars show how many students landed in each score category. One class might cluster near the mean while another spreads wide yet still averages the same.",
        "Think about what a single mean hides.",
        "Same mean does not force the same shape of data.",
        ["average|mean|fair share", "spread|bars|categories|different"],
      ),
      q(
        "g6m-dh-r2",
        "You draw bars for counts 3, 8, and 14. Which scale habit keeps the graph readable?",
        "Choose equal steps that fit 14 without huge empty space or crushed bars",
        "Always use a scale of 1 million so every graph matches",
        "Skip labelling the scale because heights look obvious",
        "a",
        "A scale matched to the data keeps comparisons fair and readable.",
        "What largest count must the scale reach?",
        "A wild scale or a missing scale breaks honest reading.",
        {
          a: "You matched scale to the data’s size.",
          b: "A huge scale would squash these small counts.",
          c: "Labels make heights mean numbers, not guesses.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6m-dh-t1",
        "In a fair spinner with 4 equal colours, the chance of landing on blue is best described as…",
        "one of four equally likely colours",
        "certain every spin",
        "impossible on a fair spinner",
        "a",
        "Equal sections share the chance equally.",
        "How many equal outcomes are there?",
        "One colour among four is neither certain nor impossible.",
        {
          a: "You used equal sections for simple chance.",
          b: "Blue is only one of four faces.",
          c: "Blue can appear; it is not ruled out.",
        },
      ),
      writeQ(
        "g6m-dh-t2",
        "A table shows mango 7, guava 4, banana 9. What is the total number of votes?",
        ["20"],
        "7 + 4 + 9 = 20 votes in all.",
        "Add the category counts.",
        "The largest count alone is not the total.",
      ),
      explainQ(
        "g6m-dh-t3",
        "When would you prefer a line graph over a bar graph for school data?",
        "When the story is change across an ordered time or sequence — like temperature each hour — so connecting points shows the path of change. Bars fit separate categories better than a time path.",
        "Ask whether order-over-time matters more than separate category heights.",
        "Bars compare categories; lines often track change.",
        ["time|ordered|change|line", "category|bar|compare"],
      ),
    ],
    misconceptions: [
      {
        idea: "The tallest bar is always drawn with the most ink, even if the scale is uneven.",
        correction:
          "A fair bar graph uses a steady scale. Uneven steps can trick the eye.",
      },
      {
        idea: "Likely means the same as certain.",
        correction:
          "Certain must happen. Likely means it has a good chance but is not guaranteed.",
      },
    ],
    reflect: {
      prompt:
        "What data from your week could become a table or bar graph, and what question would the graph answer?",
      keyIdeas: ["table|bar|scale|average|likely|data"],
    },
    mastery: q(
      "g6m-dh-m1",
      "Scores 5, 7, 9, 3 have mean 6. What does 6 mean in the story?",
      "If the four scores were shared evenly, each would be 6",
      "Every score must already be 6",
      "6 is only the largest score",
      "a",
      "Mean is the fair-share value of the total 24 across four scores.",
      "Fair share language explains an average.",
      "The mean need not equal every data value.",
      {
        a: "You explained mean as fair share.",
        b: "Values can sit above and below the mean.",
        c: "The largest here is 9, not 6.",
      },
    ),
    masteryCriteria:
      "You can read or plan a table and bar graph, explain a mean as a fair share, and use certain/likely/impossible language for simple chance.",
    teach: {
      prompt:
        "Teach Ivshi how to turn votes 5, 8, and 3 into a bar graph idea and how to find their mean.",
      keyIdeas: [
        "scale|bars|categories",
        "16|total",
        "mean|average|16÷3|fair share",
      ],
    },
  },
});

export const primeTimeLesson = grade6MathLesson({
  conceptId: "ncert-g6-ganita-prakash-prime-time-core",
  title: "Prime Time",
  domainTitle: "Factors",
  prerequisites: ["ncert-g6-ganita-prakash-data-handling-core"],
  nextConceptIds: ["ncert-g6-ganita-prakash-perimeter-and-area-core"],
  content: {
    objective:
      "Find factors and primes, use divisibility tests, and work with HCF and LCM so number breakups feel useful in packing and timing stories.",
    wonder: {
      prompt:
        "You have 36 stickers to pack into equal bags with none left over. Which bag sizes work, and how is that related to calling some numbers prime?",
    },
    explore: {
      text: "A factor divides a number with no leftover. Factor pairs rebuild the total. Primes have exactly two distinct factors: 1 and themselves. The number 1 is special — only one factor — so it is not called prime. Divisibility tests (last digits, digit sums) speed the hunt. HCF is the greatest shared factor; LCM is the least shared multiple.",
      activity: {
        prompt: "Which number is prime?",
        choices: [
          {
            id: "thirteen",
            label: "13",
            note: "13’s only factors are 1 and 13 — a classic prime.",
          },
          {
            id: "fifteen",
            label: "15",
            note: "15 = 3 × 5, so it has more factors than a prime allows.",
          },
          {
            id: "one",
            label: "1",
            note: "1 has only one factor. It is special, not prime.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "List factors by testing divisors up to the number, or by writing factor pairs that multiply back to the total. Every whole number greater than 1 is either prime or composite (more than two factors).",
        "Why 1 is special: it does not have two distinct factors, so the prime definition leaves it out on purpose. That keeps unique factorisations tidy later.",
        "Divisibility shortcuts: a number is divisible by 2 if it ends in an even digit; by 5 if it ends in 0 or 5; by 10 if it ends in 0. Digit sums test 3 and 9 — if the digit sum is divisible by 3 (or 9), so is the number.",
        "HCF (highest common factor) is the largest number that divides each of two (or more) numbers. LCM (least common multiple) is the smallest positive number that is a multiple of each. Factor lists or prime factor ideas help find both.",
        "Packing, tiling, and repeating schedules lean on factors, HCF, and LCM — equal groups with none left, or the next time two cycles meet.",
      ],
    },
    examples: [
      {
        caption: "Factor pairs of 12",
        body: "1×12, 2×6, 3×4. Factors: 1, 2, 3, 4, 6, 12.",
      },
      {
        caption: "Divisibility by 3",
        body: "147 has digit sum 1+4+7=12, and 12 is divisible by 3, so 147 is too.",
      },
      {
        caption: "HCF and LCM",
        body: "For 8 and 12, HCF is 4; LCM is 24.",
      },
    ],
    connection:
      "Sharing sweets equally, lining up parade rows, and finding when two bus routes meet again all use factors, HCF, and LCM.",
    try: {
      prompt:
        "List the factors of 18. Circle the ones that are also factors of 12. What HCF do you get?",
      reveal:
        "Factors of 18: 1, 2, 3, 6, 9, 18. Shared with 12: 1, 2, 3, 6. HCF is 6.",
    },
    practice: [
      q(
        "g6m-pt-p1",
        "Which list shows all factors of 20?",
        "1, 2, 4, 5, 10, 20",
        "1, 2, 3, 4, 5, 20",
        "2, 4, 5, 10",
        "a",
        "Each listed number divides 20 with no leftover; 3 does not.",
        "Which numbers multiply in pairs to 20?",
        "Missing 1 or including 3 breaks the factor list.",
        {
          a: "You listed every divisor of 20.",
          b: "3 does not divide 20 evenly.",
          c: "1 and 20 belong on a full factor list.",
        },
      ),
      q(
        "g6m-pt-p2",
        "Why is 1 not called a prime number?",
        "It has only one factor, but primes need exactly two distinct factors",
        "Because 1 is even",
        "Because 1 is larger than every prime",
        "a",
        "The prime definition asks for exactly two distinct factors: 1 and the number itself.",
        "How many factors does 1 have?",
        "1 is odd, not even, and it is smaller than primes like 2.",
        {
          a: "You used the two-factor definition.",
          b: "Even/odd is not why 1 is set aside.",
          c: "1 is the smallest positive whole number, not the largest.",
        },
      ),
      writeQ(
        "g6m-pt-p3",
        "What is the HCF of 16 and 24? (number only)",
        ["8"],
        "Common factors include 1, 2, 4, 8. The highest is 8.",
        "List factors of each, then pick the greatest shared one.",
        "LCM would be a shared multiple, not the shared factor.",
      ),
    ],
    reasoning: [
      explainQ(
        "g6m-pt-r1",
        "A number ends with 4. Explain whether it must be divisible by 2, by 5, and by 10.",
        "Ending in 4 (even) means it is divisible by 2. It does not end in 0 or 5, so it is not divisible by 5, and therefore not by 10 either.",
        "Use the last-digit tests one by one.",
        "One passing test does not force every test to pass.",
        ["even|divisible by 2|ends in 4", "5|10|not|last digit"],
      ),
      q(
        "g6m-pt-r2",
        "Two bells ring every 6 minutes and every 8 minutes. They ring together at 9:00. When is the next time they ring together?",
        "After 24 minutes, at 9:24 — the LCM of 6 and 8",
        "After 2 minutes — the HCF of 6 and 8",
        "After 48 minutes only, because you always double the LCM",
        "a",
        "Shared ringing times are common multiples; the soonest is the LCM, 24.",
        "Do you need a shared factor or a shared multiple?",
        "HCF answers greatest shared factor, not the next shared ring.",
        {
          a: "You used LCM for the next shared time.",
          b: "HCF is 2, which is not the wait until they meet again.",
          c: "24 already works; doubling is unnecessary here.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6m-pt-t1",
        "Is 51 divisible by 3?",
        "Yes, because 5+1=6 and 6 is divisible by 3",
        "No, because 51 is odd",
        "Only if it ends with 0",
        "a",
        "Digit-sum test: 6 is divisible by 3, so 51 is too (51 = 3×17).",
        "Add the digits and test that sum.",
        "Odd/even tests 2, not 3. Ending in 0 tests 10.",
        {
          a: "You used the digit-sum test for 3.",
          b: "Odd numbers can still be divisible by 3.",
          c: "Ending in 0 is the test for 10.",
        },
      ),
      writeQ(
        "g6m-pt-t2",
        "What is the LCM of 4 and 6? (number only)",
        ["12"],
        "Multiples of 4: 4, 8, 12… Multiples of 6: 6, 12… Least common is 12.",
        "List a few multiples of each and find the smallest shared one.",
        "HCF of 4 and 6 is 2 — a different question.",
      ),
      explainQ(
        "g6m-pt-t3",
        "Why is 9 composite while 7 is prime?",
        "9 has factors 1, 3, and 9 — more than two — so it is composite. 7 has only 1 and 7, so it is prime.",
        "Count distinct factors for each number.",
        "Being odd does not decide prime vs composite by itself.",
        ["9|3|composite|factors", "7|prime|two factors"],
      ),
    ],
    misconceptions: [
      {
        idea: "All odd numbers are prime.",
        correction:
          "9, 15, and 21 are odd yet composite. Primality depends on factors, not odd/even alone.",
      },
      {
        idea: "HCF and LCM are the same idea with different names.",
        correction:
          "HCF is the greatest shared factor. LCM is the least shared multiple. They answer different packing and timing questions.",
      },
    ],
    reflect: {
      prompt:
        "Where could factors, HCF, or LCM help in a real packing, sharing, or schedule problem you know?",
      keyIdeas: ["factor|prime|HCF|LCM|divisible"],
    },
    mastery: q(
      "g6m-pt-m1",
      "To decide whether 91 is prime you should…",
      "look for a factor pair other than 1×91 (for example 7×13)",
      "call it prime because it is odd and unfamiliar",
      "call it composite because it is greater than 10",
      "a",
      "91 = 7×13, so it is composite. Checking factors decides, not oddness or size alone.",
      "Can you find a divisor besides 1 and 91?",
      "Unfamiliar odds can still factor; size alone does not decide.",
      {
        a: "You hunted for another factor pair.",
        b: "Odd and unfamiliar is not a primality test.",
        c: "Many primes are greater than 10; many composites are too.",
      },
    ),
    masteryCriteria:
      "You can list factors, spot primes (and why 1 is special), use divisibility tests, and find HCF or LCM in a short story.",
    teach: {
      prompt:
        "Teach Ivshi why 17 is prime and how to find the HCF of 18 and 24.",
      keyIdeas: [
        "17|prime|two factors",
        "HCF|6|common factor",
        "18|24|factors",
      ],
    },
  },
});
