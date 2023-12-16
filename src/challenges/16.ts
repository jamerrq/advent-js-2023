// For testing
export interface ANSWER_TYPE {
  value: number
  left: ANSWER_TYPE | null
  right: ANSWER_TYPE | null
}

export function transformTree (tree: Array<number | null>): ANSWER_TYPE | null {
  const root = tree.shift()
  if (root === undefined || root === null) {
    return null
  }
  const L = []; const R = []
  let n = 1; let i = 0; let inL = true; let c = 0
  while (i < tree.length) {
    if (inL) {
      L.push(tree.at(i) as number | null)
    } else {
      R.push(tree.at(i) as number | null)
    }
    c++
    i++
    if (c === n) {
      c = 0
      inL = !inL
      if (inL) n *= 2
    }
  }
  return {
    value: root,
    left: transformTree(L),
    right: transformTree(R)
  }
}
