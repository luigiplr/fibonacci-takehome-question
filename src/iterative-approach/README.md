## Calculate the nth Fibonacci number using an iterative approach.

The time complexity of this function is `O(n)` because it contains a single loop that runs `n` times, where n is the input to the function.

In each iteration of the loop, a constant amount of work is done: a new Fibonacci number is calculated by adding the two previous numbers, and the variables `a` and `b` are updated.

Since the amount of work done in each iteration does not depend on the size of the input, the total amount of work is proportional to the size of the input, hence the time complexity is linear, or `O(n)`.