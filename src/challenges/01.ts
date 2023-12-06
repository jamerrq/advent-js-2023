export function findFirstRepeated (gifts: number[]): number {
  const cache = new Set()
  const repeated = []
  for (let i = 0; i < gifts.length; ++i) {
    const gi = gifts[i]
    if (cache.has(gi)) repeated.push(gi)
    cache.add(gi)
  }
  return repeated[0] ?? -1
}
