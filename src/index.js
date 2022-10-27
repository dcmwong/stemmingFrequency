import getStemWord from './getStemWord'
import sanitizeInputText from './sanitizeInputText'

export const countWords = (inputText, wordToCount) => {
  const stemWordToCount = getStemWord(wordToCount)
  return sanitizeInputText(inputText)
    .split(' ')
    .map(getStemWord)
    .reduce((aggregrate, word) => (aggregrate[word] = (aggregrate[word] || 0) + 1, aggregrate), {})[stemWordToCount]; 
}
