const FreteStrategy = require("./FreteStrategy");

class FreteNormal extends FreteStrategy {

    calcular(valor) {
        return valor + 10; // Taxa fixa
    }

}

module.exports = FreteNormal;