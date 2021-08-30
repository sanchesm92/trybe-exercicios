// let n = 5;
// let linha = "";
// for (let i = 0; i < n; i += 1){
//   linha = linha + "*";
// }
// for (let i2 = 0; i2 < n; i2 += 1){
//   console.log(linha);
// }
// _______________________________________________________________________

// let n = 7;
// let linha = "";
// for ( let i = 0; i < n; i += 1){
//   linha = linha + "*";
//   console.log(linha);
// }

// let n = 5;
// let linha = "";
// let rightControl = n

// for ( let i = 0; i <= n; i += 1){
//   for ( let i2 = 0; i2 <= n; i2 += 1){
//     if (i2 < rightControl){
//       linha = linha + " ";
//     } else {
//       linha = linha + "*";
//     }
//   }
//   console.log(linha);
//   linha = "";
//   rightControl -= 1;
//   }



// let n = 5;
// let line = "";
// let middle = (n + 1) / 2;
// let leftControl = middle;
// let rightControl = middle;

// for (let iLine = 0; iLine <= middle; iLine += 1){
//   for (let iCol = 0; iCol <= n; iCol += 1){
//     if ((iCol > leftControl) && (iCol < rightControl)) {
//       line = line + "*";
//     } else { 
//       line = line + " ";
//     }
//   }
//   console.log(line);
//   line = "";
//   leftControl -= 1;
//   rightControl += 1;
// }


let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let outputLine = '';

for (let line = 1; line <= middle; line += 1) {
  for (let col = 1; col <= n; col += 1) {
    if (col === controlLeft || col === controlRight || line === middle) {
      outputLine += "*";
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
  outputLine = '';
}
