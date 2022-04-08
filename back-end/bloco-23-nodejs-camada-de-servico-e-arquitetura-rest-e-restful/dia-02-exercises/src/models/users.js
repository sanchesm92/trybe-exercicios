const connection = require('./connection');


async function createNewUser(nome, idade, email){
    await connection.execute(
        'INSERT INTO projeto.users (nome, idade, email) VALUES (?,?,?);',
        [nome, idade, email],
        );
}
async function createNewAdress(
  user_id,
  cep,
  logradouro,
  complemento,
  numero,
  bairro,
  localidade,
  uf
){
  await connection.execute(
      `INSERT INTO projeto.adress (
        user_id,
        bairro,
        cep,
        complemento,
        localidade,
        logradouro,
        numero,
        uf) VALUES (?,?,?,?,?,?,?,?);`,
      [
        user_id,
        bairro,
        cep,
        complemento,
        localidade,
        logradouro,
        numero,
        uf
      ],
      );
}


async function getAllUsers() {
    const [result] = await connection.execute('SELECT * FROM projeto.users JOIN projeto.adress ON projeto.users.id = projeto.adress.user_id;');
  return result.map(({
    id,
    nome,
    idade,
    email,
    user_id,
    bairro,
    cep,
    complemento,
    localidade,
    logradouro,
    numero,
    uf
    }) => ({
    id,
    nome,
    idade,
    email,
    endereco: {
      user_id,
      bairro,
      cep,
      complemento,
      localidade,
      logradouro,
      numero,
      uf
    }
  }))
}

const findById = async (id) => {
  const query = 'SELECT * FROM projeto.users JOIN projeto.adress ON projeto.users.id = projeto.adress.user_id WHERE id = ?'
  const [ userData ] = await connection.execute(query, [id]);
  if (userData.length === 0) return null;

  return userData.map(({
    id,
    nome,
    idade,
    email,
    user_id,
    bairro,
    cep,
    complemento,
    localidade,
    logradouro,
    numero,
    uf
    }) => ({
    id,
    nome,
    idade,
    email,
    endereco: {
      user_id,
      bairro,
      cep,
      complemento,
      localidade,
      logradouro,
      numero,
      uf
    }
  }))
};

const updateValueEmail = async (valor, id) => {
    const query = 'UPDATE projeto.users SET email = ? WHERE projeto.users.id = ?;';
    await connection.execute(query, [valor, id]);
}

const updateValueAdress = async (obj) => {
  const {  id,
    bairro,
    cep,
    complemento,
    localidade,
    logradouro,
    numero,
    uf} = obj
    const query = `UPDATE projeto.adress SET
      bairro = ?,
      cep = ?,
      complemento = ?,
      localidade = ?,
      logradouro = ?,
      numero = ?,
      uf = ?
      WHERE projeto.adress.user_id = ?;`;
    await connection.execute(query, [
      bairro,
      cep,
      complemento,
      localidade,
      logradouro,
      numero,
      uf,
      id
    ]);
}

module.exports={
  createNewUser,
  getAllUsers,
  findById,
  updateValueEmail,
  updateValueAdress,
  createNewAdress
};