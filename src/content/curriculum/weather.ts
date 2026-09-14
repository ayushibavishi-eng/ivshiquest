import type {
  CurriculumConcept,
  CurriculumExperience,
  CurriculumGrade,
  CurriculumSkill,
  CurriculumWorld,
} from "@/domain/curriculum";
import { DEFAULT_CURRICULUM_ID } from "@/domain/curriculum";

const GRADES: CurriculumGrade[] = [4, 5, 6];

function skill(
  id: string,
  parentId: string,
  title: string,
  grades: CurriculumGrade[] = GRADES,
): CurriculumSkill {
  return {
    id,
    title,
    subjectId: "science",
    parentId,
    grades,
    kind: "skill",
  };
}

function concept(input: {
  id: string;
  title: string;
  hook: string;
  goal: string;
  category?: string;
  grades?: CurriculumGrade[];
  prerequisites?: string[];
  skills: CurriculumSkill[];
  experience: CurriculumExperience;
}): CurriculumConcept {
  return {
    id: input.id,
    title: input.title,
    subjectId: "science",
    parentId: "weather",
    grades: input.grades ?? GRADES,
    kind: "concept",
    category: input.category ?? "weather",
    hook: input.hook,
    goal: input.goal,
    explainer: input.experience.explore.text,
    skills: input.skills,
    objectives: input.skills.map((item) => item.title),
    prerequisites: input.prerequisites,
    experience: input.experience,
  };
}

const whatIsWeather = concept({
  id: "weather-what-is-weather",
  title: "What Is Weather?",
  hook: "What is happening in the sky around us right now?",
  goal: "Name the main ingredients of weather and notice them outside.",
  skills: [
    skill("weather-skill-name-conditions", "weather-what-is-weather", "Name weather conditions"),
    skill("weather-skill-observe-today", "weather-what-is-weather", "Observe today's weather"),
  ],
  experience: {
    wonder: {
      prompt:
        "Look out a window. If a friend far away asked 'What's the weather there?', what would you tell them first?",
    },
    explore: {
      text: "Weather is the mix of conditions in the air around you right now — how warm it feels, how the air is moving, how wet or dry it is, and what the sky looks like. Weather can change in an hour. Climate is the usual pattern of weather over many years.",
    },
    understand: {
      text: "Scientists watch a few big ingredients: temperature, wind, humidity, clouds, and precipitation (rain, snow, or hail). Together they tell the story of today. Tomorrow may tell a different story.",
    },
    try: {
      prompt: "Which of these is weather, not climate?",
      note: "Weather is what is happening now. Climate is the usual pattern over years.",
    },
    practice: [
      {
        id: "ww-q1",
        prompt: "Weather describes...",
        choices: [
          { id: "ww-q1-a", letter: "A", text: "what the air is like right now" },
          { id: "ww-q1-b", letter: "B", text: "the average weather of a whole century only" },
          { id: "ww-q1-c", letter: "C", text: "only whether it is raining" },
        ],
        correctChoiceId: "ww-q1-a",
        explanation: "Weather is today's mix of temperature, wind, humidity, clouds, and rain or snow.",
      },
      {
        id: "ww-q2",
        prompt: "Which is an ingredient of weather?",
        choices: [
          { id: "ww-q2-a", letter: "A", text: "The name of your city" },
          { id: "ww-q2-b", letter: "B", text: "Wind" },
          { id: "ww-q2-c", letter: "C", text: "The day of the week" },
        ],
        correctChoiceId: "ww-q2-b",
        explanation: "Wind is one of the main weather ingredients, along with temperature, humidity, and clouds.",
      },
    ],
    reflect: {
      prompt: "In your own words, what is weather?",
    },
    mastery: {
      id: "ww-m1",
      prompt: "A sunny, breezy, dry afternoon is an example of...",
      choices: [
        { id: "ww-m1-a", letter: "A", text: "today's weather" },
        { id: "ww-m1-b", letter: "B", text: "a mountain" },
        { id: "ww-m1-c", letter: "C", text: "the Earth's core" },
      ],
      correctChoiceId: "ww-m1-a",
      explanation: "Sunshine, breeze, and dry air together describe the weather of that afternoon.",
    },
  },
});

