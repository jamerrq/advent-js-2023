import { test, expectTypeOf, expect, describe } from 'vitest'
import { findNaughtyStep } from '../challenges/03'

describe('Challenge #03', () => {
  test('Test #01', () => {
    expectTypeOf(findNaughtyStep).returns.toEqualTypeOf('')
  })

  test('Test #02', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toEqual('e')
  })

  test('Test #03', () => {
    expect(findNaughtyStep('abcde', 'abcd')).toEqual('e')
  })

  test('Test #04', () => {
    expect(findNaughtyStep('xxxx', 'xxoxx')).toEqual('o')
  })

  test('Test #05', () => {
    expect(findNaughtyStep('stepfor', 'stepor')).toEqual('f')
  })

  test('Test #06', () => {
    expect(findNaughtyStep('iiiii', 'iiiii')).toEqual('')
  })
})
