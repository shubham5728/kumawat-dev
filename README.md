# kumawat-dev

Personal portfolio for **Shubham Kumawat** — Data Scientist & ML Engineer.

A minimal, monochrome (black & white) portfolio that pulls project data **live from the GitHub API**, so the work section stays current without manual edits.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — custom black/white design tokens with a light/dark toggle
- **GitHub REST API** — live repository feed, revalidated hourly via ISR
- Deployed on **Vercel**

## How it works

- `src/lib/github.ts` fetches public repos, filters forks/empty repos, enriches a curated set of flagship projects, and orders them (featured first, then by stars/recency). Uses `next: { revalidate: 3600 }` so the page is statically prerendered and refreshed hourly. Falls back to a curated list if the API is unreachable.
- `src/lib/data.ts` holds the hand-authored content (bio, skills, flagship descriptions).
- `src/components/` holds the section components (Hero, About, Projects, Contact) and the client-side theme toggle.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Customization

- Edit narrative, skills, and featured projects in `src/lib/data.ts`.
- Adjust colors in `src/app/globals.css` (`:root` and `.dark`).

---

Built with Next.js & Tailwind. Data live from GitHub.
