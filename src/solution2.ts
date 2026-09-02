type Run = { digit: number; count: number };

function pushDigit(runs: Run[], digit: number): void {
  const last = runs[runs.length - 1];
  if (last && last.digit === digit) {
    last.count++;
  } else {
    runs.push({ digit, count: 1 });
  }
}

function nextRuns(runs: Run[]): Run[] {
  const result: Run[] = [];
  for (const run of runs) {
    pushDigit(result, run.count);
    pushDigit(result, run.digit);
  }
  return result;
}

function nthRuns(n: number): Run[] {
  let runs: Run[] = [{ digit: 1, count: 1 }];
  for (let i = 1; i < n; i++) {
    runs = nextRuns(runs);
  }
  return runs;
}

function digitAt(runs: Run[], index: number): number {
  let cursor = 0;
  for (const run of runs) {
    if (index < cursor + run.count) {
      return run.digit;
    }
    cursor += run.count;
  }
  throw new Error(`index out of range: ${index}`);
}

export function getMiddleTwoDigits(n: number): number {
  const runs = nthRuns(n);
  const totalLength = runs.reduce((sum, run) => sum + run.count, 0);
  const mid = totalLength / 2;
  const first = digitAt(runs, mid - 1);
  const second = digitAt(runs, mid);
  return Number(`${first}${second}`);
}
