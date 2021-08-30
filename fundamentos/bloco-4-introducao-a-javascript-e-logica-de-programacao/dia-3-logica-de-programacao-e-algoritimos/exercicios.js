// exercicio 1 quadrado de *

// let n = 5;
// let linha = "";


//   for (let i = 0; i < n; i += 1){
//     linha = linha + "*";
//   }
//   for (let i = 0; i < n; i += 1){
//     console.log(linha);
//   }
  // _________________________________________________
 
// exercicio 2
// let n = 5;
// let linha = "";

// for (let i = 0; i < n; i += 1){
//   linha = linha + "*";
//   console.log(linha);
// }

// exercicio 3
// let n = 5;
// let linha = "";
// let branco = "";
// let position = n;


// for (let i = 0; i <= n; i +=1){
//   for ( let i2 = 0; i2 <= n; i2 += 1){
//     if (i2 < position){ // enquanto i2 for menor que position ele irá imprimir um espaço em branco,exemplo quando na 1 rodada i2 é 0 e position 5, irá imprimir 1 espaço em branco, na segunda volta i2 é 1 e position 5 ira imprimir mais um espaço em branco  e assim vai até completar o valor total de repetiçoes que é n ou seja 5
//      linha = linha + " "; 
//     } else { /// caso o valor de i2 for maior que position irá imprimir um *
//     linha = linha + "*";
//     }
    
//   }
//   console.log(linha); // esta dentro do primeiro for para poder imprimir cada linha 
//   linha = ""; //. zerou para poder reinicar o cilco
//   position -= 1; // ira dimiuir 1 para sempre ficar 1 a menos que o que esta repetindo
// }

// exercicio 4
// let n = 5;
// let linha = "";
// let meio = (n + 1)/ 2;
// let controlLeft = meio;
// let controlRight = meio;

// // primeira linha 
// for (let indiceLinha = 0; indiceLinha <= meio; indiceLinha += 1){
//   for (let indiceColuna = 0; indiceColuna <= n; indiceColuna += 1){
//     if ( (indiceColuna > controlLeft) && (indiceColuna < controlRight) ) {
//       linha = linha + "*"; // está pintando o meio pq se for maior que o da esquerda e maior que o da direita, está no meio
//     } else {
//       linha = linha + " ";
//     }

// let n = 5;
// let linha = "";
// let meio = (n + 1)/ 2;
// let controlLeft = meio;
// let controlRight = meio;

// // primeira linha 
// for (let indiceLinha = 0; indiceLinha <= meio; indiceLinha += 1){
//   for (let indiceColuna = 0; indiceColuna <= n; indiceColuna += 1){
//     if ( (indiceColuna > controlLeft) && (indiceColuna < controlRight) ) {
//       linha = linha + "*"; // está pintando o meio pq se for maior que o da esquerda e maior que o da direita, está no meio
//     } else {
//       linha = linha + " ";
//     }

//   }
//   console.log(linha);
//   linha = "";
//   controlLeft -= 1;
//   controlRight += 1;

// }

// exercicio bonus 1

// let n = 5;
// let middle = (n + 1) /2;
// let linha = "";
// let right = middle;
// let left = middle;

// for ( let il = 0; il <= middle; il += 1){
//   for (let ic = 0; ic <= n; ic += 1 ){
//     if ((ic > left) && (ic < right)){
//     linha += "*";
//     } else {
//     linha += " ";
//     }
//   }
//   console.log(linha);
//   linha = "";
//   right += 1;
//   left -= 1;
// }
// let line = "";
// for (i = 0;i < n;i += 1){
// line = line + "*";
// }
// console.log(line);

// let n = 7;
// let quantidade = 0;

// for (let i = 2; i < n; i += 1){
//   if ( n % i === 0) {
//     quantidade += 1;
//   }
// }
// if ( quantidade === 0){
//   console.log("é Um numero primo");
// } else {
//   console.log("Não é um numero primo");
// }

// ________________________________________


let n = 9;
let line = "";
let middle = (n + 1) / 2;
let left = middle;
let right = middle;


for ( i = 0; i <= middle; i += 1){
  for ( i2 = 0; i2 <= n + 1; i2 += 1){
    if ((i2 === left) || (i2 === right) || (line === i2)){
      line = line + "*";
    } else {
      line = line + " ";
    }
  }
  
  console.log(line);
  left -= 1;
  right += 1;
  line = "";
}
line = "";
for (i = 0; i < n + 2; i += 1){
  line = line + "*";
}
console.log(line);