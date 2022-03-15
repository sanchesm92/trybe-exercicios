const fs = require('fs');
const writeSppecificFile = require('../exercise2.js')
const { expect } = require('chai');
const sinon = require('sinon');

describe('escrever um arquivo', () => {
  describe('success', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync').returns('breaking stuff');
      });
    after(() => {
      fs.writeFileSync.restore();
      });
    it('verifica se a resposta é uma string', () => {
      const answer = writeSppecificFile('meu-arquivo.txt', 'breaking stuff')
      expect(answer).to.be.a('string');
    })
    it('verificar se o parametro é do tipo number', () => {
      const answer = writeSppecificFile('meu-arquivo.txt', 'breaking stuff')
      expect(answer).to.be.equals('ok');
    })
  })
  describe('fail', () => {
    before(() => {
      sinon
      .stub(fs, 'readFileSync')
      .throws(new Error('Arquivo não encontrado'));
      });
      
      after(() => {
      fs.readFileSync.restore();
      });
      it('é igual a "null"', () => {
      const resposta = writeSppecificFile('arquivo_que_nao_existe.txt');
      expect(resposta).to.be.equal(null);
    })
  })
})