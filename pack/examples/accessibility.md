<!-- From Chapters 8–9 of "Idea to Launch" (The Builders Handbook, Book One) — fglabs.co -->

# Accessibility Rules — Marisol's Kitchen
Real people with real bodies use this site. These are requirements, not polish.

## Contrast
- Body text meets WCAG AA against masa (#F6EFE3); check clay-on-masa on every use
- Never convey meaning by color alone

## Images
- Every image has alt text, HUMAN-REVIEWED (Claude drafts; I approve)
- Decorative images: empty alt, on purpose

## Keyboard
- Everything reachable by Tab, in a sensible order
- Focus states styled, never removed
- Skip-to-content link on every page

## Structure
- Semantic HTML: one h1 per page, headings in order, landmarks (nav/main/footer)
- Forms: labels tied to inputs; errors announced and adjacent to their field

## Motion
- Every animation honors prefers-reduced-motion with a calm alternative
- Spinners announced to screen readers ("sending your request")
