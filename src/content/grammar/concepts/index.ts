import { NOUNS_PRONOUNS_CONCEPTS } from "@/content/grammar/concepts/nouns-pronouns";
import { VERBS_SVA_TENSES_CONCEPTS } from "@/content/grammar/concepts/verbs-sva-tenses";
import { MODIFIERS_JOINS_CONCEPTS } from "@/content/grammar/concepts/modifiers-joins";
import { SENTENCES_CLAUSES_CONCEPTS } from "@/content/grammar/concepts/sentences-clauses";
import { VOICE_SPEECH_USAGE_CONCEPTS } from "@/content/grammar/concepts/voice-speech-usage";
import type { GrammarConcept } from "@/content/grammar/types";

export const GRAMMAR_CONCEPTS: GrammarConcept[] = [
  ...NOUNS_PRONOUNS_CONCEPTS,
  ...VERBS_SVA_TENSES_CONCEPTS,
  ...MODIFIERS_JOINS_CONCEPTS,
  ...SENTENCES_CLAUSES_CONCEPTS,
  ...VOICE_SPEECH_USAGE_CONCEPTS,
];
