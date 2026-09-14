import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade5EvsLesson } from "@/content/lessons/grade-5-evs/format";

export const waterEssenceLesson = grade5EvsLesson({
  conceptId: "ncert-g5-wondrous-world-water-essence-core",
  title: "Water—The Essence of Life",
  domainTitle: "Water",
  prerequisites: [],
  nextConceptIds: ["ncert-g5-wondrous-world-journey-of-a-river-core"],
  coveredSkillIds: [
    "ncert-g5-wondrous-world-water-essence-core-sk-1-name-a-water-source",
    "ncert-g5-wondrous-world-water-essence-core-sk-2-give-a-conserve-water-action",
  ],
  content: {
    objective:
      "Name everyday water sources and give one clear action that conserves water at home or school.",
    wonder: {
      prompt:
        "If every tap in your neighbourhood ran dry for three days, which part of your day would feel the shortage first — and why?",
    },
    explore: {
      text: "Water is the essence of life because bodies, farms, kitchens, and classrooms all depend on it. Sources include wells, handpumps, rivers, lakes, ponds, rain-fed tanks, and piped supply. Conserving means using only what you need and keeping water clean so it can be used again.",
      activity: {
        prompt:
          "A tank is half full before a hot afternoon. Which plan best shows you understand water as something precious?",
        choices: [
          {
            id: "conserve",
            label:
              "Fill bottles for drinking, water plants early with a can, and fix a dripping tap",
            note: "You named sources of use and a conserve action. Small habits keep more water available later.",
          },
          {
            id: "waste",
            label: "Leave the hose running for fun while nobody watches",
            note: "Running water for play empties the tank faster and helps nobody’s thirst.",
          },
          {
            id: "ignore",
            label: "Say water will never run out, so habits do not matter",
            note: "Local tanks and wells can run low. Careful habits matter even when rain will come again someday.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Water sources are places water comes from before it reaches your cup: groundwater from wells and handpumps, surface water from rivers and lakes, rain collected in tanks, and treated water through pipes.",
        "The water cycle moves water around Earth. Sun heat turns liquid water into vapour (evaporation). Vapour rises, cools into tiny droplets (condensation), and falls as rain or snow (precipitation). Some water soaks into soil; some runs into streams.",
        "Safe drinking water is clean enough for bodies. Boiling, filtering, covering storage pots, and washing hands before handling water help keep germs away. Dirty drains and open rubbish near a well can spoil a source.",
        "Conserving water means turning taps off, fixing leaks, using a bucket instead of a long shower when water is scarce, watering plants with leftover clean rinse water, and not throwing oil or paint into drains.",
        "Every living thing needs water. Plants pull it from soil; animals drink; people cook, clean, and cool with it. Naming a source and a conserve action is how Grade 5 learners begin stewarding this shared treasure.",
      ],
    },
    examples: [
      {
        caption: "Village morning",
        body: "Source: a handpump near the school gate. Conserve action: fill one can carefully and carry it without spilling.",
      },
      {
        caption: "City flat",
        body: "Source: piped municipal supply stored in an overhead tank. Conserve action: report a dripping bathroom tap to an adult.",
      },
      {
        caption: "After rain",
        body: "Source: rainwater collected in a clean courtyard tank. Conserve action: keep the cover on so leaves and insects stay out.",
      },
    ],
    connection:
      "When you thank rain, a well, or a tanker driver, you are noticing the path water took to reach you.",
    try: {
      prompt:
        "Name one water source you use this week. Then write one conserve action you will try for two days.",
      reveal:
        "Example: Source — school drinking-water cooler filled from a municipal pipe. Conserve action — refill a bottle once and finish it before asking for more.",
    },
    practice: [
      q(
        "g5e-wat-p1",
        "Which is a clear water source a child might name?",
        "a village well or handpump",
        "a dry cardboard box",
        "a sealed empty bottle with no water path",
        "a",
        "Wells and handpumps draw groundwater people use. Boxes and empty sealed bottles are not sources of supply.",
        "Where does water come from before it is in your glass?",
        "Objects without water behind them are not sources.",
        {
          a: "You named a place water comes from.",
          b: "Cardboard does not supply water.",
          c: "An empty sealed bottle is not a source.",
        },
      ),
      q(
        "g5e-wat-p2",
        "Which action conserves water?",
        "turning off the tap while soaping hands",
        "leaving a garden hose open all afternoon",
        "pouring clean drinking water down the drain for fun",
        "a",
        "Stopping the flow while soaping uses less water. Open hoses and pouring water away waste what others need.",
        "Which habit leaves more water in the tank?",
        "Wasteful flow empties shared stores.",
        {
          a: "You chose a save-water habit.",
          b: "An open hose uses water fast.",
          c: "Pouring drinking water away is waste.",
        },
      ),
      explainQ(
        "g5e-wat-p3",
        "Why is covering a stored water pot part of keeping water safer?",
        "A cover keeps dust, insects, and dirty hands from touching the water. Cleaner storage helps the water stay safer to drink.",
        "What can fall into an open pot?",
        "Open pots collect more than air.",
        ["cover|dust|insect|clean|safe|germ"],
      ),
    ],
    reasoning: [
      q(
        "g5e-wat-r1",
        "A neighbour says rain will refill everything, so dripping taps do not matter. What reasoning answers gently?",
        "Rain helps, but drips waste water between rains and can empty a tank before the next shower",
        "Agree that leaks are always harmless everywhere",
        "Say rain never falls in India",
        "a",
        "The water cycle brings rain, yet local stores still run low if leaks continue. Conserving bridges the dry gaps.",
        "What happens to a tank between two rain days?",
        "Leaks and denial both skip careful use.",
        {
          a: "You linked rain to careful daily use.",
          b: "Leaks still matter.",
          c: "Monsoon rain is real in many places.",
        },
      ),
      explainQ(
        "g5e-wat-r2",
        "How does evaporation in the water cycle connect sunshine to clouds?",
        "Sunshine heats liquid water so some becomes vapour. The vapour rises, cools, and forms tiny droplets that gather as clouds.",
        "What does heat do to puddles on a hot day?",
        "Sunshine is not only for warm skin — it moves water.",
        ["evaporat|vapour|vapor|heat|rise|cloud|cool"],
      ),
    ],
    retrieve: [
      q(
        "g5e-wat-t1",
        "Naming a water source mainly means...",
        "saying where the water you use comes from, such as a well, river, tank, or pipe",
        "listing every cloud by nickname",
        "pretending cups fill themselves with no origin",
        "a",
        "A source is the origin of supply you can point to or describe.",
        "What question does 'source' answer?",
        "Nicknames and magic cups skip the origin.",
        {
          a: "You defined a usable source.",
          b: "Cloud nicknames are not household sources.",
          c: "Water has a path to the cup.",
        },
      ),
      writeQ(
        "g5e-wat-t2",
        "Name one water source and one conserve-water action.",
        [
          "well",
          "handpump",
          "river",
          "lake",
          "tank",
          "pipe",
          "rain",
          "tap",
          "leak",
          "bucket",
        ],
        "Example: Source — handpump. Conserve action — close the tap fully after filling a bottle.",
        "Pick a real place water comes from, then a habit that uses less or protects it.",
        "Saying 'water is infinite so do nothing' skips both skills.",
        [
          "well|handpump|river|lake|pond|tank|pipe|rain|bore",
          "tap|leak|bucket|save|close|fix|waste|cover",
        ],
      ),
    ],
    misconceptions: [
      {
        idea: "Only rivers count as water sources.",
        correction:
          "Wells, handpumps, lakes, rain tanks, and piped supply are sources too. Rivers are one important kind among several.",
      },
      {
        idea: "Conserving water is only for villages.",
        correction:
          "City tanks and pipes also run low. Turning taps off and fixing leaks matter in flats and schools as well.",
      },
    ],
    reflect: {
      prompt:
        "Which conserve-water action feels easiest for you to keep for a whole week?",
      keyIdeas: ["water|conserve|source"],
    },
    mastery: q(
      "g5e-wat-m1",
      "Water—The Essence of Life asks you to...",
      "name a water source and give a conserve-water action",
      "ignore leaks because rain exists somewhere",
      "believe only oceans matter for drinking at home",
      "a",
      "The chapter skills are naming sources and conserving carefully.",
      "What two habits does this lesson practise?",
      "Ignoring leaks or skipping local sources misses the point.",
      {
        a: "You held both chapter skills.",
        b: "Leaks still waste local water.",
        c: "Homes use wells, tanks, and pipes too.",
      },
    ),
    masteryCriteria:
      "You can name one water source you use and describe one conserve action with a concrete daily habit.",
    teach: {
      prompt:
        "Teach Ivshi: one water source near you and one conserve action a younger child could try.",
      keyIdeas: ["source", "conserve|save"],
    },
  },
});

export const journeyOfARiverLesson = grade5EvsLesson({
  conceptId: "ncert-g5-wondrous-world-journey-of-a-river-core",
  title: "Journey of a River",
  domainTitle: "Rivers",
  prerequisites: ["ncert-g5-wondrous-world-water-essence-core"],
  nextConceptIds: ["ncert-g5-wondrous-world-mystery-of-food-core"],
  coveredSkillIds: [
    "ncert-g5-wondrous-world-journey-of-a-river-core-sk-1-order-a-river-s-journey",
    "ncert-g5-wondrous-world-journey-of-a-river-core-sk-2-link-river-to-a-settlement",
  ],
  content: {
    objective:
      "Order the main stages of a river’s journey and link a river to how a settlement uses or depends on it.",
    wonder: {
      prompt:
        "Follow a drop of water from a cold mountain spring to the sea in your mind. Where along that path might people build homes — and what would they need the river for?",
    },
    explore: {
      text: "A river’s journey often begins in hills or mountains, gathers streams, flows through plains, and meets the sea or a larger water body. Settlements grow beside rivers for drinking water, farming, transport, fishing, and trade — when people care for the river’s health.",
      activity: {
        prompt:
          "Which story best orders a river’s journey and links it to people?",
        choices: [
          {
            id: "order-link",
            label:
              "Mountain spring → stream → wide river on plains → sea; a town uses the river for fields and boats",
            note: "You ordered source-to-mouth stages and linked the river to settlement life.",
          },
          {
            id: "backwards",
            label: "Sea first, then mountain spring, with no towns anywhere",
            note: "Rivers usually flow downhill from high land toward the sea. Settlements often grow along the way.",
          },
          {
            id: "deny",
            label: "Rivers never meet people, so order does not matter",
            note: "History and maps show villages and cities beside rivers for water, food, and travel.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Many rivers start as meltwater or rainfall in high places. Small streams join (tributaries) and the flow grows stronger.",
        "In the upper course, water may rush through steep valleys. In the middle course, the river widens across plains, carrying soil that can make banks fertile. Near the mouth, the river may slow and spread before joining the sea or a lake.",
        "Ordering a river’s journey means putting stages in a sensible downhill sequence: source and streams → main channel through land → mouth at a larger water body.",
        "Settlements link to rivers when people draw water, irrigate crops, catch fish, wash, or move goods by boat. Ghats, bridges, and markets often mark that link.",
        "Rivers also need care. Rubbish, open drains, and taking too much water can harm fish, farms, and drinking supplies downstream. A healthy river journey supports healthy communities.",
      ],
    },
    examples: [
      {
        caption: "Order",
        body: "Himalayan glacier stream → joined streams → Ganga through plains → Bay of Bengal. That is one famous downhill journey.",
      },
      {
        caption: "Settlement link",
        body: "A riverside village pumps water for homes and channels some flow to paddy fields in the growing season.",
      },
      {
        caption: "Town clue",
        body: "Old forts and markets often sit near fords or bridges where people could cross and trade beside the water.",
      },
    ],
    connection:
      "When you see a bridge, a ghat, or a canal gate, you are seeing a place where a river’s journey meets human plans.",
    try: {
      prompt:
        "Sketch or list three stages of a river’s journey in order. Then name one way a settlement might use that river.",
      reveal:
        "Example order: hill spring → plain river → sea mouth. Settlement use: irrigating wheat fields or ferrying goods.",
    },
    practice: [
      q(
        "g5e-riv-p1",
        "Which order best matches a river’s usual journey?",
        "mountain source → plains → sea or large lake",
        "sea → mountain peak as the only path uphill forever",
        "classroom tap → cloud → mountain as the only story",
        "a",
        "Water generally flows from higher land toward lower land and often to the sea. Starting at the sea and climbing forever is not the usual river path.",
        "Which way does gravity usually send a river?",
        "Uphill-only stories skip how rivers flow.",
        {
          a: "You ordered source to mouth downhill.",
          b: "Rivers do not climb from sea to peak as their main journey.",
          c: "Taps are not the mountain source of a river.",
        },
      ),
      q(
        "g5e-riv-p2",
        "Which sentence links a river to a settlement?",
        "Farmers beside the river use its water to irrigate fields",
        "The river exists only in a painting and never touches land",
        "People build homes as far as possible and never need water",
        "a",
        "Irrigation is a clear human use of river water near homes and farms.",
        "How do people depend on the flowing water?",
        "Denying land or water needs hides the link.",
        {
          a: "You named a real settlement–river link.",
          b: "Rivers on land shape real places.",
          c: "Settlements need water.",
        },
      ),
      explainQ(
        "g5e-riv-p3",
        "Why might a market grow near a river crossing?",
        "People meet where goods and travellers can cross or unload. Boats, bridges, and roads bring buyers and sellers together beside the water.",
        "What makes a crossing busy?",
        "Markets follow paths people already use.",
        ["cross|boat|bridge|trade|goods|meet|travel"],
      ),
    ],
    reasoning: [
      q(
        "g5e-riv-r1",
        "A child says towns never need rivers because taps exist. What evidence answers thoughtfully?",
        "Many taps are filled from rivers, dams, or groundwater linked to river basins — the river journey still matters upstream",
        "Agree that taps invent water with no source",
        "Say rivers only exist in fairy tales",
        "a",
        "Piped water still begins in catchments and rivers. Understanding the journey explains why pollution upstream hurts taps later.",
        "Where does tap water begin before the pipe?",
        "Magic taps and fairy-tale denial skip sources.",
        {
          a: "You traced pipes back toward rivers and basins.",
          b: "Taps need a source.",
          c: "Rivers are real on maps.",
        },
      ),
      explainQ(
        "g5e-riv-r2",
        "Why is putting 'mouth at the sea' before 'mountain source' a weak order for most rivers?",
        "Water flows downhill from high sources toward lower land. The mouth is usually the end of the journey, not the start.",
        "Think about high land and low land.",
        "Order should follow the flow.",
        ["downhill|source|mouth|high|low|flow|end|start"],
      ),
    ],
    retrieve: [
      q(
        "g5e-riv-t1",
        "Ordering a river’s journey means...",
        "putting stages from source through the land to the mouth in a sensible flow sequence",
        "listing fish names with no path",
        "saying rivers have no beginning or end ever",
        "a",
        "Order shows how the river moves from start toward its meeting with a larger water body.",
        "What sequence are you arranging?",
        "Fish lists alone are not the journey order.",
        {
          a: "You defined journey order.",
          b: "Fish matter but are not the stage order.",
          c: "Rivers have sources and mouths.",
        },
      ),
      writeQ(
        "g5e-riv-t2",
        "Write one ordered river journey (three stages) and one settlement link.",
        [
          "mountain",
          "source",
          "stream",
          "plain",
          "sea",
          "mouth",
          "farm",
          "boat",
          "water",
          "town",
        ],
        "Example: mountain spring → plain river → sea; settlement link — town boats carry vegetables to market.",
        "Use downhill order, then say how people use the river.",
        "A random list with no people link skips a skill.",
        [
          "mountain|source|stream|hill|plain|sea|mouth|lake",
          "farm|boat|irrigat|drink|fish|town|village|trade",
        ],
      ),
    ],
    misconceptions: [
      {
        idea: "Rivers begin at the sea.",
        correction:
          "Most rivers begin in high land as springs, meltwater, or rainfall streams, then flow toward the sea or a lake.",
      },
      {
        idea: "Settlements beside rivers only look pretty; they do not depend on the water.",
        correction:
          "Water for farms, drinking, fishing, and transport has drawn people to riverbanks for centuries.",
      },
    ],
    reflect: {
      prompt:
        "If you stood beside a river near you (or one you know from a map), what settlement use would you notice first?",
      keyIdeas: ["river|journey|settlement"],
    },
    mastery: q(
      "g5e-riv-m1",
      "Journey of a River asks you to...",
      "order a river’s stages and link the river to a settlement",
      "pretend rivers never touch human life",
      "start every river story at the ocean and climb forever",
      "a",
      "The skills are journey order and settlement links.",
      "Which two ideas does this chapter practise?",
      "Denying people or reversing flow skips the lesson.",
      {
        a: "You held both chapter skills.",
        b: "People and rivers meet often.",
        c: "Flow usually runs downhill to the mouth.",
      },
    ),
    masteryCriteria:
      "You can order three river stages downhill and name one way a settlement depends on that river.",
    teach: {
      prompt:
        "Teach Ivshi a mini river journey in order and one settlement link.",
      keyIdeas: ["order|source|mouth", "settlement|farm|boat"],
    },
  },
});

export const mysteryOfFoodLesson = grade5EvsLesson({
  conceptId: "ncert-g5-wondrous-world-mystery-of-food-core",
  title: "The Mystery of Food",
  domainTitle: "Food",
  prerequisites: ["ncert-g5-wondrous-world-journey-of-a-river-core"],
  nextConceptIds: ["ncert-g5-wondrous-world-our-school-core"],
  coveredSkillIds: [
    "ncert-g5-wondrous-world-mystery-of-food-core-sk-1-trace-a-food-s-origin",
    "ncert-g5-wondrous-world-mystery-of-food-core-sk-2-name-a-nutrient-idea",
  ],
  content: {
    objective:
      "Trace a familiar food back toward its farm or plant origin and name a simple nutrient idea that food provides.",
    wonder: {
      prompt:
        "Hold an imaginary plate of dal-rice. If you could rewind time, where would each part of that meal begin — field, animal, factory, or kitchen?",
    },
    explore: {
      text: "Food’s mystery is that plates begin far from the table: seeds, soil, water, sunlight, animals, and many hands. Nutrients are ideas about what food gives the body — energy, building strength, and protection. Light food chains show how energy moves from plants to animals to people.",
      activity: {
        prompt:
          "Which reply both traces origin and names a nutrient idea?",
        choices: [
          {
            id: "trace-nutrient",
            label:
              "Roti wheat grew in a field; the grain gives energy for play and work",
            note: "You traced wheat to a field and named energy as a nutrient idea.",
          },
          {
            id: "magic",
            label: "Roti appears fully baked inside the cupboard with no farm",
            note: "Cupboards store food; they do not grow wheat. Origins matter.",
          },
          {
            id: "empty",
            label: "Food never helps the body, so origins are useless",
            note: "Bodies use food for energy and growth. Tracing origins also shows who grew it.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Tracing a food’s origin means asking: plant or animal? farm, orchard, dairy, or sea? Who harvested, milled, packed, or cooked it?",
        "Many plant foods start as seeds in soil with water and sunlight — rice, wheat, vegetables, fruits. Animal foods such as milk, eggs, or meat link back to animals that ate plants or plant-based feed.",
        "Nutrient ideas for Grade 5 stay simple: foods give energy for moving and thinking; some help build and repair the body; some help protect health. Different foods bring different strengths — pulses, greens, grains, fruits, and milk each play a part.",
        "A light food-chain picture: sunlight helps plants grow → a goat eats grass → milk from the goat reaches a kitchen → a child drinks it. Energy and matter move along that chain.",
        "Mysteries open when labels hide farms. Asking 'Where did this begin?' turns a snack into a map of land, water, and work.",
      ],
    },
    examples: [
      {
        caption: "Banana",
        body: "Origin: banana plant in a warm farm or garden. Nutrient idea: fruit can give quick energy and helpful vitamins for daily health.",
      },
      {
        caption: "Curd",
        body: "Origin: milk from a cow or buffalo that ate fodder; then set into curd. Nutrient idea: milk foods help build strong bodies.",
      },
      {
        caption: "Peanut chikki",
        body: "Origin: peanuts from underground pods on a plant; jaggery from sugarcane. Nutrient idea: nuts and jaggery give energy for play.",
      },
    ],
    connection:
      "When you thank a farmer, a dairy worker, or a midday-meal cook, you are honouring a link in food’s journey.",
    try: {
      prompt:
        "Pick one food you ate today. Trace it one step toward its origin. Name one nutrient idea it might give.",
      reveal:
        "Example: Idli rice and urad → paddies and pulse fields; nutrient idea — energy for morning lessons.",
    },
    practice: [
      q(
        "g5e-food-p1",
        "Which note best traces a food’s origin?",
        "Tomato chutney begins with tomatoes grown on plants in a field or garden",
        "Chutney appears from nowhere inside the jar",
        "Tomatoes are invented by refrigerators",
        "a",
        "Tracing names the plant and place of growth. Jars and fridges store food; they do not grow tomatoes.",
        "Where did the main ingredient grow?",
        "Storage places are not farms.",
        {
          a: "You pointed toward the growing plant.",
          b: "Jars hold food already made.",
          c: "Fridges keep food cool; they do not grow it.",
        },
      ),
      q(
        "g5e-food-p2",
        "Which sentence names a nutrient idea?",
        "Dal and rice give energy so the body can work and play",
        "Food is only colour with no use for bodies",
        "Nutrients are only the names of kitchen spoons",
        "a",
        "Energy for work and play is a clear nutrient idea. Colour-only and spoon-name claims miss what food does for the body.",
        "What does food give the body in simple words?",
        "Spoons and empty colour talk are not nutrient ideas.",
        {
          a: "You named energy as a gift from food.",
          b: "Bodies use food for more than colour.",
          c: "Nutrients are about the body, not cutlery labels.",
        },
      ),
      explainQ(
        "g5e-food-p3",
        "How can a simple food chain connect grass, a cow, and a glass of milk?",
        "Grass grows with sunlight. A cow eats grass. People drink milk from the cow. Energy moves from plant to animal to person.",
        "Who eats whom in this everyday chain?",
        "Milk did not skip the plant step.",
        ["grass|plant|cow|milk|energy|eat|sun"],
      ),
    ],
    reasoning: [
      q(
        "g5e-food-r1",
        "A packet of biscuits shows a factory picture only. What mystery question still helps?",
        "Ask which farm ingredients — wheat, sugar, oil — began before the factory",
        "Decide factories grow wheat underground",
        "Refuse to think about farms because packets look finished",
        "a",
        "Factories mix and bake; farms still grow many ingredients. Tracing keeps the full story.",
        "What came before the oven?",
        "Factories do not replace fields.",
        {
          a: "You looked behind the packet to farms.",
          b: "Factories process; they rarely grow grain.",
          c: "Finished packets still have origins.",
        },
      ),
      explainQ(
        "g5e-food-r2",
        "Why might eating only sugary snacks leave a nutrient gap even if you feel full?",
        "Feeling full is not the same as getting a mix of energy, building foods, and protective foods. Bodies need variety from grains, pulses, fruits, vegetables, and other groups.",
        "Think about what different foods give besides bulk.",
        "Fullness and balance are different ideas.",
        ["variety|energy|build|protect|fruit|pulse|vegetable|balance"],
      ),
    ],
    retrieve: [
      q(
        "g5e-food-t1",
        "Tracing a food’s origin mainly means...",
        "following it back toward plant, animal, farm, or sea before the plate",
        "only reading the price and stopping there",
        "pretending kitchens invent ingredients from air",
        "a",
        "Origin tracing asks where the food began in the living or farming world.",
        "What question opens the mystery?",
        "Price alone skips the farm story.",
        {
          a: "You defined origin tracing.",
          b: "Price is useful but not origin.",
          c: "Ingredients come from the wider world.",
        },
      ),
      writeQ(
        "g5e-food-t2",
        "Trace one food’s origin and name one nutrient idea.",
        [
          "farm",
          "field",
          "plant",
          "milk",
          "rice",
          "wheat",
          "energy",
          "build",
          "fruit",
          "pulse",
        ],
        "Example: Origin — rice from a paddy field. Nutrient idea — energy for schoolwork.",
        "Name a plant/animal/farm start, then what the food gives the body.",
        "Saying 'food has no origin' skips both skills.",
        [
          "farm|field|plant|animal|milk|rice|wheat|fruit|egg|fish",
          "energy|build|protect|grow|health|vitamin|strength",
        ],
      ),
    ],
    misconceptions: [
      {
        idea: "Packaged food has no farm origin.",
        correction:
          "Most packets still begin with crops, milk, oilseeds, or other farm products processed later.",
      },
      {
        idea: "Nutrients are only adult doctor words with no child meaning.",
        correction:
          "Children can use simple ideas: energy, building the body, and protecting health — matched to everyday foods.",
      },
    ],
    reflect: {
      prompt:
        "Which food on your plate tomorrow will you try to trace one step toward its origin?",
      keyIdeas: ["food|origin|nutrient"],
    },
    mastery: q(
      "g5e-food-m1",
      "The Mystery of Food asks you to...",
      "trace a food’s origin and name a nutrient idea",
      "believe plates invent themselves",
      "ignore farms because kitchens feel magical",
      "a",
      "The skills are origin tracing and simple nutrient ideas.",
      "What two habits unlock food’s mystery?",
      "Magic kitchens skip farms and body needs.",
      {
        a: "You held both chapter skills.",
        b: "Food has beginnings outside the plate.",
        c: "Farms still matter.",
      },
    ),
    masteryCriteria:
      "You can trace one familiar food toward its origin and name one nutrient idea it supports.",
    teach: {
      prompt:
        "Teach Ivshi: one food origin trail and one nutrient idea in child-friendly words.",
      keyIdeas: ["origin|farm", "energy|nutrient"],
    },
  },
});

export const ourSchoolLesson = grade5EvsLesson({
  conceptId: "ncert-g5-wondrous-world-our-school-core",
  title: "Our School—A Happy Place",
  domainTitle: "Community",
  prerequisites: ["ncert-g5-wondrous-world-mystery-of-food-core"],
  nextConceptIds: ["ncert-g5-wondrous-world-our-vibrant-country-core"],
  coveredSkillIds: [
    "ncert-g5-wondrous-world-our-school-core-sk-1-name-a-school-role",
    "ncert-g5-wondrous-world-our-school-core-sk-2-describe-cooperation",
  ],
  content: {
    objective:
      "Name roles that keep a school running and describe how cooperation makes the school a happier, healthier place.",
    wonder: {
      prompt:
        "If teachers, cleaners, cooks, and classmates all stayed home for a week, which part of school life would stumble first — and who usually holds that part up?",
    },
    explore: {
      text: "A school is a small community. Roles include teachers, head teacher, office staff, cleaners, midday-meal cooks, bus drivers, librarians, and students. Cooperation means sharing jobs, listening, taking turns, and caring for shared spaces so everyone can learn safely.",
      activity: {
        prompt:
          "The playground is littered and a younger class needs help lining up. Which plan shows school roles and cooperation?",
        choices: [
          {
            id: "roles-coop",
            label:
              "Students pick litter together; a teacher guides the line; a cleaner later empties bins",
            note: "You named roles and a cooperative clean-up. Many hands keep the school happy.",
          },
          {
            id: "solo",
            label: "One child tries to do every job alone and shouts at others",
            note: "Shouting and solo heroics rarely build a happy place. Roles work better when shared.",
          },
          {
            id: "ignore",
            label: "Leave litter and skip helping because school is only for exams",
            note: "Health, safety, and kindness are part of school life, not extras.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "School roles are jobs people do so learning can happen: teaching lessons, keeping records, cooking meals, cleaning toilets and classrooms, guarding the gate, and driving buses.",
        "Students have roles too — learners, helpers, library monitors, class leaders — when they care for books, peers, and shared spaces.",
        "Cooperation is working with others toward a shared goal: group projects, lining up calmly, sharing sports equipment, and listening when someone speaks.",
        "Health belongs in a happy school: washing hands, covering coughs, drinking safe water, keeping toilets usable, and reporting hazards to an adult.",
        "Respect between roles matters. Thanking a cook or cleaner notices work that is easy to overlook. A happy school is built by many roles cooperating, not by one person alone.",
      ],
    },
    examples: [
      {
        caption: "Morning assembly",
        body: "Role: teacher leads; students stand in lines. Cooperation: quiet listening so announcements reach everyone.",
      },
      {
        caption: "Midday meal",
        body: "Role: cook prepares food; students queue. Cooperation: no wasting food and washing hands before eating.",
      },
      {
        caption: "Library hour",
        body: "Role: librarian shelves books; monitors help return titles. Cooperation: soft voices so others can read.",
      },
    ],
    connection:
      "When a school feels happy, it is often because roles are clear and cooperation is practised in tiny daily acts.",
    try: {
      prompt:
        "Name two school roles you see this week. Describe one moment of cooperation you joined or noticed.",
      reveal:
        "Example: Roles — class teacher and sanitation worker. Cooperation — classmates took turns sweeping the classroom corner after art.",
    },
    practice: [
      q(
        "g5e-sch-p1",
        "Which person names a clear school role?",
        "a midday-meal cook who prepares food for students",
        "a cloud that floats over the roof",
        "a locked cupboard with no person",
        "a",
        "Cooks are people with a school role that supports health and learning. Clouds and cupboards are not roles.",
        "Who does work that serves the school day?",
        "Objects and weather are not school jobs.",
        {
          a: "You named a human school role.",
          b: "Clouds do not cook or teach.",
          c: "Cupboards do not hold roles.",
        },
      ),
      q(
        "g5e-sch-p2",
        "Which scene describes cooperation?",
        "Classmates share chart paper and take turns drawing for a group poster",
        "One student hides all the crayons so nobody else can finish",
        "Everyone shouts over each other and tears the poster",
        "a",
        "Sharing materials and turns is cooperation. Hiding and shouting break the shared goal.",
        "What helps a group finish together?",
        "Hiding tools and tearing work are not cooperation.",
        {
          a: "You described shared work.",
          b: "Hiding crayons blocks others.",
          c: "Shouting tears the team goal.",
        },
      ),
      explainQ(
        "g5e-sch-p3",
        "How do clean toilets connect school roles to student health?",
        "Cleaners and students who use toilets carefully keep germs down. Healthy bodies can attend and learn more steadily.",
        "Who keeps toilets usable, and why does that matter?",
        "Health and roles meet in everyday spaces.",
        ["clean|toilet|health|germ|role|attend|learn"],
      ),
    ],
    reasoning: [
      q(
        "g5e-sch-r1",
        "A child says only teachers matter at school. What reasoning widens the picture?",
        "Without cleaners, cooks, office staff, and cooperative students, teaching alone cannot keep the day safe and ready",
        "Agree that meals, toilets, and gates run themselves",
        "Say students should never help with shared spaces",
        "a",
        "Many roles weave the school day. Cooperation among them makes the place happier.",
        "What else must work for lessons to go well?",
        "Invisible jobs still matter.",
        {
          a: "You named the wider web of roles.",
          b: "Meals and toilets need people.",
          c: "Students share care for spaces.",
        },
      ),
      explainQ(
        "g5e-sch-r2",
        "Why is taking turns on playground equipment an example of cooperation?",
        "Taking turns shares a limited resource fairly so more children can play and fewer fights start. The shared goal is safe enjoyment for the group.",
        "What happens if one child never gives others a chance?",
        "Fairness is cooperation in motion.",
        ["turn|share|fair|play|group|together"],
      ),
    ],
    retrieve: [
      q(
        "g5e-sch-t1",
        "Naming a school role mainly means...",
        "identifying a person and the job they do that helps school life",
        "listing only building colours",
        "pretending the school runs with zero people",
        "a",
        "Roles pair people with jobs that serve learning and care.",
        "What two parts make a role clear?",
        "Paint colours alone are not roles.",
        {
          a: "You defined a school role.",
          b: "Colours decorate; they are not jobs.",
          c: "People run schools.",
        },
      ),
      writeQ(
        "g5e-sch-t2",
        "Name one school role and describe one act of cooperation.",
        [
          "teacher",
          "cook",
          "cleaner",
          "student",
          "librarian",
          "share",
          "turn",
          "help",
          "listen",
          "together",
        ],
        "Example: Role — librarian. Cooperation — classmates return books together and keep voices soft.",
        "Pick a person-job pair, then a shared helpful act.",
        "Saying nobody cooperates skips the skill.",
        [
          "teacher|cook|cleaner|student|librarian|driver|office|principal|head",
          "share|turn|help|listen|together|clean|queue|care",
        ],
      ),
    ],
    misconceptions: [
      {
        idea: "Only teachers have roles at school.",
        correction:
          "Cooks, cleaners, office staff, drivers, librarians, and students all hold roles that keep learning possible.",
      },
      {
        idea: "Cooperation means never disagreeing.",
        correction:
          "Cooperation means working toward shared goals with respect. People can disagree kindly and still take turns and help.",
      },
    ],
    reflect: {
      prompt:
        "Which school role will you thank this week, and how will you cooperate once tomorrow?",
      keyIdeas: ["school|role|cooperation"],
    },
    mastery: q(
      "g5e-sch-m1",
      "Our School—A Happy Place asks you to...",
      "name a school role and describe cooperation",
      "ignore every job except your own desk",
      "believe happy schools need no helpers",
      "a",
      "The skills are naming roles and describing cooperation.",
      "What two ideas make a school feel shared?",
      "Solo desks without helpers miss community.",
      {
        a: "You held both chapter skills.",
        b: "Many jobs matter beyond one desk.",
        c: "Helpers build happy schools.",
      },
    ),
    masteryCriteria:
      "You can name one school role with its job and describe one concrete cooperative act.",
    teach: {
      prompt:
        "Teach Ivshi two school roles and one cooperation example from a real school day.",
      keyIdeas: ["role", "cooperation|share"],
    },
  },
});

export const ourVibrantCountryLesson = grade5EvsLesson({
  conceptId: "ncert-g5-wondrous-world-our-vibrant-country-core",
  title: "Our Vibrant Country",
  domainTitle: "India",
  prerequisites: ["ncert-g5-wondrous-world-our-school-core"],
  nextConceptIds: ["ncert-g5-wondrous-world-some-unique-places-core"],
  coveredSkillIds: [
    "ncert-g5-wondrous-world-our-vibrant-country-core-sk-1-name-a-diversity-example",
    "ncert-g5-wondrous-world-our-vibrant-country-core-sk-2-respect-a-difference",
  ],
  content: {
    objective:
      "Name an example of India’s diversity and show how respecting a difference helps people live together.",
    wonder: {
      prompt:
        "If every street in India spoke one language, cooked one dish, and wore one style forever, what richness would you miss first — and whose story might disappear?",
    },
    explore: {
      text: "India is vibrant because landscapes, languages, foods, festivals, clothes, and crafts differ across regions while people share the country. Diversity examples can be a language, a harvest festival, a regional dish, or a dance. Respecting a difference means listening, not mocking, and making space for ways that are not your own.",
      activity: {
        prompt:
          "A new classmate celebrates a festival you do not know and brings a regional snack to share. Which response shows diversity and respect?",
        choices: [
          {
            id: "respect",
            label:
              "Ask kindly about the festival and try the snack if invited, without making fun",
            note: "You treated difference as something to learn from. Respect keeps the classroom vibrant.",
          },
          {
            id: "mock",
            label: "Laugh at the festival name and refuse to listen",
            note: "Mocking shrinks belonging. Diversity needs curiosity, not ridicule.",
          },
          {
            id: "deny",
            label: "Say India has only one culture so their festival cannot be real",
            note: "India holds many cultures. Denying them erases real families and regions.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Diversity means variety. In India that variety shows in languages, scripts, clothing styles, foods, music, religions, and landscapes from coasts to mountains to deserts.",
        "A diversity example is a concrete case: Malayalam spoken in Kerala, Bihu in Assam, Idli in the south, wool shawls in the hills, or desert festivals in Rajasthan.",
        "Unity does not mean sameness. People can share citizenship, schools, and laws while keeping different home languages and celebrations.",
        "Respecting a difference means using kind words, asking questions instead of insults, including classmates in games, and protecting each other’s right to belong.",
        "Vibrant country life also includes caring for shared places — rivers, forests, monuments, and neighbourhoods — so many communities can enjoy them. Diversity and care travel together.",
      ],
    },
    examples: [
      {
        caption: "Language",
        body: "Diversity example: classmates may speak Hindi, Tamil, or another home language. Respect: listen patiently when someone switches languages to explain.",
      },
      {
        caption: "Food",
        body: "Diversity example: mustard oil in one region, coconut in another. Respect: try a new taste if offered; do not call someone’s home food 'strange' as an insult.",
      },
      {
        caption: "Festival",
        body: "Diversity example: harvest celebrations differ by crop and region. Respect: greet a friend on their festival day even if it is not yours.",
      },
    ],
    connection:
      "Maps of India look colourful for a reason — many peoples, places, and practices share one large home.",
    try: {
      prompt:
        "Name one diversity example from India you know. Write one respectful action you can take when you meet a difference at school.",
      reveal:
        "Example: Diversity — Onam stories from Kerala. Respect — ask a classmate what they enjoy most about their festival instead of joking.",
    },
    practice: [
      q(
        "g5e-vc-p1",
        "Which is a clear diversity example?",
        "different regional languages spoken across Indian states",
        "everyone forced to eat only one dish forever",
        "pretending all festivals are identical everywhere",
        "a",
        "Many languages across states show variety. Forcing one dish or identical festivals hides diversity.",
        "What variety can you point to on a map of people?",
        "Sameness-only stories erase regions.",
        {
          a: "You named language variety.",
          b: "One forced dish is not diversity.",
          c: "Festivals differ by place and community.",
        },
      ),
      q(
        "g5e-vc-p2",
        "Which action respects a difference?",
        "listening to a classmate explain a custom without mocking",
        "copying an accent to make the class laugh at someone",
        "telling a friend their home food is only for jokes",
        "a",
        "Listening without mockery shows respect. Accents and food used as jokes can hurt belonging.",
        "Which choice protects dignity?",
        "Mockery is not respect.",
        {
          a: "You chose respectful listening.",
          b: "Accent jokes can wound.",
          c: "Food jokes can exclude.",
        },
      ),
      explainQ(
        "g5e-vc-p3",
        "Why can unity and diversity both be true for India?",
        "People share a country, schools, and many civic ideas while still keeping different languages, foods, and festivals. Belonging together does not require being identical.",
        "What can be shared without erasing home cultures?",
        "Sameness is not the only kind of togetherness.",
        ["share|different|language|festival|together|same|unity|diversity"],
      ),
    ],
    reasoning: [
      q(
        "g5e-vc-r1",
        "A poster says 'Only one way to be Indian.' What thoughtful reply uses diversity?",
        "Point out languages, foods, and festivals that differ yet still belong in India",
        "Agree that difference means someone does not belong",
        "Say maps of India show only one climate and culture",
        "a",
        "Evidence of many cultures under one country answers narrow slogans. Belonging is wider than one style.",
        "What variety still counts as Indian?",
        "Erasing difference shrinks the country story.",
        {
          a: "You used diversity as evidence.",
          b: "Difference does not cancel belonging.",
          c: "India holds many climates and cultures.",
        },
      ),
      explainQ(
        "g5e-vc-r2",
        "How does respecting a classmate’s different festival help the whole class?",
        "Respect builds trust so more children feel safe to share. A class that feels safe learns better and stays kinder.",
        "What happens inside a group when mockery stops?",
        "Safety and learning grow together.",
        ["trust|safe|share|kind|learn|respect|belong"],
      ),
    ],
    retrieve: [
      q(
        "g5e-vc-t1",
        "Naming a diversity example mainly means...",
        "pointing to a real variety such as language, food, festival, or dress in India",
        "claiming no variety exists anywhere",
        "only listing the word 'diversity' with no case",
        "a",
        "An example is concrete. Empty claims or denial skip the skill.",
        "What can you show as a case?",
        "Labels without cases are thin.",
        {
          a: "You defined a usable example.",
          b: "Variety exists across India.",
          c: "The word alone needs a case.",
        },
      ),
      writeQ(
        "g5e-vc-t2",
        "Name one diversity example and one way to respect a difference.",
        [
          "language",
          "festival",
          "food",
          "dress",
          "dance",
          "listen",
          "respect",
          "kind",
          "ask",
          "include",
        ],
        "Example: Diversity — different harvest festivals. Respect — congratulate a friend and listen to their story.",
        "Give a concrete variety, then a kind action.",
        "Mocking or denying variety skips both skills.",
        [
          "language|festival|food|dress|dance|craft|music|region",
          "listen|respect|kind|ask|include|welcome|greet",
        ],
      ),
    ],
    misconceptions: [
      {
        idea: "Diversity means people cannot share anything.",
        correction:
          "Diversity is variety within a shared country. People can differ in language or festival and still learn, play, and belong together.",
      },
      {
        idea: "Respecting a difference means you must abandon your own culture.",
        correction:
          "Respect means making space for others without erasing yourself. You can keep your home ways and honour theirs.",
      },
    ],
    reflect: {
      prompt:
        "Which diversity example from India feels closest to your life, and how will you respect a difference this week?",
      keyIdeas: ["diversity|respect|India"],
    },
    mastery: q(
      "g5e-vc-m1",
      "Our Vibrant Country asks you to...",
      "name a diversity example and respect a difference",
      "mock ways that are not your own",
      "claim India has only one culture forever",
      "a",
      "The skills are naming diversity and practising respect.",
      "What two habits keep the country story wide?",
      "Mockery and single-culture claims shrink belonging.",
      {
        a: "You held both chapter skills.",
        b: "Respect replaces mockery.",
        c: "India holds many cultures.",
      },
    ),
    masteryCriteria:
      "You can name one concrete diversity example from India and describe one respectful response to difference.",
    teach: {
      prompt:
        "Teach Ivshi one diversity example and one respectful action for meeting difference.",
      keyIdeas: ["diversity", "respect|listen"],
    },
  },
});
