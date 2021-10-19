
// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done(error); // Alteramos esta linha
//     }
//   }, 500);
// });


// const asyncSum = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 500);
// };

// test('Testando asyncSum, soma 5 mais 10', (done) => {
//   asyncSum(5, 10, (result) => {
//     try {
//       expect(result).toBe(15);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };

// test('testando uppercase, a > A', (done) => {
//   uppercase ('ya soshla s uma', (result) => {
//     try {
//       expect(result).toBe('YA SOSHLA S UMA');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   })
// })
// test('testando uppercase 2, b > B', (done) => {
//   uppercase ('FaTe/ZeRo', (result) => {
//     try {
//       expect(result).toBe('FATE/ZERO');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   })
// })
// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./script.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const errorMessage = new Error('Não temos esse pokémon para você :(');
    const callback = (error, resultado) => {
      expect(error).toEqual(errorMessage);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Lucario', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const message = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    const callback = (error, resultado) => {
      expect(resultado).toEqual(message); 
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name ==='Charmander', callback);
   });
});