// // para fixar
// const wakeUp = () => `Acordando!!`;
// const breakfast = () => `Bora tomar café!!`;
// const sleepTime = () => `Partiu dormir!!`;

// const doingThings = (func) => console.log(func());

// doingThings(wakeUp);

// exercicio 1

const generatePerson = (name) => {
  const transfArray = name.split(' '); // transforma em array separando pelo espaço, ou seja nome sobrenome = ['nome', sobrenome]
  const nome = transfArray.join('_'); // junta novamente em uma string o array com um _ entre os indices.
  const obj = {
    nomeCompleto: nome,
    email: `${nome.toLowerCase()}@trybe.com.br`,
  };
  return obj;
};

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// exercicio 2 
const verify = (apost, result) => {
  const check = (apost === result) ? `Parabéns você ganhou` : `Tente novamente`;
  return check;
};
const sorteio = (n, check) => {
  const generateRandomNumber = Math.trunc(Math.random() * 5);
  return check(n, generateRandomNumber);
};

// exercicio 3
const verify3 = (array1, array2) => {
  let answer = 0;
  for (let i = 0; i < array1.length; i += 1){
    if (array1[i] === array2[i]){
      answer += 1;
    } else {
      answer -= 0.5;
    }
  }
  return answer;
}

const prova = (gabarito, resposta, check) => check(gabarito,resposta);

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// console.log(prova(RIGHT_ANSWERS, STUDENT_ANSWERS, verify3));

// Bônus
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
// Math.floor retorna o menor numero inteiro
const drakeAttacks = (str) => Math.floor(Math.random() * (str - 15) + 15);

const warriorAttacks = (str, weapon) => Math.floor(Math.random() * ((str * weapon) - str) + str);

const mageAttacks = (int) => {
  const obj = {}
  const getMageMana = mage.mana;
  let answer = null;
  if (getMageMana < 15){
    answer = `Not enough mana`;
  } else {
    obj.dano = Math.floor(Math.random() * ((int * 2) - int) + int);
    obj.manaGasta = 15;
    answer = obj;
  }
  return answer;
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (funct) => {
    const damage = funct(30, 2)
    const drakeHP = dragon.healthPoints;
    warrior.damage = damage;
    dragon.healthPoints = drakeHP - damage;
    return damage;
  },
  mageTurn: (funct) => {
    const objAttackMage = funct(45);
    mage.damage = objAttackMage.dano;
    mage.mana -= objAttackMage.manaGasta;
    dragon.healthPoints -= objAttackMage.dano;
    return objAttackMage.dano;
  },
  drakeTurn: (funct) => {
    const drakeDamage = funct(50);
    warrior.healthPoints -= drakeDamage;
    mage.healthPoints -= drakeDamage;
    dragon.damage = drakeDamage;
    return drakeDamage;
  },
  resultTurn: () => battleMembers,
};


