export function findNaughtyStep (original: string, modified: string): string {
  // Code here
  const [shorter, larger] = [original, modified].sort((a, b) => a.length - b.length)
  return [...larger].find((x, i) => shorter[i] !== x) ?? ''
}
