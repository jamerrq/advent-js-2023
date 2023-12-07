import { test, expectTypeOf, expect, describe } from 'vitest'
import { functionName } from '../challenges/template'

describe('Challenge Test Template', () => {
  test('Test #01', () => {
    expectTypeOf(functionName).returns.toEqualTypeOf(undefined)
  })

  test('Test #02', () => {
    expect(undefined).toEqual(undefined)
  })
})
