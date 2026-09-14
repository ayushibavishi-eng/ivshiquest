import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade4EnglishLesson } from "@/content/lessons/grade-4-english/format";

export const theSwingLesson = grade4EnglishLesson({
  conceptId: "ncert-g4-santoor-the-swing-core",
  title: "The Swing",
  domainTitle: "Literature",
  prerequisites: ["ncert-g4-santoor-hekko-core"],
  nextConceptIds: ["ncert-g4-santoor-magical-mountains-core"],
  coveredSkillIds: [
    "ncert-g4-santoor-the-swing-core-sk-1-notice-an-image",
    "ncert-g4-santoor-the-swing-core-sk-2-read-aloud-with-rhythm",
  ],
  content: {
    objective:
      "Notice a vivid image in a poem or swinging piece and practise reading aloud with rhythm.",
    wonder: {
      prompt:
        "When a swing goes up, what picture arrives first in your mind — sky, stomach flutter, flying hair, or the ground shrinking — and which words would paint it?",
    },
    explore: {
      text: "An image is a word picture you can almost see, feel, or hear. Rhythm is the beat of the lines when you read aloud — not a race and not a mumble.",
      activity: {
        prompt:
          "Which response notices an image and honours rhythm?",
        choices: [
          {
            id: "image-rhythm",
            label:
              "I see blue sky rushing closer; I will read the rising lines a little quicker and the pause at the top more slowly",
            note: "Image plus thoughtful voice. That is poem reading.",
          },
          {
            id: "flat",
            label: "Read every word at one flat speed with no pictures in mind",
            note: "Flat reading misses image and rhythm.",
          },
          {
            id: "shout",
            label: "Shout the whole poem at top volume with no beats",
            note: "Volume alone is not rhythm.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Poets build images with colour, motion, touch, and sound — not only dictionary labels.",
        "Noticing an image means saying what you picture and which words built it.",
        "Rhythm comes from line length, repeats, and natural breath pauses.",
        "Reading aloud with rhythm lets listeners feel the swing's rise and fall.",
        "You can tap a finger lightly to keep a steady, playful beat without rushing.",
      ],
    },
    examples: [
      {
        caption: "Image",
        body: "'Up in the air and down' paints a rising and falling path you can see.",
      },
      {
        caption: "Rhythm",
        body: "Short swinging lines often like a bounce: up — and — down.",
      },
      {
        caption: "Voice tip",
        body: "Softer on the pause at the top; brighter on the whoosh down.",
      },
    ],
    connection:
      "Songs, jump-rope rhymes, and cricket chants also live on image and beat.",
    try: {
      prompt:
        "Choose two lines about swinging. Circle one image word. Read the lines aloud twice — once flat, once with a bounce. Notice the difference.",
      reveal:
        "Example image word: flying. With rhythm, the line feels like motion; flat reading feels like a list.",
    },
    practice: [
      q(
        "g4en-sw-p1",
        "Which line notices an image?",
        "I picture the ground shrinking as the swing climbs",
        "The word 'the' appears often in English",
        "Paper is thin",
        "a",
        "An image is a sensory picture from the text. Grammar counts and paper facts are not images here.",
        "What do you see or feel?",
        "Dictionary trivia is not an image notice.",
        {
          a: "You named a word picture.",
          b: "Word frequency is not an image.",
          c: "Paper facts skip the poem picture.",
        },
      ),
      q(
        "g4en-sw-p2",
        "What supports reading aloud with rhythm?",
        "noticing beats and pausing where the swing of the line needs breath",
        "swallowing every word as fast as possible",
        "never opening your mouth",
        "a",
        "Rhythm uses beat and breath. Racing or silence fights aloud reading.",
        "How does a swing's motion guide your voice?",
        "Speed-swallowing is not rhythm.",
        {
          a: "You described rhythmic reading.",
          b: "Racing flattens the beat.",
          c: "Aloud reading needs voice.",
        },
      ),
      explainQ(
        "g4en-sw-p3",
        "Why might a swinging poem sound better with rising and falling voice than with one flat note?",
        "The poem's motion is up and down. Matching voice to motion helps listeners feel the ride the words describe.",
        "How does voice echo the image?",
        "Flat voice can hide the swing inside the lines.",
        ["up|down|voice|feel|motion|beat|rhythm"],
      ),
    ],
    reasoning: [
      q(
        "g4en-sw-r1",
        "Two children notice different images in the same swing poem. Is that possible?",
        "Yes — one may see sky colour while another feels stomach lift; both can be fair",
        "No — every poem allows only one image forever",
        "Images are only for painters, never readers",
        "a",
        "Poems invite more than one sensory door.",
        "Can eyes and body notice different gifts?",
        "Readers build images too.",
        {
          a: "You allowed rich noticing.",
          b: "Poems often hold several images.",
          c: "Reading is image work as well.",
        },
      ),
      explainQ(
        "g4en-sw-r2",
        "How can tapping a soft beat help a shy aloud reader?",
        "A light beat gives the voice a path so the reader worries less about getting lost. Rhythm becomes a friend, not a test.",
        "What does a beat organise?",
        "Fear of aloud reading often comes from feeling lost in the line.",
        ["beat|path|voice|calm|rhythm|help"],
      ),
    ],
    retrieve: [
      q(
        "g4en-sw-t1",
        "Noticing an image means...",
        "saying a picture or sensation the words create",
        "counting only full stops",
        "skipping every descriptive word",
        "a",
        "Images are sensory pictures from language.",
        "What do the words make you see or feel?",
        "Skipping description skips images.",
        {
          a: "You defined image noticing.",
          b: "Stops are punctuation, not images.",
          c: "Description builds images.",
        },
      ),
      writeQ(
        "g4en-sw-t2",
        "Name one image from a swing poem and one tip for reading it with rhythm.",
        [
          "sky",
          "up",
          "down",
          "fly",
          "air",
          "beat",
          "pause",
          "slow",
          "bounce",
          "voice",
        ],
        "Example: Image — sky rushing closer. Rhythm tip — pause softly at the top of the swing line.",
        "Picture + voice tip.",
        "A tip with no image is incomplete here.",
        ["sky|up|down|fly|air|ground|hair", "beat|pause|slow|bounce|rhythm|voice"],
      ),
    ],
    misconceptions: [
      {
        idea: "Rhythm means shouting on every word.",
        correction:
          "Rhythm is patterned timing — soft, strong, pause — not constant shouting.",
      },
      {
        idea: "Images are only drawings printed beside the poem.",
        correction:
          "Word images live in language even when no picture is printed.",
      },
    ],
    reflect: {
      prompt:
        "Which swinging image will you keep in your mind on the way home?",
      keyIdeas: ["image|swing|rhythm"],
    },
    mastery: q(
      "g4en-sw-m1",
      "The Swing asks you to...",
      "notice an image and read aloud with rhythm",
      "only memorise the poet's birthday",
      "read with no attention to beat or picture",
      "a",
      "Image plus rhythmic reading are the skills.",
      "Which pair matches the chapter?",
      "Birthdays and flat reading miss the goals.",
      {
        a: "You held both skills.",
        b: "Birthdays are optional extras.",
        c: "Beat and picture matter here.",
      },
    ),
    masteryCriteria:
      "You can name a clear image from the piece and read a short stretch aloud with intentional rhythm.",
    teach: {
      prompt:
        "Teach Ivshi one swing image and demonstrate how you would read two lines with rhythm.",
      keyIdeas: ["image", "rhythm|beat|aloud"],
    },
  },
});

export const magicalMountainsLesson = grade4EnglishLesson({
  conceptId: "ncert-g4-santoor-magical-mountains-core",
  title: "A Journey to the Magical Mountains",
  domainTitle: "Literature",
  prerequisites: ["ncert-g4-santoor-the-swing-core"],
  nextConceptIds: ["ncert-g4-santoor-maheshwar-core"],
  coveredSkillIds: [
    "ncert-g4-santoor-magical-mountains-core-sk-1-describe-the-setting",
    "ncert-g4-santoor-magical-mountains-core-sk-2-track-the-journey",
  ],
  content: {
    objective:
      "Describe the setting of a journey narrative and track how the journey moves from place to place.",
    wonder: {
      prompt:
        "If a story only said 'they went somewhere nice' with no mountains, paths, weather, or stops, could you follow the journey — and what would you beg the writer to add?",
    },
    explore: {
      text: "Setting is where and when the story breathes: slopes, mist, villages, night or dawn. Tracking a journey means lining the stops in order — start, along the way, arrival.",
      activity: {
        prompt:
          "Which note describes setting and tracks the journey?",
        choices: [
          {
            id: "set-track",
            label:
              "Dawn on pine slopes → midday rest by a cold stream → evening lights of a hill village",
            note: "Place details in time order. That is setting plus journey track.",
          },
          {
            id: "vague",
            label: "They moved. Then they moved again. Somewhere.",
            note: "No setting, no trackable stops.",
          },
          {
            id: "end-only",
            label: "Only the last page matters; beginnings are useless",
            note: "Journeys need beginnings and middles to make sense of endings.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Setting answers: where are we, and what is the place like?",
        "Sensory details — cold air, steep paths, pine smell — build setting.",
        "A journey track lists ordered stages without losing the traveller.",
        "Useful track words: set out, climbed, rested, reached, returned.",
        "Magical does not mean you skip geography; wonder sits on top of clear places.",
      ],
    },
    examples: [
      {
        caption: "Setting",
        body: "Misty ridges at sunrise, with a narrow stone path.",
      },
      {
        caption: "Journey track",
        body: "Village gate → forest climb → ridge view → mountain shelter.",
      },
      {
        caption: "Lost track",
        body: "Naming the shelter before the climb confuses the path.",
      },
    ],
    connection:
      "School trips, pilgrimage stories, and holiday trains all ask for setting and stop-order.",
    try: {
      prompt:
        "Describe one setting from the mountain journey in two details. Then list three journey stops in order.",
      reveal:
        "Example: Setting — cold wind and pine trees. Track — leave home → cross the bridge → reach the ridge.",
    },
    practice: [
      q(
        "g4en-mm-p1",
        "Which sentence describes setting?",
        "The path wound between dark pines under a pale morning sky",
        "Someone felt vaguely okay",
        "The word journey has seven letters",
        "a",
        "Setting paints place and time. Vague feelings and letter counts are not setting descriptions.",
        "Where are we and what is it like?",
        "Letter counts are not geography.",
        {
          a: "You described place.",
          b: "Vague feelings skip place detail.",
          c: "Spelling length is not setting.",
        },
      ),
      q(
        "g4en-mm-p2",
        "Which list tracks a journey in order?",
        "start at the village → climb the trail → reach the ridge camp",
        "ridge camp → then suddenly the village start with no climb",
        "a pile of places with no arrows of order",
        "a",
        "Tracks need chronological order.",
        "What comes before the ridge?",
        "Reversed or unordered piles lose the path.",
        {
          a: "You kept the path order.",
          b: "Skipping the climb breaks the track.",
          c: "Order words and sequence matter.",
        },
      ),
      explainQ(
        "g4en-mm-p3",
        "Why does a journey story need both setting and track?",
        "Setting makes each stop vivid; track shows how travellers moved between stops. One without the other feels either stuck or empty.",
        "What does each skill give the reader?",
        "Pretty places with no path — or a path with no place — feel incomplete.",
        ["setting|place|track|order|stop|move"],
      ),
    ],
    reasoning: [
      q(
        "g4en-mm-r1",
        "A retell jumps from home to the summit with no middle. What is missing?",
        "the middle journey stages that show how they got there",
        "more silence about the mountains",
        "a ban on all setting words",
        "a",
        " Middles carry the climb, rests, and changes.",
        "What connects start to summit?",
        "Silence and bans remove story fuel.",
        {
          a: "You valued the middle track.",
          b: "Mountains need describing and tracking.",
          c: "Setting words help, not harm.",
        },
      ),
      explainQ(
        "g4en-mm-r2",
        "How can 'magical' and clear geography live in the same journey?",
        "Clear places let wonder attach to something real — a ridge that feels enchanted still has rocks, wind, and a path. Magic needs a map to land on.",
        "Where does wonder sit?",
        "Empty vagueness is not the same as magic.",
        ["place|path|real|wonder|map|clear"],
      ),
    ],
    retrieve: [
      q(
        "g4en-mm-t1",
        "Tracking the journey means...",
        "following the travellers' stops in order",
        "only listing mountain colours",
        "erasing the starting point",
        "a",
        "Track is ordered movement.",
        "What must a listener follow?",
        "Colour lists alone are not tracks.",
        {
          a: "You defined journey tracking.",
          b: "Colours help setting more than track.",
          c: "Starts matter in journeys.",
        },
      ),
      writeQ(
        "g4en-mm-t2",
        "Describe one setting detail and list two journey stops in order.",
        [
          "mountain",
          "path",
          "mist",
          "pine",
          "village",
          "ridge",
          "first",
          "then",
          "climb",
          "reach",
        ],
        "Example: Setting — misty pine path. Track — leave the village, then climb to the ridge.",
        "Place detail + ordered stops.",
        "Stops with no setting leave the world blank.",
        ["mountain|mist|pine|path|cold|sky", "first|then|village|ridge|climb|reach"],
      ),
    ],
    misconceptions: [
      {
        idea: "Setting is only the country name.",
        correction:
          "Setting includes sights, weather, time of day, and how the place feels.",
      },
      {
        idea: "Journeys are only about the destination.",
        correction:
          "What happens along the way often carries the story's heart.",
      },
    ],
    reflect: {
      prompt:
        "Which journey stop from the text would you most like to stand in — and why?",
      keyIdeas: ["setting|journey|place"],
    },
    mastery: q(
      "g4en-mm-m1",
      "A Journey to the Magical Mountains asks you to...",
      "describe the setting and track the journey in order",
      "only memorise one magical word",
      "ignore where the travellers go",
      "a",
      "Setting plus track are the skills.",
      "Which pair matches the chapter?",
      "One word and ignored paths miss the goals.",
      {
        a: "You held both skills.",
        b: "One word is not enough.",
        c: "Paths matter in journey tales.",
      },
    ),
    masteryCriteria:
      "You can describe the journey's setting with sensory detail and list the main stops in order.",
    teach: {
      prompt:
        "Teach Ivshi the mountain setting and a three-stop journey track.",
      keyIdeas: ["setting|place", "journey|first|then"],
    },
  },
});

export const maheshwarLesson = grade4EnglishLesson({
  conceptId: "ncert-g4-santoor-maheshwar-core",
  title: "Maheshwar",
  domainTitle: "Literature",
  prerequisites: ["ncert-g4-santoor-magical-mountains-core"],
  nextConceptIds: [],
  coveredSkillIds: [
    "ncert-g4-santoor-maheshwar-core-sk-1-find-a-place-detail",
    "ncert-g4-santoor-maheshwar-core-sk-2-share-what-makes-it-special",
  ],
  content: {
    objective:
      "Find a concrete place detail in a text about Maheshwar and share what makes the place special.",
    wonder: {
      prompt:
        "What turns a town name on a map into a place you can almost visit — a river, a craft, a fort wall, a festival smell — and which detail would you keep?",
    },
    explore: {
      text: "Place details are checkable bits: river, ghats, weaving, fort, markets. Specialness is the reason those details matter to people — beauty, history, craft, or daily life.",
      activity: {
        prompt:
          "Which answer finds a detail and shares specialness?",
        choices: [
          {
            id: "detail-special",
            label:
              "Detail: handloom weaving by the Narmada. Special: living craft keeps beauty and work alive in the town",
            note: "Concrete detail plus why it matters. Strong place reading.",
          },
          {
            id: "empty",
            label: "It is special because it is special",
            note: "Circular praise with no detail teaches little.",
          },
          {
            id: "dismiss",
            label: "Places never have details worth noticing",
            note: "Place texts are built from details.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A place detail is specific: names, crafts, rivers, buildings, foods.",
        "Finding a detail means pointing to something the text actually gives you.",
        "Sharing what makes it special answers why a reader should care.",
        "Special can be heritage, nature, work, or community life — backed by details.",
        "Respectful sharing avoids empty tourism slogans; it stays tied to real features.",
      ],
    },
    examples: [
      {
        caption: "Place detail",
        body: "The Narmada river beside Maheshwar's ghats.",
      },
      {
        caption: "Specialness",
        body: "Weaving traditions that turn thread into famous Maheshwari cloth.",
      },
      {
        caption: "Weak share",
        body: "'Nice place lol' with no detail attached.",
      },
    ],
    connection:
      "Describing your own town to a visitor uses the same detail-and-specialness habit.",
    try: {
      prompt:
        "From the Maheshwar text, write one place detail and one sentence on what makes it special. Then add one detail that makes your own place special.",
      reveal:
        "Example: Detail — river ghats. Special — people gather for light, prayer, and daily river life. My place — the banyan near school where stories start.",
    },
    practice: [
      q(
        "g4en-mh-p1",
        "Which is a place detail?",
        "handloom weaving and river ghats in Maheshwar",
        "the idea that towns somehow exist",
        "a random number with no link to the text",
        "a",
        "Details name concrete features from the place.",
        "What could you point to on a visit?",
        "Vague existence and random numbers are not details.",
        {
          a: "You found a concrete detail.",
          b: "Existence alone is not a detail.",
          c: "Unlinked numbers are not place facts.",
        },
      ),
      q(
        "g4en-mh-p2",
        "Which sentence shares what makes a place special?",
        "Its living crafts and river life give the town a beauty people work to keep",
        "Places are never special",
        "Only capital cities can matter",
        "a",
        "Specialness ties features to value. Denial and capital-only rules erase smaller places unfairly.",
        "Why might someone care about this town?",
        "Many kinds of places hold meaning.",
        {
          a: "You shared grounded specialness.",
          b: "Places can be special for real reasons.",
          c: "Smaller towns matter too.",
        },
      ),
      explainQ(
        "g4en-mh-p3",
        "Why should 'what makes it special' point back to a detail?",
        "Details keep praise honest and useful. Without them, specialness becomes empty advertising that anyone could paste on any town.",
        "How does a listener check your claim?",
        "Empty praise teaches nothing to remember.",
        ["detail|because|craft|river|proof|reason"],
      ),
    ],
    reasoning: [
      q(
        "g4en-mh-r1",
        "Two readers find different special things in Maheshwar — craft vs river. Can both be fair?",
        "Yes — a place can hold more than one treasure",
        "No — only one detail is allowed per town forever",
        "Specialness is banned in reading class",
        "a",
        "Places are rich; readers may spotlight different true features.",
        "Can one town wear several gifts?",
        "Specialness is part of place reading.",
        {
          a: "You allowed a rich place.",
          b: "Many details can be true together.",
          c: "Sharing specialness is a chapter skill.",
        },
      ),
      explainQ(
        "g4en-mh-r2",
        "How does finding place details prepare you to write about your own neighbourhood?",
        "You practise hunting concrete features first, then saying why they matter. The same habit turns your street into a clear, respectful description.",
        "What transfers from Maheshwar to home?",
        "Slogan-only writing stays weak everywhere.",
        ["detail|neighbour|home|describe|why|special"],
      ),
    ],
    retrieve: [
      q(
        "g4en-mh-t1",
        "Finding a place detail means...",
        "pointing to a specific feature the text gives",
        "inventing a random fact with no support",
        "refusing to notice rivers, crafts, or buildings",
        "a",
        "Details come from the text's concrete features.",
        "What can you point to?",
        "Invention and refusal skip the skill.",
        {
          a: "You defined place detail.",
          b: "Unsupported invention is not finding.",
          c: "Noticing is required.",
        },
      ),
      writeQ(
        "g4en-mh-t2",
        "Name one Maheshwar place detail and say what makes it special.",
        [
          "river",
          "narmada",
          "ghat",
          "weave",
          "handloom",
          "cloth",
          "fort",
          "craft",
          "special",
          "beauty",
        ],
        "Example: Detail — Maheshwari weaving. Special — craft keeps beauty and livelihoods together by the river town.",
        "Concrete feature + why it matters.",
        "Specialness with no detail is incomplete.",
        ["river|narmada|ghat|weave|handloom|cloth|fort|craft", "special|beauty|work|life|people|keep"],
      ),
    ],
    misconceptions: [
      {
        idea: "Place texts are only for tourists.",
        correction:
          "They also build respect, geography sense, and descriptive writing for locals.",
      },
      {
        idea: "Special means famous on television.",
        correction:
          "Special can be quiet craft, river life, or community memory — not only fame.",
      },
    ],
    reflect: {
      prompt:
        "Which detail makes your own place special enough to share with Ivshi?",
      keyIdeas: ["place|detail|special"],
    },
    mastery: q(
      "g4en-mh-m1",
      "Maheshwar asks you to...",
      "find a place detail and share what makes the place special",
      "only memorise the spelling of the title",
      "claim no place can ever matter",
      "a",
      "Detail plus specialness are the skills.",
      "Which pair matches the chapter?",
      "Spelling-only and dismissal miss the goals.",
      {
        a: "You held both skills.",
        b: "Title spelling is not enough.",
        c: "Places can matter for real reasons.",
      },
    ),
    masteryCriteria:
      "You can point to a concrete Maheshwar detail and explain what makes it special in your own words.",
    teach: {
      prompt:
        "Teach Ivshi one Maheshwar detail and why it makes the place special.",
      keyIdeas: ["detail|river|craft", "special|why"],
    },
  },
});
