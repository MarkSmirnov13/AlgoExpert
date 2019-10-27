/**
 * Correct bracket sequence
 * @param {string} str
 * @returns {boolean}
 *
 * isBracketSequenceCorrect('((()())())') -> true
 */

/**
 * O(n)
 */

export const isBracketSequenceCorrect = str => {
  let counter = 0

  for (let el of str) {
    if (el === '(') {
      counter++
    } else {
      counter--
    }

    if (counter < 0) {
      return false
    }
  }

  return counter === 0
}