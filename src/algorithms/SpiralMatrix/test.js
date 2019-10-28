import {matrix} from '.'

test('Spiral matrix', () => {
  const n = 2
  expect(matrix(n))
    .toStrictEqual([[1, 2], [4, 3]])
})

test('Spiral matrix', () => {
  const n = 3
  expect(matrix(n))
    .toStrictEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]])
})

test('Spiral matrix', () => {
  const n = 4
  expect(matrix(n))
    .toStrictEqual([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]])
})

test('Spiral matrix', () => {
  const n = 1
  expect(matrix(n))
    .toStrictEqual([[1]])
})
