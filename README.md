# IvshiQuest

IvshiQuest is an AI-powered learning companion for students in grades 4–8. The product goal is to make children curious about learning, not forced to study.

V1 subjects: Math, Science, and English.

## Current phase

Foundation only. The next product task is the **Student Home Screen**.

Not in this phase: authentication, Supabase, AI APIs, quests, Discovery, Knowledge Tree, Teach It, or parent/teacher screens.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root path redirects to `/student`.

```bash
npm run lint
npm run typecheck
npm run build
```

## Architecture

- `src/app` — routes and layouts. Keep these thin.
- `src/features` — screens. Start here for Student Home.
- `src/components` — shared UI and the student shell.
- `src/domain` — types, grades, subjects, and the learning loop. No React.
- `src/services` — data ports. `studentRepository` is a mock today; swap the adapter later.
- `src/content/mocks` — mock student data. No PII.

Student, parent, and teacher are roles in `src/domain`. Only the student shell is routed. Parent (`/parent`) and teacher (`/teacher`) are reserved for later.

Learning loop stages live in `src/domain/learning-loop.ts`:

Wonder → Explore → Understand → Practice → Master → Teach → Discover Again
