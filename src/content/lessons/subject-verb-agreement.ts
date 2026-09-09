import type { CompleteLessonDefinition, GradeLessonContent } from "@/domain/complete-lesson";
import { q } from "@/content/lessons/question";

const grade4: GradeLessonContent = {
  objective:
    "Make a present-tense verb match a simple subject: add -s or -es for he, she, it, or a singular noun; keep the bare verb for I, you, we, they, and plural nouns.",
  wonder: {
    prompt:
      "Why do we say 'The cat sleeps' but 'The cats sleep'? The action is the same — so what changed?",
  },
  explore: {
    text: "In the simple present, the verb has to match the subject the way partners match in a dance. For he, she, it, or one name (Riya, the dog), we usually add -s or -es: she runs, it buzzes, Riya watches. For I, you, we, they, or more than one (the dogs), we do not add that -s: they run, I watch.",
    activity: {
      prompt: "Which sentence is dressed correctly?",
      choices: [
        {
          id: "match",
          label: "The dogs bark at the gate.",
          note: "Yes. Dogs is plural, so the verb stays bark — not barks.",
        },
        {
          id: "mismatch",
          label: "The dogs barks at the gate.",
          note: "That -s on barks is the singular ending. Plural dogs already mean more than one, so the verb should be bark.",
        },
        {
          id: "one-wrong",
          label: "The dog bark at the gate.",
          note: "One dog is singular, like he or it. It needs barks.",
        },
      ],
    },
  },
  understand: {
    paragraphs: [
      "Find the subject first: who or what is the sentence about? Then choose the verb form that matches.",
      "Singular third person (he, she, it, the cat, Meera) takes -s or -es in the simple present: The cat sleeps. Meera goes. It catches.",
      "I, you, we, they, and plurals take the bare verb: I sleep. They sleep. The cats sleep.",
      "A common mix-up is putting -s on the verb because the sentence 'feels finished', or copying the plural -s from the noun onto the verb. The noun's -s and the verb's -s are different jobs.",
    ],
  },
  examples: [
    {
      caption: "One versus many",
      body: "The bird sings. The birds sing. Same action, different match.",
    },
    {
      caption: "-es after certain endings",
      body: "She watches, he goes, it buzzes. After -ch, -sh, -s, -x, -z, and often -o, we use -es so the word is easy to say.",
    },
    {
      caption: "A mistake and a correction",
      body: "Wrong: They sings loudly. Right: They sing loudly. They is plural, so no -s on the verb.",
    },
  ],
  connection:
    "Captions, diary sentences, and 'what happens every day' all use this match: She walks to school. We walk together.",
  try: {
    prompt: "Fill the gap: 'Aarav ____ (play) cricket on Sundays.' Should the verb be play or plays?",
    reveal:
      "Plays. Aarav is one person, like he. He plays. If the subject were Aarav and Riya, you would say play.",
  },
  practice: [
    q(
      "sva4-p1",
      "Choose the matching verb: The kites ____ in the sky.",
      "fly",
      "flies",
      "flying",
      "a",
      "Kites is plural, so fly. Flies would match it or the kite.",
      "Is there one kite or more than one?",
      "Do not add -s just because the noun already has -s.",
      {
        a: "Plural subject, bare verb.",
        b: "Flies is the singular form (it flies).",
        c: "Flying would need a helping verb (are flying).",
      },
    ),
    q(
      "sva4-p2",
      "Which sentence is correct?",
      "My sister walks to the bus.",
      "My sister walk to the bus.",
      "My sisters walks to the bus.",
      "a",
      "Sister is singular → walks. Sisters (plural) would take walk: My sisters walk.",
      "Point to the subject. One sister or more?",
      "The last option mixes a plural noun with a singular verb.",
      {
        a: "Singular subject, -s on the verb.",
        b: "Walk is the form for they or I, not she.",
        c: "Sisters need walk, not walks.",
      },
    ),
    q(
      "sva4-p3",
      "He ____ water every morning.",
      "drinks",
      "drink",
      "drinking",
      "a",
      "He takes drinks. Drink would match they. Drinking needs is/are.",
      "He, she, it — add -s in simple present.",
      "Bare drink belongs with I/you/we/they.",
      {
        a: "He drinks.",
        b: "They drink, not he drink.",
        c: "Not a complete simple-present match by itself.",
      },
    ),
  ],
  reasoning: [
    q(
      "sva4-r1",
      "A learner writes: 'The cats runs.' What went wrong?",
      "The noun is plural, so the verb should be run, not runs",
      "Cats always take -s on the verb as well",
      "Runs is past tense",
      "a",
      "Cats already shows more than one. The verb should stay run. Runs is for one cat / it.",
      "Read the subject aloud: one cat or many cats?",
      "Two -s endings stacked is the mix-up.",
      {
        a: "Match plural to the bare verb.",
        b: "That would be The cat runs, not the cats.",
        c: "Runs is present, not past (ran).",
      },
    ),
    q(
      "sva4-r2",
      "Which pair is consistently matched?",
      "It buzzes / They buzz",
      "It buzz / They buzzes",
      "It buzzing / They buzzes",
      "a",
      "It (singular) → buzzes. They (plural) → buzz. The others swap the rule.",
      "Replace it with the bee, they with the bees.",
      "Keep simple present, not -ing without a helper.",
      {
        a: "Both sides follow the rule.",
        b: "Those two are both mismatches.",
        c: "Buzzing needs is/are; buzzes does not belong with they.",
      },
    ),
  ],
  reflect: {
    prompt:
      "Write two sentences about your morning: one with a singular subject and one with a plural subject. Check the verbs.",
  },
  mastery: q(
    "sva4-m1",
    "In the simple present, a verb like run becomes runs when the subject is...",
    "he, she, it, or one person/thing",
    "always we or they",
    "any word that ends with s",
    "a",
    "Third-person singular takes -s/-es. We/they do not. A plural noun ending in s still takes the bare verb.",
    "The cat runs. The cats run.",
    "A noun's plural -s is not a signal to add another -s on the verb.",
    {
      a: "That is the match to remember.",
      b: "We run, they run.",
      c: "Buses (plural noun) still take run: The buses run late.",
    },
  ),
  masteryCriteria:
    "You can write The bird sings and The birds sing, and correct They sings.",
  teach: {
    prompt:
      "Teach Ivshi the -s rule using The dog barks and The dogs bark. Then correct this mistake: 'She play football.'",
  },
};

