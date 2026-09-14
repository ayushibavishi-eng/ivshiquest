import type { Grade6ScienceConceptId } from "@/content/lessons/grade-6-science/format";

export const GRADE_6_SCIENCE_SPINE_KINDS = ["taught", "overlap"] as const;
export type Grade6ScienceSpineKind = (typeof GRADE_6_SCIENCE_SPINE_KINDS)[number];

export type Grade6ScienceLessonHostId =
  | Grade6ScienceConceptId
  | "science-plants-photosynthesis";

export type Grade6ScienceSpineCoverage = {
  id: string;
  title: string;
  kind: Grade6ScienceSpineKind;
  hostConceptId: Grade6ScienceLessonHostId;
  objective: string;
};

/**
 * Audit of every Grade 6-visible science/weather skill-spine concept except
 * Photosynthesis (gold lesson) and official Curiosity chapter cores.
 */
export const GRADE_6_SCIENCE_SPINE_COVERAGE: Grade6ScienceSpineCoverage[] = [
  {
    id: "science-inq-hypothesis",
    title: "Hypothesis",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-wonderful-world-core",
    objective: "Write a simple because idea you can check with an observation.",
  },
  {
    id: "science-inq-experiment",
    title: "Experiments",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-wonderful-world-core",
    objective: "Plan a fair test that changes one thing at a time.",
  },
  {
    id: "science-inq-evidence",
    title: "Evidence",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-wonderful-world-core",
    objective: "Use observations as evidence for a science claim.",
  },
  {
    id: "science-inq-conclude",
    title: "Drawing Conclusions",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-wonderful-world-core",
    objective: "Draw a careful conclusion that matches what you observed.",
  },
  {
    id: "weather-experiments",
    title: "Weather Experiments",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-wonderful-world-core",
    objective: "Plan a simple outdoor observation you can check later.",
  },
  {
    id: "weather-explain",
    title: "Explain It Yourself",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-wonderful-world-core",
    objective: "Explain a change using evidence, not only a guess.",
  },
  {
    id: "science-life-cells-intro",
    title: "Building Blocks Intro",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-diversity-living-core",
    objective: "Describe living things as built from tiny building blocks called cells.",
  },
  {
    id: "science-adp-behaviour",
    title: "Behaviour Adaptations",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-diversity-living-core",
    objective: "Name a behaviour that helps a living thing fit its place.",
  },
  {
    id: "science-eco-living-non",
    title: "Living & Non-living Parts",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-diversity-living-core",
    objective: "Tell living from non-living parts of a local ecosystem.",
  },
  {
    id: "science-eco-balance",
    title: "Interdependence",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-diversity-living-core",
    objective: "Explain how living things depend on each other in a habitat.",
  },
  {
    id: "science-fc-break",
    title: "If a Link Disappears",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-diversity-living-core",
    objective: "Predict what happens if one link in a food chain disappears.",
  },
  {
    id: "science-nut-balanced",
    title: "A Balanced Plate",
    kind: "overlap",
    hostConceptId: "ncert-g6-curiosity-mindful-eating-core",
    objective: "Describe a balanced plate with more than one food group idea.",
  },
  {
    id: "science-hea-disease",
    title: "Preventing Illness",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-mindful-eating-core",
    objective: "Name a habit that helps prevent illness through mindful choices.",
  },
  {
    id: "science-body-digestive",
    title: "Digestive System",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-mindful-eating-core",
    objective: "Link mindful eating to how the digestive system uses food.",
  },
  {
    id: "science-mag-poles",
    title: "Poles",
    kind: "overlap",
    hostConceptId: "ncert-g6-curiosity-exploring-magnets-core",
    objective: "Name magnet poles and notice that like poles push and unlike pull.",
  },
  {
    id: "science-fri-hurt",
    title: "Friction as a Problem",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-measurement-length-motion-core",
    objective: "Give an example where friction slows motion or causes wear.",
  },
  {
    id: "science-gra-weight",
    title: "Weight & Mass Intro",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-measurement-length-motion-core",
    objective: "Separate the ideas of mass and weight in everyday language.",
  },
  {
    id: "science-mac-lever",
    title: "Levers",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-measurement-length-motion-core",
    objective: "Recognise a lever as a simple machine that helps move a load.",
  },
  {
    id: "science-mac-others",
    title: "Pulleys, Ramps, Wheels",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-measurement-length-motion-core",
    objective: "Name pulleys, ramps, or wheels as helpers that change force or direction.",
  },
  {
    id: "science-mix-types",
    title: "Solutions & Suspensions",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-materials-around-us-core",
    objective: "Tell a clear solution from a cloudy suspension.",
  },
  {
    id: "science-rev-ice",
    title: "Reversible Changes",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-materials-around-us-core",
    objective: "Recognise a reversible change that can go back, such as melting.",
  },
  {
    id: "science-irr-cook",
    title: "Irreversible Changes",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-materials-around-us-core",
    objective: "Recognise an irreversible change that does not undo easily.",
  },
  {
    id: "science-heat-conduct",
    title: "Conductors of Heat",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-temperature-measurement-core",
    objective: "Spot materials that conduct heat well or poorly.",
  },
  {
    id: "weather-temperature",
    title: "Temperature",
    kind: "overlap",
    hostConceptId: "ncert-g6-curiosity-temperature-measurement-core",
    objective: "Read hot and cool as temperature and compare two readings.",
  },
  {
    id: "science-state-evap-cond",
    title: "Evaporation & Condensation",
    kind: "overlap",
    hostConceptId: "ncert-g6-curiosity-states-of-water-core",
    objective: "Link evaporation and condensation to everyday water changes.",
  },
  {
    id: "science-wat-cycle",
    title: "Water Cycle",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-states-of-water-core",
    objective: "Describe how water moves through evaporation, clouds, and rain.",
  },
  {
    id: "weather-humidity",
    title: "Humidity",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-states-of-water-core",
    objective: "Notice sticky air as humidity — water vapour in the air.",
  },
  {
    id: "weather-rain",
    title: "Rain",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-states-of-water-core",
    objective: "Explain rain as condensed water falling from clouds.",
  },
  {
    id: "weather-clouds",
    title: "Clouds",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-states-of-water-core",
    objective: "Describe clouds as collections of tiny water droplets or ice.",
  },
  {
    id: "science-sep-filter",
    title: "Filtration & Evaporation",
    kind: "overlap",
    hostConceptId: "ncert-g6-curiosity-methods-of-separation-core",
    objective: "Describe filtration or evaporation as a way to separate mixtures.",
  },
  {
    id: "science-body-respiratory",
    title: "Respiratory System",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-living-creatures-core",
    objective: "Describe breathing as the respiratory system at work.",
  },
  {
    id: "science-body-circulatory",
    title: "Circulatory System",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-living-creatures-core",
    objective: "Explain how circulation carries useful materials around the body.",
  },
  {
    id: "science-air-oxygen",
    title: "Oxygen in Air",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-living-creatures-core",
    objective: "Explain that air contains oxygen living creatures need.",
  },
  {
    id: "science-env-conserve",
    title: "Conservation",
    kind: "overlap",
    hostConceptId: "ncert-g6-curiosity-natures-treasures-core",
    objective: "Choose a conservation action that cares for a natural treasure.",
  },
  {
    id: "science-env-resources",
    title: "Natural Resources",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-natures-treasures-core",
    objective: "Name natural resources people share and should use carefully.",
  },
  {
    id: "science-env-sustain",
    title: "Sustainability",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-natures-treasures-core",
    objective: "Explain a sustainable habit that protects treasures for later.",
  },
  {
    id: "science-rock-types",
    title: "Looking at Rocks",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-natures-treasures-core",
    objective: "Observe rocks as part of Earth’s natural treasures.",
  },
  {
    id: "science-cli-vs-weather",
    title: "Climate vs a Single Day",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-natures-treasures-core",
    objective: "Compare climate as a long pattern with weather as one day.",
  },
  {
    id: "science-cli-monsoon",
    title: "Seasons & Monsoon",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-natures-treasures-core",
    objective: "Describe seasons and monsoon as rhythms that shape places.",
  },
  {
    id: "weather-what-is-weather",
    title: "What Is Weather?",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-natures-treasures-core",
    objective: "Describe weather as the day-to-day condition of outdoor air.",
  },
  {
    id: "weather-wind",
    title: "Wind",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-natures-treasures-core",
    objective: "Describe wind as moving air that can change weather.",
  },
  {
    id: "weather-storms",
    title: "Storms",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-natures-treasures-core",
    objective: "Name storm signs such as strong wind, thunder, or heavy rain.",
  },
  {
    id: "weather-patterns",
    title: "Weather Patterns",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-natures-treasures-core",
    objective: "Notice repeating weather patterns across weeks or seasons.",
  },
  {
    id: "weather-vs-climate",
    title: "Weather vs Climate",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-natures-treasures-core",
    objective: "Tell a single day’s weather from the usual climate of a place.",
  },
  {
    id: "weather-mastery",
    title: "Mastery Check",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-natures-treasures-core",
    objective: "Connect weather ideas such as temperature, wind, and rain.",
  },
  {
    id: "science-spa-solar",
    title: "Solar System",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-beyond-earth-core",
    objective: "Place Earth among other planets in the solar system.",
  },
  {
    id: "science-spa-stars",
    title: "Stars",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-beyond-earth-core",
    objective: "Distinguish stars as distant suns from planets that look like points of light.",
  },
  {
    id: "science-lig-reflect",
    title: "Reflection",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-beyond-earth-core",
    objective: "Describe reflection as light bouncing from a shiny surface.",
  },
  {
    id: "science-snd-travel",
    title: "Sound Travels",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-beyond-earth-core",
    objective: "Explain that sound travels through air or other materials.",
  },
  {
    id: "science-ele-circuit",
    title: "Circuits",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-beyond-earth-core",
    objective: "Describe a simple circuit as a closed path for electricity.",
  },
  {
    id: "science-ele-conduct",
    title: "Conductors & Insulators",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-beyond-earth-core",
    objective: "Sort materials as conductors or insulators of electricity.",
  },
  {
    id: "science-ene-change",
    title: "Energy Changes",
    kind: "taught",
    hostConceptId: "ncert-g6-curiosity-beyond-earth-core",
    objective: "Describe how energy can change form in a familiar device.",
  },
];

