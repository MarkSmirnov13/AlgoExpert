import {mostFrequentCharacter} from '.'

test('Correct bracket sequence', () => {
  const str = 'abCd18b5rb'
  expect(mostFrequentCharacter(str))
    .toStrictEqual('b')
})

test('Correct bracket sequence', () => {
  const str = '123456789'
  expect(mostFrequentCharacter(str))
    .toStrictEqual('1')
})

test('Correct bracket sequence', () => {
  const str = ''
  expect(mostFrequentCharacter(str))
    .toStrictEqual('')
})

test('Correct bracket sequence', () => {
  const str = 'abcdABCDA'
  expect(mostFrequentCharacter(str))
    .toStrictEqual('A')
})