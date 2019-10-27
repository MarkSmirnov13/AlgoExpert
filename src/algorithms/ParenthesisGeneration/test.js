import {parenthesisGeneration} from '.'

test('All correct bracket sequences of length 2 * n', () => {
  const n = 1
  expect(parenthesisGeneration(n))
    .toStrictEqual(['()'])
})

test('All correct bracket sequences of length 2 * n', () => {
  const n = 2
  expect(parenthesisGeneration(n))
    .toStrictEqual(['(())', '()()'])
})

test('All correct bracket sequences of length 2 * n', () => {
  const n = 3
  expect(parenthesisGeneration(n))
    .toStrictEqual(['((()))', '(()())', '(())()', '()(())', '()()()'])
})