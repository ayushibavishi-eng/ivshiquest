import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade4EnglishLesson } from "@/content/lessons/grade-4-english/format";

export const oneThingAtATimeLesson = grade4EnglishLesson({
  conceptId: "ncert-g4-santoor-one-thing-at-a-time-core",
  title: "One Thing at a Time",
  domainTitle: "Literature",
  prerequisites: ["ncert-g4-santoor-be-smart-be-safe-core"],
  nextConceptIds: ["ncert-g4-santoor-the-old-stag-core"],
  coveredSkillIds: [
    "ncert-g4-santoor-one-thing-at-a-time-core-sk-1-find-the-main-idea",
    "ncert-g4-santoor-one-thing-at-a-time-core-sk-2-connect-to-own-life",
  ],
  content: {
    objective:
      "Find the main idea of a text about focus and connect it to a choice in your own life.",
    wonder: {
      prompt:
        "If homework, a buzzing phone, and a cartoon all tug at you at once, what usually suffers first — speed, neatness, or calm — and why?",
    },
    explore: {
      text: "Main idea is what the whole text is mostly about — not one shiny detail. Connecting to your life means naming a real moment where the idea fits.",
      activity: {
        prompt:
          "A passage shows a child starting maths, then opening a game, then losing the sum. Which is the main idea?",
        choices: [
          {
            id: "main",
            label: "Doing one task with attention works better than jumping between many",
            note: "You found the umbrella idea that covers the whole passage.",
          },
          {
            id: "detail",
            label: "The pencil was blue",
            note: "Colour is a detail. Main idea covers the whole message about focus.",
          },
          {
            id: "off",
            label: "Games should replace every lesson forever",
            note: "That is not what a focus text is mostly about.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Main idea answers: what is this text mostly trying to say?",
        "Details support the main idea — times, objects, small moments — but they are not the umbrella.",
        "Connecting to your life means: when have I felt this? What will I try?",
        "One-thing-at-a-time texts often show that attention is a kind of kindness to your future self.",
        "A strong connection is specific: 'During spelling practice I...' beats 'I should be good.'",
      ],
    },
    examples: [
      {
        caption: "Main idea",
        body: "Finish one job before starting another so your mind stays clear.",
      },
      {
        caption: "Detail",
        body: "The child opened three apps in two minutes — a supporting example.",
      },
      {
        caption: "Life link",
        body: "I will keep my storybook closed until my science diagram is done.",
      },
    ],
    connection:
      "Cooking one dish before starting another, or listening before answering, uses the same focus idea.",
    try: {
      prompt:
        "Write the main idea of today's focus text in one sentence. Then add one life connection starting with 'I will...' or 'I remember when...'",
      reveal:
        "Example: Main idea — attention works best on one task. Connection — I will finish five maths sums before opening messages.",
    },
    practice: [
      q(
        "g4en-ot-p1",
        "Which sentence is most likely a main idea about focus?",
        "Giving full attention to one task helps you finish well",
        "The notebook had 40 pages",
        "Clouds can look like cotton",
        "a",
        "Main ideas state the big claim. Page counts and cloud similes are side details or other topics.",
        "Which line could title the whole passage?",
        "Tiny facts are not the umbrella.",
        {
          a: "You found an umbrella idea.",
          b: "Page count is a detail.",
          c: "Clouds belong to another topic.",
        },
      ),
      q(
        "g4en-ot-p2",
        "Which line connects the focus idea to your own life?",
        "When I draw, I will close the chat window until the sketch is done",
        "Focus is a word in the dictionary",
        "Someone somewhere once owned a drum",
        "a",
        "A life connection names your action or memory. Dictionary facts and distant strangers are not personal links.",
        "Where do you appear in the sentence?",
        "Definitions without you are not connections.",
        {
          a: "You placed yourself in the idea.",
          b: "A definition is not a life link.",
          c: "A distant stranger is not your connection.",
        },
      ),
      explainQ(
        "g4en-ot-p3",
        "How can you tell a detail from a main idea?",
        "Ask whether the sentence covers the whole text or only one small piece. If removing it would still leave the big message standing, it is likely a detail.",
        "Which sentence could be the title of the whole page?",
        "Sparkly facts can distract from the umbrella.",
        ["whole|mostly|detail|support|title|big"],
      ),
    ],
    reasoning: [
      q(
        "g4en-ot-r1",
        "Why might multitasking feel busy but leave work unfinished?",
        "Jumping tasks breaks attention, so each job gets thin effort",
        "Because pencils refuse to write after lunch only",
        "Because main ideas dislike children",
        "a",
        "Split attention often slows finishing. Pencils and grudges are not the reason.",
        "What happens to attention when it splits?",
        "Tools and moods of ideas are not the cause.",
        {
          a: "You explained the focus cost.",
          b: "Pencils are not the villain.",
          c: "Ideas do not dislike children.",
        },
      ),
      explainQ(
        "g4en-ot-r2",
        "Why does a specific life connection beat a vague 'I will be better'?",
        "Specific plans are checkable and easier to start. Vague wishes float away because they name no time, place, or action.",
        "Which sentence could you prove tomorrow?",
        "Foggy promises are hard to practise.",
        ["specific|plan|action|check|vague|tomorrow"],
      ),
    ],
    retrieve: [
      q(
        "g4en-ot-t1",
        "Finding the main idea means...",
        "naming what the text is mostly about",
        "copying the longest sentence only",
        "ignoring the writer's point",
        "a",
        "Main idea is the mostly-about claim.",
        "What covers the whole text?",
        "Length alone does not make a main idea.",
        {
          a: "You defined main idea.",
          b: "Longest is not always central.",
          c: "Ignoring the point skips the skill.",
        },
      ),
      writeQ(
        "g4en-ot-t2",
        "Write one main-idea sentence about focus and one life connection.",
        [
          "focus",
          "one",
          "attention",
          "task",
          "finish",
          "I will",
          "when",
          "homework",
          "phone",
        ],
        "Example: Main idea — one careful task beats many half-done ones. Connection — I will finish reading one page before checking messages.",
        "Umbrella idea + a sentence with you in it.",
        "Two vague wishes without a main idea are incomplete.",
        ["focus|attention|one|task|finish", "I|will|when|my|homework|phone"],
      ),
    ],
    misconceptions: [
      {
        idea: "Main idea is always the first sentence.",
        correction:
          "Sometimes it is — and sometimes it appears later. Ask what the whole text is mostly about.",
      },
      {
        idea: "Connecting to life means inventing a matching story that never happened.",
        correction:
          "Use a real memory or a real plan. Honesty makes the connection useful.",
      },
    ],
    reflect: {
      prompt:
        "Which one task will you protect with full attention tomorrow?",
      keyIdeas: ["one|focus|attention"],
    },
    mastery: q(
      "g4en-ot-m1",
      "One Thing at a Time asks you to...",
      "find the main idea and connect it to your life",
      "only list stationery brands",
      "avoid any personal link to the text",
      "a",
      "Main idea + life connection are the skills.",
      "Which pair matches the chapter?",
      "Brand lists skip reading sense.",
      {
        a: "You joined both skills.",
        b: "Stationery brands are not the goal.",
        c: "Personal links are required here.",
      },
    ),
    masteryCriteria:
      "You can state a text's main focus idea and give one honest life connection.",
    teach: {
      prompt:
        "Teach Ivshi the main idea of focus and one way you will use it.",
      keyIdeas: ["main|focus", "life|I will|when"],
    },
  },
});

export const theOldStagLesson = grade4EnglishLesson({
  conceptId: "ncert-g4-santoor-the-old-stag-core",
  title: "The Old Stag",
  domainTitle: "Literature",
  prerequisites: ["ncert-g4-santoor-one-thing-at-a-time-core"],
  nextConceptIds: ["ncert-g4-santoor-braille-core"],
  coveredSkillIds: [
    "ncert-g4-santoor-the-old-stag-core-sk-1-name-a-character-trait",
    "ncert-g4-santoor-the-old-stag-core-sk-2-sequence-events",
  ],
  content: {
    objective:
      "Name a character trait shown by actions and sequence the story's events in a clear order.",
    wonder: {
      prompt:
        "If a story animal is called wise, what must you see in the plot — clever words alone, or choices under pressure?",
    },
    explore: {
      text: "Traits are qualities we infer from what characters do and say: brave, patient, proud, kind. Sequencing lines events from beginning to end so the story's cause chain stays clear.",
      activity: {
        prompt:
          "A stag warns younger deer about a hidden ditch, waits for them to pass, then crosses last. Which trait fits best?",
        choices: [
          {
            id: "careful",
            label: "Careful and protective — he puts others' safety before his hurry",
            note: "Traits grow from actions. Waiting and warning show care.",
          },
          {
            id: "lazy",
            label: "Lazy — because waiting always means laziness",
            note: "Waiting for others' safety is not laziness.",
          },
          {
            id: "no-trait",
            label: "Characters never show traits; only settings matter",
            note: "Stories teach through character choices as well as places.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A character trait is a quality of personality or habit shown more than once if the story allows.",
        "Prove a trait with evidence: what did the character do or say?",
        "Sequencing means lining events so first causes can lead to later results.",
        "Useful sequence words: first, next, then, after that, finally.",
        "Mixing the order can invent a false story — the warning cannot come after everyone has already fallen.",
      ],
    },
    examples: [
      {
        caption: "Trait + evidence",
        body: "Trait: patient. Evidence: the stag waits while the young ones cross.",
      },
      {
        caption: "Sequence",
        body: "First the danger is noticed. Next a warning is given. Finally the group moves safely.",
      },
      {
        caption: "Out of order",
        body: "Saying they celebrated safety before the warning confuses the chain.",
      },
    ],
    connection:
      "Family stories and playground tales also ask: who showed which trait, and in what order did it happen?",
    try: {
      prompt:
        "Name one trait for a character you know from a tale. Give one action as evidence. Then list three events in order.",
      reveal:
        "Example: Trait — brave. Evidence — spoke up about the ditch. Order — saw danger → warned others → crossed last.",
    },
    practice: [
      q(
        "g4en-os-p1",
        "Which sentence names a character trait with evidence?",
        "The stag was protective because he warned the young deer about the ditch",
        "The forest had trees",
        "Tuesday followed Monday",
        "a",
        "Trait plus because-action is strong evidence talk.",
        "Where is the quality and the proof?",
        "Setting and calendar facts are not traits.",
        {
          a: "You paired trait and evidence.",
          b: "Trees are setting, not trait.",
          c: "Weekdays are not character qualities.",
        },
      ),
      q(
        "g4en-os-p2",
        "Which sequence is in a sensible story order?",
        "notice danger → warn others → move to safety",
        "celebrate safety → then notice the danger for the first time",
        "mix all events into one shout with no order",
        "a",
        "Cause comes before effect. Celebration cannot honestly precede the first notice of danger.",
        "What must happen before safety?",
        "Reversed or jumbled orders break the tale.",
        {
          a: "You kept a clear chain.",
          b: "Celebration before notice reverses the plot.",
          c: "A shout jumble is not a sequence.",
        },
      ),
      explainQ(
        "g4en-os-p3",
        "Why should a trait claim point to an action in the story?",
        "Actions are checkable evidence. Without them, trait words are empty labels anyone could stick on.",
        "How would a classmate verify your claim?",
        "Labels without proof are guesswork.",
        ["action|evidence|prove|show|did|because"],
      ),
    ],
    reasoning: [
      q(
        "g4en-os-r1",
        "Two readers call the stag 'proud' and 'careful' from different moments. Can both be fair?",
        "Yes — characters can show more than one trait across events",
        "No — each story allows only one trait forever",
        "Traits are only for human characters, never animals in tales",
        "a",
        "Stories often reveal several qualities. Animal characters in tales still carry traits.",
        "Can a person — or tale animal — be more than one thing?",
        "Single-trait rules and human-only rules are too narrow.",
        {
          a: "You allowed a rich character.",
          b: "Stories often show several traits.",
          c: "Tale animals carry traits too.",
        },
      ),
      explainQ(
        "g4en-os-r2",
        "How does sequencing help you explain a character trait?",
        "Order shows what the character faced and chose next. The choice after the problem is often the best trait evidence.",
        "Where does the proving action sit in time?",
        "A floating trait with no timeline is harder to trust.",
        ["order|next|choice|after|evidence|trait"],
      ),
    ],
    retrieve: [
      q(
        "g4en-os-t1",
        "Sequencing events means...",
        "lining what happened in a clear beginning-to-end order",
        "listing every colour word in the forest",
        "refusing to say what happened first",
        "a",
        "Sequence is ordered events.",
        "What does a listener need to follow the plot?",
        "Colour lists are not sequences of events.",
        {
          a: "You defined sequencing.",
          b: "Colours decorate; they are not the order skill.",
          c: "Refusing order breaks the skill.",
        },
      ),
      writeQ(
        "g4en-os-t2",
        "Name one character trait with evidence and list two events in order.",
        [
          "brave",
          "careful",
          "kind",
          "wise",
          "patient",
          "first",
          "then",
          "warn",
          "cross",
          "help",
        ],
        "Example: Trait — careful, because he warned others. First notice ditch, then warn the young deer.",
        "Quality + proof action + ordered events.",
        "A trait with no order is incomplete for this chapter.",
        ["brave|careful|kind|wise|patient|proud|protective", "first|then|next|warn|cross|after"],
      ),
    ],
    misconceptions: [
      {
        idea: "Traits are the same as feelings of one second.",
        correction:
          "Feelings flash; traits are more lasting qualities shown through choices.",
      },
      {
        idea: "Sequence is only for dates with numbers.",
        correction:
          "Story order uses first/next/then even without calendar dates.",
      },
    ],
    reflect: {
      prompt:
        "Which trait do you hope people see in your choices this week?",
      keyIdeas: ["trait|kind|brave|careful"],
    },
    mastery: q(
      "g4en-os-m1",
      "The Old Stag asks you to...",
      "name a trait with evidence and sequence events",
      "only memorise antler facts",
      "tell events in a random scramble on purpose",
      "a",
      "Trait evidence plus sequence are the skills.",
      "Which pair matches the chapter?",
      "Antler facts and scrambles miss the goals.",
      {
        a: "You held both skills.",
        b: "Antler facts are optional decoration.",
        c: "Order matters in storytelling.",
      },
    ),
    masteryCriteria:
      "You can name a trait with story evidence and put at least three events in order.",
    teach: {
      prompt:
        "Teach Ivshi the stag's trait with evidence and a three-step sequence.",
      keyIdeas: ["trait|evidence", "first|then|finally"],
    },
  },
});

export const brailleLesson = grade4EnglishLesson({
  conceptId: "ncert-g4-santoor-braille-core",
  title: "Braille",
  domainTitle: "Literature",
  prerequisites: ["ncert-g4-santoor-the-old-stag-core"],
  nextConceptIds: ["ncert-g4-santoor-fit-body-mind-nation-core"],
  coveredSkillIds: [
    "ncert-g4-santoor-braille-core-sk-1-explain-what-braille-is",
    "ncert-g4-santoor-braille-core-sk-2-give-a-reason-access-matters",
  ],
  content: {
    objective:
      "Explain what Braille is in simple words and give a reason why access to reading matters for everyone.",
    wonder: {
      prompt:
        "If every book, sign, and school worksheet stayed only as flat ink on paper forever, who would be locked out of reading — and what tool could reopen the door?",
    },
    explore: {
      text: "Braille is a reading and writing system of raised dots felt with the fingers. Access matters because information should not depend on only one kind of body or one kind of eye.",
      activity: {
        prompt:
          "Which explanation of Braille is clearest and fairest?",
        choices: [
          {
            id: "clear",
            label:
              "Braille uses patterns of raised dots that fingers can read, so people who need touch-reading can access words",
            note: "Clear definition plus purpose. That is explanation with respect.",
          },
          {
            id: "mock",
            label: "Braille is just decoration for bookshelves",
            note: "Braille is a real language tool, not shelf decoration.",
          },
          {
            id: "deny",
            label: "Only one kind of reading should ever exist",
            note: "Many tools can open the same ideas. Access grows when tools fit people.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Braille cells are small groups of raised dots. Different patterns stand for letters, numbers, and punctuation.",
        "Readers move their fingertips across the dots to gather words — reading by touch.",
        "Louis Braille helped develop this system so blind and low-vision readers could read and write independently.",
        "Access matters because learning, safety signs, menus, and stories should be reachable — not reserved for one way of seeing.",
        "Explaining Braille kindly means describing the tool without pity speeches; it is skill and literacy, not a lesser path.",
      ],
    },
    examples: [
      {
        caption: "What it is",
        body: "A Braille page is a touchable code of dots that map to language.",
      },
      {
        caption: "Why access matters",
        body: "A lift button with Braille helps someone know the floor without guessing.",
      },
      {
        caption: "Classroom link",
        body: "When materials exist in more than one form, more learners can join the same idea.",
      },
    ],
    connection:
      "Ramps, captions, and large print share Braille's bigger idea: design so more people can take part.",
    try: {
      prompt:
        "Explain Braille in one or two sentences. Then give one reason access to reading tools matters.",
      reveal:
        "Example: Braille is raised-dot writing read with fingers. Access matters so everyone can learn from books and signs, not only people who use ink print.",
    },
    practice: [
      q(
        "g4en-br-p1",
        "What is Braille?",
        "a system of raised dots that can be read by touch",
        "a type of loudspeaker music only",
        "a rule that bans all books",
        "a",
        "Braille is touch-reading through dot patterns.",
        "Which definition matches the tool?",
        "Music and book bans are not Braille.",
        {
          a: "You explained the system.",
          b: "Braille is not a speaker genre.",
          c: "Braille opens books; it does not ban them.",
        },
      ),
      q(
        "g4en-br-p2",
        "Which reason shows why access matters?",
        "People deserve ways to read that fit how they sense the world",
        "Only one student in a school should ever read",
        "Signs are only for decoration",
        "a",
        "Access is about fair entry to information.",
        "Which reason respects learners?",
        "Limiting readers and decoration-only signs fight access.",
        {
          a: "You gave a fairness reason.",
          b: "Reading is for many, not one.",
          c: "Signs carry information, not only looks.",
        },
      ),
      explainQ(
        "g4en-br-p3",
        "Why is calling Braille 'just bumps' too small an explanation?",
        "The bumps are organised into a code for language. Calling them 'just bumps' hides that they carry letters, words, and meaning like print does.",
        "What do the dots stand for?",
        "Shape without meaning undersells literacy.",
        ["code|letter|word|read|meaning|language"],
      ),
    ],
    reasoning: [
      q(
        "g4en-br-r1",
        "A building has stairs but no Braille on the lift. What access problem remains?",
        "A blind visitor may struggle to know floors and find independence",
        "Stairs alone solve every information need",
        "Lifts never need labels of any kind",
        "a",
        "Movement access and information access are both needed.",
        "What information is still missing?",
        "Stairs do not replace readable labels.",
        {
          a: "You separated movement from information access.",
          b: "Stairs do not label floors by touch.",
          c: "Labels help many users.",
        },
      ),
      explainQ(
        "g4en-br-r2",
        "How does explaining Braille clearly fight unfair pity?",
        "Clear explanation treats Braille as a skilled literacy tool. Pity talks as if readers are helpless; respect talks about systems that open doors.",
        "Tool versus pity — which story helps?",
        "Pity can hide the real need for access.",
        ["tool|skill|read|respect|access|literacy"],
      ),
    ],
    retrieve: [
      q(
        "g4en-br-t1",
        "Giving a reason access matters means...",
        "saying why people need ways to reach information and learning",
        "listing every dot without a purpose",
        "claiming books should stay locked",
        "a",
        "Reasons answer why access helps fairness and learning.",
        "What question does a reason answer?",
        "Locked books fight the chapter's idea.",
        {
          a: "You stated the why.",
          b: "Dots need purpose in an explanation.",
          c: "Locking books denies access.",
        },
      ),
      writeQ(
        "g4en-br-t2",
        "Explain what Braille is and give one reason access matters.",
        [
          "dots",
          "raised",
          "touch",
          "read",
          "fingers",
          "access",
          "learn",
          "sign",
          "book",
          "fair",
        ],
        "Example: Braille is raised dots read with fingers. Access matters so more people can learn from the same ideas.",
        "Definition + fairness or learning reason.",
        "A joke that mocks readers is not an explanation.",
        ["dot|raised|touch|finger|braille|read", "access|learn|fair|sign|book|everyone"],
      ),
    ],
    misconceptions: [
      {
        idea: "Braille is only for children.",
        correction:
          "People of many ages use Braille for school, work, and daily life.",
      },
      {
        idea: "If I can see print, access tools are not my concern.",
        correction:
          "Access is a shared design goal. Classmates and neighbours may need different tools.",
      },
    ],
    reflect: {
      prompt:
        "Where have you seen an access tool (ramp, caption, Braille, large print) that helped someone join in?",
      keyIdeas: ["access|braille|help"],
    },
    mastery: q(
      "g4en-br-m1",
      "Braille asks you to...",
      "explain the raised-dot system and why access matters",
      "only decorate notebooks with random dots",
      "argue that one reading tool is enough for all bodies",
      "a",
      "Explanation plus access reason are the skills.",
      "Which pair matches the chapter?",
      "Random dots and single-tool rules miss the goals.",
      {
        a: "You held both skills.",
        b: "Decoration without meaning is not Braille literacy.",
        c: "Many tools can open reading.",
      },
    ),
    masteryCriteria:
      "You can explain Braille simply and give one clear reason access to reading matters.",
    teach: {
      prompt:
        "Teach Ivshi what Braille is and why access tools matter, in kind clear words.",
      keyIdeas: ["braille|dots|touch", "access|reason|fair"],
    },
  },
});
