<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# IvshiQuest

Student-first learning companion. Grades 4–8. Math, Science, English.

Build order: foundation (done) → Student Home Screen only. Do not add Supabase, AI, auth, quests, parent screens, or teacher screens until asked.

- Screens go in `src/features`. Routes in `src/app` stay thin.
- Domain types and the learning loop live in `src/domain` (no React).
- Data access goes through `src/services` ports. Use mocks until a backend is added.
- Student chrome is `src/components/layout`. Keep parent/teacher as reserved routes only.
