import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade5EnglishLesson } from "@/content/lessons/grade-5-english/format";

export const whatATankLesson = grade5EnglishLesson({
  conceptId: "ncert-g5-santoor-what-a-tank-core",
  title: "What a Tank!",
  domainTitle: "Literature",
  prerequisites: ["ncert-g5-santoor-the-frog-core"],
  nextConceptIds: ["ncert-g5-santoor-gilli-danda-core"],
  coveredSkillIds: [
    "ncert-g5-santoor-what-a-tank-core-sk-1-find-the-main-idea",
    "ncert-g5-santoor-what-a-tank-core-sk-2-connect-to-water-use",
  ],
  content: {
    objective:
      "Find the main idea of a tank-and-water text and connect it to how people use water wisely.",
    wonder: {
      prompt:
        "If a village tank holds rain for dry months, what idea matters more — the stone walls alone, or how people share and save the water inside?",
    },
    explore: {
      text: "Main idea is what the whole tank text is mostly about — not one pipe or one splash. Connecting to water use means naming a real way people collect, share, or save water.",
      activity: {
        prompt:
          "A passage describes a tank catching rain, neighbours drawing carefully, and crops drinking later. Which response finds the main idea and a water-use link?",
        choices: [
          {
            id: "idea-use",
            label:
              "Main idea: a tank stores water so a community can use it wisely later. Link: I will turn the tap off while soaping my hands",
            note: "Umbrella idea plus a doable water habit. That is the chapter pair.",
          },
          {
            id: "detail-only",
            label: "The tank wall had moss — with no idea about water use",
            note: "Moss is a detail. Main idea covers why the tank matters.",
          },
          {
            id: "waste",
            label: "Leave every tap running to celebrate the tank",
            note: "Waste fights the water-care message of tank texts.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Main idea answers: what is this tank text mostly trying to say?",
        "Details — depth, fish, steps, seasons — support the idea but are not the umbrella.",
        "Tanks often store shared water: rain caught for dry days, animals, gardens, and homes.",
        "Connecting to water use means naming how you or your community save, share, or respect water.",
        "A strong link is specific: 'I will...' or 'In our street we...' beats 'Water is nice.'",
      ],
    },
    examples: [
      {
        caption: "Main idea",
        body: "A tank keeps water ready so people can use it carefully when rain is scarce.",
      },
      {
        caption: "Detail",
        body: "The steps down to the water were cool in the shade — a supporting picture.",
      },
      {
        caption: "Water-use link",
        body: "I will collect leftover rinse water for plants after washing vegetables.",
      },
    ],
    connection:
      "School tanks, rooftop rain pipes, and closed taps at home all echo the same care idea.",
    try: {
      prompt:
        "Write the main idea of a tank text in one sentence. Then add one water-use connection starting with 'I will...' or 'We can...'",
      reveal:
        "Example: Main idea — tanks store shared water for later need. Connection — I will report a leaking tap so water is not wasted.",
    },
    practice: [
      q(
        "g5en-tk-p1",
        "Which sentence is most likely a main idea about a tank?",
        "A tank stores water so a community can use it when rain is scarce",
        "One frog sat on a single lily leaf",
        "Stone can be grey or brown",
        "a",
        "Main ideas state the big claim about the tank's purpose. One frog and stone colours are side details or other topics.",
        "Which line could title the whole passage?",
        "Tiny facts are not the umbrella.",
        {
          a: "You found an umbrella idea.",
          b: "A single frog is a detail elsewhere.",
          c: "Stone colour is not the tank's purpose.",
        },
      ),
      q(
        "g5en-tk-p2",
        "Which line connects the tank idea to water use?",
        "I will turn off the tap while brushing so less water runs unused",
        "Tanks appear in some dictionaries",
        "Someone once drew a circle on paper",
        "a",
        "A water-use link names a saving or sharing action. Dictionary facts and distant doodles are not use links.",
        "Where does water care appear?",
        "Definitions without use are not connections.",
        {
          a: "You linked the idea to water care.",
          b: "A definition is not a use link.",
          c: "A doodle skips water use.",
        },
      ),
      explainQ(
        "g5en-tk-p3",
        "Why does a tank text often talk about sharing as well as storing?",
        "Stored water only helps if people draw and share it fairly. Storage without care can still leave someone thirsty.",
        "What happens after water is caught?",
        "Walls alone do not finish the story of need.",
        ["share|store|fair|community|use|care"],
      ),
    ],
    reasoning: [
      q(
        "g5en-tk-r1",
        "Why might wasting tap water at home still matter when a village has a tank?",
        "Every wasted drop is water that cannot serve plants, animals, or people later",
        "Because tanks dislike bathrooms",
        "Because main ideas hate soap",
        "a",
        "Waste shrinks the shared supply. Moods of tanks and soap are not the reason.",
        "What does waste remove from later need?",
        "Objects do not hold grudges about soap.",
        {
          a: "You linked waste to shared need.",
          b: "Tanks do not dislike bathrooms.",
          c: "Ideas do not hate soap.",
        },
      ),
      explainQ(
        "g5en-tk-r2",
        "How can you tell a water-use detail from the main idea of a tank passage?",
        "Ask whether the sentence covers the whole message about storing and caring for water, or only one small picture. If the big claim still stands without it, it is likely a detail.",
        "Which sentence could head the whole page?",
        "Sparkly pictures can hide the umbrella claim.",
        ["whole|mostly|detail|store|care|title"],
      ),
    ],
    retrieve: [
      q(
        "g5en-tk-t1",
        "Finding the main idea of a tank text means...",
        "naming what the text is mostly about",
        "copying only the longest measurement",
        "ignoring why water is stored",
        "a",
        "Main idea is the mostly-about claim.",
        "What covers the whole text?",
        "Length alone does not make a main idea.",
        {
          a: "You defined main idea.",
          b: "Longest is not always central.",
          c: "Ignoring purpose skips the skill.",
        },
      ),
      writeQ(
        "g5en-tk-t2",
        "Write one main-idea sentence about a tank and one water-use connection.",
        [
          "tank",
          "store",
          "water",
          "rain",
          "share",
          "save",
          "tap",
          "I will",
          "community",
        ],
        "Example: Main idea — a tank keeps rainwater for shared later use. Connection — I will water plants with leftover rinse water.",
        "Umbrella idea + a sentence about real water care.",
        "Two vague wishes without a tank idea are incomplete.",
        ["tank|store|water|rain|share|community", "save|tap|I will|plant|reuse"],
      ),
    ],
    misconceptions: [
      {
        idea: "Main idea is always the first sentence about stone walls.",
        correction:
          "Walls may open the scene, but the main idea often names why the tank matters for water use.",
      },
      {
        idea: "Connecting to water use only means writing a poster slogan.",
        correction:
          "Name a real action you or your community can take — saving, sharing, or fixing leaks.",
      },
    ],
    reflect: {
      prompt:
        "Which water-use habit will you try after reading about the tank?",
      keyIdeas: ["water|save|tap|share"],
    },
    mastery: q(
      "g5en-tk-m1",
      "What a Tank! asks you to...",
      "find the main idea and connect it to water use",
      "only list fish species in a tank",
      "avoid any link to how water is used",
      "a",
      "Main idea plus water-use connection are the skills.",
      "Which pair matches the chapter?",
      "Fish lists without purpose are thin.",
      {
        a: "You joined both skills.",
        b: "Species lists skip the water claim.",
        c: "Water-use links are required here.",
      },
    ),
    masteryCriteria:
      "You can state a tank text's main idea and give one honest water-use connection.",
    teach: {
      prompt:
        "Teach Ivshi the main idea of a tank text and one way to use water carefully.",
      keyIdeas: ["main|tank|water", "save|share|tap"],
    },
  },
});

export const gilliDandaLesson = grade5EnglishLesson({
  conceptId: "ncert-g5-santoor-gilli-danda-core",
  title: "Gilli Danda",
  domainTitle: "Literature",
  prerequisites: ["ncert-g5-santoor-what-a-tank-core"],
  nextConceptIds: ["ncert-g5-santoor-decision-of-the-panchayat-core"],
  coveredSkillIds: [
    "ncert-g5-santoor-gilli-danda-core-sk-1-describe-the-game",
    "ncert-g5-santoor-gilli-danda-core-sk-2-notice-local-play",
  ],
  content: {
    objective:
      "Describe how gilli danda is played and notice how local play brings friends together outdoors.",
    wonder: {
      prompt:
        "If two sticks and open ground can fill an evening with laughter, what makes the game live — fancy gear, or clear turns and friends who share rules?",
    },
    explore: {
      text: "Describing a game names tools, turns, and aim. Noticing local play means seeing how neighbourhood games use simple things and shared rules to bring people outside together.",
      activity: {
        prompt:
          "Which note both describes gilli danda and notices local play?",
        choices: [
          {
            id: "describe-local",
            label:
              "Players strike a small stick (gilli) with a longer stick (danda); in our lane, friends still gather after school to take turns outdoors",
            note: "You named how it works and where local play lives. That is the chapter pair.",
          },
          {
            id: "gear-only",
            label: "Only factory bats matter; street sticks never count as play",
            note: "Local play often uses simple sticks and open ground.",
          },
          {
            id: "no-rules",
            label: "Games need no turns or aims — just shout forever",
            note: "Clear turns make the game fair and fun.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Gilli danda uses a short stick (gilli) and a longer stick (danda) to hit and chase play.",
        "A clear description names what you hit, how turns work, and what counts as a good strike or catch.",
        "Local play is play that grows in lanes, courtyards, and villages — often with homemade tools.",
        "Noticing local play means valuing outdoor turns, shared rules, and friends who teach each other.",
        "You do not need every rule on the first try — keep the spine: tools, turn, aim.",
      ],
    },
    examples: [
      {
        caption: "Game description",
        body: "Tap the gilli up, then strike it far with the danda while fielders try to stop the run.",
      },
      {
        caption: "Local play",
        body: "After homework, children mark a circle in the dust and take turns with the same two sticks.",
      },
      {
        caption: "Thin notice",
        body: "'Games exist' says nothing about how or where friends play.",
      },
    ],
    connection:
      "Hopscotch, lagori, and rope games also thrive on simple tools and neighbourhood turns.",
    try: {
      prompt:
        "In three sentences, describe gilli danda (tools + one turn). Then name one place where local play happens near you.",
      reveal:
        "Example: The gilli is small; the danda hits it into the air. Fielders try to catch or stop it. In our courtyard we still play after dusk in summer.",
    },
    practice: [
      q(
        "g5en-gd-p1",
        "Which line describes gilli danda clearly?",
        "Players use a short gilli and a longer danda to strike and take fielding turns",
        "Someone owns a blue pencil case",
        "Wednesday follows Tuesday",
        "a",
        "A game description names tools and play actions.",
        "Which sentence follows the match?",
        "Stationery and weekdays are not the game.",
        {
          a: "You described the game spine.",
          b: "A pencil case is not the play.",
          c: "Weekdays are not gameplay.",
        },
      ),
      q(
        "g5en-gd-p2",
        "Which line notices local play?",
        "Friends in the lane still gather outdoors and share homemade sticks for turns",
        "Only indoor screens can ever be play",
        "Rules should never be spoken aloud",
        "a",
        "Local play is outdoor, shared, and often simple. Screens-only and silent-forever claims miss it.",
        "Where do neighbours meet to play?",
        "Local play needs people and place.",
        {
          a: "You noticed neighbourhood play.",
          b: "Outdoor games count as play too.",
          c: "Shared rules help local play.",
        },
      ),
      explainQ(
        "g5en-gd-p3",
        "Why might a writer show homemade sticks instead of only shop bats?",
        "Homemade tools show that joy does not need costly gear. Local play can start with what a street already has.",
        "What message do simple tools send?",
        "Expensive gear alone is not the heart of the chapter.",
        ["simple|local|home|share|street|joy"],
      ),
    ],
    reasoning: [
      q(
        "g5en-gd-r1",
        "A retell lists stick colours but skips how a turn works. What is weak?",
        "It misses the actions that show how the game is played",
        "It needed even more colour names",
        "Game descriptions should never mention people",
        "a",
        "Turns and aims carry the game description.",
        "What do readers need to picture play?",
        "People's moves matter in play texts.",
        {
          a: "You spotted the missing play spine.",
          b: "More colours do not fix missing turns.",
          c: "Players belong in game descriptions.",
        },
      ),
      explainQ(
        "g5en-gd-r2",
        "How can noticing local play help a classroom conversation?",
        "Children bring real games from home. Sharing them builds respect for different streets and teaches listening as well as speaking.",
        "What do classmates learn from each other's play?",
        "Only textbook sports ignore neighbourhood wisdom.",
        ["share|listen|home|respect|local|friend"],
      ),
    ],
    retrieve: [
      q(
        "g5en-gd-t1",
        "Describing gilli danda means...",
        "naming tools, turns, and what players try to do",
        "listing every dust grain on the ground",
        "refusing to mention sticks at all",
        "a",
        "Description keeps the play spine clear.",
        "What must a listener understand?",
        "Endless dust lists hide the game.",
        {
          a: "You defined game description.",
          b: "Dust lists are not the spine.",
          c: "Sticks are central tools here.",
        },
      ),
      writeQ(
        "g5en-gd-t2",
        "Describe one turn in gilli danda and name one place of local play.",
        [
          "gilli",
          "danda",
          "strike",
          "hit",
          "turn",
          "field",
          "lane",
          "courtyard",
          "friends",
          "outdoors",
        ],
        "Example: I tap the gilli up and strike it with the danda while friends field. Local play — our lane after school.",
        "Play action + a real place.",
        "A place with no game action is incomplete here.",
        ["gilli|danda|strike|hit|turn|field", "lane|courtyard|street|outdoors|friends"],
      ),
    ],
    misconceptions: [
      {
        idea: "Local play only means famous stadium sports.",
        correction:
          "Lane games, courtyard games, and homemade tools are local play too.",
      },
      {
        idea: "Describing a game means copying every possible rule forever.",
        correction:
          "Start with tools, turns, and aim. Extra rules can come later.",
      },
    ],
    reflect: {
      prompt:
        "Which local game will you describe to a friend this week?",
      keyIdeas: ["game|local|play|friends"],
    },
    mastery: q(
      "g5en-gd-m1",
      "Gilli Danda asks you to...",
      "describe the game and notice local play",
      "only collect stick photographs",
      "avoid any outdoor or neighbourhood games",
      "a",
      "Description plus local-play noticing are the skills.",
      "Which pair matches the chapter?",
      "Photos without play sense are thin.",
      {
        a: "You joined both skills.",
        b: "Photographs need play description beside them.",
        c: "Local outdoor play is part of the chapter.",
      },
    ),
    masteryCriteria:
      "You can describe how gilli danda is played and name one way local play brings people together.",
    teach: {
      prompt:
        "Teach Ivshi how gilli danda works and where local play lives near you.",
      keyIdeas: ["gilli|danda|turn", "local|lane|friends"],
    },
  },
});

export const decisionOfThePanchayatLesson = grade5EnglishLesson({
  conceptId: "ncert-g5-santoor-decision-of-the-panchayat-core",
  title: "The Decision of the Panchayat",
  domainTitle: "Literature",
  prerequisites: ["ncert-g5-santoor-gilli-danda-core"],
  nextConceptIds: ["ncert-g5-santoor-vocation-core"],
  coveredSkillIds: [
    "ncert-g5-santoor-decision-of-the-panchayat-core-sk-1-find-the-problem",
    "ncert-g5-santoor-decision-of-the-panchayat-core-sk-2-talk-about-a-fair-decision",
  ],
  content: {
    objective:
      "Find the problem the panchayat must face and talk about what makes a decision fair.",
    wonder: {
      prompt:
        "When two neighbours disagree, what should a fair decision weigh first — who shouts louder, or who brings clear reasons and listens?",
    },
    explore: {
      text: "A problem is the clash or need the story must solve. A fair decision listens to sides, uses reasons, and aims for justice — not favourites or fear.",
      activity: {
        prompt:
          "Two farmers argue over a shared path. The panchayat hears both, checks the path use, and sets a turn rule. Which response finds the problem and a fair decision?",
        choices: [
          {
            id: "problem-fair",
            label:
              "Problem: both need the path without blocking each other. Fair decision: a clear turn rule after hearing both sides",
            note: "You named the clash and a reason-based fix. That is the chapter pair.",
          },
          {
            id: "loud",
            label: "Give the path to whoever shouts longest",
            note: "Volume is not fairness.",
          },
          {
            id: "no-listen",
            label: "Decide before anyone speaks",
            note: "Fair decisions need listening.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Finding the problem means naming what is stuck, disputed, or unfair at the start.",
        "Panchayat stories often show a village council listening before deciding.",
        "A fair decision weighs reasons, evidence, and care for people affected — not only power.",
        "Talking about fairness means explaining why a choice treats people justly.",
        "You can disagree with a decision and still practise naming problem and fairness clearly.",
      ],
    },
    examples: [
      {
        caption: "Problem",
        body: "Two families claim the same patch of grazing land — the clash blocks peace.",
      },
      {
        caption: "Fair decision talk",
        body: "Both were heard; the boundary was marked with witnesses so neither side is left guessing.",
      },
      {
        caption: "Unfair shortcut",
        body: "Choosing a cousin's side without hearing the other voice.",
      },
    ],
    connection:
      "Class monitors, family talks, and playground rules use the same problem-and-fairness pattern.",
    try: {
      prompt:
        "Name the problem in a short panchayat scene in one sentence. Then write one sentence on what would make the decision fair.",
      reveal:
        "Example: Problem — two shops want the same corner for a stall. Fairness — hear both plans and share time slots with clear reasons.",
    },
    practice: [
      q(
        "g5en-dp-p1",
        "Which line finds the problem in a panchayat story?",
        "Two neighbours both claim the right to use the same well first each morning",
        "The meeting mat was woven from grass",
        "Birds can nest in trees",
        "a",
        "A problem names the clash or need. Mats and birds are side details or other topics.",
        "What must the council solve?",
        "Decor and nature facts are not the dispute.",
        {
          a: "You named the clash.",
          b: "A mat is a setting detail.",
          c: "Birds are not the village dispute.",
        },
      ),
      q(
        "g5en-dp-p2",
        "Which line talks about a fair decision?",
        "Both sides spoke; the council used reasons and set a clear shared rule",
        "Pick the louder speaker and stop listening",
        "Hide the decision so no one knows why",
        "a",
        "Fairness needs listening and reasons. Loudness and secrecy fight fairness.",
        "What makes a choice just?",
        "Hidden or shout-based picks are not fair talk.",
        {
          a: "You described a fair process.",
          b: "Volume is not justice.",
          c: "Reasons should be open.",
        },
      ),
      explainQ(
        "g5en-dp-p3",
        "Why does a fair decision need more than 'I like this person'?",
        "Liking someone is not a public reason. Fairness asks for reasons others can understand, even if they hoped for a different outcome.",
        "What can a community check later?",
        "Private favourites leave others feeling unheard.",
        ["reason|listen|fair|both|justice|share"],
      ),
    ],
    reasoning: [
      q(
        "g5en-dp-r1",
        "Why might a panchayat hear both sides before deciding?",
        "Each side may hold facts the other missed; listening builds a fuller picture",
        "Because silence is forbidden in every village forever",
        "Because problems dislike being named",
        "a",
        "Listening gathers reasons. Absolute silence bans and mood of problems are not the point.",
        "What does hearing add?",
        "Problems need naming and hearing.",
        {
          a: "You explained why listening helps.",
          b: "The skill is careful hearing, not endless bans.",
          c: "Naming problems is part of the work.",
        },
      ),
      explainQ(
        "g5en-dp-r2",
        "How can talking about fairness help even when you are not on the council?",
        "You practise weighing reasons in class and play. That habit prepares you to speak up when a shared rule should be just.",
        "Where else do fair decisions appear?",
        "Fairness is not only for adults in a circle.",
        ["class|play|reason|rule|speak|just"],
      ),
    ],
    retrieve: [
      q(
        "g5en-dp-t1",
        "Finding the problem means...",
        "naming the clash or need the decision must face",
        "listing every chair in the meeting hall",
        "skipping what people disagree about",
        "a",
        "Problems are the stuck points stories must face.",
        "What must be solved?",
        "Furniture lists hide the clash.",
        {
          a: "You defined problem finding.",
          b: "Chairs are setting, not the dispute.",
          c: "Disagreement is the heart here.",
        },
      ),
      writeQ(
        "g5en-dp-t2",
        "Write one problem from a panchayat scene and one fair-decision reason.",
        [
          "problem",
          "disagree",
          "claim",
          "both",
          "listen",
          "reason",
          "fair",
          "share",
          "rule",
        ],
        "Example: Problem — two farmers claim one path. Fair decision — hear both and set shared turns with a clear reason.",
        "Clash + a fairness reason.",
        "A favourite without a reason is incomplete here.",
        ["problem|disagree|claim|path|land|well", "listen|reason|fair|share|both|rule"],
      ),
    ],
    misconceptions: [
      {
        idea: "A fair decision always makes everyone happy.",
        correction:
          "Fairness aims for justice and clear reasons. Someone may still feel sad and still be treated justly.",
      },
      {
        idea: "The problem is whoever talks first.",
        correction:
          "The problem is the clash or need — not the order of speakers.",
      },
    ],
    reflect: {
      prompt:
        "Where will you practise a fair decision this week — class, home, or play?",
      keyIdeas: ["fair|listen|reason|problem"],
    },
    mastery: q(
      "g5en-dp-m1",
      "The Decision of the Panchayat asks you to...",
      "find the problem and talk about a fair decision",
      "only decorate the meeting space",
      "avoid any talk of reasons or listening",
      "a",
      "Problem finding plus fair-decision talk are the skills.",
      "Which pair matches the chapter?",
      "Decor without justice talk is thin.",
      {
        a: "You joined both skills.",
        b: "Decor is not the goal.",
        c: "Reasons and listening matter here.",
      },
    ),
    masteryCriteria:
      "You can name the problem in a panchayat scene and explain what would make a decision fair.",
    teach: {
      prompt:
        "Teach Ivshi how to find the problem and what makes a panchayat decision fair.",
      keyIdeas: ["problem|clash", "fair|listen|reason"],
    },
  },
});

export const vocationLesson = grade5EnglishLesson({
  conceptId: "ncert-g5-santoor-vocation-core",
  title: "Vocation",
  domainTitle: "Literature",
  prerequisites: ["ncert-g5-santoor-decision-of-the-panchayat-core"],
  nextConceptIds: ["ncert-g5-santoor-glass-bangles-core"],
  coveredSkillIds: [
    "ncert-g5-santoor-vocation-core-sk-1-notice-the-speaker-s-wish",
    "ncert-g5-santoor-vocation-core-sk-2-read-a-stanza-aloud",
  ],
  content: {
    objective:
      "Notice what the speaker wishes to be or do in the poem, and practise reading a stanza aloud with clear voice.",
    wonder: {
      prompt:
        "When a child watches a hawker, a gardener, or a watchman, what wish flickers first — freedom of the street, the garden's open day, or the night watch's brave lamp?",
    },
    explore: {
      text: "A speaker's wish is what the 'I' in the poem longs to become or do. Reading a stanza aloud means giving the lines clear breath, pace, and feeling — not a race and not a mumble.",
      activity: {
        prompt:
          "Which response notices a wish and honours aloud reading?",
        choices: [
          {
            id: "wish-aloud",
            label:
              "The speaker wishes for a freer day's work like the hawker; I will read that stanza slowly so listeners hear the longing",
            note: "Wish plus thoughtful voice. That is poem reading.",
          },
          {
            id: "flat",
            label: "Ignore the wish and whisper every line at one flat speed",
            note: "Flat whispering hides both wish and stanza music.",
          },
          {
            id: "shout",
            label: "Shout the whole poem with no pause and no notice of who wants what",
            note: "Volume alone is not aloud craft, and wishes still matter.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "In 'Vocation', the speaker watches workers and wishes for their seeming freedom.",
        "Noticing the wish means saying what the speaker wants to be or do, and which lines show it.",
        "A stanza is a group of lines; aloud reading lets listeners feel the longing in the voice.",
        "Rhythm and pause help: do not swallow words, and do not rush past the wish.",
        "Different stanzas may hold different wishes — hawker, gardener, watchman — each worth clear voice.",
      ],
    },
    examples: [
      {
        caption: "Speaker's wish",
        body: "I wish I were a hawker, crying 'Bangles, crystal bangles!' through the lanes.",
      },
      {
        caption: "Aloud tip",
        body: "Lift the voice slightly on the wish words; pause at the end of the longing line.",
      },
      {
        caption: "Missed wish",
        body: "Only counting commas without saying what the speaker wants.",
      },
    ],
    connection:
      "Career day talks, 'when I grow up' chats, and song verses also carry wishes meant to be heard aloud.",
    try: {
      prompt:
        "Name one wish the speaker voices. Then read that stanza aloud twice — once flat, once with feeling. Notice the difference.",
      reveal:
        "Example wish: to be the gardener with no school bell. With feeling, the longing shows; flat reading feels like a list.",
    },
    practice: [
      q(
        "g5en-vo-p1",
        "Which line notices the speaker's wish?",
        "The speaker longs to live a freer day like the hawker or gardener",
        "The word 'the' appears in many poems",
        "Paper folds into airplanes",
        "a",
        "A wish is what the speaker longs for. Word counts and paper crafts are not the wish.",
        "What does the 'I' want?",
        "Grammar trivia is not a wish notice.",
        {
          a: "You named the longing.",
          b: "Word frequency is not a wish.",
          c: "Paper crafts skip the poem wish.",
        },
      ),
      q(
        "g5en-vo-p2",
        "What supports reading a stanza aloud well?",
        "clear words, steady breath, and feeling that matches the wish in the lines",
        "swallowing every word as fast as possible",
        "never opening your mouth",
        "a",
        "Aloud reading needs clarity and feeling. Racing or silence fights the skill.",
        "How should listeners hear the wish?",
        "Speed-swallowing hides the stanza.",
        {
          a: "You described strong aloud reading.",
          b: "Racing flattens the wish.",
          c: "Aloud reading needs voice.",
        },
      ),
      explainQ(
        "g5en-vo-p3",
        "Why might a wish poem sound stronger when the voice softens on longing lines?",
        "Longing is tender. A softer, clearer voice helps listeners feel the wish instead of only hearing a list of jobs.",
        "How does voice echo the speaker's feeling?",
        "One flat shout can hide the heart of the stanza.",
        ["wish|voice|feel|soft|long|listen"],
      ),
    ],
    reasoning: [
      q(
        "g5en-vo-r1",
        "Two children notice different wishes in different stanzas. Is that possible?",
        "Yes — each stanza may watch a different worker and voice a matching wish",
        "No — a poem allows only one wish forever in every stanza",
        "Wishes are only for adults, never speakers in poems",
        "a",
        "Vocation moves through several longed-for roles.",
        "Can each stanza open a new wish door?",
        "Child speakers can wish on the page.",
        {
          a: "You allowed stanza-by-stanza noticing.",
          b: "Poems often hold more than one wish.",
          c: "Young speakers voice wishes too.",
        },
      ),
      explainQ(
        "g5en-vo-r2",
        "How can practising a stanza aloud help a shy reader?",
        "Repeating with a clear path — breath, pause, wish words — gives the voice somewhere to go. Practice turns fear into a familiar road.",
        "What does rehearsal organise?",
        "Fear of aloud reading often comes from feeling lost in the lines.",
        ["practice|breath|pause|voice|path|wish"],
      ),
    ],
    retrieve: [
      q(
        "g5en-vo-t1",
        "Noticing the speaker's wish means...",
        "saying what the speaker longs to be or do",
        "counting only full stops",
        "skipping every line that shows longing",
        "a",
        "Wishes are the speaker's longed-for roles or actions.",
        "What does the 'I' want?",
        "Skipping longing skips the skill.",
        {
          a: "You defined wish noticing.",
          b: "Stops are punctuation, not wishes.",
          c: "Longing lines carry the wish.",
        },
      ),
      writeQ(
        "g5en-vo-t2",
        "Name one speaker wish and one tip for reading that stanza aloud.",
        [
          "wish",
          "hawker",
          "gardener",
          "watchman",
          "free",
          "aloud",
          "pause",
          "slow",
          "voice",
          "breath",
        ],
        "Example: Wish — to be the watchman with a lamp at night. Aloud tip — pause after the wish line and keep words clear.",
        "Wish + voice tip.",
        "A tip with no wish is incomplete here.",
        ["hawker|gardener|watchman|wish|free", "pause|slow|voice|breath|aloud|clear"],
      ),
    ],
    misconceptions: [
      {
        idea: "Aloud reading means shouting on every word.",
        correction:
          "Aloud reading is clear, paced, and felt — soft and strong by turn, not constant shouting.",
      },
      {
        idea: "The speaker's wish is always the teacher's wish.",
        correction:
          "Track what the poem's 'I' wants on the page, even if your own wish differs.",
      },
    ],
    reflect: {
      prompt:
        "Which vocation wish will you keep in your mind on the way home?",
      keyIdeas: ["wish|vocation|stanza"],
    },
    mastery: q(
      "g5en-vo-m1",
      "Vocation asks you to...",
      "notice the speaker's wish and read a stanza aloud",
      "only collect job posters",
      "avoid any aloud reading of the poem",
      "a",
      "Wish noticing plus aloud stanza reading are the skills.",
      "Which pair matches the chapter?",
      "Posters without voice are thin.",
      {
        a: "You joined both skills.",
        b: "Posters need poem voice beside them.",
        c: "Aloud reading is required here.",
      },
    ),
    masteryCriteria:
      "You can name a wish the speaker voices and read a stanza aloud with clear feeling.",
    teach: {
      prompt:
        "Teach Ivshi one wish from Vocation and how to read that stanza aloud.",
      keyIdeas: ["wish|hawker|gardener|watchman", "aloud|pause|voice"],
    },
  },
});

export const glassBanglesLesson = grade5EnglishLesson({
  conceptId: "ncert-g5-santoor-glass-bangles-core",
  title: "Glass Bangles",
  domainTitle: "Literature",
  prerequisites: ["ncert-g5-santoor-vocation-core"],
  nextConceptIds: [],
  coveredSkillIds: [
    "ncert-g5-santoor-glass-bangles-core-sk-1-follow-a-making-process",
    "ncert-g5-santoor-glass-bangles-core-sk-2-notice-a-human-detail",
  ],
  content: {
    objective:
      "Follow the steps of making glass bangles in order, and notice a human detail about the makers or wearers.",
    wonder: {
      prompt:
        "When molten glass becomes a bright circle for a wrist, what should a reader keep — only the furnace heat, or also the hands and hopes that shape each bangle?",
    },
    explore: {
      text: "A making process is a clear order of steps from raw material to finished object. A human detail is a person-centred moment — care, skill, risk, pride, or daily life around the craft.",
      activity: {
        prompt:
          "Which note both follows the process and notices a human detail?",
        choices: [
          {
            id: "process-human",
            label:
              "Glass is heated, shaped into rings, cooled and finished; a maker's careful eyes watch each colour so the bangle will fit a joyful wrist",
            note: "Steps in order plus a person-centred detail. That is the chapter pair.",
          },
          {
            id: "jumble",
            label: "Skip heating and start with wearing — order never matters",
            note: "Process texts need steps in a workable order.",
          },
          {
            id: "no-people",
            label: "Only list furnace temperatures and never mention makers",
            note: "Human details make craft texts come alive.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Following a making process means retelling steps in the order they must happen.",
        "Glass bangle texts often move from heat and shape to cool, finish, and wear.",
        "A human detail might be a worker's care, a family's craft, or a wearer's celebration.",
        "Process without people can feel like a machine list; people without process lose how the object is born.",
        "You can use sequence words: first, next, then, finally — and still leave room for one human moment.",
      ],
    },
    examples: [
      {
        caption: "Process spine",
        body: "Heat the glass, form the ring, cool it carefully, then polish or sort by colour and size.",
      },
      {
        caption: "Human detail",
        body: "Sweat on a maker's brow, or a child's delight when a new colour slips onto a wrist.",
      },
      {
        caption: "Broken process",
        body: "Wearing the bangle before the glass is shaped — steps out of order.",
      },
    ],
    connection:
      "Cooking recipes, clay pots, and paper craft also need ordered steps plus a human touch.",
    try: {
      prompt:
        "List three making steps for glass bangles in order. Underline one human detail you noticed in the text or imagined honestly from it.",
      reveal:
        "Example: Heat → shape rings → cool and finish. Human detail — the maker checks each ring so it will not crack on a festival morning.",
    },
    practice: [
      q(
        "g5en-gb-p1",
        "Which line follows a making process in a sensible order?",
        "Heat the glass, shape it into rings, then cool and finish before wearing",
        "Wear the bangle, then invent the furnace later",
        "Skip shaping and only name the colour pink",
        "a",
        "Process order starts with making, then finishing. Wearing first or skipping shape breaks the chain.",
        "What must happen before wearing?",
        "Out-of-order steps hide the craft.",
        {
          a: "You followed a workable order.",
          b: "Wearing cannot come before making.",
          c: "Colour alone is not the full process.",
        },
      ),
      q(
        "g5en-gb-p2",
        "Which is a human detail in a bangle text?",
        "A maker's careful hands guide the hot glass so a child can wear it proudly later",
        "Glass melts at high heat — with no person in the sentence",
        "Circles are round shapes in maths",
        "a",
        "Human details centre people. Bare heat facts and maths definitions skip the human craft.",
        "Where do people appear?",
        "Facts without people are not human details here.",
        {
          a: "You noticed a person-centred moment.",
          b: "Heat alone is process science, not the human detail.",
          c: "Maths circles skip the craft story.",
        },
      ),
      explainQ(
        "g5en-gb-p3",
        "Why do process texts bother to show makers, not only machines?",
        "Makers bring skill, risk, and care. Noticing them teaches respect for craft work and the people behind bright objects.",
        "What disappears if only furnaces appear on the page?",
        "Objects without people hide labour and pride.",
        ["maker|skill|care|people|craft|respect"],
      ),
    ],
    reasoning: [
      q(
        "g5en-gb-r1",
        "A retell lists every colour name but skips cooling. What is weak?",
        "It breaks the making order readers need to follow the craft",
        "It needed even more colour names",
        "Process retells should never mention steps",
        "a",
        "Missing a needed step weakens the process spine.",
        "What must stay in sequence?",
        "Steps are the point of process reading.",
        {
          a: "You spotted the broken process.",
          b: "More colours do not replace cooling.",
          c: "Steps belong in process retells.",
        },
      ),
      explainQ(
        "g5en-gb-r2",
        "How can noticing a human detail change how you see a bangle on a wrist?",
        "You remember hands, heat, and hope behind the shine. The object becomes a story of work, not only a bright circle.",
        "What new respect appears?",
        "Shine alone can hide the labour.",
        ["hands|work|maker|hope|story|respect"],
      ),
    ],
    retrieve: [
      q(
        "g5en-gb-t1",
        "Following a making process means...",
        "retelling the steps in the order they must happen",
        "naming only the prettiest colour forever",
        "refusing to mention heat or shaping",
        "a",
        "Process reading keeps workable order.",
        "What must a listener be able to follow?",
        "Colour alone is not the full craft chain.",
        {
          a: "You defined process following.",
          b: "Pretty colours are details, not the whole order.",
          c: "Heat and shaping are core steps.",
        },
      ),
      writeQ(
        "g5en-gb-t2",
        "Write three making steps in order and one human detail.",
        [
          "heat",
          "shape",
          "cool",
          "finish",
          "ring",
          "maker",
          "hands",
          "care",
          "wrist",
          "proud",
        ],
        "Example: Heat glass, shape rings, cool and finish. Human detail — a maker's careful eyes check each colour for a festival wrist.",
        "Ordered steps + a person-centred moment.",
        "Colours with no steps or people are incomplete here.",
        ["heat|shape|cool|finish|ring", "maker|hands|care|wrist|proud|child"],
      ),
    ],
    misconceptions: [
      {
        idea: "Process order never matters if the ending looks pretty.",
        correction:
          "Glass must be heated and shaped before it can be safely finished and worn.",
      },
      {
        idea: "Human details are only sad stories.",
        correction:
          "Pride, skill, care, and celebration are human details too.",
      },
    ],
    reflect: {
      prompt:
        "Which making step or human detail will you remember when you next see glass bangles?",
      keyIdeas: ["process|maker|bangle|care"],
    },
    mastery: q(
      "g5en-gb-m1",
      "Glass Bangles asks you to...",
      "follow a making process and notice a human detail",
      "only collect colour charts",
      "avoid any mention of makers or steps",
      "a",
      "Process order plus human detail are the skills.",
      "Which pair matches the chapter?",
      "Colour charts without craft sense are thin.",
      {
        a: "You joined both skills.",
        b: "Charts need process and people beside them.",
        c: "Makers and steps are required here.",
      },
    ),
    masteryCriteria:
      "You can retell glass-bangle making steps in order and name one human detail about the craft.",
    teach: {
      prompt:
        "Teach Ivshi the making steps for glass bangles and one human detail to notice.",
      keyIdeas: ["heat|shape|cool", "maker|care|hands"],
    },
  },
});
