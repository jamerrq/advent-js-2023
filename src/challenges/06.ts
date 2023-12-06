export function maxDistance (movements: string): number {
  // Code here
  const left = [...movements].filter((char) => char === '>').length
  const right = [...movements].filter((char) => char === '<').length
  const stars = movements.length - left - right
  return Math.max(left, right) + stars - Math.min(left, right)
}
