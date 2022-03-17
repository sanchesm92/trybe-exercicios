/* index.js */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

// ...

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

// ...

app.get('/recipes', function (req, res) {
  res.json(recipes.sort((a, b) => a.name.localeCompare(b.name)));
});


app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
})

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
  
  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });
  
  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };
  
  res.status(204).end();
  });

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});


app.get('/drinks', function (req, res) {
  res.json(drinks.sort((a, b) => a.name.localeCompare(b.name)));
});

app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.get('/drinks/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = drinks.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice) && r.price > parseInt(minPrice));
  res.status(200).json(filteredRecipes);
})

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const recipe = drinks.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinksIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinksIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  drinks[drinksIndex] = { ...drinks[drinksIndex], name, price };

  res.status(204).end();
});


app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinksIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinksIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  drinks.splice(drinksIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});