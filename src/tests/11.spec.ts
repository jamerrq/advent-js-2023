import { test, assertType, expect, describe } from 'vitest'
import { getIndexsForPalindrome } from '../challenges/11'

describe('Challenge #11', () => {
  test('Test #01', () => {
    const answer = getIndexsForPalindrome('')
    assertType<[number, number] | null | []>(answer)
  })

  // Test: getIndexsForPalindrome('anna')
  test('Test #02', () => {
    expect(getIndexsForPalindrome('anna')).toEqual([])
  })

  // Test: getIndexsForPalindrome('abab')
  test('Test #03', () => {
    expect(getIndexsForPalindrome('abab')).toEqual([0, 1])
  })

  // Test: getIndexsForPalindrome('abac')
  test('Test #04', () => {
    expect(getIndexsForPalindrome('abac')).toEqual(null)
  })

  // Test: getIndexsForPalindrome('aaaaaaaa')
  test('Test #05', () => {
    expect(getIndexsForPalindrome('aaaaaaaa')).toEqual([])
  })

  // Test: getIndexsForPalindrome('aaababa')
  test('Test #06', () => {
    expect(getIndexsForPalindrome('aaababa')).toEqual([1, 3])
  })

  // Test: getIndexsForPalindrome('caababa')
  test('Test #07', () => {
    expect(getIndexsForPalindrome('caababa')).toEqual(null)
  })

  // Test: getIndexsForPalindrome('rotavator')
  test('Test #08', () => {
    expect(getIndexsForPalindrome('rotavator')).toEqual([])
  })

  // Test: getIndexsForPalindrome('rotaratov')
  test('Test #09', () => {
    expect(getIndexsForPalindrome('rotaratov')).toEqual([4, 8])
  })

  // Test: getIndexsForPalindrome('saippuakivikauppias')
  test('Test #10', () => {
    expect(getIndexsForPalindrome('saippuakivikauppias')).toEqual([])
  })
})
