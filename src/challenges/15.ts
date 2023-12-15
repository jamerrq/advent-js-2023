export function autonomousDrive (store: string[], movements: string[]): string[] {
  let row = store.findIndex(_ => _.includes('!'))
  let col = store[row].indexOf('!')
  store[row] = store[row].replace('!', '.')
  for (const mv of movements) {
    col += +(store[row][col + 1] === '.') * +(mv === 'R')
    col -= +(store[row][col - 1] === '.') * +(mv === 'L')
    row += +(store.at(row + 1)?.at(col) === '.') * +(mv === 'D')
    row -= +(store.at(row - 1)?.at(col) === '.') * +(mv === 'U')
  }
  const str = store[row]
  store[row] = str.substring(0, col) + '!' + str.substring(col + 1)
  return store
}
