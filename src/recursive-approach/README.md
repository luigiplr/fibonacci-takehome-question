## Calculate the nth Fibonacci number using an recursive approach.

The time complexity of this function is `O(2^n)` because it uses a recursive approach to calculate the nth Fibonacci number.

In this approach, each call to the fib function results in two additional calls (i.e., `fib(n - 1)` and `fib(n - 2)`). This means that the total number of function calls doubles for each increase in `n`, leading to an exponential growth in the number of operations as n increases. Hence, the time complexity is `O(2^n)`.

The space complexity of this function is `O(n)`. This is because each recursive call to the fib function adds a new level to the call stack. The maximum depth of the call stack is `n`, which is the input to the function. Therefore, the amount of memory used by the function is proportional to `n`, leading to a space complexity of `O(n)`.