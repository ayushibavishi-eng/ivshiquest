import type { Grade5EvsConceptId } from "@/content/lessons/grade-5-evs/format";

export const GRADE_5_SCIENCE_SPINE_KINDS = ["taught", "overlap"] as const;
export type Grade5ScienceSpineKind = (typeof GRADE_5_SCIENCE_SPINE_KINDS)[number];

export type Grade5ScienceLessonHostId =
  | Grade5EvsConceptId
  | "science-plants-photosynthesis";

export type Grade5ScienceSpineCoverage = {
  id: string;
  title: string;
  kind: Grade5ScienceSpineKind;
  hostConceptId: Grade5ScienceLessonHostId;
  objective: string;
};

/**
 * Audit of every Grade 5-visible science/weather skill-spine *concept*
 * except science-plants-photosynthesis (which has its own gold lesson).
 *
 * taught: a genuine G5 skill the child should practise; hosted by a chapter.
 * overlap: the same idea as the host chapter core; keep the catalogue node,
 * but do not treat it as a missing lesson.
 */
export const GRADE_5_SCIENCE_SPINE_COVERAGE: Grade5ScienceSpineCoverage[] = [
  // Water — ncert-g5-wondrous-world-water-essence-core
  {
    id: "science-wat-cycle",
    title: "Water Cycle",
    kind: "overlap",
    hostConceptId: "ncert-g5-wondrous-world-water-essence-core",
    objective: "Trace water from sun-heated puddle to cloud to rain and back again.",
  },
  {
    id: "science-wat-safe",
    title: "Safe Water",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-water-essence-core",
    objective: "Explain why boiling or treating water can make a drink safer.",
  },
  {
    id: "science-sep-filter",
    title: "Filtration & Evaporation",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-water-essence-core",
    objective: "Separate muddy water with a filter and recover salt by evaporation.",
  },
  {
    id: "science-state-evap-cond",
    title: "Evaporation & Condensation",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-water-essence-core",
    objective: "Explain why a cold glass gets wet on the outside on a humid day.",
  },
  {
    id: "science-mix-what",
    title: "What a Mixture Is",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-water-essence-core",
    objective: "Say why salty water is still salt and water, not a new substance.",
  },
  {
    id: "science-mix-types",
    title: "Solutions & Suspensions",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-water-essence-core",
    objective: "Contrast sugar that dissolves with sand that settles in water.",
  },
  {
    id: "weather-humidity",
    title: "Humidity",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-water-essence-core",
    objective: "Connect sticky air to water vapour held in the atmosphere.",
  },
  {
    id: "weather-rain",
    title: "Rain",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-water-essence-core",
    objective: "Link growing cloud droplets to rain falling from the sky.",
  },
  {
    id: "weather-clouds",
    title: "Clouds",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-water-essence-core",
    objective: "Describe clouds as tiny water droplets or ice crystals in air.",
  },

  // River — ncert-g5-wondrous-world-journey-of-a-river-core
  {
    id: "science-soil-layers",
    title: "What Soil Holds",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-journey-of-a-river-core",
    objective: "Describe soil as rock bits, air, water, and remains of living things.",
  },
  {
    id: "science-rock-types",
    title: "Looking at Rocks",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-journey-of-a-river-core",
    objective: "Compare soft chalk with hard granite and name a use for each.",
  },
  {
    id: "science-hab-types",
    title: "Forest, Pond, Desert, Ocean",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-journey-of-a-river-core",
    objective: "Compare wet pond life with dry desert life along a river journey.",
  },

  // Food — ncert-g5-wondrous-world-mystery-of-food-core
  {
    id: "science-nut-groups",
    title: "Food Groups",
    kind: "overlap",
    hostConceptId: "ncert-g5-wondrous-world-mystery-of-food-core",
    objective: "Name energy, body-building, and protective foods on a plate.",
  },
  {
    id: "science-nut-balanced",
    title: "A Balanced Plate",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-mystery-of-food-core",
    objective: "Spot what is missing when a plate is only rice or only sweets.",
  },
  {
    id: "science-plants-needs",
    title: "What Plants Need",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-mystery-of-food-core",
    objective: "List light, water, air, and minerals as needs of green plants.",
  },
  {
    id: "science-plants-seeds",
    title: "Seeds & Dispersal",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-mystery-of-food-core",
    objective: "Match a winged or sticky seed to how it travels away from the plant.",
  },
  {
    id: "science-fc-producer",
    title: "Producers & Consumers",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-mystery-of-food-core",
    objective: "Spot the producer that starts a grass–deer–tiger food chain.",
  },
  {
    id: "science-fc-arrows",
    title: "Reading the Arrows",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-mystery-of-food-core",
    objective: "Read food-chain arrows as energy flowing toward the eater.",
  },
  {
    id: "science-fc-break",
    title: "If a Link Disappears",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-mystery-of-food-core",
    objective: "Predict what happens to other links if one animal vanishes.",
  },
  {
    id: "science-ani-food",
    title: "Herbivores, Carnivores, Omnivores",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-mystery-of-food-core",
    objective: "Classify animals by whether they eat plants, animals, or both.",
  },
  {
    id: "science-body-digestive",
    title: "Digestive System",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-mystery-of-food-core",
    objective: "Order how food moves from mouth to stomach to intestines.",
  },

  // School — ncert-g5-wondrous-world-our-school-core
  {
    id: "science-hea-disease",
    title: "Preventing Illness",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-our-school-core",
    objective: "Connect germs, sneezes, and simple habits that slow illness spread.",
  },
  {
    id: "science-body-skeletal",
    title: "Skeletal System",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-our-school-core",
    objective: "Explain how bones support the body and protect soft organs.",
  },
  {
    id: "science-body-muscular",
    title: "Muscular System",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-our-school-core",
    objective: "Describe muscles pulling on bones so you can lift a school bag.",
  },
  {
    id: "science-body-respiratory",
    title: "Respiratory System",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-our-school-core",
    objective: "Explain breathing in oxygen and breathing out carbon dioxide.",
  },
  {
    id: "science-body-circulatory",
    title: "Circulatory System",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-our-school-core",
    objective: "Say how the heart pumps blood that carries oxygen and nutrients.",
  },

  // Vibrant — ncert-g5-wondrous-world-our-vibrant-country-core
  {
    id: "science-life-classify",
    title: "Grouping Living Things",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-our-vibrant-country-core",
    objective: "Group plants and animals using features, not size alone.",
  },
  {
    id: "science-adp-body",
    title: "Body Adaptations",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-our-vibrant-country-core",
    objective: "Match a body feature such as wide feet to a habitat job.",
  },
  {
    id: "science-adp-behaviour",
    title: "Behaviour Adaptations",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-our-vibrant-country-core",
    objective: "Link migration or night hunting to surviving in a place.",
  },
  {
    id: "science-eco-living-non",
    title: "Living & Non-living Parts",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-our-vibrant-country-core",
    objective: "Name living and non-living parts that make a place work.",
  },

  // Unique — ncert-g5-wondrous-world-some-unique-places-core
  {
    id: "science-ani-life-cycles",
    title: "Animal Life Cycles",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-some-unique-places-core",
    objective: "Order a butterfly cycle and contrast it with a mammal birth.",
  },

  // Energy — ncert-g5-wondrous-world-energy-how-things-work-core
  {
    id: "science-ene-forms",
    title: "Forms of Energy",
    kind: "overlap",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Name light, heat, sound, and stored energy in everyday objects.",
  },
  {
    id: "science-ene-change",
    title: "Energy Changes",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Trace how a toaster turns electrical energy into heat.",
  },
  {
    id: "science-heat-flow",
    title: "Heat Flows",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Say why ice melts when warmer air sends heat into it.",
  },
  {
    id: "science-heat-conduct",
    title: "Conductors of Heat",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Contrast a hot metal spoon with a cooler wooden handle.",
  },
  {
    id: "science-force-effects",
    title: "What Forces Do",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Show how a force can start motion or squash an object.",
  },
  {
    id: "science-mot-types",
    title: "Types of Motion",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Sort straight, circular, and to-and-fro motion in machines.",
  },
  {
    id: "science-fri-help",
    title: "Useful Friction",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Explain how friction helps shoes grip and brakes slow a bike.",
  },
  {
    id: "science-fri-hurt",
    title: "Friction as a Problem",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Say why oil reduces wear when friction heats machine parts.",
  },
  {
    id: "science-mac-lever",
    title: "Levers",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Find the fulcrum on a see-saw or bottle opener lever.",
  },
  {
    id: "science-mac-others",
    title: "Pulleys, Ramps, Wheels",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Explain how a ramp or pulley makes lifting a load easier.",
  },
  {
    id: "science-ele-circuit",
    title: "Circuits",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Explain why a bulb stays dark when the circuit loop has a gap.",
  },
  {
    id: "science-ele-conduct",
    title: "Conductors & Insulators",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Say why wires are metal inside and plastic on the outside.",
  },
  {
    id: "science-lig-shadow",
    title: "Shadows",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Explain shadows as light blocked by an opaque object.",
  },
  {
    id: "science-lig-reflect",
    title: "Reflection",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Describe light bouncing from a shiny mirror to your eyes.",
  },
  {
    id: "science-snd-vibrate",
    title: "Vibrations",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Connect a drum skin moving back and forth to the sound you hear.",
  },
  {
    id: "science-snd-travel",
    title: "Sound Travels",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Say that sound needs air, water, or solids — not empty space.",
  },
  {
    id: "science-mag-poles",
    title: "Poles",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-energy-how-things-work-core",
    objective: "Show that like poles repel and opposite poles attract.",
  },

  // Clothes — ncert-g5-wondrous-world-clothes-how-made-core
  {
    id: "science-mat-properties",
    title: "Properties of Materials",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-clothes-how-made-core",
    objective: "Compare hardness, flexibility, and transparency when choosing cloth.",
  },
  {
    id: "science-irr-cook",
    title: "Irreversible Changes",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-clothes-how-made-core",
    objective: "Give dyeing or burning examples that make a new material.",
  },
  {
    id: "science-rev-ice",
    title: "Reversible Changes",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-clothes-how-made-core",
    objective: "Give melting ice or folding cloth as changes you can undo.",
  },
  {
    id: "science-state-melt-freeze",
    title: "Melting & Freezing",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-clothes-how-made-core",
    objective: "Describe ice melting to water and water freezing back to ice.",
  },
  {
    id: "science-gas-spread",
    title: "Filling Space",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-clothes-how-made-core",
    objective: "Explain how a smell spreads because gas particles fill the room.",
  },

  // Rhythms — ncert-g5-wondrous-world-rhythms-of-nature-core
  {
    id: "weather-what-is-weather",
    title: "What Is Weather?",
    kind: "overlap",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Name today's conditions such as sunny, rainy, windy, or cloudy.",
  },
  {
    id: "weather-temperature",
    title: "Temperature",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Read how hot or cold the air feels and talk about temperature.",
  },
  {
    id: "weather-wind",
    title: "Wind",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Describe wind as moving air that can be gentle or strong.",
  },
  {
    id: "weather-storms",
    title: "Storms",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Recognise storms as strong wind, rain, thunder, or lightning together.",
  },
  {
    id: "weather-patterns",
    title: "Weather Patterns",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Notice repeating weather patterns across days or seasons.",
  },
  {
    id: "weather-vs-climate",
    title: "Weather vs Climate",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Contrast today's weather with the usual climate of a place.",
  },
  {
    id: "weather-experiments",
    title: "Weather Experiments",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Try a simple outdoor test that measures one weather idea.",
  },
  {
    id: "weather-explain",
    title: "Explain It Yourself",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Explain a weather idea in your own words with a clear because.",
  },
  {
    id: "weather-mastery",
    title: "Mastery Check",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Show you can use several weather ideas together in one answer.",
  },
  {
    id: "science-cli-vs-weather",
    title: "Climate vs a Single Day",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Say why one cold day does not mean a whole new climate.",
  },
  {
    id: "science-ear-rotate",
    title: "Day & Night",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Explain day and night as Earth spinning toward and away from the Sun.",
  },
  {
    id: "science-spa-moon",
    title: "The Moon",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Explain Moon phases as different lit parts we see from Earth.",
  },
  {
    id: "science-spa-solar",
    title: "Solar System",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Say planets orbit the Sun and Earth is the third planet.",
  },
  {
    id: "science-spa-stars",
    title: "Stars",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "Explain that stars are distant suns and our Sun is the nearest.",
  },
  {
    id: "science-air-oxygen",
    title: "Oxygen in Air",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-rhythms-of-nature-core",
    objective: "State that air holds oxygen plus other gases we breathe.",
  },

  // Earth — ncert-g5-wondrous-world-earth-shared-home-core
  {
    id: "science-env-pollution",
    title: "Pollution",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-earth-shared-home-core",
    objective: "Give examples of air, water, or land pollution and a harm each causes.",
  },
  {
    id: "science-env-conserve",
    title: "Conservation",
    kind: "overlap",
    hostConceptId: "ncert-g5-wondrous-world-earth-shared-home-core",
    objective: "Order reduce, reuse, recycle and name one way to save water or trees.",
  },
  {
    id: "science-env-resources",
    title: "Natural Resources",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-earth-shared-home-core",
    objective: "Contrast renewable sunlight with non-renewable coal or oil.",
  },
  {
    id: "science-inq-predict",
    title: "Prediction",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-earth-shared-home-core",
    objective: "Make a thoughtful prediction and give a because for Earth care.",
  },
  {
    id: "science-inq-hypothesis",
    title: "Hypothesis",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-earth-shared-home-core",
    objective: "Write a testable because-statement you could check with evidence.",
  },
  {
    id: "science-inq-experiment",
    title: "Experiments",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-earth-shared-home-core",
    objective: "Plan a fair test that changes only one thing at a time.",
  },
  {
    id: "science-inq-evidence",
    title: "Evidence",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-earth-shared-home-core",
    objective: "Support an Earth claim with what you measured or observed.",
  },
  {
    id: "science-inq-measure",
    title: "Measurement in Inquiry",
    kind: "taught",
    hostConceptId: "ncert-g5-wondrous-world-earth-shared-home-core",
    objective: "Use numbers and units instead of vague words like 'fast' or 'a lot'.",
  },
];

