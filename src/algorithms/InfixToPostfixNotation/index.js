/**
 * Infix to postfix notation
 * @param {string} str
 * @returns {string}
 *
 * infToPost('( 1 + 2 ) * 3') -> '1 2 + 3 *'
 */

export const infToPost = str => {
  let signs = []
  let result = []
  let buf
  let inf = str.split(' ')

  while (inf.length) {
    buf = inf.shift()

    if (Number(buf) || buf === '0') {
      result.push(buf)
    }

    if (buf === '+' || buf === '-' || buf === '*' || buf === '/') {
      if (signs[signs.length - 1] === '*' || signs[signs.length - 1] === '/') {
        result.push(signs.pop())
        signs.push(buf)
      } else {
        signs.push(buf)
      }
    }

    if (buf === '(') {
      signs.push(buf)
    }

    if (buf === ')') {
      while ((buf = signs.pop()) !== '(') {
        result.push(buf)
      }
    }
  }

  return result.concat(signs.reverse()).join(' ')
}