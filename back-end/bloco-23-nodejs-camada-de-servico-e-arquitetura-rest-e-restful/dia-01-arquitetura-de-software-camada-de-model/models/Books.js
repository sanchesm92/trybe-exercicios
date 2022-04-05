    const connection = require('./connections');

const getAll = async () => {
   const [books] = await connection.execute(
       'SELECT id, title, author_id FROM model_example.books;',
   );
   return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getBybookId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [authorId]);
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const findById = async (id) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE id = ?'
  const [ books ] = await connection.execute(query, [id]);
  if (books.length === 0) return null;
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0]
};

const isValid = (id, title, author_id) => {
  if (!id || typeof id !== 'number') return false;
  if (!author_id || typeof author_id !== 'number') return false;
  if (title && typeof title !== 'string') return false;

  return true;
};

const create = async (id, title, author_id) => connection.execute(
  'INSERT INTO model_example.books (id, title, author_id) VALUES (?,?,?)',
  [id, title, author_id],
);


module.exports = {
   getAll,
   getBybookId,
   findById,
   isValid,
   create
};