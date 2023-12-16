export function optimizeIntervals (intervals: Array<[number, number]>): Array<[number, number]> {
  intervals.sort((a, b) => a[0] - b[0])
  const ans: Array<[number, number]> = [intervals.shift() as [number, number]]
  for (const int of intervals) {
    const [min, max] = int
    const [pMin, pMax] = ans.at(-1) as [number, number]
    const insidePrevious = pMin <= min && min <= pMax
    if (insidePrevious) {
      ans[ans.length - 1] = [pMin, Math.max(max, pMax)]
    } else {
      ans.push([min, max])
    }
  }
  return ans
}
