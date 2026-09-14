import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade7EnglishLesson } from "@/content/lessons/grade-7-english/format";

export const brothersGreatInventionLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-brothers-great-invention-core",
  title: "My Brother’s Great Invention",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-say-the-right-thing-core"],
  nextConceptIds: ["ncert-g7-poorvi-paper-boats-core"],
  content: {
    objective: "Sequence the invention attempts and talk about trying again after setbacks.",
    wonder: {
      prompt: "How many “failed” tries hide inside a finished invention — and why does the order of attempts matter?",
    },
    explore: {
      text: "Invention stories are sequences of tries. Sequencing keeps the attempts in order. Talking about trying again links creativity to perseverance. Present perfect can mark what has been tried so far.",
      activity: {
        prompt: "What should readers track?",
        choices: [
          {
            id: "seq",
            label: "The order of invention attempts and the lesson of trying again",
            note: "Sequence plus perseverance is the skill pair.",
          },
          {
            id: "one",
            label: "Only the final success, erasing every earlier attempt",
            note: "Earlier attempts teach the process.",
          },
          {
            id: "luck",
            label: "Assume success needs no attempts at all",
            note: "Trial-and-error is the chapter’s engine.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "My Brother’s Great Invention follows creativity through trial and error.",
        "Sequencing names attempt one, two, three — what changed each time.",
        "Trying again is the emotional and practical lesson after a flop.",
        "Paragraph unity keeps one invention idea clear while you narrate the attempts.",
        "Present perfect fits: “He has tried three designs” links past attempts to now.",
      ],
    },
    examples: [
      {
        caption: "Sequence",
        body: "Idea → first build → problem → improved build.",
      },
      {
        caption: "Try again",
        body: "A flop becomes data for the next attempt.",
      },
      {
        caption: "Unity",
        body: "One paragraph, one focus: the second attempt’s fix.",
      },
    ],
    connection: "Science fair projects, coding bugs, and craft repairs all live on sequenced tries.",
    try: {
      prompt: "List three invention beats in order. Write one sentence about trying again.",
      reveal: "Beats: plan, fail, improve. Trying again turns failure into the next step.",
    },
    practice: [
      q(
        "g7en-bi-p1",
        "Which statement best matches the invention story?",
        "Sequence the attempts and value trying again after setbacks",
        "Only the final invention matters; attempts are worthless",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Sequence the attempts and value trying again after setbacks",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-bi-p2",
        "Which detail best supports careful Grade 7 reading?",
        "Each attempt changes something before the next try",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “Each attempt changes something before the next try” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-bi-p3",
        "Which move shows Grade 7 literary reasoning?",
        "Track evidence, then name the idea it builds",
        "Memorise one fancy word and stop thinking",
        "Change the ending so struggle disappears",
        "a",
        "Evidence first keeps interpretation honest.",
        "Proof before claim.",
        "Fancy words alone are not understanding.",
        {
          a: "Evidence leads the idea.",
          b: "One word is not a full reading.",
          c: "Struggle often carries meaning.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7en-bi-r1",
        "In your own words, explain why this matters: Sequence the attempts and value trying again after setbacks",
        "It matters because Sequence the attempts and value trying again after setbacks. A supporting detail is: Each attempt changes something before the next try.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-bi-r2",
        "A classmate claims: “Only the final invention matters; attempts are worthless.” What is the better reply?",
        "Point to evidence: Each attempt changes something before the next try",
        "Agree quickly so the discussion ends",
        "Say literature never needs reasons",
        "a",
        "Reasoning returns to textual evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Literature thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7en-bi-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Sequence the attempts and value trying again after setbacks",
        "Only the final invention matters; attempts are worthless",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Sequence the attempts and value trying again after setbacks",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-bi-t2",
        "Write one or two sentences that sequence the invention attempts and comment on trying again.",
        ["Sequence the attempts", "Each attempt changes", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-bi-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Sequence the attempts and value trying again after setbacks. One proof is Each attempt changes something before the next try.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Sequence means listing every tiny screw.",
        correction: "Keep the main attempt beats that change the outcome.",
      },
      {
        idea: "Trying again means repeating the identical mistake forever.",
        correction: "Improve something between attempts.",
      },
    ],
    reflect: {
      prompt: "What have you improved by trying again this month?",
      keyIdeas: ["sequence", "try again", "invention"],
    },
    teach: {
      prompt: "Teach sequenced attempts and the try-again lesson.",
      keyIdeas: ["order", "setback", "improve"],
    },
    masteryCriteria: "You can sequence invention attempts and talk about trying again.",
  },
});

export const paperBoatsLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-paper-boats-core",
  title: "Paper Boats",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-brothers-great-invention-core"],
  nextConceptIds: ["ncert-g7-poorvi-north-south-east-west-core"],
  content: {
    objective: "Find an image in the poem and connect it to a childhood memory.",
    wonder: {
      prompt: "Which small homemade object — a boat, a kite, a note — still carries a memory for you?",
    },
    explore: {
      text: "Image poems invite pictures in words. Finding an image means naming what you see. Connecting to a memory makes the poem personal. An adverbial clause can deepen when or where the memory lives.",
      activity: {
        prompt: "What should readers do with Paper Boats?",
        choices: [
          {
            id: "image-mem",
            label: "Find a paper-boat image and connect it to a memory",
            note: "Image plus memory is the skill pair.",
          },
          {
            id: "tech",
            label: "Only discuss paper chemistry with no feeling",
            note: "The poem carries imagination and memory.",
          },
          {
            id: "none",
            label: "Refuse any personal connection",
            note: "Connection is part of the learning.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Paper Boats is a poem of childhood and imagination on the water.",
        "An image might be floating paper, rain, a stream, or a child’s hands folding.",
        "Connecting to a memory means naming a real moment the image awakens.",
        "Adverbial clauses deepen time or place: when the monsoon began, where the drain ran.",
        "Imagination and memory travel together in this poem.",
      ],
    },
    examples: [
      {
        caption: "Image",
        body: "A fragile boat riding a rainy stream.",
      },
      {
        caption: "Memory",
        body: "Folding paper toys on a wet afternoon at home.",
      },
      {
        caption: "Clause",
        body: "I remember the boats when the first rain filled the lane.",
      },
    ],
    connection: "Monsoon play, craft class, and rainy holidays often float the same images.",
    try: {
      prompt: "Name one poem image. Write one memory it connects to, using when or where if you can.",
      reveal: "Image: floating paper. Memory: a rainy lane — when the water rose.",
    },
    practice: [
      q(
        "g7en-pb-p1",
        "Which statement best matches Paper Boats?",
        "Find a vivid image and connect it to a personal memory",
        "Images in poems never connect to real life",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Find a vivid image and connect it to a personal memory",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-pb-p2",
        "Which detail best supports careful Grade 7 reading?",
        "A floating paper boat on rainwater is a clear poem image",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “A floating paper boat on rainwater is a clear poem image” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-pb-p3",
        "Which move shows Grade 7 literary reasoning?",
        "Track evidence, then name the idea it builds",
        "Memorise one fancy word and stop thinking",
        "Change the ending so struggle disappears",
        "a",
        "Evidence first keeps interpretation honest.",
        "Proof before claim.",
        "Fancy words alone are not understanding.",
        {
          a: "Evidence leads the idea.",
          b: "One word is not a full reading.",
          c: "Struggle often carries meaning.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7en-pb-r1",
        "In your own words, explain why this matters: Find a vivid image and connect it to a personal memory",
        "It matters because Find a vivid image and connect it to a personal memory. A supporting detail is: A floating paper boat on rainwater is a clear poem image.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-pb-r2",
        "A classmate claims: “Images in poems never connect to real life.” What is the better reply?",
        "Point to evidence: A floating paper boat on rainwater is a clear poem image",
        "Agree quickly so the discussion ends",
        "Say literature never needs reasons",
        "a",
        "Reasoning returns to textual evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Literature thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7en-pb-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Find a vivid image and connect it to a personal memory",
        "Images in poems never connect to real life",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Find a vivid image and connect it to a personal memory",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-pb-t2",
        "Write one or two sentences that connect a poem image to a memory.",
        ["Find a vivid", "A floating paper", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-pb-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Find a vivid image and connect it to a personal memory. One proof is A floating paper boat on rainwater is a clear poem image.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "An image must be a printed picture beside the poem.",
        correction: "In literature, images are also pictures made of words.",
      },
      {
        idea: "Memories must be famous events.",
        correction: "Small personal moments count.",
      },
    ],
    reflect: {
      prompt: "What homemade toy still holds a memory for you?",
      keyIdeas: ["image", "memory", "childhood"],
    },
    teach: {
      prompt: "Teach finding an image and linking a memory.",
      keyIdeas: ["image", "memory", "when/where"],
    },
    masteryCriteria: "You can find an image and connect it to a memory.",
  },
});

export const northSouthEastWestLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-north-south-east-west-core",
  title: "North, South, East, West",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-paper-boats-core"],
  nextConceptIds: ["ncert-g7-poorvi-the-tunnel-core"],
  content: {
    objective: "Track directions or places in the travel narrative and state the traveller’s purpose.",
    wonder: {
      prompt: "When you set out — even across a city — what purpose steers your directions: curiosity, duty, or wonder?",
    },
    explore: {
      text: "Travel texts map places and purposes. Tracking directions keeps the journey clear. Stating purpose answers why the traveller moves. Future forms and quantifiers often appear in travel talk.",
      activity: {
        prompt: "What should readers track?",
        choices: [
          {
            id: "map",
            label: "Places or directions on the journey, plus the traveller’s purpose",
            note: "Map plus purpose is the skill pair.",
          },
          {
            id: "none",
            label: "Ignore places and invent a different trip",
            note: "The text’s route matters.",
          },
          {
            id: "only-food",
            label: "Only food lists with no purpose",
            note: "Purpose steers the journey’s meaning.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "North, South, East, West follows travel and exploration.",
        "Tracking directions or places means naming where the traveller goes in order.",
        "Purpose answers why: to learn, to meet, to see, to deliver.",
        "Future forms help plan: we will head east; we are going to visit.",
        "Quantifiers like many towns or a few stops keep journey talk precise.",
      ],
    },
    examples: [
      {
        caption: "Track",
        body: "From home east to the station, then south to the coast.",
      },
      {
        caption: "Purpose",
        body: "To explore and learn, not only to wander without aim.",
      },
      {
        caption: "Future",
        body: "Tomorrow we will follow the northern road.",
      },
    ],
    connection: "School trips, family pilgrimages, and map apps all mix directions with purpose.",
    try: {
      prompt: "List three places or directions from the journey idea. Write one sentence stating the traveller’s purpose.",
      reveal: "Places in order. Purpose: why the journey matters.",
    },
    practice: [
      q(
        "g7en-nw-p1",
        "Which statement best matches this travel text?",
        "Track directions or places and state the traveller’s purpose clearly",
        "Purpose never matters if the places sound exciting",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Track directions or places and state the traveller’s purpose clearly",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-nw-p2",
        "Which detail best supports careful Grade 7 reading?",
        "A sequence of named places shows the journey’s path",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “A sequence of named places shows the journey’s path” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-nw-p3",
        "Which move shows Grade 7 literary reasoning?",
        "Track evidence, then name the idea it builds",
        "Memorise one fancy word and stop thinking",
        "Change the ending so struggle disappears",
        "a",
        "Evidence first keeps interpretation honest.",
        "Proof before claim.",
        "Fancy words alone are not understanding.",
        {
          a: "Evidence leads the idea.",
          b: "One word is not a full reading.",
          c: "Struggle often carries meaning.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7en-nw-r1",
        "In your own words, explain why this matters: Track directions or places and state the traveller’s purpose clearly",
        "It matters because Track directions or places and state the traveller’s purpose clearly. A supporting detail is: A sequence of named places shows the journey’s path.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-nw-r2",
        "A classmate claims: “Purpose never matters if the places sound exciting.” What is the better reply?",
        "Point to evidence: A sequence of named places shows the journey’s path",
        "Agree quickly so the discussion ends",
        "Say literature never needs reasons",
        "a",
        "Reasoning returns to textual evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Literature thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7en-nw-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Track directions or places and state the traveller’s purpose clearly",
        "Purpose never matters if the places sound exciting",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Track directions or places and state the traveller’s purpose clearly",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-nw-t2",
        "Write one or two sentences that state the traveller’s purpose with one place clue.",
        ["Track directions or", "A sequence of", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-nw-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Track directions or places and state the traveller’s purpose clearly. One proof is A sequence of named places shows the journey’s path.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Tracking places means memorising every tiny landmark.",
        correction: "Keep the main route beats.",
      },
      {
        idea: "Purpose is always treasure hunting.",
        correction: "Learning and meeting are purposes too.",
      },
    ],
    reflect: {
      prompt: "What purpose would steer your next real journey?",
      keyIdeas: ["direction", "place", "purpose"],
    },
    teach: {
      prompt: "Teach tracking a route and naming purpose.",
      keyIdeas: ["places", "purpose", "journey"],
    },
    masteryCriteria: "You can track directions or places and state the traveller’s purpose.",
  },
});

export const theTunnelLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-the-tunnel-core",
  title: "The Tunnel",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-north-south-east-west-core"],
  nextConceptIds: ["ncert-g7-poorvi-travel-core"],
  content: {
    objective: "Describe the adventure setting and find a courage moment in the story.",
    wonder: {
      prompt: "What makes a dark place frightening — and what single action turns fear into courage?",
    },
    explore: {
      text: "Adventure settings shape feeling: dark, narrow, echoing. Describing setting uses precise nouns and careful agreement. A courage moment is an action taken despite fear.",
      activity: {
        prompt: "What should readers notice?",
        choices: [
          {
            id: "set-courage",
            label: "The tunnel setting’s details and a moment of courage inside it",
            note: "Setting plus courage is the skill pair.",
          },
          {
            id: "skip-set",
            label: "Ignore setting and only list character names",
            note: "Setting drives the adventure feeling.",
          },
          {
            id: "no-fear",
            label: "Pretend courage needs no fear at all",
            note: "Courage faces fear; it does not erase it.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The Tunnel is an adventure story of fear, courage, and setting.",
        "Setting description paints where the action happens — light, sound, space.",
        "A courage moment is a choice to continue, help, or face the dark.",
        "Agreement across phrases keeps writing clear: The walls of the tunnel are damp.",
        "Pronoun agreement keeps who did what unambiguous in tense scenes.",
      ],
    },
    examples: [
      {
        caption: "Setting",
        body: "A dark, echoing passage with a distant light.",
      },
      {
        caption: "Courage",
        body: "Taking one more step when turning back feels easier.",
      },
      {
        caption: "Agreement",
        body: "The sounds in the tunnel make the heart race.",
      },
    ],
    connection: "Hill roads, underpasses, and night walks can echo the same setting-and-courage pattern.",
    try: {
      prompt: "Describe the setting in two sentences. Underline one courage moment and say why it counts.",
      reveal: "Setting: sensory details of the tunnel. Courage: an action taken despite fear.",
    },
    practice: [
      q(
        "g7en-tu-p1",
        "Which statement best matches The Tunnel?",
        "Describe the setting carefully and find a courage moment proved by action",
        "Courage means never feeling fear",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Describe the setting carefully and find a courage moment proved by action",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-tu-p2",
        "Which detail best supports careful Grade 7 reading?",
        "A step forward in the dark can be a courage moment",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “A step forward in the dark can be a courage moment” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-tu-p3",
        "Which move shows Grade 7 literary reasoning?",
        "Track evidence, then name the idea it builds",
        "Memorise one fancy word and stop thinking",
        "Change the ending so struggle disappears",
        "a",
        "Evidence first keeps interpretation honest.",
        "Proof before claim.",
        "Fancy words alone are not understanding.",
        {
          a: "Evidence leads the idea.",
          b: "One word is not a full reading.",
          c: "Struggle often carries meaning.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7en-tu-r1",
        "In your own words, explain why this matters: Describe the setting carefully and find a courage moment proved by action",
        "It matters because Describe the setting carefully and find a courage moment proved by action. A supporting detail is: A step forward in the dark can be a courage moment.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-tu-r2",
        "A classmate claims: “Courage means never feeling fear.” What is the better reply?",
        "Point to evidence: A step forward in the dark can be a courage moment",
        "Agree quickly so the discussion ends",
        "Say literature never needs reasons",
        "a",
        "Reasoning returns to textual evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Literature thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7en-tu-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Describe the setting carefully and find a courage moment proved by action",
        "Courage means never feeling fear",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Describe the setting carefully and find a courage moment proved by action",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-tu-t2",
        "Write one or two sentences that describe the setting and name a courage moment.",
        ["Describe the setting", "A step forward", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-tu-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Describe the setting carefully and find a courage moment proved by action. One proof is A step forward in the dark can be a courage moment.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Setting is only a backdrop decoration.",
        correction: "Setting shapes fear and choice.",
      },
      {
        idea: "Pronouns can point to anyone without clarity.",
        correction: "Keep pronoun reference clear.",
      },
    ],
    reflect: {
      prompt: "When have you taken one brave step in a hard setting?",
      keyIdeas: ["setting", "courage", "fear"],
    },
    teach: {
      prompt: "Teach setting description and one courage moment.",
      keyIdeas: ["setting", "courage action", "clarity"],
    },
    masteryCriteria: "You can describe the setting and find a courage moment with proof.",
  },
});

export const travelLesson = grade7EnglishLesson({
  conceptId: "ncert-g7-poorvi-travel-core",
  title: "Travel",
  domainTitle: "Literature",
  prerequisites: ["ncert-g7-poorvi-the-tunnel-core"],
  nextConceptIds: ["ncert-g7-poorvi-conquering-the-summit-core"],
  content: {
    objective: "Find a travel image in the poem and read with rhythm that matches movement.",
    wonder: {
      prompt: "Which travel image — train windows, dusty roads, sea spray — makes your feet itch to move?",
    },
    explore: {
      text: "Travel poems carry movement in images and rhythm. Finding the image means picturing motion. Reading with rhythm lets the journey sound like movement. Relative clauses can add detail to a place or traveller.",
      activity: {
        prompt: "What should readers practise?",
        choices: [
          {
            id: "image-rhythm",
            label: "A travel image voiced with rhythm that feels like movement",
            note: "Image plus rhythm is the skill pair.",
          },
          {
            id: "flat",
            label: "Read in a flat monotone that erases movement",
            note: "Rhythm supports the travel feeling.",
          },
          {
            id: "no-image",
            label: "Skip images and only count syllables silently",
            note: "Images carry the poem’s journey.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Travel is a poem of movement, curiosity, and wish.",
        "A travel image might be wheels, horizons, bags, or changing light.",
        "Reading with rhythm means letting line beats suggest motion — not racing mindlessly.",
        "A relative pronoun can add detail: the road that climbs the hill.",
        "Curiosity and wish often ride inside the same travel image.",
      ],
    },
    examples: [
      {
        caption: "Image",
        body: "A train window framing rushing fields.",
      },
      {
        caption: "Rhythm",
        body: "Steady beats for footsteps; quicker beats for wheels.",
      },
      {
        caption: "Relative",
        body: "The harbour which smelled of salt called us onward.",
      },
    ],
    connection: "Commutes, holidays, and imagined journeys all feed travel poetry.",
    try: {
      prompt: "Name one travel image. Read a short stretch aloud with journey rhythm.",
      reveal: "Image: moving landscape. Rhythm: paced like travel, not a shout.",
    },
    practice: [
      q(
        "g7en-tr-p1",
        "Which statement best matches the Travel poem?",
        "Find a travel image and read with rhythm that suggests movement",
        "Travel poems have no images, only abstract advice",
        "Skip the text and invent a random ending",
        "a",
        "The strongest choice matches the chapter’s idea: Find a travel image and read with rhythm that suggests movement",
        "Stay with careful reading.",
        "A trap idea or invented ending is not faithful reading.",
        {
          a: "You stayed with the chapter’s idea.",
          b: "That trap pulls away from the text’s meaning.",
          c: "Inventing an ending skips careful reading.",
        },
      ),
      q(
        "g7en-tr-p2",
        "Which detail best supports careful Grade 7 reading?",
        "A window, road, or horizon image can carry the journey",
        "Ignore images, tone, and character choices",
        "Assume every text has the same message",
        "a",
        "A concrete detail such as “A window, road, or horizon image can carry the journey” supports the skill.",
        "Look for evidence from the text.",
        "Skipping details weakens claims.",
        {
          a: "You used a concrete text detail.",
          b: "Images, tone, and choices are clues.",
          c: "Each text carries its own idea.",
        },
      ),
      q(
        "g7en-tr-p3",
        "Which move shows Grade 7 literary reasoning?",
        "Track evidence, then name the idea it builds",
        "Memorise one fancy word and stop thinking",
        "Change the ending so struggle disappears",
        "a",
        "Evidence first keeps interpretation honest.",
        "Proof before claim.",
        "Fancy words alone are not understanding.",
        {
          a: "Evidence leads the idea.",
          b: "One word is not a full reading.",
          c: "Struggle often carries meaning.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7en-tr-r1",
        "In your own words, explain why this matters: Find a travel image and read with rhythm that suggests movement",
        "It matters because Find a travel image and read with rhythm that suggests movement. A supporting detail is: A window, road, or horizon image can carry the journey.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7en-tr-r2",
        "A classmate claims: “Travel poems have no images, only abstract advice.” What is the better reply?",
        "Point to evidence: A window, road, or horizon image can carry the journey",
        "Agree quickly so the discussion ends",
        "Say literature never needs reasons",
        "a",
        "Reasoning returns to textual evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Literature thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7en-tr-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Find a travel image and read with rhythm that suggests movement",
        "Travel poems have no images, only abstract advice",
        "The chapter only lists unrelated dictionary words",
        "a",
        "Retrieval keeps the core idea: Find a travel image and read with rhythm that suggests movement",
        "Recall the heart of the text.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7en-tr-t2",
        "Write one or two sentences that name a travel image and how rhythm should sound.",
        ["Find a travel", "A window, road,", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7en-tr-m1",
        "Teach a younger reader the chapter’s idea. Use one clear detail as proof.",
        "The idea is that Find a travel image and read with rhythm that suggests movement. One proof is A window, road, or horizon image can carry the journey.",
        "Idea plus proof.",
        "Teaching without proof leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Rhythm means shouting every word.",
        correction: "Rhythm is paced movement in the voice.",
      },
      {
        idea: "Relative pronouns are only for grammar drills.",
        correction: "They add living detail to travel lines.",
      },
    ],
    reflect: {
      prompt: "What travel image would you put in a poem of your own?",
      keyIdeas: ["travel image", "rhythm", "movement"],
    },
    teach: {
      prompt: "Teach a travel image and demonstrate rhythmic reading.",
      keyIdeas: ["image", "rhythm", "curiosity"],
    },
    masteryCriteria: "You can find a travel image and read with fitting rhythm.",
  },
});
