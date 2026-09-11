import type {
  CurriculumGrade,
  CurriculumNcertRef,
  NcertSourceStatus,
} from "@/domain/curriculum";
import type { Subject } from "@/domain/types";
import { C, T, type WorldSpec } from "@/content/curriculum/build";

export const NCERT_BOOKS = {
  mathsMela4: "Maths Mela — Textbook of Mathematics for Grade 4",
  mathsMela5: "Maths Mela — Textbook of Mathematics for Grade 5",
  ganitaPrakash6: "Ganita Prakash — Textbook of Mathematics for Grade 6",
  ganitaPrakash7p1: "Ganita Prakash Part 1 — Textbook of Mathematics for Grade 7",
  ganitaPrakash7p2: "Ganita Prakash Part 2 — Textbook of Mathematics for Grade 7",
  ganitaPrakash8: "Ganita Prakash — Textbook of Mathematics for Grade 8",
  wondrousWorld4: "Our Wondrous World — Textbook of EVS for Grade 4",
  wondrousWorld5: "Our Wondrous World — Textbook of EVS for Grade 5",
  curiosity6: "Curiosity — Textbook of Science for Grade 6",
  curiosity7: "Curiosity — Textbook of Science for Grade 7",
  curiosity8: "Curiosity — Textbook of Science for Grade 8",
  santoor4: "Santoor — Textbook of English for Grade 4",
  santoor5: "Santoor — Textbook of English for Grade 5",
  poorvi6: "Poorvi — Textbook of English for Grade 6",
  poorvi7: "Poorvi — Textbook of English for Grade 7",
  poorvi8: "Poorvi — Textbook of English for Grade 8",
} as const;

export type NcertChapterSpec = {
  slug: string;
  title: string;
  about: string;
  skills: string[];
  status?: NcertSourceStatus;
  note?: string;
};

export function ncertRef(
  book: string,
  grade: CurriculumGrade,
  status: NcertSourceStatus,
  extras?: { chapter?: string; note?: string },
): CurriculumNcertRef {
  return {
    book,
    class: grade,
    chapter: extras?.chapter,
    status,
    note: extras?.note,
  };
}

export function ncertBookWorld(input: {
  id: string;
  title: string;
  subject: Subject;
  category: string;
  grade: CurriculumGrade;
  book: string;
  status: NcertSourceStatus;
  hook: string;
  note?: string;
  chapters: NcertChapterSpec[];
}): WorldSpec {
  const bookNcert = ncertRef(input.book, input.grade, input.status, {
    note: input.note,
  });

  return {
    id: input.id,
    title: input.title,
    subject: input.subject,
    category: input.category,
    grades: [input.grade],
    hook: input.hook,
    ncert: bookNcert,
    topics: input.chapters.map((chapter) => {
      const chapterNcert = ncertRef(
        input.book,
        input.grade,
        chapter.status ?? input.status,
        {
          chapter: chapter.title,
          note: chapter.note ?? input.note,
        },
      );
      const explainer = `${chapter.title} is a learning area in ${input.book}. ${chapter.about}`;
      return T(
        `${input.id}-${chapter.slug}`,
        chapter.title,
        [input.grade],
        chapter.about,
        chapter.about,
        explainer,
        [
          C(
            `${input.id}-${chapter.slug}-core`,
            chapter.title,
            [input.grade],
            `What is this chapter asking you to notice or try?`,
            chapter.about,
            explainer,
            chapter.skills,
            { ncert: chapterNcert },
          ),
        ],
        { ncert: chapterNcert },
      );
    }),
  };
}
