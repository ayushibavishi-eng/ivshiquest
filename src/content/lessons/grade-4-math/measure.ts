import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade4MathLesson } from "@/content/lessons/grade-4-math/format";

export const measuringLengthLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-measuring-length-core",
  title: "Measuring Length",
  domainTitle: "Length",
  prerequisites: ["ncert-g4-maths-mela-sharing-and-measuring-core"],
  nextConceptIds: ["ncert-g4-maths-mela-the-cleanest-village-core"],
  content: {
    objective:
      "Estimate and measure length in centimetres and metres, compare two lengths, and choose a unit that fits the object.",
    wonder: {
      prompt:
        "Would you measure a pencil in metres or centimetres? What would happen if you tried the other unit?",
    },
    explore: {
      text: "Length is how long something is from end to end. A centimetre (cm) is a small unit. A metre (m) is 100 centimetres — about a long step for many children. Estimate first: 'a bit more than 10 cm'. Then measure from 0 on the ruler, not from the ruler's metal end if that is not zero.",
      activity: {
        prompt: "Which unit fits the height of a classroom door better?",
        choices: [
          {
            id: "metres",
            label: "metres (a door is a couple of metres tall)",
            note: "You chose a unit that fits. Doors are usually about 2 m, not 2 cm.",
          },
          {
            id: "cm-tiny",
            label: "only centimetres, as if the door were as short as a crayon",
            note: "You could write 200 cm, but metres tell the story more simply for a door.",
          },
          {
            id: "kilometres",
            label: "kilometres, like a highway",
            note: "A kilometre is 1,000 metres. That unit is for roads, not doors.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Start at 0. If you start at 1, every reading will be 1 cm too high.",
        "100 cm = 1 m. 150 cm is 1 m and 50 cm. You can write 1 m 50 cm or 150 cm.",
        "Estimate, then measure. If your estimate was 20 cm and the ruler shows 8 cm, look again — maybe you did not start at 0, or the object is shorter than you thought.",
        "Compare by lining up or by using the same unit. 90 cm is less than 1 m because 1 m is 100 cm.",
        "Perimeter is the walk around. A book 8 cm by 3 cm has four sides to add: 8 + 3 + 8 + 3 = 22 cm around.",
      ],
    },
    examples: [
      {
        caption: "Pencil",
        body: "Many pencils are about 15 to 20 cm. Metres would be a tiny decimal story you do not need yet.",
      },
      {
        caption: "Room",
        body: "A classroom wall might be 6 m or 8 m. Counting centimetres would be a huge number.",
      },
      {
        caption: "Compare",
        body: "A ribbon 80 cm and a stick 1 m: the stick is 20 cm longer, because 100 − 80 = 20.",
      },
    ],
    connection:
      "Tailors, sports tracks, and measuring a jump all need a unit that fits and a fair start at zero.",
    try: {
      prompt:
        "Estimate the length of your notebook in centimetres. Then measure. How close were you — within 2 cm, or farther?",
      reveal:
        "A small notebook is often near 20 cm on the long side. Being a little off is normal. A huge miss usually means the unit or the zero point slipped.",
    },
    practice: [
      q(
        "g4m-ln-p1",
        "How many centimetres make 1 metre?",
        "100",
        "10",
        "1,000",
        "a",
        "1 m = 100 cm. 10 cm is a short stretch. 1,000 cm would be 10 metres.",
        "A metre rod has 100 centimetre marks.",
        "1,000 is how many metres in a kilometre, not cm in a metre.",
        {
          a: "You found the hundred centimetres.",
          b: "10 cm is a decimetre-sized stretch, not a whole metre.",
          c: "1,000 cm is 10 m.",
        },
      ),
      q(
        "g4m-ln-p2",
        "A child measures a crayon starting at 2 cm on the ruler and reads 9 cm. What is a better length?",
        "about 7 cm, because they started 2 cm after zero",
        "9 cm, because that is the number they saw",
        "11 cm, adding 2 for luck",
        "a",
        "Length is the difference from the start mark to the end mark. 9 − 2 = 7.",
        "Where was the zero?",
        "The number at the tip is not the length if you did not start at 0.",
        {
          a: "You used the gap, not only the end number.",
          b: "The 9 includes the extra 2 cm before the crayon.",
          c: "Adding 2 would grow the length for no reason.",
        },
      ),
      writeQ(
        "g4m-ln-p3",
        "A stick is 1 m 20 cm. How many centimetres is that in all?",
        ["120", "120 cm", "120 centimetres"],
        "1 m is 100 cm, plus 20 cm is 120 cm.",
        "Change the metre into centimetres first.",
        "20 cm would forget the metre.",
      ),
    ],
    reasoning: [
      explainQ(
        "g4m-ln-r1",
        "Two children measure the same bench. One says 90 cm. One says 1 m. Can both be close? What would you check?",
        "They are 10 cm apart (100 − 90). Check zero, a straight ruler, and whether someone rounded. They cannot both be exact unless a unit slipped.",
        "How many centimetres is 1 m?",
        "A 10 cm gap is worth a second look, not an argument.",
        ["hundred|100|metre|meter", "ninety|90", "zero|ruler|round"],
      ),
      q(
        "g4m-ln-r2",
        "Which is a sensible estimate for a new unsharpened pencil?",
        "about 20 cm",
        "about 20 m",
        "about 2 km",
        "a",
        "A pencil is a small object. Metres and kilometres belong to rooms and roads.",
        "Hold a ruler in your mind next to a pencil.",
        "20 m is longer than many rooms. 2 km is a long walk.",
        {
          a: "You matched a small object to centimetres.",
          b: "20 m would be a very long pole.",
          c: "Kilometres measure journeys.",
        },
      ),
    ],
    retrieve: [
      q(
        "g4m-ln-t1",
        "90 cm compared with 1 m is...",
        "10 cm shorter than 1 m",
        "90 times as long as 1 m",
        "the same length",
        "a",
        "1 m = 100 cm, so 90 cm is 10 cm less.",
        "Change 1 m into centimetres.",
        "Same unit first, then compare.",
        {
          a: "You compared in centimetres.",
          b: "90 times would be a huge stretch.",
          c: "90 cm and 100 cm are not the same.",
        },
      ),
      explainQ(
        "g4m-ln-t2",
        "Why estimate before you measure?",
        "An estimate tells you if the later reading is sensible. If you expected 15 cm and see 80 cm, you look again at zero or the unit.",
        "What if the ruler slipped?",
        "Estimating is a check, not a guess to keep forever.",
        ["estimate|about", "check|sense|zero|unit"],
      ),
      writeQ(
        "g4m-ln-t3",
        "A rectangle is 8 cm by 3 cm. What is the distance around, in centimetres?",
        ["22", "22 cm", "22 centimetres"],
        "8 + 3 + 8 + 3 = 22 cm. Around means all four sides.",
        "Add both lengths and both breadths.",
        "8 × 3 = 24 would fill the inside, not walk the edge.",
      ),
    ],
    misconceptions: [
      {
        idea: "The number under the object's tip is always the length.",
        correction: "Length is from the start mark. Start at 0, or subtract the start number.",
      },
      {
        idea: "Bigger unit names always mean a bigger object.",
        correction: "1 m is longer than 1 cm, but 200 cm is 2 m. Compare after matching units.",
      },
    ],
    reflect: {
      prompt: "What did you measure (or wish you could measure) today, and which unit fitted?",
      keyIdeas: ["centimetre|metre|cm", "long|length|measure"],
    },
    mastery: q(
      "g4m-ln-m1",
      "A fair length measure needs...",
      "a unit that fits and a start at zero (or a known start mark)",
      "any number you like from the middle of the ruler",
      "kilometres for every small object",
      "a",
      "Unit plus a fair start is the whole idea.",
      "Would another child get the same reading?",
      "Middle-of-ruler numbers and giant units break the measure.",
      {
        a: "You named unit and zero.",
        b: "The middle of the ruler is not a start.",
        c: "Kilometres swallow small objects.",
      },
    ),
    masteryCriteria:
      "You can choose cm or m, measure from zero, and compare two lengths in the same unit.",
    teach: {
      prompt:
        "Teach Ivshi how to measure a pencil. Say where to put zero and which unit you choose.",
      keyIdeas: ["zero|start", "centimetre|cm", "ruler|length"],
    },
  },
});

