# Accounts & Tools Inventory
_Last verified: 2026-07-28_

> Every service in play, who owns the login, and what plan it's on.
> **Credentials themselves live in the password manager and are referenced here, never written.**
> Vault entry names follow the convention from `security.md`: `service — project — scope — created`.

| Service | Used for | Login owner | Plan/tier | Vault entry |
|---|---|---|---|---|
| Claude (Pro+) | Building & maintaining the site | [who] | [Pro/Max] | `claude — [project] — owner — [YYYY-MM]` |
| GitHub | Repo, versions, backup | [who] | Free | `github — [project] — owner — [YYYY-MM]` |
| Cloudflare | Hosting, DNS, analytics, Turnstile | [who] | Free | `cloudflare — [project] — owner — [YYYY-MM]` |
| Airtable | [Menu, requests] | [who] | Free | `airtable — [project] — owner — [YYYY-MM]` |
| Sanity | [Blog, story] | [who] | Free | `sanity — [project] — owner — [YYYY-MM]` |
| [Registrar] | Domain | [who] | ~$[10]/yr | `[registrar] — [project] — owner — [YYYY-MM]` |
| [Asset tools] | [Logo/photo work] | [who] | [tier] | — |

## API keys in play
| Key | Scope | Where deployed | Rotation due |
|---|---|---|---|
| `airtable — [project] — read-only — [YYYY-MM]` | Read Menu base only | Cloudflare env var `AIRTABLE_READ` | [date] |
| `airtable — [project] — write-requests — [YYYY-MM]` | Write Requests table only | Worker env var `AIRTABLE_WRITE` | [date] |
| Sanity token | Read published content | Cloudflare env var `SANITY_TOKEN` | [date] |

**2FA status:** [confirmed on every service above — date of last check]
