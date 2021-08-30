// let n = 22;
// let divisores = 0;

// for ( i = 2; i < n; i += 1 ){
//   if (n % i === 0) {
//     divisores += 1;
//   }
// }
// if (divisores === 0) {
//   console.log("primo");
// } else {
//   console.log("n primo");
// }

// let n = 5;
// let linha = "";
//  for(i = 0; i < n; i += 1){
//    linha = linha + "*";
//  }
//  for (i2 = 0; i2 < n; i2 +=1){
//    console.log(linha);
//  }


// let n = 5;
// let linha = "";

// for (i = 0; i < n; i += 1){
// linha = linha + "*";
// console.log(linha);
// }

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