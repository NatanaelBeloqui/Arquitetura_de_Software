import FreteStrategy from "./FreteStrategy";

class FreteGratuito extends FreteStrategy {
    
    calcular(valor) {
        return valor; // Sem taxa shoppe
    }

}

export default FreteGratuito;