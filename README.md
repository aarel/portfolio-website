# Portfolio Website

A full-stack personal portfolio built with **Next.js 14 + TailwindCSS** on the frontend and a **Node.js/Express** data API on the backend.
The repo ships as a monorepo so you can iterate on both layers together, deploy independently, or hand one off to another service.

> Want the fully-designed HTML overview (with the hero mockup image)? Open [`README.html`](README.html) locally or in the GitHub file viewer.

## Highlights

- **Next.js App Router** frontend with modular components in `frontend/components`
- **Express API** serving JSON data from `backend/src/data`
- **Typed everywhere** using shared TypeScript configs
- **Tailwind theme** with curated color/spacing scale for consistent UI polish
- **Deploy ready** to Vercel (frontend) and Render/Fly (backend)

## Quick Start

```bash
git clone https://github.com/<your_username>/portfolio-website.git
cd portfolio-website

cd backend && npm install
cd ../frontend && npm install

cd backend && npm run dev   # http://localhost:4000
cd ../frontend && npm run dev   # http://localhost:3000
```

Verify the stack:

- Frontend: http://localhost:3000
- API data: http://localhost:4000/api/projects

## Project Layout

```
portfolio-website/
├─ backend/      # Express server, routes, JSON data store
└─ frontend/     # Next.js app, components, Tailwind config, lib helpers
```

## Contributor Notes

- Follow the coding/testing conventions in [`AGENTS.md`](AGENTS.md)
- Lint the frontend with `npm run lint` before committing UI tweaks
- Keep JSON data in sync with UI components when adding projects/posts
- Document project-facing changes in PRs with screenshots or GIFs

For the immersive HTML presentation and the homepage mockup image, open `README.html`. The Markdown file stays lean so GitHub renders it cleanly.
