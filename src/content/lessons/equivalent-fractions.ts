import type { CompleteLessonDefinition, GradeLessonContent } from "@/domain/complete-lesson";
import { explainQ, q, writeQ } from "@/content/lessons/question";

const grade4: GradeLessonContent = {
  objective:
    "Explain that equivalent fractions name the same amount with different-sized equal pieces, and find a simple match for 1/2 or 1/4.",
  wonder: {
    prompt:
      "You cut a roti in half and eat one piece. A friend cuts the same size roti into four equal pieces and eats two. Did you eat the same amount?",
  },
  explore: {
    text: "The top number (numerator) counts how many pieces you have. The bottom number (denominator) tells how many equal pieces the whole was cut into. If the cuts are equal, two small pieces can fill the same space as one bigger piece.",
    activity: {
      prompt: "Which picture names the same amount as 1/2 of a roti?",
      choices: [
        {
          id: "two-fourths",
          label: "2 out of 4 equal pieces",
          note: "Yes. Two of four equal pieces cover the same half. 2/4 is another name for 1/2.",
        },
        {
          id: "three-fourths",
          label: "3 out of 4 equal pieces",
          note: "That is more than half. Three small pieces cover more of the roti than one half.",
        },
        {
          id: "one-third",
          label: "1 out of 3 equal pieces",
          note: "Those pieces are bigger than fourths, but you only have one of three — not the same as half.",
        },
      ],
    },
  },
  understand: {
    paragraphs: [
      "A fraction is fair only when the pieces are equal. 1/2 means one of two equal parts. 2/4 means two of four equal parts.",
      "The denominator is the bottom number. It names the size of each piece. Fourths are smaller than halves because the roti is split into more pieces.",
      "The numerator is the top number. It names how many of those pieces you have. 2/4 has more pieces than 1/2, but each piece is smaller, so the amount can still match.",
      "Equivalent fractions are different names for the same amount. They are not 'bigger' just because the numbers look bigger.",
    ],
  },
  examples: [
    {
      caption: "Same half, new pieces",
      body: "Cut a sandwich in 2. Eat 1 piece: 1/2. Cut the same sandwich in 4. Eat 2 pieces: 2/4. Both plates hold half a sandwich.",
    },
    {
      caption: "A chocolate bar",
      body: "A bar split into 4 has 1/4 in each square. Two squares are 2/4, which is the same as 1/2 of the bar.",
    },
    {
      caption: "Not equivalent",
      body: "1/2 and 1/3 of the same cake are not the same. Thirds are larger pieces than if you had cut halves and then compared one piece — one half is more cake than one third.",
    },
  ],
  connection:
    "Sharing food, folding paper, and splitting playtime into equal turns all use different names for the same amount.",
  try: {
    prompt: "A strip is cut into 8 equal parts. You shade 2 parts. Is that the same amount as 1/4 of the strip?",
    reveal:
      "Yes. 2/8 and 1/4 name the same amount. Each 1/4 is two of the eight small pieces. The pieces got smaller; the amount stayed a quarter.",
  },
  practice: [
    q(
      "ef4-p1",
      "Which fraction is equivalent to 1/2?",
      "2/4",
      "2/3",
      "3/5",
      "a",
      "Two of four equal pieces cover the same half. 2/3 is more than half of three pieces.",
      "Imagine folding a paper in half, then folding again to make fourths.",
      "Bigger-looking numbers do not automatically mean a bigger amount.",
      {
        a: "Yes. 2/4 is another name for 1/2.",
        b: "2/3 is two of three pieces — that is more than half.",
        c: "3/5 is three of five pieces, which is more than half, and not equal to 1/2.",
      },
    ),
    q(
      "ef4-p2",
      "A roti is cut into 4 equal pieces. You eat 2. Which fraction names the same amount?",
      "1/2",
      "1/4",
      "3/4",
      "a",
      "Two of four equal pieces is half the roti.",
      "Point to two pieces. Do they fill one side of a fold down the middle?",
      "Eating two pieces is not the same as eating only one of the four.",
      {
        a: "1/2 is the same amount as 2/4.",
        b: "1/4 would be only one of the four pieces.",
        c: "3/4 would be three pieces — more than you ate.",
      },
    ),
    q(
      "ef4-p3",
      "Why can 2/4 equal 1/2 even though 2 is bigger than 1?",
      "The pieces in 2/4 are smaller, so two of them can fill one half",
      "2/4 is always a bigger amount",
      "The bottom number does not matter",
      "a",
      "Fourths are smaller than halves. Two small fourths fit in one half.",
      "Think about pizza slices: more cuts make smaller slices.",
      "The common mix-up is 'larger numbers mean more food'.",
      {
        a: "The size of the piece changed with the denominator.",
        b: "Equivalent means the amount stayed the same, not that it grew.",
        c: "The denominator tells the piece size, so it matters a lot.",
      },
    ),
  ],
  reasoning: [
    q(
      "ef4-r1",
      "Aarav says 3/6 is more than 1/2 because 3 and 6 are bigger than 1 and 2. What would you tell him?",
      "3/6 is the same amount as 1/2 if the wholes are the same",
      "Aarav is right because bigger digits always win",
      "3/6 is less than 1/2",
      "a",
      "If you split each half into three tiny equal bits, you get sixths. Three sixths fill one half.",
      "Draw one whole. Mark a half. Split each half into 3.",
      "Comparing digits instead of amounts is the usual trap.",
      {
        a: "Same whole, equal pieces, three of six fill the half.",
        b: "The digits grew because you cut more pieces, not because you got more roti.",
        c: "Three of six is not less than a half — it is the half.",
      },
    ),
    q(
      "ef4-r2",
      "Which pair is NOT equivalent?",
      "1/3 and 2/4",
      "1/2 and 2/4",
      "1/4 and 2/8",
      "a",
      "1/3 is one of three equal parts. 2/4 is half. Those amounts are different.",
      "Which pair would cover the same space on identical rotis?",
      "Equivalent fractions must be the same amount, not just 'two numbers on top'.",
      {
        a: "1/3 and 2/4 do not match.",
        b: "Those two both name a half.",
        c: "Two of eight small pieces make one quarter.",
      },
    ),
  ],
  retrieve: [
    q(
      "ef4-t1",
      "What does the denominator tell you?",
      "how many equal pieces the whole was cut into",
      "how hungry you are",
      "that the fraction is always bigger",
      "a",
      "The bottom number names the equal pieces. Fourths means four equal pieces.",
      "Look at the bottom of 3/4.",
      "The denominator is not 'how much you like it'.",
      {
        a: "Piece size comes from how many equal cuts.",
        b: "Hunger is not a fraction part.",
        c: "More cuts make smaller pieces, not automatically more food.",
      },
    ),
    writeQ(
      "ef4-t2",
      "Write a fraction that names the same amount as 1/2.",
      ["2/4", "3/6", "4/8", "5/10", "6/12", "8/16"],
      "Any of 2/4, 3/6, 4/8… names half of the same whole. You multiplied top and bottom by the same number.",
      "Cut each half into 2, 3, or 4 smaller equal pieces.",
      "Writing 1/3 or 2/3 is a different amount, not another name for half.",
    ),
  ],
  misconceptions: [
    {
      idea: "Bigger digits mean more food.",
      correction: "2/4 can equal 1/2 because the pieces got smaller. Compare amounts of the same whole, not the look of the digits.",
    },
    {
      idea: "Any two pieces are a fair fraction.",
      correction: "Fractions need equal pieces. Unequal cuts cannot be named honestly as 1/2 or 1/4.",
    },
  ],
  reflect: {
    prompt:
      "How would you explain to a younger child that 2/4 is still half, using a sandwich or a roti?",
    keyIdeas: ["same amount", "equal pieces", "half"],
  },
  mastery: q(
    "ef4-m1",
    "Equivalent fractions are different names for...",
    "the same amount of the same whole",
    "always a larger amount",
    "pieces that are not equal",
    "a",
    "The pieces can look different. The amount of the whole stays the same.",
    "Say it in food: same plate of roti, different cut lines.",
    "If pieces are not equal, you cannot trust the fraction name.",
    {
      a: "That is the idea to keep.",
      b: "Equivalent does not mean 'more'.",
      c: "Fair fractions need equal pieces first.",
    },
  ),
  masteryCriteria:
    "You can show 1/2 = 2/4 (or 1/4 = 2/8) with a picture and say why the amount matches.",
  teach: {
    prompt:
      "Teach Ivshi, in your own words: what is a numerator, what is a denominator, and why 2/4 can equal 1/2?",
    keyIdeas: ["numerator", "denominator", "same amount", "equal"],
  },
};

