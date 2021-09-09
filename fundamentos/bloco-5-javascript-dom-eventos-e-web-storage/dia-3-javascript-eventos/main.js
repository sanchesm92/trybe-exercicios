const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
//  1 remover o a classe tech se existir algum elemento que tenha, 2 add a classe tech ao elemento indicado;
function addTech(elemento) {
  let remove = document.querySelector('.tech');
  remove.classList.remove('tech');
  let answer = elemento.target.classList.add('tech');
  return answer;
}
firstLi.addEventListener('click', addTech);
secondLi.addEventListener('click', addTech);
thirdLi.addEventListener('click', addTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
function addText(event) {
let element = document.querySelector('.tech');
element.innerText = event.target.value;
return element;
}
input.addEventListener('input', addText);


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function page () {
  window.location.replace('https://sanchesm92.github.io/');
}

myWebpage.addEventListener('dblclick', page );

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

function mudarCor (event) {
  event.target.style.color = 'blue';
}
myWebpage.addEventListener('mouseover', mudarCor);
myWebpage.addEventListener('mouseleave', function (event){
event.target.style.color = 'white';
});

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
