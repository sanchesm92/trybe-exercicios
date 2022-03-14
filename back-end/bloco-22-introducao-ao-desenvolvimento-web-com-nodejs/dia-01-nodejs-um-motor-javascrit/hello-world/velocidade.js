const readline = require('readline-sync');
const distancia = readline.questionInt('Qual a distancia percorrida? (em Metros) ');
const tempo = readline.questionInt('Qual o tempo feito? (em segundos) ');

const velMedia = (d, t) => {
  return d/t
}

  console.log(`A velocidade média é de ${velMedia(distancia,tempo)}`);
