const FreteStrategy = require("./FreteStrategy");

class FreteGratuito extends FreteStrategy {
    
    calcular(valor) {
        return valor; // Sem taxa shoppe
    }

}

module.exports = FreteGratuito;