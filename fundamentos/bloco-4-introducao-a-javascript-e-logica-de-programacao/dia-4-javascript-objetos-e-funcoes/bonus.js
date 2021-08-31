// transformar objetos do array em string
// fazer uma função para retornar valor de cada algarismo
// 1 - verificar quais algarismo esta inserido no array 
// 2 transformar o algarismo para número
// 3 somar com o resultado

// let input = ['III'];

// function transform(n2){  
//   let answer =0;
//   let answer2 =0;
//   for ( i = 0; i < n2.length; i +=1){
//     switch (n2[i]){
//       case 'I': 
//       answer = 1;
//       case 'V': 
//       answer = 5;
//       case 'X': 
//       answer = 10;
//       case 'L': 
//       answer = 50;
//       case 'C': 
//       answer = 100;
//       case 'D': 
//       answer = 500;
//       case 'M': 
//       answer = 1000;
//     }
//     answer = answer + answer2;
// }
// answer = 0;
// }
// console.log(transform(input));
let input = 'MMXVIII';
let changeInput = input.split('');
let number = null;
let current = null;
let after = null;

function roman(n){
for (i = 0; i <= n.length; i += 1){
current = transform(n[i]);
after = transform(n[i-1]);
if (current <= after){
  number = number + current +1;
} else if (n.length === 1){
  number = current;
} else {
  number = number + current - after;
}
}
return number
}
//  função abaixo foi tirada do site https://www.w3resource.com/javascript-exercises/javascript-math-exercise-22.php, para poder transformar o array em número
function transform (a){ 
  switch (a){
    case 'I': 
      return 1;
      case 'V': 
      return 5;
      case 'X': 
      return 10;
      case 'L': 
      return 50;
      case 'C': 
      return 100;
      case 'D': 
      return 500;
      case 'M': 
      return 1000;
      default:
        return -1;
  }
}

console.log(roman(input));