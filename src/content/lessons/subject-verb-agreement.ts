import type { CompleteLessonDefinition, GradeLessonContent } from "@/domain/complete-lesson";
import { explainQ, q, writeQ } from "@/content/lessons/question";

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
  retrieve: [
    q(
      "sva4-t1",
      "In 'The cats sleep', cats is the... and sleep is the...",
      "subject (who), verb (the action)",
      "verb, subject",
      "adjective, comma",
      "a",
      "Subject = who or what the sentence is about. Verb = the action or matching form of be.",
      "Who is the sentence about? What are they doing?",
      "Mixing up subject and verb makes the -s rule impossible to apply.",
      {
        a: "Cats do the sleeping.",
        b: "Sleep is what they do; cats are who.",
        c: "Those are not the jobs here.",
      },
    ),
    writeQ(
      "sva4-t2",
      "Write the matching verb: The dog ____ (bark).",
      ["barks"],
      "One dog is singular, like it. It barks. The dogs bark.",
      "Is there one dog or more than one?",
      "Copying the plural -s from dogs onto the verb, or leaving bark with a singular, both break the match.",
    ),
  ],
  misconceptions: [
    {
      idea: "If the noun already has -s, the verb should have -s too.",
      correction:
        "The noun's -s (plural) and the verb's -s (singular he/she/it) are different jobs. The cats run. The cat runs.",
    },
    {
      idea: "Add -s to the verb whenever the sentence 'feels finished'.",
      correction:
        "Match the subject. I/you/we/they and plurals take the bare verb: they run, not they runs.",
    },
  ],
  reflect: {
    prompt:
      "Write two sentences about your morning: one with a singular subject and one with a plural subject. Check the verbs.",
    keyIdeas: ["singular", "plural"],
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
    keyIdeas: ["barks", "bark", "plays"],
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
  retrieve: [
    q(
      "sva5-t1",
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
      "sva5-t2",
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
        b: "Are would match shoes if shoes were the subject.",
        c: "Be is not the agreeing present form here.",
      },
    ),
  ],
  misconceptions: [
    {
      idea: "Agree with the nearest noun, even if it sits in an of-phrase.",
      correction:
        "Find the head subject. The box of pencils is open (box is). The pencils are sharp (pencils are).",
    },
    {
      idea: "After does, add -s to the main verb too.",
      correction:
        "Does already matches she/he/it. The main verb stays bare: Does she play?",
    },
  ],
  reflect: {
    prompt:
      "Write a question with does and a statement with a phrase like 'a box of…'. Check both verbs.",
    keyIdeas: ["does", "box"],
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
    keyIdeas: ["does", "play", "box"],
  },
};

