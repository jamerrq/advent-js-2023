export function findBalancedSegment (message: number[]): number[] {
  const zeros: number[] = [0]
  const ones = message.reduce<number[]>(
    (acc, val) => {
      acc.push(+(val === 1) + (acc.at(-1) ?? 0))
      zeros.push(+(val === 0) + (zeros.at(-1) ?? 0))
      return acc
    },
    [0]
  )
  const ans = []
  let max = 0
  for (let i = 0; i < ones.length; i++) {
    for (let j = i + 1; j < ones.length; j++) {
      if (ones[j] - ones[i] === zeros[j] - zeros[i]) {
        if (ones[j] - ones[i] > max) {
          ans[0] = i
          ans[1] = j - 1
          max = ones[j] - ones[i]
        }
      }
    }
  }
  return ans
}
