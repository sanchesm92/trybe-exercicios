// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  // Adicionar lógica aqui!
  const myObj = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const getContainer = document.querySelector('#jokeContainer');
  fetch(API_URL, myObj)
    .then((response) => response.json())
    .then((data) => getContainer.innerText = data.joke )
};


window.onload = () => fetchJoke();