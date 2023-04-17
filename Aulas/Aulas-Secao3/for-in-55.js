//For in -> Lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};


for (let chave in pessoa){
    console.log(chave);
}

for (let chave1 in pessoa){
    console.log(pessoa[chave1]);
}











// console.log(pessoa.nome);
// console.log(pessoa['nome']);



// const frutas = ['Pera', 'Maça', 'Uva'];

// for (let index in frutas){
//     console.log(index);
// }

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }
