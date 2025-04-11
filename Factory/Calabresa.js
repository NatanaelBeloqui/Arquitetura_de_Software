const Pizza = require('./Pizza');

class PizzaCalabresa extends Pizza {
    preparar() {
        console.log('Preparando pizza de Calabresa');
    }
}

module.exports = PizzaCalabresa;