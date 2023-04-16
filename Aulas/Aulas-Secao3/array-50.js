// let a = 'A'; // b
// let b = 'B';// c
// let c = 'C'; // a

// const letras = [b, c, a];
// [a, b, c] = letras;
// console.log(a,b,c);


//               0  1  2  3  4  5  6  7  8  -> é o indice o valor da posição
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);




// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [um, dois, tres, ...resto] = numeros; // resto literalmente pega o resto
// console.log(um, dois, tres);
// console.log(resto);

// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [um, , tres, , cinto, , sete] = numeros;
// console.log(um, tres, cinto, sete);


// const numeros = [
//     [1, 2, 3], // indice 0 e dentro tenho 0, 1, 2
//     [4, 5, 6], // indice 1 e dentro tenho 0, 1, 2
//     [7, 8, 9] // indice 2 e dentro tenho 0, 1, 2
// ];
// console.log(numeros[1][2]); // indice 1 e indice 2
// const [,[,,seis]] = numeros; // a primeira virgula pula o indice 0 e o ,, pula indice 0[4] e indice 1[5] e pega o indice 2[6]
// console.log(seis);

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]); // E ainda posso escolher o indice
