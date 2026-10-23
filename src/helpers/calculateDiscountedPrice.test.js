import { describe, it, expect } from "vitest";
import { calculateDiscountedPrice } from "./calculateDiscountedPrice";

describe("Discounted Price", () => {
  it("Applies 10% discount", () => {
    expect(calculateDiscountedPrice(100, 10)).toBe(90);
  });

  it("Applies 10% discount on 50GEL", () => {
    expect(calculateDiscountedPrice(50, 10)).toBe(45);
  });

  it("Applies 20% discount", () => {
    expect(calculateDiscountedPrice(500, 20)).toBe(400);
  });

  it("Applies 0% discount", () => {
    expect(calculateDiscountedPrice(100, 0)).toBe(100);
  });
});
