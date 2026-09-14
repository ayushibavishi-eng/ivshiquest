import type { CurriculumGrade } from "@/domain/curriculum";

/**
 * Grammar teaching phases for future lesson authoring.
 * Curiosity-first — not a worksheet bank.
 */
export const GRAMMAR_LEARNING_PHASES = [
  "wonder",
  "notice",
  "explore",
  "understand",
  "practice",
  "master",
  "use",
  "teach",
] as const;

export type GrammarLearningPhase = (typeof GRAMMAR_LEARNING_PHASES)[number];

export const GRAMMAR_LEARNING_PHASE_LABELS: Record<
  GrammarLearningPhase,
  string
> = {
  wonder: "Wonder",
  notice: "Notice",
  explore: "Explore",
  understand: "Understand",
  practice: "Practice",
  master: "Master",
  use: "Use",
  teach: "Teach It",
};

export const GRAMMAR_DIFFICULTIES = [
  "foundational",
  "developing",
  "secure",
  "advanced",
] as const;

export type GrammarDifficulty = (typeof GRAMMAR_DIFFICULTIES)[number];

export const GRAMMAR_LESSON_STRATEGIES = ["standalone", "hosted"] as const;
export type GrammarLessonStrategy =
  (typeof GRAMMAR_LESSON_STRATEGIES)[number];

/** Reference frameworks only — never copy book text or exercises. */
export type WrenMartinRef = {
  /** High-level section / chapter theme in Wren & Martin tradition. */
  section: string;
  topic: string;
  note?: string;
};

export type GrammarInUseRef = {
  /** Murphy / Grammar in Use family level. */
  level: "essential" | "basic" | "intermediate" | "advanced";
  /** Thematic unit focus — not a page reprint. */
  unitTheme: string;
  note?: string;
};

export type GrammarLessonHostPlan = {
  kind: GrammarLessonStrategy;
  /**
   * Catalogue concept id of the lesson experience that should host this
   * grade slice (chapter core, gold SVA, or future standalone).
   */
  hostConceptId: string;
  /**
   * Whether an IvshiQuest complete lesson already exists for this host
   * at this grade (filled by resolvers; optional in authored data).
   */
  status?: "ready" | "planned";
};

export type GrammarGradeSkill = {
  id: string;
  title: string;
  grade: CurriculumGrade;
  /** What the learner should be able to do at this grade. */
  ableToDo: string;
};

export type GrammarGradeProgression = {
  grade: CurriculumGrade;
  difficulty: GrammarDifficulty;
  /** Grade-specific understanding focus. */
  understand: string;
  /** Grade-specific performance focus. */
  ableToDo: string;
  skills: GrammarGradeSkill[];
  /**
   * Existing English curriculum catalogue concept ids that realise this
   * grade slice (NCERT skill spine / Grammar Craft ids).
   */
  catalogueConceptIds: string[];
  /**
   * Related official NCERT literature chapter concept ids, when the
   * skill is practised inside a textbook text (optional).
   */
  ncertLiteratureIds?: string[];
  lessonHost: GrammarLessonHostPlan;
};

export type GrammarConcept = {
  id: string;
  title: string;
  domainId: string;
  topicId: string;
  /** All grades where this evolving concept appears. */
  grades: CurriculumGrade[];
  /** Entry difficulty (deepens via progression). */
  difficulty: GrammarDifficulty;
  /** Other Grammar Spine concept ids. */
  prerequisites: string[];
  understand: string;
  ableToDo: string;
  progression: GrammarGradeProgression[];
  wrenMartin: WrenMartinRef;
  grammarInUse: GrammarInUseRef;
  /**
   * Default strategy across grades. Individual progression rows may
   * still choose hosted vs standalone (e.g. SVA gold then chapter host).
   */
  lessonStrategy: GrammarLessonStrategy;
};

export type GrammarTopic = {
  id: string;
  title: string;
  domainId: string;
  summary: string;
};

export type GrammarDomain = {
  id: string;
  title: string;
  summary: string;
  topicIds: string[];
};

export type GrammarSpineAudit = {
  domains: number;
  topics: number;
  concepts: number;
  gradeSkillMappings: number;
  conceptsByGrade: Record<CurriculumGrade, number>;
  multiGradeConcepts: number;
  catalogueGrammarIdsCovered: number;
  catalogueGrammarGaps: string[];
};
