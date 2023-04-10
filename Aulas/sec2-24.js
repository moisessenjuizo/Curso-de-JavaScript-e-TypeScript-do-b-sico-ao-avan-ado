// **
//let umaString = 'um texto';
// let umaString = "uma \"texto\"";
// let umaString = "uma \\texto";
let umaString = 'um texto';
// console.log(umaString[7]); // começa por 01234567 e eu posso escolher qual posição puxar ex: 7 é [o]
// console.log(umaString.charAt(5)); // faz a mesma cois que o []
// console.log(umaString.concat(' em', ' um', ' lindo dia.')); // dessa forma você está concatenando
// console.log(umaString + ' em um lindo dia safado.'); // pode fazer dessa forma tbm a concatenação
// console.log(`${umaString} em um good day`); // E essa é a melhor forma.
// ***se eu querer saber qual é o indice que começa a palavra
// console.log(umaString.indexOf('texto')); // a palavra texto começa no indice 3.
// console.log(umaString.indexOf('o', 3)); // procura a letra [o] a partir do indice 3 e acha ele que no caso era 7.
// console.log(umaString.lastIndexOf('o', 3)); // não acha nenhum [O] pq ele começa por ultimo e o [O] é o 7. resultado -1
// console.log(umaString.lastIndexOf('m', 3)); // nesse caso ele acha o [M] como index 1 ´[um texto] 01234567
// console.log(umaString.match(/[a-z]/g)); // expressoes regulares
// console.log(umaString.search(/x/)); // Ele é parecido com o indexof, porém ele aceita expressoes regulares.
// console.log(umaString.replace('um', 'Pega no meu pau'));
// console.log(umaString.replace(/um/, 'Pega no meu pau')); // dessa forma com expressão regular
// console.log(umaString.length); // para saber o tamanho da string que foi 8 caracteres
// console.log(umaString.slice(3, 8));
// console.log(umaString.slice(-5)); // do fim pro começo.
// console.log(umaString.substring(umaString.length -5)); // forma ruim, grande demais
// console.log(umaString.split('t')); // está tirando o [T] da string.
// console.log(umaString.toUpperCase()); // transforma a string em uppercase
// console.log(umaString.toLowerCase()); // deixa em letras minusculas
