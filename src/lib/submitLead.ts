/**
 * submitLead — the single real capture path for every form on this site.
 *
 * Before this existed, all three forms did `e.preventDefault(); setSubmitted(true);` —
 * they showed a success screen and discarded the visitor's message. Nothing was ever
 * received by anyone.
 *
 * POSTs same-origin to /api/lead, which is already routed by Caddy on
 * nolawealthfinancial.com. Same-origin matters: the site's Content-Security-Policy
 * sets `connect-src 'self'`, so a third-party form service would be blocked outright.
 *
 * Returns true only on a real 2xx from the server. Callers must not show a success
 * state on false — telling someone "thank you" when the message was lost is the exact
 * defect this file replaces.
 */

export type LeadSource = "contact-page" | "consultation-modal";

export async function submitLead(
  source: LeadSource,
  fields: Record<string, string>
): Promise<boolean> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source,
        submitted_at: new Date().toISOString(),
        page: typeof window !== "undefined" ? window.location.pathname : "",
        fields,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
