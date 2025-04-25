const PagamentoExterno = require('./PagamentoExterno');
const IPagamentos = require('./IPagamento');

class PagamentoAdapter extends IPagamentos {
    constructor() {
        super();
        this.PagamentoExterno = new PagamentoExterno();
    }

    pagar(valor) {
        this.PagamentoExterno.realizarPagamento(valor);
    }
}

module.exports = PagamentoAdapter;
