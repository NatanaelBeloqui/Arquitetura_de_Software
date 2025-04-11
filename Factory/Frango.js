const Pizza = require('./Pizza');

class PizzaFrango extends Pizza {
    preparar() {
        console.log('Preparando pizza de Frango.');
    }
}

module.exports = PizzaFrango;