/* Operadores Aritiméticos, de atribuições e incremento
+ Adição / concatenação
** Potenciação
% resto da divisão
concatenação = unir os números
*/

//Soma
// const num1 = 5;
// const num2 = 10;
// console.log(num1 + num2);

// // Subtração
// const num3 = 5;
// const num4 = 10;
// console.log(num1 - num2);

// // concatenação é a soma, porém, o num5 é uma string
// const num5 = '5';
// const num6 = 10;
// console.log(num1 + num2);

// // Potenciação 3 elevado a 5 -> 3x3x3x3x3 = 243
// const num7 = 3;
// const num8 = 5;
// console.log(num7 ** num8);
// // % resto da divisão
// const num9 = 10;
// const num10 = 5;
// console.log(num9 % num10);


/*
Incremento = ++
Decremento = --
*/


// let contador = 1;
// contador++;
// console.log(contador);

// let contadorD = 5;
// contadorD--;
// console.log(contadorD);

const passo = 2;
let contadorP = 0;
// contadorP = contadorP + passo;
// console.log(contadorP);
// contadorP = contadorP + passo;
// console.log(contadorP);
// contadorP = contadorP + passo;
// console.log(contadorP);
contadorP += passo;
contadorP += 4;
console.log(contadorP);

//Pode ser usado potencialização tbm
let contadorM = 2;
contadorM **= 10
console.log(contadorM);


//NaN - Not a number

const num1 = 10;
const num2 = 'Liuiz;'
const num3 = '50';
const num4 = parseInt('5'); // Ele converte uma string para um número
const num5 = parseFloat('4.5'); // ele converte a string para um número float(flutuante)
const num6 = Number('5'); // Number é um objeto que representa um número de qualquer um.
const num7 = Number('3.5');
const num8 = Number('LoL'); // mesmo sendo Number, o erro vai dar o mesmo NaN por conta que não tem número
console.log(num1 + num2); // ainda da certo, junta 10Liuiz
console.log(num1 * num2); // Aqui já da errado, o resultado é NaN
console.log(num1 * num3); // Mesmo num3 estando dentro de uma 'string', o js consegue arrumar
console.log(typeof num2);
console.log(typeof num1);
console.log(num4*num1);
console.log(num5 * num1);
console.log(num6 + num7);
console.log(num8 * num7);


