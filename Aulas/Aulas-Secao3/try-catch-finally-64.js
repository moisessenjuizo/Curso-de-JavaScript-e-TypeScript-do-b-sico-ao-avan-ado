// try{
//  // Executada quando não há erros
//  //console.log(a);
//  console.log('abri um arquivo');
//  console.log('manipulei o arquivo e gerou erro.');
//  console.log('Fechei o arquivo.');

//     try {
//         console.log(b);
//     } catch (e) {
//         console.log('deu erro. PAPAI');
//     } finally {
//         console.log('tbm sou FINALLY');
//     }

// } catch (e){
//  // E executada quando há erros.
//  console.log('tratando o erro.');
// } finally {
//     //irá sempre ser executado. porém ele está sendo ocultado normalmente
//     console.log('FINALLY: Eu sempre sou executado.');
// }

function retornaHora(data) {
    if (data &&  !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('04-14-1997 23:45:14');
    const hora = retornaHora(data);
    console.log(hora);
} catch(e){
    //tratar erro
    //console.log(e);
} finally{
    console.log('Tenha um bom dia!');
}
