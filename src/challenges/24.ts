export function getStaircasePaths (steps: number, maxJump: number): number[][] {
  const paths: number[][] = []
  const path: number[] = []
  const calculatePaths = (steps: number, maxJump: number, path: number[]): undefined => {
    if (steps === 0) {
      paths.push(path)
      return
    }

    for (let i = 1; i <= maxJump && i <= steps; i++) {
      calculatePaths(steps - i, maxJump, [...path, i])
    }
  }

  calculatePaths(steps, maxJump, path)

  return paths
}
