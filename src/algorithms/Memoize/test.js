import {memoize} from '.'
import {fibonacci} from '../Fibonacci'

const memoizedFibonacci = memoize(fibonacci)

test('Fibonacci', () => {
  const n = 2
  expect(memoizedFibonacci(n))
    .toBe(1)
})

test('Fibonacci', () => {
  const n = 3
  expect(memoizedFibonacci(n))
    .toBe(2)
})

test('Fibonacci', () => {
  const n = 4
  expect(memoizedFibonacci(n))
    .toBe(3)
})

test('Fibonacci', () => {
  const n = 5
  expect(memoizedFibonacci(n))
    .toBe(5)
})

test('Fibonacci', () => {
  const n = 6
  expect(memoizedFibonacci(n))
    .toBe(8)
})

test('Fibonacci', () => {
  const n = 7
  expect(memoizedFibonacci(n))
    .toBe(13)
})

test('Fibonacci', () => {
  const n = 8
  expect(memoizedFibonacci(n))
    .toBe(21)
})

test('Fibonacci', () => {
  const n = 9
  expect(memoizedFibonacci(n))
    .toBe(34)
})

test('Fibonacci', () => {
  const n = 10
  expect(memoizedFibonacci(n))
    .toBe(55)
})

test('Fibonacci', () => {
  const n = 11
  expect(memoizedFibonacci(n))
    .toBe(89)
})