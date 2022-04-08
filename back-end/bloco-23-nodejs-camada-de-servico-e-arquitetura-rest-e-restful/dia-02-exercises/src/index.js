const express = require('express');
const app = express();
const userServices = require('./services/userServices');
const PORT = 3000;

app.use(express.json());

app.get("/",userServices.petShop);
app.post("/users", userServices.postUsers)
app.get('/users', userServices.getUsers)
app.get('/users/:id', userServices.getUserId);
app.get('/search/:id', userServices.getSearchId);
app.put('/users/:id',userServices.putUserId);

app.listen(PORT, () =>
{
console.log(`Servidor Iniciado na porta ${PORT}`)
})