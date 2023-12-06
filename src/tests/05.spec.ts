import { test, expectTypeOf, expect, describe } from 'vitest'
import { cyberReindeer } from '../challenges/05'

describe('Challenge #04', () => {
  test('Test #01', () => {
    expectTypeOf(cyberReindeer).returns.toEqualTypeOf([''])
  })

  test('Test #02', () => {
    expect(cyberReindeer('S..|...|..', 10)).toEqual([
      'S..|...|..',
      '.S.|...|..',
      '..S|...|..',
      '..S|...|..',
      '..S|...|..',
      '...S...*..',
      '...*S..*..',
      '...*.S.*..',
      '...*..S*..',
      '...*...S..'
    ])
  })

  test('Test #03', () => {
    const expected = [
      'S.|.',
      '.S|.',
      '.S|.',
      '.S|.'
    ]
    expect(cyberReindeer('S.|.', 4)).toEqual(expected)
  })

  test('Test #04', () => {
    const expected = [
      'S.|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '..S.*.',
      '..*S*.'
    ]
    expect(cyberReindeer('S.|.|.', 7)).toEqual(expected)
  })

  test('Test #05', () => {
    const expected = [
      'S.|..',
      '.S|..',
      '.S|..',
      '.S|..',
      '.S|..',
      '..S..'
    ]
    expect(cyberReindeer('S.|..', 6)).toEqual(expected)
  })

  test('Test #06', () => {
    const expected = [
      'S.|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '..S.*.*......*.**.........',
      '..*S*.*......*.**.........',
      '..*.S.*......*.**.........'
    ]
    expect(cyberReindeer('S.|.|.|......|.||.........', 8)).toEqual(expected)
  })
})
