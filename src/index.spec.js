import getStemWord from './getStemWord'
import sanitizeInputText from './sanitizeInputText'
import { countWords } from './index'

describe('Stemmer', () => {
  describe('Given a word that cannot be stemmed', () => {
    it('should return the original word', () => {
      const originalWord = 'following' 
      const result = getStemWord(originalWord)
      expect(result).toEqual('following')
    })
  })
  describe('Given a pluralised word', () => {
    it('should return the stemmed word', () => {
      const originalWord = 'flows' 
      const result = getStemWord(originalWord)
      expect(result).toEqual('flow')
    })
    it('should return original word and singular word', () => {
      const originalWord = 'flows flow' 
      const result = getStemWord(originalWord)
      expect(result).toEqual('flow flow')
    })
    it('when setence contains stem should return original word and singular word', () => {
      const originalWord = 'flows flow flower' 
      const result = getStemWord(originalWord)
      expect(result).toEqual('flow flow flower')
    })
  })
  describe('Given a group word', () => {
    it('when stem should return the stemmed word', () => {
      const originalWord = 'class' 
      const result = getStemWord(originalWord)
      expect(result).toEqual('class')
    })
    it('when noun form should return the stemmed word', () => {
      const originalWord = 'classification' 
      const result = getStemWord(originalWord)
      expect(result).toEqual('class')
    })
    it('when verb form should return the stemmed word', () => {
      const originalWord = 'classify' 
      const result = getStemWord(originalWord)
      expect(result).toEqual('class')
    })
  })
  describe('Given word flowery, flowers', () => {
    it('when stem should return the stemmed word', () => {
      const originalWord = 'flowery' 
      const result = getStemWord(originalWord)
      expect(result).toEqual('flower')
    })
    it('when noun form should return the stemmed word', () => {
      const originalWord = 'flowers' 
      const result = getStemWord(originalWord)
      expect(result).toEqual('flower')
    })
  })
  describe('Given word friend', () => {
    it('when stem should return the stemmed word', () => {
      const originalWord = 'friends' 
      const result = getStemWord(originalWord)
      expect(result).toEqual('friend')
    })
    it('when noun form should return the stemmed word', () => {
      const originalWord = 'friendlier' 
      const result = getStemWord(originalWord)
      expect(result).toEqual('friend')
    })
    it('when noun form should return the stemmed word', () => {
      const originalWord = 'friendlies' 
      const result = getStemWord(originalWord)
      expect(result).toEqual('friend')
    })
    it('when noun form should return the stemmed word', () => {
      const originalWord = 'friendly' 
      const result = getStemWord(originalWord)
      expect(result).toEqual('friend')
    })
  })

  describe('Given list of words with the same stem', () => {
    it.each(
      ['class', 'classification', 'classify', 'classes']
    )('when given %p should return count correctly', (word) => {
      const inputText = 'class classification classify' 
      const result = countWords(inputText, word)
      expect(result).toEqual(3)
    })
  })

  describe('Given input text with full stops', () => {
    it('should remove the full stops and lower case the word', () => {
      const originalWord = 'classify classification class. Classify' 
      const result = sanitizeInputText(originalWord) 
      expect(result).toEqual('classify classification class classify')
    })
  })

  describe('Given full input text', () => {
    const inputText = 'Friends are friendlier friendlies that are friendly and classify the friendly classification class. Flowery flowers flow through following the flower flows.' 
    it.each(
      [
        ['following', 1], 
        ['flow', 2],
        ['classification', 3], 
        ['class', 3],
        ['flower', 3], 
        ['friend', 5],
        ['friendly', 5], 
        ['classes', 3]
      ]
    )('when given %p should return %p', (word, count) => {
      const result = countWords(inputText, word)
      expect(result).toEqual(count)
    })
    it('should summarize the frequency of stem words correctly', () => {
      const arrayOfWords = sanitizeInputText(inputText).split(' ')
      const result = arrayOfWords.map(word =>({ word, count: countWords(sanitizeInputText(inputText), word) }))
      expect(result).toEqual([
        { word: 'friends', count: 5 },
        { word: 'are', count: 2 },
        { word: 'friendlier', count: 5 },
        { word: 'friendlies', count: 5 },
        { word: 'that', count: 1 },
        { word: 'are', count: 2 },
        { word: 'friendly', count: 5 },
        { word: 'and', count: 1 },
        { word: 'classify', count: 3 },
        { word: 'the', count: 2 },
        { word: 'friendly', count: 5 },
        { word: 'classification', count: 3 },
        { word: 'class', count: 3 },
        { word: 'flowery', count: 3 },
        { word: 'flowers', count: 3 },
        { word: 'flow', count: 2 },
        { word: 'through', count: 1 },
        { word: 'following', count: 1 },
        { word: 'the', count: 2 },
        { word: 'flower', count: 3 },
        { word: 'flows', count: 2 }
      ])
    })
  })
})
