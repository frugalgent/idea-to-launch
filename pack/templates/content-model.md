<!-- From Chapter 13 of "Idea to Launch" (The Builders Handbook, Book One) — fglabs.co -->

# Content Model — [PROJECT NAME]

## The shape test
Spreadsheet-shaped (rows, consistent fields) → Airtable.
Story-shaped (paragraphs, images, byline) → Sanity. Ties go to Airtable.

## Airtable: [TABLE NAME]
[Field] ([type]) · [Field] ([type]) · … · Available/Active (checkbox — you'll want it)
RULES: [render conditions] · [grouping] · [missing-data fallback per nuances.md]

## Airtable: [FORM-FED TABLE, if any — Ch. 14]
[Fields — the MINIMUM; see privacy-legal.md] · Confirmed (checkbox)
RULES: written by the form Worker only, write-scoped key; human confirms

## Sanity: [SCHEMA NAME]
[fields]
RULES: published only · [ordering] · empty state in brand voice

## Standing rules
- ALL content fetched at BUILD time. Never per-visitor.
- Keys: scoped, least-privilege, env vars only (security.md)
- Deploy hooks: content save → rebuild → live
- Client edits rows/posts freely; field & schema changes go through [YOU], never the client
