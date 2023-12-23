export function organizeChristmasDinner (dishes: string[][]): string[][] {
  const ingredients = new Map<string, string[]>()
  for (const [dishName, ...ingredientsList] of dishes) {
    for (const ingredient of ingredientsList) {
      if (ingredients.has(ingredient)) {
        ingredients.get(ingredient)?.push(dishName)
      } else {
        ingredients.set(ingredient, [dishName])
      }
    }
  }
  const result = Array.from(ingredients.entries())
  result.sort((a, b) => a[0].localeCompare(b[0]))
  const valid = []
  for (const [ingredient, dishes] of result) {
    if (dishes.length > 1) {
      valid.push([ingredient, ...dishes.sort()])
    }
  }
  return valid
}
