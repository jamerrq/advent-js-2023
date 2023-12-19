import { test, expectTypeOf, expect, describe } from 'vitest'
import { revealSabotage } from '../challenges/19'

describe('Challenge #19', () => {
  test('Test #01', () => {
    expectTypeOf(revealSabotage).returns.toEqualTypeOf([])
  })

  test('Test #02', () => {
    const received = revealSabotage([
      ['*', ' ', ' ', ' '],
      [' ', ' ', '*', ' '],
      [' ', ' ', ' ', ' '],
      ['*', ' ', ' ', ' ']
    ])
    const expected = [
      [
        '*',
        '2',
        '1',
        '1'
      ],
      [
        '1',
        '2',
        '*',
        '1'
      ],
      [
        '1',
        '2',
        '1',
        '1'
      ],
      [
        '*',
        '1',
        ' ',
        ' '
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test #03', () => {
    const received = revealSabotage([
      [' ', ' ', ' '],
      [' ', '*', ' '],
      [' ', ' ', ' ']
    ])
    const expected = [
      [
        '1',
        '1',
        '1'
      ],
      [
        '1',
        '*',
        '1'
      ],
      [
        '1',
        '1',
        '1'
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test #04', () => {
    const received = revealSabotage([
      ['*', ' ', ' '],
      [' ', '*', ' '],
      [' ', ' ', '*']
    ])
    const expected = [
      [
        '*',
        '2',
        '1'
      ],
      [
        '2',
        '*',
        '2'
      ],
      [
        '1',
        '2',
        '*'
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test #05', () => {
    const received = revealSabotage([
      ['*', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ])
    const expected = [
      [
        '*',
        '1',
        ' '
      ],
      [
        '1',
        '1',
        ' '
      ],
      [
        ' ',
        ' ',
        ' '
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test #06', () => {
    const received = revealSabotage([
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*']
    ])
    const expected = [
      [
        '*',
        '*',
        '*'
      ],
      [
        '*',
        '8',
        '*'
      ],
      [
        '*',
        '*',
        '*'
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test #07', () => {
    const received = revealSabotage([
      ['*', ' ', '*']
    ])
    const expected = [
      [
        '*',
        '2',
        '*'
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test #08', () => {
    const received = revealSabotage([
      ['*', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', '*']
    ])
    const expected = [
      [
        '*',
        '1',
        ' '
      ],
      [
        '1',
        '2',
        '1'
      ],
      [
        ' ',
        '1',
        '*'
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test #09', () => {
    const received = revealSabotage([
      ['*', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', '*', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', '*']
    ])
    const expected = [
      [
        '*',
        '1',
        ' ',
        ' ',
        ' '
      ],
      [
        '1',
        '2',
        '1',
        '1',
        ' '
      ],
      [
        ' ',
        '1',
        '*',
        '1',
        ' '
      ],
      [
        ' ',
        '1',
        '1',
        '2',
        '1'
      ],
      [
        ' ',
        ' ',
        ' ',
        '1',
        '*'
      ]
    ]
    expect(received).toEqual(expected)
  })
})
