import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade5MathLesson } from "@/content/lessons/grade-5-math/format";

export const dairyFarmLesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-the-dairy-farm-core",
  title: "The Dairy Farm",
  domainTitle: "Equal groups",
  prerequisites: ["ncert-g5-maths-mela-far-and-near-core"],
  nextConceptIds: ["ncert-g5-maths-mela-shapes-and-patterns-core"],
  content: {
    objective:
      "Use equal groups to multiply and divide on a farm, notice remainders, and spot factors, multiples, and simple divisibility in real counts.",
    wonder: {
      prompt:
        "A dairy has 48 bottles of milk and packs them in crates of 6. Will every bottle fit in a full crate, or will some bottles wait?",
    },
    explore: {
      text: "Equal groups mean the same number in every group. Multiplying counts how many in all when groups match. Dividing shares a total into equal groups or finds how many groups fit. Sometimes a few are left over — that leftover is a remainder. Factors of a number are whole numbers that divide it with none left. Multiples are the skips you make when you count by a number: 6, 12, 18…",
      activity: {
        prompt: "36 eggs go into cartons of 6. How many full cartons, and are any eggs left?",
        choices: [
          {
            id: "six-full",
            label: "6 full cartons, none left (36 ÷ 6 = 6)",
            note: "You matched equal groups. 6 × 6 = 36, so the share is exact.",
          },
          {
            id: "five-and-spare",
            label: "5 cartons and 6 left over",
            note: "5 × 6 is only 30. Six more eggs make another full carton.",
          },
          {
            id: "thirty-six-cartons",
            label: "36 cartons with 1 egg each",
            note: "That would be groups of 1, not cartons of 6.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "On a farm, bottles, eggs, and cows often come in equal groups. 8 crates of 6 bottles is 8 × 6 = 48 bottles in all.",
        "Division asks two related questions: how many in each group, or how many groups. 48 ÷ 6 = 8 means eight crates of six, or six bottles in each of eight crates — same fact family.",
        "When the share is not exact, write a remainder. 50 ÷ 6 = 8 remainder 2, because 8 × 6 = 48 and 2 bottles wait for the next crate.",
        "A factor of 24 divides 24 with none left: 1, 2, 3, 4, 6, 8, 12, 24. Multiples of 6 include 6, 12, 18, 24, 30… A number that ends in 0 or 5 is divisible by 5; an even number is divisible by 2.",
        "Checking with the opposite operation helps. If 7 × 8 = 56, then 56 ÷ 8 should be 7. If a remainder appears, the product of quotient and divisor plus the remainder rebuilds the total.",
      ],
    },
    examples: [
      {
        caption: "Crates",
        body: "9 crates × 6 bottles = 54 bottles. Sharing 54 into crates of 6 gives 9 crates.",
      },
      {
        caption: "Remainder",
        body: "40 eggs ÷ 6 = 6 cartons remainder 4. Six full cartons use 36 eggs; 4 wait.",
      },
      {
        caption: "Factor check",
        body: "Does 5 divide 35? 35 ÷ 5 = 7 with none left, so 5 is a factor of 35. 35 is a multiple of 5.",
      },
    ],
    connection:
      "Packing milk, eggs, and feed bags all use equal groups — the same maths as sharing laddoos at a party.",
    try: {
      prompt:
        "You have 45 sachets of curd and boxes that hold 8. How many full boxes can you fill, and how many sachets remain?",
      reveal:
        "45 ÷ 8 = 5 remainder 5. Five boxes use 40 sachets; 5 sachets remain. 5 × 8 + 5 = 45 checks the story.",
    },
    practice: [
      q(
        "g5m-df-p1",
        "A dairy packs 7 trays of 8 cups of yoghurt. How many cups in all?",
        "56",
        "15",
        "48",
        "a",
        "7 equal groups of 8 is 7 × 8 = 56.",
        "Equal groups mean multiply the number of trays by cups on each tray.",
        "Adding 7 and 8 only counts trays plus cups, not all cups.",
        {
          a: "You multiplied equal groups.",
          b: "15 is 7 + 8, not 7 groups of 8.",
          c: "48 would be 6 trays of 8.",
        },
      ),
      q(
        "g5m-df-p2",
        "42 milk bottles are packed in crates of 5. What happens?",
        "8 full crates and 2 bottles left (remainder 2)",
        "8 full crates and none left",
        "42 full crates",
        "a",
        "8 × 5 = 40, so 2 bottles remain. 42 ÷ 5 = 8 remainder 2.",
        "How many groups of 5 fit inside 42?",
        "An exact share would need a multiple of 5.",
        {
          a: "You found the leftover after full crates.",
          b: "40 would pack exactly; 42 is two more.",
          c: "One bottle per crate is not packing by fives.",
        },
      ),
      writeQ(
        "g5m-df-p3",
        "Write how many full cartons of 6 you can fill with 54 eggs.",
        ["9", "9 cartons", "9 full cartons"],
        "54 ÷ 6 = 9. Nine cartons use every egg.",
        "Think 6 × ? = 54.",
        "Leaving a remainder would mean the total was not a multiple of 6.",
      ),
    ],
    reasoning: [
      explainQ(
        "g5m-df-r1",
        "Why can you say 24 is a multiple of 6, and why does that help when packing bottles in sixes?",
        "24 is 4 × 6, so it sits on the skip-count by 6. Packing 24 bottles in crates of 6 fills exactly 4 crates with none left.",
        "What times 6 makes 24?",
        "Multiples and exact packing are the same story.",
        ["multiple|6|six", "4|four|exact|none left|remainder 0"],
      ),
      q(
        "g5m-df-r2",
        "Which number is divisible by 5?",
        "60, because it ends in 0",
        "63, because 6 + 3 = 9",
        "64, because it is even",
        "a",
        "Numbers ending in 0 or 5 are divisible by 5. 60 ÷ 5 = 12.",
        "Look at the ones digit.",
        "Digit sums help with 3 or 9, not with 5. Even means divisible by 2.",
        {
          a: "You used the ones-digit rule for 5.",
          b: "Digit sum is a different divisibility clue.",
          c: "Even only promises divisibility by 2.",
        },
      ),
    ],
    retrieve: [
      q(
        "g5m-df-t1",
        "Which list shows factors of 18?",
        "1, 2, 3, 6, 9, 18",
        "18, 36, 54",
        "only 1 and 18",
        "a",
        "Each of those divides 18 with none left. 18, 36, 54 are multiples of 18.",
        "Which numbers fit into 18 in equal groups?",
        "Factors are the pieces that multiply to the number; multiples grow past it.",
        {
          a: "You listed the equal-group sizes for 18.",
          b: "Those are multiples growing from 18.",
          c: "18 has more factors than only the ends.",
        },
      ),
      writeQ(
        "g5m-df-t2",
        "50 ÷ 8 leaves a remainder. Write the remainder only.",
        ["2", "remainder 2", "r 2", "r2"],
        "6 × 8 = 48, so 50 − 48 = 2 left. Remainder is 2.",
        "Find the nearest multiple of 8 under 50.",
        "The quotient is 6; the remainder is what is still waiting.",
      ),
      explainQ(
        "g5m-df-t3",
        "A worker says 7 × 9 = 63, so 63 ÷ 9 must be 7. Explain why that check works.",
        "Multiplication and division are opposites in a fact family. If 7 groups of 9 make 63, then sharing 63 into groups of 9 gives 7 groups.",
        "What does the multiplication sentence already tell you?",
        "The check uses the same three numbers in a different order.",
        ["opposite|fact family|divide|multiply", "7|nine|63"],
      ),
    ],
    misconceptions: [
      {
        idea: "Remainder means the division did not work.",
        correction:
          "A remainder is part of the answer when the total is not a multiple of the group size. Write how many full groups and what is left.",
      },
      {
        idea: "Factors and multiples are the same list.",
        correction:
          "Factors of 12 are numbers that divide 12. Multiples of 12 are 12, 24, 36… growing by 12.",
      },
    ],
    reflect: {
      prompt:
        "Where did you see equal groups this week — packs, rows, or sharing — and did anything remain?",
      keyIdeas: ["equal|group|pack|crate", "multiply|divide|remainder|factor"],
    },
    mastery: q(
      "g5m-df-m1",
      "To pack 35 bottles into crates of 6 and report clearly, you should...",
      "say 5 full crates and remainder 5",
      "say only 5, and ignore what is left",
      "say 35 crates of 1",
      "a",
      "5 × 6 = 30, so 5 bottles remain. Quotient and remainder both matter.",
      "How many sixes fit, and what is left?",
      "Hiding the remainder hides bottles that still need a place.",
      {
        a: "You named full crates and the leftover.",
        b: "The leftover bottles are still part of the story.",
        c: "Crates of 1 are not crates of 6.",
      },
    ),
    masteryCriteria:
      "You can multiply and divide equal farm groups, report remainders, and recognise factors, multiples, and simple divisibility.",
    teach: {
      prompt:
        "Teach Ivshi how to pack 40 eggs into cartons of 6. Say full cartons and remainder, then check with multiplication.",
      keyIdeas: ["carton|6|six", "remainder|left", "6 ×|times|check"],
    },
  },
});

