# Growthguru Digital Hub

A React (Vite) portfolio site for Wasiu Akeem Oluwaferanmi — no Wix branding,
no watermark, deployed via GitHub → Netlify, with a contact form backed by Supabase.

**I could not run `npm install` or a live build in this environment (no
network access), so double-check the site runs locally before you deploy —
see Step 2 below.**

---

## What's included

- `/` Home — hero, services overview, process, testimonials
- `/services` — full service list
- `/portfolio` — real project write-ups (HoneyBook, GoHighLevel, Notion, Shopify, SaaS product)
- `/about` — bio + your photo
- `/contact` — form that saves submissions to Supabase, plus X/Facebook links

---

## Step 1 — Push this to GitHub

1. Create a new **empty** repository on GitHub (no README/license — this folder already has one)
2. In a terminal, from inside this folder:
   ```
   git init
   git add .
   git commit -m "Initial Growthguru site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

## Step 2 — Test it locally first

```
npm install
npm run dev
```

Open the local URL it prints (usually `http://localhost:5173`) and click
through all 5 pages. The contact form will show "Form isn't connected yet"
until Supabase is set up in Step 3 — that's expected.

## Step 3 — Set up Supabase

1. Go to [supabase.com](https://supabase.com) → create a free project
2. Once it's ready, go to **SQL Editor** → paste the contents of
   `supabase-schema.sql` (included in this folder) → Run
3. Go to **Project Settings → API** — copy:
   - **Project URL**
   - **anon public** key
4. You'll paste these into Netlify in Step 4 (not into any file you commit —
   keep them out of GitHub)

## Step 4 — Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) → **Add new site → Import an existing project**
2. Connect your GitHub account and pick this repository
3. Build settings should auto-fill from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Before deploying, go to **Site settings → Environment variables** and add:
   - `VITE_SUPABASE_URL` = your Supabase Project URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon public key
5. Click **Deploy site**
6. Once live, go to **Site settings → Domain management** to set a custom
   subdomain (e.g. `growthguru-digital-hub.netlify.app`) or connect a real
   domain if you buy one later

## Step 5 — Verify the contact form

Once deployed, submit a test message through the live `/contact` page, then
check **Supabase → Table Editor → contact_submissions** — your test entry
should appear there.

---

## Updating content later

- Portfolio projects: `src/pages/Portfolio.jsx` — edit the `projects` array
- Services: `src/pages/Services.jsx` — edit the `services` array
- About bio: `src/pages/About.jsx`
- Photo: replace `public/images/wasiu-portrait.jpg` with a new file of the
  same name, or update the `src` path in `About.jsx`
- Social links: `src/components/Footer.jsx` and `src/pages/Contact.jsx`

Any change pushed to the `main` branch on GitHub will auto-redeploy on Netlify.
