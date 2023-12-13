import { test, expectTypeOf, expect, describe } from 'vitest'
import { calculateTime } from '../challenges/13'

describe('Challenge #13', () => {
  test('Test #01', () => {
    expectTypeOf(calculateTime).returns.toEqualTypeOf('string')
  })

  test('Test #02', () => {
    const expected = '-02:20:00'
    const received = calculateTime(['00:10:00', '01:00:00', '03:30:00'])
    expect(received).toEqual(expected)
  })

  test('Test #03', () => {
    const expected = '-00:30:00'
    const received = calculateTime(['01:00:00', '05:00:00', '00:30:00'])
    expect(received).toEqual(expected)
  })

  test('Test #04', () => {
    const expected = '00:30:00'
    const received = calculateTime(['02:00:00', '05:00:00', '00:30:00'])
    expect(received).toEqual(expected)
  })

  test('Test #05', () => {
    const expected = '-05:29:00'
    const received = calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])
    expect(received).toEqual(expected)
  })

  test('Test #06', () => {
    const expected = '00:00:00'
    const received = calculateTime(['02:00:00', '03:00:00', '02:00:00'])
    expect(received).toEqual(expected)
  })

  test('Test #07', () => {
    const expected = '05:02:01'
    const received = calculateTime(['01:01:01', '09:59:59', '01:01:01'])
    expect(received).toEqual(expected)
  })

  test('Test #08', () => {
    const expected = '-00:00:01'
    const received = calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])
    expect(received).toEqual(expected)
  })
})
