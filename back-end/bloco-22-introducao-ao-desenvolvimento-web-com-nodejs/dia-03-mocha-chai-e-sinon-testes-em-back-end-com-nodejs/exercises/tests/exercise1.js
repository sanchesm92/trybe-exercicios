const verifyNumber = require('../exercise1.js')
const { expect } = require('chai');

describe('exercise 1', () => {
  describe('Positivo', () => {
  it('verifica se a resposta é uma string', () => {
    const answer = verifyNumber(4)
    expect(answer).to.be.a('string');
  })
  it('verificar se o numero é positivo', () => {
    const answer = verifyNumber(4)
    expect(answer).to.be.equals('positivo');
  })
  })
  describe('Negativo', () => {
  it('verifica se a resposta é uma string', () => {
    const answer = verifyNumber(-4)
    expect(answer).to.be.a('string');
  })
  it('verificar se o numero é negativo', () => {
    const answer = verifyNumber(-4)
    expect(answer).to.be.equals('negativo');
  })
})
describe('Neutro', () => {
  it('verifica se a resposta é uma string', () => {
    const answer = verifyNumber(0)
    expect(answer).to.be.a('string');
  })
  it('verificar se o numero é neutro', () => {
    const answer = verifyNumber(0)
    expect(answer).to.be.equals('neutro');
  })
})
describe('typeof', () => {
  it('verifica se a resposta é uma string', () => {
    const answer = verifyNumber('a')
    expect(answer).to.be.a('string');
  })
  it('verificar se o parametro é do tipo number', () => {
    const answer = verifyNumber('a')
    expect(answer).to.be.equals('o valor deve ser um número');
  })
})
})