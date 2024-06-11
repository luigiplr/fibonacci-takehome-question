/**
 * Calculate the nth Fibonacci number using an recursive approach.
 *
 * Time complexity: O(2^n)
 * Space complexity: O(n)
 */
export function fib(n: number): number {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer");
  }

  // If the input is 0, return 0 because the 0th Fibonacci number is 0
  if (n === 0) {
    return 0;
  }

  // If the input is 1, return 1 because the 1st Fibonacci number is 1
  if (n === 1) {
    return 1;
  }

  // For any other input, return the sum of the previous two Fibonacci numbers
  // This is done by making recursive calls to calculate the (n - 1)th and (n - 2)th Fibonacci numbers
  return fib(n - 1) + fib(n - 2);
}
