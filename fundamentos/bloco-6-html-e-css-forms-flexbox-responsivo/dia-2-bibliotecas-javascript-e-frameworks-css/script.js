import './node_modules/just-validate/dist/js/just-validate.js';


const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const siglas = ['ac', 'al', 'am', 'am', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to']
const getStates = document.querySelector('#states');


function putStates () {
    for (let i = 0; i < states.length; i += 1){
      let criaOption = document.createElement('option');
      criaOption.innerText = states[i];
      criaOption.value = siglas[i];
      getStates.appendChild(criaOption);
    }
}
putStates();

// Bloquear limite maximo da data 

// max e min data tirado ideia do site https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today
let getData = document.querySelector('#date')
let today = new Date(); // gera a data de hoje sem ser em
let day = today.getDate(); //esta pegando o dia
let month = today.getMonth() +1; // está somando 1 no mes porque o janeiro é o 0 
let year = today.getFullYear(); // está pegando o ano

if (day < 10) { // caso o dia for menor que 10, inserir um 0 antes tipo dia 03
   day = '0' + day;
}

if (month < 10) { // caso o mes for menor que 10 inserir um 0 antes
  month = '0' + month;
} 
    
today = year + '-' + month + '-' + day; // colocando no formato para atualizar o atributo max;
getData.max = today;

// let  picker  =  new  Pikaday ( {  field : $ ( '#date' ) [ 0 ]  } ) ;

const picker = new Pikaday({
  field: document.getElementById('date'),
  format: 'D/M/YYYY',
  toString(date, format) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (day < 10) { // caso o dia for menor que 10, inserir um 0 antes tipo dia 03
      day = '0' + day;
   }
   
   if (month < 10) { // caso o mes for menor que 10 inserir um 0 antes
     month = '0' + month;
   } 
    // return `${day}/${month}/${year}`;
    return day + '/' + month + '/' + year;
  },
});



const getSubmit = document.querySelector('#submit');

window.onload = function (){
  new window.JustValidate('#form', {
    rules: {
      name: {
        required: true,
        maxLength: 40
      },
      cpf: {
        required: true,
        maxLength: 11
      },
      email: {
        required: true,
        email: true,
        maxLength: 50
      },
      address: {
        required: true,
        maxLength: 200
      },
      city: {
        required: true,
        maxLength: 28
      },
      states: {
        required: true,
      },
      house: {
        required: true,
      },
      resume: {
        required: true,
        maxLength: 1000
      },
      cargo: {
        required: true,
        maxLength: 40
      },
      description: {
        required: true,
        maxLength: 500
      },
      date: {
        required: true,
      }
    },
    messages: {
      name: {
        required: 'O campo nome é obrigatório.',
        maxLength: 'O limite é de 40 caracteres.'
      },
      cpf: {
        required: 'O campo cpf é obrigatório.',
        maxLength: 'O limite é de 11 caracteres.'
      },
      email: {
        email: 'Email inválido',
        required: 'O campo email é obrigatório.',
        maxLength: 'O limite é de 50 caracteres.'
      },
      address: {
        required: 'O campo endereço é obrigatório.',
        maxLength: 'O limite é de 200 caracteres.'
      },
      city: {
        required: 'O campo cidade é obrigatório.',
        maxLength: 'O limite é de 28 caracteres.'
      },
      states: {
        required: 'O campo estado é obrigatório.',
      },
      house: {
        required: 'O campo home é obrigatório.',
      },
      resume: {
        required: 'O campo resumo é obrigatório.',
        maxLength: 'O limite é de 1000 caracteres.'
      },
      cargo: {
        required: 'O campo cargo é obrigatório.',
        maxLength: 'O limite é de 40 caracteres.'
      },
      description: {
        required: 'O campo descroção é obrigatório.',
        maxLength: 'O limite é de 500 caracteres.'
      },
      date: {
        required: 'O campo de data é obrigatório.',
      }
    }
  });

;
}