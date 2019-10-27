import {isBracketSequenceCorrect} from '.'

test('Correct bracket sequence', () => {
  const str = '((()())())'
  expect(isBracketSequenceCorrect(str))
    .toBe(true)
})

test('Correct bracket sequence', () => {
  const str = '((()())()))'
  expect(isBracketSequenceCorrect(str))
    .toBe(false)
})

test('Correct bracket sequence', () => {
  const str = '(((()())())'
  expect(isBracketSequenceCorrect(str))
    .toBe(false)
})

test('Correct bracket sequence', () => {
  const str = '((()())()())'
  expect(isBracketSequenceCorrect(str))
    .toBe(true)
})

test('Correct bracket sequence', () => {
  const str = '(('
  expect(isBracketSequenceCorrect(str))
    .toBe(false)
})

test('Correct bracket sequence', () => {
  const str = '(()'
  expect(isBracketSequenceCorrect(str))
    .toBe(false)
})

test('Correct bracket sequence', () => {
  const str = ')('
  expect(isBracketSequenceCorrect(str))
    .toBe(false)
})