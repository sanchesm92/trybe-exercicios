// 1- identifica a posição da rainha
let linhaRainha = 4;
let colunaRainha = 4;

// 2- identificar a posição do oponente
let linhaOponente = 5;
let colunaOponente = 3;

// variavel utilizada para indicar se a rainha pode atacar ou nao
let rainhaPodeAtacar = false;

// 3 verificar se o oponente pode ou não ser atacado na mesma linha ou coluna

if ((linhaOponente === linhaRainha) || (colunaOponente === colunaRainha)){
  rainhaPodeAtacar = true;
}

// verifica se pode atacar o oponente na diagonal superior direita

for (let iSupDir = 1; iSupDir < 8; iSupDir += 1){
  let linhaAtualRainha = linhaRainha + iSupDir;
  let colunaAtualRainha = colunaRainha + iSupDir;
  if ((linhaAtualRainha >8) || (colunaAtualRainha > 8))

  if((linhaOponente === linhaAtualRainha) || (colunaOponente === colunaAtualRainha)) {
    rainhaPodeAtacar = true;
  }
}