const temperature = concept({
  id: "weather-temperature",
  title: "Temperature",
  hook: "Why does a metal slide feel hotter than the grass on the same sunny day?",
  goal: "Explain what temperature measures and why some things heat up faster.",
  prerequisites: ["weather-what-is-weather"],
  skills: [
    skill("weather-skill-read-temperature", "weather-temperature", "Read hot and cold"),
    skill("weather-skill-compare-surfaces", "weather-temperature", "Compare how surfaces warm"),
  ],
  experience: {
    wonder: {
      prompt:
        "Why does a metal slide feel hotter than the grass on the same sunny day?",
    },
    explore: {
      text: "Temperature tells how warm or cool something is. The Sun warms metal, pavement, grass, and air — but not at the same speed.",
    },
    understand: {
      text: "Heat is energy on the move. Metal often keeps that energy near the surface, so a slide can feel burning. Grass holds water, so it stays cooler. A weather report usually means the air.",
    },
    try: {
      prompt: "If you stand on dark pavement and on grass at noon, which will usually feel warmer on your feet?",
      note: "Dark, hard surfaces often absorb more of the Sun's energy.",
    },
    practice: [
      {
        id: "wt-q1",
        prompt: "Temperature tells us...",
        choices: [
          { id: "wt-q1-a", letter: "A", text: "how fast the wind is blowing" },
          { id: "wt-q1-b", letter: "B", text: "how warm or cool something is" },
          { id: "wt-q1-c", letter: "C", text: "how many clouds are in the sky" },
        ],
        correctChoiceId: "wt-q1-b",
        explanation: "Temperature is a measure of how warm or cool air or an object is.",
      },
      {
        id: "wt-q2",
        prompt: "Why might a metal slide feel hotter than grass in the same sun?",
        choices: [
          { id: "wt-q2-a", letter: "A", text: "Metal often heats up faster in sunlight" },
          { id: "wt-q2-b", letter: "B", text: "Grass is always in shadow" },
          { id: "wt-q2-c", letter: "C", text: "Metal makes its own sunlight" },
        ],
        correctChoiceId: "wt-q2-a",
        explanation: "The Sun warms both, but metal can heat quickly while grassy, watery surfaces stay cooler.",
      },
      {
        id: "wt-q3",
        prompt: "A weather report saying 32°C is talking about...",
        choices: [
          { id: "wt-q3-a", letter: "A", text: "how humid the ocean is" },
          { id: "wt-q3-b", letter: "B", text: "how warm the air is" },
          { id: "wt-q3-c", letter: "C", text: "how many storms happened last year" },
        ],
        correctChoiceId: "wt-q3-b",
        explanation: "The number in a daily forecast is usually the air temperature.",
      },
    ],
    reflect: {
      prompt: "Can you explain why the slide and the grass can feel so different on the same day?",
    },
    mastery: {
      id: "wt-m1",
      prompt: "The same sunshine can leave metal feeling hotter than grass because...",
      choices: [
        { id: "wt-m1-a", letter: "A", text: "different materials warm up in different ways" },
        { id: "wt-m1-b", letter: "B", text: "grass turns off the Sun" },
        { id: "wt-m1-c", letter: "C", text: "temperature only exists at night" },
      ],
      correctChoiceId: "wt-m1-a",
      explanation: "Temperature is about how warm something is — and materials do not all store the Sun's energy the same way.",
    },
  },
});

const wind = concept({
  id: "weather-wind",
  title: "Wind",
  hook: "If air is invisible, how can it push a kite?",
  goal: "Explain wind as moving air and connect it to warmer and cooler places.",
  prerequisites: ["weather-what-is-weather"],
  skills: [
    skill("weather-skill-define-wind", "weather-wind", "Describe wind as moving air"),
    skill("weather-skill-feel-breeze", "weather-wind", "Notice breeze strength"),
  ],
  experience: {
    wonder: {
      prompt: "If air is invisible, how can it push a kite across the sky?",
    },
    explore: {
      text: "Wind is air on the move. You cannot see it, but you can see what it does — a kite climbing, grass bending, a flag snapping.",
    },
    understand: {
      text: "Warm air tends to rise. Cooler air can slide in underneath. That swap can start a breeze. Stronger differences make stronger wind.",
    },
    try: {
      prompt: "On a still afternoon, you suddenly feel a cool breeze. What did the air do?",
      note: "A breeze means a mass of air has started moving past you.",
    },
    practice: [
      {
        id: "wn-q1",
        prompt: "Wind is...",
        choices: [
          { id: "wn-q1-a", letter: "A", text: "moving air" },
          { id: "wn-q1-b", letter: "B", text: "sunlight you can hold" },
          { id: "wn-q1-c", letter: "C", text: "a kind of rock" },
        ],
        correctChoiceId: "wn-q1-a",
        explanation: "Wind is air moving from one place to another.",
      },
      {
        id: "wn-q2",
        prompt: "Why can wind move a kite even though air is invisible?",
        choices: [
          { id: "wn-q2-a", letter: "A", text: "Moving air can push on things" },
          { id: "wn-q2-b", letter: "B", text: "Kites make their own wind only at night" },
          { id: "wn-q2-c", letter: "C", text: "Invisible things cannot touch anything" },
        ],
        correctChoiceId: "wn-q2-a",
        explanation: "Air has substance. When it moves, it can push a kite, a flag, or your hair.",
      },
      {
        id: "wn-q3",
        prompt: "Warm air rising and cooler air sliding in is one way to get...",
        choices: [
          { id: "wn-q3-a", letter: "A", text: "wind" },
          { id: "wn-q3-b", letter: "B", text: "a new mountain" },
          { id: "wn-q3-c", letter: "C", text: "silence in the sky forever" },
        ],
        correctChoiceId: "wn-q3-a",
        explanation: "That swap of warmer and cooler air is one reason a breeze can start.",
      },
    ],
    reflect: {
      prompt: "How would you explain wind to someone who thinks air is 'nothing'?",
    },
    mastery: {
      id: "wn-m1",
      prompt: "A flag flipping on a pole is evidence that...",
      choices: [
        { id: "wn-m1-a", letter: "A", text: "air is moving" },
        { id: "wn-m1-b", letter: "B", text: "the Sun has disappeared" },
        { id: "wn-m1-c", letter: "C", text: "temperature is always the same" },
      ],
      correctChoiceId: "wn-m1-a",
      explanation: "The flag moves because moving air — wind — is pushing it.",
    },
  },
});

