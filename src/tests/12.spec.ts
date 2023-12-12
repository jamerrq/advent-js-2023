import { test, assertType, expect, describe } from 'vitest'
import { checkIsValidCopy } from '../challenges/12'

describe('Challenge #12', () => {
  test('Test #01', () => {
    const answer = checkIsValidCopy('', '')
    assertType<boolean>(answer)
  })

  test('Test #02', () => {
    const received = checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')
    expect(received).toEqual(true)
  })

  test('Test #03', () => {
    const received = checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')
    expect(received).toEqual(false)
  })

  test('Test #04', () => {
    const received = checkIsValidCopy('Santa Claus', ' Santa Claus ')
    expect(received).toEqual(false)
  })

  test('Test #05', () => {
    const received = checkIsValidCopy('Santa Claus', '###:. c:+##')
    expect(received).toEqual(true)
  })

  test('Test #06', () => {
    const received = checkIsValidCopy('Santa Claus', 'sant##claus+')
    expect(received).toEqual(false)
  })

  test('Test #07', () => {
    const received = checkIsValidCopy('Santa Claus', 's#+:. c:. s')
    expect(received).toEqual(true)
  })

  test('Test #08', () => {
    const received = checkIsValidCopy('Santa Claus', 's#+:.#c:. s')
    expect(received).toEqual(false)
  })

  test('Test #09', () => {
    const received = checkIsValidCopy('Santa Claus', 'SantA ClauS')
    expect(received).toEqual(false)
  })

  test('Test #10', () => {
    const received = checkIsValidCopy('3 regalos', '3 .+:# #:')
    expect(received).toEqual(true)
  })

  test('Test #11', () => {
    const received = checkIsValidCopy('3 regalos', '3        ')
    expect(received).toEqual(true)
  })

  test('Test #12', () => {
    const received = checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')
    expect(received).toEqual(true)
  })

  test('Test #13', () => {
    const received = checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño')
    expect(received).toEqual(false)
  })
})
