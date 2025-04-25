const PagamentoAdapter = require('./PagamentoAdapter');

// O sistemas só conhece a interface o .pagar()
const pagamentos = new PagamentoAdapter();

// Usa internamente a nova API
pagamentos.pagar(150);