const humidity = concept({
  id: "weather-humidity",
  title: "Humidity",
  hook: "Why can a warm day feel 'sticky' even when it is not raining?",
  goal: "Describe humidity as water vapor in the air and how it changes how weather feels.",
  prerequisites: ["weather-temperature"],
  skills: [
    skill("weather-skill-name-humidity", "weather-humidity", "Describe humidity"),
    skill("weather-skill-feel-sticky-air", "weather-humidity", "Connect humidity to how air feels"),
  ],
  experience: {
    wonder: {
      prompt: "Why can a warm day feel sticky even when it is not raining?",
    },
    explore: {
      text: "Humidity is how much water vapor — water as an invisible gas — is mixed into the air. You cannot always see it, but you can feel it. High humidity makes sweat stay on your skin, so you feel sticky.",
    },
    understand: {
      text: "Warmer air can hold more water vapor. When humid air cools, some vapor can turn back into tiny droplets and become clouds, fog, or dew. Humidity is one reason two 30°C days can feel so different.",
    },
    try: {
      prompt: "After a hot shower, the bathroom mirror clouds up. What does that tell you about the air?",
      note: "The air gained a lot of water vapor. Some of it cooled on the mirror and became droplets.",
    },
    practice: [
      {
        id: "wh-q1",
        prompt: "Humidity is about...",
        choices: [
          { id: "wh-q1-a", letter: "A", text: "water vapor in the air" },
          { id: "wh-q1-b", letter: "B", text: "how fast clouds fly in space" },
          { id: "wh-q1-c", letter: "C", text: "the color of the Sun" },
        ],
        correctChoiceId: "wh-q1-a",
        explanation: "Humidity measures how much water vapor is in the air.",
      },
      {
        id: "wh-q2",
        prompt: "A sticky, warm day usually means the air has...",
        choices: [
          { id: "wh-q2-a", letter: "A", text: "more water vapor" },
          { id: "wh-q2-b", letter: "B", text: "no temperature" },
          { id: "wh-q2-c", letter: "C", text: "only dry dust and nothing else" },
        ],
        correctChoiceId: "wh-q2-a",
        explanation: "Extra water vapor in warm air is a big reason a day can feel sticky.",
      },
    ],
    reflect: {
      prompt: "How is humidity different from rain?",
    },
    mastery: {
      id: "wh-m1",
      prompt: "Dew on grass in the morning often means...",
      choices: [
        { id: "wh-m1-a", letter: "A", text: "water vapor in the air cooled into droplets" },
        { id: "wh-m1-b", letter: "B", text: "the grass sweated like a person" },
        { id: "wh-m1-c", letter: "C", text: "humidity disappeared forever" },
      ],
      correctChoiceId: "wh-m1-a",
      explanation: "Cooler surfaces can turn invisible vapor into visible droplets — dew.",
    },
  },
});