const coverageById = new Map(
  GRADE_5_SCIENCE_SPINE_COVERAGE.map((row) => [row.id, row]),
);

export function getGrade5ScienceSpineCoverage(conceptId: string) {
  return coverageById.get(conceptId);
}

export function getGrade5ScienceHostConceptId(conceptId: string) {
  return coverageById.get(conceptId)?.hostConceptId;
}

export function skillsHostedByGrade5Science(hostConceptId: string): string[] {
  return GRADE_5_SCIENCE_SPINE_COVERAGE.filter(
    (row) => row.hostConceptId === hostConceptId,
  ).map((row) => row.id);
}

export function grade5ScienceSpineCoverageAudit() {
  const taught = GRADE_5_SCIENCE_SPINE_COVERAGE.filter((row) => row.kind === "taught");
  const overlap = GRADE_5_SCIENCE_SPINE_COVERAGE.filter(
    (row) => row.kind === "overlap",
  );
  return {
    spineItems: GRADE_5_SCIENCE_SPINE_COVERAGE.length,
    taughtCount: taught.length,
    overlapCount: overlap.length,
    taughtIds: taught.map((row) => row.id),
    overlapIds: overlap.map((row) => row.id),
    connectedIds: GRADE_5_SCIENCE_SPINE_COVERAGE.map((row) => row.id),
  };
}
