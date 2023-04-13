/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25
Luiz nasceu em 92
*/

const nome = "Luiz";
const sobrenome = "Miranda"
const idade = 30;
const peso = 84;
const alturaEmCm = 1.80;
let indiceMassaCorporal;// peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm)
anoNascimento = 2023 - idade;



console.log(nome, sobrenome, 'tem', idade,'anos, pesa', peso + ' kg');
console.log('tem', alturaEmCm, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento+'.');

// com template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome}, nasceu em, ${anoNascimento}.`);
