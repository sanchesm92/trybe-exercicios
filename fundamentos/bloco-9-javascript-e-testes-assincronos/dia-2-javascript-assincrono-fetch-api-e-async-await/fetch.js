// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// }

// fetchJoke();

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())// pega a versão JSON
    .then((data) => console.log(data.value))// da versão JSON que foi pega anteriormente irá acessar os valores e replicar no console
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));// caso de algum erro de requisição irá aparecer essa mensagem [ para forçar o erro basta retirar o https da url]
    return result;
}
// A função fetchJoke chama o fetch que é executado e após sua execução, caso a requisição seja bem sucedida, retorna para o parâmetro da função do primeiro .then() uma resposta e na sua execução iremos pegar a versão JSON dessa resposta por meio da função .json() . Note que a função .json() também é assíncrona, por isso temos o segundo .then() que, por sua vez, vai pegar o JSON vindo do primeiro .then() e dentro dele acessar o elogio que esta armazenado no campo value para mostrar no console.
fetchJoke();

// exemplo com try catch

// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data.value);
//   } catch(error) {
//     console.log(`Algo deu errado :( \n${error}`);
//   }
// }

// fetchJoke();

// // Chuck Norris can write multi-threaded applications with a single thread.