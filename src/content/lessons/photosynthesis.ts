import type { CompleteLessonDefinition, GradeLessonContent } from "@/domain/complete-lesson";
import { q } from "@/content/lessons/question";

const grade4: GradeLessonContent = {
  objective:
    "Explain that green plants make their own food in leaves using light, water, and air, and that they do not eat soil the way animals eat food.",
  wonder: {
    prompt:
      "A plant has no mouth and no plate. So how does it 'eat' and still grow new leaves?",
  },
  explore: {
    text: "Green leaves are food-making places. Light hits the leaf. Water comes up from the roots. Air is around the leaf. Together they let the plant make a sugary food it can use to grow. Soil holds water and minerals; the plant does not chew handfuls of dirt for lunch.",
    activity: {
      prompt: "Two identical seedlings. One sits on a bright window. One sits in a closed dark cupboard for many days. Which one can keep making food well?",
      choices: [
        {
          id: "window",
          label: "The window plant",
          note: "Light is part of the food-making recipe. Without light, a green plant cannot keep making sugar well. The cupboard plant often grows pale and weak.",
        },
        {
          id: "cupboard",
          label: "The cupboard plant, because it is resting",
          note: "Resting is not how leaves make food. Darkness starves the recipe of light.",
        },
        {
          id: "same",
          label: "Both the same, because both have soil",
          note: "Soil is not a sandwich. Both may have water in the pot, but only the window plant has the light leaves need.",
        },
      ],
    },
  },
  understand: {
    paragraphs: [
      "Photosynthesis is the plant's way of making food. You can remember it as 'putting together with light'.",
      "The leaf is the usual kitchen. Green colour in the leaf helps catch light. Roots drink water. Tiny openings in the leaf take in air.",
      "The plant builds a sugary food it can use or store. As it works, it also gives out oxygen — the gas many living things need to breathe.",
      "A common mix-up: 'plants eat soil.' Roots hold the plant and take water and minerals. The meal itself is made in the leaf, not swallowed from the ground.",
    ],
  },
  examples: [
    {
      caption: "A tulsi on a sill",
      body: "Morning sun on the leaves, water in the soil, air in the room. The plant is quietly making food even though nobody is feeding it roti.",
    },
    {
      caption: "A tree and a cow",
      body: "The tree makes food in its leaves. The cow eats grass that the plants already made. Animals depend on that plant food.",
    },
    {
      caption: "A pale cupboard plant",
      body: "If you hide a green plant from light for a long time, it cannot keep up the food-making. It may look stretched and pale.",
    },
  ],
  connection:
    "Every bite of rice, fruit, or salad started as plant food made with light. The oxygen you breathe also comes, in large part, from plants and other photosynthesising life.",
  try: {
    prompt: "If a leaf is covered with dark paper for a week, what does that leaf miss most for making food?",
    reveal:
      "Light. Water and air may still reach the plant, but that patch of leaf cannot catch light under the paper, so food-making there slows down.",
  },
  practice: [
    q(
      "ph4-p1",
      "Green plants mainly make food in their...",
      "leaves",
      "flowers only",
      "wooden heartwood only",
      "a",
      "Leaves are the usual food-making places. Flowers help make seeds. Wood is mostly support.",
      "Where is the plant green and flat to catch light?",
      "Do not confuse 'pretty parts' with the kitchen.",
      {
        a: "That is the kitchen.",
        b: "Flowers are not the main food-makers.",
        c: "Inner wood is not catching sunlight.",
      },
    ),
    q(
      "ph4-p2",
      "What do green leaves use to make food?",
      "light, water, and air",
      "only soil sandwiches",
      "only moonlight and stones",
      "a",
      "Light, water, and air (which has carbon dioxide) are the working ingredients. Soil is not a packed lunch.",
      "Think of the window plant versus the cupboard.",
      "The 'plants eat dirt' mix-up.",
      {
        a: "Those are the inputs to remember.",
        b: "Roots take minerals from soil; they do not chew soil as food.",
        c: "Sunlight is the usual light for this recipe.",
      },
    ),
    q(
      "ph4-p3",
      "Why do we say plants do not 'eat' the way you eat lunch?",
      "They make a sugary food in leaves instead of swallowing meals",
      "They never need anything from the world",
      "They only drink milk",
      "a",
      "Making food is different from chewing food. Plants still need light, water, and air.",
      "Mouth versus leaf.",
      "Needing nothing would mean they would not wilt in the dark.",
      {
        a: "That is the difference.",
        b: "They need light, water, and air — a lot.",
        c: "That is not how plants work.",
      },
    ),
  ],
  reasoning: [
    q(
      "ph4-r1",
      "A friend says, 'This plant is growing, so it must be eating the soil.' What is a better explanation?",
      "The plant is making food in its leaves and using water and minerals from the soil",
      "The soil is disappearing into the plant's mouth",
      "Growth means the plant is not using light",
      "a",
      "Soil level in a pot does not vanish like a plate of rice. Water and minerals are taken up; food is made in the leaf.",
      "Would the plant still grow in clean water with minerals and light? (Many seedlings can, for a time.)",
      "Watch the 'eating soil' story.",
      {
        a: "That splits the jobs of roots and leaves.",
        b: "Plants do not have mouths for soil.",
        c: "Growth is powered by the food they make with light.",
      },
    ),
    q(
      "ph4-r2",
      "On a very dark rainy week, a balcony plant looks droopy even though you watered it. What might be missing for food-making?",
      "enough light",
      "too much soil in the air",
      "the idea of photosynthesis itself",
      "a",
      "Water is there. Light is weak. Food-making slows. (Other problems exist too, but light is the idea this lesson tracks.)",
      "Which ingredient arrives through the sky, not the watering can?",
      "Watering cannot replace the sun.",
      {
        a: "Light is the missing piece in this story.",
        b: "Soil does not float around as the main food.",
        c: "The idea still works; the conditions are poor.",
      },
    ),
  ],
  reflect: {
    prompt:
      "How would you explain a plant's 'meal' to someone who thinks plants eat soil? Use a leaf and a window in your explanation.",
  },
  mastery: q(
    "ph4-m1",
    "A fair, simple list of what green plants need to make food is...",
    "light, water, and air, with leaves doing most of the making",
    "only rocks and a closed cupboard",
    "other plants to chew",
    "a",
    "That is the Grade 4 core of photosynthesis.",
    "Window, watering can, breeze on a leaf.",
    "Cupboards and chewing belong to other stories.",
    {
      a: "Keep this list.",
      b: "That would stop food-making.",
      c: "Plants make food; they do not graze on each other as a first idea.",
    },
  ),
  masteryCriteria:
    "You can say that leaves make food with light, water, and air, and you can reject the idea that plants swallow soil as lunch.",
  teach: {
    prompt:
      "Teach Ivshi why a green plant on a sunny window can make food, and why hiding it in the dark is a problem — without saying 'plants eat soil'.",
  },
};

