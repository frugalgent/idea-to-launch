<!-- From Chapter 2 of "Idea to Launch" (The Builders Handbook, Book One) — fglabs.co -->

# Installing the Toolkit — Every Command, Every Prompt
_Last verified: 2026-07-28 · Install steps drift; if something below doesn't match your screen, check this file's history and the official links at the bottom._

Four tools: **Node.js**, **Git**, **Claude Code**, **Wrangler**. Budget 30 minutes.
You'll also want your **Claude account (Pro or higher)** ready — Claude Code needs it,
and the free plan doesn't include Claude Code access.

One promise before we start: every command below comes with **"You should see:"** —
the actual output that means it worked — and every question an installer will ask you
is quoted in advance, so nothing surprises you. Installers ask questions; browsers
open and close; terminals look frozen while the browser has the baton. All normal.
All previewed below.

---

## 1. Node.js — the engine for the site's tooling

*(Fun fact: Claude Code itself no longer needs Node — its installer is standalone.
Node is here for your site's machinery: `npm run dev`, the build, Wrangler.)*

**Mac:** download the **LTS** installer from [nodejs.org](https://nodejs.org) and run it.
A standard installer wizard: Continue → Agree → Install → your Mac password → done.

**Windows:** download the **LTS** installer from [nodejs.org](https://nodejs.org) and run it.
Wizard defaults are all fine. If it offers to install "tools for native modules," you can skip it.

**Verify (new terminal window — installs don't appear in already-open ones):**
```
node --version
```
**You should see:** a version like `v22.17.0` or `v24.x.x` — any current LTS is fine.

---

## 2. Git — the save-game system

**Mac:** just try it:
```
git --version
```
- **If you see** `git version 2.x.x` — you already have it. Done.
- **If a dialog pops up** saying *"The 'git' command requires the command line developer
  tools. Would you like to install the tools now?"* — click **Install**. That dialog IS
  the installer. It takes a few minutes; then run `git --version` again.

**Windows:** download **Git for Windows** from [git-scm.com](https://git-scm.com/downloads/win)
and run it. Brace yourself: the wizard is a wall of about ten screens. **The defaults are
fine on every one of them.** The only screen that matters says *"Adjusting your PATH
environment"* — keep the recommended middle option, **"Git from the command line and
also from 3rd-party software."** Click Next until it's done.

*(Bonus: Git for Windows also lets Claude Code use its preferred shell on Windows —
one install, two jobs.)*

**Verify (new terminal):**
```
git --version
```
**You should see:** `git version 2.x.x`

---

## 3. Claude Code — your co-builder

Use the **native installer** — one command, keeps itself updated automatically.

**Mac (and Linux/WSL):**
```
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows — check your prompt first.** If it starts with `PS C:\` you're in
**PowerShell**; if it's just `C:\` you're in **CMD**. Then:

*PowerShell:*
```
irm https://claude.ai/install.ps1 | iex
```
*CMD:*
```
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

**The two errors that mean you picked the wrong one** (straight from the docs, and
they'll save you ten confused minutes):
- `The token '&&' is not a valid statement separator` → you ran the CMD command in PowerShell
- `'irm' is not recognized as an internal or external command` → you ran the PowerShell command in CMD

**Verify (new terminal):**
```
claude --version
```
**You should see:** a version like `2.1.211 (Claude Code)`.
For a deeper health check any time something misbehaves later: `claude doctor`

**First run — the prompts, previewed.** Go to a project folder (your `my-site` from
Chapter 2 is perfect) and run:
```
cd ~/Desktop/my-site
claude
```
You'll walk through a short one-time setup. Wording shifts between versions, but the
beats are stable:
1. **Pick a theme** (dark/light text style) — arrow keys + Enter, purely cosmetic.
2. **Choose how to log in** — pick the **Claude account / subscription** option
   (that's your Pro plan), *not* the Console/API option, which bills per-token.
3. **Your browser opens** to sign in and authorize. The terminal sits there waiting —
   it isn't frozen; the browser has the baton. Approve, and you'll bounce back to a
   logged-in terminal.
4. **"Do you trust the files in this folder?"** — for a folder you just made yourself:
   yes. This question is a feature, not friction: it's Claude checking with you before
   reading a folder's contents. You'll see it once per new project.

That's it. You're in a session. Type a question, or press `Ctrl+C` twice to leave.

---

## 4. Wrangler — the Cloudflare remote control

No install step at all — the book uses it through `npx`, which fetches it on demand:
```
npx wrangler --version
```
**First run asks:** `Need to install the following packages: wrangler@x.x.x. Ok to proceed? (y)`
— type `y`, press Enter. That's `npx` doing its job, not something going wrong.
**You should see:** a version number.

**Log in** (one-time; needed before any deploy — Chapter 11):
```
npx wrangler login
```
Your browser opens to Cloudflare → click **Allow** → back in the terminal:
**You should see:** `Successfully logged in.`
(No Cloudflare account yet? The signup is free and this same flow creates the login.)

---

## The full verification pass

Run all four; collect all four passes:
```
node --version        # v22+ LTS
git --version         # git version 2.x.x
claude --version      # 2.x.x (Claude Code)
npx wrangler --version
```

## If something goes wrong

| You see | What it means | The fix |
|---|---|---|
| `command not found` right after installing | Your open terminal predates the install | Close the terminal, open a new one, retry |
| `The token '&&' is not valid…` (Windows) | CMD command in PowerShell | Use the PowerShell install command |
| `'irm' is not recognized…` (Windows) | PowerShell command in CMD | Use the CMD install command |
| Mac popup about "command line developer tools" | Git isn't installed yet | Click Install — that popup IS the installer |
| Claude Code login says your plan doesn't include access | You're on the free Claude plan | Claude Code needs Pro or higher (Ch. 1's one real cost) |
| Browser opened but terminal "did nothing" | It's waiting for you to finish in the browser | Complete the sign-in; the terminal resumes |
| Anything else | — | Paste the **exact** error into a Claude chat: *"Diagnose before proposing fixes."* |

## Official sources (when this file and reality disagree, reality wins — then file an issue)
- Claude Code setup: https://code.claude.com/docs/en/setup
- Node.js: https://nodejs.org · Git: https://git-scm.com
- Wrangler: https://developers.cloudflare.com/workers/wrangler/
