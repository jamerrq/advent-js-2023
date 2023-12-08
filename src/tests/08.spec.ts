import { test, expectTypeOf, expect, describe } from 'vitest'
import { organizeGifts } from '../challenges/08'

describe('Challenge #08', () => {
  test('Test #01', () => {
    expectTypeOf(organizeGifts).returns.toEqualTypeOf('')
  })

  // Test: organizeGifts("76a11b")
  // Expected: "[a]{a}{a}(aaaaaa){b}(b)"
  test('Test #02', () => {
    expect(organizeGifts('76a11b')).toEqual('[a]{a}{a}(aaaaaa){b}(b)')
  })

  //   Test: organizeGifts("20a")
  // Expected:
  // "{a}{a}"
  test('Test #03', () => {
    expect(organizeGifts('20a')).toEqual('{a}{a}')
  })

  // Test: organizeGifts("70b120a4c")

  // Expected:
  // "[b]{b}{b}[a][a]{a}{a}(cccc)"
  test('Test #04', () => {
    expect(organizeGifts('70b120a4c')).toEqual('[b]{b}{b}[a][a]{a}{a}(cccc)')
  })

  // Test: organizeGifts("9c")

  // Expected:
  // "(ccccccccc)"
  test('Test #05', () => {
    expect(organizeGifts('9c')).toEqual('(ccccccccc)')
  })

  // Test: organizeGifts("19d51e")

  // Expected:
  // "{d}(ddddddddd)[e](e)"
  test('Test #06', () => {
    expect(organizeGifts('19d51e')).toEqual('{d}(ddddddddd)[e](e)')
  })
})
