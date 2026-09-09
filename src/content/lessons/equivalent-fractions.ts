import type { CompleteLessonDefinition, GradeLessonContent } from "@/domain/complete-lesson";
import { q } from "@/content/lessons/question";

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
  reflect: {
    prompt:
      "How would you explain to a younger child that 2/4 is still half, using a sandwich or a roti?",
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
  },
};

const grade5: GradeLessonContent = {
  objective:
    "Create equivalent fractions by multiplying or dividing the numerator and denominator by the same number, and use that to compare or simplify.",
  wonder: {
    prompt:
      "If you multiply the top and bottom of 2/3 by 4, you get 8/12. Did the amount grow, shrink, or stay the same — and how do you know?",
  },
  explore: {
    text: "You can split every piece into n smaller equal pieces. That multiplies both the numerator and the denominator by n. The whole has not grown. You can also group small pieces back into bigger ones by dividing both numbers by the same factor.",
    activity: {
      prompt: "Start with 2/5. Which move makes an equivalent fraction?",
      choices: [
        {
          id: "times-three",
          label: "Multiply top and bottom by 3 → 6/15",
          note: "Yes. Each fifth is split into 3. You still have the same share of the whole: 6/15 = 2/5.",
        },
        {
          id: "times-top-only",
          label: "Multiply only the top by 3 → 6/5",
          note: "That changes the amount. You added pieces without making them smaller. 6/5 is more than a whole; 2/5 is not.",
        },
        {
          id: "add-two",
          label: "Add 2 to top and bottom → 4/7",
          note: "Adding the same number to both is not the rule. 4/7 is a different amount from 2/5.",
        },
      ],
    },
  },
  understand: {
    paragraphs: [
      "The rule: multiply or divide the numerator and the denominator by the same counting number (not zero). That is how you rename a fraction without changing its value.",
      "Why it works: multiplying both by 3 means every piece is cut into 3, and you count 3 times as many of the new smaller pieces. The shaded region stays put.",
      "Simplifying is the reverse. 6/8 ÷ 2/2 = 3/4. You are grouping pieces, not throwing cake away.",
      "A common mistake is adding the same number to top and bottom, or changing only one number. That builds a different amount.",
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
      "Which fraction is equivalent to 2/5?",
      "6/15",
      "3/5",
      "2/10",
      "a",
      "2/5 × 3/3 = 6/15. 3/5 changed only the top. 2/10 changed only the bottom (×2 on the 5, not on the 2).",
      "Ask: what did I multiply both numbers by?",
      "Changing one number only, or adding, will not keep the amount.",
      {
        a: "Both 2 and 5 were multiplied by 3.",
        b: "3/5 is a larger share of the same whole.",
        c: "2/10 is 1/5, which is smaller than 2/5.",
      },
    ),
    q(
      "ef5-p2",
      "Simplify 8/12 to lowest terms.",
      "2/3",
      "4/6",
      "8/12 cannot be simplified",
      "a",
      "Divide by 4: 8/12 = 2/3. 4/6 is equivalent but not fully simplified (still divisible by 2).",
      "What is the greatest number that divides 8 and 12?",
      "Simplest form means no common factor greater than 1 remains.",
      {
        a: "2 and 3 share no common factor other than 1.",
        b: "4/6 still has a common factor of 2.",
        c: "8 and 12 both divide by 4.",
      },
    ),
    q(
      "ef5-p3",
      "To test if 4/10 and 6/15 are equivalent, you can...",
      "see if both simplify to the same fraction (here, 2/5)",
      "add the tops and add the bottoms",
      "compare only the denominators",
      "a",
      "4/10 = 2/5 and 6/15 = 2/5, so they match. Adding parts would invent a new fraction.",
      "Simplify each one, or cross-multiply: 4×15 and 10×6.",
      "Matching bottoms is not enough; 3/10 and 4/10 share a denominator but not an amount.",
      {
        a: "Same simplified name means same amount.",
        b: "Adding would mix two different amounts into one new pair of numbers.",
        c: "Denominators alone do not decide equivalence.",
      },
    ),
  ],
  reasoning: [
    q(
      "ef5-r1",
      "A bottle is 3/4 full. Mira pours until 6/8 is left. Did the amount of water change?",
      "No — 6/8 is equivalent to 3/4, so the water is the same",
      "Yes — 6/8 must be more because 6 > 3",
      "Yes — eighths are always less than quarters",
      "a",
      "3/4 × 2/2 = 6/8. Same water, finer scale on the bottle.",
      "What do you multiply 3 and 4 by to reach 6 and 8?",
      "The 'bigger numbers mean more water' mix-up shows up in measurement too.",
      {
        a: "The marks got closer together; the water line did not need to move.",
        b: "6 and 8 grew because the scale was split, not because water was added.",
        c: "Eighths are smaller units, but six of them fill three-quarters.",
      },
    ),
    q(
      "ef5-r2",
      "Why is multiplying only the numerator by 2 the wrong way to make an equivalent fraction?",
      "You doubled the count of pieces without making each piece half as big, so the amount grew",
      "The denominator is decoration",
      "Equivalent fractions are not allowed to use even numbers",
      "a",
      "2/3 becomes 4/3 if only the top doubles — more than a whole. To keep the amount, the pieces must shrink in step with the count.",
      "Picture 2/3 of a bar, then shade two extra thirds without recutting.",
      "Both numbers have jobs; only one changing breaks the balance.",
      {
        a: "That is the meaning of the ×n / ×n rule.",
        b: "The denominator is the piece size.",
        c: "Even numbers are fine: 2/4 is a classic equivalent of 1/2.",
      },
    ),
  ],
  reflect: {
    prompt:
      "In your own words, why must the numerator and denominator change by the same factor? What goes wrong if they don't?",
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
    "You can rename a fraction by ×/÷ the same factor, simplify 8/12 to 2/3, and explain a measurement example like 3/4 = 6/8.",
  teach: {
    prompt:
      "Teach Ivshi the ×n / ×n rule using 2/3. Show one equivalent fraction, and show a wrong move (changing only one number) and why it fails.",
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
      "Two fractions a/b and c/d (with b and d not zero) are equivalent exactly when a×d = b×c. That is the same as saying they simplify to the same fraction, or they sit at the same point on a number line.",
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
    q(
      "ef6-p2",
      "A recipe needs 2/5 litre of milk. You have a 100 ml measure (0.1 litre). How many 100 ml cups is 2/5 litre?",
      "4 cups",
      "2 cups",
      "5 cups",
      "a",
      "2/5 = 4/10 = 0.4 litre = 400 ml. Each cup is 100 ml, so 4 cups. 2/5 is not 2 cups unless each cup were 1/5 litre.",
      "Rename 2/5 as tenths, then as millilitres.",
      "Do not treat the numerator as a count of cups.",
      {
        a: "0.4 litre is four lots of 0.1 litre.",
        b: "Two cups would be 200 ml, which is 1/5 litre, not 2/5.",
        c: "Five cups would be 500 ml = 1/2 litre.",
      },
    ),
    q(
      "ef6-p3",
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
    q(
      "ef6-r1",
      "Two glasses: Glass A is 2/3 full of a 300 ml glass. Glass B is 4/6 full of a 600 ml glass. Same fraction family — same amount of juice?",
      "No. The wholes are different, so 2/3 of 300 ml is 200 ml and 4/6 of 600 ml is 400 ml",
      "Yes, because 2/3 = 4/6",
      "Yes, because both glasses look equally full",
      "a",
      "Equivalence of 2/3 and 4/6 is true for the same whole. Here the wholes doubled, so the juice doubled too.",
      "Compute millilitres, not only the fraction names.",
      "The trap is using equivalent fractions while silently changing the whole.",
      {
        a: "Same portion of different totals are different amounts.",
        b: "2/3 = 4/6 only compares portions of one shared whole.",
        c: "Looking 'equally full' is about the portion, not the millilitres.",
      },
    ),
    q(
      "ef6-r2",
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
  reflect: {
    prompt:
      "When is it useful to rename a fraction as a decimal or a percent, and when would a picture of equal pieces still be wiser?",
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
