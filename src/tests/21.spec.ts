import { test, expectTypeOf, expect, describe } from 'vitest'
import { findBalancedSegment } from '../challenges/21'

describe('Challenge #21', () => {
  test('Test #01', () => {
    expectTypeOf(findBalancedSegment).returns.toEqualTypeOf([])
  })

  test('Test #02', () => {
    const received = findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
    const expected = [
      2,
      5
    ]
    expect(received).toEqual(expected)
  })

  test('Test #03', () => {
    const received = findBalancedSegment([1, 1, 0])
    const expected = [
      1,
      2
    ]
    expect(received).toEqual(expected)
  })

  test('Test #04', () => {
    const received = findBalancedSegment([1, 1, 1])
    const expected: number[] = []
    expect(received).toEqual(expected)
  })

  test('Test #05', () => {
    const received = findBalancedSegment([1, 0, 1])
    const expected = [
      0,
      1
    ]
    expect(received).toEqual(expected)
  })

  test('Test #06', () => {
    const received = findBalancedSegment([1, 0, 1, 0])
    const expected = [
      0,
      3
    ]
    expect(received).toEqual(expected)
  })

  test('Test #07', () => {
    const received = findBalancedSegment([1, 1, 0, 1, 0, 1])
    const expected: number[] = [
      1,
      4
    ]
    expect(received).toEqual(expected)
  })

  test('Test #08', () => {
    const received = findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])
    const expected = [
      0,
      7
    ]
    expect(received).toEqual(expected)
  })

  test('Test #06', () => {
    const received = findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])
    const expected = [
      5,
      10
    ]
    expect(received).toEqual(expected)
  })
})
