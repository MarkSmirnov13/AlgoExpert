import {infToPost} from '.'

test('Infix to postfix', () => {
  const str = '( 8 + 2 * 5 ) / ( 1 + 3 * 2 - 4 )'
  expect(infToPost(str))
    .toBe('8 2 5 * + 1 3 2 * 4 - + /')
})