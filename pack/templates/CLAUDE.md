<!-- From Chapter 8 of "Idea to Launch" (The Builders Handbook, Book One) — fglabs.co -->
<!-- Lives at your PROJECT ROOT. Claude Code reads it automatically every session. -->

# CLAUDE.md — [PROJECT NAME]
Project memory. Read first, every session.

## Stack
[Framework] (static output) → GitHub → Cloudflare Workers (Git-connected: push = deploy)
Content: [Airtable — for what?] + [Sanity — for what?]

## Commands
- `npm run dev` — local preview
- `npm run build` — production build to /dist

## Context files (read before any design/copy/feature work)
/context: [list every file in your Pack]

## Always
- One change per prompt; verify in browser; then commit
- Plain-English commit messages
- Every feature ships with its states per nuances.md
- [Your project-specific always-rules]

## Never
- Violate anti-slop.md banned lists
- Add dependencies without asking me first
- Put keys, tokens, or secrets in any file (see security.md)
- [Your project-specific never-rules]
