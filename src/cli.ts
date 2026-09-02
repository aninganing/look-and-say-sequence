import { getMiddleTwoDigits as solution1 } from "./solution1";
import { getMiddleTwoDigits as solution2 } from "./solution2";
import { getMiddleTwoDigits as solution3 } from "./solution3";

function parseN(raw: string | undefined): number {
  if (raw === undefined) {
    throw new Error("사용법: npm run solve -- <n>");
  }
  const n = Number(raw);
  if (!Number.isInteger(n) || n <= 3 || n >= 100) {
    throw new Error(`n은 3 < n < 100 범위의 정수여야 합니다. 입력값: ${raw}`);
  }
  return n;
}

const n = parseN(process.argv[2]);

console.log(`n = ${n}`);
console.log(`풀이1 (문자열 기반): ${solution1(n)}`);
console.log(`풀이2 (배열/RLE 기반): ${solution2(n)}`);
console.log(`풀이3 (정규식 기반): ${solution3(n)}`);