export const shapesAndPatternsLesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-shapes-and-patterns-core",
  title: "Shapes and Patterns",
  domainTitle: "Shapes",
  prerequisites: ["ncert-g5-maths-mela-the-dairy-farm-core"],
  nextConceptIds: ["ncert-g5-maths-mela-weight-and-capacity-core"],
  content: {
    objective:
      "Name polygons by sides, notice tiling and growing patterns, follow input-output rules, and use simple 2D properties.",
    wonder: {
      prompt:
        "A floor is covered with identical hexagon tiles with no gaps. Why might hexagons fit together when some other shapes leave holes?",
    },
    explore: {
      text: "A polygon is a closed flat shape with straight sides. Triangles have 3 sides, quadrilaterals 4, pentagons 5, hexagons 6. Tiling means covering a surface with shapes that fit edge to edge without gaps or overlaps. Patterns can grow by a rule: add 2 each time, or double. An input-output machine follows one rule for every number you put in.",
      activity: {
        prompt: "A shape has 5 straight sides and is closed. What is it?",
        choices: [
          {
            id: "pentagon",
            label: "a pentagon",
            note: "Yes — penta points to five. Count the sides to name the polygon.",
          },
          {
            id: "hexagon",
            label: "a hexagon",
            note: "Hexagons have six sides.",
          },
          {
            id: "circle",
            label: "a circle",
            note: "A circle is curved, not a straight-sided polygon.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Count sides to name many polygons. A square is a special quadrilateral: four equal sides and four right angles. A rectangle has opposite sides equal and four right angles. A triangle's three sides close tightly.",
        "Shapes that tile can sit edge to edge. Squares and regular hexagons tile a floor. Circles leave curved gaps, so they do not tile by themselves.",
        "Growing patterns change in a steady way. Dots in rows: 2, 4, 6, 8… add 2 each time. Another pattern might be 3, 6, 12, 24… multiply by 2.",
        "An input-output rule is a machine: if the rule is 'add 5', then input 3 gives output 8; input 10 gives 15. The same rule applies every time.",
        "Properties help you sort: number of sides, equal sides, right angles, parallel sides. Two shapes can look different yet share a property, like both being quadrilaterals.",
      ],
    },
    examples: [
      {
        caption: "Name it",
        body: "A stop-sign style shape with 8 sides is an octagon. A kite-shaped field with 4 sides is a quadrilateral.",
      },
      {
        caption: "Grow it",
        body: "Fence posts: 1, 3, 5, 7… Each step adds 2. The next term is 9.",
      },
      {
        caption: "Machine",
        body: "Rule: multiply by 4. Input 2 → output 8. Input 5 → output 20.",
      },
    ],
    connection:
      "Floor tiles, rangoli borders, and bead patterns all use shapes, growing rules, and fitting edges.",
    try: {
      prompt:
        "A pattern of squares along a path goes 1, 4, 7, 10… What is the rule, and what comes next?",
      reveal:
        "Each term adds 3. After 10 comes 13. Checking: 1 + 3 = 4, 4 + 3 = 7, 7 + 3 = 10, 10 + 3 = 13.",
    },
    practice: [
      q(
        "g5m-sp-p1",
        "How many sides does a hexagon have?",
        "6",
        "5",
        "8",
        "a",
        "Hex means six. A hexagon has 6 straight sides.",
        "Think of a honeycomb cell.",
        "Five sides name a pentagon; eight sides name an octagon.",
        {
          a: "You matched hex to six.",
          b: "Five sides make a pentagon.",
          c: "Eight sides make an octagon.",
        },
      ),
      q(
        "g5m-sp-p2",
        "Which shapes can tile a flat floor with no gaps when used alone?",
        "identical squares",
        "identical circles",
        "one triangle and one circle mixed randomly",
        "a",
        "Squares meet edge to edge and cover the plane. Circles leave gaps.",
        "Imagine laying tiles edge to edge.",
        "Curved edges leave spaces between circles.",
        {
          a: "You chose a tiling polygon.",
          b: "Circles leave curved gaps.",
          c: "A random mix is not a planned tile.",
        },
      ),
      writeQ(
        "g5m-sp-p3",
        "A pattern is 5, 10, 15, 20… Write the next number.",
        ["25", "25."],
        "The rule adds 5 each time. 20 + 5 = 25.",
        "What do you add to move from one term to the next?",
        "Skipping by 10 would jump to a different pattern.",
      ),
    ],
    reasoning: [
      explainQ(
        "g5m-sp-r1",
        "An input-output machine uses the rule 'subtract 4'. What is the output for input 19, and how do you know?",
        "19 − 4 = 15, so the output is 15. The same subtract-4 rule applies to every input.",
        "Apply one rule once to 19.",
        "Do not change the rule mid-way.",
        ["subtract|minus|4|four", "15|fifteen"],
      ),
      q(
        "g5m-sp-r2",
        "A rectangle and a square both...",
        "are quadrilaterals with four right angles",
        "must have all sides different lengths",
        "have exactly three sides",
        "a",
        "Both have 4 sides and 4 right angles. A square also has equal sides; a rectangle may have two pairs of equal sides.",
        "Count sides and think about corners.",
        "Three sides would be a triangle.",
        {
          a: "You named shared 2D properties.",
          b: "A square's sides are equal; a rectangle's opposite sides match.",
          c: "Four sides, not three.",
        },
      ),
    ],
    retrieve: [
      q(
        "g5m-sp-t1",
        "The pattern 2, 4, 8, 16… most likely grows by...",
        "multiplying by 2 each time",
        "adding 2 each time",
        "subtracting 2 each time",
        "a",
        "2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16. Adding 2 would give 2, 4, 6, 8.",
        "Compare neighbouring terms.",
        "Adding 2 stays in even steps of two, not doubling.",
        {
          a: "You spotted doubling.",
          b: "Adding 2 would next be 6 after 4.",
          c: "Subtracting would shrink the numbers.",
        },
      ),
      writeQ(
        "g5m-sp-t2",
        "A polygon has 4 sides. Write its general name (not square or rectangle).",
        ["quadrilateral", "a quadrilateral", "quad"],
        "Any closed four-sided polygon is a quadrilateral.",
        "Quad points to four.",
        "Triangle is three; pentagon is five.",
      ),
      explainQ(
        "g5m-sp-t3",
        "Why does counting sides help you name a polygon?",
        "Polygon names often mark the number of straight sides — three for triangle, five for pentagon, six for hexagon — so counting sides chooses the name.",
        "What does 'hex' or 'penta' hint at?",
        "Curves are not counted as polygon sides.",
        ["side|sides|count", "name|triangle|pentagon|hexagon|polygon"],
      ),
    ],
    misconceptions: [
      {
        idea: "Every shape with four sides is a square.",
        correction:
          "Four sides make a quadrilateral. A square needs equal sides and right angles; rectangles and other quads may differ.",
      },
      {
        idea: "Any pattern that looks busy must add the same number each time.",
        correction:
          "Some patterns multiply or follow another rule. Check how you move from one term to the next.",
      },
    ],
    reflect: {
      prompt:
        "Where did you notice a tiling or a growing pattern today — floor, cloth, or drawing?",
      keyIdeas: ["tile|shape|polygon|pattern", "side|rule|grow"],
    },
    mastery: q(
      "g5m-sp-m1",
      "To find the next term in 3, 6, 9, 12… you should...",
      "add 3, getting 15",
      "multiply by 3, getting 36",
      "add 1, getting 13",
      "a",
      "The gap between terms is 3 each time. 12 + 3 = 15.",
      "Look at the difference between neighbours.",
      "Multiplying by 3 would jump much faster than this list.",
      {
        a: "You used the steady add-3 rule.",
        b: "3 × 12 = 36 is a different rule.",
        c: "Adding 1 does not match the gaps you see.",
      },
    ),
    masteryCriteria:
      "You can name polygons, recognise tiling and growing patterns, apply an input-output rule, and use basic 2D properties.",
    teach: {
      prompt:
        "Teach Ivshi what a hexagon is and show a simple growing pattern of your own with its rule.",
      keyIdeas: ["hexagon|six|sides", "pattern|rule|add|multiply"],
    },
  },
});

