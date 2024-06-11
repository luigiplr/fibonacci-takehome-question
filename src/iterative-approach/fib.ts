/**
 * Calculate the nth Fibonacci number using an iterative approach.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
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

  // Initialize the first two Fibonacci numbers
  let previousFibNumber = 0;
  let currentFibNumber = 1;

  // Calculate the nth Fibonacci number
  for (let i = 2; i <= n; i++) {
    // Calculate the next Fibonacci number
    const nextFibNumber = previousFibNumber + currentFibNumber;

    // Update the previous two Fibonacci numbers
    previousFibNumber = currentFibNumber;
    currentFibNumber = nextFibNumber;
  }

  return currentFibNumber;
}