export const weighItPourItLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-weigh-it-pour-it-core",
  title: "Weigh it, Pour it",
  domainTitle: "Mass and capacity",
  prerequisites: ["ncert-g4-maths-mela-the-cleanest-village-core"],
  nextConceptIds: ["ncert-g4-maths-mela-equal-groups-core"],
  content: {
    objective:
      "Compare mass and capacity using weighing and pouring, and choose grams, kilograms, millilitres, or litres that fit.",
    wonder: {
      prompt:
        "A big empty carton can look larger than a small stone. Which one might be heavier, and how could you find out without guessing from size?",
    },
    explore: {
      text: "Mass is how heavy something is. A pan balance compares two masses. Kilograms (kg) are for heavier things; grams (g) are for lighter ones. 1,000 g = 1 kg. Capacity is how much a container can hold. Millilitres (ml) are small pours; litres (l) are bigger. 1,000 ml = 1 l. Size and heaviness do not always match.",
      activity: {
        prompt: "You pour one full mug into a jug, then another, then another. The jug is not full. What are you finding?",
        choices: [
          {
            id: "capacity",
            label: "How much the jug can hold, using the mug as a unit",
            note: "You found it. Pouring compares capacity. The mug is a unit.",
          },
          {
            id: "length",
            label: "How long the jug is in centimetres",
            note: "Pouring does not measure length. A ruler would.",
          },
          {
            id: "time",
            label: "What time the clock shows",
            note: "Pours are about how much space the water takes, not the clock.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Heavier tips a pan balance down on that side. Equal masses balance.",
        "A watermelon might be about 2 kg. A packet of biscuits might be 100 g. A lady's finger is grams, not kilograms.",
        "A teaspoon is millilitres. A water bottle is often 1 l. A bucket is several litres.",
        "Full, half full, and empty are capacity words. Two bottles of the same shape can still hold different amounts if one is taller or wider — pouring tells you more than a glance.",
      ],
    },
    examples: [
      {
        caption: "Balance",
        body: "A pencil box balances 8 identical blocks. Each block is a unit of mass for that box.",
      },
      {
        caption: "Pour",
        body: "It takes 4 mugs to fill a bottle. The bottle's capacity is 4 mugs, until you switch to millilitres.",
      },
      {
        caption: "Not size",
        body: "A blown-up balloon is large and light. A small iron key is heavier.",
      },
    ],
    connection:
      "Kitchen weighing, medicine spoons, and filling a bottle for a trip all use mass or capacity.",
    try: {
      prompt:
        "Name one thing you would weigh in grams and one you would weigh in kilograms. Name one pour in millilitres and one in litres.",
      reveal:
        "Grams: a chilli, an eraser. Kilograms: a bag of rice, a child. Millilitres: a spoon of oil. Litres: a bottle of water.",
    },
    practice: [
      q(
        "g4m-wp-p1",
        "1 kilogram is how many grams?",
        "1,000 g",
        "100 g",
        "10 g",
        "a",
        "1 kg = 1,000 g, just as 1 l = 1,000 ml.",
        "Think of a 1 kg packet split into gram cubes.",
        "100 g is a small bar, not a whole kilogram.",
        {
          a: "You found a thousand grams.",
          b: "100 g is one-tenth of a kilogram.",
          c: "10 g is about a couple of coins' mass, not a kilogram.",
        },
      ),
      q(
        "g4m-wp-p2",
        "A stone sinks one pan. Cotton wool sits high on the other pan. What did you learn?",
        "the stone has more mass than that much cotton wool",
        "the cotton wool is longer",
        "the stone holds more litres",
        "a",
        "A balance compares mass. The down pan is heavier.",
        "Which pan went down?",
        "Length and litres are different measures.",
        {
          a: "You read the heavier pan.",
          b: "A balance is not a ruler.",
          c: "Mass is not the same as how much water a thing can hold.",
        },
      ),
      writeQ(
        "g4m-wp-p3",
        "A bottle holds 1 litre. How many millilitres is that?",
        ["1000", "1,000", "1000 ml", "1,000 ml"],
        "1 l = 1,000 ml.",
        "Capacity uses the same thousand pattern as grams and kilograms.",
        "100 ml would be a small glass, not a litre bottle.",
      ),
    ],
    reasoning: [
      explainQ(
        "g4m-wp-r1",
        "Why can a large empty box be lighter than a small bag of pebbles?",
        "Mass is not the same as how much space something takes. The box is mostly air. The pebbles pack more mass into a small space.",
        "What is inside each object?",
        "Eyes see size. Hands and a balance feel mass.",
        ["mass|heavy|light", "size|space|air|big", "pebble|box"],
      ),
      q(
        "g4m-wp-r2",
        "It takes 5 identical cups to fill a jug. A friend uses smaller cups and needs 8. Did the jug's capacity change?",
        "No. The unit cup changed, so the count changed",
        "Yes. The jug grew when the cups got smaller",
        "Yes. Capacity is always equal to 5",
        "a",
        "Capacity of the jug stayed. A smaller unit needs more pours to fill the same jug.",
        "Who changed — the jug or the cup?",
        "The number 5 belonged to one unit, not to the jug forever.",
        {
          a: "You kept the jug the same and changed the unit.",
          b: "The jug did not grow.",
          c: "5 was true for the first cup size only.",
        },
      ),
    ],
    retrieve: [
      q(
        "g4m-wp-t1",
        "Which unit fits a teaspoon of vanilla better?",
        "millilitres",
        "kilograms",
        "kilometres",
        "a",
        "A spoon is a tiny capacity. Millilitres fit. Kilograms are mass. Kilometres are length.",
        "Are you pouring or weighing a road?",
        "Match the kind of measure, then the size of the unit.",
        {
          a: "You chose a small capacity unit.",
          b: "Kilograms would weigh the whole bottle, not a spoon of liquid as a pour.",
          c: "Kilometres measure distance.",
        },
      ),
      explainQ(
        "g4m-wp-t2",
        "How can pouring help you compare two jugs without a marked scale?",
        "Fill one jug, then pour into the other. If water is left, the first was larger. If the second still has space, the second is larger. Or fill both with the same cup and count pours.",
        "What happens to the water when it moves from jug to jug?",
        "Looking at height only can trick you if the jugs have different shapes.",
        ["pour|fill|cup", "more|left|space|larger"],
      ),
    ],
    misconceptions: [
      {
        idea: "Bigger looking always means heavier or more holding.",
        correction: "Compare with a balance or by pouring. Air and shape can fool your eyes.",
      },
      {
        idea: "Grams, metres, and millilitres are three words for the same thing.",
        correction: "Mass, length, and capacity are different. Match the unit to the kind of measure.",
      },
    ],
    reflect: {
      prompt: "When did size and heaviness not match — a balloon, a stone, a packet?",
      keyIdeas: ["heavy|mass|light", "size|big|small"],
    },
    mastery: q(
      "g4m-wp-m1",
      "To compare how much two bottles can hold, a fair way is to...",
      "pour, or use the same capacity unit for both",
      "weigh the empty bottles and ignore pouring",
      "measure their height only, even if one is much wider",
      "a",
      "Capacity needs pouring or a capacity unit. Height alone misses width.",
      "What happens to the water?",
      "Empty mass and height are different questions.",
      {
        a: "You compared holding, not only looks.",
        b: "Weighing empty bottles is mass, not how much they hold.",
        c: "A tall thin bottle can hold less than a short wide one.",
      },
    ),
    masteryCriteria:
      "You can say whether you are comparing mass or capacity, pick a fitting unit, and use a balance or pouring to compare.",
    teach: {
      prompt:
        "Teach Ivshi the difference between weighing a bag of rice and pouring water into a bottle. Name the units you would choose.",
      keyIdeas: ["mass|weigh|gram|kilogram", "pour|litre|millilitre|capacity"],
    },
  },
});

