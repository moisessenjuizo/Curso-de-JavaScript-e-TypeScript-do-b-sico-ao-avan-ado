/**
** Primitivos (imutáveis) - String, number, boolean, undefined, null
** SÃO VALORES COPIADOS
*/
// Exemplo que a string é IMUTÁVEL
// let nome = 'Luiz';
// nome[0] = 'R'; // se fosse na array iria mudar pra [Ruiz]
// console.log(nome[0]); // Resultado é L de Luiz é não R

// let a = 'A';
// let b = a; //Cópia
// console.log(a, b);

// a = 'outra coisa';
// console.log(a, b);

// ** REFERÊNCIA (MUTÁVEL) - ARRAY, OBJECT, FUNCTION - SÃO PASSADOS POR REFERÊNCIA.
// ** OS DOIS REFERENCIAM O MESMO VALOR NA MEMORIA POR ISSO QUE SE VOCÊ MUDAR UM, VOCÊ ACABA MUDANDO O OUTRO.
let a = [1, 2, 3];
let b = a;
let c = b; // VOU TER MAIS UMA VÁRIAVEL APONTANDO PRA MINHA MEMORIA QUE NO CASO SERIA [A]
console.log(a, b);
// [ 1, 2, 3 ] [ 1, 2, 3 ]
a.push(4);
console.log(a, b);
// [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ] MESMO EU SÓ TENDO ADICIONADO UM NÚMERO NO [A]
b.push(5);
console.log(a, b);
//[ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] AQUI A MESMA COISA, MESMO EU SÓ TENDO ADICIONADO UM VALOR NO [B], O [A] COPIOU O [B].
console.log(c);
c.push(6);
console.log(c,b,a);
//[ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ]
