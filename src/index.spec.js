const stemWord = require('./index.js')

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
    it('should return original word and singular word when sentence contains stem', () => {
      const originalWord = 'flows flow flower' 
      const result = stemWord(originalWord)
      expect(result).toEqual('flow flow flower')
    })
  })
})
