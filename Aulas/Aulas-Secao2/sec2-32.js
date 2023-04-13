// eu não posso reutilizar uma variavel que entra dentro de const porém, eu posso mudar o conteudo dela numa array, posso colocar novos nomes e etc.
// const array = [1,2,3]; // não consigo usar o nome array em outro lugar por conta do const.
// array.push(4);
// array[0] = 'Luiz';
// console.log(array);
// array = 'putra'; vai dar erro por conta do const. Assignment to constant variable.

// const nome01 = 'Luiz'; // fazer dessa forma séria inviavel por isso é melhor usar um OBJETO
// const sobrenome01 = 'Miranda';
// const idade01 = 25;
// const nome02 = 'Sukiz';
// const sobrenome02 = 'Dirane';
// const idade02 = 45;
// [] array {} objeto
// ** ESSA FORMA  ⬇ E MELHOR QUE A ANTERIOR, PORÉM AINDA CONTINUA COM O MESMO PROBLEMA QUE É FICAR FAZER TENDO QUE CRIAR NOME, SOBRENOME E IDADE E TAL.
// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// ** AGORA UMA FUNCTION PARA REALIZAR O MESMO PROCEDIMENTO
                    //PARAMETRO ⬇ QUE RECEBE O ARGUMENTO
// function criaPessoa (nome, sobrenome, idade){
//     return{nome, sobrenome, idade};
        // nome: nome,
        // sobrenome: sobrenome,
        // idade: idade
    //};
//}

// PODE TIRAR
//                           ARGUMENTO ⬇ QUE IRA SER PASSADO PARA O PARAMETRO
// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
// const pessoa2 = criaPessoa('Henrique', 'Jeise', 55);
// const pessoa3 = criaPessoa('Paulo', 'Cuzunm', 35);
// const pessoa4 = criaPessoa('Marcos', 'Santos', 65);
// const pessoa5 = criaPessoa('Daniel', 'Silva', 15);
// console.log(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5);
// console.log('');
// console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade, pessoa4, pessoa5);


const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala (){ // função
        //console.log(`${this.nome} ${this.sobrenome} está falando oi....`); // this representa esse objeto pessoa1
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
