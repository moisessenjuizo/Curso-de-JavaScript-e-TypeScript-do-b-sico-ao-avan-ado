/*
Escreva uma função chamda ePaisagem que receba dois argumentos, largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
*/

// function ePaisagem(largura, altura) {
//     return largura >= altura ? true : false;
// }

// console.log(ePaisagem(1920, 1080)); // 1920 por 1080


const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080)); // 1920 por 1080