const grade5Misconceptions = [
  {
    idea: "Bigger numbers mean a bigger amount.",
    correction:
      "8/12 can equal 2/3. The pieces got smaller. Compare the share of the same whole.",
  },
  {
    idea: "Add the same number to top and bottom to make an equivalent fraction.",
    correction:
      "Adding 1 to 2/5 gives 3/6, which is 1/2 — a different amount. Multiply or divide both by the same non-zero number.",
  },
  {
    idea: "Change only the numerator, or only the denominator.",
    correction:
      "2/5 → 4/5 doubled the count of pieces without shrinking them, so the amount grew. Both numbers must change together.",
  },
  {
    idea: "Equivalent fractions can ignore the size of the whole.",
    correction:
      "3/4 of a cup and 3/4 of a jug are the same portion, not the same millilitres, if the wholes differ.",
  },
];

const grade5: GradeLessonContent = {
  objective:
    "Explain what a fraction is, create equivalent fractions by multiplying or dividing the numerator and denominator by the same non-zero number, simplify, compare equivalent names, and catch common traps.",
  wonder: {
    prompt:
      "A recipe needs 1/2 cup of milk. You only have a 1/4-cup scoop. Your friend says 'just pour two scoops — that's 2/4, which is bigger than 1/2.' Who is right, and how would you show it?",
  },
  explore: {
    text: "A fraction names a fair share of a whole. The denominator (bottom) tells how many equal pieces the whole was cut into. The numerator (top) tells how many of those pieces you have. Equivalent fractions are different names for the same share of the same whole.",
    activity: {
      prompt:
        "Compare the bars. Which statement is true about Bar A (1/2) and Bar B (2/4)?",
      models: [
        {
          caption: "Bar A — 1/2",
          diagram: "[########|        ]",
        },
        {
          caption: "Bar B — 2/4",
          diagram: "[####|####|    |    ]",
        },
        {
          caption: "Bar C — 1/3 (not a half)",
          diagram: "[######|      |      ]",
        },
      ],
      choices: [
        {
          id: "same-share",
          label: "Bar A and Bar B shade the same amount of the same-length bar",
          note: "Yes. Two of four equal pieces cover the same half as one of two. 2/4 is another name for 1/2. Bar C is a different amount.",
        },
        {
          id: "b-more",
          label: "Bar B is more because 2 and 4 look bigger than 1 and 2",
          note: "The digits grew because you cut smaller pieces, not because you shaded more of the bar. Look at the shaded length — it matches Bar A.",
        },
        {
          id: "c-same",
          label: "Bar C also equals 1/2 because it is one piece",
          note: "One piece is not always a half. Bar C is one of three equal pieces — a third, which is less than a half.",
        },
      ],
    },
  },
  understand: {
    paragraphs: [
      "A fraction names a fair share of one whole. The pieces must be equal. The numerator (top) counts how many pieces you have. The denominator (bottom) tells how many equal pieces make that whole.",
      "Two fractions are equivalent when they name the same share of the same whole. 1/2, 2/4, and 4/8 can all shade the same half of a same-length bar.",
      "To rename without changing the amount, multiply the numerator and the denominator by the same non-zero number. 2/3 × 4/4 = 8/12. You multiplied by 1, so the value stays put. Each of the 3 pieces was cut into 4; you now count 8 smaller pieces covering the same region.",
      "To simplify, divide both numbers by the same non-zero common factor. 8/12 ÷ 4/4 = 2/3. You grouped pieces; you did not throw cake away.",
      "Do not add the same number to top and bottom (2/5 → 3/6 is 1/2, not 2/5). Do not change only one number (2/5 → 4/5 grew). Always ask: the same whole?",
    ],
  },
  examples: [
    {
      caption: "Build a family from 3/4",
      body: "3/4 × 2/2 = 6/8. 3/4 × 3/3 = 9/12. 3/4 × 5/5 = 15/20. All of these name three-quarters of the same whole.",
    },
    {
      caption: "Simplify",
      body: "10/15 ÷ 5/5 = 2/3. Five-fifteenths group into thirds. Check: 2/3 × 5/5 returns 10/15.",
    },
    {
      caption: "A trap",
      body: "2/5 + 1 on each part is 3/6, which equals 1/2, not 2/5. Adding is not the equivalent-fraction move.",
    },
  ],
  connection:
    "Recipes that say '1/2 cup' or '4/8 cup', and scale drawings that use 2/4 of a metre, are using this renaming.",
  try: {
    prompt: "Find a fraction equivalent to 4/6 that uses smaller numbers. How did you get it?",
    reveal:
      "Divide top and bottom by 2: 4/6 = 2/3. 2 is a common factor. 2/3 is the simplified name. Multiplying 2/3 by 2/2 returns 4/6, so the amount matches.",
  },
  practice: [
    q(
      "ef5-p1",
      "In 5/6, what does the 6 tell you?",
      "The whole is cut into 6 equal pieces",
      "You have 6 pieces",
      "The fraction is bigger than 6 wholes",
      "a",
      "Denominator = equal pieces in one whole. Numerator 5 means you have five of those sixths.",
      "Bottom number = piece size. Top number = how many you count.",
      "Swapping numerator and denominator is a common mix-up.",
      {
        a: "Six equal sixths make one whole.",
        b: "That would be the numerator's job — here the numerator is 5.",
        c: "5/6 is less than one whole.",
      },
    ),
    q(
      "ef5-p2",
      "Which fraction is equivalent to 2/5?",
      "6/15",
      "3/5",
      "2/10",
      "a",
      "2/5 × 3/3 = 6/15. 3/5 changed only the top. 2/10 changed only the bottom.",
      "Ask: what did I multiply both numbers by?",
      "Changing one number only will not keep the amount.",
      {
        a: "Both 2 and 5 were multiplied by 3.",
        b: "3/5 is a larger share of the same whole.",
        c: "2/10 is 1/5, which is smaller than 2/5.",
      },
    ),
    writeQ(
      "ef5-p3",
      "Write one fraction equivalent to 3/4 by multiplying top and bottom by 2. Write it as a/b.",
      ["6/8"],
      "3×2=6 and 4×2=8, so 6/8. You multiplied by 2/2, which equals 1.",
      "Multiply both parts by the same number. 3×2 and 4×2.",
      "Changing only 3, or adding 2 to both parts, makes a different amount.",
    ),
    q(
      "ef5-p4",
      "Simplify 8/12 to lowest terms.",
      "2/3",
      "4/6",
      "8/12 cannot be simplified",
      "a",
      "Divide by 4: 8/12 = 2/3. 4/6 is equivalent but not fully simplified (still divisible by 2).",
      "What is the greatest number that divides both 8 and 12?",
      "Simplest form means no common factor greater than 1 remains.",
      {
        a: "2 and 3 share no common factor other than 1.",
        b: "4/6 still has a common factor of 2.",
        c: "8 and 12 both divide by 4.",
      },
    ),
    writeQ(
      "ef5-p5",
      "A chocolate bar is split into 8 equal squares. You eat 4. Write that amount as a fraction equivalent to 1/2.",
      ["4/8"],
      "Four of eight squares is 4/8, which equals 1/2 of the same bar.",
      "Numerator = squares eaten. Denominator = equal squares in the whole bar.",
      "2/8 would be a quarter, not a half. 4/4 would be the whole bar.",
    ),
    q(
      "ef5-p6",
      "Which pair names the same share of the same whole?",
      "5/10 and 1/2",
      "5/10 of a cracker and 5/10 of a loaf as the same number of grams",
      "2/3 and 3/2",
      "a",
      "5/10 = 1/2 of that whole. Same fraction of different wholes is not the same food. 3/2 is more than one whole.",
      "Same share and same whole — both matter.",
      "Ignoring the whole, or flipping the fraction, are both traps.",
      {
        a: "Five tenths fill half of that whole.",
        b: "Always ask: 5/10 of what?",
        c: "Reciprocals are not equivalent.",
      },
    ),
  ],
  reasoning: [
    explainQ(
      "ef5-r1",
      "Why does multiplying 2/3 by 4/4 (getting 8/12) keep the amount the same? Write in your own words.",
      "You split each of the 3 pieces into 4, so you have 8 smaller pieces that still cover the same 2/3 of the whole. 4/4 equals 1, so you multiplied by 1.",
      "Think: smaller pieces, more of them, same bar length shaded.",
      "Bigger digits do not mean more cake when both parts grew by the same factor.",
      ["smaller pieces", "same whole", "multiplied by 1"],
    ),
    explainQ(
      "ef5-r2",
      "A classmate says 2/5 and 3/6 are equivalent because they added 1 to the top and 1 to the bottom. Explain why that is wrong.",
      "Adding the same number to numerator and denominator changes the value. 2/5 is not 1/2; 3/6 is 1/2. Equivalent fractions use multiply or divide by the same non-zero number, not add.",
      "Try a picture, or compare both to tenths.",
      "Adding to both parts is the usual false shortcut.",
      ["adding changes", "multiply", "divide"],
    ),
    q(
      "ef5-r3",
      "You have 6/8 of a sandwich. Which statement is true?",
      "That is the same share as 3/4 of that sandwich",
      "That is more than 3/4 because 6 and 8 are bigger digits",
      "You should add 2 to both numbers to simplify",
      "a",
      "Divide 6 and 8 by 2: 6/8 = 3/4. Simplifying uses divide, not add. Bigger digits can still name the same share.",
      "What common factor do 6 and 8 share?",
      "Comparing digits instead of shares, or adding to simplify, are both traps.",
      {
        a: "6÷2=3, 8÷2=4.",
        b: "Compare the share, not the look of the numerals.",
        c: "6/8 ÷ 2/2 = 3/4.",
      },
    ),
  ],
  retrieve: [
    q(
      "ef5-t1",
      "What does the numerator tell you?",
      "How many equal pieces you have",
      "How many equal pieces make the whole",
      "The size of the whole in centimetres",
      "a",
      "Top number = pieces you count. Bottom number = pieces in one whole. The whole can be any size; the fraction is a share.",
      "Look at 5/8. Which number is the count you ate?",
      "Swapping numerator and denominator mixes the jobs.",
      {
        a: "In 5/8 you have five eighths.",
        b: "That is the denominator.",
        c: "Always name the whole separately if you need grams or centimetres.",
      },
    ),
    writeQ(
      "ef5-t2",
      "Fill in the missing number: 4/5 = 12/□",
      ["15"],
      "×3 on top (4×3=12), so ×3 on bottom (5×3=15).",
      "Whatever you multiply the numerator by, do the same to the denominator.",
      "Leaving the 5 alone, or adding 8 to get 13, would break equivalence.",
    ),
    q(
      "ef5-t3",
      "Which move does NOT make an equivalent fraction from 3/7?",
      "Add 2 to top and bottom → 5/9",
      "Multiply top and bottom by 2 → 6/14",
      "Multiply top and bottom by 5 → 15/35",
      "a",
      "Adding changes the value. Multiplying both parts by the same non-zero number keeps it.",
      "Which move is not × or ÷ both parts by the same number?",
      "Add-the-same is the trap this question is catching.",
      {
        a: "5/9 is a different amount from 3/7.",
        b: "Same non-zero factor on both parts.",
        c: "Same non-zero factor on both parts.",
      },
    ),
  ],
  misconceptions: grade5Misconceptions,
  reflect: {
    prompt:
      "In your own words, why must the numerator and denominator change by the same factor? What goes wrong if they don't?",
    keyIdeas: ["numerator", "denominator", "same", "amount"],
  },
  mastery: q(
    "ef5-m1",
    "Which statement is always true of equivalent fractions?",
    "They name the same amount; you can move between them by × or ÷ the same number on top and bottom",
    "The numerator must stay 1",
    "The denominator must be even",
    "a",
    "Renaming keeps value. There is no rule that the top stays 1 or the bottom stays even.",
    "Try 2/3 and 4/6 — neither has numerator 1.",
    "Unit fractions are only one kind of fraction.",
    {
      a: "That is the working definition.",
      b: "2/3 = 4/6, and the numerator is not 1.",
      c: "3/9 = 1/3 uses an odd denominator.",
    },
  ),
  masteryCriteria:
    "You can say what numerator and denominator mean, write an equivalent fraction by multiplying or dividing both parts by the same non-zero number, simplify (for example 8/12 to 2/3), and explain why adding to both parts, changing only one part, or ignoring the whole is wrong.",
  teach: {
    prompt:
      "Teach a Grade 5 friend what equivalent fractions are. Include: what a fraction is, how to make 2/3 into 8/12, how to simplify 8/12, and why 2/5 is not equivalent to 3/6.",
    keyIdeas: ["same amount", "multiply", "simplify", "adding"],
  },
};

