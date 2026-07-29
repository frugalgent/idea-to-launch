<!-- Companion repo for "Idea to Launch" (The Builders Handbook, Book One) — fglabs.co -->

# Changelog

What changed in this repo, when, and which book edition it affects. Newest first.

**How to read the flags:**
- `[TOOL CHANGE]` — a tool, price, limit, or install step moved in the real
  world; the flagged file has been updated. If your printed page disagrees with
  the repo, the repo is newer — trust the repo, then check `errata.md`.
- `[NEW]` / `[UPDATED]` / `[FIXED]` — ordinary repo changes.
- **Edition mapping** — every entry names the book edition it corresponds to,
  so readers of any printing can find their delta.

Files containing time-sensitive facts carry a `Last verified:` date in their
header. If that date looks old, scan this log before trusting the number.

---

## 2026-07-28 — Repo established · Edition 1.0 (working draft v0.5)

- `[NEW]` **Context File Pack v1** (`/pack`) — all 13 files, each as a
  filled-in Marisol's Kitchen example plus a fill-in-the-blank template.
  Files for Chapters 16–19 (`security.md`, `privacy-legal.md`, `seo.md`,
  `ai-visibility.md`) are drafted from the book's scope ahead of those
  chapters; they'll be reconciled when Parts 5–6 publish.
- `[NEW]` **Site Handbook template v1** (`/site-handbook-template`) — seven
  pages, five Mermaid starters, both protection patterns (Cloudflare Access +
  Worker password), zero build step.
- `[UPDATED]` **Site Handbook quickstart rewritten** after real-user testing:
  "You should see:" expected outputs on every command, `wrangler login` added
  as an explicit step before deploy, troubleshooting table added, and
  double-clicking `index.html` now shows an onboarding screen instead of
  failing. If your copy predates this, re-download the template.
- `[NEW]` **`toolkit-install.md`** — the Chapter 2 install walkthrough with
  every command and every CLI prompt quoted in advance. *Last verified
  2026-07-28 against the official Claude Code setup docs.*
- `[TOOL CHANGE]` **Claude Code installs via a native installer** and no
  longer requires Node.js. Node remains in the toolkit for the site's own
  machinery (build, dev server, Wrangler). Chapter 2's framing updated in
  draft v0.5; `toolkit-install.md` carries the current commands, including
  the separate PowerShell and CMD commands on Windows.
- `[UPDATED]` **Series renamed:** The Website Builder Handbooks → **The
  Builders Handbook**. Applied across the book (cover, imprint), this repo,
  and all Pack file headers.
- `[NEW]` `README.md`, `LICENSE` (MIT — see the README's plain-English
  license section), `errata.md`, and this changelog.

---

*Convention note for future entries: one dated section per batch of changes;
tool changes always get the flag, a one-line "what moved," and a pointer to
the updated file. Ten minutes, while it's fresh.*
