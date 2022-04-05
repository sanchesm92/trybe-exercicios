// // services/Authors.js

// const Author = require('../models/Authors');

// const getNewAuthor = (authorData) => {
//   const { id, firstName, middleName, lastName } = authorData;

//   const fullName = [firstName, middleName, lastName]
//     .filter((name) => name)
//     .join(' ');

//   return {
//     id,
//     firstName,
//     middleName,
//     lastName,
//     name: fullName,
//   };
// };

// const isValid = (firstName, middleName, lastName) => {
//   if (!firstName || typeof firstName !== 'string') return false;
//   if (!lastName || typeof lastName !== 'string') return false;
//   if (middleName && typeof middleName !== 'string') return false;

//   return true;
//   }

// const getAll = async () => {
//   const authors = await Author.getAll();

//   return authors.map(getNewAuthor);
// }

// const findById = async (id) => {
//   const author = await Author.findById(id);

//   if (!author) return null;

//   return getNewAuthor(author);
// };

// const createAuthor = async (firstName, middleName, lastName) => {
//   const validAuthor = isValid(firstName, middleName, lastName);

//   if (!validAuthor) return false;

//   const [author] = await Author.createAuthor(firstName, middleName, lastName)

//   authorId = author.insertId;

//   return getNewAuthor({
//     id: authorId,
//     firstName,
//     middleName,
//     lastName,
//   })
// };

// module.exports = {
//   getAll,
//   findById,
//   createAuthor,
// }

const Author = require('../models/Author');

const create = async (firstName, middleName, lastName) =>
  Author.create(firstName, middleName, lastName);

  const findById = async (id) => {
    // Solicitamos que o model realize a busca no banco
    const author = await Author.findById(id);
  
    // Caso nenhuma pessoa autora seja encontrada, retornamos um objeto de erro.
    if (!author) {
      return {
        error: {
          code: 'notFound',
          message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
        },
      };
    }
  
    // Caso haja uma pessoa autora com o ID informado, retornamos essa pessoa
    return author;
  };
const getAll = async () => Author.getAll();
const createAuthor = async (firstName, middleName, lastName) => {
  // Buscamos um autor com o mesmo nome completo que desejamos criar
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  // Caso essa pessoa autora já exista, retornamos um objeto de erro informando
  // que não é possível criar a pessoa autora pois ele já existe
  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }

  // Caso a pessoa autora não exista e, portanto, possa ser criado
  // chamamos o model e retornamos o resultado
  return Author.createAuthor(firstName, middleName, lastName);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
  create,
};