// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); //timestamp unix ou época unix

// const data = new Date(2019, 3, 21, 14, 20, 500); // a, m, d, h, M, s, ms
// const data = new Date(1681602729318);
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth()); // mes começa do zero
// console.log('ano', data.getFullYear());
// console.log('hora', data.getHours());
// console.log('min', data.getMinutes());
// console.log('sec', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('dia semana', data.getDay());// 0 - domingo, 6 - sábado
// console.log(data.toString());
// console.log(Date.now());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
