/**
 * Most frequent character
 * @param {string} str
 * @returns {string}
 *
 * mostFrequentCharacter('abCd18b5rb') -> 'b'
 */

/**
 * O(n)
 */

export const mostFrequentCharacter = str => {
  let storage = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    storage[char] = storage[char] ? storage[char] + 1 : 1
    if (storage[char] > max) {
      max = storage[char]
      maxChar = char
    }
  }

  return maxChar
}