import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade6MathLesson } from "@/content/lessons/grade-6-math/format";

export const perimeterAndAreaLesson = grade6MathLesson({
  conceptId: "ncert-g6-ganita-prakash-perimeter-and-area-core",
  title: "Perimeter and Area",
  domainTitle: "Measurement",
  prerequisites: ["ncert-g6-ganita-prakash-prime-time-core"],
  nextConceptIds: ["ncert-g6-ganita-prakash-fractions-core"],
  content: {
    objective:
      "Find perimeter and area of rectangles, handle simple composite shapes by adding or subtracting regions, and lightly count unit cubes or use length × width × height for a cuboid’s volume.",
    wonder: {
      prompt:
        "A garden bed is 8 m long and 3 m wide. How much fencing does it need around the outside — and how much soil surface does it cover inside?",
    },
    explore: {
      text: "Perimeter is the distance around a shape. For a rectangle, add all four sides, or use 2 × (length + breadth). Area is how much surface the shape covers — for a rectangle, length × breadth in matching units. A composite shape may be two rectangles joined: add their areas (or perimeters carefully, without double-counting shared edges). Filling a box with unit cubes is volume — how much space is inside.",
      activity: {
        prompt: "Garden bed 8 m by 3 m. Which pair matches fencing and soil?",
        choices: [
          {
            id: "fence-soil",
            label: "fencing 22 m (perimeter); soil 24 m² (area)",
            note: "Perimeter 2 × (8 + 3) = 22 m. Area 8 × 3 = 24 square metres.",
          },
          {
            id: "swap",
            label: "fencing 24 m; soil 22 m²",
            note: "That swaps the product and the side-sum story.",
          },
          {
            id: "add-only",
            label: "both answers are 8 + 3 = 11",
            note: "11 is only one length plus one breadth — not around or covering.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Perimeter walks the edge. Keep units the same (all metres, or all centimetres) before you add.",
        "Area fills the inside. On a grid, count unit squares. For a rectangle, multiply length by breadth when both use the same unit.",
        "Composite shapes: split into rectangles you know, find each area, then add. Or start from a bigger rectangle and subtract a missing piece. For perimeter of an L-shape, add only the outer edge lengths — shared inner edges are not part of the outer path.",
        "Volume fills space. A cuboid made of unit cubes can be counted layer by layer. The same idea as length × width × height when those three measures match.",
        "A net is a flat layout that can fold into a solid. A prism has two matching end faces joined by rectangles; a pyramid comes to a point. You only need to notice faces and edges lightly here — the main job is still perimeter, area, and a light touch of volume.",
      ],
    },
    examples: [
      {
        caption: "Rectangle perimeter",
        body: "Length 5 cm, breadth 2 cm: perimeter 2 × (5 + 2) = 14 cm.",
      },
      {
        caption: "Composite area",
        body: "A 6-by-4 rectangle with a 2-by-2 square cut from one corner: area 24 − 4 = 20 unit squares.",
      },
      {
        caption: "Cuboid volume",
        body: "Block 3 cm by 2 cm by 4 cm: volume 3 × 2 × 4 = 24 cubic centimetres (or 24 unit cubes).",
      },
    ],
    connection:
      "Floor tiles, picture frames, fencing, and packing boxes all ask for around, covering, or filling — the same three ideas.",
    try: {
      prompt:
        "A room floor is 5 m by 4 m. Find its area. A box of books is 2 layers of a 3-by-2 rectangle of unit cubes. How many unit cubes?",
      reveal:
        "Floor area 5 × 4 = 20 m². Each layer has 6 cubes; two layers make 12 unit cubes.",
    },
    practice: [
      q(
        "g6m-pa-p1",
        "A rectangle is 9 cm long and 4 cm wide. What is its perimeter?",
        "26 cm",
        "36 cm",
        "13 cm",
        "a",
        "Perimeter 2 × (9 + 4) = 2 × 13 = 26 cm. 36 would be area; 13 is only one length plus one breadth.",
        "Add all four sides, or double (length + breadth).",
        "Multiplying 9 × 4 finds area, not the path around.",
        {
          a: "You walked all four sides.",
          b: "36 cm² would be the covering area.",
          c: "13 cm is only half of the full perimeter path.",
        },
      ),
      q(
        "g6m-pa-p2",
        "A rectangular park is 12 m by 7 m. Area?",
        "84 m²",
        "38 m²",
        "19 m²",
        "a",
        "Area 12 × 7 = 84 square metres. 38 is the perimeter; 19 is half of that path.",
        "Covering uses length times breadth.",
        "Adding the sides answers perimeter, not area.",
        {
          a: "You multiplied matching length and breadth.",
          b: "38 m is the distance around, not the covering.",
          c: "19 is only length plus breadth once.",
        },
      ),
      writeQ(
        "g6m-pa-p3",
        "An L-shaped floor is a 5-by-4 rectangle with a 2-by-2 square missing from one corner (same units). What is the area in unit squares?",
        ["16", "16 unit squares", "sixteen"],
        "Big rectangle 5 × 4 = 20. Missing square 2 × 2 = 4. Area 20 − 4 = 16 unit squares.",
        "Find the whole, then subtract the missing piece.",
        "Adding 5, 4, 2, and 2 mixes side lengths with covering.",
      ),
      explainQ(
        "g6m-pa-p4",
        "Why is the perimeter of two rectangles joined along a shared side usually less than the sum of their separate perimeters?",
        "When you join them, the shared side is no longer on the outer edge for either piece. Those two edge lengths leave the outer path, so the combined perimeter is smaller than adding the two separate perimeters.",
        "Which edges disappear from the walk around the outside?",
        "Shared edges are inside the join, not on the outer path.",
        ["share|join|common|together", "outer|around|perimeter|edge", "less|smaller|not add|disappear"],
      ),
    ],
    reasoning: [
      q(
        "g6m-pa-r1",
        "A storage cuboid is 4 unit cubes long, 3 wide, and 2 high. Fairest volume move?",
        "4 × 3 × 2 = 24 unit cubes",
        "4 + 3 + 2 = 9 unit cubes",
        "count only the cubes you can see on the front face",
        "a",
        "Volume fills every layer: 4 × 3 = 12 per layer, times 2 layers is 24. Adding edges or counting only the front leaves cubes out.",
        "How many cubes sit in one layer, then how many layers?",
        "Edge sums and front faces are not the full fill.",
        {
          a: "You filled length × width × height.",
          b: "Adding the three measures is not filling space.",
          c: "Hidden cubes behind and above still count.",
        },
      ),
      writeQ(
        "g6m-pa-r2",
        "A flat net of a cube shows 6 equal square faces. A long cuboid also has 6 faces. What still makes the cuboid look different from a cube?",
        [
          "some faces are rectangles that are not squares",
          "faces not all equal squares",
          "stretched rectangular faces",
        ],
        "Both have 6 faces, but a cube’s faces are equal squares while a longer cuboid has rectangular faces that are not all the same size.",
        "Same face count — what about face shapes?",
        "Saying only 'six faces' misses why the solids look different.",
      ),
    ],
    retrieve: [
      q(
        "g6m-pa-t1",
        "Perimeter is best thought of as…",
        "the distance around the outer edge",
        "how many unit squares cover the inside",
        "how many unit cubes fill a box",
        "a",
        "Around the edge is perimeter. Covering is area. Filling space is volume.",
        "Are you walking the border or filling a region?",
        "Covering and cube counts answer different questions.",
        {
          a: "You named the path around.",
          b: "Unit squares covering the inside are area.",
          c: "Unit cubes filling a box are volume.",
        },
      ),
      explainQ(
        "g6m-pa-t2",
        "A hallway is a 10-by-3 rectangle joined to a 4-by-3 rectangle along the short side of length 3. Why can you find the total floor area by adding 30 and 12?",
        "Each piece is a rectangle: 10 × 3 = 30 and 4 × 3 = 12. They share an edge but do not overlap as floor regions, so the total covering is 30 + 12 = 42 square units.",
        "Do the two floor regions overlap, or only share an edge?",
        "Shared edges do not remove area when the floors sit side by side.",
        ["add|thirty|30|twelve|12", "rectangle|area|cover", "overlap|edge|join"],
      ),
      q(
        "g6m-pa-t3",
        "Which story is volume, not area?",
        "how many unit cubes fit inside a closed box",
        "how many floor tiles cover a rectangular room",
        "how much ribbon wraps once around a gift box’s face outline",
        "a",
        "Cubes inside fill space — volume. Floor tiles are area. Ribbon around an outline is perimeter thinking.",
        "Is the question about filling space?",
        "Tiles and ribbon stay on surfaces or edges.",
        {
          a: "You linked filling the box to volume.",
          b: "Floor tiles cover a flat area.",
          c: "Ribbon around an outline is a path length.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "Area and perimeter are the same number for every rectangle.",
        correction:
          "Perimeter adds side lengths; area multiplies length by breadth. The numbers match only in special cases, not always.",
      },
      {
        idea: "Only the cubes you can see on the outside of a stack count as volume.",
        correction:
          "Hidden cubes inside and behind still fill the block — count every layer.",
      },
    ],
    reflect: {
      prompt:
        "Where this week could you measure around something (perimeter) and also talk about how much surface it covers (area)?",
      keyIdeas: ["perimeter|around|edge", "area|cover|square"],
    },
    mastery: q(
      "g6m-pa-m1",
      "To find the area of a rectangular floor and the fencing around it you should…",
      "multiply length by breadth for area, and add the four sides (or 2 × (l + b)) for perimeter",
      "use the same number for both fencing and floor covering",
      "add length and breadth once and call that both answers",
      "a",
      "Covering and walking the edge are different jobs. One product and one side-sum (or double of length + breadth) keep them honest.",
      "Which question asks for covering, and which for the path?",
      "One shared number or a single side-sum cannot answer both.",
      {
        a: "You separated covering from the path around.",
        b: "Area and perimeter are different measures.",
        c: "Length plus breadth once is only half a rectangle’s perimeter.",
      },
    ),
    masteryCriteria:
      "You can find rectangle perimeter and area, handle a simple composite area, and lightly count cubes or use l × w × h for a cuboid’s volume.",
    teach: {
      prompt:
        "Draw a 6-by-4 rectangle with a 2-by-2 missing corner. Teach Ivshi the composite area and say one sentence about how perimeter of the L differs from the big rectangle’s perimeter.",
      keyIdeas: ["area|subtract|composite", "perimeter|outer|edge", "rectangle|unit"],
    },
  },
});

export const fractionsLesson = grade6MathLesson({
  conceptId: "ncert-g6-ganita-prakash-fractions-core",
  title: "Fractions",
  domainTitle: "Fractions",
  prerequisites: ["ncert-g6-ganita-prakash-perimeter-and-area-core"],
  nextConceptIds: ["ncert-g6-ganita-prakash-playing-with-constructions-core"],
  content: {
    objective:
      "Practise equivalent fractions and add like fractions, read mixed numbers, connect fractions to decimals and percent, and solve short fraction word stories.",
    wonder: {
      prompt:
        "You shade 2/4 of a chocolate bar. A friend says that is the same as 1/2. Another friend wants to add 1/4 more of the same bar. What stays the same when you rename 2/4, and what do you add when the denominators match?",
    },
    explore: {
      text: "Equivalent fractions name the same amount with different sized pieces — multiply or divide the numerator and denominator by the same number. Like fractions share a denominator: add the numerators and keep that denominator. A mixed number is wholes plus a leftover fraction. Tenths and hundredths link to decimals; parts of a hundred link to percent.",
      activity: {
        prompt: "2/4 of a bar, then add 1/4 more. Which reading fits?",
        choices: [
          {
            id: "half-then-three",
            label: "2/4 is the same as 1/2; 2/4 + 1/4 = 3/4 of the bar",
            note: "You renamed an equivalent fraction and added like denominators.",
          },
          {
            id: "add-bottoms",
            label: "Add denominators too: 2/4 + 1/4 = 3/8",
            note: "Same-sized pieces keep the denominator; only numerators add.",
          },
          {
            id: "not-half",
            label: "2/4 cannot equal 1/2 because the digits look different",
            note: "Same amount can wear different fraction clothes when pieces resize together.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Equivalent fractions: multiply (or divide) top and bottom by the same non-zero number. 1/3 = 2/6 = 3/9. The amount stays the same; the piece size changes.",
        "Adding like fractions: same denominator means same piece size. Add numerators, keep the denominator. 3/8 + 2/8 = 5/8. Unlike denominators need a shared denominator first — start with like cases here.",
        "A mixed number such as 2 1/4 means 2 wholes and 1/4 more. You can also write it as an improper fraction 9/4 when that helps.",
        "Decimals: tenths and hundredths are equal parts of a whole. 3/10 = 0.3 and 25/100 = 0.25. Line up places when you add decimals.",
        "Percent means parts per hundred. 1/4 = 25/100 = 25%. Money often uses hundredths of a rupee — the same hundredths idea.",
      ],
    },
    examples: [
      {
        caption: "Equivalent",
        body: "2/5 = 4/10 = 6/15 (multiply top and bottom by 2, then by 3).",
      },
      {
        caption: "Like sum",
        body: "5/12 + 4/12 = 9/12, which simplifies to 3/4.",
      },
      {
        caption: "Percent link",
        body: "1/2 of a class is 50 out of 100 parts — 50%.",
      },
    ],
    connection:
      "Sharing food, reading recipes, discounts in a shop, and cricket run rates all lean on fractions, decimals, or percent.",
    try: {
      prompt:
        "Write two fractions equivalent to 3/4. Then find 3/10 + 4/10. Write 1/5 as a percent.",
      reveal:
        "Examples: 6/8 and 9/12. Sum 7/10. 1/5 = 20/100 = 20%.",
    },
    practice: [
      q(
        "g6m-fr-p1",
        "Which fraction is equivalent to 3/5?",
        "6/10",
        "3/10",
        "5/3",
        "a",
        "Multiply top and bottom by 2: 3/5 = 6/10. 3/10 changes only the bottom; 5/3 flips the fraction.",
        "Do the same to numerator and denominator.",
        "Changing only one part breaks equivalence.",
        {
          a: "You scaled top and bottom together.",
          b: "3/10 keeps the numerator but shrinks the whole differently.",
          c: "5/3 is the reciprocal, not an equivalent rename.",
        },
      ),
      q(
        "g6m-fr-p2",
        "What is 2/9 + 5/9?",
        "7/9",
        "7/18",
        "10/9",
        "a",
        "Like denominators: add numerators 2 + 5 = 7, keep 9. Adding denominators makes 7/18; 10/9 would need different tops.",
        "Same piece size — what happens to the tops?",
        "Denominators stay when pieces already match.",
        {
          a: "You added like numerators and kept the denominator.",
          b: "7/18 adds the denominators as well.",
          c: "10/9 is not 2 + 5 over 9.",
        },
      ),
      writeQ(
        "g6m-fr-p3",
        "A bottle has 0.35 litres, then you pour in 0.20 litres more. How many litres in all? (Accept decimal form.)",
        ["0.55", "0.55 litres", "0.55 L", ".55"],
        "Line up hundredths: 0.35 + 0.20 = 0.55 litres.",
        "Add tenths and hundredths with places lined up.",
        "Adding 35 + 20 without the decimal point loses the litre story.",
      ),
      explainQ(
        "g6m-fr-p4",
        "Why is 50% the same amount as 1/2 of a whole, in a because sentence?",
        "Because percent means parts of a hundred, and 50 out of 100 is the same share as 1 out of 2 — both name half of the whole.",
        "How many parts make a full hundred? How many halves make a whole?",
        "Percent and fraction are two names for the same share when they match.",
        ["fifty|50|hundred|percent", "half|1/2|one half", "same|share|equal|because"],
      ),
    ],
    reasoning: [
      q(
        "g6m-fr-r1",
        "A ribbon is 3 1/4 m long. You use 1 1/4 m. How much is left?",
        "2 m",
        "4 2/4 m",
        "2 2/4 m",
        "a",
        "Wholes: 3 − 1 = 2. Fractions: 1/4 − 1/4 = 0. Left is 2 m. Adding would grow the ribbon; keeping an extra 2/4 mixes the story.",
        "Subtract wholes and like fractional parts separately.",
        "Adding the lengths answers 'together', not 'left'.",
        {
          a: "You subtracted matching mixed parts.",
          b: "4 2/4 would add the lengths.",
          c: "2 2/4 keeps an extra half-quarter that was already used.",
        },
      ),
      writeQ(
        "g6m-fr-r2",
        "Find 25% of 80.",
        ["20", "20 marks", "twenty"],
        "25% is 25/100 = 1/4. One fourth of 80 is 20.",
        "Percent of a number means that many hundredths of it.",
        "Writing 25 × 80 without the hundredths idea overshoots the share.",
      ),
    ],
    retrieve: [
      q(
        "g6m-fr-t1",
        "To show 4/6 is equivalent to 2/3 you can…",
        "divide top and bottom of 4/6 by 2",
        "add 2 to the numerator only",
        "swap 4 and 6",
        "a",
        "Dividing by the same number keeps the value. Changing only the top or flipping breaks equivalence.",
        "What same action can shrink both parts?",
        "One-sided changes and flips rename a different amount.",
        {
          a: "You simplified by the same factor.",
          b: "Changing only the numerator breaks the equal share.",
          c: "Swapping makes 6/4, a different value.",
        },
      ),
      explainQ(
        "g6m-fr-t2",
        "Why do you keep the denominator when adding 3/7 + 2/7?",
        "The 7 says the whole is cut into 7 equal pieces. Both fractions use that same piece size, so you only count how many pieces: 3 + 2 = 5 pieces of size 1/7, written 5/7.",
        "What does the denominator tell you about piece size?",
        "Same-sized pieces stack by counting pieces, not by adding the size label.",
        ["same|like|equal piece|denominator", "add|numerator|count|pieces", "keep|seven|7"],
      ),
      q(
        "g6m-fr-t3",
        "0.07 as a fraction of one whole is…",
        "7/100",
        "7/10",
        "70/100",
        "a",
        "The hundredths place means 7 hundredths: 7/100. Tenths would be 0.7; 70/100 is 0.70.",
        "Which place is two digits after the point?",
        "Tenths and hundredths are different slice sizes.",
        {
          a: "You read the hundredths place.",
          b: "7/10 is seven tenths (0.7).",
          c: "70/100 is seventy hundredths (0.70).",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "When adding fractions you always add the denominators as well.",
        correction:
          "For like fractions, keep the shared denominator and add only the numerators.",
      },
      {
        idea: "Different-looking fractions can never name the same amount.",
        correction:
          "Equivalent fractions use different piece sizes for the same share — scale top and bottom together.",
      },
    ],
    reflect: {
      prompt:
        "Where could you rename a share with an equivalent fraction or a percent this week (food, marks, or money)?",
      keyIdeas: ["equivalent|same|share", "percent|decimal|fraction"],
    },
    mastery: q(
      "g6m-fr-m1",
      "A fair first move for 5/8 + 2/8 and for renaming 1/3 is…",
      "add to get 7/8; rename 1/3 by scaling top and bottom (for example to 2/6)",
      "add denominators for the sum; leave 1/3 with no equivalent forms",
      "flip both fractions before doing anything",
      "a",
      "Like sums keep the denominator. Equivalence scales both parts. Adding bottoms or flipping changes the story.",
      "Which job is adding like pieces, and which is renaming?",
      "Denominator sums and flips are different operations.",
      {
        a: "You handled like addition and equivalence separately.",
        b: "Denominators stay for like sums; 1/3 has many renames.",
        c: "Flipping makes reciprocals, not these answers.",
      },
    ),
    masteryCriteria:
      "You can find equivalent fractions, add like fractions, and lightly link fractions to decimals, percent, mixed numbers, and short word stories.",
    teach: {
      prompt:
        "Show Ivshi that 2/6 equals 1/3, then teach adding 1/6 + 4/6 with a because sentence about piece size.",
      keyIdeas: ["equivalent|scale|same", "like|denominator|add", "because|piece"],
    },
  },
});

export const playingWithConstructionsLesson = grade6MathLesson({
  conceptId: "ncert-g6-ganita-prakash-playing-with-constructions-core",
  title: "Playing with Constructions",
  domainTitle: "Constructions",
  prerequisites: ["ncert-g6-ganita-prakash-fractions-core"],
  nextConceptIds: ["ncert-g6-ganita-prakash-symmetry-core"],
  content: {
    objective:
      "Describe compass circles with a fixed radius, name polygons by side count, spot regular polygons, and notice parallel sides in parallelograms, rhombuses, and trapeziums.",
    wonder: {
      prompt:
        "You open a compass so the pencil tip stays 4 cm from the centre point. What shape do you draw when you swing a full turn — and how is that different from drawing a six-sided figure with a ruler?",
    },
    explore: {
      text: "A compass keeps a fixed distance (radius) from a centre while the pencil moves — that path is a circle. Polygons are closed shapes made of straight sides: triangle (3), quadrilateral (4), pentagon (5), hexagon (6), and so on. A regular polygon has equal sides and equal angles. Among quadrilaterals, a parallelogram has two pairs of parallel sides; a rhombus is a parallelogram with equal sides; a trapezium has exactly one pair of parallel sides.",
      activity: {
        prompt: "Compass set at 4 cm from the centre, full swing. You have drawn…",
        choices: [
          {
            id: "circle",
            label: "a circle with radius 4 cm",
            note: "Every point on the path stays 4 cm from the centre.",
          },
          {
            id: "hexagon",
            label: "a regular hexagon automatically",
            note: "A full smooth swing makes a circle; a hexagon needs six straight sides.",
          },
          {
            id: "radius-change",
            label: "a circle whose radius keeps changing as you turn",
            note: "A locked compass opening keeps the radius fixed.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Centre and radius: the compass point sits at the centre; the opening is the radius. Diameter is twice the radius across the centre.",
        "Copying a length: set the compass to a segment, then mark that same distance elsewhere — useful for constructing equal sides.",
        "Name a polygon by counting straight sides (and equal number of angles). Stay closed: the last side meets the first.",
        "Regular means equal sides and equal angles. A square is a regular quadrilateral; an equilateral triangle is a regular triangle.",
        "Parallel sides never meet and stay the same distance apart. Parallelogram: both pairs parallel. Rhombus: parallelogram with all sides equal. Trapezium: exactly one pair parallel.",
      ],
    },
    examples: [
      {
        caption: "Circle",
        body: "Radius 3 cm → every point on the circle is 3 cm from the centre; diameter 6 cm.",
      },
      {
        caption: "Naming",
        body: "A closed shape with 5 straight sides is a pentagon.",
      },
      {
        caption: "Parallel pairs",
        body: "A rectangle is a parallelogram (opposite sides parallel). A kite usually is not, unless its sides create that pattern.",
      },
    ],
    connection:
      "Rangoli circles, window frames, floor tiles, and geometry boxes all use radius, straight sides, and parallel edges.",
    try: {
      prompt:
        "Name a polygon with 6 sides. Say one property of a regular hexagon. Name the parallel-side count for a trapezium.",
      reveal:
        "Hexagon. Regular: equal sides and equal angles. Trapezium: exactly one pair of parallel sides.",
    },
    practice: [
      q(
        "g6m-pc-p1",
        "A compass opening stays 5 cm while you draw a full turn about a fixed centre. The radius is…",
        "5 cm",
        "10 cm",
        "changing as you turn",
        "a",
        "The fixed opening is the radius. 10 cm would be a diameter if the radius were 5 cm. The opening does not change mid-turn if the compass stays locked.",
        "What distance is locked between point and pencil?",
        "Diameter is across; a locked opening does not drift.",
        {
          a: "You named the fixed centre-to-pencil distance.",
          b: "10 cm is twice 5 cm — a diameter idea.",
          c: "A locked compass keeps one radius.",
        },
      ),
      q(
        "g6m-pc-p2",
        "A closed straight-sided shape has 8 sides. Its name is…",
        "octagon",
        "hexagon",
        "pentagon",
        "a",
        "Octa- points to eight. Hexagon has 6; pentagon has 5.",
        "Count the sides, then match the name.",
        "Six- and five-side names belong to other counts.",
        {
          a: "You matched eight sides to octagon.",
          b: "A hexagon has six sides.",
          c: "A pentagon has five sides.",
        },
      ),
      writeQ(
        "g6m-pc-p3",
        "How many pairs of parallel sides does a parallelogram have?",
        ["2", "two", "2 pairs", "two pairs"],
        "A parallelogram has two pairs of parallel sides (both pairs of opposite sides).",
        "Look at opposite sides.",
        "Counting only one pair would describe a trapezium, not a parallelogram.",
      ),
      explainQ(
        "g6m-pc-p4",
        "Why is a square a regular polygon, in a because sentence?",
        "Because a square has all sides equal and all angles equal (right angles), so it meets the regular-polygon idea for a four-sided shape.",
        "What two things must be equal in a regular polygon?",
        "Equal sides alone or equal angles alone are not the full regular story for polygons.",
        ["equal sides|same sides", "equal angles|right|90", "regular|square|because"],
      ),
    ],
    reasoning: [
      q(
        "g6m-pc-r1",
        "Which statement about a rhombus is fairest?",
        "it is a parallelogram with all sides equal",
        "it always has exactly one pair of parallel sides",
        "it can never have four equal angles",
        "a",
        "A rhombus keeps both pairs of sides parallel and all sides equal. Exactly one parallel pair is the trapezium story. Some rhombi are squares with four equal angles.",
        "Start from parallelogram, then add equal sides.",
        "Trapezium parallel count and 'never square angles' overshoot.",
        {
          a: "You placed the rhombus in the parallelogram family.",
          b: "One parallel pair names a trapezium.",
          c: "A square is a special rhombus with equal angles.",
        },
      ),
      explainQ(
        "g6m-pc-r2",
        "You want two sides of a triangle to be equal. How does a compass help you copy a length?",
        "Set the compass to the first side’s length, keep that opening, then from a vertex swing an arc or mark the same distance on another ray so the new side matches the copied length.",
        "What stays fixed when the compass opening is locked?",
        "The compass stores a distance you can mark again.",
        ["compass|opening|radius|distance", "copy|same|equal|mark", "side|length|vertex"],
      ),
    ],
    retrieve: [
      q(
        "g6m-pc-t1",
        "A trapezium (in this chapter’s sense) has…",
        "exactly one pair of parallel sides",
        "two pairs of parallel sides",
        "no parallel sides ever",
        "a",
        "Exactly one parallel pair marks a trapezium here. Two pairs is parallelogram territory.",
        "How many parallel pairs?",
        "Zero pairs or two pairs name other shapes.",
        {
          a: "You used the one-pair parallel definition.",
          b: "Two pairs describe a parallelogram.",
          c: "Trapeziums are defined by that one parallel pair.",
        },
      ),
      writeQ(
        "g6m-pc-t2",
        "A circle has radius 6 cm. What is the diameter?",
        ["12", "12 cm", "twelve", "12 centimetres"],
        "Diameter is twice the radius: 2 × 6 = 12 cm.",
        "Diameter goes across through the centre.",
        "Leaving the radius as 6 cm names a different segment.",
      ),
      q(
        "g6m-pc-t3",
        "Which shape is regular?",
        "equilateral triangle (all sides equal, all angles equal)",
        "any scalene triangle with three different side lengths",
        "any quadrilateral with only one pair of parallel sides",
        "a",
        "Regular needs equal sides and equal angles. Scalene sides differ. One parallel pair is trapezium talk, not regularity.",
        "Equal sides and equal angles together.",
        "Unequal sides or only parallel-side counts are not enough.",
        {
          a: "You named a regular three-sided polygon.",
          b: "Scalene sides are all different.",
          c: "A trapezium need not be regular.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "Any closed curved path drawn with a compass is a polygon.",
        correction:
          "Polygons need straight sides. A compass full turn makes a circle, not a polygon.",
      },
      {
        idea: "Parallelogram and trapezium mean the same parallel-side pattern.",
        correction:
          "Parallelogram: two pairs parallel. Trapezium: exactly one pair parallel.",
      },
    ],
    reflect: {
      prompt:
        "What object at home shows a circle (radius idea) or a polygon you can name by counting sides?",
      keyIdeas: ["circle|radius|compass", "polygon|sides|parallel"],
    },
    mastery: q(
      "g6m-pc-m1",
      "When constructing and naming figures, a strong habit is to…",
      "keep a compass radius fixed for a circle, count sides to name a polygon, and check parallel pairs for quadrilaterals",
      "call every straight-sided shape a circle",
      "assume every quadrilateral is regular",
      "a",
      "Radius, side count, and parallel pairs answer different questions. Circles are not polygons; regularity is special.",
      "What tool locks distance? What do you count? What do you check for parallels?",
      "Mixing circle and polygon names, or assuming regularity, hides detail.",
      {
        a: "You separated circle, naming, and parallel checks.",
        b: "Straight sides make polygons, not circles.",
        c: "Only special quadrilaterals are regular.",
      },
    ),
    masteryCriteria:
      "You can describe a compass circle, name common polygons, recognise regular polygons, and tell parallelogram, rhombus, and trapezium by parallel sides.",
    teach: {
      prompt:
        "Teach Ivshi how a compass draws a circle of radius 3 cm, then name one regular polygon and one trapezium property.",
      keyIdeas: ["compass|centre|radius", "regular|equal", "trapezium|parallel"],
    },
  },
});

export const symmetryLesson = grade6MathLesson({
  conceptId: "ncert-g6-ganita-prakash-symmetry-core",
  title: "Symmetry",
  domainTitle: "Symmetry",
  prerequisites: ["ncert-g6-ganita-prakash-playing-with-constructions-core"],
  nextConceptIds: ["ncert-g6-ganita-prakash-the-other-side-of-zero-core"],
  content: {
    objective:
      "Find lines of symmetry, complete reflection designs across a mirror line, and explain how matching points sit opposite across that line.",
    wonder: {
      prompt:
        "You fold a paper butterfly so the wings match. Where is the fold — and what happens to a dot 2 cm left of the fold when you reflect it to the other side?",
    },
    explore: {
      text: "A line of symmetry is a mirror line: one side is the reflection of the other. Reflecting a point across a line keeps the same distance from the line and lands straight opposite, perpendicular to the mirror. Shapes can have one line, several lines, or none. Completing a design means placing each point or edge so the mirror match holds.",
      activity: {
        prompt: "A dot is 2 cm left of a vertical mirror line. Its reflection is…",
        choices: [
          {
            id: "two-right",
            label: "2 cm right of the line, level with the first dot",
            note: "Same distance, opposite side, same height along the mirror.",
          },
          {
            id: "two-left",
            label: "another 2 cm further left",
            note: "Reflection crosses the mirror; it does not slide farther away on the same side.",
          },
          {
            id: "on-line",
            label: "exactly on the mirror line",
            note: "Only points already on the line stay on the line; others cross to the other side.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Fold test: if a shape matches when folded along a line, that fold is a line of symmetry.",
        "Reflection: each point maps to a partner the same distance from the line, on a path at right angles to the line.",
        "Points on the mirror line stay put — they are their own reflections.",
        "A square has four lines of symmetry; an equilateral triangle has three; a typical scalene triangle has none; a rectangle that is not a square has two.",
        "Ink-blot and rangoli designs often grow from a mirror line: draw one half, then match the other half.",
      ],
    },
    examples: [
      {
        caption: "Distance",
        body: "Point 3 cm above a horizontal mirror → image 3 cm below, same left–right place.",
      },
      {
        caption: "Count lines",
        body: "Isosceles triangle with two equal sides: usually one line of symmetry down the middle.",
      },
      {
        caption: "Complete",
        body: "A flag on the left of a vertical line needs a matching flag on the right at the same height and distance.",
      },
    ],
    connection:
      "Masks, logos, temple kolam, and window grills often use mirror symmetry so both halves feel balanced.",
    try: {
      prompt:
        "How many lines of symmetry does a circle have? A capital letter T (drawn evenly) — one line or none?",
      reveal:
        "A circle has infinitely many diameters as mirror lines. A balanced T has one vertical line of symmetry.",
    },
    practice: [
      q(
        "g6m-sy-p1",
        "A point is 4 cm to the right of a vertical mirror line. Where is its reflection?",
        "4 cm to the left of the line, at the same height",
        "8 cm to the right of the line",
        "4 cm above the original point on the same side",
        "a",
        "Reflection flips across the mirror at equal distance. Sliding farther on the same side or only moving up is not a mirror match.",
        "Same distance, opposite side.",
        "Same-side moves are translations, not reflections.",
        {
          a: "You crossed the mirror at equal distance.",
          b: "8 cm on the same side doubles the distance without flipping.",
          c: "Moving up on the same side does not reflect.",
        },
      ),
      q(
        "g6m-sy-p2",
        "How many lines of symmetry does a square have?",
        "4",
        "1",
        "0",
        "a",
        "Two diagonals and two midlines through opposite sides — four mirrors. One or zero undercounts.",
        "Think midlines and diagonals.",
        "A square is rich in mirror lines.",
        {
          a: "You counted both pairs of midlines and both diagonals.",
          b: "One line would fit some isosceles shapes, not a square.",
          c: "A square matches across several folds.",
        },
      ),
      writeQ(
        "g6m-sy-p3",
        "A capital letter H with equal bars — how many lines of symmetry does it have?",
        ["2", "two", "2 lines"],
        "A balanced H has a vertical and a horizontal line of symmetry — two lines.",
        "Try folding left–right and up–down.",
        "Counting only one fold misses the second match.",
      ),
      explainQ(
        "g6m-sy-p4",
        "Why do points on the line of symmetry stay in the same place when you reflect?",
        "Their distance to the mirror is zero, so the partner on the other side is the same point — there is no other side to jump to.",
        "How far is a point on the line from the line?",
        "Zero distance means the image and the point coincide.",
        ["on|line|mirror|zero", "same|stay|fixed|coincide", "distance|reflect"],
      ),
    ],
    reasoning: [
      q(
        "g6m-sy-r1",
        "A scalene triangle has three different side lengths. Fairest symmetry claim?",
        "it usually has no line of symmetry",
        "it always has three lines of symmetry",
        "it must have exactly one line of symmetry",
        "a",
        "Unequal sides typically prevent a matching fold. Three lines fit equilateral; one line fits many isosceles cases.",
        "Can you fold it so sides match?",
        "Equal-side stories need equal sides.",
        {
          a: "You linked unequal sides to no mirror match.",
          b: "Three lines need all sides (and angles) equal.",
          c: "One line needs a matching pair of sides.",
        },
      ),
      explainQ(
        "g6m-sy-r2",
        "You reflect a triangle across a line and the image overlaps the original exactly. What does that tell you about the line?",
        "The line is a line of symmetry of the triangle — reflecting across it maps the shape onto itself.",
        "Does the image sit somewhere new, or on top of the start shape?",
        "Overlap after reflection signals a symmetry line.",
        ["symmetry|mirror|line", "overlap|itself|same|onto", "reflect|image"],
      ),
    ],
    retrieve: [
      q(
        "g6m-sy-t1",
        "Reflection across a line keeps…",
        "distance to the line and flips to the other side",
        "the point on the same side but farther away",
        "only the colour of the point, never its place",
        "a",
        "Equal distance, opposite side. Same-side slides and colour-only talk are not geometric reflection.",
        "What stays equal? Which side do you land on?",
        "Farther on the same side is not a mirror flip.",
        {
          a: "You named equal distance and opposite side.",
          b: "Same-side farther is not reflection.",
          c: "Place matters in geometry reflection.",
        },
      ),
      writeQ(
        "g6m-sy-t2",
        "A rectangle that is not a square — how many lines of symmetry?",
        ["2", "two", "2 lines"],
        "Two lines: through the midpoints of opposite sides. The diagonals are not symmetry lines unless it is a square.",
        "Fold length-wise and width-wise.",
        "Counting four would treat it like a square.",
      ),
      q(
        "g6m-sy-t3",
        "To complete a rangoli across a vertical mirror, a flower 3 cm left of the line should get a partner…",
        "3 cm right of the line at the same height",
        "3 cm left and 3 cm higher",
        "anywhere on the right as long as it looks pretty",
        "a",
        "Matching distance and height keep the reflection honest. Shifting only up or placing freely breaks the mirror rule.",
        "Same distance, opposite side, aligned across.",
        "Pretty placement without the rule is decoration, not reflection.",
        {
          a: "You matched distance and height across the line.",
          b: "Moving up on the same side is not the partner.",
          c: "Reflection follows distance, not only taste.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "Every triangle has at least one line of symmetry.",
        correction:
          "Only special triangles (isosceles or equilateral) do. A scalene triangle typically has none.",
      },
      {
        idea: "Reflecting a point means moving it farther on the same side of the line.",
        correction:
          "Reflection crosses to the other side at equal distance from the mirror line.",
      },
    ],
    reflect: {
      prompt:
        "What logo, letter, or window design could you check for a line of symmetry this week?",
      keyIdeas: ["mirror|line|symmetry", "reflect|match|fold"],
    },
    mastery: q(
      "g6m-sy-m1",
      "To finish a reflection design you should…",
      "place each partner the same distance on the other side of the mirror line",
      "copy shapes only on the same side of the line",
      "ignore distance and only match colours",
      "a",
      "Equal distance across the line builds the mirror. Same-side copies and colour-only matches miss the geometry.",
      "Where does each point’s partner sit?",
      "Same side or colour alone does not define reflection.",
      {
        a: "You used equal distance across the mirror.",
        b: "Same-side copies are not reflections across that line.",
        c: "Place and distance matter, not only colour.",
      },
    ),
    masteryCriteria:
      "You can count lines of symmetry for common shapes, reflect points across a mirror line, and complete a simple reflection design.",
    teach: {
      prompt:
        "Draw a vertical mirror line and a shape on one side. Teach Ivshi how to complete the reflection with a because about equal distance.",
      keyIdeas: ["mirror|line|reflect", "distance|opposite|equal", "because|match"],
    },
  },
});

export const theOtherSideOfZeroLesson = grade6MathLesson({
  conceptId: "ncert-g6-ganita-prakash-the-other-side-of-zero-core",
  title: "The Other Side of Zero",
  domainTitle: "Integers",
  prerequisites: ["ncert-g6-ganita-prakash-symmetry-core"],
  nextConceptIds: [],
  content: {
    objective:
      "Place and compare integers including negatives, keep a simple equation in balance, read ratios and proportions lightly, and plan two-step problem strategies with a check.",
    wonder: {
      prompt:
        "A thermometer shows −3°C in the morning and 2°C at noon. Which reading is colder — and how do you show both numbers on a number line with zero in the middle?",
    },
    explore: {
      text: "Integers include … −3, −2, −1, 0, 1, 2, 3… Negatives sit on the other side of zero from positives. On a number line, numbers increase to the right: −5 is less than −2, and −2 is less than 3. An equation stays true when both sides stay in balance. A ratio compares two quantities; equivalent ratios scale both parts together. Word stories may need two steps — plan, compute, then check.",
      activity: {
        prompt: "Morning −3°C, noon 2°C. Which is colder, and why on a number line?",
        choices: [
          {
            id: "minus-colder",
            label: "−3°C is colder because it sits left of 2 on the number line",
            note: "Left means smaller. −3 is less than 2, so colder here.",
          },
          {
            id: "three-colder",
            label: "2°C is colder because 2 is a smaller-looking digit than 3",
            note: "Ignoring the minus sign misreads which side of zero you are on.",
          },
          {
            id: "same",
            label: "they are equally cold because both are near zero",
            note: "Near zero still allows one to be below and one above — not equal.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Zero is the balance point. Positive integers grow to the right; negative integers grow in magnitude to the left but are smaller in value as you move left.",
        "Compare by place on the line: the number farther right is greater. So −1 > −8, and 0 > −5.",
        "A light equation: if □ + 4 = 10, then □ = 6, because subtracting 4 from both sides keeps balance. Whatever you do to one side, do to the other.",
        "Ratio a : b compares a to b. Scaling both by the same number gives an equivalent ratio (2 : 3 = 4 : 6). A proportion says two ratios are equal; you can find a missing term when three parts are known.",
        "Problem-solving: draw, estimate, or work backwards. After an answer, check with a second path or a sensible estimate. Money change and 24-hour times can appear inside two-step stories.",
      ],
    },
    examples: [
      {
        caption: "Compare",
        body: "−7 < −2 < 0 < 5. The leftmost of these is the smallest.",
      },
      {
        caption: "Balance",
        body: "□ − 3 = 8 → add 3 to both sides → □ = 11.",
      },
      {
        caption: "Ratio",
        body: "Juice mix 1 : 4 means 1 part concentrate to 4 parts water. Doubling gives 2 : 8.",
      },
    ],
    connection:
      "Bank deposits and withdrawals, lift floors below ground, game scores below zero, and recipe mixes all use integers or ratios.",
    try: {
      prompt:
        "Place −4, 0, and 3 on a mental number line and say which is least. Solve □ + 5 = 12. Write a ratio equivalent to 3 : 5.",
      reveal:
        "Least is −4. □ = 7. Equivalent example: 6 : 10.",
    },
    practice: [
      q(
        "g6m-oz-p1",
        "Which list is in increasing order?",
        "−5, −1, 0, 2",
        "−1, −5, 0, 2",
        "2, 0, −1, −5",
        "a",
        "Increasing means left to right on the number line: −5, then −1, then 0, then 2. The other lists jump or decrease.",
        "Which way does the number line grow?",
        "Jumping negatives or listing largest first is not increasing.",
        {
          a: "You ordered from least to greatest.",
          b: "−1 is greater than −5, so −1 should not come first.",
          c: "That list decreases.",
        },
      ),
      q(
        "g6m-oz-p2",
        "If □ − 6 = 9, what is □?",
        "15",
        "3",
        "−3",
        "a",
        "Add 6 to both sides: □ = 9 + 6 = 15. Subtracting or signing negative undoes the balance story.",
        "What keeps both sides equal after undoing −6?",
        "3 would be 9 − 6; the unknown is larger than 9.",
        {
          a: "You added 6 to both sides.",
          b: "3 is 9 − 6, not undoing a subtraction from □.",
          c: "−3 would sit on the other side of zero without cause here.",
        },
      ),
      writeQ(
        "g6m-oz-p3",
        "A bill is ₹85. You pay with a ₹100 note. How much change?",
        ["15", "15 rupees", "₹15", "Rs 15"],
        "Change 100 − 85 = 15 rupees.",
        "Subtract the bill from the note.",
        "Adding 100 and 85 answers a different question.",
      ),
      explainQ(
        "g6m-oz-p4",
        "Why is −8 less than −3, even though 8 looks bigger than 3?",
        "Because on the number line −8 sits farther left of zero than −3. Farther left means smaller value; the digit size without the minus sign does not decide the compare.",
        "Which way from zero do negatives go, and which direction is smaller?",
        "The minus sign places you on the other side of zero.",
        ["left|number line|smaller", "minus|negative|−8|−3", "digit|look|because"],
      ),
    ],
    reasoning: [
      q(
        "g6m-oz-r1",
        "Ratio of red to blue beads is 2 : 5. Which is equivalent?",
        "4 : 10",
        "2 : 10",
        "5 : 2",
        "a",
        "Multiply both parts by 2: 4 : 10. Changing only one part or flipping the order breaks equivalence.",
        "Scale both parts by the same number.",
        "One-sided changes and flips are different ratios.",
        {
          a: "You scaled both parts together.",
          b: "2 : 10 changes only the blue count.",
          c: "5 : 2 flips red and blue.",
        },
      ),
      writeQ(
        "g6m-oz-r2",
        "A bus leaves at 14:40 and arrives at 15:10. How many minutes is the trip? (Two-step: cross the hour, then add.)",
        ["30", "30 minutes", "thirty"],
        "From 14:40 to 15:00 is 20 minutes; plus 10 is 30 minutes.",
        "Count to the next hour, then add the leftover minutes.",
        "Subtracting 40 − 10 ignores the hour change.",
      ),
    ],
    retrieve: [
      q(
        "g6m-oz-t1",
        "On a number line, the greater of −4 and 1 is…",
        "1",
        "−4",
        "they are equal",
        "a",
        "1 sits to the right of −4, so 1 is greater. Negatives are less than positives here.",
        "Which sits farther right?",
        "Equal would need the same place on the line.",
        {
          a: "You chose the number farther right.",
          b: "−4 is left of 1, so it is smaller.",
          c: "Different places mean different values.",
        },
      ),
      explainQ(
        "g6m-oz-t2",
        "You solve a two-step money story and get ₹40 change. How could you check the answer?",
        "Add the change back to the bill and see if you recover the note you paid with — or estimate whether ₹40 is a sensible leftover from that note.",
        "What reverse step undoes 'note minus bill'?",
        "A check uses a second path or a sensible estimate.",
        ["add|check|reverse|estimate", "change|bill|note", "sensible|second|method"],
      ),
      q(
        "g6m-oz-t3",
        "Proportion: 3 / 4 = □ / 8. The missing number is…",
        "6",
        "5",
        "12",
        "a",
        "The denominator doubled from 4 to 8, so double the numerator: 3 × 2 = 6. 5 is a guess; 12 would triple.",
        "What same scale links 4 to 8?",
        "Scaling only one part of a proportion breaks the equality.",
        {
          a: "You scaled the numerator by the same factor.",
          b: "5 does not keep the ratio 3 to 4.",
          c: "12 would need a scale of 4, not 2.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "A negative number with a larger digit is always greater (so −9 > −2).",
        correction:
          "Among negatives, the one closer to zero (farther right) is greater: −2 > −9.",
      },
      {
        idea: "You can change only one side of an equation and it stays true.",
        correction:
          "Keep balance: the same operation on both sides preserves equality.",
      },
    ],
    reflect: {
      prompt:
        "Where might you meet a number below zero or a simple ratio this week (weather, scores, recipes)?",
      keyIdeas: ["negative|integer|zero", "ratio|compare|balance"],
    },
    mastery: q(
      "g6m-oz-m1",
      "Working on the other side of zero, a strong habit is to…",
      "place integers on a number line to compare, keep equations balanced, and scale both parts of a ratio together",
      "ignore minus signs and compare only digit size",
      "change one side of an equation freely without matching the other",
      "a",
      "Line place, balance, and two-part scaling keep integers, equations, and ratios honest. Digit-only and one-sided moves mislead.",
      "Compare how? Keep equations how? Build equivalent ratios how?",
      "Minus signs and both sides matter.",
      {
        a: "You named line compare, balance, and ratio scale.",
        b: "Digit size without the sign misorders negatives.",
        c: "One-sided equation changes break equality.",
      },
    ),
    masteryCriteria:
      "You can compare integers on a number line, solve a one-step balance equation, use simple ratios or proportions, and check a short two-step story.",
    teach: {
      prompt:
        "Place −2 and 3 on a number line for Ivshi, solve □ + 7 = 10, and give one equivalent ratio to 1 : 3.",
      keyIdeas: ["number line|compare|negative", "balance|equation", "ratio|equivalent"],
    },
  },
});
