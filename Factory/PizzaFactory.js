const PizzaCalabresa = require('./Calabresa');
const PizzaMussarela = require('./Mussarela');
const PizzaFrango = require('./Frango');

class PizzaFactory {

    static criarPizza(tipo) {
        switch(tipo) {
            case 'calabresa' : return new PizzaCalabresa();
            case 'mussarela' : return new PizzaMussarela();
            case 'frango' : return new PizzaFrango();
            default: throw new Error('Tipo de Pizza desconhecido');
        }
    }
}

module.exports = PizzaFactory;