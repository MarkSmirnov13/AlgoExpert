/**
 * Spiral matrix
 * @param {number} n
 * @returns {Array}
 *
 * matrix(3) -> [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
 */

export const matrix = n => {
  let result = new Array(n).fill().map(el => new Array(n).fill(''))
  let startRow = 0
  let endRow = n - 1
  let startColumn = 0
  let endColumn = n - 1
  let counter = 1

  while (startRow <= endRow && startColumn <= endColumn) {
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter
      counter++
    }
    startRow++

    for (let i = startRow; i <= endRow; i++) {
      result[i][endColumn] = counter
      counter++
    }
    endColumn--

    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = counter
      counter++
    }
    endRow--

    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = counter
      counter++
    }
    startColumn++
  }

  return result
}
