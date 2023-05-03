// função construtora - > objetos
// função fabrica -> objetos // camelCase
// Construtora --> Pessoa (new) // Camelcase

function Pessoa(nome, sobrenome) {
    // atributos Privados
    const ID = 123456;

    const metodoInterno = function() {

    };

    // atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome +', Sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Gay', 'LOL');


console.log(p2.nome);
p1.metodo();
