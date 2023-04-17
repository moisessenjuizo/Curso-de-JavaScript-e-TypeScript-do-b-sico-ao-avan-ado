const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//for (let numero of numeros){
//for (let i in numeros){
// for (let i = 0; i < numeros.length; i++){
//     let numero = numeros[i];

//     if (numero === 2){
//         console.log('Pulei o número 2');
//         continue;
//     }

//     if (numero === 7){
//         console.log('7 encontado, saindo...');
//         break;
//     }

//     console.log(numero);
// }
// let i = 0;
// while (i < numeros.length){
//     let numero = numeros[i];

//     if (numero === 2){
//         console.log('Pulei o número 2');
//     i++;

//         continue;
//     }

//     if (numero === 7){
//         console.log('7 encontado, saindo...');
//     i++;

//         break;
//     }

//     console.log(numero);
//     i++;
// }
let i = 0;

do {
    let numero = numeros[i];

    if (numero === 2){
        console.log('Pulei o número 2');
    i++;

        continue;
    }

    if (numero === 7){
        console.log('7 encontado, saindo...');
    i++;

        break;
    }

    console.log(numero);
    i++;
} while (i < numeros.length);


// Continue continua para próxima iteração
// break sai do laço
