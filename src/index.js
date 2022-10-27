const wordEndsWithSS = (word) => {
  const ssAtTheEndToken = /(ss$\b)/g
  return word.match(ssAtTheEndToken)
}

export const getStemWord = (word) => {
  const pluralisingTokens = /((s|lies|lier|ify|ification|ly|y|es)\b)/g
  
  if(wordEndsWithSS(word) || !word.match(pluralisingTokens))
    return word

  const foundPlural = 
    word.match(pluralisingTokens)

  return word.replace(foundPlural, '')
}

export const sanitizeInputText = (word) => word.replace(/\./g, '').toLowerCase()

export const countWords = (inputText, wordToCount) => {
  const stemWordToCount = getStemWord(wordToCount)
  return sanitizeInputText(inputText)
    .split(' ')
    .map(getStemWord)
    .reduce((aggregrate, word) => (aggregrate[word] = (aggregrate[word] || 0) + 1, aggregrate), {})[stemWordToCount]; 
}
