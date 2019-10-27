/**
 * Sum of two numbers in sorted array
 * @param {Array} arr
 * @param {number} targetSum
 * @returns {[number, number]}
 *
 * sumOfTwoNumbersInArray([2, 7, 11, 15], 13) -> [0, 2]
 */

/**
 * O(n)
 */
export const sumOfTwoNumbersInSortedArray = (arr, targetSum) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let targetDiff = targetSum - arr[left]

    if (arr[right] === targetDiff) {
      return [left, right]
    }

    if (targetDiff < arr[right]) {
      right--
    } else {
      left++
    }
  }

  return null
}