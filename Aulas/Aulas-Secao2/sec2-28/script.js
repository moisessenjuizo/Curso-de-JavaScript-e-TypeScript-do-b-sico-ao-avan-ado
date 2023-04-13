const numero = Number(prompt('Digite um número.'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
// const raiz = document.getElementById('raiz');
// const NumInteiro = document.getElementById('NumInteiro');
// const eNaN = document.getElementById('eNaN');
// const baixo = document.getElementById('baixo');
// const cima = document.getElementById('cima');
// const decimais = document.getElementById('decimais');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
// texto.innerHTML = `<p>O seu número é: ${numero}. </p>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5} </p>`;
texto.innerHTML += `<p> ${numero} é inteiro? ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>É NaN? ${isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p> `;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p> `;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p> `;







// raiz.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5} </p>`;
// NumInteiro.innerHTML = `<p> ${numero} é inteiro? ${Number.isInteger(numero)} </p>`;
// eNaN.innerHTML = `É NaN? ${isNaN(numero)}<br>`;
// baixo.innerHTML = `Arredondando para baixo: ${Math.floor(numero)} `;
// cima.innerHTML = `Arredondando para cima: ${Math.ceil(numero)} `;
// decimais.innerHTML = `Com duas casas decimais: ${numero.toFixed(2)} `;

// document.body.innerHTML += `<strong>O seu número é: ${num1}</strong><br>`;
// document.body.innerHTML += `Raiz quadrada: ${num1 ** 0.5}<br>`;
// document.body.innerHTML += `É NaN? ${isNaN(num1)}<br>`;
// document.body.innerHTML += `Arredondando para baixo:${Math.floor(num1)}<br>`;
// document.body.innerHTML += `Arredondando para cima: ${Math.ceil(num1)}<br>`;
// document.body.innerHTML += `Com duas casas decimais: ${num1}<br>`;
// let num1 = 55;
// let num2 = 'jose';
// let temp = num1 * num2;
