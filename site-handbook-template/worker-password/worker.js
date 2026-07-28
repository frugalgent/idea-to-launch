// Simple shared-password gate for the Site Handbook (the book's Ch. 20 "simpler alternative").
// Risks, stated plainly: one shared password can be shared onward, and revoking one person
// means changing it for everyone. Cloudflare Access is the recommended pattern; use this
// only for a solo builder or a very small, trusted circle.
//
// Setup: set the secret (never hardcode it):
//   npx wrangler secret put HANDBOOK_PASSWORD

const COOKIE = "hb_auth";

async function tokenFor(password) {
  const data = new TextEncoder().encode("hb-v1:" + password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, "0")).join("");
}

const LOGIN_PAGE = (wrong) => `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Site Handbook</title>
<style>body{font-family:Georgia,serif;background:#1C2B39;color:#F4F5F0;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}
.card{background:#F4F5F0;color:#1C2B39;padding:34px 36px;border-radius:10px;max-width:340px;width:90%}
h1{font-size:20px;margin:0 0 4px;border-bottom:4px solid #FFE45C;padding-bottom:8px}
p{font-size:14px;color:#4A5C6E;margin:10px 0 16px}
input{width:100%;padding:11px;font-size:16px;border:2px solid #1C2B39;border-radius:6px;box-sizing:border-box}
button{width:100%;margin-top:12px;padding:11px;font-size:15px;background:#1C2B39;color:#fff;border:0;border-radius:6px;cursor:pointer}
.err{color:#C03A2B;font-size:13px;margin-top:8px}</style></head>
<body><div class="card"><h1>Site Handbook</h1><p>Enter the handbook password.</p>
<form method="POST"><input type="password" name="password" autofocus>
<button>Open the handbook</button>${wrong ? '<div class="err">That password did not match.</div>' : ''}</form>
</div></body></html>`;

export default {
  async fetch(request, env) {
    const expected = await tokenFor(env.HANDBOOK_PASSWORD);
    const cookies = request.headers.get("Cookie") || "";
    const authed = cookies.split(";").some(c => c.trim() === `${COOKIE}=${expected}`);

    if (request.method === "POST") {
      const form = await request.formData();
      if ((await tokenFor(form.get("password") || "")) === expected) {
        return new Response(null, { status: 302, headers: {
          "Location": new URL(request.url).pathname,
          "Set-Cookie": `${COOKIE}=${expected}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=2592000`,
        }});
      }
      return new Response(LOGIN_PAGE(true), { status: 401, headers: { "Content-Type": "text/html" } });
    }

    if (!authed) return new Response(LOGIN_PAGE(false), { status: 401, headers: { "Content-Type": "text/html" } });
    return env.ASSETS.fetch(request);
  }
};
