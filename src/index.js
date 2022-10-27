import getStemWord from './getStemWord.js'
import sanitizeInputText from './sanitizeInputText.js'

export const countWords = (inputText, wordToCount) => {
  const stemWordToCount = getStemWord(wordToCount)
  return sanitizeInputText(inputText)
    .split(' ')
    .map(getStemWord)
    .reduce((aggregrate, word) => (aggregrate[word] = (aggregrate[word] || 0) + 1, aggregrate), {})[stemWordToCount]; 
}

