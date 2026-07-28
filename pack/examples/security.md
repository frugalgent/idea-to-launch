<!-- From Chapter 16 of "Idea to Launch" (The Builders Handbook, Book One) — fglabs.co -->
<!-- Last verified: July 2026 -->

# Security Rules — Marisol's Kitchen

## Secrets — the iron rules
- Keys, tokens, passwords: NEVER in the repo, in any committed file, or client-side code
- Local: .env only (gitignored). Production: Cloudflare environment variables only
- The repo carries the NAMES of variables, never values
- A leaked key gets ROTATED (new key issued, old killed) — deleting the file is not the fix

## Token scoping (least privilege, always)
- Menu key: read-only, scoped to the Menu base
- Requests key: write-only, scoped to the Requests table
- The site only ever READS the CMS; the form Worker only ever WRITES its one table

## Naming convention (every key, in the password manager)
`service — project — scope — created`  →  e.g. `airtable — marisols — read-only — 2026-07`
One vault entry per key: scope, where deployed, rotation date in the notes.

## Accounts
- 2FA on every service: GitHub, Cloudflare, Airtable, Sanity, registrar, Claude
- Password manager is required equipment; one strong generated password per service
- Sharing/offboarding via shared vaults only — never SMS, email, or text files
- Offboarding recipe: revoke access → rotate what they touched → log it

## Forms
- Honeypot + Turnstile on every form; rate limiting on the Worker

## Review checklist (run before launch, and quarterly)
[ ] Secrets scan of repo history   [ ] All keys scoped + named + inventoried
[ ] 2FA verified everywhere        [ ] Dependencies audited + lockfile committed
[ ] Security headers present       [ ] No orphaned or mystery keys in the vault
