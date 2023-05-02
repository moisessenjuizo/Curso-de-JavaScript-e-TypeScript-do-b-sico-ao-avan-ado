//Factory Function
// Constructor function

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function (assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,
        // Getter -> fez a function virar atributo
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.80, 80);
const p2 = criaPessoa('Saulo', 'Otavio', 1.50, 40);
const p3 = criaPessoa('Gustav', 'Otavio', 1.89, 70);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);








// p1.nomeCompleto = 'Maria Oliveira silva';
// console.log(p1.fala());
// console.log(p1.nomeCompleto); //console.log(p1.nomeCompleto());
// console.log(p1.nome + ' ' + p1.sobrenome); FORMA TRABALHOSA


