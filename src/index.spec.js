const stemWord = require('./index.js').default

describe('Stemmer', () => {
  describe('Given a word that cannot be stemmed', () => {
    it('should return the original word', () => {
      const originalWord = 'following' 
      const result = stemWord(originalWord)
      expect(result).toEqual('following')
    })
  })
})
