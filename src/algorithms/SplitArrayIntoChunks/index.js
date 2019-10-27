/**
 * Split array into chunks
 * @param {Array} arr
 * @param {number} n
 * @returns {Array}
 *
 * splitArrayIntoChunks([1, 2, 3, 4, 5], 2) -> [[1, 2],[3, 4],[5]]
 */

/**
 * O(n)
 */

export const splitArrayIntoChunks = (arr, n) => {
  let result = []
  let buf = []

  for (let el of arr) {
    buf.push(el)
    if (buf.length >= n) {
      result.push(buf)
      buf = []
    }
  }

  if (buf.length !== 0) {
    result.push(buf)
  }

  return result
}