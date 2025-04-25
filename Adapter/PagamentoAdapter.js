const PagamentoExterno = require('./PagamentoExterno');
const IPagamentos = require('./IPagamentos');

class PagamentoAdapter extends IPagamentos{
    constructor(){
        super();
        this.pagamentoExterno = new PagamentoExterno();
    }

    pagar(valor){
        this.pagamentoExterno.realizarPagamento(valor);
    }
}
module.exports = PagamentoAdapter;