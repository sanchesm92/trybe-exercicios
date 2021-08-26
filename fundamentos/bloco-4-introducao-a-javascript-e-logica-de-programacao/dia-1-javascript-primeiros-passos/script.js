// exercicio1/
// const myName = "Felipe";
// const birthCity = "Conselheiro Lafaiete";
// var birthYear = 1992;
// birthYear = 2030
// console.log(myName,birthCity,birthYear)

// exercicio 2
// const base = 5;
// let height = 8;

// const area = (base*height);
// const perimeter = (base+base+height+height);
// console.log(perimeter);

// Exercicio 3
// const nota = 55;

// if (nota >= 80) {
//   console.log("Parabéns, você foi aprovada(o)!")
// }
// else if (nota >= 60 && nota < 80) {
//   console.log("Você está na nossa lista de espera")
// }
// else if (nota < 60) {
//   console.log("Você foi reprovada(o)")
// }

// exercicio 4
// console.log("trybe")

// const a = true;
// const b = false;
// console.log(a && b);

// const currentHour = 19;
// let message = "";

// if (currentHour >= 22) {
//   message = "Não deveríamos comer nada, é hora de dormir"
// } else if (currentHour >= 18 && currentHour < 22) {
//   message = "Rango da noite, vamos jantar :D"
// } else if (currentHour >= 14 && currentHour < 18) {
//   message ="Vamos fazer um bolo pro café da tarde?"
// } else if (currentHour > 11 && currentHour < 14) {
//   message = "Hora do almoço!!!"
// } else if (currentHour > 4 && currentHour < 11) {
//   message = "Hmmm, cheiro de café recém passado"
// }

// console.log(message);

// let weekDay = "sabado";

// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
//   console.log("Oba, mais um dia de aprendizado na Trybe >:D")
// } else {
//   console.log("Finalmente, descanso merecido UwU.");
// }

// let situacao = "lista"

// switch (situacao) {
//   case 'aprovada':
//     console.log("Aprovado(a)");
//     break;

//   case 'reprovada':
//     console.log("Reprovado(a)");
//     break;

//   case 'lista':
//     console.log("Está na lista de espera");
//     break;

//   default: 
//   console.log("não se aplica");
//   }

// Exercicio 1 

// let a = 2;
// let b = 3;
// let operacao ="modulo"

// switch (operacao) {
//   case 'adicao':
//     console.log(a + b);
//   break;
//   case 'subtracao':
//     console.log(a - b);
//   break;

//   case 'multiplicacao':
//     console.log(a * b);
//   break;

//   case 'divisao':
//     console.log(a / b);
//   break;

//   case 'modulo':
//     console.log(a % b);
//   break;
// }

// Exercicio 2

// let a = 1;
// let b = 2;

// if (a > b){
//   console.log(a);
// } else {
//   console.log(b);
// }

// exercicio 3
// let a = 5;
// let b = 4;
// let c = 3;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else if (c > a && c > b) {
//   console.log(c);
// }

// Exercicio 4
// let a = -1;

// if (a > 0) {
//   console.log("positive");
// } else if (a < 0) {
//   console.log("negative");

// exercicio 5

// let a = 60;
// let b = 60;
// let c = -60;

// if (a + b + c === 180) {
//   console.log(true);
// } else if (a < 0 || b < 0 || c < 0) {
//   console.log("angulo inválido");
// } else {
//   console.log(false);
// }

// exercicio 5

// let peca = "BiSpO"

// switch (peca.toLowerCase()) {
//   case 'cavalo':
//     console.log("cavalo > movimenta em forma de L pode pular peças");
//     break;

//   case 'rei':
//   console.log("rei > movimenta todas as direções em 1 casa");
//   break;

//   case 'rainha':
//   console.log("rainha > horizontal e vertical e n pode pular peças");
//   break;

//   case 'bispo':
//   console.log("bispo > movimenta em diagonal");
//   break;

//   case 'torre':
//   console.log("torre> movimenta em linha reta");
//   break;

//   case 'peao':
//   console.log("peao > movimanta em uma ou 2 casa pera frente");
//   break;

//   default:
//     console.log("não é uma peça");
// }

// exercicio 7
// let nota = 1;
// let valor = 10;
// let resultado = ((nota * 100)/ valor);


//   if (resultado < 0 || resultado > 100) {
//   console.log("ERROR");
// } else if (resultado >= 90) {
//   console.log("Nota A");
// } else if (resultado >= 80) {
//   console.log("Nota B");
// } else if (resultado >= 70) {
//   console.log("Nota C");
// } else if (resultado >= 60) {
//   console.log("Nota D");
// } else if (resultado >= 50) {
//   console.log("Nota E");
// } else if (resultado < 50) {
//   console.log("Nota F");
// }

// Exercicio 8
// let a = 2;
// let b = 1;
// let c = 1;

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// exercicio 9 
// let a = 3;
// let b = 1;
// let c = 1;

// if (a % 3 === 0 || b % 3 === 0 || c % 3 ===0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// exercicio 10
// const custo = 90;
// const venda = 330;
// let valorCusto = (((custo *20)/100) + custo);
// let lucro = null;

// if (custo < 0 || venda < 0) {
//   console.log("ERROR");
// } else {
//   lucro = venda - valorCusto
//   console.log("O lucro é de: " + lucro + " reais");  
// }
// exercicio 11
let salarioBruto = 3000.00;
let salarioLiquido = null;
let aliquotaInss = null;
let aliquotaIr = null;
let impostoRenda = null;
let salarioIr = null;

if (salarioBruto < 1556.94){
  aliquotaInss = ((salarioBruto * 8)/100);
} else if (salarioBruto > 1556.95 && salarioBruto < 2594.92){
  aliquotaInss= ((salarioBruto * 9)/100);
} else if (salarioBruto > 2594.93 && salarioBruto < 5189.82){
  aliquotaInss = ((salarioBruto * 11)/100);
} else if (salarioBruto > 5189.82){
  aliquotaInss = 570.88
}
salarioIr = salarioBruto - aliquotaInss;

if (salarioIr <= 1903.98) {
impostoRenda = "isento";
aliquotaIr = 0;
} else if (salarioIr >= 1903.99 && salarioIr <= 2826.65) {
  aliquotaIr = 7.5;
impostoRenda = (((salarioIr * 7.5)/100) - 142.80);
} else if (salarioIr >= 2826.66 && salarioIr <= 3751.05) {
  aliquotaIr = 15;
impostoRenda = (((salarioIr * 15)/100) - 354.80);
} else if (salarioIr >= 3751.06 && salarioIr <= 4664.68) {
  aliquotaIr = 22.5;
impostoRenda = (((salarioIr * 22.5)/100) - 636.13);
} else if (salarioIr > 4664.68 ){
  aliquotaIr = 27.5;
impostoRenda = (((salarioIr * 27.5)/100) - 869.36);
}

salarioLiquido = salarioIr - impostoRenda

console.log(salarioLiquido);
