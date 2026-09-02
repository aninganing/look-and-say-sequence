import { describe, expect, it } from "vitest";
import { getMiddleTwoDigits } from "../src/solution3";

describe("solution3 (정규식 기반) - getMiddleTwoDigits", () => {
  it("n=5일 때 L5=111221 이므로 12를 반환한다", () => {
    expect(getMiddleTwoDigits(5)).toBe(12);
  });

  it("n=8일 때 L8=1113213211 이므로 21을 반환한다", () => {
    expect(getMiddleTwoDigits(8)).toBe(21);
  });

  it("n=4일 때 L4=1211 이므로 21을 반환한다", () => {
    expect(getMiddleTwoDigits(4)).toBe(21);
  });

  it("n=6일 때 L6=312211 이므로 22를 반환한다", () => {
    expect(getMiddleTwoDigits(6)).toBe(22);
  });

  it("n=9일 때 L9=31131211131221 이므로 11을 반환한다", () => {
    expect(getMiddleTwoDigits(9)).toBe(11);
  });

  it("n=10일 때 L10=13211311123113112211 이므로 23을 반환한다", () => {
    expect(getMiddleTwoDigits(10)).toBe(23);
  });
});
