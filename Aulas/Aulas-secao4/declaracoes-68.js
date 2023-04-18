// Declaração de função (function hoisting)
falaOi(); // chamando uma função
function falaOi(){
    console.log('Oie');
}


// As funções são First-Class objects, você pode tratar as funções como dados
// function expression
// função anonima, isso significa que ela não tem nome e ela faz parte de uma variavel. que no caso seria [souUmDado]
const souUmDado = function(){
    console.log('Sou um dado.');
};
souUmDado();
// Por exemplo essa função já tem um nome que seria executaFuncao
function executaFuncao(funcao) {
    console.log('Vou executar sua função');
    funcao();
}
executaFuncao(souUmDado);


// Arroz function seria uma declaração de função

const funcaoArroz = () => {
    console.log('Sou uma arroz function');
};
funcaoArroz();

// dentro de um objeto

const obj = {
    falar: function() {
        console.log('Uma função como metodo de um objeto. METODO ANTIGO');
    }
};
obj.falar();

const obj1 = {
    falar() { // TIROU : function
        console.log('Uma função como metodo de um objeto. METODO NOVO');
    }
};
obj1.falar();
