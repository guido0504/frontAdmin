export function localDateTimeArrayToDate(
  v: number[] | string | null | undefined
): Date | null {
  if (!v) return null;
  if (typeof v === 'string') return new Date(v); // por si algún día lo mandás ISO

  const [y, m, d, hh = 0, mm = 0, ss = 0, nano = 0] = v;
  const ms = Math.floor(nano / 1_000_000); // nanos -> millis
  return new Date(y, m - 1, d, hh, mm, ss, ms); // mes en JS es 0-based
}
