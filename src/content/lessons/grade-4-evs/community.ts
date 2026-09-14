import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade4EvsLesson } from "@/content/lessons/grade-4-evs/format";

export const livingTogetherLesson = grade4EvsLesson({
  conceptId: "ncert-g4-wondrous-world-living-together-core",
  title: "Living Together",
  domainTitle: "Community",
  nextConceptIds: [
    "ncert-g4-wondrous-world-exploring-neighbourhood-core",
  ],
  coveredSkillIds: [
    "ncert-g4-wondrous-world-living-together-core-sk-1-name-a-community-helper",
    "ncert-g4-wondrous-world-living-together-core-sk-2-describe-sharing-in-a-group",
  ],
  content: {
    objective:
      "Notice how people in a community share work and care, and name helpers whose jobs keep everyday life running.",
    wonder: {
      prompt:
        "If every adult stayed home and nobody swept streets, taught children, or sold vegetables for a whole week, what would break first in your neighbourhood — and why?",
    },
    explore: {
      text: "A community is people living near each other who need one another. Some grow food. Some keep water flowing. Some teach. Some heal. Sharing work and sharing care are how a place stays kind and useful.",
      activity: {
        prompt:
          "A festival is coming. The street needs cleaning, a banner needs hanging, and a sick neighbour needs medicine from the chemist. Which plan shows living together best?",
        choices: [
          {
            id: "share-jobs",
            label:
              "Different people take different jobs: some clean, someone hangs the banner, someone helps the neighbour",
            note: "You spotted sharing. One person need not do everything. Jobs and care can be split.",
          },
          {
            id: "one-hero",
            label: "One strong child does every job alone so others can rest",
            note: "Rest matters, but living together usually means many hands. One hero can get tired, and others miss a chance to help.",
          },
          {
            id: "ignore",
            label: "Skip the festival and hope problems vanish",
            note: "Hoping is not a plan. Communities notice needs and answer them together.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "People live in families, streets, villages, and towns. Together those places make a community.",
        "Community helpers do work that others use every day: teachers, doctors, nurses, vegetable sellers, bus drivers, sanitation workers, police, and firefighters.",
        "Sharing can mean tools, space, time, or knowledge. When children take turns on a swing, they are sharing. When neighbours lend a ladder, they are sharing too.",
        "Care is also work. Looking after an elder, watering a shared plant, or checking on a friend who is ill keeps a community warm.",
        "No helper works alone. A hospital needs cleaners, chemists, drivers, and cooks as well as doctors. Spotting the web of jobs is part of living together.",
      ],
    },
    examples: [
      {
        caption: "Morning street",
        body: "A milk van arrives. A sweeper clears leaves. A shop opens. Children walk to school. Many jobs happen before breakfast.",
      },
      {
        caption: "Shared tap",
        body: "If everyone fills buckets at once and nobody waits, the line becomes a fight. Taking turns is sharing in action.",
      },
      {
        caption: "Teacher and gardener",
        body: "A teacher helps minds grow. A gardener helps plants grow. Both are helpers with different tools.",
      },
    ],
    connection:
      "When you thank a bus conductor or a midday-meal cook, you are noticing the people who make your day possible.",
    try: {
      prompt:
        "List three community helpers you might meet between home and school. For each, say one need they help with.",
      reveal:
        "Examples: a traffic police officer (safe crossing), a shopkeeper (food or stationery), a doctor or nurse (health), a bus driver (travel), a sanitation worker (clean streets).",
    },
    practice: [
      q(
        "g4e-lt-p1",
        "Which person is a community helper whose work keeps streets usable?",
        "a sanitation worker who clears rubbish",
        "someone who only watches TV all day",
        "a cloud that makes shade",
        "a",
        "Sanitation workers clear waste so streets stay healthier and easier to use.",
        "Think of a job that serves many neighbours, not only one house.",
        "Helpers are people with roles, not weather or resting alone.",
        {
          a: "You named a helper who serves the street.",
          b: "Resting at home is not a community job.",
          c: "A cloud is not a person with a job.",
        },
      ),
      q(
        "g4e-lt-p2",
        "Four friends have one cricket bat. What shows sharing in a group?",
        "taking turns so each friend bats",
        "hiding the bat so nobody else can play",
        "breaking the bat into four pieces",
        "a",
        "Sharing often means turns and fairness, not destroying the thing you share.",
        "Ask: can everyone still use the bat?",
        "Hiding or breaking stops play instead of sharing it.",
        {
          a: "Turns keep the game fair.",
          b: "Hiding is keeping, not sharing.",
          c: "Broken pieces are not a usable bat.",
        },
      ),
      explainQ(
        "g4e-lt-p3",
        "Why might a community need both a doctor and a vegetable seller?",
        "A doctor helps when people are ill. A vegetable seller helps people get food for everyday strength. Different needs need different helpers.",
        "Name one need for health and one need for food.",
        "One helper cannot cover every need in a neighbourhood.",
        ["doctor|heal|ill|health", "food|vegetable|seller|nutrition|eat"],
      ),
    ],
    reasoning: [
      q(
        "g4e-lt-r1",
        "A village has a great teacher but no clean water. What is still missing for living well together?",
        "helpers and systems that bring safe water",
        "more homework only",
        "taller walls so nobody visits",
        "a",
        "Learning matters, but bodies also need safe water. Communities need many kinds of care.",
        "Which basic need is still unmet?",
        "Homework and walls do not replace water.",
        {
          a: "You saw that one helper is not enough for every need.",
          b: "Homework does not fix thirsty taps.",
          c: "Walls separate people; living together needs shared needs met.",
        },
      ),
      explainQ(
        "g4e-lt-r2",
        "A child says, 'I do not need anyone. I can do everything myself.' What would you gently ask them to notice?",
        "Ask who grew their food, who built their road, who taught them to read, or who keeps the street clean. Living together is already woven into ordinary days.",
        "Pick one thing they used today and ask who helped make it possible.",
        "Independence is good, but it sits on top of many helpers.",
        ["food|road|teacher|helper|clean|share|community"],
      ),
    ],
    retrieve: [
      q(
        "g4e-lt-t1",
        "A nurse is mainly a community helper for...",
        "health and care when people are unwell",
        "painting every house the same colour",
        "stopping the moon from rising",
        "a",
        "Nurses support health and care. That is their community role.",
        "Which need do clinics and hospitals serve?",
        "Nurses are not moon-controllers or house painters by job.",
        {
          a: "You matched the helper to health.",
          b: "Painting is a different kind of work.",
          c: "The moon rises without nursing help.",
        },
      ),
      writeQ(
        "g4e-lt-t2",
        "Name one community helper and one way people share in a group.",
        [
          "teacher",
          "doctor",
          "nurse",
          "driver",
          "seller",
          "sweeper",
          "police",
          "firefighter",
          "share",
          "turns",
          "help",
        ],
        "Any real helper plus a sharing idea works: teacher and taking turns; sweeper and cleaning together.",
        "Think of a job you see weekly, then a fair way to share.",
        "A made-up magic job is not a community helper.",
        ["teacher|doctor|nurse|driver|seller|sweeper|police|fire|helper", "share|turn|together|help"],
      ),
    ],
    misconceptions: [
      {
        idea: "Only famous people are helpers.",
        correction:
          "Quiet everyday jobs — sweeping, selling vegetables, driving buses — also hold a community up.",
      },
      {
        idea: "Sharing means giving away everything you own.",
        correction:
          "Sharing can be turns, tools, time, or care. You can share without emptying your bag.",
      },
    ],
    reflect: {
      prompt:
        "Which community helper will you notice with new eyes this week, and what need do they meet?",
      keyIdeas: ["helper", "need|care|share"],
    },
    mastery: q(
      "g4e-lt-m1",
      "Living together in a community mainly means...",
      "people share work and care so many needs can be met",
      "everyone must have the same job",
      "nobody should ever ask for help",
      "a",
      "Communities mix different jobs and kindness. Asking for help is part of living together.",
      "Think of many hands, not one identical job for all.",
      "Same job for everyone would leave other needs empty.",
      {
        a: "You held the big idea: shared work and care.",
        b: "Different jobs cover different needs.",
        c: "Asking for help is strength in a community.",
      },
    ),
    masteryCriteria:
      "You can name a community helper and give one example of sharing work or care in a group.",
    teach: {
      prompt:
        "Teach Ivshi using your street: name two helpers and one way neighbours share. Say why both matter.",
      keyIdeas: ["helper", "share|care|work"],
    },
  },
});

export const exploringNeighbourhoodLesson = grade4EvsLesson({
  conceptId: "ncert-g4-wondrous-world-exploring-neighbourhood-core",
  title: "Exploring Our Neighbourhood",
  domainTitle: "Neighbourhood",
  prerequisites: ["ncert-g4-wondrous-world-living-together-core"],
  nextConceptIds: ["ncert-g4-wondrous-world-nature-trail-core"],
  coveredSkillIds: [
    "ncert-g4-wondrous-world-exploring-neighbourhood-core-sk-1-map-a-familiar-route",
    "ncert-g4-wondrous-world-exploring-neighbourhood-core-sk-2-name-a-neighbourhood-place",
  ],
  content: {
    objective:
      "Observe places and routes in a neighbourhood, and map a familiar path with landmarks that help others find their way.",
    wonder: {
      prompt:
        "Could a visitor find your school if you only said 'go somewhere that way,' with no landmarks? What would you add to make the path clear?",
    },
    explore: {
      text: "A neighbourhood is the patch of places you can reach on foot or by a short ride: homes, shops, parks, schools, temples, clinics, and bus stops. Mapping a route means lining up landmarks in order so someone else can follow.",
      activity: {
        prompt:
          "You must guide a cousin from the bus stop to your home. Which directions help most?",
        choices: [
          {
            id: "landmarks",
            label:
              "From the bus stop, walk past the blue chemist, turn left at the peepal tree, then look for the red gate",
            note: "Landmarks in order make a map in words. Your cousin can check each sign.",
          },
          {
            id: "vague",
            label: "Walk until you feel you are close",
            note: "Feelings are not landmarks. A visitor cannot check 'feeling close' against the street.",
          },
          {
            id: "secret",
            label: "Do not tell anyone the way; surprise is more fun",
            note: "Exploring can be fun, but a useful route map helps people arrive safely.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Neighbourhood places meet different needs: shops for buying, parks for play, schools for learning, clinics for health.",
        "A route is a path from one place to another. Landmarks are memorable things you pass — a tree, a shop sign, a statue, a turn.",
        "A simple map can be a drawing or a spoken list. Order matters. 'Past the park, then the bakery' is different from 'past the bakery, then the park'.",
        "Observing means looking carefully: which road is busier? Where is shade? Where do people gather?",
        "Knowing your neighbourhood helps you stay safer, help visitors, and notice changes — a new shop, a closed well, a flowering tree.",
      ],
    },
    examples: [
      {
        caption: "School path",
        body: "Home → corner tea stall → zebra crossing → school gate. Three landmarks, one clear route.",
      },
      {
        caption: "Market morning",
        body: "The vegetable market is a neighbourhood place. So is the post office. Both serve many families.",
      },
      {
        caption: "Out-of-order landmarks",
        body: "If you say 'turn after the temple' but the temple comes later, a visitor gets lost. Order is part of the map.",
      },
    ],
    connection:
      "Delivery workers, new classmates, and grandparents visiting all depend on clear routes and named places.",
    try: {
      prompt:
        "Draw or list the route from your door to one nearby place. Include at least two landmarks in order.",
      reveal:
        "A strong answer names the start, landmarks in sequence, and the end — for example, door → bakery → park gate.",
    },
    practice: [
      q(
        "g4e-nb-p1",
        "Which is a neighbourhood place?",
        "the local park where children play",
        "the surface of Mars",
        "the centre of the Earth",
        "a",
        "A park nearby is part of the neighbourhood. Mars and Earth's centre are not local places you visit after school.",
        "Which place could you walk to this evening?",
        "Far-away or underground centres are not neighbourhood stops.",
        {
          a: "You picked a local place.",
          b: "Mars is not next door.",
          c: "You cannot walk to Earth's centre after homework.",
        },
      ),
      q(
        "g4e-nb-p2",
        "What makes a spoken route map useful?",
        "landmarks listed in the order you will meet them",
        "saying 'somewhere over there' twice",
        "naming only the colour of the sky",
        "a",
        "Order and landmarks turn a vague wave of the hand into a followable path.",
        "Could a stranger check each step?",
        "Sky colour does not mark a turn.",
        {
          a: "You valued order and landmarks.",
          b: "'Over there' is too vague.",
          c: "Sky colour is not a street mark.",
        },
      ),
      explainQ(
        "g4e-nb-p3",
        "Why might a closed shop still be a useful landmark on a route?",
        "People can still recognise the building or sign even if it is closed. A landmark is something memorable on the way, not only a place that is open today.",
        "Think of something you notice with your eyes while walking.",
        "Landmarks help finding the way, not only shopping.",
        ["recognise|notice|see|sign|building|remember|landmark"],
      ),
    ],
    reasoning: [
      q(
        "g4e-nb-r1",
        "Two maps to the same school start at different houses. Why can both be good maps?",
        "A good map matches the walker's starting place and landmarks along that path",
        "Only one true path exists in every town",
        "Maps must never mention shops",
        "a",
        "Routes depend on where you begin. Different starts need different landmark sequences.",
        "Where does each walker begin?",
        "Towns have many paths; shops are often useful landmarks.",
        {
          a: "You matched the map to the walker.",
          b: "Neighbourhoods have many useful routes.",
          c: "Shops often help people find turns.",
        },
      ),
      explainQ(
        "g4e-nb-r2",
        "A friend draws a map with no labels. How would you improve it?",
        "Add names or simple labels for landmarks and arrows or numbers to show order from start to end.",
        "What would a new visitor need to read on the page?",
        "A blank drawing hides which mark is the school gate.",
        ["label|name|arrow|order|start|landmark"],
      ),
    ],
    retrieve: [
      q(
        "g4e-nb-t1",
        "Mapping a familiar route mainly means...",
        "showing the path with landmarks in order",
        "memorising every car number plate",
        "ignoring turns so the walk stays mysterious",
        "a",
        "A route map is a clear path story: start, landmarks, end.",
        "What helps someone follow without guessing?",
        "Mystery walks are not helpful maps.",
        {
          a: "You stated the mapping idea.",
          b: "Number plates change and clutter the mind.",
          c: "Ignoring turns loses people.",
        },
      ),
      writeQ(
        "g4e-nb-t2",
        "Name one neighbourhood place and one landmark you would put on a route to it.",
        [
          "school",
          "park",
          "shop",
          "market",
          "clinic",
          "temple",
          "bus",
          "tree",
          "gate",
          "crossing",
        ],
        "Any local place plus a landmark works: school and zebra crossing; park and big banyan.",
        "Pick a place you can walk to, then something you pass.",
        "A place on another continent is not your neighbourhood.",
        ["school|park|shop|market|clinic|temple|bus|home", "tree|gate|crossing|shop|sign|landmark"],
      ),
    ],
    misconceptions: [
      {
        idea: "A map must be fancy and printed.",
        correction:
          "A clear sketch or spoken list with ordered landmarks is already a useful map.",
      },
      {
        idea: "Only roads matter; trees and shops do not count.",
        correction:
          "Trees, shops, and gates are often the easiest landmarks for walkers.",
      },
    ],
    reflect: {
      prompt:
        "Which landmark on your way to school would you teach a new classmate first?",
      keyIdeas: ["landmark|route|neighbourhood"],
    },
    mastery: q(
      "g4e-nb-m1",
      "You explore a neighbourhood well when you can...",
      "name places and describe a route with landmarks in order",
      "only memorise the colour of one wall",
      "refuse to help visitors find anything",
      "a",
      "Places plus ordered routes are the exploring skills for this chapter.",
      "What would help a visitor arrive?",
      "One wall colour is a tiny clue, not a full route.",
      {
        a: "You joined places and routes.",
        b: "One colour is not enough for a path.",
        c: "Helping visitors is part of knowing your neighbourhood.",
      },
    ),
    masteryCriteria:
      "You can name a neighbourhood place and map a short familiar route with at least two landmarks in order.",
    teach: {
      prompt:
        "Teach Ivshi the route from a bus stop or gate to one place near you. Use ordered landmarks.",
      keyIdeas: ["route|order", "landmark|place"],
    },
  },
});
