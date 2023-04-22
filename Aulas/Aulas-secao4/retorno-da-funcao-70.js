// // return -> retorna um valor e termina a função

// function soma(a , b) { // essa função tem return e por isso ela retorna
//     return a + b;

// }
// console.log(soma(2, 5));

// function soma2(a , b) { // Ela até retorna, porém se for algo mais complexo pode dar erro.
//     console.log(a +  b);

// }

// soma2(5, 2)

// document.addEventListener('click', function(){ // essa é uma função que não retorna nada, porém ela pode ser útil de váraias formas.
//     document.body.style.backgroundColor = 'red';
// // essa função faz: se eu clicar em algum lugar fica vermelho
// });

// function criaPessoa(nome, sobrenome) {
//     return {nome, sobrenome, lastName: 'Pedeosa'};
// }

// const p1 = criaPessoa('Luiz', 'Otavio');
// const p2 = {
//     nome: 'Joao',
//     sobrenome: 'Oliveira'
// };

// console.log(p1);
// console.log(p2);

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const olaMundo = falaFrase('Olá');
// console.log(olaMundo('mundo!'));

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));
