<!-- From Chapter 8 of "Idea to Launch" (The Builders Handbook, Book One) — fglabs.co -->
<!-- This file lives at your PROJECT ROOT, not in /context. Claude Code reads it automatically every session. -->

# CLAUDE.md — Marisol's Kitchen
Project memory. Read first, every session.

## Stack
Astro (static output) → GitHub → Cloudflare Workers (Git-connected: push = deploy)
Content: Airtable (menu, hours, reservation requests) + Sanity (blog, Our Story)

## Commands
- `npm run dev` — local preview
- `npm run build` — production build to /dist

## Context files (read before any design/copy/feature work)
/context: project-brief.md · design-system.md · anti-slop.md · brand-voice.md ·
accessibility.md · nuances.md · content-model.md · security.md · privacy-legal.md ·
seo.md · ai-visibility.md · prompt-playbook.md

## Always
- One change per prompt; verify in browser; then commit
- Plain-English commit messages ("hero: swap stock photo for real comal shot")
- Every feature ships with its states per nuances.md
- Check anti-slop.md banned lists before writing any copy

## Never
- Violate anti-slop.md banned patterns or words
- Add dependencies without asking me first
- Put keys, tokens, or secrets in any file (see security.md)
- Fetch content at request time — build time only (content-model.md)
