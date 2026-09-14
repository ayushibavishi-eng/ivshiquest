import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade5EvsLesson } from "@/content/lessons/grade-5-evs/format";

export const someUniquePlacesLesson = grade5EvsLesson({
  conceptId: "ncert-g5-wondrous-world-some-unique-places-core",
  title: "Some Unique Places",
  domainTitle: "Places",
  prerequisites: ["ncert-g5-wondrous-world-our-vibrant-country-core"],
  nextConceptIds: ["ncert-g5-wondrous-world-energy-how-things-work-core"],
  coveredSkillIds: [
    "ncert-g5-wondrous-world-some-unique-places-core-sk-1-describe-a-unique-place",
    "ncert-g5-wondrous-world-some-unique-places-core-sk-2-give-a-reason-it-matters",
  ],
  content: {
    objective:
      "Describe what makes a place unique — land, life, or people — and give a clear reason why that place matters.",
    wonder: {
      prompt:
        "Think of a place that feels unlike anywhere else you know — a mangrove shore, a snowy pass, a desert salt flat, or a busy river island. What would you show a visitor first, and why does that place deserve care?",
    },
    explore: {
      text: "Unique places stand out because of special landforms, habitats, climate, wildlife, or ways people live with them. A mangrove coast shelters fish nurseries; a high desert holds rare plants; a sacred grove protects old trees. Describing a place means naming features you can notice. Saying why it matters links those features to life, culture, or Earth’s health.",
      activity: {
        prompt:
          "Which note both describes a unique place and shows why it matters?",
        choices: [
          {
            id: "describe-matter",
            label:
              "Sundarban mangroves: tangled roots in salty water — they shelter young fish and buffer storms for coastal villages",
            note: "You named a place feature and a reason it supports life and people.",
          },
          {
            id: "vague",
            label: "Somewhere nice exists somewhere",
            note: "Too vague. A unique-place note needs a named feature and a reason.",
          },
          {
            id: "dismiss",
            label: "Places never matter once you leave them",
            note: "Habitats and communities keep needing care even when you are far away.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A unique place has features that set it apart: unusual rock, special plants and animals, extreme climate, or a culture shaped by that land.",
        "Habitats are homes for living things. Coral reefs, grasslands, wetlands, and mountain forests each support different life cycles and food webs.",
        "Describing a place means being specific: where it is, what the land looks like, what lives there, and how people use or protect it.",
        "A place matters when it gives water, food, shelter, beauty, learning, safety from storms, or cultural meaning.",
        "Caring for unique places protects biodiversity — the variety of life — and the people who share that landscape.",
      ],
    },
    examples: [
      {
        caption: "Cold high desert",
        body: "Describe: thin air, sparse plants, snow peaks. Matters: rare wildlife and meltwater that feeds rivers downstream.",
      },
      {
        caption: "Wetland",
        body: "Describe: shallow water, reeds, migrating birds. Matters: filters water and offers nesting ground for many species.",
      },
      {
        caption: "Hill town terrace farms",
        body: "Describe: stepped fields on slopes. Matters: food for families and soil held against heavy rain.",
      },
    ],
    connection:
      "Maps, travel stories, and conservation news all start with noticing what makes a place itself — then asking what we owe it.",
    try: {
      prompt:
        "Pick one unique place from India you know from books, news, or travel. Write two description details and one reason it matters.",
      reveal:
        "Example: Thar Desert — sandy dunes and adapted camels; matters because people and wildlife have learned to live with scarce water.",
    },
    practice: [
      q(
        "g5e-up-p1",
        "Which sentence best describes a unique place?",
        "Ladakh’s cold desert has thin air, rocky slopes, and sparse hardy plants",
        "All places look identical if you squint",
        "Places cannot be described with words",
        "a",
        "A useful description names land, climate, or life you could notice. Vague sameness hides uniqueness.",
        "What features can a visitor observe?",
        "Claiming places are identical skips noticing.",
        {
          a: "You named clear place features.",
          b: "Places differ in land and life.",
          c: "Words can capture place details.",
        },
      ),
      q(
        "g5e-up-p2",
        "Which reason shows why a mangrove coast matters?",
        "its roots shelter young fish and help calm storm waves for nearby villages",
        "mangroves exist only to confuse maps",
        "coasts never affect living things",
        "a",
        "Shelter for fish and storm buffering link the habitat to life and safety.",
        "How does the habitat help life or people?",
        "Habitats support food webs and coastal safety.",
        {
          a: "You linked habitat to a real benefit.",
          b: "Mangroves have ecological jobs.",
          c: "Coasts and life are tightly linked.",
        },
      ),
      explainQ(
        "g5e-up-p3",
        "Why might a sacred grove matter even if it is small?",
        "It can protect old trees, local plants, and animals that need a quiet habitat. It may also hold cultural meaning for people who care for it. Size does not erase value.",
        "Think about biodiversity and community care.",
        "Small places can still shelter life and meaning.",
        ["protect|tree|habitat|life|culture|care|biodiverse|plant"],
      ),
    ],
    reasoning: [
      q(
        "g5e-up-r1",
        "A coral reef looks colourful underwater. Why might damaging it harm both fish and fishers?",
        "Reefs are habitats and nurseries; when the habitat breaks, fish lose homes and fishers lose a living resource",
        "Fish prefer empty sand with no food",
        "Fishers never depend on ocean habitats",
        "a",
        "Unique habitats support life cycles. People who harvest fish depend on those same webs of life.",
        "What does the reef give living things and people?",
        "Empty sand and independence claims miss the habitat link.",
        {
          a: "You traced habitat → life → livelihood.",
          b: "Fish need reef food and shelter.",
          c: "Coastal work often leans on healthy seas.",
        },
      ),
      explainQ(
        "g5e-up-r2",
        "Describe one unique place and give one reason it matters for Earth’s living world.",
        "Example: A Himalayan alpine meadow has short summers and tough flowers; it matters as grazing ground and as a home for high-altitude insects and birds. Your answer should name features plus a life or care reason.",
        "Feature first, then a benefit for life or people.",
        "Saying 'it is pretty' alone is thin — add an ecological or community reason.",
        ["place|land|habitat|life|matter|protect|water|plant|animal"],
      ),
    ],
    retrieve: [
      q(
        "g5e-up-t1",
        "Giving a reason a place matters mainly means...",
        "linking its special features to life, people, safety, or learning",
        "listing random words with no link to the place",
        "claiming no place ever needs care",
        "a",
        "Reasons connect features to value — habitat, culture, water, or protection.",
        "What joins description to value?",
        "Care and value are part of place study.",
        {
          a: "You stated the mattering link.",
          b: "Reasons need a real connection.",
          c: "Places deserve thoughtful care.",
        },
      ),
      writeQ(
        "g5e-up-t2",
        "Name a unique place, one describing detail, and one reason it matters.",
        [
          "mangrove",
          "desert",
          "mountain",
          "wetland",
          "reef",
          "forest",
          "shelter",
          "water",
          "wildlife",
          "protect",
        ],
        "Example: Sundarbans mangroves — salty tangled roots; matter because they shelter fish and buffer storms.",
        "Place + feature + why it helps life or people.",
        "A shop logo alone is not a unique natural place story.",
        ["mangrove|desert|mountain|wetland|reef|forest|island|valley", "shelter|water|wildlife|protect|storm|habitat|food"],
      ),
    ],
    misconceptions: [
      {
        idea: "Only famous tourist spots count as unique places.",
        correction:
          "A local wetland, hill spring, or old grove can be unique too. Fame is not the test — distinctive features are.",
      },
      {
        idea: "If people do not live there, the place does not matter.",
        correction:
          "Wild habitats still matter for biodiversity, water cycles, and Earth’s balance even with few residents.",
      },
    ],
    reflect: {
      prompt:
        "Which unique place will you learn one new fact about this week — and what care question will you ask?",
      keyIdeas: ["unique|place|matter|care"],
    },
    mastery: q(
      "g5e-up-m1",
      "Some Unique Places asks you to...",
      "describe a distinctive place and give a reason it matters",
      "pretend every landscape is identical",
      "ignore habitats and communities completely",
      "a",
      "Description plus a clear reason are the chapter skills.",
      "Which pair matches the learning goals?",
      "Sameness and ignoring places skip the skills.",
      {
        a: "You joined description and value.",
        b: "Places differ for real reasons.",
        c: "Habitats and people belong in the story.",
      },
    ),
    masteryCriteria:
      "You can describe a unique place with specific features and give one clear reason why it matters for life, people, or care of Earth.",
    teach: {
      prompt:
        "Teach Ivshi one unique place: two describing details and one reason it matters.",
      keyIdeas: ["describe", "matter|reason"],
    },
  },
});

export const energyHowThingsWorkLesson = grade5EvsLesson({
  conceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
  title: "Energy—How Things Work",
  domainTitle: "Energy",
  prerequisites: ["ncert-g5-wondrous-world-some-unique-places-core"],
  nextConceptIds: ["ncert-g5-wondrous-world-clothes-how-made-core"],
  coveredSkillIds: [
    "ncert-g5-wondrous-world-energy-how-things-work-core-sk-1-name-a-form-of-energy",
    "ncert-g5-wondrous-world-energy-how-things-work-core-sk-2-link-energy-to-a-device",
  ],
  content: {
    objective:
      "Name everyday forms of energy and link each one to a device or action that uses it.",
    wonder: {
      prompt:
        "A fan spins, a torch lights a path, a kettle warms water, and your legs climb stairs. What is being used in each case — and where did that 'ability to do work' come from?",
    },
    explore: {
      text: "Energy is what lets things move, heat up, light up, make sound, or change. Forms you meet daily include light, heat, sound, electrical energy, and the energy of moving things (motion). Devices convert energy: a bulb turns electrical energy into light (and some heat); a solar lamp starts with sunlight; a bicycle turns your muscle effort into motion.",
      activity: {
        prompt:
          "Which statement best links a form of energy to a device?",
        choices: [
          {
            id: "link-device",
            label:
              "A torch uses electrical energy from cells to make light energy",
            note: "Form named, device named, and the change is clear.",
          },
          {
            id: "no-energy",
            label: "Devices work by wishing harder with no energy involved",
            note: "Wishes are not an energy form. Real devices need a source.",
          },
          {
            id: "all-same",
            label: "Every device uses only silence and never heat, light, or motion",
            note: "Heat, light, sound, and motion are common everyday forms.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Forms of energy include light, heat, sound, electrical energy, and motion energy. Food gives your body chemical energy to move and grow.",
        "Forces push or pull; energy is the ability those pushes and pulls help transfer when things work — lifting, spinning, heating.",
        "Linking energy to a device means saying which form goes in and what useful change comes out.",
        "Heat can travel by contact or through warm air; light travels from lamps and the Sun; sound travels as vibrations you hear.",
        "Safety matters: heat can burn, electrical wires need dry careful hands, and bright sunlight needs eye care.",
      ],
    },
    examples: [
      {
        caption: "Solar calculator",
        body: "Light energy from the Sun or a lamp → electrical energy inside → display works.",
      },
      {
        caption: "Pressure cooker whistle",
        body: "Heat energy cooks food; steam motion and sound energy signal that pressure is high.",
      },
      {
        caption: "Hand-crank torch",
        body: "Your motion turns a generator → electrical energy → light.",
      },
    ],
    connection:
      "Homes, farms, and schools run on energy stories — from sunlight on panels to fuel in stoves to muscle power on a bicycle.",
    try: {
      prompt:
        "List three devices near you. For each, name one form of energy it uses or produces.",
      reveal:
        "Example: phone charger — electrical; candle — heat and light; tabla — sound from motion of the drum skin.",
    },
    practice: [
      q(
        "g5e-en-p1",
        "Which is a form of energy you can name in daily life?",
        "heat energy from a warm tawa",
        "the colour of Tuesday",
        "a silent wish with no effect",
        "a",
        "Heat is a clear everyday energy form. Days of the week and empty wishes are not forms of energy.",
        "What can warm, light, move, or sound?",
        "Energy forms are physical, not calendar labels.",
        {
          a: "You named a real energy form.",
          b: "Weekdays are not energy forms.",
          c: "Wishes alone do not power devices.",
        },
      ),
      q(
        "g5e-en-p2",
        "Which link matches energy to a device well?",
        "a ceiling fan uses electrical energy to create motion that cools the room",
        "a fan runs on moonlight stored in socks",
        "speakers work only when energy is banned",
        "a",
        "Electrical energy in → motion (and some sound/heat) out. Silly storage stories are not links.",
        "What goes in, and what useful change comes out?",
        "Devices need real energy pathways.",
        {
          a: "You linked form to device job.",
          b: "Socks do not store moonlight for fans.",
          c: "Speakers need energy to make sound.",
        },
      ),
      explainQ(
        "g5e-en-p3",
        "Why does a glowing bulb feel warm as well as bright?",
        "The bulb changes electrical energy mostly into light, but some becomes heat. Many devices make more than one form at once.",
        "What two forms leave the bulb?",
        "Light alone does not tell the whole energy story.",
        ["light|heat|electrical|energy|warm|bulb"],
      ),
    ],
    reasoning: [
      q(
        "g5e-en-r1",
        "You push a toy car and it rolls, then slows down. What energy story fits best?",
        "your push gave motion energy; friction and air slowly turn that motion into heat and sound until the car stops",
        "the car forgets how to roll because it is shy",
        "energy appears from nowhere and never changes form",
        "a",
        "Motion can change into other forms. Forces like friction help explain the slowdown.",
        "Where does the rolling ability go as the car slows?",
        "Feelings and 'nowhere' stories skip energy changes.",
        {
          a: "You traced motion into other forms.",
          b: "Shyness is not a physics explanation.",
          c: "Energy changes form; it does not pop from nowhere.",
        },
      ),
      explainQ(
        "g5e-en-r2",
        "Link sunlight to both a plant leaf and a solar lamp in one careful energy chain each.",
        "Leaf: light energy helps the plant make food (chemical energy). Solar lamp: light energy on the panel becomes electrical energy that later makes light at night. Both start with light but store or use it differently.",
        "Start with light; name what each system does next.",
        "Saying both 'just glow' skips the different pathways.",
        ["light|sun|plant|food|solar|electrical|lamp"],
      ),
    ],
    retrieve: [
      q(
        "g5e-en-t1",
        "Linking energy to a device means...",
        "naming a form of energy and the device change it helps cause",
        "listing devices while forbidding any energy words",
        "claiming heat and light are imaginary",
        "a",
        "The skill joins form + device + useful change.",
        "What two pieces must appear in the link?",
        "Heat and light are everyday real forms.",
        {
          a: "You defined the energy–device link.",
          b: "Energy words belong in the link.",
          c: "Heat and light are real.",
        },
      ),
      writeQ(
        "g5e-en-t2",
        "Name one form of energy and one device that uses or produces it.",
        [
          "heat",
          "light",
          "sound",
          "electrical",
          "motion",
          "bulb",
          "fan",
          "torch",
          "stove",
          "bell",
        ],
        "Example: light — torch; or heat — stove; or electrical — fan.",
        "Pick a form, then a matching device.",
        "A blank notebook is not an energy form by itself.",
        ["heat|light|sound|electrical|motion|chemical", "bulb|fan|torch|stove|bell|phone|lamp|solar"],
      ),
    ],
    misconceptions: [
      {
        idea: "Only electricity counts as energy.",
        correction:
          "Heat, light, sound, motion, and the chemical energy in food all count as everyday forms.",
      },
      {
        idea: "When a toy stops, its energy has vanished forever.",
        correction:
          "Motion often becomes heat and tiny sounds through friction. The forms change.",
      },
    ],
    reflect: {
      prompt:
        "Which device will you 'energy-label' tomorrow — input form and output form?",
      keyIdeas: ["energy|form|device"],
    },
    mastery: q(
      "g5e-en-m1",
      "Energy—How Things Work asks you to...",
      "name forms of energy and link them to devices",
      "ignore how lamps, fans, and stoves work",
      "treat energy as only a magic word",
      "a",
      "Naming forms and linking devices are the skills.",
      "Which habit matches the chapter?",
      "Ignoring devices and magic-only talk miss the goals.",
      {
        a: "You held both energy skills.",
        b: "Everyday devices are energy stories.",
        c: "Energy is more than a vague word.",
      },
    ),
    masteryCriteria:
      "You can name at least two forms of energy and link each to a device or action that uses or produces it.",
    teach: {
      prompt:
        "Teach Ivshi three energy–device links from a kitchen or classroom.",
      keyIdeas: ["form", "device|link"],
    },
  },
});

export const clothesHowMadeLesson = grade5EvsLesson({
  conceptId: "ncert-g5-wondrous-world-clothes-how-made-core",
  title: "Clothes—How Things are Made",
  domainTitle: "Materials",
  prerequisites: ["ncert-g5-wondrous-world-energy-how-things-work-core"],
  nextConceptIds: ["ncert-g5-wondrous-world-rhythms-of-nature-core"],
  coveredSkillIds: [
    "ncert-g5-wondrous-world-clothes-how-made-core-sk-1-name-a-fibre",
    "ncert-g5-wondrous-world-clothes-how-made-core-sk-2-order-making-steps",
  ],
  content: {
    objective:
      "Name common clothing fibres and put cloth-making steps in a sensible order from fibre to finished garment.",
    wonder: {
      prompt:
        "Hold your shirt sleeve. Was this once a plant fluff, an animal fleece, or a human-made thread? What ordered changes turned soft fibre into wearable cloth?",
    },
    explore: {
      text: "Clothes begin as fibres — thin strands such as cotton, wool, silk, jute, or synthetic fibres like polyester. Fibres are spun into yarn, yarn is woven or knitted into cloth, and cloth is cut and stitched into garments. Dyeing and finishing may add colour and softness. Order matters: you cannot stitch a shirt before the cloth exists.",
      activity: {
        prompt:
          "Which sequence best shows how a cotton shirt is made?",
        choices: [
          {
            id: "order",
            label:
              "Grow and pick cotton fibre → spin into yarn → weave or knit cloth → cut and stitch the shirt",
            note: "Fibre first, then yarn, cloth, and garment. Order matches real making.",
          },
          {
            id: "backwards",
            label: "Wear the shirt first → then invent cotton plants afterwards",
            note: "Wearing cannot come before fibre and cloth exist.",
          },
          {
            id: "skip",
            label: "Skip fibre; shirts appear fully stitched on trees",
            note: "Shirts are made through material changes. Fibres and steps are real.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A fibre is the starting strand for yarn and cloth — cotton from cotton plants, wool from sheep, silk from silkworm cocoons, flax for linen.",
        "Materials change along the path: loose fibre → twisted yarn → flat cloth → shaped garment.",
        "Natural fibres come from plants or animals; synthetic fibres are made from chemical processes, often using petroleum-based materials.",
        "Ordering steps means first things first: obtain fibre → prepare/spin → weave or knit → cut → stitch → finish.",
        "Energy enters the story too — heat for dyeing or drying, motion for spinning wheels and machines, light for checking colour.",
      ],
    },
    examples: [
      {
        caption: "Wool sweater",
        body: "Fibre: sheep wool. Steps: shear → clean → spin → knit → finish.",
      },
      {
        caption: "Jute bag",
        body: "Fibre: jute plant stem fibres. Steps: extract fibre → spin → weave → sew bag.",
      },
      {
        caption: "Silk scarf",
        body: "Fibre: silk from cocoons. Steps: reel silk → twist yarn → weave → dye → hem.",
      },
    ],
    connection:
      "Every uniform, rain jacket, and festival outfit hides a fibre-to-cloth journey — and often many hands along the way.",
    try: {
      prompt:
        "Check clothing labels at home. Name two fibres you find and guess which came from a plant, an animal, or a factory process.",
      reveal:
        "Example: cotton — plant; wool — animal; polyester — synthetic/factory process.",
    },
    practice: [
      q(
        "g5e-cl-p1",
        "Which is a clothing fibre?",
        "cotton",
        "a finished zippered jacket already on a hanger",
        "a television remote",
        "a",
        "Cotton is a plant fibre used to make yarn and cloth. A finished jacket is the end product; a remote is unrelated.",
        "What is the thin starting strand?",
        "Finished goods and gadgets are not fibres.",
        {
          a: "You named a real fibre.",
          b: "A jacket is already made cloth and stitching.",
          c: "Remotes are not textile fibres.",
        },
      ),
      q(
        "g5e-cl-p2",
        "Which order makes sense for making cloth from fibre?",
        "fibre → yarn → weave or knit cloth → stitch garment",
        "stitch garment → invent fibre inside the pocket later",
        "skip yarn and leap from fibre dust straight to a tailored coat",
        "a",
        "Spinning and cloth-making sit between fibre and garment. Backwards stories break the material chain.",
        "What must exist before stitching?",
        "Order respects how materials change.",
        {
          a: "You ordered the making chain.",
          b: "Garments cannot invent their own fibre past.",
          c: "Yarn and cloth are middle steps.",
        },
      ),
      explainQ(
        "g5e-cl-p3",
        "Why is wool a fibre while a knitted cap is not called a fibre?",
        "Wool is the starting strand material. A knitted cap is already yarn worked into a finished shape. Fibre names the early material stage, not the completed clothing.",
        "Which comes earlier in the making story?",
        "Finished clothes are results of fibre work.",
        ["fibre|wool|start|yarn|knit|finish|made"],
      ),
    ],
    reasoning: [
      q(
        "g5e-cl-r1",
        "Dye is added after cloth is woven in one workshop. Why might dyeing before spinning be a poor plan for that same cloth?",
        "Loose fibre dyed too early may not colour evenly once spun and woven; many makers dye yarn or cloth when the material is ready for even colour",
        "Because colours are afraid of spindles",
        "Because fibres refuse to meet dye molecules ever",
        "a",
        "Material stage affects how evenly colour spreads. Order of changes matters for quality.",
        "When is the material ready for even colour?",
        "Feelings and refusals are not dyeing science.",
        {
          a: "You linked stage of material to dyeing.",
          b: "Colour chemistry is not about fear.",
          c: "Fibres can take dye at planned stages.",
        },
      ),
      explainQ(
        "g5e-cl-r2",
        "How is making cloth both a materials story and an energy story?",
        "Materials change from fibre to yarn to cloth. Energy — motion for spinning and weaving, heat for drying or dyeing, sometimes electrical energy in machines — drives those changes. Both strands belong in 'how clothes are made'.",
        "Name a material change and an energy form that helps.",
        "Cloth does not appear without work and energy.",
        ["fibre|yarn|cloth|heat|motion|electrical|spin|weave"],
      ),
    ],
    retrieve: [
      q(
        "g5e-cl-t1",
        "Ordering making steps for clothes means...",
        "putting fibre, yarn, cloth, and stitching in a sequence that can really work",
        "jumbling steps so fibre appears after the finished dress",
        "skipping materials so clothes float from nowhere",
        "a",
        "Sensible order respects what must exist before the next change.",
        "What makes a clothing sequence useful?",
        "Backwards and no-material stories break making.",
        {
          a: "You defined useful order.",
          b: "Fibre must come early.",
          c: "Materials anchor the steps.",
        },
      ),
      writeQ(
        "g5e-cl-t2",
        "Name one fibre and list two making steps in order toward clothing.",
        [
          "cotton",
          "wool",
          "silk",
          "jute",
          "spin",
          "weave",
          "knit",
          "stitch",
          "dye",
          "shear",
        ],
        "Example: cotton → spin yarn → weave cloth. Or wool → shear/clean → knit.",
        "Fibre first, then two actions in time order.",
        "Only naming a shop brand skips the fibre skill.",
        ["cotton|wool|silk|jute|linen|polyester|fibre", "spin|weave|knit|stitch|dye|shear|cut"],
      ),
    ],
    misconceptions: [
      {
        idea: "Fibre only means plastic thread.",
        correction:
          "Cotton, wool, silk, and jute are fibres too. Fibre means the strand material, natural or synthetic.",
      },
      {
        idea: "Stitching is the only step that counts as making clothes.",
        correction:
          "Growing or collecting fibre, spinning, weaving or knitting, dyeing, and finishing are all part of the making chain.",
      },
    ],
    reflect: {
      prompt:
        "Which fibre will you thank next time you get dressed — and which making step will you ask an adult about?",
      keyIdeas: ["fibre|steps|clothes"],
    },
    mastery: q(
      "g5e-cl-m1",
      "Clothes—How Things are Made asks you to...",
      "name fibres and order making steps from fibre to garment",
      "believe clothes have no material past",
      "only memorise price tags",
      "a",
      "Fibre names plus ordered steps are the chapter skills.",
      "Which pair matches the learning goals?",
      "No-past stories and price-only habits skip making.",
      {
        a: "You joined fibre and sequence.",
        b: "Clothes have fibre beginnings.",
        c: "Tags are not making steps.",
      },
    ),
    masteryCriteria:
      "You can name a clothing fibre and put at least three making steps in working order from fibre toward a finished garment.",
    teach: {
      prompt:
        "Teach Ivshi the making story of one garment: fibre and ordered steps.",
      keyIdeas: ["fibre", "steps|order"],
    },
  },
});

export const rhythmsOfNatureLesson = grade5EvsLesson({
  conceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
  title: "Rhythms of Nature",
  domainTitle: "Cycles",
  prerequisites: ["ncert-g5-wondrous-world-clothes-how-made-core"],
  nextConceptIds: ["ncert-g5-wondrous-world-earth-shared-home-core"],
  coveredSkillIds: [
    "ncert-g5-wondrous-world-rhythms-of-nature-core-sk-1-name-a-natural-cycle",
    "ncert-g5-wondrous-world-rhythms-of-nature-core-sk-2-describe-a-rhythm",
  ],
  content: {
    objective:
      "Name natural cycles you can observe and describe how a rhythm of nature repeats and changes over time.",
    wonder: {
      prompt:
        "Day turns to night, monsoon follows dry months, seeds sprout and plants fruit, and the Moon’s shape returns. What keeps these patterns from being one-time events?",
    },
    explore: {
      text: "Nature’s rhythms are repeating patterns: day and night, seasons, tides in some places, life cycles of insects and plants, and the water cycle of evaporating, forming clouds, and raining. A cycle returns to a similar stage again. Describing a rhythm means saying what changes, what stays similar, and over what time — hours, days, months, or years.",
      activity: {
        prompt:
          "Which note both names a cycle and describes its rhythm?",
        choices: [
          {
            id: "cycle-rhythm",
            label:
              "Day–night cycle: sky brightens with sunlight, then darkens as our place turns away — repeating about every twenty-four hours",
            note: "You named the cycle and described the repeating change with a time clue.",
          },
          {
            id: "once",
            label: "Something happened once and will never echo again anywhere",
            note: "A rhythm needs repetition. One-off events are not cycles.",
          },
          {
            id: "ignore",
            label: "Weather and growth never follow any pattern",
            note: "Seasons, day–night, and life cycles show clear repeating patterns.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Natural cycles include day and night, seasons, the water cycle, and life cycles (egg → larva → adult; seed → plant → flower → seed).",
        "Weather sits inside longer seasonal rhythms: hotter, cooler, wetter, drier stretches of the year.",
        "Describing a rhythm means noting order of stages, what you observe with senses, and roughly how long one loop takes.",
        "Life cycles link to habitats: frogs need water stages; migratory birds follow seasonal food and weather.",
        "People plan with rhythms — planting with rains, resting at night, storing food before dry months.",
      ],
    },
    examples: [
      {
        caption: "Water cycle sketch",
        body: "Water evaporates → vapour forms clouds → rain or snow falls → water returns to land and rivers → repeats.",
      },
      {
        caption: "Butterfly life cycle",
        body: "Egg → caterpillar → pupa → adult butterfly → eggs again. Time may be weeks depending on the species.",
      },
      {
        caption: "Seasonal clothing rhythm",
        body: "In many places, lighter cotton in hot months and warmer layers in cooler months track the seasonal cycle.",
      },
    ],
    connection:
      "Calendars, festivals, farmer almanacs, and bedtime all lean on nature’s clocks — light, rain, growth, and return.",
    try: {
      prompt:
        "Name one cycle you can watch this week. Describe two stages and roughly how long the loop takes.",
      reveal:
        "Example: Day–night — bright school hours, darker evening; about one day. Or moon shape changing over about a month.",
    },
    practice: [
      q(
        "g5e-rn-p1",
        "Which is a natural cycle you can name?",
        "the water cycle",
        "a single sneeze that never relates to anything",
        "a random label with no repeating stages",
        "a",
        "The water cycle repeats evaporation, clouds, and rain. One-off or empty labels are not cycles.",
        "What returns to a similar stage again?",
        "Cycles need repeating stages.",
        {
          a: "You named a real cycle.",
          b: "A lone sneeze is not a nature cycle.",
          c: "Cycles have repeating stages.",
        },
      ),
      q(
        "g5e-rn-p2",
        "Which sentence best describes a rhythm?",
        "monsoon months bring heavier rain, then drier months return in a yearly seasonal pattern",
        "seasons happen in no order and never return",
        "day and night occurred only once in history",
        "a",
        "A rhythm description names change and return over time.",
        "What repeats, and on what timescale?",
        "Seasons and day–night do repeat.",
        {
          a: "You described a repeating pattern.",
          b: "Seasons follow yearly rhythms.",
          c: "Day and night repeat daily.",
        },
      ),
      explainQ(
        "g5e-rn-p3",
        "How is a plant’s seed-to-seed story both a life cycle and a seasonal rhythm?",
        "The plant moves through life stages (seed, sprout, flower, fruit, seed). Many plants time flowering and fruiting with seasons of rain, warmth, or day length — so the life cycle rides on Earth’s seasonal rhythm.",
        "Name life stages and a seasonal cue.",
        "Growth is not separate from weather clocks.",
        ["seed|plant|flower|season|rain|warm|cycle|life"],
      ),
    ],
    reasoning: [
      q(
        "g5e-rn-r1",
        "Streetlights make nights brighter in a city. Why can day–night still be called a natural rhythm?",
        "Earth’s turning still brings a brighter daytime and a darker night-time pattern even when artificial lights reduce how dark night feels",
        "Because streetlights invented the Sun",
        "Because day and night stopped when bulbs appeared",
        "a",
        "Human lights change how dark night looks, but the Sun–Earth rhythm continues.",
        "What still repeats because of Earth and the Sun?",
        "Bulbs did not invent or cancel the solar day.",
        {
          a: "You separated artificial light from Earth’s rhythm.",
          b: "The Sun’s lighting still drives day.",
          c: "Day–night continues with or without bulbs.",
        },
      ),
      explainQ(
        "g5e-rn-r2",
        "Describe the rhythm of day and night in your own words, then name one other natural cycle.",
        "Day is when sunlight brightens our place; night is darker as we face away from the Sun’s direct light — repeating daily. Another cycle: seasons, water cycle, or a butterfly life cycle.",
        "Include light change plus a second named cycle.",
        "Stopping after one vague word skips the describe-a-rhythm skill.",
        ["day|night|sun|light|dark", "season|water|life|tide|moon"],
      ),
    ],
    retrieve: [
      q(
        "g5e-rn-t1",
        "Describing a rhythm mainly means...",
        "saying how a pattern changes and returns over time",
        "denying that any pattern exists in nature",
        "listing only invented one-time events",
        "a",
        "Rhythm language covers stages, senses, and timing.",
        "What do you notice across a repeating loop?",
        "Nature shows many repeating patterns.",
        {
          a: "You defined rhythm description.",
          b: "Patterns are real and observable.",
          c: "Cycles need more than one-time events.",
        },
      ),
      writeQ(
        "g5e-rn-t2",
        "Name one natural cycle and describe two stages of its rhythm.",
        [
          "day",
          "night",
          "season",
          "water",
          "rain",
          "seed",
          "life",
          "moon",
          "evaporate",
          "grow",
        ],
        "Example: water cycle — water evaporates, then rain falls. Or day–night — bright day, darker night.",
        "Name the cycle, then two ordered stages.",
        "A single frozen moment is not a full rhythm.",
        ["day|night|season|water|life|moon|tide", "rain|evaporate|seed|grow|dark|light|hot|cool"],
      ),
    ],
    misconceptions: [
      {
        idea: "Cycles only mean circles drawn on paper.",
        correction:
          "In nature, a cycle is a repeating process — water, seasons, life stages — not only a drawn shape.",
      },
      {
        idea: "If weather changes day to day, seasons are not real.",
        correction:
          "Daily weather wiggles inside longer seasonal patterns of typical heat, cold, rain, or dry stretches.",
      },
    ],
    reflect: {
      prompt:
        "Which natural rhythm will you notice on purpose this week — light, weather, Moon, or a plant’s growth?",
      keyIdeas: ["cycle|rhythm|nature"],
    },
    mastery: q(
      "g5e-rn-m1",
      "Rhythms of Nature asks you to...",
      "name natural cycles and describe how their rhythms repeat",
      "claim nature never repeats anything",
      "ignore day, night, seasons, and growth",
      "a",
      "Naming cycles and describing rhythms are the skills.",
      "Which habit matches the chapter?",
      "Denying patterns and ignoring clocks miss the goals.",
      {
        a: "You held both cycle skills.",
        b: "Nature repeats in observable ways.",
        c: "Day, seasons, and growth matter here.",
      },
    ),
    masteryCriteria:
      "You can name at least two natural cycles and describe the repeating stages of one rhythm with a time clue.",
    teach: {
      prompt:
        "Teach Ivshi one natural cycle with three stages and one everyday way people follow that rhythm.",
      keyIdeas: ["cycle", "rhythm|stages"],
    },
  },
});

export const earthSharedHomeLesson = grade5EvsLesson({
  conceptId: "ncert-g5-wondrous-world-earth-shared-home-core",
  title: "Earth—Our Shared Home",
  domainTitle: "Earth care",
  prerequisites: ["ncert-g5-wondrous-world-rhythms-of-nature-core"],
  nextConceptIds: [],
  coveredSkillIds: [
    "ncert-g5-wondrous-world-earth-shared-home-core-sk-1-name-a-care-for-earth-action",
    "ncert-g5-wondrous-world-earth-shared-home-core-sk-2-explain-a-shared-need",
  ],
  content: {
    objective:
      "Name actions that care for Earth and explain shared needs that all people and living things depend on.",
    wonder: {
      prompt:
        "If clean air, safe water, living soil, and quiet green spaces had to be borrowed by every neighbourhood on Earth, what habits would you protect first — and what pollution would you refuse to add?",
    },
    explore: {
      text: "Earth is a shared home: one atmosphere, connected oceans, soils that grow food, and habitats that shelter life. Shared needs include clean water, clean air, food from healthy land, and safe places to live. Care-for-Earth actions reduce pollution, save water and energy, protect plants and animals, reuse materials, and ask careful questions before harming a place. Inquiry means noticing problems and testing kinder habits.",
      activity: {
        prompt:
          "Which choice pairs a care action with a shared need?",
        choices: [
          {
            id: "care-need",
            label:
              "Fix leaky taps to save clean water — a need every living thing shares",
            note: "Action plus shared need. Clear Earth-care thinking.",
          },
          {
            id: "waste-more",
            label: "Dump plastic in a stream because rivers clean themselves instantly always",
            note: "Pollution harms shared water. Streams do not erase every harm instantly.",
          },
          {
            id: "no-share",
            label: "Pretend only one person on Earth needs air",
            note: "Air is a shared need. Breathing connects us all.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Shared needs are things many people and living things require: water, air, food, shelter, and a climate we can live in.",
        "Pollution dirties air, water, or land and can harm health and habitats — smoke, plastic litter, chemical spills, noisy overload.",
        "Conservation means using carefully and protecting: save water, plant and protect trees, keep soils covered, leave wild corners for insects and birds.",
        "Care actions can be personal (switch off unused fans), family (segregate waste), or community (clean a park, protect a pond).",
        "Inquiry asks: What is changing? Who is affected? What habit can we try? How will we check if it helped?",
      ],
    },
    examples: [
      {
        caption: "Water care",
        body: "Action: collect rinse water for plants. Shared need: fresh water for drinking, cooking, and habitats.",
      },
      {
        caption: "Air and energy",
        body: "Action: walk short trips or share rides when safe. Shared need: cleaner air and less wasted fuel energy.",
      },
      {
        caption: "Habitat care",
        body: "Action: leave leaf litter in a garden corner for insects. Shared need: living homes for the small life that supports food webs.",
      },
    ],
    connection:
      "Unique places, energy use, cloth waste, and nature’s rhythms all meet here: one Earth, many habits, shared tomorrow.",
    try: {
      prompt:
        "Choose one care-for-Earth action you can do this week and name the shared need it protects.",
      reveal:
        "Example: Carry a reusable bottle — protects shared need for less plastic pollution in land and water.",
    },
    practice: [
      q(
        "g5e-ea-p1",
        "Which is a care-for-Earth action?",
        "segregate dry and wet waste so more materials can be recycled or composted",
        "pour used oil into a storm drain for fun",
        "pluck every wild flower in a meadow to empty it",
        "a",
        "Segregation supports reuse and healthier soil. Dumping oil and stripping meadows harm shared homes.",
        "Which habit protects land or water?",
        "Pollution and habitat stripping are not care.",
        {
          a: "You named a protective action.",
          b: "Drains lead to shared water systems.",
          c: "Wild plants support living places.",
        },
      ),
      q(
        "g5e-ea-p2",
        "Which sentence explains a shared need?",
        "clean air is needed by people, birds, and other animals in every neighbourhood",
        "only one household on Earth ever needs water",
        "soil matters to nobody who eats food",
        "a",
        "Shared needs cross people and other living things. Water and soil are widely needed.",
        "Who depends on this resource?",
        "Needs are not limited to a single house.",
        {
          a: "You explained a shared need.",
          b: "Water is a common need.",
          c: "Food grows in soil we all rely on.",
        },
      ),
      explainQ(
        "g5e-ea-p3",
        "Why is saving electricity also a way to care for Earth?",
        "Much electricity is made by burning fuels or other processes that can add pollution and heat the planet. Using less — switching off unused fans and lights — reduces that pressure and saves energy resources we share.",
        "Link device energy use to shared air and climate.",
        "Electricity use is connected to Earth systems.",
        ["energy|electric|pollution|save|switch|air|share|fuel"],
      ),
    ],
    reasoning: [
      q(
        "g5e-ea-r1",
        "A class finds plastic near a school pond. Which inquiry plan cares for the shared home best?",
        "record what kinds of litter appear, remove it safely with adults, then ask how to reduce plastic brought to school",
        "hide the plastic under mud so nobody can inquire",
        "blame the pond for existing and walk away forever",
        "a",
        "Inquiry notices, acts carefully, and seeks habit change. Hiding waste and abandoning the place skip care.",
        "What steps notice, clean, and prevent?",
        "Hidden litter still harms habitats.",
        {
          a: "You chose notice → safe clean → prevent.",
          b: "Hiding evidence blocks learning.",
          c: "Ponds are part of the shared home.",
        },
      ),
      explainQ(
        "g5e-ea-r2",
        "Explain one shared need and one care action that protects it for both people and other living things.",
        "Example: Shared need — clean water for drinking and for fish. Care action — keep soap and litter out of drains that lead to streams. Both people and aquatic life depend on less polluted water.",
        "Name the need, then a matching protective habit.",
        "Needs without actions, or actions with no need named, leave the skill half-done.",
        ["water|air|soil|food|habitat", "save|protect|clean|reuse|plant|reduce"],
      ),
    ],
    retrieve: [
      q(
        "g5e-ea-t1",
        "A care-for-Earth action mainly...",
        "protects shared air, water, land, or living places through a helpful habit",
        "increases pollution on purpose",
        "ignores every shared need",
        "a",
        "Care actions reduce harm and protect common needs.",
        "What does a caring habit protect?",
        "Pollution and ignoring needs are not care.",
        {
          a: "You defined Earth-care action.",
          b: "Care reduces pollution.",
          c: "Shared needs guide our habits.",
        },
      ),
      writeQ(
        "g5e-ea-t2",
        "Name one care-for-Earth action and one shared need it protects.",
        [
          "water",
          "air",
          "soil",
          "tree",
          "reuse",
          "recycle",
          "save",
          "clean",
          "plant",
          "plastic",
        ],
        "Example: reuse a bottle — protects water and land from plastic waste; or plant a tree — shared need for cleaner air and shade.",
        "Action + the common need it guards.",
        "Naming only a problem with no action skips the care skill.",
        ["save|reuse|recycle|plant|clean|segregate|switch", "water|air|soil|habitat|food|tree"],
      ),
    ],
    misconceptions: [
      {
        idea: "Only governments can care for Earth.",
        correction:
          "Personal and class habits matter too — saving water, cutting litter, and protecting local green corners add up.",
      },
      {
        idea: "If I cannot see pollution, shared needs are safe.",
        correction:
          "Some harms are invisible at first — dirty air, warming climate, hidden plastic in water. Care still matters.",
      },
    ],
    reflect: {
      prompt:
        "Which shared need will guide your strongest Earth-care habit this month?",
      keyIdeas: ["care|earth|share|need"],
    },
    mastery: q(
      "g5e-ea-m1",
      "Earth—Our Shared Home asks you to...",
      "name care actions and explain shared needs",
      "treat Earth as a private dump for one person",
      "deny that air and water are shared",
      "a",
      "Care actions plus shared-need explanations are the skills.",
      "Which pair matches the chapter?",
      "Dumping mindsets and denial miss the goals.",
      {
        a: "You joined action and shared need.",
        b: "Earth is a common home.",
        c: "Air and water are shared.",
      },
    ),
    masteryCriteria:
      "You can name at least two care-for-Earth actions and explain one shared need that people and other living things depend on.",
    teach: {
      prompt:
        "Teach Ivshi two Earth-care actions and the shared need each one protects.",
      keyIdeas: ["care|action", "shared|need"],
    },
  },
});
