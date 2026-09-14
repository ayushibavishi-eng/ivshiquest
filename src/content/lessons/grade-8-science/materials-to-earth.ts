import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade8ScienceLesson } from "@/content/lessons/grade-8-science/format";

export const elementsCompoundsMixturesLesson = grade8ScienceLesson({
  conceptId: "ncert-g8-curiosity-elements-compounds-mixtures-core",
  title: "Nature of Matter: Elements, Compounds, and Mixtures",
  domainTitle: "Materials",
  prerequisites: ["ncert-g8-curiosity-particulate-nature-core"],
  nextConceptIds: ["ncert-g8-curiosity-solutes-solvents-core"],
  content: {
    objective:
      "Tell elements, compounds, and mixtures apart with clear examples and reasons.",
    wonder: {
      prompt:
        "Iron nails, table salt, and muddy water all count as “stuff” — yet chemists sort them into different families. What invisible difference are they naming?",
    },
    explore: {
      text: "An element is a pure substance made of only one kind of atom. A compound joins different elements in a fixed way that makes a new substance. A mixture combines substances that keep their own properties and can often be separated by physical means.",
      activity: {
        prompt:
          "You have a sealed jar of oxygen gas, a crystal of pure water ice (H₂O), and a bowl of sand mixed with iron filings. Which sorting best matches?",
        choices: [
          {
            id: "sort",
            label:
              "Oxygen is an element; water is a compound; sand with filings is a mixture",
            note: "You matched each sample to its category with reasons.",
          },
          {
            id: "all-mix",
            label: "Call all three mixtures because more than one word appears",
            note: "Elements and compounds are pure substances, not mixtures.",
          },
          {
            id: "all-el",
            label: "Call all three elements because they are materials",
            note: "Compounds and mixtures are not single-element substances.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Elements cannot be broken into simpler substances by ordinary chemical means — oxygen, iron, and carbon are familiar examples.",
        "Compounds form when elements combine chemically in fixed proportions, making a substance with new properties — water and salt are classic cases.",
        "Mixtures contain two or more substances that are not chemically locked together; their composition can vary.",
        "Physical methods such as filtering, evaporating, or using a magnet can often separate mixture parts.",
        "Sorting matter this way helps you predict whether a sample will separate easily or need a chemical change.",
      ],
    },
    examples: [
      {
        caption: "Element",
        body: "A copper wire is mainly the element copper.",
      },
      {
        caption: "Compound",
        body: "Table salt (sodium chloride) is a compound with properties unlike sodium metal or chlorine gas.",
      },
      {
        caption: "Mixture",
        body: "Air is a mixture of gases; muddy water is a mixture of water and soil particles.",
      },
    ],
    connection:
      "Cooking spices, scrap metal recycling, and air itself are mixture stories; medicines often rely on pure compounds.",
    try: {
      prompt:
        "Classify iron, water, and salty seawater as element, compound, or mixture — and give one reason each.",
      reveal:
        "Iron: element (one kind of atom). Water: compound (H and O chemically combined). Seawater: mixture (water plus dissolved salts and more).",
    },
    practice: [
      q(
        "g8s-ecm-p1",
        "Which statement best matches elements, compounds, and mixtures?",
        "Elements are one kind of atom; compounds are chemically combined elements; mixtures keep separable parts",
        "Every material is an element because it is made of stuff",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea about elements, compounds, and mixtures.",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g8s-ecm-p2",
        "Which detail best supports careful Grade 8 materials thinking?",
        "Iron filings mixed with sand can often be separated with a magnet — a mixture clue",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail about magnetic separation supports mixture thinking.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8s-ecm-p3",
        "Which move shows scientific reasoning?",
        "Explain why water is a compound by noting hydrogen and oxygen combine into a new substance",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Combination and new properties lead explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8s-ecm-r1",
        "In your own words, explain why this matters: Elements are one kind of atom; compounds are chemically combined elements; mixtures keep separable parts.",
        "It matters because the category predicts properties and separation methods. A supporting detail is separating iron filings from sand with a magnet.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "element", "mixture"],
      ),
      q(
        "g8s-ecm-r2",
        "A classmate claims: “Water is just a mixture of hydrogen and oxygen gases sitting side by side.” What is the better reply?",
        "Point to evidence: water is a compound — hydrogen and oxygen combine chemically into a new substance",
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
        "g8s-ecm-t1",
        "Write one or two sentences that tell elements, compounds, and mixtures apart.",
        ["element", "compound", "mixture", "atom", "combine", "separate"],
        "A short written recall should distinguish the three categories.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["element", "compound", "mixture"],
      ),
      q(
        "g8s-ecm-t2",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Elements are one kind of atom; compounds are chemically combined elements; mixtures keep separable parts",
        "Every material is an element because it is made of stuff",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core classification idea.",
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
      "g8s-ecm-m1",
      "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
      "The idea is that elements, compounds, and mixtures are different kinds of matter. One proof is oxygen as an element, water as a compound, and sand with iron filings as a mixture.",
      "Idea plus proof.",
      "Teaching without an example leaves the listener guessing.",
      ["idea", "element", "compound", "mixture"],
    ),
    misconceptions: [
      {
        idea: "A compound is just a mixture with a fancy name.",
        correction:
          "In a compound, elements are chemically combined into a new substance with fixed composition.",
      },
      {
        idea: "Mixtures always look obviously different to the eye.",
        correction:
          "Some mixtures, like air or salt water, look uniform yet still contain more than one substance.",
      },
    ],
    reflect: {
      prompt:
        "Name one mixture you used today and say how you might separate its parts.",
      keyIdeas: ["element", "compound", "mixture"],
    },
    teach: {
      prompt:
        "Teach the three categories using oxygen, water, and sandy iron filings.",
      keyIdeas: ["pure", "chemical combine", "separable"],
    },
    masteryCriteria:
      "You can tell elements, compounds, and mixtures apart with clear examples.",
  },
});

export const solutesSolventsLesson = grade8ScienceLesson({
  conceptId: "ncert-g8-curiosity-solutes-solvents-core",
  title: "The Amazing World of Solutes, Solvents, and Solutions",
  domainTitle: "Materials",
  prerequisites: ["ncert-g8-curiosity-elements-compounds-mixtures-core"],
  nextConceptIds: ["ncert-g8-curiosity-light-mirrors-lenses-core"],
  content: {
    objective:
      "Name solute and solvent and describe a solution as a uniform mixture, with everyday examples.",
    wonder: {
      prompt:
        "Sugar “disappears” in tea yet the tea tastes sweet — where did the sugar go, and what roles did tea and sugar play?",
    },
    explore: {
      text: "In a solution, a solute dissolves in a solvent to make a uniform mixture. Water is a common solvent; sugar, salt, and many gases can act as solutes. Stirring and temperature often change how quickly dissolving happens.",
      activity: {
        prompt:
          "You stir a spoon of salt into a glass of water until no grains remain. Which claim best matches?",
        choices: [
          {
            id: "sol",
            label:
              "Salt is the solute, water is the solvent, and the clear salty water is a solution",
            note: "You named the roles and recognised a uniform mixture.",
          },
          {
            id: "vanish",
            label: "Salt vanished into nothing, so no solution formed",
            note: "Dissolved solute still exists — taste and mass tell the story.",
          },
          {
            id: "swap",
            label: "Water is always the solute whenever anything dissolves",
            note: "The solvent is the substance that does the dissolving — often water.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A solution is a uniform mixture formed when a solute dissolves in a solvent.",
        "The solute is the substance that dissolves; the solvent is the substance that does the dissolving.",
        "Many everyday drinks and medicines are aqueous solutions — water is the solvent.",
        "A solution looks the same throughout; undissolved grains sitting at the bottom mean dissolving is incomplete.",
        "Temperature and stirring can change how fast dissolving happens, and there is a limit to how much solute a solvent can hold under given conditions.",
      ],
    },
    examples: [
      {
        caption: "Kitchen solution",
        body: "Sugar in tea: sugar solute, tea water mainly solvent, sweet tea the solution.",
      },
      {
        caption: "Ocean idea",
        body: "Seawater holds dissolved salts as solutes in water as solvent.",
      },
      {
        caption: "Uniform clue",
        body: "A clear salt solution tastes salty in every sip — composition is even.",
      },
    ],
    connection:
      "Cooking, oral rehydration drinks, and cleaning solutions all use solute–solvent language.",
    try: {
      prompt:
        "Name the solute and solvent in lemonade made by dissolving sugar and lemon in water.",
      reveal:
        "Water is the main solvent; sugar and lemon substances act as solutes in the lemonade solution.",
    },
    practice: [
      q(
        "g8s-sol-p1",
        "Which statement best matches solutes, solvents, and solutions?",
        "A solute dissolves in a solvent to form a uniform mixture called a solution",
        "A solution is only a pile of undissolved grains at the bottom",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea about solutions.",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g8s-sol-p2",
        "Which detail best supports careful Grade 8 solutions thinking?",
        "In salty water, salt is the solute and water is the solvent",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail naming solute and solvent supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8s-sol-p3",
        "Which move shows scientific reasoning?",
        "Explain that dissolved sugar still exists because the tea tastes sweet throughout",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Taste and uniformity lead explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8s-sol-r1",
        "In your own words, explain why this matters: A solute dissolves in a solvent to form a uniform mixture called a solution.",
        "It matters because naming roles helps you understand drinks, medicines, and seawater. A supporting detail is salt as solute and water as solvent in salty water.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "solute", "solvent"],
      ),
      q(
        "g8s-sol-r2",
        "A classmate claims: “When sugar dissolves, it vanishes into nothing.” What is the better reply?",
        "Point to evidence: the tea tastes sweet throughout, so dissolved sugar is still present in the solution",
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
        "g8s-sol-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "A solute dissolves in a solvent to form a uniform mixture called a solution",
        "A solution is only a pile of undissolved grains at the bottom",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core solution idea.",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8s-sol-t2",
        "Write one or two sentences naming a solute, a solvent, and the solution they form.",
        ["solute", "solvent", "solution", "salt", "sugar", "water"],
        "A short written recall should name the three roles.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["solute", "solvent"],
      ),
    ],
    mastery: explainQ(
      "g8s-sol-m1",
      "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
      "The idea is that a solute dissolves in a solvent to make a uniform solution. One proof is salt in water: salt solute, water solvent, salty water solution.",
      "Idea plus proof.",
      "Teaching without an example leaves the listener guessing.",
      ["idea", "solute", "solvent", "solution"],
    ),
    misconceptions: [
      {
        idea: "Dissolved means destroyed.",
        correction:
          "The solute particles spread evenly through the solvent; they are still there.",
      },
      {
        idea: "Only solids can be solutes.",
        correction:
          "Gases and liquids can also dissolve — carbon dioxide in soda is a familiar case.",
      },
    ],
    reflect: {
      prompt:
        "Which drink or soup at home is a solution, and what do you think the solute is?",
      keyIdeas: ["solute", "solvent", "uniform"],
    },
    teach: {
      prompt:
        "Teach solute, solvent, and solution using the tea-and-sugar example.",
      keyIdeas: ["dissolve", "uniform mixture", "roles"],
    },
    masteryCriteria:
      "You can name solute and solvent and describe a solution as a uniform mixture.",
  },
});

export const lightMirrorsLensesLesson = grade8ScienceLesson({
  conceptId: "ncert-g8-curiosity-light-mirrors-lenses-core",
  title: "Light: Mirrors and Lenses",
  domainTitle: "Light",
  prerequisites: ["ncert-g8-curiosity-solutes-solvents-core"],
  nextConceptIds: ["ncert-g8-curiosity-keeping-time-skies-core"],
  content: {
    objective:
      "Describe how mirrors and lenses change the path or appearance of light, with everyday examples.",
    wonder: {
      prompt:
        "A spoon’s shiny bowl flips your face oddly, while reading glasses sharpen print — how do mirrors and lenses rewrite light’s journey?",
    },
    explore: {
      text: "Light travels in straight lines until it meets a surface or passes through a lens. Mirrors reflect light and can form images. Lenses bend (refract) light and can magnify or focus. Plane, concave, and convex shapes create different image effects.",
      activity: {
        prompt:
          "You compare a flat bathroom mirror, a shiny spoon’s inner curve, and a magnifying glass on a page. Which claim best matches?",
        choices: [
          {
            id: "tools",
            label:
              "The flat mirror reflects a familiar image; curved mirrors and lenses change path and appearance of light differently",
            note: "Reflection and refraction are the two big light tools here.",
          },
          {
            id: "same",
            label: "Mirrors and lenses do exactly the same job in every case",
            note: "Mirrors mainly reflect; lenses mainly bend light that passes through.",
          },
          {
            id: "stop",
            label: "Light stops existing when it hits any shiny surface",
            note: "Reflection redirects light; it does not erase it.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Mirrors reflect light; a plane mirror typically gives a left–right reversed image of similar size.",
        "Curved mirrors (concave or convex) can magnify, diminish, or flip images depending on shape and distance.",
        "Lenses bend light that passes through them; convex lenses can converge rays and magnify, while concave lenses can diverge rays.",
        "Spectacles, cameras, and projectors use lens ideas; vehicle mirrors and makeup mirrors use reflection ideas.",
        "Tracing how light’s path changes — bounce or bend — is the heart of this chapter.",
      ],
    },
    examples: [
      {
        caption: "Plane mirror",
        body: "Checking your hair in a flat wall mirror uses regular reflection.",
      },
      {
        caption: "Lens use",
        body: "A magnifying glass is a convex lens that makes print look larger.",
      },
      {
        caption: "Curved mirror",
        body: "A polished spoon’s bowl can show a distorted or inverted face image.",
      },
    ],
    connection:
      "Classrooms, clinics, vehicles, and phones all depend on mirrors and lenses.",
    try: {
      prompt:
        "Name one place you use a mirror and one place you use a lens in daily life.",
      reveal:
        "Example: bathroom mirror for reflection; eyeglasses or a phone camera lens for bending light.",
    },
    practice: [
      q(
        "g8s-light-p1",
        "Which statement best matches mirrors and lenses?",
        "Mirrors reflect light; lenses bend light that passes through them, changing path or appearance",
        "Mirrors and lenses never change how light travels",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea about mirrors and lenses.",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g8s-light-p2",
        "Which detail best supports careful Grade 8 light thinking?",
        "A magnifying glass is a convex lens that can make print look larger",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail about a magnifying glass supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8s-light-p3",
        "Which move shows scientific reasoning?",
        "Explain a spoon’s odd face image by linking curved reflection to a changed light path",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Path change leads explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8s-light-r1",
        "In your own words, explain why this matters: Mirrors reflect light; lenses bend light that passes through them, changing path or appearance.",
        "It matters because everyday tools reshape light for seeing clearly or forming images. A supporting detail is a magnifying glass making print larger.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "mirror", "lens"],
      ),
      q(
        "g8s-light-r2",
        "A classmate claims: “Mirrors and lenses do exactly the same job.” What is the better reply?",
        "Point to evidence: mirrors mainly reflect; lenses bend light that passes through, as in a magnifying glass",
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
        "g8s-light-t1",
        "Write one or two sentences explaining how a mirror and a lens each change light.",
        ["reflect", "bend", "mirror", "lens", "refract", "path"],
        "A short written recall should contrast reflection and bending.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["mirror", "lens"],
      ),
      q(
        "g8s-light-t2",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Mirrors reflect light; lenses bend light that passes through them, changing path or appearance",
        "Mirrors and lenses never change how light travels",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core light idea.",
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
      "g8s-light-m1",
      "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
      "The idea is that mirrors reflect light and lenses bend light, changing path or appearance. One proof is a magnifying glass enlarging print or a plane mirror showing your face.",
      "Idea plus proof.",
      "Teaching without an example leaves the listener guessing.",
      ["idea", "mirror", "lens"],
    ),
    misconceptions: [
      {
        idea: "Lenses work by reflecting light like mirrors.",
        correction:
          "Lenses mainly bend light that passes through them; mirrors redirect light by reflection.",
      },
      {
        idea: "Only fancy lab equipment uses lenses.",
        correction:
          "Eyeglasses, cameras, and magnifying glasses are everyday lens tools.",
      },
    ],
    reflect: {
      prompt:
        "Which mirror or lens near you changes how something looks the most?",
      keyIdeas: ["reflect", "bend", "image"],
    },
    teach: {
      prompt:
        "Teach mirrors versus lenses with one bathroom and one reading example.",
      keyIdeas: ["reflection", "refraction", "appearance"],
    },
    masteryCriteria:
      "You can describe how mirrors and lenses change the path or appearance of light.",
  },
});

export const keepingTimeSkiesLesson = grade8ScienceLesson({
  conceptId: "ncert-g8-curiosity-keeping-time-skies-core",
  title: "Keeping Time with the Skies",
  domainTitle: "Earth/Space",
  prerequisites: ["ncert-g8-curiosity-light-mirrors-lenses-core"],
  nextConceptIds: ["ncert-g8-curiosity-nature-harmony-core"],
  content: {
    objective:
      "Link sky patterns — day and night, seasons, and Moon phases — to how people keep track of time.",
    wonder: {
      prompt:
        "Before glowing clocks, people still knew when to plant and when to rest. Which sky patterns were their earliest calendars?",
    },
    explore: {
      text: "Earth’s spin brings day and night. Earth’s tilt and yearly path around the Sun shape seasons. The Moon’s changing face marks a monthly rhythm. Together, these sky patterns help people keep time for farming, festivals, and daily life.",
      activity: {
        prompt:
          "You notice longer daylight in June than in December at your latitude (in many places). Which claim best matches keeping time with the skies?",
        choices: [
          {
            id: "season",
            label:
              "Seasonal daylight changes link to Earth’s tilt and yearly path — a sky clock for the year",
            note: "Seasons are a sky-based time pattern.",
          },
          {
            id: "random",
            label: "Day length changes randomly with no sky pattern",
            note: "Day length follows predictable Earth–Sun geometry.",
          },
          {
            id: "moon-only",
            label: "Only the Moon controls seasons; Earth’s path never matters",
            note: "Seasons link mainly to Earth’s tilt and orbit around the Sun.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Day and night come from Earth rotating so that places face toward or away from the Sun.",
        "Seasons arise because Earth’s axis is tilted as it travels around the Sun, changing how sunlight hits a region through the year.",
        "The Moon’s phases — new to full and back — offer a roughly monthly sky rhythm people have long used.",
        "Calendars, festivals, and farming seasons grew from watching these repeating patterns.",
        "Keeping time with the skies means reading reliable cycles, not random lights.",
      ],
    },
    examples: [
      {
        caption: "Daily rhythm",
        body: "Sunrise and sunset mark the day’s bookends as Earth spins.",
      },
      {
        caption: "Yearly rhythm",
        body: "Longer summer days and shorter winter days track the seasonal cycle.",
      },
      {
        caption: "Monthly rhythm",
        body: "A full Moon returning about each month helped people count longer spans.",
      },
    ],
    connection:
      "School calendars, harvest festivals, and holiday dates still echo sky rhythms.",
    try: {
      prompt:
        "Name one daily, one monthly, and one yearly sky pattern people use to keep time.",
      reveal:
        "Daily: day/night from Earth’s spin. Monthly: Moon phases. Yearly: seasons from Earth’s tilt and orbit.",
    },
    practice: [
      q(
        "g8s-sky-p1",
        "Which statement best matches keeping time with the skies?",
        "Day/night, seasons, and Moon phases are sky patterns people use to track time",
        "Sky patterns are random and useless for calendars",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea about sky timekeeping.",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g8s-sky-p2",
        "Which detail best supports careful Grade 8 Earth/space thinking?",
        "Seasonal daylight changes link to Earth’s tilt and yearly path around the Sun",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail about seasons and tilt supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8s-sky-p3",
        "Which move shows scientific reasoning?",
        "Link a festival or farm calendar to a repeating sky cycle such as seasons or Moon phases",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Sky cycles lead explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8s-sky-r1",
        "In your own words, explain why this matters: Day/night, seasons, and Moon phases are sky patterns people use to track time.",
        "It matters because repeating sky cycles gave people reliable clocks before electric ones. A supporting detail is seasonal daylight changing with Earth’s tilt and yearly path.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "season", "moon"],
      ),
      q(
        "g8s-sky-r2",
        "A classmate claims: “Day length changes randomly with no sky pattern.” What is the better reply?",
        "Point to evidence: seasonal daylight shifts follow Earth’s tilt and yearly path around the Sun",
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
        "g8s-sky-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Day/night, seasons, and Moon phases are sky patterns people use to track time",
        "Sky patterns are random and useless for calendars",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core sky-time idea.",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8s-sky-t2",
        "Write one or two sentences linking a sky pattern to how people keep time.",
        ["day", "night", "season", "moon", "time", "calendar"],
        "A short written recall should link a sky cycle to timekeeping.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["sky", "time"],
      ),
    ],
    mastery: explainQ(
      "g8s-sky-m1",
      "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
      "The idea is that sky patterns — day/night, seasons, and Moon phases — help people keep time. One proof is longer summer days linked to Earth’s tilt and yearly path.",
      "Idea plus proof.",
      "Teaching without an example leaves the listener guessing.",
      ["idea", "sky", "time"],
    ),
    misconceptions: [
      {
        idea: "Seasons happen because Earth moves closer to or farther from the Sun in a simple distance story.",
        correction:
          "For Earth, tilt and the yearly path shape seasons more than a simple closer/farther story.",
      },
      {
        idea: "The Moon’s phases are random clouds covering its light.",
        correction:
          "Phases follow the Moon’s changing position relative to Earth and Sun.",
      },
    ],
    reflect: {
      prompt:
        "Which sky pattern do you notice most — sunrise, Moon shape, or seasonal day length?",
      keyIdeas: ["day/night", "seasons", "Moon"],
    },
    teach: {
      prompt:
        "Teach how day/night and seasons help people keep time, with one Moon-phase mention.",
      keyIdeas: ["rotation", "tilt", "phases"],
    },
    masteryCriteria:
      "You can link sky patterns to how people keep track of days and seasons.",
  },
});

export const natureHarmonyLesson = grade8ScienceLesson({
  conceptId: "ncert-g8-curiosity-nature-harmony-core",
  title: "How Nature Works in Harmony",
  domainTitle: "Ecosystems",
  prerequisites: ["ncert-g8-curiosity-keeping-time-skies-core"],
  nextConceptIds: ["ncert-g8-curiosity-earth-unique-planet-core"],
  content: {
    objective:
      "Explain a way living and non-living parts of nature interact in balance, and why disturbing that balance matters.",
    wonder: {
      prompt:
        "A forest feels “alive,” yet soil, water, sunlight, and air are not living — how do living and non-living parts still work as one system?",
    },
    explore: {
      text: "Ecosystems link living things with non-living surroundings. Plants capture sunlight; animals eat and are eaten; decomposers return materials to soil. Water, air, and minerals cycle through the system. Harmony means interactions that keep the web working — not a frozen picture.",
      activity: {
        prompt:
          "In a pond, algae grow in sunlight, fish eat insects, and fallen leaves decay into mud. Which claim best matches harmony thinking?",
        choices: [
          {
            id: "web",
            label:
              "Living and non-living parts exchange energy and materials in linked cycles",
            note: "That exchange is how nature works in harmony.",
          },
          {
            id: "alone",
            label: "Only animals matter; sunlight and water are decorations",
            note: "Non-living parts are essential to the system.",
          },
          {
            id: "freeze",
            label: "Harmony means nothing in nature ever changes",
            note: "Balance includes change and cycling, not a frozen scene.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Nature’s harmony is the web of interactions among living organisms and their non-living surroundings.",
        "Producers, consumers, and decomposers move energy and materials through ecosystems.",
        "Sunlight, water, air, soil, and temperature shape what can live where.",
        "When one part is disturbed — pollution, overharvesting, habitat loss — effects can ripple through the web.",
        "Caring for harmony means noticing links before they break.",
      ],
    },
    examples: [
      {
        caption: "Living–non-living link",
        body: "Roots take water and minerals from soil; leaves need sunlight and air.",
      },
      {
        caption: "Food web idea",
        body: "Insects eat plants; birds eat insects; both return nutrients when they decay.",
      },
      {
        caption: "Balance tip",
        body: "Clean water and healthy soil keep a pond community thriving.",
      },
    ],
    connection:
      "Gardens, parks, farms, and rivers near home are miniature harmony systems.",
    try: {
      prompt:
        "Describe one living part and one non-living part in a park or field, and how they interact.",
      reveal:
        "Example: grass (living) needs sunlight and soil water (non-living) to grow; insects then feed on the grass.",
    },
    practice: [
      q(
        "g8s-harm-p1",
        "Which statement best matches how nature works in harmony?",
        "Living and non-living parts exchange energy and materials in linked cycles",
        "Only animals matter; sunlight and water are decorations",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea about ecosystem harmony.",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g8s-harm-p2",
        "Which detail best supports careful Grade 8 ecosystem thinking?",
        "Decomposers return materials from dead leaves to soil that plants can use again",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail about decomposers supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8s-harm-p3",
        "Which move shows scientific reasoning?",
        "Explain how polluting a pond can ripple to fish, insects, and plants through linked interactions",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Web thinking leads explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8s-harm-r1",
        "In your own words, explain why this matters: Living and non-living parts exchange energy and materials in linked cycles.",
        "It matters because ecosystems depend on those exchanges to keep communities going. A supporting detail is decomposers returning materials from leaves to soil.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "living", "cycle"],
      ),
      q(
        "g8s-harm-r2",
        "A classmate claims: “Harmony means nothing in nature ever changes.” What is the better reply?",
        "Point to evidence: balance includes cycling and change, such as leaves decaying into soil nutrients",
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
        "g8s-harm-t1",
        "Write one or two sentences explaining how a living and a non-living part interact in an ecosystem.",
        ["living", "non-living", "sunlight", "soil", "water", "energy", "cycle"],
        "A short written recall should name an interaction.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["living", "non-living"],
      ),
      q(
        "g8s-harm-t2",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Living and non-living parts exchange energy and materials in linked cycles",
        "Only animals matter; sunlight and water are decorations",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core harmony idea.",
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
      "g8s-harm-m1",
      "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
      "The idea is that living and non-living parts of nature interact in linked cycles. One proof is plants using sunlight and soil water, or decomposers returning leaf materials to soil.",
      "Idea plus proof.",
      "Teaching without an example leaves the listener guessing.",
      ["idea", "ecosystem", "balance"],
    ),
    misconceptions: [
      {
        idea: "Non-living parts are unimportant scenery.",
        correction:
          "Sunlight, water, air, and soil are essential partners in every ecosystem.",
      },
      {
        idea: "Harmony means a frozen, unchanging nature.",
        correction:
          "Healthy systems keep cycling and adjusting; balance is active, not frozen.",
      },
    ],
    reflect: {
      prompt:
        "Where have you seen a small ecosystem near home — and what non-living part keeps it going?",
      keyIdeas: ["interaction", "cycle", "balance"],
    },
    teach: {
      prompt:
        "Teach living–non-living harmony using a pond or park example.",
      keyIdeas: ["producers", "decomposers", "non-living"],
    },
    masteryCriteria:
      "You can explain how living and non-living parts of nature interact in balance.",
  },
});

export const earthUniquePlanetLesson = grade8ScienceLesson({
  conceptId: "ncert-g8-curiosity-earth-unique-planet-core",
  title: "Our Home: Earth, a Unique Life-Sustaining Planet",
  domainTitle: "Earth",
  prerequisites: ["ncert-g8-curiosity-nature-harmony-core"],
  nextConceptIds: [],
  content: {
    objective:
      "Name features that make Earth able to support life — atmosphere, water, temperature range, and protective conditions — and why that uniqueness matters.",
    wonder: {
      prompt:
        "Space is vast and harsh, yet Earth hosts forests, oceans, and classrooms. What rare combination of features turns a rocky planet into a living home?",
    },
    explore: {
      text: "Earth sustains life through a blend of conditions: liquid water, a breathable atmosphere, a suitable distance from the Sun for moderate temperatures, and a magnetic field and atmosphere that help shield living things. Those features work together — uniqueness is a package, not a single trick.",
      activity: {
        prompt:
          "You compare Earth with a dry, airless rocky world far from a gentle temperature range. Which claim best matches Earth’s life-sustaining story?",
        choices: [
          {
            id: "package",
            label:
              "Liquid water, a supportive atmosphere, and a temperate energy balance together make life possible",
            note: "Earth’s uniqueness is a combination of life-friendly conditions.",
          },
          {
            id: "rock",
            label: "Being rocky alone is enough for life everywhere",
            note: "Rock without water, air, and suitable temperature is not enough.",
          },
          {
            id: "any",
            label: "Any planet equally supports forests and oceans",
            note: "Earth’s package of conditions is rare among known worlds.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Earth is a life-sustaining planet because several conditions work together.",
        "Liquid water — in oceans, rivers, and cells — is essential for known life.",
        "The atmosphere provides gases living things need and helps moderate temperature and radiation.",
        "Earth’s place in the solar system supports a temperature range where water can stay liquid over much of the surface.",
        "Protecting this home means caring for air, water, climate balance, and the living systems that depend on them.",
      ],
    },
    examples: [
      {
        caption: "Water",
        body: "Oceans and freshwater systems host and support living communities.",
      },
      {
        caption: "Atmosphere",
        body: "Air supplies oxygen for many organisms and helps keep surface conditions livable.",
      },
      {
        caption: "Temperature window",
        body: "Earth’s distance from the Sun helps keep much of the planet within a life-friendly temperature range.",
      },
    ],
    connection:
      "Climate care, clean air, and water protection are ways of guarding Earth’s unique gift.",
    try: {
      prompt:
        "List three features that help Earth support life and say why one of them matters.",
      reveal:
        "Example: liquid water, atmosphere, and temperate sunlight balance — water matters because known life needs it for cells and chemistry.",
    },
    practice: [
      q(
        "g8s-earth-p1",
        "Which statement best matches Earth as a life-sustaining planet?",
        "Liquid water, a supportive atmosphere, and a temperate energy balance together make life possible",
        "Being rocky alone is enough for life everywhere",
        "Skip evidence and invent any story",
        "a",
        "The strongest choice matches the science idea about Earth’s life-supporting package.",
        "Stay with evidence-based science.",
        "A trap idea or invented story is not careful science.",
        {
          a: "You stayed with the science idea.",
          b: "That trap pulls away from the chapter’s meaning.",
          c: "Evidence matters more than invention.",
        },
      ),
      q(
        "g8s-earth-p2",
        "Which detail best supports careful Grade 8 Earth thinking?",
        "Earth’s atmosphere helps supply needed gases and moderate surface conditions",
        "Ignore observations and trust only loud opinions",
        "Assume every chapter has the same single fact",
        "a",
        "A concrete detail about the atmosphere supports the skill.",
        "Look for an observable or testable detail.",
        "Skipping observations weakens claims.",
        {
          a: "You used a concrete science detail.",
          b: "Observations beat volume.",
          c: "Each chapter builds its own idea.",
        },
      ),
      q(
        "g8s-earth-p3",
        "Which move shows scientific reasoning?",
        "Explain Earth’s uniqueness as a combination of water, air, and temperature conditions — not one feature alone",
        "Memorise a slogan with no example",
        "Change the question so the hard idea disappears",
        "a",
        "Science links questions to evidence and explanation.",
        "Evidence before certainty.",
        "Slogans without examples fade quickly.",
        {
          a: "Package thinking leads explanation.",
          b: "Examples give slogans meaning.",
          c: "Facing the idea is the point.",
        },
      ),
    ],
    reasoning: [
      explainQ(
        "g8s-earth-r1",
        "In your own words, explain why this matters: Liquid water, a supportive atmosphere, and a temperate energy balance together make life possible.",
        "It matters because life depends on a package of conditions Earth provides. A supporting detail is the atmosphere helping supply gases and moderate surface conditions.",
        "Idea plus one detail.",
        "A label alone without reason is incomplete.",
        ["because", "water", "atmosphere"],
      ),
      q(
        "g8s-earth-r2",
        "A classmate claims: “Any planet equally supports forests and oceans.” What is the better reply?",
        "Point to evidence: Earth combines liquid water, a supportive atmosphere, and a temperate energy balance that many worlds lack",
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
        "g8s-earth-t1",
        "Without looking back, which statement is closest to the chapter’s idea?",
        "Liquid water, a supportive atmosphere, and a temperate energy balance together make life possible",
        "Being rocky alone is enough for life everywhere",
        "The chapter only lists random unrelated words",
        "a",
        "Retrieval keeps the core Earth-home idea.",
        "Recall the heart of the lesson.",
        "The trap idea is not the chapter’s heart.",
        {
          a: "You retrieved the core idea.",
          b: "That trap is not the heart.",
          c: "The chapter builds a coherent idea.",
        },
      ),
      writeQ(
        "g8s-earth-t2",
        "Write one or two sentences naming features that help Earth support life.",
        ["water", "atmosphere", "temperature", "air", "life", "planet"],
        "A short written recall should name life-supporting features.",
        "Keep it short and faithful.",
        "A long off-topic paragraph is not retrieval.",
        ["water", "atmosphere"],
      ),
    ],
    mastery: explainQ(
      "g8s-earth-m1",
      "Teach a younger learner the chapter’s idea. Use one clear example as proof.",
      "The idea is that Earth supports life through a package of features — liquid water, atmosphere, and a temperate energy balance. One proof is oceans of liquid water and air that living things need.",
      "Idea plus proof.",
      "Teaching without an example leaves the listener guessing.",
      ["idea", "Earth", "life"],
    ),
    misconceptions: [
      {
        idea: "Any rocky planet automatically hosts forests and oceans.",
        correction:
          "Life needs a package of conditions — water, air, and a suitable temperature range among them.",
      },
      {
        idea: "Earth’s life support can never be harmed by human choices.",
        correction:
          "Air, water, and climate balance can be damaged; protecting them guards our unique home.",
      },
    ],
    reflect: {
      prompt:
        "Which Earth feature — water, air, or climate balance — do you feel most responsible for protecting?",
      keyIdeas: ["water", "atmosphere", "home"],
    },
    teach: {
      prompt:
        "Teach why Earth is life-sustaining using three features as a package.",
      keyIdeas: ["liquid water", "atmosphere", "temperature"],
    },
    masteryCriteria:
      "You can name features that make Earth able to support life and explain why they matter together.",
  },
});
