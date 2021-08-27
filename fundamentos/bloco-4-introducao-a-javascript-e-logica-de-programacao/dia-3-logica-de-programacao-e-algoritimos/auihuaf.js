let n = 22;
let divisores = 0;

for ( i = 2; i < n; i += 1 ){
  if (n % i === 0) {
    divisores += 1;
  }
}
if (divisores === 0) {
  console.log("primo");
} else {
  console.log("n primo");
}