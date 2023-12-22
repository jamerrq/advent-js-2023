export function compile (code: string): number {
  let ans = 0
  let index = 0
  let last = -1
  let inside = null
  const instructions = code.split('')
  while (index < instructions.length) {
    const instruction = instructions[index]
    if (instruction === '+') {
      ans += 1 * +(inside === null || inside)
    } else if (instruction === '-') {
      ans -= 1 * +(inside === null || inside)
    } else if (instruction === '*') {
      ans *= 2 * +(inside === null || inside)
    } else if (instruction === '%') {
      last = [last, index][+(inside === null || inside)]
    } else if (instruction === '<') {
      instructions[index] = ' '
      index = [last - 1, index - 1][+(last === -1)]
    }
    const a = +(instruction === '¿')
    const b = +(ans > 0)
    const c = +(instruction === '?')
    inside = [inside, null, true, false][2 * a + c + (1 - b) * (1 - c) * (a + b)]
    index++
  }
  return ans
}
