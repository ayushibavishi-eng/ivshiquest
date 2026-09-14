import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade6ScienceLesson } from "@/content/lessons/grade-6-science/format";

export const temperatureMeasurementLesson = grade6ScienceLesson({
  conceptId: "ncert-g6-curiosity-temperature-measurement-core",
  title: "Temperature and its Measurement",
  domainTitle: "Temperature",
  prerequisites: ["ncert-g6-curiosity-materials-around-us-core"],
  nextConceptIds: ["ncert-g6-curiosity-states-of-water-core"],
  coveredSkillIds: [
    "ncert-g6-curiosity-temperature-measurement-core-sk-1-read-a-thermometer-idea",
    "ncert-g6-curiosity-temperature-measurement-core-sk-2-compare-temperatures",
  ],
  content: {
    objective:
      "Read temperature as a measured hotness or coolness on a scale, and compare two readings carefully.",
    wonder: {
      prompt:
        "Your hand says the steel spoon feels colder than the wooden spoon — yet both sat in the same room. What would a thermometer tell you that skin alone might hide?",
    },
    explore: {
      text: "Temperature is how hot or cold something is, measured with a thermometer on a scale such as Celsius. Reading a thermometer means noticing where the liquid or digital number sits, then naming the unit. Comparing temperatures means saying which reading is higher or lower and by roughly how much. Materials can feel different to touch even at the same temperature because some conduct heat away from your skin faster.",
      activity: {
        prompt:
          "Which note both reads a thermometer idea and compares two temperatures?",
        choices: [
          {
            id: "read-compare",
            label:
              "Cup A reads 40 °C and cup B reads 25 °C — cup A is warmer by about 15 degrees",
            note: "You used scale readings and a clear comparison.",
          },
          {
            id: "guess-only",
            label: "Ignore the numbers; just call everything ‘kinda warm’ forever",
            note: "A thermometer reading needs a number and unit, not only a vague feel.",
          },
          {
            id: "no-scale",
            label: "Thermometers invent heat with no scale and never compare",
            note: "Scales and comparisons are how temperature measurement works.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A thermometer measures temperature — how hot or cold something is — using a marked scale.",
        "Reading a thermometer means finding the mark or display value and saying the unit (often °C in school science).",
        "Comparing temperatures means ordering readings: higher means hotter on the same scale; lower means cooler.",
        "Touch can mislead: metal may feel colder than wood at room temperature because metal conducts heat away from your hand faster.",
        "Safety: hot water, flames, and steam need careful distance; never point a glass thermometer at anyone or heat it over an open flame.",
      ],
    },
    examples: [
      {
        caption: "Clinic reading",
        body: "A digital thermometer shows 37 °C for a resting person — a typical body temperature near that value.",
      },
      {
        caption: "Two cups",
        body: "Tea at 70 °C is much hotter than lemonade at 10 °C. The numbers let you compare without guessing.",
      },
      {
        caption: "Room vs fridge",
        body: "Room air near 28 °C feels warmer than fridge air near 5 °C. Same scale, different readings.",
      },
    ],
    connection:
      "Weather reports, cooking, and fever checks all lean on temperature readings — shared numbers instead of only ‘hot’ or ‘cold’ opinions.",
    try: {
      prompt:
        "Find two safe places to compare (shade and sun, or room and fridge door). Predict which is warmer, then check with a thermometer if you have one — or note how adults measure kitchen heat.",
      reveal:
        "Example: sunny sill reads higher than shady sill. Prediction plus a reading (or a careful adult check) beats guessing by touch alone.",
    },
    practice: [
      q(
        "g6s-tm-p1",
        "Which sentence best shows a thermometer reading idea?",
        "the liquid mark sits at 30 °C on the scale",
        "temperature is only a feeling with no number ever",
        "thermometers measure the colour of Tuesday",
        "a",
        "A reading names a mark or display value with a unit. Feelings alone and calendar colours are not thermometer readings.",
        "What number and unit does the instrument show?",
        "Temperature measurement uses a scale, not weekdays.",
        {
          a: "You named a scale reading.",
          b: "Feelings help, but readings use numbers.",
          c: "Days of the week are not temperature units.",
        },
      ),
      q(
        "g6s-tm-p2",
        "Which comparison of temperatures is careful?",
        "42 °C is hotter than 18 °C on the same Celsius scale",
        "any bigger-looking bottle is always hotter",
        "lower numbers always mean something is boiling",
        "a",
        "Same-scale numbers let you compare hot and cold. Bottle size and boiling myths are not careful comparisons.",
        "Which reading is higher on the same scale?",
        "Size and boiling claims need evidence, not assumptions.",
        {
          a: "You compared same-scale readings.",
          b: "Container size is not temperature.",
          c: "Boiling needs a high enough reading, not a low one.",
        },
      ),
      explainQ(
        "g6s-tm-p3",
        "Why might a metal railing feel colder than a wooden bench in the same park, even if a thermometer shows similar air temperature nearby?",
        "Metal conducts heat away from your hand faster than wood, so your skin loses heat quickly and the railing feels colder. Temperature of the air can be similar while touch feelings differ.",
        "Think about heat moving from your hand into the material.",
        "Touch feeling is not always the same as the air temperature reading.",
        ["metal|conduct|heat|wood|feel|cold|temperature|hand"],
      ),
    ],
    reasoning: [
      q(
        "g6s-tm-r1",
        "Two bowls of water: A reads 55 °C and B reads 20 °C. A child dips a finger briefly in A and says both feel the same later. What is the best science response?",
        "trust the thermometer comparison: A is much hotter; brief touch can mislead and hot water can burn",
        "throw away thermometers because fingers never err",
        "claim 20 °C is always hotter than 55 °C",
        "a",
        "Measured readings compare more reliably than quick touch, and hot water needs care.",
        "Which evidence is safer and clearer for comparing hotness?",
        "Fingers can mislead; scales do not reverse like that.",
        {
          a: "You trusted careful measurement and safety.",
          b: "Instruments help when senses disagree.",
          c: "Higher Celsius readings mean hotter on that scale.",
        },
      ),
      explainQ(
        "g6s-tm-r2",
        "Explain how to read a thermometer idea and then compare two cup readings in one short story.",
        "Example: Look at the mark — cup A shows 60 °C, cup B shows 25 °C. Cup A is hotter. Reading names the value; comparing orders the two numbers on the same scale.",
        "Name two readings, then say which is hotter.",
        "Skipping numbers leaves only vague ‘warm’ talk.",
        ["read|scale|degree|celsius|compare|hotter|cooler|number"],
      ),
    ],
    retrieve: [
      q(
        "g6s-tm-t1",
        "Comparing temperatures mainly means...",
        "saying which measured reading is higher or lower on the same scale",
        "ignoring all numbers and guessing by bottle colour only",
        "pretending every object has the same reading always",
        "a",
        "Comparison uses ordered readings on one scale.",
        "What do you do with two thermometer values?",
        "Colour guesses and sameness claims skip measurement.",
        {
          a: "You defined temperature comparison.",
          b: "Numbers matter more than bottle colour.",
          c: "Objects can differ in temperature.",
        },
      ),
      writeQ(
        "g6s-tm-t2",
        "Write one thermometer reading and one comparison with a second reading.",
        [
          "celsius",
          "degree",
          "thermometer",
          "hotter",
          "cooler",
          "higher",
          "lower",
          "scale",
          "reading",
          "temperature",
        ],
        "Example: Room is 29 °C; fridge air is 6 °C — the room reading is higher, so warmer.",
        "Give two values (or clear hot/cool order) on one idea of a scale.",
        "Only saying ‘it feels nice’ skips the measure-and-compare skills.",
        ["celsius|degree|thermometer|reading|scale|temperature", "hotter|cooler|higher|lower|compare|warmer"],
      ),
    ],
    misconceptions: [
      {
        idea: "If something feels cold to touch, its temperature reading must be near freezing.",
        correction:
          "Good conductors can feel colder than they ‘are’ relative to your hand. A thermometer reading is the clearer check.",
      },
      {
        idea: "Bigger numbers on any dial always mean colder.",
        correction:
          "On the Celsius scale used in many school thermometers, higher readings mean hotter, not colder.",
      },
    ],
    reflect: {
      prompt:
        "Where will you notice a temperature reading this week — weather, kitchen, or clinic — and what will you compare it with?",
      keyIdeas: ["temperature|thermometer|compare"],
    },
    mastery: q(
      "g6s-tm-m1",
      "Temperature and its Measurement asks you to...",
      "read thermometer ideas and compare temperature readings",
      "ignore scales and trust only vague feelings forever",
      "treat every object as equally hot with no check",
      "a",
      "Reading and comparing on a scale are the chapter skills.",
      "Which pair matches the learning goals?",
      "Feelings-only and no-check habits miss the skills.",
      {
        a: "You held both temperature skills.",
        b: "Scales make hot and cold clearer.",
        c: "Objects can differ; we measure to compare.",
      },
    ),
    masteryCriteria:
      "You can describe a thermometer reading with a scale idea and compare two temperatures by which reading is higher or lower.",
    teach: {
      prompt:
        "Teach Ivshi how to read one thermometer value and compare it with a second reading.",
      keyIdeas: ["read|thermometer", "compare|temperature"],
    },
  },
});

export const statesOfWaterLesson = grade6ScienceLesson({
  conceptId: "ncert-g6-curiosity-states-of-water-core",
  title: "A Journey through States of Water",
  domainTitle: "Water",
  prerequisites: ["ncert-g6-curiosity-temperature-measurement-core"],
  nextConceptIds: ["ncert-g6-curiosity-methods-of-separation-core"],
  coveredSkillIds: [
    "ncert-g6-curiosity-states-of-water-core-sk-1-name-a-change-of-state",
    "ncert-g6-curiosity-states-of-water-core-sk-2-give-an-everyday-example",
  ],
  content: {
    objective:
      "Name changes of state for water and give everyday examples of ice, liquid water, and vapour in action.",
    wonder: {
      prompt:
        "Ice melts in your glass, a puddle shrinks on a sunny path, and a cold bottle ‘sweats’. What journeys is water taking between solid, liquid, and gas?",
    },
    explore: {
      text: "Water can be solid (ice), liquid (water you drink), or gas (water vapour in air). Changes of state include melting, freezing, evaporation, boiling, and condensation. Humidity is water vapour in air that can make air feel sticky. Clouds hold tiny droplets or ice; rain falls when those droplets grow heavy enough. Naming the change and giving a daily example links science to kitchens, weather, and wet roads.",
      activity: {
        prompt:
          "Which note names a change of state and gives an everyday example?",
        choices: [
          {
            id: "change-example",
            label:
              "Evaporation: a wet handkerchief dries on a line as liquid water becomes vapour",
            note: "You named the change and anchored it in daily life.",
          },
          {
            id: "no-change",
            label: "Water never changes form and puddles are permanent sculptures",
            note: "Puddles shrink and ice melts — changes of state are common.",
          },
          {
            id: "mystery-word",
            label: "Something called ‘blorping’ happens with no example anywhere",
            note: "Science names real changes and ties them to observations.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Solid ice, liquid water, and water vapour are three states of the same substance — water.",
        "Melting turns ice to liquid; freezing turns liquid to ice. Heating and cooling drive many of these changes.",
        "Evaporation is liquid becoming vapour at the surface; boiling is rapid vapour formation with bubbles when heated enough.",
        "Condensation is vapour becoming liquid — dew on grass, mist on a cold glass, cloud droplets forming.",
        "The water cycle links evaporation, clouds, and rain: water moves between Earth’s surface and air again and again.",
      ],
    },
    examples: [
      {
        caption: "Melting",
        body: "Ice cubes in juice become liquid water as they warm.",
      },
      {
        caption: "Condensation",
        body: "Water drops form on the outside of a cold bottle on a humid day — vapour in air cooled into liquid.",
      },
      {
        caption: "Rain from clouds",
        body: "Tiny cloud droplets join and fall as rain — condensed water returning to land.",
      },
    ],
    connection:
      "Weather, drying clothes, steaming food, and frost on windows are all chapters in water’s state story.",
    try: {
      prompt:
        "Spot two water changes at home or outside today. Name each change of state and where you saw it.",
      reveal:
        "Example: Melting — ice in a drink. Evaporation — chalkboard drying after wet wiping. Condensation — bathroom mirror after a hot shower.",
    },
    practice: [
      q(
        "g6s-sw-p1",
        "Which names a change of state for water?",
        "melting of ice into liquid water",
        "painting a cup blue with no water involved",
        "naming a planet with no ice or vapour",
        "a",
        "Melting is a solid-to-liquid change of state. Unrelated colouring or planet labels are not water state changes.",
        "What happens to ice, liquid, or vapour?",
        "State changes are about water’s form.",
        {
          a: "You named a real state change.",
          b: "Paint colour is not a water state change.",
          c: "Sky objects are a different topic.",
        },
      ),
      q(
        "g6s-sw-p2",
        "Which is an everyday example of condensation?",
        "tiny water drops forming on a cold steel tumbler on a humid afternoon",
        "a dry rock that never meets vapour",
        "ice appearing because someone whispered ‘freeze’ once",
        "a",
        "Cool surfaces can turn nearby vapour into liquid drops. Dry rocks and magic words are not condensation examples.",
        "Where does vapour become liquid you can see?",
        "Condensation needs cooling vapour, not wishes.",
        {
          a: "You gave a daily condensation example.",
          b: "No vapour meeting means no condensation.",
          c: "Freezing needs cooling, not a single word.",
        },
      ),
      explainQ(
        "g6s-sw-p3",
        "Name one change of state and give one everyday example that matches it.",
        "Example: Evaporation — wet footprints fade on warm tiles as liquid water becomes vapour. Or freezing — water in a tray becomes ice in a freezer.",
        "Pair the named change with a place you could observe it.",
        "A name with no example, or an example with no name, leaves the skill half-done.",
        ["melt|freeze|evaporat|condens|boil|ice|vapour|rain|cloud"],
      ),
    ],
    reasoning: [
      q(
        "g6s-sw-r1",
        "Clothes dry faster on a windy sunny day than in a closed damp room. Which explanation fits best?",
        "wind and warmth help liquid water evaporate into vapour and move away; damp still air slows that change",
        "clothes invent new water from nowhere when wind blows",
        "sunlight forbids evaporation forever",
        "a",
        "Evaporation speeds when vapour can leave and temperatures help. Clothes do not create water from nothing.",
        "What helps liquid become vapour and leave the cloth?",
        "Wind and sun usually help drying, not block it.",
        {
          a: "You linked weather conditions to evaporation.",
          b: "Drying removes water; it does not create it.",
          c: "Sun and air often aid evaporation.",
        },
      ),
      explainQ(
        "g6s-sw-r2",
        "How do evaporation and condensation both appear in the water cycle story?",
        "Water evaporates from land and seas into vapour, rises and cools, condenses into cloud droplets, and may fall as rain — then the journey can begin again.",
        "Name where water becomes vapour and where vapour becomes liquid.",
        "The cycle needs both leaving the surface and forming clouds or dew.",
        ["evaporat|condens|cloud|rain|vapour|cycle|water"],
      ),
    ],
    retrieve: [
      q(
        "g6s-sw-t1",
        "Giving an everyday example of a water state change mainly means...",
        "linking a named change to something you can observe in daily life",
        "using only invented words with no observation",
        "claiming ice, liquid, and vapour are unrelated substances",
        "a",
        "Examples anchor state names in real observations. Ice, liquid, and vapour are still water.",
        "What joins the science name to life?",
        "Water stays water across states.",
        {
          a: "You defined the everyday-example skill.",
          b: "Observations beat empty labels.",
          c: "States are forms of the same water.",
        },
      ),
      writeQ(
        "g6s-sw-t2",
        "Name one change of state and one everyday example.",
        [
          "melting",
          "freezing",
          "evaporation",
          "condensation",
          "boiling",
          "ice",
          "vapour",
          "rain",
          "cloud",
          "puddle",
        ],
        "Example: melting — ice cream softening; or condensation — mist on a cold glass.",
        "Change name + a place or event you could notice.",
        "Only saying ‘water moves’ without a state name is too thin.",
        ["melt|freeze|evaporat|condens|boil", "ice|vapour|rain|cloud|puddle|dew|steam|glass"],
      ),
    ],
    misconceptions: [
      {
        idea: "Steam you see above a kettle is pure empty heat with no water.",
        correction:
          "The white cloud is tiny liquid droplets from condensed vapour mixed with hot vapour — water is still in the story.",
      },
      {
        idea: "When a puddle disappears, water is destroyed.",
        correction:
          "Much of it evaporates into vapour in the air. The water changes state and place; it is not erased.",
      },
    ],
    reflect: {
      prompt:
        "Which water state change will you watch on purpose this week — melting, drying, dew, or rain?",
      keyIdeas: ["state|water|example"],
    },
    mastery: q(
      "g6s-sw-m1",
      "A Journey through States of Water asks you to...",
      "name changes of state and give everyday examples",
      "pretend water has only one form forever",
      "ignore ice, vapour, clouds, and rain",
      "a",
      "Naming changes and giving daily examples are the skills.",
      "Which habit matches the chapter?",
      "One-form stories and ignoring weather water miss the goals.",
      {
        a: "You held both water-state skills.",
        b: "Water changes form in daily life.",
        c: "Ice, vapour, and rain belong here.",
      },
    ),
    masteryCriteria:
      "You can name at least two changes of state for water and give a clear everyday example for one of them.",
    teach: {
      prompt:
        "Teach Ivshi two water state changes with one everyday example each.",
      keyIdeas: ["change|state", "everyday|example"],
    },
  },
});

export const methodsOfSeparationLesson = grade6ScienceLesson({
  conceptId: "ncert-g6-curiosity-methods-of-separation-core",
  title: "Methods of Separation in Everyday Life",
  domainTitle: "Separation",
  prerequisites: ["ncert-g6-curiosity-states-of-water-core"],
  nextConceptIds: ["ncert-g6-curiosity-living-creatures-core"],
  coveredSkillIds: [
    "ncert-g6-curiosity-methods-of-separation-core-sk-1-choose-a-separation-method",
    "ncert-g6-curiosity-methods-of-separation-core-sk-2-explain-why-it-works",
  ],
  content: {
    objective:
      "Choose a sensible separation method for an everyday mixture and explain why that method works.",
    wonder: {
      prompt:
        "Sand in water, tea leaves in a cup, salt dissolved in soup, and pebbles in dal — how do people separate what they want from what they do not, without magic?",
    },
    explore: {
      text: "Mixtures can often be separated by using differences: size, solubility, or whether something is solid or liquid. Sieving uses holes to let small bits through. Filtration uses a filter (cloth, paper) to hold solids while liquid passes. Evaporation can leave dissolved salt behind when water turns to vapour. Handpicking, threshing, and sedimentation (letting heavy bits settle) are everyday tools too. Choosing a method means matching the mixture’s difference; explaining why means naming that difference.",
      activity: {
        prompt:
          "Which choice both picks a method and explains why it fits?",
        choices: [
          {
            id: "method-why",
            label:
              "Filter muddy water with cloth: solid mud particles are larger and get trapped while liquid water passes",
            note: "Method named and reason tied to particle size.",
          },
          {
            id: "wish",
            label: "Wish the mud away with no filter, sieve, or settling",
            note: "Separation needs a real method based on properties.",
          },
          {
            id: "random",
            label: "Use a magnet on salt water because salt is always magnetic",
            note: "Salt is not separated that way; match method to real properties.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A mixture contains more than one material mixed together. Separation tries to pull useful parts apart.",
        "Choose a method by asking: Do pieces differ in size? Is one dissolved? Is one liquid and one solid? Does one settle?",
        "Filtration separates undissolved solids from liquids. Evaporation can recover a dissolved solid when the liquid becomes vapour.",
        "Sieving separates by particle size. Handpicking works when pieces are large and easy to see.",
        "Explaining why a method works means naming the property difference it uses — size, solubility, density/settling, or magnetism for some mixtures.",
      ],
    },
    examples: [
      {
        caption: "Tea",
        body: "Strainer or filter: leaves are solid pieces; liquid tea passes through.",
      },
      {
        caption: "Salt from salt water",
        body: "Evaporate water; salt left behind because it does not leave with the vapour easily.",
      },
      {
        caption: "Grains and husk",
        body: "Winnowing or sieving uses size and how light husk moves in air differently from heavier grain.",
      },
    ],
    connection:
      "Kitchens, farms, labs, and water treatment all separate mixtures by noticing differences — the same habit as careful science.",
    try: {
      prompt:
        "Name one mixture at home. Choose a separation method and say why it should work.",
      reveal:
        "Example: Spices and flour sifted — sieve lets fine flour through, holds larger spice bits. Or muddy rinse water left to settle, then pour off clearer water.",
    },
    practice: [
      q(
        "g6s-ms-p1",
        "Which is a sensible separation method for sand mixed with water?",
        "filtration or letting sand settle, then pouring off water",
        "asking the sand to walk out politely",
        "dissolving the glass of the container to free the sand",
        "a",
        "Sand is an undissolved solid — filter or sedimentation fits. Manners and dissolving glass are not methods.",
        "What property difference can you use?",
        "Real methods use size, settling, or filters.",
        {
          a: "You chose a workable method.",
          b: "Materials do not separate by manners.",
          c: "Destroying the container is not separation.",
        },
      ),
      q(
        "g6s-ms-p2",
        "Why does filtration separate tea leaves from tea?",
        "leaves are solid pieces too big to pass; liquid tea can flow through the holes",
        "tea leaves become invisible magnets",
        "filters erase substances from existence",
        "a",
        "Filtration uses size: solids stay, liquid passes. Magnets and erasure are not the reason.",
        "What difference does the filter use?",
        "Filters trap solids; they do not erase matter.",
        {
          a: "You explained size-based filtration.",
          b: "Tea leaves are not magnets here.",
          c: "Matter is separated, not erased.",
        },
      ),
      explainQ(
        "g6s-ms-p3",
        "Choose a method to separate salt dissolved in water and explain why it works.",
        "Evaporate the water (by warming safely or leaving it to dry). Water becomes vapour; salt stays as a solid because it was dissolved and does not evaporate with the water in ordinary conditions.",
        "Think about what leaves as vapour and what remains.",
        "Filtering alone will not remove dissolved salt — the salt particles are not sitting as visible bits.",
        ["evaporat|salt|water|vapour|dissolv|left|remain|solid"],
      ),
    ],
    reasoning: [
      q(
        "g6s-ms-r1",
        "You have iron filings mixed with sand. Which plan is best and why?",
        "use a magnet: iron is attracted, sand is not, so filings cling while sand stays",
        "filter with water only, because sand and iron always dissolve together",
        "evaporate the sand into the sky",
        "a",
        "Magnetism is the useful difference. Neither dissolves as a pair, and sand does not evaporate away.",
        "Which property splits iron from sand?",
        "Match the method to a real difference.",
        {
          a: "You matched magnetism to the mixture.",
          b: "Sand and iron are not a shared solution here.",
          c: "Sand does not evaporate like that.",
        },
      ),
      explainQ(
        "g6s-ms-r2",
        "Why might you use sedimentation before filtration for very muddy water?",
        "Heavy mud can settle first so less solid clogs the filter. Sedimentation uses density/settling; filtration then catches remaining fine bits. Combining methods can work better than one alone.",
        "What does settling remove before the filter works?",
        "One method is not always enough for thick mud.",
        ["settle|sediment|filter|mud|heavy|solid|liquid"],
      ),
    ],
    retrieve: [
      q(
        "g6s-ms-t1",
        "Explaining why a separation method works mainly means...",
        "naming the property difference the method uses",
        "saying the method is mysterious with no reason",
        "claiming all mixtures separate the same way always",
        "a",
        "Reasons point to size, solubility, settling, or other differences.",
        "What makes the method fit the mixture?",
        "Mixtures need matched methods.",
        {
          a: "You defined the explain-why skill.",
          b: "Reasons belong with methods.",
          c: "Different mixtures need different tools.",
        },
      ),
      writeQ(
        "g6s-ms-t2",
        "Name one mixture, one separation method, and a short why.",
        [
          "filter",
          "sieve",
          "evaporate",
          "magnet",
          "settle",
          "sand",
          "salt",
          "tea",
          "solid",
          "liquid",
        ],
        "Example: muddy water — filtration — solids trapped, liquid passes. Or salt water — evaporation — water leaves, salt remains.",
        "Mixture + method + property difference.",
        "Naming only ‘mix’ with no method skips both skills.",
        ["filter|sieve|evaporat|magnet|settle|handpick|winnow", "sand|salt|tea|mud|grain|iron|size|dissolv"],
      ),
    ],
    misconceptions: [
      {
        idea: "Filtration removes dissolved salt from water.",
        correction:
          "Dissolved salt passes with the liquid. Evaporation (or other methods) is needed to recover that salt.",
      },
      {
        idea: "One method works for every mixture.",
        correction:
          "You match the method to how the parts differ — size, magnetism, solubility, and more.",
      },
    ],
    reflect: {
      prompt:
        "Which kitchen or outdoor mixture will you mentally ‘separate’ this week — and which method fits?",
      keyIdeas: ["separat|method|mixture"],
    },
    mastery: q(
      "g6s-ms-m1",
      "Methods of Separation in Everyday Life asks you to...",
      "choose a separation method and explain why it works",
      "mix everything permanently with no plan",
      "ignore size, filters, and evaporation",
      "a",
      "Choosing and explaining are the chapter skills.",
      "Which pair matches the learning goals?",
      "No-plan mixing and ignoring tools miss the goals.",
      {
        a: "You held both separation skills.",
        b: "Mixtures can be separated thoughtfully.",
        c: "Properties guide the tools we pick.",
      },
    ),
    masteryCriteria:
      "You can choose a sensible separation method for a named everyday mixture and explain the property difference that makes it work.",
    teach: {
      prompt:
        "Teach Ivshi two everyday separations: method plus why for each.",
      keyIdeas: ["method|choose", "why|property"],
    },
  },
});

export const livingCreaturesLesson = grade6ScienceLesson({
  conceptId: "ncert-g6-curiosity-living-creatures-core",
  title: "Living Creatures: Exploring their Characteristics",
  domainTitle: "Living creatures",
  prerequisites: ["ncert-g6-curiosity-methods-of-separation-core"],
  nextConceptIds: ["ncert-g6-curiosity-natures-treasures-core"],
  coveredSkillIds: [
    "ncert-g6-curiosity-living-creatures-core-sk-1-list-a-life-characteristic",
    "ncert-g6-curiosity-living-creatures-core-sk-2-compare-two-creatures",
  ],
  content: {
    objective:
      "List characteristics of living creatures and compare two creatures using clear similarities or differences.",
    wonder: {
      prompt:
        "A crow flies, a fish swims, a bean plant grows toward light, and you breathe. What shared life signs do they show — and what differences help each fit its place?",
    },
    explore: {
      text: "Living creatures show characteristics such as needing food or nutrients, growing, responding to surroundings, breathing or exchanging gases, and reproducing. Animals may move from place to place; plants may grow toward light and make food in leaves. Comparing two creatures means naming a shared life trait and a difference in body, habitat, or behaviour. Air’s oxygen matters for many animals’ breathing; circulation carries useful materials in animal bodies.",
      activity: {
        prompt:
          "Which note both lists a life characteristic and compares two creatures?",
        choices: [
          {
            id: "list-compare",
            label:
              "Both a dog and a mango tree grow and need materials from their surroundings; the dog moves on legs while the tree stays rooted and makes food in leaves",
            note: "Shared life trait plus a clear difference.",
          },
          {
            id: "same-all",
            label: "Every creature is identical in every way always",
            note: "Life shares traits, but bodies and habitats differ.",
          },
          {
            id: "no-life",
            label: "Living things show no growth, response, or need for materials",
            note: "Growth, response, and needs are common life characteristics.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Life characteristics include nutrition (taking materials for energy and growth), growth, response to changes, respiration or gas exchange, and reproduction.",
        "Listing a characteristic means naming one of these life signs you can observe or describe.",
        "Comparing two creatures means saying how they are alike in life traits and how they differ in structure, movement, or habitat.",
        "Many animals take in oxygen from air or water when they breathe; plants also exchange gases and need materials from soil and air.",
        "Circulation in animals moves useful substances around the body — another system that supports living functions.",
      ],
    },
    examples: [
      {
        caption: "Earthworm and bird",
        body: "Alike: both need food and can respond to touch or danger. Different: bird flies with wings; earthworm burrows in soil.",
      },
      {
        caption: "Cactus and fish",
        body: "Alike: both are alive and grow. Different: cactus lives on land with thick water-storing stems; fish lives in water and uses gills.",
      },
      {
        caption: "You and a seedling",
        body: "Alike: both grow. Different: you walk and eat food others made; the seedling stays rooted and makes food using light.",
      },
    ],
    connection:
      "Doctors, farmers, and wildlife watchers all start by noticing life signs — then comparing how different creatures meet the same needs.",
    try: {
      prompt:
        "Pick two living creatures you can observe (pet, insect, plant, bird). List one shared life characteristic and one difference.",
      reveal:
        "Example: Cat and tulsi plant — both grow; cat moves and eats prepared food, tulsi is rooted and makes food in leaves.",
    },
    practice: [
      q(
        "g6s-lc-p1",
        "Which is a life characteristic you can list?",
        "living creatures grow over time",
        "rocks hold festivals every weekend",
        "shadows eat lunch with spoons",
        "a",
        "Growth is a life characteristic. Rocks and shadows are not living in this sense.",
        "What do living things typically do over time?",
        "Non-living stories are not life characteristics.",
        {
          a: "You listed a real life trait.",
          b: "Rocks are non-living here.",
          c: "Shadows are not creatures that eat.",
        },
      ),
      q(
        "g6s-lc-p2",
        "Which sentence compares two creatures well?",
        "a frog and a crow both need food; the frog is often in wet places while the crow flies and perches in trees",
        "frogs and crows are the same animal with different names only",
        "creatures cannot be compared because words fail always",
        "a",
        "A useful comparison names a likeness and a difference. They are not the same animal, and words can describe them.",
        "What is alike, and what differs?",
        "Comparisons use clear likeness and difference.",
        {
          a: "You compared with alike and different.",
          b: "Frogs and crows are distinct creatures.",
          c: "Words can capture life differences.",
        },
      ),
      explainQ(
        "g6s-lc-p3",
        "List one life characteristic and use it while comparing a plant and an animal.",
        "Example: Both respond to their surroundings — a plant may bend toward light; an animal may move toward food or away from danger. Shared: response. Different: how they move or stay rooted.",
        "Name the shared trait, then how each shows it differently.",
        "Only saying ‘both are nice’ skips life characteristics.",
        ["grow|food|respond|breathe|reproduc|alive|plant|animal"],
      ),
    ],
    reasoning: [
      q(
        "g6s-lc-r1",
        "A toy robot moves and makes sound. A sleeping cat barely moves. Why can the cat still be living while the robot is not?",
        "the cat is an organism that grows, needs food, and can reproduce as a species; the robot is a machine without true life processes",
        "because robots hold birthday parties in secret",
        "because sleeping always means non-living forever",
        "a",
        "Life is more than motion. Sleeping animals are still alive; machines copy some actions without being organisms.",
        "Which shows true life processes, not only motion?",
        "Sleep is not the end of life; machines are not organisms.",
        {
          a: "You separated life processes from mere motion.",
          b: "Party stories are not biology tests.",
          c: "Sleeping animals remain living.",
        },
      ),
      explainQ(
        "g6s-lc-r2",
        "Compare a fish and a bird using one shared life characteristic and one difference linked to habitat.",
        "Shared: both need food and exchange gases to stay alive. Difference: fish typically live in water and use gills; birds live in air habitats and use lungs with flight adaptations. Habitat shapes body features.",
        "Alike life need + different body or place.",
        "Stopping at ‘both cute’ misses the compare skill.",
        ["food|breathe|grow|alive", "fish|bird|water|air|gill|lung|wing|habitat"],
      ),
    ],
    retrieve: [
      q(
        "g6s-lc-t1",
        "Listing a life characteristic mainly means...",
        "naming a trait living creatures show such as growth, nutrition, or response",
        "listing only brand names of toys",
        "denying that living things need materials",
        "a",
        "Life characteristics are observable or describable life signs.",
        "What marks living organisms in science talk?",
        "Toys and denial miss life traits.",
        {
          a: "You defined listing life characteristics.",
          b: "Toy brands are not life traits.",
          c: "Living things need materials and energy.",
        },
      ),
      writeQ(
        "g6s-lc-t2",
        "List one life characteristic and compare two creatures with one likeness or difference.",
        [
          "grow",
          "food",
          "respond",
          "breathe",
          "move",
          "plant",
          "animal",
          "bird",
          "fish",
          "insect",
        ],
        "Example: Both a cow and a grass plant grow; the cow walks and eats plants, the grass is rooted and makes food.",
        "Life trait + two creatures + alike or different.",
        "Naming only one animal with no trait skips both skills.",
        ["grow|food|respond|breathe|reproduc|alive|move", "plant|animal|bird|fish|insect|dog|tree"],
      ),
    ],
    misconceptions: [
      {
        idea: "Only animals are living; plants are not.",
        correction:
          "Plants are living too — they grow, make or take materials, respond, and reproduce.",
      },
      {
        idea: "If something moves, it must be living.",
        correction:
          "Wind-blown leaves and toys move without being alive. Look for a set of life characteristics, not motion alone.",
      },
    ],
    reflect: {
      prompt:
        "Which two creatures will you compare this week — and which life trait will anchor your comparison?",
      keyIdeas: ["living|characteristic|compare"],
    },
    mastery: q(
      "g6s-lc-m1",
      "Living Creatures: Exploring their Characteristics asks you to...",
      "list life characteristics and compare two creatures",
      "treat plants and animals as non-living decorations",
      "refuse to notice any likeness or difference",
      "a",
      "Listing traits and comparing creatures are the skills.",
      "Which habit matches the chapter?",
      "Decoration-only and no-compare habits miss the goals.",
      {
        a: "You held both living-creature skills.",
        b: "Plants and animals are living.",
        c: "Comparisons need likeness and difference.",
      },
    ),
    masteryCriteria:
      "You can list at least two life characteristics and compare two creatures with one clear likeness and one clear difference.",
    teach: {
      prompt:
        "Teach Ivshi three life characteristics, then compare two creatures you choose.",
      keyIdeas: ["characteristic|life", "compare|creatures"],
    },
  },
});

export const naturesTreasuresLesson = grade6ScienceLesson({
  conceptId: "ncert-g6-curiosity-natures-treasures-core",
  title: "Nature’s Treasures",
  domainTitle: "Treasures",
  prerequisites: ["ncert-g6-curiosity-living-creatures-core"],
  nextConceptIds: ["ncert-g6-curiosity-beyond-earth-core"],
  coveredSkillIds: [
    "ncert-g6-curiosity-natures-treasures-core-sk-1-name-a-natural-treasure",
    "ncert-g6-curiosity-natures-treasures-core-sk-2-give-a-care-action",
  ],
  content: {
    objective:
      "Name natural treasures we share and give care actions that protect them for living things and future use.",
    wonder: {
      prompt:
        "Air you breathe, water you drink, soil that grows food, forests that shelter life, and rocks under your feet — if these are treasures, what habits keep them from being wasted?",
    },
    explore: {
      text: "Nature’s treasures include air, water, soil, forests, wildlife, sunlight, and rocks and minerals. They are natural resources we share. Weather is the day-to-day outdoor air condition — wind, rain, heat — while climate is the longer pattern of a place. Conservation means using carefully and protecting. A care action might save water, plant or protect trees, reduce litter, or respect wild habitats. Sustainability means habits that leave treasures usable later.",
      activity: {
        prompt:
          "Which note names a natural treasure and gives a care action?",
        choices: [
          {
            id: "treasure-care",
            label:
              "Clean water is a treasure — fix leaks and keep soap out of storm drains",
            note: "Treasure named and a protective habit paired with it.",
          },
          {
            id: "waste",
            label: "Dump plastic in a stream because treasures never need care",
            note: "Pollution harms shared water. Treasures need care.",
          },
          {
            id: "no-name",
            label: "Something vague exists somewhere with no action attached",
            note: "Name the treasure and a concrete care habit.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Natural treasures are parts of nature that support life and human needs: air, water, soil, forests, animals, sunlight, rocks.",
        "Naming a treasure means pointing to one of these shared resources clearly.",
        "Care actions conserve: save water and energy, reduce waste, protect plants and animals, keep air and water cleaner.",
        "Weather changes day to day; climate is the usual long-term pattern. Monsoon and seasons shape how places use water and soil.",
        "Rocks and soil are treasures underfoot — observing them carefully is part of valuing Earth’s materials.",
      ],
    },
    examples: [
      {
        caption: "Forest treasure",
        body: "Treasure: forest. Care: leave nesting trees standing and avoid litter on trails.",
      },
      {
        caption: "Soil treasure",
        body: "Treasure: soil. Care: keep plant cover on bare patches so rain does not wash soil away.",
      },
      {
        caption: "Air treasure",
        body: "Treasure: clean air. Care: walk short safe trips or share rides when possible to reduce smoke.",
      },
    ],
    connection:
      "Living creatures depend on these treasures; separation and water lessons already showed how carefully we treat materials and water at home.",
    try: {
      prompt:
        "Name one natural treasure near you and one care action you can take this week.",
      reveal:
        "Example: Local park trees — water a sapling with adult help, or pick up litter so soil and animals stay safer.",
    },
    practice: [
      q(
        "g6s-nt-p1",
        "Which is a natural treasure you can name?",
        "fresh water in rivers, wells, and rain",
        "a single plastic wrapper invented last night as ‘nature’",
        "an empty password with no link to Earth",
        "a",
        "Fresh water is a shared natural treasure. Fresh litter and passwords are not.",
        "What does nature provide that life needs?",
        "Treasures are Earth’s shared resources.",
        {
          a: "You named a real treasure.",
          b: "Plastic litter is not a natural treasure.",
          c: "Passwords are not Earth resources.",
        },
      ),
      q(
        "g6s-nt-p2",
        "Which is a care action for a natural treasure?",
        "segregate waste and reuse a bottle to cut litter on land and in water",
        "pour oil into a drain for fun",
        "break young tree branches to pass time",
        "a",
        "Reuse and segregation protect land and water. Oil dumping and breaking trees harm treasures.",
        "Which habit protects air, water, soil, or life?",
        "Harmful dumping and breaking are not care.",
        {
          a: "You named a protective care action.",
          b: "Drains lead to shared water.",
          c: "Young trees are living treasures.",
        },
      ),
      explainQ(
        "g6s-nt-p3",
        "Name one natural treasure and explain one care action that protects it.",
        "Example: Soil is a treasure because food grows in it. Care action: keep plant roots or mulch on bare ground so rain does not wash soil away. The action protects the treasure’s usefulness.",
        "Treasure first, then a matching protective habit.",
        "A treasure with no care plan leaves the skill unfinished.",
        ["water|air|soil|forest|tree|rock|sun", "save|protect|reuse|plant|clean|reduce|conserve"],
      ),
    ],
    reasoning: [
      q(
        "g6s-nt-r1",
        "One rainy day is cool and wet, but the region’s usual pattern is hot with a monsoon season. Which statement is most careful?",
        "today’s weather is one day; climate is the longer usual pattern including monsoon rhythms",
        "one rainy day rewrites climate forever instantly",
        "weather and climate are identical words with no time difference",
        "a",
        "Weather is day-to-day; climate is the longer pattern. One day does not erase climate.",
        "What is one day versus a long pattern?",
        "Time scale separates weather from climate.",
        {
          a: "You separated weather from climate.",
          b: "One day does not redefine climate alone.",
          c: "The words mark different timescales.",
        },
      ),
      explainQ(
        "g6s-nt-r2",
        "Why is saving water both a care action and a sustainability habit?",
        "Clean water is a limited shared treasure. Using less — fixing leaks, shorter rinses — leaves more for people, farms, and habitats later. That is caring now and thinking ahead.",
        "Link today’s habit to tomorrow’s shared need.",
        "Wasting water ignores both care and later needs.",
        ["water|save|share|future|conserve|leak|care|sustain"],
      ),
    ],
    retrieve: [
      q(
        "g6s-nt-t1",
        "A care action for Nature’s treasures mainly...",
        "protects a named natural resource through a helpful habit",
        "increases pollution on purpose",
        "ignores air, water, soil, and forests",
        "a",
        "Care habits reduce harm and protect shared treasures.",
        "What does a caring habit guard?",
        "Pollution and ignoring resources are not care.",
        {
          a: "You defined a care action.",
          b: "Care reduces harm.",
          c: "Treasures include air, water, soil, and forests.",
        },
      ),
      writeQ(
        "g6s-nt-t2",
        "Name one natural treasure and one care action.",
        [
          "water",
          "air",
          "soil",
          "forest",
          "tree",
          "rock",
          "save",
          "reuse",
          "plant",
          "clean",
        ],
        "Example: forest — do not litter; or water — turn off the tap while soaping hands.",
        "Treasure + matching care habit.",
        "Only naming a problem with no action skips the care skill.",
        ["water|air|soil|forest|tree|rock|wildlife|sun", "save|reuse|plant|clean|protect|reduce|conserve"],
      ),
    ],
    misconceptions: [
      {
        idea: "Natural treasures are endless, so care is optional.",
        correction:
          "Many resources are limited or slow to renew. Care keeps them usable for living things and people.",
      },
      {
        idea: "Only faraway forests count as treasures.",
        correction:
          "Local soil, park trees, pond water, and clean air are treasures too.",
      },
    ],
    reflect: {
      prompt:
        "Which natural treasure will guide your strongest care habit this month?",
      keyIdeas: ["treasure|care|nature"],
    },
    mastery: q(
      "g6s-nt-m1",
      "Nature’s Treasures asks you to...",
      "name natural treasures and give care actions",
      "treat Earth as a private dump",
      "deny that air and water matter",
      "a",
      "Naming treasures and giving care actions are the skills.",
      "Which pair matches the chapter?",
      "Dumping mindsets and denial miss the goals.",
      {
        a: "You joined treasure and care.",
        b: "Earth’s resources are shared.",
        c: "Air and water matter deeply.",
      },
    ),
    masteryCriteria:
      "You can name at least two natural treasures and give one clear care action that protects a treasure you name.",
    teach: {
      prompt:
        "Teach Ivshi two natural treasures and one care action for each.",
      keyIdeas: ["treasure|name", "care|action"],
    },
  },
});

export const beyondEarthLesson = grade6ScienceLesson({
  conceptId: "ncert-g6-curiosity-beyond-earth-core",
  title: "Beyond Earth",
  domainTitle: "Sky",
  prerequisites: ["ncert-g6-curiosity-natures-treasures-core"],
  nextConceptIds: [],
  coveredSkillIds: [
    "ncert-g6-curiosity-beyond-earth-core-sk-1-name-a-sky-object",
    "ncert-g6-curiosity-beyond-earth-core-sk-2-give-a-safety-rule-for-the-s",
  ],
  content: {
    objective:
      "Name objects in the sky beyond everyday Earth scenes and give a safety rule for observing the Sun.",
    wonder: {
      prompt:
        "The Sun lights our day, the Moon changes shape across weeks, and stars glitter at night. What belongs in the sky story — and what must you never do when looking toward the Sun?",
    },
    explore: {
      text: "Beyond Earth we meet the Sun, Moon, planets, and stars. Earth is one planet in the solar system moving around the Sun. Stars are distant suns; planets can look like steady points of light but do not make their own light like stars. The Moon shines mostly by reflecting sunlight. Light can bounce from shiny surfaces (reflection). Never look directly at the Sun with unprotected eyes — safe viewing needs proper filters or indirect methods with adult guidance.",
      activity: {
        prompt:
          "Which note names a sky object and includes a Sun safety rule?",
        choices: [
          {
            id: "object-safety",
            label:
              "The Moon is a sky object; never stare at the Sun without a proper safe filter — use adult-approved methods only",
            note: "Sky object named and a clear Sun safety rule.",
          },
          {
            id: "stare",
            label: "Stare at the Sun with bare eyes to prove bravery",
            note: "That harms eyes. Sun safety rules forbid unprotected staring.",
          },
          {
            id: "no-sky",
            label: "Nothing exists beyond the classroom ceiling ever",
            note: "Sun, Moon, planets, and stars are real sky objects.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Sky objects include the Sun, Moon, planets, stars, and sometimes meteors or human-made satellites.",
        "Naming a sky object means pointing to one you can identify in words — even if you see it only in books or carefully outdoors.",
        "The Sun is our nearest star; planets including Earth orbit it in the solar system.",
        "The Moon does not make its own light the way the Sun does; we see it mainly by reflected sunlight.",
        "Safety rule: never look directly at the Sun without proper protection. Bright sunlight can damage eyes. Use only safe, adult-approved ways to study it.",
      ],
    },
    examples: [
      {
        caption: "Moon",
        body: "Sky object: Moon. Safety: enjoy moonlight; still never use the Sun as a staring target.",
      },
      {
        caption: "Planet evening light",
        body: "A bright ‘star-like’ light that does not twinkle as much may be a planet — still part of the solar system story.",
      },
      {
        caption: "Safe Sun study",
        body: "Project the Sun’s image through a pinhole onto paper with adult help — look at the paper, not the Sun.",
      },
    ],
    connection:
      "Day, night, tides of interest in the Moon, and solar energy on Earth all link back to sky objects — studied with curiosity and care.",
    try: {
      prompt:
        "Tonight or at dusk, name one sky object you can see (or recall). Write one Sun safety rule you will keep.",
      reveal:
        "Example: I see the Moon. Rule: I will not look straight at the Sun; I will use only safe projected or filtered methods with an adult.",
    },
    practice: [
      q(
        "g6s-be-p1",
        "Which is a sky object you can name?",
        "the Moon",
        "a classroom desk leg",
        "a sock under the bed",
        "a",
        "The Moon is a sky object. Desk legs and socks are not.",
        "What belongs in the beyond-Earth sky story?",
        "Indoor furniture is not a sky object.",
        {
          a: "You named a real sky object.",
          b: "Desks are Earth classroom objects.",
          c: "Socks are not sky objects.",
        },
      ),
      q(
        "g6s-be-p2",
        "Which is a safety rule for the Sun?",
        "do not look directly at the Sun without a proper safe filter or adult-approved method",
        "stare at the Sun at noon to train your eyes",
        "use sunglasses from a toy shop as a guarantee for eclipse viewing alone",
        "a",
        "Unprotected staring harms eyes. Toy sunglasses are not enough for safe solar viewing.",
        "How do you protect your eyes near the Sun?",
        "Bravery stares and weak filters are unsafe.",
        {
          a: "You stated a real Sun safety rule.",
          b: "Staring damages eyes.",
          c: "Special safe methods need proper filters.",
        },
      ),
      explainQ(
        "g6s-be-p3",
        "Name one sky object and give one safety rule for the Sun.",
        "Example: Sky object — the Sun (our star) or the Moon. Safety — never look directly at the Sun without a proper safe filter; use adult-guided projection or certified viewers.",
        "Object name + eye-protection rule.",
        "Skipping safety when talking about the Sun is incomplete.",
        ["sun|moon|star|planet", "safe|look|eye|filter|stare|direct|protect"],
      ),
    ],
    reasoning: [
      q(
        "g6s-be-r1",
        "Why can the Moon look bright at night even though it is not a star like the Sun?",
        "sunlight reflects from the Moon’s surface toward Earth, so we see reflected light",
        "the Moon burns fuel like a lamp every night",
        "the Moon invents its own sunlight chemically each hour",
        "a",
        "Reflection of sunlight explains moonlight. The Moon is not a star making light the Sun’s way.",
        "Where does the Moon’s brightness mostly come from?",
        "The Moon shines mainly by reflected sunlight.",
        {
          a: "You used reflection of sunlight.",
          b: "The Moon is not a nightly fuel lamp.",
          c: "It does not invent sunlight each hour.",
        },
      ),
      explainQ(
        "g6s-be-r2",
        "Place Earth in the solar system in one sentence, then add one Sun safety rule.",
        "Earth is a planet that orbits the Sun along with other planets. Safety: never look directly at the Sun without proper protection — use only safe adult-approved methods.",
        "Earth’s place + eye safety.",
        "Solar system talk without Sun safety leaves a gap.",
        ["earth|planet|sun|orbit|solar", "safe|eye|look|filter|direct|protect"],
      ),
    ],
    retrieve: [
      q(
        "g6s-be-t1",
        "Naming a sky object mainly means...",
        "identifying something such as the Sun, Moon, a planet, or a star",
        "listing only underground rocks with no sky link",
        "claiming the night sky is empty of all objects",
        "a",
        "Sky objects are Sun, Moon, planets, stars, and related sights.",
        "What can you point to beyond everyday ground scenes?",
        "The sky is not empty of objects.",
        {
          a: "You defined naming sky objects.",
          b: "Underground rocks are a different treasure topic.",
          c: "Night skies hold many objects.",
        },
      ),
      writeQ(
        "g6s-be-t2",
        "Name one sky object and one safety rule for the Sun.",
        [
          "sun",
          "moon",
          "star",
          "planet",
          "earth",
          "safe",
          "eye",
          "look",
          "filter",
          "direct",
        ],
        "Example: Moon — and never look directly at the Sun without a proper safe filter.",
        "Sky object + Sun eye-safety rule.",
        "Only naming the Sun with no safety line skips the second skill.",
        ["sun|moon|star|planet|earth", "safe|eye|look|filter|direct|protect|stare"],
      ),
    ],
    misconceptions: [
      {
        idea: "Stars and planets are the same kind of object.",
        correction:
          "Stars make their own light; planets orbit stars and shine mainly by reflected light.",
      },
      {
        idea: "Ordinary sunglasses make it safe to stare at the Sun.",
        correction:
          "Everyday sunglasses are not enough for direct solar viewing. Use only proper safe methods with adult guidance.",
      },
    ],
    reflect: {
      prompt:
        "Which sky object will you notice on purpose soon — and which Sun safety rule will you teach a younger child?",
      keyIdeas: ["sky|object|safe|sun"],
    },
    mastery: q(
      "g6s-be-m1",
      "Beyond Earth asks you to...",
      "name sky objects and give a safety rule for the Sun",
      "stare at the Sun to memorise it",
      "ignore the Moon, planets, and stars",
      "a",
      "Naming sky objects and Sun safety are the skills.",
      "Which habit matches the chapter?",
      "Unsafe staring and ignoring the sky miss the goals.",
      {
        a: "You held both beyond-Earth skills.",
        b: "Sun safety protects eyes.",
        c: "Moon, planets, and stars belong in the story.",
      },
    ),
    masteryCriteria:
      "You can name at least two sky objects and state one clear safety rule for observing the Sun.",
    teach: {
      prompt:
        "Teach Ivshi three sky objects and one non-negotiable Sun safety rule.",
      keyIdeas: ["sky|object", "safe|sun"],
    },
  },
});
