export function drawClock (time: string): string[][] {
  const digitGrid: Record<string, string> = {
    '00': '1',
    '01': '14',
    '02': 'A',
    10: '1237',
    11: 'N',
    12: '56',
    20: '1237',
    21: 'N',
    22: '56',
    30: '17',
    31: '170',
    32: 'A',
    40: '134579',
    41: 'N',
    42: '2',
    50: '134579',
    51: 'N',
    52: '2',
    60: '147',
    61: '147',
    62: 'A'
  }
  const clockGrid: string[][] = []
  for (let i = 0; i < 7; i++) {
    clockGrid[i] = new Array(17).fill(' ')
  }
  clockGrid[2][8] = '*'
  clockGrid[4][8] = '*'
  const digits = [...time.replace(':', '')]
  let currentDigit = digits.shift() as string
  for (const index of [0, 4, 10, 14]) {
    for (let row = 0; row < 7; ++row) {
      for (let col = 0; col < 3; ++col) {
        const notFill = digitGrid[`${row}${col}`]
        if (notFill === 'N') continue
        if (!notFill.includes(currentDigit) || notFill === 'A') {
          clockGrid[row][col + index] = '*'
        }
      }
    }
    currentDigit = digits.shift() as string
  }
  return clockGrid
}
