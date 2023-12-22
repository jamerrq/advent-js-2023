import { test, expectTypeOf, expect, describe } from 'vitest'
import { compile } from '../challenges/22'

describe('Challenge #22', () => {
  test('Test #01', () => {
    expectTypeOf(compile).returns.toEqualTypeOf(0)
  })

  test('Test #02', () => {
    const received = compile('++*-')
    const expected = 3
    expect(received).toEqual(expected)
  })

  test('Test #03', () => {
    const received = compile('++¿+?')
    const expected = 3
    expect(received).toEqual(expected)
  })

  test('Test #04', () => {
    const received = compile('-+¿+?')
    const expected = 0
    expect(received).toEqual(expected)
  })

  test('Test #05', () => {
    const received = compile('++*¿-?')
    const expected = 3
    expect(received).toEqual(expected)
  })

  test('Test #06', () => {
    const received = compile('++%++<')
    const expected = 6
    expect(received).toEqual(expected)
  })

  test('Test #07', () => {
    const received = compile('++%++<++¿*?')
    const expected = 16
    expect(received).toEqual(expected)
  })

  test('Test #08', () => {
    const received = compile('++¿+?¿+?¿+?')
    const expected = 5
    expect(received).toEqual(expected)
  })

  test('Test #09', () => {
    const received = compile('--¿+++?')
    const expected = -2
    expect(received).toEqual(expected)
  })

  test('Test #10', () => {
    const received = compile('--¿+++?+++¿--?')
    const expected = -1
    expect(received).toEqual(expected)
  })

  test('Test #11', () => {
    const received = compile('<%+¿++%++<?')
    const expected = 7
    expect(received).toEqual(expected)
  })

  test('Test #12', () => {
    const received = compile('<<<<<<+<<<<<+%')
    const expected = 2
    expect(received).toEqual(expected)
  })
})