const grade5: GradeLessonContent = {
  objective:
    "Name the inputs and outputs of photosynthesis, explain the leaf's job including chlorophyll, and connect the oxygen given out to living things.",
  wonder: {
    prompt:
      "If you could label arrows on a leaf, what goes in, what is made, and what gas might leave — and why does the leaf look green in the sun?",
  },
  explore: {
    text: "Photosynthesis uses light energy, water, and carbon dioxide (a gas in air). The leaf's green pigment, chlorophyll, helps catch light. The plant makes glucose (a sugar) and releases oxygen. The sugar is the food. The oxygen is a by-product that animals and people use when they breathe.",
    activity: {
      prompt: "Which set is the honest 'in' and 'out' for photosynthesis?",
      choices: [
        {
          id: "io",
          label: "In: light, water, carbon dioxide. Out: sugar and oxygen",
          note: "Yes. Energy from light is stored in the sugar. Oxygen leaves the leaf into the air.",
        },
        {
          id: "soil-in",
          label: "In: soil chunks. Out: carbon dioxide for us to breathe",
          note: "Soil is not the food input. We breathe oxygen, not carbon dioxide as our useful gas from the leaf's gift. Plants take carbon dioxide in.",
        },
        {
          id: "only-water",
          label: "In: water only. Out: more water only",
          note: "Water is one input, not the whole recipe, and the useful new things are sugar and oxygen.",
        },
      ],
    },
  },
  understand: {
    paragraphs: [
      "Word equation you can say: carbon dioxide + water, with light, become glucose + oxygen. Chlorophyll in chloroplasts (tiny green parts of leaf cells) helps capture the light.",
      "Carbon dioxide enters through tiny pores, often on the underside of the leaf. Water travels from roots through veins. Light is caught at the leaf surface.",
      "The sugar can be used now for growth and activity, or stored as starch. Iodine tests on a leaf (done safely by an adult) are one way scientists have shown starch after light.",
      "If light, gas, or water is missing, the rate of photosynthesis drops. That is why a pale cupboard plant and a dry wilted plant both struggle — for related but not identical reasons.",
    ],
  },
  examples: [
    {
      caption: "A pond weed in light",
      body: "Bubbles on a water plant in sunlight are often oxygen leaving as photosynthesis runs. In the dark, the bubbling slows.",
    },
    {
      caption: "Why forests feel 'fresh'",
      body: "Lots of leaves taking carbon dioxide and giving oxygen will not empty the sky of CO₂ by themselves, but they are a living part of the air's story.",
    },
    {
      caption: "Variegated leaf",
      body: "A leaf that is part white, part green: the green patches have chlorophyll. Those patches can photosynthesise; the white patches cannot do it well.",
    },
  ],
  connection:
    "Farmers, kitchen gardens, and the air in a classroom all depend on this gas-and-sugar exchange. Food chains start with producers that photosynthesise.",
  try: {
    prompt:
      "A leaf is kept in the dark for two days, then picked. Why might a starch test show little starch compared with a leaf that stayed in the light?",
    reveal:
      "Without light, photosynthesis cannot keep making sugar to store as starch. The plant may use up stored starch. The light leaf could keep producing and storing.",
  },
  practice: [
    q(
      "ph5-p1",
      "Which gas does a photosynthesising leaf take in, and which does it give out?",
      "takes in carbon dioxide, gives out oxygen",
      "takes in oxygen, gives out only nitrogen",
      "takes in steam, gives out soil",
      "a",
      "CO₂ in, O₂ out (when photosynthesis is running strongly). Animals do the reverse when they respire.",
      "Remember: plants take the gas we breathe out in larger amounts, and give the one we need.",
      "Do not swap the gases.",
      {
        a: "That is the gas swap to remember.",
        b: "That is closer to animal breathing, not the leaf's food-making gift.",
        c: "Soil is not a gas output of the leaf.",
      },
    ),
    q(
      "ph5-p2",
      "Chlorophyll is important because it...",
      "helps the leaf catch light energy",
      "is a kind of soil the plant swallows",
      "stops water entering the roots",
      "a",
      "The green pigment captures light so the leaf can build sugar. It is not food from the ground.",
      "Why are so many photosynthesising parts green?",
      "Colour is a clue to the light-catcher, not a snack.",
      {
        a: "Light-catching is its job.",
        b: "Chlorophyll is inside leaf cells, not a soil meal.",
        c: "Roots still take water.",
      },
    ),
    q(
      "ph5-p3",
      "Glucose made in the leaf is...",
      "a sugar the plant can use or store",
      "a rock the plant sits on",
      "the same thing as carbon dioxide",
      "a",
      "Glucose is the food molecule. It can become starch for storage. CO₂ is an input gas, not the sugar itself.",
      "Food versus ingredient.",
      "Names of chemicals get swapped in this mix-up.",
      {
        a: "Use or store — that is the point of making it.",
        b: "Rocks are not the product.",
        c: "CO₂ is used to build glucose; they are not the same.",
      },
    ),
  ],
  reasoning: [
    q(
      "ph5-r1",
      "A covered fish tank has pondweed and fish. In bright light the fish seem more comfortable. What photosynthesis idea could help explain that (along with other tank facts)?",
      "The pondweed can give out oxygen while it photosynthesises",
      "The pondweed eats the fish's food",
      "Light turns fish into plants",
      "a",
      "Photosynthesis releases oxygen into the water. Fish need dissolved oxygen. (Overcrowding and temperature matter too — this is one helpful idea, not the only one.)",
      "What gas leaves a photosynthesising water plant as bubbles?",
      "Do not turn it into a cartoon of plants hunting fish.",
      {
        a: "Oxygen is the link in this story.",
        b: "Pondweed makes its own food; it is not fishing.",
        c: "Light does not rewrite what an animal is.",
      },
    ),
    q(
      "ph5-r2",
      "Why might a plant with mostly white leaves grow poorly even in a sunny window?",
      "Little chlorophyll means it cannot catch enough light to make food",
      "White leaves drink all the water",
      "Windows destroy carbon dioxide",
      "a",
      "Chlorophyll is scarce in white tissue. Light is present, but the catcher is missing.",
      "Variegated leaf example.",
      "The problem is the pigment, not a magical window.",
      {
        a: "No catcher, little photosynthesis.",
        b: "Colour does not make a leaf a sponge that steals all water.",
        c: "Air in the room still has CO₂.",
      },
    ),
  ],
  reflect: {
    prompt:
      "Draw or list arrows for a leaf: what goes in, what is made, what leaves. Then say why chlorophyll belongs on the diagram.",
  },
  mastery: q(
    "ph5-m1",
    "The most complete Grade 5 sentence is...",
    "With chlorophyll and light, leaves use carbon dioxide and water to make sugar and release oxygen",
    "Leaves turn soil into oxygen so plants can chew",
    "Photosynthesis is another word for raining",
    "a",
    "Inputs, light-catcher, products. That is the working model.",
    "Say the word equation in English.",
    "Soil-chewing and weather words are the usual mix-ups.",
    {
      a: "Keep this sentence.",
      b: "Soil is not converted into oxygen as food-chewing.",
      c: "Rain is water falling, not the leaf's food-making.",
    },
  ),
  masteryCriteria:
    "You can name CO₂ + water + light → sugar + oxygen, and explain chlorophyll as the light-catcher.",
  teach: {
    prompt:
      "Teach Ivshi the inputs and outputs of photosynthesis, and why a dark cupboard starch test would look different from a sunny-leaf test.",
  },
};

