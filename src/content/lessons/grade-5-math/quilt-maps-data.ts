import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade5MathLesson } from "@/content/lessons/grade-5-math/format";

export const grandmothersQuiltLesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-grandmothers-quilt-core",
  title: "Grandmother’s Quilt",
  domainTitle: "Area",
  prerequisites: ["ncert-g5-maths-mela-symmetrical-designs-core"],
  nextConceptIds: ["ncert-g5-maths-mela-racing-seconds-core"],
  content: {
    objective:
      "Count unit squares to find area, find a fraction of a quilt, use length × breadth for rectangles, join or split shapes for composite area, and lightly count faces or cubes on a small block.",
    wonder: {
      prompt:
        "Grandmother’s quilt is made of equal cloth squares. A blue patch covers 3 rows of 4 squares. How many unit squares is that blue patch — and how would you say it without counting one by one forever?",
    },
    explore: {
      text: "Area is how much surface a shape covers. On a quilt, each small equal square is a unit square. Counting those units is counting area. A rectangle’s area is also rows × columns (or length × breadth in the same units). A bigger patch may be two rectangles joined — add their areas. Sometimes a fraction of the quilt is shaded: compare shaded squares to all squares.",
      activity: {
        prompt: "A blue patch is 3 rows of 4 unit squares. Its area is…",
        choices: [
          {
            id: "twelve",
            label: "12 unit squares (3 × 4)",
            note: "You used rows times columns. Area is 12 unit squares.",
          },
          {
            id: "seven",
            label: "7 unit squares (3 + 4)",
            note: "Adding the sides gives a perimeter idea, not the covering count.",
          },
          {
            id: "only-border",
            label: "only the squares on the outer edge",
            note: "Area counts every square that covers the patch, including the middle.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Match the unit. One quilt square is one unit of area on that quilt. If two patches use the same size squares, you can compare their areas by counting.",
        "For a rectangle, area = length × breadth when both are measured in the same unit (for example, centimetres). On a grid, that is the same as rows × columns.",
        "Composite shapes: split into rectangles you know, find each area, then add. Or imagine a bigger rectangle and subtract a missing piece.",
        "A fraction of a quilt: if 6 of 24 equal squares are red, the red part is 6/24, which simplifies to 1/4 of the quilt.",
        "Beside the flat quilt, a small cuboid cushion has faces (flat sides), edges, and corners. A tiny stack of unit cubes can be counted layer by layer — that is filling space, not the same as flat area, but the counting idea is related.",
      ],
    },
    examples: [
      {
        caption: "Grid rectangle",
        body: "2 rows of 5 squares: area 10 unit squares. You can say 2 × 5 = 10.",
      },
      {
        caption: "Joined patches",
        body: "A 4-by-3 rectangle beside a 4-by-2 rectangle sharing the length-4 side: areas 12 and 8, total 20 unit squares.",
      },
      {
        caption: "Fraction",
        body: "Quilt of 5 × 4 = 20 squares. 5 yellow squares → yellow is 5/20 = 1/4 of the quilt.",
      },
    ],
    connection:
      "Floor tiles, garden beds, and wrapping paper all ask how much surface is covered — the same area idea as grandmother’s quilt.",
    try: {
      prompt:
        "A quilt panel is 6 squares long and 3 squares wide. What is its area in unit squares? If half the panel is green, about how many green squares?",
      reveal:
        "Area is 6 × 3 = 18 unit squares. Half of 18 is 9 green squares.",
    },
    practice: [
      q(
        "g5m-gq-p1",
        "A rectangular patch is 5 unit squares long and 4 unit squares wide. Area?",
        "20 unit squares",
        "9 unit squares",
        "18 unit squares",
        "a",
        "Area = 5 × 4 = 20 unit squares. 9 would add the sides; 18 might mix other numbers.",
        "Multiply length by breadth in matching units.",
        "Adding 5 and 4 finds a perimeter piece, not the covering count.",
        {
          a: "You multiplied length by breadth.",
          b: "9 adds the side lengths; area needs the product.",
          c: "18 is not 5 × 4 for this grid.",
        },
      ),
      q(
        "g5m-gq-p2",
        "A quilt has 8 equal squares; 2 are red. What fraction of the quilt is red?",
        "2/8, which is the same as 1/4",
        "2/6",
        "8/2",
        "a",
        "Red squares over all squares: 2/8 = 1/4. Keep the whole quilt as 8.",
        "Part over whole — same-size squares.",
        "2/6 would change the whole. 8/2 flips part and whole.",
        {
          a: "You compared red squares to all squares.",
          b: "The whole quilt has 8 squares, not 6.",
          c: "8/2 would mean wholes per red square — not the red fraction.",
        },
      ),
      writeQ(
        "g5m-gq-p3",
        "Two rectangles share no overlap: 3 × 4 and 2 × 5 (in unit squares). What is the total area?",
        ["22", "22 unit squares", "twenty-two"],
        "3 × 4 = 12 and 2 × 5 = 10. Total area 12 + 10 = 22 unit squares.",
        "Find each rectangle’s area, then add.",
        "Multiplying all four numbers together mixes the two shapes.",
      ),
      explainQ(
        "g5m-gq-p4",
        "Why is counting only the border squares not the same as finding the area of a filled rectangle?",
        "Area counts every unit square that covers the inside as well as the edge. The border alone leaves out the middle squares, so the covering is incomplete.",
        "Where do the middle squares go if you only walk the edge?",
        "Perimeter walks the edge; area fills the surface.",
        ["inside|middle|fill|cover", "border|edge|perimeter", "every|all|unit"],
      ),
    ],
    reasoning: [
      q(
        "g5m-gq-r1",
        "An L-shaped quilt piece is a 5-by-4 rectangle with a 2-by-2 square cut from one corner. Fairest area move?",
        "find 5 × 4, then subtract 2 × 2",
        "add 5, 4, 2, and 2 as one long sum",
        "count only the outer path of the L",
        "a",
        "Big rectangle 20, missing square 4, so area 16 unit squares. Composite area often uses subtract.",
        "What shape was there before the corner was cut?",
        "Adding side lengths is not covering. The outer path is perimeter thinking.",
        {
          a: "You used whole-minus-missing for composite area.",
          b: "Side lengths are not the covering count.",
          c: "The outer path skips the filled squares inside the L.",
        },
      ),
      writeQ(
        "g5m-gq-r2",
        "A small cuboid block is made of unit cubes: 2 layers, each a 3-by-2 rectangle of cubes. How many unit cubes in all?",
        ["12", "12 cubes", "twelve"],
        "Each layer has 3 × 2 = 6 cubes. Two layers: 12 unit cubes.",
        "Count one layer, then multiply by the number of layers.",
        "Counting only the visible front faces leaves cubes hiding behind.",
      ),
    ],
    retrieve: [
      q(
        "g5m-gq-t1",
        "On a grid, area of a rectangle is best thought of as…",
        "how many unit squares cover it (often rows × columns)",
        "how long the outer path is",
        "how heavy the cloth feels",
        "a",
        "Area is covering. Perimeter is the path. Weight is a different measure.",
        "What are you counting on the quilt grid?",
        "Path length and weight are useful elsewhere, not as area here.",
        {
          a: "You named covering with unit squares.",
          b: "That path is perimeter.",
          c: "Feeling heavy is mass, not area.",
        },
      ),
      explainQ(
        "g5m-gq-t2",
        "A cuboid cushion has 6 faces. Why can a cube also have 6 faces, and what still makes a long cuboid look different?",
        "Both a cube and a cuboid have 6 flat faces. On a cube all faces are equal squares; on a longer cuboid some faces are rectangles that are not squares, so the shape looks stretched.",
        "Count faces, then compare face shapes.",
        "Same face count does not mean same face sizes.",
        ["six|6|face", "square|rectangle|equal", "cuboid|cube|stretch|long"],
      ),
      q(
        "g5m-gq-t3",
        "Quilt 6 × 4 = 24 equal squares. Blue covers 8 squares. Blue is what part of the quilt?",
        "8/24, which is the same as 1/3",
        "8/16",
        "24/8",
        "a",
        "8 out of 24 simplifies by dividing by 8: 1/3 of the quilt.",
        "Part over whole, then simplify if you can.",
        "Changing the whole or flipping the fraction changes the story.",
        {
          a: "You used part over whole and simplified.",
          b: "16 is not the whole quilt here.",
          c: "24/8 flips the fraction.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "Area is the same as adding the length and the breadth.",
        correction: "Adding sides relates to perimeter. Area multiplies length by breadth (or counts unit squares).",
      },
      {
        idea: "Only the squares you can see on the front of a cube stack count.",
        correction: "Hidden cubes behind or under still fill the block — count every layer.",
      },
    ],
    reflect: {
      prompt: "Where at home could you count unit squares or tiles to talk about area this week?",
      keyIdeas: ["area|square|tile|cover", "row|column|multiply"],
    },
    mastery: q(
      "g5m-gq-m1",
      "To find the area of a rectangular quilt patch on a unit grid you should…",
      "count the covering unit squares, or multiply matching length and breadth",
      "add length and breadth only",
      "measure how long it takes to sew",
      "a",
      "Covering is area. Adding sides is not. Sewing time is a different story.",
      "What are the small equal squares for?",
      "Time and side-sums answer other questions.",
      {
        a: "You linked covering to rows × columns.",
        b: "Adding length and breadth is perimeter thinking.",
        c: "Sewing time is not area.",
      },
    ),
    masteryCriteria:
      "You can find rectangle and simple composite areas in unit squares, name a fraction of a quilt, and count faces or cubes lightly on a small block.",
    teach: {
      prompt:
        "Draw a 4-by-3 quilt patch and a 2-by-2 missing corner. Teach Ivshi the composite area with a because sentence.",
      keyIdeas: ["area|unit|square", "subtract|add|composite", "row|column"],
    },
  },
});

export const racingSecondsLesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-racing-seconds-core",
  title: "Racing Seconds",
  domainTitle: "Time",
  prerequisites: ["ncert-g5-maths-mela-grandmothers-quilt-core"],
  nextConceptIds: ["ncert-g5-maths-mela-animal-jumps-core"],
  content: {
    objective:
      "Work with minutes and seconds, find race durations between two times, and read afternoon race times on a 24-hour clock.",
    wonder: {
      prompt:
        "A sprint starts at 14:05 and ends at 14:07. How long did the race last — and what does the 14 mean if someone is used to saying 2 o’clock in the afternoon?",
    },
    explore: {
      text: "Time can be counted in hours, minutes, and seconds. Sixty seconds make one minute; sixty minutes make one hour. A duration is the gap between a start time and an end time. A 24-hour clock keeps counting past 12: afternoon 1:00 is 13:00, 2:00 is 14:00, and so on up to 23:59.",
      activity: {
        prompt: "A race starts at 14:05 and ends at 14:07. The duration is…",
        choices: [
          {
            id: "two-min",
            label: "2 minutes",
            note: "From :05 to :07 is a gap of 2 minutes.",
          },
          {
            id: "twelve",
            label: "12 minutes, because 5 + 7",
            note: "Adding the clock digits mixes start and end; duration is the gap.",
          },
          {
            id: "two-hours",
            label: "2 hours, reading only the 14",
            note: "The hour stayed 14; only the minutes moved from 5 to 7.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Seconds are for short races and stopwatch clicks. Minutes are for longer heats. Always name the unit when you compare two times.",
        "To find a duration, count forward from start to finish. Crossing an hour means using the leftover minutes to 60, then adding the new minutes.",
        "On a 12-hour clock, afternoon times need a.m. or p.m. On a 24-hour clock, afternoon hours are 13 to 23, so you do not need p.m. labels.",
        "Converting: for hours after noon, add 12 to the 12-hour afternoon hour (2 p.m. → 14:00). Midnight is 00:00; noon is 12:00.",
        "A race of 90 seconds is the same as 1 minute 30 seconds, because 60 + 30 = 90.",
      ],
    },
    examples: [
      {
        caption: "Seconds to minutes",
        body: "125 seconds = 2 minutes and 5 seconds (120 + 5).",
      },
      {
        caption: "Duration",
        body: "Start 10:48, end 11:05. From 10:48 to 11:00 is 12 minutes; plus 5 is 17 minutes.",
      },
      {
        caption: "24-hour afternoon",
        body: "3:30 p.m. is 15:30. 15 means 3 hours after noon.",
      },
    ],
    connection:
      "Sports day heats, bus timetables, and TV schedules all use durations and sometimes 24-hour times.",
    try: {
      prompt:
        "A relay starts at 16:20 and ends at 16:23. How long is it? Write 4:20 p.m. in 24-hour form.",
      reveal: "Duration 3 minutes. 4:20 p.m. is 16:20.",
    },
    practice: [
      q(
        "g5m-rs-p1",
        "How many seconds are in 3 minutes?",
        "180 seconds",
        "30 seconds",
        "63 seconds",
        "a",
        "3 × 60 = 180 seconds. Each minute holds 60 seconds.",
        "How many seconds sit in one minute?",
        "30 would be half a minute. 63 mixes 60 and 3 as digits.",
        {
          a: "You multiplied minutes by 60.",
          b: "30 seconds is only half a minute.",
          c: "Gluing 60 and 3 into 63 is not converting.",
        },
      ),
      q(
        "g5m-rs-p2",
        "Afternoon race time 17:45 on a 24-hour clock is the same as…",
        "5:45 p.m.",
        "5:45 a.m.",
        "17:45 a.m.",
        "a",
        "17 − 12 = 5, so 5:45 in the afternoon — p.m. Morning would be 05:45.",
        "Is 17 before or after noon?",
        "a.m. is morning. 17 already means evening on the 24-hour clock.",
        {
          a: "You converted afternoon hours by subtracting 12.",
          b: "5:45 a.m. would be early morning, written 05:45.",
          c: "24-hour times do not need an a.m. tag.",
        },
      ),
      writeQ(
        "g5m-rs-p3",
        "A heat starts at 14:50 and ends at 15:05. How many minutes long is it?",
        ["15", "15 minutes", "fifteen"],
        "From 14:50 to 15:00 is 10 minutes; plus 5 is 15 minutes.",
        "Count to the next hour, then add the leftover minutes.",
        "Subtracting 50 − 5 ignores the hour change.",
      ),
      explainQ(
        "g5m-rs-p4",
        "Why might a sports board prefer 15:00 instead of writing only '3' for an afternoon race?",
        "15:00 on a 24-hour clock clearly means 3 in the afternoon. A bare '3' could be morning or afternoon, so racers might miss their heat.",
        "What confusion can a.m. and p.m. cause if the label is missing?",
        "Clear time labels keep the schedule honest.",
        ["fifteen|15|afternoon|p\\.m\\.|pm", "morning|a\\.m\\.|am|confus", "24|hour|clock"],
      ),
    ],
    reasoning: [
      q(
        "g5m-rs-r1",
        "Runner A finishes in 2 minutes 10 seconds. Runner B finishes in 125 seconds. Who was quicker?",
        "Runner B — 125 seconds is 2 minutes 5 seconds, shorter than 2 minutes 10 seconds",
        "Runner A, because 2 looks smaller than 125",
        "they took the same time because both start with 2",
        "a",
        "Convert to the same unit: 2 min 10 s = 130 s. 125 s is less, so B is quicker.",
        "Change both times into seconds.",
        "Comparing the digit 2 to 125 mixes units.",
        {
          a: "You matched units, then compared.",
          b: "Minutes and raw seconds are different scales.",
          c: "Starting with 2 does not make the durations equal.",
        },
      ),
      writeQ(
        "g5m-rs-r2",
        "Write 2:15 p.m. as a 24-hour clock time.",
        ["14:15", "1415", "14.15"],
        "2 p.m. + 12 hours → 14:15.",
        "Add 12 to the afternoon hour.",
        "Leaving it as 2:15 without the 14 keeps the a.m./p.m. puzzle.",
      ),
    ],
    retrieve: [
      q(
        "g5m-rs-t1",
        "90 seconds equals…",
        "1 minute 30 seconds",
        "9 minutes",
        "30 minutes",
        "a",
        "60 seconds make a minute; 30 seconds remain. So 1 min 30 s.",
        "Pull out groups of 60 seconds.",
        "90 is not 9 minutes, and not half an hour.",
        {
          a: "You regrouped 60 seconds as one minute.",
          b: "9 minutes would be 540 seconds.",
          c: "30 minutes is half an hour — much longer.",
        },
      ),
      explainQ(
        "g5m-rs-t2",
        "A race starts at 11:55 and ends at 12:03. How do you find the duration without subtracting 55 − 3?",
        "Count forward: from 11:55 to 12:00 is 5 minutes, then to 12:03 is 3 more, total 8 minutes. Crossing noon needs the forward count, not digit subtraction.",
        "What happens when the clock rolls to a new hour?",
        "Digit subtraction across an hour change loses the roll-over.",
        ["forward|count|gap|duration", "five|5|eight|8", "hour|12|noon|roll"],
      ),
      q(
        "g5m-rs-t3",
        "On a 24-hour clock, midnight is usually written…",
        "00:00",
        "24:60",
        "12:60",
        "a",
        "00:00 starts the new day. Minutes only go to 59; 60 is not a clock minute.",
        "What time begins the day after 23:59?",
        "60 minutes is not a valid clock display.",
        {
          a: "You named the start of the day.",
          b: "Hours stop at 23; minutes stop at 59.",
          c: "12:60 is not a real clock reading.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "Larger-looking numbers always mean a longer race.",
        correction: "Compare in the same unit. 125 seconds can be shorter than 3 minutes.",
      },
      {
        idea: "Afternoon times on a 24-hour clock still need the same hour numeral as a.m.",
        correction: "After noon, add 12 for the 24-hour hour (2 p.m. → 14:00).",
      },
    ],
    reflect: {
      prompt: "What race, bus, or class time could you write both as p.m. and as 24-hour time?",
      keyIdeas: ["minute|second|duration", "24|hour|afternoon"],
    },
    mastery: q(
      "g5m-rs-m1",
      "To compare two race times fairly you should…",
      "use the same unit (or convert), then see which duration is shorter",
      "pick whichever time has smaller-looking digits",
      "ignore seconds and only read the hour",
      "a",
      "Same unit first. Digit looks and ignored seconds hide the true gap.",
      "Could both times become seconds?",
      "Looks and missing seconds are not fair compares.",
      {
        a: "You matched units before comparing.",
        b: "Digit size can trick you across units.",
        c: "Seconds often decide a close race.",
      },
    ),
    masteryCriteria:
      "You can convert minutes and seconds, find a duration across an hour change, and read or write afternoon times on a 24-hour clock.",
    teach: {
      prompt:
        "Invent a start and end time for a short race. Teach Ivshi the duration and show the start in 24-hour form if it is afternoon.",
      keyIdeas: ["duration|minute|second", "24|afternoon|p\\.m\\.", "start|end"],
    },
  },
});

export const animalJumpsLesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-animal-jumps-core",
  title: "Animal Jumps",
  domainTitle: "Patterns",
  prerequisites: ["ncert-g5-maths-mela-racing-seconds-core"],
  nextConceptIds: ["ncert-g5-maths-mela-maps-and-locations-core"],
  content: {
    objective:
      "Compare animal jump lengths, describe number or length patterns, find unknowns from clues, explain why with a because, and use a counter-example when a claim is not always true.",
    wonder: {
      prompt:
        "A frog jumps 40 cm, then 40 cm, then 40 cm. A rabbit’s jumps go 20 cm, 40 cm, 60 cm. Which animal is following a repeating jump length — and which is growing?",
    },
    explore: {
      text: "Jump records are numbers you can compare: longer, shorter, or equal. A pattern in jumps might repeat the same length, or grow by a rule you can say. Sometimes a jump length is missing — an unknown you find from the rule. A because uses the lengths or the rule. A counter-example is one case that shows a claim is not always true.",
      activity: {
        prompt: "Frog: 40, 40, 40. Rabbit: 20, 40, 60. Which reading fits?",
        choices: [
          {
            id: "repeat-grow",
            label: "Frog repeats 40 cm; rabbit grows by +20 cm each jump",
            note: "You named both rules: repeating unit vs growing jump.",
          },
          {
            id: "same-rule",
            label: "Both animals follow the same rule",
            note: "One list stays flat; the other climbs. The rules differ.",
          },
          {
            id: "rabbit-smaller",
            label: "Rabbit always jumps less than the frog",
            note: "By the third jump the rabbit reaches 60 cm, longer than 40.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Compare with the same unit (cm or m). Line the jumps up or subtract to find how much longer.",
        "Say the pattern in words: 'add 10 each time', or 'always 25 cm'. Check more than one jump before you decide.",
        "An unknown jump can be found when the rule is clear. If jumps go 15, 30, __, 60 and the rule is add 15, the missing jump is 45. Always match the rule to the whole list — doubling would look different (15, 30, 60, 120).",
        "Explain why with a because that names the lengths or the rule — not only 'it looks bigger'.",
        "A counter-example: if someone says 'every animal jump is shorter than 50 cm', one frog jump of 60 cm shows that claim is not always true.",
      ],
    },
    examples: [
      {
        caption: "Compare",
        body: "Kangaroo 180 cm, cat 40 cm. Kangaroo jumps 140 cm farther.",
      },
      {
        caption: "Unknown",
        body: "Jumps 12, 24, 36, __. Rule add 12 → next is 48.",
      },
      {
        caption: "Counter-example",
        body: "Claim: 'All jumps get longer.' Counter: frog 50, 50, 50 — lengths stay the same.",
      },
    ],
    connection:
      "Sports long jump, skipping games, and number patterns in class all use compare, rule, and because.",
    try: {
      prompt:
        "Deer jumps: 2 m, 2 m, 2 m. Dog jumps: 1 m, 2 m, 3 m. Name each pattern, then say who jumped farther on the third jump.",
      reveal:
        "Deer repeats 2 m. Dog grows by +1 m. On the third jump the dog reaches 3 m and the deer 2 m — dog farther.",
    },
    practice: [
      q(
        "g5m-aj-p1",
        "Goat jump 70 cm, sheep jump 55 cm. How much farther did the goat jump?",
        "15 cm",
        "125 cm",
        "70 cm",
        "a",
        "70 − 55 = 15 cm farther. 125 would add; 70 is the goat’s length alone.",
        "Compare by finding the gap.",
        "Adding the two jumps answers 'in all', not 'how much farther'.",
        {
          a: "You found the difference.",
          b: "125 adds the jumps — a different question.",
          c: "70 cm is the goat’s jump, not the gap.",
        },
      ),
      q(
        "g5m-aj-p2",
        "Pattern of jump lengths: 5, 10, 15, 20. The rule is…",
        "add 5 each time",
        "multiply by 5 each time",
        "the jumps get smaller",
        "a",
        "Each step is +5. Multiplying by 5 would leap to 25 after 5, not 10.",
        "What do you add to 5 to reach 10?",
        "The list is growing, not shrinking.",
        {
          a: "You named the repeating jump of five.",
          b: "×5 would make 5, 25, 125…",
          c: "Each number is larger than the one before.",
        },
      ),
      writeQ(
        "g5m-aj-p3",
        "Jumps follow add 8: 8, 16, 24, __. What is the missing jump length?",
        ["32", "32 cm", "thirty-two"],
        "24 + 8 = 32. The unknown continues the same jump.",
        "What do you add each time?",
        "Guessing without the +8 rule breaks the pattern.",
      ),
      explainQ(
        "g5m-aj-p4",
        "Someone says: 'If the first jump is longer, that animal always wins a three-jump total.' Give a counter-example with two animals’ jump lists.",
        "Example: Ant 30, 10, 10 (total 50). Beetle 20, 20, 20 (total 60). Ant’s first jump is longer, but Beetle’s three-jump total is greater — so the claim is not always true.",
        "Can a strong first jump be followed by tiny ones?",
        "One case that breaks the claim is enough as a counter-example.",
        ["first|longer|total", "not always|counter|example", "three|sum|add"],
      ),
    ],
    reasoning: [
      q(
        "g5m-aj-r1",
        "Claim: 'Growing jump patterns always double.' Which response is fairest?",
        "not always — 10, 20, 30 grows by +10, not by doubling",
        "yes, every growing list doubles",
        "growing patterns are impossible",
        "a",
        "10, 20, 30 is a counter-example to 'always double'. Growing only means a rule that increases.",
        "Can you name a growing list that is not doubling?",
        "Many growing rules exist; doubling is only one.",
        {
          a: "You used a counter-example to the 'always' claim.",
          b: "Add-10 lists grow without doubling.",
          c: "Growing patterns appear often in jump data.",
        },
      ),
      explainQ(
        "g5m-aj-r2",
        "Frog jumps 45 cm three times. Why can you say the total distance is 135 cm with a because?",
        "Because each jump is 45 cm and there are 3 equal jumps, total 3 × 45 = 135 cm. The because uses equal groups, not only a guess.",
        "What stays the same in each jump?",
        "A because should name the equal length and the count.",
        ["three|3|equal|same", "forty-five|45|multiply|times", "total|135|because"],
      ),
    ],
    retrieve: [
      q(
        "g5m-aj-t1",
        "An unknown jump □ in 20, 30, □, 50 with rule add 10 is…",
        "40",
        "60",
        "10",
        "a",
        "30 + 10 = 40, then 40 + 10 = 50. The unknown fits the middle.",
        "Apply the same add-10 step.",
        "60 would skip ahead; 10 is the jump size, not the missing length.",
        {
          a: "You filled the gap with the rule.",
          b: "60 would be after 50 in this pattern.",
          c: "10 is the change, not the missing term.",
        },
      ),
      writeQ(
        "g5m-aj-t2",
        "Compare: sparrow hop 35 cm, crow hop 50 cm. Who hopped farther, and by how much?",
        ["crow 15", "crow by 15", "crow 15 cm", "50 - 35 = 15"],
        "Crow hopped farther by 50 − 35 = 15 cm.",
        "Subtract the shorter from the longer.",
        "Naming only 'crow' without the gap leaves the compare half-done.",
        ["crow", "15"],
      ),
      explainQ(
        "g5m-aj-t3",
        "Why is 'it looks bigger' a weak because when two jump drawings are different sizes on the page?",
        "Drawing size can be decoration. A fair because uses the measured lengths or the stated numbers, not how tall the doodle looks.",
        "What should stand for 'farther' — a bigger sketch, or the length number?",
        "Pictures need a scale or a number to compare fairly.",
        ["length|number|measure|cm", "draw|picture|look|size", "fair|because|scale"],
      ),
    ],
    misconceptions: [
      {
        idea: "Every pattern that grows must be doubling.",
        correction: "Growing can mean +2, +5, ×2, and more. Check the jumps between terms.",
      },
      {
        idea: "A claim with the word always is safe if one example works.",
        correction: "Always needs every case. One counter-example is enough to challenge it.",
      },
    ],
    reflect: {
      prompt: "What jump or step pattern could you measure and describe in words this week?",
      keyIdeas: ["pattern|rule|grow|repeat", "compare|unknown|because"],
    },
    mastery: q(
      "g5m-aj-m1",
      "When a jump claim says 'always', a strong check is to…",
      "try to find a counter-example, or explain why the rule covers every case",
      "accept the claim after one matching example",
      "change the units so the claim looks nicer",
      "a",
      "Always is a big word. Counter-examples or a full because keep thinking honest.",
      "What would break an 'always' sentence?",
      "One example and nicer units do not prove always.",
      {
        a: "You treated 'always' as something to test.",
        b: "One example shows possible, not always.",
        c: "Changing units does not rescue a broken claim.",
      },
    ),
    masteryCriteria:
      "You can compare jump lengths, name a pattern rule, find an unknown term, give a because, and offer a counter-example to an 'always' claim.",
    teach: {
      prompt:
        "Make two animals’ jump lists — one repeating, one growing. Teach Ivshi the rules and one compare sentence.",
      keyIdeas: ["repeat|grow|rule", "compare|farther", "because|counter"],
    },
  },
});

export const mapsAndLocationsLesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-maps-and-locations-core",
  title: "Maps and Locations",
  domainTitle: "Maps",
  prerequisites: ["ncert-g5-maths-mela-animal-jumps-core"],
  nextConceptIds: ["ncert-g5-maths-mela-data-through-pictures-core"],
  content: {
    objective:
      "Read a map key, use directions to locate places, and spot parallel, perpendicular, and intersecting routes on a simple map.",
    wonder: {
      prompt:
        "A school map’s key says one finger-width is 100 m. The library looks about two finger-widths from the gate. About how far is that — and which way is north if the map’s arrow points to the top?",
    },
    explore: {
      text: "A map is a flat picture of a place. The key (legend) tells what symbols mean and sometimes what a length on the map stands for in real distance. Directions — north, south, east, west — help you say where things are. On the map, some roads never meet (parallel), some cross at a square corner (perpendicular), and some cross at other angles (intersecting).",
      activity: {
        prompt: "Key: 1 cm on the map = 100 m outside. A path drawn 3 cm long stands for…",
        choices: [
          {
            id: "three-hundred",
            label: "300 m in the real place",
            note: "You used the key: 3 × 100 m = 300 m.",
          },
          {
            id: "three-cm-only",
            label: "only 3 cm in the real place too",
            note: "The map is scaled down. The key turns map cm into real metres.",
          },
          {
            id: "one-hundred",
            label: "100 m, ignoring the 3 cm length",
            note: "One centimetre is 100 m; three centimetres need three copies.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Read the key before you guess. Symbols for school, tree, or water only make sense with the legend.",
        "North is often toward the top of the map when an arrow shows N, but always check the arrow. From a point, east is to the right if north is up.",
        "Parallel routes keep the same distance and do not meet on the map (like opposite sides of a straight corridor).",
        "Perpendicular routes meet at a right angle — a square corner you can check with a set square or a book corner.",
        "Intersecting routes cross at a point. Every perpendicular pair intersects, but not every intersecting pair is perpendicular — some cross on a slant.",
      ],
    },
    examples: [
      {
        caption: "Key",
        body: "Symbol of a book = library. Without the key, the drawing is only a doodle.",
      },
      {
        caption: "Direction",
        body: "If north is up, the playground south of the hall is toward the bottom of the map.",
      },
      {
        caption: "Lines",
        body: "Two straight lanes side by side that never meet are parallel. A lane crossing another at a square corner is perpendicular.",
      },
    ],
    connection:
      "Finding classrooms, bus stops, and treasure-hunt clues all use maps, keys, and directions.",
    try: {
      prompt:
        "On a map with north at the top, the canteen is east of the office. Is the canteen left or right of the office? Name one pair of wall lines in your classroom that look parallel.",
      reveal:
        "East is to the right when north is up — canteen to the right of the office. Opposite walls of the room are often parallel.",
    },
    practice: [
      q(
        "g5m-ml-p1",
        "A map key shows a blue wave symbol means a pond. A blue wave on the map means…",
        "there is a pond at that place",
        "someone spilled paint",
        "north is that way",
        "a",
        "The key links the symbol to a real feature. Paint and north need different marks.",
        "What does the legend say the wave stands for?",
        "North usually has an arrow labelled N, not a wave.",
        {
          a: "You read the key.",
          b: "The key gives meaning on purpose.",
          c: "Direction uses the north arrow.",
        },
      ),
      q(
        "g5m-ml-p2",
        "Two straight roads on a map cross like a plus sign with square corners. The roads are…",
        "perpendicular (and they intersect)",
        "parallel",
        "the same as never meeting",
        "a",
        "Square-corner crossing means perpendicular. Parallel roads would not meet.",
        "Do the roads meet? Is the corner square?",
        "Never meeting is the parallel story.",
        {
          a: "You named a right-angle crossing.",
          b: "Parallel paths stay apart.",
          c: "A plus sign is a meeting, not a never-meet.",
        },
      ),
      writeQ(
        "g5m-ml-p3",
        "Key: 1 cm = 50 m. A park edge is 4 cm on the map. What real length is that?",
        ["200 m", "200 metres", "200 meters", "two hundred m"],
        "4 × 50 m = 200 m. Multiply map length by the key’s real length.",
        "What is one centimetre worth?",
        "Reading only 4 cm as 4 m ignores the key’s scale.",
      ),
      explainQ(
        "g5m-ml-p4",
        "Two paths cross on a slant (not a square corner). Are they intersecting? Are they perpendicular? Why?",
        "They are intersecting because they meet at a point. They are not perpendicular unless the angle is a right angle. A slant crossing is intersecting without being perpendicular.",
        "What does perpendicular need that plain intersecting does not?",
        "Meeting alone is not enough for a square corner.",
        ["intersect|meet|cross", "perpendicular|right|square|corner", "slant|not"],
      ),
    ],
    reasoning: [
      q(
        "g5m-ml-r1",
        "North arrow points to the top. Friend says the garden west of the gate is toward the right edge. Fairest reply?",
        "west is toward the left when north is up, so check the left side",
        "west and east are the same direction",
        "maps never use left and right",
        "a",
        "With north up: east right, west left, south down. The garden should be left of the gate.",
        "Face the north arrow; which way is west?",
        "Left and right on the page help once north is fixed.",
        {
          a: "You used north-up direction sense.",
          b: "West and east are opposites.",
          c: "Maps use directions; left/right follow from north.",
        },
      ),
      explainQ(
        "g5m-ml-r2",
        "Why can two parallel roads on a town map still both be useful even though they never meet?",
        "Parallel roads can carry traffic in the same general direction without crossing. People use each road to reach different blocks; never meeting is a geometry fact, not a reason to erase one road.",
        "What does parallel mean for meeting?",
        "Useful and meeting are different ideas on a map.",
        ["parallel|never meet|same", "road|route|traffic|block", "useful|still|each"],
      ),
    ],
    retrieve: [
      q(
        "g5m-ml-t1",
        "Intersecting routes on a map…",
        "cross at a point",
        "must be parallel",
        "can never form a corner",
        "a",
        "Intersect means meet or cross. Parallel routes do not intersect.",
        "Do the lines share a point?",
        "Corners can appear when roads meet — including square corners.",
        {
          a: "You named the meeting point.",
          b: "Parallel means they do not cross.",
          c: "Meetings often make corners.",
        },
      ),
      writeQ(
        "g5m-ml-t2",
        "Name the four main map directions.",
        ["north south east west", "N S E W", "north, south, east, west"],
        "North, south, east, and west — the main compass directions on maps.",
        "Think of the compass rose.",
        "Only naming north leaves three directions unspoken.",
        ["north", "south", "east", "west"],
      ),
      q(
        "g5m-ml-t3",
        "A scale key is missing on a sketch map. What is hardest to know?",
        "how many real metres a drawn path stands for",
        "which symbol the drawer liked most",
        "whether north can exist",
        "a",
        "Without a scale, map lengths do not convert to real distances. Symbols and north can still be labelled separately.",
        "What does a scale connect — paper length to real length?",
        "North and symbols need their own marks; scale answers distance.",
        {
          a: "You linked scale to real distance.",
          b: "Favourite symbols are not the scale question.",
          c: "North can still be shown with an arrow.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "Any two roads that cross are perpendicular.",
        correction: "Crossing means intersecting. Perpendicular needs a right angle.",
      },
      {
        idea: "Map centimetres are the same as real centimetres outdoors.",
        correction: "Use the scale key — map lengths stand for larger real distances.",
      },
    ],
    reflect: {
      prompt: "What place near you could you sketch with a tiny key and a north arrow?",
      keyIdeas: ["map|key|scale", "north|east|parallel|perpendicular"],
    },
    mastery: q(
      "g5m-ml-m1",
      "To read locations on a map fairly you should…",
      "use the key and directions, and describe routes as parallel, perpendicular, or intersecting when they fit",
      "ignore the key and guess from pretty colours",
      "assume every crossing is parallel",
      "a",
      "Key plus directions plus line relationships. Colours and mixed-up parallel talk hide the map.",
      "What does the legend unlock?",
      "Pretty guesswork and parallel crossings do not match the definitions.",
      {
        a: "You joined key, direction, and line ideas.",
        b: "Colours without a key are decoration.",
        c: "Parallel routes do not cross.",
      },
    ),
    masteryCriteria:
      "You can use a map key and directions, convert a simple scale length, and tell parallel, perpendicular, and intersecting routes apart.",
    teach: {
      prompt:
        "Sketch two streets — one parallel pair and one perpendicular crossing. Teach Ivshi which is which, with a because.",
      keyIdeas: ["parallel|perpendicular|intersect", "key|north|direction", "map"],
    },
  },
});

export const dataThroughPicturesLesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-data-through-pictures-core",
  title: "Data Through Pictures",
  domainTitle: "Data",
  prerequisites: ["ncert-g5-maths-mela-maps-and-locations-core"],
  nextConceptIds: [],
  content: {
    objective:
      "Use a pictograph key, compare categories, organise counts in a table, read and think about bar graphs, and choose fair chance words like certain, likely, or impossible.",
    wonder: {
      prompt:
        "A pictograph of favourite sports uses 1 ball picture = 2 children. Football shows 4 balls. How many children chose football — and how would a bar graph show the same idea?",
    },
    explore: {
      text: "Data through pictures means counts shown with pictographs or bars. The pictograph key tells what one picture is worth. A table lists categories and numbers clearly. A bar graph uses bar heights (and a scale) to compare. Chance words describe what fits the data: certain, likely, unlikely, impossible — matched to what the pictures actually show, not to wishes.",
      activity: {
        prompt: "Key: 1 ball = 2 children. Four football balls mean…",
        choices: [
          {
            id: "eight",
            label: "8 children",
            note: "You used the key: 4 × 2 = 8 children.",
          },
          {
            id: "four",
            label: "4 children, ignoring the key",
            note: "Each picture stands for 2 children, not 1.",
          },
          {
            id: "two",
            label: "2 children, reading only the key once",
            note: "The key is per picture; four pictures need four copies of the key.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Always read the pictograph key first. Half a picture usually means half of the key’s value.",
        "Compare categories: most, least, how many more. Use the counts (pictures × key), not which drawing looks fanciest.",
        "A table turns picture counts into rows: category | number. Tables make totals and gaps easy to check.",
        "Bar graphs need a scale on the number axis. Taller bar means larger count when the scale is even.",
        "Chance language: if every child in the table chose an indoor game, picking 'an indoor game' from that class list is certain for that data. Picking a sport nobody chose is impossible from that list. Likely and unlikely sit between, guided by the sizes of the categories.",
      ],
    },
    examples: [
      {
        caption: "Pictograph",
        body: "1 star = 5 votes. 3 stars for dance → 15 votes.",
      },
      {
        caption: "Table",
        body: "Cricket 12, kho-kho 9, athletics 6. Most: cricket. Cricket over athletics: 6 more.",
      },
      {
        caption: "Chance",
        body: "Bag shows only mango and banana. Drawing 'guava' from this bag of votes is impossible for this data set.",
      },
    ],
    connection:
      "Class surveys, weather charts, and sports scores become clear when pictures, tables, and bars tell the same honest counts.",
    try: {
      prompt:
        "Table: red 8, blue 5, green 5. Make a one-line pictograph plan if 1 smiley = 1 child for red. Then say whether drawing 'green' from these 18 votes is impossible.",
      reveal:
        "Red needs 8 smileys. Green is possible (5 votes), not impossible — unlikely compared with red, but still in the data.",
    },
    practice: [
      q(
        "g5m-dp-p1",
        "Pictograph key: 1 book = 3 children. 5 books for 'story hour'. How many children?",
        "15",
        "5",
        "8",
        "a",
        "5 × 3 = 15 children. 5 ignores the key; 8 mixes 5 and 3 by adding.",
        "Multiply pictures by the key.",
        "Adding the key to the picture count is a different mix-up.",
        {
          a: "You multiplied by the key.",
          b: "5 counts pictures, not children.",
          c: "8 adds 5 and 3 instead of multiplying.",
        },
      ),
      q(
        "g5m-dp-p2",
        "Bar graph: cats 8, dogs 5, birds 2 (same scale). How many more cats than birds?",
        "6",
        "8",
        "15",
        "a",
        "8 − 2 = 6 more cats. 8 is the cat count; 15 would total all three.",
        "Compare only cats and birds.",
        "Totalling every animal answers a different question.",
        {
          a: "You compared two bar heights.",
          b: "8 is how many cats, not how many more.",
          c: "15 adds all categories.",
        },
      ),
      writeQ(
        "g5m-dp-p3",
        "Votes: tea 7, milk 10, juice 3. Write a tiny table as 'drink, count' on three lines (or one line with semicolons).",
        ["tea 7; milk 10; juice 3", "tea 7, milk 10, juice 3", "milk 10 tea 7 juice 3"],
        "A fair table lists each drink with its count: tea 7, milk 10, juice 3.",
        "One row (or chunk) per category.",
        "A pretty title without counts hides the votes.",
        ["tea", "7", "milk", "10", "juice", "3"],
      ),
      explainQ(
        "g5m-dp-p4",
        "A bar for 'cycling' is drawn twice as tall as 'walking', but the scale marks show both are 10 children. Why is that graph unfair?",
        "Bar height should match the scale and the count. If both are 10, the bars should be equal height. Making one twice as tall tricks the eye into thinking cycling is larger.",
        "What should control bar height — decoration or the scale?",
        "Equal counts need equal heights on an honest scale.",
        ["scale|height|bar", "ten|10|equal|same", "unfair|trick|eye"],
      ),
    ],
    reasoning: [
      q(
        "g5m-dp-r1",
        "Data: everyone in a club chose cricket or football (none chose tennis). From this club list, picking tennis is…",
        "impossible for this data",
        "certain",
        "the same as likely",
        "a",
        "Tennis has zero votes here, so it cannot be drawn from this list. Certain would mean every vote is tennis.",
        "Is tennis in the table at all?",
        "Likely needs a positive chance from the data; zero is none.",
        {
          a: "You matched chance language to a zero category.",
          b: "Certain fits a category that covers all votes.",
          c: "Likely is for categories that appear, often the larger ones.",
        },
      ),
      explainQ(
        "g5m-dp-r2",
        "Why turn a pictograph into a table before you find 'how many more'?",
        "A table shows plain numbers for each category, so subtracting for a gap is clear. Pictures still need the key; a table already holds the totals after you apply the key.",
        "What is easier to subtract — raw numbers or counted pictures mid-key?",
        "Tables organise the counts the pictograph was hiding in pictures.",
        ["table|number|count", "more|subtract|gap|compare", "key|pictograph|picture"],
      ),
    ],
    retrieve: [
      q(
        "g5m-dp-t1",
        "On a fair bar graph, a taller bar (same scale) means…",
        "a larger count for that category",
        "a prettier category",
        "a category that must be impossible",
        "a",
        "Height tracks the number when the scale is honest. Pretty and impossible are other ideas.",
        "What does the vertical scale measure?",
        "Impossible categories would have height zero, not a tall bar.",
        {
          a: "You linked height to count.",
          b: "Pretty is decoration.",
          c: "Tall bars are present in the data, not impossible.",
        },
      ),
      writeQ(
        "g5m-dp-t2",
        "Key: 1 heart = 2 votes. Half a heart for 'music'. How many votes for music?",
        ["1", "1 vote", "one"],
        "Half of 2 votes is 1 vote. Half pictures take half the key.",
        "What is a whole heart worth?",
        "Counting the half as 2 votes would ignore the half.",
      ),
      explainQ(
        "g5m-dp-t3",
        "Bag: red 12, blue 2. Someone says blue is 'likely' if you pick one vote at random from these 14. What chance word fits better for blue, and why?",
        "Blue is unlikely (only 2 out of 14), while red is likely. Likely should follow the larger share of the data; blue’s share is small.",
        "Compare 2 out of 14 with 12 out of 14.",
        "Chance words should track the sizes in the table.",
        ["unlikely|small|few|2", "likely|red|12", "fourteen|14|share|out of"],
      ),
      q(
        "g5m-dp-t4",
        "To make a simple bar graph from a table you must choose…",
        "a scale and bar heights that match each count",
        "random bar heights for fun",
        "one bar only, hiding the other categories",
        "a",
        "Scale plus matching heights make a readable graph. Random or hidden bars hide the data.",
        "What links a count of 10 to a bar height?",
        "Every category in the table deserves its bar.",
        {
          a: "You named scale and matching heights.",
          b: "Fun heights break the scale.",
          c: "Hiding categories hides the story.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "One picture always means one person.",
        correction: "Read the key — one picture might mean 2, 5, or 10.",
      },
      {
        idea: "Chance words can follow wishes instead of the table.",
        correction: "Certain, likely, and impossible should fit the counts you actually have.",
      },
    ],
    reflect: {
      prompt: "What class vote could you show as a pictograph and as a bar graph this week?",
      keyIdeas: ["pictograph|key|bar|table", "most|more|likely|certain"],
    },
    mastery: q(
      "g5m-dp-m1",
      "Data through pictures is fairest when you…",
      "use the key or scale, compare categories with counts, and match chance words to the data",
      "choose the tallest doodle even if the key says otherwise",
      "call every category certain",
      "a",
      "Key/scale, compare, and honest chance words. Doodles and over-certain labels hide the truth.",
      "What does the key unlock?",
      "Decoration and blanket 'certain' do not replace counts.",
      {
        a: "You joined key, compare, and chance language.",
        b: "Doodle size is not the count.",
        c: "Certain is only for outcomes the data fully supports.",
      },
    ),
    masteryCriteria:
      "You can read a pictograph key, compare categories in tables or bar graphs, and choose chance words that fit the data.",
    teach: {
      prompt:
        "Invent three categories with small counts. Teach Ivshi a pictograph key and which outcome is likely from your data.",
      keyIdeas: ["key|pictograph|bar", "most|more|table", "likely|certain|impossible"],
    },
  },
});
