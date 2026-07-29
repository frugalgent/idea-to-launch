# The Site Handbook Template

A deploy-ready, password-protectable documentation mini-site — Deliverable 2 from
*Idea to Launch* (The Builders Handbook, Book One — fglabs.co), Chapter 20.

If it isn't written down, it isn't maintained. This is where you write it down:
what the site is, every account in play, how the client edits content, how a
developer picks it up cold, where visitor data lives, and what to do when
something breaks — with Mermaid flowcharts throughout, editable as plain text.

## What's in the box
```
public/
  index.html          the shell — renders the pages below (no build step)
  content/            seven Markdown pages, the required table of contents:
    overview.md         site overview + architecture diagram
    accounts.md         accounts & tools inventory (credentials referenced, never written)
    client-guide.md     plain-language guide + content-flow diagram
    dev-guide.md        repo map, setup from zero, env var names, deploy-pipeline diagram
    data-map.md         data & retention table + reservation-flow diagram
    incidents.md        key leaked / spam / down / bad deploy + decision-tree diagram
    watchlist.md        free-tier meters + the monthly 10-minute review
wrangler.jsonc        deploy config (Cloudflare Access pattern — default)
worker-password/      the simpler shared-password alternative
```

## How it works
No build step, on purpose. `index.html` fetches the Markdown pages and renders
them (with Mermaid diagrams) in the browser via CDN libraries. Content is plain
`.md` — it lives in Git, diffs cleanly, and Claude Code can update pages and
diagrams from a prompt. Push = deploy, same as your main site.

## Quick start

**What you need:** the toolkit from Chapter 2 of the book — Node, and a terminal
you’re on speaking terms with. (If you built the book’s site, you have everything.
If you arrived here cold: install Node from nodejs.org first.)

**One warning before anything:** don’t double-click `index.html`. It will open,
shrug, and explain why — browsers won’t let a local file load its content pages.
The template needs a tiny local server, which is one command. Here it is.

### See it working (2 minutes)

1. Unzip, then go **into** the template folder in your terminal:
   ```
   cd path/to/site-handbook-template
   ls
   ```
   **You should see:** `wrangler.jsonc`, `public`, `worker-password`, `README.md`.
   If you don’t, you’re in the wrong folder — `cd` deeper or back out. Every
   command below assumes you’re standing right here.

2. Start the local preview:
   ```
   npx wrangler dev
   ```
   First run asks *“Need to install wrangler? (y/n)”* — answer **y**. A telemetry
   notice appears; that’s Cloudflare’s, not ours.
   **You should see:** `Ready on http://localhost:8787`

3. Open **http://localhost:8787** in your browser. That’s the handbook — seven
   pages, diagrams rendering, sidebar working. Click around. `Ctrl+C` in the
   terminal stops it whenever you’re done.

### Make it yours

4. Now — and only now that you’ve seen it work — fill it in. The pages in
   `public/content/` are plain Markdown full of `[bracketed placeholders]`.
   Edit by hand, or open Claude Code in your *site’s* project and say:
   > “Here’s my Site Handbook template folder. Fill in the pages from this
   > project’s CLAUDE.md, context files, and wrangler config. Leave anything
   > you can’t verify in brackets.”
   Re-run step 2–3 to see your changes.

### Put it online

5. Log in to Cloudflare from the terminal (one-time; opens your browser):
   ```
   npx wrangler login
   ```
6. Deploy:
   ```
   npx wrangler deploy
   ```
   **You should see:** an upload summary ending in a `*.workers.dev` URL.
   That URL is live — which is exactly why the next section is not optional.

7. **Protect it before sharing the URL** — pick a pattern below.

### If something goes wrong

| You see | What it means | The fix |
|---|---|---|
| A page saying it needs a tiny server | You double-clicked `index.html` | Follow steps 1–3 above |
| `command not found: npx` (or `node`) | Node isn’t installed / not on PATH | Install from nodejs.org, reopen the terminal |
| Wrangler can’t find a config / “Missing entry-point” | You’re in the wrong directory | `cd` to the folder where `ls` shows `wrangler.jsonc` |
| Pages load but content says “wrong folder” | Serving from somewhere other than the template root | Stop the server, redo step 1–2 |
| Deploy fails mentioning auth / login / account | You skipped `npx wrangler login` | Run step 5, then deploy again |
| `address already in use` on dev | Another preview is still running | `Ctrl+C` the old one, or `npx wrangler dev --port 8788` |
| Something else | — | Paste the **exact** error into Claude Code: *“Diagnose before proposing fixes.”* (Book Ch. 11 reflex) |

## Protecting it — two patterns

### Pattern A: Cloudflare Access (recommended)
Email-based one-time-PIN login via Cloudflare Zero Trust's free tier. No shared
password to leak, per-person access you can revoke, fits a small client team.

1. Cloudflare dashboard → **Zero Trust** → set up the free plan if you haven't.
2. **Access → Applications → Add an application** → Self-hosted.
3. Application domain: your handbook's URL (e.g., `handbook.yourdomain.com` or
   the workers.dev address).
4. Add a policy: **Allow** → Include → **Emails** → list the client's and your
   addresses. Login method: **One-time PIN** (no accounts needed).
5. Save. Visiting the handbook now emails a PIN to allowed addresses. Revoking
   a person = deleting their email from the policy.

Cloudflare's Zero Trust UI moves; if these steps drift, the current walkthrough
lives in the book's companion repo (this template is written so this section
swaps cleanly).

### Pattern B: shared password via a Worker (the simpler alternative)
One password for everyone. Simpler mental model; risks stated plainly in
`worker-password/worker.js` (a shared password can be shared onward; revoking
one person means changing it for all). To use:

1. Copy `worker-password/worker.js` and `worker-password/wrangler.jsonc` to the
   template root (replacing the root `wrangler.jsonc`).
2. `npx wrangler secret put HANDBOOK_PASSWORD` — the password is a secret,
   never hardcoded.
3. `npx wrangler deploy`.

## Keeping it honest (the Chapter 20 conventions)
- Every page carries a `_Last verified: YYYY-MM-DD_` line — update it whenever
  a checklist changes something real.
- The **monthly 10-minute review** lives on the Watchlist page; fold it into
  your maintenance calendar (book Ch. 21).
- After any incident: ten minutes updating the Incidents page, while it's fresh.
