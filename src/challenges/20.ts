export function distributeGifts (weights: Array<Array<number | null>>): number[][] {
  const n = weights.length; const m = weights[0].length
  const gifts: number[][] = []
  for (let i = 0; i < n; ++i) {
    gifts[i] = []
    for (let j = 0; j < m; ++j) {
      const up = weights[i - 1]?.[j]
      const lf = weights[i][j - 1]
      const rg = weights[i][j + 1]
      const dw = weights[i + 1]?.[j]
      const ct = weights[i][j]
      let sum = +([0, ct][+(ct != null)] as number)
      let n = +(ct != null)
      sum += +([0, up][+(up != null)] as number)
      n += +(up != null)
      sum += +([0, dw][+(dw != null)] as number)
      n += +(dw != null)
      sum += +([0, rg][+(rg != null)] as number)
      n += +(rg != null)
      sum += +([0, lf][+(lf != null)] as number)
      n += +(lf != null)
      gifts[i][j] = ((sum / n) + 0.5) | 0
    }
  }
  return gifts
}
