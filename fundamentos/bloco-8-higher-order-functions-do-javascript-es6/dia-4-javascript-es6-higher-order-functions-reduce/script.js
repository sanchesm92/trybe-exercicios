// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// // const sumPar = numbers.filter((number) => number % 2 === 0).reduce((acc, number) => acc + number);
// const sumPar = numbers.reduce(((acc,number) => (number % 2 ===0) ? acc + number : acc), 0);

// console.log(sumPar);

// const estudantes = [
//   {
//     nome: 'Jorge',
//     sobrenome: 'Silva',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 67 },
//       { name: 'Português', nota: 79 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 65 },
//     ],
//   },
//   {
//     nome: 'Mario',
//     sobrenome: 'Ferreira',
//     idade: 15,
//     turno: 'Tarde',
//     materias: [
//       { name: 'Matemática', nota: 59 },
//       { name: 'Português', nota: 80 },
//       { name: 'Química', nota: 78 },
//       { name: 'Biologia', nota: 92 },
//     ],
//   },
//   {
//     nome: 'Jorge',
//     sobrenome: 'Santos',
//     idade: 15,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 76 },
//       { name: 'Português', nota: 90 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 80 },
//     ],
//   },
//   {
//     nome: 'Maria',
//     sobrenome: 'Silveira',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 91 },
//       { name: 'Português', nota: 85 },
//       { name: 'Química', nota: 92 },
//       { name: 'Biologia', nota: 90 },
//     ],
//   },
//   {
//     nome: 'Natalia',
//     sobrenome: 'Castro',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 70 },
//       { name: 'Português', nota: 70 },
//       { name: 'Química', nota: 60 },
//       { name: 'Biologia', nota: 50 },
//     ],
//   },
//   {
//     nome: 'Wilson',
//     sobrenome: 'Martins',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 80 },
//       { name: 'Português', nota: 82 },
//       { name: 'Química', nota: 79 },
//       { name: 'Biologia', nota: 75 },
//     ],
//   },
// ];

// const melhorMateria = (acc, materia) => (acc.nota > materia.nota) ? acc : materia;
// const result = estudantes.map((estudante) => ({
//   name: estudante.nome,
//   materia: estudante.materias.reduce(melhorMateria).name,
// }));

// exercicio 1
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, array) => acc.concat(array, []));
}
// console.log(flatten())

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 2
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  // o acc dentro do `template literals` é o resultado anterior
  const callback = (acc,book, index, array) => (index === array.length - 1) ? `${acc} ${book.author.name}.` : `${acc} ${book.author.name},`;
  const names = books.reduce(callback, '');
  return names;
}

// exercicio 3 
// const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  const arrayIdades = books.map((book) => (book.releaseYear - book.author.birthYear));
  const callback = (acc, curr) => (acc + curr);
  return arrayIdades.reduce(callback, 0) / arrayIdades.length;
}
function averageAge2() {
  const sumOfAges = books.reduce((acc, book) => (
    acc + (book.releaseYear - book.author.birthYear)
  ), 0);
  return sumOfAges / books.length;
}


// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

// 4

function longestNamedBook() {
  // escreva seu código aqui
  const nameBook = books.reduce((acc, book) => (acc.name.length > book.name.length) ? acc : book);
  return nameBook.name;
}
// console.log(longestNamedBook())

// 5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const named = names.join();
  const splited = named.split('');
  return splited.reduce(((acc, letra) => (letra.toLowerCase() === 'a') ? acc += 1 : acc), 0);
}
// console.log(containsA());

// 6

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const media = grades.map((notas) => notas.reduce(((acc, nota) => acc + nota), 0) / notas.length);
  const answer = students.map((student,indice) => ({name: `${student}`, average: `${media[indice]}`}));
  return answer
}
console.log(studentAverage());

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

