const nome = 'Luiz'; //string
const nome1 = "Luiz";//string
const nome2 = `Luiz`;//string
const num1 = 10; //number
const num2 = 10.52;//number
let nomeAluno; //undefined = não aponta pra local nenhum na memória
const sobrenomeAluno = null; // nulo = não aponta pra lugar nenhum na memória
const boolean = true; // true or false
const aprovado = false; // boolean é um valor lógico
console.log(typeof nome) // typeof é pra ver o tipo da variavel

const a = [1, 2];
const b = a;
console.log(a, b);
b.push(6);
console.log(a,b);

let ab = 2;
const ba = ab;
console.log(ab, ba); // 2 , 2

ab = 3;
console.log(ab, ba);