export const weightAndCapacityLesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-weight-and-capacity-core",
  title: "Weight and Capacity",
  domainTitle: "Measures",
  prerequisites: ["ncert-g5-maths-mela-shapes-and-patterns-core"],
  nextConceptIds: ["ncert-g5-maths-mela-coconut-farm-core"],
  content: {
    objective:
      "Measure and compare mass in grams and kilograms and capacity in millilitres and litres, including simple conversions.",
    wonder: {
      prompt:
        "A 2 kg bag of rice and a 500 g packet of spices sit on a table. Which is heavier, and how do you compare when the units look different?",
    },
    explore: {
      text: "Mass (weight in everyday talk) tells how heavy something is. Grams (g) are for lighter things; kilograms (kg) for heavier ones. 1 kg = 1,000 g. Capacity tells how much a container can hold. Millilitres (ml) are small pours; litres (L) are larger. 1 L = 1,000 ml. Match units before you compare or add.",
      activity: {
        prompt: "Which is the same as 1 kilogram?",
        choices: [
          {
            id: "thousand-g",
            label: "1,000 grams",
            note: "Yes — kilo means a thousand of the smaller unit.",
          },
          {
            id: "hundred-g",
            label: "100 grams",
            note: "100 g is only one-tenth of a kilogram.",
          },
          {
            id: "thousand-ml",
            label: "1,000 millilitres",
            note: "That equals 1 litre — capacity, not mass.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "To change kilograms to grams, multiply by 1,000. 2 kg = 2,000 g. To change grams to kilograms, think how many thousands of grams: 3,000 g = 3 kg; 2,500 g = 2 kg 500 g.",
        "Litres and millilitres work the same way. 1 L = 1,000 ml. Half a litre is 500 ml. 2 L 250 ml = 2,250 ml.",
        "Compare only after units match. 1,200 g compared with 1 kg: change 1 kg to 1,000 g, so 1,200 g is heavier by 200 g.",
        "Choose a unit that fits. Spices often use grams; a sack of wheat uses kilograms. A medicine spoon may use ml; a water can uses litres.",
        "Adding mixed measures: 1 kg 300 g + 2 kg 400 g = 3 kg 700 g. If grams reach 1,000 or more, regroup into another kilogram.",
      ],
    },
    examples: [
      {
        caption: "Mass",
        body: "750 g of flour and 1 kg of sugar: sugar is heavier because 1 kg = 1,000 g > 750 g.",
      },
      {
        caption: "Capacity",
        body: "A bottle holds 2 L. That is 2,000 ml — enough for four 500 ml glasses.",
      },
      {
        caption: "Convert",
        body: "3 kg 50 g = 3,050 g. Keep the 50 g; do not drop the zero place.",
      },
    ],
    connection:
      "Market scales, kitchen recipes, and water cans all need matching units and fair comparisons.",
    try: {
      prompt:
        "You have 1 L 200 ml of milk and pour out 350 ml. How much milk is left, in millilitres?",
      reveal:
        "1 L 200 ml = 1,200 ml. 1,200 − 350 = 850 ml left.",
    },
    practice: [
      q(
        "g5m-wc-p1",
        "How many grams make 1 kilogram?",
        "1,000 g",
        "100 g",
        "10 g",
        "a",
        "1 kg = 1,000 g.",
        "Kilo means a thousand.",
        "100 g is a small bar, not a whole kilogram.",
        {
          a: "You used the thousand-gram link.",
          b: "100 g is one-tenth of a kilogram.",
          c: "10 g is much lighter still.",
        },
      ),
      q(
        "g5m-wc-p2",
        "Which holds more: 1 L or 850 ml?",
        "1 L, because it is 1,000 ml",
        "850 ml, because 850 looks bigger than 1",
        "they always hold the same",
        "a",
        "1 L = 1,000 ml, which is more than 850 ml.",
        "Change litres to millilitres first.",
        "The digit 1 is not smaller once the unit is litres.",
        {
          a: "You matched units before comparing.",
          b: "Looking only at digits ignores the unit size.",
          c: "1,000 ml and 850 ml differ.",
        },
      ),
      writeQ(
        "g5m-wc-p3",
        "Write 2 kg 300 g as a number of grams only.",
        ["2300", "2,300", "2300 g", "2,300 g", "2300 grams"],
        "2 kg = 2,000 g, plus 300 g is 2,300 g.",
        "Change kilograms to grams, then add.",
        "230 g would drop a zero from the kilograms.",
      ),
    ],
    reasoning: [
      explainQ(
        "g5m-wc-r1",
        "Why must you change units before deciding whether 900 g or 1 kg is heavier?",
        "The labels differ. 1 kg is 1,000 g, so after matching units you see 1,000 g is more than 900 g. Comparing 900 with 1 without units misleads.",
        "What is 1 kg in grams?",
        "Digits alone are not the mass.",
        ["1000|1,000|thousand", "gram|kg|kilogram", "compare|heavier|more"],
      ),
      q(
        "g5m-wc-r2",
        "A jug has 1 L 500 ml. You add 600 ml. What is a sensible total?",
        "2 L 100 ml (because 500 + 600 = 1,100 ml = 1 L 100 ml, plus the first litre)",
        "1 L 1100 ml with no regrouping ever",
        "7 L, adding all the digits for luck",
        "a",
        "500 ml + 600 ml = 1,100 ml = 1 L 100 ml. With the original 1 L that makes 2 L 100 ml.",
        "Regroup 1,000 ml into 1 L.",
        "Leaving 1,100 ml beside 1 L is awkward; regroup helps.",
        {
          a: "You regrouped millilitres into litres.",
          b: "1 L 1,100 ml should become 2 L 100 ml.",
          c: "Digit tricks are not capacity maths.",
        },
      ),
    ],
    retrieve: [
      q(
        "g5m-wc-t1",
        "500 ml is the same as...",
        "half a litre",
        "5 litres",
        "half a kilogram",
        "a",
        "1 L = 1,000 ml, so 500 ml is half a litre. Kilograms measure mass.",
        "How many millilitres in a litre?",
        "Mass and capacity use different units.",
        {
          a: "You halved a litre.",
          b: "5 L would be 5,000 ml.",
          c: "Kilograms are for heaviness, not pouring.",
        },
      ),
      writeQ(
        "g5m-wc-t2",
        "How many millilitres are in 3 litres?",
        ["3000", "3,000", "3000 ml", "3,000 ml"],
        "3 × 1,000 = 3,000 ml.",
        "Multiply litres by 1,000.",
        "300 ml would be far too small for 3 litres.",
      ),
      explainQ(
        "g5m-wc-t3",
        "A recipe needs 250 g of sugar. You only have a 1 kg packet. How can you think about the portion?",
        "1 kg is 1,000 g, so 250 g is one-quarter of the packet. You measure 250 g, not the whole kilogram.",
        "Change 1 kg into grams first.",
        "Using the whole packet would be four times the recipe amount.",
        ["1000|1,000|kg|gram", "250|quarter|portion"],
      ),
    ],
    misconceptions: [
      {
        idea: "The larger-looking number is always the greater measure.",
        correction:
          "Compare after matching units. 1 kg beats 900 g even though 1 looks small.",
      },
      {
        idea: "Grams and millilitres measure the same thing.",
        correction:
          "Grams measure mass. Millilitres measure capacity. Use each for its job.",
      },
    ],
    reflect: {
      prompt:
        "What did you weigh or pour recently, and which unit — g, kg, ml, or L — fitted best?",
      keyIdeas: ["gram|kilogram|g|kg", "millilitre|litre|ml|L|pour|weigh"],
    },
    mastery: q(
      "g5m-wc-m1",
      "To compare 1 kg 200 g with 1,050 g you should...",
      "change to the same unit: 1,200 g vs 1,050 g, so the first is heavier",
      "say 1,050 is bigger because it has more digits written together",
      "ignore the units and compare 1 with 1,050",
      "a",
      "1 kg 200 g = 1,200 g, which is more than 1,050 g.",
      "Make both measures grams.",
      "Digit looks without units lead you astray.",
      {
        a: "You converted, then compared.",
        b: "Writing style is not the measure.",
        c: "Dropping units breaks the comparison.",
      },
    ),
    masteryCriteria:
      "You can convert between g/kg and ml/L, choose fitting units, and compare or combine simple measures.",
    teach: {
      prompt:
        "Teach Ivshi how many grams are in 2 kilograms and how many millilitres are in 1 litre.",
      keyIdeas: ["2000|2,000|gram|kg", "1000|1,000|ml|litre"],
    },
  },
});

