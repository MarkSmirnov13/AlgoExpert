/**
 * Sum of two numbers in array
 * @param Array arr
 * @param number targetSum
 * @returns [number, number]
 *
 * SumOfTwoNumbersInArray([2, 7, 11, 15], 17) -> [2, 15]
 */

/**
 * O(n)
 */
export const sumOfTwoNumbersInArray1 = (arr, targetSum) => {
  const storage = {}
  for (let i = 0; i < arr.length; i++) {
    storage[arr[i]] = i
  }
  for (let i = 0; i < arr.length; i++) {
    const diff = targetSum - arr[i]
    if (storage.hasOwnProperty(diff)
      && storage[diff] !== i) {
      return [arr[i], diff]
    }
  }
  return null
}

/**
 * Best solution
 *
 * O(n)
 */
export const sumOfTwoNumbersInArray2 = (arr, targetSum) => {
  const storage = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (storage.has(targetSum - arr[i])) {
      return [targetSum - arr[i], arr[i]]
    } else {
      storage.set(arr[i], i)
    }
  }
  return null
}
