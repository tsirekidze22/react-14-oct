import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("Sum", () => {
  it("Adds two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });
  it("Adds one positive and one negative number", () => {
    expect(sum(10, -5)).toBe(5);
  });
  it("Adds two negative numbers", () => {
    expect(sum(-15, -5)).toBe(-20);
  });
  it("Adds zero", () => {
    expect(sum(10, 0)).toBe(10);
  });
});
