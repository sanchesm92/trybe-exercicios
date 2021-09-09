function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

let lista = document.querySelector('#days');

for (let i = 0; i < dezDaysList.length; i+= 1){
let teste = document.createElement('li');
teste.innerText = dezDaysList[i];
teste.classList.add('day');
if ((i === 5) || (i === 12) || (i === 19) || (i === 26)){
teste.classList.add('friday');
}
if ((dezDaysList[i] === 24) || (dezDaysList[i] === 25) || (dezDaysList[i] === 31)){
  teste.classList.add('holiday');
}
lista.appendChild(teste);
}

// 2
function criaBotao (string){
  let criaBotao = document.createElement('button');
  let botao = document.querySelector('.buttons-container');
  criaBotao.id = 'buttons-container';
  criaBotao.innerText = string;
  botao.appendChild(criaBotao);
}
criaBotao('Feriados');

// 3


let recolheBotao = document.getElementById('buttons-container');
let recolheFeriado = document.querySelectorAll('.holiday');
recolheBotao.addEventListener('click', function () {
  for (let i = 0; i < recolheFeriado.length; i += 1){
    if (recolheFeriado[i].style.backgroundColor === '#04AA6D') {
      recolheFeriado[i].style.backgroundColor = '#eee';
    } else {
      recolheFeriado[i].style.backgroundColor = '#04AA6D';
    }
  } 
});
recolheBotao.addEventListener('dblclick', function(){ // se n quer funcionar da maneira tradicional nem usando o que o gabarito fala vai assim mesmo
  for (let i = 0; i < recolheFeriado.length; i += 1){
    if (recolheFeriado[i].style.backgroundColor === '#eee') {
      recolheFeriado[i].style.backgroundColor = '#04AA6D';
    } else {
      recolheFeriado[i].style.backgroundColor = '#eee';
    }
  }
});
//  4
function criasexta (string){
  let criaBotao = document.createElement('button');
  let botao = document.querySelector('.buttons-container');
  criaBotao.id = 'btn-friday';
  criaBotao.innerText = string;
  botao.appendChild(criaBotao);
}
criasexta('Sexta-feira');

// 5
let getBotao = document.getElementById('btn-friday');
let  mudaSexta = document.querySelectorAll('.friday');
let novoTexto = 'Mufasa';
let newArray = [4, 11, 18, 25];

getBotao.addEventListener('click', function () {
  for (let i = 0; i < mudaSexta.length; i += 1){
    if (mudaSexta[i].innerHTML != novoTexto){
      mudaSexta[i].innerHTML = novoTexto;
    } else {
      mudaSexta[i].innerHTML = newArray[i];
    }
    }
});

//6  pegar pelo id pai 
let exercicio6 = document.querySelector('#days');

exercicio6.addEventListener('mouseover', function(event) {
  event.target.style.fontSize = 'xx-large';
});
exercicio6.addEventListener('mouseout', function (event){
  event.target.style.fontSize = '20px';
});

// 7
let getTasks = document.querySelector('.my-tasks');

function createTasks(string) {
let task = document.createElement('span');
task.innerText = string;
getTasks.appendChild(task);
};
createTasks('Cozinhar');
// 8 
let tarefa = getTasks.firstElementChild.nextElementSibling;

function legenda(string) {
  let cria = document.createElement('div');
  cria.className = 'task';
  cria.style.backgroundColor = string;
  getTasks.appendChild(cria);
}
legenda('blue');

// 9
let pegaTask = document.querySelector('.task');
let pegaElement = document.querySelector('.task selected');
pegaTask.addEventListener('click', function(){
  if (pegaTask.className === 'task'){
    pegaTask.className = 'task selected';
  } else {
    pegaTask.className = 'task';
  }
});
// 10
let corDaDiv = pegaTask.style.backgroundColor;
let pegaDiv = getTasks.lastElementChild;

exercicio6.addEventListener('click', function(event){
let cor = event.target.style.color;
if (pegaDiv.className === 'task selected'){
  if (cor === corDaDiv){
    event.target.style.color = 'rgb(119,119,119)';
  } else {
    event.target.style.color = corDaDiv;
  }
}
});

// bonus
let getInput = document.querySelector('#task-input');
let compromissos = document.querySelector('.task-list');
let getButton = document.querySelector('#btn-add')

getButton.addEventListener('click', function (){
  if (getInput.value != ''){
    let criaLi = document.createElement('li');
    criaLi.innerHTML = getInput.value;
    compromissos.appendChild(criaLi);
    getInput.value = '';
  } else {
    alert('Erro, Digite algo para inserir.');
  }
});
getInput.addEventListener('keyup', function(event){
  if (event.keyCode === 13){
    let criaLi = document.createElement('li');
    criaLi.innerHTML = event.target.value;
    compromissos.appendChild(criaLi);
    getInput.value = '';
  }
});




























// function addNewTask() {
//   let getInputField = document.querySelector('#task-input');
//   let addInputButton = document.querySelector('#btn-add');
//   let getTaskList = document.querySelector('.task-list');

//   addInputButton.addEventListener('click', function() {
//     if (getInputField.value.length > 0) {
//       let newLi = document.createElement('li');
//       newLi.innerText = getInputField.value;

//       getTaskList.appendChild(newLi);
//       getInputField.value = '';
//     } else {
//       alert('Error: Digite ao menos 1 caractere.');
//     }
//   })

//   getInputField.addEventListener('keyup', function(event) {
//     if (event.keyCode === 13 && getInputField.value.length > 0) {
//       let newLi = document.createElement('li');
//       newLi.innerText = getInputField.value;

//       getTaskList.appendChild(newLi);
//       getInputField.value = '';
//     }
//   });
// };

// addNewTask();