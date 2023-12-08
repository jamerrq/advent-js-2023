export function organizeGifts (gifts: string): string {
  const giftsRegex = /(\d+)([a-z])/g
  const giftsMatches = gifts.matchAll(giftsRegex)
  let ans = ''
  for (const match of giftsMatches) {
    const [, qty, symbol] = match
    let left = +qty
    ans = `${ans}${`[${symbol}]`.repeat((left - (left % 50)) / 50)}`
    left -= 50 * ((left - (left % 50)) / 50)
    ans = `${ans}${`{${symbol}}`.repeat((left - (left % 10)) / 10)}`
    left -= 10 * (left - (left % 10)) / 10
    const x = ((left - 1) + ((left - 1) >> 31)) ^ ((left - 1) >> 31)
    ans = `${ans}${`(${symbol.repeat(left)})`.repeat((left + 1 - x) / 2)}`
  }
  return ans
}
