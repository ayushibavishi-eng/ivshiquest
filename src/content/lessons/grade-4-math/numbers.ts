import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade4MathLesson } from "@/content/lessons/grade-4-math/format";

export const thousandsAroundUsLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-thousands-around-us-core",
  title: "Thousands Around Us",
  domainTitle: "Numbers",
  prerequisites: ["ncert-g4-maths-mela-patterns-around-us-core"],
  nextConceptIds: ["ncert-g4-maths-mela-sharing-and-measuring-core"],
  content: {
    objective:
      "Read and build 4-digit numbers, say what each digit is worth, and compare two thousands numbers by place.",
    wonder: {
      prompt:
        "A school has 1,045 books. Another has 986. Which school has more books, and how can you tell without counting every book?",
    },
    explore: {
      text: "In 2,307 the 2 means two thousands, the 3 means three hundreds, the 0 means no tens, and the 7 means seven ones. The comma helps your eyes find the thousands. A digit's place changes its value. The 2 in 2,000 is not the same as the 2 in 20.",
      activity: {
        prompt: "In 4,218, what is the 4 worth?",
        choices: [
          {
            id: "four-thousand",
            label: "4 thousands, or 4,000",
            note: "You found it! The first digit in this number sits in the thousands place.",
          },
          {
            id: "four-ones",
            label: "4 ones",
            note: "The ones sit at the end. Here the 8 is the ones.",
          },
          {
            id: "four-hundred",
            label: "4 hundreds",
            note: "Hundreds are the third place from the right. Here that digit is 2.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Places from the right are ones, tens, hundreds, thousands. Each place is ten times the place on its right.",
        "Zero is a placeholder. 2,007 is two thousand seven, not twenty-seven. The zeros keep the 2 in thousands.",
        "To compare, start at thousands, then hundreds, then tens, then ones. 1,045 has 1 thousand. 986 has 0 thousands, so 1,045 is greater.",
        "You can stretch a number: 3,406 = 3,000 + 400 + 6. That is expanded form. It shows the value hiding in each digit.",
        "The last number you say when counting a set is how many there are. Ones sit at the right. Ten ones make a ten. Ten tens make a hundred.",
        "Numbers between 40 and 45 are 41, 42, 43, 44. To round to ten, look at ones: 5 or more goes up, so 47 is about 50. To round to a hundred, look at tens: 249 has 4 tens, so it stays near 200.",
      ],
    },
    examples: [
      {
        caption: "Read it",
        body: "2,050 is two thousand fifty. Say the thousands, then the rest.",
      },
      {
        caption: "Build it",
        body: "5 thousands, 0 hundreds, 2 tens, 9 ones make 5,029.",
      },
      {
        caption: "Close neighbours",
        body: "1,999 and 2,000 sit next to each other. One more one flips the thousands.",
      },
    ],
    connection:
      "House numbers, school enrolment, and collections of seeds or stamps often sit in the thousands.",
    try: {
      prompt:
        "Which is greater, 3,080 or 3,800? Estimate first, then check place by place.",
      reveal:
        "Both have 3 thousands. Hundreds decide: 8 hundreds beat 0 hundreds, so 3,800 is greater. 3,080 is a little more than 3,000; 3,800 is much closer to 4,000.",
    },
    practice: [
      q(
        "g4m-th-p1",
        "What is 2,307 in words?",
        "two thousand three hundred seven",
        "two hundred thirty-seven",
        "twenty-three thousand seven",
        "a",
        "The 2 is thousands. The 3 is hundreds. Zeros in the middle still keep the places.",
        "Look at the comma. What sits before it?",
        "Dropping the thousands place makes a much smaller number.",
        {
          a: "You read the thousands first.",
          b: "That reading skipped the thousands place.",
          c: "Twenty-three thousand would need a different place story.",
        },
      ),
      q(
        "g4m-th-p2",
        "Which number is greater?",
        "1,002",
        "999",
        "they must be equal because 999 looks packed with nines",
        "a",
        "1,002 has 1 thousand. 999 has only hundreds. Place beats busy-looking digits.",
        "Compare thousands first.",
        "More nines do not beat a thousand.",
        {
          a: "You compared the thousands place.",
          b: "999 is large for a 3-digit number, but it is still less than one thousand.",
          c: "Packed digits are not the same as a new place.",
        },
      ),
      writeQ(
        "g4m-th-p3",
        "Write the number for 6 thousands, 0 hundreds, 4 tens, and 5 ones.",
        ["6045", "6,045", "6 045"],
        "6 thousands, no hundreds, 4 tens, 5 ones is 6,045. The zero holds the hundreds place.",
        "Put a zero where there are no hundreds.",
        "6,405 would mean 4 hundreds, not 4 tens.",
      ),
    ],
    reasoning: [
      explainQ(
        "g4m-th-r1",
        "A stall sold 2,480 packets of seeds. About how many is that, to the nearest thousand, and why is that estimate useful?",
        "It is about 2,000, because 2,480 is closer to 2,000 than to 3,000. The estimate helps you picture a little more than two thousand packets.",
        "Look at the hundreds. Is 4 hundreds closer to 0 hundreds or 10 hundreds?",
        "Rounding is not the same as throwing the number away.",
        ["two thousand|2000|2,000", "closer|hundred|estimate|about"],
      ),
      q(
        "g4m-th-r2",
        "Why is 4,010 much larger than 410 even though both use a 4, a 1, and a 0?",
        "The 4 in 4,010 is thousands; the 4 in 410 is hundreds",
        "Because 4,010 has a comma, and commas always make numbers tiny",
        "They are the same number written two ways",
        "a",
        "Place value changes the size. 410 is four hundred ten.",
        "Where does each 4 sit?",
        "A comma marks thousands; it does not shrink the number.",
        {
          a: "You compared the value of the 4s.",
          b: "The comma is a helper for reading, not a shrink ray.",
          c: "An extra thousands digit makes a new size.",
        },
      ),
    ],
    retrieve: [
      q(
        "g4m-th-t1",
        "In 7,050, which place holds a zero that keeps the 7 as thousands?",
        "the hundreds place (7 thousands, 0 hundreds, 5 tens, 0 ones)",
        "there is no zero in 7,050",
        "zeros can be skipped whenever we like",
        "a",
        "7,050 is 7 thousands, 0 hundreds, 5 tens, 0 ones. The hundreds zero holds the 7 in thousands.",
        "Stretch the number: 7,000 + 50.",
        "Skipping zeros would turn 7,050 into 75.",
        {
          a: "You kept the placeholder in hundreds.",
          b: "There are two zeros: hundreds and ones.",
          c: "Zero holds a place so the number stays itself.",
        },
      ),
      writeQ(
        "g4m-th-t2",
        "Write 3,406 in expanded form, using plus signs.",
        ["3000+400+6", "3,000+400+6", "3000 + 400 + 6"],
        "3,406 stretches to 3,000 + 400 + 6.",
        "What is the 3 worth? The 4? The 6?",
        "3,000 + 46 hides the hundreds place.",
      ),
      q(
        "g4m-th-t3",
        "Which whole numbers sit between 40 and 45?",
        "41, 42, 43, 44",
        "40, 41, 42, 43, 44, 45",
        "only 42",
        "a",
        "Between does not include the two ends. 40 and 45 are the fences, not the path.",
        "Start just after 40. Stop just before 45.",
        "The endpoints are not between.",
        {
          a: "You left the endpoints outside.",
          b: "Those two numbers are the fences.",
          c: "More than one number sits on that path.",
        },
      ),
      q(
        "g4m-th-t4",
        "47 to the nearest ten is...",
        "50, because 7 ones is 5 or more",
        "40, because you always go down",
        "47, because rounding never changes a number",
        "a",
        "Look at ones. 5 or more goes up to the next ten. 47 is nearer 50 than 40.",
        "Is 47 closer to 40 or 50?",
        "Rounding is allowed to change the ones.",
        {
          a: "You used the ones digit to choose.",
          b: "Going down would ignore that 7 is past the middle.",
          c: "Nearest ten is a nearby friendly number.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "A number with more 9s is always greater.",
        correction: "Compare from the largest place. 1,000 beats 999.",
      },
      {
        idea: "Zero can be dropped anywhere.",
        correction: "Zero holds a place. 205 and 25 are different numbers.",
      },
    ],
    reflect: {
      prompt: "Where have you seen a number in the thousands this week?",
      keyIdeas: ["thousand", "place|digit|comma"],
    },
    mastery: q(
      "g4m-th-m1",
      "To compare 2,199 and 2,301 you should...",
      "see that thousands match, then compare hundreds: 1 hundred vs 3 hundreds",
      "add the digits of each number and see which sum is bigger",
      "choose the number that looks longer because of the comma",
      "a",
      "Same thousands, so hundreds decide. 2,301 has more hundreds.",
      "Start from the left, at thousands.",
      "Digit sums and comma looks are not the comparison rule.",
      {
        a: "You walked place by place.",
        b: "Adding digits can trick you. 9+9 is large but those are small places.",
        c: "Both numbers have a comma. That does not choose a winner.",
      },
    ),
    masteryCriteria:
      "You can read a 4-digit number, say a digit's value, and compare two such numbers from the thousands place.",
    teach: {
      prompt:
        "Teach Ivshi the number 3,046. Say it in words and say what the 3 and the 4 are worth.",
      keyIdeas: ["thousand", "forty|hundred|four", "three thousand|3046|3,046"],
    },
  },
});

export const sharingAndMeasuringLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-sharing-and-measuring-core",
  title: "Sharing and Measuring",
  domainTitle: "Sharing",
  prerequisites: ["ncert-g4-maths-mela-thousands-around-us-core"],
  nextConceptIds: ["ncert-g4-maths-mela-measuring-length-core"],
  content: {
    objective:
      "Share a collection fairly, notice leftovers, and choose a unit so a measure can be compared.",
    wonder: {
      prompt:
        "12 laddoos and 5 friends. If everyone should get the same number, can you share them with none left, or will some laddoos wait?",
    },
    explore: {
      text: "Fair sharing means equal shares. 12 laddoos for 4 friends is 3 each. 12 for 5 friends is 2 each, with 2 left over. The leftover is not a secret extra share unless you cut. Measuring also needs a unit: hand-spans, cups, or a marked stick. A unit lets two people compare.",
      activity: {
        prompt: "20 beads shared equally among 4 children. How many does each child get?",
        choices: [
          {
            id: "five",
            label: "5 beads each, none left",
            note: "You found a fair share. 4 groups of 5 make 20.",
          },
          {
            id: "four",
            label: "4 beads each, with lots left in the box",
            note: "4 each would use only 16 beads. Four beads would still be waiting.",
          },
          {
            id: "twenty",
            label: "20 beads each",
            note: "That would need 80 beads. Sharing splits the 20, it does not copy them.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Equal shares are the same amount for each person. You can deal one-by-one, or make equal groups.",
        "Sometimes a remainder is left. Then you decide: keep the extras, cut them, or wait for more.",
        "Half of a collection is one of two equal shares. A quarter is one of four equal shares. The pieces only stay fair if the shares match.",
        "A measure without a unit is hard to compare. 'This rope is 8 of my hand-spans' is a start. Two people with different hands will get different counts, so later we use a standard unit.",
        "Even numbers make pairs with none left. Odd numbers leave one over — like a leftover after sharing between two. Half is 1 of 2 equal parts. A quarter is 1 of 4. Two quarters make a half: 1/4 + 1/4 = 1/2. Ten equal parts of the same whole are tenths; one of those parts is 1/10.",
      ],
    },
    examples: [
      {
        caption: "Fair share",
        body: "18 pencils, 6 pots. 18 ÷ 6 = 3 pencils in each pot.",
      },
      {
        caption: "Leftover",
        body: "10 bananas, 3 children. 3 each, 1 banana left. The leftover is not ignored; you name it.",
      },
      {
        caption: "Half",
        body: "8 marbles. Half is 4. Two children get 4 each.",
      },
    ],
    connection:
      "Sharing food, pouring water into cups, and lining up equal teams all use fair shares and units.",
    try: {
      prompt:
        "You have 15 stickers and 4 albums. Can each album get the same whole number of stickers with none left? If not, what is left?",
      reveal: "4 × 3 = 12, so 3 stickers each and 3 left over. 15 is not a fair whole-number split into 4 equal piles.",
    },
    practice: [
      q(
        "g4m-sm-p1",
        "24 sweets, 8 children, equal shares, none left. Each child gets...",
        "3 sweets",
        "8 sweets",
        "24 sweets",
        "a",
        "8 groups of 3 make 24. Sharing splits the collection.",
        "How many eights fit into 24?",
        "Giving 8 or 24 each would need a much bigger pile.",
        {
          a: "You made equal groups.",
          b: "8 sweets each would need 64 sweets.",
          c: "24 each would copy the whole pile for every child.",
        },
      ),
      q(
        "g4m-sm-p2",
        "Why might two friends get different counts if they measure the same desk in hand-spans?",
        "Their hands can be different sizes, so the unit is not the same",
        "The desk secretly changes length",
        "Counting never works",
        "a",
        "A unit has to stay the same if two measures will be compared. Hands are handy, but they are personal.",
        "Whose hand is the unit?",
        "The desk stays. The unit may not.",
        {
          a: "You noticed the unit can change from person to person.",
          b: "The desk is the same object.",
          c: "Counting works when the unit is shared.",
        },
      ),
      explainQ(
        "g4m-sm-p3",
        "Is half of 10 the same as half of 8? Why does 'half' need to name the whole?",
        "No. Half of 10 is 5 and half of 8 is 4. Half means one of two equal shares of that whole, so different wholes make different halves.",
        "Half of which collection?",
        "The word half without a whole can trick you.",
        ["ten|10|five|5", "eight|8|four|4", "whole|half"],
      ),
    ],
    reasoning: [
      q(
        "g4m-sm-r1",
        "13 chapattis for 4 people. A fair whole-number share is 3 each. What is a kind next step for the 1 left?",
        "Name the leftover, then decide: cut it, save it, or wait",
        "Hide the last chapatti so the numbers look neat",
        "Give all 13 to one person so sharing is faster",
        "a",
        "Remainders are part of the story. Fairness is about the plan, not hiding extras.",
        "4 × 3 = 12. What is the 1?",
        "Hiding leftovers does not make the share fairer.",
        {
          a: "You treated the leftover as real.",
          b: "Neat numbers are not more honest than leftovers.",
          c: "One person getting all 13 is not equal sharing.",
        },
      ),
      writeQ(
        "g4m-sm-r2",
        "16 flowers in 4 equal bunches. How many flowers in each bunch?",
        ["4", "four", "4 flowers", "four flowers"],
        "16 ÷ 4 = 4. Four bunches of 4.",
        "Make 4 equal groups.",
        "16 in each bunch would copy the whole pile.",
      ),
    ],
    retrieve: [
      q(
        "g4m-sm-t1",
        "A quarter of 12 pencils is...",
        "3",
        "4",
        "6",
        "a",
        "Four equal shares of 12 are 3 each. One of those shares is a quarter.",
        "Split 12 into 4 equal groups.",
        "6 would be a half. 4 would be if you made 3 groups.",
        {
          a: "You made four equal shares.",
          b: "4 groups of 4 would be 16 pencils.",
          c: "6 is half of 12, not a quarter.",
        },
      ),
      explainQ(
        "g4m-sm-t2",
        "Why do people later use centimetres instead of only hand-spans?",
        "A centimetre is the same for everyone, so two measures can be compared fairly.",
        "What happens if your hand and your friend's hand are different?",
        "Personal units are a start, but they do not match from person to person.",
        ["same|standard|everyone|compare", "hand|span|unit"],
      ),
      q(
        "g4m-sm-t3",
        "11 marbles shared between 2 friends. After pairing, what is left, and is 11 even or odd?",
        "1 left over, so 11 is odd",
        "none left, so 11 is even",
        "11 left, so pairing never works",
        "a",
        "Pairs use 10 marbles. One is left. Odd numbers leave one over when pairing.",
        "Make pairs. Is anyone sitting alone?",
        "Even numbers finish in pairs.",
        {
          a: "You used pairing to name odd.",
          b: "A leftover means it did not finish in pairs.",
          c: "You can still pair; one marble waits.",
        },
      ),
      q(
        "g4m-sm-t4",
        "Two quarters of the same roti make...",
        "one half",
        "two wholes",
        "ten tenths",
        "a",
        "1/4 + 1/4 = 2/4, which is another name for 1/2 of the same roti.",
        "Put two small equal pieces together.",
        "Two quarters are still part of one roti, not two rotis.",
        {
          a: "You joined equal pieces of the same whole.",
          b: "The whole roti is still one roti.",
          c: "Tenths are ten equal parts, a different cut.",
        },
      ),
      q(
        "g4m-sm-t5",
        "A roti is cut into 10 equal pieces. What is one piece called?",
        "1/10 — one tenth of the roti",
        "1/2, because every piece is a half",
        "10/1, because 10 is a big number",
        "a",
        "Ten equal parts make tenths. One of those parts is 1/10 of the same roti.",
        "How many equal pieces is the whole?",
        "Half would be 5 of those 10 pieces.",
        {
          a: "You named one of ten equal parts.",
          b: "Half would be five tenths, not one.",
          c: "The bottom number names how many equal parts.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "Sharing always uses every object with none left.",
        correction: "Some stories have leftovers. Name them. Then decide what to do.",
      },
      {
        idea: "Half is always 2, or always 5.",
        correction: "Half depends on the whole. Half of 10 is 5. Half of 8 is 4.",
      },
    ],
    reflect: {
      prompt: "When did a leftover change your plan this week — food, stickers, or teams?",
      keyIdeas: ["share|equal", "left|leftover|remainder"],
    },
    mastery: q(
      "g4m-sm-m1",
      "Fair sharing means...",
      "equal amounts for each share, and leftovers named if they appear",
      "the fastest person gets extra",
      "ignoring extras so the numbers look tidy",
      "a",
      "Equal shares plus honest leftovers is the idea.",
      "Would every friend agree the piles match?",
      "Speed and tidy hiding are not fairness.",
      {
        a: "You kept the shares equal and the leftover visible.",
        b: "Fast is not the same as fair.",
        c: "Tidy numbers should not hide extras.",
      },
    ),
    masteryCriteria:
      "You can make equal shares, name a leftover, and say why a unit matters when measuring.",
    teach: {
      prompt:
        "Teach Ivshi how to share 14 beads among 4 friends. Say how many each gets and what is left.",
      keyIdeas: ["three|3", "left|leftover|two|2", "equal|share"],
    },
  },
});

export const equalGroupsLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-equal-groups-core",
  title: "Equal Groups",
  domainTitle: "Multiplication",
  prerequisites: ["ncert-g4-maths-mela-weigh-it-pour-it-core"],
  nextConceptIds: ["ncert-g4-maths-mela-elephants-tigers-leopards-core"],
  content: {
    objective:
      "See multiplication as equal groups or an array, write a matching sentence, and know when adding unequal groups is not multiplication.",
    wonder: {
      prompt:
        "Three bags with 4 oranges each. Is that the same idea as one bag of 4, one of 5, and one of 3? Why might the first story be faster to total?",
    },
    explore: {
      text: "Equal groups have the same number in each group. 3 groups of 4 is 3 × 4. You can also see 3 rows of 4 as an array. Turning the array makes 4 groups of 3. The total stays 12. Unequal groups are addition, not a single multiplication fact.",
      activity: {
        prompt: "Which story is 4 × 5?",
        choices: [
          {
            id: "four-fives",
            label: "4 plates with 5 idlis on each plate",
            note: "You found equal groups. 4 × 5 means 4 groups of 5.",
          },
          {
            id: "mixed",
            label: "Plates with 2, 5, 7, and 6 idlis",
            note: "Those groups are not equal, so you add, not multiply as 4 × 5.",
          },
          {
            id: "one-plate",
            label: "1 plate with 9 idlis",
            note: "That is one group, not 4 groups of 5.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Multiplication is a short way to add equal groups. 5 + 5 + 5 + 5 is 4 × 5.",
        "An array is rows and columns. 3 rows of 6 dots is 3 × 6. 6 rows of 3 is 6 × 3. Same 18 dots.",
        "The first number often names how many groups. The second names how many in each group. Stories can swap the order, but you should say which is which.",
        "If groups are not equal, multiplication does not fit. Add instead, or make the groups equal first.",
        "Facts like 2 × 5, 5 × 4, and 10 × 3 help you skip-count instead of drawing every dot. An array is also a covering: 3 rows of 4 tiles cover 12 squares. That covering is the area idea — rows times columns.",
        "How many groups? 20 ÷ 5 asks how many 5s fit into 20. That is measuring groups, the partner of sharing.",
      ],
    },
    examples: [
      {
        caption: "Bags",
        body: "6 bags of 10 marbles: 6 × 10 = 60.",
      },
      {
        caption: "Array",
        body: "A tray of eggs, 2 rows of 6, is 2 × 6 = 12. Turned, 6 × 2 = 12.",
      },
      {
        caption: "Not equal",
        body: "A flock of 7, 8, and 9 birds is 7 + 8 + 9, not 3 × 8, unless you change the story.",
      },
    ],
    connection:
      "Packets in a shop, teams on a field, and tiles on a floor are equal-group stories.",
    try: {
      prompt:
        "Draw 5 groups of 3 stars. Write two multiplications that both total the stars.",
      reveal: "5 × 3 = 15 and 3 × 5 = 15. One counts groups of 3. The other counts groups of 5 if you regroup.",
    },
    practice: [
      q(
        "g4m-eg-p1",
        "3 packets with 8 crayons each. Which number sentence matches?",
        "3 × 8 = 24",
        "3 + 8 = 11",
        "8 − 3 = 5",
        "a",
        "Three equal groups of 8 is multiplication. Adding 3 and 8 would mix 'groups' with 'in each group'.",
        "How many groups? How many in a group?",
        "Plus and minus do not name equal groups here.",
        {
          a: "You wrote the equal-groups sentence.",
          b: "3 + 8 adds the two numbers, it does not make three packets of 8.",
          c: "Take-away does not total the crayons.",
        },
      ),
      q(
        "g4m-eg-p2",
        "A 4-by-3 array of tiles has how many tiles?",
        "12",
        "7",
        "43",
        "a",
        "4 rows of 3 (or 4 columns of 3) make 12. 4 × 3 = 12.",
        "Skip count: 3, 6, 9, 12.",
        "4 + 3 is 7, which counts the sides, not the tiles. 43 would glue the digits.",
        {
          a: "You counted the array as equal rows.",
          b: "7 adds the two numbers instead of filling the grid.",
          c: "Gluing digits is not how an array totals.",
        },
      ),
      explainQ(
        "g4m-eg-p3",
        "Why is 2 × 6 the same total as 6 × 2, even if the stories feel different?",
        "Both count 12. One is 2 groups of 6; the other is 6 groups of 2. Turning an array shows the same dots.",
        "Picture a tray of 2 rows of 6, then turn it.",
        "The stories swap groups and size, but the total matches.",
        ["twelve|12|same", "groups|array|turn", "six|two"],
      ),
    ],
    reasoning: [
      q(
        "g4m-eg-r1",
        "You see 5 + 5 + 5. Which multiplication matches this adding?",
        "3 × 5",
        "5 × 8",
        "15 × 5",
        "a",
        "Three fives. That is 3 groups of 5, or 3 × 5.",
        "How many times is 5 written?",
        "15 × 5 would be a much larger story.",
        {
          a: "You counted how many equal addends.",
          b: "8 does not appear in 5 + 5 + 5.",
          c: "15 is the total, not the number of groups in 15 × 5.",
        },
      ),
      writeQ(
        "g4m-eg-r2",
        "7 groups of 4. What total do you get?",
        ["28", "twenty-eight", "28 ones"],
        "7 × 4 = 28. You can think 7 × 2 = 14, then double because 4 is two 2s, or skip count by 4s seven times.",
        "Skip count: 4, 8, 12, 16, 20, 24, 28.",
        "7 + 4 = 11 would mix groups with size.",
      ),
    ],
    retrieve: [
      q(
        "g4m-eg-t1",
        "When should you not jump to multiplication?",
        "when the groups have different numbers inside",
        "when the groups are equal",
        "when you can draw an array of equal rows",
        "a",
        "Unequal groups need addition (or a new grouping). Multiplication needs equal groups.",
        "Are the piles the same size?",
        "Equal groups and arrays are multiplication's friends.",
        {
          a: "You saved multiplication for equal groups.",
          b: "Equal groups are exactly when multiplication helps.",
          c: "An equal array is a multiplication picture.",
        },
      ),
      explainQ(
        "g4m-eg-t2",
        "A child writes 4 × 6 for '6 baskets with 4 mangoes each'. Did they match the story? Does the total still work?",
        "The story is 6 groups of 4, which is 6 × 4. 4 × 6 is 4 groups of 6. The total is still 24, so the number is fine if they can explain the swap.",
        "Who is the number of groups in the story?",
        "Totals can match even when the story order swaps.",
        ["six|6", "four|4", "twenty-four|24|same|total"],
      ),
      q(
        "g4m-eg-t3",
        "A 3-by-4 tile rectangle covers how many unit squares?",
        "12 — 3 rows of 4, or 3 × 4",
        "7 — add 3 and 4",
        "34 — glue the digits",
        "a",
        "Covering is area by counting squares. Rows times columns is 12, not 3+4.",
        "Skip count 4, 8, 12.",
        "Adding the two sides is perimeter thinking, not covering.",
        {
          a: "You counted the covering, not the two numbers added.",
          b: "7 would walk two sides, not fill the inside.",
          c: "Gluing digits is not an array total.",
        },
      ),
      writeQ(
        "g4m-eg-t4",
        "How many groups of 5 fit into 20?",
        ["4", "four", "4 groups"],
        "20 ÷ 5 = 4 groups. Skip-count 5, 10, 15, 20.",
        "How many 5s until you reach 20?",
        "5 groups of 20 would be a different story.",
      ),
    ],
    misconceptions: [
      {
        idea: "Any two numbers written with a times sign tell every story.",
        correction: "Say what is groups and what is in each group. The total may match after a swap.",
      },
      {
        idea: "Add the two numbers to total an array.",
        correction: "An array is rows times columns, not length plus breadth.",
      },
    ],
    reflect: {
      prompt: "Where did you see equal groups today — packets, teams, or tiles?",
      keyIdeas: ["group|equal", "times|multiply|array"],
    },
    mastery: q(
      "g4m-eg-m1",
      "3 × 7 is a short way to say...",
      "3 equal groups of 7 (or 7 added three times)",
      "3 + 7",
      "37",
      "a",
      "Multiplication compresses equal adding. It does not glue digits or add the two numbers.",
      "Draw 3 circles with 7 dots in each.",
      "3 + 7 and 37 are different ideas.",
      {
        a: "You named equal groups.",
        b: "Adding 3 and 7 is a different story.",
        c: "Gluing 3 and 7 makes 37, not 21.",
      },
    ),
    masteryCriteria:
      "You can write a multiplication for equal groups or an array, and say when to add instead.",
    teach: {
      prompt:
        "Teach Ivshi 4 × 5 with a picture of plates or an array. Say the groups, the size, and the total.",
      keyIdeas: ["four|4", "five|5", "twenty|20"],
    },
  },
});

export const elephantsTigersLeopardsLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-elephants-tigers-leopards-core",
  title: "Elephants, Tigers, and Leopards",
  domainTitle: "Large numbers",
  prerequisites: ["ncert-g4-maths-mela-equal-groups-core"],
  nextConceptIds: ["ncert-g4-maths-mela-fun-with-symmetry-core"],
  content: {
    objective:
      "Compare and group large counts in an animal story, and choose whether to add, subtract, or make equal groups.",
    wonder: {
      prompt:
        "A forest report says 1,240 spotted deer and 980 wild boar. Which count is larger, and about how many more — a little, or a few hundred?",
    },
    explore: {
      text: "Animal counts can be large, so grouping helps: tens, hundreds, thousands. Comparing starts at the largest place. Finding 'how many more' is a subtract or compare story. Finding 'how many in all' is an add story. Finding 'packs of 10' is grouping.",
      activity: {
        prompt: "Tigers: 46. Leopards: 29. Which question is 'how many more tigers than leopards'?",
        choices: [
          {
            id: "compare",
            label: "A compare story: 46 − 29",
            note: "You spotted it. 'How many more' compares two counts.",
          },
          {
            id: "total",
            label: "An in-all story: 46 + 29",
            note: "In all would mix the two animals into one total.",
          },
          {
            id: "groups",
            label: "Equal groups: 46 × 29",
            note: "These are two different counts, not 46 groups of 29 leopards.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Read the story before you pick +, −, or ×. Words like in all, altogether, how many more, left, each pack, and shared point to different moves.",
        "Round to think. 1,240 is a little more than 1,200. 980 is a little less than 1,000. The deer count is a few hundred more, not a tiny bit more.",
        "Skip counting and tens groups help you handle big piles: 40 tens are 400.",
        "A table of animals can hide a pattern: one kind may grow while another stays nearly the same. The numbers tell a story if you compare them.",
        "You can line counts up: 29, 46, 56 from smallest to largest. Compare from the left, then the next place.",
      ],
    },
    examples: [
      {
        caption: "In all",
        body: "32 elephants and 18 calves nearby: 32 + 18 = 50 animals in that count.",
      },
      {
        caption: "How many more",
        body: "70 langurs and 45 peafowl: 70 − 45 = 25 more langurs.",
      },
      {
        caption: "Groups",
        body: "80 deer in groups of 10: 8 groups. That is 80 ÷ 10 = 8.",
      },
    ],
    connection:
      "Park reports, class surveys of birds, and news about animals all ask you to read numbers, not only look at pictures.",
    try: {
      prompt:
        "A reserve has 1,150 spotted deer this year and 980 last year. Did the count grow by about 100, 200, or 1,000? Estimate, then check.",
      reveal:
        "1,150 − 980 = 170, which is about 200, not 1,000. Rounding 1,150 to 1,200 and 980 to 1,000 already shows a gap near 200.",
    },
    practice: [
      q(
        "g4m-el-p1",
        "Elephants 56, tigers 18. How many animals in those two counts together?",
        "74",
        "38",
        "56",
        "a",
        "Together means add: 56 + 18 = 74.",
        "Are you mixing the two groups into one total?",
        "38 would be a compare. 56 ignores the tigers.",
        {
          a: "You put the counts together.",
          b: "38 is how many more elephants, not the total.",
          c: "That kept only one animal's number.",
        },
      ),
      q(
        "g4m-el-p2",
        "240 birds rest in equal flocks of 10. How many flocks?",
        "24",
        "250",
        "10",
        "a",
        "240 ÷ 10 = 24. Each 10 birds make one flock.",
        "How many tens sit in 240?",
        "Adding 10 would make 250, a different story.",
        {
          a: "You grouped by tens.",
          b: "250 would be 240 + 10, not flocks.",
          c: "10 is the size of a flock, not how many flocks.",
        },
      ),
      explainQ(
        "g4m-el-p3",
        "Why is 1,005 greater than 980 even though 980 'looks busy' with 9s?",
        "1,005 has 1 thousand. 980 has hundreds only. The thousands place wins.",
        "Compare from the left, starting with thousands.",
        "Busy nines in hundreds cannot beat a thousand.",
        ["thousand|1000|1,005|1005", "hundred|980"],
      ),
    ],
    reasoning: [
      q(
        "g4m-el-r1",
        "A poster shows 3 tigers, 3 tigers, 3 tigers, 3 tigers. A child writes 3 + 3 + 3 + 3. What shorter sentence also works?",
        "4 × 3 = 12",
        "3 × 12 = 36",
        "4 + 3 = 7",
        "a",
        "Four equal groups of 3. That is 4 × 3.",
        "How many groups of 3 tigers?",
        "3 × 12 would use 12 as a group size that is not in the poster.",
        {
          a: "You turned equal adding into multiplication.",
          b: "36 would be a much larger poster.",
          c: "4 + 3 mixes groups with size.",
        },
      ),
      writeQ(
        "g4m-el-r2",
        "Leopards 41, tigers 27. How many more leopards than tigers?",
        ["14", "fourteen", "14 more"],
        "41 − 27 = 14. Compare, don't add, because the question is how many more.",
        "Count up from 27 to 41.",
        "41 + 27 would be an in-all story.",
      ),
    ],
    retrieve: [
      q(
        "g4m-el-t1",
        "The phrase 'in all' in an animal count usually asks you to...",
        "add the groups",
        "subtract to compare",
        "always multiply",
        "a",
        "In all, altogether, and together often mean a total.",
        "Are the animals being mixed into one pile of numbers?",
        "How many more is compare. Multiply needs equal groups.",
        {
          a: "You chose a total.",
          b: "Subtracting answers how many more or how many left.",
          c: "Multiply when packs are equal, not for every story.",
        },
      ),
      explainQ(
        "g4m-el-t2",
        "A count of 998 deer and 1,020 deer — which is larger, and by about how much (a little, or more than twenty)?",
        "1,020 is larger. 1,020 − 998 = 22, a little more than twenty, not hundreds.",
        "Both numbers sit near 1,000. Which crossed 1,000?",
        "Near numbers can still differ by twenty-something.",
        ["1020|1,020", "998", "twenty|22|more"],
      ),
      q(
        "g4m-el-t3",
        "Order these counts from smallest to largest: 56 elephants, 18 tigers, 41 leopards.",
        "18, 41, 56",
        "56, 41, 18",
        "41, 18, 56",
        "a",
        "Smallest first: 18, then 41, then 56. That is ascending order.",
        "Which count is the smallest pack?",
        "Largest-first is a different order.",
        {
          a: "You lined them from smallest to largest.",
          b: "That list is largest to smallest.",
          c: "41 is not the smallest.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "Big animal posters always need multiplication.",
        correction: "Read the question. Totals add. 'How many more' subtracts. Packs multiply or divide.",
      },
      {
        idea: "The number with more 9s is always the larger count.",
        correction: "Compare places. 1,001 beats 999.",
      },
    ],
    reflect: {
      prompt: "What animal-number story could you write using add, subtract, or equal groups?",
      keyIdeas: ["add|subtract|group", "more|all|pack"],
    },
    mastery: q(
      "g4m-el-m1",
      "You read 'how many more elephants than tigers'. You should...",
      "compare by subtracting (or counting up)",
      "always add the two numbers",
      "always multiply the two numbers",
      "a",
      "How many more is a compare story.",
      "Are you finding a gap or a pile?",
      "Add is in all. Multiply is equal packs.",
      {
        a: "You chose a compare.",
        b: "Adding would mix the two counts.",
        c: "Multiplying would make packs that the sentence did not give.",
      },
    ),
    masteryCriteria:
      "You can choose add, subtract, or grouping for a large-count animal story and compare numbers by place.",
    teach: {
      prompt:
        "Make a tiny forest story with two animal counts. Ask Ivshi 'in all' and 'how many more', and show both answers.",
      keyIdeas: ["add|all|together", "more|subtract|compare", "number"],
    },
  },
});