export const coconutFarmLesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-coconut-farm-core",
  title: "Coconut Farm",
  domainTitle: "Multi-step",
  prerequisites: ["ncert-g5-maths-mela-weight-and-capacity-core"],
  nextConceptIds: ["ncert-g5-maths-mela-symmetrical-designs-core"],
  content: {
    objective:
      "Solve two-step farm problems, check totals, use light money and decimal ideas, and choose clear strategies.",
    wonder: {
      prompt:
        "A farm sells 4 bags of coconuts with 12 in each bag, then 5 more loose coconuts. How do you find the total without losing a step?",
    },
    explore: {
      text: "Multi-step problems need more than one calculation. Often you multiply equal groups first, then add or subtract what happens next. Checking means rebuilding the story: does your total match the bags plus the extras? Money in rupees and paise uses decimals lightly — ₹12.50 means 12 rupees and 50 paise. A strategy is a plan: draw, estimate, compute, then check.",
      activity: {
        prompt: "3 baskets of 10 coconuts, then 7 more. What is a clear plan?",
        choices: [
          {
            id: "multiply-then-add",
            label: "Find 3 × 10, then add 7 → 37",
            note: "You sequenced the steps: equal groups first, then the extras.",
          },
          {
            id: "add-only",
            label: "Only add 3 + 10 + 7",
            note: "That counts baskets and numbers, not three groups of ten.",
          },
          {
            id: "guess",
            label: "Guess 100 and stop",
            note: "A plan with multiply-then-add gets a checkable total.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Read the whole story. Underline what you know and what you must find. Order matters: bags first, then extras; cost each, then total money.",
        "Two-step patterns appear often: multiply then add; multiply then subtract; add then divide into shares. Write each step so you can check.",
        "Checking totals: after 4 × 12 = 48 and 48 + 5 = 53, you can think '48 from bags, 5 loose, 53 in all' or reverse: 53 − 5 = 48, and 48 ÷ 12 = 4 bags.",
        "Money: ₹20.00 is twenty rupees. ₹7.50 is seven rupees and fifty paise. Adding money: line up the decimal points. 3 coconuts at ₹12 each cost ₹36.",
        "Strategies include estimating first (about 50?), drawing bags, or using a known fact (10 × 4 = 40, then adjust). Choose one path and stick to it until the check.",
      ],
    },
    examples: [
      {
        caption: "Bags plus loose",
        body: "5 bags × 8 coconuts = 40, plus 3 loose = 43. Check: 43 − 3 = 40, and 40 ÷ 8 = 5.",
      },
      {
        caption: "Money",
        body: "2 ropes at ₹15.50 each: 15.50 + 15.50 = ₹31.00. Or 2 × 15.50 = 31.00.",
      },
      {
        caption: "Estimate",
        body: "9 × 21 is near 9 × 20 = 180. Exact 9 × 21 = 189 — close to the estimate, so sensible.",
      },
    ],
    connection:
      "Market stalls, packing sheds, and school fairs all use multi-step counts and money checks.",
    try: {
      prompt:
        "6 crates hold 9 coconuts each. Workers remove 10 for a sample. How many remain on the farm? Check your total.",
      reveal:
        "6 × 9 = 54, then 54 − 10 = 44. Check: 44 + 10 = 54, and 54 ÷ 9 = 6 crates.",
    },
    practice: [
      q(
        "g5m-cf-p1",
        "4 baskets of 11 coconuts, then 6 more. Total coconuts?",
        "50",
        "21",
        "44",
        "a",
        "4 × 11 = 44, then 44 + 6 = 50.",
        "Multiply the baskets first, then add the extras.",
        "21 only adds 4 + 11 + 6.",
        {
          a: "You completed both steps.",
          b: "Adding the three numbers skips equal groups.",
          c: "44 is before adding the 6 extras.",
        },
      ),
      q(
        "g5m-cf-p2",
        "A shopkeeper sells 3 coconuts at ₹18 each. What is the total?",
        "₹54",
        "₹21",
        "₹18",
        "a",
        "3 × 18 = 54 rupees.",
        "Equal cost groups: multiply.",
        "₹18 is the price of one, not three.",
        {
          a: "You multiplied price by number sold.",
          b: "21 is 3 + 18.",
          c: "One coconut's price is not the total.",
        },
      ),
      writeQ(
        "g5m-cf-p3",
        "5 bags hold 10 coconuts each. 8 are given away. Write how many remain.",
        ["42", "42 coconuts"],
        "5 × 10 = 50, then 50 − 8 = 42.",
        "Find the full load first, then subtract.",
        "Stopping at 50 forgets the gift of 8.",
      ),
    ],
    reasoning: [
      explainQ(
        "g5m-cf-r1",
        "You find 7 × 8 = 56, then add 9 to get 65. How can you check that this matches '7 bags of 8, plus 9 loose'?",
        "Subtract the loose 9: 65 − 9 = 56. Then 56 ÷ 8 = 7 bags. The reverse steps rebuild the story, so the total fits.",
        "Undo the last step, then undo the first.",
        "Checking walks the path backwards.",
        ["subtract|minus|9", "56|divide|8|seven|7"],
      ),
      q(
        "g5m-cf-r2",
        "Which is a helpful first strategy for 19 × 4?",
        "think 20 × 4 = 80, then subtract 4 to get 76",
        "add 19 + 4 only",
        "ignore 19 and write 4",
        "a",
        "19 is one less than 20. 20 × 4 = 80, minus one group of 4 is 76.",
        "Use a nearby friendly number.",
        "Adding 19 and 4 is not four groups of 19.",
        {
          a: "You estimated with 20, then adjusted.",
          b: "Summing once is not four groups.",
          c: "Dropping 19 loses the coconut count.",
        },
      ),
    ],
    retrieve: [
      q(
        "g5m-cf-t1",
        "Two ropes cost ₹12.50 each. Together they cost...",
        "₹25.00",
        "₹12.50",
        "₹125",
        "a",
        "12.50 + 12.50 = 25.00, or 2 × 12.50 = 25.",
        "Double the price of one rope.",
        "Keeping ₹12.50 is only one rope.",
        {
          a: "You combined both prices.",
          b: "That is still one rope's cost.",
          c: "₹125 would shift the decimal place.",
        },
      ),
      writeQ(
        "g5m-cf-t2",
        "8 trees give 6 coconuts each, then 4 more fall. Write the total.",
        ["52", "52 coconuts"],
        "8 × 6 = 48, plus 4 = 52.",
        "Trees first as equal groups, then the extras.",
        "48 alone misses the 4 that fell.",
      ),
      explainQ(
        "g5m-cf-t3",
        "Why estimate before you finish a long farm total?",
        "An estimate like 'about 50' tells you if a later answer near 200 needs another look. It catches slipped zeros or a missed step without replacing the exact work.",
        "What if your exact answer is far from your estimate?",
        "Estimating is a safety net for multi-step work.",
        ["estimate|about", "check|sense|step"],
      ),
    ],
    misconceptions: [
      {
        idea: "You can add every number in the story in any order and finish.",
        correction:
          "Equal groups usually need multiplying first. Order follows the story: bags, then extras or removals.",
      },
      {
        idea: "Checking is only for when you feel unsure.",
        correction:
          "A short reverse check — subtract the extras, then divide — confirms the total for any multi-step count.",
      },
    ],
    reflect: {
      prompt:
        "Describe one two-step problem you solved (or could invent) about packing or selling, and how you checked it.",
      keyIdeas: ["two-step|multiply|add|subtract", "check|total|money"],
    },
    mastery: q(
      "g5m-cf-m1",
      "A farm story: 6 bags of 9, then sell 15. To find how many remain you should...",
      "compute 6 × 9 = 54, then 54 − 15 = 39, and check 39 + 15 = 54",
      "only compute 6 + 9 − 15",
      "stop after 6 × 9 and call that the sold amount",
      "a",
      "Multiply bags, subtract what was sold, then reverse-add to check.",
      "What happens first in the story? What happens next?",
      "Adding bag count to coconuts per bag is not six groups of nine.",
      {
        a: "You used both steps and a check.",
        b: "6 + 9 is not the load of six bags.",
        c: "54 is before selling; selling changes the total.",
      },
    ),
    masteryCriteria:
      "You can plan two-step farm problems, compute carefully, check totals, and handle simple money or estimates.",
    teach: {
      prompt:
        "Teach Ivshi a coconut story with bags and extras. Show both steps and one check.",
      keyIdeas: ["multiply|bag|group", "add|subtract|extra", "check|reverse"],
    },
  },
});

