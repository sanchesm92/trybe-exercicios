// exercicio 1
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu.length;

// console.log(menuServices);
// Exercicio 2
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio') ;

// console.log(indexOfPortfolio);
// Exercicio 3
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push('Contato')

// console.log(menu);
// Exercicio 
// let resultado = null;

// function tabuada(x){
  
//   for (let index = 1; index <= 9; index +=1){
//       resultado = x * index;
//       console.log(resultado);
// }
// }
// tabuada(7)
// Exercicio

// let lista = ['Ana', 'Maria', 'Lucas', 'Rafael']

// for (let indice = 0; indice <= lista.length -1; indice += 1){
//   console.log("Bem Vindo(a) " + lista[indice] + "!! Parabéns pela conquista")
// }
// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1){
//   console.log(groceryList[index])
// }
// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let lista of names){
//   console.log(lista)
// }

// exercicios 1 a 7
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

// 1
// for (let i = 0; i < numbers.length; i +=1){
//   console.log(numbers[i])
// }

// 2
// let resultado = 0;
// for (let i = 0; i < numbers.length; i +=1){
//   resultado = resultado + numbers[i];
// }
// console.log(resultado)

// 3 e 4
// let resultado = 0;
// let resposta = 0;

// for (let i = 0; i < numbers.length; i +=1){
//   resultado = resultado + numbers[i];
// }
// resposta = resultado/numbers.length;
// if (resposta > 20) {
//   console.log("Valor maior que 20")
// } else {
//   console.log("Valor menor ou igual a 20");
// }

// 5
// let valor = 0;
// for (let i = 0; i < numbers.length; i += 1){
//   if (valor < numbers[i]){
// valor = numbers[i]
//   }
// }
// console.log(valor)

// 6
// let valoresImpares = [];

// for (let indice = 0;indice < numbers.length; indice += 1){
//   if (numbers[indice] % 2 !== 0){
//     valoresImpares.push(numbers[indice])
//   }
// }

// if ( valoresImpares != 0){
//   console.log(valoresImpares)
// } else {
//   console.log("Nenhum valor ímpar encontrado");
// }

// 7

// let menorValor = numbers[0];

// for (let i = 0; i < numbers.length; i += 1){
//   if (menorValor > numbers[i]){
//     menorValor = numbers[i]
//   }
// }
// console.log(menorValor);

// 8 e 9
// let valores = [];

// for (let i = 0; i <= 25; i += 1){
//   valores.push(i)
// }

// for (let indice = 0; indice < valores.length; indice += 1){
//   console.log(valores[indice] / 2);
// }








// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

// forma alternativa
// for (let i = 0; i < numbers.length; i += 1){
//   for (let i2 = 0; i2 < numbers.length; i2 += 1){
//     if ( numbers[i] < numbers[i2]){
//       let position = numbers[i]
//       numbers[i] = numbers [i2]
//       numbers[i2] = position
//     }
//   }
// }
// console.log(numbers)

// Forma correta 
// for (let i = 1; i < numbers.length; i += 1){
//   for (let i2 = 0; i2 < i; i2 += 1){
//     if ( numbers[i] < numbers[i2]){
//       let position = numbers[i]
//       numbers[i] = numbers [i2]
//       numbers[i2] = position
//     }
//   }
// }
// console.log(numbers)


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let array = [] ;

for (let i = 0; i < numbers.length; i += 1){
  if (numbers[i+1] !== undefined){
    array.push(numbers[i]*numbers[i+1])
  } else {
    array.push(numbers[i]*2)
  }
}
console.log(array);