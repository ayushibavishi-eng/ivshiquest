import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade4EvsLesson } from "@/content/lessons/grade-4-evs/format";

export const foodForHealthLesson = grade4EvsLesson({
  conceptId: "ncert-g4-wondrous-world-food-for-health-core",
  title: "Food for Health",
  domainTitle: "Health",
  prerequisites: ["ncert-g4-wondrous-world-growing-up-with-nature-core"],
  nextConceptIds: ["ncert-g4-wondrous-world-happy-healthy-living-core"],
  coveredSkillIds: [
    "ncert-g4-wondrous-world-food-for-health-core-sk-1-name-a-healthy-food",
    "ncert-g4-wondrous-world-food-for-health-core-sk-2-say-where-a-food-comes-from",
  ],
  content: {
    objective:
      "Connect everyday food to health and variety, and say where common foods begin — farm, tree, animal, or water.",
    wonder: {
      prompt:
        "If your plate had only one food for a whole month, what might your body miss — and what would you get tired of first?",
    },
    explore: {
      text: "Food gives energy and materials for growth and repair. Healthy plates usually mix grains, pulses, vegetables, fruits, and some milk or other protein foods. Every food also has a story of origin: fields, orchards, animals, rivers, or the sea.",
      activity: {
        prompt:
          "Which lunch idea best supports health and shows food origins?",
        choices: [
          {
            id: "varied",
            label:
              "Rice from the field, dal from pulses, cucumber from the garden, and a banana from a tree",
            note: "Variety plus origins: grains, pulses, vegetable, fruit. That supports health thinking.",
          },
          {
            id: "only-sweet",
            label: "Only sweets all day because they taste happy",
            note: "Taste matters, but bodies also need varied foods, not only sugar.",
          },
          {
            id: "no-origin",
            label: "Food magically appears on plates with no farms",
            note: "Farms, trees, and animals are real beginnings for most foods.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Healthy foods help the body stay strong: vegetables, fruits, millets or rice or wheat, dals, milk, eggs, and clean water.",
        "Variety matters because different foods bring different useful parts — some for energy, some for building, some for vitamins and fibre.",
        "Saying where food comes from means tracing one step back: milk from cows or buffaloes, eggs from hens, spinach from leafy plants, fish from water.",
        "Processed snacks can be occasional treats, but daily health leans on fresh and simple foods when families can access them.",
        "Washing hands and washing produce are part of food for health too — clean food protects the body.",
      ],
    },
    examples: [
      {
        caption: "Banana",
        body: "Healthy fruit snack. Origin: grows on banana plants/trees.",
      },
      {
        caption: "Dal",
        body: "Pulses cooked as dal. Origin: pulse plants grown in fields.",
      },
      {
        caption: "Curd",
        body: "Milk food. Origin: milk from dairy animals, then set into curd.",
      },
    ],
    connection:
      "Market mornings, kitchen gardens, and mid-day meals are all classrooms for food origins and health choices.",
    try: {
      prompt:
        "Name three foods from a recent meal. Mark each as helpful for health in your own words, and say where each comes from.",
      reveal:
        "Example: roti — grain from wheat fields; tomato — vegetable from plants; milk — from a cow or buffalo.",
    },
    practice: [
      q(
        "g4e-fh-p1",
        "Which is a healthy food choice for everyday strength?",
        "a bowl of mixed vegetables with roti",
        "only toffees for breakfast, lunch, and dinner",
        "drinking dirty drain water",
        "a",
        "Vegetables with grain support everyday health better than all-toffee days or unsafe water.",
        "Which choice helps a growing body regularly?",
        "Sweets-only and dirty water harm health habits.",
        {
          a: "You picked a varied, useful meal idea.",
          b: "All toffees skip needed variety.",
          c: "Unsafe water is not food for health.",
        },
      ),
      q(
        "g4e-fh-p2",
        "Where does spinach usually come from?",
        "leafy plants grown in soil",
        "clouds printing green paper",
        "phones downloading leaves",
        "a",
        "Spinach is a leafy plant food from gardens or fields.",
        "Which origin could a farmer show you?",
        "Clouds and phones do not grow spinach.",
        {
          a: "You traced spinach to plants.",
          b: "Clouds do not print vegetables.",
          c: "Phones do not grow leaves.",
        },
      ),
      explainQ(
        "g4e-fh-p3",
        "Why might eating only one kind of food every day be a weaker health plan than mixing foods?",
        "Different foods bring different useful parts for energy, growth, and protection. Mixing helps cover more of what a body needs.",
        "Think about what variety adds.",
        "One food rarely covers every need.",
        ["variety|different|mix|energy|grow|vitamin|need"],
      ),
    ],
    reasoning: [
      q(
        "g4e-fh-r1",
        "Eggs and bananas are both foods. How do their origins differ?",
        "Eggs come from hens; bananas grow on banana plants",
        "Both fall from the moon each night",
        "Neither has any living source",
        "a",
        "Animal-source and plant-source foods both nourish, but their beginnings differ.",
        "Which living source produces each?",
        "Moon myths skip real farms and animals.",
        {
          a: "You separated animal and plant origins.",
          b: "Food does not fall from the moon.",
          c: "Both have living sources.",
        },
      ),
      explainQ(
        "g4e-fh-r2",
        "A friend says packaged chips come from 'the shop only.' How would you extend the story one step further?",
        "Shops sell chips, but the potatoes or grain inside began on farms. Packaging is a later step, not the first origin.",
        "What plant might be inside before the packet?",
        "Shops are stops on the journey, not the seed.",
        ["farm|potato|grain|plant|field|grow"],
      ),
    ],
    retrieve: [
      q(
        "g4e-fh-t1",
        "Saying where a food comes from means...",
        "naming a farm, plant, animal, or water source behind it",
        "only naming the colour of the plate",
        "pretending food has no beginning",
        "a",
        "Origin stories point to living or natural sources before the kitchen.",
        "What is one step before cooking?",
        "Plate colour is not an origin.",
        {
          a: "You named a real source idea.",
          b: "Colour is not origin.",
          c: "Foods begin somewhere.",
        },
      ),
      writeQ(
        "g4e-fh-t2",
        "Name one healthy food and say where it comes from.",
        [
          "fruit",
          "vegetable",
          "dal",
          "milk",
          "egg",
          "rice",
          "roti",
          "plant",
          "cow",
          "field",
        ],
        "Example: apple — from an apple tree; milk — from a cow or buffalo.",
        "Pick a food that helps the body, then its living source.",
        "Only naming a brand without a source is incomplete.",
        ["fruit|vegetable|dal|milk|egg|rice|roti|banana|spinach", "plant|tree|cow|hen|field|farm|animal"],
      ),
    ],
    misconceptions: [
      {
        idea: "Healthy food never tastes good.",
        correction:
          "Many healthy foods taste excellent — ripe fruit, warm dal, fresh cucumber. Taste and health can travel together.",
      },
      {
        idea: "If it is sold in a packet, it has no natural origin.",
        correction:
          "Packets still often hold farm ingredients. The packet is wrapping, not the first source.",
      },
    ],
    reflect: {
      prompt:
        "Which healthy food will you notice the origin of at your next meal?",
      keyIdeas: ["healthy|food|origin"],
    },
    mastery: q(
      "g4e-fh-m1",
      "Food for health means noticing...",
      "helpful foods and where they begin",
      "only the loudest advertisement",
      "that dirt and variety never matter",
      "a",
      "Chapter skills: name healthy food and say origins.",
      "Which two ideas belong together?",
      "Ads alone are not health wisdom.",
      {
        a: "You joined health and origins.",
        b: "Ads are not the whole story.",
        c: "Clean variety matters.",
      },
    ),
    masteryCriteria:
      "You can name a healthy food and say a sensible origin (plant, animal, field, or water).",
    teach: {
      prompt:
        "Teach Ivshi two foods: which supports health, and where each comes from.",
      keyIdeas: ["healthy", "origin|from"],
    },
  },
});

export const happyHealthyLivingLesson = grade4EvsLesson({
  conceptId: "ncert-g4-wondrous-world-happy-healthy-living-core",
  title: "Happy and Healthy Living",
  domainTitle: "Health",
  prerequisites: ["ncert-g4-wondrous-world-food-for-health-core"],
  nextConceptIds: ["ncert-g4-wondrous-world-how-things-work-core"],
  coveredSkillIds: [
    "ncert-g4-wondrous-world-happy-healthy-living-core-sk-1-name-a-healthy-habit",
    "ncert-g4-wondrous-world-happy-healthy-living-core-sk-2-explain-why-it-helps",
  ],
  content: {
    objective:
      "Name healthy habits of cleanliness, rest, play, and care, and explain why each habit helps the body and mind.",
    wonder: {
      prompt:
        "Which habit — sleep, washing hands, outdoor play, or kind rest for your eyes from screens — would your future self thank you for most this week?",
    },
    explore: {
      text: "Happy and healthy living is a set of small habits: keeping clean, sleeping enough, playing and moving, drinking safe water, caring for feelings, and helping others stay well. A habit helps when you can say what it protects or strengthens.",
      activity: {
        prompt:
          "Which choice names a habit and explains why it helps?",
        choices: [
          {
            id: "habit-why",
            label:
              "Washing hands before eating helps wash away germs that can make the stomach upset",
            note: "Habit plus reason. That is the chapter skill pair.",
          },
          {
            id: "habit-only",
            label: "Do something healthy for no reason anyone can say",
            note: "Naming why builds understanding, not only copying.",
          },
          {
            id: "harm",
            label: "Stay awake all night every night to prove strength",
            note: "Bodies need rest. Skipping sleep is not a healthy habit.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Cleanliness habits include washing hands, bathing, brushing teeth, and keeping nails and clothes reasonably clean.",
        "Rest and sleep let the body repair. Children often need a long night of sleep to feel ready for school.",
        "Play and movement strengthen muscles, lungs, and mood. Outdoor play also brings fresh air and friendship.",
        "Care habits include drinking safe water, covering coughs, using a handkerchief, and speaking kindly when someone is unwell.",
        "Explaining why a habit helps turns a rule into understanding — so you can choose it even when nobody is watching.",
      ],
    },
    examples: [
      {
        caption: "Handwash",
        body: "Habit: wash with soap before meals. Why: reduces germs that travel from hands to mouth.",
      },
      {
        caption: "Sleep",
        body: "Habit: sleep on time. Why: tired brains struggle to learn and bodies feel low.",
      },
      {
        caption: "Play",
        body: "Habit: run or play outdoors. Why: movement builds fitness and often lifts mood.",
      },
    ],
    connection:
      "Homes, schools, and playgrounds are where healthy habits become ordinary — not only posters on a wall.",
    try: {
      prompt:
        "Choose one healthy habit you will keep tomorrow. Write why it helps in one sentence.",
      reveal:
        "Example: I will drink water at break because a thirsty body feels tired and finds it harder to focus.",
    },
    practice: [
      q(
        "g4e-hh-p1",
        "Which is a healthy habit?",
        "brushing teeth twice a day",
        "never drinking water",
        "sharing used tissues after a cold without care",
        "a",
        "Tooth brushing is a cleanliness habit that protects teeth and gums.",
        "Which choice protects the body?",
        "No water and careless germ spread are not healthy.",
        {
          a: "You named a real health habit.",
          b: "Bodies need water.",
          c: "Spreading germs harms care.",
        },
      ),
      q(
        "g4e-hh-p2",
        "Why does covering a sneeze help?",
        "it reduces the spread of droplets that can carry germs",
        "it makes the sun rise earlier",
        "it replaces the need for any sleep",
        "a",
        "Covering protects people nearby from droplets. It does not control the sun or replace sleep.",
        "What travels in a sneeze?",
        "Sun and sleep are separate topics.",
        {
          a: "You explained the care reason.",
          b: "Sneezes do not set sunrise.",
          c: "Sleep is still needed.",
        },
      ),
      explainQ(
        "g4e-hh-p3",
        "Explain why outdoor play can be a healthy habit.",
        "Moving the body strengthens fitness, lungs, and often mood. Fresh air and friends can make the habit joyful too.",
        "What does movement do for a body?",
        "Sitting still all day is not the only way to rest a mind.",
        ["move|strong|fit|air|mood|friend|energy"],
      ),
    ],
    reasoning: [
      q(
        "g4e-hh-r1",
        "A child washes hands after play but skips sleep nightly. What is still missing for healthy living?",
        "enough rest — one good habit does not replace every other need",
        "nothing; handwash alone is a full health plan",
        "more screen time until dawn",
        "a",
        "Healthy living combines habits. Clean hands plus sleep, play, and care work together.",
        "Which need is still empty?",
        "Screens until dawn undo rest.",
        {
          a: "You saw habits as a set.",
          b: "One habit is not the whole plan.",
          c: "Dawn screens hurt sleep.",
        },
      ),
      explainQ(
        "g4e-hh-r2",
        "Why is 'because an adult said so' a thinner explanation than 'because soap lifts dirt and germs off skin'?",
        "The second explanation tells how the habit works. Understanding helps you choose the habit thoughtfully, not only when watched.",
        "Which answer teaches the reason?",
        "Rules without reasons are easier to forget.",
        ["why|germ|soap|understand|reason|how"],
      ),
    ],
    retrieve: [
      q(
        "g4e-hh-t1",
        "A healthy habit plus a why looks like...",
        "sleeping enough so the body and brain can recover",
        "skipping meals to stay busy",
        "never washing after muddy play",
        "a",
        "Habit and reason travel together in this chapter.",
        "Which line includes both?",
        "Skipping care is not the goal.",
        {
          a: "You paired habit and reason.",
          b: "Skipping meals is not healthy living.",
          c: "Muddy hands need washing.",
        },
      ),
      writeQ(
        "g4e-hh-t2",
        "Name one healthy habit and explain why it helps.",
        [
          "wash",
          "sleep",
          "play",
          "water",
          "brush",
          "rest",
          "germ",
          "strong",
          "focus",
          "care",
        ],
        "Example: wash hands — helps remove germs before eating.",
        "Name the habit, then the protection or strength it gives.",
        "A habit with no reason is incomplete for this skill.",
        ["wash|sleep|play|water|brush|rest|exercise", "germ|strong|focus|health|recover|care|fit"],
      ),
    ],
    misconceptions: [
      {
        idea: "Healthy living means never having fun.",
        correction:
          "Play, friendship, and joyful movement are part of healthy living.",
      },
      {
        idea: "Only medicine creates health.",
        correction:
          "Medicine matters when we are ill, but daily habits prevent many problems and support recovery.",
      },
    ],
    reflect: {
      prompt:
        "Which healthy habit will you explain to a younger sibling or friend this week?",
      keyIdeas: ["habit|why|health"],
    },
    mastery: q(
      "g4e-hh-m1",
      "Happy and healthy living asks you to...",
      "name healthy habits and explain why they help",
      "collect only posters and never practise",
      "stay exhausted on purpose",
      "a",
      "Skills: name a habit and explain its help.",
      "What pair defines this chapter?",
      "Posters without practice are thin.",
      {
        a: "You named the skill pair.",
        b: "Practice matters more than posters alone.",
        c: "Exhaustion is not the goal.",
      },
    ),
    masteryCriteria:
      "You can name a healthy habit and give a clear reason it helps body, mind, or community care.",
    teach: {
      prompt:
        "Teach Ivshi two habits with a why for each — cleanliness, rest, play, or care.",
      keyIdeas: ["habit", "why|help"],
    },
  },
});

export const howThingsWorkLesson = grade4EvsLesson({
  conceptId: "ncert-g4-wondrous-world-how-things-work-core",
  title: "How Things Work",
  domainTitle: "Making & mechanisms",
  prerequisites: ["ncert-g4-wondrous-world-happy-healthy-living-core"],
  nextConceptIds: ["ncert-g4-wondrous-world-how-things-are-made-core"],
  coveredSkillIds: [
    "ncert-g4-wondrous-world-how-things-work-core-sk-1-ask-how-it-works",
    "ncert-g4-wondrous-world-how-things-work-core-sk-2-describe-a-simple-mechanism",
  ],
  content: {
    objective:
      "Ask curious how-it-works questions about everyday objects, and describe simple mechanisms in plain words.",
    wonder: {
      prompt:
        "Pick something you use daily — a tap, a bicycle, a door latch, or a torch. What invisible steps happen between your action and the result?",
    },
    explore: {
      text: "Things work through parts that push, pull, turn, lift, open, close, or carry force. Asking 'How does it work?' starts an investigation. Describing a simple mechanism means naming parts and what each part does in order.",
      activity: {
        prompt:
          "Which approach investigates how a bicycle works best?",
        choices: [
          {
            id: "ask-describe",
            label:
              "Ask how pedals connect to the wheel, then describe: feet push pedals → chain moves → wheel turns",
            note: "Question plus ordered parts. That is mechanism thinking.",
          },
          {
            id: "magic",
            label: "Say it works by magic and stop looking",
            note: "Magic stops investigation. Mechanisms have parts you can name.",
          },
          {
            id: "break",
            label: "Break the bicycle so it cannot move anymore",
            note: "Breaking is not understanding. Careful looking is safer and kinder.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A mechanism is a way parts work together to do a job — open a door, pour water, roll a wheel.",
        "Good how-questions are specific: 'What moves first when I turn the tap?' beats 'Is this weird?'",
        "Simple mechanisms include levers (see-saw, bottle opener), wheels and axles (carts), pulleys (some wells), and screws (jar lids).",
        "Describing a mechanism uses order: input action → middle parts → output result.",
        "Safety first: investigate with eyes and gentle hands. Do not poke live wires or sharp tools without adult help.",
      ],
    },
    examples: [
      {
        caption: "Door latch",
        body: "You slide the latch. The bar moves across. The door stays shut because the bar blocks the frame.",
      },
      {
        caption: "Scissors",
        body: "Two levers share a pivot. Hands push handles; blades meet and cut.",
      },
      {
        caption: "Tap",
        body: "Turning the handle lifts or lowers a part inside so water can flow or stop.",
      },
    ],
    connection:
      "Repair workers, inventors, and curious children share the same first move: ask how it works, then watch the parts.",
    try: {
      prompt:
        "Choose one object at home. Write one how-question and a three-step description of how it works.",
      reveal:
        "Example: How does a bottle cap seal? Twist → screw threads pull the cap down → soft seal presses and stops spills.",
    },
    practice: [
      q(
        "g4e-hw-p1",
        "Which is a strong how-it-works question?",
        "When I press the torch switch, what path does the electricity follow to the bulb?",
        "Is the torch pretty?",
        "Can I throw the torch?",
        "a",
        "How-questions chase the chain of cause inside the object.",
        "Which question investigates the mechanism?",
        "Pretty and throwing skip the working parts.",
        {
          a: "You asked a mechanism question.",
          b: "Pretty is about looks, not working.",
          c: "Throwing is not investigating.",
        },
      ),
      q(
        "g4e-hw-p2",
        "Which description fits a simple wheel mechanism?",
        "push the cart → axle turns → wheels roll and the cart moves",
        "the cart flies because it wishes to",
        "wheels are only for decoration and never turn",
        "a",
        "Input, turning parts, and movement result make a clear mechanism story.",
        "What order of parts do you hear?",
        "Wishes and decoration-only claims skip physics.",
        {
          a: "You described the wheel chain.",
          b: "Wishing is not a mechanism.",
          c: "Wheels turn to move loads.",
        },
      ),
      explainQ(
        "g4e-hw-p3",
        "Describe how a see-saw works as a simple mechanism.",
        "A see-saw is a lever on a pivot. When one side goes down, the other side goes up because the plank turns around the middle support.",
        "Name the plank, the middle support, and the up-down trade.",
        "Both seats do not rise together.",
        ["lever|pivot|up|down|plank|middle|balance"],
      ),
    ],
    reasoning: [
      q(
        "g4e-hw-r1",
        "Why does naming parts help more than saying 'it just works'?",
        "Named parts let you predict, explain, and fix; 'just works' hides the chain",
        "Names make objects heavier",
        "Parts should stay secret forever",
        "a",
        "Language for parts turns mystery into a map you can share.",
        "What can you do once parts are named?",
        "Secrets block learning and repair.",
        {
          a: "You valued clear part language.",
          b: "Names do not change weight.",
          c: "Sharing how it works helps others.",
        },
      ),
      explainQ(
        "g4e-hw-r2",
        "A jar lid sticks. What how-question and mechanism idea might help before forcing hard?",
        "Ask how the screw threads hold the lid. Mechanism: twisting the right way loosens the threads so the lid can lift. Forcing might break the jar.",
        "Think screw and twist direction.",
        "Blind force can crack glass.",
        ["screw|twist|thread|turn|loosen|lid"],
      ),
    ],
    retrieve: [
      q(
        "g4e-hw-t1",
        "Describing a simple mechanism means...",
        "naming parts and saying what each does in order",
        "only drawing stars around the object",
        "refusing to look at moving pieces",
        "a",
        "Parts plus order equal a mechanism description.",
        "What two ingredients make the description?",
        "Stars and refusal skip the working story.",
        {
          a: "You defined mechanism talk.",
          b: "Decorations are not mechanisms.",
          c: "Looking is required.",
        },
      ),
      writeQ(
        "g4e-hw-t2",
        "Ask one how-it-works question about an everyday object, then name one part that moves.",
        [
          "how",
          "tap",
          "door",
          "wheel",
          "switch",
          "pedal",
          "handle",
          "turn",
          "move",
          "press",
        ],
        "Example: How does a door handle open the latch? Moving part: the handle or latch bar.",
        "Start with How..., then name a part.",
        "A question with no object is too vague.",
        ["how", "tap|door|wheel|switch|bike|torch|lid|handle|pedal|turn|move"],
      ),
    ],
    misconceptions: [
      {
        idea: "Only machines with motors have mechanisms.",
        correction:
          "Scissors, latches, taps, and see-saws are mechanisms too — no motor required.",
      },
      {
        idea: "If you cannot see inside, you cannot ask how it works.",
        correction:
          "You can still ask, watch inputs and outputs, and learn with safe diagrams or adult help.",
      },
    ],
    reflect: {
      prompt:
        "Which object will you investigate with a how-question this week?",
      keyIdeas: ["how|mechanism|parts"],
    },
    mastery: q(
      "g4e-hw-m1",
      "How Things Work trains you to...",
      "ask how questions and describe simple mechanisms",
      "memorise brand stickers only",
      "break objects to prove curiosity",
      "a",
      "Curiosity questions plus ordered part stories are the skills.",
      "Which pair matches the chapter?",
      "Stickers and breaking are not mechanism skills.",
      {
        a: "You named both skills.",
        b: "Stickers are not mechanisms.",
        c: "Careful looking beats breaking.",
      },
    ),
    masteryCriteria:
      "You can ask a clear how-it-works question and describe a simple mechanism with parts in order.",
    teach: {
      prompt:
        "Teach Ivshi how one everyday object works in three short steps.",
      keyIdeas: ["how|parts", "order|mechanism"],
    },
  },
});
