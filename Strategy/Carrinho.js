class Carrinho {

    constructor(valor, estrategia) {
        this.valor = valor;
        this.estrategia = estrategia;
    }

    calcularTotal() {
        return this.estrategia.calcular(this.valor);
    }

}

module.exports = Carrinho;