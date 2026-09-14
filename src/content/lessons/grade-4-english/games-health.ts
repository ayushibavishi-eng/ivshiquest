import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade4EnglishLesson } from "@/content/lessons/grade-4-english/format";

export const fitBodyMindNationLesson = grade4EnglishLesson({
  conceptId: "ncert-g4-santoor-fit-body-mind-nation-core",
  title: "Fit Body, Fit Mind, Fit Nation",
  domainTitle: "Literature",
  prerequisites: ["ncert-g4-santoor-braille-core"],
  nextConceptIds: ["ncert-g4-santoor-the-lagori-champions-core"],
  coveredSkillIds: [
    "ncert-g4-santoor-fit-body-mind-nation-core-sk-1-find-a-key-idea",
    "ncert-g4-santoor-fit-body-mind-nation-core-sk-2-share-a-healthy-habit",
  ],
  content: {
    objective:
      "Find a key idea about fitness and wellbeing, and share one healthy habit you can practise.",
    wonder: {
      prompt:
        "If a nation of children slept well, played outdoors, and read with curiosity, what might change first — energy in class, kindness on the field, or both?",
    },
    explore: {
      text: "Key ideas in wellbeing texts often link body, mind, and community. A healthy habit is a repeatable action: sleep, play, water, hygiene, focus time.",
      activity: {
        prompt:
          "A text links exercise, rest, and kind focus. Which response finds a key idea and a habit?",
        choices: [
          {
            id: "idea-habit",
            label:
              "Key idea: a strong body and a calm mind support learning. Habit: I will play outdoors for twenty minutes after homework",
            note: "Idea plus a doable habit. That is the chapter pair.",
          },
          {
            id: "idea-only",
            label: "Fitness is nice — with no habit attached",
            note: "Habits turn ideas into daily practice.",
          },
          {
            id: "harm",
            label: "Skip sleep forever to prove toughness",
            note: "Skipping sleep fights fitness texts, not follows them.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A key idea is a central claim: fitness of body and mind helps people learn and live well together.",
        "Habits are small repeated actions — not one heroic day.",
        "Sharing a habit means naming what you will do, when, or how often.",
        "Nation here can mean our shared life: healthier children strengthen classrooms and communities.",
        "Reading fitness texts is practice in pulling ideas and turning them into personal plans.",
      ],
    },
    examples: [
      {
        caption: "Key idea",
        body: "Rest and movement both feed a ready mind.",
      },
      {
        caption: "Healthy habit",
        body: "Drink water at break; stretch after long sitting.",
      },
      {
        caption: "Weak habit share",
        body: "'Be perfect' is not a habit. 'Walk ten minutes after dinner' is.",
      },
    ],
    connection:
      "PE periods, midday meals, and bedtime routines are fitness texts living in the timetable.",
    try: {
      prompt:
        "Write one key idea from a fitness text and one habit you will try for three days.",
      reveal:
        "Example: Key idea — movement wakes the mind. Habit — I will skip rope for five minutes before evening study.",
    },
    practice: [
      q(
        "g4en-fb-p1",
        "Which line is a key idea about fitness?",
        "Caring for body and mind helps us learn and live with energy",
        "Shoelaces can be different colours",
        "Nations are only maps",
        "a",
        "Key ideas make a wellbeing claim. Lace colours and map-only definitions miss it.",
        "Which claim covers body and mind?",
        "Tiny object facts are not the key claim.",
        {
          a: "You found a central claim.",
          b: "Lace colour is a detail elsewhere.",
          c: "Nation here includes shared wellbeing, not only maps.",
        },
      ),
      q(
        "g4en-fb-p2",
        "Which is a healthy habit you could share?",
        "sleep on time so my mind is ready for school",
        "never drink water again",
        "stay awake all night every night",
        "a",
        "Sleep is a protective habit. Cutting water or sleep harms wellbeing.",
        "Which action helps a body and mind?",
        "Harmful extremes are not healthy habits.",
        {
          a: "You shared a helpful habit.",
          b: "Bodies need water.",
          c: "All-night wake fights rest.",
        },
      ),
      explainQ(
        "g4en-fb-p3",
        "Why does a specific habit beat 'I will be healthy someday'?",
        "Specific habits name an action you can start. Someday wishes have no door to walk through tomorrow morning.",
        "What could you check off a list?",
        "Foggy futures rarely become practice.",
        ["specific|action|start|tomorrow|habit|plan"],
      ),
    ],
    reasoning: [
      q(
        "g4en-fb-r1",
        "How can fitness of mind connect to fitness of body?",
        "Sleep, play, and movement often clear attention so learning feels lighter",
        "Minds never notice what bodies do",
        "Only machines need rest",
        "a",
        "Body care supports attention and mood.",
        "What happens after rest or play?",
        "Bodies and minds are linked for learners.",
        {
          a: "You linked body care to attention.",
          b: "Minds notice energy and rest.",
          c: "Children need rest too.",
        },
      ),
      explainQ(
        "g4en-fb-r2",
        "Why might a text mention 'nation' next to personal habits?",
        "Many healthy citizens make stronger shared spaces — schools, teams, neighbourhoods. Personal habits ripple outward.",
        "How do many small habits add up?",
        "Nation is not only a map outline.",
        ["share|school|community|together|many|habit"],
      ),
    ],
    retrieve: [
      q(
        "g4en-fb-t1",
        "Finding a key idea means...",
        "naming the central claim the text wants you to keep",
        "listing every verb without meaning",
        "ignoring wellbeing advice",
        "a",
        "Key ideas are central claims.",
        "What should stick after reading?",
        "Verb lists without meaning miss the claim.",
        {
          a: "You defined key idea.",
          b: "Bare verb lists are not ideas.",
          c: "Advice is the point of the text.",
        },
      ),
      writeQ(
        "g4en-fb-t2",
        "Write one key fitness idea and one healthy habit.",
        [
          "body",
          "mind",
          "sleep",
          "play",
          "water",
          "exercise",
          "rest",
          "habit",
          "energy",
          "learn",
        ],
        "Example: Idea — rest and play feed learning. Habit — I will sleep by a fixed time on school nights.",
        "Central claim + a repeatable action.",
        "A harmful dare is not a healthy habit.",
        ["body|mind|fit|energy|learn", "sleep|play|water|exercise|rest|walk"],
      ),
    ],
    misconceptions: [
      {
        idea: "Fitness means only sports medals.",
        correction:
          "Everyday movement, rest, hygiene, and calm focus count as fitness too.",
      },
      {
        idea: "Habits must be perfect from day one.",
        correction:
          "Small repeatable starts beat perfect plans that never begin.",
      },
    ],
    reflect: {
      prompt:
        "Which healthy habit will you track for three days?",
      keyIdeas: ["habit|sleep|play|water"],
    },
    mastery: q(
      "g4en-fb-m1",
      "Fit Body, Fit Mind, Fit Nation asks you to...",
      "find a key wellbeing idea and share a healthy habit",
      "only collect fitness posters",
      "avoid any personal practice",
      "a",
      "Key idea plus habit are the skills.",
      "Which pair matches the chapter?",
      "Posters without practice are thin.",
      {
        a: "You joined both skills.",
        b: "Posters need practice beside them.",
        c: "Personal practice is required.",
      },
    ),
    masteryCriteria:
      "You can state a key fitness idea and name one healthy habit you can actually try.",
    teach: {
      prompt:
        "Teach Ivshi one key idea about fitness and one habit to practise.",
      keyIdeas: ["idea|body|mind", "habit"],
    },
  },
});

export const lagoriChampionsLesson = grade4EnglishLesson({
  conceptId: "ncert-g4-santoor-the-lagori-champions-core",
  title: "The Lagori Champions",
  domainTitle: "Literature",
  prerequisites: ["ncert-g4-santoor-fit-body-mind-nation-core"],
  nextConceptIds: ["ncert-g4-santoor-hekko-core"],
  coveredSkillIds: [
    "ncert-g4-santoor-the-lagori-champions-core-sk-1-retell-the-game-story",
    "ncert-g4-santoor-the-lagori-champions-core-sk-2-name-a-teamwork-moment",
  ],
  content: {
    objective:
      "Retell a games story clearly and name a moment where teamwork changed the play.",
    wonder: {
      prompt:
        "In a pile of seven stones, when does a team win — when one star throws alone, or when fielders, stackers, and callers move like one mind?",
    },
    explore: {
      text: "Lagori (seven stones) stories mix rules, suspense, and teammates. Retelling the game story keeps what happened in play. A teamwork moment is when players help each other on purpose.",
      activity: {
        prompt:
          "Which note both retells play and spots teamwork?",
        choices: [
          {
            id: "team-moment",
            label:
              "When the stack fell, Mira tossed the ball to Raju while others rebuilt the pile — they shared jobs under pressure",
            note: "You retold action and named shared roles. That is teamwork spotting.",
          },
          {
            id: "solo",
            label: "Only the thrower matters; teammates should freeze",
            note: "Freezing teammates is the opposite of a teamwork story.",
          },
          {
            id: "no-game",
            label: "Games never have stories or teamwork",
            note: "Play is full of stories and shared moves.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Retelling a game story names the goal, a problem in play, and how it ended.",
        "You do not need every bounce — keep the spine: set-up, clash, finish.",
        "Teamwork moments show pass, cover, rebuild, encourage, or plan together.",
        "Champion stories often praise groups, not only one hero.",
        "Naming a teamwork moment trains you to notice cooperation in sport and class projects.",
      ],
    },
    examples: [
      {
        caption: "Game retell spine",
        body: "Stacks of stones, a throw to scatter, defenders rebuild while attackers try to stop them.",
      },
      {
        caption: "Teamwork moment",
        body: "One child blocks, another stacks, a third calls 'now!' — roles fit together.",
      },
      {
        caption: "Not teamwork",
        body: "Hogging the ball and blaming friends is anti-team play.",
      },
    ],
    connection:
      "Relay races, group projects, and kitchen chores use the same 'share the job' pattern.",
    try: {
      prompt:
        "Retell a short game moment you know in three sentences. Underline one teamwork action.",
      reveal:
        "Example: We needed seven stones up. I guarded while Sam stacked. Leena's call helped us finish before the ball returned — teamwork.",
    },
    practice: [
      q(
        "g4en-lg-p1",
        "Which line retells a game story spine?",
        "The pile fell, friends rebuilt it while others kept the ball away, and the team finished in time",
        "Someone owns a red water bottle",
        "Tuesday is a weekday",
        "a",
        "A game retell names play actions and outcome.",
        "Which sentence follows the match?",
        "Bottles and weekdays are not the play story.",
        {
          a: "You retold the play spine.",
          b: "A bottle is not the match story.",
          c: "Weekdays are not gameplay.",
        },
      ),
      q(
        "g4en-lg-p2",
        "Which is a teamwork moment?",
        "One player draws defenders so a friend can rebuild the stack",
        "Hiding the ball from your own team for fun",
        "Leaving the field when a friend needs cover",
        "a",
        "Teamwork helps the shared goal. Hiding from teammates and abandoning cover hurt the team.",
        "Which action helps the group aim?",
        "Anti-team moves are easy to spot.",
        {
          a: "You named cooperative play.",
          b: "Hiding from teammates breaks trust.",
          c: "Leaving cover abandons the group.",
        },
      ),
      explainQ(
        "g4en-lg-p3",
        "Why do game stories bother to show more than one player?",
        "Many roles create the win. Showing several players teaches that champions can be groups, not only lone stars.",
        "What disappears if only one player exists on the page?",
        "Solo spotlight can hide the teamwork lesson.",
        ["team|roles|together|group|share|help"],
      ),
    ],
    reasoning: [
      q(
        "g4en-lg-r1",
        "A retell lists every pebble colour but skips who passed the ball. What is weak?",
        "It misses actions that show how the team played",
        "It needed even more pebble colours",
        "Game retells should never mention people",
        "a",
        "People's moves carry the game story.",
        "What makes a sports retell move?",
        "Decoration without action is thin.",
        {
          a: "You valued play actions.",
          b: "More colours still skip the pass.",
          c: "People are central in game stories.",
        },
      ),
      explainQ(
        "g4en-lg-r2",
        "How can arguing after a miss still become a teamwork moment later?",
        "If players reset, plan a new role, and try again together, the repair is teamwork. Staying angry alone is not.",
        "What turns conflict into cooperation?",
        "Repair and replanning matter as much as perfect first tries.",
        ["plan|again|together|role|reset|help"],
      ),
    ],
    retrieve: [
      q(
        "g4en-lg-t1",
        "Naming a teamwork moment means...",
        "pointing to a time players helped each other toward a shared goal",
        "listing only the scoreboard numbers",
        "praising selfish play",
        "a",
        "Teamwork moments are cooperative actions.",
        "What are you pointing at?",
        "Scores without people miss the moment.",
        {
          a: "You defined teamwork spotting.",
          b: "Numbers alone skip the human move.",
          c: "Selfish play is not teamwork.",
        },
      ),
      writeQ(
        "g4en-lg-t2",
        "Retell a short game moment and name one teamwork action.",
        [
          "stack",
          "ball",
          "team",
          "pass",
          "help",
          "rebuild",
          "call",
          "friend",
          "win",
          "together",
        ],
        "Example: The stack fell; we rebuilt while a friend blocked the thrower. Teamwork — shared jobs.",
        "Play spine + cooperative action.",
        "A retell with only scores is incomplete here.",
        ["stack|ball|game|play|throw", "team|pass|help|together|friend|rebuild"],
      ),
    ],
    misconceptions: [
      {
        idea: "Only the final winner matters in a game story.",
        correction:
          "How teammates moved mid-game often carries the lesson.",
      },
      {
        idea: "Teamwork means never disagreeing.",
        correction:
          "Teams can disagree, then repair and plan. Silence is not the only cooperation.",
      },
    ],
    reflect: {
      prompt:
        "Where will you offer a teamwork moment this week — sport, class, or home?",
      keyIdeas: ["team|help|share"],
    },
    mastery: q(
      "g4en-lg-m1",
      "The Lagori Champions asks you to...",
      "retell the game story and name a teamwork moment",
      "only memorise stone counts",
      "ignore how players help each other",
      "a",
      "Retell plus teamwork are the skills.",
      "Which pair matches the chapter?",
      "Counts without people miss the story.",
      {
        a: "You held both skills.",
        b: "Stone counts are details, not the whole goal.",
        c: "Helping is central to the text.",
      },
    ),
    masteryCriteria:
      "You can retell a short game story spine and point to one clear teamwork moment.",
    teach: {
      prompt:
        "Teach Ivshi a mini lagori (or other game) retell with one teamwork spotlight.",
      keyIdeas: ["retell|game", "team|help"],
    },
  },
});

export const hekkoLesson = grade4EnglishLesson({
  conceptId: "ncert-g4-santoor-hekko-core",
  title: "Hekko",
  domainTitle: "Literature",
  prerequisites: ["ncert-g4-santoor-the-lagori-champions-core"],
  nextConceptIds: ["ncert-g4-santoor-the-swing-core"],
  coveredSkillIds: [
    "ncert-g4-santoor-hekko-core-sk-1-describe-the-game-idea",
    "ncert-g4-santoor-hekko-core-sk-2-compare-with-a-game-you-know",
  ],
  content: {
    objective:
      "Describe the idea of a traditional game and compare it with a game you already know.",
    wonder: {
      prompt:
        "If two games both need running, tagging, and quick thinking, what still makes them feel different — rules, space, or the joy of local names?",
    },
    explore: {
      text: "Describing a game idea means explaining the aim and a basic rule in plain words. Comparing means naming one likeness and one difference with a game you know.",
      activity: {
        prompt:
          "Which answer describes and compares well?",
        choices: [
          {
            id: "compare",
            label:
              "Hekko is a chasing/tag-style traditional game; like catch-catch it needs speed, but its local rules and calls make it its own",
            note: "Aim + likeness + difference. Strong compare talk.",
          },
          {
            id: "vague",
            label: "It is a game. Another thing is also a game.",
            note: "Too vague — no aim, no real compare.",
          },
          {
            id: "insult",
            label: "Old games are useless next to video games",
            note: "Compare should be curious, not dismissive.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A game idea includes the goal: what are players trying to do?",
        "Basic rules answer: how do you start, move, and win or get out?",
        "Comparisons need two sides: alike in… different in…",
        "Traditional games carry local names, spaces, and calls — comparing respects that identity.",
        "Describing in your own words helps you teach a friend who has never played.",
      ],
    },
    examples: [
      {
        caption: "Describe",
        body: "Players chase and tag under agreed rules; the fun is speed and quick turns.",
      },
      {
        caption: "Compare alike",
        body: "Like kho-kho or tag, it needs running and teamwork awareness.",
      },
      {
        caption: "Compare different",
        body: "The starting call, field shape, or team roles may differ from the game you know.",
      },
    ],
    connection:
      "Explaining local play to a cousin from another town is real-life compare-and-describe work.",
    try: {
      prompt:
        "Describe Hekko (or the text's game) in two sentences. Then compare it with one game you know: one alike, one different.",
      reveal:
        "Example: Hekko is a traditional chase game with local rules. Like tag, you run and dodge; unlike my video game, it needs open ground and friends in person.",
    },
    practice: [
      q(
        "g4en-hk-p1",
        "Which sentence best describes a game idea?",
        "Players chase and tag under rules to catch or escape",
        "Games exist on Earth",
        "Balls are sometimes round",
        "a",
        "A description names aim and action. Vague existence claims and object facts are thin.",
        "What are players trying to do?",
        "Existence and shape facts are not gameplay.",
        {
          a: "You described play aim.",
          b: "Existence is not a game description.",
          c: "Shape facts skip the rules.",
        },
      ),
      q(
        "g4en-hk-p2",
        "Which line compares two games usefully?",
        "Both need running, but Hekko uses local calls my indoor board game does not",
        "All games are identical in every rule",
        "Comparing games is impossible",
        "a",
        "Useful compares name alike and different. Identical-always and impossible claims block thinking.",
        "What is shared and what changes?",
        "Games can be compared thoughtfully.",
        {
          a: "You made a clear compare.",
          b: "Rules differ across games.",
          c: "Compare is a learnable skill.",
        },
      ),
      explainQ(
        "g4en-hk-p3",
        "Why include both a likeness and a difference when you compare games?",
        "Likeness shows connection; difference shows identity. Only sameness erases local flavour; only difference hides what skills transfer.",
        "What does each half of a compare do?",
        "One-sided compares are incomplete.",
        ["alike|same|different|both|compare"],
      ),
    ],
    reasoning: [
      q(
        "g4en-hk-r1",
        "A child says traditional games cannot compare with modern ones. What gentle reply fits?",
        "We can compare aims and skills — running, teamwork, rules — even when tools differ",
        "Agree that compare is always forbidden",
        "Say modern games have no rules",
        "a",
        "Compare looks at aims and skills across time.",
        "What can still match across eras?",
        "Rules exist in many modern games too.",
        {
          a: "You kept compare curious.",
          b: "Compare is allowed and useful.",
          c: "Modern games often have rich rules.",
        },
      ),
      explainQ(
        "g4en-hk-r2",
        "How does describing a game in your own words help a new player?",
        "Plain words teach the aim without assuming secret club knowledge. A new player can start safely and join the fun faster.",
        "What does a beginner need first?",
        "Jargon-only explanations can lock people out.",
        ["plain|aim|rule|beginner|teach|join"],
      ),
    ],
    retrieve: [
      q(
        "g4en-hk-t1",
        "Describing the game idea mainly means...",
        "explaining the aim and a basic way to play",
        "only listing the brand of shoes worn",
        "refusing to say how the game works",
        "a",
        "Aim plus basic play is the description core.",
        "What would a new player ask first?",
        "Shoe brands are not the game idea.",
        {
          a: "You defined game description.",
          b: "Shoes are gear, not the idea.",
          c: "Refusing explanation blocks play.",
        },
      ),
      writeQ(
        "g4en-hk-t2",
        "Describe the game idea and compare it with a game you know.",
        [
          "chase",
          "tag",
          "run",
          "rule",
          "like",
          "unlike",
          "team",
          "catch",
          "different",
          "same",
        ],
        "Example: Hekko is a chase game with local rules. Like tag, you run; unlike chess, you need a field and speed.",
        "Aim + alike + different.",
        "Saying only 'it is fun' is incomplete.",
        ["chase|tag|run|play|rule|aim", "like|unlike|same|different|compare"],
      ),
    ],
    misconceptions: [
      {
        idea: "Compare means deciding which game is better forever.",
        correction:
          "Compare can mean curious noticing of alike and different — not a final ranking.",
      },
      {
        idea: "If I have not played Hekko, I cannot describe it.",
        correction:
          "You can describe from the text's details, then compare with a game you do know.",
      },
    ],
    reflect: {
      prompt:
        "Which local or family game would you describe to a new friend next?",
      keyIdeas: ["game|describe|compare"],
    },
    mastery: q(
      "g4en-hk-m1",
      "Hekko asks you to...",
      "describe the game idea and compare it with a known game",
      "only memorise one score",
      "refuse all comparisons",
      "a",
      "Describe plus compare are the skills.",
      "Which pair matches the chapter?",
      "Scores alone and refusal miss the goals.",
      {
        a: "You held both skills.",
        b: "One score is a detail.",
        c: "Compare is required here.",
      },
    ),
    masteryCriteria:
      "You can describe a game's aim in plain words and give one likeness and one difference with another game.",
    teach: {
      prompt:
        "Teach Ivshi Hekko's idea and one clear compare with a game you know.",
      keyIdeas: ["describe|aim|rule", "like|unlike|compare"],
    },
  },
});
