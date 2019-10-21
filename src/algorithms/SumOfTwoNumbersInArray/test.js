import {sumOfTwoNumbersInArray1, sumOfTwoNumbersInArray2} from './index'

test('Sum of tho numbers in array', () => {
  const arr = [2, 7, 11, 15]
  const target = 17
  expect(sumOfTwoNumbersInArray1(arr, target))
    .toStrictEqual([2, 15])
})

test('Sum of tho numbers in array', () => {
  const arr = [2, 7, 11, 15]
  const target = 17
  expect(sumOfTwoNumbersInArray2(arr, target))
    .toStrictEqual([2, 15])
})

test('Sum of tho numbers in array', () => {
  const arr = [2, 7, 11, 15]
  const target = 20
  expect(sumOfTwoNumbersInArray1(arr, target))
    .toBe(null)
})

test('Sum of tho numbers in array', () => {
  const arr = [2, 7, 11, 15]
  const target = 20
  expect(sumOfTwoNumbersInArray2(arr, target))
    .toBe(null)
})