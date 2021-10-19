// const getSuperHero = require('./getData');

const { expect } = require("@jest/globals");
const { describe } = require("yargs");

// test('Verifica se o nome do herói é Wonder Woman', async () => {
//   const hero = await getSuperHero();
//   expect(hero).toBe('Wonder Woman');
// });

// test('Testa se o retorno da requisição com url alterada, retorna o erro, com async/await', async () => {
//   const error = await getSuperHero();
//   expect(error).toMatch('erro');
// });
// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

// describe('Agrupa o primeiro bloco de testes', () => {
//   beforeEach(() => {
//     cities = ['Pindamonhangaba'];
//   });
  
//   afterEach(() => {
//     cities = [];
//   });
  
//   test('Testa a função addCity dentro do primeiro bloco de testes', () => {
//     expect.assertions(3);
//     addCity('Piraporinha');
//     expect(cities).toHaveLength(2);
//     expect(cities).toContain('Pindamonhangaba');
//     expect(cities).toContain('Piraporinha');
//   });
  
//   test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
//     expect.assertions(2);
//     removeCity('Pindamonhangaba');
//     expect(cities).not.toContain('Pindamonhangaba');
//     expect(cities).toHaveLength(0);
//   });
// });

// describe('Agrupa o segundo bloco de testes', () => {

//   beforeEach(() => {
//     cities = ['Tangamandapio'];
//   });
  
//   afterEach(() => {
//     cities = [];
//   });
  
//   test('Testa a função addCity dentro do segundo bloco de testes', () => {
//     expect.assertions(3);
//     expect(cities).toHaveLength(1);
//     expect(cities).not.toContain('Pindamonhangaba');
//     expect(cities).toContain('Tangamandapio');
//   });
  
//   test('Testa a função removeCity dentro do segundo bloco de testes', () => {
//     expect.assertions(2);
//     removeCity('Tangamandapio');
//     expect(cities).not.toContain('Pindamonhangaba');
//     expect(cities).toHaveLength(0);
//   });
// });

// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui
const url = 'https://api.github.com/orgs/tryber/repos'

  test('verificar se contem os projetos todo list e meme generator', async () => {
    const arrProjects = await getRepos(url);
    expect.assertions(2);
    expect(arrProjects).toContain('sd-01-week4-5-project-todo-list');
    expect(arrProjects).toContain('sd-01-week4-5-project-meme-generator')
  });
