import type { CurriculumExperience } from "@/domain/curriculum";

function q(
  id: string,
  prompt: string,
  a: string,
  b: string,
  c: string,
  correct: "a" | "b" | "c",
  explanation: string,
): CurriculumExperience["practice"][number] {
  const choices = [
    { id: `${id}-a`, letter: "A", text: a },
    { id: `${id}-b`, letter: "B", text: b },
    { id: `${id}-c`, letter: "C", text: c },
  ];
  return {
    id,
    prompt,
    choices,
    correctChoiceId: `${id}-${correct}`,
    explanation,
  };
}

export const equivalentFractionsExperience: CurriculumExperience = {
  wonder: {
    prompt: "If you cut a sandwich in half, then cut each half in two, do 2/4 and 1/2 name the same amount?",
  },
  explore: {
    text: "Equivalent fractions name the same amount with different numbers. You can split each part into smaller equal parts, or group small parts into bigger ones, without changing how much you have.",
  },
  understand: {
    text: "Multiply or divide the top and the bottom by the same number (not zero). 1/2 becomes 2/4 when both numbers are multiplied by 2. The amount stays the same; only the size of the pieces changes.",
  },
  try: {
    prompt: "Is 3/6 the same amount as 1/2?",
    note: "Yes. Dividing 3 and 6 by 3 gives 1/2. Three of six equal pieces is half.",
  },
  practice: [
    q("eqf-q1", "Which fraction is equivalent to 1/2?", "2/4", "2/3", "3/5", "a", "2/4 is the same amount as 1/2."),
    q("eqf-q2", "Is 3/6 equivalent to 1/2?", "Yes", "No", "Only at night", "a", "3/6 simplifies to 1/2."),
    q("eqf-q3", "Which pair shows the same amount?", "2/5 and 4/10", "2/5 and 3/10", "1/2 and 2/5", "a", "2/5 and 4/10 both grow by ×2."),
  ],
  reflect: {
    prompt: "How would you explain equivalent fractions to a friend using a sandwich?",
  },
  mastery: {
    ...q(
      "eqf-m1",
      "Equivalent fractions are different names for...",
      "the same amount",
      "always a bigger amount",
      "numbers that cannot be compared",
      "a",
      "The pieces look different, but the amount is the same.",
    ),
  },
  examples: ["1/2 = 2/4 = 3/6", "2/3 = 4/6"],
  connection: "Recipes, money, and sharing food all use different names for the same amount.",
  teach: {
    prompt: "Teach Ivshi why 2/4 is still half, using your own words.",
  },
};

export const placeValueExperience: CurriculumExperience = {
  wonder: {
    prompt: "In 3,406, why does the 3 mean so much more than the 4?",
  },
  explore: {
    text: "Place value tells what a digit is worth because of where it sits. In 3,406 the 3 is thousands, the 4 is hundreds, the 0 is tens, and the 6 is ones.",
  },
  understand: {
    text: "Each place is ten times the place to its right. A digit of 0 holds the place even when there is nothing to count there. Reading the number means saying each place in order.",
  },
  try: {
    prompt: "What is the value of 5 in 2,570?",
    note: "The 5 is in the tens place, so it is 50, not 5 or 500.",
  },
  practice: [
    q("pv-q1", "In 4,218, the 2 means...", "2 tens", "2 hundreds", "2 thousands", "b", "The 2 sits in the hundreds place."),
    q("pv-q2", "Which number has 3 thousands?", "3,042", "304", "43", "a", "3,042 has 3 in the thousands place."),
    q("pv-q3", "The 0 in 5,076 is needed because...", "it holds the tens place", "zero always means one hundred", "it makes the number smaller than 5", "a", "Without 0, 5,076 would look like 576."),
  ],
  reflect: {
    prompt: "Why does moving a digit one place to the left make it ten times greater?",
  },
  mastery: q(
    "pv-m1",
    "Place value is mainly about...",
    "what a digit is worth in its place",
    "the color of a digit",
    "whether a number is even",
    "a",
    "Where a digit sits decides its value.",
  ),
  connection: "House numbers, money, and scores all depend on place value.",
};

export const plantsNeedExperience: CurriculumExperience = {
  wonder: {
    prompt: "A plant has no mouth. So how does it 'eat' and stay alive?",
  },
  explore: {
    text: "Green plants make their own food using light, air, water, and minerals from soil. Leaves catch light. Roots take up water. This is not the same as animals chewing food.",
  },
  understand: {
    text: "Photosynthesis uses sunlight, carbon dioxide, and water to make sugar and oxygen. Plants also need space and the right temperature. Without light, most green plants cannot keep making food.",
  },
  try: {
    prompt: "A plant left in a dark cupboard for weeks looks pale and weak. What did it miss most?",
    note: "Light. Without light, it cannot make food well.",
  },
  practice: [
    q("pl-q1", "Green plants mainly make food in their...", "leaves", "flowers only", "wooden stems only", "a", "Leaves are the usual food-making places."),
    q("pl-q2", "Roots are especially useful for...", "taking up water and minerals", "catching sunlight like a solar panel", "making seeds in every plant", "a", "Roots draw water and minerals from the soil."),
    q("pl-q3", "Photosynthesis needs light, water, and...", "carbon dioxide from air", "only chocolate", "animal meat", "a", "Carbon dioxide is a gas plants use to make sugar."),
  ],
  reflect: {
    prompt: "How would you explain a plant's 'meal' to someone who thinks plants eat soil?",
  },
  mastery: q(
    "pl-m1",
    "A fair list of what most green plants need is...",
    "light, water, air, and minerals",
    "only rocks and darkness",
    "only other plants to chew",
    "a",
    "Those are the main conditions for making food and growing.",
  ),
  connection: "Farms, forests, and the oxygen we breathe all depend on plants making food.",
};

export const nounsExperience: CurriculumExperience = {
  wonder: {
    prompt: "If you deleted every naming word from a sentence, what would be left to talk about?",
  },
  explore: {
    text: "Nouns name people, places, animals, things, and ideas. A proper noun names a particular one and takes a capital: Riya, Delhi. A common noun names a kind: girl, city.",
  },
  understand: {
    text: "You can often put a, an, or the before a common noun. Proper nouns already point to one named thing, so they start with a capital. Collective nouns name a group: a flock of birds.",
  },
  try: {
    prompt: "In 'Aarav kicked the ball in Mumbai', which words are nouns?",
    note: "Aarav (person), ball (thing), Mumbai (place). Kicked is a verb.",
  },
  practice: [
    q("nn-q1", "Which word is a noun?", "tiger", "quickly", "blue", "a", "Tiger names an animal."),
    q("nn-q2", "Which is a proper noun?", "river", "Ganga", "water", "b", "Ganga names a particular river."),
    q("nn-q3", "A flock of birds uses a noun that names...", "a group", "an action", "a colour only", "a", "Flock is a collective noun."),
  ],
  reflect: {
    prompt: "Point to five nouns in the room and say whether each is common or proper.",
  },
  mastery: q(
    "nn-m1",
    "Nouns are words that mainly...",
    "name people, places, things, or ideas",
    "show action only",
    "join sentences only",
    "a",
    "Naming is the job of a noun.",
  ),
  examples: ["common: city, dog", "proper: Kolkata, Diwali"],
  teach: {
    prompt: "Teach a younger child the difference between a common noun and a proper noun.",
  },
};