const grade6: GradeLessonContent = {
  objective:
    "Explain photosynthesis as energy transfer that supports food chains, reason about limiting factors, and connect leaf processes to carbon dioxide, oxygen, and stored starch.",
  wonder: {
    prompt:
      "If every green leaf on Earth stopped photosynthesising tonight, what would fail first — a cow's dinner, a human breath, or a potato's stored energy — and how are those linked?",
  },
  explore: {
    text: "Photosynthesis stores light energy in chemical energy (glucose). Almost every food chain starts with a producer. In the short term, animals use oxygen and food already present. In the longer term, both the fuel and much of the oxygen cycle depend on photosynthesis. Stored starch in seeds and tubers is last season's sunlight, packed.",
    activity: {
      prompt: "A potato is underground in the dark. How can it still be 'sunlight food'?",
      choices: [
        {
          id: "stored",
          label: "The plant stored sugar as starch in the tuber during the growing season",
          note: "Yes. Photosynthesis happened in the leaves above ground. The potato is a store. It is not photosynthesising in the soil.",
        },
        {
          id: "soil-sun",
          label: "Soil shines like the sun underground",
          note: "Soil is dark. The energy was captured earlier, in leaves.",
        },
        {
          id: "potato-chloro",
          label: "The brown skin is full of chlorophyll and makes new sugar in the dark",
          note: "Brown tubers are storage organs. They are not green leaves catching light in the dark.",
        },
      ],
    },
  },
  understand: {
    paragraphs: [
      "Energy view: light energy → chemical energy in glucose. That glucose can power the plant's own respiration, build new tissue, or be stored. Consumers eat that stored or living plant material; they do not invent the energy.",
      "Matter view: carbon from carbon dioxide becomes part of sugar. That is why cutting forests and burning stored plant carbon (including fossil fuels formed long ago from living things) is part of the carbon story, not only a 'nice trees' story.",
      "Limiting factors: if light, carbon dioxide, or temperature is too low, photosynthesis slows. A bright but closed cupboard still lacks light. A well-lit sealed jar may run short of CO₂. Farmers think about this when they grow crops in glasshouses.",
      "Do not confuse photosynthesis with respiration. Plants photosynthesise in light and also respire, using some oxygen and sugar. In strong light, photosynthesis usually outruns respiration in a healthy leaf — net oxygen out, net carbon dioxide in.",
    ],
  },
  examples: [
    {
      caption: "Food chain",
      body: "Grass (photosynthesis) → cow → human. Remove the grass's light, and the chain has no starting fuel.",
    },
    {
      caption: "Glasshouse",
      body: "Growers add light or extra carbon dioxide sometimes because those inputs can limit how fast plants make sugar.",
    },
    {
      caption: "Day and night",
      body: "At night, photosynthesis stops; respiration continues. A sealed dark box of plants will not keep bubbling oxygen.",
    },
  ],
  connection:
    "Crop yield, aquarium plants, climate conversations about carbon, and why a forest is more than 'pretty green' all sit on this energy-and-carbon transfer.",
  try: {
    prompt:
      "Two trays of the same seedlings: Tray A extra bright light, same water. Tray B dim light, same water. After a week Tray A is heavier. How does photosynthesis explain that (if nothing else is unfair)?",
    reveal:
      "More light can mean more photosynthesis, more sugar made, more biomass. Dim light limits the energy input. (A fair test would also keep temperature and CO₂ similar.)",
  },
  practice: [
    q(
      "ph6-p1",
      "Photosynthesis is best described as...",
      "storing light energy in sugar while building sugar from carbon dioxide and water, and releasing oxygen",
      "plants chewing soil into oxygen",
      "the same process as boiling water",
      "a",
      "Energy transfer plus a carbon-and-water recipe. Soil-chewing and boiling are different stories.",
      "Name energy in, energy stored, matter in, matter out.",
      "Keep soil out of the chemical sentence.",
      {
        a: "That is the Grade 6 model.",
        b: "Soil is not converted by chewing into oxygen.",
        c: "Boiling is a change of state, not sugar-building.",
      },
    ),
    q(
      "ph6-p2",
      "Why can a food chain not start with a lion?",
      "A lion does not store sunlight as sugar; it eats animals that ate plants (or ate plant-eaters)",
      "Lions photosynthesise at night",
      "Lions make carbon dioxide into grass",
      "a",
      "Producers start chains. Consumers transfer food already made. Lions are consumers.",
      "Who captured the sunlight?",
      "Night photosynthesis is not a lion skill.",
      {
        a: "The energy entered at the plant.",
        b: "Lions have no chlorophyll kitchen.",
        c: "That reverses the actual flow.",
      },
    ),
    q(
      "ph6-p3",
      "A well-watered plant in a sealed transparent jar in sunlight may slow its photosynthesis after a time because...",
      "carbon dioxide inside can be used up",
      "the sun stops existing",
      "the jar creates soil",
      "a",
      "Light and water are available; CO₂ can become limiting in a sealed volume. (Oxygen rising is another change, but the carbon input is the photosynthesis limiter here.)",
      "Which input is a gas that can run low in a sealed jar?",
      "The sun is still there; the closed air is the clue.",
      {
        a: "CO₂ as a limiting factor.",
        b: "The star has not gone out.",
        c: "Jars do not manufacture soil as the idea.",
      },
    ),
  ],
  reasoning: [
    q(
      "ph6-r1",
      "Someone says, 'Plants only help us because they are pretty.' What photosynthesis-based reply is strongest?",
      "They convert light into food energy and they affect the gases in the air we depend on",
      "Pretty leaves photosynthesise faster because pink is stronger than green",
      "Plants do not affect food or air at all",
      "a",
      "Function first: energy and gases. Beauty is extra. Pigment colour for catching light is mostly about chlorophyll, not decoration fashion.",
      "Energy and carbon, not compliments.",
      "Pretty-as-cause is not the mechanism.",
      {
        a: "That is the scientific reply.",
        b: "Pink fashion is not the light-catching rule.",
        c: "That claim is false.",
      },
    ),
    q(
      "ph6-r2",
      "A crop fails during weeks of heavy cloud. Water was enough. Which photosynthesis idea is the best first hypothesis?",
      "Low light limited photosynthesis, so less sugar and poorer growth",
      "Clouds stole the plants' roots",
      "The plants switched to eating insects only",
      "a",
      "Light as a limiting factor. Roots are still there. Most crop plants are not insect meals as their main food-making method.",
      "Which input arrives from the sky as energy?",
      "Keep the hypothesis testable and about the recipe.",
      {
        a: "That hypothesis can be checked with growth and weather records.",
        b: "Clouds do not remove roots.",
        c: "That is not how those crops feed.",
      },
    ),
  ],
  reflect: {
    prompt:
      "Explain how last year's sunlight can still be inside a potato today, and how that potato can later be energy for you.",
  },
  mastery: q(
    "ph6-m1",
    "Choose the statement that holds energy, matter, and a food-chain idea together.",
    "Leaves store light energy in sugar made from CO₂ and water; oxygen is released; other living things depend on that food and, over time, on that oxygen",
    "Photosynthesis is optional decoration on a leaf",
    "Only animals make sugar; plants only sit in soil",
    "a",
    "Energy stored, carbon fixed, oxygen released, chains begun. That is the connected picture.",
    "Say it as a chain: sun → leaf → sugar → eater.",
    "Decoration and 'plants do nothing' are the weak stories.",
    {
      a: "That is mastery for this idea.",
      b: "It is a core life process, not decoration.",
      c: "Plants make the sugar; animals eat it.",
    },
  ),
  masteryCriteria:
    "You can describe photosynthesis as energy storage and carbon-building, name a limiting factor, and place it at the start of a food chain.",
  teach: {
    prompt:
      "Teach Ivshi why a potato is stored sunlight, why a lion cannot start a food chain, and what might limit photosynthesis in a sealed sunny jar.",
  },
};

export const photosynthesisLesson: CompleteLessonDefinition = {
  conceptId: "science-plants-photosynthesis",
  subject: "science",
  title: "Photosynthesis",
  domainTitle: "Plants",
  grades: [4, 5, 6],
  prerequisites: ["science-plants-needs", "science-plants-parts"],
  nextConceptIds: ["science-fc-producer", "science-fc-break"],
  byGrade: {
    4: grade4,
    5: grade5,
    6: grade6,
  },
};
