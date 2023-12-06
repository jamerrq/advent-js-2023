import { test, expectTypeOf, expect, describe } from 'vitest'
import { decode } from '../challenges/04'

describe('Challenge #04', () => {
  test('Test #01', () => {
    expectTypeOf(decode).returns.toEqualTypeOf('')
  })

  test('Test #02', () => {
    expect(decode('hola (odnum)')).toEqual('hola mundo')
  })

  test('Test #03', () => {
    expect(decode('(olleh) (dlrow)!')).toEqual('hello world!')
  })

  test('Test #04', () => {
    expect(decode('sa(u(cla)atn)s')).toEqual('santaclaus')
  })

  test('Test #05', () => {
    expect(decode('((nta)(sa))')).toEqual('santa')
  })
})
