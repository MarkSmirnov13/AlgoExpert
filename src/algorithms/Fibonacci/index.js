/**
 * Fibonacci
 * @param {number} n
 * @returns {number}
 *
 * fibonacci(4) -> 3
 */

export const fibonacci = n => {
  if (n < 2) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}