# Repository Guidelines

## Project Structure & Module Organization
- `frontend/` hosts the Next.js 14 app: routes in `app/`, shared UI in `components/`, data helpers in `lib/api.ts`, and styling config in `tailwind.config.ts`.
- `backend/` exposes the Express API: route handlers in `src/routes/`, JSON content in `src/data/`, with `src/server.ts` bootstrapping the service.
- Store feature assets beside their components and update the JSON store when adding projects or posts so both layers stay in sync.

## Build, Test, and Development Commands
- Install once per service: `cd backend && npm install`, `cd frontend && npm install`.
- Local dev: `npm run dev` in each directory starts the API on `http://localhost:4000` and the Next.js UI on `http://localhost:3000`.
- Production prep: `npm run build` (frontend) and `npm run build` (backend) ensure deployable bundles; run `npm run lint` in `frontend/` before committing UI changes.

## Coding Style & Naming Conventions
- Use TypeScript throughout; prefer explicit types on exports and response payloads.
- Match existing formatting: 4-space indentation, single-quoted imports, PascalCase components, camelCase utilities, and descriptive filenames (e.g., `ProjectList.tsx`).
- Keep Tailwind class lists readable by grouping layout, spacing, and color utilities in that order.

## Testing Guidelines
- Manual checks for now: hit `http://localhost:4000/api/projects` (curl or browser) and walk core UI flows after each change.
- New automated tests should live next to the source (`Component.test.tsx`, `route.test.ts`), focusing on data mappers and dynamic rendering paths; fail builds if they break.

## Commit & Pull Request Guidelines
- Write imperative, present-tense commit messages (`Add project filter`) and split backend vs. frontend work when practical.
- PRs must link issues, summarize the change, include manual test notes, and attach screenshots or GIFs for visible tweaks.
- Confirm both dev servers start cleanly before requesting review and call out any config or environment updates in the PR body.
