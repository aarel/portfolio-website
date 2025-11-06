Portfolio Website

A full-stack personal portfolio site built with **Next.js (React + TypeScript + TailwindCSS)** on the frontend and a lightweight **Node.js / Express API** on the backend.  
The goal: a modular, easily updated portfolio that can run locally, sync via GitHub, and deploy to services like **Vercel** or **Render**.

## Contributor Guide

See [Repository Guidelines](AGENTS.md) for coding standards, testing expectations, and PR requirements.

---

## Features

- **Full-Stack Setup** — Next.js frontend + Express backend  
- **Dynamic Content** — Projects and posts served via REST API  
- **Modular Components** — Cards, layouts, and sections reusable across pages  
- **TailwindCSS Styling** — Utility-first styling system with custom theme  
- **API Ready for Expansion** — Simple JSON datastore for quick content edits  
- **Cross-Platform Hosting** — LAN, GitHub, and cloud deployment support  

---

## Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js 14, React 18, TypeScript, TailwindCSS |
| **Backend** | Node.js 22, Express 5, TypeScript |
| **Styling** | TailwindCSS + Custom Theme |
| **Data** | JSON files (`/backend/src/data`) |
| **Deployment** | Vercel (frontend) + Render (backend) |

---

## Folder Structure
```
portfolio-website/
├─ backend/
│ ├─ src/
│ │ ├─ routes/
│ │ │ ├─ posts.ts
│ │ │ └─ projects.ts
│ │ ├─ data/
│ │ │ ├─ posts.json
│ │ │ └─ projects.json
│ │ └─ server.ts
│ ├─ package.json
│ └─ tsconfig.json
│
└─ frontend/
├─ app/
│ ├─ globals.css
│ ├─ layout.tsx
│ ├─ page.tsx
│ └─ projects/
│ └─ [slug]/page.tsx
├─ components/
│ ├─ Navbar.tsx
│ ├─ Footer.tsx
│ └─ ProjectCard.tsx
├─ lib/api.ts
├─ tailwind.config.ts
├─ postcss.config.js
└─ package.json
```

---

## Local Setup ##

### 1. Clone the repository

    git clone https://github.com/<your_username>/portfolio-website.git
    cd portfolio-website

---

### 2. Install dependencies

    cd backend && npm install
    cd ../frontend && npm install

---

### 3. Start backend

    npm run dev
    # runs on http://localhost:4000

---

### 4. Start frontend

    npm run dev
    # runs on http://localhost:3000

---

## 5. Verify connection

Visit:

    http://localhost:3000
     -> Frontend site
  
    http://localhost:4000/api/projects
     -> Backend API

 ---

 ### Deployment (in-progress) ###

 ...

 ---
