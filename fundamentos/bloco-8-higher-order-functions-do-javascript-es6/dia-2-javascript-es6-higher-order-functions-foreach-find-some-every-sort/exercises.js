const assert = require('assert');

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
// // exercise 1
// function authorBornIn1947() {
//   // escreva aqui o seu código
//   const answer = books.find((year) => year.author.birthYear === 1947);
//   return answer.author.name;
// }

// assert.strictEqual(authorBornIn1947(), 'Stephen King');

// exercise 2
// function smallerName() {
//   let nameBook;
//   // escreva aqui o seu código
//   nameBook = books[0].name;
//   books.forEach((nome) => {
//     if (nome.name.length < nameBook.length){
//       nameBook = nome.name;
//     }
//   })
//   // Variável nameBook que receberá o valor do menor nome;
//   return nameBook;
// }

// assert.strictEqual(smallerName(), 'Duna');

// exercise 3
// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// function getNamedBook() {
//   // escreva seu código aqui
//   const answer = books.find((book) => book.name.length === 26);
//   return answer;
// }

// assert.deepStrictEqual(getNamedBook(), expectedResult);

// // exercise 4
// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: { name: 'Stephen King', birthYear: 1947 },
//     releaseYear: 1986,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
// ];

// function booksOrderedByReleaseYearDesc() {
//   // escreva aqui seu código
//   const answer = books.sort((a,b) => b.releaseYear - a.releaseYear);
//   return answer;
// };

// assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

// exercise 5

// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   // escreva seu código aqui
//   const answer = books.every((book) => book.author.birthYear < 2001 && book.author.birthYear > 1900);
//   return answer;
// }

// assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

// exercise 6
// const expectedResult = true;

// function someBookWasReleaseOnThe80s() {
//   // escreva seu código aqui
//   return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
// }

// assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

// exercise 7
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  return books.every((livro) => {
    !books.some((book) => book.author.birthYear === livro.author.birthYear) // o some retorna true, se tiver algum autou q nasceu no mesmo ano, então o ! de true é false
  })
};

assert.strictEqual(authorUnique(), expectedResult);