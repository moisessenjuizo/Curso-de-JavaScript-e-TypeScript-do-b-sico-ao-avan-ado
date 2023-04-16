const pessoa = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const {nome, ...resto} = pessoa;
console.log(resto);
console.log(nome);



// Atribuição via destruturaçãp
// const { nome: newNome = 'Não existe', sobrenome, idade } = pessoa; // extrai o nome do pessoa e já cria uma variavel aqui
// console.log(newNome, sobrenome, idade);

// nome: newNome = "Não existe" -> significa que o nome da variavel nome foi mudada pra newNome e tem um valor padrão chamado [não existe]

// const { endereco: {rua: r, numero: n}, endereco:end } = pessoa;
// console.log(r);
// console.log(n);
// console.log(end);
