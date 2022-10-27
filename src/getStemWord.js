import wordEndsWithSS from './wordEndsWithSS.js'

export default (word) => {
  const pluralisingTokens = /((s|lies|lier|ify|ification|ly|y|es)\b)/g
  
  if(wordEndsWithSS(word) || !word.match(pluralisingTokens))
    return word

  const foundPlural = 
    word.match(pluralisingTokens)

  return word.replace(foundPlural, '')
}

