## Calculate the nth Fibonacci number using an iterative approach.

### Time Complexity

The time complexity of this function is `O(n)` because it contains a single loop that runs `n` times, where n is the input to the function.

In each iteration of the loop, a constant amount of work is done: a new Fibonacci number is calculated by adding the two previous numbers, and the variables `a` and `b` are updated.

Since the amount of work done in each iteration does not depend on the size of the input, the total amount of work is proportional to the size of the input, hence the time complexity is linear, or `O(n)`.

### Space Complexity

The space complexity of this function is `O(1)`, which means it uses a constant amount of space regardless of the input size.

This is because the function only uses a fixed number of variables (`previousFibNumber`, `currentFibNumber`, `nextFibNumber`, and `i`). The space used by these variables does not increase with `n`, so the space complexity is constant.