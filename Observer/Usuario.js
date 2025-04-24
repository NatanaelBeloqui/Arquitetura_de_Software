class Ususario {
    constructor (nome) {
        this.nome = nome;
    }

    update(conteudo) {
        console.log(`${this.nome}, novo conteúdo disponível: ${conteudo}`);
    }
}

module.exports = Ususario;
