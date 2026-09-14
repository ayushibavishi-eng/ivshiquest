import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade4EvsLesson } from "@/content/lessons/grade-4-evs/format";

export const natureTrailLesson = grade4EvsLesson({
  conceptId: "ncert-g4-wondrous-world-nature-trail-core",
  title: "Nature Trail",
  domainTitle: "Nature",
  prerequisites: ["ncert-g4-wondrous-world-exploring-neighbourhood-core"],
  nextConceptIds: ["ncert-g4-wondrous-world-growing-up-with-nature-core"],
  coveredSkillIds: [
    "ncert-g4-wondrous-world-nature-trail-core-sk-1-record-an-observation",
    "ncert-g4-wondrous-world-nature-trail-core-sk-2-name-a-living-thing",
  ],
  content: {
    objective:
      "Walk a short nature trail with careful eyes: name living things and record observations that others could check.",
    wonder: {
      prompt:
        "If you walked the same path tomorrow at the same time, what might stay the same — and what might have changed overnight?",
    },
    explore: {
      text: "A nature trail is any path where you notice plants, animals, and signs of life — a school garden edge, a park walk, a field bund, or a lane with trees. Observing means looking, listening, and writing or drawing what you notice without guessing wildly.",
      activity: {
        prompt:
          "On a trail you see a nest high in a tree, ant lines on the ground, and a dry leaf with holes. Which note is the best observation?",
        choices: [
          {
            id: "record",
            label:
              "Write: 'Ant line moving toward the wall; nest in the peepal fork; leaf holes about the size of a pencil tip'",
            note: "You recorded what you saw with enough detail that someone else could look for the same signs.",
          },
          {
            id: "guess-only",
            label: "Write: 'Aliens must live here'",
            note: "A fun story is not an observation. Observations stick close to what eyes and ears can check.",
          },
          {
            id: "ignore",
            label: "Write nothing because nature is boring",
            note: "Trails get interesting when you slow down. Living things leave clues everywhere.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Living things on a trail include plants, insects, birds, and other animals. Even small moss or a sprouting seed counts.",
        "Signs of life are clues: footprints, nests, chewed leaves, droppings, burrows, spider webs, and bird calls.",
        "A strong observation is specific: where, what colour or shape, how many, what it was doing. 'A green beetle on the rose stem' beats 'something weird'.",
        "Recording can be words, a labelled sketch, or a simple table: time, place, what I noticed.",
        "Naming living things can start with everyday names — crow, neem, earthworm — and grow more precise as you learn.",
      ],
    },
    examples: [
      {
        caption: "Garden edge",
        body: "Observation: 'Three yellow butterflies near the marigold bed at 8 a.m.' Living thing named: butterfly (and marigold plant).",
      },
      {
        caption: "Rainy path",
        body: "Observation: 'Earthworms on the wet path after rain.' The trail changed because the ground was soaked.",
      },
      {
        caption: "Sound clue",
        body: "You may not see the bird, but recording 'loud call from the mango tree' is still an observation.",
      },
    ],
    connection:
      "Scientists, farmers, and curious children all start with noticing. A trail notebook trains that skill.",
    try: {
      prompt:
        "Stand or walk outside for two quiet minutes. Record one living thing and one sign of life. Use a place word.",
      reveal:
        "Example: 'Living thing: sparrows on the wire. Sign: empty seed shells under the sunflower.' Place helps others find it.",
    },
    practice: [
      q(
        "g4e-nt-p1",
        "Which note is a careful observation?",
        "Two squirrels ran along the compound wall near the gate",
        "Nature is magic forever",
        "I already know everything about trees",
        "a",
        "An observation names what happened and where. Vague magic claims are not checkable notes.",
        "Could another child look for the same clue?",
        "Boastful or vague lines are not trail records.",
        {
          a: "You wrote something eyes could check.",
          b: "Magic talk skips the details.",
          c: "Knowing everything stops noticing.",
        },
      ),
      q(
        "g4e-nt-p2",
        "Which is a living thing you might name on a trail?",
        "a neem tree",
        "a plastic bottle",
        "a stone bench",
        "a",
        "A neem tree is alive and grows. Bottles and benches are not living things.",
        "Which one can grow or need water?",
        "Objects made by people are usually not living.",
        {
          a: "You named a plant that lives.",
          b: "Plastic is not alive.",
          c: "A bench does not grow.",
        },
      ),
      explainQ(
        "g4e-nt-p3",
        "Why is 'bird' a weaker trail note than 'a crow calling from the lamp post'?",
        "The second note names a kind of bird, what it was doing, and where. That makes the observation easier to check and remember.",
        "What extra details help another walker?",
        "Vague names hide where to look.",
        ["where|place|detail|crow|call|specific|check"],
      ),
    ],
    reasoning: [
      q(
        "g4e-nt-r1",
        "You find chewed leaves but no animal. What should a good observer do?",
        "Record the chewed leaves as a sign of life and keep looking gently",
        "Invent a dragon story as the only answer",
        "Throw the leaves away so nobody else sees",
        "a",
        "Signs count even when the animal is hidden. Recording keeps the clue for later.",
        "What can you still write down?",
        "Stories and deleting clues do not replace observing.",
        {
          a: "You treated the clue as evidence.",
          b: "Invented dragons are not trail evidence.",
          c: "Others may learn from the same sign.",
        },
      ),
      explainQ(
        "g4e-nt-r2",
        "Why might two children on the same trail write different true observations?",
        "They may look in different directions, at different moments, or notice different sizes of clues. Both can be true if each matches what they saw.",
        "Think about time, place, and attention.",
        "Different notes do not always mean someone is careless.",
        ["different|time|place|notice|direction|look"],
      ),
    ],
    retrieve: [
      q(
        "g4e-nt-t1",
        "Recording an observation mainly means...",
        "writing or drawing what you noticed so it can be checked later",
        "copying a poem about nature without looking outside",
        "erasing every clue so the trail stays secret",
        "a",
        "Records hold what you saw, heard, or measured. They support memory and sharing.",
        "What helps you remember tomorrow?",
        "Hiding clues stops learning.",
        {
          a: "You defined a useful record.",
          b: "Poems are lovely but not a trail record by themselves.",
          c: "Secrets erase evidence.",
        },
      ),
      writeQ(
        "g4e-nt-t2",
        "Name one living thing and one observation you could record about it.",
        [
          "tree",
          "bird",
          "ant",
          "butterfly",
          "plant",
          "worm",
          "leaf",
          "nest",
          "call",
          "move",
        ],
        "Example: living thing — ant; observation — ants carrying crumbs toward a crack in the wall.",
        "Pick something alive, then say what it was doing or where it was.",
        "A car is not a living trail find.",
        ["tree|bird|ant|butterfly|plant|worm|insect|flower", "see|hear|move|leaf|nest|call|where"],
      ),
    ],
    misconceptions: [
      {
        idea: "Only big animals count as living things on a trail.",
        correction:
          "Insects, seedlings, moss, and tiny birds count too. Size does not decide 'alive'.",
      },
      {
        idea: "If you cannot catch it, you cannot observe it.",
        correction:
          "Watching, listening, and noting signs are observing. Catching is often unnecessary and can harm living things.",
      },
    ],
    reflect: {
      prompt:
        "What living thing near your home would you choose for a one-minute observation tomorrow?",
      keyIdeas: ["living|observe|trail"],
    },
    mastery: q(
      "g4e-nt-m1",
      "On a nature trail you practise...",
      "naming living things and recording what you notice",
      "running so fast that nothing can be seen",
      "only photographing the sky and ignoring plants",
      "a",
      "Trail skills are naming life and recording observations carefully.",
      "What two skills does this chapter ask for?",
      "Speed and sky-only photos skip ground life.",
      {
        a: "You joined naming and recording.",
        b: "Speed hides clues.",
        c: "Plants and animals matter on a trail.",
      },
    ),
    masteryCriteria:
      "You can name a living thing and write one checkable observation from a short trail or outdoor spot.",
    teach: {
      prompt:
        "Teach Ivshi a mini trail: name two living things and one sign of life you might find near a school.",
      keyIdeas: ["living", "observation|sign"],
    },
  },
});

export const growingUpWithNatureLesson = grade4EvsLesson({
  conceptId: "ncert-g4-wondrous-world-growing-up-with-nature-core",
  title: "Growing up with Nature",
  domainTitle: "Nature",
  prerequisites: ["ncert-g4-wondrous-world-nature-trail-core"],
  nextConceptIds: ["ncert-g4-wondrous-world-food-for-health-core"],
  coveredSkillIds: [
    "ncert-g4-wondrous-world-growing-up-with-nature-core-sk-1-link-a-need-to-nature",
    "ncert-g4-wondrous-world-growing-up-with-nature-core-sk-2-describe-a-seasonal-change",
  ],
  content: {
    objective:
      "See how daily needs connect to plants, animals, and seasons, and describe one clear seasonal change.",
    wonder: {
      prompt:
        "Take away trees, soil, rain, and animals for a month in your imagination. Which of your everyday needs would feel the shortage first?",
    },
    explore: {
      text: "We grow up with nature because food, water, shade, cloth fibres, wood, medicine plants, and clean air all link back to the living world and its seasons. Seasonal change is nature’s calendar: hotter, cooler, wetter, drier, leaf-fall, flowering, harvest.",
      activity: {
        prompt:
          "Which sentence best links a human need to nature?",
        choices: [
          {
            id: "link",
            label:
              "We need shade on a hot afternoon, and a leafy tree can give that shade",
            note: "Need: shade. Nature link: tree canopy. Clear and checkable.",
          },
          {
            id: "no-link",
            label: "We need video games, and clouds invent them",
            note: "Clouds do not invent games. The need-to-nature link should be real.",
          },
          {
            id: "deny",
            label: "People need nothing from plants or seasons",
            note: "Food, fibre, rain, and shade all say otherwise.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Needs like food, water, clothing materials, and shelter materials often begin in nature — fields, forests, rivers, animals, and soil.",
        "Linking a need to nature means naming both sides: the need, and the plant, animal, or natural process that helps meet it.",
        "Seasons change temperature, rain, wind, and daylight. Plants and animals respond: mangoes ripen, migratory birds arrive, fields turn green after rain.",
        "People’s work also follows seasons — sowing, harvesting, drying clothes outdoors, seeking shade or warm clothes.",
        "Growing up with nature is not only countryside life. City children still drink water from catchments, eat farm food, and feel monsoon heat.",
      ],
    },
    examples: [
      {
        caption: "Need: food",
        body: "Rice and vegetables grow in soil with water and sunlight. Plates begin in fields.",
      },
      {
        caption: "Seasonal change",
        body: "In many places, monsoon months bring heavier rain and greener grass than the driest weeks of summer.",
      },
      {
        caption: "Need: cotton cloth",
        body: "Cotton comes from cotton plants. A shirt is a nature link you wear.",
      },
    ],
    connection:
      "When seasons shift, festivals, school bags, and market baskets often shift too — nature quietly writes the timetable.",
    try: {
      prompt:
        "Pick one need (food, water, shade, or clothing). Write the nature link. Then describe one seasonal change you have felt this year.",
      reveal:
        "Example: Need water → rain and rivers fill tanks. Seasonal change: after first rains, the playground mud smells different and puddles appear.",
    },
    practice: [
      q(
        "g4e-gn-p1",
        "Which pair links a need to nature well?",
        "need: clean air — nature: trees and green spaces help filter and freshen surroundings",
        "need: homework — nature: the moon writes essays",
        "need: shoes — nature: clouds stitch soles",
        "a",
        "Air quality links to plants and open green spaces. Moons and clouds do not do homework or stitch shoes.",
        "Which link could you explain to a younger child?",
        "Fantasy links are not EVS links.",
        {
          a: "You connected a real need to living nature.",
          b: "The moon does not write essays.",
          c: "Clouds do not make shoes.",
        },
      ),
      q(
        "g4e-gn-p2",
        "Which sentence describes a seasonal change?",
        "After weeks of dry heat, the first heavy rains make the ground wet and smell of soil",
        "My pencil is blue every day of the year",
        "The classroom clock always shows numbers",
        "a",
        "Seasonal change is a shift across weeks or months in weather, plants, or animal life — not a constant classroom object.",
        "What changed outdoors over time?",
        "Unchanging objects are not seasons.",
        {
          a: "You described weather and ground shifting with the season.",
          b: "Pencil colour is not a season.",
          c: "Clocks are not seasonal calendars.",
        },
      ),
      explainQ(
        "g4e-gn-p3",
        "How does a cotton shirt connect a clothing need to nature?",
        "Cotton fibre comes from cotton plants. Farmers grow the plants; later the fibre is spun and woven into cloth for shirts.",
        "Where does the soft fibre begin?",
        "A shirt did not appear from nowhere.",
        ["cotton|plant|fibre|grow|farm"],
      ),
    ],
    reasoning: [
      q(
        "g4e-gn-r1",
        "A town child says, 'Seasons do not matter to me.' What gentle evidence could you offer?",
        "Point to monsoon school bag rain covers, summer water shortages, or winter warm clothes",
        "Agree that weather never changes anywhere",
        "Say seasons only exist in storybooks",
        "a",
        "Clothes, water, and travel plans often shift with seasons even in towns.",
        "What changes in daily life across the year?",
        "Seasons are real outdoors, not only in fiction.",
        {
          a: "You used everyday seasonal evidence.",
          b: "Weather does change.",
          c: "Seasons are not only stories.",
        },
      ),
      explainQ(
        "g4e-gn-r2",
        "Why might farmers care deeply about seasonal change?",
        "Sowing, watering, and harvesting depend on rain and temperature. A late monsoon or early heat can change how crops grow.",
        "Think about when seeds go into soil.",
        "Farms follow nature’s calendar closely.",
        ["rain|crop|sow|harvest|weather|season"],
      ),
    ],
    retrieve: [
      q(
        "g4e-gn-t1",
        "Linking a need to nature means...",
        "naming a need and the plant, animal, or natural process that helps meet it",
        "pretending needs have no source",
        "only listing video game titles",
        "a",
        "The skill is a clear bridge from need → nature.",
        "What two parts must the link include?",
        "Games lists skip nature.",
        {
          a: "You stated the link clearly.",
          b: "Needs have sources in the world.",
          c: "Game titles are not nature links.",
        },
      ),
      writeQ(
        "g4e-gn-t2",
        "Describe one seasonal change you know and one need that nature helps meet.",
        [
          "rain",
          "monsoon",
          "summer",
          "winter",
          "heat",
          "cool",
          "food",
          "water",
          "shade",
          "tree",
        ],
        "Example: Seasonal change — leaves fall in cooler months. Need — shade from a tree in summer heat.",
        "Use a weather or plant change, then a need like food, water, or shade.",
        "Saying 'nothing changes' skips the skill.",
        ["rain|summer|winter|monsoon|heat|cool|leaf|flower", "food|water|shade|air|cloth|cotton"],
      ),
    ],
    misconceptions: [
      {
        idea: "Only villagers depend on nature.",
        correction:
          "Town food, water, and air still depend on farms, catchments, and green cover.",
      },
      {
        idea: "Seasonal change is only about festivals.",
        correction:
          "Festivals often follow seasons, but the change itself is in weather, plants, and animal life.",
      },
    ],
    reflect: {
      prompt:
        "Which nature link in your day — food, water, shade, or cloth — do you notice most clearly now?",
      keyIdeas: ["need|nature|season"],
    },
    mastery: q(
      "g4e-gn-m1",
      "Growing up with nature asks you to...",
      "connect needs to nature and describe seasonal change",
      "ignore weather because it is boring",
      "believe food appears without farms or plants",
      "a",
      "The chapter skills are need–nature links and seasonal noticing.",
      "Which two habits of mind matter here?",
      "Ignoring weather and farms skips the lesson.",
      {
        a: "You held both chapter skills.",
        b: "Weather shapes life.",
        c: "Food has natural beginnings.",
      },
    ),
    masteryCriteria:
      "You can link one everyday need to nature and describe one seasonal change with a concrete outdoor clue.",
    teach: {
      prompt:
        "Teach Ivshi: one need–nature link and one seasonal change from your place.",
      keyIdeas: ["need|nature", "season"],
    },
  },
});
