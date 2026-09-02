function nextTerm(term: string): string {
  return term.replace(/(\d)\1*/g, (match, digit: string) => `${match.length}${digit}`);
}

function nthTerm(n: number): string {
  let term = "1";
  for (let i = 1; i < n; i++) {
    term = nextTerm(term);
  }
  return term;
}

export function getMiddleTwoDigits(n: number): number {
  const term = nthTerm(n);
  const mid = term.length / 2;
  return Number(term.slice(mid - 1, mid + 1));
}
