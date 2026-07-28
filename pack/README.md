# The Context File Pack

Twelve standing-instruction files (thirteen counting the SEO/AI split) from
*Idea to Launch* (The Builders Handbook, Book One — fglabs.co). Write your
project's rules once; every Claude Code session inherits them.

## Layout
- `/examples` — the Pack filled in for **Marisol's Kitchen**, the restaurant
  built across the entire book. Read these to see what "done" looks like.
- `/templates` — fill-in-the-blank versions for your own project, with
  inline coaching in the comments.

## Quick start
1. Copy `/templates` into a `/context` folder in your project.
2. Move `CLAUDE.md` to your **project root** (it's the one file that doesn't
   live in `/context` — Claude Code reads it automatically).
3. Fill in the blanks — ideally by running the interview prompts from the
   book, not by staring at brackets.
4. List every context file in `CLAUDE.md` so sessions know to read them.

Files map to chapters (see the header comment in each). Files marked with a
"Last verified" date contain tool-dependent facts — check the repo changelog
if the date looks old.
