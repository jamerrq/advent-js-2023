import { test, expectTypeOf, expect, describe } from 'vitest'
import { drawGift } from '../challenges/07'

describe('Challenge #07', () => {
  test('Test #01', () => {
    expectTypeOf(drawGift).returns.toEqualTypeOf('')
  })

  // Test: drawGift(4, "+")
  test('Test #02', () => {
    const expected = `   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`
    expect(drawGift(4, '+')).toEqual(expected)
  })

  test('Test #03', () => {
    const expected = `    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`
    console.log(drawGift(5, '*'))
    expect(drawGift(5, '*')).toEqual(expected)
  })

  // Test: drawGift(1, "^")
  test('Test #04', () => {
    const expected = '#\n'
    expect(drawGift(1, '^')).toEqual(expected)
  })

  // Test: drawGift(2, "&")
  test('Test #05', () => {
    const expected = ` ##
###
##
`
    expect(drawGift(2, '&')).toEqual(expected)
  })

  // Test: drawGift(10, "%")
  test('Test #06', () => {
    const expected = `         ##########
        #%%%%%%%%##
       #%%%%%%%%#%#
      #%%%%%%%%#%%#
     #%%%%%%%%#%%%#
    #%%%%%%%%#%%%%#
   #%%%%%%%%#%%%%%#
  #%%%%%%%%#%%%%%%#
 #%%%%%%%%#%%%%%%%#
##########%%%%%%%%#
#%%%%%%%%#%%%%%%%#
#%%%%%%%%#%%%%%%#
#%%%%%%%%#%%%%%#
#%%%%%%%%#%%%%#
#%%%%%%%%#%%%#
#%%%%%%%%#%%#
#%%%%%%%%#%#
#%%%%%%%%##
##########
`
    expect(drawGift(10, '%')).toEqual(expected)
  })
})
