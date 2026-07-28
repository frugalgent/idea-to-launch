# Idea to Launch — Companion Repo

**The living companion to *Idea to Launch: Building a Website with Claude for (Almost) Free* — Book One of The Builders Handbook, by Kevin Christensen.**

You've found the toolbox. The book is the workshop.

📗 **Get the book:** [fglabs.co](https://fglabs.co)

---

## What this is

Every file in this repo comes from the book, where each one gets a full chapter of context: why it exists, how it was built, and how to make it yours. The files work on their own — take them, use them, build with them. They work *much* better with the book, which is the whole idea.

Two deliverables live here:

1. **The Context File Pack** — twelve `.md` files you drop into your project so every Claude Code session inherits your standards, your voice, and your rules. Write them once; never re-explain your project again.
2. **The Site Handbook template** — a deploy-ready, password-protected documentation mini-site that explains your entire build to your client, your collaborators, and future-you.

This repo is also where the book *stays alive*. Tool names, free-tier limits, and model lineups change faster than printing presses do — corrections and updates land **here first**, between editions. **Watch or star this repo** and you'll never be running on stale instructions.

---

## The Context File Pack

Each file ships two ways: a **filled-in example** (from Marisol's Kitchen, the restaurant site built across the entire book) and a **fill-in-the-blank template** for your own project.

**Quick start:** copy the templates into a `/context` folder in your project, fill in the blanks, and reference them from your `CLAUDE.md`. Chapter 3 of the book explains why this one habit conserves your usage limits more than any other trick in the box.

| # | File | What it carries | Book chapter |
|---|------|-----------------|--------------|
| 1 | `CLAUDE.md` | Project memory: stack, commands, conventions, always/never rules | Ch. 8 |
| 2 | `prompt-playbook.md` | The four-part prompt structure, model + effort decision table, usage-conservation rules | Ch. 3 |
| 3 | `project-brief.md` | Audience, goals, sitemap, success criteria | Ch. 4 |
| 4 | `design-system.md` | Colors, type, spacing, components, do/don't | Ch. 5 |
| 5 | `anti-slop.md` | Banned patterns and phrases, your signature element, references | Ch. 7 |
| 6 | `brand-voice.md` | Tone, vocabulary, sample sentences | Ch. 7 |
| 7 | `accessibility.md` | Contrast, alt text, keyboard, semantics, reduced motion | Ch. 8–9 |
| 8 | `nuances.md` | Required states for every feature: loading, error, empty, success | Ch. 9 |
| 9 | `content-model.md` | CMS schemas, field rules, editorial guidelines | Ch. 13 |
| 10 | `security.md` | Secrets rules, token scoping, review checklist | Ch. 16 |
| 11 | `privacy-legal.md` | Data inventory, retention, feature-check rules | Ch. 17 |
| 12 | `seo.md` + `ai-visibility.md` | Per-page SEO and machine-readability rules | Ch. 18–19 |

Each file carries a one-line header noting which chapter it comes from. You're free to strip those headers in your own projects — but if you leave them in, somebody on your team may find the book, and we'd consider that a fair trade.

---

## The Site Handbook template

A ready-to-deploy docs-site starter (Chapter 20): page skeletons for the accounts inventory, client guide, dev guide, data map, and incident recipes; the full **Mermaid diagram set** as editable starter code; and setup guides for both protection patterns — **Cloudflare Access** (recommended) and the **Worker password** alternative.

If it isn't written down, it isn't maintained. This template is where you write it down.

---

## Repo layout

```
/pack                     the Context File Pack — examples + templates
/site-handbook-template   deploy-ready docs site with Mermaid starters
errata.md                 corrections to the printed/ebook text
CHANGELOG.md              what changed, when, and which book edition it affects
LICENSE                   MIT — see "License" below
```

---

## Updates, errata, and the changelog

- **`errata.md`** collects corrections to the book's text, organized by chapter, each dated.
- **`CHANGELOG.md`** tracks changes to the files in this repo — and flags anything that reflects a *tool change* (a renamed Cloudflare product, a shifted free-tier limit, a new model lineup) so you know when reality moved out from under the printed page.
- Every file that contains time-sensitive facts carries a **"last verified"** date, per the book's Site Handbook convention. If the date looks old, check the changelog before trusting the number.

**Versioning:** the book has *editions* (you're reading materials for Edition 1.0); this repo has rolling updates. The changelog notes which edition each change corresponds to, so readers of any printing can find their delta.

---

## Issues and contributions

**Please do file an issue for:** factual errors in the book or these files, broken links, a tool change we haven't caught yet, or a free-tier limit that's shifted. You are the early-warning system, and we're grateful for it.

**Please don't file an issue for:** debugging help with your own project (that's what the book's troubleshooting index — and Claude — are for), feature requests for the book, or philosophical disagreements about frameworks. Per Chapter 8: framework debates are a hobby; your site is a deliverable.

Pull requests for typos and link fixes: gladly accepted. PRs that rewrite the templates' opinions: probably not — the opinions are the product.

---

## License

**Short version:** everything in this repo is yours to use — including in paid client work — under the MIT License. The book itself, and its cover art, are not in this repo and remain all rights reserved.

**The plain-English version of what that means:**

- ✅ **Use the Pack and the Handbook template in your own projects** — personal, commercial, client work, all of it. That's what they're for. No permission needed, no payment, no attribution required in your finished sites.
- ✅ **Modify everything.** Fill in the blanks, strip what you disagree with, add your own rules. The templates are starting points, not scripture.
- ✅ **Share the repo link freely.** Send it to your team, your clients, that friend who keeps asking how you built your site.
- ⚠️ **If you redistribute the files themselves** (fork the repo, bundle the templates into something you ship), the MIT License asks only that you keep the copyright and license notice with them. That's the entire ask.
- ❌ **The book's text, chapters, and cover art are not covered** — those are © 2026 Kevin Christensen, all rights reserved, and they don't live in this repo. Don't republish them.

Why MIT and not a NonCommercial license? Because the people this book is written for — freelancers, solo builders, small business owners — use these files in *commercial* work. A license that forbade that would break the tool at its purpose. So: take the files, build the client site, send the invoice. Genuinely, go make money with these.

Full legal text: [`LICENSE`](./LICENSE).

---

## About

*Idea to Launch* is Book One of **The Builders Handbook** — a series about building real things for almost nothing, with Claude Code as your co-builder. Book Two (databases — for the day you actually need one) is trailed in Chapter 15.

Written by **Kevin Christensen**. Published by **[FG Labs](https://fglabs.co)**.

Found this repo before finding the book? The files above are the souvenirs. The book is the trip: **[fglabs.co](https://fglabs.co)**
