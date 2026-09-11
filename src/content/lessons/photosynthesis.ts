import type { CompleteLessonDefinition, GradeLessonContent } from "@/domain/complete-lesson";
import { explainQ, q, writeQ } from "@/content/lessons/question";

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
  retrieve: [
    q(
      "ph4-t1",
      "Where do green plants mainly make their food?",
      "in the leaves",
      "by chewing soil",
      "only in the flowers",
      "a",
      "Leaves are the usual kitchen. Soil holds water and minerals; flowers help make seeds.",
      "Which part is green and flat to catch light?",
      "Plants do not swallow dirt as lunch.",
      {
        a: "That is the food-making place.",
        b: "Roots hold the plant and take water; they are not a mouth.",
        c: "Flowers are not the main food-makers.",
      },
    ),
    q(
      "ph4-t2",
      "A seedling in a dark cupboard has soil and water. Why might it still struggle to make food?",
      "It is missing light",
      "It needs a plate of roti",
      "Soil has run out of sandwiches",
      "a",
      "Light is part of the recipe. Soil is not a sandwich.",
      "Think of the window plant versus the cupboard plant.",
      "The soil-as-lunch mix-up hides the missing light.",
      {
        a: "Without light, the leaf kitchen cannot keep making sugar well.",
        b: "Plants make food; they do not eat the way we do.",
        c: "Soil is not a packed lunch.",
      },
    ),
  ],
  misconceptions: [
    {
      idea: "Plants eat soil the way animals eat food.",
      correction:
        "Roots take water and minerals and hold the plant. The sugary food is made in the leaves using light, water, and air.",
    },
    {
      idea: "A plant with soil and water will make food even in the dark.",
      correction:
        "Light is part of the recipe. A cupboard plant often grows pale and weak because the leaf cannot catch light.",
    },
  ],
  reflect: {
    prompt:
      "How would you explain a plant's 'meal' to someone who thinks plants eat soil? Use a leaf and a window in your explanation.",
    keyIdeas: ["leaf", "light", "soil"],
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
    keyIdeas: ["light", "leaf", "food"],
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
  retrieve: [
    q(
      "ph5-t1",
      "Which gas does a photosynthesising leaf take in, and which does it give out?",
      "takes in carbon dioxide, gives out oxygen",
      "takes in oxygen, gives out only nitrogen",
      "takes in steam, gives out soil",
      "a",
      "CO₂ in, O₂ out when photosynthesis is running strongly.",
      "Remember: plants take the gas we breathe out in larger amounts, and give the one we need.",
      "Do not swap the gases, and do not treat soil as a gas output.",
      {
        a: "That is the gas swap to remember.",
        b: "That is closer to animal breathing.",
        c: "Soil is not a gas output of the leaf.",
      },
    ),
    q(
      "ph5-t2",
      "Chlorophyll is important because it...",
      "helps the leaf catch light energy",
      "is a kind of soil the plant swallows",
      "stops water entering the roots",
      "a",
      "The green pigment captures light so the leaf can build sugar.",
      "Why are so many photosynthesising parts green?",
      "Chlorophyll is not a soil meal.",
      {
        a: "Light-catching is its job.",
        b: "It sits inside leaf cells, not in a mouthful of dirt.",
        c: "Roots still take water.",
      },
    ),
  ],
  misconceptions: [
    {
      idea: "Plants eat soil.",
      correction:
        "Soil holds water and minerals. Glucose is made in the leaf from carbon dioxide and water, using light caught by chlorophyll.",
    },
    {
      idea: "Photosynthesis is the same as breathing (respiration).",
      correction:
        "Photosynthesis builds sugar and typically gives out oxygen in the light. Respiration uses sugar and oxygen. Plants can do both.",
    },
    {
      idea: "Glucose and carbon dioxide are the same thing.",
      correction:
        "Carbon dioxide is an input gas. Glucose is the sugar the plant makes and can store as starch.",
    },
  ],
  reflect: {
    prompt:
      "Draw or list arrows for a leaf: what goes in, what is made, what leaves. Then say why chlorophyll belongs on the diagram.",
    keyIdeas: ["carbon dioxide", "water", "oxygen", "chlorophyll"],
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
    keyIdeas: ["carbon dioxide", "oxygen", "light", "starch"],
  },
};

