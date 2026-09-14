import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade4EvsLesson } from "@/content/lessons/grade-4-evs/format";

export const howThingsAreMadeLesson = grade4EvsLesson({
  conceptId: "ncert-g4-wondrous-world-how-things-are-made-core",
  title: "How Things are Made",
  domainTitle: "Making & mechanisms",
  prerequisites: ["ncert-g4-wondrous-world-how-things-work-core"],
  nextConceptIds: ["ncert-g4-wondrous-world-different-lands-core"],
  coveredSkillIds: [
    "ncert-g4-wondrous-world-how-things-are-made-core-sk-1-name-a-raw-material",
    "ncert-g4-wondrous-world-how-things-are-made-core-sk-2-order-making-steps",
  ],
  content: {
    objective:
      "Trace an everyday object from raw material to finished thing, and put making steps in a sensible order.",
    wonder: {
      prompt:
        "Hold a pencil, a clay diya, or a cotton handkerchief. What did it look like before human hands shaped it — and what had to happen in between?",
    },
    explore: {
      text: "Making starts with raw materials from nature or recycled stuff: clay, wood, cotton, metal ore, wool, sand for glass. Then people follow steps — clean, shape, join, dry, colour, pack. Order matters: you cannot paint a pot before the clay is shaped.",
      activity: {
        prompt:
          "Which sequence best shows how a clay cup is made?",
        choices: [
          {
            id: "order",
            label:
              "Dig or buy clay → shape the cup → dry or fire it → use or decorate",
            note: "Raw material first, then shape, then harden. Order matches real making.",
          },
          {
            id: "backwards",
            label: "Drink tea first → then invent clay afterwards",
            note: "Using the cup cannot come before the clay exists.",
          },
          {
            id: "skip",
            label: "Skip materials; cups appear fully finished in forests",
            note: "Cups are made. Materials and steps are real.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A raw material is the starting stuff before the object is finished — cotton before cloth, wood before a stool, clay before a pot.",
        "Making steps turn raw material into a useful object. Each step changes the material somehow.",
        "Ordering steps means putting first things first: gather → prepare → shape → finish.",
        "Some objects need many people: farmers grow cotton, spinners make yarn, weavers make cloth, tailors stitch shirts.",
        "Waste and leftovers are part of making too — thoughtful makers reuse scraps when they can.",
      ],
    },
    examples: [
      {
        caption: "Paper",
        body: "Raw material: plant fibres or recycled paper pulp. Steps: pulp → press into sheets → dry → cut.",
      },
      {
        caption: "Woollen scarf",
        body: "Raw material: sheep wool. Steps: shear → clean → spin → knit or weave.",
      },
      {
        caption: "Wooden spoon",
        body: "Raw material: wood. Steps: choose wood → cut shape → smooth → oil or finish.",
      },
    ],
    connection:
      "Every desk, notebook, and school bag hides a making story. Spotting raw materials turns shopping into detective work.",
    try: {
      prompt:
        "Pick one object near you. Name its main raw material and list three making steps in order.",
      reveal:
        "Example: cotton bag — raw cotton → spun to thread → woven to cloth → stitched into a bag.",
    },
    practice: [
      q(
        "g4e-hm-p1",
        "Which is a raw material for a cotton shirt?",
        "cotton from cotton plants",
        "the finished shirt already in a cupboard",
        "a television advertisement",
        "a",
        "Cotton fibre is the raw start. A finished shirt and an ad are later or separate things.",
        "What exists before sewing?",
        "Finished goods and ads are not raw cotton.",
        {
          a: "You named the plant fibre start.",
          b: "A finished shirt is the end, not the raw start.",
          c: "Ads do not grow fibre.",
        },
      ),
      q(
        "g4e-hm-p2",
        "Which order makes sense for making chapati dough bread?",
        "get flour and water → knead dough → roll → cook on a tawa",
        "eat the chapati → then plant wheat inside the cooked bread",
        "cook first with no dough at all",
        "a",
        "Materials and kneading come before cooking. Eating cannot invent the wheat afterwards.",
        "What must exist before the tawa step?",
        "Backwards stories break making order.",
        {
          a: "You ordered the kitchen steps.",
          b: "Eating is the end of the meal story.",
          c: "Dough must exist before cooking.",
        },
      ),
      explainQ(
        "g4e-hm-p3",
        "Why is clay a raw material for a diya, while a painted diya is not?",
        "Clay is the starting stuff. A painted diya is already made and finished. Raw means before the making is complete.",
        "Which one comes first in time?",
        "Finished objects are results, not raw starts.",
        ["start|before|clay|finish|made|raw"],
      ),
    ],
    reasoning: [
      q(
        "g4e-hm-r1",
        "A pencil needs wood and graphite. Why might skipping the 'shape the wood' step fail?",
        "Without shaping, the wood may not hold the graphite as a usable pencil body",
        "Because pencils only work on Tuesdays",
        "Because raw materials hate order",
        "a",
        "Each step has a job. Missing shaping leaves materials that do not yet do the pencil’s work.",
        "What does shaping achieve?",
        "Days of the week and feelings are not the mechanism.",
        {
          a: "You saw why the middle step matters.",
          b: "Pencils are not weekday-only tools.",
          c: "Materials need ordered work, not moods.",
        },
      ),
      explainQ(
        "g4e-hm-r2",
        "How can recycled paper still have a raw-material story?",
        "Old paper becomes the starting pulp for new sheets. The raw material is reused fibre instead of only brand-new plant fibre.",
        "What is the starting stuff in recycling?",
        "Recycling still has a beginning material.",
        ["recycle|old|pulp|fibre|reuse|paper"],
      ),
    ],
    retrieve: [
      q(
        "g4e-hm-t1",
        "Ordering making steps means...",
        "putting gather, shape, and finish in a sequence that can really work",
        "listing steps in a random jumble on purpose",
        "skipping materials so steps float in air",
        "a",
        "Sensible order respects what must exist before the next change.",
        "What makes a sequence useful?",
        "Random jumbles confuse makers.",
        {
          a: "You defined useful order.",
          b: "Random order breaks making.",
          c: "Materials anchor the steps.",
        },
      ),
      writeQ(
        "g4e-hm-t2",
        "Name one raw material and two making steps in order for an object you know.",
        [
          "clay",
          "cotton",
          "wood",
          "wool",
          "shape",
          "spin",
          "weave",
          "dry",
          "cut",
          "stitch",
        ],
        "Example: clay → shape pot → dry/fire. Or cotton → spin → weave.",
        "Start with the stuff, then two actions in time order.",
        "Only naming the shop is not a making story.",
        ["clay|cotton|wood|wool|metal|sand|flour", "shape|spin|weave|dry|cut|stitch|cook|press"],
      ),
    ],
    misconceptions: [
      {
        idea: "Raw materials are always dirty waste.",
        correction:
          "Raw means starting material — clean cotton and smooth clay count. It is about stage, not mess.",
      },
      {
        idea: "Only factories make things; home crafts do not count.",
        correction:
          "Home clay work, stitching, and cooking are making too. Scale can be small or large.",
      },
    ],
    reflect: {
      prompt:
        "Which object’s making story will you ask an adult about this week?",
      keyIdeas: ["raw|made|steps"],
    },
    mastery: q(
      "g4e-hm-m1",
      "How Things are Made asks you to...",
      "name raw materials and order making steps",
      "only memorise price stickers",
      "believe objects have no past",
      "a",
      "Raw materials plus ordered steps are the chapter skills.",
      "Which pair matches the learning goals?",
      "Prices and no-past stories skip making.",
      {
        a: "You joined material and sequence.",
        b: "Stickers are not making steps.",
        c: "Objects have making pasts.",
      },
    ),
    masteryCriteria:
      "You can name a raw material for an everyday object and put at least three making steps in working order.",
    teach: {
      prompt:
        "Teach Ivshi the making story of one object: raw material and ordered steps.",
      keyIdeas: ["raw", "steps|order"],
    },
  },
});

export const differentLandsLesson = grade4EvsLesson({
  conceptId: "ncert-g4-wondrous-world-different-lands-core",
  title: "Different Lands, Different Lives",
  domainTitle: "Lands & sky",
  prerequisites: ["ncert-g4-wondrous-world-how-things-are-made-core"],
  nextConceptIds: ["ncert-g4-wondrous-world-our-sky-core"],
  coveredSkillIds: [
    "ncert-g4-wondrous-world-different-lands-core-sk-1-compare-two-places",
    "ncert-g4-wondrous-world-different-lands-core-sk-2-link-land-to-work",
  ],
  content: {
    objective:
      "Compare how places differ in land and climate, and link the land to the kinds of work people do.",
    wonder: {
      prompt:
        "Would a fisher’s daily tools and a mountain shepherd’s daily tools look the same? What about the land made those lives different?",
    },
    explore: {
      text: "Lands differ: coast, desert, plain, forest, hill, riverbank. Climate differs too: wet, dry, cold, hot. Work often follows what the land offers — fishing near the sea, farming on fertile plains, herding where grass grows, trading in busy towns.",
      activity: {
        prompt:
          "Which statement best links land to work?",
        choices: [
          {
            id: "link-land",
            label:
              "Near a rich fishing coast, many families may work with boats and nets",
            note: "Land/water resource → related work. Clear link.",
          },
          {
            id: "no-link",
            label: "Desert sand forces everyone to become deep-sea divers",
            note: "Deserts do not create deep-sea diving jobs. Links must fit the place.",
          },
          {
            id: "same",
            label: "Every place on Earth has identical work and identical weather",
            note: "Places differ. That is the chapter’s starting truth.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Comparing two places means naming differences and similarities in land, weather, plants, animals, or people’s work.",
        "Land shapes opportunity: flat fertile soil suits farming; steep rocky slopes may suit other livelihoods.",
        "Climate shapes clothing, houses, and crops — heavy rain needs different roofs than dry heat.",
        "Linking land to work means saying how a resource or challenge leads to a job: coconut coasts and coir work, tea hills and tea gardens.",
        "Respect matters: different lives are not 'better' or 'worse' — they fit different places.",
      ],
    },
    examples: [
      {
        caption: "Coast vs inland plain",
        body: "Coast: fishing and boats. Inland grain plain: farming wheat or rice. Both feed people, different tools.",
      },
      {
        caption: "Cold hill",
        body: "Warm wool clothes and sturdy roofs against cold winds link to mountain climate.",
      },
      {
        caption: "River town",
        body: "Boats, fishing, and river trade often grow where a river meets settlement.",
      },
    ],
    connection:
      "Stories, foods, and festivals across India often carry the flavour of the land that raised them.",
    try: {
      prompt:
        "Compare your place with a very different place you know from books or travel. Name two differences and one land-to-work link.",
      reveal:
        "Example: My town has busy roads and shops; a desert village may have sparse water. Link: oasis farming where water appears.",
    },
    practice: [
      q(
        "g4e-dl-p1",
        "Which pair compares two places usefully?",
        "Place A is wet and green; Place B is dry with few trees",
        "Place A and Place B are identical in every way always",
        "Places cannot be talked about at all",
        "a",
        "A useful comparison names a real difference you can observe or learn.",
        "What differs between the places?",
        "Identical-always claims hide variety.",
        {
          a: "You made a clear comparison.",
          b: "Places often differ.",
          c: "We can describe places.",
        },
      ),
      q(
        "g4e-dl-p2",
        "Which links land to work well?",
        "grassy highland pastures can support herding animals",
        "a frozen peak forces banana farming with no shelter",
        "the ocean forces desert camel herding on the waves",
        "a",
        "Grass supports herding. Impossible mismatches are not land–work links.",
        "Which job fits the resource?",
        "Mismatched jobs ignore the land.",
        {
          a: "You matched resource to work.",
          b: "Bananas struggle on frozen peaks.",
          c: "Camels do not herd on ocean waves.",
        },
      ),
      explainQ(
        "g4e-dl-p3",
        "Why might houses in a heavy-rain place look different from houses in a very dry place?",
        "Heavy rain needs roofs and drains that shed water. Dry places may focus more on shade and keeping cool or storing scarce water. Climate shapes building choices.",
        "What problem does each climate create for a house?",
        "One house style does not fit every weather.",
        ["rain|roof|dry|shade|water|climate|house"],
      ),
    ],
    reasoning: [
      q(
        "g4e-dl-r1",
        "Two children eat different staple foods. How might land help explain that?",
        "Different soils and climates grow different main crops, so local meals often follow what grows well",
        "Food differences prove one child is imagining meals",
        "Land never affects farming anywhere",
        "a",
        "Staple foods often track what the land can grow reliably.",
        "What does climate and soil decide for farms?",
        "Land strongly shapes farming.",
        {
          a: "You linked crops to place.",
          b: "Different meals can both be real.",
          c: "Farming depends on land.",
        },
      ),
      explainQ(
        "g4e-dl-r2",
        "Compare a fishing village and a desert town in one careful sentence each for land and for work.",
        "Fishing village: land meets the sea; work often includes boats and nets. Desert town: dry land with scarce water; work may include trading, herding adapted animals, or oasis farming where water exists.",
        "Name land feature + related work for each.",
        "Copying the same sentence for both places skips comparison.",
        ["sea|fish|boat|desert|dry|herd|oasis|trade"],
      ),
    ],
    retrieve: [
      q(
        "g4e-dl-t1",
        "Linking land to work means...",
        "showing how a place’s features support certain jobs",
        "pretending every job appears equally in every landscape",
        "ignoring climate completely",
        "a",
        "Features and opportunities point toward livelihoods.",
        "What connects place to livelihood?",
        "Not every job fits every land.",
        {
          a: "You stated the land–work idea.",
          b: "Landscapes differ in opportunity.",
          c: "Climate matters for work and life.",
        },
      ),
      writeQ(
        "g4e-dl-t2",
        "Compare two places and link one land feature to a kind of work.",
        [
          "coast",
          "desert",
          "hill",
          "plain",
          "river",
          "fish",
          "farm",
          "herd",
          "wet",
          "dry",
        ],
        "Example: Coast vs desert — wet sea edge vs dry sand; coast links to fishing work.",
        "Name two places, one difference, one job link.",
        "Saying places are identical skips the skill.",
        ["coast|desert|hill|plain|river|forest", "fish|farm|herd|trade|boat|tea"],
      ),
    ],
    misconceptions: [
      {
        idea: "Different lives mean some people are less clever.",
        correction:
          "Different lives show adaptation to land and climate, not a ranking of intelligence.",
      },
      {
        idea: "Only villages have land–work links; cities do not.",
        correction:
          "Cities still sit on land with climate, water needs, and jobs shaped by ports, rivers, or trade routes.",
      },
    ],
    reflect: {
      prompt:
        "What land feature near you most shapes how people work or travel?",
      keyIdeas: ["land|work|compare"],
    },
    mastery: q(
      "g4e-dl-m1",
      "Different Lands, Different Lives asks you to...",
      "compare places and link land to work",
      "claim every place is the same",
      "mock ways of life that are not yours",
      "a",
      "Comparison plus land–work links are the skills — with respect.",
      "Which habits match the chapter?",
      "Sameness claims and mockery miss the learning.",
      {
        a: "You named both skills.",
        b: "Places differ for real reasons.",
        c: "Respect belongs with comparison.",
      },
    ),
    masteryCriteria:
      "You can compare two places on land or climate and link at least one land feature to a kind of work.",
    teach: {
      prompt:
        "Teach Ivshi a comparison of two lands and one clear land-to-work link.",
      keyIdeas: ["compare", "land|work"],
    },
  },
});

export const ourSkyLesson = grade4EvsLesson({
  conceptId: "ncert-g4-wondrous-world-our-sky-core",
  title: "Our Sky",
  domainTitle: "Lands & sky",
  prerequisites: ["ncert-g4-wondrous-world-different-lands-core"],
  nextConceptIds: [],
  coveredSkillIds: [
    "ncert-g4-wondrous-world-our-sky-core-sk-1-describe-day-and-night",
    "ncert-g4-wondrous-world-our-sky-core-sk-2-observe-the-moon-safely",
  ],
  content: {
    objective:
      "Describe day and night from careful sky watching, and practise safe ways to observe the Moon.",
    wonder: {
      prompt:
        "If the Sun stayed fixed at noon forever, what would happen to sleep, shadows, and the feeling of evening — and why does night still arrive?",
    },
    explore: {
      text: "The sky gives day and night, changing light, clouds, and the Moon’s shapes. Day is the bright time when sunlight lights our side of Earth. Night is the darker time when we face away from the Sun’s direct light. The Moon can be watched with eyes or binoculars — never by staring at the Sun.",
      activity: {
        prompt:
          "Which plan observes the Moon safely?",
        choices: [
          {
            id: "safe-moon",
            label:
              "Look at the Moon in the evening sky with eyes or a trusted adult’s binoculars — never point them at the Sun",
            note: "Moon watching can be direct; Sun watching must never be bare-eyed or with normal binoculars.",
          },
          {
            id: "stare-sun",
            label: "Stare at the bright Sun at noon to 'practise astronomy'",
            note: "Unsafe. Sunlight can harm eyes. The Moon is the safe night/evening target here.",
          },
          {
            id: "ignore-sky",
            label: "Never look up because the sky has nothing to teach",
            note: "Day, night, and Moon phases are rich lessons overhead.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Day and night happen because Earth turns. When your place faces the Sun, you have day; when it turns away, you have night.",
        "You can describe day and night with senses: bright sky, warm sun on skin, shadows; then darker sky, cooler air, stars or city lights.",
        "The Moon does not make its own daylight like the Sun. We see moonlight because sunlight reflects from the Moon.",
        "The Moon’s visible shape changes across nights — crescent, half, full — as the lit part we can see changes.",
        "Safe observing: enjoy the Moon and stars; never stare at the Sun; use only proper solar filters with adults for any Sun study.",
      ],
    },
    examples: [
      {
        caption: "Day description",
        body: "Blue or bright cloudy sky, clear shadows, birds active, school time.",
      },
      {
        caption: "Night description",
        body: "Darker sky, Moon or stars visible away from bright lights, cooler air, rest time for many people.",
      },
      {
        caption: "Safe Moon watch",
        body: "Stand outdoors after sunset, note the Moon’s shape and where it sits in the sky. No Sun-staring.",
      },
    ],
    connection:
      "Calendars, festivals, farmers’ plans, and bedtime stories all lean on the sky’s day–night rhythm and the Moon’s changing face.",
    try: {
      prompt:
        "Tonight or tomorrow, note one day clue and one night clue. If the Moon is up, sketch its shape without looking near the Sun.",
      reveal:
        "Example: Day — short noon shadows. Night — Moon looks like a D-shaped half. Safety — eyes never on the Sun.",
    },
    practice: [
      q(
        "g4e-os-p1",
        "Which description fits day and night?",
        "day is bright with sunlight on our side; night is darker when we face away from the Sun",
        "night is when the Sun sits on your notebook",
        "day and night are random and never repeat",
        "a",
        "Day and night follow Earth’s turning relative to the Sun’s light.",
        "What changes about sunlight on your place?",
        "The Sun does not sit on notebooks; the cycle repeats daily.",
        {
          a: "You described the light cycle.",
          b: "The Sun stays in the sky story, not on paper.",
          c: "Day and night repeat regularly.",
        },
      ),
      q(
        "g4e-os-p2",
        "Which is safe Moon observation?",
        "look at the Moon in the evening sky with your eyes",
        "stare at the Sun through binoculars",
        "look at the Sun with bare eyes at noon for practice",
        "a",
        "The Moon is safe for ordinary viewing. The Sun is not safe for bare eyes or normal binoculars.",
        "Which target does not burn your eyes?",
        "Sun-staring harms vision.",
        {
          a: "You chose a safe Moon watch.",
          b: "Binoculars on the Sun are dangerous.",
          c: "Bare Sun-staring is unsafe.",
        },
      ),
      explainQ(
        "g4e-os-p3",
        "Why can we sometimes see the Moon in the daytime yet still call night the darker part of the cycle?",
        "The Moon can be above the horizon in daylight, but day still means our place is lit by the Sun. Night is when sunlight is not lighting our side strongly, so the sky grows dark.",
        "Separate Moon position from the Sun lighting Earth.",
        "Seeing the Moon does not cancel daytime.",
        ["sun|light|day|dark|night|moon|horizon"],
      ),
    ],
    reasoning: [
      q(
        "g4e-os-r1",
        "Shadows are long near sunrise and shorter near noon. What does that tell you about the Sun’s path in the sky?",
        "the Sun appears lower near sunrise and higher near noon, changing shadow length",
        "shadows are afraid of clocks",
        "the Sun teleports randomly without a daily path",
        "a",
        "Shadow length tracks how high the Sun appears. That helps describe the day sky.",
        "When does the Sun look highest?",
        "Feelings and teleport claims are not sky science.",
        {
          a: "You linked shadows to the Sun’s height.",
          b: "Shadows follow light geometry.",
          c: "The Sun follows a daily path in our sky view.",
        },
      ),
      explainQ(
        "g4e-os-r2",
        "A friend wants to 'study the Sun' with the same binoculars used for the Moon. What safety advice do you give?",
        "Do not. Ordinary binoculars can focus sunlight and harm eyes. Moon watching can use eyes or binoculars; Sun study needs special filters and adult guidance — or skip direct Sun viewing.",
        "What makes the Sun dangerous to view?",
        "Moon tools are not automatically Sun-safe.",
        ["safe|sun|harm|eye|filter|never|moon"],
      ),
    ],
    retrieve: [
      q(
        "g4e-os-t1",
        "Observing the Moon safely mainly means...",
        "watching the Moon without staring at the Sun",
        "proving bravery by looking at the Sun longer",
        "never noticing the sky at all",
        "a",
        "Moon focus plus Sun safety is the skill.",
        "Which target is safe for ordinary eyes?",
        "Sun-staring is not bravery; it is harm.",
        {
          a: "You stated safe Moon practice.",
          b: "Sun-staring is unsafe.",
          c: "The sky is worth noticing carefully.",
        },
      ),
      writeQ(
        "g4e-os-t2",
        "Describe day and night in your own words, and give one safe Moon tip.",
        [
          "day",
          "night",
          "sun",
          "dark",
          "light",
          "moon",
          "safe",
          "eye",
          "evening",
          "shadow",
        ],
        "Example: Day is bright with sunlight; night is darker. Tip: look at the Moon, never stare at the Sun.",
        "Include light/dark and one safety idea.",
        "Skipping safety leaves the Moon skill incomplete.",
        ["day|light|sun", "night|dark", "moon|safe|eye|never.*sun|evening"],
      ),
    ],
    misconceptions: [
      {
        idea: "The Moon makes its own sunlight.",
        correction:
          "We see the Moon because it reflects the Sun’s light.",
      },
      {
        idea: "If the Moon is up, it must be night.",
        correction:
          "The Moon can appear in the daytime too. Day and night follow the Sun’s lighting of Earth.",
      },
    ],
    reflect: {
      prompt:
        "What will you notice first next time you step outside — light, shadows, or the Moon’s shape?",
      keyIdeas: ["day|night|moon|safe"],
    },
    mastery: q(
      "g4e-os-m1",
      "Our Sky asks you to...",
      "describe day and night and observe the Moon safely",
      "stare at the Sun to finish faster",
      "ignore every change overhead",
      "a",
      "Day–night description plus safe Moon watching are the skills.",
      "Which pair matches the chapter?",
      "Sun-staring and ignoring the sky miss the goals.",
      {
        a: "You held both sky skills.",
        b: "Sun-staring is unsafe.",
        c: "The sky changes in teachable ways.",
      },
    ),
    masteryCriteria:
      "You can describe day versus night with light clues and state one safe way to observe the Moon (and avoid unsafe Sun viewing).",
    teach: {
      prompt:
        "Teach Ivshi day and night in two sentences, then one Moon safety rule.",
      keyIdeas: ["day|night", "moon|safe"],
    },
  },
});
