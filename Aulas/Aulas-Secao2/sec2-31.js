
// função[function]   parametro[saudacao]    variavel[nome]
// function       saudacao(nome){
//     return `Bom dia ${nome}!`;
// }
// const variavel = saudacao('Luiz'); // minha variavel recebeu saudacao e foi mostrada em console.log
// console.log(variavel);
// Sempre que chega no [return] a função para, não importa se tem algo adiante.
// function soma(x, y){
//     const resultado = x + y;
    //console.log('bom dia'); // Aqui já aparece quando eu chamo a função. ai fica bom dia e o resultado. [bom dia 4]
//     return resultado;
    //console.log('bom dia'); não ira mostrar pq está apos do return.
// }
// const resultado = soma(2,2); // Normalmente não pode criar uma const de mesmo nome, porém como dentro da função está protegido, eu posso criar uma const com o mesmo nome.
// console.log(resultado);
// function soma1(x = 1, y = 1){ // minha função já tem um valor base ai o resultado é 2
//     const resultado1 = x + y;
//     return resultado1;
// }
// const resultado1 = soma1(); // Mesmo não mandando um valor, minha função já possui valor e por conta disso não irá dar erro.
// console.log(resultado1);

// function soma2(x , y){ //minha função não tem valor
//     const resultado2 = x + y;
//     return resultado2;
// }
// const resultado2 = soma2(); //(x , y) E se eu não coloco um valor pra mandar de pra função o resultado vai ser NaN
// console.log(resultado2);
// console.log(soma(2,2)); os dois retorna pra função, porem com console ele me mostra
// soma(2,4);
// saudacao('Luiz'); // aqui estou chamando minha função chamada saudacao
// saudacao('Paulo'); // e adicionando luiz, paulo ou maria no meu parametro que recebe [nome]
// saudacao('Maria');

// como criar uma função anonima

// const raiz = function (n) {
//     return n ** 0.5;
// };
// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

// como criar uma arroz function
// const raiz = (n) => {
//     return n ** 0.5;
// };
//Forma simplicada
const raiz = n => n ** 0.5;
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
