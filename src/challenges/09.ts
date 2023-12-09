export function adjustLights (lights: string[]): number {
  let o1 = 0
  let o2 = 0
  let index = 0
  for (const light of lights) {
    o1 += +(light !== '🟢') * +(index % 2 !== 0)
    o2 += +(light !== '🔴') * +(index % 2 !== 0)
    o1 += +(light !== '🔴') * +(index % 2 !== 1)
    o2 += +(light !== '🟢') * +(index % 2 !== 1)
    index++
  }
  const x = o1 - o2
  return (x + 2 * o2 - ((x + (x >> 31)) ^ (x >> 31))) / 2
}
