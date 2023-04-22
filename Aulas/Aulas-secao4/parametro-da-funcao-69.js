// function funcao() {
//     console.log('Oie');
//     console.log(arguments);
//     console.log(arguments[1]);
// }
// function funcao(a, b, c, d, e, f) {
// console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3, 4);

// function funcao(a, b) ->MANDEIRA ANTIGA
//     b = b || 2;
//   console.log(a + b);
// }
// funcao(2);


// function funcao(a, b = 2, c = 4) {
//   console.log(a + b + c );
// }
// funcao(2, undefined, 20); // 2 vai no a // 10 entra no lugar do b

// function funcao({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
//   }
//   funcao({nome: 'Luiz', sobrenome: 'Otavio', idade:20});

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
//   }
// funcao(['Luiz otavio', 'miranda', 30]);


// function conta(operador, acumulador, ...numeros) { // ... é um rest operator
//     //console.log(operador, acumulador, numeros);
//     for(let numero of numeros) {
//         if(operador === '+') acumulador += numero;
//         if(operador === '-') acumulador -= numero;
//         if(operador === '/') acumulador /= numero;
//         if(operador === '*') acumulador *= numero;
//     }
//     console.log(acumulador);
// }
// conta('+', 0, 20, 30, 40, 50);

// const conta = function(operador, acumulador, ...numeros) { // ... é um rest operator
//     //console.log(operador, acumulador, numeros); // function expression
//     for(let numero of numeros) {
//         if(operador === '+') acumulador += numero;
//         if(operador === '-') acumulador -= numero;
//         if(operador === '/') acumulador /= numero;
//         if(operador === '*') acumulador *= numero;
//     }
//     console.log(acumulador);
// };

// conta('+', 0, 20, 30, 40, 50);

// const conta = function(operador, acumulador, ...numeros) {
//     console.log(arguments);
// };
// conta('+', 0, 20, 30, 40, 50);

// const conta = (operador, acumulador, ...numeros) => { // arroz function
//     console.log(arguments);
// };
// conta('+', 0, 20, 30, 40, 50);

const conta = (...args) => { // arroz function usando rest operator e argumento.
    console.log(args);
};
conta('+', 0, 20, 30, 40, 50);
