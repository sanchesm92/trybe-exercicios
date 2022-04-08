const express = require('express');
const bodyParser = require('body-parser');
const exerciseRouter = require('./exerciseRouter');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/post', exerciseRouter);

app.all('*', function (req, res) {
 return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });