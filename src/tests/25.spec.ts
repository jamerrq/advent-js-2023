import { test, expectTypeOf, expect, describe } from 'vitest'
import { travelDistance } from '../challenges/25'

describe('Challenge #25', () => {
  test('Test #01', () => {
    expectTypeOf(travelDistance).returns.toEqualTypeOf(0)
  })

  test('Test #02', () => {
    const received = travelDistance(
      `.....1....
..S.......
..........
....3.....
......2...`)
    const expected = 12
    expect(received).toEqual(expected)
  })

  test('Test #03', () => {
    const received = travelDistance('..S.1...')
    const expected = 2
    expect(received).toEqual(expected)
  })

  test('Test #04', () => {
    const received = travelDistance(
      `.....2....
..S.......
..........
....1.....
......3...`
    )
    const expected = 13
    expect(received).toEqual(expected)
  })

  test('Test #05', () => {
    const received = travelDistance(
      `3....1....
..S.......
.........2
..........
......4...`
    )
    const expected = 31
    expect(received).toEqual(expected)
  })

  test('Test #06', () => {
    const received = travelDistance('S1')
    const expected = 1
    expect(received).toEqual(expected)
  })

  test('Test #07', () => {
    const received = travelDistance('1....S')
    const expected = 5
    expect(received).toEqual(expected)
  })

  test('Test #08', () => {
    const received = travelDistance('S12....3')
    const expected = 7
    expect(received).toEqual(expected)
  })
})
