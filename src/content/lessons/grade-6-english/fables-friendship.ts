import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade6EnglishLesson } from "@/content/lessons/grade-6-english/format";

export const bottleOfDewLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-bottle-of-dew",
  title: "A Bottle of Dew",
  domainTitle: "Literature",
  prerequisites: [],
  nextConceptIds: ["ncert-g6-poorvi-raven-and-fox"],
  coveredSkillIds: [
    "ncert-g6-poorvi-bottle-of-dew-sk-1-retell-the-story",
    "ncert-g6-poorvi-bottle-of-dew-sk-2-state-the-story-s-idea",
  ],
  content: {
    objective: "Retell Rama Natha’s story and state its idea about diligence over magic shortcuts.",
    wonder: {
      prompt: "If someone promised you a magic bottle that could make you rich overnight, what would you still want to know before believing them?",
    },
    explore: {
      text: "Folk tales often test a wish against work. Retelling keeps the order of events. Stating the story’s idea means naming what the events quietly teach about effort.",
      activity: {
        prompt: "Rama Natha hopes for a magic bottle of dew. What should a careful reader watch for most?",
        choices: [
          {
            id: "work",
            label: "How hope meets real work, and what that meeting teaches",
            note: "You are reading for the idea the journey builds.",
          },
          {
            id: "only-magic",
            label: "Only the magical object, with no attention to people or choices",
            note: "Objects matter, but choices and labour carry the meaning.",
          },
          {
            id: "skip",
            label: "Skip the middle and invent a flashy ending",
            note: "The middle of the story is where diligence appears.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A Bottle of Dew follows a wish for an easy shortcut and the slower truth of work.",
        "Retelling means naming the main beats: the wish, the guidance, the labour, and the result.",
        "The story’s idea is not a lecture. It grows from what happens when effort replaces waiting for magic.",
        "Diligence here means steady work that changes the land and the person, not a sudden charm.",
        "When you state the idea, keep it faithful: hard work — not dew alone — brings the real gain.",
      ],
    },
    examples: [
      {
        caption: "Retell spine",
        body: "Wish for a shortcut → guidance → long work → true gain from effort.",
      },
      {
        caption: "Idea without preaching",
        body: "The ending shows diligence working, so readers can name the idea themselves.",
      },
      {
        caption: "Detail that proves",
        body: "The garden or field that grows through labour is stronger proof than a shiny bottle.",
      },
    ],
    connection: "Homework, sports practice, and learning a craft all test the same wish: shortcut versus steady work.",
    try: {
      prompt: "Retell the story in four beats, then write one sentence that states its idea about hard work.",
      reveal: "Example beats: wish, advice, work, result. Idea: lasting gain comes from diligence, not a magic bottle alone.",
    },
    practice: [
      q(
        "g6en-bd-p1",
        "Which line best matches retell the story?",
        "True success grows from hard work, not a magic shortcut alone",
        "Magic dew alone creates wealth without any effort",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: True success grows from hard work, not a magic shortcut alone",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-bd-p2",
        "What best supports state the story’s idea?",
        "Rama Natha’s long labour on the land brings the real change",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — Rama Natha’s long labour on the land brings the real change — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-bd-p3",
        "Which move shows careful Grade 6 reading?",
        "Retell key events or images in order, then name the idea they build",
        "Copy one fancy word and stop thinking",
        "Change the ending so the characters never struggle",
        "a",
        "Careful reading keeps order and then states the idea the details build.",
        "Order first, then idea.",
        "Fancy words alone or erased struggle do not equal understanding.",
        {
          a: "You linked order to meaning.",
          b: "One word is not a full reading.",
          c: "Struggle often carries the lesson.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g6en-bd-r1",
        "In your own words, explain why this idea matters in the text: True success grows from hard work, not a magic shortcut alone",
        "The text points toward True success grows from hard work, not a magic shortcut alone. Details such as Rama Natha’s long labour on the land brings the real change help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["true success grows from", "detail", "idea"],
      ),
      q(
        "g6en-bd-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: Rama Natha’s long labour on the land brings the real change",
        "Agree quickly so the discussion ends",
        "Say the text has no meaning at all",
        "a",
        "Reasoning returns to evidence instead of shutting down thinking.",
        "Evidence beats a rushed agreement.",
        "Ending talk early or denying meaning skips reasoning.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Texts carry ideas worth naming.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6en-bd-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "True success grows from hard work, not a magic shortcut alone",
        "Magic dew alone creates wealth without any effort",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: True success grows from hard work, not a magic shortcut alone",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-bd-t2",
        "Write one or two sentences that state the story’s idea about diligence.",
        ["True success grows from hard work, not a magic shortcut alone", "Rama Natha’s long labour on the land brings the real change", "state the story’s"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["work", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-bd-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The chapter’s idea is that True success grows from hard work, not a magic shortcut alone. One proof is Rama Natha’s long labour on the land brings the real change. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Thinking the bottle itself is the whole point of the story",
        correction: "Ask what the work produced, not only what the bottle promised.",
      },
      {
        idea: "Retelling only the ending and skipping the labour",
        correction: "Keep the middle beats — guidance and work — in your retell.",
      },
    ],
    reflect: {
      prompt: "Where in your own life do you notice a wish for a shortcut? What would diligence look like instead?",
      keyIdeas: ["shortcut", "diligence", "work"],
    },
    teach: {
      prompt: "Teach a friend the story’s idea in under a minute. Use one event as proof.",
      keyIdeas: ["hard work", "not only magic", "proof from events"],
    },
    masteryCriteria: "You can retell the main beats and state that diligence, not a magic shortcut alone, brings the real gain.",
  },
});

export const ravenAndFoxLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-raven-and-fox",
  title: "The Raven and the Fox",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-bottle-of-dew"],
  nextConceptIds: ["ncert-g6-poorvi-rama-to-the-rescue"],
  coveredSkillIds: [
    "ncert-g6-poorvi-raven-and-fox-sk-1-retell-the-fable",
    "ncert-g6-poorvi-raven-and-fox-sk-2-name-the-warning",
  ],
  content: {
    objective: "Retell the raven-and-fox fable and name its warning about pride and flattery.",
    wonder: {
      prompt: "Has praise ever made you stop thinking carefully for a moment? What happened next?",
    },
    explore: {
      text: "Fables pack a warning into a short animal scene. Retelling keeps who wants what. Naming the warning means saying what vanity costs.",
      activity: {
        prompt: "The fox flatters the raven until the morsel drops. What should readers watch?",
        choices: [
          {
            id: "pride",
            label: "How flattering words feed pride and open a trap",
            note: "You are reading for the warning inside the scene.",
          },
          {
            id: "birds",
            label: "Only bird facts, with no attention to words or choices",
            note: "The animals stand for human choices about pride.",
          },
          {
            id: "copy",
            label: "Copy the fox’s tricks in real life to win snacks",
            note: "The fable warns against both flattery and vanity.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The Raven and the Fox is a fable-poem: a short scene with a sharp warning.",
        "Retelling means naming the morsel, the flattery, the song, and the fall.",
        "The warning is about pride that listens to empty praise and loses what it holds.",
        "Flattery here is not kindness. It is clever talk meant to open a trap.",
        "When you name the warning, keep it clear: vanity and sweet words can cost you what you have.",
      ],
    },
    examples: [
      {
        caption: "Fable spine",
        body: "Raven holds food → fox praises → raven shows off → food falls.",
      },
      {
        caption: "Warning line",
        body: "Pride plus flattery can make you drop what matters.",
      },
      {
        caption: "Image clue",
        body: "The falling morsel turns the warning into something you can picture.",
      },
    ],
    connection: "Online praise, classroom compliments, and teasing flattery can all test the same warning.",
    try: {
      prompt: "Retell the fable in four beats, then write one sentence that names the warning.",
      reveal: "Beats: morsel, praise, show-off, loss. Warning: pride and flattery can cost you what you have.",
    },
    practice: [
      q(
        "g6en-rf-p1",
        "Which line best matches retell the fable?",
        "Pride and flattering words can cost you what you already hold",
        "Flattery is always safe kindness with no trap",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: Pride and flattering words can cost you what you already hold",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-rf-p2",
        "What best supports name the warning?",
        "The raven opens its beak to show off and drops the morsel",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — The raven opens its beak to show off and drops the morsel — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-rf-p3",
        "Which move shows careful Grade 6 reading?",
        "Retell key events or images in order, then name the idea they build",
        "Copy one fancy word and stop thinking",
        "Change the ending so the characters never struggle",
        "a",
        "Careful reading keeps order and then states the idea the details build.",
        "Order first, then idea.",
        "Fancy words alone or erased struggle do not equal understanding.",
        {
          a: "You linked order to meaning.",
          b: "One word is not a full reading.",
          c: "Struggle often carries the lesson.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g6en-rf-r1",
        "In your own words, explain why this idea matters in the text: Pride and flattering words can cost you what you already hold",
        "The text points toward Pride and flattering words can cost you what you already hold. Details such as The raven opens its beak to show off and drops the morsel help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["pride and flattering words", "detail", "idea"],
      ),
      q(
        "g6en-rf-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: The raven opens its beak to show off and drops the morsel",
        "Agree quickly so the discussion ends",
        "Say the text has no meaning at all",
        "a",
        "Reasoning returns to evidence instead of shutting down thinking.",
        "Evidence beats a rushed agreement.",
        "Ending talk early or denying meaning skips reasoning.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Texts carry ideas worth naming.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6en-rf-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Pride and flattering words can cost you what you already hold",
        "Flattery is always safe kindness with no trap",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Pride and flattering words can cost you what you already hold",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-rf-t2",
        "Write one or two sentences that name the fable’s warning about pride.",
        ["Pride and flattering words can cost you what you already hold", "The raven opens its beak to show off and drops the morsel", "name the fable’s"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-rf-m1",
        "Teach a younger reader what this poem or text is really saying. Use the idea and one image or line feeling.",
        "The chapter’s idea is that Pride and flattering words can cost you what you already hold. One proof is The raven opens its beak to show off and drops the morsel. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Thinking the fox is only a funny animal with no lesson",
        correction: "Ask what the fox’s words do to the raven’s pride.",
      },
      {
        idea: "Blaming only the fox and ignoring the raven’s vanity",
        correction: "The warning touches both flattery and the pride that drinks it.",
      },
    ],
    reflect: {
      prompt: "When have sweet words made you forget to think? What would careful listening look like next time?",
      keyIdeas: ["flattery", "pride", "careful"],
    },
    teach: {
      prompt: "Teach the fable’s warning using one clear image from the poem.",
      keyIdeas: ["flattery", "pride", "loss"],
    },
    masteryCriteria: "You can retell the fable and name the warning that pride plus flattery can cost what you hold.",
  },
});

export const ramaToTheRescueLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-rama-to-the-rescue",
  title: "Rama to the Rescue",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-raven-and-fox"],
  nextConceptIds: ["ncert-g6-poorvi-unlikely-best-friends"],
  coveredSkillIds: [
    "ncert-g6-poorvi-rama-to-the-rescue-sk-1-sequence-the-events",
    "ncert-g6-poorvi-rama-to-the-rescue-sk-2-name-a-clever-action",
  ],
  content: {
    objective: "Sequence the graphic tale’s events and name a clever action that shows presence of mind.",
    wonder: {
      prompt: "When something sudden happens, what helps more — panic, or a clear next step? Why?",
    },
    explore: {
      text: "A graphic story asks you to read pictures and words together. Sequencing keeps time clear. A clever action is a smart move in the moment, not luck alone.",
      activity: {
        prompt: "Rama faces a challenge that needs quick thinking. What should a reader track?",
        choices: [
          {
            id: "seq",
            label: "The order of events and the clever move that changes them",
            note: "Sequence plus a named action is the chapter’s skill pair.",
          },
          {
            id: "noise",
            label: "Only the loudest panel, with no order",
            note: "Order turns panels into a story.",
          },
          {
            id: "magic",
            label: "Assume a superpower solves everything without thinking",
            note: "Presence of mind is thinking, not a random power.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Rama to the Rescue is a graphic tale: pictures and words share the work of storytelling.",
        "Sequencing means saying what happens first, next, and then — including key panel beats.",
        "A clever action shows presence of mind: noticing, deciding, and acting in time.",
        "Presence of mind is not noise. It is a clear choice under pressure.",
        "When you name a clever action, point to what Rama does that changes the danger.",
      ],
    },
    examples: [
      {
        caption: "Sequence check",
        body: "Challenge appears → Rama notices → clever move → safer outcome.",
      },
      {
        caption: "Clever action",
        body: "A smart move uses what is available and thinks one step ahead.",
      },
      {
        caption: "Panel reading",
        body: "Faces, gestures, and objects in panels can carry as much meaning as speech.",
      },
    ],
    connection: "Crossing a busy road, helping a friend, or fixing a spill all need sequence and a clever next step.",
    try: {
      prompt: "List four events in order from the tale, then underline one clever action and say why it is clever.",
      reveal: "Order first. Then name the action that uses quick thinking to change the danger.",
    },
    practice: [
      q(
        "g6en-rr-p1",
        "Which line best matches sequence the events?",
        "Presence of mind means noticing and acting with a clever plan in time",
        "Panic alone solves the challenge without any plan",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: Presence of mind means noticing and acting with a clever plan in time",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-rr-p2",
        "What best supports name a clever action?",
        "Rama’s clever move uses quick thinking to change the danger",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — Rama’s clever move uses quick thinking to change the danger — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-rr-p3",
        "Which move shows careful Grade 6 reading?",
        "Retell key events or images in order, then name the idea they build",
        "Copy one fancy word and stop thinking",
        "Change the ending so the characters never struggle",
        "a",
        "Careful reading keeps order and then states the idea the details build.",
        "Order first, then idea.",
        "Fancy words alone or erased struggle do not equal understanding.",
        {
          a: "You linked order to meaning.",
          b: "One word is not a full reading.",
          c: "Struggle often carries the lesson.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g6en-rr-r1",
        "In your own words, explain why this idea matters in the text: Presence of mind means noticing and acting with a clever plan in time",
        "The text points toward Presence of mind means noticing and acting with a clever plan in time. Details such as Rama’s clever move uses quick thinking to change the danger help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["presence of mind means", "detail", "idea"],
      ),
      q(
        "g6en-rr-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: Rama’s clever move uses quick thinking to change the danger",
        "Agree quickly so the discussion ends",
        "Say the text has no meaning at all",
        "a",
        "Reasoning returns to evidence instead of shutting down thinking.",
        "Evidence beats a rushed agreement.",
        "Ending talk early or denying meaning skips reasoning.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Texts carry ideas worth naming.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6en-rr-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Presence of mind means noticing and acting with a clever plan in time",
        "Panic alone solves the challenge without any plan",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Presence of mind means noticing and acting with a clever plan in time",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-rr-t2",
        "Write one or two sentences that name one clever action and why it works.",
        ["Presence of mind means noticing and acting with a clever plan in time", "Rama’s clever move uses quick thinking to change the danger", "name one clever"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-rr-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The chapter’s idea is that Presence of mind means noticing and acting with a clever plan in time. One proof is Rama’s clever move uses quick thinking to change the danger. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Reading panels out of order and losing the cause of the rescue",
        correction: "Track first → next → then before naming the clever move.",
      },
      {
        idea: "Calling any loud action clever",
        correction: "Clever means useful and thoughtful under pressure.",
      },
    ],
    reflect: {
      prompt: "Describe a time you needed a clear next step. What helped you think?",
      keyIdeas: ["next step", "think", "calm"],
    },
    teach: {
      prompt: "Teach a younger reader how to sequence a graphic story and spot one clever action.",
      keyIdeas: ["order", "clever action", "presence of mind"],
    },
    masteryCriteria: "You can sequence key events and name a clever action that shows presence of mind.",
  },
});

export const unlikelyBestFriendsLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-unlikely-best-friends",
  title: "The Unlikely Best Friends",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-rama-to-the-rescue"],
  nextConceptIds: ["ncert-g6-poorvi-friends-prayer"],
  coveredSkillIds: [
    "ncert-g6-poorvi-unlikely-best-friends-sk-1-describe-the-friends",
    "ncert-g6-poorvi-unlikely-best-friends-sk-2-find-a-loyalty-moment",
  ],
  content: {
    objective: "Describe the unlikely friends and find a loyalty moment that holds the friendship together.",
    wonder: {
      prompt: "Can two people (or creatures) who seem different still become true friends? What would prove it?",
    },
    explore: {
      text: "Friendship stories often cross an expected divide. Description names who the friends are. Loyalty shows up in a moment of standing by someone.",
      activity: {
        prompt: "What makes a friendship ‘unlikely’ and still real?",
        choices: [
          {
            id: "loyal",
            label: "Difference on the outside, loyalty in a key moment",
            note: "Unlikely plus loyalty is the heart of the chapter.",
          },
          {
            id: "same",
            label: "Friends must be identical in every habit and interest",
            note: "The story explores friendship across a divide.",
          },
          {
            id: "never",
            label: "Loyalty never needs to be shown in action",
            note: "A loyalty moment is an action, not only a word.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The Unlikely Best Friends explores friendship that crosses an expected divide.",
        "Describing the friends means saying who they are and what makes them seem unlikely together.",
        "A loyalty moment is a scene where one stands by the other when it matters.",
        "Loyalty is proved in action more than in slogans.",
        "When you find that moment, name what each friend risks or offers.",
      ],
    },
    examples: [
      {
        caption: "Describe pair",
        body: "Name each friend, the difference people notice, and the bond they share.",
      },
      {
        caption: "Loyalty moment",
        body: "A choice to stay, help, or speak up when walking away would be easier.",
      },
      {
        caption: "Unlikely clue",
        body: "Readers feel surprise because the friendship crosses a usual line.",
      },
    ],
    connection: "Classrooms, teams, and neighbourhoods often hold friendships that look unlikely from outside.",
    try: {
      prompt: "Describe the two friends in two sentences, then name one loyalty moment and why it counts.",
      reveal: "Description: who + difference. Loyalty: a concrete stand-by-you action.",
    },
    practice: [
      q(
        "g6en-ub-p1",
        "Which line best matches describe the friends?",
        "Friendship can cross a divide when loyalty shows up in action",
        "Friends must match in every way or the bond is fake",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: Friendship can cross a divide when loyalty shows up in action",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-ub-p2",
        "What best supports find a loyalty moment?",
        "A moment when one friend stands by the other under pressure",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — A moment when one friend stands by the other under pressure — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-ub-p3",
        "Which move shows careful Grade 6 reading?",
        "Retell key events or images in order, then name the idea they build",
        "Copy one fancy word and stop thinking",
        "Change the ending so the characters never struggle",
        "a",
        "Careful reading keeps order and then states the idea the details build.",
        "Order first, then idea.",
        "Fancy words alone or erased struggle do not equal understanding.",
        {
          a: "You linked order to meaning.",
          b: "One word is not a full reading.",
          c: "Struggle often carries the lesson.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g6en-ub-r1",
        "In your own words, explain why this idea matters in the text: Friendship can cross a divide when loyalty shows up in action",
        "The text points toward Friendship can cross a divide when loyalty shows up in action. Details such as A moment when one friend stands by the other under pressure help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["friendship can cross a", "detail", "idea"],
      ),
      q(
        "g6en-ub-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: A moment when one friend stands by the other under pressure",
        "Agree quickly so the discussion ends",
        "Say the text has no meaning at all",
        "a",
        "Reasoning returns to evidence instead of shutting down thinking.",
        "Evidence beats a rushed agreement.",
        "Ending talk early or denying meaning skips reasoning.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Texts carry ideas worth naming.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6en-ub-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Friendship can cross a divide when loyalty shows up in action",
        "Friends must match in every way or the bond is fake",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Friendship can cross a divide when loyalty shows up in action",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-ub-t2",
        "Write one or two sentences that describe the friends and one loyalty moment.",
        ["Friendship can cross a divide when loyalty shows up in action", "A moment when one friend stands by the other under pressure", "describe the friends"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-ub-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The chapter’s idea is that Friendship can cross a divide when loyalty shows up in action. One proof is A moment when one friend stands by the other under pressure. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Describing only appearance and skipping the bond",
        correction: "Add what they share and how they treat each other.",
      },
      {
        idea: "Calling any polite smile loyalty",
        correction: "Loyalty moments cost something or risk something.",
      },
    ],
    reflect: {
      prompt: "Who has shown you loyalty? What did that person do?",
      keyIdeas: ["loyalty", "action", "friend"],
    },
    teach: {
      prompt: "Teach what ‘unlikely friends’ means using one loyalty moment as proof.",
      keyIdeas: ["unlikely", "loyalty", "proof"],
    },
    masteryCriteria: "You can describe the friends and point to a loyalty moment that holds the friendship.",
  },
});

export const friendsPrayerLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-friends-prayer",
  title: "A Friend’s Prayer",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-unlikely-best-friends"],
  nextConceptIds: ["ncert-g6-poorvi-the-chair"],
  coveredSkillIds: [
    "ncert-g6-poorvi-friends-prayer-sk-1-find-the-wish",
    "ncert-g6-poorvi-friends-prayer-sk-2-read-a-stanza-aloud",
  ],
  content: {
    objective: "Find the friendship wish in the poem and practise reading a stanza aloud with care.",
    wonder: {
      prompt: "If you could wish one good thing for a friend, what would you choose — and why that, not something flashy?",
    },
    explore: {
      text: "A prayer-poem turns hope into lines you can hear. Finding the wish means naming what the speaker wants for a friend. Reading aloud means carrying feeling without rushing.",
      activity: {
        prompt: "What should a reader listen for in A Friend’s Prayer?",
        choices: [
          {
            id: "wish",
            label: "The hope spoken for a friend, carried in the stanza’s voice",
            note: "Wish plus voice is the poem’s skill pair.",
          },
          {
            id: "speed",
            label: "Only speed, as if racing through the lines wins",
            note: "Reading aloud needs care, not only pace.",
          },
          {
            id: "self",
            label: "Only wishes for yourself, ignoring the friend",
            note: "This poem centres care for a friend.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A Friend’s Prayer puts the hope of friendship into verse.",
        "Finding the wish means naming the good the speaker wants for a friend.",
        "Reading a stanza aloud is a skill: breathe, pace, and let key words land.",
        "Tone matters — kindness and hope should be heard, not mumbled away.",
        "When wish and voice meet, the poem becomes something shared, not only silent print.",
      ],
    },
    examples: [
      {
        caption: "Wish line",
        body: "Point to words that name care, strength, joy, or guidance for a friend.",
      },
      {
        caption: "Aloud craft",
        body: "Pause at line ends when needed; stress words that carry the wish.",
      },
      {
        caption: "Feeling clue",
        body: "A prayer tone is earnest — sincere, not silly shout.",
      },
    ],
    connection: "Birthday notes, team huddles, and quiet hopes for friends all practise the same care.",
    try: {
      prompt: "Write the poem’s main wish in one sentence. Then read one stanza aloud twice — second time slower.",
      reveal: "Wish: a hope for a friend’s good. Aloud: slower pace lets the wish land.",
    },
    practice: [
      q(
        "g6en-fp-p1",
        "Which line best matches find the wish?",
        "The speaker wishes lasting good and care for a friend",
        "The poem only wishes for toys and nothing about character or care",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: The speaker wishes lasting good and care for a friend",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-fp-p2",
        "What best supports read a stanza aloud?",
        "Lines that name hope, kindness, or strength for a friend",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — Lines that name hope, kindness, or strength for a friend — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-fp-p3",
        "Which move shows careful Grade 6 reading?",
        "Retell key events or images in order, then name the idea they build",
        "Copy one fancy word and stop thinking",
        "Change the ending so the characters never struggle",
        "a",
        "Careful reading keeps order and then states the idea the details build.",
        "Order first, then idea.",
        "Fancy words alone or erased struggle do not equal understanding.",
        {
          a: "You linked order to meaning.",
          b: "One word is not a full reading.",
          c: "Struggle often carries the lesson.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g6en-fp-r1",
        "In your own words, explain why this idea matters in the text: The speaker wishes lasting good and care for a friend",
        "The text points toward The speaker wishes lasting good and care for a friend. Details such as Lines that name hope, kindness, or strength for a friend help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["the speaker wishes lasting", "detail", "idea"],
      ),
      q(
        "g6en-fp-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: Lines that name hope, kindness, or strength for a friend",
        "Agree quickly so the discussion ends",
        "Say the text has no meaning at all",
        "a",
        "Reasoning returns to evidence instead of shutting down thinking.",
        "Evidence beats a rushed agreement.",
        "Ending talk early or denying meaning skips reasoning.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Texts carry ideas worth naming.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6en-fp-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "The speaker wishes lasting good and care for a friend",
        "The poem only wishes for toys and nothing about character or care",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: The speaker wishes lasting good and care for a friend",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-fp-t2",
        "Write one or two sentences that name the friendship wish in your own words.",
        ["The speaker wishes lasting good and care for a friend", "Lines that name hope, kindness, or strength for a friend", "name the friendship"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-fp-m1",
        "Teach a younger reader what this poem or text is really saying. Use the idea and one image or line feeling.",
        "The chapter’s idea is that The speaker wishes lasting good and care for a friend. One proof is Lines that name hope, kindness, or strength for a friend. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Reading so fast that the wish cannot be heard",
        correction: "Slow down and stress the hope words.",
      },
      {
        idea: "Mixing the wish with a joke about friendship",
        correction: "Keep the sincere tone the prayer asks for.",
      },
    ],
    reflect: {
      prompt: "What wish would you speak for a friend this week? Why that wish?",
      keyIdeas: ["wish", "friend", "care"],
    },
    teach: {
      prompt: "Teach a classmate how to find the wish and read one stanza with feeling.",
      keyIdeas: ["wish", "aloud", "feeling"],
    },
    masteryCriteria: "You can name the friendship wish and read a stanza aloud with care.",
  },
});

export const theChairLesson = grade6EnglishLesson({
  conceptId: "ncert-g6-poorvi-the-chair",
  title: "The Chair",
  domainTitle: "Literature",
  prerequisites: ["ncert-g6-poorvi-friends-prayer"],
  nextConceptIds: ["ncert-g6-poorvi-neem-baba"],
  coveredSkillIds: [
    "ncert-g6-poorvi-the-chair-sk-1-retell-the-story",
    "ncert-g6-poorvi-the-chair-sk-2-say-what-the-chair-stands-fo",
  ],
  content: {
    objective: "Retell the story and say what the chair comes to stand for — belonging and care.",
    wonder: {
      prompt: "Can an ordinary object become a symbol of friendship? What would make that happen?",
    },
    explore: {
      text: "Everyday objects can gather meaning when people share care around them. Retelling keeps events clear. Saying what the chair stands for means naming the symbol.",
      activity: {
        prompt: "In this story, the chair is more than furniture. What should readers notice?",
        choices: [
          {
            id: "symbol",
            label: "How the chair gathers meaning as belonging and care grow",
            note: "You are reading for symbol as well as plot.",
          },
          {
            id: "wood",
            label: "Only the wood type, with no human feeling",
            note: "Material facts alone miss the story’s heart.",
          },
          {
            id: "ignore",
            label: "Ignore the chair and invent a different object",
            note: "The chapter builds meaning around this chair.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The Chair is a friendship story built around an everyday object.",
        "Retelling names who uses the chair, how care grows, and what changes.",
        "What the chair stands for is its symbolic meaning — often belonging, welcome, or shared care.",
        "A symbol is not magic furniture. It is meaning people place through actions.",
        "When you say what the chair stands for, link it to a moment of friendship in the story.",
      ],
    },
    examples: [
      {
        caption: "Retell spine",
        body: "People + chair + shared moments → deeper meaning.",
      },
      {
        caption: "Symbol line",
        body: "The chair stands for belonging when it becomes a place of welcome.",
      },
      {
        caption: "Proof moment",
        body: "A scene of care around the chair proves the symbol is earned.",
      },
    ],
    connection: "A shared bench, a team jersey, or a classroom desk can gather the same kind of meaning.",
    try: {
      prompt: "Retell the story in three beats, then complete: The chair stands for ___ because ___.",
      reveal: "Example: The chair stands for belonging because friends share care around it.",
    },
    practice: [
      q(
        "g6en-ch-p1",
        "Which line best matches retell the story?",
        "The chair comes to stand for belonging and shared care",
        "The chair is only wood and never gathers any meaning",
        "Skip the text and invent a random ending",
        "a",
        "The strongest match stays close to the chapter’s idea: The chair comes to stand for belonging and shared care",
        "Stay with the chapter’s main idea.",
        "A random ending or a trap idea is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g6en-ch-p2",
        "What best supports say what the chair stands for?",
        "Moments of welcome and care gather around the chair",
        "Ignore feelings, images, and actions in the text",
        "Assume every text has the same message as every other text",
        "a",
        "Evidence from the text — Moments of welcome and care gather around the chair — supports the skill.",
        "Look for a concrete detail from the chapter.",
        "Skipping details or copying another text’s message is not careful reading.",
        {
          a: "You used a concrete text detail.",
          b: "Feelings, images, and actions are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g6en-ch-p3",
        "Which move shows careful Grade 6 reading?",
        "Retell key events or images in order, then name the idea they build",
        "Copy one fancy word and stop thinking",
        "Change the ending so the characters never struggle",
        "a",
        "Careful reading keeps order and then states the idea the details build.",
        "Order first, then idea.",
        "Fancy words alone or erased struggle do not equal understanding.",
        {
          a: "You linked order to meaning.",
          b: "One word is not a full reading.",
          c: "Struggle often carries the lesson.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g6en-ch-r1",
        "In your own words, explain why this idea matters in the text: The chair comes to stand for belonging and shared care",
        "The text points toward The chair comes to stand for belonging and shared care. Details such as Moments of welcome and care gather around the chair help a reader see that idea without a lecture.",
        "Name the idea and one supporting detail.",
        "Listing random facts without the idea is not enough.",
        ["the chair comes to", "detail", "idea"],
      ),
      q(
        "g6en-ch-r2",
        "A classmate says the trap idea below. What is the better reply?",
        "Point back to evidence: Moments of welcome and care gather around the chair",
        "Agree quickly so the discussion ends",
        "Say the text has no meaning at all",
        "a",
        "Reasoning returns to evidence instead of shutting down thinking.",
        "Evidence beats a rushed agreement.",
        "Ending talk early or denying meaning skips reasoning.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Texts carry ideas worth naming.",
        },
      ),
    ],
    retrieve: [
      q(
        "g6en-ch-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "The chair comes to stand for belonging and shared care",
        "The chair is only wood and never gathers any meaning",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: The chair comes to stand for belonging and shared care",
        "Recall the heart of the text.",
        "The trap idea or a dictionary list is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the chapter’s heart.",
          c: "The chapter builds an idea, not a word list.",
        },
      ),
      writeQ(
        "g6en-ch-t2",
        "Write one or two sentences that say what the chair stands for and why.",
        ["The chair comes to stand for belonging and shared care", "Moments of welcome and care gather around the chair", "say what the"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "detail"],
      ),
    ],
    mastery: explainQ(
        "g6en-ch-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The chapter’s idea is that The chair comes to stand for belonging and shared care. One proof is Moments of welcome and care gather around the chair. Together they show why the text matters.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "proof", "detail"],
      ),
    misconceptions: [
      {
        idea: "Treating the chair as a talking character with no human care",
        correction: "Meaning comes from how people treat one another around it.",
      },
      {
        idea: "Retelling without naming the symbol",
        correction: "End with what the chair stands for.",
      },
    ],
    reflect: {
      prompt: "Name an object that stands for belonging in your life. What moments gave it meaning?",
      keyIdeas: ["belonging", "object", "care"],
    },
    teach: {
      prompt: "Teach how an ordinary chair can stand for friendship. Use one story moment.",
      keyIdeas: ["symbol", "belonging", "moment"],
    },
    masteryCriteria: "You can retell the story and say the chair stands for belonging and care, with proof.",
  },
});
