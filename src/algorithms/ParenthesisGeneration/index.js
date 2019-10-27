/**
 * Generate all the correct bracket sequences of length 2 * n
 * @param {number} n
 * @returns {Array}
 *
 * findClosestValueInBinarySearchTree(<bst>, 12) -> 13
 */

  const generate = (cur, open, close, n) => {
    let result = []
    if (cur.length === 2 * n) return [...result, cur]
    if (open < n) result = [...result, ...generate(cur + '(', open + 1, close, n)]
    if (close < open) result = [...result, ...generate(cur + ')', open, close + 1, n)]
    return result
}

  export const parenthesisGeneration = n => generate('', 0, 0, n)