// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// Adicione seu código aqui
// emailListInData.forEach((param) => {
//   showEmailList(param);
// });

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () => {
//   // Adiciona seu código aqui
//   const answer = numbers.find((number) => number % 15 === 0);
//   return answer;
// };

// console.log(findDivisibleBy3And5())

// 2

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   // Adicione seu código aqui:
//   const answer = names.find((nome) => nome.length === 5);
//   return answer;
// };

// console.log(findNameWithFiveLetters());

// 3
// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic(id) {
//   // Adicione seu código aqui
//   const answer = musicas.find((elemento) => elemento.id === id);
//   return answer;
// };

// console.log(findMusic('31031685'))

// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   //Adicione seu código aqui
//   const answer = arr.some((nome) => nome === name);
//   return answer;
// }

// console.log(hasName(names, 'Ana'))

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   //Adicione seu código aqui
//   const answer = arr.every((param) => param.age >= minimumAge);
//   return answer;
// }

// console.log(verifyAges(people, 18));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
// crescente
// people.sort((a,b) => a.age - b.age);

// decrescente
people.sort((a,b) => b.age - a.age);

console.log(people);