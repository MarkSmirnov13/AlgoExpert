import {isAnagram} from '.'

test('Anagrams', () => {
  const str1 = 'are u sure'
  const str2 = 'erus u era'
  expect(isAnagram(str1, str2))
    .toBe(true)
})

test('Anagrams', () => {
  const str1 = 'are u sure'
  const str2 = 'erus u er a'
  expect(isAnagram(str1, str2))
    .toBe(true)
})

test('Anagrams', () => {
  const str1 = 'are u sure'
  const str2 = ''
  expect(isAnagram(str1, str2))
    .toBe(false)
})

test('Anagrams', () => {
  const str1 = ''
  const str2 = 'erus u era'
  expect(isAnagram(str1, str2))
    .toBe(false)
})

test('Anagrams', () => {
  const str1 = ''
  const str2 = ''
  expect(isAnagram(str1, str2))
    .toBe(false)
})

test('Anagrams', () => {
  const str1 = '12345'
  const str2 = '53412'
  expect(isAnagram(str1, str2))
    .toBe(true)
})

test('Anagrams', () => {
  const str1 = 'Eva, can I see bees in a cave?'
  const str2 = 'eva, c .    ,  : an I see bees in a cave?'
  expect(isAnagram(str1, str2))
    .toBe(true)
})

test('Anagrams', () => {
  const str1 = 'aDbCEFghiJ k l M NOP QRS tuvw x YZ'
  const str2 = 'aCE:::F y Z ghiJ __   k l M NdbOP QRS tuvw x'
  expect(isAnagram(str1, str2))
    .toBe(true)
})

test('Anagrams', () => {
  const str1 = '1aDbCEFghiJ k l M NOP QRS tuvw x YZ'
  const str2 = 'aCE:::F y Z ghiJ __   k l M NdbOP QRS tuvw x'
  expect(isAnagram(str1, str2))
    .toBe(false)
})