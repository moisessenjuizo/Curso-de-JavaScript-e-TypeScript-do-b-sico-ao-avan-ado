/*
PRIMEIRO PASSO:
Criar um const form = document.querySelector('#formulario');

SEGUNDO PASSO:
NÃO DEIXAR A PÁGINA SE REINICAR AO CLICAR
BUTÃO.

[e] é o parametro.
VARIAVEL.addEventListener('submit', function(e)){
    e.preventDefault(); // cancela um evento

    TERCEIRO PASSO:
    CRIAR DUAS VARIAVEIS PUXANDO VALUE DO PESO E ALTURA
    const variavelPeso = e.target.querySelector('#ID');
    const variavelAltura = e.target.querySelector('#ID');

    QUARTO PASSO:
    CRIAR DUAS VARIAVEIS QUE RECEBE OS DADOS DA CONST VARIAVELPESO E VARIAVELALTURA
    E SEMPRE COLOCAR .value por conta que  você quer receber o valor
    const variavelPesoRecebe   = Number(variavelPeso.value);
    const variavelAlturaRecebe  = Number(variavelAltura.value);

    QUINTO PASSO:
    CRIAR UMA CONDICIONAL IF PARA VERIFICAR SE FOI DIGITADO NÚMERO, E SE FOI DIGITADO UMA STRING IRÁ DAR RESULTADO FALSO.
    if (!peso){ // ! é um componente lógico que inverte true pra falso um exemplo disso é que peso = true -> !true = false

    }

}



*/
