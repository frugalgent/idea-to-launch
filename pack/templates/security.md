<!-- From Chapter 16 of "Idea to Launch" (The Builders Handbook, Book One) — fglabs.co -->
<!-- Last verified: [DATE]. The rules are universal; the inventory is yours. -->

# Security Rules — [PROJECT NAME]

## Secrets — the iron rules
- Keys/tokens/passwords: NEVER in the repo, committed files, or client-side code
- Local: .env (gitignored). Production: Cloudflare env vars. Repo carries NAMES, never values
- Leaked key → ROTATE (new key, kill old). Deleting the file is not the fix

## Token scoping (least privilege, always)
- [key]: [read-only/write-only], scoped to [exactly what]
- The site only READS the CMS; any form Worker only WRITES its one table

## Naming convention (every key, in the password manager)
`service — project — scope — created`   e.g. `airtable — [project] — read-only — [YYYY-MM]`
One vault entry per key: scope, where deployed, rotation date in notes.

## Accounts
- 2FA on EVERY service: [list yours]
- Password manager required; one generated password per service
- Sharing/offboarding via shared vaults only; offboarding = revoke → rotate → log

## Review checklist (pre-launch + quarterly)
[ ] Repo history secrets scan  [ ] Keys scoped/named/inventoried  [ ] 2FA verified
[ ] Dependencies audited       [ ] Security headers               [ ] No orphaned keys
