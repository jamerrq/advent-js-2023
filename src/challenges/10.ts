export function createChristmasTree (ornaments: string, height: number): string {
  const totalChars = height * (height + 1) / 2
  const repeatQuot = totalChars / ornaments.length
  const allChars = [...ornaments.repeat(repeatQuot + 1)].join(' ')
  let ans = ''
  let index = 0
  const spaces = ' '.repeat(height - 1)
  for (const i of Array(height).keys()) {
    const orns = allChars.substring(index, index + 2 * i + 1)
    const row = `${spaces.substring(i)}${orns}\n`
    index += 2 * (i + 1)
    ans += row
  }
  return `${ans}${' '.repeat(height - 1)}|\n`
}
