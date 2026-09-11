import { compileWorlds } from "@/content/curriculum/build";
import { NCERT_BOOKS, ncertBookWorld } from "@/content/curriculum/ncert-books";

const EVS_NOTE_G4 =
  "Chapter titles match official NCERT Grade 4 Our Wondrous World chapter PDFs (deev1), beginning with Living Together (deev101).";

export const EVS_WORLDS = compileWorlds([
  ncertBookWorld({
    id: "ncert-g4-wondrous-world",
    title: "Our Wondrous World",
    subject: "science",
    category: "EVS / The World Around Us",
    grade: 4,
    book: NCERT_BOOKS.wondrousWorld4,
    status: "official",
    note: EVS_NOTE_G4,
    hook: "Grade 4 EVS: community, neighbourhood, nature, food, how things work, lands, and sky.",
    chapters: [
      { slug: "living-together", title: "Living Together", about: "See how people live together in a community and share work and care.", skills: ["Name a community helper", "Describe sharing in a group"] },
      { slug: "exploring-neighbourhood", title: "Exploring Our Neighbourhood", about: "Observe places, people, and routes in the neighbourhood.", skills: ["Map a familiar route", "Name a neighbourhood place"] },
      { slug: "nature-trail", title: "Nature Trail", about: "Notice plants, animals, and signs of life on a trail.", skills: ["Record an observation", "Name a living thing"] },
      { slug: "growing-up-with-nature", title: "Growing up with Nature", about: "See how we depend on plants, animals, and seasons.", skills: ["Link a need to nature", "Describe a seasonal change"] },
      { slug: "food-for-health", title: "Food for Health", about: "Connect food to health, variety, and where food comes from.", skills: ["Name a healthy food", "Say where a food comes from"] },
      { slug: "happy-healthy-living", title: "Happy and Healthy Living", about: "Practise habits of cleanliness, rest, play, and care.", skills: ["Name a healthy habit", "Explain why it helps"] },
      { slug: "how-things-work", title: "How Things Work", about: "Investigate simple objects and how they move or work.", skills: ["Ask how it works", "Describe a simple mechanism"] },
      { slug: "how-things-are-made", title: "How Things are Made", about: "Follow a material from source to a made object.", skills: ["Name a raw material", "Order making steps"] },
      { slug: "different-lands", title: "Different Lands, Different Lives", about: "See how land, climate, and work shape how people live.", skills: ["Compare two places", "Link land to work"] },
      { slug: "our-sky", title: "Our Sky", about: "Observe the sky, sun, moon, and changing day and night.", skills: ["Describe day and night", "Observe the moon safely"] },
    ],
  }),
  ncertBookWorld({
    id: "ncert-g5-wondrous-world",
    title: "Our Wondrous World",
    subject: "science",
    category: "EVS / The World Around Us",
    grade: 5,
    book: NCERT_BOOKS.wondrousWorld5,
    status: "official",
    hook: "Grade 5 EVS: water, rivers, food, school, India, energy, clothes, rhythms of nature, and Earth.",
    chapters: [
      { slug: "water-essence", title: "Water—The Essence of Life", about: "See why water is essential and how we use and conserve it.", skills: ["Name a water source", "Give a conserve-water action"] },
      { slug: "journey-of-a-river", title: "Journey of a River", about: "Follow a river’s path and how people live along it.", skills: ["Order a river’s journey", "Link river to a settlement"] },
      { slug: "mystery-of-food", title: "The Mystery of Food", about: "Investigate where food comes from and how it nourishes us.", skills: ["Trace a food’s origin", "Name a nutrient idea"] },
      { slug: "our-school", title: "Our School—A Happy Place", about: "See school as a community of care, roles, and cooperation.", skills: ["Name a school role", "Describe cooperation"] },
      { slug: "our-vibrant-country", title: "Our Vibrant Country", about: "Explore India’s diversity of people, places, and cultures.", skills: ["Name a diversity example", "Respect a difference"] },
      { slug: "some-unique-places", title: "Some Unique Places", about: "Learn what makes particular Indian places special.", skills: ["Describe a unique place", "Give a reason it matters"] },
      { slug: "energy-how-things-work", title: "Energy—How Things Work", about: "Notice forms of energy that make everyday things work.", skills: ["Name a form of energy", "Link energy to a device"] },
      { slug: "clothes-how-made", title: "Clothes—How Things are Made", about: "Follow fibres and processes that make clothes.", skills: ["Name a fibre", "Order making steps"] },
      { slug: "rhythms-of-nature", title: "Rhythms of Nature", about: "Observe cycles such as seasons, day-night, and growth.", skills: ["Name a natural cycle", "Describe a rhythm"] },
      { slug: "earth-shared-home", title: "Earth—Our Shared Home", about: "Care for Earth as a shared home through responsible habits.", skills: ["Name a care-for-Earth action", "Explain a shared need"] },
    ],
  }),
]);
