export function getIndexsForPalindrome (word: string): [number, number] | [] | null {
  let ans: [number, number] | [] | null = null
  const wordLength = word.length
  if ([...word].reverse().join('') === word) {
    ans = []
  } else {
    // if swapping chars i and j makes the word a palindrome, return [i, j]
    for (let i = 0; i < wordLength; i++) {
      for (let j = i + 1; j < wordLength; j++) {
        const wordArr = [...word]
        const temp = wordArr[i]
        wordArr[i] = wordArr[j]
        wordArr[j] = temp
        if (wordArr.join('') === wordArr.reverse().join('')) {
          ans = [i, j]
          break
        }
      }
      if (ans !== null) break
    }
  }
  return ans
}
