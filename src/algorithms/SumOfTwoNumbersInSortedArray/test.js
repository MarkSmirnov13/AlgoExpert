import {sumOfTwoNumbersInSortedArray} from '.'

test('Sum of tho numbers in sorted array', () => {
  const arr = [2, 7, 11, 15]
  const target = 17
  expect(sumOfTwoNumbersInSortedArray(arr, target))
    .toStrictEqual([0, 3])
})

test('Sum of tho numbers in sorted array', () => {
  const arr = [2, 7, 11, 15]
  const target = 9
  expect(sumOfTwoNumbersInSortedArray(arr, target))
    .toStrictEqual([0, 1])
})

test('Sum of tho numbers in sorted array', () => {
  const arr = [2, 7, 11, 15]
  const target = 18
  expect(sumOfTwoNumbersInSortedArray(arr, target))
    .toStrictEqual([1, 2])
})

test('Sum of tho numbers in sorted array', () => {
  const arr = [2, 7, 11, 15]
  const target = 19
  expect(sumOfTwoNumbersInSortedArray(arr, target))
    .toBe(null)
})

test('Sum of tho numbers in sorted array', () => {
  const arr = [-9, -4, -1, 2, 7, 9, 11, 15, 17, 19, 21, 24, 40]
  const target = 11
  expect(sumOfTwoNumbersInSortedArray(arr, target))
    .toStrictEqual([1, 7])
})