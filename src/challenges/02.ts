export function manufacture (gifts: string[], materials: string): string[] {
  // Code here
  return gifts.filter(gift => [...gift]
    .every(char => materials.includes(char)))
}
