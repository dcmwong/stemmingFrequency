export default (word) => {
  const ssAtTheEndToken = /(ss$\b)/g
  return word.match(ssAtTheEndToken)
}
