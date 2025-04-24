class Canal {
    constructor() {
        this.obsrevadores = []; // lista dos inscritos
    }

    inscrever(usuario) {
        this.obsrevadores.push(usuario);
    }

    desinscreve(usuario) {
        this.obsrevadores.filter((obs) => obs !== usuario);
    }

    notificar(conteudo) {
        this.obsrevadores.forEach((obs) => obs.update(conteudo));
    }

    publicar(conteudo) {
        console.log(`Novo conteúdo publicado: ${conteudo}`);
        this.notificar(conteudo);
    }

}

module.exports = Canal;