export const tickingClocksLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-ticking-clocks-core",
  title: "Ticking Clocks and Turning Calendar",
  domainTitle: "Time",
  prerequisites: ["ncert-g4-maths-mela-fun-with-symmetry-core"],
  nextConceptIds: ["ncert-g4-maths-mela-the-transport-museum-core"],
  content: {
    objective:
      "Read hours and minutes on a clock, find simple durations, and use days, weeks, and months on a calendar.",
    wonder: {
      prompt:
        "The short hand sits near 4 and the long hand sits on 12. Is it 4 o'clock, or 12 o'clock? How do the two hands share the work?",
    },
    explore: {
      text: "The short hand tells the hour. The long hand tells the minutes. When the long hand is on 12, it is an o'clock time. When it is on 6, it is half past. A calendar organises days into weeks of 7 and months of 28 to 31 days. A year is 12 months.",
      activity: {
        prompt: "A clock shows the long hand on 6 and the short hand halfway between 2 and 3. What time is it?",
        choices: [
          {
            id: "half-past-two",
            label: "half past 2",
            note: "You found it! Long hand at 6 means 30 minutes. The short hand has moved halfway toward 3.",
          },
          {
            id: "six-oclock",
            label: "6 o'clock",
            note: "The long hand on 6 is minutes, not the hour. 6 o'clock would put the short hand near 6.",
          },
          {
            id: "half-past-three",
            label: "half past 3",
            note: "At half past 3 the short hand would sit halfway between 3 and 4.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "60 minutes make 1 hour. 30 minutes is half an hour. Each number the long hand points to stands for 5 minutes: 1 means 5, 2 means 10, 3 means 15.",
        "At quarter past, the long hand is on 3. At quarter to, it is on 9.",
        "Duration is how long something lasts. From 4:00 to 4:20 is 20 minutes. From 4:50 to 5:10 you count 10 minutes to 5:00, then 10 more — 20 minutes.",
        "On a calendar, 7 days make a week. Months are not all the same length. February is the short one.",
      ],
    },
    examples: [
      {
        caption: "O'clock",
        body: "Short hand on 7, long hand on 12: 7 o'clock.",
      },
      {
        caption: "Duration",
        body: "A class from 11:00 to 11:40 lasts 40 minutes.",
      },
      {
        caption: "Calendar",
        body: "If the 1st is a Monday, the 8th is the next Monday — a week later.",
      },
    ],
    connection:
      "School bells, bus times, festivals on a calendar, and 'how long until dinner' all use clock and calendar time.",
    try: {
      prompt:
        "Today is Wednesday. What day is 4 days later? What day was 2 days before?",
      reveal: "4 days after Wednesday is Sunday. 2 days before Wednesday is Monday.",
    },
    practice: [
      q(
        "g4m-tc-p1",
        "The long hand is on 12 and the short hand is on 9. The time is...",
        "9 o'clock",
        "12 o'clock",
        "half past 9",
        "a",
        "Long hand on 12 means 0 minutes. Short hand on 9 names the hour.",
        "Which hand is the hour hand?",
        "12 o'clock would put the short hand on 12 too.",
        {
          a: "You let the short hand name the hour.",
          b: "The 12 is the long hand's home at o'clock, not the hour here.",
          c: "Half past needs the long hand on 6.",
        },
      ),
      q(
        "g4m-tc-p2",
        "How many days make a week?",
        "7",
        "5",
        "30",
        "a",
        "A week is 7 days. 5 is a school week for some, not a full week. 30 is near a month.",
        "Count Monday to Sunday.",
        "Months are longer and not all equal.",
        {
          a: "You found the 7-day week.",
          b: "Five weekdays are not the whole week.",
          c: "30 days is a month-sized stretch.",
        },
      ),
      writeQ(
        "g4m-tc-p3",
        "A film starts at 5:00 and ends at 5:45. How many minutes long is it?",
        ["45", "45 minutes", "forty-five"],
        "From 5:00 to 5:45 is 45 minutes.",
        "Count the minutes the long hand would travel from 12 toward 9.",
        "An hour would be 60 minutes.",
      ),
    ],
    reasoning: [
      explainQ(
        "g4m-tc-r1",
        "Why has the short hand already moved past 4 at half past 4, instead of sitting exactly on 4?",
        "The hour hand creeps toward 5 as the minutes pass. At 30 minutes it sits halfway from 4 to 5.",
        "Where should the hour hand be at 4:30 — still glued to 4, or on a journey?",
        "Only the minute hand jumps in bigger steps around the clock.",
        ["hour|short", "halfway|five|5|towards|toward", "minutes|thirty|30"],
      ),
      q(
        "g4m-tc-r2",
        "A month shows 30 days. About how many whole weeks is that, and what is left?",
        "4 weeks and 2 extra days, because 4 × 7 = 28",
        "3 weeks exactly",
        "30 weeks",
        "a",
        "7, 14, 21, 28. Then 29 and 30 are two extra days.",
        "Skip count by 7s until you cannot.",
        "30 weeks would be more than half a year.",
        {
          a: "You grouped 30 into weeks and leftovers.",
          b: "3 weeks is 21 days.",
          c: "30 weeks is not 30 days.",
        },
      ),
    ],
    retrieve: [
      q(
        "g4m-tc-t1",
        "Quarter past 6 means the long hand is on...",
        "3 (15 minutes)",
        "6",
        "9",
        "a",
        "Quarter of 60 minutes is 15. The long hand on 3 marks 15 minutes.",
        "A clock is 4 quarters. Past means after the hour.",
        "Long hand on 6 is half past. On 9 is quarter to.",
        {
          a: "You matched a quarter hour to the 3.",
          b: "6 would be half past.",
          c: "9 is quarter to the next hour.",
        },
      ),
      explainQ(
        "g4m-tc-t2",
        "A calendar shows the 5th on a Friday. What day is the 12th, and how do you know?",
        "The 12th is also Friday, because 12 − 5 = 7, one whole week later. Weekdays repeat every 7 days.",
        "How many days is a week?",
        "Adding 7 keeps the same weekday.",
        ["friday", "week|seven|7"],
      ),
      writeQ(
        "g4m-tc-t3",
        "A film starts at 4:20 and ends at 5:05. How many minutes long is it?",
        ["45", "45 minutes", "forty-five"],
        "From 4:20 to 5:00 is 40 minutes, plus 5 is 45 minutes.",
        "Count to 5:00 first, then add the extra minutes.",
        "Subtracting 20 from 5 is not how clock minutes work.",
      ),
    ],
    misconceptions: [
      {
        idea: "The long hand tells the hour because it looks more important.",
        correction: "The short hand is the hour. The long hand is minutes.",
      },
      {
        idea: "Every month has 30 days, or every month has 4 weeks exactly.",
        correction: "Months vary. 4 weeks are 28 days, so many months have extra days.",
      },
    ],
    reflect: {
      prompt: "What time do you start school, and how many minutes is it until a break?",
      keyIdeas: ["hour|clock", "minute|duration"],
    },
    mastery: q(
      "g4m-tc-m1",
      "To read a clock you need to know...",
      "the short hand's hour and the long hand's minutes",
      "only the number the long hand touches",
      "only the date on a calendar",
      "a",
      "Two hands, two jobs. Calendars help days, not the time of day.",
      "Which hand moves faster?",
      "One hand is not the whole story.",
      {
        a: "You gave each hand a job.",
        b: "The long hand alone cannot name the hour.",
        c: "A date is a calendar story.",
      },
    ),
    masteryCriteria:
      "You can read an o'clock or half-past time, find a simple duration, and use a 7-day week on a calendar.",
    teach: {
      prompt:
        "Teach Ivshi half past 5. Say where both hands sit and why the hour hand is not still stuck on 5.",
      keyIdeas: ["five|5", "six|6|halfway", "thirty|30|half"],
    },
  },
});

