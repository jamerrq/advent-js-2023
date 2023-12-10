import { test, expectTypeOf, expect, describe } from 'vitest'
import { createChristmasTree } from '../challenges/10'

describe('Challenge #10', () => {
  test('Test #01', () => {
    expectTypeOf(createChristmasTree).returns.toEqualTypeOf('')
  })

  test('Test #02', () => {
    const expected = `  x
 x x
x x x
  |
`
    const received = createChristmasTree('x', 3)
    expect(received).toEqual(expected)
  })

  test('Test #03', () => {
    const expected = `   x
  o x
 o x o
x o x o
   |
`
    expect(createChristmasTree('xo', 4)).toEqual(expected)
  })

  test('Test #04', function () {
    const expected = `    1
   2 3
  1 2 3
 1 2 3 1
2 3 1 2 3
    |
`
    const received = createChristmasTree('123', 5)
    expect(received).toEqual(expected)
  })

  test('Test #05', function () {
    const expected = `  *
 @ o
* @ o
  |
`
    expect(createChristmasTree('*@o', 3)).toEqual(expected)
  })
})
