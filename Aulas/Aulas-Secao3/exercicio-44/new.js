/*
PRIMEIRO PASSO:
Criar um const form = document.querySelector('#formulario');

SEGUNDO PASSO:
NÃO DEIXAR A PÁGINA SE REINICAR AO CLICAR
BUTÃO.

[e] é o parametro.
VARIAVEL.addEventListener('submit', function(e)){
    e.preventDefault(); // cancela um evento
}
TERCEIRO PASSO:
CRIAR DUAS VARIAVEIS PUXANDO VALUE DO PESO E ALTURA
const variavelPeso = e.target.querySelector('#ID');
const variavelAltura = e.target.querySelector('#ID');

const variavelPesoRecebe   = Number(variavelPeso.value);
const variavelAlturaRecebe  = Number(variavelAltura.value);
*/
