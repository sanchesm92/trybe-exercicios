const assert = require('assert');
const { log } = require('console');

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
// 1
// const expectedResult = [
//   'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//   'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//   'Fundação - Ficção Científica - Isaac Asimov',
//   'Duna - Ficção Científica - Frank Herbert',
//   'A Coisa - Terror - Stephen King',
//   'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
// ];

// function formatedBookNames() {
//   // escreva seu código aqui
//   return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
// }

// assert.deepStrictEqual(formatedBookNames(), expectedResult);

// 2
// const expectedResult = [
//   {
//     age: 31,
//     author: 'Isaac Asimov',
//   },
//   {
//     age: 38,
//     author: 'H. P. Lovecraft',
//   },
//   {
//     age: 39,
//     author: 'Stephen King',
//   },
//   {
//     age: 43,
//     author: 'George R. R. Martin',
//   },
//   {
//     age: 45,
//     author: 'Frank Herbert',
//   },
//   {
//     age: 62,
//     author: 'J. R. R. Tolkien',
//   },
// ];

// function nameAndAge() {
//   // escreva seu código aqui
//   return books.map((book) => ( { age: (book.releaseYear - book.author.birthYear), author: book.author.name })).sort((a,b) => a.age - b.age);
// }

// assert.deepStrictEqual(nameAndAge(), expectedResult);

// 3
// const expectedResult = [
//   { 
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965
//   }
// ];

// function fantasyOrScienceFiction() {
//   // escreva seu código aqui
//   return books.filter((book) => (book.genre === 'Fantasia' || book.genre === 'Ficção Científica'));
// }

// assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);

// 4
// const expectedResult = [
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
// ];

// function oldBooksOrdered() {
//   // escreva seu código aqui
//   return books.filter((book) => book.releaseYear < 1961).sort((a,b) => a.releaseYear - b.releaseYear);
// }

// assert.deepStrictEqual(oldBooksOrdered(), expectedResult);

// 5
// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

// function fantasyOrScienceFictionAuthors() {
//   // escreva seu código aqui
//   const filtred = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
//   return filtred.map((filter) => `${filter.author.name}`).sort();
// }

// assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);

// 6
// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

// function oldBooks() {
//   // escreva seu código aqui
//   const filtred = books.filter((book) => book.releaseYear < 1961);
//   return filtred.map((filter) => `${filter.name}`);
// }

// assert.deepStrictEqual(oldBooks(), expectedResult);

// 7
const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui 
  const answer = books.find((book) => ( book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3)); // usou o find para retornar o primeiro livro que contem as condicional, nesse caso foi pego o nome do autor de cada livro e criado um array separando pelos espaços, utilizou o filter para procurar cada palavra que 'endsWith' [ termina com .] usou o . lenght para ver o tanto que tinha, se for 3 irá retornar o livro.
  return answer.name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
