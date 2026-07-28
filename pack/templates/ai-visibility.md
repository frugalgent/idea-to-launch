<!-- From Chapter 19 of "Idea to Launch" (The Builders Handbook, Book One) — fglabs.co -->
<!-- Last verified: [DATE]. The least settled file in the Pack — check the repo changelog. -->

# AI Visibility Rules — [PROJECT NAME]

## Durable practices (do these; they also help humans)
- Semantic static HTML + schema.org
- Clear factual statements with named entities and dates:
  "[Business] is a [what] at [where], open [when]." — quotable, citable
- FAQ-style answers for real questions
- Business facts IDENTICAL everywhere — assistants cross-reference

## Speculative practices (fine to do; don't rely on them)
- llms.txt — convention, not guarantee; keep current if present
- AI-crawler controls (Cloudflare + robots.txt): visibility-vs-training is
  [OWNER]'s informed choice, revisited [annually]

## The check ([quarterly])
Ask three assistants about [business]. Wrong facts get fixed AT THE SOURCE —
you can't correct the model, only what it reads.
