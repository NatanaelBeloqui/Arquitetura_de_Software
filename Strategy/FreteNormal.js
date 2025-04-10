import FreteStrategy from "./FreteStrategy";

class FreteNormal extends FreteStrategy {

    calcular(valor) {
        return valor + 10; // Taxa fixa
    }

}

export default FreteNormal;