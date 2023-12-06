import { test, expectTypeOf, expect, describe } from 'vitest'
import { findFirstRepeated } from '../challenges/01'

describe('Challenge #01', () => {
  test('Test #01', () => {
    expectTypeOf(findFirstRepeated).returns.toEqualTypeOf(-1)
  })

  test('Test #02', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toEqual(3)
  })

  test('Test #03', () => {
    expect(findFirstRepeated([2, 2])).toEqual(2)
  })

  test('Test #04', () => {
    expect(findFirstRepeated([2, 4, 3, 5, 1])).toEqual(-1)
  })

  test('Test #05', () => {
    expect(findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])).toEqual(1)
  })

  test('Test #06', () => {
    expect(findFirstRepeated([])).toEqual(-1)
  })

  test('Test #07', () => {
    expect(findFirstRepeated([10, 20, 30])).toEqual(-1)
  })

  test('Test #08', () => {
    expect(findFirstRepeated([5, 1, 2, 3, 2, 5, 1])).toEqual(2)
  })

  test('Test #09', () => {
    expect(findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])).toEqual(10)
  })
})
