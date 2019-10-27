/**
 * Anagrams
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 *
 * isAnagram('are u sure', 'erus u era') -> true
 */

/**
 * O(n)
 */

export const isAnagram = (str1, str2) => {
  const s1 = prepareStr(str1)
  const s2 = prepareStr(str2)

  if (!s1 || !s2) {
    return false
  }

  for (let key in s1) {
    if (s1[key] !== s2[key]) {
      return false
    }
  }

  return true
}

function prepareStr(str) {
  if (str.length === 0) {
    return null
  }

  return str.toLowerCase().match(/[a-z0-9]/g).reduce((accum, value) => {
    accum[value] = accum[value] ? accum[value] + 1 : 1
    return accum
  }, {})
}