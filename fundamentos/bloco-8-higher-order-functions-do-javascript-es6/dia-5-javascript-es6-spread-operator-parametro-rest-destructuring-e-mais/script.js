// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['abacate', 'abacaxi', 'banana', 'maça', 'morango', 'kiwi'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['siriguela', 'caja', 'caju'];

// const fruitSalad = (fruit, additional) => {
//   // Esreva sua função aqui
//   return [...fruit, ...additional]
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
// const array = ['olá'];

// const [name] = array;
// console.log(name);

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
// const array = ['gato', 'água', 'arroz'];

// const [first, second, third] = array;

// console.log(first, second, third);

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
// [,,, ...numerosPares] = numerosPares // pulando os 3 primeiros elementos do array com os ,,,
// console.log(numerosPares);
// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'brasilian' } = person;
// console.log(nationality);
// const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));
// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude
// });

// console.log(getPosition(-19.8157, -43.9542));

// const multiply = (number, value = 1) => {
//   // Escreva aqui a sua função
//   return number * value;
// };

// console.log(multiply(8));

// exercise 1
// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
//   console.log(rectangle[0] * rectangle[1]);
// });

// exercise 2
// escreva sum abaixo

// const sum = (...numbers) => numbers.reduce(((acc,number) => acc + number), 0);

// console.log(sum(1,2,3,4));

// exercise 3
// const alex = {
//   name: 'Alex',
//   age: 26,
//   likes: ['fly fishing'],
//   nationality: 'Australian',
// };

// const gunnar = {
//   name: 'Gunnar',
//   age: 30,
//   likes: ['hiking', 'scuba diving', 'taking pictures'],
//   nationality: 'Icelandic',
// };

// // complete a assinatura da função abaixo
// const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// console.log(personLikes(alex)) // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)) // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// exercise 4
// const people = [
//   {
//     name: 'Nicole',
//     bornIn: 1992,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Harry',
//     bornIn: 2008,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Toby',
//     bornIn: 1901,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Frida',
//     bornIn: 1960,
//     nationality: 'Dannish',
//   },
//   {
//     name: 'Fernando',
//     bornIn: 2001,
//     nationality: 'Brazilian',
//   },
// ];

// // escreva filterPeople abaixo
// const filterPeople = (array )=> array.filter(({bornIn, nationality}) => (bornIn < 2000 && bornIn > 1900 && nationality === 'Australian'));

// console.log(filterPeople(people));

// exercise 5 inverter o valor 1 e o 3
// const myList = [1, 2, 3];

// // escreva swap abaixo
// const swap = ([first, second, third]) => [third, second, first];
// console.log(swap(myList));

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// // escreva toObject abaixo
// const toObject = ([name, brand, year]) => {
//   return {
//     name,
//     brand,
//     year,
//   }
// };
// console.log(toObject(palio));
// console.log(toObject(shelbyCobra));
// console.log(toObject(chiron));

// exercise 7
// const ships = [
//   {
//     name: 'Titanic',
//     length: 269.1,
//     measurementUnit: 'meters',
//   },
//   {
//     name: 'Queen Mary 2',
//     length: 1132,
//     measurementUnit: 'feet',
//   },
//   {
//     name: 'Yamato',
//     length: 256,
//     measurementUnit: 'meters',
//   },
// ];

// // escreva shipLength abaixo
// const shipLength = (array) => {
// const { name, length, measurementUnit } = array
// return `${name} is ${length} ${measurementUnit} long`
// };

// console.log(shipLength(ships[0])) // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])) // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])) // 'Yamato is 256 meters long'

// exercise 8
// escreva greet abaixo
// const greet = (name, greet = 'Hi') => `${greet} ${name}`

// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'
