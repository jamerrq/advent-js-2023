export function findBalancedSegment (message: number[]): number[] {
  const zeros = [0]
  const ones = [0]
  for (const bit of message) {
    zeros.push(zeros.at(-1)! + +(bit === 0))
    ones.push(ones.at(-1)! + +(bit === 1))
  }
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