const grade6: GradeLessonContent = {
  objective:
    "Explain what plants need for photosynthesis, where it happens, what chlorophyll, carbon dioxide, water, glucose, and oxygen each do, why the process matters in ecosystems, and catch common mix-ups.",
  wonder: {
    prompt:
      "If every green leaf on Earth stopped photosynthesising tonight, what would fail first — a cow's dinner, a human breath, or a potato's stored energy — and how are those linked?",
  },
  explore: {
    text: "Green plants need light, water, and carbon dioxide to make food. Chlorophyll in the leaf catches sunlight. The leaf is the usual kitchen — not the potato underground, and not a mouthful of soil. Predict: if the kitchen is in the dark, can it still cook new sugar?",
    activity: {
      prompt: "A potato is underground in the dark. How can it still be 'sunlight food'?",
      investigation: {
        kind: "plant-kitchen",
        predictPrompt: "What do you think a green leaf needs to make food?",
        predictChoices: [
          { id: "light", label: "Light" },
          { id: "water", label: "Water" },
          { id: "carbon-dioxide", label: "Carbon dioxide" },
          { id: "soil", label: "Soil" },
        ],
        investigateLabel: "Let's investigate",
      },
      models: [
        {
          caption: "Above ground (the kitchen)",
          diagram: "sunlight → green leaf\nCO₂ + water → glucose + oxygen",
        },
        {
          caption: "Below ground (the store)",
          diagram: "leaf sugar → starch in tuber\n(dark soil, no new photosynthesis)",
        },
      ],
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
      "What plants need: sunlight, water, and carbon dioxide (from air). Minerals in soil help the plant stay healthy, but soil is not a sandwich. Roots drink water; they do not chew dirt for lunch.",
      "Where it happens: mainly in green leaves. Chlorophyll (the green pigment) in chloroplasts catches light energy. Without chlorophyll, a white patch of leaf cannot cook well even in a sunny window.",
      "The recipe in words: carbon dioxide + water, with light, become glucose + oxygen. Glucose is the plant's food — used now, or stored as starch. Oxygen is given out. That is why bubbles on pondweed in sunlight are often oxygen leaving.",
      "Photosynthesis is not the same as respiration. Plants also respire (use some sugar and oxygen). In strong light, photosynthesis usually outruns respiration in a healthy leaf — net oxygen out, net carbon dioxide in. At night, photosynthesis stops; respiration continues.",
      "Why it matters: almost every food chain starts with a producer that photosynthesises. A cow's grass, your rice, and much of the oxygen you breathe sit on this process. A potato is last season's sunlight, packed as starch.",
      "Cause and effect: take away light, or water, or carbon dioxide, and the rate drops. A sealed sunny jar may run short of CO₂. Heavy cloud can limit a crop even when the soil is wet.",
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
    {
      caption: "Variegated leaf",
      body: "Green patches have chlorophyll and can photosynthesise. White patches cannot catch light well, so they make little sugar.",
    },
  ],
  connection:
    "Crop yield, aquarium plants, the air in a forest, and why a potato can feed you in winter all sit on this energy-and-carbon transfer.",
  try: {
    prompt:
      "Two trays of the same seedlings: Tray A extra bright light, same water. Tray B dim light, same water. After a week Tray A is heavier. How does photosynthesis explain that (if nothing else is unfair)?",
    reveal:
      "More light can mean more photosynthesis, more sugar made, more biomass. Dim light limits the energy input. (A fair test would also keep temperature and CO₂ similar.) Water was the same, so the missing piece is light, not 'more soil to eat'.",
  },
  practice: [
    q(
      "ph6-p1",
      "Which list is the honest set of what a green leaf needs to photosynthesise?",
      "sunlight, carbon dioxide, and water (chlorophyll to catch the light)",
      "only soil, because soil is plant food",
      "only oxygen, because plants breathe like us and that is photosynthesis",
      "a",
      "Light + CO₂ + water, caught by chlorophyll. Soil is not the meal. Photosynthesis is not the same as respiration.",
      "Name the kitchen, the catcher, the two materials, and the energy.",
      "Soil-as-lunch and photosynthesis-equals-breathing are the two big mix-ups.",
      {
        a: "That is the working recipe.",
        b: "Roots take water and minerals; they do not swallow dirt as food.",
        c: "Oxygen is usually given out when photosynthesis runs strongly.",
      },
    ),
    writeQ(
      "ph6-p2",
      "Name the sugary food a leaf makes, and the gas it typically gives out in the light.",
      [
        "glucose and oxygen",
        "glucose, oxygen",
        "sugar and oxygen",
        "sugar, oxygen",
        "glucose + oxygen",
      ],
      "Glucose (a sugar) is the food. Oxygen is the gas product. Carbon dioxide and water were inputs, not the food itself.",
      "Food molecule versus the bubble gas.",
      "Do not swap: CO₂ is taken in; soil is not a product.",
    ),
    q(
      "ph6-p3",
      "Chlorophyll's job is to...",
      "catch light energy so the leaf can build sugar",
      "be a kind of soil the plant swallows",
      "turn the potato brown so it can cook underground",
      "a",
      "Green pigment in the leaf catches light. It is not soil, and a brown tuber is a store, not a dark kitchen.",
      "Why are photosynthesising parts usually green?",
      "Colour is a clue to the light-catcher, not a snack and not a underground cooker.",
      {
        a: "No catcher, little photosynthesis.",
        b: "Chlorophyll lives in leaf cells.",
        c: "Potatoes store starch made earlier in leaves.",
      },
    ),
    q(
      "ph6-p4",
      "Where does photosynthesis mainly happen?",
      "in green leaves (in chloroplasts that hold chlorophyll)",
      "inside a potato in dark soil",
      "only in flowers, because flowers are pretty",
      "a",
      "The leaf is the kitchen. Tubers store. Flowers help make seeds.",
      "Which part is green, flat, and facing the light?",
      "Underground and 'pretty parts' are the usual wrong kitchens.",
      {
        a: "That is the place.",
        b: "A potato is stored sunlight, not a dark photosynthesising organ.",
        c: "Pretty is not the mechanism.",
      },
    ),
    q(
      "ph6-p5",
      "Why can a food chain not start with a lion?",
      "A lion does not store sunlight as sugar; it eats animals that ate plants (or ate plant-eaters)",
      "Lions photosynthesise at night",
      "Lions make carbon dioxide into grass",
      "a",
      "Producers start chains. Consumers transfer food already made.",
      "Who captured the sunlight?",
      "Night photosynthesis is not a lion skill.",
      {
        a: "The energy entered at the plant.",
        b: "Lions have no chlorophyll kitchen.",
        c: "That reverses the actual flow.",
      },
    ),
    writeQ(
      "ph6-p6",
      "A well-watered plant sits in a sealed transparent jar in sunlight. After a time photosynthesis may slow. Which input is most likely running low? Write the name of the gas.",
      ["carbon dioxide", "co2", "co₂"],
      "Light and water are available; carbon dioxide in the small sealed volume can be used up. That gas is an input, not the sugar product.",
      "Which input is a gas the leaf takes from air?",
      "The sun has not gone out, and the jar does not create soil.",
    ),
  ],
  reasoning: [
    explainQ(
      "ph6-r1",
      "Someone says plants eat soil, so a cupboard plant with plenty of compost should still make food. Why is that wrong?",
      "Soil is not the meal. Photosynthesis needs light so chlorophyll can help build glucose from carbon dioxide and water. Compost in the dark does not replace sunlight. The cupboard plant may look pale because the kitchen has no energy input.",
      "Name what is missing from the recipe, not what is in the pot.",
      "The soil-as-lunch misconception hides the need for light.",
      ["soil is not food", "light", "glucose"],
    ),
    explainQ(
      "ph6-r2",
      "A crop fails during weeks of heavy cloud. Water was enough. Why might photosynthesis explain the poor growth?",
      "Light is an energy input. Heavy cloud can limit photosynthesis, so less glucose is made and the plants grow poorly. Water was not the missing piece this time. (Temperature and disease could also matter — light is the first photosynthesis hypothesis.)",
      "Which input arrives from the sky as energy?",
      "Do not invent 'clouds stole the roots' or 'plants ate insects instead'.",
      ["light|sunlight"],
    ),
    q(
      "ph6-r3",
      "Why is a potato still 'sunlight food' even though it grew in the dark?",
      "Leaves photosynthesised above ground and stored glucose as starch in the tuber",
      "The brown skin photosynthesises in soil light",
      "Potatoes breathe out sugar that animals made",
      "a",
      "Store versus kitchen. Last season's light is packed as starch.",
      "Where was the chlorophyll when the sugar was made?",
      "Underground cooking is the mix-up.",
      {
        a: "That is the cause-and-effect chain.",
        b: "Soil is dark; brown skin is not a leaf.",
        c: "Animals do not send sugar down into tubers that way.",
      },
    ),
  ],
  retrieve: [
    q(
      "ph6-t1",
      "Carbon dioxide's job in photosynthesis is to...",
      "provide carbon that becomes part of glucose",
      "be the sugary food the plant eats from soil",
      "be the same thing as oxygen",
      "a",
      "Matter view: carbon from CO₂ is built into sugar. Glucose is the food; oxygen is a different gas.",
      "Input gas versus product sugar versus product gas.",
      "Swapping the names of the chemicals is the trap.",
      {
        a: "Carbon is fixed into food.",
        b: "Glucose is made, not swallowed as CO₂ from dirt.",
        c: "Oxygen is given out; they are not the same molecule.",
      },
    ),
    writeQ(
      "ph6-t2",
      "What pigment in a leaf catches sunlight?",
      ["chlorophyll"],
      "Chlorophyll is the green light-catcher in chloroplasts. Without it, a white leaf patch cannot photosynthesise well.",
      "Why are so many leaves green?",
      "Soil, water, and oxygen are not the pigment.",
    ),
    q(
      "ph6-t3",
      "Photosynthesis and respiration are...",
      "related but not the same: photosynthesis builds sugar (and typically gives oxygen in the light); respiration uses sugar",
      "two names for plants chewing soil",
      "only done by animals, never by plants",
      "a",
      "Plants photosynthesise in light and also respire. Animals respire; they do not photosynthesise.",
      "Build sugar versus use sugar.",
      "Collapsing both words into 'breathing dirt' hides the science.",
      {
        a: "Keep the two processes distinct.",
        b: "Neither process is soil-chewing.",
        c: "Plants do both; animals do not photosynthesise.",
      },
    ),
  ],
  misconceptions: [
    {
      idea: "Plants eat soil.",
      correction:
        "Roots take water and minerals. The food (glucose) is made in leaves from carbon dioxide and water, using light.",
    },
    {
      idea: "Photosynthesis is just plant breathing, or the same as respiration.",
      correction:
        "Photosynthesis builds sugar and typically releases oxygen in the light. Respiration uses sugar and oxygen. Plants can do both.",
    },
    {
      idea: "A potato photosynthesises underground.",
      correction:
        "The tuber stores starch made in the leaves. Dark soil is not a second sun.",
    },
    {
      idea: "If a plant has water, it will make food even with no light or no chlorophyll.",
      correction:
        "Light and chlorophyll are part of the recipe. White leaf tissue and cupboard plants cannot keep cooking sugar well.",
    },
  ],
  reflect: {
    prompt:
      "What did you used to think plants 'ate', and what do you think now? Mention light, chlorophyll, carbon dioxide, water, glucose, and oxygen if you can.",
    keyIdeas: ["light", "chlorophyll", "carbon dioxide", "glucose"],
  },
  mastery: q(
    "ph6-m1",
    "Choose the statement that holds the kitchen, the recipe, and why it matters.",
    "Leaves use chlorophyll to catch light, combine carbon dioxide and water into glucose, release oxygen, and that food and gas support other living things",
    "Photosynthesis is optional decoration on a leaf, and potatoes cook sugar in the dark",
    "Only animals make sugar; plants only sit in soil and breathe the way we do",
    "a",
    "Place, catcher, inputs, products, ecosystem. That is the connected picture.",
    "Say it as: sun → chlorophyll in leaf → sugar + oxygen → eaters and breathers.",
    "Decoration, underground cooking, and 'plants do nothing' are the weak stories.",
    {
      a: "That is mastery for this idea.",
      b: "It is a core life process, not decoration, and tubers are stores.",
      c: "Plants make the sugar; animals eat it.",
    },
  ),
  masteryCriteria:
    "You can name what a plant needs, where photosynthesis happens, the jobs of chlorophyll, carbon dioxide, water, glucose, and oxygen, explain a simple cause-and-effect (light or CO₂ missing), connect it to a food chain or a potato store, and reject soil-as-lunch and potato-in-the-dark cooking.",
  teach: {
    prompt:
      "Teach Ivshi photosynthesis as if they are younger: what the leaf needs, what chlorophyll does, what is made, why a potato is stored sunlight, and why a lion cannot start a food chain.",
    keyIdeas: ["chlorophyll", "glucose", "oxygen", "potato", "producer"],
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
