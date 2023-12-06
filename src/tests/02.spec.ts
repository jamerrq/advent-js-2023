import { test, expectTypeOf, expect, describe } from 'vitest'
import { manufacture } from '../challenges/02'

describe('Challenge #02', () => {
  test('Test #01', () => {
    expectTypeOf(manufacture).returns.toEqualTypeOf([''])
  })

  test('Test #02', () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toEqual(['tren', 'oso'])
  })

  test('Test #03', () => {
    expect(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')).toEqual([])
  })

  test('Test #04', () => {
    expect(manufacture(['patineta', 'robot', 'libro'], 'nopor')).toEqual([])
  })

  test('Test #05', () => {
    expect(manufacture([], 'letras')).toEqual([])
  })
})