const clouds = concept({
  id: "weather-clouds",
  title: "Clouds",
  hook: "How can a cloud float if it is made of water?",
  goal: "Explain that clouds are tiny water droplets or ice crystals gathered in the air.",
  prerequisites: ["weather-humidity"],
  skills: [
    skill("weather-skill-cloud-made-of", "weather-clouds", "Say what clouds are made of"),
    skill("weather-skill-spot-cloud-types", "weather-clouds", "Notice different cloud looks"),
  ],
  experience: {
    wonder: {
      prompt: "How can a cloud float if it is made of water?",
    },
    explore: {
      text: "A cloud is a crowd of tiny droplets or ice crystals. They are so small that moving air can hold them up.",
    },
    understand: {
      text: "Humid air rises and cools. Vapor becomes droplets. Puffy heaps often mean rising air. Darker, thicker clouds can be a hint of rain.",
    },
    try: {
      prompt: "You see a tall, puffy, bright cloud on a sunny afternoon. What is a fair first guess?",
      note: "Heaped clouds often grow where air is rising on a warm day. They do not always mean a storm.",
    },
    practice: [
      {
        id: "wc-q1",
        prompt: "Clouds are mostly...",
        choices: [
          { id: "wc-q1-a", letter: "A", text: "tiny water droplets or ice crystals" },
          { id: "wc-q1-b", letter: "B", text: "solid chunks of metal" },
          { id: "wc-q1-c", letter: "C", text: "holes in the sky" },
        ],
        correctChoiceId: "wc-q1-a",
        explanation: "Clouds are gatherings of very small droplets or ice crystals.",
      },
      {
        id: "wc-q2",
        prompt: "Clouds often form when humid air...",
        choices: [
          { id: "wc-q2-a", letter: "A", text: "rises and cools" },
          { id: "wc-q2-b", letter: "B", text: "disappears into space" },
          { id: "wc-q2-c", letter: "C", text: "turns into rock" },
        ],
        correctChoiceId: "wc-q2-a",
        explanation: "Cooling helps water vapor become droplets that we see as a cloud.",
      },
      {
        id: "wc-q3",
        prompt: "Clouds can float because...",
        choices: [
          { id: "wc-q3-a", letter: "A", text: "the droplets are tiny and air can hold them" },
          { id: "wc-q3-b", letter: "B", text: "clouds are empty painted balloons" },
          { id: "wc-q3-c", letter: "C", text: "water never feels gravity" },
        ],
        correctChoiceId: "wc-q3-a",
        explanation: "Each piece is tiny. Together they look solid, but air can still hold them.",
      },
    ],
    reflect: {
      prompt: "Why don't clouds usually fall as one giant splash?",
    },
    mastery: {
      id: "wc-m1",
      prompt: "A cloud can stay up because...",
      choices: [
        { id: "wc-m1-a", letter: "A", text: "its droplets are tiny and air can hold them" },
        { id: "wc-m1-b", letter: "B", text: "clouds are empty balloons of paint" },
        { id: "wc-m1-c", letter: "C", text: "gravity does not work on water" },
      ],
      correctChoiceId: "wc-m1-a",
      explanation: "The pieces are so small that rising and moving air can keep them aloft — until they grow and fall as rain.",
    },
  },
});

const rain = concept({
  id: "weather-rain",
  title: "Rain",
  hook: "What has to happen inside a cloud before drops fall on your head?",
  goal: "Describe how cloud droplets can grow and fall as rain.",
  prerequisites: ["weather-clouds"],
  skills: [
    skill("weather-skill-rain-from-clouds", "weather-rain", "Connect rain to clouds"),
    skill("weather-skill-droplet-grow", "weather-rain", "Explain droplets growing"),
  ],
  experience: {
    wonder: {
      prompt: "What has to happen inside a cloud before drops fall on your head?",
    },
    explore: {
      text: "Rain starts as tiny cloud droplets. When they bump and join, they grow heavier. When they are too heavy for the air to hold, they fall. If the air is cold enough, they may fall as snow or hail instead.",
    },
    understand: {
      text: "Not every cloud rains. The cloud needs enough moisture and the right cooling. Rain waters plants, fills rivers, and can also make roads slick. After rain, humidity and temperature often change too.",
    },
    try: {
      prompt: "A thin, bright cloud sits in a blue sky. Is rain likely right now?",
      note: "Thin, bright clouds usually do not hold enough water to rain. Darker, thicker clouds are a stronger hint.",
    },
    practice: [
      {
        id: "wr-q1",
        prompt: "Raindrops fall when they become...",
        choices: [
          { id: "wr-q1-a", letter: "A", text: "too heavy for the air to hold up" },
          { id: "wr-q1-b", letter: "B", text: "hotter than the Sun" },
          { id: "wr-q1-c", letter: "C", text: "invisible forever" },
        ],
        correctChoiceId: "wr-q1-a",
        explanation: "Droplets join, grow, and fall when they are too heavy to stay up.",
      },
      {
        id: "wr-q2",
        prompt: "Rain is a kind of...",
        choices: [
          { id: "wr-q2-a", letter: "A", text: "precipitation" },
          { id: "wr-q2-b", letter: "B", text: "wind speed" },
          { id: "wr-q2-c", letter: "C", text: "rock cycle only" },
        ],
        correctChoiceId: "wr-q2-a",
        explanation: "Precipitation is water falling from clouds — rain, snow, sleet, or hail.",
      },
    ],
    reflect: {
      prompt: "How is rain connected to humidity and clouds?",
    },
    mastery: {
      id: "wr-m1",
      prompt: "Clouds do not always rain because...",
      choices: [
        { id: "wr-m1-a", letter: "A", text: "droplets may stay too small or too few" },
        { id: "wr-m1-b", letter: "B", text: "rain can only fall at night" },
        { id: "wr-m1-c", letter: "C", text: "water cannot leave a cloud" },
      ],
      correctChoiceId: "wr-m1-a",
      explanation: "A cloud needs enough growing droplets before rain begins.",
    },
  },
});

