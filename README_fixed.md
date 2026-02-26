# Mutual Funds Platform (FSAD-PS06)

A Next.js demo app that provides information about mutual funds, roles (Admin, Investor, Financial Advisor, Data Analyst), fund comparison, simple analytics, and admin management. It's runnable locally and prepared for Vercel deployment.

## Mutual Funds — FSAD-PS06

This project implements a web platform for "Investment perception and selection behavior towards mutual funds" (FSAD-PS06). It provides detailed information about mutual funds, how they are structured, their risks, and factors that influence investment decisions. The platform helps users understand and choose the right mutual funds for their needs.

## Roles and capabilities
- Admin: Oversee platform management, user activities, and content updates (manage funds, view reports).
- Investor: Explore mutual funds, compare options, view fund details, and manage a simple portfolio (local demo).
- Financial Advisor: Create educational content, provide advice, and assist users in selecting funds.
- Data Analyst: Update fund performance data, analyze investment trends, and generate reports.

## What I added (scaffold)
- `lib/funds.js` — sample fund dataset and helper functions.
- `pages/api/funds.js` — API route returning funds and fund by id.
- `pages/index.js` — landing page.
- `pages/funds/index.js` — fund listing and basic search.
- `pages/funds/[id].js` — fund detail page (structure, risks, factors, returns).
- `components/FundCard.js` — reusable fund card UI.
- Role pages: `pages/admin.js`, `pages/advisor.js`, `pages/analyst.js`, `pages/investor.js`.
- Updated navigation in `components/Nav.js`.

## Quick start

Install and run the Next.js app:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Next steps
- Implement authentication and role-based access control.
- Add data persistence (database) and scheduled data updates for performance.
- Add richer comparison and charting on fund performance (e.g., Chart.js / Recharts).

## Git and Deployment

1) Add a `.gitignore` (already included) and commit the project:

```powershell
git init
git add .
git commit -m "Initial mutual-funds scaffold with auth and pages"
# create a GitHub repo and push (replace <your-repo-url>)
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

2) Deploy to Vercel

- Sign in at https://vercel.com and import your GitHub repository.
- Vercel auto-detects Next.js and will build with `npm run build` and `npm start` by default.
- If you need environment variables (API keys, tokens), set them in the Vercel dashboard under Project Settings → Environment Variables.

Optional: If you want to use the Vercel CLI for deploying from your machine, install it and then run:

```powershell
npm i -g vercel
vercel login
vercel
```

Notes
- Do NOT commit real secrets or `.env.local`. Use the Vercel dashboard for production secrets.
- `vercel.json` is included with a minimal config; Vercel typically auto-detects Next.js projects so this file is optional.

## Authentication
This scaffold includes a demo authentication system using `localStorage` and API routes under `/api/auth` and `/api/users`. Sample users are in `lib/users.js`:

- Admin: admin@example.com / password123
- Investor: investor@example.com / investorpass
- Advisor: advisor@example.com / advisorpass
- Analyst: analyst@example.com / analystpass

Use the `Login` or `Register` pages to sign in. This demo is intentionally simple and not production-ready — replace with real authentication and secure storage for production.

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

Open http://localhost:3000

Notes about deployment to Vercel:
- This demo uses a file-based JSON store for local convenience. Vercel serverless functions cannot persist file writes reliably across instances. For production on Vercel, use an external DB (Supabase, PlanetScale, Postgres, or MongoDB) and update the API routes to use that DB.
- Replace the simple auth with NextAuth or another production-ready provider for real deployments.

If you want, I can:
- Swap file-based storage to Supabase and wire env vars for Vercel.
- Add NextAuth with providers and Prisma adapter for real auth.
