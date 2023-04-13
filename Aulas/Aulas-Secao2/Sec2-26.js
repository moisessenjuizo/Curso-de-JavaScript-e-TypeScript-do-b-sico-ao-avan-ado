// let num1 = 1;
// let num2 = 2.5;

 // num1 virou uma string e acontece a concatenação
// console.log(typeof num1); // Ele continuou sendo um number.
// console.log(typeof num2);

// console.log(num1.toString() + num2);
// console.log(num1 + num2);
// num1 = num1.toString(); // num1 recebe num1 que virou string.
// console.log(typeof num1); // E agora virou uma string

// let Rbinario = 15;
// console.log(Rbinario.toString(2));

// let numeroGigante = 10.5554321323232; // toFixed(4) -> 10.5554
// console.log(numeroGigante.toFixed(4)); // com quatros casas decimais - 10.5554

// let numeroInteiroOuNao = 10;
// console.log(Number.isInteger(numeroInteiroOuNao)); // 10.25 deu false / 10 -> True

// let E_um_NaN = 15;
// let eUmaString = 'jose';
// let temp = E_um_NaN * eUmaString;
// console.log(Number.isNaN(temp)); // vai dar True, porém se eu mudar jose pra 10 da false

let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

console.log(num1); // deu resultado de 0.999999999999999
num1 = num1.toFixed(2);
console.log(num1); // mudou para 1.0 porém não é verdade
console.log(Number.isInteger(num1)); // Deu False pq não é um número inteiro

let num3 = 0.9999;
num3 = parseFloat(num3.toFixed(3)); // aqui eu fiz mudança pra número flutuante
console.log(num3);
console.log(Number.isInteger(num3)); // aqui eu perguntei se é um número inteiro

