export function cyberReindeer (road: string, time: number): string[] {
  // Code here
  const ans = [road]
  let roadCopy = [...road.replace('S', '.')]
  let currentTime = 1
  let waitTime = 0
  while (currentTime < time) {
    if (currentTime < 5) {
      const currentChar = roadCopy[currentTime]
      if (currentChar === '|') {
        const addedAns = new Array(Math.min(5, time) - currentTime + 1).fill(ans.at(-1))
        waitTime = addedAns.length - 1
        ans.splice(ans.length - 1, 1, ...addedAns)
        currentTime = 5
        roadCopy = [...road.replace('S', '.').replaceAll('|', '*')]
        continue
      } else {
        const currentStep = [...roadCopy]
        currentStep[currentTime] = 'S'
        ans.push(currentStep.join(''))
        currentTime++
      }
    } else {
      const currentStep = [...roadCopy]
      currentStep[currentTime - waitTime] = 'S'
      ans.push(currentStep.join(''))
      currentTime++
    }
  }
  return ans
}
