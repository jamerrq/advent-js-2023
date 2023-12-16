import { test, expectTypeOf, assertType, expect, describe } from 'vitest'
import { transformTree } from '../challenges/16'
import type { ANSWER_TYPE } from '../challenges/16'

describe('Challenge #16', () => {
  test('Test #01', () => {
    expectTypeOf(transformTree).toBeFunction()
    assertType<ANSWER_TYPE | null>(transformTree([]))
  })

  test('Test #02', () => {
    expect(transformTree([])).toEqual(null)
  })

  test('Test #03', () => {
    expect(transformTree([1])).toEqual({
      value: 1,
      left: null,
      right: null
    })
  })

  test('Test #04', () => {
    expect(transformTree([1, 2, 3])).toEqual({
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    })
  })

  test('Test #05', () => {
    expect(transformTree([1, 2, 3, 4, 5])).toEqual({
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 5,
          left: null,
          right: null
        }
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    })
  })

  test('Test #06', () => {
    expect(transformTree([1, 2, 3, 4, 5, 6, 7])).toEqual({
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 5,
          left: null,
          right: null
        }
      },
      right: {
        value: 3,
        left: {
          value: 6,
          left: null,
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: null
        }
      }
    })
  })

  test('Test #07', () => {
    expect(transformTree([17, 0, null, null, 1])).toEqual({
      value: 17,
      left: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null
        }
      },
      right: null
    })
  })

  test('Test #08', () => {
    expect(transformTree([3, 1, 0, 8, 12, null, 1])).toEqual({
      value: 3,
      left: {
        value: 1,
        left: {
          value: 8,
          left: null,
          right: null
        },
        right: {
          value: 12,
          left: null,
          right: null
        }
      },
      right: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null
        }
      }
    })
  })

  test('Test #09', () => {
    expect(transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])).toEqual({
      value: 2,
      left: {
        value: 7,
        left: null,
        right: {
          value: 6,
          left: {
            value: 1,
            left: null,
            right: null
          },
          right: {
            value: 11,
            left: null,
            right: null
          }
        }
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 9,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null
          }
        }
      }
    })
  })
})
