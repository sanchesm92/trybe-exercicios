function mudarTexto (n){
  let texto = document.getElementsByTagName('p');
  texto[0].innerText = n;
}
mudarTexto('Trabalhando como desenvolvedor de software web no japão');
function mudarCorBordas (n){
  let cor = document.getElementsByTagName('main');
  cor[0].style.backgroundColor = n;
}
mudarCorBordas('rgb(76,164,109)');

function mudarCor (n){
  let cor = document.getElementsByTagName('section');
  cor[0].style.backgroundColor = n;
}
mudarCor('white');

function mudarTitle(n){
  let title = document.getElementsByTagName('h1');
  title[0].innerText = n
}
mudarTitle('Exercício 5.1 - JavaScript ');

function uppercase(){
  let text = document.getElementsByTagName('p');
  text[0].style.textTransform = 'uppercase';
  text[1].style.textTransform = 'uppercase';
  text[2].style.textTransform = 'uppercase';
}
uppercase();

function exibir(){
  let exibicao = document.getElementsByTagName('p');
  for (let i = 0; i <= exibicao.length; i += 1){
    console.log(exibicao[i]);
  }
}
exibir();
