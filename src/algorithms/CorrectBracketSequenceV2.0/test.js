import {isBracketSequenceCorrect} from '.'

test('Correct bracket sequence V2.0', () => {
  const str = '(({}())[])'
  expect(isBracketSequenceCorrect(str))
    .toBe(true)
})

test('Correct bracket sequence V2.0', () => {
  const str = '()'
  expect(isBracketSequenceCorrect(str))
    .toBe(true)
})

test('Correct bracket sequence V2.0', () => {
  const str = '(}'
  expect(isBracketSequenceCorrect(str))
    .toBe(false)
})

test('Correct bracket sequence V2.0', () => {
  const str = '(()}'
  expect(isBracketSequenceCorrect(str))
    .toBe(false)
})

test('Correct bracket sequence V2.0', () => {
  const str = '({}[]'
  expect(isBracketSequenceCorrect(str))
    .toBe(false)
})

test('Correct bracket sequence V2.0', () => {
  const str = '({}[]))'
  expect(isBracketSequenceCorrect(str))
    .toBe(false)
})

test('Correct bracket sequence V2.0', () => {
  const str = '['
  expect(isBracketSequenceCorrect(str))
    .toBe(false)
})