import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade6ScienceLesson } from "@/content/lessons/grade-6-science/format";

export const wonderfulWorldLesson = grade6ScienceLesson({
  conceptId: "ncert-g6-curiosity-wonderful-world-core",
  title: "The Wonderful World of Science",
  domainTitle: "Inquiry",
  prerequisites: [],
  nextConceptIds: ["ncert-g6-curiosity-diversity-living-core"],
  coveredSkillIds: [
    "ncert-g6-curiosity-wonderful-world-core-sk-1-ask-a-testable-question",
    "ncert-g6-curiosity-wonderful-world-core-sk-2-make-an-observation",
  ],
  content: {
    objective:
      "Ask a testable science question and make a careful observation you can use as evidence.",
    wonder: {
      prompt:
        "You notice the school corridor feels cooler near an open window than near a closed storeroom. What question could you ask that a simple test or careful look could answer?",
    },
    explore: {
      text: "Science starts with curiosity: noticing something, asking a question you can check, predicting what might happen, and gathering observations as evidence. A testable question points to something you can watch, measure, or compare — not only a wild guess. An observation is what your senses (or a simple tool) actually show, written so another person could check it later.",
      activity: {
        prompt:
          "Ice cubes sit in two identical bowls — one in shade, one in sun. You predict the sunny bowl melts faster. Which plan best turns that prediction into a fair investigation?",
        choices: [
          {
            id: "fair-test",
            label:
              "Start with equal ice, leave both bowls the same time, then observe and record which has more liquid water",
            note: "You kept amounts and time fair, stated a prediction, and used observation as evidence.",
          },
          {
            id: "guess-only",
            label: "Decide the answer in your head and never look at the bowls again",
            note: "A prediction needs a check. Without looking, you have no observation to support a claim.",
          },
          {
            id: "change-all",
            label:
              "Add hot water to one bowl, move both bowls around, and skip writing anything down",
            note: "Changing many things at once and skipping records makes it hard to know what caused the melting.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Curiosity is the spark. Scientists notice patterns — a shadow that moves, a plant that leans, a magnet that pulls some objects but not others — and wonder why.",
        "A testable question can be checked with an observation or a fair test. Examples: Does the sunny side of the yard feel warmer than the shady side at noon? Does a steel spoon attract a magnet more than a wooden spoon? Questions like “Which colour is prettier?” are opinions, not science checks.",
        "A hypothesis is a because idea you can check: “I think the sunny bowl melts faster because sunlight adds heat.” You do not need fancy words — you need a claim that evidence can support or challenge.",
        "An observation is what you notice with your senses or with a tool (ruler, clock, thermometer). Write it clearly: “After 10 minutes, the sunny bowl had a puddle; the shady bowl still held a solid cube.” That is evidence. A conclusion should match the evidence, not only the hope you started with.",
        "Fair tests change one thing at a time when you can. Same ice amount, same bowl size, same start time — then compare sun and shade. Careful notes let you explain a change with evidence, not only a guess.",
      ],
    },
    examples: [
      {
        caption: "Testable question",
        body: "Does a paper boat float longer in still water or in water with gentle waves? You can watch and time both.",
      },
      {
        caption: "Observation as evidence",
        body: "“The magnet pulled the iron nail but not the plastic button” is an observation you can show a friend.",
      },
      {
        caption: "Conclusion from evidence",
        body: "If both bowls start equal and only the sunny one melts faster, you may conclude sunlight helped melt the ice — matching what you saw.",
      },
    ],
    connection:
      "Whenever you ask “What if we check?” instead of “I just know,” you are practising the wonderful world of science.",
    try: {
      prompt:
        "Write one testable question about something near you. Then make one careful observation that could help answer it.",
      reveal:
        "Example question: Does the classroom door feel cooler than the sunny windowsill? Observation: After touching both for three seconds, the sill felt warmer than the door handle.",
    },
    practice: [
      q(
        "g6s-ww-p1",
        "Which is a testable science question?",
        "Does ice melt faster in sun or in shade when amounts and time stay the same?",
        "Which ice cube has the nicest personality?",
        "Should everyone secretly prefer shade forever?",
        "a",
        "You can compare melting with equal amounts and time. Personality and secret preferences are not checkable science tests.",
        "Which question points to a fair comparison you could observe?",
        "Opinions without a check are not testable science questions.",
        {
          a: "You chose a question a fair test can answer.",
          b: "Personality is not something ice cubes show in a science test.",
          c: "Secret preferences are not observations you can share as evidence.",
        },
      ),
      q(
        "g6s-ww-p2",
        "Which line is a careful observation?",
        "After five minutes, the sunny bowl held more liquid water than the shady bowl",
        "Sunshine is magical so results do not matter",
        "I refuse to look because I already decided",
        "a",
        "An observation records what you actually noticed, with enough detail for someone else to check.",
        "What did your eyes or a simple measure show?",
        "Skipping looking leaves you without evidence.",
        {
          a: "You recorded a clear, checkable observation.",
          b: "Magic claims skip evidence.",
          c: "Refusing to look skips observation.",
        },
      ),
      explainQ(
        "g6s-ww-p3",
        "Why does writing a prediction before a test help an investigation?",
        "A prediction states what you expect so you can compare it with what you observe. That makes your conclusion honest: you check the idea instead of only inventing a story after the fact.",
        "What are you comparing when the test ends?",
        "Predictions are for checking, not for decorating a notebook.",
        ["predict|expect|observ|compar|evidence|check|test"],
      ),
    ],
    reasoning: [
      q(
        "g6s-ww-r1",
        "A friend says, “I already know the answer, so notes are a waste.” What reasoning answers gently?",
        "Notes turn observations into evidence you can share and revisit; memory alone can miss details",
        "Agree that evidence is never useful in science",
        "Say science means never asking questions",
        "a",
        "Careful notes protect fairness and let others check your claim. Skipping records weakens the investigation.",
        "What do notes protect for a later conclusion?",
        "Science grows from questions and evidence, not from skipping both.",
        {
          a: "You linked notes to shareable evidence.",
          b: "Evidence is the heart of science claims.",
          c: "Curiosity begins with questions.",
        },
      ),
      explainQ(
        "g6s-ww-r2",
        "How is a hypothesis different from a random shout?",
        "A hypothesis is a because idea you can check with an observation or fair test. A random shout does not point to evidence you could gather.",
        "Can you plan a check for the idea?",
        "Checkable because-ideas belong in science; empty shouts do not.",
        ["hypothes|because|test|observ|evidence|check|fair"],
      ),
    ],
    retrieve: [
      q(
        "g6s-ww-t1",
        "Asking a testable question mainly means...",
        "posing something you can check with observation or a fair comparison",
        "only arguing louder than classmates",
        "refusing to notice anything in the world",
        "a",
        "Testable questions invite evidence. Volume and refusal skip inquiry.",
        "What makes a question fit science class?",
        "Noise and closed eyes are not investigation skills.",
        {
          a: "You defined a checkable question.",
          b: "Volume is not evidence.",
          c: "Science starts by noticing.",
        },
      ),
      writeQ(
        "g6s-ww-t2",
        "Write one testable question and one observation that could help answer it.",
        [
          "melt",
          "sun",
          "shade",
          "magnet",
          "float",
          "warm",
          "cool",
          "observe",
          "measure",
          "time",
        ],
        "Example: Question — Does a magnet attract an iron nail more than a rubber eraser? Observation — The nail stuck to the magnet; the eraser did not move.",
        "Ask something you can check, then record what you actually notice.",
        "Saying ‘science is only guessing forever’ skips both skills.",
        [
          "question|test|compar|does|whether|if",
          "observ|saw|noticed|felt|measured|record",
        ],
      ),
    ],
    misconceptions: [
      {
        idea: "Science is only memorising names from a book.",
        correction:
          "Names help, but science also means asking checkable questions and using observations as evidence.",
      },
      {
        idea: "If my prediction misses, the investigation was useless.",
        correction:
          "A missed prediction still teaches. Matching observation to evidence is useful — even when the idea changes.",
      },
    ],
    reflect: {
      prompt:
        "Which feels harder for you right now — asking a testable question, or writing a careful observation — and why?",
      keyIdeas: ["question|observ|test|evidence"],
    },
    mastery: q(
      "g6s-ww-m1",
      "The Wonderful World of Science asks you to...",
      "ask a testable question and make a careful observation",
      "skip evidence because guessing is enough",
      "never notice patterns in the world around you",
      "a",
      "The chapter skills are testable questions and careful observations used as evidence.",
      "What two inquiry habits does this lesson practise?",
      "Guessing without checks skips science.",
      {
        a: "You held both inquiry skills.",
        b: "Evidence matters more than unchecked guesses.",
        c: "Noticing is where curiosity begins.",
      },
    ),
    masteryCriteria:
      "You can ask one testable question and record one clear observation that could serve as evidence.",
    teach: {
      prompt:
        "Teach Ivshi: one testable question about school life and one observation that would help answer it.",
      keyIdeas: ["testable|question", "observ|evidence"],
    },
  },
});

export const diversityLivingLesson = grade6ScienceLesson({
  conceptId: "ncert-g6-curiosity-diversity-living-core",
  title: "Diversity in the Living World",
  domainTitle: "Living world",
  prerequisites: ["ncert-g6-curiosity-wonderful-world-core"],
  nextConceptIds: ["ncert-g6-curiosity-mindful-eating-core"],
  coveredSkillIds: [
    "ncert-g6-curiosity-diversity-living-core-sk-1-give-a-grouping-feature",
    "ncert-g6-curiosity-diversity-living-core-sk-2-name-a-diverse-example",
  ],
  content: {
    objective:
      "Give a clear feature for grouping living things and name a diverse example from the living world.",
    wonder: {
      prompt:
        "A courtyard holds ants, grass, a sparrow, and a neem sapling. If you could sort them into two groups using one feature, what feature would you choose — and what would each group contain?",
    },
    explore: {
      text: "The living world is diverse: many forms, sizes, habitats, and ways of getting food. Grouping uses a shared feature — movement, leaves, backbone, habitat, or how food is obtained — so patterns become easier to study. Living things are built from tiny cells; they interact with non-living parts of a place such as soil, water, air, and light. Diversity also means interdependence: if one link in a food chain disappears, others can feel the change.",
      activity: {
        prompt:
          "You predict: ‘Things with wings will group apart from things that stay rooted.’ Which test best checks that grouping idea in a school garden?",
        choices: [
          {
            id: "feature-sort",
            label:
              "List each living thing, mark ‘wings’ or ‘rooted,’ then check whether the feature cleanly separates them",
            note: "You used one grouping feature and checked it against real examples — an investigative sort.",
          },
          {
            id: "random-pile",
            label: "Toss every name into one pile and refuse to name any feature",
            note: "Without a feature, grouping cannot be checked or explained.",
          },
          {
            id: "only-colour",
            label: "Group only by favourite colour of the observer and ignore living traits",
            note: "Observer favourites are not features of the living things themselves.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Diversity means variety. Insects, birds, mammals, flowering plants, mosses, and fungi can share a neighbourhood yet look and live differently.",
        "A grouping feature is a trait you can point to: presence of wings, soft stem vs woody stem, lives in water vs on land, makes its own food vs eats others. Good features help sort without mixing opinion into the rule.",
        "Living things are made of cells — tiny building blocks too small to see without tools. Knowing that helps explain how different bodies can still share life processes.",
        "Habitats mix living and non-living parts. Soil, rocks, sunlight, and water shape what survives. Behaviour adaptations — a bird nesting high, an ant following a trail — help living things fit their place.",
        "Food chains show interdependence. If insects disappear from a garden, birds that eat them may struggle. Naming diverse examples and grouping features helps you notice those links.",
      ],
    },
    examples: [
      {
        caption: "Grouping feature",
        body: "Feature: ‘has feathers.’ Sparrow and crow go together; neem and grass do not.",
      },
      {
        caption: "Diverse example",
        body: "A butterfly in the same courtyard as a frog shows diversity of body form and life style in one place.",
      },
      {
        caption: "Living and non-living",
        body: "Ants (living) dig in dry soil (non-living). Both shape the habitat together.",
      },
    ],
    connection:
      "When you sort living things by a clear feature, you are practising the same careful noticing scientists use to map diversity.",
    try: {
      prompt:
        "Name one grouping feature you could use outdoors. Then name two living things that show diversity under that feature or across groups.",
      reveal:
        "Example feature: moves from place to place. Diverse examples: a darting lizard and a rooted marigold — one moves freely, one stays planted.",
    },
    practice: [
      q(
        "g6s-dv-p1",
        "Which is a clear grouping feature for living things?",
        "lives mainly in water versus mainly on land",
        "belongs to my favourite cartoon",
        "exists only in dreams with no body traits",
        "a",
        "Habitat-based features can be checked. Cartoons and dream-only claims are not science grouping features.",
        "Which trait could you observe in real living things?",
        "Favourites and dreams skip observable features.",
        {
          a: "You chose an observable grouping feature.",
          b: "Cartoon fandom is not a biological feature.",
          c: "Grouping needs real, checkable traits.",
        },
      ),
      q(
        "g6s-dv-p2",
        "Which names a diverse example from the living world?",
        "a house crow and a mango tree sharing one street",
        "two identical plastic toys with no life processes",
        "a blank page with no living thing named",
        "a",
        "Crow and mango tree are different living forms in one place — diversity. Toys and blank pages are not living examples.",
        "Which pair shows variety among living things?",
        "Non-living toys skip the living world.",
        {
          a: "You named diverse living examples.",
          b: "Plastic toys are not living organisms.",
          c: "You need a named living example.",
        },
      ),
      explainQ(
        "g6s-dv-p3",
        "Why does choosing one clear feature make grouping more useful than sorting by mood?",
        "A clear feature can be checked by others and applied the same way each time. Mood changes from person to person, so groups would not stay stable or scientific.",
        "Could a classmate apply your rule without guessing your feelings?",
        "Shared, observable features beat private moods for grouping.",
        ["feature|trait|observ|group|check|same|mood"],
      ),
    ],
    reasoning: [
      q(
        "g6s-dv-r1",
        "If insects vanish from a garden food chain, what careful prediction fits interdependence?",
        "Birds that rely on those insects for food may find less to eat and struggle",
        "Nothing else in the garden can ever be affected",
        "Soil and sunlight stop existing overnight for no linked reason",
        "a",
        "Links in a food chain mean one missing group can affect another. Claiming zero effect ignores interdependence.",
        "Who eats whom in that garden?",
        "Habitats stay connected through living and non-living parts.",
        {
          a: "You predicted a linked effect in the chain.",
          b: "Interdependence means effects can spread.",
          c: "Non-living parts remain; the living link still matters.",
        },
      ),
      explainQ(
        "g6s-dv-r2",
        "How can a behaviour help a living thing fit its place?",
        "A behaviour adaptation is an action that helps survival in a habitat — for example, birds nesting high to stay safer, or animals seeking shade in heat.",
        "What does the living thing do that matches its habitat?",
        "Behaviours are part of how diversity works in real places.",
        ["behav|adapt|habitat|nest|shade|surviv|fit"],
      ),
    ],
    retrieve: [
      q(
        "g6s-dv-t1",
        "Giving a grouping feature mainly means...",
        "naming a trait you can use to sort living things into sets",
        "listing every star in the night sky by nickname",
        "pretending all living things are identical forever",
        "a",
        "A grouping feature is a sorting trait. Star nicknames and denying diversity miss the skill.",
        "What do you use to make groups?",
        "Diversity exists; features help organise it.",
        {
          a: "You defined a grouping feature.",
          b: "Star nicknames are not living-world grouping here.",
          c: "Living things show many differences.",
        },
      ),
      writeQ(
        "g6s-dv-t2",
        "Write one grouping feature and name one diverse living example.",
        [
          "wing",
          "feather",
          "leaf",
          "water",
          "land",
          "root",
          "bird",
          "insect",
          "tree",
          "frog",
        ],
        "Example: Feature — has wings. Diverse example — a butterfly in the school garden.",
        "State a checkable trait, then name a real living thing.",
        "Saying ‘everything is the same so features do not matter’ skips both skills.",
        [
          "feature|wing|feather|leaf|habitat|water|land|root|stem|move",
          "bird|insect|tree|plant|frog|ant|crow|fish|example",
        ],
      ),
    ],
    misconceptions: [
      {
        idea: "Only animals count as diversity; plants do not.",
        correction:
          "Plants, animals, and other living forms all add diversity. A neem tree and a sparrow both belong in the living world.",
      },
      {
        idea: "Grouping is only about size — big versus small.",
        correction:
          "Size can be one feature, but habitat, body covering, movement, and food habits are useful features too.",
      },
    ],
    reflect: {
      prompt:
        "Which grouping feature would you try first in your neighbourhood — and which living thing would surprise someone else?",
      keyIdeas: ["group|feature|divers|living"],
    },
    mastery: q(
      "g6s-dv-m1",
      "Diversity in the Living World asks you to...",
      "give a grouping feature and name a diverse living example",
      "claim all living things are identical and unsortable",
      "ignore habitats and only memorise toy names",
      "a",
      "The chapter skills are grouping features and diverse examples from the living world.",
      "What two habits does this lesson practise?",
      "Denying diversity skips the living world.",
      {
        a: "You held both diversity skills.",
        b: "Living things differ and can be grouped.",
        c: "Habitats and living examples matter more than toys.",
      },
    ),
    masteryCriteria:
      "You can state one grouping feature and name one diverse living example that fits a clear sort.",
    teach: {
      prompt:
        "Teach Ivshi: one grouping feature and one diverse living example from a park or courtyard.",
      keyIdeas: ["feature|group", "divers|example|living"],
    },
  },
});

export const mindfulEatingLesson = grade6ScienceLesson({
  conceptId: "ncert-g6-curiosity-mindful-eating-core",
  title: "Mindful Eating",
  domainTitle: "Food",
  prerequisites: ["ncert-g6-curiosity-diversity-living-core"],
  nextConceptIds: ["ncert-g6-curiosity-exploring-magnets-core"],
  coveredSkillIds: [
    "ncert-g6-curiosity-mindful-eating-core-sk-1-name-a-food-group-idea",
    "ncert-g6-curiosity-mindful-eating-core-sk-2-choose-a-balanced-habit",
  ],
  content: {
    objective:
      "Name a food-group idea on a plate and choose one balanced habit that supports mindful eating.",
    wonder: {
      prompt:
        "If your lunch looked the same colour and texture every day for a month, what might your body miss — and what clue would tell you the plate needs more variety?",
    },
    explore: {
      text: "Mindful eating means noticing what you eat, how much, and how food fuels the body. Food-group ideas — grains for energy, dals and beans for building, fruits and vegetables for vitamins and fibre, milk or curd for calcium, a little oil or nuts for fats — help build a balanced plate. Digestion breaks food into usable pieces as it moves through the digestive system. Clean hands, washed produce, and steady meal times are habits that support health.",
      activity: {
        prompt:
          "You predict: ‘A lunch with rice, dal, and salad supports balance better than only fried snacks.’ Which check best tests that food-group idea?",
        choices: [
          {
            id: "plate-check",
            label:
              "List food-group ideas on each plate, then compare which plate includes more than one useful group",
            note: "You turned a prediction into a plate investigation using food-group ideas and balance.",
          },
          {
            id: "ignore-groups",
            label: "Refuse to name any food group and eat only by screen time",
            note: "Without food-group ideas, you cannot check balance thoughtfully.",
          },
          {
            id: "one-bite-rule",
            label: "Say one crisp counts as every food group forever",
            note: "One snack cannot stand in for grains, dals, fruits, and vegetables together.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A food-group idea is a useful category on the plate: cereals and millets for energy; pulses, eggs, or milk products for body-building; fruits and vegetables for protective nutrients; fats and oils in small amounts.",
        "A balanced habit mixes groups across the day, drinks enough water, and avoids making only sugary or deep-fried snacks the whole meal.",
        "Mindful eating also means slowing down enough to notice hunger and fullness, chewing well, and paying attention to what is on the plate instead of only screens.",
        "The digestive system — mouth, food pipe, stomach, and intestines — breaks food so nutrients can be used. Balanced choices give that system a variety of materials to work with.",
        "Preventing illness links to habits too: washing hands before meals, rinsing fruits, and keeping drinking water clean support mindful care of the body.",
      ],
    },
    examples: [
      {
        caption: "Food-group idea",
        body: "Roti (grain) with rajma (pulse) and cucumber (vegetable) names three food-group ideas on one plate.",
      },
      {
        caption: "Balanced habit",
        body: "Packing fruit with a snack instead of only chips adds a protective food-group idea.",
      },
      {
        caption: "Digestion link",
        body: "Chewing a bite of banana well helps digestion begin in the mouth before food reaches the stomach.",
      },
    ],
    connection:
      "When you can name what is on your plate by food-group idea, you are practising mindful science for everyday life.",
    try: {
      prompt:
        "Name one food-group idea from a meal you know. Then choose one balanced habit you can try tomorrow.",
      reveal:
        "Example: Food-group idea — green vegetables on the side. Balanced habit — drink water with lunch and add one fruit.",
    },
    practice: [
      q(
        "g6s-me-p1",
        "Which names a clear food-group idea?",
        "dal or beans as a body-building pulse group",
        "only the colour of the plate with no food named",
        "a plastic wrapper counted as dinner",
        "a",
        "Pulses are a useful food-group idea. Empty colours and wrappers are not nutritious groups.",
        "Which answer points to a real food category?",
        "Plates and wrappers are not food-group ideas.",
        {
          a: "You named a food-group idea.",
          b: "Colour alone is not a food group.",
          c: "Wrappers are not food groups.",
        },
      ),
      q(
        "g6s-me-p2",
        "Which chooses a balanced habit?",
        "including fruit or vegetables with meals across the day",
        "replacing every meal with only sugary drinks",
        "skipping handwashing before every shared snack",
        "a",
        "Fruits and vegetables support balance. Only sugary drinks and skipped handwashing work against mindful care.",
        "Which habit supports a varied, careful plate?",
        "Sugar-only days and dirty hands are not balanced habits.",
        {
          a: "You chose a balanced habit.",
          b: "Sugary drinks alone skip food groups.",
          c: "Clean hands support mindful eating.",
        },
      ),
      explainQ(
        "g6s-me-p3",
        "Why does naming food-group ideas help you build a balanced plate?",
        "Food-group ideas remind you to include energy foods, building foods, and protective fruits or vegetables instead of repeating only one kind of snack.",
        "What is missing if the plate is only one type of food?",
        "Variety across groups is the point of balance.",
        ["food group|grain|pulse|fruit|veget|balance|variet"],
      ),
    ],
    reasoning: [
      q(
        "g6s-me-r1",
        "A classmate says chips alone equal a full balanced plate. What reasoning answers gently?",
        "Chips may supply some energy but miss pulse, fruit, and vegetable group ideas a balanced plate needs",
        "Agree that one fried snack covers every food-group idea",
        "Say the digestive system never uses any food",
        "a",
        "Balance means more than one food-group idea. Digestion still uses food — variety helps the body more.",
        "Which groups are missing from chips-only?",
        "One snack cannot replace every group.",
        {
          a: "You explained missing food-group ideas.",
          b: "One snack does not cover all groups.",
          c: "Digestion uses the food you eat.",
        },
      ),
      explainQ(
        "g6s-me-r2",
        "How does washing hands before eating connect to mindful habits?",
        "Clean hands help keep germs off food before it enters the digestive system, supporting health along with balanced choices.",
        "What can travel from unwashed hands onto a shared snack?",
        "Mindful eating includes care before the first bite.",
        ["wash|hand|germ|clean|health|food|habit"],
      ),
    ],
    retrieve: [
      q(
        "g6s-me-t1",
        "Naming a food-group idea mainly means...",
        "pointing to a useful category on the plate such as grains, pulses, or vegetables",
        "listing every brand logo in a shop",
        "pretending plates fill themselves with no food kinds",
        "a",
        "Food-group ideas are categories of nourishment. Logos and magic plates skip the skill.",
        "What kind of category are you naming?",
        "Brands and empty plates are not food-group ideas.",
        {
          a: "You defined a food-group idea.",
          b: "Brand logos are not food groups.",
          c: "Food kinds matter on a real plate.",
        },
      ),
      writeQ(
        "g6s-me-t2",
        "Name one food-group idea and one balanced habit.",
        [
          "grain",
          "dal",
          "pulse",
          "fruit",
          "vegetable",
          "milk",
          "water",
          "wash",
          "roti",
          "salad",
        ],
        "Example: Food-group idea — leafy vegetables. Balanced habit — add salad to lunch and wash hands first.",
        "Name a food category, then a habit that supports balance or care.",
        "Saying ‘only sugar forever’ skips both skills.",
        [
          "grain|cereal|dal|pulse|fruit|veget|milk|curd|roti|rice",
          "balance|water|wash|fruit|veget|habit|variet|hand",
        ],
      ),
    ],
    misconceptions: [
      {
        idea: "Only expensive foods can be balanced.",
        correction:
          "Local grains, dals, seasonal fruits, and vegetables can build balance without costly packaging.",
      },
      {
        idea: "Mindful eating means never enjoying snacks.",
        correction:
          "Snacks can fit when the day still includes food-group variety and care — mindfulness is noticing, not banning joy.",
      },
    ],
    reflect: {
      prompt:
        "Which balanced habit feels realistic for you this week — and which food-group idea will you watch for on your plate?",
      keyIdeas: ["food|group|balance|habit"],
    },
    mastery: q(
      "g6s-me-m1",
      "Mindful Eating asks you to...",
      "name a food-group idea and choose a balanced habit",
      "eat only one snack type and ignore groups forever",
      "skip noticing what is on the plate",
      "a",
      "The chapter skills are food-group ideas and balanced habits.",
      "What two habits does this lesson practise?",
      "Ignoring groups skips mindful eating.",
      {
        a: "You held both mindful-eating skills.",
        b: "Variety across groups supports balance.",
        c: "Noticing the plate is part of the skill.",
      },
    ),
    masteryCriteria:
      "You can name one food-group idea and describe one balanced habit you could use in a real day.",
    teach: {
      prompt:
        "Teach Ivshi: one food-group idea and one balanced habit a younger child could try.",
      keyIdeas: ["food group", "balance|habit"],
    },
  },
});

export const exploringMagnetsLesson = grade6ScienceLesson({
  conceptId: "ncert-g6-curiosity-exploring-magnets-core",
  title: "Exploring Magnets",
  domainTitle: "Magnets",
  prerequisites: ["ncert-g6-curiosity-mindful-eating-core"],
  nextConceptIds: ["ncert-g6-curiosity-measurement-length-motion-core"],
  coveredSkillIds: [
    "ncert-g6-curiosity-exploring-magnets-core-sk-1-name-the-poles",
    "ncert-g6-curiosity-exploring-magnets-core-sk-2-test-attraction",
  ],
  content: {
    objective:
      "Name a magnet’s poles and test which objects a magnet attracts.",
    wonder: {
      prompt:
        "A bar magnet sits on the desk. If you bring another magnet near one end, sometimes it pulls and sometimes it pushes. What question about poles could a careful test answer?",
    },
    explore: {
      text: "Magnets have two poles — usually called north and south. Unlike poles attract; like poles repel. Magnets attract some materials (often iron, nickel, cobalt, and many steels) but not others (such as wood, plastic, or rubber). Exploring means predicting, then testing attraction with a fair, gentle check and recording what happens.",
      activity: {
        prompt:
          "You predict: ‘The magnet will attract an iron nail but not a rubber eraser.’ Which plan best tests that idea?",
        choices: [
          {
            id: "attraction-test",
            label:
              "Bring the same magnet near the nail and the eraser, one at a time, and observe which object moves or sticks",
            note: "You tested attraction with a clear prediction and two observations — investigative magnet science.",
          },
          {
            id: "no-look",
            label: "Declare the answer without bringing the magnet near either object",
            note: "Attraction must be tested. Skipping the check leaves no evidence.",
          },
          {
            id: "smash-test",
            label: "Hit both objects with a hammer and ignore the magnet completely",
            note: "Hammering skips the magnet test and does not reveal poles or attraction.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Every magnet has two poles. On many bar magnets the ends are marked N (north) and S (south). You cannot have a single-pole magnet in ordinary classroom experience — poles come in pairs.",
        "Unlike poles attract: north near south pulls together. Like poles repel: north near north, or south near south, pushes apart. That push–pull is a clue you are near the poles.",
        "Testing attraction means bringing a magnet near an object and observing whether it sticks or moves toward the magnet. Iron nails and steel paper clips often attract; plastic buttons and wooden sticks usually do not.",
        "Keep tests fair: use the same magnet, similar distances, and gentle hands. Record what you see. A compass needle is a tiny magnet that lines up with Earth’s magnetic field — another everyday clue that poles matter.",
        "Magnets are useful in lids, bag clasps, and motors, but classroom care matters: keep magnets away from phones and cards that can be damaged, and do not force poles together roughly.",
      ],
    },
    examples: [
      {
        caption: "Naming poles",
        body: "On a labelled bar magnet, one end is north and the other is south — the two poles.",
      },
      {
        caption: "Attraction test",
        body: "A steel pin jumps to the magnet; a plastic bead stays still. That is evidence of attraction to some materials only.",
      },
      {
        caption: "Unlike poles",
        body: "When N faces S, the magnets pull together; when N faces N, they push apart.",
      },
    ],
    connection:
      "Whenever a fridge note clings to a metal door, you are seeing magnetic attraction at work in daily life.",
    try: {
      prompt:
        "Name the two poles of a magnet. Then describe one attraction test you could try with a safe object at home or school.",
      reveal:
        "Example: Poles — north and south. Test — bring a fridge magnet near a steel pin and near a rubber band; note which one sticks.",
    },
    practice: [
      q(
        "g6s-mg-p1",
        "What are the two poles of a magnet called?",
        "north and south",
        "east and west only, with no magnetic meaning",
        "up and down with no pole names",
        "a",
        "Magnets have north and south poles. East–west labels and vague up–down skip the magnetic pole names.",
        "Which pair names magnet poles?",
        "Compass directions for maps are not the pole names used for magnets here.",
        {
          a: "You named the poles.",
          b: "East and west are not the magnet pole names.",
          c: "Poles are named north and south.",
        },
      ),
      q(
        "g6s-mg-p2",
        "Which plan tests attraction fairly?",
        "bring the magnet near an iron nail and near a wooden stick, then observe which moves or sticks",
        "never bring the magnet near any object",
        "only shout ‘stick!’ without watching",
        "a",
        "A fair attraction test compares objects while you observe. Skipping the magnet or only shouting gives no evidence.",
        "How do you check what a magnet pulls?",
        "Tests need the magnet and your eyes.",
        {
          a: "You chose a clear attraction test.",
          b: "No approach means no test.",
          c: "Watching matters more than shouting.",
        },
      ),
      explainQ(
        "g6s-mg-p3",
        "Why do unlike poles attract while like poles push apart?",
        "A magnet’s north and south ends behave differently: opposite poles pull toward each other, and matching poles push away. That is how magnetic poles interact.",
        "What happens when N meets S, compared with N meeting N?",
        "Pole pairs explain pull and push.",
        ["pole|north|south|attract|repel|unlike|like|push|pull"],
      ),
    ],
    reasoning: [
      q(
        "g6s-mg-r1",
        "A plastic spoon does not stick to a magnet. What careful conclusion fits?",
        "This magnet does not attract that plastic spoon under the test conditions",
        "All materials in the universe must stick to every magnet",
        "Poles stop existing when plastic is nearby",
        "a",
        "Evidence shows no attraction for that spoon. Magnets still have poles; they simply do not attract every material.",
        "What did the attraction test show?",
        "Poles remain; materials differ.",
        {
          a: "You matched the conclusion to the observation.",
          b: "Not all materials are magnetic.",
          c: "Poles still exist on the magnet.",
        },
      ),
      explainQ(
        "g6s-mg-r2",
        "How would you test whether a paper clip is attracted to a magnet?",
        "Bring the magnet near the paper clip without throwing it, observe whether the clip moves or sticks, and record the result as evidence.",
        "What do you watch for when the magnet approaches?",
        "Attraction tests are gentle observations, not guesses from far away.",
        ["magnet|clip|bring|near|stick|move|observ|test"],
      ),
    ],
    retrieve: [
      q(
        "g6s-mg-t1",
        "Naming the poles mainly means...",
        "saying a magnet has a north pole and a south pole",
        "listing every colour of the rainbow as a pole",
        "pretending magnets have no ends that behave differently",
        "a",
        "Poles are north and south. Rainbow colours and denying pole behaviour skip the skill.",
        "What two names do magnet ends use?",
        "Magnets show pole behaviour at their ends.",
        {
          a: "You named the poles.",
          b: "Colours are not pole names.",
          c: "Poles matter for pull and push.",
        },
      ),
      writeQ(
        "g6s-mg-t2",
        "Name the magnet poles and describe one attraction test.",
        [
          "north",
          "south",
          "pole",
          "iron",
          "nail",
          "steel",
          "attract",
          "stick",
          "plastic",
          "wood",
        ],
        "Example: Poles — north and south. Test — bring a magnet near an iron nail and near plastic; see which sticks.",
        "Name N and S, then say how you would check attraction.",
        "Saying ‘magnets attract everything always’ skips careful testing.",
        [
          "north|south|pole",
          "attract|stick|nail|iron|steel|test|bring|near",
        ],
      ),
    ],
    misconceptions: [
      {
        idea: "All metals are attracted to magnets.",
        correction:
          "Many steels and iron objects attract, but metals such as copper or aluminium often do not stick to a common bar magnet.",
      },
      {
        idea: "A magnet can have only a north pole.",
        correction:
          "Ordinary magnets show two poles together — north and south. Breaking a magnet still yields pieces with both kinds of ends.",
      },
    ],
    reflect: {
      prompt:
        "Which part felt clearer — naming poles, or testing attraction — and what would you try next with a magnet?",
      keyIdeas: ["pole|attract|magnet|test"],
    },
    mastery: q(
      "g6s-mg-m1",
      "Exploring Magnets asks you to...",
      "name the poles and test attraction",
      "claim magnets never pull anything",
      "ignore poles and skip all tests",
      "a",
      "The chapter skills are naming poles and testing attraction.",
      "What two magnet habits does this lesson practise?",
      "Skipping poles and tests misses the chapter.",
      {
        a: "You held both magnet skills.",
        b: "Magnets do attract some materials.",
        c: "Poles and tests belong together.",
      },
    ),
    masteryCriteria:
      "You can name north and south poles and describe one attraction test with a clear observation plan.",
    teach: {
      prompt:
        "Teach Ivshi: the names of magnet poles and one simple attraction test using safe objects.",
      keyIdeas: ["north|south|pole", "attract|test"],
    },
  },
});

export const measurementLengthMotionLesson = grade6ScienceLesson({
  conceptId: "ncert-g6-curiosity-measurement-length-motion-core",
  title: "Measurement of Length and Motion",
  domainTitle: "Measurement",
  prerequisites: ["ncert-g6-curiosity-exploring-magnets-core"],
  nextConceptIds: ["ncert-g6-curiosity-materials-around-us-core"],
  coveredSkillIds: [
    "ncert-g6-curiosity-measurement-length-motion-core-sk-1-measure-a-length",
    "ncert-g6-curiosity-measurement-length-motion-core-sk-2-describe-a-motion",
  ],
  content: {
    objective:
      "Measure a length with care and describe a motion in clear everyday science language.",
    wonder: {
      prompt:
        "Two friends pace the same corridor. Their foot-counts disagree. What would a shared measuring tool change about the argument — and how would you describe each friend’s motion along the floor?",
    },
    explore: {
      text: "Length is measured with agreed units and tools — a metre scale, measuring tape, or ruler — placed carefully from one end to the other. Motion is a change of position with time: straight along a path, back and forth, circular, or speeding up and slowing down. Friction can slow motion or wear surfaces; simple machines such as levers, ramps, pulleys, and wheels help move loads. Mass is how much matter an object has; weight is the pull of gravity on that mass in everyday language.",
      activity: {
        prompt:
          "You predict: ‘A metre scale will give a fairer corridor length than mismatched footsteps.’ Which plan best tests that idea?",
        choices: [
          {
            id: "scale-measure",
            label:
              "Lay a metre scale end to end along the same line, count whole metres and leftover centimetres, and record the total",
            note: "You measured length with a shared tool and a clear record — investigation over argument.",
          },
          {
            id: "guess-shout",
            label: "Shout a number without placing any scale on the floor",
            note: "Measurement needs a tool and a careful placement, not only a loud guess.",
          },
          {
            id: "move-target",
            label: "Measure different zigzag paths each time and compare the numbers as if they match",
            note: "Changing the path breaks the fair comparison. Keep the line the same when you remeasure.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "To measure length, align the scale with the object, start from the zero mark when you can, keep the scale straight, and read the mark at the other end. Record the number with its unit (cm or m).",
        "Standard units help people agree. Hand spans and footsteps vary from person to person; metres and centimetres stay shared.",
        "Motion means position changes with time. A child walking straight down a hall shows rectilinear motion along a path. A swing moves back and forth. A ceiling fan blade follows a circular path. Describing motion means saying how position changes — not only that ‘it moved.’",
        "Friction between surfaces can slow a sliding book or wear shoe soles. Sometimes friction helps (grippy shoes); sometimes it is a problem (extra heat or wear).",
        "Levers, ramps, pulleys, and wheels are simple machines that help change force or direction when moving a load. Measuring length and describing motion often appear together when you study how things move across a distance.",
      ],
    },
    examples: [
      {
        caption: "Measuring length",
        body: "A pencil from tip to end reads 18 cm on a ruler when zero is aligned carefully.",
      },
      {
        caption: "Describing motion",
        body: "A marble rolls in a straight line along a smooth desk until friction slows it near the edge.",
      },
      {
        caption: "Simple machine clue",
        body: "A see-saw is a lever: a long board that helps lift a load when force is applied on the other side.",
      },
    ],
    connection:
      "Sports tracks, tailor shops, and bus routes all depend on agreed lengths and clear descriptions of how things move.",
    try: {
      prompt:
        "Measure one small object with a ruler and record the length with a unit. Then describe one motion you see today in a short sentence.",
      reveal:
        "Example: Length — notebook width 21 cm. Motion — the ceiling fan blades turn in a circular path while the switch is on.",
    },
    practice: [
      q(
        "g6s-mm-p1",
        "Which action measures a length carefully?",
        "align a ruler from one end to the other and read the mark with its unit",
        "wave the ruler in the air and invent a number",
        "refuse units and only say ‘longish’",
        "a",
        "Careful alignment and units make a measurement. Invented numbers and vague words skip the skill.",
        "How do you get a length others can check?",
        "Shared units and placement matter.",
        {
          a: "You chose a careful length measurement.",
          b: "Waving skips alignment.",
          c: "Units make lengths shareable.",
        },
      ),
      q(
        "g6s-mm-p2",
        "Which sentence describes a motion clearly?",
        "the toy car rolls in a straight line along the floor until it slows",
        "the toy car has a favourite colour only",
        "nothing ever changes position anywhere",
        "a",
        "Describing motion states how position changes with time. Colour alone and denying motion miss the skill.",
        "What changes when something is in motion?",
        "Position changes are the heart of motion descriptions.",
        {
          a: "You described a motion clearly.",
          b: "Colour is not a motion description.",
          c: "Motion means position can change.",
        },
      ),
      explainQ(
        "g6s-mm-p3",
        "Why are standard units better than only using footsteps for classroom length?",
        "Footsteps differ from person to person, so totals disagree. Metres and centimetres are shared units that let everyone compare the same measurement.",
        "What happens when two people have different stride lengths?",
        "Shared units settle arguments about length.",
        ["unit|metre|meter|centimet|foot|step|standard|agree|compar"],
      ),
    ],
    reasoning: [
      q(
        "g6s-mm-r1",
        "A book slides and then stops on a rough mat. What reasoning fits friction?",
        "Friction between book and mat slowed the motion and helped bring it to rest",
        "Friction never acts on sliding objects",
        "The book stopped because length cannot be measured on Earth",
        "a",
        "Rough contact often slows sliding motion. Friction is real; length measurement still works on Earth.",
        "What force between surfaces can slow a slide?",
        "Friction and measurement are different ideas — both can be true.",
        {
          a: "You linked friction to slowing motion.",
          b: "Friction often acts during sliding.",
          c: "Length can still be measured.",
        },
      ),
      explainQ(
        "g6s-mm-r2",
        "How is a lever an example of a simple machine that helps motion of a load?",
        "A lever uses a rigid bar and a turn point so a smaller effort can move a load — like a see-saw or a crowbar lifting a box edge.",
        "Where is the load, and where do you push?",
        "Simple machines change how force moves things.",
        ["lever|load|force|see-saw|seesaw|bar|machine|lift"],
      ),
    ],
    retrieve: [
      q(
        "g6s-mm-t1",
        "Measuring a length mainly means...",
        "using a scale or tape with units to find how long something is",
        "only guessing while the tool stays in the bag",
        "describing emotions instead of size",
        "a",
        "Length measurement uses tools and units. Guessing and emotions skip the skill.",
        "What do you use to find how long?",
        "Tools and units beat pure guesses.",
        {
          a: "You defined length measurement.",
          b: "The tool must be used.",
          c: "Length is about size, not feelings.",
        },
      ),
      writeQ(
        "g6s-mm-t2",
        "Write one measured length with a unit and one short description of a motion.",
        [
          "cm",
          "m",
          "metre",
          "meter",
          "ruler",
          "roll",
          "straight",
          "circular",
          "swing",
          "walk",
        ],
        "Example: Length — desk edge 1.2 m. Motion — a swing moves back and forth.",
        "Include a number with a unit, then say how something’s position changes.",
        "Saying ‘measurement is impossible’ skips both skills.",
        [
          "cm|m|metre|meter|length|ruler|tape|measure",
          "motion|roll|straight|circular|swing|walk|move|path",
        ],
      ),
    ],
    misconceptions: [
      {
        idea: "Any number shouted is a measurement.",
        correction:
          "A measurement needs a tool, careful placement, and a unit — not only a loud guess.",
      },
      {
        idea: "Motion only means running fast.",
        correction:
          "Slow walking, swinging, and turning in a circle are motions too — any change of position with time.",
      },
    ],
    reflect: {
      prompt:
        "Where will you practise careful measuring this week — and which motion around you is easiest to describe?",
      keyIdeas: ["measure|length|motion|unit"],
    },
    mastery: q(
      "g6s-mm-m1",
      "Measurement of Length and Motion asks you to...",
      "measure a length and describe a motion",
      "avoid units and never notice movement",
      "only memorise tool names without using them",
      "a",
      "The chapter skills are measuring length and describing motion.",
      "What two habits does this lesson practise?",
      "Unused tools skip measurement.",
      {
        a: "You held both measurement skills.",
        b: "Units and motion descriptions matter.",
        c: "Using tools beats only naming them.",
      },
    ),
    masteryCriteria:
      "You can record one length with a unit from a careful measure and describe one real motion clearly.",
    teach: {
      prompt:
        "Teach Ivshi: how to measure a short length with a ruler, and describe one motion you both can watch.",
      keyIdeas: ["measure|ruler|unit", "motion|path"],
    },
  },
});

export const materialsAroundUsLesson = grade6ScienceLesson({
  conceptId: "ncert-g6-curiosity-materials-around-us-core",
  title: "Materials Around Us",
  domainTitle: "Materials",
  prerequisites: ["ncert-g6-curiosity-measurement-length-motion-core"],
  nextConceptIds: ["ncert-g6-curiosity-temperature-measurement-core"],
  coveredSkillIds: [
    "ncert-g6-curiosity-materials-around-us-core-sk-1-sort-by-a-property",
    "ncert-g6-curiosity-materials-around-us-core-sk-2-name-a-material",
  ],
  content: {
    objective:
      "Sort everyday objects by a material property and name a material used in daily life.",
    wonder: {
      prompt:
        "A metal spoon, a glass tumbler, and a wooden pencil sit on a table. If you could sort them by one property — hardness, transparency, or what happens in water — which property would you choose first, and why?",
    },
    explore: {
      text: "Materials are the stuff objects are made of — wood, metal, glass, plastic, rubber, cloth, clay. Properties help us sort and choose: hard or soft, transparent or opaque, soluble or insoluble, shiny or dull. Some mixtures look clear (solutions); others look cloudy (suspensions). Some changes reverse easily (melting ice); others do not (cooking an egg). Investigating materials means predicting a property, then testing gently and recording what you observe.",
      activity: {
        prompt:
          "You predict: ‘Glass is transparent; wood is opaque.’ Which plan best tests that sorting property?",
        choices: [
          {
            id: "property-test",
            label:
              "Hold each sample up to a window, observe whether you can see shapes through it, and sort into transparent vs opaque",
            note: "You tested a property with a prediction and clear observations — materials investigation.",
          },
          {
            id: "no-test",
            label: "Sort by guessing favourite brands without looking through anything",
            note: "Properties need a check. Brand favourites are not transparency tests.",
          },
          {
            id: "crush-all",
            label: "Crush every sample to powder so you cannot tell them apart anymore",
            note: "Destroying samples hides the property you meant to observe.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "Naming a material means saying what something is made of: a steel spoon, a cotton shirt, a clay pot, a plastic bottle.",
        "Sorting by a property means choosing one trait — hardness, transparency, solubility in water, ability to float — and grouping objects that share it.",
        "Transparency: glass windows let light and shapes through; cardboard usually does not. Hardness: a metal key scratches chalk more easily than chalk scratches the key.",
        "Mixtures: sugar stirred into water can form a clear solution; chalk powder in water often stays cloudy as a suspension. Observing clarity is one investigation clue.",
        "Changes: ice melting into water can freeze back (reversible). Burning paper or cooking dough brings changes that do not undo easily (irreversible). Knowing materials and properties helps explain those everyday changes.",
      ],
    },
    examples: [
      {
        caption: "Naming a material",
        body: "A window pane is mainly glass; a desk may be wood; a coin may be metal.",
      },
      {
        caption: "Sorting by property",
        body: "Property: floats on water. Cork and some plastics float; a steel nail sinks.",
      },
      {
        caption: "Solution vs suspension",
        body: "Salt water can look clear; muddy water looks cloudy — different mixture appearances.",
      },
    ],
    connection:
      "Builders, cooks, and designers choose materials because properties match the job — strong, clear, soft, or waterproof.",
    try: {
      prompt:
        "Name one material from an object near you. Then sort two objects by one property and say which group each joins.",
      reveal:
        "Example: Material — rubber in an eraser. Property — soft vs hard: eraser (softer group), steel key (harder group).",
    },
    practice: [
      q(
        "g6s-ma-p1",
        "Which sorts objects by a clear property?",
        "group by whether you can see through them (transparent vs opaque)",
        "group only by who shouted first",
        "refuse any property and mix everything randomly",
        "a",
        "Transparency is a checkable property. Shouting order and random piles skip sorting by property.",
        "Which rule could another person apply by looking?",
        "Properties beat random or social rules for materials science.",
        {
          a: "You sorted by a material property.",
          b: "Shouting order is not a material property.",
          c: "Sorting needs a stated property.",
        },
      ),
      q(
        "g6s-ma-p2",
        "Which names a material?",
        "wood in a pencil body",
        "a mysterious glow with no substance named",
        "only the word ‘thing’ with no material",
        "a",
        "Wood is a material name. Vague glows and empty ‘thing’ skip naming the material.",
        "What is the object made of?",
        "Materials have names you can say.",
        {
          a: "You named a material.",
          b: "You still need a material name.",
          c: "‘Thing’ is too vague.",
        },
      ),
      explainQ(
        "g6s-ma-p3",
        "Why does sorting by one property at a time help you study materials?",
        "One property keeps the groups clear and fair. If you mix hardness, colour, and favourite brands in one sort, the groups stop meaning one scientific idea.",
        "What gets confusing if every rule changes mid-sort?",
        "Single-property sorts make comparisons honest.",
        ["propert|sort|group|one|fair|material|compar"],
      ),
    ],
    reasoning: [
      q(
        "g6s-ma-r1",
        "Sugar disappears into water and the liquid looks clear. What careful materials idea fits?",
        "Sugar and water formed a solution that looks clear",
        "The sugar must have left the room through the ceiling",
        "Clear liquids can never hold dissolved material",
        "a",
        "A clear appearance can still mean a solution. Sugar did not need to vanish from the room — it mixed in.",
        "What do we call a clear mixture of dissolved substance and water?",
        "Solutions can look clear and still contain dissolved material.",
        {
          a: "You recognised a solution.",
          b: "Dissolved sugar stays in the liquid.",
          c: "Clarity does not mean emptiness.",
        },
      ),
      explainQ(
        "g6s-ma-r2",
        "How is melting ice different from burning paper as a change?",
        "Melting ice can freeze back — a reversible change. Burning paper makes ash and smoke that do not become the original paper easily — an irreversible change.",
        "Which change can go back more easily?",
        "Reversible and irreversible changes both involve materials.",
        ["melt|freez|revers|burn|ash|irrevers|change"],
      ),
    ],
    retrieve: [
      q(
        "g6s-ma-t1",
        "Sorting by a property mainly means...",
        "grouping objects that share a checkable trait such as hard/soft or transparent/opaque",
        "piling objects by whoever arrived last",
        "refusing to name any trait at all",
        "a",
        "Properties are checkable traits for sorting. Arrival order and refusal skip the skill.",
        "What do the objects in a group share?",
        "Traits of materials drive the sort.",
        {
          a: "You defined sorting by property.",
          b: "Arrival time is not a material property.",
          c: "You need a named trait.",
        },
      ),
      writeQ(
        "g6s-ma-t2",
        "Name one material and one property you could use to sort objects.",
        [
          "wood",
          "metal",
          "glass",
          "plastic",
          "rubber",
          "hard",
          "soft",
          "transparent",
          "opaque",
          "float",
        ],
        "Example: Material — glass. Property for sorting — transparent versus opaque.",
        "Say what something is made of, then name a sorting trait.",
        "Saying ‘materials have no properties’ skips both skills.",
        [
          "wood|metal|glass|plastic|rubber|cloth|clay|steel",
          "hard|soft|transparent|opaque|float|sink|shiny|propert",
        ],
      ),
    ],
    misconceptions: [
      {
        idea: "All shiny things are the same material.",
        correction:
          "Metal, some plastics, and coated paper can all look shiny. Naming the material still matters.",
      },
      {
        idea: "If you cannot see a dissolved substance, it is gone.",
        correction:
          "In a solution the substance can still be present even when the liquid looks clear — taste or evaporation can reveal it later.",
      },
    ],
    reflect: {
      prompt:
        "Which property will you use to sort objects at home this week — and which material name feels most useful to practise?",
      keyIdeas: ["material|propert|sort"],
    },
    mastery: q(
      "g6s-ma-m1",
      "Materials Around Us asks you to...",
      "sort by a property and name a material",
      "claim every object is property-free forever",
      "never say what something is made of",
      "a",
      "The chapter skills are sorting by property and naming materials.",
      "What two habits does this lesson practise?",
      "Ignoring properties skips materials science.",
      {
        a: "You held both materials skills.",
        b: "Objects have properties you can check.",
        c: "Material names matter in daily life.",
      },
    ),
    masteryCriteria:
      "You can name one everyday material and sort at least two objects using one clear property.",
    teach: {
      prompt:
        "Teach Ivshi: one material name and one property sort using objects you can both imagine on a desk.",
      keyIdeas: ["material", "propert|sort"],
    },
  },
});
