// First approach (tests passing, 40 pts)
export function checkIsValidCopy (original: string, copy: string): boolean {
  if (original.length !== copy.length) return false
  if (original.length === 0) return true
  const [t, ...ts] = [...original]
  const [x, ...xs] = [...copy]
  if (t === ' ' && x !== ' ') return false
  const regexp = new RegExp(`[#.:+ ]|${t}|${t.toLowerCase()}`)
  return regexp.test(x) && checkIsValidCopy(ts.join(''), xs.join(''))
}