const grade5: GradeLessonContent = {
  objective:
    "Choose the matching present-tense verb including is/are and do/does, and keep agreement when a short phrase sits after the subject.",
  wonder: {
    prompt:
      "We say 'Does she play?' but 'Do they play?' The word do changes. What is it matching?",
  },
  explore: {
    text: "Helpers have to agree too. He/she/it takes does and is (and has). I takes am. You/we/they take do and are (and have). A phrase after the subject can trick you: The box of crayons is heavy — the subject is box, not crayons.",
    activity: {
      prompt: "Pick the sentence where the helper matches the subject.",
      choices: [
        {
          id: "does",
          label: "Does Riya know the way?",
          note: "Yes. Riya is like she, so does. Do Riya would be the mismatch.",
        },
        {
          id: "do-riya",
          label: "Do Riya know the way?",
          note: "Do matches they/you/we, not a single name.",
        },
        {
          id: "is-they",
          label: "Is they ready?",
          note: "They takes are: Are they ready?",
        },
      ],
    },
  },
  understand: {
    paragraphs: [
      "Simple present agreement includes main verbs and helpers: She does her work. They do their work. He is late. They are late.",
      "Questions move the helper: Does she play? Do they play? The main verb in that pattern stays bare: Does she play? not Does she plays?",
      "Ignore extra words that are not the head subject. The colour of the walls is bright (colour is). The walls are bright (walls are).",
      "A frequent mistake in questions: Does they come? Fix: Do they come? Another: She don't know. Fix: She doesn't know.",
    ],
  },
  examples: [
    {
      caption: "Helpers",
      body: "He is / They are. She does / They do. She has / They have.",
    },
    {
      caption: "Question form",
      body: "Wrong: Does they sings? Right: Do they sing? One helper, one match, bare main verb.",
    },
    {
      caption: "Phrase after the subject",
      body: "The bunch of keys is on the table. Bunch is singular. The keys are on the table. Keys is plural.",
    },
  ],
  connection:
    "Notices ('The office opens at 9') and questions ('Does the office open at 9?') both need this match.",
  try: {
    prompt: "Correct this: 'The box of pencils are open.' Who is the real subject?",
    reveal:
      "Box is the subject (singular). Of pencils is extra. The box of pencils is open. If you mean the pencils, say The pencils are sharpened.",
  },
  practice: [
    q(
      "sva5-p1",
      "Choose the correct question.",
      "Does she like mangoes?",
      "Do she like mangoes?",
      "Does she likes mangoes?",
      "a",
      "She → does. The main verb stays like, not likes, after does.",
      "Helper matches she; the second verb stays bare.",
      "Double -s (does + likes) is a common extra error.",
      {
        a: "Does + she + like.",
        b: "Do belongs with they/you/we.",
        c: "Does already carries the -s; likes would double it.",
      },
    ),
    q(
      "sva5-p2",
      "The pair of shoes ____ by the door.",
      "is",
      "are",
      "be",
      "a",
      "Pair is the head noun (singular), so is. Shoes is inside the phrase.",
      "Cover 'of shoes'. What is left as the subject?",
      "Nearby plurals steal the verb if you are not careful.",
      {
        a: "A pair is one set.",
        b: "Are would match shoes if shoes were the subject: The shoes are by the door.",
        c: "Be is not the agreeing present form here.",
      },
    ),
    q(
      "sva5-p3",
      "They ____ want extra spice.",
      "don't",
      "doesn't",
      "isn't",
      "a",
      "They + do not = don't. Doesn't matches he/she/it. Isn't is for is, not want.",
      "Replace they with the children.",
      "Don't/doesn't is still agreement.",
      {
        a: "They don't want...",
        b: "She doesn't, not they doesn't.",
        c: "Isn't does not partner with want in this sentence.",
      },
    ),
  ],
  reasoning: [
    q(
      "sva5-r1",
      "Why is 'Does she plays cricket?' wrong even though she needs -s somewhere?",
      "Does already matches she; the main verb must stay play",
      "She never takes -s",
      "Plays is needed because cricket is plural",
      "a",
      "The helper holds the agreement. Does she play? / She plays. You do not mark both.",
      "Compare She plays with Does she play?",
      "Cricket as a sport is not 'plural -s on the verb'.",
      {
        a: "One agreement mark, not two.",
        b: "She plays when there is no does.",
        c: "The sport's name is not driving the verb ending.",
      },
    ),
    q(
      "sva5-r2",
      "The flowers in the vase ____ fresh. Why is are the honest choice?",
      "Flowers is the subject, and it is plural; in the vase is extra information",
      "Vase is plural",
      "Fresh always takes is",
      "a",
      "Head noun flowers → are. The vase is the place, not the subject.",
      "What is doing the 'being fresh'?",
      "The last noun before the verb is not automatically the subject.",
      {
        a: "That is reading past the extra phrase.",
        b: "Vase is singular anyway.",
        c: "Adjectives do not pick is/are by themselves.",
      },
    ),
  ],
  reflect: {
    prompt:
      "Write a question with does and a statement with a phrase like 'a box of…'. Check both verbs.",
  },
  mastery: q(
    "sva5-m1",
    "Choose the fully correct set.",
    "She does her sums. Do they need help? The bag of books is heavy.",
    "She do her sums. Does they need help? The bag of books are heavy.",
    "She does her sums. Do they needs help? The bags of book is heavy.",
    "a",
    "Helpers match; main verbs stay bare after do/does; bag is the singular head.",
    "Check each sentence on its own.",
    "The wrong sets mix several agreement mistakes.",
    {
      a: "All three matches hold.",
      b: "Do/does are swapped and bag disagrees.",
      c: "Needs after do is an extra -s; bags/book is messy too.",
    },
  ),
  masteryCriteria:
    "You can use do/does and is/are correctly, keep the main verb bare after does, and agree with the head noun before an of-phrase.",
  teach: {
    prompt:
      "Teach Ivshi why we say Does she play? not Does she plays?, and why The box of crayons is heavy even though crayons looks plural.",
  },
};

