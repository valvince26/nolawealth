/**
 * HoneypotField — a bot trap, rendered on every form that posts to /api/lead.
 *
 * Why this field and not "company": /api/contact on the server already treats a
 * non-empty `company` as spam, but Val's forms ask for Company as a real, visible
 * field that business visitors legitimately fill in. Reusing it would silently
 * discard every genuine submission from a named company. So the trap is a separate
 * `website` input that no form ever shows to a person.
 *
 * Hidden with off-screen positioning rather than `type="hidden"` or `display:none` —
 * form-filling bots skip the former and increasingly skip the latter, but they do
 * fill inputs that are merely positioned out of view. `tabIndex={-1}` keeps it out
 * of keyboard navigation and `aria-hidden` keeps it out of screen readers, so a
 * visitor using either one cannot land on it by accident and fail the check.
 *
 * The server answers a filled honeypot with 200 and stores nothing, so a bot never
 * learns it was caught.
 */
export default function HoneypotField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
      <label htmlFor="website-hp">Website (leave this field empty)</label>
      <input
        id="website-hp"
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
