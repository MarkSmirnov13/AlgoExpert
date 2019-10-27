import {mostFrequentCharacter} from '.'

test('Most frequent character', () => {
  const str = 'abCd18b5rb'
  expect(mostFrequentCharacter(str))
    .toStrictEqual('b')
})

test('Most frequent character', () => {
  const str = '123456789'
  expect(mostFrequentCharacter(str))
    .toStrictEqual('1')
})

test('Most frequent character', () => {
  const str = ''
  expect(mostFrequentCharacter(str))
    .toStrictEqual('')
})

test('Most frequent character', () => {
  const str = 'abcdABCDA'
  expect(mostFrequentCharacter(str))
    .toStrictEqual('A')
})