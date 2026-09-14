export type { Grade, Role, Student, Subject } from "./types";
export { GRADES, SUBJECT_LABELS, SUBJECTS } from "./types";
export type { LearningStage } from "./learning-loop";
export { LEARNING_STAGE_LABELS, LEARNING_STAGES } from "./learning-loop";
export type {
  ActiveQuest,
  ContinueLearning,
  KnowledgeTreeSummary,
  StudentHome,
  TeachItPrompt,
  TodayDiscovery,
} from "./student-home";
export type {
  ConceptGrowth,
  DiscoveryChoice,
  DiscoveryContent,
  DiscoveryExplanation,
  DiscoveryExplorationVisual,
  DiscoveryPhase,
} from "./discovery";
export {
  DISCOVERY_PHASE_LABELS,
  DISCOVERY_PHASES,
  getExplanationForGrade,
  resolveDiscoveryForGrade,
} from "./discovery";
export type {
  CuriosityCategory,
  DiscoveryDifficulty,
  DiscoveryLearnerContext,
} from "./curiosity";
export {
  CURIOSITY_CATEGORIES,
  CURIOSITY_CATEGORY_LABELS,
  RELATED_CURIOSITY_CATEGORIES,
  calendarDateISO,
  hashString,
  subjectForCuriosityCategory,
} from "./curiosity";
export { discoveriesForGrade, discoveryAppliesToCurriculum, selectTodaysDiscovery } from "./curiosity-select";
export { selectTodaysDiscovery as getTodaysDiscovery } from "./curiosity-select";
export type {
  ConceptStatus,
  CuriosityExploration,
  GrowingConcept,
  LearningConnection,
  LearnRecommendation,
  RecommendationSignal,
  StrengthenArea,
  StudentLearn,
  SubjectArea,
  SubjectLearnPath,
} from "./learn";
export { RECOMMENDATION_SIGNALS } from "./learn";
export type {
  StudentThemeDefinition,
  StudentThemeId,
  StudentThemePreference,
  ThemeTokenName,
} from "./theme";
export {
  DEFAULT_STUDENT_THEME_ID,
  STUDENT_THEME_IDS,
} from "./theme";
export type {
  PracticeAttemptSignal,
  PracticeChoice,
  PracticeDifficulty,
  PracticeFormat,
  PracticeQuestion,
  PracticeSessionRecord,
  PracticeSet,
} from "./practice";
export {
  PRACTICE_DIFFICULTIES,
  PRACTICE_FORMATS,
  buildPracticeSummary,
} from "./practice";
export type {
  AskChallenge,
  AskChallengeChoice,
  AskCompanionContext,
  AskConversationMessage,
  AskIvshiEngine,
  AskIvshiErrorBody,
  AskIvshiErrorCode,
  AskIvshiReply,
  AskIvshiRequest,
  AskIvshiResponse,
  AskLearnerContext,
  AskLessonContext,
  AskLearnerProgress,
  AskMessage,
  AskMessageRole,
  AskRespondInput,
  AskResponseChoice,
  AskSuggestedPrompt,
} from "./ask-ivshi";
export {
  ASK_IVSHI_MAX_HISTORY,
  ASK_IVSHI_MAX_MESSAGE_CHARS,
} from "./ask-ivshi";
export type { IvshiCompanionState } from "./ivshi-companion";
export { IVSHI_COMPANION_STATES } from "./ivshi-companion";
export type {
  CompanionFeedbackKind,
  CompanionGradeBand,
} from "./companion-feedback";
export {
  companionFeedbackPhrase,
  companionGradeBand,
  lookTogetherPhrase,
} from "./companion-feedback";
export type {
  CurriculumConcept,
  CurriculumCountry,
  CurriculumExperience,
  CurriculumGrade,
  CurriculumId,
  CurriculumNcertRef,
  CurriculumNode,
  CurriculumProgressState,
  CurriculumQuestion,
  CurriculumSkill,
  CurriculumTopic,
  CurriculumWorld,
  LearningExperiencePhase,
  NcertSourceStatus,
} from "./curriculum";
export {
  CURRICULUM_COUNTRIES,
  CURRICULUM_GRADES,
  CURRICULUM_IDS,
  CURRICULUM_META,
  CURRICULUM_NODE_KINDS,
  DEFAULT_CURRICULUM_ID,
  LEARNING_EXPERIENCE_PHASE_LABELS,
  LEARNING_EXPERIENCE_PHASES,
  NCERT_SOURCE_STATUSES,
  curriculumCountry,
  curriculumLabel,
  isCurriculumGrade,
  isCurriculumId,
  parseCurriculumId,
  resolveCurriculumId,
} from "./curriculum";
export type {
  CompleteLessonDefinition,
  CompleteLessonPhase,
  GradeLessonContent,
  LessonExample,
  LessonExploreActivity,
  LessonExploreInvestigation,
  LessonLoopStage,
  LessonMisconception,
  LessonPrompt,
  LessonQuestion,
  LessonTutorContext,
  OpenResponseEvaluation,
  OpenResponseState,
  ResolvedCompleteLesson,
} from "./complete-lesson";
export {
  COMPLETE_LESSON_PHASE_LABELS,
  COMPLETE_LESSON_PHASES,
  LESSON_LOOP_HINTS,
  LESSON_LOOP_LABELS,
  LESSON_LOOP_STAGES,
  lessonLoopStage,
  OPEN_RESPONSE_STATES,
  SAFE_WRITE_PLACEHOLDER,
  buildLessonTutorContext,
  evaluateOpenResponse,
  isWriteQuestion,
  lessonIdFor,
  normalizeLessonAnswer,
  openResponseAllowsContinue,
  openResponseShowsUnderstanding,
  parseLessonId,
  writeAnswerIsClose,
  writeAnswerMatches,
  writeAnswerSucceeds,
  writeQuestionPlaceholder,
} from "./complete-lesson";
export type {
  LessonVideoAccessibility,
  LessonVideoExplanation,
  LessonVideoPlayback,
  LessonVideoProvider,
  LessonVideoReflection,
  LessonVideoSource,
  LessonVideoSourceKind,
} from "./lesson-video";
export {
  formatLessonVideoDuration,
  lessonHasVideoExplanation,
  resolveLessonVideoPlayback,
} from "./lesson-video";
export type {
  KnowledgeTreeCluster,
  KnowledgeTreeConceptNode,
  KnowledgeTreeDomainBranch,
  KnowledgeTreeEdge,
  KnowledgeTreeFocus,
  KnowledgeTreeGraph,
  KnowledgeTreeLayout,
  KnowledgeTreeNodeState,
  KnowledgeTreeRelationshipKind,
} from "./knowledge-tree";
export {
  KNOWLEDGE_TREE_NODE_STATES,
  KNOWLEDGE_TREE_NODE_STATE_LABELS,
  KNOWLEDGE_TREE_PROGRESS_LABELS,
  KNOWLEDGE_TREE_RELATIONSHIP_KINDS,
  fitLivingTreeView,
  layoutKnowledgeTree,
  layoutLivingKnowledgeTree,
  livingTreeFocusBox,
  livingTreePortraitBox,
  placeLivingTreeLabels,
  resolveKnowledgeTreeNodeState,
} from "./knowledge-tree";
export {
  layoutMagicalKnowledgeTree,
  magicalTreeLabelMode,
  placeMagicalTreeLabels,
} from "./living-tree-layout";