const grade6: GradeLessonContent = {
  objective:
    "Find the subject and the verb, match singular and plural in the present tense, handle compound and tricky subjects, correct and create sentences, and explain why a verb is right.",
  wonder: {
    prompt:
      "Why might 'There is many reasons' sound ordinary in speech but still be the wrong match on the page?",
  },
  explore: {
    text: "First find the subject (who or what the sentence is about) and the verb (the action, or a form of be/do/have). Then match number: singular subjects take singular verbs (she runs, the cat is); plural subjects take plural verbs (they run, the cats are). The real subject is not always the first noun you hear.",
    activity: {
      prompt: "Classify these. Which sentence treats the delayed subject honestly?",
      models: [
        {
          caption: "Flip the sentence",
          diagram: "There are two mangoes.\n→ Two mangoes are there.",
        },
        {
          caption: "Compound with and",
          diagram: "Riya and Aman are here.\n(two people → plural verb)",
        },
      ],
      choices: [
        {
          id: "are",
          label: "There are two mangoes in the bowl.",
          note: "Yes. Two mangoes is the real subject, so are. There is not the subject.",
        },
        {
          id: "is-many",
          label: "There is two mangoes in the bowl.",
          note: "Two mangoes is plural. There is would match one mango: There is a mango.",
        },
        {
          id: "and-wrong",
          label: "Riya and Aman is here.",
          note: "And joins two people, so the subject is plural: Riya and Aman are here.",
        },
      ],
    },
  },
  understand: {
    paragraphs: [
      "Subject versus verb: The cat sleeps. Subject = the cat (who). Verb = sleeps (what they do). In the simple present, he/she/it and one person or thing usually take -s/-es: she runs. I, you, we, they, and plurals take the bare verb: they run.",
      "Do not agree with the nearest tempting noun. The quality of the recordings is poor (quality is). The recordings are poor (recordings are). A list of names is on the desk (list is).",
      "There/here sentences: the true subject follows the verb. Flip to test. There are crumbs → crumbs are there. Spoken there's + plural is common in talk; standard writing still uses there are for a plural subject.",
      "Compound subjects: Riya and Aman are here (and → usually plural). With or/nor, agree with the nearer subject: Either the teacher or the students are ready; Either the students or the teacher is ready.",
      "Tricky singulars in standard writing: each, every, nobody, everyone take a singular verb. Everyone is here. Each of the answers is numbered — each is the subject, not answers.",
    ],
  },
  examples: [
    {
      caption: "Delayed subject",
      body: "Wrong: There is many ways. Right: There are many ways. Test: Many ways are there.",
    },
    {
      caption: "Head noun, not the nearest noun",
      body: "The cluster of islands is beautiful (cluster). The islands are beautiful (islands).",
    },
    {
      caption: "And versus or",
      body: "Aman and his brothers are driving (and → plural). Either his brothers or Aman is driving (or → nearer subject Aman).",
    },
    {
      caption: "Correction",
      body: "Wrong: Each of the windows are stuck. Right: Each of the windows is stuck.",
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
      "In 'The birds sing', the subject is... and the verb is...",
      "birds (plural who), sing (the action)",
      "sing (who), birds (the action)",
      "the (who), birds (the action)",
      "a",
      "Subject = who or what. Verb = what they do. Birds is plural, so the verb stays sing, not sings.",
      "Who is the sentence about? What are they doing?",
      "Mixing subject and verb makes agreement guesses.",
      {
        a: "Plural subject, bare present-tense verb.",
        b: "Sing is not a person.",
        c: "The is a determiner, not the subject.",
      },
    ),
    writeQ(
      "sva6-p2",
      "Correct this sentence. Write the full corrected sentence: The list of names are on the board.",
      [
        "thelistofnamesisontheboard.",
        "thelistofnamesisontheboard",
        "alistofnamesisontheboard.",
        "alistofnamesisontheboard",
      ],
      "List is the head, singular → is. Names is not the subject. The list of names is on the board.",
      "Cover of names. What is left as the subject?",
      "The nearest plural noun (names) is the trap.",
    ),
    q(
      "sva6-p3",
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
    writeQ(
      "sva6-p4",
      "Write one present-tense sentence of your own with a compound subject joined by and. Use a matching verb.",
      [],
      "And usually makes a plural subject: Riya and Aman are here. Meera and I walk to school. The verb should match more-than-one.",
      "Two people or things joined by and — then pick are/walk/play, not is/walks.",
      "Keeping a singular verb after and is the usual miss (Riya and Aman is…).",
      ["and"],
    ),
    q(
      "sva6-p5",
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
    q(
      "sva6-p6",
      "Either the coaches or the captain ____ speaking.",
      "is",
      "are",
      "be",
      "a",
      "With or, agree with the nearer subject: captain is singular, so is. Flip: Either the captain or the coaches are speaking.",
      "Or/nor → nearer subject.",
      "There is no 'always are after or'.",
      {
        a: "Nearer-subject rule.",
        b: "Are would be right if coaches were nearer: Either the captain or the coaches are speaking.",
        c: "Be is not the agreeing present form here.",
      },
    ),
  ],
  reasoning: [
    explainQ(
      "sva6-r1",
      "A classmate says: 'In A list of names ___, the word near the verb is names, so the verb must be are.' Why is that wrong?",
      "The head of the noun phrase is list; of names only describes it. The verb matches the real subject, not the nearest noun. So is is the match: A list of names is on the board. You can test by replacing the whole subject with it: It is on the board.",
      "Cover the of-phrase. What is the sentence still about?",
      "Agreeing with the nearest noun is the misconception.",
      ["list", "names", "subject"],
    ),
    explainQ(
      "sva6-r2",
      "Why is 'There is many reasons' wrong in standard writing even if people say it?",
      "There is not the subject. The real subject is many reasons, which is plural, so the verb should be are: There are many reasons. Flip the sentence: Many reasons are there. Casual speech (there's + plural) is not the written rule.",
      "Flip the sentence and find who or what exists.",
      "Letting spoken 'there's' decide the written verb is the trap.",
      ["there", "reasons", "are"],
    ),
    q(
      "sva6-r3",
      "Why is 'Does she plays cricket?' wrong even though she often takes -s?",
      "Does already matches she; the main verb must stay play",
      "She never takes -s",
      "Plays is needed because cricket is plural",
      "a",
      "The helper holds the agreement. Does she play? / She plays. You do not mark both.",
      "Compare She plays with Does she play?",
      "Double -s (does + plays) is the extra error.",
      {
        a: "One agreement mark, not two.",
        b: "She plays when there is no does.",
        c: "The sport's name is not driving the verb ending.",
      },
    ),
  ],
  retrieve: [
    q(
      "sva6-t1",
      "Riya and Aman ____ ready. Why that verb?",
      "are — and joins two people, so the subject is plural",
      "is — pick the first name only",
      "is — because ready is an adjective",
      "a",
      "Compound subject with and is usually plural. Adjectives do not pick is/are by themselves.",
      "How many people is the sentence about?",
      "Choosing the first noun only, or letting the adjective decide, both fail.",
      {
        a: "Two people → are.",
        b: "Both names are the subject.",
        c: "Ready describes them; the verb still matches the subject.",
      },
    ),
    writeQ(
      "sva6-t2",
      "Correct this sentence. Write the full corrected sentence: Each of the answers are wrong.",
      [
        "eachoftheanswersiswrong.",
        "eachoftheanswersiswrong",
        "eachoftheanswersiswrong!",
      ],
      "Each is singular. Answers sits in an of-phrase. Each of the answers is wrong.",
      "Who is the real subject — each or answers?",
      "The nearest plural (answers) stealing are is the trap.",
    ),
    q(
      "sva6-t3",
      "The bird ____ every morning. (present tense)",
      "sings",
      "sing",
      "singing",
      "a",
      "One bird is singular, like it. It sings. The birds sing. Singing would need a helper (is singing).",
      "One bird or many?",
      "A singular noun still needs the -s on the present-tense verb.",
      {
        a: "Third-person singular takes -s.",
        b: "Sing would match they or the birds.",
        c: "Singing is not the simple-present match here.",
      },
    ),
  ],
  misconceptions: [
    {
      idea: "Agree with the nearest noun (the word sitting just before the verb).",
      correction:
        "Agree with the real subject. The box of pencils is open. The colour of the walls is bright.",
    },
    {
      idea: "There's + plural is the written rule because it sounds natural.",
      correction:
        "In standard writing, there are matches a plural subject: There are many reasons. Flip the sentence to test.",
    },
    {
      idea: "If the noun already has -s, add -s to the verb too — or add -s after does as well.",
      correction:
        "Plural nouns take a bare verb: The cats run. Does already carries the agreement: Does she play?",
    },
    {
      idea: "And and or follow the same rule.",
      correction:
        "And usually makes a plural subject. With or/nor, match the nearer subject.",
    },
  ],
  reflect: {
    prompt:
      "What used to trick you about matching verbs — nearest nouns, there is, or compound subjects? What do you check now before you pick is/are or -s?",
    keyIdeas: ["subject", "verb"],
  },
  mastery: q(
    "sva6-m1",
    "Which explanation is complete and true?",
    "The verb matches the real subject — which may come after there, hide behind of, sit nearer after or, or become plural with and — not simply the closest plural-looking noun",
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
    "You can name the subject and verb, match singular/plural in the present tense, correct there is + plural and of-phrase traps, handle and versus or, write a sentence of your own, and explain why the verb is correct — not merely pick a letter.",
  teach: {
    prompt:
      "Teach Ivshi how to find the real subject, then show: a singular and a plural pair (The bird sings / The birds sing), a there are sentence, a list of names is sentence, and a Riya and Aman are sentence. Explain why each verb matches.",
    keyIdeas: ["subject", "sings", "there", "list"],
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
