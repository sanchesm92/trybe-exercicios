let numero1 = Math.ceil(Math.random() * 60);
let numero2 = Math.ceil(Math.random() * 60);
let numero3 = Math.ceil(Math.random() * 60);
let numero4 = Math.ceil(Math.random() * 60);
let numero5 = Math.ceil(Math.random() * 60);
let numero6 = Math.ceil(Math.random() * 60);

let lotteryNumbers = [numero1, numero2, numero3, numero4, numero5, numero6];
 
let jogo1 =[11, 15, 26, 33, 40, 39];
// let jogo2 = [] tentar com 2 
// let jogo3 = [] tentar com 3
// let allgames = [] tentar com array de array

let acertos = 0;

for (let i = 0;i < lotteryNumbers.length; i += 1){
  for (let i2 = 0;i2 < jogo1.length; i2 += 1){
  if ( lotteryNumbers[i] === jogo1[i2] ){
    acertos += 1;
    }
  }
}
console.log("numeros sorteados:", lotteryNumbers);
console.log("jogo:", jogo1);
console.log("Acertos:", acertos);
