const readline = require('readline-sync');
const number = readline.questionInt('Qual numero deseja apostar? ');

const verifyResult = (n) => {
  const randomNumber = Math.round(( Math.random() * 10) + 1)
  return n === randomNumber ? `Resultado: ${randomNumber} Parabéns vc ganhou` : `Resultado : ${randomNumber}  Você errou, tente de novo`
}

 console.log(`Sua aposta foi no numero ${number}, ${verifyResult(number)}`);
