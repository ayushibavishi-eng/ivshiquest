import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade5EnglishLesson } from "@/content/lessons/grade-5-english/format";

export const papasSpectaclesLesson = grade5EnglishLesson({
  conceptId: "ncert-g5-santoor-papas-spectacles-core",
  title: "Papa’s Spectacles",
  domainTitle: "Literature",
  nextConceptIds: ["ncert-g5-santoor-gone-with-the-scooter-core"],
  coveredSkillIds: [
    "ncert-g5-santoor-papas-spectacles-core-sk-1-retell-the-mix-up",
    "ncert-g5-santoor-papas-spectacles-core-sk-2-notice-humour",
  ],
  content: {
    objective:
      "Retell the funny mix-up of Papa’s missing spectacles and notice what makes the scene humorous.",
    wonder: {
      prompt:
        "Have you ever hunted for something that was already on your head, in your hand, or right under your nose? What made that moment funny later?",
    },
    explore: {
      text: "Humour stories often grow from a mix-up: someone looks everywhere except the obvious place. Retelling keeps the order of the hunt. Noticing humour means spotting the gap between what a character expects and what is true.",
      activity: {
        prompt:
          "Papa searches pockets, chairs, and corners for his spectacles. A child finally points to Papa’s own head. What makes the moment funny?",
        choices: [
          {
            id: "gap",
            label:
              "Papa looked hard everywhere except the place the spectacles already were",
            note: "You spotted the humour gap — effort meets the obvious place.",
          },
          {
            id: "mean",
            label: "The story is funny only if we laugh at Papa being foolish forever",
            note: "Gentle humour invites recognition, not lasting unkindness.",
          },
          {
            id: "glass",
            label: "Spectacles are glass, so every glass story is automatically funny",
            note: "Material facts do not create the mix-up. The search does.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A mix-up is a tangle of expectation and reality: Papa expects the spectacles to be lost somewhere in the house.",
        "Retelling the mix-up means naming the hunt in order — where he looks, how he feels, and how the truth appears.",
        "Humour often lives in the delay: readers (and the child in the story) see what Papa has not yet noticed.",
        "Noticing humour is not only laughing. It is saying what the joke leans on — hurry, worry, and the overlooked place.",
        "When you retell in your own words, keep the spine of events and the smile of the surprise ending.",
      ],
    },
    examples: [
      {
        caption: "Mix-up spine",
        body: "Papa needs his spectacles, searches many places, then finds them on his head.",
      },
      {
        caption: "Humour clue",
        body: "The longer the search, the funnier the simple answer becomes.",
      },
      {
        caption: "Gentle tone",
        body: "Family humour can feel warm when the mix-up is shared, not used to hurt.",
      },
    ],
    connection:
      "Lost keys, phones, and homework folders create the same home humour — the hunt, then the forehead moment.",
    try: {
      prompt:
        "Retell one real-life mix-up in three beats: hunt, feeling, discovery. Then name what made it funny.",
      reveal:
        "Example: I hunted for my pencil case, grumbled, then found it in my bag’s front pocket. Funny because I had carried it the whole time.",
    },
    practice: [
      q(
        "g5en-ps-p1",
        "Which line best retells the mix-up?",
        "Papa searched many places and then found the spectacles on his head",
        "Spectacles are always made of metal frames only",
        "Never look for anything at home again",
        "a",
        "A mix-up retell names the hunt and the surprising discovery.",
        "What happened, in order?",
        "Material lists and bans are not the story spine.",
        {
          a: "You kept the hunt-and-discovery spine.",
          b: "Frame materials skip the mix-up.",
          c: "Giving up on looking is not the chapter’s tale.",
        },
      ),
      q(
        "g5en-ps-p2",
        "What best shows the humour of the scene?",
        "Papa looked everywhere except the place the spectacles already were",
        "Papa never needed spectacles for reading or chopping",
        "Humour only means shouting at people who misplace things",
        "a",
        "Humour grows from the overlooked obvious place after a long search.",
        "Where is the surprise?",
        "Denying the need or shouting are not the gentle joke.",
        {
          a: "You named the humour gap.",
          b: "The story begins because Papa needs them.",
          c: "Shouting is not the humour skill here.",
        },
      ),
      explainQ(
        "g5en-ps-p3",
        "Why does retelling the search in order help a listener laugh with the story?",
        "Order builds the delay: first the need, then the frantic places, then the forehead surprise. Without order, the listener misses how long Papa hunted before the simple answer.",
        "Think first → then → finally.",
        "A jumble of places without the discovery flattens the joke.",
        ["order|first|then|search|head|surprise|delay"],
      ),
    ],
    reasoning: [
      q(
        "g5en-ps-r1",
        "A friend retells only the furniture colours and skips the discovery. What is missing?",
        "the mix-up ending that shows where the spectacles were",
        "more colour names for sofa cushions",
        "a list of unrelated animals",
        "a",
        "Colours can decorate a retell, but the discovery carries the humour.",
        "What makes the mix-up complete?",
        "Extra colours and animals do not replace the turning find.",
        {
          a: "You spotted the missing discovery.",
          b: "More colours still skip the joke.",
          c: "Animals are not Papa’s spectacles moment.",
        },
      ),
      explainQ(
        "g5en-ps-r2",
        "How can humour be kind in this story?",
        "We recognise a real human habit — looking past what is close. Laughing with Papa’s mix-up shares the surprise without needing to call him hopeless forever.",
        "Is the joke about recognition or about lasting unkindness?",
        "Mean labels are not required for the smile.",
        ["kind|share|recogn|habit|gentle|laugh with"],
      ),
    ],
    retrieve: [
      q(
        "g5en-ps-t1",
        "Noticing humour mainly means...",
        "spotting what makes the mix-up funny, such as the overlooked place",
        "listing every comma on the page",
        "hiding why anyone smiled",
        "a",
        "Humour noticing names the gap that creates the smile.",
        "What should a listener understand about the joke?",
        "Commas and secrecy are not humour skills.",
        {
          a: "You defined humour noticing.",
          b: "Punctuation lists are not the skill.",
          c: "Hiding the joke skips the chapter goal.",
        },
      ),
      writeQ(
        "g5en-ps-t2",
        "Retell Papa’s mix-up in two short sentences, then name what makes it funny.",
        [
          "search",
          "spectacles",
          "glasses",
          "head",
          "look",
          "find",
          "funny",
          "papa",
        ],
        "Example: Papa searched many places for his spectacles. They were on his head — funny because he carried them while hunting.",
        "Name the hunt, the find, and the humour gap.",
        "A joke with no mix-up retell is incomplete for this chapter.",
        ["search|look|hunt|spectacles|glasses", "head|find|funny|humour|overlook"],
      ),
    ],
    misconceptions: [
      {
        idea: "Retelling means copying every line of the chapter.",
        correction:
          "Retelling keeps the spine of the mix-up. Tiny decorations can stay out.",
      },
      {
        idea: "Noticing humour only means saying ‘it was funny’ with no reason.",
        correction:
          "Name the gap — the long search meeting the obvious place.",
      },
    ],
    reflect: {
      prompt:
        "Where might a gentle mix-up humour appear this week — home, class, or play?",
      keyIdeas: ["mix-up|humour|search|find"],
    },
    mastery: q(
      "g5en-ps-m1",
      "This chapter asks you to...",
      "retell the spectacles mix-up and notice what makes it humorous",
      "only memorise types of glass",
      "ignore why anyone smiled at the scene",
      "a",
      "Mix-up retell plus humour noticing are the chapter skills.",
      "Which pair matches the learning goals?",
      "Glass lists skip the human joke.",
      {
        a: "You joined both skills.",
        b: "Glass types are not the goal.",
        c: "Humour noticing is part of the work.",
      },
    ),
    masteryCriteria:
      "You can retell Papa’s spectacles mix-up in order and name what makes the scene humorous.",
    teach: {
      prompt:
        "Teach Ivshi a mini mix-up: the hunt, the discovery, and why it is funny.",
      keyIdeas: ["search|mix-up|retell", "humour|head|overlook"],
    },
  },
});

export const goneWithTheScooterLesson = grade5EnglishLesson({
  conceptId: "ncert-g5-santoor-gone-with-the-scooter-core",
  title: "Gone with the Scooter",
  domainTitle: "Literature",
  prerequisites: ["ncert-g5-santoor-papas-spectacles-core"],
  nextConceptIds: ["ncert-g5-santoor-the-rainbow-core"],
  coveredSkillIds: [
    "ncert-g5-santoor-gone-with-the-scooter-core-sk-1-sequence-events",
    "ncert-g5-santoor-gone-with-the-scooter-core-sk-2-describe-a-character",
  ],
  content: {
    objective:
      "Sequence the scooter adventure’s events and describe a character from what they do and choose.",
    wonder: {
      prompt:
        "If a found ball turned a quiet afternoon into a playground game — and then flew into a scooter basket — which moment would you tell first, and why?",
    },
    explore: {
      text: "Sequencing means lining up what happened: first… then… finally… Character description grows from actions and choices, not only from labels. Gopi’s honesty and the friends’ play both leave clues.",
      activity: {
        prompt:
          "Gopi finds a hockey ball, seeks its owner, plays with friends, and then the ball rides away in a scooter basket. Which response sequences and describes best?",
        choices: [
          {
            id: "seq-char",
            label:
              "First Gopi finds and asks around; then they play; finally the ball leaves on a scooter — Gopi chooses honesty over keeping it",
            note: "You ordered the events and used a choice to describe Gopi.",
          },
          {
            id: "shuffle",
            label: "Order never matters; mix find, scooter, and play any way you like",
            note: "Listeners need sequence to follow cause and surprise.",
          },
          {
            id: "label-only",
            label: "Just say ‘Gopi is nice’ with no action to show why",
            note: "Description is stronger when actions prove the trait.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Event sequence is the spine of an adventure: find → decide → play → surprise exit.",
        "Signal words help: first, next, after that, finally.",
        "A character description answers: what did this person choose when they could have chosen otherwise?",
        "Gopi could have kept the ball quietly. Asking friends and playing fairly shows care and fairness.",
        "The scooter moment is a turn in the plot — sudden, funny, and memorable — but it still sits at the end of a clear chain.",
      ],
    },
    examples: [
      {
        caption: "Sequence",
        body: "Garden find → rest and plan → playground questions → match → ball into scooter basket.",
      },
      {
        caption: "Character from action",
        body: "Gopi looks for an owner instead of claiming the ball as a secret prize.",
      },
      {
        caption: "Friends in play",
        body: "Passing, hitting, and chasing show teamwork and energy, even when the ball escapes.",
      },
    ],
    connection:
      "Sports days, shared toys, and street games all ask the same skills: what happened in order, and who showed care?",
    try: {
      prompt:
        "Sequence one playground or home adventure in four beats. Then describe one person with one action-based trait.",
      reveal:
        "Example: Found a shuttle → called friends → played → lost it over the wall. Friend Meena stayed to help search — patient and loyal.",
    },
    practice: [
      q(
        "g5en-gs-p1",
        "Which order best sequences the story?",
        "Find the ball, ask friends, play, then watch it leave on a scooter",
        "Scooter first, then find the ball under a pillow at night",
        "Only the scooter matters; skip every earlier beat",
        "a",
        "Sequence keeps find → ask → play → scooter exit.",
        "What came before the surprise ride?",
        "Scrambled starts and skipped beginnings break the chain.",
        {
          a: "You lined up the adventure.",
          b: "That order invents a different tale.",
          c: "Earlier beats earn the surprise.",
        },
      ),
      q(
        "g5en-gs-p2",
        "Which sentence best describes Gopi from his choices?",
        "Gopi looks for an owner instead of quietly keeping the ball",
        "Gopi is simply ‘a boy’ with no choices shown",
        "Gopi never speaks to friends and never plays",
        "a",
        "Actions reveal character: honesty and fairness appear in seeking an owner.",
        "What did Gopi choose to do?",
        "Empty labels and opposite plot points do not describe him.",
        {
          a: "You used an action as evidence.",
          b: "A blank label skips the skill.",
          c: "That plot does not match Gopi’s choices.",
        },
      ),
      explainQ(
        "g5en-gs-p3",
        "Why does sequence help a listener understand the scooter surprise?",
        "If the listener knows the find, the questions, and the lively match first, the ball landing in a scooter basket feels sudden and funny. Without earlier beats, the exit floats with no setup.",
        "What must arrive before a surprise lands well?",
        "Surprises need a chain of earlier events.",
        ["sequence|first|then|before|setup|surprise|order"],
      ),
    ],
    reasoning: [
      q(
        "g5en-gs-r1",
        "A retell jumps from ‘Gopi found a ball’ straight to ‘everyone laughed at the scooter.’ What is thin?",
        "the middle events that show asking, playing, and how the ball flew",
        "more unrelated weather reports",
        "a list of scooter brands only",
        "a",
        "Middle events carry cause: play and the hit that send the ball away.",
        "Which part of the chain is missing?",
        "Weather and brand lists are not the missing spine.",
        {
          a: "You named the missing middle.",
          b: "Weather still skips the playground chain.",
          c: "Brands do not replace events.",
        },
      ),
      writeQ(
        "g5en-gs-r2",
        "Describe one friend from the playground scene using one action and one trait word.",
        [
          "play",
          "pass",
          "hit",
          "laugh",
          "friend",
          "honest",
          "lively",
          "fair",
          "gopi",
          "team",
        ],
        "Example: Jay hit the ball hard — energetic and bold in the match.",
        "Pair a clear action with a trait it shows.",
        "A trait with no action is weak evidence here.",
        ["action|play|pass|hit|ask|run", "trait|honest|fair|lively|kind|bold|energy"],
      ),
    ],
    retrieve: [
      q(
        "g5en-gs-t1",
        "Sequencing events mainly means...",
        "lining up what happened in a clear first-then-finally order",
        "listing every colour of every leaf nearby",
        "hiding the order so listeners guess forever",
        "a",
        "Sequence is ordered storytelling.",
        "What should a listener be able to follow?",
        "Colour piles and secrecy fight the skill.",
        {
          a: "You defined sequencing.",
          b: "Leaf colours are not the event spine.",
          c: "Clear order is the goal.",
        },
      ),
      explainQ(
        "g5en-gs-t2",
        "How do Gopi’s choices help you describe him?",
        "Choices are evidence. Seeking an owner and sharing play show honesty and friendliness more clearly than a bare label like ‘good boy.’",
        "What did he do when he could have kept silent?",
        "Labels without actions are thin descriptions.",
        ["choice|honest|owner|share|action|describe|evidence"],
      ),
    ],
    misconceptions: [
      {
        idea: "Sequence means naming every tiny detail in the grass.",
        correction:
          "Sequence keeps the main beats that change the situation.",
      },
      {
        idea: "Character description is only a single adjective with no proof.",
        correction:
          "Pair the trait with an action or choice from the story.",
      },
    ],
    reflect: {
      prompt:
        "Which character choice from this adventure would you want a friend to notice in you?",
      keyIdeas: ["sequence|character|choice|honest"],
    },
    mastery: q(
      "g5en-gs-m1",
      "Gone with the Scooter asks you to...",
      "sequence the adventure’s events and describe a character from actions",
      "only memorise scooter parts",
      "ignore who chose what and when",
      "a",
      "Sequence plus character description are the chapter skills.",
      "Which pair matches the goals?",
      "Parts lists skip the story people.",
      {
        a: "You held both skills.",
        b: "Scooter parts are not the goal.",
        c: "Choices and order matter here.",
      },
    ),
    masteryCriteria:
      "You can sequence the main scooter-adventure events and describe a character using an action-based trait.",
    teach: {
      prompt:
        "Teach Ivshi the adventure in order, then describe one character with one proving action.",
      keyIdeas: ["first|then|finally", "character|action|trait"],
    },
  },
});

export const theRainbowLesson = grade5EnglishLesson({
  conceptId: "ncert-g5-santoor-the-rainbow-core",
  title: "The Rainbow",
  domainTitle: "Literature",
  prerequisites: ["ncert-g5-santoor-gone-with-the-scooter-core"],
  nextConceptIds: ["ncert-g5-santoor-the-wise-parrot-core"],
  coveredSkillIds: [
    "ncert-g5-santoor-the-rainbow-core-sk-1-find-an-image",
    "ncert-g5-santoor-the-rainbow-core-sk-2-connect-to-observation",
  ],
  content: {
    objective:
      "Find a vivid image in the rainbow poem and connect it to something you have observed in the real sky or after rain.",
    wonder: {
      prompt:
        "After rain, when a coloured arc hangs between earth and sky, which comparison would you choose — a bridge, a bow, a road of light — and what have your own eyes seen?",
    },
    explore: {
      text: "Poems paint with images: pictures made of words. Finding an image means naming the comparison or scene the poet shows. Connecting to observation means linking that picture to something you have really watched.",
      activity: {
        prompt:
          "The poem sets the rainbow beside boats, ships, and bridges, then prefers the sky’s bright bow. Which response finds an image and connects it outward?",
        choices: [
          {
            id: "image-obs",
            label:
              "The rainbow as a lovely bridge or bow in the sky — like the arc I once saw after a monsoon shower",
            note: "You named the poem’s picture and joined it to a real sight.",
          },
          {
            id: "no-image",
            label: "Poems never make pictures; they only list spelling rules",
            note: "Images are the heart of this poem’s craft.",
          },
          {
            id: "no-eyes",
            label: "Never connect a poem to anything you have seen outside",
            note: "Observation deepens the image; it does not spoil it.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "An image is a word-picture: the rainbow as a bow, a bridge of colours, a path between earth and sky.",
        "Finding an image means quoting or paraphrasing the picture the poem offers, not only naming the topic ‘rainbow.’",
        "Observation is your outdoor evidence: wet streets, clearing clouds, and a curved band of colour.",
        "Connecting poem to life answers: when have my eyes met something like this?",
        "Strong readers hold both — the crafted image on the page and the living sky that taught them what a rainbow looks like.",
      ],
    },
    examples: [
      {
        caption: "Image",
        body: "A rainbow compared to a bridge more lovely than river bridges — a picture of grace in the air.",
      },
      {
        caption: "Observation",
        body: "After rain, sunlight returns and colours appear opposite the sun — a sight many children know.",
      },
      {
        caption: "Link",
        body: "The poem’s ‘bow’ matches the curved shape you see when the sky clears.",
      },
    ],
    connection:
      "Weather walks, balcony sky-watching, and monsoon evenings all feed the same image-and-observation habit.",
    try: {
      prompt:
        "Name one image from the poem (or a rainbow description). Then write one sentence about a real sky moment it reminds you of.",
      reveal:
        "Example: Image — a bridge of colours in the air. Observation — after yesterday’s rain I saw violet and orange above the trees.",
    },
    practice: [
      q(
        "g5en-rb-p1",
        "Which line best finds an image from the poem’s world?",
        "the rainbow as a bright bow or lovely bridge between earth and sky",
        "rainbows are never mentioned in any poem anywhere",
        "only the dictionary definition of the word ‘river’",
        "a",
        "An image is the word-picture — bow, bridge, coloured arc.",
        "Which choice paints a scene?",
        "Denials and bare dictionary lines skip the poetic picture.",
        {
          a: "You found a vivid image.",
          b: "The poem centres on the rainbow picture.",
          c: "A lone definition is not the poem’s image.",
        },
      ),
      q(
        "g5en-rb-p2",
        "Connecting to observation means...",
        "linking the poem’s picture to something you have seen in the real world",
        "refusing to look at skies ever again",
        "copying only punctuation marks from the page",
        "a",
        "Observation joins crafted words to lived sight.",
        "What do your eyes add?",
        "Avoiding skies and punctuation drills miss the link.",
        {
          a: "You defined the observation link.",
          b: "Sky-watching feeds the skill.",
          c: "Punctuation alone is not observation.",
        },
      ),
      explainQ(
        "g5en-rb-p3",
        "Why might a poet compare a rainbow to a bridge?",
        "A bridge connects two sides; a rainbow seems to join earth and sky in a graceful curve. The comparison helps a reader see shape and wonder together.",
        "What does a bridge do that a rainbow seems to do?",
        "Any comparison needs a shared shape or job.",
        ["bridge|connect|earth|sky|curve|shape|compare"],
      ),
    ],
    reasoning: [
      q(
        "g5en-rb-r1",
        "A classmate says ‘rainbow’ is enough and never names bow, bridge, or colour. What is thin?",
        "the specific image the poem builds beyond the bare topic word",
        "more lists of scooter brands",
        "a demand to stop reading poems",
        "a",
        "Topic words are starts; images are the crafted pictures.",
        "What should replace a bare topic label?",
        "Brands and quitting are not literary fixes.",
        {
          a: "You asked for a fuller image.",
          b: "Scooter brands are off-topic here.",
          c: "Poems invite closer looking, not quitting.",
        },
      ),
      writeQ(
        "g5en-rb-r2",
        "Write one poem image and one real-world observation it matches.",
        [
          "rainbow",
          "bow",
          "bridge",
          "sky",
          "colour",
          "rain",
          "arc",
          "after",
          "cloud",
          "light",
        ],
        "Example: Image — a colourful bow in the sky. Observation — after rain I saw an arc above the wet field.",
        "Pair a word-picture with a sight you know.",
        "An observation with no image is incomplete for this chapter.",
        ["bow|bridge|arc|colour|image|rainbow", "rain|sky|saw|after|cloud|observe"],
      ),
    ],
    retrieve: [
      q(
        "g5en-rb-t1",
        "Finding an image mainly means...",
        "spotting a vivid word-picture the poem creates",
        "counting only the letters in the title",
        "skipping every descriptive line on purpose",
        "a",
        "Images are the ear-and-eye pictures on the page.",
        "What should a reader catch?",
        "Letter counts and skipped lines miss the craft.",
        {
          a: "You defined image-finding.",
          b: "Title letter counts are not the skill.",
          c: "Descriptive lines carry the pictures.",
        },
      ),
      explainQ(
        "g5en-rb-t2",
        "How does connecting a poem to your own observation make the reading richer?",
        "Your memory of real colour and weather gives the poem’s words a place to land. The page and the sky start talking to each other, so the image feels lived, not only printed.",
        "What do your eyes lend the poem?",
        "Keeping poem and world forever separate flattens both.",
        ["observe|real|sky|memory|rich|connect|see"],
      ),
    ],
    misconceptions: [
      {
        idea: "An image is only a drawing printed beside the poem.",
        correction:
          "In literature, an image is also a picture made of words.",
      },
      {
        idea: "Observation means inventing weather that never happened.",
        correction:
          "Use a real sight or a carefully remembered one — honesty keeps the link strong.",
      },
    ],
    reflect: {
      prompt:
        "Which sky image from today will you watch for the next time rain clears?",
      keyIdeas: ["image|rainbow|observe|sky"],
    },
    mastery: q(
      "g5en-rb-m1",
      "The Rainbow asks you to...",
      "find a vivid image and connect it to something you have observed",
      "ignore every picture the poem paints",
      "only memorise boat engine parts",
      "a",
      "Image-finding plus observation links are the chapter skills.",
      "Which pair matches the goals?",
      "Ignoring pictures skips the poem’s craft.",
      {
        a: "You joined both skills.",
        b: "Images are central here.",
        c: "Engine parts are not the goal.",
      },
    ),
    masteryCriteria:
      "You can name a vivid image from the rainbow poem and link it to a real observation.",
    teach: {
      prompt:
        "Teach Ivshi one rainbow image and one outdoor observation that matches it.",
      keyIdeas: ["image|bow|bridge", "observe|rain|sky"],
    },
  },
});

export const theWiseParrotLesson = grade5EnglishLesson({
  conceptId: "ncert-g5-santoor-the-wise-parrot-core",
  title: "The Wise Parrot",
  domainTitle: "Literature",
  prerequisites: ["ncert-g5-santoor-the-rainbow-core"],
  nextConceptIds: ["ncert-g5-santoor-the-frog-core"],
  coveredSkillIds: [
    "ncert-g5-santoor-the-wise-parrot-core-sk-1-retell-the-turning-point",
    "ncert-g5-santoor-the-wise-parrot-core-sk-2-say-what-the-tale-suggests",
  ],
  content: {
    objective:
      "Retell the turning point of the wise-parrot tale and say what the story suggests about freedom and cleverness.",
    wonder: {
      prompt:
        "If a golden cage came with food and songs but no open sky, what would a bird long for most — comfort, company, or freedom — and how might a clever message travel without words?",
    },
    explore: {
      text: "A turning point is the moment the story flips: here, a silent forest signal becomes a plan for escape. Saying what the tale suggests means naming the idea it leaves — often about freedom, wisdom, and what gifts cannot replace.",
      activity: {
        prompt:
          "A caged parrot hears that a wild parrot fell at a greeting, then falls too, and flies when placed outside. What is strongest?",
        choices: [
          {
            id: "turn-suggest",
            label:
              "The fall-and-fly moment is the turn; the tale suggests freedom can matter more than a fancy cage",
            note: "You named the turning point and a clear suggestion.",
          },
          {
            id: "gold-only",
            label: "Only the gold of the cage matters; freedom is never the idea",
            note: "The escape shows the sky was the deeper need.",
          },
          {
            id: "no-turn",
            label: "Stories never have turning points; endings arrive from nowhere",
            note: "Turning points grow from earlier choices and signals.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The merchant offers gifts; the parrot asks for greetings to jungle friends — a wish that sets the plot moving.",
        "In the forest, a wild parrot falls when the greeting is spoken. That act is a silent lesson.",
        "The turning point arrives when the caged parrot copies the fall, seems lifeless, and is carried to the windowsill — then flies free.",
        "Retelling the turn means naming that flip: from cage life to the escape plan that works.",
        "What the tale suggests is not a sermon. It is an idea you can state: freedom, clever listening, and the limits of golden comfort.",
      ],
    },
    examples: [
      {
        caption: "Turning point",
        body: "The pet parrot falls like the forest bird, then flies when the merchant sets it on the sill.",
      },
      {
        caption: "Silent message",
        body: "The wild parrot’s fall teaches without a speech — show, don’t only tell.",
      },
      {
        caption: "Suggestion",
        body: "A cage of gold cannot replace open sky for a bird that longs to fly.",
      },
    ],
    connection:
      "Folktales and fables often hide a sharp idea inside a clever trick — listen for the turn, then name the suggestion.",
    try: {
      prompt:
        "Retell one turning point from this tale in three sentences. Then write one sentence on what it suggests.",
      reveal:
        "Example: The parrot heard of the forest fall, copied it, and flew from the sill. Suggestion — freedom can matter more than comfort in a cage.",
    },
    practice: [
      q(
        "g5en-wp-p1",
        "Which line best retells the turning point?",
        "The caged parrot falls like the forest bird, then flies free from the windowsill",
        "The merchant only buys vegetables and never travels",
        "Parrots never appear in any tale",
        "a",
        "The turn is the copied fall that opens the escape.",
        "Which moment flips the story?",
        "Unrelated shopping and denials are not the turn.",
        {
          a: "You named the escape turn.",
          b: "That plot is not this tale’s turn.",
          c: "The parrot is the centre of the chapter.",
        },
      ),
      q(
        "g5en-wp-p2",
        "Which sentence best says what the tale suggests?",
        "Freedom and clever understanding can matter more than a golden cage",
        "Gold cages are the only happiness anyone should want",
        "Never listen to messages from friends",
        "a",
        "The suggestion grows from the bird’s longing and wise escape.",
        "What idea does the ending leave?",
        "Cage-worship and silence fight the tale’s spirit.",
        {
          a: "You stated a fair suggestion.",
          b: "The escape questions cage-only happiness.",
          c: "The forest message is the key to freedom.",
        },
      ),
      explainQ(
        "g5en-wp-p3",
        "Why is the wild parrot’s fall important before the escape?",
        "It sends a silent plan: pretend to be lifeless so someone will open the way out. Without that signal, the caged parrot might never invent the same trick.",
        "How can a fall teach without words?",
        "The greeting alone does not free the bird; the copied act does.",
        ["fall|signal|plan|copy|trick|teach|silent"],
      ),
    ],
    reasoning: [
      q(
        "g5en-wp-r1",
        "A retell covers only the merchant’s travel sights and skips the sill. What is missing?",
        "the turning escape when the parrot flies free",
        "more lists of suitcase brands",
        "a demand to stop telling tales",
        "a",
        "Travel wonders decorate the middle; the sill-and-flight is the turn.",
        "Which beat flips cage to sky?",
        "Brands and quitting are not the missing turn.",
        {
          a: "You spotted the missing turn.",
          b: "Suitcase brands still skip the escape.",
          c: "Tales invite clearer turns, not silence.",
        },
      ),
      explainQ(
        "g5en-wp-r2",
        "How can two readers say what the tale suggests with different words?",
        "Suggestions are ideas, not one fixed slogan. One reader may say ‘freedom matters’ and another ‘clever friends can teach escape’ — both can stay true to the story.",
        "Can one idea wear different sentences?",
        "Copying a single official line is not the only path.",
        ["idea|suggest|freedom|clever|same|words"],
      ),
    ],
    retrieve: [
      q(
        "g5en-wp-t1",
        "A turning point mainly is...",
        "the moment events flip and the story’s direction changes",
        "only the first word of the title",
        "a list of cage metals with no plot",
        "a",
        "Turns change what can happen next.",
        "What shifts the tale’s path?",
        "Title letters and metal lists are not turning points.",
        {
          a: "You defined a turning point.",
          b: "Title letters are not the flip.",
          c: "Metals alone skip the plot change.",
        },
      ),
      writeQ(
        "g5en-wp-t2",
        "Retell the turning point in one or two sentences, then write what the tale suggests.",
        [
          "parrot",
          "fall",
          "cage",
          "fly",
          "freedom",
          "window",
          "wise",
          "escape",
          "sky",
          "suggest",
        ],
        "Example: The parrot fell like the forest bird and flew from the sill. Suggestion — freedom can outweigh a golden cage.",
        "Name the flip, then the idea it leaves.",
        "A suggestion with no turning-point retell is incomplete here.",
        ["fall|fly|escape|window|sill|turn", "freedom|suggest|wise|cage|sky|clever"],
      ),
    ],
    misconceptions: [
      {
        idea: "The turning point is any pretty description of trees.",
        correction:
          "A turning point changes the path of events — here, the fall that leads to flight.",
      },
      {
        idea: "Saying what a tale suggests means inventing a lesson with no link to the plot.",
        correction:
          "Stay true to what the characters choose and what the ending shows.",
      },
    ],
    reflect: {
      prompt:
        "Where might a ‘freedom over fancy cage’ idea appear in real life this week — home, class, or friendship?",
      keyIdeas: ["turning|freedom|suggest|wise"],
    },
    mastery: q(
      "g5en-wp-m1",
      "The Wise Parrot asks you to...",
      "retell the turning point and say what the tale suggests",
      "only memorise types of metal cages",
      "ignore how the escape plan begins",
      "a",
      "Turning-point retell plus suggestion are the chapter skills.",
      "Which pair matches the goals?",
      "Metal lists skip the tale’s idea.",
      {
        a: "You joined both skills.",
        b: "Cage metals are not the goal.",
        c: "The escape plan is central.",
      },
    ),
    masteryCriteria:
      "You can retell the wise-parrot turning point and state a suggestion that stays true to the tale.",
    teach: {
      prompt:
        "Teach Ivshi the turning point, then one clear idea the tale suggests.",
      keyIdeas: ["turn|fall|fly", "suggest|freedom|wise"],
    },
  },
});

export const theFrogLesson = grade5EnglishLesson({
  conceptId: "ncert-g5-santoor-the-frog-core",
  title: "The Frog",
  domainTitle: "Literature",
  prerequisites: ["ncert-g5-santoor-the-wise-parrot-core"],
  nextConceptIds: ["ncert-g5-santoor-what-a-tank-core"],
  coveredSkillIds: [
    "ncert-g5-santoor-the-frog-core-sk-1-find-a-frog-fact-from-the-te",
    "ncert-g5-santoor-the-frog-core-sk-2-compare-two-animals",
  ],
  content: {
    objective:
      "Find a frog fact from the text and compare frogs with another animal using clear similarities or differences.",
    wonder: {
      prompt:
        "A creature that begins like a tiny swimmer, then hops on land with a sticky tongue — what fact would you tell a friend first, and which other animal would you compare it to?",
    },
    explore: {
      text: "Information-rich poems and passages tuck facts inside lively lines. Finding a fact means naming something the text states about frogs. Comparing two animals means saying how they are alike or different with evidence.",
      activity: {
        prompt:
          "The text shows tadpoles swimming, sticky tongues catching insects, camouflage, and webbed feet. Which response finds a fact and compares?",
        choices: [
          {
            id: "fact-compare",
            label:
              "Frogs begin as tadpoles in water — unlike many land mammals that never have a swimming baby stage",
            note: "You pulled a text fact and set a clear comparison.",
          },
          {
            id: "guess-only",
            label: "Invent any frog fact even if the text never says it",
            note: "Facts for this skill grow from the text first.",
          },
          {
            id: "no-compare",
            label: "Never place frogs beside another animal; comparison is useless",
            note: "Comparison sharpens what makes frogs special.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A text fact is checkable against the passage: habitat, food, life cycle, camouflage, or movement.",
        "Frogs often start as tadpoles, live in damp places, catch insects with quick tongues, and move with hops and webbed feet.",
        "Comparing two animals needs a shared lens: home, food, movement, or body features.",
        "Alike means a shared trait; different means a contrast that still uses fair evidence.",
        "When you find a fact and then compare, you prove you read carefully and thought beyond a single creature.",
      ],
    },
    examples: [
      {
        caption: "Fact from the text",
        body: "A frog may begin life as a tadpole that swims with a tail.",
      },
      {
        caption: "Comparison — movement",
        body: "Frogs hop and swim; many birds fly. Both move to find food and safety, but their tools differ.",
      },
      {
        caption: "Comparison — home",
        body: "Frogs need damp places; camels are built for dry deserts — different homes, different bodies.",
      },
    ],
    connection:
      "Nature notes, zoo visits, and pond walks all reward the same habit: what does the text (or guide) say, and how does this animal sit beside another?",
    try: {
      prompt:
        "Write one frog fact from the chapter’s world. Then compare frogs with one other animal in one sentence.",
      reveal:
        "Example: Fact — frogs catch insects with a sticky tongue. Compare — frogs hop near ponds; squirrels climb trees for nuts.",
    },
    practice: [
      q(
        "g5en-fr-p1",
        "Which line best finds a frog fact from the text’s world?",
        "Frogs may begin as tadpoles and catch insects with a quick sticky tongue",
        "Frogs drive scooters to school every morning",
        "Never read any line about ponds or rain",
        "a",
        "Life cycle and feeding are text-based frog facts.",
        "Which claim the passage could support?",
        "Scooter tales and refusing the text skip the skill.",
        {
          a: "You chose a text-rooted fact.",
          b: "Scooters are not frog biology here.",
          c: "Pond and rain lines carry the facts.",
        },
      ),
      q(
        "g5en-fr-p2",
        "Which sentence best compares two animals?",
        "Frogs hop and swim in damp places; many birds fly and nest in trees",
        "Animals are all identical in every way forever",
        "Comparison means listing only pencil brands",
        "a",
        "A fair compare names a shared lens — here, movement and home.",
        "What alike-or-different link appears?",
        "Total sameness and brand lists are not animal compares.",
        {
          a: "You compared with clear traits.",
          b: "Animals differ in important ways.",
          c: "Pencil brands are off the topic.",
        },
      ),
      explainQ(
        "g5en-fr-p3",
        "Why should a frog fact come from the text before you add flourishes?",
        "The text gives checkable details — tadpoles, tongues, camouflage, webbed feet. Flourishes can decorate after the fact is secure, so imagination does not replace evidence.",
        "What should arrive first — evidence or decoration?",
        "Guesses without text support are weak for this skill.",
        ["fact|text|evidence|first|tadpole|tongue|check"],
      ),
    ],
    reasoning: [
      q(
        "g5en-fr-r1",
        "A friend says ‘frogs are cool’ but names no habitat, food, or life-cycle detail. What is thin?",
        "a clear frog fact grounded in the text",
        "more unrelated scooter brand lists",
        "a rule that animals may never be compared",
        "a",
        "Feeling words need fact partners for this chapter.",
        "What should sit beside ‘cool’?",
        "Brands and bans do not supply frog facts.",
        {
          a: "You asked for a text fact.",
          b: "Scooter brands are off-topic.",
          c: "Comparison remains welcome here.",
        },
      ),
      writeQ(
        "g5en-fr-r2",
        "Write one frog fact and one comparison with another animal.",
        [
          "frog",
          "tadpole",
          "tongue",
          "hop",
          "swim",
          "pond",
          "insect",
          "bird",
          "fish",
          "compare",
        ],
        "Example: Fact — frogs use sticky tongues for insects. Compare — frogs hop on land; fish stay in water without hopping.",
        "Pair a text-style fact with an alike-or-different line.",
        "A compare with no frog fact is incomplete for this chapter.",
        ["tadpole|tongue|hop|swim|pond|insect|fact", "compare|bird|fish|unlike|like|differ"],
      ),
    ],
    retrieve: [
      q(
        "g5en-fr-t1",
        "Finding a frog fact from the text mainly means...",
        "naming a detail the passage states about frogs",
        "inventing any claim with no link to the lines",
        "hiding every nature detail on purpose",
        "a",
        "Facts are anchored in what the text offers.",
        "Where should the detail come from?",
        "Invention and secrecy fight the skill.",
        {
          a: "You defined text-based fact finding.",
          b: "Unlinked claims are not the goal.",
          c: "Nature details are the treasure here.",
        },
      ),
      explainQ(
        "g5en-fr-t2",
        "How does comparing frogs with another animal help a reader understand frogs better?",
        "Comparison sharpens traits: hopping versus flying, damp ponds versus dry dens. Seeing difference and likeness makes frog features clearer than studying them alone.",
        "What becomes clearer when a second animal stands beside the frog?",
        "Isolating frogs forever can hide what makes them special.",
        ["compare|differ|alike|clear|trait|beside|understand"],
      ),
    ],
    misconceptions: [
      {
        idea: "Any fun sentence about frogs counts as a text fact.",
        correction:
          "A text fact should be supportable from the passage’s details.",
      },
      {
        idea: "Comparing animals means saying one is better forever.",
        correction:
          "Comparison names alike and different traits; it does not need a winner.",
      },
    ],
    reflect: {
      prompt:
        "Which frog fact will you watch for near water, and which animal will you compare it with next?",
      keyIdeas: ["fact|frog|compare|animal"],
    },
    mastery: q(
      "g5en-fr-m1",
      "The Frog asks you to...",
      "find a frog fact from the text and compare two animals",
      "only memorise unrelated scooter parts",
      "ignore every nature detail in the lines",
      "a",
      "Text facts plus animal comparison are the chapter skills.",
      "Which pair matches the goals?",
      "Scooter parts skip the frog focus.",
      {
        a: "You joined both skills.",
        b: "Scooter parts are not the goal.",
        c: "Nature details matter here.",
      },
    ),
    masteryCriteria:
      "You can state a frog fact grounded in the text and compare frogs with another animal using a clear trait.",
    teach: {
      prompt:
        "Teach Ivshi one frog fact from the text and one fair comparison with another animal.",
      keyIdeas: ["fact|tadpole|tongue", "compare|alike|differ"],
    },
  },
});
