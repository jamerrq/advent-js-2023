// First approach (tests passing, 40 pts)
export function checkIsValidCopy (original: string, copy: string): boolean {
  if (original.length !== copy.length) return false
  for (let i = 0; i < original.length; ++i) {
    if (original.at(i) === ' ' && copy.at(i) !== ' ') return false
    const regexForchar = new RegExp(`${original.at(i)}|${original.at(i)?.toLowerCase()}|[#+:. ]`)
    if (!regexForchar.test(copy.at(i) as string)) return false
  }
  return true
}
