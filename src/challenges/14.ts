export function maxGifts (houses: number[]): number {
  const dp = houses.slice(0, 2)
  for (const house of houses.slice(2)) {
    const last = dp[dp.length - 1]
    const secondLast = dp[dp.length - 2] + house
    dp.push([last, secondLast][+(last < secondLast)])
  }
  return dp[dp.length - 1]
}
