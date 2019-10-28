/**
 * Calculate postfix notation
 * @param {string} str
 * @returns {number}
 *
 * calculatePostfixNotation('1 2 + 3 *') -> 9
 */

export const calculatePostfixNotation = str => {
  const result = []
  let a, b

  str.split(' ').forEach(el => {
    if (Number(el) || el === '0') {
      result.push(el)
    } else {
      a = result.pop()
      b = result.pop()
      result.push(eval(`${b}${el}${a}`))
    }
  })

  return result[0]
}