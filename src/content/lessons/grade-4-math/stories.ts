import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade4MathLesson } from "@/content/lessons/grade-4-math/format";

export const cleanestVillageLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-the-cleanest-village-core",
  title: "The Cleanest Village",
  domainTitle: "Story numbers",
  prerequisites: ["ncert-g4-maths-mela-measuring-length-core"],
  nextConceptIds: ["ncert-g4-maths-mela-weigh-it-pour-it-core"],
  content: {
    objective:
      "Use numbers in a community story to add, compare, and decide, and explain what the numbers are saying.",
    wonder: {
      prompt:
        "Ward A collected 48 bags of dry waste. Ward B collected 35. If the prize is for the larger collection, who is ahead — and is the gap big or small?",
    },
    explore: {
      text: "Stories about a village mix counts: houses, trees planted, bags collected, litres of water saved. First name what each number measures. Then decide whether you need a total, a comparison, or a fair share. A larger number is only 'winning' if both numbers count the same kind of thing.",
      activity: {
        prompt: "48 bags and 35 bags. What does 48 − 35 tell you?",
        choices: [
          {
            id: "gap",
            label: "How many more bags Ward A has than Ward B",
            note: "You found the compare. The gap is 13 bags.",
          },
          {
            id: "all-bags",
            label: "How many bags in all",
            note: "In all would be 48 + 35. Subtracting finds a gap.",
          },
          {
            id: "houses",
            label: "How many houses are in the village",
            note: "These numbers counted bags, not houses.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Match the unit. You can add 20 neem saplings and 15 amla saplings if you want 'trees planted'. You should not add 20 saplings to 15 litres as if they were the same.",
        "A table of weekly collections lets you see a pattern: rising, falling, or staying about the same.",
        "Decisions use numbers plus the story. If one ward has fewer people, a smaller bag count might still mean careful work per house.",
        "Estimates help a meeting: 'about 50 bags' is easier to picture than 48 when you are planning a truck.",
        "When ones add to 10 or more, regroup: 7 + 5 is 12 ones → 1 ten and 2 ones. When you cannot subtract ones, ungroup a ten into 10 ones. Facts help: 7 + 3 = 10, so 10 − 7 = 3. A because uses those ideas, not only 'it looks bigger'.",
      ],
    },
    examples: [
      {
        caption: "Total",
        body: "Monday 12 bags, Tuesday 9 bags: 21 bags in two days.",
      },
      {
        caption: "Compare",
        body: "36 houses swept and 29 still waiting. If those are all the houses, the whole is 65. Compare only after you know what the numbers count.",
      },
      {
        caption: "Fair",
        body: "60 saplings, 5 lanes: 12 saplings each lane if sharing equally.",
      },
    ],
    connection:
      "School cleanliness drives, water counts, and plantation days all ask you to read numbers as a story, not as decoration.",
    try: {
      prompt:
        "Lane 1 plants 18 trees. Lane 2 plants 25. Lane 3 plants 17. About how many trees in all — nearer 40, 60, or 100? Then find the exact total.",
      reveal:
        "18 + 25 + 17 = 60. An estimate of 20 + 25 + 20 = 65 is near 60, much closer than 100.",
    },
    practice: [
      q(
        "g4m-cv-p1",
        "Waste bags: 27, then 19 more the next day. Bags in all?",
        "46",
        "8",
        "27",
        "a",
        "In all joins the days: 27 + 19 = 46.",
        "Are you putting two days into one pile?",
        "8 would be the difference. 27 ignores the second day.",
        {
          a: "You joined the two counts.",
          b: "8 is how many more the first day had.",
          c: "That kept only Monday's bags.",
        },
      ),
      q(
        "g4m-cv-p2",
        "Why might adding '12 dustbins' to '12 litres of water' be a tangled total?",
        "the units name different things, so 24 would not mean one kind of object",
        "12 + 12 is never allowed in maths",
        "dustbins cannot be counted",
        "a",
        "You can only total like with like, or you must say two separate facts.",
        "What would the 24 be — dustbins, litres, or a mix?",
        "Counting dustbins is fine. Mixing them with litres is the tangle.",
        {
          a: "You kept the units honest.",
          b: "12 + 12 is fine when both 12s are the same kind.",
          c: "Dustbins are countable. Litres are just a different kind.",
        },
      ),
      explainQ(
        "g4m-cv-p3",
        "Ward A: 40 bags, 80 houses. Ward B: 30 bags, 40 houses. Who collected more bags? Who collected more bags per house, roughly?",
        "Ward A has more bags (40 vs 30). Ward B has more bags per house, because 30 bags for 40 houses is closer to one bag per house than 40 bags for 80 houses (half a bag per house).",
        "Divide bags by houses in a rough way: half a bag each, or almost one?",
        "The bigger pile is not always the stronger effort per house.",
        ["forty|40", "thirty|30", "house"],
      ),
    ],
    reasoning: [
      q(
        "g4m-cv-r1",
        "Collections over four days: 10, 12, 11, 19. Which reading is fairest?",
        "the last day jumped; the first three days stayed near 10–12",
        "every day was 19 because the last number looks important",
        "the village collected nothing",
        "a",
        "A spike on one day is a pattern to notice, not a reason to rewrite the other days.",
        "Which numbers sit close together?",
        "One big day does not erase the smaller days.",
        {
          a: "You read the pattern, including the jump.",
          b: "The last number is one day, not all four.",
          c: "The list shows collections each day.",
        },
      ),
      writeQ(
        "g4m-cv-r2",
        "72 bottles collected, packed in boxes of 8. How many full boxes?",
        ["9", "nine", "9 boxes"],
        "72 ÷ 8 = 9. Equal groups of 8 bottles.",
        "How many eights in 72?",
        "72 − 8 = 64 would be bottles left after one box, not the box count.",
      ),
    ],
    retrieve: [
      q(
        "g4m-cv-t1",
        "A clean-up prize for 'most bags' should compare...",
        "bag counts (same unit), and maybe also bags per house if sizes differ",
        "the prettiest slogan only",
        "litres of water added to bags as one number",
        "a",
        "Like with like. Extra fairness can use per house, still with honest units.",
        "What did each ward actually count?",
        "Slogans and mixed units do not replace the bag numbers.",
        {
          a: "You compared the same kind of count.",
          b: "Slogans can cheer, but they are not the bag total.",
          c: "Bags plus litres would be two stories glued.",
        },
      ),
      explainQ(
        "g4m-cv-t2",
        "Why is 'about 50 bags' sometimes more useful in a meeting than 48 bags?",
        "An estimate is easier to plan with — a truck, a space — when you do not need every last bag. 48 is still the exact count when you record.",
        "When do you need exact, and when do you need a picture?",
        "Estimating is not the same as changing the record.",
        ["fifty|50|about|estimate", "forty-eight|48|exact"],
      ),
      q(
        "g4m-cv-t3",
        "27 bags + 19 bags. Ones are 7 + 9 = 16. What happens next?",
        "16 ones become 1 ten and 6 ones, so the total is 46",
        "write 16 in the ones place and stop",
        "throw the 6 away",
        "a",
        "16 ones regroup as 1 ten and 6 ones. Tens: 2 + 1, plus that extra ten, make 4 tens. 46 bags.",
        "Can 16 sit in the ones place?",
        "The extra ten must move.",
        {
          a: "You regrouped the ones.",
          b: "The ones place only holds a single digit.",
          c: "The 6 ones still count.",
        },
      ),
      q(
        "g4m-cv-t4",
        "Why is 16 even?",
        "it makes pairs with none left, or it is 2 × 8",
        "because it is a two-digit number",
        "because it sits next to 15",
        "a",
        "Even means pairs with none left. 16 = 2 × 8. Two digits or neighbours are not the reason.",
        "Can you split 16 into equal pairs?",
        "15 is odd; being next to an odd number is not the definition.",
        {
          a: "You used a pairing because.",
          b: "Plenty of odd numbers have two digits, like 11.",
          c: "Neighbours are a place story, not even and odd.",
        },
      ),
      writeQ(
        "g4m-cv-t5",
        "You have 13 ones and need to subtract 5. After ungrouping nothing yet, 3 ones are not enough. What do you do, and what is 13 − 5?",
        ["8", "ungroup", "8 ones"],
        "13 − 5 = 8. If those 13 ones came from ungrouping a ten, you already have enough ones.",
        "Count back from 13, or think 5 + ? = 13.",
        "Stopping because 3 looks small forgets the ten hiding in 13.",
        ["eight|8"],
      ),
    ],
    misconceptions: [
      {
        idea: "The biggest number always means the best effort.",
        correction: "Check the unit, the number of people, and what was asked.",
      },
      {
        idea: "Every number in a poster should be added together.",
        correction: "Some numbers are dates, some are houses, some are bags. Read the labels.",
      },
    ],
    reflect: {
      prompt: "What village or school number story could you put in a table this week?",
      keyIdeas: ["add|compare|total", "bag|tree|house"],
    },
    mastery: q(
      "g4m-cv-m1",
      "Numbers in a community story are most helpful when you...",
      "name what they count, then add, compare, or share on purpose",
      "add every numeral you see, including dates",
      "ignore leftovers so the poster looks neat",
      "a",
      "Label, then choose the move. Dates are not bags.",
      "Could you explain the 46 to a neighbour?",
      "Neat posters should still tell the truth.",
      {
        a: "You read the labels, then chose a move.",
        b: "Dates and counts are different kinds of numbers.",
        c: "Leftovers belong in the story if they happened.",
      },
    ),
    masteryCriteria:
      "You can total or compare labelled counts in a village story and say what a leftover or an estimate is for.",
    teach: {
      prompt:
        "Invent two wards with bag counts. Teach Ivshi who is ahead and by how many, using a compare sentence.",
      keyIdeas: ["more|minus|compare", "bag", "total|add"],
    },
  },
});