const storms = concept({
  id: "weather-storms",
  title: "Storms",
  hook: "What turns a regular rainy day into thunder and wild wind?",
  goal: "Describe a storm as strong, changing weather and list safe choices.",
  prerequisites: ["weather-rain", "weather-wind"],
  skills: [
    skill("weather-skill-storm-ingredients", "weather-storms", "Name storm ingredients"),
    skill("weather-skill-storm-safety", "weather-storms", "Choose a safer storm action"),
  ],
  experience: {
    wonder: {
      prompt: "What turns a regular rainy day into thunder and wild wind?",
    },
    explore: {
      text: "A storm is weather that has grown strong and restless — heavy rain, gusty wind, maybe lightning or hail. It often starts when warm, moist air rises quickly and builds tall clouds.",
    },
    understand: {
      text: "Inside a tall storm cloud, air rushes up and down. Water droplets and ice can crash and shuffle electric charge, which can spark as lightning. Thunder is the sound of air jumping from that sudden heat. The safe idea is simple: get inside, stay off open fields, and keep away from tall isolated trees.",
    },
    try: {
      prompt: "You hear thunder while playing outside. What is a wise first move?",
      note: "If you can hear thunder, lightning is close enough to matter. Head indoors.",
    },
    practice: [
      {
        id: "ws-q1",
        prompt: "Storms often need...",
        choices: [
          { id: "ws-q1-a", letter: "A", text: "rising moist air and strong motion in the cloud" },
          { id: "ws-q1-b", letter: "B", text: "a perfectly still, dry sky" },
          { id: "ws-q1-c", letter: "C", text: "the Moon to turn off" },
        ],
        correctChoiceId: "ws-q1-a",
        explanation: "Fast-rising moist air can build the tall clouds that hold stormy weather.",
      },
      {
        id: "ws-q2",
        prompt: "A safer choice during thunder is...",
        choices: [
          { id: "ws-q2-a", letter: "A", text: "go inside a sturdy building" },
          { id: "ws-q2-b", letter: "B", text: "stand under the tallest tree in a field" },
          { id: "ws-q2-c", letter: "C", text: "hold a metal pole up high" },
        ],
        correctChoiceId: "ws-q2-a",
        explanation: "A building with wiring and plumbing is much safer than open ground or tall isolated trees.",
      },
    ],
    reflect: {
      prompt: "What ingredients can turn rain into a storm?",
    },
    mastery: {
      id: "ws-m1",
      prompt: "Thunder means...",
      choices: [
        { id: "ws-m1-a", letter: "A", text: "lightning heated the air nearby" },
        { id: "ws-m1-b", letter: "B", text: "the ground is perfectly dry" },
        { id: "ws-m1-c", letter: "C", text: "wind has stopped forever" },
      ],
      correctChoiceId: "ws-m1-a",
      explanation: "Lightning heats air so fast that it expands with a boom we hear as thunder.",
    },
  },
});

