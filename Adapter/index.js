const PagamentoAdapter = require('./PagamentoAdapter');

// O sistemas so conhece a interface com o .pagar()
const pagamentos = new PagamentoAdapter();

// Usa internamente a nova API
pagamentos.pagar(150);