export const dataHandlingLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-data-handling-core",
  title: "Data Handling",
  domainTitle: "Data",
  prerequisites: ["ncert-g4-maths-mela-the-transport-museum-core"],
  content: {
    objective:
      "Collect with tallies, read a simple table or pictograph, and compare categories without inventing extra pictures.",
    wonder: {
      prompt:
        "Your class votes for favourite fruit: mango, banana, guava. How can you show the votes so someone who was absent can still see which fruit won?",
    },
    explore: {
      text: "Data is information we collect. A tally mark is a quick stroke. The fifth mark is a diagonal across four, a bundle of 5 that is easy to count. A table lists categories and counts. A pictograph uses pictures. The key tells you what one picture is worth — maybe 1 vote, maybe 2.",
      activity: {
        prompt: "A pictograph key says 1 fruit picture = 2 children. Three mango pictures mean...",
        choices: [
          {
            id: "six",
            label: "6 children",
            note: "You used the key. 3 pictures × 2 children = 6.",
          },
          {
            id: "three",
            label: "3 children, ignoring the key",
            note: "The key said each picture stands for 2 children.",
          },
          {
            id: "five",
            label: "5 children, because tallies bundle in fives",
            note: "Tally bundles are a different tool. Here the key is 2.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Ask a clear question first: 'Which lunch do we want?' Then collect. Mixed questions make messy data.",
        "Tally, then total. Check that the totals match the number of people who voted, if each person voted once.",
        "On a pictograph, half a picture can mean half of the key. If 1 picture = 2 children, a half picture is 1 child.",
        "Compare categories: which is most, which is least, how many more. The pictures are not decoration; they are numbers.",
        "To make a table, write headers (the categories) and fill each row with a count from your tally.",
      ],
    },
    examples: [
      {
        caption: "Tally",
        body: "||||  plus one diagonal bundle is 5. Two bundles and three marks is 13.",
      },
      {
        caption: "Table",
        body: "Cats 8, dogs 5, birds 2. Most: cats. Least: birds. Cats over dogs: 3 more.",
      },
      {
        caption: "Key",
        body: "If 1 bus picture = 10 children, 4 pictures = 40 children.",
      },
    ],
    connection:
      "Attendance, weather charts, and sports scores are data. Reading them fairly means using the key and the labels.",
    try: {
      prompt:
        "Tally this list of colours: red, blue, red, red, green, blue, red. Then say which colour appeared most.",
      reveal: "Red 4, blue 2, green 1. Red appeared most.",
    },
    practice: [
      q(
        "g4m-dh-p1",
        "A tally shows two bundles of 5 and 2 extra marks. The count is...",
        "12",
        "7",
        "52",
        "a",
        "5 + 5 + 2 = 12. Bundles of 5 make counting faster.",
        "Each diagonal bundle is 5, not 1.",
        "Gluing 5 and 2 into 52 is not tallying.",
        {
          a: "You counted bundles of five, then extras.",
          b: "7 would be one bundle plus two, missing a bundle.",
          c: "52 glues digits instead of adding.",
        },
      ),
      q(
        "g4m-dh-p2",
        "A table: vans 9, cycles 15, buses 6. How many more cycles than buses?",
        "9",
        "15",
        "30",
        "a",
        "15 − 6 = 9 more cycles. 15 is the cycle count, not the gap. 30 would add all three.",
        "Compare only cycles and buses.",
        "Adding every vehicle is a different question: in all.",
        {
          a: "You compared two categories.",
          b: "15 is how many cycles, not how many more.",
          c: "30 would total vans, cycles, and buses together — a different question.",
        },
      ),
      writeQ(
        "g4m-dh-p3",
        "Pictograph key: 1 star = 2 votes. 5 stars for 'story time'. How many votes?",
        ["10", "10 votes", "ten"],
        "5 × 2 = 10 votes. Always multiply by the key.",
        "What is one star worth?",
        "5 votes would ignore the key.",
      ),
    ],
    reasoning: [
      explainQ(
        "g4m-dh-r1",
        "A pictograph of 'trees planted' uses huge tree drawings for 2 trees and tiny drawings for 20 trees. Why is that unfair to a reader?",
        "The pictures should match the key, not look bigger for a smaller number. A reader might think huge means more. Size of the drawing is not the same as the count.",
        "What should stand for 'more' — a bigger doodle, or more pictures / a key?",
        "Pictographs work when pictures are equal and the key is honest.",
        ["key|picture", "size|huge|tiny|bigger", "more|count|unfair"],
      ),
      q(
        "g4m-dh-r2",
        "25 children voted once each. The table totals 22. What should you do?",
        "check for missed tallies or a child who did not vote",
        "change 22 to 25 so the table looks neat",
        "throw away the question",
        "a",
        "Totals should match the story. A gap of 3 is a clue to recount, not a number to hide.",
        "Did everyone vote? Did a tally bundle get skipped?",
        "Neat totals that do not match the class are not more true.",
        {
          a: "You treated the gap as a clue.",
          b: "Changing 22 to 25 would invent votes.",
          c: "The question can still be answered after a check.",
        },
      ),
    ],
    retrieve: [
      q(
        "g4m-dh-t1",
        "The fifth tally mark is drawn as a diagonal because...",
        "it bundles 5 marks so they are easier to count later",
        "it means 10",
        "it means the vote does not count",
        "a",
        "A gate-shaped bundle of 5 is a counting helper.",
        "How do you count |||| with a slash?",
        "The slash does not cancel the votes.",
        {
          a: "You named the bundle of five.",
          b: "Ten would need two bundles.",
          c: "Every honest mark still counts.",
        },
      ),
      explainQ(
        "g4m-dh-t2",
        "How can a table help someone who missed the fruit vote still know the winner?",
        "The table lists each fruit and its count. The largest count is the winner, without needing to hear every voice again.",
        "What does a row in the table show?",
        "A jumble of names on the board is harder to total than a table.",
        ["table|count|tally", "most|winner|largest", "fruit|vote"],
      ),
      q(
        "g4m-dh-t3",
        "You tallied mango 6, banana 4, guava 2. A fair table needs...",
        "headers for fruit and votes, then one row for each fruit",
        "only a pretty drawing of a mango",
        "one long sentence with no rows",
        "a",
        "Headers name the columns. Each fruit gets a row and its count.",
        "What would a friend look at first?",
        "Drawings without counts hide the votes.",
        {
          a: "You built rows and headers from the tally.",
          b: "Pretty is extra. The table needs counts.",
          c: "A table organises; a sentence buries the numbers.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "One picture always means one person.",
        correction: "Read the key. One picture might mean 2, 5, or 10.",
      },
      {
        idea: "The prettiest or largest drawing wins.",
        correction: "Compare the counts (or pictures × key), not the decoration.",
      },
    ],
    reflect: {
      prompt: "What could your class tally this week, and how would you show it — tally, table, or pictures?",
      keyIdeas: ["tally|table|pictograph", "count|vote|key"],
    },
    mastery: q(
      "g4m-dh-m1",
      "To read a pictograph fairly you must...",
      "use the key, then compare the categories",
      "choose the fruit with the fanciest drawing",
      "ignore half pictures",
      "a",
      "Key plus compare. Half pictures still mean a part of the key.",
      "What is one picture worth?",
      "Fancy and ignored halves hide the data.",
      {
        a: "You used the key, then compared.",
        b: "Fancy is decoration.",
        c: "A half picture is usually half the key.",
      },
    ),
    masteryCriteria:
      "You can tally in fives, read a table, and use a pictograph key to find most, least, or how many more.",
    teach: {
      prompt:
        "Make a tiny tally of three colours, turn it into a table, and teach Ivshi which colour won and by how many.",
      keyIdeas: ["tally|table", "most|more", "count"],
    },
  },
});