const patterns = concept({
  id: "weather-patterns",
  title: "Weather Patterns",
  hook: "Why do some weeks feel like the same kind of day, over and over?",
  goal: "Notice that weather can follow patterns across days and seasons.",
  prerequisites: ["weather-temperature", "weather-wind", "weather-rain"],
  skills: [
    skill("weather-skill-spot-pattern", "weather-patterns", "Spot a weather pattern"),
    skill("weather-skill-season-link", "weather-patterns", "Link seasons to usual weather"),
  ],
  experience: {
    wonder: {
      prompt: "Why do some weeks feel like the same kind of day, over and over?",
    },
    explore: {
      text: "A weather pattern is a repeat — several rainy afternoons, a string of hot still days, or a week of gusty wind. Patterns happen because big pieces of air, ocean temperatures, and the season steer the ingredients together.",
    },
    understand: {
      text: "In many places, summers trend warmer and winters cooler. Monsoon weeks can bring a rhythm of rain. A pattern is not a promise: one day can still surprise you. Watching a few days in a row helps you see the rhythm underneath the surprise.",
    },
    try: {
      prompt: "It has rained every afternoon for four days. What are you noticing?",
      note: "That repeat is a short weather pattern — useful, but tomorrow can still change.",
    },
    practice: [
      {
        id: "wp-q1",
        prompt: "A weather pattern is...",
        choices: [
          { id: "wp-q1-a", letter: "A", text: "weather that repeats in a noticeable way" },
          { id: "wp-q1-b", letter: "B", text: "a single gust that lasts one second" },
          { id: "wp-q1-c", letter: "C", text: "the name of a cloud" },
        ],
        correctChoiceId: "wp-q1-a",
        explanation: "Patterns are repeats or rhythms across hours, days, or seasons.",
      },
      {
        id: "wp-q2",
        prompt: "Why might afternoons keep raining in the same week?",
        choices: [
          { id: "wp-q2-a", letter: "A", text: "The same mix of moisture and heating keeps returning" },
          { id: "wp-q2-b", letter: "B", text: "Rain is random and never has a reason" },
          { id: "wp-q2-c", letter: "C", text: "The Sun is made of water" },
        ],
        correctChoiceId: "wp-q2-a",
        explanation: "Similar air and heating can recreate similar weather for several days.",
      },
    ],
    reflect: {
      prompt: "What weather pattern have you noticed where you live?",
    },
    mastery: {
      id: "wp-m1",
      prompt: "A week of similar hot, still mornings is best called...",
      choices: [
        { id: "wp-m1-a", letter: "A", text: "a weather pattern" },
        { id: "wp-m1-b", letter: "B", text: "a single lightning bolt" },
        { id: "wp-m1-c", letter: "C", text: "the shape of a snowflake" },
      ],
      correctChoiceId: "wp-m1-a",
      explanation: "Repeating conditions across days are a pattern.",
    },
  },
});

const vsClimate = concept({
  id: "weather-vs-climate",
  title: "Weather vs Climate",
  hook: "If today is chilly, does that mean your whole place is a cold place?",
  goal: "Tell weather (today) apart from climate (the usual pattern over years).",
  grades: [5, 6],
  prerequisites: ["weather-patterns"],
  skills: [
    skill("weather-skill-weather-vs-climate", "weather-vs-climate", "Separate weather from climate", [5, 6]),
  ],
  experience: {
    wonder: {
      prompt: "If today is chilly, does that mean your whole place is a cold place?",
    },
    explore: {
      text: "Weather is one day's story. Climate is the usual story of a place across many years — the typical summers, winters, rains, and dry spells. One cold day does not rewrite the climate.",
    },
    understand: {
      text: "Think of weather as your outfit today and climate as your closet. A rainy Tuesday is weather. 'This city usually has a wet monsoon and a drier winter' is climate. Scientists need long records before they talk about climate changing.",
    },
    try: {
      prompt: "'Mumbai is usually hot and humid in May' — weather or climate?",
      note: "The word 'usually' plus a month across years points to climate.",
    },
    practice: [
      {
        id: "cl-q1",
        prompt: "'It rained for twenty minutes after lunch' is...",
        choices: [
          { id: "cl-q1-a", letter: "A", text: "weather" },
          { id: "cl-q1-b", letter: "B", text: "climate" },
          { id: "cl-q1-c", letter: "C", text: "a type of rock" },
        ],
        correctChoiceId: "cl-q1-a",
        explanation: "A short event today is weather.",
      },
      {
        id: "cl-q2",
        prompt: "'This desert is usually dry year after year' is...",
        choices: [
          { id: "cl-q2-a", letter: "A", text: "climate" },
          { id: "cl-q2-b", letter: "B", text: "one gust of wind" },
          { id: "cl-q2-c", letter: "C", text: "tonight's sunset color only" },
        ],
        correctChoiceId: "cl-q2-a",
        explanation: "A usual pattern over years is climate.",
      },
    ],
    reflect: {
      prompt: "How would you tell a friend the difference between weather and climate?",
    },
    mastery: {
      id: "cl-m1",
      prompt: "A surprise cool day in a usually hot month is...",
      choices: [
        { id: "cl-m1-a", letter: "A", text: "weather, not a new climate by itself" },
        { id: "cl-m1-b", letter: "B", text: "proof the climate vanished" },
        { id: "cl-m1-c", letter: "C", text: "unrelated to temperature" },
      ],
      correctChoiceId: "cl-m1-a",
      explanation: "Unusual days happen. Climate is the long usual pattern, not one afternoon.",
    },
  },
});

