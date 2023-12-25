export function travelDistance (map: string): number {
  const positions: Record<string, [number, number]> = {}
  for (const [rowIndex, row] of map.split('\n').entries()) {
    for (const [colIndex, col] of row.replace('S', '0').split('').entries()) {
      if (/[\d|S]/.test(col)) {
        positions[col] = [rowIndex, colIndex]
      }
    }
  }
  let ans = 0
  for (const x of Object.keys(positions)) {
    if (x === '0') {
      continue
    }
    const [currentRow, currentCol] = positions[x]
    const [prevRow, prevCol] = positions[+x - 1]
    ans += Math.abs(currentRow - prevRow)
    ans += Math.abs(currentCol - prevCol)
  }
  return ans
}
