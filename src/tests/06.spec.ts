import { test, expectTypeOf, expect, describe } from 'vitest'
import { maxDistance } from '../challenges/06'

describe('Challenge #06', () => {
  test('Test #01', () => {
    expectTypeOf(maxDistance).returns.toEqualTypeOf(0)
  })

  test('Test #02', () => {
    expect(maxDistance('>>*<')).toEqual(2)
  })

  test('Test #03', () => {
    expect(maxDistance('<<<<<')).toEqual(5)
  })

  test('Test #04', () => {
    expect(maxDistance('>***>')).toEqual(5)
  })

  test('Test #05', () => {
    expect(maxDistance('**********')).toEqual(10)
  })

  test('Test #06', () => {
    expect(maxDistance('<<**>>')).toEqual(2)
  })
})
