      // Exercise 1
      // const testingScope = escopo => {
      //   if (escopo === true) {
      //     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      //     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      //     console.log(ifScope);
      //   } else {
      //     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      //     console.log(elseScope);
      //   }
      // }

      // testingScope(true);

      // const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      // // Seu código aqui.
      // const oddsAndEvensSorted = oddsAndEvens.sort((a, b) => a - b);

      // console.log(`os Numeros : [${oddsAndEvensSorted}] estão ordenados`); // será necessário alterar essa linha 😉
      // console.log(`os Numeros : [${oddsAndEvens.sort((a, b) => a - b)}] estão ordenados`);

      // parte 2 

// const fact = number => {
//   let answer = 1;

//   for (let i = 2; i <= number; i += 1){
//     answer = answer * i;
//   }
//   return answer
// }
// console.log(fact(5));

// const fact = number => number > 1 ? number *fact (number - 1) : 1;
// console.log(fact(5))
//  parte 3

// const maiorPalavra = texto => {
//   let arrayDePalavras = texto.split(' ');
//   let contador = 0;
//   let answer = '';
  
//   for (i of arrayDePalavras) {
//     if ( i.length > contador){
//       contador = i.length
//       answer = i;
//     }
//   }
//   return answer
// }
// console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"))


// exercicio 3
// const button = document.querySelector('#btn-count');
// const getCount = document.querySelector('#count');
// let clickCount = 0;
// const contador = () => getCount.innerText = clickCount += 1;

// getCount.innerText = clickCount;
// button.addEventListener('click', contador);

// exercicio 4

const subst = (string, param) => {
  const arrayString = string.split(' ');
  const arrayVazio = [];
  for (let i of arrayString) {
    if (i === 'x') {
      i = param;
    }
    arrayVazio.push(i);
  }
  return console.log(arrayVazio.join(' '));
}
subst ('Tryber x aqui!', 'Bebeto');