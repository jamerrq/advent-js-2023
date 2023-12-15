import { test, expectTypeOf, expect, describe } from 'vitest'
import { autonomousDrive } from '../challenges/15'

describe('Challenge #15', () => {
  test('Test #01', () => {
    expectTypeOf(autonomousDrive).returns.toEqualTypeOf(['undefined'])
  })

  test('Test #02', () => {
    const received = autonomousDrive(['..!....'], ['R', 'L'])
    const expected = [
      '..!....'
    ]
    expect(received).toEqual(expected)
  })

  test('Test #03', () => {
    const received = autonomousDrive(['!..', '***'], ['U', 'L'])
    const expected = [
      '!..',
      '***'
    ]
    expect(received).toEqual(expected)
  })

  test('Test #04', () => {
    const received = autonomousDrive([
      '..!....',
      '......*'
    ], ['R', 'D', 'L'])
    const expected = [
      '.......',
      '..!...*'
    ]
    expect(received).toEqual(expected)
  })

  test('Test #05', () => {
    const received = autonomousDrive([
      '*..!..*',
      '*.....*'
    ], ['R', 'R', 'R', 'D', 'D'])
    const expected = [
      '*.....*',
      '*....!*'
    ]
    expect(received).toEqual(expected)
  })

  test('Test #06', () => {
    const received = autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])
    const expected = [
      '***',
      '..!',
      '***'
    ]
    expect(received).toEqual(expected)
  })

  test('Test #07', () => {
    const received = autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])
    const expected = [
      '***',
      '*!*',
      '***'
    ]
    expect(received).toEqual(expected)
  })

  test('Test #08', () => {
    const received = autonomousDrive([
      '.**.*.*.',
      '.***....',
      '..!.....'
    ], ['D', 'U', 'R', 'R', 'R'])
    const expected = [
      '.**.*.*.',
      '.***....',
      '.....!..'
    ]
    expect(received).toEqual(expected)
  })
})
