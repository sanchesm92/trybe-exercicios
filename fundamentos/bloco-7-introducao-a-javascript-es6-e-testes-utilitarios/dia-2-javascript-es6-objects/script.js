// objects keys
// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for(index in arrayOfSkills){
//     console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//   }
// };
// 
// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };
// console.log(Object.entries(student))


// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);
// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };



// exercicios parte 1

// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };


// // console.log(order.address.street)

// const customerInfo = (order) => {
//   const getNameDelivery = Object.values(order.order.delivery)[0];
//   const clientName = order.name;
//   const getPhone = order.phoneNumber;
//   const getStreet = order.address.street;
//   const getNumber = order.address.number;
//   const getApt = order.address.apartment;
//   // Adicione abaixo as informações necessárias.

//   return console.log(`Olá ${getNameDelivery}, entrega para: ${clientName}, Telefone: ${getPhone}, R. ${getStreet}, Nº: ${getNumber}, AP: ${getApt}`)

// }

// customerInfo(order);


// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.
//   const clientName = order.name = 'Luiz Silva';
//   const getPizza = Object.keys(order.order.pizza);
//   const getSoda = order.order.drinks.coke.type;
//   const getMoney = order.payment.total = '50';
//   // Adicione abaixo as informações necessárias.

//   return console.log(`Olá ${clientName}, o total do seu pedido de ${getPizza[0]}, ${getPizza[1]}, ${getSoda} é de R$ ${getMoney},00`)
// }

// orderModifier(order);

// parte 2 

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (objeto, chave, valor ) => {
objeto[chave]=valor;
}
addTurn(lesson2,'turno','noite');

const listKeys = (objeto) => console.log(Object.keys(objeto));

const objLength = (objeto) => console.log(Object.keys(objeto).length);

const listValues = (objeto) => console.log(Object.values(objeto));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});



const studantsNumber = (objeto) => {
let total = 0;
const keys = Object.keys(objeto); //está armazenando as lessons1 2 3 no array keys;
for (let i = 0; i < keys.length; i +=1){
  const current = keys[i];
  total += objeto[current].numeroEstudantes;
}
return total
}


const getInObjt = (chave, key) => {
  const keys = Object.values(chave);
  const acesso = keys[key];
  return acesso;
}


const verifyObj = (objeto, chave, valor) => (objeto[chave] === valor) ? true : false;

//bonus 1

const studentsInMathClass = () => {
let total = 0;
const keysArray = Object.keys(allLessons);
for (let i of keysArray){
const studants = allLessons[i].numeroEstudantes;
const verify = (allLessons[i].materia === 'Matemática') ? total += studants : total += 0;
}
return total
}


// bonus 2

const bonus2 = (objeto, param1) => {
  const keysArray = Object.keys(allLessons);
  const arrayVazio = [];
  const objectVazio = {};
  let total = 0;
  let can = false;
  for (let i = 0; i < keysArray.length; i += 1) {
    let professor = allLessons[keysArray[i]].professor;
    if ( professor === param1 ){
      can = true;
      total += allLessons[keysArray[i]].numeroEstudantes
      arrayVazio.push(allLessons[keysArray[i]].materia)
    }
  }
  if ( can === true ){
    objectVazio.professor = param1;
    objectVazio.aulas = arrayVazio;
    objectVazio.estudantes = total;
  }
  return objectVazio;
}

console.log(bonus2(allLessons, 'Carlos'));

