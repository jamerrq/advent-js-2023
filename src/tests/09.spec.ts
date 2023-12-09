import { test, expectTypeOf, expect, describe } from 'vitest'
import { adjustLights } from '../challenges/09'

describe('Challenge #09', () => {
  test('Test #01', () => {
    expectTypeOf(adjustLights).returns.toEqualTypeOf(1)
  })

  // Test: adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]) -> 1
  test('Test #02', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toEqual(1)
  })

  // Test: adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]) -> 2
  test('Test #03', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toEqual(2)
  })

  // Test: adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]) -> 0
  test('Test #04', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toEqual(0)
  })

  // Test: adjustLights(["🔴", "🔴", "🔴"] -> 1
  test('Test #05', () => {
    expect(adjustLights(['🔴', '🔴', '🔴'])).toEqual(1)
  })
})
