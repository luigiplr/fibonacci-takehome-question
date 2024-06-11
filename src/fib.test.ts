import { fib as iterativeFib } from "./iterative-approach/fib";
import { fib as recursiveFib } from "./recursive-approach/fib";

const fibs: [(input: number) => number, string][] = [
  [iterativeFib, "iterative"],
  [recursiveFib, "recursive"],
];

for (let [fib, approach] of fibs) {
  describe(`${approach} approach: fib()`, () => {
    test("should return 0 for input 0", () => {
      expect(fib(0)).toBe(0);
    });

    test("should return 1 for input 1", () => {
      expect(fib(1)).toBe(1);
    });

    test("should return correct Fibonacci number for input 5", () => {
      expect(fib(5)).toBe(5);
    });

    test("should return correct Fibonacci number for input 10", () => {
      expect(fib(10)).toBe(55);
    });

    test("should throw error for negative input", () => {
      expect(() => fib(-1)).toThrow("Input must be a non-negative integer");
    });
  });
}
