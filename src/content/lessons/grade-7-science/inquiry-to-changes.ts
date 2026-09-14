import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade7ScienceLesson } from "@/content/lessons/grade-7-science/format";

export const everEvolvingWorldLesson = grade7ScienceLesson({
  conceptId: "ncert-g7-curiosity-ever-evolving-core",
  title: "The Ever-Evolving World of Science",
  domainTitle: "Inquiry",
  prerequisites: [],
  nextConceptIds: ["ncert-g7-curiosity-acidic-basic-neutral-core"],
  content: {
    objective: "Ask a scientific question you can investigate and connect two science ideas with evidence talk.",
    wonder: {
      prompt: "Science keeps changing its maps of the world — yet careful questions stay useful. What makes a question scientific rather than only a wish?",
    },
    explore: {
      text: "Science evolves because new evidence reshapes old ideas. An investigative question can be checked with observation or a fair test. Connecting ideas means linking two explanations with a shared reason.",
      activity: {
        prompt: "You wonder whether ice melts faster in sun or shade. Which plan best turns that into a scientific investigation?",
        choices: [
          {
            id: "fair",
            label: "Use similar ice pieces, change only the place (sun vs shade), and record times",
            note: "You framed a fair test: one clear change, careful records.",
          },
          {
            id: "argue",
            label: "Argue loudly without timing anything",
            note: "Volume is not evidence. Timing observations is.",
          },
          {
            id: "mix",
            label: "Change bowl size, ice amount, and place all at once",
            note: "Too many changes hide the cause.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Science is a way of asking and checking, not only a pile of finished facts.",
        "A scientific question points toward something you can observe, measure, or compare.",
        "Investigations work better when you change one thing at a time and keep records.",
        "Connecting science ideas means noticing how one explanation supports another — for example, heat and melting.",
        "The world of science evolves when better evidence improves earlier models.",
      ],
    },
    examples: [
      {
        caption: "Investigative question",
        body: "Does a dark cloth warm water faster than a light cloth in the same sun?",
      },
      {
        caption: "Connect ideas",
        body: "Melting links to heat transfer; circuits link to energy pathways.",
      },
      {
        caption: "Evidence talk",
        body: "“I measured…” is stronger than “I just feel…”",
      },
    ],
    connection: "Kitchen cooling, sports timing, and weather watching all reward investigative questions.",
    try: {
      prompt: "Write one investigative question about everyday heating or cooling. Name what you would keep the same.",
      reveal: "Example: Does metal cool tea faster than ceramic if the cup size and tea volume stay the same?",
    },
    practice: [
      q(
        "g7s-ee-p1",
        "Which statement best matches scientific investigation?",
        "Ask a checkable question, gather evidence fairly, and connect ideas with reasons",
        "Science questions are only opinions that never need evidence",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Ask a checkable question, gather evidence fairly, and connect ideas with reasons",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g7s-ee-p2",
        "Which detail best supports careful Grade 7 investigation thinking?",
        "A fair ice-melt test changes only sun versus shade and records times",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “A fair ice-melt test changes only sun versus shade and records times” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7s-ee-p3",
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
        "g7s-ee-r1",
        "In your own words, explain why this matters: Ask a checkable question, gather evidence fairly, and connect ideas with reasons",
        "It matters because Ask a checkable question, gather evidence fairly, and connect ideas with reasons. A supporting detail is: A fair ice-melt test changes only sun versus shade and records times.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7s-ee-r2",
        "A classmate claims: “Science questions are only opinions that never need evidence.” What is the better reply?",
        "Point to evidence: A fair ice-melt test changes only sun versus shade and records times",
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
        "g7s-ee-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Ask a checkable question, gather evidence fairly, and connect ideas with reasons",
        "Science questions are only opinions that never need evidence",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea: Ask a checkable question, gather evidence fairly, and connect ideas with reasons",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7s-ee-t2",
        "Write one or two sentences that ask an investigative question and say what you would keep the same.",
        ["Ask a checkable", "A fair ice-melt", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7s-ee-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Ask a checkable question, gather evidence fairly, and connect ideas with reasons. One proof is A fair ice-melt test changes only sun versus shade and records times.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "If my prediction misses, the investigation failed.",
        correction: "A clear miss still teaches — evidence updated the idea.",
      },
      {
        idea: "Changing many things at once makes a better test.",
        correction: "One clear change keeps the cause visible.",
      },
    ],
    reflect: {
      prompt: "What science idea have you updated after new evidence — even a small home observation?",
      keyIdeas: ["question", "evidence", "connect"],
    },
    teach: {
      prompt: "Teach what makes a question investigative using the ice-in-sun example.",
      keyIdeas: ["checkable", "fair test", "evidence"],
    },
    masteryCriteria: "You can ask an investigative question and connect two science ideas with evidence talk.",
  },
});

export const acidicBasicNeutralLesson = grade7ScienceLesson({
  conceptId: "ncert-g7-curiosity-acidic-basic-neutral-core",
  title: "Exploring Substances: Acidic, Basic, and Neutral",
  domainTitle: "Materials",
  prerequisites: ["ncert-g7-curiosity-ever-evolving-core"],
  nextConceptIds: ["ncert-g7-curiosity-electricity-circuits-core"],
  content: {
    objective: "Classify substances as acidic, basic, or neutral and use an indicator idea, including a first look at neutralisation.",
    wonder: {
      prompt: "Lemon feels sharp on a cut, soap feels slippery — what invisible difference are your senses noticing, and how can an indicator make it visible?",
    },
    explore: {
      text: "Acids, bases, and neutrals behave differently with indicators. Indicators change appearance to help classify. Neutralisation is what can happen when acid and base meet carefully.",
      activity: {
        prompt: "You have lemon juice, soap solution, and plain water, plus a plant indicator that changes colour. What is the best investigative move?",
        choices: [
          {
            id: "test",
            label: "Test each liquid the same way with the indicator and record colour changes",
            note: "Same method, clear records — classification with evidence.",
          },
          {
            id: "taste",
            label: "Taste unknown lab chemicals to decide",
            note: "Tasting unknowns is unsafe. Indicators are the tool.",
          },
          {
            id: "mix-all",
            label: "Pour all three together before any test",
            note: "Mixing first hides which substance caused which change.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Everyday substances can be acidic, basic, or roughly neutral.",
        "Indicators — such as some plant extracts or lab papers — help classify by changing appearance.",
        "Acids often taste sour in safe foods; bases often feel soapy — but tests beat unsafe tasting of unknowns.",
        "Neutralisation is the meeting of acid and base that can produce a milder, nearer-neutral mixture.",
        "Classification is a claim: support it with indicator evidence, not only a guess from the bottle label.",
      ],
    },
    examples: [
      {
        caption: "Acid example",
        body: "Lemon juice and vinegar are commonly acidic in kitchen contexts.",
      },
      {
        caption: "Base example",
        body: "Many soap solutions behave as basic.",
      },
      {
        caption: "Neutralisation idea",
        body: "A carefully controlled acid–base mix can move toward neutral.",
      },
    ],
    connection: "Kitchen cleaning, soil treatment, and stomach-care talks often use acid–base language.",
    try: {
      prompt: "Classify lemon juice, soap water, and drinking water as acidic, basic, or nearer neutral — and say what evidence you would use.",
      reveal: "Lemon acidic, soap basic, water nearer neutral — indicator colour (or trusted labels plus indicator) as evidence.",
    },
    practice: [
      q(
        "g7s-ab-p1",
        "Which statement best matches acid–base–neutral thinking?",
        "Classify with indicator evidence; neutralisation is acid and base meeting toward a milder mix",
        "Every liquid is acidic because liquids feel wet",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Classify with indicator evidence; neutralisation is acid and base meeting toward a milder mix",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g7s-ab-p2",
        "Which detail best supports careful Grade 7 investigation thinking?",
        "Lemon juice often tests acidic; soap solution often tests basic with an indicator",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “Lemon juice often tests acidic; soap solution often tests basic with an indicator” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7s-ab-p3",
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
        "g7s-ab-r1",
        "In your own words, explain why this matters: Classify with indicator evidence; neutralisation is acid and base meeting toward a milder mix",
        "It matters because Classify with indicator evidence; neutralisation is acid and base meeting toward a milder mix. A supporting detail is: Lemon juice often tests acidic; soap solution often tests basic with an indicator.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7s-ab-r2",
        "A classmate claims: “Every liquid is acidic because liquids feel wet.” What is the better reply?",
        "Point to evidence: Lemon juice often tests acidic; soap solution often tests basic with an indicator",
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
        "g7s-ab-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Classify with indicator evidence; neutralisation is acid and base meeting toward a milder mix",
        "Every liquid is acidic because liquids feel wet",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea: Classify with indicator evidence; neutralisation is acid and base meeting toward a milder mix",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7s-ab-t2",
        "Write one or two sentences that explain how an indicator helps classify a substance.",
        ["Classify with indicator", "Lemon juice often", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7s-ab-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Classify with indicator evidence; neutralisation is acid and base meeting toward a milder mix. One proof is Lemon juice often tests acidic; soap solution often tests basic with an indicator.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Neutralisation means the substances disappear into nothing.",
        correction: "They react toward a milder mixture; matter is rearranged, not magically erased.",
      },
      {
        idea: "Taste is always a safe classification method.",
        correction: "Never taste unknown chemicals; use indicators.",
      },
    ],
    reflect: {
      prompt: "Where do acid or base ideas appear in cleaning or cooking at home?",
      keyIdeas: ["acid", "base", "indicator"],
    },
    teach: {
      prompt: "Teach acidic vs basic vs neutral with one kitchen example each.",
      keyIdeas: ["classify", "indicator", "neutralisation"],
    },
    masteryCriteria: "You can classify acid/base/neutral with an indicator idea and explain neutralisation simply.",
  },
});

export const electricityCircuitsLesson = grade7ScienceLesson({
  conceptId: "ncert-g7-curiosity-electricity-circuits-core",
  title: "Electricity: Circuits and their Components",
  domainTitle: "Energy",
  prerequisites: ["ncert-g7-curiosity-acidic-basic-neutral-core"],
  nextConceptIds: ["ncert-g7-curiosity-metals-non-metals-core"],
  content: {
    objective: "Name key circuit components and explain why a closed path lights a bulb while an open path does not.",
    wonder: {
      prompt: "A torch works, then fails when a wire loosens — what invisible path did the looseness break?",
    },
    explore: {
      text: "A circuit needs a closed path for electric current. Components include cell/battery, wires, switch, and bulb. Open means broken path; closed means complete path.",
      activity: {
        prompt: "A bulb stays dark with a fresh cell. Which investigation idea is strongest?",
        choices: [
          {
            id: "path",
            label: "Check whether wires form a complete loop through cell, switch, and bulb",
            note: "You investigated the closed-path idea.",
          },
          {
            id: "shake",
            label: "Shake the bulb while ignoring the wires",
            note: "Path continuity matters as much as the bulb.",
          },
          {
            id: "more-cells",
            label: "Add cells randomly without checking connections",
            note: "More cells cannot fix a broken path by magic.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Electric current needs a closed conducting path.",
        "A simple circuit often includes a cell, connecting wires, a switch, and a bulb or other load.",
        "A closed circuit completes the loop; an open circuit has a gap — often at an open switch or loose wire.",
        "Naming parts helps you troubleshoot: which component is missing from the path?",
        "Safety belongs with curiosity: never experiment with mains electricity.",
      ],
    },
    examples: [
      {
        caption: "Closed",
        body: "Cell → wire → bulb → wire → cell, with switch closed: bulb can light.",
      },
      {
        caption: "Open",
        body: "The same loop with switch open: path broken, bulb dark.",
      },
      {
        caption: "Component",
        body: "The switch controls whether the path is open or closed.",
      },
    ],
    connection: "Torch switches, classroom models, and festive light strings all depend on closed paths.",
    try: {
      prompt: "Draw or list a closed circuit’s parts in order. Then say what opening the switch does.",
      reveal: "Cell, wires, bulb, switch in a loop. Opening the switch opens the path; the bulb goes dark.",
    },
    practice: [
      q(
        "g7s-ec-p1",
        "Which statement best matches circuit thinking?",
        "A closed path through circuit components allows current; an open gap stops it",
        "A bulb lights even when wires leave a gap, if you wish hard enough",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: A closed path through circuit components allows current; an open gap stops it",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g7s-ec-p2",
        "Which detail best supports careful Grade 7 investigation thinking?",
        "An open switch breaks the loop so the bulb stays dark",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “An open switch breaks the loop so the bulb stays dark” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7s-ec-p3",
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
        "g7s-ec-r1",
        "In your own words, explain why this matters: A closed path through circuit components allows current; an open gap stops it",
        "It matters because A closed path through circuit components allows current; an open gap stops it. A supporting detail is: An open switch breaks the loop so the bulb stays dark.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7s-ec-r2",
        "A classmate claims: “A bulb lights even when wires leave a gap, if you wish hard enough.” What is the better reply?",
        "Point to evidence: An open switch breaks the loop so the bulb stays dark",
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
        "g7s-ec-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "A closed path through circuit components allows current; an open gap stops it",
        "A bulb lights even when wires leave a gap, if you wish hard enough",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea: A closed path through circuit components allows current; an open gap stops it",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7s-ec-t2",
        "Write one or two sentences that explain open versus closed circuit with one component named.",
        ["A closed path", "An open switch", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7s-ec-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that A closed path through circuit components allows current; an open gap stops it. One proof is An open switch breaks the loop so the bulb stays dark.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Electricity is used up in the wire before it reaches the bulb.",
        correction: "Think path and energy transfer; a break stops the loop.",
      },
      {
        idea: "Any metal object nearby closes a circuit automatically.",
        correction: "The conducting path must connect the intended components.",
      },
    ],
    reflect: {
      prompt: "When has a loose connection stopped a device you use? What path was broken?",
      keyIdeas: ["circuit", "closed", "component"],
    },
    teach: {
      prompt: "Teach open vs closed circuit with a torch switch story.",
      keyIdeas: ["path", "switch", "bulb"],
    },
    masteryCriteria: "You can name circuit parts and explain open versus closed circuits.",
  },
});

export const metalsNonMetalsLesson = grade7ScienceLesson({
  conceptId: "ncert-g7-curiosity-metals-non-metals-core",
  title: "The World of Metals and Non-metals",
  domainTitle: "Materials",
  prerequisites: ["ncert-g7-curiosity-electricity-circuits-core"],
  nextConceptIds: ["ncert-g7-curiosity-physical-chemical-core"],
  content: {
    objective: "Give clear properties that distinguish many metals from many non-metals using everyday examples.",
    wonder: {
      prompt: "A copper wire bends and shines; a piece of charcoal snaps. What property families are you noticing?",
    },
    explore: {
      text: "Metals often share properties like shine, malleability, and good conduction. Non-metals often differ — duller appearance, brittle solids, or poor conduction. Property tests beat guessing from colour alone.",
      activity: {
        prompt: "You get two unknown solids. Which investigation best helps classify metal-like vs non-metal-like?",
        choices: [
          {
            id: "props",
            label: "Compare shine, bending/breaking, and whether they help a simple circuit idea (with safe school materials)",
            note: "Property comparisons are the scientific route.",
          },
          {
            id: "colour",
            label: "Decide only by favourite colour",
            note: "Colour alone is a weak classifier.",
          },
          {
            id: "smash",
            label: "Smash both without recording observations",
            note: "Records turn smashing into evidence — or avoid unsafe force.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Metals and non-metals are broad material families with typical property patterns.",
        "Many metals are shiny, malleable (can be hammered into sheets), ductile (drawn into wires), and good conductors of heat and electricity.",
        "Many non-metals are not shiny in the same way, may be brittle as solids, and are often poor conductors.",
        "Exceptions exist — science uses patterns carefully, not absolute slogans.",
        "Everyday uses follow properties: wires need conductivity; packaging may need malleable metal foil.",
      ],
    },
    examples: [
      {
        caption: "Metal property",
        body: "Copper and aluminium are used in wires because they conduct well.",
      },
      {
        caption: "Non-metal property",
        body: "Sulphur is a non-metal often discussed as a dull, brittle solid example in class contexts.",
      },
      {
        caption: "Use link",
        body: "Steel spoons conduct heat; wooden spoons are poorer conductors.",
      },
    ],
    connection: "Cookware, jewellery, wires, and pencil “lead” (graphite) invite metal/non-metal property talk.",
    try: {
      prompt: "Name one metal property and one non-metal property. Give a real object for each.",
      reveal: "Metal: copper wire conducts. Non-metal: a rubber eraser is a poor electrical conductor.",
    },
    practice: [
      q(
        "g7s-mn-p1",
        "Which statement best matches metals and non-metals?",
        "Metals and non-metals differ in typical properties like conduction, shine, and malleability",
        "Every shiny object must be a metal and every dull object a non-metal with no testing",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Metals and non-metals differ in typical properties like conduction, shine, and malleability",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g7s-mn-p2",
        "Which detail best supports careful Grade 7 investigation thinking?",
        "Copper’s conductivity explains its use in electric wires",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “Copper’s conductivity explains its use in electric wires” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7s-mn-p3",
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
        "g7s-mn-r1",
        "In your own words, explain why this matters: Metals and non-metals differ in typical properties like conduction, shine, and malleability",
        "It matters because Metals and non-metals differ in typical properties like conduction, shine, and malleability. A supporting detail is: Copper’s conductivity explains its use in electric wires.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7s-mn-r2",
        "A classmate claims: “Every shiny object must be a metal and every dull object a non-metal with no testing.” What is the better reply?",
        "Point to evidence: Copper’s conductivity explains its use in electric wires",
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
        "g7s-mn-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Metals and non-metals differ in typical properties like conduction, shine, and malleability",
        "Every shiny object must be a metal and every dull object a non-metal with no testing",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea: Metals and non-metals differ in typical properties like conduction, shine, and malleability",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7s-mn-t2",
        "Write one or two sentences that compare one metal property with one non-metal property.",
        ["Metals and non-metals", "Copper’s conductivity explains", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7s-mn-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Metals and non-metals differ in typical properties like conduction, shine, and malleability. One proof is Copper’s conductivity explains its use in electric wires.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "All metals are magnetic.",
        correction: "Magnetism is not a universal metal property — iron-family behaviour differs from copper’s.",
      },
      {
        idea: "Non-metals never have important uses.",
        correction: "Oxygen, carbon materials, and many others are vital non-metals.",
      },
    ],
    reflect: {
      prompt: "Which metal object and which non-metal object do you rely on every day?",
      keyIdeas: ["metal", "non-metal", "property"],
    },
    teach: {
      prompt: "Teach two metal properties and two non-metal properties with objects.",
      keyIdeas: ["conduct", "malleable", "contrast"],
    },
    masteryCriteria: "You can give metal and non-metal properties with everyday examples.",
  },
});

export const physicalChemicalLesson = grade7ScienceLesson({
  conceptId: "ncert-g7-curiosity-physical-chemical-core",
  title: "Changes Around Us: Physical and Chemical",
  domainTitle: "Materials",
  prerequisites: ["ncert-g7-curiosity-metals-non-metals-core"],
  nextConceptIds: ["ncert-g7-curiosity-adolescence-core"],
  content: {
    objective: "Spot physical changes versus chemical changes using evidence clues such as new substances or reversible form changes.",
    wonder: {
      prompt: "Ice melts; milk curdles. Both are changes — how do you tell a change of form from a change that makes something new?",
    },
    explore: {
      text: "Physical changes alter form or state without making a new substance. Chemical changes produce new substances — often with colour change, gas, heat, or lasting difference. Investigations look for those clues.",
      activity: {
        prompt: "Paper torn into pieces versus paper burned to ash — which investigative claim is stronger?",
        choices: [
          {
            id: "chem",
            label: "Burning makes new substances (ash, smoke gases); tearing mainly changes size/shape",
            note: "You used chemical vs physical evidence clues.",
          },
          {
            id: "same",
            label: "Both are identical changes because paper is involved",
            note: "Same starting material can still change in different ways.",
          },
          {
            id: "ignore",
            label: "Ignore ash and gas; only count whether you liked the experiment",
            note: "Preferences are not chemical evidence.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Changes surround us: melting, dissolving, rusting, cooking, burning.",
        "A physical change rearranges form or state; the substance identity stays essentially the same — ice and water are still water.",
        "A chemical change produces new substances with different properties.",
        "Clues for chemical change can include colour change, gas bubbles, heat/light, or a lasting new material.",
        "Some changes are easier to reverse than others; reversibility helps but is not the only test.",
      ],
    },
    examples: [
      {
        caption: "Physical",
        body: "Melting butter or folding paper changes form without a new substance.",
      },
      {
        caption: "Chemical",
        body: "Rusting iron or burning wood produces new materials.",
      },
      {
        caption: "Clue",
        body: "A vinegar–baking soda mix fizzes as a gas forms — a chemical-change clue.",
      },
    ],
    connection: "Cooking, recycling decisions, and rust on cycles all invite physical/chemical thinking.",
    try: {
      prompt: "Classify melting ice and ripening fruit. Give one evidence clue for each.",
      reveal: "Melting ice: physical (same substance, state change). Ripening: chemical clues (new colours, smells, substances).",
    },
    practice: [
      q(
        "g7s-pc-p1",
        "Which statement best matches physical vs chemical change?",
        "Physical changes alter form or state; chemical changes make new substances with evidence clues",
        "Every change that looks dramatic must be physical only",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Physical changes alter form or state; chemical changes make new substances with evidence clues",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g7s-pc-p2",
        "Which detail best supports careful Grade 7 investigation thinking?",
        "Burning paper leaves ash and gases — new substances — while tearing mainly changes shape",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “Burning paper leaves ash and gases — new substances — while tearing mainly changes shape” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7s-pc-p3",
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
        "g7s-pc-r1",
        "In your own words, explain why this matters: Physical changes alter form or state; chemical changes make new substances with evidence clues",
        "It matters because Physical changes alter form or state; chemical changes make new substances with evidence clues. A supporting detail is: Burning paper leaves ash and gases — new substances — while tearing mainly changes shape.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7s-pc-r2",
        "A classmate claims: “Every change that looks dramatic must be physical only.” What is the better reply?",
        "Point to evidence: Burning paper leaves ash and gases — new substances — while tearing mainly changes shape",
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
        "g7s-pc-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Physical changes alter form or state; chemical changes make new substances with evidence clues",
        "Every change that looks dramatic must be physical only",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea: Physical changes alter form or state; chemical changes make new substances with evidence clues",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7s-pc-t2",
        "Write one or two sentences that give one physical and one chemical change with a clue for each.",
        ["Physical changes alter", "Burning paper leaves", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7s-pc-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Physical changes alter form or state; chemical changes make new substances with evidence clues. One proof is Burning paper leaves ash and gases — new substances — while tearing mainly changes shape.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "If you can reverse it, it cannot be chemical.",
        correction: "Reversibility helps thinking but chemical changes are about new substances.",
      },
      {
        idea: "Dissolving sugar always creates a new chemical substance.",
        correction: "Dissolving is often treated as a physical mixture change in this chapter’s lens.",
      },
    ],
    reflect: {
      prompt: "Name a kitchen change you now classify more carefully than before.",
      keyIdeas: ["physical", "chemical", "evidence"],
    },
    teach: {
      prompt: "Teach physical vs chemical using melting ice and burning paper.",
      keyIdeas: ["form", "new substance", "clues"],
    },
    masteryCriteria: "You can spot physical and chemical changes with clear evidence clues.",
  },
});

export const adolescenceLesson = grade7ScienceLesson({
  conceptId: "ncert-g7-curiosity-adolescence-core",
  title: "Adolescence: A Stage of Growth and Change",
  domainTitle: "Life",
  prerequisites: ["ncert-g7-curiosity-physical-chemical-core"],
  nextConceptIds: ["ncert-g7-curiosity-heat-transfer-core"],
  content: {
    objective: "Name a change that happens in adolescence and describe a healthy habit that supports care during growth.",
    wonder: {
      prompt: "Bodies and feelings shift through the teenage years — what counts as a normal growth change, and which habits protect health while it happens?",
    },
    explore: {
      text: "Adolescence is a stage of growth and change — physical, emotional, and social. Naming changes reduces mystery. Healthy habits (sleep, food, hygiene, kindness, asking trusted adults) support the stage.",
      activity: {
        prompt: "Which approach best investigates “what helps during adolescence” without shame?",
        choices: [
          {
            id: "habit",
            label: "List observable changes and match each to a respectful healthy habit",
            note: "You connected growth facts to care actions.",
          },
          {
            id: "mock",
            label: "Mock anyone whose growth timing differs",
            note: "Timing varies; respect is part of health.",
          },
          {
            id: "ignore",
            label: "Ignore sleep and food because growth “just happens”",
            note: "Habits still support healthy growth.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Adolescence is a natural stage between childhood and adulthood.",
        "Changes can include growth spurts, voice changes, skin changes, and shifting emotions or friendships.",
        "Different people change on different timelines — variation is expected.",
        "Healthy habits support the stage: balanced food, sleep, hygiene, physical activity, and talking to trusted adults when worried.",
        "Science here is caring knowledge — facts plus respect, not jokes that hurt.",
      ],
    },
    examples: [
      {
        caption: "Change",
        body: "A growth spurt is a physical adolescence change.",
      },
      {
        caption: "Habit",
        body: "Regular sleep supports mood, learning, and growth.",
      },
      {
        caption: "Respect",
        body: "Comparing bodies unkindly is not scientific care.",
      },
    ],
    connection: "School PE, family meals, and counselling spaces all can support adolescent health.",
    try: {
      prompt: "Name one adolescence change and one healthy habit that supports someone through it.",
      reveal: "Example: skin changes → gentle hygiene and not sharing hurtful comments; sleep habit for energy.",
    },
    practice: [
      q(
        "g7s-ad-p1",
        "Which statement best matches adolescence science with care?",
        "Adolescence brings growth changes; healthy habits and respect support that stage",
        "Everyone must change on the exact same day or something is broken",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea: Adolescence brings growth changes; healthy habits and respect support that stage",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g7s-ad-p2",
        "Which detail best supports careful Grade 7 investigation thinking?",
        "Sleep, balanced food, and hygiene are habits that support growth and wellbeing",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail such as “Sleep, balanced food, and hygiene are habits that support growth and wellbeing” supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g7s-ad-p3",
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
        "g7s-ad-r1",
        "In your own words, explain why this matters: Adolescence brings growth changes; healthy habits and respect support that stage",
        "It matters because Adolescence brings growth changes; healthy habits and respect support that stage. A supporting detail is: Sleep, balanced food, and hygiene are habits that support growth and wellbeing.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "evidence", "detail"],
      ),
      q(
        "g7s-ad-r2",
        "A classmate claims: “Everyone must change on the exact same day or something is broken.” What is the better reply?",
        "Point to evidence: Sleep, balanced food, and hygiene are habits that support growth and wellbeing",
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
        "g7s-ad-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Adolescence brings growth changes; healthy habits and respect support that stage",
        "Everyone must change on the exact same day or something is broken",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core idea: Adolescence brings growth changes; healthy habits and respect support that stage",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g7s-ad-t2",
        "Write one or two sentences that name a change in adolescence and a healthy habit that helps.",
        ["Adolescence brings growth", "Sleep, balanced food,", "because"],
        "A short written recall should name the idea or a clear supporting detail.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["idea", "because"],
      ),
    ],
    mastery: explainQ(
        "g7s-ad-m1",
        "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
        "The idea is that Adolescence brings growth changes; healthy habits and respect support that stage. One proof is Sleep, balanced food, and hygiene are habits that support growth and wellbeing.",
        "Idea plus proof.",
        "Teaching without an example leaves the listener guessing.",
        ["idea", "example", "proof"],
      ),
    misconceptions: [
      {
        idea: "Asking a trusted adult about body changes is shameful.",
        correction: "Trusted questions are a healthy habit.",
      },
      {
        idea: "Only physical changes count; feelings do not.",
        correction: "Emotional and social shifts are part of the stage too.",
      },
    ],
    reflect: {
      prompt: "Which healthy habit do you want to protect this month as you grow?",
      keyIdeas: ["growth", "habit", "respect"],
    },
    teach: {
      prompt: "Teach one adolescence change and one supporting habit with kindness.",
      keyIdeas: ["change", "habit", "care"],
    },
    masteryCriteria: "You can name an adolescence change and describe a healthy supporting habit.",
  },
});
