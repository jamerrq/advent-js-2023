export function decode (message: string): string {
  // Code here
  const nestRegex = /\(([\w\s]+)\)/g

  while (nestRegex.test(message)) {
    message = message.replaceAll(nestRegex, (_match, subgroup) =>
      [...subgroup].reverse().join('')
    )
  }

  return message
}
