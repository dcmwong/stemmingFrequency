export const countWords = (arrayOfWords, wordToCount) => {
  const stemWordToCount = stemWord(wordToCount)
  return arrayOfWords.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), {})[stemWordToCount]; 
}

const filterOutEmptyStrings = (charArray) => {
  return charArray.filter(c => c !== '')
}
const groupWord = (word) => {
  const groupTokens = /(ify\b|ification\b|\b)/g
  const foundGroups = filterOutEmptyStrings(word.match(groupTokens)).join('')
  return word.replace(foundGroups, '')
}

const wordEndsWithSS = (word) => {
  const checkForSS = /(ss\b|\b)/g
  return filterOutEmptyStrings(word.match(checkForSS)).length > 0
}

const stripPlural = (word) => {
  if(wordEndsWithSS(word))
    return word

  const pluralisingTokens = /(s\b|\b)/g
  const foundPlural = word.match(pluralisingTokens).filter(x => x !=='').join('')
  return word.replace(foundPlural, '')
}

export const stemWord = (word) => {
  return groupWord(stripPlural(word))
}
