import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade8MathLesson } from "@/content/lessons/grade-8-math/format";

export const fractionsInDisguiseLesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-fractions-in-disguise-core",
  title: "Fractions in Disguise",
  domainTitle: "Number",
  prerequisites: ["ncert-g8-ganita-prakash-proportional-reasoning-1-core"],
  nextConceptIds: ["ncert-g8-ganita-prakash-baudhayana-pythagoras-core"],
  content: {
    objective: "Rewrite fractions in equivalent forms, connect them to percents, and use percent increase or simple profit ideas.",
    wonder: {
      prompt: "How can 1/4, 0.25, and 25% be the same idea in disguise — and what happens when a price rises by 25%?",
    },
    explore: {
      text: "Fractions hide as decimals and percents. Rewriting keeps value while changing costume. Percent increase/decrease and simple profit/loss stories use that flexible form.",
      activity: {
        prompt: "Which shows the same rational as 1/5?",
        choices: [
          {
            id: "twenty",
            label: "0.2 and 20%",
            note: "Equivalent disguises of one fifth.",
          },
          {
            id: "five",
            label: "5% only",
            note: "5% is 5/100 = 1/20.",
          },
          {
            id: "two",
            label: "2, because five goes into it somehow",
            note: "2 is much larger than one fifth.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Equivalent fractions rename the same amount with different denominators.",
        "Decimals and percents are costumes of the same rational ideas.",
        "Percent means per hundred: 35% = 35/100.",
        "Percent increase compares change to the original amount.",
        "Profit, loss, and simple interest intros are percent stories with money.",
      ],
    },
    examples: [
      {
        caption: "Rewrite",
        body: "3/4 = 0.75 = 75%.",
      },
      {
        caption: "Increase",
        body: "From 40 to 50 is a 10/40 = 25% increase.",
      },
      {
        caption: "Profit intro",
        body: "Buy at 80, sell at 100 → profit 20 on 80 → 25%.",
      },
    ],
    connection: "Discounts, exam scores, and cricket strike rates speak percent language.",
    try: {
      prompt: "Write 2/5 as a decimal and a percent. Then find the percent increase from 50 to 60.",
      reveal: "0.4 and 40%. Increase 10 on 50 → 20%.",
    },
    practice: [
      q(
        "g8m-fd-p1",
        "Which statement best matches fractions in disguise?",
        "Rewrite fractions as decimals or percents and use percent change in simple stories",
        "Percents are unrelated to fractions",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Rewrite fractions as decimals or percents and use percent change in simple stories",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-fd-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "1/4 = 0.25 = 25%",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “1/4 = 0.25 = 25%” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-fd-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-fd-r1",
        "In your own words, explain why this matters: Rewrite fractions as decimals or percents and use percent change in simple stories",
        "It matters because Rewrite fractions as decimals or percents and use percent change in simple stories. A supporting detail is: 1/4 = 0.25 = 25%.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-fd-r2",
        "A classmate claims: “Percents are unrelated to fractions.” What is the better reply?",
        "Point to evidence: 1/4 = 0.25 = 25%",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-fd-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Rewrite fractions as decimals or percents and use percent change in simple stories",
        "Percents are unrelated to fractions",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Rewrite fractions as decimals or percents and use percent change in simple stories",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-fd-t2",
        "Write one or two sentences that rewrite a fraction as a percent and explain a percent increase.",
        ["Rewrite fractions as", "1/4 = 0.25", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-fd-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Rewrite fractions as decimals or percents and use percent change in simple stories. One proof is 1/4 = 0.25 = 25%.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "A larger denominator always means a larger fraction.",
        correction: "Compare with common denominators or decimals.",
      },
      {
        idea: "Percent increase uses the new value as the base.",
        correction: "Compare change to the original.",
      },
    ],
    reflect: {
      prompt: "Where have you seen the same amount written as fraction and percent?",
      keyIdeas: ["equivalent", "percent", "increase"],
    },
    teach: {
      prompt: "Teach 1/2 = 0.5 = 50% and one percent-increase example.",
      keyIdeas: ["disguise", "percent", "change"],
    },
    masteryCriteria: "You can rewrite fraction disguises and use simple percent change ideas.",
  },
});

export const baudhayanaPythagorasLesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-baudhayana-pythagoras-core",
  title: "The Baudhāyana-Pythagoras Theorem",
  domainTitle: "Geometry",
  prerequisites: ["ncert-g8-ganita-prakash-fractions-in-disguise-core"],
  nextConceptIds: ["ncert-g8-ganita-prakash-proportional-reasoning-2-core"],
  content: {
    objective: "State the Baudhāyana–Pythagoras relation for right triangles and find a missing side.",
    wonder: {
      prompt: "On a right-angled corner of a field, why does knowing two sides reveal the third — and what ancient relation makes that possible?",
    },
    explore: {
      text: "In a right triangle, the square on the hypotenuse equals the sum of the squares on the other two sides. Missing sides follow from that relation.",
      activity: {
        prompt: "In a right triangle with legs 3 and 4, what is the hypotenuse?",
        choices: [
          {
            id: "five",
            label: "5, because 3² + 4² = 9 + 16 = 25 = 5²",
            note: "Classic 3-4-5 relation.",
          },
          {
            id: "seven",
            label: "7, by adding 3 and 4",
            note: "Add squares, not the legs themselves.",
          },
          {
            id: "twelve",
            label: "12, by multiplying 3 and 4",
            note: "The theorem uses squares of sides.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A right triangle has one right angle; the side opposite it is the hypotenuse.",
        "The Baudhāyana–Pythagoras theorem: a² + b² = c² for legs a, b and hypotenuse c.",
        "To find a missing hypotenuse, add the squares of the legs and take the square root.",
        "To find a missing leg, subtract the known leg’s square from the hypotenuse’s square, then root.",
        "The relation is about areas of squares on the sides — a geometric story, not only a formula chant.",
      ],
    },
    examples: [
      {
        caption: "State",
        body: "a² + b² = c² in a right triangle.",
      },
      {
        caption: "Hypotenuse",
        body: "Legs 6 and 8 → c = 10.",
      },
      {
        caption: "Leg",
        body: "Hypotenuse 13, leg 5 → other leg 12.",
      },
    ],
    connection: "Ladders against walls, screen diagonals, and construction corners use this relation.",
    try: {
      prompt: "State the relation. Find the hypotenuse if legs are 5 and 12.",
      reveal: "a² + b² = c². 25 + 144 = 169 → c = 13.",
    },
    practice: [
      q(
        "g8m-bp-p1",
        "Which statement best matches the Baudhāyana–Pythagoras theorem?",
        "In a right triangle, a² + b² = c²; use it to find a missing side",
        "Add the two legs to get the hypotenuse",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: In a right triangle, a² + b² = c²; use it to find a missing side",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-bp-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "3² + 4² = 5²",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “3² + 4² = 5²” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-bp-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-bp-r1",
        "In your own words, explain why this matters: In a right triangle, a² + b² = c²; use it to find a missing side",
        "It matters because In a right triangle, a² + b² = c²; use it to find a missing side. A supporting detail is: 3² + 4² = 5².",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-bp-r2",
        "A classmate claims: “Add the two legs to get the hypotenuse.” What is the better reply?",
        "Point to evidence: 3² + 4² = 5²",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-bp-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "In a right triangle, a² + b² = c²; use it to find a missing side",
        "Add the two legs to get the hypotenuse",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: In a right triangle, a² + b² = c²; use it to find a missing side",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-bp-t2",
        "Write one or two sentences that state the relation and find one missing side.",
        ["In a right", "3² + 4²", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-bp-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that In a right triangle, a² + b² = c²; use it to find a missing side. One proof is 3² + 4² = 5².",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "The theorem works for every triangle.",
        correction: "It requires a right angle.",
      },
      {
        idea: "c is always a leg.",
        correction: "c names the hypotenuse opposite the right angle.",
      },
    ],
    reflect: {
      prompt: "Where have you measured a diagonal that felt like a hypotenuse?",
      keyIdeas: ["right triangle", "hypotenuse", "a²+b²=c²"],
    },
    teach: {
      prompt: "Teach a² + b² = c² with the 3-4-5 triangle.",
      keyIdeas: ["right angle", "squares", "missing side"],
    },
    masteryCriteria: "You can state the relation and find a missing side in a right triangle.",
  },
});

export const proportionalReasoning2Lesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-proportional-reasoning-2-core",
  title: "Proportional Reasoning-2",
  domainTitle: "Ratio",
  prerequisites: ["ncert-g8-ganita-prakash-baudhayana-pythagoras-core"],
  nextConceptIds: ["ncert-g8-ganita-prakash-exploring-geometric-themes-core"],
  content: {
    objective: "Spot direct proportion versus inverse proportion and explain how quantities move together or oppositely.",
    wonder: {
      prompt: "More workers finish a wall sooner — is that the same kind of proportion as more kg costing more rupees?",
    },
    explore: {
      text: "Direct proportion: both rise together. Inverse proportion: one rises as the other falls, with product often constant in school models. Spotting the type chooses the right reasoning.",
      activity: {
        prompt: "Which situation is inverse proportion?",
        choices: [
          {
            id: "workers",
            label: "More workers, less time for the same job (steady work rate)",
            note: "Time falls as workers rise — inverse.",
          },
          {
            id: "rice",
            label: "More rice bags, more total cost at fixed price per bag",
            note: "That is direct.",
          },
          {
            id: "same",
            label: "Every story is direct proportion",
            note: "Inverse stories exist too.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Direct proportion keeps a constant rate: y = kx in simple models.",
        "Inverse proportion pairs quantities whose product stays constant: xy = k.",
        "Spotting means asking: if one doubles, does the other double or halve?",
        "Tables and graphs help: direct trends upward together; inverse trades off.",
        "Real stories need care — assumptions about steady rates matter.",
      ],
    },
    examples: [
      {
        caption: "Direct",
        body: "Distance and time at constant speed rise together.",
      },
      {
        caption: "Inverse",
        body: "Speed and time for a fixed journey trade off.",
      },
      {
        caption: "Check",
        body: "If workers double and time halves, product workers×time stays steady.",
      },
    ],
    connection: "Sharing work, travel time, and pricing models all need the right proportion type.",
    try: {
      prompt: "Give one direct and one inverse everyday example. Say what doubles and what happens to the other.",
      reveal: "Direct: double kg → double cost. Inverse: double speed → half time for same road.",
    },
    practice: [
      q(
        "g8m-p2-p1",
        "Which statement best matches proportional reasoning-2?",
        "Direct proportion rises together; inverse proportion trades off with a steady product in simple models",
        "Inverse and direct proportion are identical",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Direct proportion rises together; inverse proportion trades off with a steady product in simple models",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-p2-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "More workers, less time for the same job is a classic inverse story",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “More workers, less time for the same job is a classic inverse story” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-p2-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-p2-r1",
        "In your own words, explain why this matters: Direct proportion rises together; inverse proportion trades off with a steady product in simple models",
        "It matters because Direct proportion rises together; inverse proportion trades off with a steady product in simple models. A supporting detail is: More workers, less time for the same job is a classic inverse story.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-p2-r2",
        "A classmate claims: “Inverse and direct proportion are identical.” What is the better reply?",
        "Point to evidence: More workers, less time for the same job is a classic inverse story",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-p2-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Direct proportion rises together; inverse proportion trades off with a steady product in simple models",
        "Inverse and direct proportion are identical",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Direct proportion rises together; inverse proportion trades off with a steady product in simple models",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-p2-t2",
        "Write one or two sentences that contrast direct and inverse proportion with one example each.",
        ["Direct proportion rises", "More workers, less", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-p2-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Direct proportion rises together; inverse proportion trades off with a steady product in simple models. One proof is More workers, less time for the same job is a classic inverse story.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "If both numbers change, it must be direct.",
        correction: "Ask whether they rise together or trade off.",
      },
      {
        idea: "Inverse means unrelated.",
        correction: "They are tightly linked by a constant product in the model.",
      },
    ],
    reflect: {
      prompt: "Which inverse trade-off have you felt — speed vs time, or people vs chore time?",
      keyIdeas: ["direct", "inverse", "trade-off"],
    },
    teach: {
      prompt: "Teach direct vs inverse with cost-of-rice vs workers-and-time.",
      keyIdeas: ["together", "trade-off", "examples"],
    },
    masteryCriteria: "You can spot and explain direct versus inverse proportion.",
  },
});

export const exploringGeometricThemesLesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-exploring-geometric-themes-core",
  title: "Exploring Some Geometric Themes",
  domainTitle: "Geometry",
  prerequisites: ["ncert-g8-ganita-prakash-proportional-reasoning-2-core"],
  nextConceptIds: ["ncert-g8-ganita-prakash-tales-by-dots-and-lines-core"],
  content: {
    objective: "Use a geometric property in a sketch and connect to circumference ideas when circles appear.",
    wonder: {
      prompt: "When a diagram asks you to sketch a figure, which property do you mark first — and how does a circle’s circumference fit geometric themes?",
    },
    explore: {
      text: "Geometric themes weave constructions, properties, and sketches. A clear sketch marks given equal lengths or right angles. Circumference ideas appear when circular paths or wheels enter the theme.",
      activity: {
        prompt: "What best starts a careful geometric sketch?",
        choices: [
          {
            id: "mark",
            label: "Mark known equal sides, parallel marks, or right-angle boxes from the given property",
            note: "Properties become visible marks.",
          },
          {
            id: "guess",
            label: "Draw any shape and hope labels appear later",
            note: "Given properties should guide the sketch.",
          },
          {
            id: "erase",
            label: "Avoid marking anything so the page stays pretty",
            note: "Marks are reasoning tools.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Exploring geometric themes means applying properties while you draw.",
        "A sketch is a reasoning aid: mark equals, parallels, and right angles.",
        "Using a property means reading what must be true from the figure’s family.",
        "Circumference ideas: distance around a circle relates to radius/diameter (C = 2πr in standard form).",
        "Themes connect — a wheel’s path is circumference; a square’s diagonal may use earlier relations.",
      ],
    },
    examples: [
      {
        caption: "Property mark",
        body: "Tick equal sides on an isosceles sketch.",
      },
      {
        caption: "Circumference",
        body: "A wheel of radius 7 units has circumference 2π·7.",
      },
      {
        caption: "Sketch",
        body: "Draw lightly, mark givens, then reason.",
      },
    ],
    connection: "Design class, rangoli compasses, and bicycle wheels all host geometric themes.",
    try: {
      prompt: "Sketch a rectangle and mark a property. Then state what circumference means in words.",
      reveal: "Marks: right angles or equal opposite sides. Circumference: distance around the circle.",
    },
    practice: [
      q(
        "g8m-eg-p1",
        "Which statement best matches exploring geometric themes?",
        "Use geometric properties in sketches and connect circle themes to circumference ideas",
        "Sketches never need marked properties",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Use geometric properties in sketches and connect circle themes to circumference ideas",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-eg-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "Circumference is the distance around a circle, linked to radius",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “Circumference is the distance around a circle, linked to radius” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-eg-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-eg-r1",
        "In your own words, explain why this matters: Use geometric properties in sketches and connect circle themes to circumference ideas",
        "It matters because Use geometric properties in sketches and connect circle themes to circumference ideas. A supporting detail is: Circumference is the distance around a circle, linked to radius.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-eg-r2",
        "A classmate claims: “Sketches never need marked properties.” What is the better reply?",
        "Point to evidence: Circumference is the distance around a circle, linked to radius",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-eg-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Use geometric properties in sketches and connect circle themes to circumference ideas",
        "Sketches never need marked properties",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Use geometric properties in sketches and connect circle themes to circumference ideas",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-eg-t2",
        "Write one or two sentences that describe one geometric property you would mark and what circumference means.",
        ["Use geometric properties", "Circumference is the", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-eg-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Use geometric properties in sketches and connect circle themes to circumference ideas. One proof is Circumference is the distance around a circle, linked to radius.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Circumference is the same as area.",
        correction: "Circumference is around; area is inside.",
      },
      {
        idea: "Properties are only for naming, not drawing.",
        correction: "Marks on sketches make properties usable.",
      },
    ],
    reflect: {
      prompt: "Which geometric mark do you use most — right angle, equal ticks, or parallel arrows?",
      keyIdeas: ["property", "sketch", "circumference"],
    },
    teach: {
      prompt: "Teach marking a property and saying what circumference measures.",
      keyIdeas: ["mark", "property", "around"],
    },
    masteryCriteria: "You can use a geometric property in a sketch and talk about circumference ideas.",
  },
});

export const talesByDotsAndLinesLesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-tales-by-dots-and-lines-core",
  title: "Tales by Dots and Lines",
  domainTitle: "Geometry",
  prerequisites: ["ncert-g8-ganita-prakash-exploring-geometric-themes-core"],
  nextConceptIds: ["ncert-g8-ganita-prakash-algebra-play-core"],
  content: {
    objective: "Read a geometric diagram carefully and give a reason for a conclusion about points and lines.",
    wonder: {
      prompt: "A diagram of dots and lines can hide a story — what must you read before you claim two lines meet or stay parallel?",
    },
    explore: {
      text: "Geometric tales are told by diagrams. Reading means noticing points, lines, intersections, and marks. Giving a reason means citing a definition or property, not only what “looks true.”",
      activity: {
        prompt: "What is the best move when a diagram looks almost parallel?",
        choices: [
          {
            id: "reason",
            label: "Look for marks or given statements that justify parallel, then conclude",
            note: "Reasons beat eyeballing alone.",
          },
          {
            id: "eye",
            label: "Trust the sketch’s slight lean with no given",
            note: "Sketches can mislead without marks.",
          },
          {
            id: "ignore",
            label: "Ignore the diagram entirely",
            note: "Diagrams carry information when read carefully.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Points and lines build geometric stories.",
        "Reading a diagram means listing what is marked: equal lengths, right angles, parallels.",
        "A conclusion needs a reason: definition, given, or known property.",
        "“Looks like” is a starting question, not a finished proof.",
        "Clear language — point A, line AB, intersect at C — keeps the tale precise.",
      ],
    },
    examples: [
      {
        caption: "Read",
        body: "Two lines marked with arrows are given parallel.",
      },
      {
        caption: "Reason",
        body: "They do not meet because parallel lines in the plane never meet.",
      },
      {
        caption: "Care",
        body: "An unmarked acute angle is not proved acute by appearance alone.",
      },
    ],
    connection: "Maps, circuit traces, and architecture plans are dots-and-lines tales.",
    try: {
      prompt: "Describe one diagram feature and give one reason-based conclusion.",
      reveal: "Feature: parallel marks. Conclusion: lines never meet — by the parallel given.",
    },
    practice: [
      q(
        "g8m-td-p1",
        "Which statement best matches tales by dots and lines?",
        "Read diagram marks carefully and give a property-based reason for conclusions",
        "If it looks true on a rough sketch, it is proved",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Read diagram marks carefully and give a property-based reason for conclusions",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-td-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "Parallel arrow marks justify that lines do not meet",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “Parallel arrow marks justify that lines do not meet” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-td-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-td-r1",
        "In your own words, explain why this matters: Read diagram marks carefully and give a property-based reason for conclusions",
        "It matters because Read diagram marks carefully and give a property-based reason for conclusions. A supporting detail is: Parallel arrow marks justify that lines do not meet.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-td-r2",
        "A classmate claims: “If it looks true on a rough sketch, it is proved.” What is the better reply?",
        "Point to evidence: Parallel arrow marks justify that lines do not meet",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-td-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Read diagram marks carefully and give a property-based reason for conclusions",
        "If it looks true on a rough sketch, it is proved",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Read diagram marks carefully and give a property-based reason for conclusions",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-td-t2",
        "Write one or two sentences that give a reason for a conclusion from a geometric diagram.",
        ["Read diagram marks", "Parallel arrow marks", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-td-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Read diagram marks carefully and give a property-based reason for conclusions. One proof is Parallel arrow marks justify that lines do not meet.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Reasons are optional if the picture is neat.",
        correction: "Neatness is not a theorem.",
      },
      {
        idea: "Points and lines need no precise names.",
        correction: "Labels keep arguments checkable.",
      },
    ],
    reflect: {
      prompt: "When has a diagram misled you until you checked the marks?",
      keyIdeas: ["diagram", "reason", "marks"],
    },
    teach: {
      prompt: "Teach reading marks before concluding parallel or equal.",
      keyIdeas: ["read", "reason", "not only looks"],
    },
    masteryCriteria: "You can read a geometric diagram and give a reasoned conclusion.",
  },
});

export const algebraPlayLesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-algebra-play-core",
  title: "Algebra Play",
  domainTitle: "Algebra",
  prerequisites: ["ncert-g8-ganita-prakash-tales-by-dots-and-lines-core"],
  nextConceptIds: ["ncert-g8-ganita-prakash-area-core"],
  content: {
    objective: "Simplify algebraic expressions and use a simple identity to expand or rewrite.",
    wonder: {
      prompt: "Why does (a+b)² expand to a² + 2ab + b² — and how does that identity shorten messy multiplying?",
    },
    explore: {
      text: "Algebra play combines simplifying like terms with identities. Identities are always-true equalities used to expand or factor patterns quickly.",
      activity: {
        prompt: "Simplify 3x + 5x − 2.",
        choices: [
          {
            id: "eight",
            label: "8x − 2",
            note: "Like terms 3x and 5x combine.",
          },
          {
            id: "six",
            label: "6x",
            note: "The −2 remains; it is not an x term.",
          },
          {
            id: "fifteen",
            label: "15x − 2",
            note: "Do not multiply coefficients of like terms when adding.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Simplifying collects like terms and clears tidy brackets.",
        "An identity holds for all allowed values of the letters.",
        "A common identity: (a+b)² = a² + 2ab + b².",
        "Another: (a−b)² = a² − 2ab + b²; and a² − b² = (a−b)(a+b).",
        "Using an identity means recognising the pattern, then writing the expansion or factors.",
      ],
    },
    examples: [
      {
        caption: "Simplify",
        body: "2a + 4a + 3 = 6a + 3.",
      },
      {
        caption: "Identity",
        body: "(x+3)² = x² + 6x + 9.",
      },
      {
        caption: "Difference",
        body: "y² − 16 = (y−4)(y+4).",
      },
    ],
    connection: "Area puzzles (square of a sum) and mental maths tricks use identities.",
    try: {
      prompt: "Simplify 7m − 2m + 5. Expand (a+2)² using an identity.",
      reveal: "5m + 5. a² + 4a + 4.",
    },
    practice: [
      q(
        "g8m-ap-p1",
        "Which statement best matches algebra play?",
        "Simplify by combining like terms and use simple identities to expand patterns",
        "Identities only work for one lucky number",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Simplify by combining like terms and use simple identities to expand patterns",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-ap-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "(a+b)² = a² + 2ab + b²",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “(a+b)² = a² + 2ab + b²” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-ap-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-ap-r1",
        "In your own words, explain why this matters: Simplify by combining like terms and use simple identities to expand patterns",
        "It matters because Simplify by combining like terms and use simple identities to expand patterns. A supporting detail is: (a+b)² = a² + 2ab + b².",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-ap-r2",
        "A classmate claims: “Identities only work for one lucky number.” What is the better reply?",
        "Point to evidence: (a+b)² = a² + 2ab + b²",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-ap-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Simplify by combining like terms and use simple identities to expand patterns",
        "Identities only work for one lucky number",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Simplify by combining like terms and use simple identities to expand patterns",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-ap-t2",
        "Write one or two sentences that simplify one expression and expand with one identity.",
        ["Simplify by combining", "(a+b)² = a²", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-ap-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Simplify by combining like terms and use simple identities to expand patterns. One proof is (a+b)² = a² + 2ab + b².",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "(a+b)² = a² + b².",
        correction: "The middle term 2ab is required.",
      },
      {
        idea: "Unlike terms can always be added into one term.",
        correction: "Only like terms combine.",
      },
    ],
    reflect: {
      prompt: "Which identity do you want fluent for faster expanding?",
      keyIdeas: ["simplify", "identity", "expand"],
    },
    teach: {
      prompt: "Teach (a+b)² with a diagram or numerical check.",
      keyIdeas: ["like terms", "identity", "2ab"],
    },
    masteryCriteria: "You can simplify expressions and use a simple identity.",
  },
});

export const areaLesson = grade8MathLesson({
  conceptId: "ncert-g8-ganita-prakash-area-core",
  title: "Area",
  domainTitle: "Mensuration",
  prerequisites: ["ncert-g8-ganita-prakash-algebra-play-core"],
  nextConceptIds: [],
  content: {
    objective: "Find areas of triangles and parallelograms using base and height, and talk about spread when comparing measures.",
    wonder: {
      prompt: "Why does a parallelogram with the same base and height as a rectangle share its area — and how does a triangle take half?",
    },
    explore: {
      text: "Area measures region size. A parallelogram’s area is base × height. A triangle’s area is half of base × height. Comparing measured areas may use range when data vary.",
      activity: {
        prompt: "A triangle has base 10 and height 6. What is its area?",
        choices: [
          {
            id: "thirty",
            label: "30, because ½ × 10 × 6 = 30",
            note: "Half base times height.",
          },
          {
            id: "sixty",
            label: "60, forgetting the half",
            note: "That would be the parallelogram/rectangle with those base and height.",
          },
          {
            id: "sixteen",
            label: "16, by adding 10 and 6",
            note: "Area multiplies dimensions (with ½ for triangles).",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Area counts square units covering a region.",
        "Parallelogram area = base × corresponding height.",
        "Triangle area = ½ × base × height.",
        "Height is perpendicular to the chosen base — not necessarily a slanted side.",
        "When areas or lengths are collected as data, range (max − min) describes spread.",
      ],
    },
    examples: [
      {
        caption: "Parallelogram",
        body: "Base 8, height 5 → area 40.",
      },
      {
        caption: "Triangle",
        body: "Base 8, height 5 → area 20.",
      },
      {
        caption: "Range",
        body: "Areas 20, 22, 30 → range 10.",
      },
    ],
    connection: "Land plots, craft paper, and sports fields all need area with the matching height.",
    try: {
      prompt: "Find the area of a parallelogram base 12 height 7, and a triangle with the same base and height.",
      reveal: "Parallelogram 84. Triangle 42.",
    },
    practice: [
      q(
        "g8m-ar-p1",
        "Which statement best matches area?",
        "Parallelogram area is base×height; triangle area is half of that for the same base and height",
        "Triangle area is base×height without the half",
        "Skip reasoning and guess any number",
        "a",
        "The strongest choice matches the idea: Parallelogram area is base×height; triangle area is half of that for the same base and height",
        "Stay with the chapter’s main idea.",
        "A trap idea or a blind guess is not careful maths.",
        {
          a: "You stayed with the mathematical idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Guessing skips understanding.",
        },
      ),
      q(
        "g8m-ar-p2",
        "Which detail best supports careful Grade 8 reasoning?",
        "½ × 10 × 6 = 30 for a triangle",
        "Ignore structure, signs, and definitions",
        "Assume every chapter has the same numerical answer",
        "a",
        "Evidence such as “½ × 10 × 6 = 30 for a triangle” supports the skill.",
        "Look for a concrete mathematical detail.",
        "Skipping structure loses the reason.",
        {
          a: "You used a concrete detail.",
          b: "Structure and definitions matter.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8m-ar-p3",
        "Which move shows conceptual Grade 8 maths?",
        "Explain why a step works, then compute",
        "Memorise a trick with no meaning",
        "Change the question so the hard part disappears",
        "a",
        "Reasons first keep calculations honest.",
        "Why before what.",
        "Tricks without meaning fade quickly.",
        {
          a: "Reasoning leads the calculation.",
          b: "Meaning matters more than a hollow trick.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8m-ar-r1",
        "In your own words, explain why this matters: Parallelogram area is base×height; triangle area is half of that for the same base and height",
        "It matters because Parallelogram area is base×height; triangle area is half of that for the same base and height. A supporting detail is: ½ × 10 × 6 = 30 for a triangle.",
        "Idea plus one detail.",
        "A number alone without reason is incomplete.",
        ["because", "reason", "detail"],
      ),
      q(
        "g8m-ar-r2",
        "A classmate claims: “Triangle area is base×height without the half.” What is the better reply?",
        "Point to evidence: ½ × 10 × 6 = 30 for a triangle",
        "Agree quickly so the discussion ends",
        "Say mathematics has no reasons",
        "a",
        "Reasoning returns to mathematical evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Maths thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g8m-ar-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Parallelogram area is base×height; triangle area is half of that for the same base and height",
        "Triangle area is base×height without the half",
        "The chapter only lists random unrelated numbers",
        "a",
        "Retrieval keeps the core idea: Parallelogram area is base×height; triangle area is half of that for the same base and height",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8m-ar-t2",
        "Write one or two sentences that find one triangle area and one parallelogram area.",
        ["Parallelogram area is", "½ × 10", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g8m-ar-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Parallelogram area is base×height; triangle area is half of that for the same base and height. One proof is ½ × 10 × 6 = 30 for a triangle.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Any side length can be used as height.",
        correction: "Height must be perpendicular to the chosen base.",
      },
      {
        idea: "Range is the middle value.",
        correction: "Range is largest minus smallest.",
      },
    ],
    reflect: {
      prompt: "Where do you estimate area — rooms, pages, or fields?",
      keyIdeas: ["triangle", "parallelogram", "height"],
    },
    teach: {
      prompt: "Teach triangle vs parallelogram area with the same base and height.",
      keyIdeas: ["base", "height", "half"],
    },
    masteryCriteria: "You can find triangle and parallelogram areas using base and height.",
  },
});
