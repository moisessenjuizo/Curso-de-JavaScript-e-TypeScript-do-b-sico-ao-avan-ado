// nomes.splice(indice atual, delete, elem1, elem2, elem3);
//               -5      -4        -3          -2        -1
//                0       1         2          3         4
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Julia"];
nomes.splice(0, 0, "Luiz"); // unshift -> começa no indice 0
console.log(nomes);
// nomes.splice(nomes.length, 0, "Luiz"); // push vai pro final
// console.log(nomes, removidos);
// pop
// const removidos = nomes.splice(3, 2, "Luiz", "Otávio");
// const removidos = nomes.splice(0, 1); // simulando o shift
