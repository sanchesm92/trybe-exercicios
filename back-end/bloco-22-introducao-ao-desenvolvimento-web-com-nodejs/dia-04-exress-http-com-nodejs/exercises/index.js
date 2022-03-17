const express = require('express');
const bodyParser = require('body-parser');
const getSimpsons = require('./services')
const authMiddleware = require('./authMiddleware');
const APP_PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(authMiddleware);

app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.get('/ping', (req, res) => {
  res.status(200).send('Pong')
})

app.post('/hello', function (req, res) {
  const { name } = req.body;
  res.status(201).send({ message: `Hello, ${name}`});
});

app.post('/greetings', function (req, res) {
  const { name, age } = req.body;
  if(Number(age) > 17) res.status(201).send({ message: `Hello, ${name}`});
  if(Number(age) <= 17) res.status(401).send({ message: 'Unauthorized'});
});

app.put('/users/:name/:type', function (req, res) {
  const { name, type } = req.params;
  res.status(200).send({ message: `Seu nome é ${name} e 
  você é ${type}`});
});

app.get('/simpsons', async (req, res) => {
  const simpsons = await getSimpsons.getSimpsons()
  res.status(200).send(simpsons)
})

app.get('/simpsons/:id', async (req, res) => {
  const {id} = req.params;
  const simpsons = await getSimpsons.getSimpsons()
  const findSimpsons = simpsons.find((i) => i.id === id)
  if(!findSimpsons)  res.status(404).send({message: 'simpson not found'})
  res.status(200).send(findSimpsons)
})

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons.getSimpsons()
  if (simpsons.map(({ id }) => id).includes(id)) {
    return res.status(409).json({ message: 'id already exists' });
  }
  simpsons.push({id, name})
  await getSimpsons.setSimpsons(simpsons);
  res.status(204).end();
});

app.listen(APP_PORT, () => console.log(`rodando na porta ${APP_PORT}`))