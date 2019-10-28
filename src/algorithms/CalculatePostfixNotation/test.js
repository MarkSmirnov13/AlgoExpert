import {calculatePostfixNotation} from '.'
import {infToPost} from '../InfixToPostfixNotation'

test('Calculate postfix notation', () => {
  const str = '1 2 + 3 *'
  expect(calculatePostfixNotation(str))
    .toBe(9)
})

test('Calculate postfix notation', () => {
  const str = '1 2 +'
  expect(calculatePostfixNotation(str))
    .toBe(3)
})

test('Calculate postfix notation', () => {
  const str = '8 2 5 * + 1 3 2 * + 4 - /'
  expect(calculatePostfixNotation(str))
    .toBe(6)
})

test('Calculate postfix notation', () => {
  const str = infToPost('1 * ( 2 + 3 )')
  expect(calculatePostfixNotation(str))
    .toBe(5)
})

test('Calculate postfix notation', () => {
  const str = infToPost('1 * ( 2 + ( 10 / 5 ) )')
  expect(calculatePostfixNotation(str))
    .toBe(4)
})

test('Calculate postfix notation', () => {
  const str = infToPost('1 * ( 2 + ( 10 / 5 ) - 4 )')
  expect(calculatePostfixNotation(str))
    .toBe(0)
})

test('Calculate postfix notation', () => {
  const str = infToPost('( 8 + 2 * 5 ) / ( 1 + 3 * 2 - 4 )')
  expect(calculatePostfixNotation(str))
    .toBe(6)
})