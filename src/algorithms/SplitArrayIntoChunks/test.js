import {splitArrayIntoChunks} from '.'

test('Correct bracket sequence', () => {
  const arr = [1, 2, 3, 4, 5]
  const n = 2
  expect(splitArrayIntoChunks(arr, n))
    .toStrictEqual([[1, 2],[3, 4],[5]])
})

test('Correct bracket sequence', () => {
  const arr = [1, 2, 3, 4, 5]
  const n = 3
  expect(splitArrayIntoChunks(arr, n))
    .toStrictEqual([[1, 2, 3],[4, 5]])
})

test('Correct bracket sequence', () => {
  const arr = [1, 2, 3, 4, 5]
  const n = 4
  expect(splitArrayIntoChunks(arr, n))
    .toStrictEqual([[1, 2, 3, 4], [5]])
})

test('Correct bracket sequence', () => {
  const arr = [1, 2, 3, 4, 5]
  const n = 10
  expect(splitArrayIntoChunks(arr, n))
    .toStrictEqual([[1, 2, 3, 4, 5]])
})