const connection = require('./connection');

const findAll = () => {
  // Mais uma vez, chamamos connection.execute para executar nossa query.
  return connection.execute('SELECT * from users;')
  // Passamos cada resultado pela função de formatação
  .then(([results]) => results.map(formatUser));
}

const formatUsers = ({id, first_name: firstName, last_name: lastName, email}) => {
  return {
    id,
    firstName,
    lastName,
    email
}
}

const isValid = ( firstName, lastName, email, password) => {
if (!firstName || typeof firstName !== 'string') return false;
if (!lastName || typeof lastName !== 'string') return false;
if (!email || typeof email !== 'string') return false;
if (!password || typeof password !== 'string' || String(password).length < 6) return false;
return true;
};

const create = async (firstName, lastName, email, password) => connection.execute(
'INSERT INTO model_example.authors (firstName, lastName, email, password) VALUES (?,?,?,?)',
[firstName, lastName, email, password],
).then(([r]) => { id: r.insertId, firstName, lastName, email });

module.exports = {
  findAll,
  formatUsers,
  isValid,
  create
};
