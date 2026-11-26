const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parse(ym: string): { year: number; month: number } {
  const [y = "0", m = "1"] = ym.split("-");
  return { year: Number(y), month: Number(m) - 1 };
}

export function formatMonth(ym: string): string {
  const { year, month } = parse(ym);
  return `${MONTHS[month]} ${year}`;
}

/** "Jan 2026 — Aug 2026" or "Jan 2024 — Present" */
export function formatPeriod(start: string, end: string | null): string {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : "Present"}`;
}

/** Inclusive duration, e.g. "1 yr 8 mos" */
export function formatDuration(start: string, end: string | null, now = new Date()): string {
  const s = parse(start);
  const e = end ? parse(end) : { year: now.getFullYear(), month: now.getMonth() };
  const total = (e.year - s.year) * 12 + (e.month - s.month) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
}

/** "2024 — now", "2021 — 2022", or a single year when start and end match */
export function formatYears(start: string, end: string | null): string {
  const s = start.slice(0, 4);
  if (!end) return `${s} — now`;
  const e = end.slice(0, 4);
  return s === e ? s : `${s} — ${e}`;
}
