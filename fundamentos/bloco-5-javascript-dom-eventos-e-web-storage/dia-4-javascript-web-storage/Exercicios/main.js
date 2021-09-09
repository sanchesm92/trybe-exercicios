let darkMode = true;
let whiteCharacters = true;
let font = '15px';
let spaceLine = '5px';
let typeFont = 'arial';

localStorage.setItem('darkMode', true);
localStorage.setItem('whiteCharacter', true);
localStorage.setItem('font-size', '15px');
localStorage.setItem('spaceLine', '5px');
localStorage.setItem('typeFont', 'arial');
localStorage.setItem('textaling', 'center');

window.onload = function () {
  let startPage = document.getElementById('body');
startPage.className = 'savePoint';
}

