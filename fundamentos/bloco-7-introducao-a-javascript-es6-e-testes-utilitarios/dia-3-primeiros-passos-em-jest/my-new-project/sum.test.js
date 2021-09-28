// const sum = require('./sum')
// // test('sums two values', () => {
// //   expect(sum(2, 3)).toEqual(5);
// // });

// describe('Requisito 01', () => {
//   it ('Retornar o valor da soma', () => {
//     expect(9).toEqual(sum(4,5))
//     expect(0).toBe(0,0);
//   });
//   it ('deve disparar um erro caso receba uma string', () => {
//     expect(() => sum(4,'5')).toThrowError();
//     expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
//   })
// })

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// // implemente seus testes aqui
// describe('Retornar array', () => {
//   it ('retorne o array sem o numero 3', () => {
//     expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
//   })
//   it ('Verifique se o array retornado não é [1,2,3,4]', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
//   });
//   it ('verifique se retorna o array sem o 5', () => {
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
//   })
// });

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// // implemente seus testes aqui
// describe('verificar fizzbuzz', () => {
//   it ('Verificar numero divisivel por 3 e 5', () => {
//     expect(myFizzBuzz(15)).toBe('fizzbuzz');
//   });
//   it ('Verificar numero divisivel por 3', () => {
//     expect(myFizzBuzz(6)).toBe('fizz');
//   });
//   it ('verificar numero divisivel por 5', () => {
//     expect(myFizzBuzz(10)).toBe('buzz');
//   });
//   it ('verificar numero nao divisivel por 3 e 5', () => {
//     expect(myFizzBuzz(1)).toBe(1);
//   });
//   it ('verifica entrada nao numero', () => {
//     expect(myFizzBuzz('alou')).toBe(false);
//   });
// });

// const encode = (string) => {
//   let arrayString = [];
//   for (let i in string) {
//     if (string[i] === 'a') {
//       arrayString.push(1);
//     } else if (string[i] === 'e') {
//       arrayString.push(2);
//     } else if (string[i] === 'i') {
//       arrayString.push(3);
//     } else if (string[i] === 'o') {
//       arrayString.push(4);
//     } else if (string[i] === 'u') {
//       arrayString.push(5);
//     } else {
//       arrayString.push(string[i]);
//     }
//   }
//   let answer = arrayString.join('');
//   return answer;
// }

// const decode = (string2) => {
//   let arrayString2 = [];
//   for (let i in string2) {
//     if (string2[i] === '1') {
//       arrayString2.push('a');
//     } else if (string2[i] === '2') {
//       arrayString2.push('e');
//     } else if (string2[i] === '3') {
//       arrayString2.push('i');
//     } else if (string2[i] === '4') {
//       arrayString2.push('o');
//     } else if (string2[i] === '5') {
//       arrayString2.push('u');
//     } else {
//       arrayString2.push(string2[i]);
//     }
//   }
//   let answer2 = arrayString2.join('');
//   return answer2;
// }

// describe('Verifica funcao decode encode', () => {
//   it ('verificar encode e uma funcao', () => {
//     expect(encode).toBeDefined();
//   });
//   it ('verificar decode e uma funcao', () => {
//     expect(decode).toBeDefined();
//   });
//   it ('verificar se a,e,i,o,u são convertidas em 1,2,3,4,5', () => {
//     expect(encode(['a','e','i','o','u'])).toEqual('12345');
//   });
//   it ('verificar se a,e,i,o,u são convertidas em 1,2,3,4,5', () => {
//     expect(decode(['1','2','3','4','5'])).toEqual('aeiou');
//   });
//   it ('verificar demais letras', () => {
//     expect(encode(['x','a','b','l','a','u'])).toEqual('x1bl15');
//   });
//   it ('verificar demais letras', () => {
//     expect(decode(['x','1','b','l','1','5'])).toEqual('xablau');
//   });
//   it ('verificar tamanho', () => {
//     expect(encode(['x','a','b','l','a','u']).length).toEqual(6);
//   });
// });

// // Desafio 10
// const techList = (array, name) => {
//   if (array[0] === undefined) {
//     return 'Vazio!';
//   }
//   const arraySort = array.sort();
//   const answer = [];
//   let obj = {};
//   const criaobj = (param) => {
//     obj = {
//       tech: param,
//       name: name,
//     };
//     answer.push(obj);
//   }
//   for (let i = 0; i < arraySort.length; i += 1) {
//    criaobj(arraySort[i])
//   }
//   return answer;
// }

// describe('Testa a função techList', () => {
//   it('Testa se a função techList é definida', () => {
//     expect(techList).toBeDefined();
//   });
//   it('Testa se techList é uma função', () => {
//     expect(typeof techList).toBe('function');
//   });
//   it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
//     expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
//       {
//         tech: 'CSS',
//         name: 'Lucas'
//       },
//       {
//         tech: 'HTML',
//         name: 'Lucas'
//       },
//       {
//         tech: 'JavaScript',
//         name: 'Lucas'
//       },
//       {
//         tech: 'Jest',
//         name: 'Lucas'
//       },
//       {
//         tech: 'React',
//         name: 'Lucas'
//       }
//     ]);
//   });
//   it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
//     expect(techList([], 'Lucas')).toBe('Vazio!');
//   });
// });

// // Desafio 13
// const hydrate = (input) => {
//   const numberInput = input.match(/[0-9]+/g);
//   let count = 0;
//   let answer = null;
//   for (let i = 0; i < numberInput.length; i += 1) {
//     count += parseFloat(numberInput[i]);
//   } 
//   const verify = (count === 1) ? answer = `${count} copo de água`: answer = `${count} copos de água`;
  
//   return answer;
// }


// describe('Testa a função hydrate', () => {
//   it('Testa se a função hydrate é definida', () => {
//     expect(hydrate).toBeDefined();
//   });
//   it('Testa se hydrate é uma função', () => {
//     expect(typeof hydrate).toBe('function');
//   });
//   it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
//     expect(hydrate('1 cerveja')).toBe('1 copo de água');
//     expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
//     expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
//     expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
//     expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
//   });
// });

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];



// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  let answer = null;
    for ( let i = 0; i < professionalBoard.length; i += 1) {
      if (professionalBoard[i].id === id) {
        answer = professionalBoard[i];
      }
    }
  if (answer === null){
    throw new Error('ID não identificada');
  }
  if (answer[detail] === undefined) {
   throw new Error('Informação indisponível');
  }
  return answer[detail];
};

describe ('Teste bonus', () => {
  it ('Eh Uma function?', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBeDefined();
  });
  it ('Teste 1 entrada id certo e firstName', () => {
    expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana');
  })
  it ('Teste 2 entrada id certo e lastName', () => {
    expect(searchEmployee('5569-4', 'lastName')).toEqual('Jobs')
  });
  it ('Teste 3 entrada id certo e specialities', () => {
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap'])
  });
  it ('Teste 4 entrada id errado', () => {
    expect( () =>{ searchEmployee('6849-4', 'specialities')}).toThrowError(new Error('ID não identificada'))
});
  it ('Teste 4 entrada propriedade errada', () => {
    expect( () =>{ searchEmployee('8579-6', 'xablau')}).toThrowError(new Error('Informação indisponível'))
});
})

