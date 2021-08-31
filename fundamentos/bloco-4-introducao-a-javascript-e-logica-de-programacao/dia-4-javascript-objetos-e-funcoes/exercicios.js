// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };


// // 1
// // console.log("Bem-vinda " + info.personagem + "!!" );
// // 2
// info.recorrente = "Sim";
// // console.log(info);
// // 3
// // for (i in info){
// //   console.log(i);
// // }
// // 4
// let resultado1 = {};

// for (i in info){
//   resultado1 = info[i]
//   // console.log(info[i]);
// }
// let info2 = {
//   personagem:'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178 ", 
//   nota : 'O último MacPatinhas',
//   recorrente: 'Sim'
// }
 

// for (i in info2){
//  if ((i === 'recorrente') && (info[i] === 'Sim') && (info2[i])){
//    console.log('Ambos Recorrentes');
//  } else{
//    console.log(info[i]+ " e " + info2[i]);
//  }
// }

// função 
// 1

// function palindromo (palavra){

//   var splitString = palavra.split("");
//   var reverseArray = splitString.reverse();
//   var joinArray = reverseArray.join("");
//   if (joinArray === palavra){
//     console.log("é um palindromo " + true);
//   } else {
//   console.log("não é um palindromo " + false);
//   }

// }

// palindromo('ovo')

// let array = [1,2,344,6,99,4,8,103];
// let resposta = 0;
// let respostaIndice = 0;

// function maiorValor (n){

//   for (i = 0; i < n.length; i += 1){
//     if (n[i] > resposta){
//       resposta = n[i];
//       respostaIndice = i;
//     }
//   }
//   return respostaIndice;
// }
// console.log(maiorValor(array));

// let array = [1,2,344,6,99,4,8,103, -4];
// let resposta = 0;
// let respostaIndice = 0;

// function maiorValor (n){

//   for (i = 0; i < n.length; i += 1){
//     if (n[i] < resposta){
//       resposta = n[i];
//       respostaIndice = i;
//     }
//   }
//   return respostaIndice;
// }
// console.log(maiorValor(array));

// 1 pegar 1 elemento do array e atribuir a uma variavel 
// verificar o número de letras 
// pegar o maior numero de letras e retornar 

// let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maiorPalavra (n){
// let verificar = n[0]
// for (i in n){
//   if (verificar.length < n[i].length){
// verificar = n[i];
//   }
// }
// return verificar
// }
// console.log(maiorPalavra(array));

// let array = [2, 3, 2, 5, 8, 2, 3];

// function repete(n){

//   let indiceReposta = null;
//   let verificar = null;
//   let contador = 0;
//   let contagem = 0;
//   for (i in n){
//     verificar = n[i];
//     for (i2 in n){
//         if (verificar === n[i2]){
//           contador += 1;
//         }
//       }  
//       if (contador > contagem){
//         contagem = contador;
//         indiceReposta = n[i];
//       }
//       contador = 0;
//   }
//   return indiceReposta;
// };
// console.log(repete(array));

// function string(world, ending){
//   let verificar1 = world.split('');
//   let verificar2 = ending.split('');
//   let contagem = 0;
//   for ( i = 0; i < world.length; i += 1){
//   verificar1 = world.length -i; 
//   for (i2 = 0; i2 < ending.length; i2 += 1){
//     verificar2 = ending.length - i2;
//     if (verificar2 === verificar1){
//       contagem +=1
//     }
//   }
//   if ( contagem == ending.length -1){
//   return true
//   } else {
//     return false
//   }
//   contagem = 0;
// }
// }
// console.log( string('joaofernando', 'nando'));

function verificar (palavra, fim){
  let inversoPalavra = palavra.split('');
  let reversoPalavra = inversoPalavra.reverse();
  let palavraFinal = reversoPalavra.join('');
  let inversoFim = fim.split('');
  let reversoFim = inversoFim.reverse();
  let fimFinal = reversoFim.join('');
  let resposta = false;
  for (i = 0; i < fimFinal.length; i += 1){
    if ( palavraFinal[i] === fimFinal[i]){
      resposta = true;
    } else {
      resposta = false;
    }
  }
  return resposta;
};
console.log(verificar('joaofernando', 'fernand'));