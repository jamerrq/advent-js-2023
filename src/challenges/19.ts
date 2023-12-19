export function revealSabotage (store: string[][]): string[][] {
  const n = store.length
  const m = store[0].length
  const st = store
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      const ij = st[i][j]
      const w = +(st[i - 1]?.[j - 1] === '*') + +(st[i - 1]?.[j] === '*')
      const y = +(st[i - 1]?.[j + 1] === '*') + +(st[i]?.[j - 1] === '*')
      const t = +(st[i]?.[j + 1] === '*') + +(st[i + 1]?.[j - 1] === '*')
      const k = +(st[i + 1]?.[j] === '*') + +(st[i + 1]?.[j + 1] === '*')
      const x = `${w + y + t + k}`
      st[i][j] = [ij, x][+(w + y + t + k > 0) * +(ij === ' ')]
    }
  }
  return store
}
