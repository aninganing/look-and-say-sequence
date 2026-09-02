function nextTerm(term: string): string {
  let result = "";
  let i = 0;
  while (i < term.length) {
    let j = i;
    while (j < term.length && term[j] === term[i]) {
      j++;
    }
    result += j - i + term[i];
    i = j;
  }
  return result;
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
