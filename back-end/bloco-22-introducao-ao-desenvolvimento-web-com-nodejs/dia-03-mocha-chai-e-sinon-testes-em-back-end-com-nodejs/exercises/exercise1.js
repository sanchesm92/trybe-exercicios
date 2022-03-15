const verifyNumber = (n) => {
  if(typeof n !== 'number') {
    return 'o valor deve ser um número'
  }
  if(n === 0) {
    return 'neutro'
  }
  if(n > 0) {
    return 'positivo'
  }
  return 'negativo'
}
module.exports = verifyNumber