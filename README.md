<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Portfolio Website README</title>
        <style>
            :root {
                color-scheme: dark;
                --bg: #05070d;
                --panel: #0f172a;
                --accent: #34d399;
                --accent-2: #22d3ee;
                --muted: #9ca3af;
                --text: #f8fafc;
                --border: #1f2937;
            }
            * {
                box-sizing: border-box;
                font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
            }
            body {
                margin: 0;
                padding: 80px 24px 120px;
                background: radial-gradient(circle at top, #111827, var(--bg) 55%);
                color: var(--text);
                line-height: 1.6;
            }
            .shell {
                max-width: 960px;
                margin: 0 auto;
                background: rgba(15, 23, 42, 0.82);
                border: 1px solid rgba(255, 255, 255, 0.07);
                box-shadow: 0 40px 120px rgba(8, 15, 40, 0.55);
                border-radius: 36px;
                padding: 56px 64px 72px;
                backdrop-filter: blur(14px);
            }
            h1 {
                margin-top: 0;
                font-size: 2.8rem;
                line-height: 1.1;
            }
            h2 {
                margin-top: 64px;
                font-size: 1.8rem;
            }
            p.lede {
                font-size: 1.2rem;
                color: rgba(248, 250, 252, 0.9);
                margin-bottom: 32px;
            }
            .badge-row {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 48px;
            }
            .badge {
                padding: 6px 14px;
                border-radius: 999px;
                border: 1px solid rgba(255, 255, 255, 0.12);
                font-size: 0.78rem;
                letter-spacing: 0.04em;
                text-transform: uppercase;
                color: var(--muted);
            }
            figure.hero {
                margin: 0 0 56px;
                background: linear-gradient(135deg, rgba(34, 211, 238, 0.25), rgba(52, 211, 153, 0.25));
                border-radius: 32px;
                padding: 32px;
                border: 1px solid rgba(255, 255, 255, 0.07);
                box-shadow: 0 40px 180px rgba(34, 211, 238, 0.25);
            }
            .hero img {
                width: 100%;
                display: block;
                border-radius: 22px;
                border: 1px solid rgba(255, 255, 255, 0.18);
                box-shadow: 0 30px 60px rgba(5, 7, 13, 0.55);
                background: #010409;
            }
            .hero figcaption {
                text-align: center;
                margin-top: 18px;
                font-size: 0.95rem;
                color: rgba(248, 250, 252, 0.75);
            }
            .grid {
                display: grid;
                gap: 18px;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                margin-bottom: 12px;
            }
            .card {
                background: rgba(8, 14, 33, 0.9);
                border-radius: 18px;
                padding: 20px 24px;
                border: 1px solid rgba(255, 255, 255, 0.05);
            }
            .card strong {
                display: block;
                font-size: 1.1rem;
                margin-bottom: 6px;
            }
            .list {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 10px;
            }
            .list li {
                padding: 16px 20px;
                border-radius: 16px;
                background: rgba(9, 13, 27, 0.9);
                border: 1px solid rgba(255, 255, 255, 0.04);
            }
            .list li strong {
                display: block;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 18px;
            }
            th,
            td {
                padding: 14px 16px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                text-align: left;
            }
            th {
                font-size: 0.95rem;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: var(--muted);
            }
            pre {
                background: #050910;
                padding: 24px;
                border-radius: 20px;
                border: 1px solid rgba(255, 255, 255, 0.05);
                overflow-x: auto;
                font-size: 0.92rem;
                line-height: 1.45;
            }
            code {
                font-family: 'JetBrains Mono', 'Fira Code', Menlo, Consolas, monospace;
            }
            a {
                color: var(--accent);
                text-decoration: none;
            }
            .steps {
                counter-reset: steps;
                display: grid;
                gap: 16px;
                margin: 24px 0 8px;
            }
            .steps div {
                background: rgba(13, 21, 45, 0.9);
                padding: 20px;
                border-radius: 18px;
                border: 1px solid rgba(255, 255, 255, 0.05);
                position: relative;
                padding-left: 76px;
            }
            .steps div::before {
                counter-increment: steps;
                content: counter(steps);
                position: absolute;
                left: 22px;
                top: 18px;
                width: 40px;
                height: 40px;
                border-radius: 12px;
                background: linear-gradient(135deg, var(--accent), var(--accent-2));
                display: grid;
                place-items: center;
                font-weight: 700;
                color: #041315;
            }
            footer {
                margin-top: 64px;
                font-size: 0.9rem;
                color: rgba(255, 255, 255, 0.7);
            }
            @media (max-width: 640px) {
                .shell {
                    padding: 40px 28px 52px;
                    border-radius: 24px;
                }
                body {
                    padding: 32px 12px 80px;
                }
                h1 {
                    font-size: 2.2rem;
                }
            }
        </style>
    </head>
    <body>
        <main class="shell">
            <header>
                <h1>Portfolio Website</h1>
                <p class="lede">
                    A full-stack personal portfolio powered by Next.js 14, Tailwind, and an Express API.
                    Ship projects, posts, and case studies from a single codebase tuned for modern deployments.
                </p>
                <div class="badge-row">
                    <span class="badge">Next.js 14</span>
                    <span class="badge">Express API</span>
                    <span class="badge">TypeScript</span>
                    <span class="badge">TailwindCSS</span>
                    <span class="badge">Monorepo Workflow</span>
                </div>
            </header>

            <figure class="hero">
                <img src="./frontend/public/assets/portfolio-home.svg" alt="Portfolio Website home page hero preview" />
                <figcaption>Homepage spotlight: navigation, hero headline, and project grid from the live UI.</figcaption>
            </figure>

            <section>
                <div class="grid">
                    <div class="card">
                        <strong>Frontend</strong>
                        Next.js App Router, React Server Components, and Tailwind for rapid UI iteration.
                    </div>
                    <div class="card">
                        <strong>Backend</strong>
                        Express service serving JSON content to the UI as REST endpoints.
                    </div>
                    <div class="card">
                        <strong>Deployment Ready</strong>
                        Targets Vercel (frontend) and Render/Fly (backend) with matching build commands.
                    </div>
                </div>
            </section>

            <section>
                <h2>Features</h2>
                <ul class="list">
                    <li>
                        <strong>Modular components</strong>
                        Cards, layout primitives, and section builders live in `frontend/components`.
                    </li>
                    <li>
                        <strong>Dynamic content</strong>
                        Projects and posts stored in JSON (`backend/src/data`) and served through `api/projects` + `api/posts`.
                    </li>
                    <li>
                        <strong>Tailwind theming</strong>
                        Custom palette + typography in `frontend/tailwind.config.ts` with consistent utility ordering.
                    </li>
                    <li>
                        <strong>API growth path</strong>
                        Route handlers in `backend/src/routes` make it easy to bolt on auth, pagination, or filters.
                    </li>
                    <li>
                        <strong>Cross-platform hosting</strong>
                        Works offline, across LAN, or on cloud providers without config drift.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Tech Stack</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Layer</th>
                            <th>Technology</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Frontend</strong></td>
                            <td>Next.js 14, React 18, TypeScript, TailwindCSS</td>
                        </tr>
                        <tr>
                            <td><strong>Backend</strong></td>
                            <td>Node.js 22, Express 5, TypeScript</td>
                        </tr>
                        <tr>
                            <td><strong>Styling</strong></td>
                            <td>TailwindCSS + custom theme tokens</td>
                        </tr>
                        <tr>
                            <td><strong>Data</strong></td>
                            <td>JSON files (`backend/src/data`)</td>
                        </tr>
                        <tr>
                            <td><strong>Deployment</strong></td>
                            <td>Vercel (frontend) + Render or Fly (backend)</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Folder Structure</h2>
                <pre><code>portfolio-website/
├─ backend/
│  ├─ src/
│  │  ├─ routes/
│  │  │  ├─ posts.ts
│  │  │  └─ projects.ts
│  │  ├─ data/
│  │  │  ├─ posts.json
│  │  │  └─ projects.json
│  │  └─ server.ts
│  ├─ package.json
│  └─ tsconfig.json
└─ frontend/
   ├─ app/
   │  ├─ globals.css
   │  ├─ layout.tsx
   │  ├─ page.tsx
   │  └─ projects/[slug]/page.tsx
   ├─ components/
   │  ├─ Navbar.tsx
   │  ├─ Footer.tsx
   │  └─ ProjectCard.tsx
   ├─ lib/api.ts
   ├─ tailwind.config.ts
   └─ package.json</code></pre>
            </section>

            <section>
                <h2>Local Setup</h2>
                <div class="steps">
                    <div>
                        <strong>Clone</strong>
                        <code>git clone https://github.com/&lt;your_username&gt;/portfolio-website.git && cd portfolio-website</code>
                    </div>
                    <div>
                        <strong>Install</strong>
                        <code>cd backend && npm install && cd ../frontend && npm install</code>
                    </div>
                    <div>
                        <strong>Run backend</strong>
                        <code>cd backend && npm run dev</code> → `http://localhost:4000`
                    </div>
                    <div>
                        <strong>Run frontend</strong>
                        <code>cd frontend && npm run dev</code> → `http://localhost:3000`
                    </div>
                    <div>
                        <strong>Verify</strong>
                        Hit `http://localhost:3000` for the UI and `http://localhost:4000/api/projects` for API data.
                    </div>
                </div>
            </section>

            <section>
                <h2>Contributor Guide</h2>
                <p>
                    Align with the standards outlined in
                    <a href="./AGENTS.md" target="_blank" rel="noreferrer noopener">AGENTS.md</a> for coding style, testing, linting, and PR formatting.
                </p>
            </section>

            <section>
                <h2>Deployment (In Progress)</h2>
                <p>
                    Production builds use `npm run build` in both `/frontend` and `/backend`. Lint the UI (`npm run lint` in
                    `/frontend`) and confirm both dev servers start cleanly before opening a PR or shipping to Vercel/Render.
                </p>
            </section>

            <footer>
                Last updated with ❤️ to showcase the home experience front-and-center.
            </footer>
        </main>
    </body>
</html>
