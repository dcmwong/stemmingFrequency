import { getStemWord, countWords } from './index'

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
      ['class', 'classification', 'classify']
    )('when given %p should return count correctly', (word) => {
      const inputText = 'class classification classify' 
      const result = countWords(inputText, word)
      expect(result).toEqual(3)
    })
  })
})
