export function distributeGifts (weights: Array<Array<number | null>>): number[][] {
  const n = weights.length; const m = weights[0].length
  const gifts: number[][] = Array(n).fill(null).map(() => Array(m).fill(0))
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      const up = weights[i - 1]?.[j]
      const lf = weights[i][j - 1]
      const rg = weights[i][j + 1]
      const dw = weights[i + 1]?.[j]
      const ct = weights[i][j]
      let n = 0; let sum = 0
      for (const x of [up, lf, rg, dw, ct]) {
        const z = +(x != null)
        sum += +([0, x][z] as number)
        n += z
      }
      gifts[i][j] = Math.round(sum / n)
    }
  }
  return gifts
}
