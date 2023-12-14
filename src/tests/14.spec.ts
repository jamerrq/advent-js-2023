import { test, expectTypeOf, expect, describe } from 'vitest'
import { maxGifts } from '../challenges/14'

describe('Challenge #14', () => {
  test('Test #01', () => {
    expectTypeOf(maxGifts).returns.toEqualTypeOf(0)
  })

  test('Test #02', () => {
    expect(maxGifts([1, 2, 3, 1])).toEqual(4)
  })

  test('Test #03', () => {
    expect(maxGifts([2, 7, 9, 3, 1])).toEqual(12)
  })

  test('Test #04', () => {
    expect(maxGifts([0, 0, 0, 0, 1])).toEqual(1)
  })

  test('Test #05', () => {
    expect(maxGifts([100])).toEqual(100)
  })

  test('Test #06', () => {
    expect(maxGifts([1, 1, 1])).toEqual(2)
  })

  test('Test #07', () => {
    expect(maxGifts([3, 4, 5])).toEqual(8)
  })

  test('Test #08', () => {
    expect(maxGifts([99])).toEqual(99)
  })

  // These tests below are not in the original challenge, its from the channel
  // discussion on Discord.
  test('Test #09', () => {
    expect(maxGifts([5, 1, 1, 5])).toEqual(10)
  })

  // https://discord.com/channels/741237973663612969/915910832259477534
  test('Test #10', () => {
    expect(maxGifts([4, 1, 1, 4, 2, 1])).toEqual(9)
  })
})
