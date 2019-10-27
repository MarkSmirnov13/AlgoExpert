/**
 * Correct bracket sequence V2.0
 * @param {string} str
 * @returns {boolean}
 *
 * isBracketSequenceCorrect('(({}())[])') -> true
 */

/**
 * O(n)
 */

export const isBracketSequenceCorrect = str => {
  let storage = []
  let buf

  for (let el of str) {
    if (el === '(' || el === '{' || el === '[') {
      storage.push(el)
    } else {
      if (storage.length === 0) {
        return false
      }

      buf = storage.pop()
      if (
        buf === '(' && el !== ')' ||
        buf === '{' && el !== '}' ||
        buf === '[' && el !== ']'
      ) {
        return false
      }
    }
  }

  return storage.length === 0
}