const coverageById = new Map(
  GRADE_6_SCIENCE_SPINE_COVERAGE.map((row) => [row.id, row]),
);

export function getGrade6ScienceSpineCoverage(conceptId: string) {
  return coverageById.get(conceptId);
}

export function getGrade6ScienceHostConceptId(conceptId: string) {
  return coverageById.get(conceptId)?.hostConceptId;
}

export function skillsHostedByGrade6Science(hostConceptId: string): string[] {
  return GRADE_6_SCIENCE_SPINE_COVERAGE.filter(
    (row) => row.hostConceptId === hostConceptId,
  ).map((row) => row.id);
}

export function grade6ScienceSpineCoverageAudit() {
  const taught = GRADE_6_SCIENCE_SPINE_COVERAGE.filter((row) => row.kind === "taught");
  const overlap = GRADE_6_SCIENCE_SPINE_COVERAGE.filter(
    (row) => row.kind === "overlap",
  );
  return {
    spineItems: GRADE_6_SCIENCE_SPINE_COVERAGE.length,
    taughtCount: taught.length,
    overlapCount: overlap.length,
    taughtIds: taught.map((row) => row.id),
    overlapIds: overlap.map((row) => row.id),
    connectedIds: GRADE_6_SCIENCE_SPINE_COVERAGE.map((row) => row.id),
  };
}
