import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade5MathLesson } from "./format";

export const weTheTravellers1Lesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-we-the-travellers-1-core",
  title: "We the Travellers—I",
  domainTitle: "Travel numbers",
  prerequisites: [],
  nextConceptIds: ["ncert-g5-maths-mela-fractions-core"],
  content: {
    objective:
      "Read, build, round, and order large travel numbers using thousands and lakhs so a journey story makes number sense.",
    wonder: {
      prompt:
        "A road board flashes 1,25,000 km of roads already built in one state. Another board shows 98,450. Which number feels like a bigger map of roads, and how can you tell without counting every kilometre?",
    },
    explore: {
      text: "Travel numbers live on ticket counters, kilometre stones, and festival crowds. In Indian grouping, 1,00,000 is one lakh — a neat bundle of a hundred thousands. Digits keep their power by place: the 2 in 2,50,000 is not the same as the 2 in 250. Rounding gives a friendly landmark when a exact count would slow the trip story.",
      activity: {
        prompt: "On a travel board, 3,40,000 means about how many?",
        choices: [
          {
            id: "three-lakh-forty",
            label: "Three lakh forty thousand",
            note: "You read the Indian groups. Three lakh sits first; forty thousand follows.",
          },
          {
            id: "thirty-four-thousand",
            label: "Thirty-four thousand",
            note: "That reading skips the lakh place. The left group holds the big story.",
          },
          {
            id: "three-thousand-forty",
            label: "Three thousand forty",
            note: "Thousands would need a much smaller place story. Check the commas again.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Places grow by tens. Ones, tens, hundreds, thousands… and in Indian reading, after ninety-nine thousand comes one lakh (1,00,000). Commas help your eyes find those groups on a ticket board.",
        "Compose a travel total from parts: 2 lakhs + 5 thousands + 30 is 2,05,030. Expanded form stretches each digit so you see what it is worth on the journey.",
        "Compare from the left. More digits often win, but when lengths match, the leftmost place decides. 1,02,500 beats 98,999 because one lakh sits above ninety-eight thousand.",
        "Round to a named place for a friendly estimate. To the nearest thousand, look at hundreds; to the nearest hundred, look at tens. Front-end estimation keeps the leading digits and softens the rest for a quick sense check.",
        "Order three distances the way a map would: nearest to farthest, or smallest crowd to largest. A sensible estimate should fit the story — a village bus stop crowd will not be near a lakh.",
      ],
    },
    examples: [
      {
        caption: "Read the board",
        body: "4,50,000 is four lakh fifty thousand passengers planned for the mela weekend.",
      },
      {
        caption: "Stretch it",
        body: "1,25,040 = 1,00,000 + 20,000 + 5,000 + 40. Each chunk is a place on the travel number.",
      },
      {
        caption: "Round for the trip",
        body: "2,847 km to the nearest hundred is about 2,800 km — useful when packing fuel stories, not for every last metre.",
      },
    ],
    connection:
      "Train apps, highway boards, and school trip budgets all speak in thousands and lakhs before anyone sits in a seat.",
    try: {
      prompt:
        "Order these journey crowds from smallest to largest: 95,200; 1,02,000; 89,999. Estimate first, then check places.",
      reveal:
        "89,999 is under a lakh. 95,200 is still under a lakh but larger. 1,02,000 crosses into one lakh two thousand, so it is the farthest crowd size.",
    },
    practice: [
      q(
        "g5m-tr1-p1",
        "What is 2,05,000 in words (Indian grouping)?",
        "two lakh five thousand",
        "twenty-five thousand",
        "two thousand five hundred",
        "a",
        "2,05,000 groups as 2 lakhs and 5 thousands.",
        "Find the lakh group on the left of the Indian commas.",
        "Dropping the lakh place shrinks the travel story.",
        {
          a: "You kept the lakh group in the reading.",
          b: "That reading stopped before the lakh place.",
          c: "Two thousand would need a different place story.",
        },
      ),
      q(
        "g5m-tr1-p2",
        "Which travel number is greater?",
        "1,00,500",
        "99,999",
        "they must match because both use many 9s and 0s",
        "a",
        "1,00,500 has one lakh. 99,999 sits just under a lakh.",
        "Compare from the leftmost place.",
        "Busy digits do not beat a new place.",
        {
          a: "You compared from the lakh place.",
          b: "99,999 is large for five digits, yet it stays below one lakh.",
          c: "Place value, not digit busyness, chooses the larger journey total.",
        },
      ),
      writeQ(
        "g5m-tr1-p3",
        "Write the number for 3 lakhs, 0 ten thousands, 4 thousands, and 20 ones.",
        ["304020", "3,04,020", "3 04 020"],
        "3 lakhs, no ten thousands, 4 thousands, and 20 ones make 3,04,020.",
        "Put zeros where a place holds none.",
        "3,40,020 would move the 4 into ten thousands.",
      ),
    ],
    reasoning: [
      explainQ(
        "g5m-tr1-r1",
        "A bus route is 2,460 km. About how far is that to the nearest hundred, and why might a traveller use that estimate?",
        "It is about 2,500 km, because 2,460 sits closer to 2,500 than to 2,400. The estimate helps picture fuel or days on the road without every last kilometre.",
        "Look at the tens digit to decide rounding to hundreds.",
        "Rounding is a friendly landmark, not throwing the journey away.",
        ["2500|2,500|nearest hundred", "closer|estimate|about|picture|fuel|days"],
      ),
      q(
        "g5m-tr1-r2",
        "Why is 1,02,000 much larger than 12,000 even though both use a 1 and 2?",
        "The 1 in 1,02,000 is a lakh; the 1 in 12,000 is ten thousands",
        "Because 1,02,000 has more commas, and commas always shrink numbers",
        "They name the same distance written two ways",
        "a",
        "Place changes size. One lakh two thousand dwarfs twelve thousand.",
        "Where does each leading 1 sit?",
        "A comma helps reading; it does not shrink the number.",
        {
          a: "You compared the value of each leading 1.",
          b: "Commas mark groups; they do not shrink travel totals.",
          c: "An extra place makes a new size of journey.",
        },
      ),
    ],
    retrieve: [
      q(
        "g5m-tr1-t1",
        "Round 3,852 to the nearest ten.",
        "3,850, because 2 ones is less than 5",
        "3,860, because you always climb",
        "3,852, because rounding never changes a number",
        "a",
        "Ones decide nearest ten. 2 is below 5, so 3,852 stays near 3,850.",
        "Is 3,852 closer to 3,850 or 3,860?",
        "Nearest ten is allowed to soften the ones.",
        {
          a: "You used the ones digit to choose.",
          b: "Climbing every time would ignore that 2 is below the middle.",
          c: "Nearest ten is a nearby friendly landmark.",
        },
      ),
      writeQ(
        "g5m-tr1-t2",
        "Write 2,50,040 in expanded form with plus signs (Indian places is fine).",
        [
          "200000+50000+40",
          "2,00,000+50,000+40",
          "200000 + 50000 + 40",
          "2,00,000 + 50,000 + 40",
        ],
        "2,50,040 stretches to 2,00,000 + 50,000 + 40.",
        "What is the 2 worth? The 5? The 4?",
        "2,00,000 + 5040 hides the ten-thousands place.",
      ),
      q(
        "g5m-tr1-t3",
        "Which list orders these distances from nearest to farthest?",
        "8,450 km; 9,200 km; 1,05,000 km",
        "1,05,000 km; 9,200 km; 8,450 km",
        "9,200 km; 8,450 km; 1,05,000 km",
        "a",
        "8,450 is smallest, then 9,200, then the lakh-sized journey.",
        "Compare leftmost places first.",
        "Largest first would be farthest-to-nearest.",
        {
          a: "You lined them nearest to farthest.",
          b: "That list starts with the farthest journey.",
          c: "9,200 is larger than 8,450, so it cannot come first on a nearest-first path.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "A number packed with 9s is always greater than one that starts with 1.",
        correction:
          "Compare from the leftmost place. One lakh beats ninety-nine thousand.",
      },
      {
        idea: "Indian commas can be ignored when reading travel boards.",
        correction:
          "Grouping shows lakhs and thousands. Skipping groups misreads the journey size.",
      },
    ],
    reflect: {
      prompt:
        "Where have you seen a number in thousands or lakhs on a real trip or map this month?",
      keyIdeas: ["lakh|thousand|place|board|ticket|kilometre"],
    },
    mastery: q(
      "g5m-tr1-m1",
      "To compare 2,09,500 and 2,90,050 you should...",
      "see that lakhs match, then compare ten thousands: 0 vs 9",
      "add every digit and pick the larger digit sum",
      "choose whichever number looks longer on the board",
      "a",
      "Same lakhs, so ten thousands decide. 2,90,050 has 9 ten thousands.",
      "Walk places from the left after the lakh digit.",
      "Digit sums and board length are not the comparison rule.",
      {
        a: "You walked place by place from the left.",
        b: "Digit sums can trick you when small places hold large digits.",
        c: "Both numbers can look long. Place value chooses the winner.",
      },
    ),
    masteryCriteria:
      "You can read a travel number with lakhs, stretch or round it, and order or compare large journey totals from the left.",
    teach: {
      prompt:
        "Teach Ivshi the number 1,04,500. Say it in Indian words and say what the 1 and the 4 are worth.",
      keyIdeas: [
        "lakh|one lakh",
        "four thousand|thousand",
        "104500|1,04,500|one lakh four thousand five hundred",
      ],
    },
  },
});

export const fractionsLesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-fractions-core",
  title: "Fractions",
  domainTitle: "Fractions",
  prerequisites: ["ncert-g5-maths-mela-we-the-travellers-1-core"],
  nextConceptIds: ["ncert-g5-maths-mela-angles-as-turns-core"],
  content: {
    objective:
      "Name and compare fractions of the same whole, work with like fractions and mixed numbers, and see tenths and hundredths as equal parts.",
    wonder: {
      prompt:
        "On a farm picnic, one tray of laddoos is cut into 8 equal pieces and another into 10. Mira takes 3 of the eighths; Kabir takes 3 of the tenths. Who carries more sweet, and how do you know without tasting?",
    },
    explore: {
      text: "A fraction names equal parts of one whole — a chapati, a field, a water tank. Same-size pieces are like fractions: 2/5 and 1/5 share fifths. Mixed numbers hold wholes plus a leftover piece, like 2 1/4 rotis. Tenths and hundredths are still equal parts; they just slice the same whole more finely for farm measures and map scales.",
      activity: {
        prompt: "Which shows a larger share of the same whole?",
        choices: [
          {
            id: "three-fourths",
            label: "3/4 of a water tank",
            note: "Three of four equal parts leave only one part empty — a generous share.",
          },
          {
            id: "three-eighths",
            label: "3/8 of the same tank",
            note: "Eighths are smaller pieces. Three of them leave more of the tank unused.",
          },
          {
            id: "one-eighth",
            label: "1/8 of the same tank",
            note: "One eighth is a single small slice compared with three fourths.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Name a fraction by counting equal pieces: numerator tells how many you have; denominator tells how many equal parts make the whole. Equal wholes matter — compare farm shares only when the trays match.",
        "Like fractions share a denominator. To add or remove them, join or take away pieces of that same size: 2/7 + 3/7 = 5/7. Different denominators mean different piece sizes, so they are not like.",
        "A mixed number is wholes plus a proper fraction leftover: 1 3/5 means one full unit and three fifths more. It helps when a journey snack is more than one roti.",
        "Tenths are ten equal parts of one whole; hundredths are a hundred equal parts of the same whole. One tenth can be split into ten hundredths, so finer pieces still fit the same farm field story.",
        "Fraction word stories ask you to name, compare, join, or remove shares. Choose the action that fits: joining like pieces, reading a mixed leftover, or saying which unit fraction is larger when the whole is the same.",
      ],
    },
    examples: [
      {
        caption: "Same pieces",
        body: "On one milk can marked in fifths, 1/5 + 2/5 = 3/5 of the can.",
      },
      {
        caption: "Mixed leftover",
        body: "2 1/4 bags of seed means two full bags and one quarter of another bag.",
      },
      {
        caption: "Finer slices",
        body: "1/10 of a rope is the same length as 10/100 of that rope — ten hundredths fill one tenth.",
      },
    ],
    connection:
      "Sharing rotis on a trip, marking water levels on a farm tank, and reading simple map scales all lean on equal parts.",
    try: {
      prompt:
        "A path is split into 10 equal stones. You walk 4 of them. Write that walk as a fraction and say whether 4/10 is more or less than 1/2 of the path.",
      reveal:
        "4/10 names four tenths. Half of ten stones is five, so 4/10 is a little less than 1/2 of the path.",
    },
    practice: [
      q(
        "g5m-fr-p1",
        "Which fraction names three equal parts out of eight of the same chapati?",
        "3/8",
        "8/3",
        "3/3",
        "a",
        "Numerator 3 counts pieces taken; denominator 8 names the equal parts of the whole.",
        "Which number tells the size of each equal piece?",
        "Swapping numerator and denominator tells a different story.",
        {
          a: "You matched pieces taken to pieces in the whole.",
          b: "8/3 would mean pieces larger than the whole in a different reading.",
          c: "3/3 is the entire chapati, not three of eight.",
        },
      ),
      q(
        "g5m-fr-p2",
        "2/9 + 5/9 of the same seed bag is...",
        "7/9",
        "7/18",
        "10/9 with no sense of joining like pieces",
        "a",
        "Like ninths join by adding numerators: 2 + 5 = 7 ninths.",
        "Keep the denominator when pieces are the same size.",
        "Adding denominators would invent new piece sizes.",
        {
          a: "You joined equal-size ninths.",
          b: "18 would mean changing the piece size mid-story.",
          c: "The sum of like ninths stays in ninths.",
        },
      ),
      writeQ(
        "g5m-fr-p3",
        "Write a mixed number for 1 whole roti and 2/5 of another roti.",
        ["1 2/5", "1 and 2/5", "1+2/5", "7/5"],
        "One whole and two fifths is the mixed number 1 2/5 (also 7/5 as an improper form).",
        "Say the wholes first, then the leftover fraction.",
        "2 1/5 would swap how many wholes you finished.",
      ),
    ],
    reasoning: [
      explainQ(
        "g5m-fr-r1",
        "Why is 1/4 of the same field larger than 1/6 of that field?",
        "Both wholes match. Fourths are larger pieces than sixths, so one fourth covers more of the field than one sixth.",
        "Imagine cutting the same field into 4 equal parts versus 6.",
        "A larger denominator means smaller equal pieces of the same whole.",
        ["same whole|same field", "larger piece|fourths|bigger", "sixths|smaller|more pieces"],
      ),
      q(
        "g5m-fr-r2",
        "A tank shows 3/10 full. Which statement fits?",
        "Three of ten equal parts are filled; that is also 30 hundredths of the tank",
        "The tank must be almost empty because tenths never matter on farms",
        "3/10 means three tanks and ten leftover cups",
        "a",
        "Tenths are equal parts. Three tenths equal thirty hundredths of the same tank.",
        "How many equal parts make the whole when you see tenths?",
        "Tenths are real equal parts, not a shrug.",
        {
          a: "You read tenths as equal parts and linked them to hundredths.",
          b: "Tenths help farm measures; three tenths is a clear share.",
          c: "The denominator names parts of one tank, not extra tanks.",
        },
      ),
    ],
    retrieve: [
      q(
        "g5m-fr-t1",
        "Which pair are like fractions?",
        "2/7 and 5/7",
        "1/3 and 1/4",
        "2/5 and 5/2",
        "a",
        "Like fractions share a denominator — same piece size.",
        "Do the bottoms match?",
        "Unit fractions with different denominators are different piece sizes.",
        {
          a: "You matched the denominators.",
          b: "Thirds and fourths are different sizes.",
          c: "2/5 and 5/2 flip the roles of part and whole.",
        },
      ),
      writeQ(
        "g5m-fr-t2",
        "A ribbon is split into 100 equal bits. You use 7 bits. Write that as a fraction of the ribbon.",
        ["7/100", "7/100ths", "seven hundredths"],
        "Seven of one hundred equal parts is 7/100 of the ribbon.",
        "Denominator matches how many equal bits make the whole.",
        "7/10 would be tenths, a coarser cut.",
      ),
      q(
        "g5m-fr-t3",
        "5/8 − 2/8 of the same cake tray is...",
        "3/8",
        "3/0",
        "7/8",
        "a",
        "Remove two eighths from five eighths to leave three eighths.",
        "Keep eighths; change only how many you hold.",
        "Subtracting denominators would break the equal-piece story.",
        {
          a: "You removed like eighths.",
          b: "A zero denominator does not name equal parts.",
          c: "Adding would grow the share instead of removing.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "The fraction with the larger denominator is always the larger share.",
        correction:
          "For the same whole, a larger denominator means smaller equal pieces. Compare piece size, not only the bottom number.",
      },
      {
        idea: "Tenths and hundredths are unrelated to fractions.",
        correction:
          "Tenths and hundredths are fractions with denominators 10 and 100 — finer equal parts of one whole.",
      },
    ],
    reflect: {
      prompt:
        "Where did you share something in equal parts this week — food, time, or a farm chore?",
      keyIdeas: ["equal|fraction|share|part|whole"],
    },
    mastery: q(
      "g5m-fr-m1",
      "On the same water tank, which reading shows the larger filled share?",
      "3/5 of the tank",
      "3/10 of the tank",
      "they match because both numerators are 3",
      "a",
      "Fifths are larger pieces than tenths of the same tank, so three fifths fills more.",
      "Same numerator, different piece sizes — which piece is larger?",
      "Matching numerators alone do not decide the share.",
      {
        a: "You compared piece size on the same whole.",
        b: "Tenths are smaller pieces, so three of them fill less.",
        c: "The denominator changes how big each of the three pieces is.",
      },
    ),
    masteryCriteria:
      "You can name and compare fractions of one whole, join or remove like pieces, read a mixed number, and treat tenths or hundredths as equal parts.",
    teach: {
      prompt:
        "Teach Ivshi why 2/5 of a farm field is more than 2/8 of the same field, using equal parts in your own words.",
      keyIdeas: [
        "same whole|same field",
        "fifths|larger pieces",
        "eighths|smaller|more pieces",
      ],
    },
  },
});

export const anglesAsTurnsLesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-angles-as-turns-core",
  title: "Angles as Turns",
  domainTitle: "Turns",
  prerequisites: ["ncert-g5-maths-mela-fractions-core"],
  nextConceptIds: ["ncert-g5-maths-mela-we-the-travellers-2-core"],
  content: {
    objective:
      "See angles as turns, sort right, acute, and obtuse openings, and compare how open a turn is using a square corner.",
    wonder: {
      prompt:
        "Standing at a crossroads, you can turn a little toward the farm lane or swing wide toward the highway. How can you tell which turn is more open without a protractor in your pocket?",
    },
    explore: {
      text: "An angle is a turn where two rays meet, like gate arms or road forks. A right angle matches a square corner — the turn a book page makes when it stands tall. Smaller than that is acute; more open than that, yet less than a straight half-turn, is obtuse. Comparing openness is comparing how far one arm has swung from the other.",
      activity: {
        prompt: "A gate opens just a little slit for a goat. What kind of turn is that compared with a square corner?",
        choices: [
          {
            id: "acute-slit",
            label: "An acute turn — smaller than a right angle",
            note: "A narrow opening sits inside a square corner. That is an acute turn.",
          },
          {
            id: "obtuse-slit",
            label: "An obtuse turn — more open than a right angle",
            note: "Obtuse would swing wider than a square corner. A goat slit is tighter.",
          },
          {
            id: "half-turn-slit",
            label: "A half turn that faces the opposite way",
            note: "A half turn would flip you around. A slit is only a small swing.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Picture two rays from one point: the arms of a turn. The amount of swing between them is the angle. Roads, scissors, and clock hands all make turns you can feel.",
        "A right angle matches a square corner — think of the corner of a notebook or a wall meeting the floor. Many map grids and field fences lean on that square feel.",
        "An acute angle is a turn smaller than a right angle: a sharp wedge. An obtuse angle opens wider than a right angle but stays less open than a straight line.",
        "To compare turns, hold a square corner against them. If the turn hides inside the square, it is acute. If it spills past the square yet is not flat, it is obtuse.",
        "Talk about openness in journey language: a gentle lane bend, a sharp mountain hairpin, a wide farmyard swing. Measuring starts with comparing before fine numbers appear.",
      ],
    },
    examples: [
      {
        caption: "Square match",
        body: "The corner of a classroom tile is a right-angle turn — a full square corner.",
      },
      {
        caption: "Sharp fork",
        body: "A narrow path splitting from a road often makes an acute turn.",
      },
      {
        caption: "Wide swing",
        body: "A gate opened most of the way past square is an obtuse turn until it lies flat.",
      },
    ],
    connection:
      "Steering a cycle, opening barn doors, and reading fork symbols on a trek map are all turn stories.",
    try: {
      prompt:
        "Hold a book corner against a clock hand pair that shows about 10 minutes past 12. Is that turn acute, right, or obtuse compared with the book corner?",
      reveal:
        "Ten minutes past twelve is a small wedge inside a square corner, so the turn is acute.",
    },
    practice: [
      q(
        "g5m-ang-p1",
        "What is an angle in this lesson's travel sense?",
        "a turn where two rays meet",
        "only a number printed on a protractor sticker",
        "any curved hill path with no meeting point",
        "a",
        "An angle is the turn between two rays that share an endpoint.",
        "Where do the two arms of a fork meet?",
        "Tools help measure; the turn itself is the angle idea.",
        {
          a: "You pictured the swing between two arms.",
          b: "A tool reading describes a turn; it is not the only meaning.",
          c: "A curve without a clear meeting of two rays is a different story.",
        },
      ),
      q(
        "g5m-ang-p2",
        "A turn that matches a square notebook corner is...",
        "a right angle",
        "always obtuse",
        "always acute",
        "a",
        "Matching a square corner names a right angle.",
        "What everyday object gives a square corner feel?",
        "Acute and obtuse sit beside right, not on top of it.",
        {
          a: "You matched the turn to a square corner.",
          b: "Obtuse opens wider than square.",
          c: "Acute sits inside square.",
        },
      ),
      writeQ(
        "g5m-ang-p3",
        "Write one word for a turn that is more open than a right angle but not a straight half-turn.",
        ["obtuse", "obtuse angle", "obtuse turn"],
        "A turn wider than right yet less than straight is called obtuse.",
        "Compare with a square corner, then imagine opening a bit more.",
        "Acute would be the narrower wedge.",
      ),
    ],
    reasoning: [
      explainQ(
        "g5m-ang-r1",
        "At a farm gate, Turn A hides inside a square corner and Turn B spills past that corner but is not flat. Which is more open, and how do you know?",
        "Turn B is more open. It opens wider than a right angle (obtuse), while Turn A is acute and sits inside the square corner.",
        "Hold the same square corner against both turns.",
        "More open means a larger swing between the arms.",
        ["B|turn b|obtuse|wider", "A|acute|inside|square", "open|compare|corner"],
      ),
      q(
        "g5m-ang-r2",
        "Why can two road forks both be acute yet one still feel sharper?",
        "Both are smaller than right, but one swing can be tinier than the other",
        "Acute means every acute turn must be the same openness",
        "Sharper always means obtuse on maps",
        "a",
        "Acute only says smaller than right. Within that band, openness can still differ.",
        "Can two wedges both fit inside a square corner with different sizes?",
        "The acute label is a band, not a single fixed swing.",
        {
          a: "You compared openness inside the acute band.",
          b: "Acute names a range of smaller-than-right turns.",
          c: "Obtuse is the wider-than-right band, not the sharpest wedge.",
        },
      ),
    ],
    retrieve: [
      q(
        "g5m-ang-t1",
        "Which turn is obtuse?",
        "a gate swung past a square corner but not flat against the wall",
        "a needle-thin crack smaller than a square corner",
        "a perfect match to a notebook corner",
        "a",
        "Past square yet not straight is obtuse.",
        "Compare each picture with a square corner.",
        "Thin cracks are acute; exact square is right.",
        {
          a: "You placed the turn between right and straight.",
          b: "A thin crack sits inside the square corner.",
          c: "An exact square match is a right angle.",
        },
      ),
      q(
        "g5m-ang-t2",
        "To compare two turns without numbers, a useful first tool is...",
        "a square corner held against each turn",
        "adding the road lengths beside the fork",
        "ignoring openness and only counting cars",
        "a",
        "A square corner is a right-angle landmark for comparing openness.",
        "What everyday corner stands for a right angle?",
        "Lengths beside the fork do not measure the swing.",
        {
          a: "You used a right-angle landmark.",
          b: "Path lengths are a different measure from turn openness.",
          c: "Traffic count does not name the angle.",
        },
      ),
      explainQ(
        "g5m-ang-t3",
        "In your own words, how is a right angle different from an acute angle on a trail fork?",
        "A right angle matches a square corner. An acute angle is a smaller turn that fits inside that square corner.",
        "Name the square-corner match, then say what smaller means.",
        "Different names mark different openness, not different trail colours.",
        ["right|square|corner", "acute|smaller|inside|less"],
      ),
    ],
    misconceptions: [
      {
        idea: "Any corner on a map is a right angle.",
        correction:
          "Only turns that match a square corner are right. Others may be acute or obtuse.",
      },
      {
        idea: "Obtuse means the sharpest possible turn.",
        correction:
          "Obtuse is more open than right. Sharp tiny wedges are acute.",
      },
    ],
    reflect: {
      prompt:
        "Where did you make a turn today that felt smaller or wider than a square corner?",
      keyIdeas: ["turn|angle|right|acute|obtuse|corner"],
    },
    mastery: q(
      "g5m-ang-m1",
      "A cycle path bends in a turn smaller than a notebook corner. That turn is...",
      "acute",
      "right",
      "obtuse",
      "a",
      "Smaller than a square corner means acute.",
      "Hold the notebook corner against the bend in your mind.",
      "Right matches square; obtuse opens wider than square.",
      {
        a: "You placed the bend inside the square corner.",
        b: "Right would match the notebook corner exactly.",
        c: "Obtuse would spill past the notebook corner.",
      },
    ),
    masteryCriteria:
      "You can describe an angle as a turn, sort right, acute, and obtuse openings, and compare openness with a square corner.",
    teach: {
      prompt:
        "Teach Ivshi how to tell an acute farm-gate turn from an obtuse one using only a square corner.",
      keyIdeas: [
        "square|right|corner",
        "acute|inside|smaller",
        "obtuse|wider|past",
      ],
    },
  },
});

export const weTheTravellers2Lesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-we-the-travellers-2-core",
  title: "We the Travellers—II",
  domainTitle: "Travel numbers",
  prerequisites: ["ncert-g5-maths-mela-angles-as-turns-core"],
  nextConceptIds: ["ncert-g5-maths-mela-far-and-near-core"],
  content: {
    objective:
      "Add and subtract large travel numbers with regrouping, and use addition properties so journey totals stay trustworthy.",
    wonder: {
      prompt:
        "Two bus companies report 48,675 and 36,458 tickets sold for the same festival week. How can you find the combined crowd and the difference between them without losing a place on the way?",
    },
    explore: {
      text: "Travel II is about moving large numbers: joining kilometres, finding how much farther one route is, regrouping when a place overflows or needs a borrow. Addition is flexible — you can swap addends or group them differently and the journey sum stays the same. Subtraction across zeros needs careful ungrouping, like opening a thousand into ten hundreds when a fare story demands it.",
      activity: {
        prompt: "When adding 2,586 + 1,747, the ones 6 + 7 make 13. What happens next?",
        choices: [
          {
            id: "regroup-ten",
            label: "Write 3 ones and regroup 1 ten to the tens place",
            note: "Thirteen ones become 1 ten and 3 ones. That is regrouping on a travel sum.",
          },
          {
            id: "drop-ones",
            label: "Drop the 1 and keep only 3 with no tens story",
            note: "The extra ten still belongs in the sum. It must move to tens.",
          },
          {
            id: "write-thirteen",
            label: "Write 13 in the ones place and stop",
            note: "Ones hold a single digit in place-value addition. Thirteen needs a regroup.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Line up places before you add or subtract travel totals: ones under ones, thousands under thousands. A slipped column turns a festival count into a different story.",
        "Regrouping in addition: when a place makes ten or more, keep the ones digit and carry a group of ten to the next place. Large journey sums often need several regroups.",
        "Regrouping in subtraction: when a place has too little, ungroup one from the left — a ten into ten ones, a thousand into ten hundreds — including across zeros on kilometre boards.",
        "Properties help check sense: changing order (3,200 + 1,150 = 1,150 + 3,200) or grouping addends differently does not change the sum. Zero added leaves a total as it is.",
        "Differences answer how much farther, how many more tickets, or how much shorter a return path is. Estimate first with front digits, then compute to confirm.",
      ],
    },
    examples: [
      {
        caption: "Join routes",
        body: "12,450 km + 8,375 km = 20,825 km when places line up and tens regroup as needed.",
      },
      {
        caption: "Find the gap",
        body: "50,000 − 27,368 needs ungrouping across zeros to leave 22,632.",
      },
      {
        caption: "Swap to check",
        body: "4,180 + 2,905 equals 2,905 + 4,180. Same festival total either way.",
      },
    ],
    connection:
      "Tour budgets, combined coach tickets, and comparing two highway lengths all ask for careful adding and subtracting.",
    try: {
      prompt:
        "A trip meter shows 9,086 km at dawn and 9,540 km at dusk. How many kilometres did the bus cover that day? Estimate, then compute.",
      reveal:
        "About 500 km by front sense. Exactly 9,540 − 9,086 = 454 km after ungrouping where needed.",
    },
    practice: [
      q(
        "g5m-tr2-p1",
        "24,368 + 15,457 is...",
        "39,825",
        "39,715",
        "30,825",
        "a",
        "Line up places and regroup: ones 15 → write 5 carry 1; continue through thousands to 39,825.",
        "Add ones first, then move left with any regroups.",
        "A missed regroup often drops a ten or a thousand.",
        {
          a: "You kept places lined up through the regroups.",
          b: "Check the tens or hundreds regroup again.",
          c: "Thirty thousand would miss part of the twenty-four thousand.",
        },
      ),
      q(
        "g5m-tr2-p2",
        "Which property says 6,400 + 2,150 equals 2,150 + 6,400?",
        "you can swap addends and the sum stays the same",
        "subtraction always grows a travel total",
        "regrouping is never allowed with large numbers",
        "a",
        "Order of addends can change; the journey sum does not.",
        "Try the two orders on small numbers first.",
        "Addition properties are helpers, not bans on regrouping.",
        {
          a: "You used the swap property of addition.",
          b: "Subtraction finds a difference; it does not grow by default.",
          c: "Large numbers still regroup when a place overflows.",
        },
      ),
      writeQ(
        "g5m-tr2-p3",
        "Compute 7,003 − 2,458 and write the difference.",
        ["4545", "4,545", "4 545"],
        "Ungroup across the zeros carefully: 7,003 − 2,458 = 4,545.",
        "Open a thousand into hundreds when a place needs more.",
        "Skipping ungrouping across zero often invents an extra thousand.",
      ),
    ],
    reasoning: [
      explainQ(
        "g5m-tr2-r1",
        "Why does lining up the thousands place matter when adding 38,250 and 6,940 for a tour plan?",
        "Each digit must sit in its true place. If 6,940 shifts left or right, you would add thousands to tens or hundreds and invent a false tour total.",
        "Say what would happen to the total if the 6 sat under the 3.",
        "Place columns keep each digit's value honest.",
        ["place|column|line|align", "thousand|value", "shift|false|mistake|value changes"],
      ),
      q(
        "g5m-tr2-r2",
        "A meter reads 40,000 km. After repairs it shows 37,285 km less on a reset story problem: 40,000 − 37,285. What must you do with the zeros?",
        "ungroup from the 4 ten-thousands across the zeros so each place can subtract",
        "ignore the zeros and subtract only 4 − 3",
        "add 37,285 instead because zeros ban subtraction",
        "a",
        "Across zeros, ungroup step by step from the left until each place can give.",
        "Can ones subtract 5 from 0 without help from the left?",
        "Zeros need ungrouping; they do not ban subtraction.",
        {
          a: "You planned ungrouping across the zeros.",
          b: "Only the leading digits would drop most of the journey story.",
          c: "The story asks for a difference, not a new sum.",
        },
      ),
    ],
    retrieve: [
      q(
        "g5m-tr2-t1",
        "In 5,678 + 3,459, after ones make 17 you should...",
        "write 7 ones and regroup 1 ten",
        "write 17 in ones and leave tens untouched",
        "erase the ones and start the sum again from lakhs only",
        "a",
        "Seventeen ones are 1 ten and 7 ones.",
        "How many ones stay, and what moves next door?",
        "Ones hold one digit in standard place addition.",
        {
          a: "You regrouped ten ones as one ten.",
          b: "Seventeen cannot sit entirely in the ones place.",
          c: "You can finish the sum place by place without erasing.",
        },
      ),
      writeQ(
        "g5m-tr2-t2",
        "Find 12,560 + 7,890. Write the sum.",
        ["20450", "20,450", "20 450"],
        "12,560 + 7,890 = 20,450 after regrouping tens and hundreds as needed.",
        "Add from ones leftward; watch for regroups.",
        "20,350 would miss a regrouped hundred.",
      ),
      q(
        "g5m-tr2-t3",
        "Which check supports 9,250 − 3,180 = 6,070?",
        "6,070 + 3,180 returns 9,250",
        "6,070 − 3,180 must equal 9,250",
        "adding the digits of 6,070 must equal 9",
        "a",
        "Adding the difference and the subtracted part rebuilds the start.",
        "What operation undoes subtraction?",
        "Digit sums are not a place-value check.",
        {
          a: "You used addition to reverse the subtraction.",
          b: "Subtracting again would go further from the start.",
          c: "Digit sums ignore place value.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "You can add large numbers from either end without lining up places.",
        correction:
          "Places must align. Start from ones and move left so each digit keeps its value.",
      },
      {
        idea: "Zeros in the middle mean subtraction is impossible.",
        correction:
          "Ungroup from a higher place across the zeros so each column can subtract.",
      },
    ],
    reflect: {
      prompt:
        "When did you join or compare two large amounts this week — money, steps, or kilometres?",
      keyIdeas: ["add|subtract|regroup|total|difference"],
    },
    mastery: q(
      "g5m-tr2-m1",
      "To find how much farther 56,420 km is than 48,975 km you should...",
      "subtract with places lined up, ungrouping where a digit is too small",
      "add the two distances because farther always means a sum",
      "compare only the leftmost digits and ignore the rest",
      "a",
      "Farther asks for a difference: 56,420 − 48,975 with careful regrouping.",
      "Does 'how much farther' sound like join or gap?",
      "Leftmost digits start a compare, but the exact gap needs subtraction.",
      {
        a: "You chose subtraction for the gap between journeys.",
        b: "Adding would combine routes, not measure the gap.",
        c: "Exact farther-by needs every place, not only the lead digit.",
      },
    ),
    masteryCriteria:
      "You can add and subtract multi-digit travel numbers with regrouping, use a property to check a sum, and explain a journey difference.",
    teach: {
      prompt:
        "Teach Ivshi how to compute 8,000 − 2,365, saying how you ungroup across zeros.",
      keyIdeas: [
        "ungroup|borrow|open",
        "zero|thousand|hundred",
        "5635|5,635",
      ],
    },
  },
});

export const farAndNearLesson = grade5MathLesson({
  conceptId: "ncert-g5-maths-mela-far-and-near-core",
  title: "Far and Near",
  domainTitle: "Distance",
  prerequisites: ["ncert-g5-maths-mela-we-the-travellers-2-core"],
  nextConceptIds: ["ncert-g5-maths-mela-the-dairy-farm-core"],
  content: {
    objective:
      "Choose metres or kilometres for a distance, compare how far places sit, and find perimeters of rectangles and composite farm paths.",
    wonder: {
      prompt:
        "Is the walk from the classroom to the school gate better told in metres or kilometres, and how would you measure the fence loop around a rectangular playground?",
    },
    explore: {
      text: "Far and near is about choosing a unit that fits the story. Classroom corridors live in metres; town-to-town journeys live in kilometres. Perimeter is the walk around — add the outer edges of a rectangular field, or of a path made from joined rectangles, without double-counting a shared inner wall you do not walk.",
      activity: {
        prompt: "Which unit fits best for the distance between two neighbouring villages on a highway?",
        choices: [
          {
            id: "kilometres-fit",
            label: "Kilometres — longer road stories",
            note: "Village-to-village highway stretches usually sit in kilometres.",
          },
          {
            id: "metres-only",
            label: "Only metres — every journey must use metres",
            note: "Metres work for short walks; long roads become huge metre counts.",
          },
          {
            id: "no-unit",
            label: "No unit — far and near never need a measure",
            note: "Comparing far and near becomes clearer with a fitting unit.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Metres suit shorter lengths: a classroom, a garden bed, a race track lap you can see. Kilometres suit longer journeys: town to town, farm to market along a highway.",
        "Compare distances with the same unit. Convert sense when needed: 1 km is 1,000 m, so 2 km is farther than 1,500 m because 2,000 m beats 1,500 m.",
        "Perimeter of a rectangle is the walk around all four sides: length + width + length + width, or 2 × (length + width). A fence story is a perimeter story.",
        "Composite paths join shapes. Add only the outer edges you actually walk. Shared inner edges between two joined rectangles are not part of the outer loop unless the path uses them.",
        "Choose units so estimates stay sensible: a pencil is not 2 km; a highway is rarely 2 m. Matching unit to story keeps far and near honest.",
      ],
    },
    examples: [
      {
        caption: "Unit fit",
        body: "School corridor ≈ 40 m. Market town 12 km away. Different stories, different units.",
      },
      {
        caption: "Rectangle fence",
        body: "A field 80 m by 50 m needs 80 + 50 + 80 + 50 = 260 m of fence.",
      },
      {
        caption: "Joined yards",
        body: "Two rectangles sharing a side: walk the outer outline only — skip the shared wall if you are fencing the whole farmyard as one loop.",
      },
    ],
    connection:
      "Trek maps, sports tracks, and farm fences all ask how far and how much boundary to walk or build.",
    try: {
      prompt:
        "A rectangular kitchen garden is 9 m long and 4 m wide. What is its perimeter? Then say whether that loop is nearer a short walk in metres or a highway in kilometres.",
      reveal:
        "Perimeter = 2 × (9 + 4) = 26 m — a short metre walk, not a kilometre highway.",
    },
    practice: [
      q(
        "g5m-fn-p1",
        "Which distance is better reported in kilometres?",
        "the road from your town to a hill station",
        "the width of a notebook",
        "the height of a water bottle",
        "a",
        "Town to hill station is a long journey — kilometres fit.",
        "Which story stretches across a map?",
        "Notebooks and bottles live in centimetres or metres.",
        {
          a: "You matched kilometres to a long road story.",
          b: "A notebook width is a tiny length.",
          c: "A bottle height is still a short measure.",
        },
      ),
      q(
        "g5m-fn-p2",
        "A rectangular playground is 60 m by 40 m. Its perimeter is...",
        "200 m",
        "100 m",
        "2,400 m",
        "a",
        "2 × (60 + 40) = 2 × 100 = 200 m around.",
        "Add length and width, then double for the full loop.",
        "Multiplying length by width finds area, not the walk around.",
        {
          a: "You added both pairs of sides.",
          b: "100 m is only length + width once — half a loop.",
          c: "2,400 would mix an area-style product into a perimeter story.",
        },
      ),
      writeQ(
        "g5m-fn-p3",
        "Which is farther: 1,200 m or 1 km? Write the farther distance using metres.",
        ["1200 m", "1,200 m", "1200 metres", "1,200 metres"],
        "1 km = 1,000 m, so 1,200 m is farther. Report 1,200 m.",
        "Change both to metres before you compare.",
        "Thinking 1 km is always farther ignores the metre count.",
      ),
    ],
    reasoning: [
      explainQ(
        "g5m-fn-r1",
        "Two rectangular farm plots share one long side like a figure-eight fence plan that becomes one outer yard. Why might the outer perimeter be less than the sum of the two separate perimeters?",
        "When plots join, the shared side is inside and not part of the outer walk. Adding both full perimeters would count that shared side twice, so the outer loop is shorter.",
        "Picture the wall in the middle — do you walk it when looping the whole yard once?",
        "Shared edges are not always part of the outer path.",
        ["shared|common|middle|inside", "outer|around|loop", "twice|double|less|shorter"],
      ),
      q(
        "g5m-fn-r2",
        "Why choose metres for a 75 m sprint track instead of kilometres?",
        "75 m is a short visible length; in kilometres it would be 0.075 km and harder to picture",
        "metres are never used in sports",
        "kilometres always make every distance sound nearer",
        "a",
        "Units should fit the size of the story so the number stays friendly.",
        "Would 0.075 km help a runner picture the track?",
        "Sports often use metres for track lengths.",
        {
          a: "You matched the unit to a short track story.",
          b: "Track events commonly use metres.",
          c: "Kilometres suit longer journeys; they do not shrink every story.",
        },
      ),
    ],
    retrieve: [
      q(
        "g5m-fn-t1",
        "2 km compared with 1,500 m is...",
        "farther, because 2 km = 2,000 m",
        "nearer, because 2 is a smaller numeral than 1,500",
        "the same length with different spellings only",
        "a",
        "Same unit check: 2,000 m beats 1,500 m.",
        "Change kilometres to metres first.",
        "Bare numerals without units do not decide far and near.",
        {
          a: "You compared both distances in metres.",
          b: "The numeral 2 is kilometres, not raw metres.",
          c: "2 km and 1,500 m are different lengths.",
        },
      ),
      writeQ(
        "g5m-fn-t2",
        "A rectangular dairy shed floor is 12 m by 7 m. Write its perimeter in metres.",
        ["38", "38 m", "38 metres", "2*(12+7)=38"],
        "Perimeter = 2 × (12 + 7) = 38 m.",
        "Add length and width, then double.",
        "19 m would be only one length plus one width.",
      ),
      q(
        "g5m-fn-t3",
        "For a composite path of two joined rectangles, perimeter means...",
        "the total length of the outer edges you walk",
        "only the shared inner wall counted twice",
        "the product of all side lengths",
        "a",
        "Perimeter is the outer loop — add outer edges once.",
        "Which edges touch the outside of the whole shape?",
        "Products suggest area-style thinking, not the walk around.",
        {
          a: "You focused on the outer walk.",
          b: "The shared wall is usually inside, not double-walked for one outer loop.",
          c: "Multiplying sides is not the perimeter path.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "The smaller numeral always means the nearer place.",
        correction:
          "Compare with the same unit. 2 km is farther than 500 m even though 2 looks smaller than 500.",
      },
      {
        idea: "Perimeter of joined shapes is always the sum of each shape's full perimeter.",
        correction:
          "Shared inner edges are not part of the outer loop; do not count them twice.",
      },
    ],
    reflect: {
      prompt:
        "Name one distance near you that belongs in metres and one that belongs in kilometres.",
      keyIdeas: ["metre|kilometre|far|near|perimeter"],
    },
    mastery: q(
      "g5m-fn-m1",
      "A rectangular park is 90 m by 40 m. To fence it once around, you need...",
      "260 m of fencing",
      "130 m of fencing",
      "3,600 m of fencing",
      "a",
      "2 × (90 + 40) = 260 m around the park.",
      "Perimeter walks all four sides.",
      "130 m is half the loop; 3,600 mixes an area product.",
      {
        a: "You found the full outer walk.",
        b: "130 m covers length + width only once.",
        c: "3,600 m matches length × width, an area-style number.",
      },
    ),
    masteryCriteria:
      "You can choose m or km for a story, compare distances in one unit, and find perimeter for a rectangle or an outer composite path.",
    teach: {
      prompt:
        "Teach Ivshi how to find the perimeter of a 15 m by 10 m rectangular farm plot, and say why metres fit.",
      keyIdeas: [
        "50|2*(15+10)|perimeter",
        "metre|short|field|plot",
        "around|fence|loop",
      ],
    },
  },
});
