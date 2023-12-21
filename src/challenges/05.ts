export function cyberReindeer (road: string, time: number): string[] {
  // Code here
  const ans = [road]
  let roadCopy = [...road.replace('S', '.')]
  let currTime = 1
  let waitTime = 0
  while (currTime < time) {
    if (currTime < 5) {
      const currentChar = roadCopy[currTime]
      if (currentChar === '|') {
        const plus = new Array(Math.min(5, time) - currTime + 1)
        plus.fill(ans.at(-1))
        waitTime = plus.length - 1
        ans.splice(ans.length - 1, 1, ...plus)
        currTime = 5
        roadCopy = [...road.replace('S', '.').replaceAll('|', '*')]
        continue
      } else {
        const currentStep = [...roadCopy]
        currentStep[currTime] = 'S'
        ans.push(currentStep.join(''))
        currTime++
      }
    } else {
      const currentStep = [...roadCopy]
      currentStep[currTime - waitTime] = 'S'
      ans.push(currentStep.join(''))
      currTime++
    }
  }
  return ans
}
