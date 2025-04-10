import FreteStrategy from "./FreteStrategy";

class FreteExpresso extends FreteStrategy {

    calcular(valor) {
        return valor + 20; // Mais rápido, porém mais caro
    }
    
}

export default FreteExpresso;