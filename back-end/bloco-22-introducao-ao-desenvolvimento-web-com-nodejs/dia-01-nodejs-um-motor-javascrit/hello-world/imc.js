const readline = require('readline-sync');
const peso = readline.questionInt('Qual seu peso em kg? ');
const altura = readline.questionInt('Qual sua altura em cm? ');


const convertToMeter = (n) => n / 100;
const IMC = (w,h) => {
  return (w / Math.pow(convertToMeter(h), 2)).toFixed(2)
} 

const responseIMC = (n) => {
  if (n < 18.50) {
    return `seu imc é ${n} Abaixo do peso (magreza)`
  }
  if (n >= 18,5 && n <= 24.90) {
    return `seu imc é ${n} Peso normal`
  }
  if (n >= 25 && n <= 29) {
    return `seu imc é ${n} Acima do peso (sobrepeso)`
  }
  if (n >= 30 && n <= 34.90) {
    return `seu imc é ${n} Obesidade grau I`
  }
  if (n >= 35 && n <= 39.90) {
    return `seu imc é ${n} Obesidade grau II`
  }
  if (n >= 40) {
    return `seu imc é ${n} CARALHO VC É FÁCIL`
  }
}
  console.log(responseIMC(IMC(peso, altura)));

