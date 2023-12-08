export function drawGift (size: number, symbol: string): string {
  const topLines = []
  const bottomLines = []
  const symbolPattern = symbol.repeat(Math.max(0, size - 2))
  for (let i = 0; i < size - 1; ++i) {
    let line = ''
    if (i === 0) {
      line = '#'.repeat(size)
    } else {
      const symPtn = symbol.repeat(i - 1)
      line = `#${symbolPattern}#${symPtn}#`
    }
    const spaces = size - i - 1
    topLines.push(`${' '.repeat(spaces)}${line}`)
    bottomLines.unshift(line)
  }
  const barrer = '#'.repeat(size)
  const middleLine = size > 1
    ? `\n${barrer}${symbolPattern}#\n`
    : '#'
  const result = topLines.join('\n') + middleLine + bottomLines.join('\n')
  return result + '\n'
}
