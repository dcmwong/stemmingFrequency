import { stemWord, countWords } from './index'

describe('Stemmer', () => {
  describe('Given a word that cannot be stemmed', () => {
    it('should return the original word', () => {
      const originalWord = 'following' 
      const result = stemWord(originalWord)
      expect(result).toEqual('following')
    })
  })
  describe('Given a pluralised word', () => {
    it('should return the stemmed word', () => {
      const originalWord = 'flows' 
      const result = stemWord(originalWord)
      expect(result).toEqual('flow')
    })
    it('should return original word and singular word', () => {
      const originalWord = 'flows flow' 
      const result = stemWord(originalWord)
      expect(result).toEqual('flow flow')
    })
    it('when setence contains stem should return original word and singular word', () => {
      const originalWord = 'flows flow flower' 
      const result = stemWord(originalWord)
      expect(result).toEqual('flow flow flower')
    })
  })
  describe('Given a group word', () => {
    it('when stem should return the stemmed word', () => {
      const originalWord = 'class' 
      const result = stemWord(originalWord)
      expect(result).toEqual('class')
    })
    it('when noun form should return the stemmed word', () => {
      const originalWord = 'classification' 
      const result = stemWord(originalWord)
      expect(result).toEqual('class')
    })
    it('when verb form should return the stemmed word', () => {
      const originalWord = 'classify' 
      const result = stemWord(originalWord)
      expect(result).toEqual('class')
    })
  })

  describe('Given list of words with the same stem', () => {
    it.each(
      ['class', 'classification', 'classify']
    )('when given %p should return count correctly', (word) => {
      const originalWords = 'class classification classify' 
      const result = countWords(originalWords.split(' ').map(stemWord), word)
      expect(result).toEqual(3)
    })
  })
})
