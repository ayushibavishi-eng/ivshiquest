import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade7ScienceLesson } from "@/content/lessons/grade-7-science/format";

export const heatTransferLesson = grade7ScienceLesson({
  conceptId: "ncert-g7-curiosity-heat-transfer-core",
  title: "Heat Transfer in Nature",
  domainTitle: "Energy",
  prerequisites: ["ncert-g7-curiosity-adolescence-core"],
  nextConceptIds: ["ncert-g7-curiosity-time-and-motion-core"],
  content: {
    objective: "Name conduction, convection, or radiation and give a nature or everyday example of heat transfer.",
    wonder: {
      prompt: "Sun warms your face, a metal spoon warms in hot tea, and breeze moves over heated land — are these the same kind of heat travel?",
    },
    explore: {
      text: "Heat transfers by conduction (through contact), convection (through fluid movement), and radiation (through electromagnetic waves, including from the Sun). Nature examples make the three ways memorable.",
      activity: {
        prompt: "Land heats in daytime sun and air begins to rise. Which heat-transfer story fits best?",
        choices: [
          {
            id: "conv",
            label: "Radiation from the Sun warms land; warmed air can rise in convection",
            note: "You connected radiation and convection in nature.",
          },
          {
            id: "only-cond",
            label: "Only conduction through empty air with no movement",
            note: "Air movement points to convection; sunlight is radiation.",
          },
          {
            id: "none",
            label: "Heat never transfers outdoors",
            note: "Outdoor warming is heat transfer in action.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Heat flows from warmer places toward cooler places in everyday situations.",
        "Conduction transfers heat through direct contact — a metal pan handle warming in your hand.",
        "Convection transfers heat as warmer fluid rises and cooler fluid sinks — breezes and boiling water currents.",
        "Radiation transfers heat as waves — sunlight warming skin without needing air as a wire.",
        "Naming the way helps you predict: why do woollen layers trap air, or why do dark soils warm faster in sun?",
      ],
    },
    examples: [
      {
        caption: "Conduction",
        body: "A metal spoon in hot soup becomes warm by conduction.",
      },
      {
        caption: "Convection",
        body: "Sea breezes relate to uneven heating and moving air.",
      },
      {
        caption: "Radiation",
        body: "Sunshine warms your face by radiation.",
      },
    ],
    connection: "Cooking, weather, and choosing clothes for a sunny trek all use heat-transfer ideas.",
    try: {
      prompt: "Name each heat-transfer way once and give one example for each.",
      reveal: "Conduction: hot pan. Convection: boiling roll. Radiation: sun on skin.",
    },
    practice: [
      q(
        "g7s-ht-p1",
        "Which statement best matches heat transfer?",
        "Heat can travel by conduction, convection, or radiation, each with nature examples",
        "Heat only moves when you can see orange fire",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Heat can travel by conduction, convection, or radiation, each with nature examples",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g7s-ht-p2",
        "Which detail best supports careful Grade 7 investigation thinking?",
        "Sunlight warming skin is radiation; a hot spoon is conduction",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “Sunlight warming skin is radiation; a hot spoon is conduction” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7s-ht-p3",
        "Which move shows scientific reasoning?",
        "Predict, observe or recall evidence, then explain",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Prediction and evidence lead explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7s-ht-r1",
        "In your own words, explain why this matters: Heat can travel by conduction, convection, or radiation, each with nature examples",
        "It matters because Heat can travel by conduction, convection, or radiation, each with nature examples. A supporting detail is: Sunlight warming skin is radiation; a hot spoon is conduction.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7s-ht-r2",
        "A classmate claims: “Heat only moves when you can see orange fire.” What is the better reply?",
        "Point to evidence: Sunlight warming skin is radiation; a hot spoon is conduction",
        "Agree quickly so the discussion ends",
        "Say science never uses reasons",
        "a",
        "Reasoning returns to scientific evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Science thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7s-ht-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Heat can travel by conduction, convection, or radiation, each with nature examples",
        "Heat only moves when you can see orange fire",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea: Heat can travel by conduction, convection, or radiation, each with nature examples",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7s-ht-t2",
        "Write one or two sentences that name a heat-transfer way and give a nature example.",
        ["Heat can travel", "Sunlight warming skin", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7s-ht-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Heat can travel by conduction, convection, or radiation, each with nature examples. One proof is Sunlight warming skin is radiation; a hot spoon is conduction.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Radiation needs wires like a circuit.",
        correction: "Radiation can travel through space; sunlight is the daily proof.",
      },
      {
        idea: "Convection only happens in kitchens, never in nature.",
        correction: "Winds and water currents are nature’s convection stories.",
      },
    ],
    reflect: {
      prompt: "Which heat-transfer way did you feel most clearly this week?",
      keyIdeas: ["conduction", "convection", "radiation"],
    },
    teach: {
      prompt: "Teach the three ways with one example each in under a minute.",
      keyIdeas: ["three ways", "examples", "nature"],
    },
    masteryCriteria: "You can name heat-transfer ways and give nature or everyday examples.",
  },
});

export const timeAndMotionLesson = grade7ScienceLesson({
  conceptId: "ncert-g7-curiosity-time-and-motion-core",
  title: "Measurement of Time and Motion",
  domainTitle: "Motion",
  prerequisites: ["ncert-g7-curiosity-heat-transfer-core"],
  nextConceptIds: ["ncert-g7-curiosity-life-processes-animals-core"],
  content: {
    objective: "Measure a time interval carefully and describe speed in words as distance related to time.",
    wonder: {
      prompt: "Two friends race across the yard. Without a timer, how would you fairly decide who was faster — and what must you measure?",
    },
    explore: {
      text: "Motion stories need time and distance. A time interval is measured with a clock or stopwatch from a clear start to stop. Speed in words means how much distance in how much time.",
      activity: {
        prompt: "Which plan best investigates who walks faster across the same path?",
        choices: [
          {
            id: "time",
            label: "Use the same path length, start together or compare times, and record durations",
            note: "Same distance plus measured time makes speed talk fair.",
          },
          {
            id: "cheer",
            label: "Cheer louder for one friend and skip timing",
            note: "Cheering is not a measurement.",
          },
          {
            id: "diff",
            label: "Send one on a longer path without noting distances",
            note: "Unequal distances confuse the comparison.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Time intervals are measured between a defined start and stop event.",
        "Clocks and stopwatches need a shared reading method — when exactly does timing begin?",
        "Motion is change of position; describing it carefully uses distance and time together.",
        "Speed in words: greater distance in the same time, or same distance in less time, means faster.",
        "Fair comparisons keep distance comparable when ranking speed.",
      ],
    },
    examples: [
      {
        caption: "Time interval",
        body: "A 100 m run timed from starting gun to finish line.",
      },
      {
        caption: "Speed talk",
        body: "A bus covering more kilometres in one hour is faster on that stretch.",
      },
      {
        caption: "Fairness",
        body: "Comparing racers on the same track length keeps the test honest.",
      },
    ],
    connection: "Sports timing, bus schedules, and pulse counts all practise interval measurement.",
    try: {
      prompt: "Describe how you would measure time for a 20-step walk. Then say what “faster” means using distance and time.",
      reveal: "Start stopwatch at first step, stop at twentieth. Faster means less time for the same distance (or more distance in the same time).",
    },
    practice: [
      q(
        "g7s-tm-p1",
        "Which statement best matches time and motion measurement?",
        "Measure time intervals clearly; describe speed as distance related to time",
        "Speed can be judged fairly without measuring time or distance",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Measure time intervals clearly; describe speed as distance related to time",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g7s-tm-p2",
        "Which detail best supports careful Grade 7 investigation thinking?",
        "Same path length plus recorded times lets you compare who is faster",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “Same path length plus recorded times lets you compare who is faster” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7s-tm-p3",
        "Which move shows scientific reasoning?",
        "Predict, observe or recall evidence, then explain",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Prediction and evidence lead explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7s-tm-r1",
        "In your own words, explain why this matters: Measure time intervals clearly; describe speed as distance related to time",
        "It matters because Measure time intervals clearly; describe speed as distance related to time. A supporting detail is: Same path length plus recorded times lets you compare who is faster.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7s-tm-r2",
        "A classmate claims: “Speed can be judged fairly without measuring time or distance.” What is the better reply?",
        "Point to evidence: Same path length plus recorded times lets you compare who is faster",
        "Agree quickly so the discussion ends",
        "Say science never uses reasons",
        "a",
        "Reasoning returns to scientific evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Science thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7s-tm-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Measure time intervals clearly; describe speed as distance related to time",
        "Speed can be judged fairly without measuring time or distance",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea: Measure time intervals clearly; describe speed as distance related to time",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7s-tm-t2",
        "Write one or two sentences that explain how to measure a time interval for a short motion.",
        ["Measure time intervals", "Same path length", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7s-tm-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Measure time intervals clearly; describe speed as distance related to time. One proof is Same path length plus recorded times lets you compare who is faster.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Any clock glance is a precise interval even without defined start/stop.",
        correction: "Define the events you time.",
      },
      {
        idea: "Faster only means louder footsteps.",
        correction: "Faster links distance and time.",
      },
    ],
    reflect: {
      prompt: "Where do you already measure time intervals in school or sport?",
      keyIdeas: ["time", "distance", "speed"],
    },
    teach: {
      prompt: "Teach fair speed comparison using same distance and measured times.",
      keyIdeas: ["interval", "same path", "faster means"],
    },
    masteryCriteria: "You can measure a time interval idea and describe speed with distance and time.",
  },
});

export const lifeProcessesAnimalsLesson = grade7ScienceLesson({
  conceptId: "ncert-g7-curiosity-life-processes-animals-core",
  title: "Life Processes in Animals",
  domainTitle: "Life",
  prerequisites: ["ncert-g7-curiosity-time-and-motion-core"],
  nextConceptIds: ["ncert-g7-curiosity-life-processes-plants-core"],
  content: {
    objective: "Name an animal life process and link it to an organ that helps carry it out.",
    wonder: {
      prompt: "After a run you breathe harder and feel hungry later — which life processes are speaking, and which organs are working?",
    },
    explore: {
      text: "Animals carry out life processes such as nutrition, respiration, and transport of materials. Organs support those processes — lungs, heart, stomach, and more. Linking process to organ turns labels into systems thinking.",
      activity: {
        prompt: "Which investigation question best connects a life process to an organ?",
        choices: [
          {
            id: "link",
            label: "When breathing rate rises after exercise, which organs are exchanging and moving gases?",
            note: "You linked respiration/transport to lungs and circulatory helpers.",
          },
          {
            id: "ignore",
            label: "Ignore organs and only list animal names",
            note: "Process–organ links are the chapter skill.",
          },
          {
            id: "one",
            label: "Assume one organ does every life process alone",
            note: "Systems share the work across organs.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Life processes keep animals alive: taking food, exchanging gases, moving materials, removing wastes, sensing, and more.",
        "Nutrition includes taking in and using food; organs like the stomach help digest.",
        "Respiration in everyday school language often points to breathing and gas exchange involving lungs.",
        "The heart helps transport blood that carries useful materials.",
        "Naming a process and its organ partner is systems thinking — not a memorised orphan word.",
      ],
    },
    examples: [
      {
        caption: "Nutrition",
        body: "Stomach and intestines help digest and absorb food.",
      },
      {
        caption: "Breathing link",
        body: "Lungs help exchange gases during breathing.",
      },
      {
        caption: "Transport",
        body: "The heart pumps blood that carries materials around the body.",
      },
    ],
    connection: "PE classes, doctor visits, and animal documentaries all show life processes in action.",
    try: {
      prompt: "Name two life processes and one organ linked to each.",
      reveal: "Breathing — lungs. Digestion — stomach. (Other valid pairs welcome.)",
    },
    practice: [
      q(
        "g7s-la-p1",
        "Which statement best matches animal life processes?",
        "Animals carry out life processes supported by organs working as a system",
        "Life processes happen with no organ involvement at all",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Animals carry out life processes supported by organs working as a system",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g7s-la-p2",
        "Which detail best supports careful Grade 7 investigation thinking?",
        "Lungs help with breathing/gas exchange; the stomach helps digestion",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “Lungs help with breathing/gas exchange; the stomach helps digestion” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7s-la-p3",
        "Which move shows scientific reasoning?",
        "Predict, observe or recall evidence, then explain",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Prediction and evidence lead explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7s-la-r1",
        "In your own words, explain why this matters: Animals carry out life processes supported by organs working as a system",
        "It matters because Animals carry out life processes supported by organs working as a system. A supporting detail is: Lungs help with breathing/gas exchange; the stomach helps digestion.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7s-la-r2",
        "A classmate claims: “Life processes happen with no organ involvement at all.” What is the better reply?",
        "Point to evidence: Lungs help with breathing/gas exchange; the stomach helps digestion",
        "Agree quickly so the discussion ends",
        "Say science never uses reasons",
        "a",
        "Reasoning returns to scientific evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Science thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7s-la-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Animals carry out life processes supported by organs working as a system",
        "Life processes happen with no organ involvement at all",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea: Animals carry out life processes supported by organs working as a system",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7s-la-t2",
        "Write one or two sentences that name a life process and link it to an organ.",
        ["Animals carry out", "Lungs help with", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7s-la-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Animals carry out life processes supported by organs working as a system. One proof is Lungs help with breathing/gas exchange; the stomach helps digestion.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Only humans have life processes.",
        correction: "Animals share core life processes with organ systems suited to them.",
      },
      {
        idea: "The heart digests food.",
        correction: "Match process to the organ that actually supports it.",
      },
    ],
    reflect: {
      prompt: "Which life process do you notice most clearly after sports?",
      keyIdeas: ["process", "organ", "system"],
    },
    teach: {
      prompt: "Teach one process–organ link with a simple everyday moment.",
      keyIdeas: ["life process", "organ", "link"],
    },
    masteryCriteria: "You can name an animal life process and link it to an organ.",
  },
});

export const lifeProcessesPlantsLesson = grade7ScienceLesson({
  conceptId: "ncert-g7-curiosity-life-processes-plants-core",
  title: "Life Processes in Plants",
  domainTitle: "Life",
  prerequisites: ["ncert-g7-curiosity-life-processes-animals-core"],
  nextConceptIds: ["ncert-g7-curiosity-light-shadows-core"],
  content: {
    objective: "Name a plant life process and link it to a plant part such as leaf, root, or stem.",
    wonder: {
      prompt: "A wilting plant perks up after watering — which plant parts moved water, and which leaf process still needs light to make food?",
    },
    explore: {
      text: "Plants make food, take up water and minerals, transport materials, and grow. Leaves, roots, and stems share the work. Photosynthesis is a key leaf process for making food — explored deeply in earlier gold learning — while this chapter maps processes to parts.",
      activity: {
        prompt: "Which investigation best links a plant process to a plant part?",
        choices: [
          {
            id: "leaf",
            label: "Ask how leaf conditions (light/air) relate to food-making, while roots relate to water uptake",
            note: "You mapped processes to parts with testable ideas.",
          },
          {
            id: "only-flower",
            label: "Assume only flowers do every plant process",
            note: "Leaves, roots, and stems carry major processes too.",
          },
          {
            id: "no-water",
            label: "Ignore water and light because plants “just grow”",
            note: "Growth depends on materials and conditions.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Plants perform life processes suited to their structure.",
        "Leaves are major sites for making food using light — photosynthesis language belongs here as a process–part link.",
        "Roots take up water and minerals from soil.",
        "Stems help transport materials between roots and leaves and support the plant.",
        "Linking process to part builds a plant systems map without replacing deeper photosynthesis study from earlier grades.",
      ],
    },
    examples: [
      {
        caption: "Food-making",
        body: "Leaves help plants make food in light.",
      },
      {
        caption: "Uptake",
        body: "Roots absorb water from soil.",
      },
      {
        caption: "Transport",
        body: "Stems carry materials between roots and leaves.",
      },
    ],
    connection: "Gardening, farm irrigation, and classroom plant corners show process–part links daily.",
    try: {
      prompt: "Name two plant processes and the part most clearly linked to each.",
      reveal: "Making food — leaf. Taking up water — root. Transport — stem.",
    },
    practice: [
      q(
        "g7s-lp-p1",
        "Which statement best matches plant life processes?",
        "Plant processes such as food-making, water uptake, and transport link to leaves, roots, and stems",
        "Plants have no life processes because they do not run",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Plant processes such as food-making, water uptake, and transport link to leaves, roots, and stems",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g7s-lp-p2",
        "Which detail best supports careful Grade 7 investigation thinking?",
        "Roots take up water; leaves help make food in light",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “Roots take up water; leaves help make food in light” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7s-lp-p3",
        "Which move shows scientific reasoning?",
        "Predict, observe or recall evidence, then explain",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Prediction and evidence lead explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7s-lp-r1",
        "In your own words, explain why this matters: Plant processes such as food-making, water uptake, and transport link to leaves, roots, and stems",
        "It matters because Plant processes such as food-making, water uptake, and transport link to leaves, roots, and stems. A supporting detail is: Roots take up water; leaves help make food in light.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7s-lp-r2",
        "A classmate claims: “Plants have no life processes because they do not run.” What is the better reply?",
        "Point to evidence: Roots take up water; leaves help make food in light",
        "Agree quickly so the discussion ends",
        "Say science never uses reasons",
        "a",
        "Reasoning returns to scientific evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Science thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7s-lp-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Plant processes such as food-making, water uptake, and transport link to leaves, roots, and stems",
        "Plants have no life processes because they do not run",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea: Plant processes such as food-making, water uptake, and transport link to leaves, roots, and stems",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7s-lp-t2",
        "Write one or two sentences that name a plant process and link it to a plant part.",
        ["Plant processes such", "Roots take up", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7s-lp-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Plant processes such as food-making, water uptake, and transport link to leaves, roots, and stems. One proof is Roots take up water; leaves help make food in light.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Only animals need transport of materials.",
        correction: "Plants transport water and food between parts.",
      },
      {
        idea: "Roots make most of the plant’s food.",
        correction: "Leaves are the main food-making sites in light.",
      },
    ],
    reflect: {
      prompt: "Which plant part do you notice most when you water a pot plant?",
      keyIdeas: ["leaf", "root", "process"],
    },
    teach: {
      prompt: "Teach three process–part links for a plant in one short map.",
      keyIdeas: ["leaf", "root", "stem"],
    },
    masteryCriteria: "You can name a plant life process and link it to a plant part.",
  },
});

export const lightShadowsLesson = grade7ScienceLesson({
  conceptId: "ncert-g7-curiosity-light-shadows-core",
  title: "Light: Shadows and Reflections",
  domainTitle: "Energy",
  prerequisites: ["ncert-g7-curiosity-life-processes-plants-core"],
  nextConceptIds: ["ncert-g7-curiosity-earth-moon-sun-core"],
  content: {
    objective: "Explain how a shadow forms and describe reflection as light bouncing from a surface.",
    wonder: {
      prompt: "Your shadow stretches at sunset but shrinks at noon — what changed about light’s path, and how is that different from seeing yourself in a mirror?",
    },
    explore: {
      text: "Shadows form when an opaque object blocks light. Reflection is light bouncing from a surface toward your eyes. Investigations change light direction, object, or screen to see the effects.",
      activity: {
        prompt: "Which plan best investigates shadow size?",
        choices: [
          {
            id: "move",
            label: "Keep the object and screen idea clear; move the light source closer/farther and record shadow size",
            note: "You changed one factor and watched the shadow respond.",
          },
          {
            id: "guess",
            label: "Guess shadow size without moving anything",
            note: "Investigation needs a deliberate change.",
          },
          {
            id: "mirror",
            label: "Only use a mirror and ignore blocking light",
            note: "Mirrors show reflection; shadows need blocking.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Light travels and can be blocked or bounced.",
        "A shadow appears on a screen or ground when an opaque object stops light from reaching that region.",
        "Shadow size and sharpness change with the positions of source, object, and screen.",
        "Reflection happens when light bounces from a surface — mirrors are strong reflectors.",
        "Seeing an image in a mirror is a reflection story; a silhouette on the wall is a shadow story.",
      ],
    },
    examples: [
      {
        caption: "Shadow",
        body: "A hand in front of a lamp casts a hand-shaped dark region on the wall.",
      },
      {
        caption: "Reflection",
        body: "A mirror reflects light so you see your face.",
      },
      {
        caption: "Position",
        body: "A lower Sun makes longer outdoor shadows.",
      },
    ],
    connection: "Puppet theatres, periscopes, and selfie cameras all play with shadows and reflection.",
    try: {
      prompt: "Explain one shadow and one reflection example from your day.",
      reveal: "Shadow: tree shade on the ground. Reflection: face in a window or mirror.",
    },
    practice: [
      q(
        "g7s-ls-p1",
        "Which statement best matches light shadows and reflection?",
        "Shadows form when light is blocked; reflection is light bouncing from a surface",
        "Shadows and mirror images are the exact same phenomenon",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Shadows form when light is blocked; reflection is light bouncing from a surface",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g7s-ls-p2",
        "Which detail best supports careful Grade 7 investigation thinking?",
        "Moving a lamp closer can enlarge a shadow on the wall",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “Moving a lamp closer can enlarge a shadow on the wall” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7s-ls-p3",
        "Which move shows scientific reasoning?",
        "Predict, observe or recall evidence, then explain",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Prediction and evidence lead explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7s-ls-r1",
        "In your own words, explain why this matters: Shadows form when light is blocked; reflection is light bouncing from a surface",
        "It matters because Shadows form when light is blocked; reflection is light bouncing from a surface. A supporting detail is: Moving a lamp closer can enlarge a shadow on the wall.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7s-ls-r2",
        "A classmate claims: “Shadows and mirror images are the exact same phenomenon.” What is the better reply?",
        "Point to evidence: Moving a lamp closer can enlarge a shadow on the wall",
        "Agree quickly so the discussion ends",
        "Say science never uses reasons",
        "a",
        "Reasoning returns to scientific evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Science thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7s-ls-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Shadows form when light is blocked; reflection is light bouncing from a surface",
        "Shadows and mirror images are the exact same phenomenon",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea: Shadows form when light is blocked; reflection is light bouncing from a surface",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7s-ls-t2",
        "Write one or two sentences that explain how a shadow forms and what reflection means.",
        ["Shadows form when", "Moving a lamp", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7s-ls-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Shadows form when light is blocked; reflection is light bouncing from a surface. One proof is Moving a lamp closer can enlarge a shadow on the wall.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Shadows are painted onto the ground permanently.",
        correction: "Shadows depend on light being blocked right now.",
      },
      {
        idea: "Reflection only happens in expensive mirrors.",
        correction: "Many surfaces reflect; mirrors reflect strongly and clearly.",
      },
    ],
    reflect: {
      prompt: "When did a long shadow surprise you outdoors?",
      keyIdeas: ["shadow", "reflection", "light"],
    },
    teach: {
      prompt: "Teach shadow vs reflection with hand-lamp and mirror examples.",
      keyIdeas: ["block", "bounce", "examples"],
    },
    masteryCriteria: "You can explain shadow formation and describe reflection clearly.",
  },
});

export const earthMoonSunLesson = grade7ScienceLesson({
  conceptId: "ncert-g7-curiosity-earth-moon-sun-core",
  title: "Earth, Moon, and the Sun",
  domainTitle: "Earth & Sky",
  prerequisites: ["ncert-g7-curiosity-light-shadows-core"],
  nextConceptIds: [],
  content: {
    objective: "Explain day and night using Earth’s rotation and describe a Moon or Sun idea in the Earth–Moon–Sun system.",
    wonder: {
      prompt: "Why does the Sun seem to rise and set while the Moon’s shape changes across weeks — what motions are we really seeing?",
    },
    explore: {
      text: "Day and night come from Earth rotating so a place turns into sunlight or out of it. The Moon orbits Earth and we see changing lit portions. The Sun is the system’s light source. Models beat myths for these patterns.",
      activity: {
        prompt: "Which model best investigates day and night?",
        choices: [
          {
            id: "spin",
            label: "Spin a globe (or ball) beside a lamp and watch one spot move from light into dark",
            note: "Rotation into and out of light explains day and night.",
          },
          {
            id: "sun-run",
            label: "Assume the Sun races around Earth daily as a tiny orb only",
            note: "School models centre Earth’s rotation for day/night.",
          },
          {
            id: "moon-only",
            label: "Ignore the Sun and blame only the Moon for daytime",
            note: "Daylight is sunlight on Earth’s sunlit side.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Earth, Moon, and Sun form a system of motions and light.",
        "Day and night happen because Earth rotates: your location turns toward or away from the Sun’s light.",
        "The Sun is the main light source for this daylight story.",
        "The Moon shines by reflecting sunlight; its apparent shape changes as we see different lit portions.",
        "Safety stays with wonder: never look directly at the Sun.",
      ],
    },
    examples: [
      {
        caption: "Day and night",
        body: "A globe spinning beside a lamp shows light and dark sides.",
      },
      {
        caption: "Moon idea",
        body: "Moonlight is reflected sunlight, not Moon-made fire.",
      },
      {
        caption: "Safety",
        body: "Use projections or filters approved by adults for Sun viewing — never unprotected staring.",
      },
    ],
    connection: "Festivals timed by the Moon, sundials, and night-sky clubs all meet this system.",
    try: {
      prompt: "Explain day and night in two sentences. Add one Moon or Sun idea.",
      reveal: "Earth’s rotation turns us into sunlight (day) and out of it (night). The Moon’s changing shape shows different lit portions of reflected sunlight.",
    },
    practice: [
      q(
        "g7s-em-p1",
        "Which statement best matches Earth–Moon–Sun thinking?",
        "Earth’s rotation causes day and night; Moon and Sun ideas fit a lighted, moving system",
        "Night happens because the Sun switches off like a bulb each evening",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Earth’s rotation causes day and night; Moon and Sun ideas fit a lighted, moving system",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g7s-em-p2",
        "Which detail best supports careful Grade 7 investigation thinking?",
        "A globe-and-lamp model shows a location moving from lit side to dark side",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “A globe-and-lamp model shows a location moving from lit side to dark side” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7s-em-p3",
        "Which move shows scientific reasoning?",
        "Predict, observe or recall evidence, then explain",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Prediction and evidence lead explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g7s-em-r1",
        "In your own words, explain why this matters: Earth’s rotation causes day and night; Moon and Sun ideas fit a lighted, moving system",
        "It matters because Earth’s rotation causes day and night; Moon and Sun ideas fit a lighted, moving system. A supporting detail is: A globe-and-lamp model shows a location moving from lit side to dark side.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7s-em-r2",
        "A classmate claims: “Night happens because the Sun switches off like a bulb each evening.” What is the better reply?",
        "Point to evidence: A globe-and-lamp model shows a location moving from lit side to dark side",
        "Agree quickly so the discussion ends",
        "Say science never uses reasons",
        "a",
        "Reasoning returns to scientific evidence.",
        "Evidence beats a rushed agreement.",
        "Ending talk early skips understanding.",
        {
          a: "Evidence keeps the talk honest.",
          b: "Rushing agreement skips proof.",
          c: "Science thrives on reasons.",
        },
      ),
    ],
    retrieve: [
      q(
        "g7s-em-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Earth’s rotation causes day and night; Moon and Sun ideas fit a lighted, moving system",
        "Night happens because the Sun switches off like a bulb each evening",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea: Earth’s rotation causes day and night; Moon and Sun ideas fit a lighted, moving system",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7s-em-t2",
        "Write one or two sentences that explain day and night and add one Moon or Sun idea.",
        ["Earth’s rotation causes", "A globe-and-lamp model", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7s-em-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Earth’s rotation causes day and night; Moon and Sun ideas fit a lighted, moving system. One proof is A globe-and-lamp model shows a location moving from lit side to dark side.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "The Moon produces its own strong daylight for Earth.",
        correction: "Daylight is sunlight; moonlight is reflected sunlight.",
      },
      {
        idea: "Looking straight at the Sun is a safe investigation.",
        correction: "Never look directly at the Sun; use safe methods only.",
      },
    ],
    reflect: {
      prompt: "What sky pattern — sunrise side, Moon shape, or stars — do you notice most?",
      keyIdeas: ["rotation", "day night", "Moon"],
    },
    teach: {
      prompt: "Teach day and night with a ball-and-lamp model in words.",
      keyIdeas: ["rotation", "sunlight", "Moon reflects"],
    },
    masteryCriteria: "You can explain day and night and describe a Moon or Sun idea safely.",
  },
});