export const symmetricalDesignsLesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-symmetrical-designs-core",
  title: "Symmetrical Designs",
  domainTitle: "Symmetry",
  prerequisites: ["ncert-g5-maths-mela-coconut-farm-core"],
  nextConceptIds: ["ncert-g5-maths-mela-grandmothers-quilt-core"],
  content: {
    objective:
      "Find lines of symmetry, complete half designs by reflection, and describe how mirror images match.",
    wonder: {
      prompt:
        "If you fold a rangoli along a straight line and both halves match exactly, what does that line show about the design?",
    },
    explore: {
      text: "A line of symmetry is a fold line where one half matches the other — like a mirror. Reflection flips a shape across that line. Points on the line stay put; points off the line land the same distance on the other side. Some shapes have one line of symmetry, some have more, and some have none. Completing a design means drawing the missing half so both sides mirror.",
      activity: {
        prompt: "A butterfly drawing looks the same on left and right of a vertical fold. What is that fold?",
        choices: [
          {
            id: "line-sym",
            label: "a line of symmetry",
            note: "Yes — matching halves across a fold means symmetry.",
          },
          {
            id: "diagonal-only",
            label: "only a diagonal can ever be symmetry",
            note: "Vertical, horizontal, or other lines can be lines of symmetry.",
          },
          {
            id: "no-match",
            label: "proof that the wings never match",
            note: "Matching across the fold is exactly what symmetry means.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "To test a line, imagine folding or using a mirror. If the halves cover each other, the line is a line of symmetry.",
        "A square has four lines of symmetry (two midlines and two diagonals). An equilateral triangle has three. A scalene triangle with all sides different may have none.",
        "Reflection keeps distance to the line. If a dot is 2 units left of the line, its image is 2 units right. Angles and lengths stay the same; facing flips.",
        "Completing a design: copy each mark to the other side of the line at the same distance. Colour patterns often mirror too.",
        "Letters and logos use symmetry. Some letters (like H or A in simple fonts) have a vertical line of symmetry; others do not.",
      ],
    },
    examples: [
      {
        caption: "Fold",
        body: "A heart cut-out folded down the middle matches. The fold is one vertical line of symmetry.",
      },
      {
        caption: "Complete",
        body: "Half a flower is drawn left of a line. Reflect each petal tip the same distance to the right to finish it.",
      },
      {
        caption: "Count lines",
        body: "A rectangle that is not a square has two lines of symmetry — vertical and horizontal midlines — not the diagonals.",
      },
    ],
    connection:
      "Kolam, quilts, gates, and butterfly wings all play with matching halves across a line.",
    try: {
      prompt:
        "Draw a vertical line. Put a triangle on the left. Reflect it to the right so the design is symmetrical. How did you place the vertices?",
      reveal:
        "Each vertex moves straight across the line to the same distance on the other side. The reflected triangle should match as a mirror image.",
    },
    practice: [
      q(
        "g5m-sy-p1",
        "A line of symmetry is a line where...",
        "one half of the figure matches the other when folded",
        "the figure must be a circle and nothing else",
        "colours must all be different on each side",
        "a",
        "Matching halves across a fold or mirror define the line of symmetry.",
        "Think of a fold that lands on itself.",
        "Many shapes besides circles can be symmetrical.",
        {
          a: "You described matching halves.",
          b: "Circles have symmetry, but so do squares and more.",
          c: "Matching often keeps colours mirrored, not all different.",
        },
      ),
      q(
        "g5m-sy-p2",
        "How many lines of symmetry does a square have?",
        "4",
        "1",
        "0",
        "a",
        "Two midlines through opposite sides and two diagonals — four in all.",
        "Fold a square in your mind vertically, horizontally, and on both diagonals.",
        "A square matches on more than one fold.",
        {
          a: "You counted all four folds.",
          b: "One line is not enough for a square.",
          c: "A square is rich in symmetry.",
        },
      ),
      writeQ(
        "g5m-sy-p3",
        "A dot sits 3 cm left of a vertical mirror line. How many centimetres right of the line is its reflection?",
        ["3", "3 cm", "3 centimetres"],
        "Reflection keeps the same distance: 3 cm on the other side.",
        "Distance to the line stays equal.",
        "Moving farther or nearer would break the mirror match.",
      ),
    ],
    reasoning: [
      explainQ(
        "g5m-sy-r1",
        "Why do the diagonals of a non-square rectangle fail as lines of symmetry?",
        "Folding a long thin rectangle on a diagonal does not make the halves cover each other — the lengths differ. Only the midlines parallel to the sides work for that rectangle.",
        "Try folding a rectangle on a diagonal in your mind.",
        "Squares are special; ordinary rectangles are not the same on diagonals.",
        ["diagonal|fold|match", "rectangle|midline|side"],
      ),
      q(
        "g5m-sy-r2",
        "To complete a half-drawn rangoli across a vertical line you should...",
        "copy each mark to the other side at the same distance from the line",
        "copy marks only upward, never across",
        "erase the line so symmetry is not needed",
        "a",
        "Reflection places each point opposite at equal distance from the line.",
        "Think of a mirror standing on the line.",
        "The line is the guide, not something to remove.",
        {
          a: "You reflected across the line.",
          b: "Symmetry here is left-right across the line.",
          c: "Keeping the line helps you place the image.",
        },
      ),
    ],
    retrieve: [
      q(
        "g5m-sy-t1",
        "Which capital letter, in a simple block font, often has a vertical line of symmetry?",
        "A (fold down the middle)",
        "B (the bumps sit only on one side)",
        "F (arms stick out one way)",
        "a",
        "A common block A matches left and right. B and F usually do not.",
        "Imagine folding the letter vertically.",
        "One-sided arms break vertical symmetry.",
        {
          a: "You chose a letter that mirrors left-right.",
          b: "B's bumps are typically on one side.",
          c: "F's arms break the mirror.",
        },
      ),
      writeQ(
        "g5m-sy-t2",
        "An equilateral triangle has how many lines of symmetry? Write the number.",
        ["3", "three"],
        "Each altitude to a side is a line of symmetry — three in all.",
        "Every vertex can fold onto the base midpoint.",
        "One line would undercount an equilateral triangle.",
      ),
      explainQ(
        "g5m-sy-t3",
        "How is reflecting a shape across a line different from sliding it without turning?",
        "A slide (translation) keeps the shape facing the same way. A reflection flips it so left and right swap across the line, like a mirror, while distances to the line stay equal.",
        "What does a mirror do to left and right?",
        "Both moves can keep size, but only reflection flips facing.",
        ["reflect|mirror|flip", "slide|translate|same way|facing"],
      ),
    ],
    misconceptions: [
      {
        idea: "Every shape has exactly one line of symmetry.",
        correction:
          "Some have several (square), some have one (isosceles triangle), and some have none.",
      },
      {
        idea: "Any diagonal fold works for every rectangle.",
        correction:
          "Only a square's diagonals are lines of symmetry. A longer rectangle matches on midlines, not diagonals.",
      },
    ],
    reflect: {
      prompt:
        "Where did you see a symmetrical design this week, and where was its line of symmetry?",
      keyIdeas: ["symmetry|mirror|fold|line", "half|match|design"],
    },
    mastery: q(
      "g5m-sy-m1",
      "A design is symmetrical across a line when...",
      "each point has a matching point the same distance on the other side of the line",
      "the two halves look busy in unrelated ways",
      "you colour only one half and leave the other blank forever",
      "a",
      "Equal distance and matching across the line is reflection symmetry.",
      "Picture a mirror on the line.",
      "Unrelated halves and a forever-blank side are not complete symmetry.",
      {
        a: "You stated the reflection rule.",
        b: "Matching, not unrelated busyness, defines the line.",
        c: "Completing the design means drawing the image half.",
      },
    ),
    masteryCriteria:
      "You can identify lines of symmetry, complete a design by reflection, and explain how mirror halves match.",
    teach: {
      prompt:
        "Teach Ivshi how to finish a half-drawn flower across a vertical line of symmetry.",
      keyIdeas: ["line|symmetry|mirror", "same distance|reflect|other side"],
    },
  },
});
