// const nome = 'Luiz Otávio';
// const nomes = ['Luiz', 'Pereira', 'Santos'];

// for (let i = 0; i < nomes.length; i++){
//  console.log(nomes[i]);
// }

// console.log('#######################');

// for (let i in nomes){
//     console.log(nomes[i]);
// }

// console.log('############$$$$');

// for (let valor of nomes){
//     console.log(valor);
// }

// console.log('############$$$$');


// nomes.forEach(function(el, indice, array){
//     console.log(el, indice, array);
// });


const pessoa = {
    nome: 'luiz',
    sobrenome: 'Otavio'
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

// for (let valor of pessoa){ type error: pessoa is note iterable. pessoa é um objeto
// }


// For clássico - geralmente com iteráveis (array of string)
// for in - retorna o índice ou chave, (string, array ou objetos)
// for of - retorna o valor em si (iteraveis, array ou string)
