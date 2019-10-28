import {fibonacci} from '.'

test('Fibonacci', () => {
  const n = 2
  expect(fibonacci(n))
    .toBe(1)
})

test('Fibonacci', () => {
  const n = 3
  expect(fibonacci(n))
    .toBe(2)
})

test('Fibonacci', () => {
  const n = 4
  expect(fibonacci(n))
    .toBe(3)
})

test('Fibonacci', () => {
  const n = 5
  expect(fibonacci(n))
    .toBe(5)
})

test('Fibonacci', () => {
  const n = 6
  expect(fibonacci(n))
    .toBe(8)
})

test('Fibonacci', () => {
  const n = 7
  expect(fibonacci(n))
    .toBe(13)
})

test('Fibonacci', () => {
  const n = 8
  expect(fibonacci(n))
    .toBe(21)
})

test('Fibonacci', () => {
  const n = 9
  expect(fibonacci(n))
    .toBe(34)
})

test('Fibonacci', () => {
  const n = 10
  expect(fibonacci(n))
    .toBe(55)
})

test('Fibonacci', () => {
  const n = 11
  expect(fibonacci(n))
    .toBe(89)
})