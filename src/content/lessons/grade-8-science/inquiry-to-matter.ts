import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade8ScienceLesson } from "@/content/lessons/grade-8-science/format";

export const investigativeWorldLesson = grade8ScienceLesson({
  conceptId: "ncert-g8-curiosity-investigative-world-core",
  title: "Exploring the Investigative World of Science",
  domainTitle: "Inquiry",
  prerequisites: [],
  nextConceptIds: ["ncert-g8-curiosity-invisible-living-core"],
  content: {
    objective:
      "Ask an investigative question you can check with evidence, and design a fair way to gather that evidence.",
    wonder: {
      prompt:
        "A rumour, a guess, and a measured result can all sound confident — what makes one of them scientific instead of only persuasive?",
    },
    explore: {
      text: "Science grows when people turn curiosity into questions that evidence can answer. An investigative question points toward observation, measurement, or a fair comparison. Changing one factor at a time keeps causes visible.",
      activity: {
        prompt:
          "You wonder whether warm water dissolves sugar faster than cold water. Which plan best turns that wonder into an investigation?",
        choices: [
          {
            id: "fair",
            label:
              "Use the same sugar amount and stirring, change only water temperature, and time how long dissolving takes",
            note: "One clear change plus careful timing turns a wonder into evidence.",
          },
          {
            id: "argue",
            label: "Declare an answer after a loud debate with no measurements",
            note: "Debate without data cannot settle a dissolving question.",
          },
          {
            id: "mix",
            label:
              "Change sugar amount, cup size, stirring, and temperature all at once",
            note: "Too many changes hide which factor mattered.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The investigative world of science is a habit of mind: notice, question, check, and revise.",
        "A strong investigative question can be checked with evidence — not only with opinion or popularity.",
        "Fair tests keep most conditions the same and change one carefully chosen factor.",
        "Records matter: times, sketches, counts, and notes let others follow your thinking.",
        "When evidence surprises you, the investigation succeeded in teaching something new.",
      ],
    },
    examples: [
      {
        caption: "Investigative question",
        body: "Does a black tray warm sand faster than a white tray under the same lamp?",
      },
      {
        caption: "Fair-test move",
        body: "Keep sand mass and lamp distance the same; change only tray colour; record temperatures.",
      },
      {
        caption: "Evidence talk",
        body: "“After five minutes the black tray sand rose 4 °C more” beats “I just feel sure.”",
      },
    ],
    connection:
      "Kitchen timing, sports practice, and weather watching all reward checkable questions.",
    try: {
      prompt:
        "Write one investigative question about everyday heating or dissolving. Name what you would keep the same.",
      reveal:
        "Example: Does powdered sugar dissolve faster than cube sugar if water temperature, volume, and stirring stay the same?",
    },
    practice: [
      q(
        "g8s-inv-p1",
        "Which statement best matches investigative science?",
        "Ask a question you can check with evidence, then gather that evidence fairly",
        "Science questions are only opinions that never need evidence",
        "Skip records and invent any story that sounds clever",
        "a",
        "The strongest choice matches the science idea: Ask a question you can check with evidence, then gather that evidence fairly.",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g8s-inv-p2",
        "Which detail best supports careful Grade 8 investigation thinking?",
        "A sugar-dissolve test changes only water temperature and records times",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “A sugar-dissolve test changes only water temperature and records times” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8s-inv-p3",
        "Which move shows scientific reasoning?",
        "Predict, observe or measure, then explain with the evidence",
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
        "g8s-inv-r1",
        "In your own words, explain why this matters: Ask a question you can check with evidence, then gather that evidence fairly.",
        "It matters because an investigative question points toward evidence, and a fair test keeps causes visible. A supporting detail is a sugar-dissolve test that changes only water temperature and records times.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "fair"],
      ),
      q(
        "g8s-inv-r2",
        "A classmate claims: “Science questions are only opinions that never need evidence.” What is the better reply?",
        "Point to evidence: a sugar-dissolve test that changes only temperature and records times",
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
        "g8s-inv-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Ask a question you can check with evidence, then gather that evidence fairly",
        "Science questions are only opinions that never need evidence",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea: Ask a question you can check with evidence, then gather that evidence fairly.",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8s-inv-t2",
        "Write one or two sentences that ask an investigative question and say what you would keep the same.",
        ["investigative", "evidence", "same", "temperature", "fair"],
        "A short written recall should name a checkable question or a fair-test detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["question", "evidence"],
      ),
    ],
    mastery: explainQ(
      "g8s-inv-m1",
      "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
      "The idea is that investigative questions can be checked with evidence gathered fairly. One proof is a sugar-dissolve test that changes only water temperature and records times.",
      "Idea plus proof.",
      "Teaching without an example leaves the listener guessing.",
      ["idea", "example", "evidence"],
    ),
    misconceptions: [
      {
        idea: "If my prediction misses, the investigation was useless.",
        correction:
          "A clear miss still teaches — evidence updated the idea, which is the point of investigating.",
      },
      {
        idea: "Changing many things at once makes a stronger test.",
        correction: "One clear change keeps the cause visible.",
      },
    ],
    reflect: {
      prompt:
        "What everyday wonder could you turn into a question you could actually check?",
      keyIdeas: ["question", "evidence", "fair test"],
    },
    teach: {
      prompt:
        "Teach what makes a question investigative using the sugar-in-water example.",
      keyIdeas: ["checkable", "fair test", "evidence"],
    },
    masteryCriteria:
      "You can ask an investigative question and explain how to gather evidence fairly.",
  },
});

export const invisibleLivingLesson = grade8ScienceLesson({
  conceptId: "ncert-g8-curiosity-invisible-living-core",
  title: "The Invisible Living World: Beyond Our Naked Eye",
  domainTitle: "Life",
  prerequisites: ["ncert-g8-curiosity-investigative-world-core"],
  nextConceptIds: ["ncert-g8-curiosity-health-treasure-core"],
  content: {
    objective:
      "Explain why the cell is treated as a basic unit of living things, and describe microorganisms as living things too small to see with the naked eye.",
    wonder: {
      prompt:
        "A drop of pond water looks empty — yet under a lens it can teem with tiny movers. What does that change about what “living” can mean?",
    },
    explore: {
      text: "Living things are built from cells — tiny units that carry out life processes. Many living things are microorganisms: too small for the naked eye, yet active in food, soil, water, and our bodies. Tools that magnify open this invisible living world.",
      activity: {
        prompt:
          "You compare a cheek cell sketch with a yeast sketch under a school microscope. What claim best matches the evidence?",
        choices: [
          {
            id: "unit",
            label:
              "Both are living units too small to see clearly without help — cells and microbes belong to the invisible living world",
            note: "Magnification reveals living units the eye alone misses.",
          },
          {
            id: "dust",
            label: "Anything tiny must be non-living dust",
            note: "Size alone does not decide living or non-living.",
          },
          {
            id: "eye",
            label: "If you cannot see it without a lens, it cannot be alive",
            note: "Many living things are simply too small for naked-eye vision.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The cell is treated as a basic unit of life because living organisms are made of one or more cells that carry out life processes.",
        "Microorganisms — including many bacteria, yeasts, and tiny pond organisms — are living things too small to see with the naked eye.",
        "Magnifying tools help us observe cell shapes, movement, and structures that everyday vision misses.",
        "Microbes can help (as in fermentation) or cause trouble (as in some infections) — roles matter as much as size.",
        "Calling something “invisible” means beyond unaided sight, not beyond science.",
      ],
    },
    examples: [
      {
        caption: "Cell as unit",
        body: "Onion skin and cheek scrapings show cell boundaries under a microscope.",
      },
      {
        caption: "Microorganism role",
        body: "Yeast helps dough rise by producing gas during fermentation.",
      },
      {
        caption: "Beyond naked eye",
        body: "Pond water may look clear yet hold many swimming microorganisms.",
      },
    ],
    connection:
      "Bread-making, yogurt, compost, and handwashing all touch the invisible living world.",
    try: {
      prompt:
        "Name one microorganism role that helps humans and one reason we still wash hands carefully.",
      reveal:
        "Example: Yeast helps bread rise; washing reduces harmful microbes that can spread between people.",
    },
    practice: [
      q(
        "g8s-micro-p1",
        "Which statement best matches the invisible living world?",
        "Cells are basic living units; microorganisms are living things too small for the naked eye",
        "Anything too small to see must be non-living dust",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Cells are basic living units; microorganisms are living things too small for the naked eye.",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g8s-micro-p2",
        "Which detail best supports careful Grade 8 life-science thinking?",
        "Yeast is a microorganism that can help dough rise during fermentation",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “Yeast is a microorganism that can help dough rise during fermentation” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8s-micro-p3",
        "Which move shows scientific reasoning about cells?",
        "Use magnified observation to explain why cells are treated as units of life",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Observation and explanation lead understanding.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8s-micro-r1",
        "In your own words, explain why this matters: Cells are basic living units; microorganisms are living things too small for the naked eye.",
        "It matters because life is organised in cells, and many living things are microbes we need tools to see. A supporting detail is yeast helping dough rise during fermentation.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "cell", "micro"],
      ),
      q(
        "g8s-micro-r2",
        "A classmate claims: “If you cannot see it without a lens, it cannot be alive.” What is the better reply?",
        "Point to evidence: microorganisms such as yeast are living yet need magnification to see clearly",
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
      writeQ(
        "g8s-micro-t1",
        "Write one or two sentences that explain why the cell is treated as a basic unit of living things.",
        ["cell", "unit", "living", "life", "organism"],
        "A short written recall should name the cell-as-unit idea.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["cell", "unit"],
      ),
      q(
        "g8s-micro-t2",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Cells are basic living units; microorganisms are living things too small for the naked eye",
        "Anything too small to see must be non-living dust",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea about cells and microorganisms.",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
    ],
    mastery: explainQ(
      "g8s-micro-m1",
      "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
      "The idea is that cells are basic units of life and microorganisms are living things too small for the naked eye. One proof is yeast helping dough rise.",
      "Idea plus proof.",
      "Teaching without an example leaves the listener guessing.",
      ["idea", "cell", "microorganism"],
    ),
    misconceptions: [
      {
        idea: "Tiny always means non-living.",
        correction:
          "Many living microorganisms are simply too small for unaided sight.",
      },
      {
        idea: "All microbes only cause harm.",
        correction:
          "Microbes can help in food and ecosystems as well as cause some diseases.",
      },
    ],
    reflect: {
      prompt:
        "Where have you met helpful microbes in food or farming without seeing them?",
      keyIdeas: ["cell", "microorganism", "magnify"],
    },
    teach: {
      prompt:
        "Teach why cells and microbes belong to the invisible living world using one kitchen example.",
      keyIdeas: ["cell unit", "microorganism", "beyond naked eye"],
    },
    masteryCriteria:
      "You can explain the cell as a unit of life and describe microorganisms with an example role.",
  },
});

export const healthTreasureLesson = grade8ScienceLesson({
  conceptId: "ncert-g8-curiosity-health-treasure-core",
  title: "Health: The Ultimate Treasure",
  domainTitle: "Health",
  prerequisites: ["ncert-g8-curiosity-invisible-living-core"],
  nextConceptIds: ["ncert-g8-curiosity-electricity-magnetic-heating-core"],
  content: {
    objective:
      "Explain that health includes body, mind, and social wellbeing, and link a disease idea to a cause pathway such as microbes, lifestyle, or environment.",
    wonder: {
      prompt:
        "Feeling “fine” on a report card day and feeling drained after poor sleep can both be about health — what else belongs in health besides “not sick”?",
    },
    explore: {
      text: "Health is more than the absence of illness. It includes physical fitness, mental balance, and supportive social life. Diseases can arise through different pathways — microbes, lifestyle habits, or environmental conditions — so prevention looks different for different causes.",
      activity: {
        prompt:
          "A village has rising stomach illnesses after floods dirty drinking water. Which explanation best matches health thinking?",
        choices: [
          {
            id: "path",
            label:
              "Contaminated water can carry disease-causing microbes — a clear environmental–microbe pathway",
            note: "You linked a disease idea to a cause pathway with evidence sense.",
          },
          {
            id: "luck",
            label: "Illness is only bad luck with no pathway to study",
            note: "Science looks for cause pathways we can understand and reduce.",
          },
          {
            id: "only",
            label: "Health means only “no fever,” so water quality is unrelated",
            note: "Health includes more than one symptom, and environment matters.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Health includes body, mind, and social wellbeing — not only the absence of illness.",
        "Physical health covers strength, sleep, nutrition, and freedom from disease where possible.",
        "Mental and social health include stress, belonging, and supportive relationships.",
        "Diseases can follow different cause pathways: infection by microbes, lifestyle patterns, or environmental hazards.",
        "Treasure health by matching prevention to the pathway — clean water for microbe risks, balanced habits for lifestyle risks, safer surroundings for environmental risks.",
      ],
    },
    examples: [
      {
        caption: "Broader health",
        body: "A student who sleeps well, feels included, and can play is healthier than “no fever alone” suggests.",
      },
      {
        caption: "Microbe pathway",
        body: "Unsafe drinking water can spread microbes that cause digestive illness.",
      },
      {
        caption: "Lifestyle pathway",
        body: "Long screen nights with little movement can strain sleep and mood.",
      },
    ],
    connection:
      "School hygiene, sports, friendships, and sleep all sit inside health as a treasure.",
    try: {
      prompt:
        "Name one habit that supports physical health and one that supports mental or social health.",
      reveal:
        "Example: balanced meals and sleep for the body; talking with a trusted friend when worried for social–mental health.",
    },
    practice: [
      q(
        "g8s-health-p1",
        "Which statement best matches health as a treasure?",
        "Health includes body, mind, and social wellbeing — not only absence of illness",
        "Health means only “no fever,” full stop",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Health includes body, mind, and social wellbeing — not only absence of illness.",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g8s-health-p2",
        "Which detail best supports careful Grade 8 health thinking?",
        "Flood-dirty drinking water can carry microbes that cause stomach illness",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “Flood-dirty drinking water can carry microbes that cause stomach illness” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8s-health-p3",
        "Which move shows scientific reasoning about disease?",
        "Link a disease idea to a cause pathway such as microbes, lifestyle, or environment",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Pathway thinking leads explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8s-health-r1",
        "In your own words, explain why this matters: Health includes body, mind, and social wellbeing — not only absence of illness.",
        "It matters because wellbeing is wider than “not sick.” A supporting detail is that sleep, belonging, and clean water all shape health.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "wellbeing", "health"],
      ),
      q(
        "g8s-health-r2",
        "A classmate claims: “Illness is only bad luck with no pathway to study.” What is the better reply?",
        "Point to evidence: dirty flood water can carry microbes that cause stomach illness",
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
        "g8s-health-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Health includes body, mind, and social wellbeing — not only absence of illness",
        "Health means only “no fever,” full stop",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea about what health includes.",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8s-health-t2",
        "Write one or two sentences that link a disease idea to a cause pathway (microbes, lifestyle, or environment).",
        ["microbe", "lifestyle", "environment", "pathway", "disease", "water"],
        "A short written recall should name a cause pathway.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["pathway", "cause"],
      ),
    ],
    mastery: explainQ(
      "g8s-health-m1",
      "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
      "The idea is that health includes body, mind, and social wellbeing, and diseases can follow pathways such as microbes or environment. One proof is dirty flood water carrying stomach-illness microbes.",
      "Idea plus proof.",
      "Teaching without an example leaves the listener guessing.",
      ["idea", "health", "pathway"],
    ),
    misconceptions: [
      {
        idea: "Health means only “not sick.”",
        correction:
          "Health also includes mental balance and social wellbeing alongside physical fitness.",
      },
      {
        idea: "Every disease has the same single cause.",
        correction:
          "Different diseases can follow different pathways — microbes, lifestyle, or environment.",
      },
    ],
    reflect: {
      prompt:
        "Which part of your own health — body, mind, or social — do you want to protect more carefully this week?",
      keyIdeas: ["wellbeing", "pathway", "prevention"],
    },
    teach: {
      prompt:
        "Teach why health is more than “no illness,” using one microbe or environment example.",
      keyIdeas: ["body", "mind", "social", "cause pathway"],
    },
    masteryCriteria:
      "You can explain broad health and link a disease idea to a cause pathway.",
  },
});

export const electricityMagneticHeatingLesson = grade8ScienceLesson({
  conceptId: "ncert-g8-curiosity-electricity-magnetic-heating-core",
  title: "Electricity: Magnetic and Heating Effects",
  domainTitle: "Energy",
  prerequisites: ["ncert-g8-curiosity-health-treasure-core"],
  nextConceptIds: ["ncert-g8-curiosity-exploring-forces-core"],
  content: {
    objective:
      "Describe heating and magnetic effects of electric current with everyday examples.",
    wonder: {
      prompt:
        "A toaster browns bread and a compass needle can twitch near a wire — what shared invisible traveler is behind both surprises?",
    },
    explore: {
      text: "When electric current flows in a circuit, it can heat a wire and create magnetic effects around it. Heating effects power many appliances; magnetic effects appear in electromagnets and motors. Both effects depend on a complete path for current.",
      activity: {
        prompt:
          "You touch a carefully supervised nichrome wire in a simple circuit after current flows, and you bring a compass near a straight current-carrying wire. What claim best matches both observations?",
        choices: [
          {
            id: "both",
            label:
              "Current can heat the wire and produce a magnetic effect that shifts a nearby compass",
            note: "Heating and magnetic effects are two faces of the same current.",
          },
          {
            id: "heat-only",
            label: "Current can only heat; magnetism is unrelated to electricity",
            note: "Magnetic effects around current are a key chapter idea.",
          },
          {
            id: "magic",
            label: "The toaster and compass tricks are unrelated coincidences",
            note: "Both link to electric current in a circuit.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Electric current in a closed path can produce useful heating — as in heaters, irons, and toasters with suitable wires.",
        "The same current can produce magnetic effects: a compass near a current-carrying wire can deflect, and coiled wires can act as electromagnets when current flows.",
        "Heating depends on the wire and current; magnetic strength depends on current and how the wire is arranged (for example, coils).",
        "Safety matters: heating wires get hot, and circuits should be supervised with proper equipment.",
        "Naming both effects helps you see electricity as more than “lights on” — it is energy in action.",
      ],
    },
    examples: [
      {
        caption: "Heating effect",
        body: "An electric iron’s element warms when current flows through a resistive wire.",
      },
      {
        caption: "Magnetic effect",
        body: "A compass needle near a current-carrying wire can swing away from north.",
      },
      {
        caption: "Electromagnet idea",
        body: "A coil of wire with current can pick up paper clips when it becomes magnetised.",
      },
    ],
    connection:
      "Home appliances, scrapyard magnets, and school circuit demos all show these effects.",
    try: {
      prompt:
        "Name one everyday heating-effect device and one place a magnetic effect of current is useful.",
      reveal:
        "Example: toaster or room heater for heating; electromagnet crane or electric motor for magnetic effects.",
    },
    practice: [
      q(
        "g8s-elec-p1",
        "Which statement best matches magnetic and heating effects of current?",
        "Electric current can heat a wire and create magnetic effects around it",
        "Current can only light bulbs and never affect magnets or heat",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Electric current can heat a wire and create magnetic effects around it.",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g8s-elec-p2",
        "Which detail best supports careful Grade 8 electricity thinking?",
        "A compass near a current-carrying wire can deflect, showing a magnetic effect",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “A compass near a current-carrying wire can deflect” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8s-elec-p3",
        "Which move shows scientific reasoning?",
        "Connect a toaster’s warmth and a compass twitch to current in a closed path",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Examples and pathways lead explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8s-elec-r1",
        "In your own words, explain why this matters: Electric current can heat a wire and create magnetic effects around it.",
        "It matters because the same current can warm appliances and move compasses or lift with electromagnets. A supporting detail is a compass deflecting near a current-carrying wire.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "heat", "magnetic"],
      ),
      q(
        "g8s-elec-r2",
        "A classmate claims: “Magnetism is unrelated to electricity.” What is the better reply?",
        "Point to evidence: a compass near a current-carrying wire can deflect",
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
        "g8s-elec-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Electric current can heat a wire and create magnetic effects around it",
        "Current can only light bulbs and never affect magnets or heat",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea about heating and magnetic effects.",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8s-elec-t2",
        "Write one or two sentences naming a heating-effect example and a magnetic-effect example of current.",
        ["heat", "magnetic", "compass", "toaster", "electromagnet", "iron"],
        "A short written recall should name both effects with examples.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["heating", "magnetic"],
      ),
    ],
    mastery: explainQ(
      "g8s-elec-m1",
      "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
      "The idea is that electric current can heat wires and create magnetic effects. One proof is a compass deflecting near a current-carrying wire, or a toaster warming bread.",
      "Idea plus proof.",
      "Teaching without an example leaves the listener guessing.",
      ["idea", "heating", "magnetic"],
    ),
    misconceptions: [
      {
        idea: "Only magnets create magnetic effects; wires never do.",
        correction:
          "A current-carrying wire can produce a magnetic effect that a compass can reveal.",
      },
      {
        idea: "Heating happens only when something is “broken.”",
        correction:
          "Many devices are designed so resistive wires heat safely when current flows.",
      },
    ],
    reflect: {
      prompt:
        "Which appliance near you relies on the heating effect of current?",
      keyIdeas: ["current", "heating", "magnetic"],
    },
    teach: {
      prompt:
        "Teach heating and magnetic effects with one everyday example each.",
      keyIdeas: ["heating effect", "magnetic effect", "closed path"],
    },
    masteryCriteria:
      "You can describe heating and magnetic effects of current with everyday examples.",
  },
});

export const exploringForcesLesson = grade8ScienceLesson({
  conceptId: "ncert-g8-curiosity-exploring-forces-core",
  title: "Exploring Forces",
  domainTitle: "Motion/Force",
  prerequisites: ["ncert-g8-curiosity-electricity-magnetic-heating-core"],
  nextConceptIds: ["ncert-g8-curiosity-pressure-winds-storms-core"],
  content: {
    objective:
      "Describe a force as a push or pull that can change motion or shape, and explain pressure as force spread over area.",
    wonder: {
      prompt:
        "A sharp pin slips into a board while a blunt thumb does not — same push idea, different result. What invisible spread of force is at work?",
    },
    explore: {
      text: "A force is a push or a pull. Forces can start, stop, speed up, slow down, or reshape objects. Pressure is how concentrated a force is: the same force on a smaller area means greater pressure.",
      activity: {
        prompt:
          "You press equally hard with a fingertip and then with a flat palm on soft clay. Which claim best matches force and pressure thinking?",
        choices: [
          {
            id: "press",
            label:
              "The fingertip makes a deeper mark because the same force is spread over less area — higher pressure",
            note: "Pressure links force to the area it acts on.",
          },
          {
            id: "more-force",
            label: "The fingertip secretly used more force even though you tried to match effort",
            note: "The designed comparison keeps force similar and changes area.",
          },
          {
            id: "ignore",
            label: "Area never matters; only how hard you push counts",
            note: "Area is the key to pressure.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Forces are pushes or pulls that can change an object’s motion or shape.",
        "Friction, gravity, magnetic pulls, and muscular pushes are everyday force examples.",
        "Pressure is force spread over area: pressure rises when force grows or when area shrinks.",
        "Sharp tools, wide snowshoes, and school-bag straps all play with pressure ideas.",
        "Exploring forces means noticing both the push/pull and how concentrated it is.",
      ],
    },
    examples: [
      {
        caption: "Force effect",
        body: "Kicking a ball changes its speed and direction — a push in action.",
      },
      {
        caption: "Pressure idea",
        body: "A knife’s thin edge cuts better than a spoon’s broad back for the same push.",
      },
      {
        caption: "Everyday design",
        body: "Wide camel feet spread weight so the animal sinks less in sand.",
      },
    ],
    connection:
      "Sports, tools, footwear, and lifting bags all trade on force and pressure.",
    try: {
      prompt:
        "Explain why a school bag with wide straps feels more comfortable than thin strings for the same bag weight.",
      reveal:
        "Wide straps increase area, so the same force (weight) means lower pressure on your shoulders.",
    },
    practice: [
      q(
        "g8s-force-p1",
        "Which statement best matches exploring forces?",
        "A force is a push or pull; pressure is force spread over area",
        "Forces never change motion or shape",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: A force is a push or pull; pressure is force spread over area.",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g8s-force-p2",
        "Which detail best supports careful Grade 8 force thinking?",
        "A fingertip digs deeper into clay than a flat palm when the push is similar — smaller area, higher pressure",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail about fingertip versus palm pressure supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8s-force-p3",
        "Which move shows scientific reasoning?",
        "Explain a sharper cut by linking the same force to a smaller contact area",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Force and area lead explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8s-force-r1",
        "In your own words, explain why this matters: A force is a push or pull; pressure is force spread over area.",
        "It matters because pushes and pulls change motion or shape, and pressure tells how concentrated the force is. A supporting detail is a fingertip making a deeper clay mark than a palm.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "force", "pressure"],
      ),
      q(
        "g8s-force-r2",
        "A classmate claims: “Area never matters; only how hard you push counts.” What is the better reply?",
        "Point to evidence: the same push on a smaller area raises pressure, as with a sharp pin",
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
      writeQ(
        "g8s-force-t1",
        "Write one or two sentences that define force and pressure in everyday language.",
        ["push", "pull", "pressure", "area", "force"],
        "A short written recall should name push/pull and force over area.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["force", "pressure"],
      ),
      q(
        "g8s-force-t2",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "A force is a push or pull; pressure is force spread over area",
        "Forces never change motion or shape",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea about force and pressure.",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
    ],
    mastery: explainQ(
      "g8s-force-m1",
      "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
      "The idea is that a force is a push or pull, and pressure is that force spread over area. One proof is a sharp pin entering more easily than a blunt thumb for a similar push.",
      "Idea plus proof.",
      "Teaching without an example leaves the listener guessing.",
      ["idea", "force", "pressure"],
    ),
    misconceptions: [
      {
        idea: "Pressure and force are the same word for the same thing.",
        correction:
          "Force is the push or pull; pressure is how that force is distributed over area.",
      },
      {
        idea: "Only moving objects feel forces.",
        correction:
          "Forces can also change shape while an object stays put, as when you squeeze clay.",
      },
    ],
    reflect: {
      prompt:
        "Where did you use a tool today that concentrates force into a small area?",
      keyIdeas: ["push", "pull", "pressure"],
    },
    teach: {
      prompt:
        "Teach force and pressure using the fingertip-on-clay example.",
      keyIdeas: ["force", "area", "pressure"],
    },
    masteryCriteria:
      "You can describe forces and explain pressure with an everyday example.",
  },
});

export const pressureWindsStormsLesson = grade8ScienceLesson({
  conceptId: "ncert-g8-curiosity-pressure-winds-storms-core",
  title: "Pressure, Winds, Storms, and Cyclones",
  domainTitle: "Earth systems",
  prerequisites: ["ncert-g8-curiosity-exploring-forces-core"],
  nextConceptIds: ["ncert-g8-curiosity-particulate-nature-core"],
  content: {
    objective:
      "Connect air pressure differences to wind and storm behaviour, including why cyclones need careful respect.",
    wonder: {
      prompt:
        "Air feels invisible — yet it can flatten trees in a storm. What pressure story turns quiet air into a roaring wind?",
    },
    explore: {
      text: "Air has pressure. Wind forms when air moves from higher pressure toward lower pressure. Uneven heating of land and water helps create those differences. Strong organised systems — storms and cyclones — carry dangerous winds and rain, so safety plans matter.",
      activity: {
        prompt:
          "On a weather map, a tight low-pressure centre sits over warm ocean water with spiralling arrows. What claim best matches the chapter?",
        choices: [
          {
            id: "flow",
            label:
              "Air rushes toward the low-pressure centre, feeding strong winds in a storm or cyclone system",
            note: "Pressure differences drive wind; organised lows can become fierce.",
          },
          {
            id: "high",
            label: "Wind always blows from low pressure toward high pressure",
            note: "Air tends to move from higher toward lower pressure.",
          },
          {
            id: "calm",
            label: "Pressure differences never create wind",
            note: "Pressure differences are the engine of wind.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Air pressure is the push of the atmosphere on surfaces and on itself.",
        "Wind is air on the move, typically from regions of higher pressure toward lower pressure.",
        "Uneven heating — land versus water, day versus night — helps create pressure differences that drive breezes.",
        "Storms and cyclones organise around low-pressure centres with strong winds, heavy rain, and coastal risks.",
        "Respecting warnings, sturdy shelter, and community plans turns knowledge into safety.",
      ],
    },
    examples: [
      {
        caption: "Sea breeze idea",
        body: "On a sunny day, land often heats faster than sea, helping air rise over land and draw a breeze from the water.",
      },
      {
        caption: "Storm link",
        body: "A deepening low-pressure system can pull in fast air and build damaging winds.",
      },
      {
        caption: "Safety habit",
        body: "Following cyclone alerts and moving to safer ground protects lives.",
      },
    ],
    connection:
      "Weather apps, coastal alerts, and monsoon planning all speak pressure-and-wind language.",
    try: {
      prompt:
        "In one or two sentences, explain why air moves as wind when pressure is uneven.",
      reveal:
        "Air tends to move from higher pressure toward lower pressure; that moving air is wind.",
    },
    practice: [
      q(
        "g8s-storm-p1",
        "Which statement best matches pressure, winds, and storms?",
        "Air pressure differences drive wind; strong lows can organise into storms or cyclones",
        "Wind always blows from low pressure toward high pressure",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Air pressure differences drive wind; strong lows can organise into storms or cyclones.",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g8s-storm-p2",
        "Which detail best supports careful Grade 8 Earth-systems thinking?",
        "A sea breeze can form when land heats faster than sea and pressure patterns shift",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as the sea-breeze heating story supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8s-storm-p3",
        "Which move shows scientific reasoning?",
        "Link dangerous cyclone winds to organised air flow into a low-pressure centre",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Pressure and flow lead explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8s-storm-r1",
        "In your own words, explain why this matters: Air pressure differences drive wind; strong lows can organise into storms or cyclones.",
        "It matters because uneven pressure moves air as wind, and organised lows can become dangerous storms. A supporting detail is air rushing toward a low-pressure centre.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "pressure", "wind"],
      ),
      q(
        "g8s-storm-r2",
        "A classmate claims: “Pressure differences never create wind.” What is the better reply?",
        "Point to evidence: air tends to move from higher toward lower pressure, which we feel as wind",
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
        "g8s-storm-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Air pressure differences drive wind; strong lows can organise into storms or cyclones",
        "Wind always blows from low pressure toward high pressure",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea about pressure and wind.",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8s-storm-t2",
        "Write one or two sentences connecting air pressure differences to wind or storm behaviour.",
        ["pressure", "wind", "low", "high", "storm", "cyclone"],
        "A short written recall should link pressure to moving air.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["pressure", "wind"],
      ),
    ],
    mastery: explainQ(
      "g8s-storm-m1",
      "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
      "The idea is that air pressure differences drive wind, and strong low-pressure systems can become storms or cyclones. One proof is a sea breeze or air rushing toward a storm’s low centre.",
      "Idea plus proof.",
      "Teaching without an example leaves the listener guessing.",
      ["idea", "pressure", "wind"],
    ),
    misconceptions: [
      {
        idea: "Wind blows from low pressure toward high pressure.",
        correction:
          "Air tends to move from higher pressure toward lower pressure.",
      },
      {
        idea: "Cyclones are only interesting weather, not safety events.",
        correction:
          "Cyclones bring dangerous winds and rain; warnings and shelter plans matter.",
      },
    ],
    reflect: {
      prompt:
        "What safety step would you take if a cyclone warning reached your area?",
      keyIdeas: ["pressure", "wind", "safety"],
    },
    teach: {
      prompt:
        "Teach how pressure differences make wind, then mention why cyclones need respect.",
      keyIdeas: ["high to low", "storm", "safety"],
    },
    masteryCriteria:
      "You can connect air pressure differences to wind and storm behaviour.",
  },
});

export const particulateNatureLesson = grade8ScienceLesson({
  conceptId: "ncert-g8-curiosity-particulate-nature-core",
  title: "Particulate Nature of Matter",
  domainTitle: "Materials",
  prerequisites: ["ncert-g8-curiosity-pressure-winds-storms-core"],
  nextConceptIds: ["ncert-g8-curiosity-elements-compounds-mixtures-core"],
  content: {
    objective:
      "Use particle ideas to explain solid, liquid, and gas behaviour — spacing, motion, and how matter can change state.",
    wonder: {
      prompt:
        "Ice keeps a shape, water pours, steam fills a room — same water story, three behaviours. What tiny picture explains all three?",
    },
    explore: {
      text: "Matter is made of tiny particles. In solids, particles are closely packed and mainly vibrate. In liquids, particles are close but can slide. In gases, particles are far apart and move freely. Heating can change how particles move and how matter behaves.",
      activity: {
        prompt:
          "Perfume opened in one corner of a closed room is soon noticed farther away. Which particle claim best matches?",
        choices: [
          {
            id: "spread",
            label:
              "Gas particles move freely and spread through the available space",
            note: "Diffusion of a scent is particle motion made familiar.",
          },
          {
            id: "solid",
            label: "Perfume particles stay locked in fixed positions like a solid",
            note: "Fixed positions fit solids, not a spreading scent.",
          },
          {
            id: "empty",
            label: "Matter has no particles; scent appears by magic",
            note: "Particle models explain spreading without magic.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "The particulate nature of matter means substances are built from tiny particles too small to see.",
        "Solids keep shape because particles are tightly packed and mainly vibrate in place.",
        "Liquids take the shape of a container because particles can slide past one another while staying close.",
        "Gases fill available space because particles are far apart and move freely.",
        "Melting, freezing, boiling, and condensation are changes in particle arrangement and motion — not vanishing matter.",
      ],
    },
    examples: [
      {
        caption: "Solid behaviour",
        body: "A steel spoon keeps its shape; its particles stay in a firm arrangement.",
      },
      {
        caption: "Liquid behaviour",
        body: "Water poured into a bottle takes the bottle’s shape while keeping volume.",
      },
      {
        caption: "Gas behaviour",
        body: "Steam or perfume vapour spreads through open space in a room.",
      },
    ],
    connection:
      "Cooking steam, melting ice cream, and inflated balloons all speak particle language.",
    try: {
      prompt:
        "Explain why ice cubes hold shape in a tray while the melted water does not.",
      reveal:
        "In ice, particles are locked in a solid arrangement; as liquid, they can slide and take the container’s shape.",
    },
    practice: [
      q(
        "g8s-part-p1",
        "Which statement best matches the particulate nature of matter?",
        "Particles in solids mainly vibrate; in liquids they slide; in gases they move freely and spread",
        "Solids, liquids, and gases all have identical particle spacing and motion",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea about particle spacing and motion in the three states.",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g8s-part-p2",
        "Which detail best supports careful Grade 8 materials thinking?",
        "Perfume scent spreading across a room shows gas particles moving freely",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as perfume spreading supports the particle model.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8s-part-p3",
        "Which move shows scientific reasoning?",
        "Explain melting as particles gaining freedom to slide while matter itself remains",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Particle motion leads explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8s-part-r1",
        "In your own words, explain why this matters: Particles in solids mainly vibrate; in liquids they slide; in gases they move freely and spread.",
        "It matters because particle spacing and motion explain why solids keep shape, liquids pour, and gases fill space. A supporting detail is perfume spreading through a room.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "particle", "state"],
      ),
      q(
        "g8s-part-r2",
        "A classmate claims: “When ice melts, the water particles disappear.” What is the better reply?",
        "Point to evidence: melting changes arrangement and motion; the particles remain as liquid water",
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
        "g8s-part-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Particles in solids mainly vibrate; in liquids they slide; in gases they move freely and spread",
        "Solids, liquids, and gases all have identical particle spacing and motion",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core particle-and-states idea.",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8s-part-t2",
        "Write one or two sentences comparing particle motion in a solid and a gas.",
        ["vibrate", "slide", "freely", "solid", "gas", "particle"],
        "A short written recall should contrast solid and gas particle motion.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["particle", "motion"],
      ),
    ],
    mastery: explainQ(
      "g8s-part-m1",
      "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
      "The idea is that matter is made of particles whose spacing and motion differ in solids, liquids, and gases. One proof is perfume spreading as gas particles move freely.",
      "Idea plus proof.",
      "Teaching without an example leaves the listener guessing.",
      ["idea", "particle", "states"],
    ),
    misconceptions: [
      {
        idea: "Gases have no particles — only empty air.",
        correction:
          "Gases are matter made of particles that are far apart and move freely.",
      },
      {
        idea: "Melting destroys particles.",
        correction:
          "Melting rearranges particle motion and packing; the substance remains as liquid.",
      },
    ],
    reflect: {
      prompt:
        "Which state change have you watched this week — melting, boiling, or condensation?",
      keyIdeas: ["particles", "states", "motion"],
    },
    teach: {
      prompt:
        "Teach solid, liquid, and gas behaviour using particle spacing and one scent or ice example.",
      keyIdeas: ["vibrate", "slide", "spread"],
    },
    masteryCriteria:
      "You can use particle ideas to explain solid, liquid, and gas behaviour.",
  },
});