export const transportMuseumLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-the-transport-museum-core",
  title: "The Transport Museum",
  domainTitle: "Problems",
  prerequisites: ["ncert-g4-maths-mela-ticking-clocks-core"],
  nextConceptIds: ["ncert-g4-maths-mela-data-handling-core"],
  content: {
    objective:
      "Solve travel and museum stories that mix number and measure, choosing an operation and keeping units honest.",
    wonder: {
      prompt:
        "A toy train is 24 cm. A display track is 1 m. About how many such trains could sit bumper to bumper on that track — a couple, or more than ten?",
    },
    explore: {
      text: "Museum problems often mix tickets, lengths, times, and groups. First ask: am I joining, comparing, making equal groups, or measuring? Then keep the unit: do not add 3 m to 40 minutes. Estimate whether the answer should be bigger or smaller than the numbers you started with.",
      activity: {
        prompt: "Tickets cost ₹20 each. 4 children go. What question is this?",
        choices: [
          {
            id: "equal-cost",
            label: "Equal groups: 4 × 20 rupees",
            note: "You found it. Four equal ticket prices. Total ₹80.",
          },
          {
            id: "how-much-more",
            label: "How many more: 20 − 4",
            note: "4 children and ₹20 are not a compare of two like amounts.",
          },
          {
            id: "metres",
            label: "A length in metres",
            note: "Rupees are money, not metres.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Underline what you need: total money, leftover distance, time to the next show, how many models fit.",
        "Change units before you compare. 1 m = 100 cm. A 24 cm train fits into 100 cm about 4 times, with 4 cm left (4 × 24 = 96).",
        "Two-step stories are common: first find a total, then subtract a discount, or first find how many groups, then how much is left.",
        "A sensible check: tickets of ₹20 for 4 children cannot total ₹6, and cannot total ₹2,000 if you only bought four.",
      ],
    },
    examples: [
      {
        caption: "Fit",
        body: "A shelf is 90 cm. Models are 30 cm each. 90 ÷ 30 = 3 models, if they sit in a line with no gaps.",
      },
      {
        caption: "Time",
        body: "The bus leaves at 3:10. The ride is 25 minutes. You arrive near 3:35.",
      },
      {
        caption: "Two steps",
        body: "3 postcards at ₹12, pay with ₹50. First 3 × 12 = 36. Then 50 − 36 = ₹14 back.",
      },
    ],
    connection:
      "Real trips mix fare, time, and distance. The museum chapter practises keeping those stories from getting tangled.",
    try: {
      prompt:
        "A gallery is 8 m long. You walk it in 4 equal looks. How many metres is each look, if you split the length equally?",
      reveal: "8 ÷ 4 = 2 m for each look.",
    },
    practice: [
      q(
        "g4m-tm-p1",
        "A rope for a queue is 2 m. Visitors stand 50 cm apart. About how many gaps of 50 cm fit in 2 m?",
        "4, because 2 m is 200 cm and 200 ÷ 50 = 4",
        "2, because there is a 2 and a 50",
        "50, because that is the bigger number",
        "a",
        "Match units first. 2 m = 200 cm. Then equal groups of 50 cm.",
        "Change metres to centimetres.",
        "You cannot divide 2 m by 50 cm until both are cm (or both m).",
        {
          a: "You matched units, then grouped.",
          b: "Using 2 and 50 as they sit mixes metres and centimetres.",
          c: "The bigger number is the gap size, not how many gaps.",
        },
      ),
      q(
        "g4m-tm-p2",
        "Show A is 20 minutes. It starts at 11:40. About when does it end?",
        "12:00",
        "11:20",
        "1:40",
        "a",
        "11:40 plus 20 minutes is 12:00. You pass noon.",
        "Count 10 minutes to 11:50, then 10 more.",
        "Subtracting 20 would be 'twenty minutes before'. 1:40 would add hours by mistake.",
        {
          a: "You added the duration and crossed 12.",
          b: "11:20 would be earlier, not later.",
          c: "A 20-minute show does not jump two hours.",
        },
      ),
      writeQ(
        "g4m-tm-p3",
        "5 souvenir cards at ₹8 each. What is the total in rupees?",
        ["40", "₹40", "rs 40", "rs40", "40 rupees"],
        "5 × 8 = 40 rupees. Equal groups of price.",
        "Five eights.",
        "5 + 8 = 13 would mix count with price.",
      ),
    ],
    reasoning: [
      explainQ(
        "g4m-tm-r1",
        "A child adds 15 cm and 2 m and writes 17. What went tangled, and how would you untangle it?",
        "Centimetres and metres were added as if they were the same unit. Change 2 m to 200 cm, then 200 + 15 = 215 cm, or change 15 cm to a part of a metre.",
        "Are 15 and 2 the same kind of length unit?",
        "Adding the numbers without units can make a silly length.",
        ["metre|meter|200|cm|centimetre", "unit|same", "215|15"],
      ),
      q(
        "g4m-tm-r2",
        "You have ₹100. A ticket is ₹35. A postcard is ₹20. Can you buy both and a ₹50 booklet?",
        "No. 35 + 20 + 50 = 105, a little more than 100",
        "Yes, because each thing is less than 100",
        "Yes, because 100 − 35 is plenty for everything",
        "a",
        "Each price being less than ₹100 is not enough. The total 105 overshoots by ₹5.",
        "Add all three prices, then compare with 100.",
        "Subtracting only the ticket leaves the other two uncounted.",
        {
          a: "You checked the combined total.",
          b: "Each price can look small while the pile is not.",
          c: "One subtraction does not pay for three things.",
        },
      ),
    ],
    retrieve: [
      q(
        "g4m-tm-t1",
        "Before choosing + − × or ÷ in a museum story, you should...",
        "ask what the story wants: total, leftover, equal groups, or a measure",
        "always multiply, because museums are big",
        "ignore the units",
        "a",
        "The question chooses the operation. Size of the building does not.",
        "What are you trying to find?",
        "Units and the question both matter.",
        {
          a: "You let the story choose the move.",
          b: "Big places still have add and subtract stories.",
          c: "Units keep metres from mixing with minutes.",
        },
      ),
      explainQ(
        "g4m-tm-t2",
        "A 24 cm train on a 1 m track: how many full trains fit, and what length is left?",
        "4 trains fit (96 cm) and 4 cm is left, because 100 − 96 = 4.",
        "1 m = 100 cm. How many 24s fit?",
        "Five trains would be 120 cm, longer than the track.",
        ["four|4", "left|4 cm|four cm", "100|metre|meter"],
      ),
      q(
        "g4m-tm-t3",
        "You have ₹50 and spend ₹28. What remains?",
        "₹22",
        "₹78",
        "₹50",
        "a",
        "Spend stories subtract. 50 − 28 = 22 rupees left. 100 paise make ₹1 if you need coins.",
        "Is money leaving your hand, or joining?",
        "Adding would be if you were given more money.",
        {
          a: "You found the change.",
          b: "78 would add the spend instead of taking it away.",
          c: "50 is what you started with, not what remains.",
        },
      ),
      explainQ(
        "g4m-tm-t4",
        "A poster says '3 models, 30 cm each, shelf 90 cm, tickets ₹20'. What question must you name before you compute?",
        "What is being asked — how many models fit, leftover space, or ticket total? Cross out extra numbers that do not belong to that question.",
        "Underline the question. Which numbers does it need?",
        "Using every number on a poster can tangle the story.",
        ["asked|question|fit|ticket|left", "number|extra"],
      ),
    ],
    misconceptions: [
      {
        idea: "Add every number you see.",
        correction: "Some numbers are units, times, or prices. Read what is asked.",
      },
      {
        idea: "If each item costs less than the money you have, you can buy all of them.",
        correction: "Add first. The pile can grow past your money.",
      },
    ],
    reflect: {
      prompt: "What two-step trip story could you write — fare then change, or distance then leftover?",
      keyIdeas: ["add|total|minus|left", "unit|rupee|metre|minute"],
    },
    mastery: q(
      "g4m-tm-m1",
      "A sensible museum solve starts with...",
      "matching units and naming the question, then choosing + − × or ÷",
      "gluing digits such as 2 m and 50 cm into 250 with no unit plan",
      "ignoring time because clocks are a different chapter",
      "a",
      "Question plus units, then the operation. Time often belongs in the same story.",
      "What would another child need to copy your method?",
      "Glued digits and skipped clocks tangle travel stories.",
      {
        a: "You lined up the question and the units.",
        b: "250 might be 2 m 50 cm if you plan it, but not by gluing blindly.",
        c: "Duration is part of many trip stories.",
      },
    ),
    masteryCriteria:
      "You can choose an operation for a travel story, match units, and check whether the answer size makes sense.",
    teach: {
      prompt:
        "Teach Ivshi a two-step souvenir story: equal prices, then change from a note. Say both steps.",
      keyIdeas: ["times|multiply|each", "minus|change|left", "rupee|total"],
    },
  },
});