const grade6: GradeLessonContent = {
  objective:
    "Prove two fractions are equivalent, connect them to decimals and percentages, and use equivalence in a multi-step comparison or story.",
  wonder: {
    prompt:
      "A shop label says 50% extra free. Another pack is labelled 1/2 extra. A third sticker says 0.5 extra. Are those three promises the same amount of extra, or is one sneakier?",
  },
  explore: {
    text: "Equivalent fractions, decimals, and percentages are languages for the same portion. 1/2 = 2/4 = 50/100 = 0.5 = 50%. Cross-multiplying tests equivalence without drawing: a/b = c/d when a×d = b×c.",
    activity: {
      prompt: "Which test shows 3/5 and 6/10 are equivalent?",
      models: [
        {
          caption: "Same point, two names",
          diagram: "0 ---- 3/5 ---- 1\n0 ---- 6/10 --- 1",
        },
        {
          caption: "Cross-multiply",
          diagram: "3/5 ? 6/10\n3×10 = 30\n5×6  = 30",
        },
      ],
      choices: [
        {
          id: "cross",
          label: "Cross-multiply: 3×10 = 5×6",
          note: "30 = 30, so they match. You can also write 3/5 × 2/2 = 6/10, or both as 0.6 and 60%.",
        },
        {
          id: "add-digits",
          label: "Add 3+5 and 6+10 and compare the sums",
          note: "8 versus 16 tells you nothing about portions. Sums of digits are not a test of equivalence.",
        },
        {
          id: "bigger-bottom",
          label: "6/10 is larger because 10 > 5",
          note: "A larger denominator means smaller pieces. You must look at the pair of numbers together.",
        },
      ],
    },
  },
  understand: {
    paragraphs: [
      "A fraction still names a share of a whole: numerator counts pieces, denominator names how many equal pieces make that whole. Equivalent fractions are different names for the same share of the same whole.",
      "Two fractions a/b and c/d (b and d not zero) are equivalent exactly when a×d = b×c. That is the same as saying they simplify to the same fraction, or they sit at the same point on a number line. You can also multiply or divide both parts by the same non-zero number.",
      "You can scale to hundredths to meet percentages: 3/5 = 60/100 = 60% = 0.60. That is still equivalent-fraction thinking, just with a denominator of 10 or 100.",
      "In a story, keep the whole the same. 3/4 of a 1-litre bottle and 6/8 of that same bottle match. 3/4 of a 2-litre bottle is a different amount of liquid.",
      "Multi-step work often needs a common name first: to compare 4/6 and 5/8, rename, then decide. Equivalence is the tool; comparison is the next move.",
    ],
  },
  examples: [
    {
      caption: "Three languages, one amount",
      body: "1/2 of a metre = 0.5 m = 50 cm in a 100 cm metre. 2/4 m and 50/100 m are equivalent names for that length.",
    },
    {
      caption: "Cross-multiply check",
      body: "Is 8/12 equal to 10/15? 8×15 = 120 and 12×10 = 120. Yes. Both also simplify to 2/3.",
    },
    {
      caption: "Same fraction, different wholes",
      body: "3/4 of a small bowl and 3/4 of a big bowl are both 'three-quarters', but they are not the same amount of soup. Equivalence assumes the same whole.",
    },
  ],
  connection:
    "Discounts, cricket strike rates as parts of 100, maps, and mixing squash (1 part cordial to 4 parts water, or 2 to 8) all hang on equivalent portions.",
  try: {
    prompt:
      "A tank is 3/4 full. After a scale change, a display shows 75%. A classmate says 9/16 is also 75%. Is the classmate right?",
    reveal:
      "3/4 = 75/100 = 75%. 9/16 = 0.5625 = 56.25%, not 75%. Cross-multiply 3×16 = 48 and 4×9 = 36; those are not equal, so 9/16 is not equivalent to 3/4.",
  },
  practice: [
    q(
      "ef6-p1",
      "Which pair is equivalent to 3/8?",
      "6/16 and 0.375",
      "3/16 and 0.3",
      "8/3 and 2.6",
      "a",
      "3/8 × 2/2 = 6/16. 3÷8 = 0.375. 3/16 is half of 3/8. 8/3 is the reciprocal, greater than 2.",
      "Scale 3/8 to sixteenths, or divide 3 by 8.",
      "Watch the reciprocal (flipping) and 'same digits' traps.",
      {
        a: "Both names keep the same portion.",
        b: "3/16 is a smaller share; 0.3 is 3/10, not 3/8.",
        c: "8/3 is more than two wholes.",
      },
    ),
    writeQ(
      "ef6-p2",
      "Simplify 8/12 to lowest terms. Write the fraction as a/b.",
      ["2/3"],
      "Divide top and bottom by 4: 8/12 = 2/3. You can check with cross-multiply: 8×3 = 24 and 12×2 = 24.",
      "What number divides both 8 and 12?",
      "Stopping at 4/6 leaves a common factor. Changing only one number is not simplifying.",
    ),
    q(
      "ef6-p3",
      "A recipe needs 2/5 litre of milk. You have a 100 ml measure (0.1 litre). How many 100 ml cups is 2/5 litre?",
      "4 cups",
      "2 cups",
      "5 cups",
      "a",
      "2/5 = 4/10 = 0.4 litre = 400 ml. Each cup is 100 ml, so 4 cups.",
      "Rename 2/5 as tenths, then as millilitres.",
      "Do not treat the numerator as a count of cups.",
      {
        a: "0.4 litre is four lots of 0.1 litre.",
        b: "Two cups would be 200 ml, which is 1/5 litre, not 2/5.",
        c: "Five cups would be 500 ml = 1/2 litre.",
      },
    ),
    writeQ(
      "ef6-p4",
      "Write 3/4 as a percent.",
      ["75%", "75 percent", "75"],
      "3/4 = 75/100 = 75%. You scaled to hundredths — still equivalent fractions.",
      "What equivalent fraction has denominator 100?",
      "3/4 is not 34% or 3.4%. The whole is 100 equal hundredths.",
    ),
    q(
      "ef6-p5",
      "Cross-multiply to test 9/12 and 12/16.",
      "9×16 = 144 and 12×12 = 144, so they are equivalent",
      "9×12 = 108 and 16×16, so they cannot be compared",
      "They are equivalent because both skip 3",
      "a",
      "Equal cross-products prove 9/12 = 12/16 (both = 3/4). Pattern-spotting 'skip 3' is not a test.",
      "a×d versus b×c, in order.",
      "A pattern in the digits can lie.",
      {
        a: "144 = 144, and both simplify to 3/4.",
        b: "You compare 9×16 with 12×12, not random pairings.",
        c: "Skipping is not the definition of equivalence.",
      },
    ),
  ],
  reasoning: [
    explainQ(
      "ef6-r1",
      "Glass A is 2/3 of a 300 ml glass. Glass B is 4/6 of a 600 ml glass. 2/3 = 4/6. Are the juices the same amount? Explain why or why not.",
      "The fractions are equivalent names for the same portion, but the wholes are different. 2/3 of 300 ml is 200 ml; 4/6 of 600 ml is 400 ml. Same share of a bigger whole is more juice.",
      "Compute millilitres, not only the fraction names.",
      "The trap is using equivalent fractions while silently changing the whole.",
      ["same portion", "different whole", "millilitres"],
    ),
    explainQ(
      "ef6-r2",
      "Why is adding 1 to the top and bottom of 2/5 (getting 3/6) not a legal way to make an equivalent fraction?",
      "Adding changes the value. 2/5 is not equal to 1/2, but 3/6 is 1/2. The legal moves are multiply or divide both parts by the same non-zero number, or check equal cross-products.",
      "Compare 2/5 and 3/6 with pictures, decimals, or cross-multiply.",
      "Add-the-same is a Grade 5 leftover trap that still shows up in Grade 6.",
      ["adding changes", "multiply", "divide"],
    ),
    q(
      "ef6-r3",
      "A map scale uses 1/4 cm for 1 km. A new map uses 2/8 cm for 1 km. Is the new map using a different scale?",
      "No — 2/8 cm is equivalent to 1/4 cm, so 1 km is still that same mark length",
      "Yes — 2/8 is twice as long as 1/4",
      "Yes — eighths cannot measure kilometres",
      "a",
      "1/4 = 2/8. The mark on the paper is the same length. The scale has been renamed, not stretched.",
      "Compare 1/4 and 2/8 on a centimetre ruler.",
      "Twice the numerator with twice the denominator does not double the length.",
      {
        a: "Same centimetre length means the same scale.",
        b: "2/8 is not double 1/4; it is the same.",
        c: "Any equal-length unit can stand for 1 km if the key says so.",
      },
    ),
  ],
  retrieve: [
    q(
      "ef6-t1",
      "What must stay the same for two equivalent fractions to name the same amount of liquid?",
      "The whole (the bottle or jug you are measuring)",
      "The colour of the liquid",
      "That both denominators look even",
      "a",
      "Same portion of different wholes is different millilitres. Colour and 'even bottoms' are not tests.",
      "3/4 of a cup versus 3/4 of a jug.",
      "Forgetting the whole is the Grade 6 trap.",
      {
        a: "Portion + same whole.",
        b: "Colour does not rename a fraction.",
        c: "3/7 and 5/9 can both have odd parts.",
      },
    ),
    writeQ(
      "ef6-t2",
      "Fill in the missing number: 5/8 = 15/□",
      ["24"],
      "×3 on top (5×3=15), so ×3 on bottom (8×3=24).",
      "Whatever factor you used on the numerator, use on the denominator.",
      "Leaving 8, or adding 10 to get 18, breaks equivalence.",
    ),
    q(
      "ef6-t3",
      "3/4 as a decimal is...",
      "0.75",
      "0.34",
      "3.4",
      "a",
      "3÷4 = 0.75, which is also 75/100 = 75%. 0.34 would be 34/100.",
      "Divide 3 by 4, or scale to hundredths.",
      "Reading the digits 3 and 4 as 0.34 is the mix-up.",
      {
        a: "Same amount, decimal language.",
        b: "That would be 34 hundredths, not 75.",
        c: "3.4 is more than three wholes.",
      },
    ),
  ],
  misconceptions: [
    {
      idea: "Bigger digits mean a bigger amount.",
      correction:
        "8/12 can equal 2/3. Test with ×/÷ the same factor or with equal cross-products, not with how the digits look.",
    },
    {
      idea: "If the fractions are equivalent, the amounts of juice (or soup) always match.",
      correction:
        "Only if the whole is the same. 3/4 of a small bottle is not the same millilitres as 3/4 of a large bottle.",
    },
    {
      idea: "Add the same number to top and bottom, or change only one number.",
      correction:
        "Those moves change the value. Multiply or divide both parts by the same non-zero number.",
    },
    {
      idea: "A decimal or percent is a different amount from the fraction.",
      correction:
        "3/4 = 0.75 = 75% are three names for the same portion of the same whole.",
    },
  ],
  reflect: {
    prompt:
      "When is it useful to rename a fraction as a decimal or a percent, and when would a picture of equal pieces still be wiser?",
    keyIdeas: ["decimal", "percent", "same whole"],
  },
  mastery: q(
    "ef6-m1",
    "Choose the complete idea.",
    "Equivalent fractions name the same portion of the same whole; you can test with ×/÷ the same factor or with equal cross-products, and you can write some of them as decimals or percents",
    "Equivalent fractions are any two fractions with even denominators",
    "If the digits look similar, the amounts match",
    "a",
    "Portion + same whole + a true test. Looks and even bottoms are not tests.",
    "Include the same-whole warning in your mind.",
    "Surface features of the digits mislead.",
    {
      a: "That is the Grade 6 package.",
      b: "3/7 and 5/9 can both have odd parts and still fail or pass for other reasons.",
      c: "12/16 and 12/18 look related; they are not equivalent.",
    },
  ),
  masteryCriteria:
    "You can prove equivalence (factor or cross-product), rename 3/4 as 0.75 and 75%, and spot when two equal-looking portions hide different wholes.",
  teach: {
    prompt:
      "Teach Ivshi how to test 8/12 and 10/15, then explain why 3/4 of a small bottle is not the same millilitres as 3/4 of a large bottle.",
    keyIdeas: ["cross-multiply", "same whole", "different"],
  },
};

export const equivalentFractionsLesson: CompleteLessonDefinition = {
  conceptId: "equivalent-fractions",
  subject: "math",
  title: "Equivalent Fractions",
  domainTitle: "Fractions",
  grades: [4, 5, 6],
  prerequisites: ["math-frac-meaning", "math-frac-identify"],
  nextConceptIds: ["math-frac-compare", "math-frac-mixed"],
  byGrade: {
    4: grade4,
    5: grade5,
    6: grade6,
  },
};
