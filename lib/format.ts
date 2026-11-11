// The CMS Project Date is a raw JS date string (e.g. "Tue Sep 02 2025 …GMT…").
// Format it into a clean, readable date (same logic as the Astro work page).
export function formatDate(raw: string | undefined | null): string {
  if (!raw) return "";
  const d = new Date(raw);
  if (isNaN(d.getTime())) return raw;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" });
}
