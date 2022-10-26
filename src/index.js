const stripPlural = (word) => {
  const pluralisingTokens = /(s\b|\b)/g
  const foundPlural = word.match(pluralisingTokens).filter(x => x !=='').join('')
  return word.replace(foundPlural, '')
}
const stemWord = (word) => {
  return stripPlural(word)
}

module.exports = stemWord
 
