const axios = require('axios').default;
const user = require('../models/users');

const petShop = async (req,res) =>
  res.send("PETOPSHOP")

const postUsers = async (req, res) =>{
  const { nome, idade, email, cep, numero, complemento } = req.body;
    const url = `https://viacep.com.br/ws/${cep}/json/`
    await user.createNewUser(nome, idade, email);
    const adress = await axios.get(url)
    .then((r) => r.data)
    const {logradouro, bairro, localidade, uf} = adress;
      const endereco = {
        cep,
        logradouro,
        complemento,
        numero,
        bairro,
        localidade,
        uf
      }
      const arrAllUsers = await user.getAllUsers()
      await user.createNewAdress(
        arrAllUsers.length + 1,
        cep,
        logradouro,
        complemento,
        numero,
        bairro,
        localidade,
        uf )
      res.status(200).json({nome, idade, email, endereco });
}

const getUsers = async (req, res) => {
  const resultado = await user.getAllUsers()
  res.send(resultado)
}

const getUserId = async (req, res) => {
  const { id } = req.params;
  const findUser = await user.findById(id);
  if (!findUser) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(findUser);
}

const getSearchId = async (req, res) => {
  const { id } = req.params;
  const findUser = await user.findById(id);
  if (!findUser) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(findUser.map((i) => ({[i.id]:i.endereco})));
}

const putUserId = async (req, res) => {
  const { id } = req.params;
  const {email,cep,numero,complemento} = req.body;
  const url = `https://viacep.com.br/ws/${cep}/json/`
  const getAdress = await axios.get(url)
  .then((r) => r.data)
  const {logradouro, bairro, localidade, uf} = getAdress;
  if(email && email !== '' && !cep) {
    await user.updateValueEmail(email, id);
    res.status(200).json({message: 'Success'});
  }
  if(cep && cep !== '' && !email) {
    await user.updateValueAdress({id, cep, numero,complemento, logradouro, bairro, localidade, uf});
    res.status(200).json({message: 'Success'});
  }
  if(email && email !== '' && cep && cep !== '') {
    await user.updateValueEmail(email, id);
    await user.updateValueAdress({id, cep, numero,complemento, logradouro, bairro, localidade, uf});
    res.status(200).json({message: 'Success'});
  }
  }

  module.exports = {
    petShop,
    postUsers,
    getUsers,
    getUserId,
    getSearchId,
    putUserId
  }