const Pizza = require('./Pizza');

class PizzaMussarela extends Pizza {
    preparar() {
        console.log('Preparando pizza de Mussarela.');
    }
}

module.exports = PizzaMussarela;