const experiments = concept({
  id: "weather-experiments",
  title: "Weather Experiments",
  hook: "Can you make a tiny cloud or a breeze without waiting for a storm?",
  goal: "Try a safe observation that models a weather idea.",
  prerequisites: ["weather-what-is-weather"],
  skills: [
    skill("weather-skill-safe-observe", "weather-experiments", "Make a safe weather observation"),
    skill("weather-skill-model-idea", "weather-experiments", "Connect a model to a weather idea"),
  ],
  experience: {
    wonder: {
      prompt: "Can you make a tiny cloud or a breeze without waiting for a storm?",
    },
    explore: {
      text: "You can model weather with simple, safe tries. A jar, warm water, and ice can hint at how cooling makes droplets. Walking from sun to shade lets you feel temperature change. Never try experiments with lightning, fire, or climbing in storms.",
    },
    understand: {
      text: "A model is a small stand-in for a big idea. It will not be a real thunderstorm — and that is good. The point is to notice: cooler air can help droplets form; uneven heating can start air moving.",
    },
    try: {
      prompt: "You hold a metal spoon and a wooden spoon after both sat in the sun. What are you testing?",
      note: "You are comparing how different materials warm — a temperature idea you can feel.",
    },
    practice: [
      {
        id: "we-q1",
        prompt: "A safe weather experiment should...",
        choices: [
          { id: "we-q1-a", letter: "A", text: "stay indoors or in a calm place and avoid storms" },
          { id: "we-q1-b", letter: "B", text: "include standing under thunderclouds on purpose" },
          { id: "we-q1-c", letter: "C", text: "need lightning close to your hands" },
        ],
        correctChoiceId: "we-q1-a",
        explanation: "We model weather safely. Real storms are for watching from a secure place.",
      },
      {
        id: "we-q2",
        prompt: "Ice on a warm jar lid can help you think about...",
        choices: [
          { id: "we-q2-a", letter: "A", text: "cooling air and droplets" },
          { id: "we-q2-b", letter: "B", text: "how planets get their names" },
          { id: "we-q2-c", letter: "C", text: "the speed of sound in space" },
        ],
        correctChoiceId: "we-q2-a",
        explanation: "Cooling humid air is part of how droplets — and clouds — can form.",
      },
    ],
    reflect: {
      prompt: "What tiny test could you do today to notice temperature or wind?",
    },
    mastery: {
      id: "we-m1",
      prompt: "The best reason to use a jar-and-ice model is...",
      choices: [
        { id: "we-m1-a", letter: "A", text: "to notice an idea safely, not to create a real storm" },
        { id: "we-m1-b", letter: "B", text: "to replace the whole sky" },
        { id: "we-m1-c", letter: "C", text: "to make thunder in a kitchen" },
      ],
      correctChoiceId: "we-m1-a",
      explanation: "Models help us see a piece of the idea without dangerous weather.",
    },
  },
});

const explain = concept({
  id: "weather-explain",
  title: "Explain It Yourself",
  hook: "Could you teach a younger child why the sky can change in one afternoon?",
  goal: "Put weather ingredients together in your own words.",
  prerequisites: [
    "weather-what-is-weather",
    "weather-temperature",
    "weather-wind",
    "weather-clouds",
    "weather-rain",
  ],
  skills: [
    skill("weather-skill-teach-back", "weather-explain", "Explain weather in your own words"),
  ],
  experience: {
    wonder: {
      prompt: "Could you teach a younger child why the sky can change in one afternoon?",
    },
    explore: {
      text: "Teaching is a way of checking what you understand. You do not need fancy words. You need the ingredients: temperature, wind, humidity, clouds, and rain — and the idea that they can rearrange.",
    },
    understand: {
      text: "A strong explanation names the parts and how they connect. Warm air can hold more vapor. Rising cooling air can make clouds. Clouds can rain. Wind can push the whole story to a new place. That is enough to help someone younger see the sky as a system, not a mystery.",
    },
    try: {
      prompt: "Pick one sentence you would start with for a Grade 4 friend.",
      note: "A clear start: 'Weather is what the air is doing today.' Then add one ingredient.",
    },
    practice: [
      {
        id: "ex-q1",
        prompt: "Which sentence would help a younger child most?",
        choices: [
          { id: "ex-q1-a", letter: "A", text: "Weather is the air's mood today — warm, windy, wet, or cloudy." },
          { id: "ex-q1-b", letter: "B", text: "Weather is an unsolvable adult secret." },
          { id: "ex-q1-c", letter: "C", text: "Weather only exists in books." },
        ],
        correctChoiceId: "ex-q1-a",
        explanation: "Simple, true language helps someone else picture the idea.",
      },
      {
        id: "ex-q2",
        prompt: "A complete little weather story should mention...",
        choices: [
          { id: "ex-q2-a", letter: "A", text: "more than one ingredient working together" },
          { id: "ex-q2-b", letter: "B", text: "only the color of a school bag" },
          { id: "ex-q2-c", letter: "C", text: "nothing about the air" },
        ],
        correctChoiceId: "ex-q2-a",
        explanation: "Weather is a mix. Naming two or three parts makes the story stronger.",
      },
    ],
    reflect: {
      prompt: "Explain why the sky can change between morning and afternoon.",
    },
    mastery: {
      id: "ex-m1",
      prompt: "The most useful teaching move is...",
      choices: [
        { id: "ex-m1-a", letter: "A", text: "use your own words and one real example" },
        { id: "ex-m1-b", letter: "B", text: "use only words you do not understand" },
        { id: "ex-m1-c", letter: "C", text: "say weather cannot be explained" },
      ],
      correctChoiceId: "ex-m1-a",
      explanation: "Your own words plus a thing you have felt — a hot slide, a sticky day, a sudden breeze — make the idea stick.",
    },
  },
});

