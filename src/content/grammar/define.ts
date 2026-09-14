import type { CurriculumGrade } from "@/domain/curriculum";
import type {
  GrammarConcept,
  GrammarDifficulty,
  GrammarGradeProgression,
  GrammarGradeSkill,
  GrammarInUseRef,
  GrammarLessonHostPlan,
  GrammarLessonStrategy,
  WrenMartinRef,
} from "@/content/grammar/types";

type GradeSliceInput = {
  grade: CurriculumGrade;
  difficulty: GrammarDifficulty;
  understand: string;
  ableToDo: string;
  skills: Array<{ title: string; ableToDo: string }>;
  catalogueConceptIds: string[];
  ncertLiteratureIds?: string[];
  lessonHost: GrammarLessonHostPlan;
};

export function defineGrammarConcept(input: {
  id: string;
  title: string;
  domainId: string;
  topicId: string;
  difficulty: GrammarDifficulty;
  prerequisites?: string[];
  understand: string;
  ableToDo: string;
  lessonStrategy: GrammarLessonStrategy;
  wrenMartin: WrenMartinRef;
  grammarInUse: GrammarInUseRef;
  slices: GradeSliceInput[];
}): GrammarConcept {
  const grades = input.slices.map((slice) => slice.grade);
  const progression: GrammarGradeProgression[] = input.slices.map((slice) => {
    const skills: GrammarGradeSkill[] = slice.skills.map((skill, index) => ({
      id: `${input.id}.g${slice.grade}.${index + 1}`,
      title: skill.title,
      grade: slice.grade,
      ableToDo: skill.ableToDo,
    }));
    return {
      grade: slice.grade,
      difficulty: slice.difficulty,
      understand: slice.understand,
      ableToDo: slice.ableToDo,
      skills,
      catalogueConceptIds: slice.catalogueConceptIds,
      ncertLiteratureIds: slice.ncertLiteratureIds,
      lessonHost: slice.lessonHost,
    };
  });

  return {
    id: input.id,
    title: input.title,
    domainId: input.domainId,
    topicId: input.topicId,
    grades: grades as CurriculumGrade[],
    difficulty: input.difficulty,
    prerequisites: input.prerequisites ?? [],
    understand: input.understand,
    ableToDo: input.ableToDo,
    progression,
    wrenMartin: input.wrenMartin,
    grammarInUse: input.grammarInUse,
    lessonStrategy: input.lessonStrategy,
  };
}

export function hosted(
  hostConceptId: string,
  status: "ready" | "planned" = "planned",
): GrammarLessonHostPlan {
  return { kind: "hosted", hostConceptId, status };
}

export function standalone(
  hostConceptId: string,
  status: "ready" | "planned" = "planned",
): GrammarLessonHostPlan {
  return { kind: "standalone", hostConceptId, status };
}

/** Official chapter hosts used for planned Grade 4 embedding. */
export const G4_HOST = {
  together: "ncert-g4-santoor-together-we-can-core",
  bells: "ncert-g4-santoor-the-tinkling-bells-core",
  smart: "ncert-g4-santoor-be-smart-be-safe-core",
  one: "ncert-g4-santoor-one-thing-at-a-time-core",
  stag: "ncert-g4-santoor-the-old-stag-core",
  braille: "ncert-g4-santoor-braille-core",
  fit: "ncert-g4-santoor-fit-body-mind-nation-core",
  lagori: "ncert-g4-santoor-the-lagori-champions-core",
  hekko: "ncert-g4-santoor-hekko-core",
  swing: "ncert-g4-santoor-the-swing-core",
  mountains: "ncert-g4-santoor-magical-mountains-core",
  maheshwar: "ncert-g4-santoor-maheshwar-core",
} as const;

export const G5_HOST = {
  spectacles: "ncert-g5-santoor-papas-spectacles-core",
  scooter: "ncert-g5-santoor-gone-with-the-scooter-core",
  rainbow: "ncert-g5-santoor-the-rainbow-core",
  parrot: "ncert-g5-santoor-the-wise-parrot-core",
  frog: "ncert-g5-santoor-the-frog-core",
  tank: "ncert-g5-santoor-what-a-tank-core",
  gilli: "ncert-g5-santoor-gilli-danda-core",
  panchayat: "ncert-g5-santoor-decision-of-the-panchayat-core",
  vocation: "ncert-g5-santoor-vocation-core",
  bangles: "ncert-g5-santoor-glass-bangles-core",
} as const;

export const G6_HOST = {
  bottle: "ncert-g6-poorvi-bottle-of-dew",
  raven: "ncert-g6-poorvi-raven-and-fox",
  rama: "ncert-g6-poorvi-rama-to-the-rescue",
  friends: "ncert-g6-poorvi-unlikely-best-friends",
  prayer: "ncert-g6-poorvi-friends-prayer",
  chair: "ncert-g6-poorvi-the-chair",
  neem: "ncert-g6-poorvi-neem-baba",
  bird: "ncert-g6-poorvi-what-a-bird-thought",
  spices: "ncert-g6-poorvi-spices-that-heal-us",
  heart: "ncert-g6-poorvi-change-of-heart",
  winner: "ncert-g6-poorvi-the-winner",
  yoga: "ncert-g6-poorvi-yoga-way-of-life",
  bharat: "ncert-g6-poorvi-hamara-bharat",
  kites: "ncert-g6-poorvi-the-kites",
  ila: "ncert-g6-poorvi-ila-sachani",
  memorial: "ncert-g6-poorvi-national-war-memorial",
} as const;

export const G7_HOST = {
  river: "ncert-g7-poorvi-the-day-the-river-spoke-core",
  three: "ncert-g7-poorvi-three-days-to-see-core",
  say: "ncert-g7-poorvi-say-the-right-thing-core",
  tunnel: "ncert-g7-poorvi-the-tunnel-core",
  travel: "ncert-g7-poorvi-travel-core",
  summit: "ncert-g7-poorvi-conquering-the-summit-core",
  homage: "ncert-g7-poorvi-homage-brave-soldiers-core",
  soldiers: "ncert-g7-poorvi-my-dear-soldiers-core",
  abbakka: "ncert-g7-poorvi-rani-abbakka-core",
} as const;

export const G8_HOST = {
  wit: "ncert-g8-poorvi-wit-that-won-hearts-core",
  concrete: "ncert-g8-poorvi-a-concrete-example-core",
  wisdom: "ncert-g8-poorvi-wisdom-paves-the-way-core",
  valour: "ncert-g8-poorvi-tale-of-valour-core",
  mother: "ncert-g8-poorvi-somebodys-mother-core",
  kurien: "ncert-g8-poorvi-verghese-kurien-core",
  fifth: "ncert-g8-poorvi-case-of-the-fifth-word-core",
  brush: "ncert-g8-poorvi-magic-brush-of-dreams-core",
  wonders: "ncert-g8-poorvi-spectacular-wonders-core",
  cherry: "ncert-g8-poorvi-the-cherry-tree-core",
  harvest: "ncert-g8-poorvi-harvest-hymn-core",
  rain: "ncert-g8-poorvi-waiting-for-the-rain-core",
  feathered: "ncert-g8-poorvi-feathered-friend-core",
  glass: "ncert-g8-poorvi-magnifying-glass-core",
  bibha: "ncert-g8-poorvi-bibha-chowdhuri-core",
} as const;

export const SVA_GOLD = "english-sva-simple";
