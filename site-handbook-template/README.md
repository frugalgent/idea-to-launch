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
1. Copy this folder into your site's repo (or a sibling repo — the book leans
   same-repo for solo builders; a sibling is cleaner for client handoff).
2. Find-and-replace the `[bracketed placeholders]` across `public/content/` —
   or better, open Claude Code and say: *"Fill in the Site Handbook pages from
   this project's CLAUDE.md, context files, and wrangler config. Leave anything
   you can't verify in brackets."*
3. Preview locally: `npx wrangler dev` (or `python3 -m http.server` inside
   `/public`). Note: opening `index.html` directly as a file won't work — the
   pages load over http.
4. Deploy: `npx wrangler deploy` — then **protect it before sharing the URL.**

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
