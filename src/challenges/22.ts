export function compile (code: string): number {
  let ans = 0
  let index = 0
  let last = -1
  let inside = null
  const instructions = code.split('')
  while (index < instructions.length) {
    const outside = inside !== false
    const instruction = instructions[index]
    ans += +(outside) * +(instruction === '+')
    ans -= 1 * +(outside) * +(instruction === '-')
    ans *= [1, 2][+(outside) * +(instruction === '*')]
    last = [last, index][+(outside) * +(instruction === '%')]
    const a = +(instruction === '¿')
    const b = +(ans > 0)
    const c = +(instruction === '?')
    inside = [inside, null, true, false][
      2 * a + c + (1 - b) * (1 - c) * (a + b)
    ]
    const prev = index
    index = [index, last - 1][+(last !== -1) * +(instructions[index] === '<')]
    instructions[prev] = [instructions[index], ' '][+(instruction === '<')]
    index++
  }
  return ans
}
