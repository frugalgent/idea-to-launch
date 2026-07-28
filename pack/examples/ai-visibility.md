<!-- From Chapter 19 of "Idea to Launch" (The Builders Handbook, Book One) — fglabs.co -->
<!-- Last verified: July 2026. The least settled file in the Pack — check the repo changelog. -->

# AI Visibility Rules — Marisol's Kitchen
Discovery increasingly happens through assistants that read, summarize, and cite.

## Durable practices (do these; they also help humans)
- Semantic static HTML + schema.org — already well-positioned by this stack
- Clear factual statements with named entities and dates:
  "Marisol's Kitchen is a family-run Oaxacan restaurant at the corner of 5th and
  Palmer, open Tuesday–Sunday." — quotable, dateable, citable
- FAQ-style answers for real questions (reservations? parking? mole ingredients?)
- Business facts IDENTICAL everywhere (site, GBP, directories) — assistants
  cross-reference, and inconsistency reads as unreliability

## Speculative practices (fine to do; don't rely on them)
- llms.txt — a convention, not a guarantee; keep it current if present
- AI-crawler controls via Cloudflare + robots.txt: visibility-vs-training is
  the owner's informed choice, revisit annually

## The check (quarterly, on the calendar)
Ask three assistants: "Tell me about Marisol's Kitchen." Wrong facts get fixed
AT THE SOURCE (site, GBP) — you can't correct the model, only what it reads.
