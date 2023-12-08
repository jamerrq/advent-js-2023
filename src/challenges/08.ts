export function organizeGifts (gifts: string): string {
  const giftsRegex = /(\d+)([a-z])/g
  const giftsMatches = gifts.matchAll(giftsRegex)
  const giftsArray = Array.from(giftsMatches).map((match) => {
    const [, count, symbol] = match
    return { count: Number(count), symbol }
  })
  let ans = ''
  for (const { count, symbol } of giftsArray) {
    let remainder = count
    const pallets = Math.floor(remainder / 50)
    remainder -= pallets * 50
    const boxes = Math.floor(remainder / 10)
    remainder -= boxes * 10
    const bags = remainder
    const palletsStr = `[${symbol}]`.repeat(pallets)
    const boxesStr = `{${symbol}}`.repeat(boxes)
    const bagsStr = `(${symbol.repeat(bags)})`.repeat(Math.min(1, bags))
    ans += palletsStr + boxesStr + bagsStr
  }
  return ans
}
