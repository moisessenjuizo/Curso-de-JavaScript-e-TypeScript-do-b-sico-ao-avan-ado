// GLOBAL -> 3 escopo
//ESCOPO LEXICO
function retornaFuncao(nome) { // 2 escopo
    return function () { //1 escopo
        return nome; // closure é a habilidade de acessar os seus scopos
    }
}

const funcao = retornaFuncao('Joao');
const funca2 = retornaFuncao('Paulo');
console.log(funcao);
console.dir(funca2);

console.log(funcao(), funca2());
