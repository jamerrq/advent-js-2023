export function drawGift (size: number, symbol: string): string {
  const topLines = []
  const bottomLines = []
  for (let i = 0; i < size - 1; ++i) {
    let line = ''
    if (i === 0) {
      line = '#'.repeat(size)
    } else {
      line = `#${symbol.repeat(Math.max(0, size - 2))}#${symbol.repeat(i - 1)}#`
    }
    const spaces = size - i - 1
    topLines.push(`${' '.repeat(spaces)}${line}`)
    bottomLines.unshift(line)
  }
  // console.log(topLines)
  // console.log(bottomLines)
  const middleLine = size > 1 ? `\n${'#'.repeat(size)}${symbol.repeat(Math.max(0, size - 2))}#\n` : '#'
  const result = topLines.join('\n') + middleLine + bottomLines.join('\n')
  return result + '\n'
}
