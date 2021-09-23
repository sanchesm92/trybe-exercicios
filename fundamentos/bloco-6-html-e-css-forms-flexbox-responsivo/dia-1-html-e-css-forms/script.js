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
const getData = document.querySelector('#date')
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


const getSubmit = document.querySelector('#submit');

getSubmit.addEventListener('click', function (event) {
event.preventDefault();
let nome = document.querySelector(input).value;
let cpf = document.querySelector(input).value;


let description = document.querySelector('[name = description');
let date = document.querySelector('[name = date');
verificarLength();
console.log(nome.value);
})
function verificarLength () {
if ((nome.value.length > 40) || (cpf.value.length > 11) || (email.value.length > 50) || (address.value.length > 200) || (city.value.length > 28) || (resume.value.length > 1000) || (cargo.value.length > 40) || (description.value.length > 500)){
  alert('Erro!')
} 
}
