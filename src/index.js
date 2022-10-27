const wordEndsWithSS = (word) => {
  const ssAtTheEndToken = /(ss$\b)/g
  return word.match(ssAtTheEndToken)
}

export const getStemWord = (word) => {
  const pluralisingTokens = /((s|lies|lier|ify|ification|ly|y)\b)/g
  
  if(wordEndsWithSS(word) || !word.match(pluralisingTokens))
    return word

  const foundPlural = 
    word.match(pluralisingTokens)

  return word.replace(foundPlural, '')
}

export const countWords = (inputText, wordToCount) => {
  const stemWordToCount = getStemWord(wordToCount)
  return inputText
    .split(' ')
    .map(getStemWord)
    .reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), {})[stemWordToCount]; 
}