const mastery = concept({
  id: "weather-mastery",
  title: "Mastery Check",
  hook: "Can you walk the whole Weather World without getting lost?",
  goal: "Show you can connect weather ingredients, patterns, and climate.",
  prerequisites: [
    "weather-what-is-weather",
    "weather-temperature",
    "weather-wind",
    "weather-humidity",
    "weather-clouds",
    "weather-rain",
    "weather-storms",
    "weather-patterns",
    "weather-vs-climate",
  ],
  skills: [
    skill("weather-skill-mastery-connect", "weather-mastery", "Connect the Weather World"),
  ],
  experience: {
    wonder: {
      prompt: "If the sky changed from blue to dark and windy, which ingredients would you mention first?",
    },
    explore: {
      text: "This is a check, not a trick. You are gathering everything you have explored: what weather is, how temperature and wind feel, how humidity and clouds lead toward rain, when storms need extra care, and how climate is the long usual story.",
    },
    understand: {
      text: "Mastery here means you can move along the path and still see the links. You do not need to memorize a textbook. You need to reason like a curious observer.",
    },
    try: {
      prompt: "A humid morning, growing clouds, then afternoon rain. What path did the air likely follow?",
      note: "Humidity plus cooling and rising air can build clouds that later rain.",
    },
    practice: [
      {
        id: "wm-q1",
        prompt: "Which list is the best set of weather ingredients?",
        choices: [
          { id: "wm-q1-a", letter: "A", text: "temperature, wind, humidity, clouds, rain" },
          { id: "wm-q1-b", letter: "B", text: "homework, backpack, pencil" },
          { id: "wm-q1-c", letter: "C", text: "Monday, Tuesday, Wednesday" },
        ],
        correctChoiceId: "wm-q1-a",
        explanation: "Those five are the core mix we used across Weather World.",
      },
      {
        id: "wm-q2",
        prompt: "Climate is different from weather because climate is...",
        choices: [
          { id: "wm-q2-a", letter: "A", text: "the usual pattern over many years" },
          { id: "wm-q2-b", letter: "B", text: "only this minute's breeze" },
          { id: "wm-q2-c", letter: "C", text: "a single lightning flash" },
        ],
        correctChoiceId: "wm-q2-a",
        explanation: "Weather is now. Climate is the long usual pattern.",
      },
      {
        id: "wm-q3",
        prompt: "If you hear thunder, a wise choice is...",
        choices: [
          { id: "wm-q3-a", letter: "A", text: "go indoors" },
          { id: "wm-q3-b", letter: "B", text: "hold metal up on a hill" },
          { id: "wm-q3-c", letter: "C", text: "ignore the sky completely" },
        ],
        correctChoiceId: "wm-q3-a",
        explanation: "Thunder means lightning is close enough to take seriously.",
      },
    ],
    reflect: {
      prompt: "What is one Weather World idea you could explain to Ivshi without looking back?",
    },
    mastery: {
      id: "wm-m1",
      prompt: "Weather World is best described as...",
      choices: [
        { id: "wm-m1-a", letter: "A", text: "connected ideas about the air around us" },
        { id: "wm-m1-b", letter: "B", text: "a list of chapter numbers to finish" },
        { id: "wm-m1-c", letter: "C", text: "a set of unrelated spelling words" },
      ],
      correctChoiceId: "wm-m1-a",
      explanation: "The path is a world of connected ideas — not a chapter checklist.",
    },
  },
});

export const WEATHER_WORLD_ID = "weather";

export const WEATHER_CONCEPTS: CurriculumConcept[] = [
  whatIsWeather,
  temperature,
  wind,
  humidity,
  clouds,
  rain,
  storms,
  patterns,
  vsClimate,
  experiments,
  explain,
  mastery,
];

export const WEATHER_WORLD: CurriculumWorld = {
  id: WEATHER_WORLD_ID,
  title: "Weather",
  subjectId: "science",
  parentId: null,
  grades: GRADES,
  kind: "world",
  curriculumId: DEFAULT_CURRICULUM_ID,
  category: "Earth & Sky",
  hook: "Something is always happening above you.",
  path: WEATHER_CONCEPTS.map((item) => item.id),
  topics: [],
  concepts: WEATHER_CONCEPTS,
};

export const WEATHER_PATH_TITLES = WEATHER_CONCEPTS.map((item) => item.title);