const grade6: GradeLessonContent = {
  objective:
    "Keep subject-verb agreement when the subject is delayed, compound, or separated from the verb, and explain the choice.",
  wonder: {
    prompt:
      "Why might 'There is many reasons' sound ordinary in speech but still be the wrong match on the page?",
  },
  explore: {
    text: "The verb agrees with the real subject, which is not always the first noun you hear. In there is / there are, the true subject follows the verb: There are three cups. Compound subjects joined by and are usually plural: Riya and Aman are here. With or/nor, agree with the nearer subject: Either the teacher or the students are ready; Either the students or the teacher is ready.",
    activity: {
      prompt: "Which sentence treats the delayed subject honestly?",
      choices: [
        {
          id: "are",
          label: "There are two mangoes in the bowl.",
          note: "Yes. Two mangoes is the real subject, so are. There is a helper-shaped word, not the subject.",
        },
        {
          id: "is-many",
          label: "There is two mangoes in the bowl.",
          note: "Two mangoes is plural. There is would match one mango: There is a mango.",
        },
        {
          id: "list",
          label: "There is a plate, two cups, and a jug — wait, that lists more than one thing so are is safer.",
          note: "A list of things is plural: There are a plate, two cups, and a jug. (Style can vary; agreement still tracks more-than-one.)",
        },
      ],
    },
  },
  understand: {
    paragraphs: [
      "Agreement is with grammatical number, not with the nearest tempting noun. The quality of the recordings is poor (quality is). The recordings are poor (recordings are).",
      "There/here sentences: flip them to test. There are crumbs → crumbs are there. There is a crumb → a crumb is there.",
      "Each, every, nobody, everyone take a singular verb in standard written English: Everyone is here. Each of the answers is numbered.",
      "In careful writing, do not let a long plural phrase after of steal a singular head: A list of names is on the desk (list is).",
    ],
  },
  examples: [
    {
      caption: "Delayed subject",
      body: "Wrong: There is many ways. Right: There are many ways. Test: Many ways are there.",
    },
    {
      caption: "Head noun",
      body: "The cluster of islands is beautiful (cluster). The islands are beautiful (islands).",
    },
    {
      caption: "Or / nor",
      body: "Either Aman or his brothers are driving. Either his brothers or Aman is driving. Agree with the nearer subject.",
    },
  ],
  connection:
    "Reports, notices, and science conclusions ('There are three causes…') go wrong quickly if there is is used for every opener.",
  try: {
    prompt: "Fix: 'Each of the windows are stuck.' Then say why your fix works.",
    reveal:
      "Each of the windows is stuck. Each is singular. Windows sits in an of-phrase and does not own the verb in standard writing.",
  },
  practice: [
    q(
      "sva6-p1",
      "Choose the standard written match.",
      "A list of names is on the board.",
      "A list of names are on the board.",
      "A list of name are on the board.",
      "a",
      "List is the head, singular → is. Names is not the subject.",
      "Cover of names.",
      "The nearest plural noun is the trap.",
      {
        a: "List is.",
        b: "Are would match names if names were the subject.",
        c: "That also breaks the noun phrase.",
      },
    ),
    q(
      "sva6-p2",
      "There ____ several reasons to wait.",
      "are",
      "is",
      "be",
      "a",
      "Several reasons is plural, so there are. Flip: Several reasons are there.",
      "Find the noun after there.",
      "Spoken 'there's lots' is not the written rule.",
      {
        a: "There are several reasons.",
        b: "There is a reason (singular).",
        c: "Be is not agreeing here.",
      },
    ),
    q(
      "sva6-p3",
      "Everyone in the teams ____ a badge.",
      "has",
      "have",
      "are",
      "a",
      "Everyone is singular in standard English → has. Teams is inside a phrase.",
      "Everyone = every person, treated as one unit grammatically.",
      "Nearby plurals (teams) steal have/are.",
      {
        a: "Everyone has.",
        b: "They have would work if the subject were they.",
        c: "Are does not partner with a badge in this pattern.",
      },
    ),
  ],
  reasoning: [
    q(
      "sva6-r1",
      "A classmate argues: 'The phrase near the verb is names, so the verb must be are in A list of names ___.' How do you answer?",
      "The head of the noun phrase is list; of names only describes it, so is is the match",
      "The classmate is right because English always agrees with the last noun",
      "Both is and are are always correct",
      "a",
      "Modifiers after of do not become the subject. Last-noun agreement is the misconception.",
      "Replace the whole subject with it: It is on the board.",
      "Proximity is not the grammar rule.",
      {
        a: "Head noun wins.",
        b: "Last noun would make The colour of the walls are... which is non-standard.",
        c: "Standard writing chooses one match.",
      },
    ),
    q(
      "sva6-r2",
      "Either the coaches or the captain ____ speaking. Which verb, and why?",
      "is — agree with captain, the nearer subject after or",
      "are — always use are after or",
      "is — because coaches looks like a country",
      "a",
      "With or, the nearer subject (captain) is singular, so is. Flip the order and it becomes are: Either the captain or the coaches are speaking.",
      "Or/nor → nearer subject.",
      "There is no 'always are after or'.",
      {
        a: "Nearer-subject rule.",
        b: "Either the captain or the coaches are... would use are because coaches is nearer.",
        c: "Coaches is a plural job title, not the reason here.",
      },
    ),
  ],
  reflect: {
    prompt:
      "Write one there are sentence, one each/everyone sentence, and one sentence with of-phrase. Underline the real subject in each.",
  },
  mastery: q(
    "sva6-m1",
    "Which explanation is complete and true?",
    "The verb matches the real subject — which may come after there, hide behind of, or sit nearer after or — not simply the closest plural-looking noun",
    "Always match the verb to the longest word in the sentence",
    "Spoken habits like 'there's many' are the written rule",
    "a",
    "Find the real subject, then match. Length and casual speech are not tests.",
    "Name the subject before you pick is/are.",
    "There's + plural is common in talk and marked in formal writing.",
    {
      a: "That is the Grade 6 control.",
      b: "Length is irrelevant.",
      c: "We are practising standard written agreement.",
    },
  ),
  masteryCriteria:
    "You can correct there is + plural, each/everyone + plural verb, and of-phrase traps, and explain the real subject.",
  teach: {
    prompt:
      "Teach Ivshi how to find the real subject in 'There are two reasons' and in 'A list of names is on the desk', then fix 'Each of the answers are wrong.'",
  },
};

export const subjectVerbAgreementLesson: CompleteLessonDefinition = {
  conceptId: "english-sva-simple",
  subject: "english",
  title: "Subject-Verb Agreement",
  domainTitle: "Subject-Verb Agreement",
  grades: [4, 5, 6],
  prerequisites: ["english-nouns-common-proper", "english-verb-action"],
  nextConceptIds: ["english-sva-tricky"],
  byGrade: {
    4: grade4,
    5: grade5,
    6: grade6,
  },
};
