import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade4MathLesson } from "@/content/lessons/grade-4-math/format";

export const patternsAroundUsLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-patterns-around-us-core",
  title: "Patterns Around Us",
  domainTitle: "Patterns",
  prerequisites: ["ncert-g4-maths-mela-hide-and-seek-core"],
  nextConceptIds: ["ncert-g4-maths-mela-thousands-around-us-core"],
  content: {
    objective:
      "Spot a repeating unit, say the rule in words, and continue or fix a pattern without guessing the next piece only.",
    wonder: {
      prompt:
        "Floor tiles go red, blue, red, blue, red… If someone covered the next two tiles, how can you know the colours without peeking?",
    },
    explore: {
      text: "A repeating pattern has a small chunk that comes back again and again. That chunk is the unit. Once you name the unit, you can keep the pattern going, or notice when a piece does not belong.",
      activity: {
        prompt: "What is the repeating unit in clap-stamp-clap-stamp-clap-stamp?",
        choices: [
          {
            id: "clap-stamp",
            label: "clap, stamp",
            note: "You spotted the pattern. The unit is two actions: clap then stamp.",
          },
          {
            id: "clap-only",
            label: "only clap",
            note: "Clap comes back, but stamp is part of the unit too.",
          },
          {
            id: "three-claps",
            label: "clap, clap, clap",
            note: "That would be a different pattern. Listen for the stamp in between.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "First find what repeats. In red-blue-red-blue, the unit is red, blue. In 2, 4, 6, 8, the rule is add 2.",
        "Some patterns grow. 1, 2, 4, 8 is not the same as 1, 2, 3, 4. Growing patterns change by a rule you can say.",
        "Rangoli, bangles, window grills, and skip counting are patterns you already meet.",
        "Skip counting lands on multiples: 5, 10, 15, 20 are multiples of 5. Two skip-count paths can meet — 2, 4, 6, 8, 10 and 5, 10, 15 meet at 10. That meeting is a common multiple.",
        "If one bead is out of place, name the unit, then the missing or extra bead becomes easy to see.",
      ],
    },
    examples: [
      {
        caption: "Colour unit",
        body: "Yellow, green, yellow, green. Unit: yellow, green. Next is yellow.",
      },
      {
        caption: "Number rule",
        body: "5, 10, 15, 20. The rule is add 5, or skip count by fives. Next is 25.",
      },
      {
        caption: "Not the same rule",
        body: "2, 4, 6 looks like add 2. 2, 4, 8 looks like multiply by 2. Check more terms before you decide.",
      },
    ],
    connection:
      "Music beats, kolam designs, and calendar weeks all use a unit that comes back.",
    try: {
      prompt:
        "A necklace is bead-bead-gap, bead-bead-gap. What should come after the next two beads?",
      reveal: "A gap. The unit is two beads and then a gap.",
    },
    practice: [
      q(
        "g4m-pa-p1",
        "What comes next: △, ○, △, ○, △, …?",
        "○",
        "△",
        "□",
        "a",
        "The unit is triangle, circle. After a triangle comes a circle.",
        "Circle the repeating pair with your finger.",
        "A square never appeared in this pattern.",
        {
          a: "You found the repeating pair.",
          b: "A triangle just happened. The partner comes next.",
          c: "This pattern never used a square.",
        },
      ),
      q(
        "g4m-pa-p2",
        "The numbers 3, 6, 9, 12 follow which rule?",
        "add 3 each time",
        "add 2 each time",
        "the numbers get smaller",
        "a",
        "Each jump is +3. That is skip counting by threes.",
        "What do you add to 3 to reach 6?",
        "The numbers are growing, not shrinking.",
        {
          a: "You spotted the jump of three.",
          b: "A jump of two would make 3, 5, 7.",
          c: "Each number is larger than the one before.",
        },
      ),
      explainQ(
        "g4m-pa-p3",
        "A child says the next number after 2, 4, 8 must be 10 because 'we add 2'. What would you check?",
        "Check the jumps. 2 to 4 is +2, but 4 to 8 is +4, so the rule is not add 2. It may be doubling.",
        "Write the change from one number to the next.",
        "Using only the first jump can hide a different rule.",
        ["jump|add|double|rule", "two|four|eight"],
      ),
    ],
    reasoning: [
      q(
        "g4m-pa-r1",
        "A rangoli row is red, white, red, white, blue. What is the kindest first question?",
        "Did a new colour break the repeating unit?",
        "Throw the whole rangoli away",
        "Blue always comes first in every pattern",
        "a",
        "Name the unit first. Then you can tell if blue is a surprise or the start of a longer unit.",
        "What two colours were repeating before blue arrived?",
        "One extra colour is a clue, not a reason to give up.",
        {
          a: "You asked about the unit. That is pattern thinking.",
          b: "The first four beads already show a unit you can use.",
          c: "Blue is not a rule for every pattern.",
        },
      ),
      writeQ(
        "g4m-pa-r2",
        "Name the repeating unit: sun, moon, star, sun, moon, star.",
        ["sun moon star", "sun, moon, star", "sun-moon-star"],
        "The unit is the three-part chunk: sun, moon, star.",
        "How many pictures until it starts again?",
        "Sun alone is only the first piece of the unit.",
        ["sun", "moon", "star"],
      ),
    ],
    retrieve: [
      q(
        "g4m-pa-t1",
        "Skip counting 10, 20, 30, 40 is a pattern because...",
        "the same jump happens again and again",
        "the numbers are pretty",
        "any list of numbers is a pattern",
        "a",
        "A pattern needs a rule you can say. Here the jump is +10.",
        "What stays the same each time?",
        "Pretty lists and random lists are not the same as a rule.",
        {
          a: "You named the repeating jump.",
          b: "Pretty is not a maths rule.",
          c: "A pattern needs a rule, not just a list.",
        },
      ),
      explainQ(
        "g4m-pa-t2",
        "How can finding the unit help you fix a broken necklace pattern?",
        "Once you know the chunk that repeats, you can see which bead is missing or extra and put it back.",
        "Think of the necklace as copies of a small group of beads.",
        "Guessing bead by bead is slower than naming the unit.",
        ["unit|repeat|chunk", "missing|extra|fix|bead"],
      ),
      q(
        "g4m-pa-t3",
        "Skip-count 2, 4, 6, 8, 10 and 5, 10, 15. Where do they first meet?",
        "10 — a common multiple of 2 and 5",
        "7",
        "they never meet",
        "a",
        "10 is on both paths. 10 is a multiple of 2 and of 5.",
        "Which number is in both lists?",
        "Meeting numbers are not random leftovers like 7.",
        {
          a: "You found where the two jumps share a landing.",
          b: "7 is not on the 2s or the 5s in these lists.",
          c: "They share 10.",
        },
      ),
      q(
        "g4m-pa-t4",
        "2, 4, 8, 16 is growing because...",
        "each term is multiplied by 2, not only repeating 2, 4",
        "it is the same as clap-stamp-clap-stamp",
        "the numbers get smaller",
        "a",
        "The jump itself grows. Repeating units copy a chunk. Growing patterns change by a rule like ×2.",
        "What happens from 4 to 8?",
        "The numbers are getting larger.",
        {
          a: "You named a growing rule.",
          b: "Clap-stamp is a repeating unit, not this list.",
          c: "Each number is larger than the one before.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "The next piece is always 'the other colour'.",
        correction: "Units can be three or more parts. Name the whole unit first.",
      },
      {
        idea: "Any list of numbers is a pattern.",
        correction: "A pattern has a rule you can say and use again.",
      },
    ],
    reflect: {
      prompt: "Where did you see a repeating pattern today — in sound, colour, or numbers?",
      keyIdeas: ["repeat|unit|pattern", "rule|jump|colour"],
    },
    mastery: q(
      "g4m-pa-m1",
      "The best way to continue a pattern is to...",
      "name the repeating unit or the rule, then use it",
      "copy the last piece over and over",
      "pick any pretty piece",
      "a",
      "The unit or rule is the engine. Copying only the last piece can break a longer unit.",
      "If the unit is A-B-C, what comes after B?",
      "Pretty is not a rule.",
      {
        a: "You used the unit, not a guess.",
        b: "The last piece might be the middle of the unit.",
        c: "Pretty does not tell the next piece.",
      },
    ),
    masteryCriteria:
      "You can name a repeating unit or a number rule and use it to continue or question a pattern.",
    teach: {
      prompt:
        "Clap a short repeating pattern for Ivshi. Then say the unit in words.",
      keyIdeas: ["unit|repeat", "clap|pattern", "rule"],
    },
  },
});

export const funWithSymmetryLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-fun-with-symmetry-core",
  title: "Fun with Symmetry",
  domainTitle: "Symmetry",
  prerequisites: ["ncert-g4-maths-mela-elephants-tigers-leopards-core"],
  nextConceptIds: ["ncert-g4-maths-mela-ticking-clocks-core"],
  content: {
    objective:
      "Find a fold line that matches two halves, and complete a simple symmetrical picture.",
    wonder: {
      prompt:
        "You fold a paper cut-out of a heart down the middle. The two wings land on each other. What did the fold find?",
    },
    explore: {
      text: "A line of symmetry is a fold line that splits a shape into two matching parts. If you could fold along that line, one side would cover the other. Not every line through the middle is a symmetry line. A kite may look balanced but still not pass the fold test.",
      activity: {
        prompt: "Which picture is most likely to have a line of symmetry?",
        choices: [
          {
            id: "butterfly",
            label: "A butterfly with matching wings",
            note: "You found it! Matching wings often fold onto each other down the body.",
          },
          {
            id: "cloud",
            label: "A lumpy cloud with a different bump on each side",
            note: "Those bumps would not match if you folded the cloud.",
          },
          {
            id: "number-seven",
            label: "The digit 7 drawn the usual way",
            note: "A 7 does not fold onto itself. Try 8 or 0 instead.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Fold, then check. If the two sides cover each other, that fold is a line of symmetry.",
        "A square has more than one fold that works. A rectangle that is not a square has fewer. A circle has many.",
        "Rangoli and rangoli-like floor designs often grow from a centre and use matching sides.",
        "A drawing can look 'almost the same' and still not match on a fold. Matching means same shape in the same place, like a mirror.",
      ],
    },
    examples: [
      {
        caption: "Leaf",
        body: "Many leaves fold along the middle vein. The two halves match.",
      },
      {
        caption: "Letter H",
        body: "H can fold left-right and sometimes top-bottom, depending how you draw it.",
      },
      {
        caption: "Not a match",
        body: "A handprint usually does not match if you fold it. Thumbs sit on one side.",
      },
    ],
    connection:
      "Kolam, embroidery, and window jalis use matching halves so a design feels balanced.",
    try: {
      prompt:
        "Draw a line down the middle of a square. Fold in your mind. Do the halves match? Now try a diagonal. Does that fold work too?",
      reveal:
        "A square matches on both the middle lines and the diagonals. That is more symmetry than a long rectangle.",
    },
    practice: [
      q(
        "g4m-sy-p1",
        "A line of symmetry is a line that...",
        "splits a shape so the two halves match when folded",
        "always goes from corner to corner",
        "makes the shape bigger",
        "a",
        "The fold test is the idea. Diagonals only work for some shapes.",
        "Imagine paper and a fold.",
        "Not every line through a shape is a symmetry line.",
        {
          a: "You used the fold test.",
          b: "Corner-to-corner works for a square, not for every shape.",
          c: "A fold does not grow the shape.",
        },
      ),
      q(
        "g4m-sy-p2",
        "Which capital letter, drawn simply, is most likely to have a vertical fold that matches?",
        "A",
        "F",
        "J",
        "a",
        "A has matching sides left and right. F and J lean to one side.",
        "Fold the letter in your mind down the middle.",
        "A one-sided letter will not match.",
        {
          a: "You spotted the matching sides of A.",
          b: "F has an extra arm on one side.",
          c: "J curves to one side.",
        },
      ),
      explainQ(
        "g4m-sy-p3",
        "A friend draws a line through the middle of a scalene triangle (all sides different) and calls it a symmetry line. What would you try?",
        "Try the fold. The sides would not cover each other because the sides and angles do not match.",
        "Would one half land exactly on the other?",
        "A middle line is not enough. The halves must match.",
        ["fold|match|half", "sides|different|triangle"],
      ),
    ],
    reasoning: [
      q(
        "g4m-sy-r1",
        "You complete a rangoli by copying dots to the other side of a fold. A dot is 2 finger-spaces left of the line. Where does its partner go?",
        "2 finger-spaces to the right of the line, at the same height",
        "anywhere on the right, as long as it is pretty",
        "on the fold line itself",
        "a",
        "A mirror partner sits the same distance away, opposite side, same height.",
        "Think of a mirror standing on the fold.",
        "Pretty placement can miss the match.",
        {
          a: "You kept the same distance, like a mirror.",
          b: "Pretty is not the same as matching.",
          c: "The partner sits off the line, opposite the first dot.",
        },
      ),
      writeQ(
        "g4m-sy-r2",
        "Name one everyday object that often has a line of symmetry.",
        [
          "butterfly",
          "leaf",
          "heart",
          "face",
          "square",
          "circle",
          "kite",
          "rangoli",
          "window",
          "diya",
        ],
        "Butterflies, many leaves, a heart cut-out, a square window — any of these can show a matching fold.",
        "What can you fold, at least in your mind?",
        "A random shoe print usually does not match.",
        ["butterfly|leaf|heart|face|square|circle|kite|rangoli|window"],
      ),
    ],
    retrieve: [
      q(
        "g4m-sy-t1",
        "If a fold covers one half with the other, that fold is...",
        "a line of symmetry",
        "a pattern unit",
        "a place-value comma",
        "a",
        "Matching halves under a fold name a line of symmetry.",
        "What did the heart fold find in the wonder?",
        "Pattern units and commas are different ideas.",
        {
          a: "You named the fold line.",
          b: "A unit repeats. Symmetry matches.",
          c: "Commas belong to large numbers.",
        },
      ),
      explainQ(
        "g4m-sy-t2",
        "Why might a rectangle that is not a square not match on a diagonal fold, but still match on a fold down the middle?",
        "The long sides and short sides swap on a diagonal, so they do not cover. A middle fold can still match long with long.",
        "Picture a long biscuit. Fold corner to corner, then fold the short way.",
        "Every line through the centre is not automatically a symmetry line.",
        ["diagonal|corner", "long|short|side", "middle|fold|match"],
      ),
    ],
    misconceptions: [
      {
        idea: "Any line through the middle is a line of symmetry.",
        correction: "The halves must match. Try the fold, not only the middle.",
      },
      {
        idea: "Only pretty designs are symmetrical.",
        correction: "A plain square can have several symmetry lines. Pretty is extra.",
      },
    ],
    reflect: {
      prompt: "What object near you would pass a fold test? Which would not?",
      keyIdeas: ["fold|match|symmetry", "half|line"],
    },
    mastery: q(
      "g4m-sy-m1",
      "To check a line of symmetry you should...",
      "see whether the two halves match, as if folded",
      "count how colourful the drawing is",
      "always draw a diagonal",
      "a",
      "Matching halves are the test. Colour and diagonals are not the test by themselves.",
      "What happens to the two wings of a heart?",
      "Colour does not decide a fold.",
      {
        a: "You used the matching test.",
        b: "Colour is not the fold test.",
        c: "Diagonals work only for some shapes.",
      },
    ),
    masteryCriteria:
      "You can point to a fold line that matches two halves, or say why a line does not.",
    teach: {
      prompt:
        "Teach Ivshi the fold test using a square or a leaf. Say where the line goes and how you know the halves match.",
      keyIdeas: ["fold|line", "match|half", "square|leaf|butterfly"],
    },
  },
});
